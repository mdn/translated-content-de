---
title: Namespace-Trennzeichen
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **Namespace-Trennzeichen** (`|`) trennt den Selektor vom Namespace und identifiziert den {{Glossary("namespace", "Namespace")}} oder dessen Fehlen für einen Typselektor.

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

[Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) ermöglichen eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Namens des Namespaces, getrennt durch das Namespace-Trennzeichen (`|`), namespaced werden. Dies ist nützlich bei Dokumenten, die mehrere Namespaces enthalten, wie z.B. HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - passt auf `<h1>`-Elemente im Namespace `ns`
- `*|h1` - passt auf alle `<h1>`-Elemente
- `|h1` - passt auf alle `<h1>`-Elemente außerhalb eines deklarierten oder implizierten Namespaces

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namespace, da der `http://www.w3.org/1999/xhtml` und `http://www.w3.org/2000/svg` Namespace impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) kann verwendet werden, um Elemente ohne Namespace zu erstellen, indem ein leerer String für den Namespace-Parameter verwendet wird.

### Beispiel eines benannten Namespaces

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

In dem HTML oder innerhalb des SVG werden keine Namespaces explizit deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces, dann werden Stile global auf Links angewendet (`a`), auf Links ohne Namespace (`|a`), auf Links in einem beliebigen oder keinem Namespace (`*|a`), und dann auf zwei verschiedene benannte Namespaces (`svgNamespace|a` und `htmlNameSpace|a`).

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

Der Selektor `|a`, ein Link ohne Namespace, passt auf keine Links. Im HTML bedeutet `http://www.w3.org/1999/xhtml`, dass das gesamte HTML in einem Namespace liegt, auch wenn keiner explizit deklariert ist. Im SVG, selbst wenn nicht explizit festgelegt, ist der `http://www.w3.org/2000/svg` Namespace ebenfalls impliziert. Das bedeutet, dass der gesamte Inhalt in mindestens einem Namespace ist.

### Standard- und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namespace als Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard-, oder unbenannter, Namespace definiert ist, gelten Universalselektoren und Typselektoren nur für Elemente in diesem Namespace.

#### HTML

In dem HTML oder innerhalb des SVG werden keine Namespaces explizit deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript verwenden wir [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS), um einen Ankerlink ohne Namespace zu erstellen und dann den Link hinzuzufügen.

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

Der Selektor ohne Namespace-Trennzeichen, das `a`, passte nur auf die SVG-`<a>`-Elemente, da SVG als Standard-Namespace gesetzt wurde.

Der Selektor ohne Namespace, das `|a`, passte auf das mit JavaScript definierte und angehängte `<a>`, da dieser Knoten der einzige ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@namespace")}}
- Methode [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
- Eigenschaft [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [CSS Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS Selektormodul](/de/docs/Web/CSS/Guides/Selectors)
