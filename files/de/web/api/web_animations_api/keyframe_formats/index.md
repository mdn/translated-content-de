---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: e6274cc49f5c5b3ebfdfe0e1047aa0aff71b575d
---

{{DefaultAPISidebar("Web Animations")}}

{{domxref("Element.animate()")}}, {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}, und {{domxref("KeyframeEffect.setKeyframes()")}} akzeptieren alle Objekte, die im Format zur Darstellung einer Reihe von Keyframes formatiert sind. Es gibt mehrere Optionen für dieses Format, die im Folgenden erklärt werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `array` von Objekten (Keyframes), bestehend aus Eigenschaften und Werten, die durchlaufen werden sollen. Dies ist das kanonische Format, das von der Methode {{domxref("KeyframeEffect.getKeyframes()", "getKeyframes()")}} zurückgegeben wird.

   ```js
   element.animate(
     [
       {
         // von
         opacity: 0,
         color: "#fff",
       },
       {
         // nach
         opacity: 1,
         color: "#000",
       },
     ],
     2000,
   );
   ```

   Offsets für jedes Keyframe können durch Angabe eines `offset`-Wertes festgelegt werden.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > **Note:** `offset`-Werte, falls angegeben, müssen zwischen 0,0 und 1,0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne spezifierten Offset werden gleichmäßig zwischen benachbarten Keyframes verteilt.

   Das Anwenden von Easing zwischen Keyframes kann durch Angabe eines `easing`-Wertes wie unten dargestellt erfolgen.

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

   In diesem Beispiel wird das angegebene Easing nur auf das Keyframe angewendet, wo es angegeben ist, bis zum nächsten Keyframe. Jeder `easing`-Wert, der im `options`-Argument angegeben ist, gilt jedoch für eine einzelne Iteration der Animation – für die gesamte Dauer.

2. Ein `object` enthält Schlüssel-Wert-Paare, bestehend aus der Eigenschaft, die animiert werden soll, und einem `array` von Werten, die durchlaufen werden sollen.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ von, zu ]
       color: ["#fff", "#000"], // [ von, zu ]
     },
     2000,
   );
   ```

   Bei der Verwendung dieses Formats müssen die Anzahl der Elemente in jedem Array nicht gleich sein. Die angegebenen Werte werden unabhängig verteilt.

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
       offset: [0, 0.8], // Abkürzung für [ 0, 0.8, 1 ]
       easing: ["ease-in", "ease-out"],
     },
     2000,
   );
   ```

   Nach dem Erzeugen einer geeigneten Reihe von Keyframes aus den Eigenschaftswertlisten wird jedes gelieferte Offset auf das entsprechende Keyframe angewendet. Wenn es nicht genügend Werte gibt oder wenn die Liste `null`-Werte enthält, werden die Keyframes ohne spezifierte Offsets gleichmäßig verteilt, wie bei dem oben beschriebenen Array-Format.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite von/nach Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. ein einzelnes Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Zum Beispiel schaut [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) folgendermaßen aus — das Keyframe-Objekt sieht so aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben, und der Anfangszustand ist impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Werte-Paare der [zu animierenden CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden unter Verwendung von {{Glossary("camel_case", "Camel Case")}} festgelegt, so dass zum Beispiel {{cssxref("background-color")}} zu `backgroundColor` und {{cssxref("background-position-x")}} zu `backgroundPositionX` wird. Kurzschreibweise wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei besondere CSS-Eigenschaften sind:

- {{cssxref("float")}}, die als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist nur zur Referenz hier, diese wird keine Auswirkungen auf die Animation haben, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, die als `cssOffset` geschrieben werden muss, da "offset" den Keyframe-Offset darstellt, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als eine Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht dem Spezifizieren von Anfangs- und Endzuständen in Prozentangaben in CSS-Stilen unter Verwendung von `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen benachbarten Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die {{domxref("KeyframeEffect.composite")}}-Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird `auto` sein, wenn die im Effekt spezifizierte Composite-Operation verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffect.setKeyframes()")}}
