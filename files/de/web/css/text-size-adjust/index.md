---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-size-adjust`** [CSS](/de/docs/Web/API/CSS) Eigenschaft steuert den Textvergrößerungsalgorithmus, der auf einigen Smartphones und Tablets verwendet wird. Andere Browser ignorieren diese Eigenschaft.

Da viele Websites nicht mit kleinen Geräten im Hinterkopf entwickelt wurden, unterscheiden sich mobile Browser von Desktop-Browsern in der Art und Weise, wie sie Webseiten darstellen. Anstatt Seiten in der Breite des Geräts anzuzeigen, verwenden sie einen [Viewport](/de/docs/Glossary/viewport), der viel breiter ist, normalerweise 800 oder 1000 Pixel. Um das extra-breite Layout zurück zur Originalgröße des Geräts zu bringen, zeigen sie entweder nur einen Teil der gesamten Darstellung oder skalieren den Viewport herunter, um zu passen.

Da verkleinerter Text auf einem mobilen Bildschirm sehr klein sein kann, verwenden viele mobile Browser einen Textvergrößerungsalgorithmus, um den Text zu vergrößern und lesbarer zu machen. Wenn ein Element mit Text 100% der Bildschirmbreite verwendet, erhöht der Algorithmus die Textgröße, ohne das Layout zu verändern. Die Eigenschaft `text-size-adjust` ermöglicht es Webentwicklern, dieses Verhalten zu deaktivieren oder anzupassen, da Webseiten, die für kleine Bildschirme gestaltet wurden, dieses nicht benötigen.

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

Die Eigenschaft `text-size-adjust` wird als `none`, `auto` oder ein `<percentage>` angegeben.

### Werte

- `none`
  - : Deaktiviert den Vergrößerungsalgorithmus des Browsers.
- `auto`
  - : Aktiviert den Vergrößerungsalgorithmus des Browsers. Dieser Wert wird verwendet, um einen zuvor mit CSS gesetzten `none`-Wert zu entfernen.
- `<percentage>`
  - : Aktiviert den Vergrößerungsalgorithmus des Browsers, indem ein Prozentwert angegeben wird, mit dem die Schriftgröße erhöht werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Deaktivierungsnutzung

Wie oben angedeutet, ist das Verhalten von `text-size-adjust` auf einer richtig entworfenen, responsiven Seite nicht notwendig, sodass Entwickler es deaktivieren können, indem sie den Wert none angeben:

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
- [Beschreibung des Verhaltens von Google Chrome](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)
- [Beschreibung des Verhaltens von Gecko](https://dbaron.org/log/20111126-font-inflation), von L. David Baron
