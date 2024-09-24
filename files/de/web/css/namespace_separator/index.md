---
title: Namensraumseparator
slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **Namensraumseparator** (`|`) trennt den Selektor vom Namensraum und identifiziert den {{glossary("namespace")}}, oder das Fehlen eines solchen, für einen Typselektor.

```css
/* Links im Namensraum namens myNameSpace */
myNameSpace|a {
  font-weight: bold;
}
/* Absätze in jedem Namensraum (einschließlich ohne Namensraum) */
*|p {
  color: darkblue;
}
/* Überschrift der Ebene 2 ohne Namensraum */
|h2 {
  margin-bottom: 0;
}
```

[Typselektoren](/de/docs/Web/CSS/Type_selectors) und der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) ermöglichen eine optionale Namensraumkomponente. Wenn ein Namensraum zuvor über {{CSSXref("@namespace")}} deklariert wurde, können diese Selektoren durch Voranstellen des Selektors mit dem Namen des Namensraums und dem Namensraumseparator (`|`) namespaced werden. Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` – stimmt mit `<h1>`-Elementen im Namensraum `ns` überein
- `*|h1` – stimmt mit allen `<h1>`-Elementen überein
- `|h1` – stimmt mit allen `<h1>`-Elementen außerhalb eines deklarierten oder implizierten Namensraums überein

## Syntax

```css
namespace|element { style properties }
```

## Beispiele

Standardmäßig haben alle Elemente in einem HTML- oder SVG-Element einen Namensraum, da der `http://www.w3.org/1999/xhtml` und der `http://www.w3.org/2000/svg` Namensraum impliziert sind. Die Methode {{domxref("document.createElementNS")}}, mit einem leeren String für den Namensraumparameter, kann verwendet werden, um Elemente ohne Namensraum zu erstellen.

### Beispiel für benannten Namensraum

In diesem Beispiel befinden sich alle Elemente in einem Namensraum.

#### HTML

In dem HTML oder innerhalb des SVG sind keine Namensräume explizit deklariert.

```html
<p>Dieser Absatz <a href="#">hat einen Link</a>.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link im SVG erstellt</text>
  </a>
</svg>
```

#### CSS

Das CSS deklariert zwei Namensräume und weist dann Links global (`a`), Links ohne Namensraum (`|a`), Links in jedem Namensraum oder keinem Namensraum (`*|a`) und dann zwei unterschiedliche benannte Namensräume (`svgNamespace|a` und `htmlNameSpace|a`) Stile zu.

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* Alle `<a>`s im Standard-Namensraum, in diesem Fall alle `<a>`s */
a {
  font-size: 1.4rem;
}
/* kein Namensraum */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* alle Namensräume (einschließlich ohne Namensraum) */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* nur der svgNamespace-Namensraum, das ist <svg>-Inhalt */
svgNamespace|a {
  color: green;
  fill: green;
}
/* Der htmlNameSpace-Namensraum, das ist das HTML-Dokument */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### Ergebnis

{{EmbedLiveSample("Named_namespace_example", "100%", 100)}}

Der Selektor `|a`, ein Link ohne Namensraum, stimmt mit keinen Links überein. Im HTML ist der `http://www.w3.org/1999/xhtml` Namensraum impliziert, was bedeutet, dass das gesamte HTML in einem Namensraum ist, selbst wenn keiner explizit deklariert wird. Im SVG ist impliziert, auch wenn nicht explizit festgelegt, dass der `http://www.w3.org/2000/svg` Namensraum vorhanden ist. Das bedeutet, dass sich der gesamte Inhalt in mindestens einem Namensraum befindet.

### Standard-Namensraum und kein Namensraum

In diesem Beispiel verwenden wir JavaScript, um ein Element ohne Namensraum zu erstellen und es dem Dokument hinzuzufügen. Wir setzen den SVG-Namensraum als Standard-Namensraum, indem wir den namenlosen Namensraum mit `@namespace` definieren.

> [!NOTE]
> Wenn ein Standard- oder namenloser Namensraum definiert ist, gelten universelle und Typselektoren nur für Elemente in diesem Namensraum.

#### HTML

In dem HTML oder innerhalb des SVG sind keine Namensräume explizit deklariert.

```html
<p><a href="#">Ein Link</a> im impliziten HTML-Namensraum.</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">Link im SVG-Namensraum erstellt</text>
  </a>
</svg>
```

#### JavaScript

Mit JavaScript, mit {{DOMXRef("document.createElementNS")}}, erstellen wir einen Anker-Link ohne Namensraum und fügen dann den Link ein.

```js
// 'kein Namensraum'-Anker erstellen
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("Link ohne Namensraum erstellt"));

document.body.appendChild(a);
```

#### CSS

Wir deklarieren einen Namensraum mit {{cssxref("@namespace")}}. Durch das Weglassen des Namens für den Namensraum erzeugt die `@namespace`-Deklaration einen Standard-Namensraum.

```css
/* Durch Weglassen eines Namens wird SVG als Standard-Namensraum gesetzt */
@namespace url("http://www.w3.org/2000/svg");

/* `<a>` im Standard-Namensraum (auf SVG gesetzt) */
a {
  font-size: 1.4rem;
}

/* `<svg>` und `<p>` im Standard-Namensraum (auf SVG gesetzt) */
svg,
p {
  border: 5px solid gold;
}

/* Links außerhalb eines Namensraums */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* Links mit jedem Namensraum oder keinem Namensraum */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### Ergebnis

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

Der Selektor ohne Namensraumseparator, das `a`, passte nur zu den SVG-`<a>`-Elementen, da SVG als Standard-Namensraum gesetzt wurde.

Der Selektor ohne Namensraum, das `|a`, passte zu dem über JavaScript definierten und angehängten `<a>`, da dieser Knoten der einzige ist, der keinen Standard-Namensraum hat.

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
- [CSS Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
