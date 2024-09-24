---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das auf die Art der Daten hinweist, die der Benutzer beim Bearbeiten des Elements oder seines Inhalts eingeben könnte.
Dies ermöglicht es einem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Es wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, ist aber auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Modus verwendbar.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen an die Eingabe stellt. Um zu verlangen, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Element/input#input_types)-Elementtyp. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Werte](#werte).

## Werte

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Eingabetastatur für die aktuelle Lokalisierung des Benutzers.
- `decimal`
  - : Dezimale numerische Eingabetastatur mit Ziffern und Dezimaltrennzeichen für die Lokalisierung des Benutzers (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können ein Minuszeichen (<kbd>-</kbd>) anzeigen oder nicht.
- `numeric`
  - : Numerische Eingabetastatur, aber nur die Ziffern 0–9 sind erforderlich.
    Geräte können ein Minuszeichen anzeigen oder nicht.
- `tel`
  - : Eine Telefontastatur-Eingabe, einschließlich der Ziffern 0–9, des Asterisks (<kbd>\*</kbd>) und der Raute (<kbd>#</kbd>).
    Eingaben, die _eine_ Telefonnummer _erfordern_, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` verwenden.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise könnte die [Return-/Submit-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Search" bezeichnet sein, neben möglichen weiteren Optimierungen.
    Eingaben, die _eine_ Suchanfrage _erfordern_, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` verwenden.
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Typischerweise enthält sie das <kbd>@</kbd>-Zeichen und andere Optimierungen.
    Eingaben, die _eine_ E-Mail-Adresse _erfordern_, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` verwenden.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese könnte beispielsweise die <kbd>/</kbd>-Taste prominenter darstellen.
    Verbesserte Funktionen könnten den Zugang zur Historie umfassen.
    Eingaben, die _eine_ URL _erfordern_, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
