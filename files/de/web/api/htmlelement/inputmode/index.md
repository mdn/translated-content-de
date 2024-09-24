---
title: "HTMLElement: inputMode-Eigenschaft"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{ APIRef("HTML DOM") }}

Die Eigenschaft **`inputMode`** des {{domxref("HTMLElement")}} spiegelt den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributs des Elements wider.

Sie gibt einen Hinweis auf den Datentyp, der vom Benutzer beim Bearbeiten des Elements oder seines Inhalts eingegeben werden könnte. Dadurch kann der Browser eine geeignete virtuelle Tastatur anzeigen.

Diese Eigenschaft wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann jedoch bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Modus verwendet werden.

## Wert

Dieses Attribut kann einen der folgenden Werte haben:

- `decimal`
  - : Tastatur für Bruchzahleneingaben, die Ziffern und Dezimaltrennzeichen für die Benutzer-Region enthält (typischerweise <kbd>.</kbd> oder <kbd>,</kbd>).
- `email`
  - : Eine für die Eingabe von E-Mail-Adressen optimierte virtuelle Tastatur.
    Sie enthält typischerweise das Zeichen <kbd>@</kbd> sowie andere Optimierungen.
- `none`
  - : Keine virtuelle Tastatur. Dies wird verwendet, wenn die Seite ihre eigene Tastatureingabesteuerung implementiert.
- `numeric`
  - : Numerische Tastatur, die nur die Ziffern 0–9 erfordert.
    Geräte können möglicherweise oder möglicherweise keinen Minustaste anzeigen.
- `search`
  - : Eine für die Sucheingabe optimierte virtuelle Tastatur.
    Beispielsweise kann die [Return/Eingabe-Taste](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) mit "Suche" beschriftet sein.
- `tel`
  - : Eine Telefonnumerntastatur, die die Ziffern 0–9, den Stern (<kbd>\*</kbd>) und das Rautezeichen (<kbd>#</kbd>) enthält.
- `text`
  - : Standardtastatur für die aktuelle Spracheinstellung des Benutzers.
- `url`
  - : Eine für die URL-Eingabe optimierte Tastatur.
    Diese kann zum Beispiel die <kbd>/</kbd>-Taste prominenter haben.

Für Details zur Verwendung dieses Attributs sehen Sie die Seite für das [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [inputmode](/de/docs/Web/HTML/Global_attributes#inputmode)-Attribut
