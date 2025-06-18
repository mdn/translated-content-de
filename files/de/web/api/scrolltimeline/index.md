---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Animations")}}

Das **`ScrollTimeline`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert eine Scrollfortschritt-Zeitleiste (siehe [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details).

Übergeben Sie eine `ScrollTimeline`-Instanz an den [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor oder die [`animate()`](/de/docs/Web/API/Element/animate)-Methode, um sie als Zeitleiste festzulegen, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- [`ScrollTimeline()`](/de/docs/Web/API/ScrollTimeline/ScrollTimeline)
  - : Erstellt eine neue Instanz eines `ScrollTimeline`-Objekts.

## Instanzeigenschaften

_Dieses Interface erbt auch die Eigenschaften seines Elternteils, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

- [`source`](/de/docs/Web/API/ScrollTimeline/source) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das scrollbare Element (_scroller_) zurück, dessen Scroll-Position den Fortschritt der Zeitleiste und damit der Animation antreibt.
- [`axis`](/de/docs/Web/API/ScrollTimeline/axis) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Scroll-Achse repräsentiert, die den Fortschritt der Zeitleiste antreibt.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

## Beispiele

### Anzeige der Quelle und Achse einer Scrollfortschritt-Zeitleiste

In diesem Beispiel animieren wir ein Element mit einer `class` von `box` entlang einer Sichtfortschritt-Zeitleiste — es animiert über den Bildschirm, während das Dokument scrollt. Wir geben das `source`-Element und die Scroll-`axis` in einem `output`-Element in der oberen rechten Ecke aus.

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

Im JavaScript holen wir Referenzen zu den `box` und `output` `<div>`s, dann erstellen wir eine neue `ScrollTimeline`, wobei wir angeben, dass das Element, das den Fortschritt der Scroll-Zeitleiste antreiben wird, das Dokument ({{htmlelement("html")}}) Element ist, und die Scroll-Achse die `block`-Achse ist. Dann animieren wir das `box`-Element mit der Web Animations API. Schließlich zeigen wir das Quell-Element und die Achse im `output`-Element an.

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
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
