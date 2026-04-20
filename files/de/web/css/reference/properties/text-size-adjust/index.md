---
title: "`text-size-adjust` CSS property"
short-title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS)-Eigenschaft steuert den Textinflationsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht mit kleinen Geräten im Hinterkopf entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art, wie sie Webseiten rendern. Anstatt die Seiten in der Breite des Gerätbildschirms anzuzeigen, nutzen sie einen {{Glossary("viewport", "Viewport")}}, der viel breiter ist, üblicherweise 800 oder 1000 Pixel. Um das zu breite Layout auf die ursprüngliche Gerätegröße abzubilden, zeigen sie entweder nur einen Teil des gesamten Renders an oder skalieren den Viewport, um ihn anzupassen.

Da der auf eine mobile Anzeige skalierte Text sehr klein sein kann, wenden viele mobile Browser einen Textinflationsalgorithmus an, um den Text zu vergrößern und leserlicher zu machen. Wenn ein Element, das Text enthält, 100 % der Bildschirmbreite nutzt, vergrößert der Algorithmus die Textgröße, ohne das Layout zu ändern. Die `text-size-adjust`-Eigenschaft erlaubt es Web-Autoren, dieses Verhalten zu deaktivieren oder zu modifizieren, da Webseiten, die für kleine Bildschirme optimiert sind, dies nicht benötigen.

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

Die `text-size-adjust`-Eigenschaft wird als `none`, `auto` oder `<percentage>` angegeben.

### Werte

- `none`
  - : Deaktiviert den Inflationsalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Inflationsalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none`-Wert aufzuheben.
- `<percentage>`
  - : Aktiviert den Inflationsalgorithmus des Browsers und gibt einen prozentualen Wert an, um den die Schriftgröße vergrößert werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, wird das `text-size-adjust`-Verhalten auf einer ordnungsgemäß gestalteten responsiven Website nicht benötigt, daher können Entwickler es deaktivieren, indem sie den Wert none angeben:

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

- [Apples Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16) (2016)
- [Verhaltensbeschreibung von Google Chrome](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit) (2014)
- [Geckos Verhaltensbeschreibung](https://dbaron.org/log/20111126-font-inflation) von L. David Baron (2011)
