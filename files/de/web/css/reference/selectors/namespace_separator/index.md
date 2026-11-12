---
title: Namespace-Trennzeichen
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Das **Namespace-Trennzeichen** (`|`) trennt den Selektor vom Namespace. Es kennzeichnet den {{Glossary("namespace", "Namespace")}} eines Typselektors oder zeigt an, dass kein Namespace vorhanden ist.

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

[Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) können optional einen Namespace enthalten. Wenn ein Namespace zuvor mit {{CSSXref("@namespace")}} deklariert wurde, können Sie diesen Selektoren den Namen des Namespace voranstellen, getrennt durch das Namespace-Trennzeichen (`|`). Das ist nützlich für Dokumente mit mehreren Namespaces, etwa HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare kombiniert.

- `ns|h1` – trifft auf `<h1>`-Elemente im Namespace `ns` zu
- `*|h1` – trifft auf alle `<h1>`-Elemente zu
- `|h1` – trifft auf alle `<h1>`-Elemente außerhalb aller deklarierten oder impliziten Namespaces zu

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle HTML- und SVG-Elemente einen Namespace: Für HTML ist `http://www.w3.org/1999/xhtml` implizit, für SVG `http://www.w3.org/2000/svg`. Mit der Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) können Sie Elemente ohne Namespace erstellen, indem Sie für den Namespace-Parameter eine leere Zeichenfolge angeben.

### Beispiel mit benannten Namespaces

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

Weder im HTML noch innerhalb des SVG werden Namespaces ausdrücklich deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Links allgemein (`a`), Links ohne Namespace (`|a`), Links in einem beliebigen oder keinem Namespace (`*|a`) sowie Links in zwei verschiedenen benannten Namespaces (`svgNamespace|a` und `htmlNameSpace|a`) Stile zu.

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

Der Selektor `|a` für Links ohne Namespace trifft auf keinen Link zu. In HTML ist `http://www.w3.org/1999/xhtml` implizit. Daher befinden sich alle HTML-Elemente in einem Namespace, auch wenn keiner ausdrücklich deklariert wurde. Für SVG ist entsprechend `http://www.w3.org/2000/svg` implizit, selbst wenn dieser Namespace nicht ausdrücklich festgelegt wurde. Somit befindet sich der gesamte Inhalt in einem Namespace.

### Standard-Namespace und kein Namespace

In diesem Beispiel erstellen wir mit JavaScript ein Element ohne Namespace und fügen es dem Dokument hinzu. Mit `@namespace` definieren wir einen unbenannten Namespace und legen so den SVG-Namespace als Standard-Namespace fest.

> [!NOTE]
> Wenn ein Standard-Namespace, also ein unbenannter Namespace, definiert ist, gelten Universal- und Typselektoren nur für Elemente in diesem Namespace.

#### HTML

Weder im HTML noch innerhalb des SVG werden Namespaces ausdrücklich deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### CSS

Wir deklarieren mit {{cssxref("@namespace")}} einen Namespace. Da wir keinen Namen für den Namespace angeben, erzeugt die `@namespace`-Deklaration einen Standard-Namespace.

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

#### JavaScript

Mit [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir in JavaScript einen Link ohne Namespace und fügen ihn anschließend hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### Ergebnis

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

Der Selektor ohne Namespace-Trennzeichen, `a`, traf nur auf die SVG-Elemente `<a>` zu, da SVG als Standard-Namespace festgelegt wurde.

Der Selektor ohne Namespace, `|a`, traf auf das mit JavaScript erstellte und hinzugefügte Element `<a>` zu, da dieses Element als einziges keinen Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@namespace")}}
- Methode [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
- Eigenschaft [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [CSS-Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS-Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS-Selektoren-Modul](/de/docs/Web/CSS/Guides/Selectors)
