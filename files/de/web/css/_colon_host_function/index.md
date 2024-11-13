---
title: ":host()"
slug: Web/CSS/:host_function
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`:host()`**-Funktion der [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem sie verwendet wird (so können Sie ein benutzerdefiniertes Element aus seinem Shadow DOM heraus auswählen) - allerdings nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Shadow-Host übereinstimmt. **`:host()`** hat keine Wirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

Der offensichtlichste Anwendungsfall dafür ist, einen Klassennamen nur auf bestimmte Instanzen eines benutzerdefinierten Elements zu setzen und dann den relevanten Klassenselektor als Funktionsargument einzuschließen. Sie können dies nicht mit einem Nachfahren-Selektorausdruck verwenden, um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich in einem bestimmten Vorfahren befinden. Das ist die Aufgabe von {{CSSxRef(":host-context", ":host-context()")}}.

> [!NOTE]
> Während andere funktionale Pseudoklassen wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}} eine Liste von Selektoren als Parameter akzeptieren, nimmt `:host()` einen einzigen zusammengesetzten Selektor als Parameter. Darüber hinaus berücksichtigen `:is()` und `:not()` nur die Spezifität ihres Arguments, während die Spezifität von `:host()` sowohl die Spezifität der Pseudoklasse **als auch** die Spezifität ihres Arguments ist.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host_function.html", "tabbed-shorter")}}

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

Die folgenden Code-Snippets stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein benutzerdefiniertes Element — `<context-span>` — das Sie um Text herumlegen können:

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
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regel `:host(.footer) { color : red; }` stylt alle Instanzen des `<context-span>`-Elements (den Shadow-Host in diesem Fall) im Dokument, die die Klasse `footer` gesetzt haben — wir haben sie verwendet, um Instanzen des Elements innerhalb des {{htmlelement("footer")}} eine besondere Farbe zu geben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Komponenten](/de/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":state",":state()")}}
