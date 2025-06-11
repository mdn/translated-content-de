---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

XPath steht für XML Path Language. Es verwendet eine nicht-XML-Syntax, um eine flexible Möglichkeit zu bieten, verschiedene Teile eines [XML](/de/docs/Web/XML/Guides/XML_introduction)-Dokuments anzusprechen (darauf zu zeigen). Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XML/XSLT) verwendet, kann aber auch als weitaus leistungsfähigere Methode zur Navigation durch das [DOM](/de/docs/Web/API/Document_Object_Model) eines Dokuments mit einer XML-ähnlichen Sprache, wie [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), mit [`XPathExpression`](/de/docs/Web/API/XPathExpression) verwendet werden, anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften von [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere DOM-Core-Funktionen zu verlassen.

XPath verwendet eine Pfadnotation (wie in URLs) zur Navigation durch die hierarchische Struktur eines XML-Dokuments. Es verwendet eine nicht-XML-Syntax, damit es in URIs und XML-Attributwerten verwendet werden kann.

## Leitfaden

Die [XPath-Leitfäden](/de/docs/Web/XML/XPath/Guides) beinhalten praktische Snippets und beschreiben, wie XPath in JavaScript verwendet wird.

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine Verwendung von XPath, die nicht in XSLT ist.
- [XPath-Snippets](/de/docs/Web/XML/XPath/Guides/Snippets)
  - : Das sind JavaScript-Hilfsfunktionen, die in Ihrem eigenen Code basierend auf XPath-APIs verwendet werden können.

## Referenz

Die [XPath-Referenz](/de/docs/Web/XML/XPath/Reference) deckt alle in MDN dokumentierten XPath-Achsen und -Funktionen ab.

- [XPath:Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Achsen. Achsen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath:Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)
  - : Liste und Beschreibung der Kern-XPath-Funktionen und der XSLT-spezifischen Ergänzungen zu XPath.

## Siehe auch

- [XSLT](/de/docs/Web/XML/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Transformation von XML mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) führt in XSLT und XPath ein, einschließlich Hintergrund, Kontext, Struktur, Konzepte und Terminologie - xml.com (2000)
- [XPath-Tester](https://extendsclass.com/xpath-tester.html) Online XPath Builder/Debugger
