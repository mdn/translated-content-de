---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
l10n:
  sourceCommit: 2738f1caca9f2bafdb969c196d9d8be4c81d3d34
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS)-Eigenschaft steuert den Textvergrößerungsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht mit kleinen Geräten im Hinterkopf entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art, wie sie Webseiten rendern. Anstatt Seiten in der Breite des Gerätscreens darzustellen, verwenden sie einen {{Glossary("viewport", "Viewport")}}, der viel breiter ist, normalerweise 800 oder 1000 Pixel. Um das extra breite Layout auf die ursprüngliche Gerätegröße abzubilden, zeigen sie entweder nur einen Teil des gesamten Renderings an oder skalieren den Viewport herunter, um zu passen.

Da herunterskalierter Text auf einem mobilen Bildschirm sehr klein sein kann, wenden viele mobile Browser einen Textvergrößerungsalgorithmus an, um den Text zu vergrößern und damit lesbarer zu machen. Wenn ein Element, das Text enthält, 100% der Bildschirmbreite nutzt, erhöht der Algorithmus die Textgröße, ohne jedoch das Layout zu verändern. Die Eigenschaft `text-size-adjust` ermöglicht es Webautoren, dieses Verhalten zu deaktivieren oder zu modifizieren, da Webseiten, die für kleine Bildschirme entworfen wurden, dies nicht benötigen.

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

Die `text-size-adjust`-Eigenschaft wird als `none`, `auto` oder ein `<percentage>` angegeben.

### Werte

- `none`
  - : Deaktiviert den Inflationsalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Inflationsalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none`-Wert zu widerrufen.
- `<percentage>`
  - : Aktiviert den Inflationsalgorithmus des Browsers und gibt einen Prozentsatz an, mit dem die Schriftgröße vergrößert werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, wird das `text-size-adjust`-Verhalten auf einer korrekt gestalteten responsive Website nicht benötigt, sodass sich Entwickler dafür entscheiden können, es mit dem Wert none zu deaktivieren:

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
- [Google Chrome Verhaltensbeschreibung](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit) (2014)
- [Geckos Verhaltensbeschreibung](https://dbaron.org/log/20111126-font-inflation), von L. David Baron (2011)
