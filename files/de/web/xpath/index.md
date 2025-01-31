---
title: XPath
slug: Web/XPath
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

XPath steht für XML Path Language. Es verwendet eine nicht-XML-Syntax, um eine flexible Möglichkeit zur Adressierung (Verweis auf) verschiedener Teile eines [XML](/de/docs/Web/XML/XML_introduction) Dokuments bereitzustellen. Es kann auch verwendet werden, um adressierte Knoten innerhalb eines Dokuments zu testen, um festzustellen, ob sie einem Muster entsprechen oder nicht.

XPath wird hauptsächlich in [XSLT](/de/docs/Web/XSLT) verwendet, kann jedoch auch als weitaus mächtigere Methode zur Navigation durch den [DOM](/de/docs/Web/API/Document_Object_Model) eines XML-ähnlichen Sprachdokuments verwendet werden, z.B. mit [`XPathExpression`](/de/docs/Web/API/XPathExpression), wie [HTML](/de/docs/Web/HTML) und [SVG](/de/docs/Web/SVG), anstatt sich auf die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), die Eigenschaften [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und andere DOM-Kernfunktionen zu verlassen.

XPath verwendet eine Pfadnotation (wie bei URLs) für die Navigation durch die hierarchische Struktur eines XML-Dokuments. Es verwendet eine nicht-XML-Syntax, sodass es in URIs und XML-Attributwerten verwendet werden kann.

> [!NOTE]
> Die Unterstützung für XPath variiert stark; es wird in Firefox vernünftig unterstützt (obwohl es keine Pläne zur weiteren Verbesserung der Unterstützung gibt), während andere Browser es in geringerem Maße implementieren, wenn überhaupt. Wenn Sie ein Polyfill benötigen, können Sie [js-xpath](https://pilotfiber.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js) oder [wicked-good-xpath](https://github.com/google/wicked-good-xpath) in Betracht ziehen.

## Dokumentation

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Beschreibt eine nicht-XSLT-Verwendung von XPath.
- [XPath:Axes](/de/docs/Web/XPath/Axes)
  - : Liste und Definition der in der XPath-Spezifikation definierten Achsen. Achsen werden verwendet, um die Beziehungen zwischen Knoten zu beschreiben.
- [XPath:Functions](/de/docs/Web/XPath/Functions)
  - : Liste und Beschreibung der Kern-XPath-Funktionen und XSLT-spezifischen Erweiterungen von XPath.
- [Transformation von XML mit XSLT](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT verwendet XPath, um Codeabschnitte in einem XML-Dokument zu adressieren, die es transformieren möchte.
- [XPath Snippets](/de/docs/Web/XPath/Snippets)
  - : Dies sind JavaScript-Hilfsfunktionen, die basierend auf [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs in Ihrem eigenen Code verwendet werden können.
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Diese umfangreiche Einführung in XSLT und XPath setzt kein Vorwissen über die Technologien voraus und führt den Leser durch Hintergrund, Kontext, Struktur, Konzepte und grundlegende Terminologie.

## Werkzeuge

- [XPath Tester](https://extendsclass.com/xpath-tester.html)
  - : Ein Online XPath Builder/Debugger.

## Verwandte Themen

- [XSLT](/de/docs/Web/XSLT), [XML](/de/docs/Web/XML), [DOM](/de/docs/Web/API/Document_Object_Model)
- [Vergleich von CSS-Selektoren und XPath](/de/docs/Web/XPath/Comparison_with_CSS_selectors)
