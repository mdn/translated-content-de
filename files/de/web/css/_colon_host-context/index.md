---
title: :host-context()
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu stylen, basierend auf dem Selektor des Shadow Hosts (dem Element, das das Shadow Root hat) und dessen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOM vom DOM außerhalb davon isoliert. Die `:host-context()` erlaubt es Ihnen, "außerhalb" dieses Shadow DOM zu schauen und zu prüfen, ob irgendwelche Vorfahren des Elements einem bestimmten CSS-Selektor entsprechen. Zum Beispiel, das Anwenden einer anderen Textfarbe auf Elemente innerhalb eines Shadow Roots, wenn eine `.dark-theme`-Klasse auf `<body>` angewendet wird.

Stellen Sie sich das so vor: Stellen Sie sich vor, Sie haben ein benutzerdefiniertes Element `<greenhouse>`, das einen `<chameleon>` im Inneren hat. Hier ist das `<greenhouse>` der Shadow DOM Host und das `<chameleon>`-Element ist innerhalb des Shadow DOM. Die `:host-context()` lässt das `<chameleon>` sein Aussehen basierend auf der Umgebung des `<greenhouse>` ändern. Wenn das `<greenhouse>` an einem sonnigen Ort ist (eine "sunny-theme"-Klasse hat), wird das `<chameleon>` gelb. Wenn das `<greenhouse>` an einem schattigen Ort ist (stattdessen eine "shady-theme"-Klasse angewendet wird), wird das `<chameleon>` blau.

Dieser Selektor durchdringt alle Shadow-Grenzen. Es sucht nach dem sonnigen oder schattigen Thema, das direkt auf das `<greenhouse>` angewendet wird oder auf einen der Vorfahren des Hosts und deren DOMs bis zum Dokumenten-Root.

Um den Selektor nur auf den `<greenhouse>`-Host direkt oder auf das DOM des Hosts zu beschränken, verwenden Sie die {{cssxref(":host")}}- oder {{cssxref(":host_function", ":host()")}}-Pseudoklasse stattdessen.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von `:host-context()` ist die einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), plus der Spezifität des Selektors, der als Argument der Funktion übergeben wird.

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

### Selektives Stylen von Shadow Hosts

Die folgenden Code-Schnipsel stammen aus unserem [host-selectors-Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text wickeln können:

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

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1)::after { content: " - no links in headers!" }` style die Instanz des `<context-span>`-Elements (den Shadow Host in diesem Fall) innerhalb des `<h1>`. Wir haben es verwendet, um klar zu machen, dass das benutzerdefinierte Element nicht innerhalb des `<h1>` in unserem Design erscheinen sollte.

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
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
