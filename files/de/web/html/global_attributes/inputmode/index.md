---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar("Global_attributes")}}

Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das einen Hinweis auf die Art der Daten gibt, die vom Benutzer beim Bearbeiten des Elements oder seines Inhalts eingegeben werden könnten. Dadurch kann ein Browser eine geeignete virtuelle Tastatur anzeigen.

Es wird hauptsächlich an {{HTMLElement("input")}}-Elementen verwendet, kann jedoch auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Modus verwendet werden.

Es ist wichtig zu verstehen, dass das `inputmode`-Attribut keine Gültigkeitsanforderungen für die Eingabe durchsetzt. Um zu verlangen, dass die Eingabe einem bestimmten Datentyp entspricht, wählen Sie einen geeigneten [`<input>`](/de/docs/Web/HTML/Element/input#input_types)-Elementtyp aus. Für spezifische Anleitungen zur Auswahl von {{HTMLElement("input")}}-Typen siehe den Abschnitt [Werte](#werte).

## Werte

Das Attribut kann einen der folgenden Werte haben:

- `none`
  - : Keine virtuelle Tastatur.
    Für den Fall, dass die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `text` (Standardwert)
  - : Standard-Eingabetastatur für das aktuelle Gebietsschema des Benutzers.
- `decimal`
  - : Bruchzahlen-Eingabetastatur, die die Ziffern und das Dezimaltrennzeichen für das Gebietsschema des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
    Geräte können möglicherweise eine Minustaste (<kbd>-</kbd>) anzeigen oder nicht.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise eine Minustaste anzeigen oder nicht.
- `tel`
  - : Eine Telefonnummer-Tastatureingabe, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>) und die Raute (<kbd>#</kbd>) umfasst.
    Eingaben, die _eine_ Telefonnummer _erfordern_, sollten typischerweise `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` verwenden.
- `search`
  - : Eine für Suchanfragen optimierte virtuelle Tastatur.
    Beispielsweise kann die [Return-/Senden-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Search" beschriftet sein, zusammen mit möglichen weiteren Optimierungen.
    Eingaben, die _eine_ Suchanfrage _erfordern_, sollten typischerweise `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` verwenden.
- `email`
  - : Eine virtuelle Tastatur optimiert für die Eingabe von E-Mail-Adressen.
    Typischerweise enthält sie das Zeichen <kbd>@</kbd> sowie weitere Optimierungen.
    Eingaben, die _E-Mail-Adressen erfordern_, sollten typischerweise `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` verwenden.
- `url`
  - : Eine Tastatur optimiert für die Eingabe von URLs.
    Diese kann beispielsweise die <kbd>/</kbd>-Taste prominenter anzeigen.
    Verbesserte Funktionen könnten den Zugriff auf den Verlauf beinhalten und so weiter.
    Eingaben, die _eine_ URL _erfordern_, sollten typischerweise `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Globales Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
