---
title: HTML inputmode globales Attribut
short-title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das einen Hinweis auf die Art der Daten gibt, die der Benutzer beim Bearbeiten des Elements oder seiner Inhalte eingeben könnte. Dies ermöglicht es einem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Modus genutzt werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen für die Eingabe erzwingt. Um sicherzustellen, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Wert](#wert).

## Wert

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite eine eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Eingabetastatur für die aktuelle Benutzerlokalität.
- `decimal`
  - : Dezimale numerische Eingabetastatur, die die Ziffern und das Dezimaltrennzeichen der Benutzerlokalität enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können möglicherweise ein Minustastensymbol (<kbd>-</kbd>) anzeigen oder nicht.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise ein Minustastensymbol anzeigen oder nicht.
- `tel`
  - : Eine Telefonwahltastatur, einschließlich der Ziffern 0–9, des Sternchens (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>)-Taste.
    Eingaben, die _erforderlich_ eine Telefonnummer benötigen, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` anstelle davon verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Zum Beispiel kann die [Return/Submit-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) als "Search" beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _erforderlich_ eine Suchanfrage benötigen, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` anstelle davon verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    In der Regel beinhaltet sie das <kbd>@</kbd>-Zeichen sowie andere Optimierungen.
    Eingaben, die _erforderlich_ E-Mail-Adressen benötigen, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` anstelle davon verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann beispielsweise die <kbd>/</kbd>-Taste prominenter haben.
    Erweiterte Funktionen könnten den Zugriff auf den Verlauf beinhalten und dergleichen.
    Eingaben, die _erforderlich_ eine URL benötigen, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` anstelle davon verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) globales Attribut
