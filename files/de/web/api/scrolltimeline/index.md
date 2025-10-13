---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{APIRef("Web Animations")}}

Das **`ScrollTimeline`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) stellt eine Scroll-Fortschritts-Zeitleiste dar (siehe [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details).

Übergeben Sie eine `ScrollTimeline`-Instanz an den [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor oder die [`animate()`](/de/docs/Web/API/Element/animate)-Methode, um sie als Zeitleiste festzulegen, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- [`ScrollTimeline()`](/de/docs/Web/API/ScrollTimeline/ScrollTimeline)
  - : Erstellt eine neue `ScrollTimeline`-Objektinstanz.

## Instanz-Eigenschaften

_Dieses Interface erbt auch die Eigenschaften seines Elternteils, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

- [`source`](/de/docs/Web/API/ScrollTimeline/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das scrollbare Element (_Scroller_) zurück, dessen Scrollposition den Fortschritt der Zeitleiste und somit der Animation antreibt.
- [`axis`](/de/docs/Web/API/ScrollTimeline/axis) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Scrollachse angibt, die den Fortschritt der Zeitleiste steuert.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

## Beispiele

### Anzeigen der Quelle und Achse einer Scroll-Fortschritts-Zeitleiste

In diesem Beispiel animieren wir ein Element mit einer `class` von `box` entlang einer View-Fortschritts-Zeitleiste – es animiert über den Bildschirm, während das Dokument scrollt. Wir geben das `source`-Element und die Scroll-`axis` an ein `output`-Element in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content"></div>
<div class="box"></div>
<div class="output"></div>
```

#### CSS

Der CSS-Code für das Beispiel sieht so aus:

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
  font-family: "Helvetica", "Arial", sans-serif;
  position: fixed;
  top: 5px;
  right: 5px;
}
```

#### JavaScript

Im JavaScript greifen wir auf die Referenzen der `box`- und `output`-`<div>`s zu und erstellen eine neue `ScrollTimeline`, wobei wir angeben, dass das Dokument ({{htmlelement("html")}})-Element das Element ist, das den Fortschritt der Scroll-Zeitleiste antreibt, und die Scrollachse die `block`-Achse ist. Wir animieren dann das `box`-Element mit der Web Animations API. Zuletzt zeigen wir das Quell-Element und die Achse im `output`-Element an.

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

Scrollen Sie, um die Animation der Box zu sehen.

{{EmbedLiveSample("Displaying the source and axis of a scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
