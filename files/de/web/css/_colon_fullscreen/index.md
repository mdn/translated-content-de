---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
l10n:
  sourceCommit: f5e0743ddbe2f47896d3349191ed1093488e45dd
---

{{CSSRef}}

Die **`:fullscreen`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt jedes Element aus, das sich momentan im Vollbildmodus befindet. Wenn mehrere Elemente in den Vollbildmodus versetzt wurden, werden alle ausgewählt.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Verwendungshinweise

Die `:fullscreen` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie automatisch die Größe, den Stil oder das Layout des Inhalts anpassen, wenn Elemente zwischen Vollbild und herkömmlicher Präsentation wechseln.

## Beispiele

### Stil eines Vollbildelements

Dieses Beispiel wendet eine andere Hintergrundfarbe auf ein {{htmlelement("div")}}-Element an, je nachdem, ob es sich im Vollbildmodus befindet oder nicht. Es enthält einen {{htmlelement("button")}}, um Vollbildmodus ein- und auszuschalten.

```html
<div class="element">
  <h1>MDN :fullscreen Pseudoklassen-Demo</h1>

  <p>
    Diese Demo nutzt die <code>:fullscreen</code> Pseudoklasse, um automatisch
    die Hintergrundfarbe des <code>.element</code>-Divs zu ändern.
  </p>

  <p>
    Normalerweise ist der Hintergrund hellgelb. Im Vollbildmodus ist der Hintergrund
    hellrosa.
  </p>

  <button class="toggle">Vollbild umschalten</button>
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

Das folgende JavaScript stellt eine Event-Handler-Funktion bereit, die Vollbildmodus umschaltet, wenn der `<button>` angeklickt wird.

```js
document.querySelector(".toggle").addEventListener("click", function (event) {
  if (document.fullscreenElement) {
    // Wenn ein Vollbildelement vorhanden ist, Vollbildmodus verlassen.
    document.exitFullscreen();
    return;
  }
  // Das .element-Div in den Vollbildmodus versetzen.
  document.querySelector(".element").requestFullscreen();
});
```

#### Demo

[Sehen Sie das Beispiel live](https://jsfiddle.net/yookoala/oLc1uws0/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- DOM-API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut
