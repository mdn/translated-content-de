---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

**`@namespace`** ist eine [Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attribut-](/de/docs/Web/CSS/Attribute_selectors) [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) darauf zu beschränken, nur Elemente innerhalb dieses Namespace auszuwählen. Die Regel `@namespace` ist im Allgemeinen nur nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten — wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabularien mischt.

Jegliche `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen Regeln und [Stil-Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typ-Selektoren (aber nicht Attribut-Selektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die Regel `@namespace` kann auch verwendet werden, um ein **Namensraum-Präfix** zu definieren. Wenn ein universeller, Typ- oder Attribut-Selektor mit einem Namensraum-Präfix versehen ist, dann stimmt dieser Selektor nur überein, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannten [Fremdelementen](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als ob sie sich im XHTML-Namespace (`http://www.w3.org/1999/xhtml`) befinden, auch wenn kein `xmlns`-Attribut irgendwo im Dokument vorhanden ist. Die [`<svg>`](/de/docs/Web/SVG/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Element/math)-Elemente erhalten ihre richtigen Namespaces (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut keinen Namespace, es sei denn, ein Präfix wird direkt auf einem Attribut definiert (z. B. `xlink:href`). Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzubilden, gilt der Standard-Namespace in CSS nicht für Attribut-Selektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und Präfix-Namespaces angeben

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

- [Einführung in Namespaces](/de/docs/Web/SVG/Namespaces_Crash_Course)
- [CSS-Regelfunktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
