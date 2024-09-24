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
/* Standard-Namespace */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Präfixierter Namespace */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## Beschreibung

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) zu beschränken, sodass nur Elemente innerhalb dieses Namespaces ausgewählt werden. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namespaces enthalten – wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

Jede `@namespace`-Regel muss allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und allen anderen At-Regeln und [Stil-Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet vorangehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typselektoren (nicht jedoch Attributselektoren, siehe Hinweis unten) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller, Typ- oder Attributselektor mit einem Namespace-Präfix versehen ist, passt dieser Selektor nur, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmen.

In HTML werden bekannten [fremden Elementen](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als wären sie im XHTML-Namespace (`http://www.w3.org/1999/xhtml`), auch wenn kein `xmlns`-Attribut irgendwo im Dokument vorhanden ist, und die [`<svg>`](/de/docs/Web/SVG/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Element/math)-Elemente werden ihren richtigen Namespaces zugewiesen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`, jeweils).

> [!NOTE]
> In XML hat ein Attribut, sofern ein Präfix nicht direkt auf einem Attribut definiert ist (_z.B._, `xlink:href`), keinen Namespace. Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten zu berücksichtigen, gilt der Standard-Namespace in CSS nicht für Attributselektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und präfixierte Namespaces angeben

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* Dies trifft auf alle XHTML <a>-Elemente zu, da XHTML der Standard-Namespace ohne Präfix ist */
a {
}

/* Dies trifft auf alle SVG <a>-Elemente zu */
svg|a {
}

/* Dies trifft sowohl auf XHTML- als auch auf SVG-<a>-Elemente zu */
*|a {
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Namespaces Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course)
