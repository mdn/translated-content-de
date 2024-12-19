---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

{{EmbedInteractiveExample("pages/tabbed/at-rule-namespace.html", "tabbed-shorter")}}

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

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) auf Elemente innerhalb dieses Namespaces zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namespaces enthalten — wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}} und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typselektoren (aber nicht Attributselektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller-, Typ- oder Attributselektor mit einem Namespace-Präfix versehen ist, stimmt dieser Selektor nur überein, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [fremde Elemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Dies bedeutet, dass HTML-Elemente so agieren, als ob sie zum XHTML-Namespace (`http://www.w3.org/1999/xhtml`) gehören, selbst wenn im Dokument kein `xmlns`-Attribut vorhanden ist, und dass die [`<svg>`](/de/docs/Web/SVG/Element/svg) und [`<math>`](/de/docs/Web/MathML/Element/math) Elemente ihre entsprechenden Namespaces zugewiesen bekommen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> In XML hat ein Attribut, sofern ein Präfix nicht direkt auf dem Attribut definiert ist (_z.B._, `xlink:href`), keinen Namespace. Mit anderen Worten erben Attribute nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzubilden, gilt der Standard-Namespace in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und präfixierte Namespaces festlegen

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

- [Namespaces Einführungskurs](/de/docs/Web/SVG/Namespaces_Crash_Course)
