---
title: XPath
slug: Web/XPath
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

XPath steht für XML Path Language. Es verwendet eine Nicht-XML-Syntax, um eine flexible Methode zum Adressieren (Zeigen auf) verschiedener Teile eines [XML](/de/docs/Web/XML/XML_introduction)-Dokuments bereitzustellen. Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XSLT) verwendet, kann aber auch als wesentlich leistungsfähigere Methode genutzt werden, um durch das [DOM](/de/docs/Web/API/Document_Object_Model) eines Dokuments einer XML-ähnlichen Sprache zu navigieren, wie z.B. [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere Funktionen des DOM Core zu verlassen.

XPath verwendet eine Pfadnotation (wie in URLs) zur Navigation durch die hierarchische Struktur eines XML-Dokuments. Es verwendet eine Nicht-XML-Syntax, sodass es in URIs und XML-Attributwerten verwendet werden kann.

## Leitfäden

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine Nicht-XSLT-Nutzung von XPath.
- [XPath-Snippets](/de/docs/Web/XPath/Guides/Snippets)
  - : Diese sind JavaScript-Hilfsfunktionen, die basierend auf den [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/)-APIs in Ihrem eigenen Code verwendet werden können.

## Referenz

- [XPath: Achsen](/de/docs/Web/XPath/Reference/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Achsen. Achsen beschreiben die Beziehungen zwischen Knoten.
- [XPath: Funktionen](/de/docs/Web/XPath/Reference/Functions)
  - : Liste und Beschreibung der Kernfunktionen von XPath und XSLT-spezifischen Erweiterungen zu XPath.

## Siehe auch

- [XSLT](/de/docs/Web/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Transformation von XML mit XSLT](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XPath/Guides/Comparison_with_CSS_selectors)
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/) führt in XSLT und XPath ein, einschließlich Hintergrund, Kontext, Struktur, Konzepte und Terminologie - xml.com (2000)
- [XPath-Tester](https://extendsclass.com/xpath-tester.html) Online XPath Builder/Debugger
