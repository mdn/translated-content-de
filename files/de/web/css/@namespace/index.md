---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`@namespace`** ist eine [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namensräume")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namensräume können verwendet werden, um die [universellen](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), [Typen-](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und [Attribut-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) auf Elemente innerhalb dieses Namensraums zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namensräume enthalten – wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}} und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stilerklärungen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorangestellt sein.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namensraum definiert ist, gelten alle universellen und Typen-Selektoren (aber nicht Attribut-Selektoren, siehe Hinweis unten) nur für Elemente in diesem Namensraum.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namenspräfix** zu definieren. Wenn ein universeller, Typen- oder Attribut-Selektor mit einem Namenspräfix versehen ist, dann gilt dieser Selektor nur, wenn sowohl der Namensraum _als auch_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namensräumen zugeordnet. Dies bedeutet, dass HTML-Elemente so agieren, als ob sie sich im XHTML-Namespace (`http://www.w3.org/1999/xhtml`) befinden, selbst wenn es kein `xmlns`-Attribut irgendwo im Dokument gibt, und die [`<svg>`](/de/docs/Web/SVG/Reference/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Reference/Element/math)-Elemente werden ihren richtigen Namensräumen zugeordnet (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`, jeweils).

> [!NOTE]
> In XML hat ein Attribut, sofern nicht direkt ein Präfix darauf definiert ist (_z.B._, `xlink:href`), keinen Namensraum. Mit anderen Worten, Attribute erben nicht den Namensraum des Elements, auf dem sie sich befinden. Um dieses Verhalten zu unterstützen, gilt der Standard-Namensraum in CSS nicht für Attribut-Selektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung von Standard- und Präfix-Namensräumen

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

- [Namensräume Crash-Kurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
