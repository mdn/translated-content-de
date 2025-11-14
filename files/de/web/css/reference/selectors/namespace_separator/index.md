---
title: Namensraum-Trennzeichen
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Das **Namensraum-Trennzeichen** (`|`) trennt den Selektor vom Namensraum und identifiziert den {{Glossary("namespace", "Namensraum")}} oder das Fehlen eines Namensraums für einen Typselektor.

```css
/* Links in the namespace named myNameSpace */
myNameSpace|a {
  font-weight: bold;
}
/* paragraphs in any namespace (including no namespace) */
*|p {
  color: darkblue;
}
/* heading level 2 not in a namespace */
|h2 {
  margin-bottom: 0;
}
```

[Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) erlauben eine optionale Namensraum-Komponente. Wenn ein Namensraum zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren mit einem Namensraum versehen werden, indem dem Selektor der Name des Namensraums vorangestellt wird, getrennt durch das Namensraum-Trennzeichen (`|`). Dies ist nützlich bei der Arbeit mit Dokumenten, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - entspricht `<h1>`-Elementen im Namensraum `ns`
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namensraums

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Dokument einen Namensraum, da die Namensräume `http://www.w3.org/1999/xhtml` und `http://www.w3.org/2000/svg` impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) kann mit einem leeren String für den Namensraum-Parameter verwendet werden, um Elemente ohne Namensraum zu erstellen.

### Beispiel für Named Namespace

In diesem Beispiel befinden sich alle Elemente in einem Namensraum.

#### HTML

In dem HTML oder innerhalb des SVGs sind keine Namensräume explizit deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namensräume und weist dann für Links global (`a`), für Links ohne Namensraum (`|a`), für Links in jedem oder keinem Namensraum (`*|a`) und schließlich für zwei verschiedene benannte Namensräume (`svgNamespace|a` und `htmlNameSpace|a`) Stile zu.

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* All `<a>`s in the default namespace, in this case, all `<a>`s */
a {
  font-size: 1.4rem;
}
/* no namespace */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* all namespaces (including no namespace) */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* only the svgNamespace namespace, which is <svg> content */
svgNamespace|a {
  color: green;
  fill: green;
}
/* The htmlNameSpace namespace, which is the HTML document */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### Ergebnis

{{EmbedLiveSample("Named_namespace_example", "100%", 100)}}

Der Selektor `|a`, ein Link ohne Namensraum, entspricht keinen Links. In HTML ist `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass sich das gesamte HTML in einem Namensraum befindet, auch wenn keiner explizit deklariert wird. In SVG ist, selbst wenn nicht explizit gesetzt, der Namensraum `http://www.w3.org/2000/svg` ebenfalls impliziert. Das bedeutet, dass der gesamte Inhalt in mindestens einem Namensraum ist.

### Standard-Namensraum und kein Namensraum

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namensraum zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namensraum als Standard-Namensraum fest, indem wir den unbenannten Namensraum mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namensraum definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namensraum.

#### HTML

In dem HTML oder innerhalb des SVGs sind keine Namensräume explizit deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Anker-Link ohne Namensraum und fügen den Link hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namensraum mit {{cssxref("@namespace")}}. Durch das Weglassen des Namens für den Namensraum erzeugt die `@namespace`-Deklaration einen Standard-Namensraum.

```css
/* By omitting a name, this sets SVG as the default namespace */
@namespace url("http://www.w3.org/2000/svg");

/* `<a>` in the default (set to SVG) namespace */
a {
  font-size: 1.4rem;
}

/* `<svg>` and `<p>` in the default (set to SVG) namespace */
svg,
p {
  border: 5px solid gold;
}

/* links outside of any namespace */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* links with any namespace or no namespace */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### Ergebnis

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

Der Selektor ohne Namensraum-Trennzeichen, das `a`, entsprach nur den SVG-`<a>`-Elementen, da SVG als Standard-Namensraum festgelegt war.

Der Selektor ohne Namensraum, das `|a`, entsprach dem im JavaScript definierten und hinzugefügten `<a>`, da dieser Knoten der einzige ist, der keinen Standard-Namensraum hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [CSS Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS universeller Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS Selektor-Modul](/de/docs/Web/CSS/Guides/Selectors)
