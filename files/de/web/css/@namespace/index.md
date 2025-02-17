---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typen-](/de/docs/Web/CSS/Type_selectors) und [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) innerhalb eines [Selektors](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) auf Elemente innerhalb dieses Namespaces zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur dann nützlich, wenn man mit Dokumenten zu tun hat, die mehrere Namespaces enthalten – z. B. HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen alle {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln sowie [Stil-Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typen-Selektoren (aber nicht Attribut-Selektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller, Typ- oder Attribut-Selektor mit einem Namespace-Präfix versehen ist, entspricht dieser Selektor nur, wenn sowohl der Namespace _als auch_ der Name des Elements oder Attributs übereinstimmt.

In HTML werden bekannte [Foreign Elements](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so behandelt werden, als ob sie sich im XHTML-Namespace (`http://www.w3.org/1999/xhtml`) befinden, selbst wenn es im Dokument kein `xmlns`-Attribut gibt, und die [`<svg>`](/de/docs/Web/SVG/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Element/math)-Elemente ihre entsprechenden Namespaces (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`) erhalten.

> [!NOTE]
> In XML hat, sofern nicht direkt auf einem Attribut ein Präfix definiert ist (_z. B._ `xlink:href`), dieses Attribut keinen Namespace. Anders ausgedrückt, Attribute erben den Namespace des Elements, auf dem sie sich befinden, nicht. Um dieses Verhalten nachzubilden, gilt der Standard-Namespace in CSS nicht für Attribut-Selektoren.

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
