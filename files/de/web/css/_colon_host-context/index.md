---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Pseudo-classes) Funktion wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, das das CSS enthält, innerhalb dessen sie verwendet wird (damit Sie von innerhalb seines Shadow DOM ein benutzerdefiniertes Element auswählen können) - jedoch nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Vorfahren des Shadow-Hosts übereinstimmt, in dem es sich innerhalb der DOM-Hierarchie befindet.

Mit anderen Worten, dies ermöglicht es einem benutzerdefinierten Element oder allem innerhalb des Shadow DOM dieses benutzerdefinierten Elements, unterschiedliche Stile anzuwenden, basierend auf seiner Position innerhalb des äußeren DOM oder Klassen/Attributen, die auf Vorfahrelemente angewendet werden.

Eine typische Anwendung besteht darin, einen Nachkommen-Selektor-Ausdruck zu verwenden — zum Beispiel `h1` — um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich innerhalb eines `<h1>` befinden. Eine weitere typische Anwendung wäre, inneren Elementen zu erlauben, auf Klassen oder Attribute auf beliebigen Vorfahrelementen zu reagieren - beispielsweise durch das Anwenden einer anderen Textfarbe, wenn eine `.dark-theme` Klasse auf `<body>` angewendet wird.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host-context.html", "tabbed-shorter")}}

```css
/* Wählt einen Shadow-Root-Host aus, nur wenn er
   ein Nachkomme des angegebenen Selektorarguments ist */
:host-context(h1) {
  font-weight: bold;
}

/* Ändert die Textfarbe des Absatzes von schwarz zu weiß, wenn
   eine .dark-theme Klasse auf den Dokumentkörper angewendet wird */
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

Die folgenden Snippets stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([siehe es auch live](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum platzieren können:

```html
<h1>
  Host-Selektoren <a href="#"><context-span>Beispiel</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style` und `span` Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und füllen das `style` Element mit einigen CSS-Regeln:

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
  ':host-context(h1):after { content: " - keine Links in Überschriften!" }' +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - keine Links in Überschriften!" }` stylen die Instanz des `<context-span>` Elements (den Shadow-Host in diesem Fall) innerhalb des `<h1>`. Wir haben es verwendet, um deutlich zu machen, dass das benutzerdefinierte Element in unserem Design nicht innerhalb des `<h1>` erscheinen sollte.

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
