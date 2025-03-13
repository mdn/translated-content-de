---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden.

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

Die definierten Namespaces können verwendet werden, um die Auswahl auf [universelle](/de/docs/Web/CSS/Universal_selectors), [Typen-](/de/docs/Web/CSS/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) zu beschränken, sodass nur Elemente innerhalb dieses Namespaces ausgewählt werden. Die Regel `@namespace` ist im Allgemeinen nur nützlich, wenn man es mit Dokumenten zu tun hat, die mehrere Namespaces enthalten—wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabularien mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stil-Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typen-Selektoren (aber nicht Attributselektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die Regel `@namespace` kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller, Typen- oder Attributselektor mit einem Namespace-Präfix versehen ist, dann passt dieser Selektor nur, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so wirken, als wären sie im XHTML-Namespace (`http://www.w3.org/1999/xhtml`), selbst wenn es nirgends im Dokument ein `xmlns`-Attribut gibt, und die [`<svg>`](/de/docs/Web/SVG/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente werden ihren entsprechenden Namespaces zugewiesen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut keinen Namespace, es sei denn, ein Präfix wird direkt auf dem Attribut definiert (_z.B._, `xlink:href`). Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzuahmen, gilt der Standard-Namespace in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und Präfix-Namespaces festlegen

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

- [Namespaces Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course)
- [Funktionen der CSS-At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
