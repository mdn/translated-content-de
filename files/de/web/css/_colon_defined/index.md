---
title: :defined
slug: Web/CSS/:defined
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`:defined`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das definiert wurde. Dies umfasst sowohl Standard-Elemente, die im Browser eingebaut sind, als auch benutzerdefinierte Elemente, die erfolgreich definiert wurden (d.h. mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)).

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

In diesem Beispiel definieren wir ein einfaches benutzerdefiniertes Element namens `<custom-element>` und verwenden die Selektoren `:not(:defined)` und `:defined`, um das Element vor und nach seiner Definition zu stylen. Dies ist nützlich, wenn Sie ein komplexes benutzerdefiniertes Element haben, das eine Weile benötigt, um in die Seite geladen zu werden — Sie möchten möglicherweise Instanzen des Elements ausblenden, bis die Definition abgeschlossen ist, damit Sie keine unschönen ungestylten Elemente auf der Seite blinken sehen.

#### HTML

Der folgende HTML-Code verwendet das benutzerdefinierte Element, aber das Element wurde noch nicht definiert. Wir fügen auch ein {{htmlelement("button")}} hinzu, das das benutzerdefinierte Element definiert, wenn es angeklickt wird, sodass Sie seinen Zustand vor und nach der Definition sehen können.

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
  background: #cccccc;
}

#btn {
  margin-top: 1rem;
  cursor: pointer;
}
```

Im folgenden CSS verwenden wir den Selektor `custom-element:not(:defined)`, um das Element auszuwählen und es grau zu färben, während es nicht definiert ist, und den Selektor `custom-element:defined`, um das Element auszuwählen und es nach der Definition schwarz zu färben.

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

Wir haben auch das [`::before`](/de/docs/Web/CSS/::before) Pseudoelement verwendet, um eine "Loading..." Overlay-Nachricht anzuzeigen, bis das Element definiert ist. Nach der Definition wird es entfernt, indem der [`content`](/de/docs/Web/CSS/content) auf eine leere Zeichenfolge gesetzt wird.

Das folgende JavaScript wurde verwendet, um das benutzerdefinierte Element zu definieren. Um Ihnen zu ermöglichen, den Zustand des benutzerdefinierten Elements vor und nach der Definition zu sehen, führen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) aus, wenn der Button angeklickt wird.

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

- [Web-Komponenten](/de/docs/Web/API/Web_components)
