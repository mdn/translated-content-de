---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

XLink ist ein W3C-Standard, der verwendet wird, um Links zwischen XML und XML oder anderen Dokumenten zu beschreiben. Einige seiner Verhaltensweisen sind der Implementierung überlassen, um zu bestimmen, wie sie gehandhabt werden sollen.

Einfache XLinks werden in Firefox "unterstützt" (zumindest in SVG und MathML), obwohl sie nicht als Links funktionieren, wenn man ein einfaches XML-Dokument mit XLinks lädt und versucht, auf die relevanten Punkte im XML-Baum zu klicken.

Für diejenigen, die XLink 1.0 für normale Links als umständlich empfunden haben, entfällt in XLink 1.1 die Notwendigkeit, `xlink:type="simple"` für einfache Links anzugeben.

XLink wird in [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) und anderen wichtigen Standards verwendet.

## Siehe auch

- [XLink 1.1](https://www.w3.org/TR/xlink/)
- [XML](/de/docs/Web/XML)
- [Code snippets:getAttributeNS](/de/docs/Web/API/Element/getAttributeNS) - ein Wrapper zur Handhabung von einigen Browsern, die diese DOM-Methode nicht unterstützen
