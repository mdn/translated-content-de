---
title: :fullscreen
slug: Web/CSS/Reference/Selectors/:fullscreen
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt jedes Element aus, das sich derzeit im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Hinweise zur Verwendung

Die Pseudoklasse `:fullscreen` ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst werden, wenn Elemente zwischen Vollbild- und herkömmlichen Darstellungen wechseln.

## Beispiele

### Styling eines Vollbildelements

Dieses Beispiel wendet eine andere Hintergrundfarbe auf ein {{htmlelement("div")}}-Element an, je nachdem, ob es sich im Vollbildmodus befindet oder nicht. Es enthält einen {{htmlelement("button")}}, um Vollbild ein- und auszuschalten.

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

Die Pseudoklasse `:fullscreen` wird verwendet, um die {{cssxref("background-color")}} des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Das folgende JavaScript enthält eine Event-Handler-Funktion, die den Vollbildmodus umschaltet, wenn der `<button>` angeklickt wird.

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

- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- DOM-API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut
