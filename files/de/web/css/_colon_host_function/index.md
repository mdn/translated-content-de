---
title: :host()
slug: Web/CSS/:host_function
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{CSSRef}}

Die **`:host()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) Funktion wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, das innerhalb verwendet wird (so können Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen) — aber nur, wenn der als Parameter der Funktion angegebene Selektor zum Shadow-Host passt. **`:host()`** hat keine Wirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

Der offensichtlichste Anwendungsfall besteht darin, einen Klassennamen nur auf bestimmten Instanzen von benutzerdefinierten Elementen zu setzen und dann den entsprechenden Klassen-Selektor als Funktionsargument einzuschließen. Sie können dies nicht mit einem Nachfahrenselektor-Ausdruck verwenden, um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich innerhalb eines bestimmten Vorfahren befinden. Das ist die Aufgabe von {{CSSxRef(":host-context", ":host-context()")}}.

> [!NOTE]
> Während andere funktionale Pseudoklassen wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}} eine Liste von Selektoren als Parameter akzeptieren, nimmt `:host()` einen einzelnen komponierten Selektor als Parameter. Außerdem berücksichtigt `:is()` und `:not()` nur die Spezifität des Arguments, während die Spezifität von `:host()` sowohl die Spezifität der Pseudoklasse **als auch** die Spezifität seines Arguments ist.

{{InteractiveExample("CSS Demo: :host()", "tabbed-shorter")}}

```css interactive-example
/* Following CSS is being applied inside the shadow DOM. */

:host(h1) {
  color: red;
}

:host(#shadow-dom-host) {
  border: 2px dashed blue;
}
```

```html interactive-example
<!-- elements outside shadow dom -->
<div id="container">
  <h1 id="shadow-dom-host"></h1>
</div>
```

```js interactive-example
const shadowDom = init();

// add a <span> element in the shadow DOM
const span = document.createElement("span");
span.textContent = "Inside shadow DOM";
shadowDom.appendChild(span);

// attach shadow DOM to the #shadow-dom-host element
function init() {
  const host = document.getElementById("shadow-dom-host");
  const shadowDom = host.attachShadow({ mode: "open" });

  const cssTab = document.querySelector("#css-output");
  const shadowStyle = document.createElement("style");
  shadowStyle.textContent = cssTab.textContent;
  shadowDom.appendChild(shadowStyle);

  cssTab.addEventListener("change", () => {
    shadowStyle.textContent = cssTab.textContent;
  });
  return shadowDom;
}
```

```css
/* Selects a shadow root host, only if it is
   matched by the selector argument */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## Syntax

```css-nolint
:host(<compound-selector>) {
  /* ... */
}
```

## Beispiele

### Selektives Styling von Shadow-Hosts

Die folgenden Codeausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein benutzerdefiniertes Element — `<context-span>` — mit dem Sie Text umschließen können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style` und `span` Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und das `style` Element mit einigen CSS-Regeln:

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1)::after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regel `:host(.footer) { color : red; }` stylt alle Instanzen des `<context-span>` Elements (den Shadow-Host in diesem Fall) im Dokument, die die `footer` Klasse gesetzt haben — wir haben es verwendet, um Instanzen des Elements innerhalb des {{htmlelement("footer")}} eine spezielle Farbe zu geben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":state",":state()")}}
