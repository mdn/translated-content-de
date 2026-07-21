---
title: "`text-size-adjust` CSS property"
short-title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS)-Eigenschaft steuert den Textvergrößerungsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht für kleine Geräte entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten rendern. Anstatt Seiten in der Breite des Gerätsbildschirms darzustellen, verwenden sie ein {{Glossary("viewport", "Viewport")}}, das viel breiter ist, in der Regel 800 oder 1000 Pixel. Um das extra breite Layout auf die ursprüngliche Größe des Geräts zurückzuführen, zeigen sie entweder nur einen Teil des gesamten Renders oder skalieren das Viewport nach unten, um es anzupassen.

Da Text, der herunterskaliert wurde, um auf einen mobilen Bildschirm zu passen, sehr klein sein kann, wenden viele mobile Browser einen Textvergrößerungsalgorithmus an, um den Text zu vergrößern und besser lesbar zu machen. Wenn ein Element, das Text enthält, 100 % der Breite des Bildschirms nutzt, erhöht der Algorithmus seine Textgröße, ohne das Layout zu ändern. Die `text-size-adjust`-Eigenschaft ermöglicht es Webautoren, dieses Verhalten zu deaktivieren oder zu modifizieren, da Webseiten, die für kleine Bildschirme entwickelt wurden, es nicht benötigen.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Werte angegeben:

- `none`
  - : Deaktiviert den Vergrößerungsalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Vergrößerungsalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS festgelegten Wert `none` rückgängig zu machen.
- `<percentage>`
  - : Aktiviert den Vergrößerungsalgorithmus des Browsers und gibt einen Prozentwert an, mit dem die Schriftgröße erhöht werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, ist das `text-size-adjust`-Verhalten auf einer richtig gestalteten responsiven Seite nicht notwendig, daher können Entwickler wählen, es durch Angabe eines Wertes von none zu deaktivieren:

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

- [Apple's Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16) (2016)
- [Beschreibung des Verhaltens von Google Chrome](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit) (2014)
- [Beschreibung des Verhaltens von Gecko](https://dbaron.org/log/20111126-font-inflation) von L. David Baron (2011)
