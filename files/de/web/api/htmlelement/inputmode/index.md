---
title: "HTMLElement: inputMode-Eigenschaft"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inputMode`** spiegelt den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributs des Elements wider.

Sie gibt einen Hinweis auf die Art der Daten, die der Benutzer möglicherweise beim Bearbeiten des Elements oder dessen Inhalte eingibt. Dadurch kann der Browser eine geeignete virtuelle Tastatur anzeigen.

Sie wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Modus eingesetzt werden.

## Wert

Dieses Attribut kann einen der folgenden Werte haben:

- `decimal`
  - : Eine numerische Tastatur für Bruchzahlen, die die Ziffern und das Dezimaltrennzeichen für die Benutzer-Lokalisierung enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Typischerweise enthält diese das Zeichen <kbd>@</kbd> sowie weitere Optimierungen.
- `none`
  - : Keine virtuelle Tastatur. Dies wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 benötigt.
    Geräte können optional einen Minus-Tasten anzeigen.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise könnte die [Return/Submit-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suchen" beschriftet sein.
- `tel`
  - : Eine Telefon-Tastatur, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>), und das Raute-Symbol (<kbd>#</kbd>) umfasst.
- `text`
  - : Standard-Eingabetastatur für die aktuelle Lokalisierung des Benutzers.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann zum Beispiel die <kbd>/</kbd>-Taste prominenter anzeigen.

Für Details zur Nutzung dieses Attributs siehe die Seite für das [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [inputmode](/de/docs/Web/HTML/Global_attributes#inputmode)-Attribut
