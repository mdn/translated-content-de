---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namensräume")}} zur Verwendung in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) definiert.

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

Die definierten Namensräume können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attribut-](/de/docs/Web/CSS/Attribute_selectors) [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) nur auf Elemente innerhalb dieses Namensraums zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namensräume enthalten – wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stilerklärungen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standardnamensraum** für das Stylesheet zu definieren. Wenn ein Standardnamensraum definiert ist, gelten alle universellen und Typ-Selektoren (aber nicht Attribut-Selektoren, siehe Hinweis unten) nur für Elemente in diesem Namensraum.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namensraum-Präfix** zu definieren. Wenn ein universeller, Typ- oder Attribut-Selektor mit einem Namensraum-Präfix versehen ist, passt dieser Selektor nur, wenn der Namensraum _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namensräumen zugewiesen. Das bedeutet, dass HTML-Elemente so handeln, als ob sie sich im XHTML-Namensraum (`http://www.w3.org/1999/xhtml`) befinden, selbst wenn es nirgends im Dokument ein `xmlns`-Attribut gibt, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente werden ihren richtigen Namensräumen zugewiesen (`http://www.w3.org/2000/svg` bzw. `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut keinen Namensraum, es sei denn, es wird direkt auf dem Attribut ein Präfix definiert (_z.B._, `xlink:href`). Mit anderen Worten, Attribute erben nicht den Namensraum des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzubilden, gilt der Standardnamensraum in CSS nicht für Attribut-Selektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Angabe von Standard- und präfixierten Namensräumen

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

- [Namensräume Leitfaden](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
