---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namenräume können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) so einzuschränken, dass nur Elemente innerhalb dieses Namensraums ausgewählt werden. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten - wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Jede `@namespace`-Regel muss nach allen {{cssxref("@charset")}} und {{cssxref("@import")}}-Regeln stehen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorangehen.

`@namespace` kann verwendet werden, um den **Standard-Namensraum** für das Stylesheet zu definieren. Wenn ein Standard-Namensraum definiert ist, gelten alle universellen und Typselektoren (aber nicht Attributselektoren, siehe Anmerkung unten) nur für Elemente in diesem Namensraum.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namensraumprefix** zu definieren. Wenn ein universeller, Typ- oder Attributselektor mit einem Namensraumprefix versehen ist, dann passt dieser Selektor nur, wenn der Namensraum _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namenräumen zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als ob sie sich im XHTML-Namensraum (`http://www.w3.org/1999/xhtml`) befinden, auch wenn es kein `xmlns`-Attribut im Dokument gibt, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente werden ihren eigenen Namenräumen zugewiesen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut, sofern nicht direkt auf ihm ein Prefix definiert ist (z.B. `xlink:href`), keinen Namensraum. Mit anderen Worten, Attribute erben nicht den Namensraum des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzuahmen, gilt der Standard-Namensraum in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und Prefix-Namensräume spezifizieren

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

- [Namespaces-Kurzlehrgang](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
