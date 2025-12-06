"use client";

import { Globe } from "lucide-react";
import type { Language } from "@/lib/translations";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";

interface LanguageToggleProps {
    currentLanguage: Language;
    onChange: (language: Language) => void;
}

export function LanguageToggle({
    currentLanguage,
    onChange,
}: LanguageToggleProps) {
    const languages: Array<{
        value: Language;
        short: string;
        label: string;
    }> = [
        { value: "en", short: "EN", label: "English" },
        { value: "fr", short: "FR", label: "Français" },
        { value: "ar", short: "AR", label: "العربية" },
    ];

    const selected = languages.find((lang) => lang.value === currentLanguage);

    return (
        <Select
            value={currentLanguage}
            onValueChange={(value) => onChange(value as Language)}
        >
            <SelectTrigger
                size="sm"
                className="bg-transparent min-w-[130px] gap-2"
                aria-label="Select language"
            >
                <Globe className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                    <span className="font-semibold">
                        {selected?.short ?? currentLanguage.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {selected?.label ?? "Language"}
                    </span>
                </div>
            </SelectTrigger>
            <SelectContent align="end">
                {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                        <span className="font-medium">{lang.short}</span>
                        <span className="text-xs text-muted-foreground">
                            {lang.label}
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
