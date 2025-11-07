---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die **`ScrollTimeline`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert eine Scroll-Fortschritts-Timeline (sehen Sie sich [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Details an).

Übergeben Sie eine `ScrollTimeline`-Instanz an den [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor oder die [`animate()`](/de/docs/Web/API/Element/animate)-Methode, um sie als die Timeline festzulegen, die den Fortschritt der Animation steuern wird.

{{InheritanceDiagram}}

## Konstruktor

- [`ScrollTimeline()`](/de/docs/Web/API/ScrollTimeline/ScrollTimeline)
  - : Erstellt eine neue `ScrollTimeline`-Objektinstanz.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihrer übergeordneten Klasse, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

- [`source`](/de/docs/Web/API/ScrollTimeline/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das scrollbarere Element (_scroller_) zurück, dessen Scroll-Position den Fortschritt der Timeline und somit der Animation antreibt.
- [`axis`](/de/docs/Web/API/ScrollTimeline/axis) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Scroll-Achse repräsentiert, die den Fortschritt der Timeline antreibt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihrer übergeordneten Klasse, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

## Beispiele

### Anzeige der Quelle und Achse einer Scroll-Fortschritts-Timeline

In diesem Beispiel animieren wir ein Element mit der `class` `box` entlang einer Ansichtsfortschritts-Timeline – es animiert über den Bildschirm, während das Dokument gescrollt wird. Wir geben das `source`-Element und die Scroll-`axis` in einem `output`-Element in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content"></div>
<div class="box"></div>
<div class="output"></div>
```

#### CSS

Der CSS-Code für das Beispiel sieht folgendermaßen aus:

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

Im JavaScript holen wir Referenzen auf die `box`- und `output`-`<div>`-Elemente, erstellen dann eine neue `ScrollTimeline` und geben an, dass das Element, das den Fortschritt der Scroll-Timeline antreiben wird, das Dokument-({{htmlelement("html")}})-Element ist und die Scroll-Achse die `block`-Achse ist. Wir animieren dann das `box`-Element mit der Web Animations API. Zuletzt zeigen wir das Quell-Element und die Achse im `output`-Element an.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
