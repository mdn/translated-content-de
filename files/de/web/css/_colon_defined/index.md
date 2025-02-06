---
title: :defined
slug: Web/CSS/:defined
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:defined`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das definiert wurde. Dazu gehören alle Standard-Elemente, die im Browser integriert sind, sowie benutzerdefinierte Elemente, die erfolgreich definiert wurden (z. B. mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)).

```css
/* Selects any defined element */
:defined {
  font-style: italic;
}

/* Selects any instance of a specific custom element */
custom-element:defined {
  display: block;
}
```

## Syntax

```css
:defined {
  /* ... */
}
```

## Beispiele

### Elemente ausblenden, bis sie definiert sind

In diesem Demo definieren wir ein einfaches benutzerdefiniertes Element namens `<custom-element>` und verwenden die Selektoren `:not(:defined)` und `:defined`, um das Element vor und nach der Definition zu stylen. Dies ist nützlich, wenn Sie ein komplexes benutzerdefiniertes Element haben, das länger benötigt, um in die Seite geladen zu werden – Sie möchten möglicherweise Instanzen des Elements ausblenden, bis die Definition abgeschlossen ist, um zu vermeiden, dass unästhetische, ungestylte Elemente auf der Seite erscheinen.

#### HTML

Der folgende HTML-Code verwendet das benutzerdefinierte Element, das aber noch nicht definiert wurde. Wir fügen auch ein {{htmlelement("button")}} ein, das das benutzerdefinierte Element definiert, wenn es angeklickt wird. Dadurch können Sie dessen Zustand vor und nach der Definition sehen.

```html
<custom-element>
  <p>
    Loaded content: Lorem ipsum tel sed tellus eiusmod tellus. Aenean. Semper
    dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</custom-element>

<button id="btn">define the <code>&lt;custom-element&gt;</code></button>
```

#### CSS

```css hidden
custom-element {
  display: block;
  border: 5px dashed grey;
  border-radius: 1rem;
  height: 100px;
  width: 400px;
  padding: 1rem;
  position: relative;
  user-select: none;
}

code {
  background: #ccc;
}

#btn {
  margin-top: 1rem;
  cursor: pointer;
}
```

Im folgenden CSS verwenden wir den Selektor `custom-element:not(:defined)`, um das Element auszuwählen und es grau zu färben, solange es nicht definiert ist. Mit dem Selektor `custom-element:defined` wird das Element ausgewählt und nach der Definition schwarz eingefärbt.

```css
custom-element:not(:defined) {
  border-color: grey;
  color: grey;
}

custom-element:defined {
  background-color: wheat;
  border-color: black;
  color: black;
}

/* show loading message */
custom-element:not(:defined)::before {
  content: "Loading...";
  position: absolute;
  inset: 0 0 0 0;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius: 1rem;
}

/* remove the loading message */
custom-element:defined::before {
  content: "";
}
```

Wir haben außerdem das [`::before`](/de/docs/Web/CSS/::before)-Pseudo-Element verwendet, um eine "Loading..."-Overlay-Nachricht anzuzeigen, bis das Element definiert ist. Nach der Definition wird die Nachricht entfernt, indem der [`content`](/de/docs/Web/CSS/content)-Wert auf einen leeren String gesetzt wird.

Der folgende JavaScript-Code wurde verwendet, um das benutzerdefinierte Element zu definieren. Um es Ihnen zu ermöglichen, den Zustand des benutzerdefinierten Elements vor und nach der Definition zu sehen, führen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode aus, wenn der Button angeklickt wird.

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  customElements.define("custom-element", class extends HTMLElement {});
  btn.remove();
});
```

#### Ergebnis

{{EmbedLiveSample("Hiding elements until they are defined", "100%", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Components](/de/docs/Web/API/Web_components)
