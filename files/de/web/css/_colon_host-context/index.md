---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:host-context()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Pseudo-classes) Funktion wählt den Shadow-Host des [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem sie verwendet wird (sodass Sie ein benutzerdefiniertes Element aus seinem Shadow DOM heraus auswählen können) – aber nur, wenn der im Parameter der Funktion angegebene Selektor mit dem Vorfahren des Shadow-Hosts übereinstimmt, an dem er sich innerhalb der DOM-Hierarchie befindet.

Mit anderen Worten, dies ermöglicht es einem benutzerdefinierten Element oder allem innerhalb des Shadow DOM dieses benutzerdefinierten Elements, basierend auf seiner Position innerhalb des äußeren DOM oder aufgrund von Klassen/Attributen, die auf Vorfahrelemente angewendet werden, unterschiedliche Stile anzuwenden.

Eine typische Verwendung davon ist mit einem Nachkommen-Selektor-Ausdruck – zum Beispiel `h1` – um nur Instanzen des benutzerdefinierten Elements auszuwählen, die sich innerhalb eines `<h1>` befinden. Eine weitere typische Verwendung wäre es, inneren Elementen zu erlauben, auf Klassen oder Attribute auf Vorfahrelementen zu reagieren - beispielsweise indem eine andere Textfarbe angewendet wird, wenn eine `.dark-theme` Klasse auf `<body>` angewendet wird.

> [!NOTE]
> Dies hat keine Wirkung, wenn es außerhalb eines Shadow DOMs verwendet wird.

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

### Selektives Stylen von Shadow-Hosts

Die folgenden Ausschnitte stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — mit dem Sie Text umschließen können:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Innerhalb des Konstruktors des Elements erstellen wir `style`- und `span`-Elemente, füllen das `span` mit dem Inhalt des benutzerdefinierten Elements und füllen das `style`-Element mit einigen CSS-Regeln:

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

Die Regeln `:host-context(h1) { font-style: italic; }` und `:host-context(h1):after { content: " - no links in headers!" }` stylen die Instanz des `<context-span>` Elements (in diesem Fall der Shadow-Host) innerhalb des `<h1>`. Wir haben es verwendet, um klarzustellen, dass das benutzerdefinierte Element in unserem Design nicht innerhalb des `<h1>` erscheinen sollte.

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
