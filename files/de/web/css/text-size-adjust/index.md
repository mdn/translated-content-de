---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-size-adjust`**-Eigenschaft in [CSS](/de/docs/Web/API/CSS) steuert den Textaufblasalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht für kleine Geräte entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten rendern. Anstatt Seiten in der Breite des Geräts anzuzeigen, verwenden sie einen [Viewport](/de/docs/Glossary/viewport), der viel breiter ist, normalerweise 800 oder 1000 Pixel. Um das extra-breite Layout wieder auf die ursprüngliche Gerätegröße abzubilden, zeigen sie entweder nur einen Teil des gesamten Renders an oder skalieren den Viewport, damit er passt.

Da der Text, der auf eine mobile Bildschirmgröße herunter skaliert wurde, sehr klein sein kann, wenden viele mobile Browser einen Textaufblasalgorithmus an, um den Text zu vergrößern und lesbarer zu machen. Wenn ein Element, das Text enthält, 100% der Bildschirmbreite nutzt, erhöht der Algorithmus die Textgröße, ohne das Layout zu ändern. Die `text-size-adjust`-Eigenschaft ermöglicht es Webautoren, dieses Verhalten zu deaktivieren oder anzupassen, da Webseiten, die für kleine Bildschirme entworfen wurden, es nicht benötigen.

## Syntax

```css
/* Keyword values */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> value */
text-size-adjust: 80%;

/* Global values */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

Die `text-size-adjust`-Eigenschaft kann mit `none`, `auto` oder einem `<Prozentsatz>` angegeben werden.

### Werte

- `none`
  - : Deaktiviert den Aufblasalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Aufblasalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten Wert `none` zu deaktivieren.
- `<percentage>`
  - : Aktiviert den Aufblasalgorithmus des Browsers und spezifiziert einen Prozentsatz, um den die Schriftgröße erhöht werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsverwendung

Wie oben angedeutet, ist das `text-size-adjust`-Verhalten auf einer richtig gestalteten responsiven Website nicht erforderlich. Entwickler können sich daher entscheiden, es durch Angabe des Wertes none auszuschalten:

```css
p {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Apples Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Verhaltensbeschreibung von Google Chrome](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)
- [Geckos Verhaltensbeschreibung](https://dbaron.org/log/20111126-font-inflation) von L. David Baron
