---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das einen Hinweis auf die Art der Daten gibt, die der Benutzer beim Bearbeiten des Elements oder seiner Inhalte eingeben könnte. Dies ermöglicht es einem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Modus genutzt werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Anforderungen für die Gültigkeit der Eingaben erzwingt. Um sicherzustellen, dass Eingaben einem bestimmten Datentyp entsprechen, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Element/input#input_types)-Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen lesen Sie den Abschnitt [Values](#werte).

## Werte

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standardtastatur für die aktuelle Spracheinstellung des Benutzers.
- `decimal`
  - : Tastatur für das Eingeben von gebrochener numerischer Eingabe, die Ziffern und Dezimaltrennzeichen für die Spracheinstellung des Benutzers enthält (normalerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte zeigen möglicherweise einen Minusschlüssel (<kbd>-</kbd>) an oder nicht.
- `numeric`
  - : Numerische Eingabetastatur, erfordert jedoch nur die Ziffern 0–9.
    Geräte zeigen möglicherweise einen Minusschlüssel an oder nicht.
- `tel`
  - : Eine Telefontastatur, einschließlich der Ziffern 0–9, des Sternchens (<kbd>\*</kbd>) und des Rautezeichens (<kbd>#</kbd>).
    Eingaben, die _eine_ Telefonnummer erfordern, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise kann die [Eingabe-/Absenden-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) als "Suche" beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _eine_ Suchanfrage erfordern, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Normalerweise enthält sie das <kbd>@</kbd>-Zeichen sowie andere Optimierungen.
    Eingaben, die _E-Mail-Adressen_ erfordern, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann zum Beispiel die <kbd>/</kbd>-Taste prominenter darstellen.
    Erweiterte Funktionen könnten den Zugriff auf den Verlauf einschließen usw.
    Eingaben, die _eine_ URL erfordern, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
