---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren Objekte, die formatiert sind, um eine Reihe von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die unten erklärt werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `Array` von Objekten (Keyframes), das aus durchlaufbaren Eigenschaften und Werten besteht. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

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
   > `offset`-Werte, wenn sie angegeben werden, müssen zwischen 0.0 und 1.0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe ein Offset anzugeben. Keyframes ohne angegebenes Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Das Easing zwischen den Keyframes kann durch Bereitstellung eines `easing`-Werts angegeben werden, wie unten gezeigt.

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

   In diesem Beispiel gilt das angegebene Easing nur von dem Keyframe, an dem es angegeben wurde, bis zum nächsten Keyframe. Jeder im Argument `options` angegebene `easing`-Wert gilt jedoch über eine einzelne Iteration der Animation – für die gesamte Dauer.

2. Ein `Objekt` mit Schlüssel-Wert-Paaren, das die zu animierenden Eigenschaften und ein `Array` von Werten zum Durchlaufen enthält.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["white", "black"], // [ from, to ]
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

   Die speziellen Schlüssel `offset`, `easing` und `composite` (siehe unten) können neben den Eigenschaftswerten angegeben werden.

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

   Nachdem ein geeignetes Set von Keyframes aus den Eigenschaftswertlisten generiert wurde, wird jedes bereitgestellte Offset auf das entsprechende Keyframe angewendet. Falls nicht genügend Werte vorhanden sind oder die Liste `null`-Werte enthält, werden die Keyframes ohne spezifische Offsets gleichmäßig verteilt, wie im oben beschriebenen Array-Format.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite to/from Keyframes

Der Browser kann den Start- oder Endzustand einer Animation ableiten, indem er den aktuellen Zustand verwendet. Standardmäßig wird, wenn ein einzelnes Keyframe bereitgestellt wird, es als Endzustand behandelt, und der Startzustand wird aus dem aktuell berechneten Stil des Elements abgeleitet. Sie können jedoch das `offset` angeben, um anzuzeigen, wo das bereitgestellte Keyframe in der Animationszeitleiste platziert werden soll. Für weitere Informationen siehe [`Element.animate()`](/de/docs/Web/API/Element/animate#implicit_tofrom_keyframes).

```js
// Animate from the current state to translateX(300px)
logo.animate({ transform: "translateX(300px)" }, 1000);
// Animate from translateX(300px) to the current state
logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
// Animate from the current state to translateX(300px) and back to the current state
logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
```

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden in {{Glossary("camel_case", "Camel Case")}} angegeben, sodass zum Beispiel {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Kurzschreibweise wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, die als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist hier nur als Referenz, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, die als `cssOffset` geschrieben werden muss, da "offset" das Keyframe-Offset repräsentiert, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Das Offset des Keyframes, angegeben als Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozent in CSS-Stylesheets mit `@keyframes`. Wenn dieser Wert `null` oder fehlend ist, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies ist `auto`, wenn die auf dem Effekt angegebene Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
