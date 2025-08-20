---
title: :defined
slug: Web/CSS/:defined
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Die **`:defined`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das definiert wurde. Dazu gehören alle standardmäßigen Elemente, die im Browser eingebaut sind, sowie benutzerdefinierte Elemente, die erfolgreich definiert wurden (d.h. mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)).

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

In diesem Beispiel definieren wir ein einfaches benutzerdefiniertes Element namens `<custom-element>` und verwenden die Selektoren `:not(:defined)` und `:defined`, um das Element vor und nach seiner Definition zu stylen. Dies ist nützlich, wenn Sie ein komplexes benutzerdefiniertes Element haben, das eine Weile braucht, um auf der Seite geladen zu werden — Sie möchten eventuell Instanzen des Elements ausblenden, bis die Definition abgeschlossen ist, um zu vermeiden, dass hässliche ungestylte Elemente auf der Seite blinken.

#### HTML

Der folgende HTML-Code verwendet das benutzerdefinierte Element, aber das Element wurde noch nicht definiert. Wir fügen auch ein {{htmlelement("button")}} hinzu, das das benutzerdefinierte Element definiert, wenn darauf geklickt wird, sodass Sie seinen Zustand vor und nach der Definition sehen können.

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

Im folgenden CSS verwenden wir den `custom-element:not(:defined)`-Selektor, um das Element auszuwählen und grau zu färben, solange es nicht definiert ist, und den `custom-element:defined`-Selektor, um das Element auszuwählen und schwarz zu färben, nachdem es definiert ist.

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
  inset: 0;
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

Wir haben auch das [`::before`](/de/docs/Web/CSS/::before)-Pseudo-Element verwendet, um eine "Loading..."-Overlay-Nachricht anzuzeigen, bis das Element definiert ist. Nach der Definition wird es entfernt, indem der [`content`](/de/docs/Web/CSS/content) auf einen leeren String gesetzt wird.

Das folgende JavaScript wurde verwendet, um das benutzerdefinierte Element zu definieren. Um Ihnen den Zustand des benutzerdefinierten Elements vor und nach der Definition anzuzeigen, führen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) aus, wenn der Button geklickt wird.

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
