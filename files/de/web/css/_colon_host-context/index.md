---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: c9b949bbb01b28ade06d3cd5bb8fb279238c524c
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu stylen, basierend auf dem Selektor des Shadow Hosts (dem Element, das die Shadow-Root enthält) und seinen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOM vom DOM außerhalb davon isoliert. Die `:host-context()` erlaubt es Ihnen, "außen" nachzusehen, ob eines der Vorfahrenelemente des Elements einem bestimmten CSS-Selektor entspricht. Zum Beispiel könnte eine andere Textfarbe auf Elemente innerhalb einer Shadow-Root angewendet werden, wenn eine `.dark-theme`-Klasse zu `<body>` hinzugefügt wird.

Denken Sie daran wie folgt: Stellen Sie sich vor, Sie haben ein `<greenhouse>`-benutzerdefiniertes Element mit einem `<chameleon>` darin. Hier ist das `<greenhouse>` der Shadow DOM-Host und das `<chameleon>`-Element befindet sich innerhalb des Shadow DOM. Die `:host-context()` lässt das `<chameleon>` sein Erscheinungsbild basieren auf dem Umfeld des `<greenhouse>` ändern. Wenn das `<greenhouse>` an einem sonnigen Ort steht (hat eine "sunny-theme"-Klasse), wird das `<chameleon>` gelb. Wenn das `<greenhouse>` an einem schattigen Ort steht (stattdessen eine "shady-theme"-Klasse angewendet), wird das `<chameleon>` blau.

Dieser Selektor durchbricht alle Shadow-Bereiche. Er sucht nach dem sonnigen oder schattigen Thema, das direkt auf das `<greenhouse>` angewendet wird oder auf einen der Vorfahren und Vorfahren-DOMs des Hosts, bis zum Dokumenten-Root hinauf.

Um den Selektor nur auf den `<greenhouse>`-Host direkt zu beschränken oder die Auswahl auf das DOM des Hosts zu begrenzen, verwenden Sie stattdessen die {{cssxref(":host")}} oder die {{cssxref(":host_function", ":host()")}} Pseudoklasse.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/Specificity) von `:host-context()` entspricht der einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), plus die Spezifität des Selektors, der als Argument der Funktion übergeben wird.

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

### Selektive Stilgebung von Shadow Hosts

Die folgenden Snippets stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — mit dem Sie Text umschließen können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Im Konstruktor des Elements erstellen wir `style`- und `span`-Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und das `style`-Element mit einigen CSS-Regeln:

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

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - no links in headers!" }` stylen die Instanz des `<context-span>`-Elements (in diesem Fall der Shadow Host) innerhalb des `<h1>`. Wir haben es verwendet, um klarzumachen, dass das benutzerdefinierte Element nicht innerhalb des `<h1>` in unserem Design erscheinen sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Components](/de/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} Pseudoklasse
- CSS {{cssxref(":host_function", ":host()")}} Pseudoklasse
- CSS {{cssxref(":state",":state()")}} Pseudoklasse
- CSS {{CSSXref("::slotted")}} Pseudoelement
- HTML {{HTMLElement("template")}} Element
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
