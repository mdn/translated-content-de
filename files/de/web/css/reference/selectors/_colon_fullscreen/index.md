---
title: :fullscreen
slug: Web/CSS/Reference/Selectors/:fullscreen
l10n:
  sourceCommit: 21da3683d67c91c9a75a1c3fe98d406c82d8bf8b
---

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) passt auf jedes Element, das sich momentan im Vollbildmodus befindet. Wenn mehrere Elemente im Vollbildmodus sind, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Hinweise zur Verwendung

Die `:fullscreen` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst wird, wenn Elemente zwischen Vollbild- und traditionellen Präsentationen wechseln.

## Beispiele

### Stil eines Vollbildelements

Dieses Beispiel weist einem {{htmlelement("div")}}-Element je nach Vollbildmodus eine andere Hintergrundfarbe zu. Es enthält einen {{htmlelement("button")}}, um Vollbild an- und auszuschalten.

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

Die `:fullscreen` Pseudoklasse wird verwendet, um die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Das folgende JavaScript stellt eine Ereignishandler-Funktion bereit, die Vollbild umschaltet, wenn der `<button>` geklickt wird.

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
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- DOM API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut
