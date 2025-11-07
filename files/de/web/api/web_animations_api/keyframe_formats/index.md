---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Reihe von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die unten erläutert werden.

## Syntax

Es gibt zwei verschiedene Arten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), die aus Eigenschaften und Werten bestehen, die durchlaufen werden sollen. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

   ```js
   element.animate(
     [
       {
         // from
         opacity: 0,
         color: "white",
       },
       {
         // to
         opacity: 1,
         color: "black",
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

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne einen angegebenen Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Das Easing, das zwischen den Keyframes angewendet werden soll, kann durch Angabe eines `easing`-Wertes wie unten illustriert angegeben werden.

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

   In diesem Beispiel wird das angegebene Easing nur vom Keyframe, bei dem es angegeben ist, bis zum nächsten Keyframe angewendet. Jeder `easing`-Wert, der in den `options`-Argumenten angegeben ist, wird jedoch über eine einzige Iteration der Animation angewendet — für die gesamte Dauer.

2. Ein `object`, das Schlüssel-Wert-Paare enthält, die die Eigenschaft zu animieren und ein `array` von Werten, die durchlaufen werden sollen, enthalten.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["white", "black"], // [ from, to ]
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

   Die speziellen Schlüssel `offset`, `easing` und `composite` (wie unten beschrieben) können neben den Eigenschaftswerten angegeben werden.

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

   Nachdem ein geeignetes Set von Keyframes aus den Eigenschaftswertlisten generiert wurde, wird jeder bereitgestellte Offset auf das entsprechende Keyframe angewendet. Wenn es unzureichende Werte gibt oder die Liste `null`-Werte enthält, werden die Keyframes ohne angegebene Offsets gleichmäßig wie im oben beschriebenen Array-Format verteilt.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste nach Bedarf wiederholt.

### Implizite von/bis Keyframes

Der Browser kann den Start- oder Endzustand einer Animation durch den aktuellen Zustand erschließen. Standardmäßig, wenn ein einzelnes Keyframe bereitgestellt wird, wird es als Endzustand behandelt, und der Startzustand wird aus dem aktuellen berechneten Stil des Elements abgeleitet. Sie können jedoch das `offset` angeben, um anzuzeigen, wo das bereitgestellte Keyframe in der Animationszeitachse platziert werden soll. Weitere Informationen finden Sie unter [`Element.animate()`](/de/docs/Web/API/Element/animate#implicit_tofrom_keyframes).

```js
// Animate from the current state to translateX(300px)
logo.animate({ transform: "translateX(300px)" }, 1000);
// Animate from translateX(300px) to the current state
logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
// Animate from the current state to translateX(300px) and back to the current state
logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
```

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Animations/Animatable_properties). Die Eigenschaftsnamen werden im {{Glossary("camel_case", "camel case")}} angegeben, sodass z.B. {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Auch Kurznotationen wie {{cssxref("margin")}} sind erlaubt.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, die als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist nur als Referenz hier, das wird keine Wirkung auf die Animation haben, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, die als `cssOffset` geschrieben werden muss, da "offset" den Keyframe-Offset darstellt, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht dem Angeben von Start- und Endzuständen in Prozentangaben in CSS-Stylesheets mithilfe von `@keyframes`. Wenn dieser Wert `null` ist oder fehlt, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)-Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies ist `auto`, wenn die auf dem Effekt angegebene Kompositionsoperation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
