---
title: ":definiert"
slug: Web/CSS/:defined
l10n:
  sourceCommit: 415caa6799f43a4e5d47a8dbc7ed6089730109bf
---

{{CSSRef}}

Die **`:defined`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das definiert wurde. Dies schließt sowohl Standard-Elemente, die in den Browser integriert sind, als auch benutzerdefinierte Elemente ein, die erfolgreich definiert wurden (z. B. mit der Methode {{domxref("CustomElementRegistry.define()")}}).

```css
/* Wählt jedes definierte Element aus */
:defined {
  font-style: italic;
}

/* Wählt jede Instanz eines spezifischen benutzerdefinierten Elements aus */
simple-custom:defined {
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

In dieser Demo definieren wir ein einfaches benutzerdefiniertes Element namens `<custom-element>` und verwenden die Selektoren `:not(:defined)` und `:defined`, um das Element vor und nach seiner Definition zu stylen. Dies ist nützlich, wenn Sie ein komplexes benutzerdefiniertes Element haben, das einige Zeit benötigt, um in die Seite geladen zu werden — möglicherweise möchten Sie Instanzen des Elements ausblenden, bis die Definition abgeschlossen ist, um Blinkeffekte von unschönen, ungestylten Elementen auf der Seite zu vermeiden.

#### HTML

Der folgende HTML-Code verwendet das benutzerdefinierte Element, aber das Element wurde noch nicht definiert. Wir fügen auch einen {{htmlelement("button")}} hinzu, der das benutzerdefinierte Element beim Klicken definiert und Ihnen ermöglicht, seinen Zustand vor und nach der Definition zu sehen.

```html
<custom-element>
  <p>
    Geladener Inhalt: Lorem ipsum tel sed tellus eiusmod tellus. Aenean. Semper
    dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</custom-element>

<button id="btn">Definieren Sie das <code>&lt;custom-element&gt;</code></button>
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

In dem folgenden CSS verwenden wir den `custom-element:not(:defined)` Selektor, um das Element auszuwählen und es grau zu färben, solange es nicht definiert ist, und den `custom-element:defined` Selektor, um das Element auszuwählen und es schwarz zu färben, nachdem es definiert wurde.

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

/* Lade-Nachricht anzeigen */
custom-element:not(:defined)::before {
  content: "Lädt...";
  position: absolute;
  inset: 0 0 0 0;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius: 1rem;
}

/* Lade-Nachricht entfernen */
custom-element:defined::before {
  content: "";
}
```

Wir haben auch das [`::before`](/de/docs/Web/CSS/::before) Pseudoelement verwendet, um eine "Lädt..." Overlay-Nachricht anzuzeigen, bis das Element definiert ist. Nach der Definition wird es durch Setzen des [`content`](/de/docs/Web/CSS/content) auf einen leeren String entfernt.

Das folgende JavaScript wurde verwendet, um das benutzerdefinierte Element zu definieren. Um Ihnen den Zustand des benutzerdefinierten Elements vor und nach der Definition zu zeigen, führen wir die Methode {{domxref("CustomElementRegistry.define", "define()")}} aus, wenn der Button angeklickt wird.

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

- [Webkomponenten](/de/docs/Web/API/Web_components)
