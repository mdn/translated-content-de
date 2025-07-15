---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namensräume")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

{{InteractiveExample("CSS Demo: @namespace", "tabbed-shorter")}}

```css interactive-example
@namespace svg url("http://www.w3.org/2000/svg");

a {
  color: orangered;
  text-decoration: underline dashed;
  font-weight: bold;
}

svg|a {
  fill: blueviolet;
  text-decoration: underline solid;
  text-transform: uppercase;
}
```

```html interactive-example
<p>
  <a href="#">This is an ordinary HTML link</a>
</p>

<svg width="250px" viewBox="0 0 250 20" xmlns="http://www.w3.org/2000/svg">
  <a href="#">
    <text x="0" y="15">This is a link created in SVG</text>
  </a>
</svg>
```

## Syntax

```css
/* Default namespace */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Prefixed namespace */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## Beschreibung

Die definierten Namensräume können verwendet werden, um die [Universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) auf Elemente innerhalb dieses Namensraums zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn es um Dokumente mit mehreren Namensräumen geht – zum Beispiel HTML mit Inline-SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorangehen.

`@namespace` kann verwendet werden, um den **Standard-Namensraum** für das Stylesheet zu definieren. Wenn ein Standard-Namensraum definiert ist, gelten alle Universellen- und Typselektoren (aber nicht Attributselektoren, siehe Hinweis unten) nur für Elemente in diesem Namensraum.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namensraum-Präfix** zu definieren. Wenn ein Universeller-, Typ- oder Attributselektor mit einem Namensraum-Präfix versehen ist, dann passt dieser Selektor nur, wenn der Namensraum _und_ der Name des Elements oder Attributs übereinstimmt.

In HTML werden bekannten [fremden Elementen](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namensräume zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als wären sie im XHTML-Namensraum (`http://www.w3.org/1999/xhtml`), selbst wenn es im Dokument kein `xmlns`-Attribut gibt, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente ihre richtigen Namensräume zugewiesen bekommen (`http://www.w3.org/2000/svg` bzw. `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML, es sei denn, ein Präfix wird direkt auf einem Attribut definiert (_z.B._, `xlink:href`), hat dieses Attribut keinen Namensraum. Mit anderen Worten, Attribute erben nicht den Namensraum des Elements, auf dem sie sich befinden. Um dieses Verhalten widerzuspiegeln, gilt der Standard-Namensraum in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifikation von Standard- und Präfix-Namensräumen

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* This matches all XHTML <a> elements, as XHTML is the default unprefixed namespace */
a {
}

/* This matches all SVG <a> elements */
svg|a {
}

/* This matches both XHTML and SVG <a> elements */
*|a {
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Namensräume Crashkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
