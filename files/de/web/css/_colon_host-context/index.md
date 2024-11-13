---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es Ihnen, Elemente innerhalb eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) unterschiedlich zu gestalten, basierend auf dem Selektor des Shadow Hosts (das Element, das den Shadow Root besitzt) und seiner DOM-Vorfahren.

Normalerweise sind Elemente innerhalb eines Shadow DOMs von dem außerhalb gelegenen DOM isoliert. Die `:host-context()` erlaubt es Ihnen, „außerhalb“ dieses Shadow DOMs zu blicken und zu überprüfen, ob eines der Vorfahren-Elemente des aktuellen Elements einem bestimmten CSS-Selektor entspricht. Beispielsweise könnten Sie eine andere Textfarbe auf Elemente innerhalb eines Shadow Roots anwenden, wenn eine `.dark-theme` Klasse auf `<body>` angewendet wird.

Stellen Sie sich folgendes Szenario vor: Sie haben ein benutzerdefiniertes `<greenhouse>`-Element, das ein `<chameleon>` enthält. Hierbei ist das `<greenhouse>` der Shadow DOM-Host und das `<chameleon>`-Element befindet sich innerhalb des Shadow DOMs. Die `:host-context()` lässt das `<chameleon>` sein Aussehen basierend auf der Umgebung des `<greenhouse>` ändern. Wenn das `<greenhouse>` an einem sonnigen Ort steht (eine "sunny-theme" Klasse besitzt), färbt sich das `<chameleon>` gelb. Befindet sich das `<greenhouse>` an einem schattigen Platz (mit einer "shady-theme" Klasse), wird das `<chameleon>` blau.

Dieser Selektor durchdringt alle Shadow-Grenzen. Er sucht nach den "sunny" oder "shady" Themes, die direkt auf das `<greenhouse>` oder auf einen der Vorfahren des Hosts oder deren Vorfahren-DOMs angewendet wurden, bis er die Wurzel des Dokuments erreicht.

Um den Selektor nur auf den `<greenhouse>` Host direkt zu beschränken oder die Auswahl auf das DOM des Hosts zu begrenzen, verwenden Sie die {{cssxref(":host")}} oder {{cssxref(":host_function", ":host()")}} Pseudoklasse stattdessen.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

Die [Spezifität](/de/docs/Web/CSS/Specificity) von `:host-context()` ist die einer [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) plus die Spezifität des Selektors, der als Argument der Funktion übergeben wird.

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

### Selektives Stylen von Shadow Hosts

Die folgenden Code-Schnipsel stammen aus unserem Beispiel zu [Host-Selektoren](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

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
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - no links in headers!" }` gestalten die Instanz des `<context-span>` Elements (den Shadow Host in diesem Fall) innerhalb eines `<h1>`. Wir haben es verwendet, um klarzumachen, dass das benutzerdefinierte Element nicht innerhalb eines `<h1>` in unserem Design erscheinen sollte.

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
