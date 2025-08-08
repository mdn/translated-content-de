---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Reihe von Keyframes zu repräsentieren. Es gibt mehrere Möglichkeiten für dieses Format, die unten erläutert werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), bestehend aus Eigenschaften und Werten, die wiederholt werden sollen. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

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

   Offsets für jedes Keyframe können durch Angabe eines `offset`-Wertes spezifiziert werden.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > [!NOTE]
   > `offset`-Werte, falls angegeben, müssen zwischen 0,0 und 1,0 (inklusive) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne einen angegebenen Offset werden gleichmäßig zwischen den benachbarten Keyframes verteilt.

   Das easing, das zwischen Keyframes angewendet werden soll, kann durch Angabe eines `easing`-Wertes wie unten dargestellt spezifiziert werden.

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

   In diesem Beispiel wird das angegebene easing nur vom Keyframe, bei dem es spezifiziert wurde, bis zum nächsten Keyframe angewendet. Jeder `easing`-Wert, der im `options`-Argument angegeben ist, gilt jedoch für eine einzelne Iteration der Animation – für die gesamte Dauer.

2. Ein `object`, das aus Schlüssel-Wert-Paaren besteht, die die zu animierende Eigenschaft und ein `array` von Werten zum Durchlaufen beinhalten.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["white", "black"], // [ from, to ]
     },
     2000,
   );
   ```

   Bei der Verwendung dieses Formats muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die bereitgestellten Werte werden unabhängig voneinander verteilt.

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

   Nachdem ein geeigneter Satz von Keyframes aus den Eigenschaftswertlisten generiert wurde, wird jeder bereitgestellte Offset auf das entsprechende Keyframe angewendet. Wenn nicht genügend Werte vorhanden sind oder die Liste `null`-Werte enthält, werden die Keyframes ohne angegebene Offsets gleichmäßig verteilt, wie im oben beschriebenen Array-Format.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste nach Bedarf wiederholt.

### Implizite Start-/End-Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. ein einzelnes Keyframe) und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Zum Beispiel, betrachten Sie [diese Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht wie folgt aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation spezifiziert, der Anfangszustand wird impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden in {{Glossary("camel_case", "Camel Case")}} angegeben, so dass zum Beispiel {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Kurzformen wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei besondere CSS-Eigenschaften sind:

- {{cssxref("float")}}, das als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Es ist hier nur für Referenzzwecke, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, das als `cssOffset` geschrieben werden muss, da "offset" das Keyframe-Offset wie unten beschrieben repräsentiert.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als Zahl zwischen `0,0` und `1,0` inklusive oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozent in CSS-Stylesheets mit `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen den benachbarten Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)-Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die auf dem Effekt angegebene Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
