---
title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS)-Eigenschaft steuert den Textinflationsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht für kleine Geräte entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten rendern. Anstatt Seiten in der Breite des Geräts anzuzeigen, verwenden sie einen {{Glossary("viewport", "Viewport")}}, der viel breiter ist, in der Regel 800 oder 1000 Pixel. Um das extra breite Layout auf die ursprüngliche Gerätegröße zu übertragen, zeigen sie entweder nur einen Teil des gesamten Renders an oder skalieren den Viewport, um zu passen.

Da verkleinerter Text auf einem Mobilgerät sehr klein sein kann, wenden viele mobile Browser einen Textinflationsalgorithmus an, um den Text zu vergrößern und lesbarer zu machen. Wenn ein Element mit Text 100 % der Breite des Bildschirms verwendet, vergrößert der Algorithmus die Textgröße, ohne das Layout zu verändern. Die `text-size-adjust`-Eigenschaft erlaubt es Web-Autoren, dieses Verhalten zu deaktivieren oder zu modifizieren, da Webseiten, die für kleine Bildschirme entworfen wurden, es nicht benötigen.

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
  - : Aktiviert den Inflation-Algorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none`-Wert aufzuheben.
- `<percentage>`
  - : Aktiviert den Inflation-Algorithmus des Browsers und gibt einen Prozentwert an, mit dem die Schriftgröße vergrößert wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, wird das `text-size-adjust`-Verhalten auf einer ordnungsgemäß entworfenen responsiven Website nicht benötigt, daher können Entwickler es durch Angabe eines Wertes von none deaktivieren:

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
