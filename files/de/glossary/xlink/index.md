---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

XLink ist ein W3C-Standard, der verwendet wird, um Links zwischen XML- und XML- oder anderen Dokumenten zu beschreiben. Einige seiner Verhaltensweisen werden der Implementierung überlassen, um zu bestimmen, wie damit umgegangen werden soll.

Einfache XLinks werden in Firefox "unterstützt" (zumindest in SVG und MathML), obwohl sie nicht als Links funktionieren, wenn man ein einfaches XML-Dokument mit XLinks lädt und versucht, auf die relevanten Punkte im XML-Baum zu klicken.

Für diejenigen, die XLink 1.0 für reguläre Links umständlich fanden, entfällt in XLink 1.1 die Notwendigkeit, `xlink:type="simple"` für einfache Links anzugeben.

XLink wird in [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) und anderen wichtigen Standards verwendet.

### Spezifikationen

- [XLink 1.0](https://www.w3.org/TR/xlink/)
- [XLink 1.1](https://www.w3.org/TR/xlink11/) (derzeit ein Arbeitsentwurf)

### Siehe auch

- [XML](/de/docs/Web/XML)
- [Code snippets:getAttributeNS](/de/docs/Web/API/Element/getAttributeNS) - ein Wrapper, um mit einigen Browsern umzugehen, die diese DOM-Methode nicht unterstützen
