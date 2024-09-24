---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS) Eigenschaft steuert den Text-Inflationsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht für kleine Geräte entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten rendern. Anstatt Seiten in der Breite des Geräts zu layouten, verwenden sie ein {{glossary("viewport")}}, das viel breiter ist, normalerweise 800 oder 1000 Pixel. Um das extra breite Layout an die ursprüngliche Gerätegröße anzupassen, zeigen sie entweder nur einen Teil des gesamten Renders an oder skalieren das Viewport, um es anzupassen.

Da verkleinerter Text auf einem mobilen Bildschirm sehr klein sein kann, wenden viele mobile Browser einen Text-Inflationsalgorithmus an, um den Text zu vergrößern und besser lesbar zu machen. Wenn ein Element, das Text enthält, 100% der Bildschirmbreite nutzt, vergrößert der Algorithmus die Schriftgröße, ohne das Layout zu verändern. Die Eigenschaft `text-size-adjust` ermöglicht es Webautoren, dieses Verhalten zu deaktivieren oder anzupassen, da Webseiten, die mit kleinen Bildschirmen im Sinn gestaltet wurden, es nicht benötigen.

## Syntax

```css
/* Schlüsselwortwerte */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> Wert */
text-size-adjust: 80%;

/* Globale Werte */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

Die `text-size-adjust` Eigenschaft wird als `none`, `auto` oder ein `<percentage>` angegeben.

### Werte

- `none`
  - : Deaktiviert den Inflationsalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Inflationsalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none` Wert aufzuheben.
- `<percentage>`
  - : Aktiviert den Inflationsalgorithmus des Browsers, gibt einen Prozentwert an, mit dem die Schriftgröße vergrößert wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, wird das `text-size-adjust` Verhalten auf einer korrekt gestalteten responsiven Seite nicht benötigt, daher können Entwickler es deaktivieren, indem sie den Wert none angeben:

```css
p {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Apple](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Verhaltensbeschreibung von Google Chrome](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)
- [Geckos Verhaltensbeschreibung](https://dbaron.org/log/20111126-font-inflation), von L. David Baron
