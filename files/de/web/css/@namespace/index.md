---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/At-rule), die XML-[Namespaces](/de/docs/Glossary/Namespace) definiert, die in einem [CSS](/de/docs/Glossary/CSS)-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden sollen.

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

Die definierten Namespaces können verwendet werden, um die [Universalselektoren](/de/docs/Web/CSS/Universal_selectors), [Typselektoren](/de/docs/Web/CSS/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) auf Elemente dieses Namespaces zu beschränken. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namespaces enthalten, wie z. B. HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorausgehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle Universalselektoren und Typselektoren (aber nicht Attributselektoren, siehe untenstehenden Hinweis) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein Universal-, Typ- oder Attributselektor mit einem Namespace-Präfix versehen wird, dann stimmt dieser Selektor nur, wenn sowohl der Namespace als auch der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannte [Fremdelemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als befänden sie sich im XHTML-Namespace (`http://www.w3.org/1999/xhtml`), selbst wenn nirgendwo im Dokument ein `xmlns`-Attribut vorhanden ist, und die [`<svg>`](/de/docs/Web/SVG/Element/svg) und [`<math>`](/de/docs/Web/MathML/Element/math) Elemente werden ihren entsprechenden Namespaces (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`) zugewiesen.

> [!NOTE]
> In XML, es sei denn, ein Präfix wird direkt auf einem Attribut definiert (z.B. `xlink:href`), hat dieses Attribut keinen Namespace. Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten nachzubilden, gilt der Standard-Namespace in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Standard- und Präfix-Namespaces

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

- [Namespaces Crash-Kurs](/de/docs/Web/SVG/Namespaces_Crash_Course)
