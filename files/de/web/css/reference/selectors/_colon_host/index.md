---
title: :host
slug: Web/CSS/Reference/Selectors/:host
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:host`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, das innerhalb verwendet wird – mit anderen Worten, dies ermöglicht Ihnen, ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auszuwählen.

> [!NOTE]
> Dies hat keine Auswirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

{{InteractiveExample("CSS Demo: :host", "tabbed-shorter")}}

```css interactive-example
/* This CSS is being applied inside the shadow DOM. */

:host {
  background-color: aqua;
}
```

```html interactive-example
<h1 id="shadow-dom-host"></h1>
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
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## Syntax

```css
:host {
  /* ... */
}
```

## Beispiele

### Styling des Shadow-Hosts

Die folgenden Codeausschnitte stammen aus unserem [host-selectors example](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element – `<context-span>` – das Sie um Text herum verwenden können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style` und `span` Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und füllen das `style` Element mit einigen CSS-Regeln:

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

Die Regel `:host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }` gestaltet alle Instanzen des `<context-span>` Elements (den Shadow-Host in diesem Fall) im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Komponenten](/de/docs/Web/API/Web_components)
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
- {{CSSxref("::slotted")}}
- {{CSSxRef(":state",":state()")}}
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
