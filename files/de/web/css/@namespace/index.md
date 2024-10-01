---
title: "@namespace"
slug: Web/CSS/@namespace
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

**`@namespace`** ist eine [At-Regel](/de/docs/Web/CSS/At-rule), die XML-{{Glossary("Namespace", "Namespaces")}} definiert, die in einem {{Glossary("CSS", "CSS")}}-[Stylesheet](/de/docs/Web/API/StyleSheet) verwendet werden.

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

Die definierten Namespaces können verwendet werden, um die [universellen](/de/docs/Web/CSS/Universal_selectors), [Typ-](/de/docs/Web/CSS/Type_selectors) und [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) einzuschränken, so dass sie nur Elemente innerhalb dieses Namespaces auswählen. Die `@namespace`-Regel ist im Allgemeinen nur nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten – wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

Alle `@namespace`-Regeln müssen allen {{cssxref("@charset")}}- und {{cssxref("@import")}}-Regeln folgen und vor allen anderen At-Regeln und [Stildeklarationen](/de/docs/Web/API/CSSStyleDeclaration) in einem Stylesheet stehen.

`@namespace` kann verwendet werden, um den **Standard-Namespace** für das Stylesheet zu definieren. Wenn ein Standard-Namespace definiert ist, gelten alle universellen und Typ-Selektoren (aber nicht Attribut-Selektoren, siehe unten stehende Notiz) nur für Elemente in diesem Namespace.

Die `@namespace`-Regel kann auch verwendet werden, um ein **Namespace-Präfix** zu definieren. Wenn ein universeller, Typ- oder Attribut-Selektor mit einem Namespace-Präfix versehen ist, stimmt dieser Selektor nur überein, wenn der Namespace _und_ der Name des Elements oder Attributs übereinstimmt.

In HTML werden bekannte [fremde Elemente](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements) automatisch Namespaces zugewiesen. Das bedeutet, dass HTML-Elemente so agieren, als ob sie sich im XHTML-Namespace (`http://www.w3.org/1999/xhtml`) befinden, auch wenn kein `xmlns`-Attribut irgendwo im Dokument vorhanden ist, und die [`<svg>`](/de/docs/Web/SVG/Element/svg)- und [`<math>`](/de/docs/Web/MathML/Element/math)-Elemente werden ihren korrekten Namespaces zugewiesen (`http://www.w3.org/2000/svg` und `http://www.w3.org/1998/Math/MathML`, jeweils).

> [!NOTE]
> In XML hat ein Attribut keinen Namespace, es sei denn, es wird direkt auf diesem Attribut ein Präfix definiert (_z.B._, `xlink:href`). Mit anderen Worten, Attribute erben nicht den Namespace des Elements, auf dem sie sich befinden. Um dieses Verhalten zu spiegeln, findet der Standard-Namespace in CSS keine Anwendung auf Attribut-Selektoren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standard- und Präfix-Namespaces spezifizieren

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

- [Namespaces Schnellkurs](/de/docs/Web/SVG/Namespaces_Crash_Course)
