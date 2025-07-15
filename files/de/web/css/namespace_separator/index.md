---
title: Namespace Separator
slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **Namespace Separator** (`|`) trennt den Selektor vom Namespace und identifiziert den {{Glossary("namespace", "Namespace")}}, oder dessen Fehlen, für einen Typselektor.

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

[Typselektoren](/de/docs/Web/CSS/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) erlauben eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Namens des Namespace, getrennt durch den Namespace Separator (`|`), namespaced werden. Dies ist nützlich bei der Arbeit mit Dokumenten, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - entspricht `<h1>`-Elementen im Namespace `ns`
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namespace

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namespace, da der `http://www.w3.org/1999/xhtml`- und `http://www.w3.org/2000/svg`-Namespace impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS), mit einem leeren String für den Namespace-Parameter, kann verwendet werden, um Elemente ohne Namespace zu erstellen.

### Beispiel für benannten Namespace

In diesem Beispiel befinden sich alle Elemente in einem Namespace.

#### HTML

In dem HTML oder innerhalb des SVG sind keine Namespaces ausdrücklich deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Stile zu: global für Links (`a`), für Links in keinem Namespace (`|a`), für Links in jedem Namespace oder keinem Namespace (`*|a`), und dann für zwei verschiedene benannte Namespaces (`svgNamespace|a` und `htmlNameSpace|a`).

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

Der Selektor `|a`, ein Link ohne Namespace, entspricht keinen Links. In HTML ist der `http://www.w3.org/1999/xhtml`-Namespace impliziert, was bedeutet, dass das gesamte HTML in einem Namespace ist, selbst wenn keiner explizit deklariert ist. In SVG ist der `http://www.w3.org/2000/svg`-Namespace auch impliziert, auch wenn er nicht explizit gesetzt ist. Das bedeutet, dass der gesamte Inhalt in mindestens einem Namespace ist.

### Standard-Namespace und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namespace als Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namespace definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namespace.

#### HTML

In dem HTML oder innerhalb des SVG sind keine Namespaces ausdrücklich deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Anker-Link ohne Namespace und hängen den Link an.

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

Der Selektor ohne Namespace Separator, das `a`, entsprach nur den SVG-`<a>`-Elementen, da SVG als Standard-Namespace gesetzt war.

Der Selektor ohne Namespace, das `|a`, entsprach dem mit JavaScript definierten und hinzugefügten `<a>`, da dieser Knoten der einzige Knoten ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [CSS Typselektor](/de/docs/Web/CSS/Type_selectors)
- [CSS universeller Selektor](/de/docs/Web/CSS/Universal_selectors)
- [CSS Selektormodul](/de/docs/Web/CSS/CSS_selectors)
