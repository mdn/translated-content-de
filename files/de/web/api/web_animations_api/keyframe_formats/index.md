---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren Objekte, die formatiert sind, um eine Reihe von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die unten erklärt werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), bestehend aus Eigenschaften und Werten, die durchlaufen werden. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

   ```js
   element.animate(
     [
       {
         // from
         opacity: 0,
         color: "#fff",
       },
       {
         // to
         opacity: 1,
         color: "#000",
       },
     ],
     2000,
   );
   ```

   Offsets für jedes Keyframe können durch Angabe eines Wertes `offset` spezifiziert werden.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > **Note:** `offset`-Werte, wenn angegeben, müssen zwischen 0,0 und 1,0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne angegebenen Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Die zu den Keyframes anzuwendende Abmilderung kann durch Angabe eines `easing`-Wertes wie unten dargestellt spezifiziert werden.

   ```js
   element.animate(
     [
       { opacity: 1, easing: "ease-out" },
       { opacity: 0.1, easing: "ease-in" },
       { opacity: 0 },
     ],
     2000,
   );
   ```

   In diesem Beispiel gilt die angegebene Abmilderung nur von dem Keyframe, bei dem sie angegeben ist, bis zum nächsten Keyframe. Ein `easing`-Wert, der jedoch für das Argument `options` angegeben wird, gilt für eine einzelne Iteration der Animation — für die gesamte Dauer.

2. Ein `object`, das Schlüssel-Wert-Paare enthält, bestehend aus der zu animierenden Eigenschaft und einem `array` von Werten, die durchlaufen werden.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   Bei Verwendung dieses Formats muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die angegebenen Werte werden unabhängig voneinander verteilt.

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000,
   );
   ```

   Die speziellen Schlüssel `offset`, `easing` und `composite` (unten beschrieben) können neben den Eigenschaftswerten angegeben werden.

   ```js
   element.animate(
     {
       opacity: [0, 0.9, 1],
       offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
       easing: ["ease-in", "ease-out"],
     },
     2000,
   );
   ```

   Nach der Erzeugung einer geeigneten Reihe von Keyframes aus den Eigenschaftswertlisten wird jeder angegebene Offset auf das entsprechende Keyframe angewendet. Wenn es nicht genügend Werte gibt oder wenn die Liste `null`-Werte enthält, werden die Keyframes ohne angegebenen Offset gleichmäßig verteilt, wie oben für das Array-Format beschrieben.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite von/bis Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d. h., ein einzelnes Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Zum Beispiel, betrachten Sie [diese Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht so aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation spezifiziert, und der Anfangszustand wird impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden in {{Glossary("camel_case", "camel case")}} angegeben, so dass beispielsweise {{cssxref("background-color")}} zu `backgroundColor` wird und {{cssxref("background-position-x")}} zu `backgroundPositionX`. Kurzschreibweisen wie {{cssxref("margin")}} sind ebenfalls erlaubt.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, das als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Es ist hier nur zur Referenz, dies hat keinen Einfluss auf die Animation, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, das als `cssOffset` geschrieben werden muss, da "offset" den Keyframe-Offset darstellt, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als eine Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozent in CSS-Stylesheets unter Verwendung von `@keyframes`. Wenn dieser Wert `null` oder fehlt, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Abmilderungsfunktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die angegebene Zusammenführungsoperation auf dem Effekt verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
