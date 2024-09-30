---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das einen Hinweis auf den Datentyp gibt, der vom Benutzer beim Bearbeiten des Elements oder dessen Inhalte eingegeben werden könnte.
Dies ermöglicht es einem Browser, eine passende virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Modus genutzt werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen für die Eingabe durchsetzt. Um zu verlangen, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Element/input#input_types) Elementtyp. Für spezifische Hinweise zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Werte](#werte).

## Werte

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite ihre eigene Steuerung zur Tastatureingabe implementiert.
- `text` (Standardwert)
  - : Standard-Tastatur für die aktuelle Lokalisierung des Benutzers.
- `decimal`
  - : Numerische Tastatur für Bruchzahlen, die die Ziffern und das Dezimaltrennzeichen der Benutzerlokalisierung enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte zeigen möglicherweise eine Minustaste (<kbd>-</kbd>) an oder auch nicht.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte zeigen möglicherweise eine Minustaste an oder auch nicht.
- `tel`
  - : Eingabetastatur für Telefonnummern, einschließlich der Ziffern 0–9, dem Stern (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>) Taste.
    Eingaben, die _erforderlich_ eine Telefonnummer benötigen, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` stattdessen verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise könnte die [Return/Eingabetaste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suche" beschriftet sein, zusammen mit möglichen anderen Optimierungen.
    Eingaben, die _erforderlich_ eine Suchanfrage benötigen, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` stattdessen verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Sie enthält typischerweise das Zeichen <kbd>@</kbd> sowie andere Optimierungen.
    Eingaben, die _erforderlich_ E-Mail-Adressen benötigen, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` stattdessen verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese könnte beispielsweise die Taste <kbd>/</kbd> prominenter darstellen.
    Erweiterte Funktionen könnten den Zugriff auf Verlauf usw. beinhalten.
    Eingaben, die _erforderlich_ eine URL benötigen, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` stattdessen verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
