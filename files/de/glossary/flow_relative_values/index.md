---
title: Fluss-relative Werte
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

{{GlossarySidebar}}

In CSS sind **fluss-relative Werte** richtungsbezogene Schlüsselwörter, die relativ zu den Block- und Inline-Achsen eines Elements sind. Diese Werte umfassen `block-start`, `block-end`, `inline-start`, `inline-end`, `start` und `end`.

In CSS definieren {{Glossary("physical_properties", "physische Eigenschaften")}} Positionen basierend auf physischen Richtungen und beziehen sich auf bestimmte Seiten eines Elements.

CSS {{Glossary("logical_properties", "logische Eigenschaften")}} hingegen definieren Stile basierend auf dem Schreibmodus und der Richtung des Dokuments, anstatt auf den physischen Dimensionen des Ansichtsfensters. Logische Eigenschaften sind relativ zum Inhaltsfluss und verwenden richtungsbezogene Schlüsselwörter im Verhältnis zu den Block- und Inline-Achsen.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge der Elemente in einem Block-Layout definiert. Sie bestimmt im Wesentlichen die Richtung, entlang derer Blöcke von Inhalten — wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) — auf einer Webseite angeordnet sind. Dies ist auch als **Blockrichtung** bekannt. In links-nach-rechts- und rechts-nach-links-Sprachen ist die Blockrichtung die vertikale Ausrichtung des Inhaltsflusses, der von oben nach unten geht.

Die Richtungen **block-start** und **block-end** repräsentieren den _Anfangsrand_ und den _Endrand_ von Inhalten entlang der Blockachse oder die "von" und "zu" Richtungen, wobei `block-start` das Äquivalent von `top` und `block-end` das Äquivalent von `bottom` in horizontalen Schreibmodi darstellt.

## Inlinerichtung

Die **Inlineachse** steht senkrecht zur Blockachse. Die Inlineachse repräsentiert die Richtung, entlang derer Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies ist auch als **Inlinerichtung** bekannt. In links-nach-rechts-Schreibmodi, wie Englisch, ist die Inlinerichtung horizontal, von links nach rechts. In rechts-nach-links-Sprachen, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren den _Anfangsrand_ und den _Endrand_ von Inhalten entlang der Inlineachse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` den Eigenschaften und Werten `left` und `right` in horizontalen Schreibmodi entsprechen. Ob sie `right` oder `left` entsprechen, hängt von der Schreibrichtung ab. Beispielsweise entspricht `inline-start` `left` in links-nach-rechts-Sprachen und `right` in rechts-nach-links-Sprachen.

## Start und Ende

Die Effekte einer CSS-Eigenschaft können entweder eindimensional oder zweidimensional sein. Zum Beispiel betrifft {{cssxref("text-align")}} nur die Inlinerichtung von Text, also ist es eindimensional. Wenn kontextuell auf eine Dimension beschränkt, werden die fluss-relativen Schlüsselwörter auf nur `start` oder `end` abgekürzt.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Grundkonzepte logischer Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
