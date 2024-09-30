---
title: Namespace-Trennzeichen
slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **Namespace-Trennzeichen** (`|`) trennt den Selektor vom Namespace und identifiziert den [Namespace](/de/docs/Glossary/namespace) oder dessen Fehlen für einen Typselektor.

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

[Typselektoren](/de/docs/Web/CSS/Type_selectors) und der [Universalselektor](/de/docs/Web/CSS/Universal_selectors) erlauben eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren einem Namespace zugeordnet werden, indem der Name des Namespace vorangestellt wird, getrennt durch das Namespace-Trennzeichen (`|`). Dies ist nützlich bei der Arbeit mit Dokumenten, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - entspricht `<h1>`-Elementen im Namespace `ns`
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namespace

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namespace, da der `http://www.w3.org/1999/xhtml`- und `http://www.w3.org/2000/svg`-Namespace impliziert ist. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS), mit einem leeren String für den Namespace-Parameter, kann verwendet werden, um Elemente ohne Namespace zu erstellen.

### Beispiel für benannten Namespace

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

Im HTML oder in dem SVG sind keine Namespaces explizit deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Stile für Links global (`a`), für Links ohne Namespace (`|a`), für Links in einem beliebigen oder keinem Namespace (`*|a`) und dann für zwei verschiedene benannte Namespaces (`svgNamespace|a` und `htmlNameSpace|a`) zu.

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

Der Selektor `|a`, ein Link ohne Namespace, entspricht keinen Links. Im HTML ist `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass das gesamte HTML in einem Namespace ist, selbst wenn keiner explizit deklariert ist. Im SVG ist der `http://www.w3.org/2000/svg`-Namespace ebenfalls impliziert, auch wenn er nicht explizit gesetzt ist. Das bedeutet, dass der gesamte Inhalt innerhalb mindestens eines Namespace liegt.

### Standard- und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namespace als Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namespace definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namespace.

#### HTML

Im HTML oder innerhalb des SVG sind keine Namespaces explizit deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Anker-Link ohne Namespace und fügen dann den Link hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namespace mit {{cssxref("@namespace")}}. Indem wir den Namen für den Namespace weglassen, erstellt die `@namespace`-Deklaration einen Standard-Namespace.

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

Der Selektor ohne Namespace-Trennzeichen, also der `a`, passte nur zu den SVG `<a>`-Elementen, da SVG als Standard-Namespace festgelegt wurde.

Der Selektor ohne Namespace, also `|a`, passte zu dem in JavaScript definierten und hinzugefügten `<a>`, da dieser Knoten der einzige Knoten ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)-Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)-Eigenschaft
- [CSS-Typselektor](/de/docs/Web/CSS/Type_selectors)
- [CSS-Universalselektor](/de/docs/Web/CSS/Universal_selectors)
- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
