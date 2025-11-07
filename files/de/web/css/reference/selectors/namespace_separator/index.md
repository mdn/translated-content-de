---
title: Namespace-Separator
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **Namespace-Separator** (`|`) trennt den Selektor vom Namespace und identifiziert den {{Glossary("namespace", "Namespace")}} oder das Fehlen eines solchen für einen Typ-Selektor.

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

[Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) erlauben eine optionale Namespace-Komponente. Wenn ein Namespace zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren mit einem Namespace versehen werden, indem dem Selektor der Name des Namespace vorangestellt wird, getrennt durch den Namespace-Separator (`|`). Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - trifft auf `<h1>`-Elemente im Namespace `ns`
- `*|h1` - trifft auf alle `<h1>`-Elemente
- `|h1` - trifft auf alle `<h1>`-Elemente außerhalb eines deklarierten oder implizierten Namespace

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Dokument einen Namespace, da die Namespaces `http://www.w3.org/1999/xhtml` und `http://www.w3.org/2000/svg` impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) kann mit einem leeren String für den Namespace-Parameter verwendet werden, um Elemente ohne Namespace zu erstellen.

### Beispiel für benannten Namespace

In diesem Beispiel sind alle Elemente in einem Namespace.

#### HTML

Keine Namespaces werden explizit im HTML oder innerhalb des SVGs deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namespaces und weist dann Stile global Links zu (`a`), zu Links in keinem Namespace (`|a`), zu Links in einem beliebigen oder keinem Namespace (`*|a`) und dann zu zwei verschiedenen benannten Namespaces (`svgNamespace|a` und `htmlNameSpace|a`).

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

Der Selektor `|a`, ein Link, der nicht in einem Namespace ist, trifft auf keine Links. Im HTML ist `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass das gesamte HTML in einem Namespace ist, auch wenn keiner explizit deklariert ist. Im SVG, selbst wenn nicht explizit gesetzt, ist der Namespace `http://www.w3.org/2000/svg` ebenfalls impliziert. Das bedeutet, dass der gesamte Inhalt in mindestens einem Namespace ist.

### Standard-Namespace und kein Namespace

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namespace zu erstellen und es zum Dokument hinzuzufügen. Wir setzen den SVG-Namespace als den Standard-Namespace, indem wir den unbenannten Namespace mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namespace definiert ist, gelten universelle und Typ-Selektoren nur für Elemente in diesem Namespace.

#### HTML

Keine Namespaces werden explizit im HTML oder innerhalb des SVGs deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Anker-Link ohne Namespace und fügen den Link hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namespace mit {{cssxref("@namespace")}}. Durch das Weglassen des Namens für den Namespace erzeugt die `@namespace`-Deklaration einen Standard-Namespace.

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

Der Selektor ohne Namespace-Separator, das `a`, traf nur die SVG-`<a>`-Elemente, da SVG als der Standard-Namespace gesetzt war.

Der Selektor ohne Namespace, das `|a`, traf das mit JavaScript definierte und hinzugefügte `<a>`, da dieser Knoten der einzige Knoten ist, der keinen Standard-Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [CSS Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS Universeller Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS Selector-Modul](/de/docs/Web/CSS/CSS_selectors)
