---
title: :host()
slug: Web/CSS/:host_function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:host()`** [CSS](/de/docs/Web/CSS)-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Funktion wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, das das CSS enthält, in dem sie verwendet wird (damit Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) – jedoch nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Shadow-Host übereinstimmt. **`:host()`** hat keine Wirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

Der offensichtlichste Anwendungsfall hierfür ist, einem benutzerdefinierten Element eine Klassenname nur auf bestimmte Instanzen zu setzen und dann den entsprechenden Klassenselektor als Funktionsargument einzuschließen. Sie können dies nicht mit einem Nachfahren-Selektorausdruck verwenden, um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich innerhalb eines bestimmten Vorfahren befinden. Dafür ist {{CSSxRef(":host-context", ":host-context()")}} zuständig.

> [!NOTE]
> Während andere funktionale Pseudoklassen wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}} eine Liste von Selektoren als Parameter akzeptieren, nimmt `:host()` einen einzelnen zusammengesetzten Selektor als Parameter. Darüber hinaus berücksichtigen `:is()` und `:not()` nur die Spezifität ihres Arguments, während die Spezifität von `:host()` sowohl die Spezifität der Pseudoklasse **als auch** die Spezifität ihres Arguments ist.

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

Die folgenden Ausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein benutzerdefiniertes Element — `<context-span>` — das Sie um einen Text herum platzieren können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style`- und `span`-Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und das `style`-Element mit einigen CSS-Regeln:

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

Die Regel `:host(.footer) { color : red; }` stylt alle Instanzen des `<context-span>`-Elements (in diesem Fall der Shadow-Host) im Dokument, die die `footer`-Klasse gesetzt haben — wir haben es verwendet, um Instanzen des Elements innerhalb des {{htmlelement("footer")}} eine spezielle Farbe zu geben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Components](/de/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":state",":state()")}}
