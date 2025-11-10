---
title: "HTMLElement: inputMode-Eigenschaft"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`inputMode`** spiegelt den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attributs des Elements wider.

Sie bietet einen Hinweis auf die Art der Daten, die der Benutzer möglicherweise beim Bearbeiten des Elements oder seiner Inhalte eingeben könnte. Dies ermöglicht es dem Browser, eine passende virtuelle Tastatur anzuzeigen.

Sie wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, ist jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus verwendbar.

## Wert

Dieses Attribut kann einen der folgenden Werte haben:

- `decimal`
  - : Eine numerische Eingabetastatur für Bruchzahlen, die die Ziffern und das Dezimaltrennzeichen für die Lokalisierung des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    In der Regel enthält sie das Zeichen <kbd>@</kbd> sowie andere Optimierungen.
- `none`
  - : Keine virtuelle Tastatur. Dies wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise eine Minustaste anzeigen oder nicht.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Beispielsweise kann die [Eingabetaste/Absendeschlüssel](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suchen" beschriftet sein.
- `tel`
  - : Eine Telefontastatureingabe, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>) und die Raute (<kbd>#</kbd>) umfasst.
- `text`
  - : Standard-Eingabetastatur für die aktuelle Lokalisierung des Benutzers.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann zum Beispiel die <kbd>/</kbd>-Taste prominenter anzeigen.

Für Details zur Verwendung dieses Attributs schauen Sie auf der Seite für das [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-HTML-Attribut nach, das diese Eigenschaft widerspiegelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [inputmode](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut
