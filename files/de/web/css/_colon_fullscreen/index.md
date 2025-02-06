---
title: :fullscreen
slug: Web/CSS/:fullscreen
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wendet sich auf jedes Element an, das sich aktuell im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Verwendungshinweise

Die `:fullscreen`-Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst werden, wenn Elemente zwischen Vollbild- und herkömmlichen Präsentationsmodi wechseln.

## Beispiele

### Styling eines Vollbildelements

Dieses Beispiel wendet eine andere Hintergrundfarbe auf ein {{htmlelement("div")}}-Element an, abhängig davon, ob es sich im Vollbildmodus befindet oder nicht. Es enthält einen {{htmlelement("button")}}-Knopf, um zwischen Vollbildmodus ein- und auszuschalten.

```html
<div class="element">
  <h1>MDN :fullscreen pseudo-class demo</h1>

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

Die `:fullscreen`-Pseudoklasse wird verwendet, um die [`background-color`](/de/docs/Web/CSS/background-color) des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Der folgende JavaScript-Code enthält eine Ereignisbehandlungsfunktion, die den Vollbildmodus umschaltet, wenn der `<button>` geklickt wird.

```js
document.querySelector(".toggle").addEventListener("click", function (event) {
  if (document.fullscreenElement) {
    // If there is a fullscreen element, exit full screen.
    document.exitFullscreen();
    return;
  }
  // Make the .element div fullscreen.
  document.querySelector(".element").requestFullscreen();
});
```

#### Demo

[Beispiel live ansehen](https://jsfiddle.net/yookoala/oLc1uws0/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- DOM-API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut
