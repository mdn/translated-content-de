---
title: HTML inputmode globales Attribut
short-title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das einen Hinweis darauf gibt, welche Art von Daten der Benutzer eingeben könnte, während er das Element oder dessen Inhalt bearbeitet. Dies ermöglicht es dem Browser, eine passende virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}} Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Modus eingesetzt werden.

Es ist wichtig zu verstehen, dass das `inputmode` Attribut keine Gültigkeitsanforderungen für Eingaben erzwingt. Um zu erfordern, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Reference/Elements/input#input_types) Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}} Typen siehe den Abschnitt [Werte](#werte).

## Werte

Das Attribut kann einen der folgenden Werte annehmen:

- `none`
  - : Keine virtuelle Tastatur.
    Für Fälle, in denen die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Tastaturlayout für die aktuelle Locale des Nutzers.
- `decimal`
  - : Tastatur für dezimale numerische Eingaben, die die Ziffern und das Dezimaltrennzeichen für die Locale des Nutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können möglicherweise eine Minustaste (<kbd>-</kbd>) anzeigen.
- `numeric`
  - : Numerische Tastatur, erfordert jedoch nur die Ziffern 0–9.
    Geräte können möglicherweise eine Minustaste anzeigen.
- `tel`
  - : Eine Telefontastenfeld-Eingabe, einschließlich der Ziffern 0–9, dem Sternchen (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>) Taste.
    Eingaben, die _erforderlich_ eine Telefonnummer benötigen, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` stattdessen verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise könnte die [Eingabetaste/einreichen Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suchen" beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _erforderlich_ eine Suchanfrage benötigen, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` stattdessen verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Typischerweise beinhaltet sie das <kbd>@</kbd> Zeichen sowie andere Optimierungen.
    Eingaben, die _erforderlich_ E-Mail-Adressen benötigen, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` stattdessen verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese könnte z.B. die <kbd>/</kbd> Taste prominenter darstellen.
    Erweiterte Funktionen könnten den Zugriff auf den Verlauf enthalten und so weiter.
    Eingaben, die _erforderlich_ eine URL benötigen, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` stattdessen verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Das [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) globale Attribut
