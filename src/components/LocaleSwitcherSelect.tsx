"use client";

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

const flagMap: Record<string, string> = {
  en: "🇺🇸",
  "pt-BR": "🇧🇷",
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  const currentFlag = flagMap[defaultValue] || "🌐";

  return (
    <div className="relative w-16">
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "group relative flex items-center justify-center gap-2 px-3 py-2 rounded border border-secondary/30 bg-dark-bg/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary/60 hover:bg-dark-bg/70 focus:outline-none focus:ring-2 focus:ring-secondary/50 w-full",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <span className="text-lg leading-none flex-shrink-0">
            {currentFlag}
          </span>
          <Select.Icon className="text-secondary transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0">
            <ChevronDownIcon className="h-4 w-4" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            align="end"
            className="w-40 overflow-hidden rounded border border-secondary/30 bg-dark-bg/95 backdrop-blur-sm py-1 shadow-lg neon-border z-[9999]"
            position="popper"
            sideOffset={8}
            avoidCollisions={true}
            collisionPadding={8}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
            }}
          >
            <Select.Viewport className="p-1">
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className="flex cursor-default items-center gap-3 px-3 py-2 text-sm transition-colors duration-200 data-[highlighted]:bg-secondary/20 data-[highlighted]:text-secondary focus:outline-none rounded"
                  value={item.value}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-base leading-none flex-shrink-0">
                      {flagMap[item.value] || "🌐"}
                    </span>
                    <span className="text-foreground/90 font-medium truncate">
                      {item.label}
                    </span>
                  </div>
                  {item.value === defaultValue && (
                    <CheckIcon className="h-4 w-4 text-secondary flex-shrink-0" />
                  )}
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className="fill-dark-bg/95 text-dark-bg/95" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
