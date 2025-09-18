---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: f262367fa35d57234ab6f6d66b9a06c3d33d5b31
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect), und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Reihe von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die unten erläutert werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), bestehend aus Eigenschaften und Werten, über die iteriert wird. Dies ist das kanonische Format, das von der [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes)-Methode zurückgegeben wird.

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

   > [!NOTE]
   > `offset`-Werte, sofern angegeben, müssen zwischen 0,0 und 1,0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, einen Offset für jedes Keyframe anzugeben. Keyframes ohne angegebenen Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Das zwischen Keyframes anzuwendende Easing kann angegeben werden, indem ein `easing`-Wert bereitgestellt wird, wie unten dargestellt.

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

   In diesem Beispiel gilt das angegebene Easing nur von dem Keyframe, bei dem es angegeben ist, bis zum nächsten Keyframe. Ein im `options`-Argument angegebener `easing`-Wert gilt jedoch über eine einzige Iteration der Animation — für die gesamte Dauer.

2. Ein `object`, das Schlüssel-Wert-Paare enthält, bestehend aus der zu animierenden Eigenschaft und einem `array` von Werten, über die iteriert wird.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["white", "black"], // [ from, to ]
     },
     2000,
   );
   ```

   Bei Verwendung dieses Formats muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die bereitgestellten Werte werden unabhängig voneinander verteilt.

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000,
   );
   ```

   Die speziellen Schlüssel `offset`, `easing`, und `composite` (unten beschrieben) können neben den Eigenschaftswerten angegeben werden.

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

   Nachdem ein geeignetes Set von Keyframes aus den Eigenschaftswertlisten generiert wurde, wird jeder bereitgestellte Offset auf das entsprechende Keyframe angewendet. Wenn nicht genügend Werte vorhanden sind oder wenn die Liste `null`-Werte enthält, werden die Keyframes ohne angegebene Offsets gleichmäßig wie beim oben beschriebenen Array-Format verteilt.

   Wenn zu wenige `easing`- oder `composite`-Werte vorhanden sind, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite to/from-Keyframes

Der Browser kann den Start- oder Endzustand einer Animation anhand des aktuellen Zustands ableiten. Wenn standardmäßig ein einziges Keyframe bereitgestellt wird, wird es als Endzustand behandelt, und der Startzustand wird aus dem aktuellen berechneten Stil des Elements abgeleitet. Sie können jedoch den `offset` angeben, um anzugeben, wo das bereitgestellte Keyframe in der Animationszeitleiste platziert werden soll. Weitere Informationen finden Sie in [`Element.animate()`](/de/docs/Web/API/Element/animate#implicit_tofrom_keyframes).

```js
// Animate from the current state to translateX(300px)
logo.animate({ transform: "translateX(300px)" }, 1000);
// Animate from translateX(300px) to the current state
logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
// Animate from the current state to translateX(300px) and back to the current state
logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
```

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden im {{Glossary("camel_case", "Camel Case")}} angegeben, sodass zum Beispiel {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Kurzformwerte wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, die als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist nur zur Referenz hier, es hat keinen Effekt auf die Animation, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, die als `cssOffset` geschrieben werden muss, da "offset" den Keyframe-Offset wie unten beschrieben darstellt.

Die folgenden speziellen Attribute können auch angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als Zahl zwischen `0,0` und `1,0` einschließlich oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozentangaben in CSS-Stylesheets unter Verwendung von `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)-Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrundeliegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die auf dem Effekt angegebene Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
