---
title: "`:fullscreen` CSS-Pseudoklasse"
short-title: :fullscreen
slug: Web/CSS/Reference/Selectors/:fullscreen
l10n:
  sourceCommit: 8fa3309a76fe8dc4cf5e8eed97ef596a91513fbd
---

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt jedes Element aus, das sich derzeit im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Anwendungshinweise

Die `:fullscreen`-Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so anzupassen, dass die Größe, der Stil oder das Layout des Inhalts automatisch angepasst werden, wenn Elemente zwischen Vollbild- und herkömmlichen Darstellungen wechseln.

## Beispiele

### Gestaltung eines Vollbildelements

Dieses Beispiel wendet eine andere Hintergrundfarbe auf ein {{htmlelement("div")}}-Element an, abhängig davon, ob es sich im Vollbildmodus befindet oder nicht. Es enthält einen {{htmlelement("button")}}, um den Vollbildmodus ein- und auszuschalten.

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

Die `:fullscreen`-Pseudoklasse wird verwendet, um die {{cssxref("background-color")}} des `<div>` zu überschreiben, wenn es sich im Vollbildmodus befindet.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Das folgende JavaScript stellt eine Event-Handler-Funktion bereit, die den Vollbildmodus umschaltet, wenn der `<button>` angeklickt wird.

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

{{EmbedLiveSample("Gestaltung eines Vollbildelements", "", "300", "", "", "", "fullscreen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::backdrop")}}
- {{cssxref(":xr-overlay")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- DOM API: [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen), [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut
