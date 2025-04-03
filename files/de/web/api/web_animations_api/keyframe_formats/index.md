---
title: Keyframe-Formate
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Animations")}}

[`Element.animate()`](/de/docs/Web/API/Element/animate), [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) und [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes) akzeptieren alle Objekte, die formatiert sind, um eine Reihe von Keyframes darzustellen. Es gibt mehrere Optionen für dieses Format, die unten erklärt werden.

## Syntax

Es gibt zwei verschiedene Möglichkeiten, Keyframes zu formatieren:

1. Ein `Array` von Objekten (Keyframes), bestehend aus Eigenschaften und Werten, über die iteriert werden soll. Dies ist das kanonische Format, das von der Methode [`getKeyframes()`](/de/docs/Web/API/KeyframeEffect/getKeyframes) zurückgegeben wird.

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

   Offsets für jedes Keyframe können durch Angabe eines `offset`-Werts spezifiziert werden.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > **Note:** `offset`-Werte, falls angegeben, müssen zwischen 0,0 und 1,0 (einschließlich) liegen und in aufsteigender Reihenfolge angeordnet sein.

   Es ist nicht notwendig, für jedes Keyframe einen Offset anzugeben. Keyframes ohne angegebenen Offset werden gleichmäßig zwischen den angrenzenden Keyframes verteilt.

   Das Easing, das zwischen Keyframes angewendet werden soll, kann durch Angabe eines `easing`-Werts spezifiziert werden, wie unten illustriert.

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

   In diesem Beispiel wird das angegebene Easing nur von dem Keyframe angewendet, an dem es spezifiziert ist, bis zum nächsten Keyframe. Jeder `easing`-Wert, der jedoch mit dem `options`-Argument angegeben wird, gilt über eine einzelne Iteration der Animation – für die gesamte Dauer.

2. Ein `Objekt`, das Schlüssel-Wert-Paare enthält, bestehend aus der zu animierenden Eigenschaft und einem `Array` von Werten, über die iteriert werden soll.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   Mit diesem Format muss die Anzahl der Elemente in jedem Array nicht gleich sein. Die angegebenen Werte werden unabhängig voneinander verteilt.

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

   Nachdem eine geeignete Menge von Keyframes aus den Eigenschaftswerte-Listen generiert wurde, wird jeder angegebene Offset auf das entsprechende Keyframe angewendet. Wenn nicht genügend Werte vorhanden sind oder die Liste `null`-Werte enthält, werden die Keyframes ohne angegebenen Offset gleichmäßig verteilt, ähnlich wie im oben beschriebenen Array-Format.

   Wenn es zu wenige `easing`- oder `composite`-Werte gibt, wird die entsprechende Liste bei Bedarf wiederholt.

### Implizite `to/from`-Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. ein einzelnes Keyframe) und der Browser ermittelt das andere Ende der Animation, wenn es möglich ist. Zum Beispiel beachten Sie [diese Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht folgendermaßen aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben und der Anfangszustand ist impliziert.

## Attribute

Keyframes spezifizieren Eigenschaft-Wert-Paare der zu animierenden [CSS-Eigenschaften](/de/docs/Web/CSS/CSS_animated_properties). Die Eigenschaftsnamen werden mit {{Glossary("camel_case", "Camel Case")}} angegeben, so dass zum Beispiel {{cssxref("background-color")}} zu `backgroundColor` wird und {{cssxref("background-position-x")}} zu `backgroundPositionX`. Kurzwerte wie {{cssxref("margin")}} sind ebenfalls zulässig.

Zwei Ausnahmeeigenschaften im CSS sind:

- {{cssxref("float")}}, das als `cssFloat` geschrieben werden muss, da "float" ein reserviertes Wort in JavaScript ist. Dies ist nur zur Referenz hier; es hat keine Auswirkung auf die Animation, da "float" keine animierbare CSS-Eigenschaft ist.
- {{cssxref("offset")}}, das als `cssOffset` geschrieben werden muss, da "offset" das Keyframe-Offset darstellt, wie unten beschrieben.

Die folgenden speziellen Attribute können ebenfalls angegeben werden:

- offset
  - : Der Offset des Keyframes, angegeben als Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozentangaben in CSS-Stylesheets mit `@keyframes`. Wenn dieser Wert `null` oder nicht vorhanden ist, wird das Keyframe gleichmäßig zwischen den angrenzenden Keyframes verteilt.
- easing
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- composite
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)-Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies ist `auto`, wenn die Composite-Operation spezifiziert auf dem Effekt verwendet wird.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)
- [`KeyframeEffect.setKeyframes()`](/de/docs/Web/API/KeyframeEffect/setKeyframes)
