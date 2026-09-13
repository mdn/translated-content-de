---
title: "`:defined` CSS-Pseudoklasse"
short-title: :defined
slug: Web/CSS/Reference/Selectors/:defined
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`:defined`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes Element, das definiert wurde. Dies schließt sowohl standardmäßige, im Browser integrierte Elemente als auch benutzerdefinierte Elemente ein, die erfolgreich definiert wurden (d.h. mit der [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode).

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

In diesem Demo definieren wir ein einfaches benutzerdefiniertes Element namens `<custom-element>` und verwenden die `:not(:defined)` und `:defined` Selektoren, um das Element vor und nach seiner Definition zu stylen. Dies ist nützlich, wenn Sie ein komplexes benutzerdefiniertes Element haben, das einige Zeit benötigt, um in die Seite geladen zu werden — Sie möchten möglicherweise Instanzen des Elements ausblenden, bis die Definition abgeschlossen ist, damit Sie keine ungestylten Elemente plötzlich auf der Seite sehen.

#### HTML

Der folgende HTML-Code verwendet das benutzerdefinierte Element, aber das Element wurde noch nicht definiert. Wir fügen auch ein {{htmlelement("button")}} hinzu, das das benutzerdefinierte Element beim Klicken definiert, sodass Sie seinen Zustand vor und nach der Definition sehen können.

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

Im folgenden CSS verwenden wir den `custom-element:not(:defined)` Selektor, um das Element auszuwählen und es grau zu färben, solange es nicht definiert ist. Der `custom-element:defined` Selektor wird verwendet, um das Element auszuwählen und es schwarz zu färben, nachdem es definiert wurde.

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

Wir haben auch das {{cssxref("::before")}} Pseudoelement verwendet, um eine "Lädt..." Überlagerungsnachricht anzuzeigen, bis das Element definiert ist. Nach der Definition wird es entfernt, indem der {{cssxref("content")}} auf einen leeren String gesetzt wird.

Der folgende JavaScript-Code wurde verwendet, um das benutzerdefinierte Element zu definieren. Um Ihnen zu ermöglichen, den Zustand des benutzerdefinierten Elements vor und nach der Definition zu sehen, führen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode aus, wenn der Button geklickt wird.

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
