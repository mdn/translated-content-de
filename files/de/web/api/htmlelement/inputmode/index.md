---
title: "HTMLElement: inputMode-Eigenschaft"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft **`inputMode`** spiegelt den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attributs des Elements wider.

Sie gibt einen Hinweis auf die Art der Daten, die der Benutzer möglicherweise eingeben wird, während er das Element oder dessen Inhalt bearbeitet. Dadurch kann der Browser eine geeignete virtuelle Tastatur anzeigen.

Sie wird hauptsächlich bei {{HTMLElement("input")}} Elementen verwendet, kann aber bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Modus verwendet werden.

## Wert

Dieses Attribut kann einen der folgenden Werte haben:

- `decimal`
  - : Dezimalzahlen-Tastatur, die die Ziffern und das Dezimaltrennzeichen für das Benutzergebietsschema enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
- `email`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist.
    Typischerweise enthält sie das Zeichen <kbd>@</kbd> sowie andere Optimierungen.
- `none`
  - : Keine virtuelle Tastatur. Dies wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `numeric`
  - : Numerische Eingabetastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise eine Minustaste anzeigen oder nicht.
- `search`
  - : Eine virtuelle Tastatur, die für Sucheingaben optimiert ist.
    Zum Beispiel kann die [Return-/Abschlusstaste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Search" beschriftet sein.
- `tel`
  - : Eine Telefontastatur-Eingabe, die die Ziffern 0–9, das Sternchen (<kbd>\*</kbd>) und die Raute (<kbd>#</kbd>) beinhaltet.
- `text`
  - : Standard-Eingabetastatur für das aktuelle Benutzergebietsschema.
- `url`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist.
    Diese kann z.B. die <kbd>/</kbd> Taste prominenter darstellen.

Für Details zur Verwendung dieses Attributs, siehe die Seite für das [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [inputmode](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut
