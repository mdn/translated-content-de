---
title: "@namespace"
slug: Web/CSS/Reference/At-rules/@namespace
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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
@namespace url("XML-namespace-URL");
@namespace "XML-namespace-URL";

/* Prefixed namespace */
@namespace prefix url("XML-namespace-URL");
@namespace prefix "XML-namespace-URL";
```

## Beschreibung

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), [Typen-](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) auf Elemente innerhalb dieses Namespaces zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur dann nützlich, wenn es um Dokumente mit mehreren Namespaces geht – wie HTML mit integriertem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}} und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typselektoren (aber nicht Attributselektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller, Typen- oder Attributselektor mit einem Namespace-Präfix versehen ist, dann passt dieser Selektor nur, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als wären sie im XHTML-Namespace (`http://www.w3.org/1999/xhtml`), selbst wenn es im Dokument kein `xmlns`-Attribut gibt, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente ihre korrekten Namespaces zugewiesen bekommen (`http://www.w3.org/2000/svg` bzw. `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut, sofern es kein Präfix direkt auf dem Attribut gibt (_z.B._, `xlink:href`), keinen Namespace. Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten zu imitieren, gilt der Standard-Namespace in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Angabe von Standard- und Präfix-Namespaces

```css
@namespace url("http://www.w3.org/1999/xhtml");
@namespace svg url("http://www.w3.org/2000/svg");

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

- [Namespaces Crash-Kurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
