---
title: Namespace-Trennzeichen
slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **Namespace-Trennzeichen** (`|`) trennt den Selektor vom Namespace und identifiziert den [Namespace](/de/docs/Glossary/namespace), oder das Fehlen desselben, für einen Typ-Selektor.

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

[Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) erlauben eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Namens des Namespaces, getrennt durch das Namespace-Trennzeichen (`|`), einem Namespace zugeordnet werden. Dies ist nützlich, wenn es sich um Dokumente handelt, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - entspricht `<h1>`-Elementen im Namespace `ns`
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namespaces

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namespace, da der `http://www.w3.org/1999/xhtml`- und `http://www.w3.org/2000/svg`-Namespace impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS), mit einem leeren String für den Namespace-Parameter, kann verwendet werden, um Elemente ohne Namespace zu erstellen.

### Beispiel für benannten Namespace

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

Keine Namespaces sind explizit im HTML oder innerhalb des SVGs deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Stile globalen Links (`a`), Links ohne Namespace (`|a`), Links in irgendeinem Namespace oder ohne Namespace (`*|a`) und dann zwei verschiedenen benannten Namespaces (`svgNamespace|a` und `htmlNameSpace|a`) zu.

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

Der Selektor `|a`, ein Link, der sich nicht in einem Namespace befindet, entspricht keinen Links. Im HTML wird der `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass sich das gesamte HTML in einem Namespace befindet, auch wenn keiner explizit deklariert wird. Im SVG wird, auch wenn nicht explizit festgelegt, der `http://www.w3.org/2000/svg`-Namespace ebenfalls impliziert. Das bedeutet, dass sich der gesamte Inhalt innerhalb von mindestens einem Namespace befindet.

### Standard-Namespace und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namespace als Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namespace definiert wird, gelten universelle und Typ-Selektoren nur für Elemente in diesem Namespace.

#### HTML

Keine Namespaces sind explizit im HTML oder innerhalb des SVGs deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript, mit [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS), erstellen wir einen Anker-Link ohne Namespace und fügen den Link hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namespace mit {{cssxref("@namespace")}}. Durch das Weglassen des Namens für den Namespace erstellt die `@namespace`-Deklaration einen Standard-Namespace.

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

Der Selektor ohne Namespace-Trennzeichen, das `a`, entsprach nur den SVG-`<a>`-Elementen, da SVG als Standard-Namespace festgelegt wurde.

Der Selektor ohne Namespace, das `|a`, entsprach dem durch JavaScript definierten und hinzugefügten `<a>`, da dieser Knoten der einzige Knoten ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [CSS Typ-Selektor](/de/docs/Web/CSS/Type_selectors)
- [CSS Universeller Selektor](/de/docs/Web/CSS/Universal_selectors)
- [CSS Selektor-Modul](/de/docs/Web/CSS/CSS_selectors)
