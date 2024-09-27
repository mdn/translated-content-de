---
title: ":host()"
slug: Web/CSS/:host_function
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:host()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Funktion wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem es verwendet wird (damit können Sie ein benutzerdefiniertes Element aus seinem Shadow-DOM heraus auswählen) — jedoch nur, wenn der als Parameter der Funktion angegebene Selektor dem Shadow-Host entspricht. **`:host()`** hat keine Wirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

Der offensichtlichste Gebrauch besteht darin, einen Klassennamen nur auf bestimmten benutzerdefinierten Elementinstanzen zu setzen und dann den entsprechenden Klassenselektor als Funktionsargument einzuschließen. Sie können dies nicht mit einem Nachfahrenselektor-Ausdruck verwenden, um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich innerhalb eines bestimmten Vorfahren befinden. Dies ist die Aufgabe von {{CSSxRef(":host-context", ":host-context()")}}.

> [!NOTE]
> Während andere funktionale Pseudoklassen wie {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":not", ":not()")}} eine Liste von Selektoren als Parameter akzeptieren, nimmt `:host()` einen einzelnen zusammengesetzten Selektor als seinen Parameter. Zusätzlich berücksichtigen `:is()` und `:not()` nur die Spezifität ihres Arguments, während die Spezifität von `:host()` sowohl die Spezifität der Pseudoklasse **als auch** die Spezifität ihres Arguments ist.

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

Die folgenden Codeausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum platzieren können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Im Konstruktor des Elements erstellen wir `style` und `span` Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und füllen das `style` Element mit einigen CSS-Regeln:

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

Die Regel `:host(.footer) { color : red; }` stylt alle Instanzen des `<context-span>` Elements (den Shadow-Host in diesem Fall) im Dokument, die die Klasse `footer` gesetzt haben — wir haben es benutzt, um Instanzen des Elements innerhalb des {{htmlelement("footer")}} eine spezielle Farbe zu geben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":state",":state()")}}
