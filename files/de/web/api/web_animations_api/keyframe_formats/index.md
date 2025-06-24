---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Menge von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die im Folgenden erläutert werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), die aus Eigenschaften und Werten bestehen, über die iteriert wird. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

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

   Offsets für jedes Keyframe können angegeben werden, indem ein `offset`-Wert bereitgestellt wird.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > [!NOTE] > `offset`-Werte, falls angegeben, müssen zwischen 0,0 und 1,0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht erforderlich, ein Offset für jedes Keyframe anzugeben. Keyframes ohne ein angegebenes Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Die zwischen den Keyframes anzuwendende Abmilderung kann durch Angabe eines `easing`-Wertes spezifiziert werden, wie unten illustriert.

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

   In diesem Beispiel gilt das angegebene Easing nur von dem Keyframe, bei dem es spezifiziert ist, bis zum nächsten Keyframe. Jedes `easing`, das im `options`-Argument angegeben ist, gilt jedoch für eine einzelne Iteration der Animation – für die gesamte Dauer.

2. Ein `object`, das Schlüssel-Werte-Paare enthält, bestehend aus der zu animierenden Eigenschaft und einem `array` von Werten, über die iteriert wird.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   Bei Verwendung dieses Formats muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die bereitgestellten Werte werden unabhängig verteilt.

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000,
   );
   ```

   Die speziellen Schlüssel `offset`, `easing` und `composite` (unten beschrieben) können zusammen mit den Eigenschaftswerten angegeben werden.

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

   Nach dem Erzeugen eines geeigneten Satzes von Keyframes aus den Eigenschaftswertlisten wird jedes bereitgestellte Offset auf das entsprechende Keyframe angewendet. Wenn es nicht genügend Werte gibt oder wenn die Liste `null`-Werte enthält, werden die Keyframes ohne spezifizierte Offsets gleichmäßig wie beim oben beschriebenen Array-Format verteilt.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste nach Bedarf wiederholt.

### Implizite von/bis-Keyframes

In neueren Browserversionen sind Sie in der Lage, nur einen Anfangs- oder Endstatus für eine Animation festzulegen (d.h. ein einzelnes Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er es kann. Zum Beispiel, betrachten Sie [diese Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht so aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endstatus der Animation spezifiziert, und der Anfangsstatus wird impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Werte-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden unter Verwendung der {{Glossary("camel_case", "camel case")}} Schreibweise angegeben, also wird z. B. {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX`. Abkürzungen wie {{cssxref("margin")}} sind ebenfalls erlaubt.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, das als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Es ist hier nur als Referenz angegeben, dies hat keinen Einfluss auf die Animation, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, das als `cssOffset` geschrieben werden muss, da "offset" den Keyframe-Offset wie unten beschrieben darstellt.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Das Offset des Keyframes, das als Zahl zwischen `0.0` und `1.0` einschließlich oder `null` angegeben wird. Dies entspricht der Angabe von Start- und Endzuständen in Prozentangaben in CSS-Stylesheets mit `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die auf dem Effekt angegebene Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
