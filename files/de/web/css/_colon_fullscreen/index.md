---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
l10n:
  sourceCommit: f5e0743ddbe2f47896d3349191ed1093488e45dd
---

{{CSSRef}}

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit jedem Element überein, das sich derzeit im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Hinweise zur Verwendung

Die `:fullscreen` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie die Größe, den Stil oder das Layout von Inhalten automatisch anpassen, wenn Elemente zwischen Vollbild und herkömmlicher Präsentation wechseln.

## Beispiele

### Stil eines Vollbildelements

Dieses Beispiel wendet eine andere Hintergrundfarbe auf ein {{htmlelement("div")}}-Element an, je nachdem, ob es im Vollbildmodus ist oder nicht. Es enthält ein {{htmlelement("button")}}, um den Vollbildmodus ein- und auszuschalten.

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

Die `:fullscreen` Pseudoklasse wird verwendet, um die [`background-color`](/de/docs/Web/CSS/background-color) des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Das folgende JavaScript bietet eine Ereignis-Handler-Funktion, die den Vollbildmodus umschaltet, wenn das `<button>` geklickt wird.

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
- DOM API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut
