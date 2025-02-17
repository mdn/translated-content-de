---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu gestalten, basierend auf dem Selektor des Shadow-Hosts (dem Element, das die Shadow-Root enthält) und seinen DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOMs vom DOM außerhalb davon isoliert. Die `:host-context()`-Pseudoklasse erlaubt es Ihnen, "außerhalb" dieses Shadow DOMs nachzusehen und zu überprüfen, ob eines der Vorfahren des Elements einem bestimmten CSS-Selektor entspricht. Beispielsweise kann damit eine andere Textfarbe auf Elemente innerhalb einer Shadow-Root angewendet werden, wenn die Klasse `.dark-theme` auf `<body>` angewendet wurde.

Denken Sie an folgendes Szenario: Stellen Sie sich vor, Sie haben ein benutzerdefiniertes `<greenhouse>`-Element, in dem ein `<chameleon>` lebt. Hier ist das `<greenhouse>` der Shadow-DOM-Host und das `<chameleon>`-Element befindet sich innerhalb des Shadow DOMs. Die `:host-context()`-Pseudoklasse ermöglicht es dem `<chameleon>`, sein Aussehen basierend auf der Umgebung des `<greenhouse>` zu ändern. Wenn das `<greenhouse>` an einem sonnigen Standort ist (eine Klasse "sunny-theme" hat), wird das `<chameleon>` gelb. Befindet sich das `<greenhouse>` an einem schattigen Ort (eine Klasse "shady-theme" wurde angewendet), wird das `<chameleon>` blau.

Dieser Selektor durchdringt alle Shadow-Grenzen. Er sucht nach der sunny- oder shady-Themenklasse, die direkt auf das `<greenhouse>` oder auf einen der Vorfahren des Hosts und seiner DOM-Vorfahren bis zur Wurzel des Dokuments angewendet wurde.

Um den Selektor nur direkt auf den `<greenhouse>`-Host oder auf dessen DOM zu begrenzen, verwenden Sie stattdessen die Pseudoklasse {{cssxref(":host")}} oder {{cssxref(":host_function", ":host()")}}.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von `:host-context()` entspricht der einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), zuzüglich der Spezifität des Selektors, der als Argument der Funktion übergeben wird.

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

Die folgenden Codeausschnitte stammen aus unserem [host-selectors-Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie sich dies auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum anwenden können:

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

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - no links in headers!" }` gestalten die Instanz des `<context-span>`-Elements (den Shadow-Host in diesem Fall) innerhalb des `<h1>`. Wir haben es verwendet, um klarzustellen, dass das benutzerdefinierte Element in unserem Design nicht innerhalb des `<h1>` erscheinen sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Components](/de/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}}-Pseudoklasse
- CSS {{cssxref(":host_function", ":host()")}}-Pseudoklasse
- CSS {{cssxref(":state",":state()")}}-Pseudoklasse
- CSS {{CSSXref("::slotted")}}-Pseudoelement
- HTML {{HTMLElement("template")}}-Element
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
