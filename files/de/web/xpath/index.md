---
title: XPath
slug: Web/XPath
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{XsltSidebar}}

XPath steht für XML Path Language. Es verwendet eine Nicht-XML-Syntax, um eine flexible Möglichkeit zu bieten, auf verschiedene Teile eines [XML](/de/docs/Web/XML/XML_introduction)-Dokuments zu verweisen. Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XSLT) verwendet, kann aber auch als weitaus leistungsfähigere Möglichkeit genutzt werden, durch den [DOM](/de/docs/Web/API/Document_Object_Model) eines beliebigen XML-ähnlichen Sprachdokuments mit [`XPathExpression`](/de/docs/Web/API/XPathExpression) zu navigieren, wie [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere DOM-Core-Funktionen zu verlassen.

XPath verwendet eine Pfadnotation (wie in URLs) zur Navigation durch die hierarchische Struktur eines XML-Dokuments. Es verwendet eine Nicht-XML-Syntax, sodass es in URIs und XML-Attributwerten verwendet werden kann.

> [!NOTE]
> Die Unterstützung von XPath variiert stark; in Firefox wird sie ziemlich gut unterstützt (obwohl es keine Pläne gibt, die Unterstützung weiter zu verbessern), während andere Browser sie in geringerem Maße umsetzen, wenn überhaupt. Wenn Sie ein Polyfill benötigen, könnten Sie [js-xpath](https://pilotfiber.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js) oder [wicked-good-xpath](https://github.com/google/wicked-good-xpath) in Betracht ziehen.

## Dokumentation

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine Nicht-XSLT-Verwendung von XPath.
- [XPath: Achsen](/de/docs/Web/XPath/Axes)
  - : Auflistung und Definition der in der XPath-Spezifikation definierten Achsen. Achsen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath: Funktionen](/de/docs/Web/XPath/Functions)
  - : Auflistung und Beschreibung der Kernfunktionen von XPath und XSLT-spezifischen Ergänzungen zu XPath.
- [Transformieren von XML mit XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT verwendet XPath, um Codeabschnitte in einem XML-Dokument anzusprechen, die es transformieren möchte.
- [XPath-Codefragmente](/de/docs/Web/XPath/Snippets)
  - : Dies sind JavaScript-Hilfsfunktionen, die in Ihrem eigenen Code basierend auf den [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/)-APIs verwendet werden können.
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Diese umfangreiche Einführung in XSLT und XPath setzt kein Vorwissen über die Technologien voraus und führt den Leser durch Hintergrund, Kontext, Struktur, Konzepte und grundlegende Terminologie.

## Werkzeuge

- [XPath-Tester](https://extendsclass.com/xpath-tester.html)
  - : Ein Online-XPath-Builder/Debugger.

## Verwandte Themen

- [XSLT](/de/docs/Web/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XPath/Comparison_with_CSS_selectors)
