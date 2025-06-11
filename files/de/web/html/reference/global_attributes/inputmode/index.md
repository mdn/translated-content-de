---
title: HTML inputmode globales Attribut
short-title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das auf den Datentyp hinweist, der vom Benutzer während der Bearbeitung des Elements oder seiner Inhalte eingegeben werden könnte. Dies ermöglicht es einem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendet werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen zur Eingabe erzwingt. Um sicherzustellen, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen siehe den [Werte](#wert)-Abschnitt.

## Wert

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Eingabetastatur für die aktuelle Spracheinstellung des Benutzers.
- `decimal`
  - : Dezimalzahlen-Eingabetastatur, die die Ziffern und das Dezimaltrennzeichen für die Spracheinstellung des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte zeigen möglicherweise oder möglicherweise keinen Minusschlüssel (<kbd>-</kbd>).
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte zeigen möglicherweise oder möglicherweise keinen Minusschlüssel.
- `tel`
  - : Eine Telefon-Tastatureingabe, einschließlich der Ziffern 0–9, des Sternchens (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>)-Taste.
    Eingaben, die _zwingend_ eine Telefonnummer benötigen, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für die Suche optimiert ist.
    Beispielsweise könnte die [Eingabetaste/Sendetaste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suche" beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _zwingend_ eine Suchanfrage benötigen, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für das Eingeben von E-Mail-Adressen optimiert ist.
    Typischerweise enthält diese das <kbd>@</kbd>-Zeichen sowie weitere Optimierungen.
    Eingaben, die _zwingend_ E-Mail-Adressen benötigen, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` verwenden.
- `url`
  - : Ein Tastenfeld, das für die Eingabe von URLs optimiert ist.
    Möglicherweise ist der <kbd>/</kbd>-Schlüssel beispielsweise prominenter.
    Verbesserte Funktionen könnten den Zugriff auf den Verlauf und so weiter beinhalten.
    Eingaben, die _zwingend_ eine URL benötigen, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
