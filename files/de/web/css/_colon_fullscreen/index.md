---
title: :fullscreen
slug: Web/CSS/:fullscreen
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht jedem Element, das sich derzeit im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden sie alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Verwendungshinweise

Die `:fullscreen` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie automatisch die Größe, den Stil oder das Layout von Inhalten anpassen, wenn Elemente zwischen Vollbild- und herkömmlichen Präsentationen wechseln.

## Beispiele

### Styling eines Vollbildelements

In diesem Beispiel wird eine andere Hintergrundfarbe auf ein {{htmlelement("div")}} Element angewendet, abhängig davon, ob es sich im Vollbildmodus befindet oder nicht. Es enthält einen {{htmlelement("button")}}, um den Vollbildmodus ein- und auszuschalten.

```html
<div class="element">
  <h1><code>:fullscreen</code> pseudo-class demo</h1>

  <p>
    This demo uses the <code>:fullscreen</code> pseudo-class to automatically
    change the background color of the <code>.element</code> div.
  </p>

  <p>
    Normally, the background is light yellow. In fullscreen mode, the background
    is light pink.
  </p>

  <button class="toggle">Toggle Fullscreen</button>
</div>
```

Die `:fullscreen` Pseudoklasse wird verwendet, um die [`background-color`](/de/docs/Web/CSS/background-color) des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Das folgende JavaScript bietet eine Ereignishandlerversion, die den Vollbildmodus umschaltet, wenn der `<button>` angeklickt wird.

```js
document.querySelector(".toggle").addEventListener("click", (event) => {
  if (document.fullscreenElement) {
    // If there is a fullscreen element, exit full screen.
    document.exitFullscreen();
    return;
  }
  // Make the .element div fullscreen.
  document.querySelector(".element").requestFullscreen();
});
```

```css hidden
.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  padding: 1.2em;
}
```

{{EmbedLiveSample("Styling a fullscreen element", "", "300", "", "", "", "fullscreen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- DOM-API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut
