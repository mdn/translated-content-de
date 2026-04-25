---
title: "`@namespace` CSS at-rule"
short-title: "@namespace"
slug: Web/CSS/Reference/At-rules/@namespace
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die XML-{{Glossary("Namespace", "Namensräume")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namensräume können verwendet werden, um die [universellen](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), [Typ-](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und [Attribut-](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) zu beschränken, sodass nur Elemente innerhalb dieses Namensraums ausgewählt werden. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn mit Dokumenten gearbeitet wird, die mehrere Namensräume enthalten — wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabularien mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorangehen.

Mit `@namespace` kann der **Standard-Namespace** für das Stylesheet definiert werden. Wenn ein Standard-Namespace definiert wird, gelten alle universellen und Typ-Selektoren (aber nicht Attribut-Selektoren, siehe Hinweis unten) nur für Elemente in diesem Namensraum.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller-, Typ- oder Attribut-Selektor mit einem Namespace-Präfix versehen ist, dann passt dieser Selektor nur, wenn der Namensraum _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch mit Namensräumen versehen. Das bedeutet, dass HTML-Elemente so gehandhabt werden, als befänden sie sich im XHTML-Namensraum (`http://www.w3.org/1999/xhtml`), auch wenn kein `xmlns`-Attribut im gesamten Dokument vorhanden ist, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente werden ihren jeweiligen Namensräumen zugewiesen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut, sofern es nicht direkt mit einem Präfix versehen ist (_z.B._, `xlink:href`), keinen Namensraum. Mit anderen Worten, Attribute erben nicht den Namensraum des Elements, auf dem sie sich befinden. Um dieses Verhalten anzupassen, gilt der Standard-Namespace in CSS nicht für Attribut-Selektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Standard- und präfixierten Namensräumen

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

- [Namensräume-Kurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
