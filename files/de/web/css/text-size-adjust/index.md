---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS)-Eigenschaft steuert den Textinflationsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht für kleine Geräte entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten darstellen. Anstatt Seiten in der Breite des Gerätscreens darzustellen, verwenden sie einen {{Glossary("viewport", "Viewport")}}, der viel breiter ist, normalerweise 800 oder 1000 Pixel. Um das extra breite Layout wieder auf die ursprüngliche Gerätegröße abzubilden, zeigen sie entweder nur einen Teil der gesamten Darstellung oder verkleinern den Viewport, um ihn anzupassen.

Da herunterskalierter Text auf einem mobilen Bildschirm sehr klein sein kann, wenden viele mobile Browser einen Textinflationsalgorithmus an, um den Text zu vergrößern und lesbarer zu machen. Wenn ein Element, das Text enthält, 100 % der Breite des Bildschirms nutzt, erhöht der Algorithmus seine Textgröße, ohne das Layout zu ändern. Die `text-size-adjust`-Eigenschaft ermöglicht es Webentwicklern, dieses Verhalten zu deaktivieren oder anzupassen, da Webseiten, die für kleine Bildschirme entwickelt wurden, dies nicht benötigen.

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
  - : Deaktiviert den Inflation-Algorithmus des Browsers.
- `auto`
  - : Aktiviert den Inflation-Algorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none`-Wert zu widerrufen.
- `<percentage>`
  - : Aktiviert den Inflation-Algorithmus des Browsers und gibt einen Prozentwert an, um den die Schriftgröße erhöht werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsverwendung

Wie oben angedeutet, ist das `text-size-adjust`-Verhalten auf einer richtig gestalteten responsiven Webseite nicht erforderlich, sodass Entwickler wählen können, es durch Angabe eines Werts von none zu deaktivieren:

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

- [Apple-Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16) (2016)
- [Google Chrome Verhaltensbeschreibung](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit) (2014)
- [Geckos Verhaltensbeschreibung](https://dbaron.org/log/20111126-font-inflation), von L. David Baron (2011)
