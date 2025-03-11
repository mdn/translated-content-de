---
title: "HTMLElement: inputMode Eigenschaft"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft **`inputMode`** spiegelt den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attributs des Elements wider.

Sie gibt einen Hinweis auf die Art der Daten, die der Benutzer möglicherweise eingibt, während das Element oder dessen Inhalt bearbeitet wird. Dies ermöglicht es dem Browser, eine geeignete virtuelle Tastatur anzuzeigen.

Sie wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch auf jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Modus verwendet werden.

## Wert

Dieses Attribut kann einen der folgenden Werte haben:

- `decimal`
  - : Eine Tastatur für eine fraktionierte numerische Eingabe, die die Ziffern und das Dezimaltrennzeichen für das Gebietsschema des Benutzers enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Enthält typischerweise das <kbd>@</kbd>-Zeichen sowie andere Optimierungen.
- `none`
  - : Keine virtuelle Tastatur. Dies wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `numeric`
  - : Eine numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise eine Minustaste anzeigen oder nicht.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Zum Beispiel kann die [Return/Submit-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suche" beschriftet sein.
- `tel`
  - : Eine Telefontastatur-Eingabe, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>) und die Raute (<kbd>#</kbd>) Taste umfasst.
- `text`
  - : Standard-Eingabetastatur für das aktuelle Gebietsschema des Benutzers.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann zum Beispiel die <kbd>/</kbd>-Taste prominenter darstellen.

Für Details zur Verwendung dieses Attributs siehe die Seite zum [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [inputmode](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut
