---
title: ":host"
slug: Web/CSS/:host
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:host`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem sie verwendet wird — mit anderen Worten, dies ermöglicht es Ihnen, ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auszuwählen.

> [!NOTE]
> Dies hat keine Auswirkung, wenn es außerhalb eines Shadow DOM verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host.html", "tabbed-shorter")}}

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## Syntax

```css
:host {
  /* ... */
}
```

## Beispiele

### Stil des Shadow-Hosts

Die folgenden Code-Snippets stammen aus unserem [host-selectors Beispiel](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([Live-Demo](https://mdn.github.io/web-components-examples/host-selectors/)).

In diesem Beispiel haben wir ein einfaches benutzerdefiniertes Element — `<context-span>` — das Sie um Text herum platzieren können:

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
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

Die Regel `:host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }` stylt alle Instanzen des `<context-span>`-Elements (den Shadow-Host in diesem Fall) im Dokument.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Komponenten](/de/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{CSSxref("::slotted")}}
- {{CSSxRef(":state",":state()")}}
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
