---
title: Namensraum-Trennzeichen
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **Namensraum-Trennzeichen** (`|`) trennt den Selektor vom Namensraum und identifiziert den {{Glossary("namespace", "Namensraum")}}, oder dessen Fehlen, für einen Typselektor.

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

[Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) erlauben eine optionale Namensraum-Komponente. Wenn ein Namensraum zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Namens des Namensraums, getrennt durch das Namensraum-Trennzeichen (`|`), benannt werden. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namensräume enthalten, wie HTML mit Inline-SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - wählt `<h1>`-Elemente im Namensraum `ns` aus
- `*|h1` - wählt alle `<h1>`-Elemente aus
- `|h1` - wählt alle `<h1>`-Elemente außerhalb eines deklarierten oder impliziten Namensraums aus

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namensraum, da der `http://www.w3.org/1999/xhtml`- und der `http://www.w3.org/2000/svg`-Namensraum impliziert sind. Die Methode [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) kann mit einem leeren String für den Namensraum-Parameter verwendet werden, um Elemente ohne Namensraum zu erstellen.

### Beispiel für benannten Namensraum

In diesem Beispiel befinden sich alle Elemente in einem Namensraum.

#### HTML

Keine Namensräume sind explizit im HTML oder innerhalb des SVG deklariert.

```html
<p>This paragraph <a href="#">has a link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namensräume und weist dann Stile zu Links global (`a`), zu Links ohne Namensraum (`|a`), zu Links in jedem Namensraum oder keinem Namensraum (`*|a`), und dann zu zwei verschiedenen benannten Namensräumen (`svgNamespace|a` und `htmlNameSpace|a`).

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

Der Selektor `|a`, ein Link ohne Namensraum, stimmt mit keinen Links überein. Im HTML wird `http://www.w3.org/1999/xhtml` impliziert, was bedeutet, dass alles HTML in einem Namensraum ist, selbst wenn keiner explizit deklariert wird. Im SVG wird auch `http://www.w3.org/2000/svg` impliziert, selbst wenn nicht explizit gesetzt. Das bedeutet, dass der gesamte Inhalt sich innerhalb von mindestens einem Namensraum befindet.

### Standard-Namensraum und kein Namensraum

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namensraum zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namensraum als den Standard-Namensraum, indem wir den unbenannten Namensraum mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder unbenannter Namensraum definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namensraum.

#### HTML

Keine Namensräume sind explizit im HTML oder innerhalb des SVG deklariert.

```html
<p><a href="#">A link</a> in the implied HTML namespace.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link created in SVG namespace</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript und [`document.createElementNS`](/de/docs/Web/API/Document/createElementNS) erstellen wir einen Anker-Link ohne Namensraum und fügen dann den Link hinzu.

```js
// create 'no namespace' anchor
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link created without a namespace"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namensraum mit {{cssxref("@namespace")}}. Durch das Weglassen des Namens für den Namensraum erstellt die `@namespace`-Deklaration einen Standard-Namensraum.

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

Der Selektor ohne Namensraum-Trennzeichen, der `a`, stimmte nur mit den SVG `<a>`-Elementen überein, da SVG als der Standard-Namensraum gesetzt wurde.

Der Selektor ohne Namensraum, der `|a`, stimmte mit dem durch JavaScript definierten und hinzugefügten `<a>` überein, da dieser Knoten der einzige ist, der keinen Standard-Namensraum hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)-Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)-Eigenschaft
- [CSS Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS universeller Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS Selektor-Modul](/de/docs/Web/CSS/Guides/Selectors)
