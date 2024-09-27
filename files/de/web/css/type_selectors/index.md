---
title: Typselektoren
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS-**Typselektor** wählt Elemente anhand des Knotennamens aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

Type-Selektoren können Namespaces verwenden, wenn {{CSSXref("@namespace")}} benutzt wird. Dies ist nützlich, wenn mit Dokumenten gearbeitet wird, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - entspricht `<h1>`-Elementen im Namespace _ns_
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen ohne einen deklarierten Namespace

## Syntax

## Beispiele

### CSS

### HTML

### Ergebnis

{{EmbedLiveSample('Examples', '100%', 150)}}

### Namespaces

In diesem Beispiel wird der Selektor nur `<h1>`-Elemente im Beispiel-Namensraum auswählen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
