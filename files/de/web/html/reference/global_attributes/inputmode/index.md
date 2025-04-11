---
title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das einen Hinweis auf den Datentyp gibt, den der Benutzer möglicherweise eingibt, während er das Element oder dessen Inhalt bearbeitet. Dies ermöglicht es einem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, ist aber auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus nutzbar.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Anforderungen an die Gültigkeit der Eingaben durchsetzt. Um sicherzustellen, dass Eingaben einem bestimmten Datentyp entsprechen, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Reference/Elements/input#input_types)-Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Werte](#werte).

## Werte

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite ihre eigene Steuerung der Tastatureingaben implementiert.
- `text` (Standardwert)
  - : Standard-Eingabetastatur für die aktuelle Locale des Benutzers.
- `decimal`
  - : Bruchzahl-Eingabetastatur, die die Ziffern und Dezimaltrennzeichen für die Locale des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können möglicherweise eine Minustaste (<kbd>-</kbd>) anzeigen oder nicht.
- `numeric`
  - : Numerische Eingabetastatur, erfordert jedoch nur die Ziffern 0–9.
    Geräte können möglicherweise eine Minustaste anzeigen oder nicht.
- `tel`
  - : Eine Telefontastatur-Eingabe, einschließlich der Ziffern 0–9, des Sternchens (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>)-Taste.
    Eingaben, die _eine_ Telefonnummer _erfordern_, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` anstelle verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheinträge optimiert ist.
    Beispielsweise könnte die [Return/Submit-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suche" beschriftet sein, zusammen mit möglichen anderen Optimierungen.
    Eingaben, die _eine_ Suchanfrage _erfordern_, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` anstelle verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Üblicherweise enthält sie das Zeichen <kbd>@</kbd> sowie andere Optimierungen.
    Eingaben, die _eine_ E-Mail-Adresse _erfordern_, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` anstelle verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese könnte zum Beispiel die <kbd>/</kbd>-Taste prominenter positioniert haben.
    Erweiterte Funktionen könnten den Zugang zum Verlauf und so weiter umfassen.
    Eingaben, die _eine_ URL _erfordern_, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` anstelle verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
