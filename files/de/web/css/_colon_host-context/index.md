---
title: :host-context()
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu stylen, basierend auf dem Selektor des Shadow-Hosts (das Element, das die Shadow-Root besitzt) und seinen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOMs vom äußeren DOM isoliert. Mit `:host-context()` können Sie "nach draußen blicken" und überprüfen, ob eines der Vorfahrelemente eines Elements einem bestimmten CSS-Selektor entspricht. Zum Beispiel könnte eine andere Textfarbe auf Elemente innerhalb einer Shadow-Root angewendet werden, wenn eine `.dark-theme`-Klasse auf `<body>` angewendet wird.

Stellen Sie sich das so vor: Sie haben ein benutzerdefiniertes `<greenhouse>`-Element, das ein `<chameleon>` beherbergt. Hierbei ist das `<greenhouse>` der Shadow-DOM-Host und das `<chameleon>`-Element befindet sich innerhalb des Shadow-DOMs. Mit `:host-context()` kann das `<chameleon>` sein Aussehen basierend auf der Umgebung des `<greenhouse>` ändern. Wenn das `<greenhouse>` an einem sonnigen Ort steht (eine "sunny-theme"-Klasse hat), wird das `<chameleon>` gelb. Befindet sich das `<greenhouse>` an einem schattigen Platz (eine "shady-theme"-Klasse wird angewendet), wird das `<chameleon>` blau.

Dieser Selektor durchbricht alle Shadow-Grenzen. Er sucht nach dem sonnigen oder schattigen Thema, das direkt auf das `<greenhouse>` oder auf einen der Vorfahren des Hosts und dessen Vorfahren-DOMs bis hin zur Dokumentwurzel angewendet wird.

Um den Selektor nur auf den `<greenhouse>`-Host direkt zu beschränken oder die Auswahl auf das DOM des Hosts zu begrenzen, verwenden Sie die Pseudoklasse {{cssxref(":host")}} oder {{cssxref(":host_function", ":host()")}}.

> [!NOTE]
> Dies hat keine Auswirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von `:host-context()` entspricht der einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), plus die Spezifität des Selektors, der als Argument der Funktion übergeben wird.

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
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## Syntax

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## Beispiele

### Selektives Stylen von Shadow-Hosts

Die folgenden Codeausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text wickeln können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style`- und `span`-Elemente, füllen den `span` mit dem Inhalt des benutzerdefinierten Elements und fügen dem `style`-Element einige CSS-Regeln hinzu:

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

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1)::after { content: " - keine Links in Überschriften!" }` stylen die Instanz des `<context-span>`-Elements (den Shadow-Host in diesem Fall) innerhalb des `<h1>`. Wir haben es genutzt, um klarzustellen, dass das benutzerdefinierte Element nicht innerhalb des `<h1>` in unserem Design erscheinen sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} Pseudoklasse
- CSS {{cssxref(":host_function", ":host()")}} Pseudoklasse
- CSS {{cssxref(":state",":state()")}} Pseudoklasse
- CSS {{CSSXref("::slotted")}} Pseudoelement
- HTML {{HTMLElement("template")}} Element
- [CSS-Skopierung](/de/docs/Web/CSS/CSS_scoping) Modul
