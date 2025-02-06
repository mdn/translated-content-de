---
title: :host-context()
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es, Elemente innerhalb eines [Shadow-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu gestalten, basierend auf dem Selektor des Shadow-Hosts (dem Element, das die Shadow-Root enthält) und dessen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow-DOMs vom äußeren DOM isoliert. Mit der `:host-context()` können Sie "nach draußen schauen" und prüfen, ob irgendeines der Vorfahrenelemente eines Hosts einem bestimmten CSS-Selektor entspricht. Beispielsweise können Sie eine andere Textfarbe für Elemente innerhalb einer Shadow-Root anwenden, wenn eine `.dark-theme`-Klasse auf `<body>` gesetzt ist.

Stellen Sie sich vor, Sie haben ein benutzerdefiniertes `<greenhouse>`-Element, das ein `<chameleon>` enthält. In diesem Fall ist `<greenhouse>` der Shadow-DOM-Host, und das `<chameleon>`-Element befindet sich im Shadow-DOM. Die `:host-context()` ermöglicht dem `<chameleon>`, sein Aussehen entsprechend der Umgebung des `<greenhouse>` zu ändern. Ist das `<greenhouse>` an einem sonnigen Standort (hat die Klasse "sunny-theme"), wird das `<chameleon>` gelb. Befindet sich das `<greenhouse>` an einem schattigen Ort (hat die Klasse "shady-theme"), wird das `<chameleon>` blau.

Dieser Selektor durchdringt alle Shadow-Grenzen. Er sucht nach den sonnigen oder schattigen Themen, die direkt auf das `<greenhouse>` oder auf dessen Vorfahren und deren DOMs bis zur Wurzel des Dokuments angewendet wurden.

Um den Selektor nur auf den `<greenhouse>`-Host direkt oder auf das Host-DOM zu beschränken, verwenden Sie die {{cssxref(":host")}}- oder {{cssxref(":host_function", ":host()")}}-Pseudoklasse statt `:host-context()`.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow-DOMs verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/Specificity) von `:host-context()` entspricht der einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) plus der Spezifität des Selektors, der als Argument der Funktion übergeben wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host-context.html", "tabbed-shorter")}}

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

### Selektives Styling von Shadow-Hosts

Die folgenden Codeausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([Live-Demo hier ansehen](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein grundlegendes benutzerdefiniertes Element – `<context-span>` – das Sie um Text herum setzen können:

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
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - no links in headers!" }` gestalten die Instanz des `<context-span>`-Elements (den Shadow-Host in diesem Fall) innerhalb des `<h1>`. Wir haben dies verwendet, um klarzustellen, dass das benutzerdefinierte Element nicht innerhalb des `<h1>` in unserem Design erscheinen sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webkomponenten](/de/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}}-Pseudoklasse
- CSS {{cssxref(":host_function", ":host()")}}-Pseudoklasse
- CSS {{cssxref(":state",":state()")}}-Pseudoklasse
- CSS {{CSSXref("::slotted")}}-Pseudoelement
- HTML {{HTMLElement("template")}}-Element
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
