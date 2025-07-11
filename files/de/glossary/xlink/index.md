---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

XLink ist ein W3C-Standard, der verwendet wird, um Links zwischen XML und XML oder anderen Dokumenten zu beschreiben. Einige seiner Verhaltensweisen werden der Implementierung überlassen, um festzulegen, wie damit umgegangen werden soll.

Einfache XLinks werden in Firefox (mindestens in SVG und MathML) "unterstützt", obwohl sie nicht als Links funktionieren, wenn man ein einfaches XML-Dokument mit XLinks lädt und versucht, auf die relevanten Punkte im XML-Baum zu klicken.

Für diejenigen, die XLink 1.0 für regelmäßige Links als umständlich empfanden, entfällt in XLink 1.1 die Notwendigkeit, `xlink:type="simple"` für einfache Links anzugeben.

XLink wird in [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) und anderen wichtigen Standards verwendet.

### Spezifikationen

- [XLink 1.1](https://www.w3.org/TR/xlink/)

### Siehe auch

- [XML](/de/docs/Web/XML)
- [Code snippets:getAttributeNS](/de/docs/Web/API/Element/getAttributeNS) - ein Wrapper, um mit der Nichtunterstützung dieser DOM-Methode in einigen Browsern umzugehen
