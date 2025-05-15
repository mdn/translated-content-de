---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

XPath steht für XML Path Language. Es verwendet eine nicht-XML-Syntax, um eine flexible Möglichkeit zu bieten, auf verschiedene Teile eines [XML](/de/docs/Web/XML/Guides/XML_introduction)-Dokuments zu verweisen. XPath kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XML/XSLT) verwendet, kann aber auch als leistungsstärkere Möglichkeit genutzt werden, um durch das [DOM](/de/docs/Web/API/Document_Object_Model) eines XML-ähnlichen Sprachdokuments, wie [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), zu navigieren, anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften von [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere DOM-Core-Features zu verlassen.

XPath verwendet eine Pfadnotation (wie URLs), um durch die hierarchische Struktur eines XML-Dokuments zu navigieren. Es verwendet eine nicht-XML-Syntax, sodass es in URIs und XML-Attributwerten verwendet werden kann.

## Leitfäden

Die [XPath-Leitfäden](/de/docs/Web/XML/XPath/Guides) beinhalten praktische Code-Snippets und beschreiben, wie XPath in JavaScript verwendet wird.

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine Nicht-XSLT-Verwendung von XPath.
- [XPath-Snippets](/de/docs/Web/XML/XPath/Guides/Snippets)
  - : Dies sind JavaScript-Dienstprogramme, die in Ihrem eigenen Code verwendet werden können, basierend auf [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs.

## Referenz

Die [XPath-Referenz](/de/docs/Web/XML/XPath/Reference) behandelt alle auf MDN dokumentierten XPath-Achsen und -Funktionen.

- [XPath:Axes](/de/docs/Web/XML/XPath/Reference/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Achsen. Achsen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath:Functions](/de/docs/Web/XML/XPath/Reference/Functions)
  - : Liste und Beschreibung der Kernfunktionen von XPath sowie der XSLT-spezifischen Erweiterungen von XPath.

## Siehe auch

- [XSLT](/de/docs/Web/XML/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Transforming XML with XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) führt in XSLT und XPath ein, einschließlich Hintergrund, Kontext, Struktur, Konzepte und Terminologie - xml.com (2000)
- [XPath-Tester](https://extendsclass.com/xpath-tester.html) Online-XPath-Builder/Debugger
