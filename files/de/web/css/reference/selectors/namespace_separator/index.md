---
title: Namespace-Trenner
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **Namespace-Trenner** (`|`) trennt den Selektor vom Namespace und identifiziert den {{Glossary("namespace", "Namespace")}} oder dessen Fehlen für einen Typselektor.

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

[Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) erlauben eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Namens des Namespace, getrennt durch den Namespace-Trenner (`|`), namespaced werden. Dies ist nützlich, wenn Dokumente mit mehreren Namespaces, wie HTML mit inline SVG oder MathML oder XML, das mehrere Vokabulare mischt, behandelt werden.

- `ns|h1` - passt zu `<h1>`-Elementen im Namespace `ns`
- `*|h1` - passt zu allen `<h1>`-Elementen
- `|h1` - passt zu allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namespace

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namespace, da die Namespaces `http://www.w3.org/1999/xhtml` und `http://www.w3.org/2000/svg` impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) kann verwendet werden, um mit einem leeren String für den Namespace-Parameter Elemente ohne Namespace zu erstellen.

### Beispiel für benannten Namespace

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

Es sind keine Namespaces explizit im HTML oder im SVG deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Stile zu Links global (`a`), zu Links ohne Namespace (`|a`), zu Links in jedem Namespace oder ohne Namespace (`*|a`) und dann zu zwei verschiedenen benannten Namespaces (`svgNamespace|a` und `htmlNameSpace|a`) zu.

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

Der Selektor `|a`, ein Link nicht in einem Namespace, passt nicht zu irgendwelchen Links. Im HTML wird `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass das gesamte HTML sich in einem Namespace befindet, auch wenn keiner explizit deklariert ist. Im SVG, selbst wenn nicht explizit gesetzt, wird der Namespace `http://www.w3.org/2000/svg` ebenfalls impliziert. Dies bedeutet, dass der gesamte Inhalt sich in mindestens einem Namespace befindet.

### Standard-Namespace und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namespace als Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namespace definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namespace.

#### HTML

Es sind keine Namespaces explizit im HTML oder im SVG deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Ankerlink ohne Namespace und fügen den Link hinzu.

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

Der Selektor ohne Namespace-Trenner, das `a`, passte nur zu den SVG-`<a>`-Elementen, da SVG als Standard-Namespace festgelegt war.

Der Selektor ohne Namespace, das `|a`, passte zum JavaScript-definierten und hinzugefügten `<a>`, da dieser Knoten der einzige ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [CSS-Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS-Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
