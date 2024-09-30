---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: e6274cc49f5c5b3ebfdfe0e1047aa0aff71b575d
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Gruppe von Keyframes darzustellen. Es gibt mehrere Möglichkeiten für dieses Format, die im Folgenden erläutert werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `Array` von Objekten (Keyframes), die aus Eigenschaften und Werten bestehen, über die iteriert wird. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

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

   > **Note:** `offset`-Werte, falls angegeben, müssen zwischen 0.0 und 1.0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne einen angegebenen Offset werden gleichmäßig zwischen benachbarten Keyframes verteilt.

   Das Easing, das zwischen den Keyframes angewendet werden soll, kann durch Angabe eines `easing`-Werts wie unten dargestellt angegeben werden.

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

   In diesem Beispiel gilt das angegebene Easing nur von dem Keyframe, bei dem es angegeben ist, bis zum nächsten Keyframe. Jeder `easing`-Wert, der im `options`-Argument angegeben ist, gilt jedoch für eine gesamte Iteration der Animation – für die gesamte Dauer.

2. Ein `Objekt`, das Schlüssel-Wert-Paare enthält, bestehend aus der zu animierenden Eigenschaft und einem `Array` von Werten, über die iteriert wird.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   Bei diesem Format muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die bereitgestellten Werte werden unabhängig voneinander verteilt.

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

   Nachdem ein geeigneter Satz von Keyframes aus den Eigenschaftswertlisten generiert wurde, wird jeder bereitgestellte Offset auf das entsprechende Keyframe angewendet. Wenn nicht genügend Werte vorhanden sind oder die Liste `null`-Werte enthält, werden die Keyframes ohne angegebene Offsets gleichmäßig wie beim vorher beschriebenen Array-Format verteilt.

   Wenn zu wenige `easing`- oder `composite`-Werte vorhanden sind, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite zu/von Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d. h. ein einzelnes Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht folgendermaßen aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben und der Anfangszustand wird impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Werte-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden in [Camel Case](/de/docs/Glossary/camel_case) angegeben, sodass beispielsweise {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Kurzwerte wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei außergewöhnliche CSS-Eigenschaften sind:

- {{cssxref("float")}}, die als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist hier nur zur Referenz, dies hat keine Auswirkung auf die Animation, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, die als `cssOffset` geschrieben werden muss, da "offset" das Keyframe-Offset darstellt, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als eine Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht dem Festlegen von Start- und Endzuständen in Prozent in CSS-Stylesheets unter Verwendung von `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen benachbarten Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die auf den Effekt angewendete Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
