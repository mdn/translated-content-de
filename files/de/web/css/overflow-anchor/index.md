---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`overflow-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet eine Möglichkeit, das Scroll-Ankerverhalten des Browsers zu deaktivieren, das die Scrollposition anpasst, um Inhaltsverschiebungen zu minimieren.

Das Scroll-Ankerverhalten ist standardmäßig in jedem Browser aktiviert, der es unterstützt. Daher ist es in der Regel nur erforderlich, den Wert dieser Eigenschaft zu ändern, wenn Sie Probleme mit dem Scroll-Ankerverhalten in einem Dokument oder in einem Teil eines Dokuments haben und das Verhalten ausschalten müssen.

{{InteractiveExample("CSS Demo: overflow-anchor")}}

```css interactive-example-choice
overflow-anchor: auto;
```

```css interactive-example-choice
overflow-anchor: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <button id="playback" type="button">Start lottery</button>
    <p>Magic numbers for today are:</p>
    <div id="example-element"></div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#example-element {
  height: 100%;
  border: 2px dashed dodgerblue;
  padding: 0.75em;
  text-align: left;
  overflow: scroll;
}

#playback {
  font-size: 1em;
  width: 10em;
  height: 4em;
  font-weight: bold;
  margin: 1em auto;
  background-color: aliceblue;
  border: solid 2px dodgerblue;
  border-radius: 5px;
}

#playback:hover {
  border-color: lightseagreen;
}

#playback:active {
  filter: brightness(0.9);
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");
  let intervalId;

  function setInitialState() {
    example.innerHTML = "";
    Array.from({ length: 10 }, (_, i) => i).forEach(addContent);
    example.scrollTop = example.scrollHeight;
  }

  function addContent() {
    console.log("adding content");
    const magicNumber = Math.floor(Math.random() * 10000);
    example.insertAdjacentHTML(
      "afterbegin",
      `<div class="new-content-container">New Magic Number: ${magicNumber}</div>`,
    );
  }

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "Start lottery";
      clearInterval(intervalId);
    } else {
      example.classList.add("running");
      button.textContent = "Stop lottery";
      setInitialState();
      intervalId = setInterval(addContent, 1000);
    }
  });
});
```

## Syntax

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Werte

- `auto`
  - : Das Element wird zu einem potenziellen Anker, wenn die Scrollposition angepasst wird.
- `none`
  - : Das Element wird nicht als potenzieller Anker ausgewählt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Scroll-Ankerverhalten verhindern

Um das Scroll-Ankerverhalten in einem Dokument zu verhindern, verwenden Sie die `overflow-anchor` Eigenschaft.

```css
* {
  overflow-anchor: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zum Scroll-Ankerverhalten](/de/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
