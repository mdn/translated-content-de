---
title: "`:host-context()` CSS-Pseudoklasse"
short-title: :host-context()
slug: Web/CSS/Reference/Selectors/:host-context
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu stylen, basierend auf dem Selektor des Shadow-Hosts (das Element, das die Shadow-Root hat) und dessen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOM vom externen DOM isoliert. Die `:host-context()` erlaubt es Ihnen, „außerhalb“ dieses Shadow DOMs zu schauen und zu prüfen, ob eines der Vorfahrelemente eines Elements mit einem bestimmten CSS-Selektor übereinstimmt. Zum Beispiel können Sie eine andere Textfarbe auf Elemente innerhalb einer Shadow-Root anwenden, wenn eine `.dark-theme`-Klasse auf `<body>` angewendet wird.

Stellen Sie sich dies folgendermaßen vor: Sie haben ein benutzerdefiniertes `<greenhouse>`-Element, in dem ein `<chameleon>` lebt. Hier ist das `<greenhouse>` der Shadow DOM-Host und das `<chameleon>`-Element befindet sich innerhalb des Shadow DOM. Die `:host-context()` lässt das `<chameleon>` sein Aussehen basierend auf der Umgebung des `<greenhouse>` ändern. Wenn das `<greenhouse>` an einem sonnigen Ort ist (hat eine "sunny-theme"-Klasse), wird das `<chameleon>` gelb. Wenn das `<greenhouse>` in einem schattigen Platz ist (eine "shady-theme"-Klasse angewendet), wird das `<chameleon>` blau.

Dieser Selektor durchbricht alle Shadow-Grenzen. Er sucht nach dem angewendeten sonnigen oder schattigen Thema direkt auf dem `<greenhouse>` oder bei einem der Vorfahren des Hosts und aller Vorfahren-DOMs, bis er die Dokumentwurzel erreicht.

Um den Selektor nur auf den `<greenhouse>`-Host direkt zu beschränken oder die Auswahl auf das DOM des Hosts zu begrenzen, verwenden Sie stattdessen die {{cssxref(":host")}} oder {{cssxref(":host()")}} Pseudoklasse.

> [!NOTE]
> Dies hat keinen Effekt, wenn es außerhalb eines Shadow DOM verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) von `:host-context()` entspricht der einer [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) plus der Spezifität des als Funktionsargument übergebenen Selektors.

{{InteractiveExample("CSS Demo: :host-context()", "tabbed-shorter")}}

```css interactive-example
/* Following CSS is being applied inside the shadow DOM. */

:host-context(.container) {
  border: 5px dashed green;
}

:host-context(h1) {
  color: red;
}
```

```html interactive-example
<!-- elements outside shadow dom -->
<div class="container">
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
   a descendant of the selector argument given */
:host-context(h1) {
  font-weight: bold;
}

/* Changes paragraph text color from black to white when
   a .dark-theme class is applied to the document body */
p {
  color: black;
}

:host-context(body.dark-theme) p {
  color: white;
}
```

## Syntax

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## Beispiele

### Selektives Styling von Shadow-Hosts

Die folgenden Codefragmente stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum verwenden können:

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
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die `:host-context(h1) { font-style: italic; }` und `:host-context(h1)::after { content: " - no links in headers!" }` Regeln stylen die Instanz des `<context-span>`-Elements (den Shadow-Host in diesem Fall) innerhalb des `<h1>`. Wir haben es verwendet, um klar zu machen, dass das benutzerdefinierte Element nicht innerhalb des `<h1>` in unserem Design erscheinen sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} Pseudoklasse
- CSS {{cssxref(":host()")}} Pseudoklasse
- CSS {{cssxref(":state",":state()")}} Pseudoklasse
- CSS {{CSSXref("::slotted")}} Pseudoelement
- HTML {{HTMLElement("template")}} Element
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
