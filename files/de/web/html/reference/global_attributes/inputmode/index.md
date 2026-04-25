---
title: "`inputmode` HTML-Globalattribut"
short-title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`inputmode`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das einen Hinweis auf die Art der Daten gibt, die der Benutzer möglicherweise beim Bearbeiten des Elements oder seines Inhalts eingibt. Dies ermöglicht es dem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich auf {{HTMLElement("input")}}-Elementen verwendet, kann jedoch auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendet werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen für die Eingabe erzwingt. Um sicherzustellen, dass Eingaben einem bestimmten Datentyp entsprechen, sollte ein entsprechender [`<input>`](/de/docs/Web/HTML/Reference/Elements/input#input_types) Elementtyp gewählt werden. Für spezifische Leitlinien zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Wert](#wert).

## Wert

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite eine eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Tastatur für die Eingabe im aktuellen Gebietsschema des Benutzers.
- `decimal`
  - : Tastatur für die Eingabe von Bruchzahlen, die die Ziffern und das Dezimaltrennzeichen für das Gebietsschema des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können möglicherweise einen Minustaste (<kbd>-</kbd>) anzeigen oder nicht.
- `numeric`
  - : Tastatur für die numerische Eingabe, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise einen Minustaste anzeigen oder nicht.
- `tel`
  - : Eine Telefontastatur-Eingabe, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>) und die Raute-Taste (<kbd>#</kbd>) enthält.
    Eingaben, die _eine_ Telefonnummer erfordern, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` anstelle verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise könnte die [Enter-/Senden-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit „Suche“ beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _eine_ Suchanfrage erfordern, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` anstelle verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Enthält typischerweise das <kbd>@</kbd>-Zeichen sowie andere Optimierungen.
    Eingaben, die _eine_ E-Mail-Adresse erfordern, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` anstelle verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann beispielsweise das <kbd>/</kbd>-Zeichen prominenter haben.
    Erweiterte Funktionen könnten den Zugriff auf den Verlauf einschließen usw.
    Eingaben, die _eine_ URL erfordern, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` anstelle verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
