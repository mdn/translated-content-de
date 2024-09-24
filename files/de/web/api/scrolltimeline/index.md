---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

Das **`ScrollTimeline`**-Interface der {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} repräsentiert eine Scroll-Fortschritt-Zeitleiste (siehe [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details).

Übergeben Sie eine Instanz von `ScrollTimeline` an den {{domxref("Animation.Animation", "Animation()")}}-Konstruktor oder die {{domxref("Element.animate()", "animate()")}}-Methode, um sie als Zeitleiste zu spezifizieren, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ScrollTimeline.ScrollTimeline", "ScrollTimeline()")}} {{Experimental_Inline}}
  - : Erstellt eine neue `ScrollTimeline`-Objektinstanz.

## Instanz-Eigenschaften

_Dieses Interface erbt auch die Eigenschaften seines Elternteils, {{domxref("AnimationTimeline")}}._

- {{domxref("ScrollTimeline.source", "source")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das scrollbare Element (_Scroller_) zurück, dessen Scrollposition den Fortschritt der Zeitleiste und damit die Animation steuert.
- {{domxref("ScrollTimeline.axis", "axis")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste steuert.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, {{domxref("AnimationTimeline")}}._

## Beispiele

### Anzeige der Quelle und Achse einer Scroll-Fortschritt-Zeitleiste

In diesem Beispiel animieren wir ein Element mit einer `class` von `box` entlang einer Sicht-Fortschritt-Zeitleiste — es animiert über den Bildschirm, während das Dokument scrollt. Wir geben das `source`-Element und die Scroll-`axis` an einem `output`-Element in der oberen rechten Ecke aus.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div class="content"></div>
<div class="box"></div>
<div class="output"></div>
```

#### CSS

Das CSS für das Beispiel sieht folgendermaßen aus:

```css
.content {
  height: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
  left: 0%;
}

.output {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 5px;
  right: 5px;
}
```

#### JavaScript

Im JavaScript greifen wir auf die Verweise auf die `box` und `output`-`<div>`s zu, erstellen dann eine neue `ScrollTimeline` und geben an, dass das Element, das den Fortschritt der Scroll-Zeitleiste steuern wird, das Dokument ({{htmlelement("html")}}) Element ist und die Scrollachse die `block`-Achse ist. Danach animieren wir das `box`-Element mit der Web Animations API. Abschließend zeigen wir das Quell-Element und die Achse im `output`-Element an.

```js
const box = document.querySelector(".box");
const output = document.querySelector(".output");

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

box.animate(
  {
    rotate: ["0deg", "720deg"],
    left: ["0%", "100%"],
  },
  {
    timeline,
  },
);

output.textContent = `Timeline source element: ${timeline.source.nodeName}. Timeline scroll axis: ${timeline.axis}`;
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie die Box animiert wird.

{{EmbedLiveSample("Displaying the source and axis of a scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
