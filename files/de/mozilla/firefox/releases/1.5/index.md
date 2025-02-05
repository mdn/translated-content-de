---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Basierend auf der {{Glossary("Gecko", "Gecko")}}-1.8-Engine hat Firefox 1.5 seine ohnehin schon erstklassige Unterstützung von Standards verbessert und neue Funktionen bereitgestellt, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skript- und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und [`<canvas>`](/de/docs/Web/API/Canvas_API), {{Glossary("XForms", "XForms")}} und XML-Ereignisse sowie zahlreiche Verbesserungen in DHTML, JavaScript und DOM.

## Entwickler-Tools

Es stehen verschiedene Tools und Browser-Erweiterungen zur Verfügung, um Entwickler bei der Unterstützung von Firefox 1.5 zu unterstützen.

- [DOM Inspector](/de/docs/DOM_Inspector), ein Tool, das es Entwicklern ermöglicht, Dokumente zu untersuchen und zu modifizieren, ohne sie direkt bearbeiten zu müssen. Der DOM Inspector ist als Teil der benutzerdefinierten Installation in Firefox 1.5 unter Entwickler-Tools verfügbar.
- JavaScript-Konsole, ein Tool zur Erstellung und Prüfung von JavaScript-Code sowie zur Anzeige von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntax-Highlighting- und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann auf XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf die gleiche Weise zu manipulieren, wie Sie reguläres XHTML skripten würden. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Lernen Sie das neue `<canvas>`-Tag kennen und wie Sie Grafiken und andere Objekte in Firefox zeichnen können.
- [CSS3-Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Lernen Sie die neue Unterstützung für das automatische mehrspaltige Textlayout kennen, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wurde.
- [Verwendung des Firefox-1.5-Cachings](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Lernen Sie `bfcache` kennen und wie es die Navigation zurück und vorwärts beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellen einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Dieses Tutorial führt Sie durch die Schritte zum Erstellen einer sehr einfachen Erweiterung für Firefox. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in 1.5 zeigt, die das Erstellen einer neuen Erweiterung erleichtern.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : Mit `XPCNativeWrapper` können Objekte so verpackt werden, dass sie [sicher von privilegierten Codes aus aufgerufen werden können](/de/docs/Safely_accessing_content_DOM_from_chrome). Dies kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Einstellungssystem](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, mit denen Sie Optionsfenster einfacher mit weniger JavaScript-Code erstellen können.
- [Internationale Zeichen in XUL-JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können nun nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Tree-API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL-`<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerbezogene Änderungen

- Zertifikatsabfragen können jetzt für jeden Kanal individuell überschrieben werden. Dies funktioniert, indem ein Interface-Anforderer als `nsIChannel`-Benachrichtigungscallbacks gesetzt wird und ein Interface für `nsIBadCertListener` bereitgestellt wird.
- Die Listener von nsIWebBrowserPersist können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und erhalten die Möglichkeit, alle Schnittstellen bereitzustellen, nach denen Kanäle fragen könnten, einschließlich `nsIProgressEventSink` (nicht allzu nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier umfassen `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Verbraucher, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, ohne dass Necko diesen ersetzt. Gespeicherte Cookies werden mit dem ausdrücklich gesetzten Header kombiniert, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Endnutzerfunktionen

### Benutzererfahrung

- **Schnellere Browsernavigation** durch Verbesserungen der Leistung der Rück- und Vorwärts-Buttons.
- **Drag-and-Drop-Anordnung für Browsertabs.**
- **Answers.com wird zur Suchmaschinenliste hinzugefügt** für die Wörterbuchsuche.
- **Verbesserungen der Benutzerfreundlichkeit des Produkts**, einschließlich beschreibender Fehlerseiten, überarbeitetem Optionsmenü, RSS-Erkennung und „Abgesicherter Modus“-Erlebnis.
- **Bessere Unterstützung für Barrierefreiheit**, einschließlich DHTML-Barrierefreiheit.
- **Assistent zum Melden einer fehlerhaften Website**, um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisiertes Update**, um Produktaktualisierungen zu optimieren. Die Benachrichtigung über ein Update ist deutlicher, und Updates für Firefox können jetzt eine Größe von einem halben Megabyte oder weniger haben. Auch die Aktualisierung von Erweiterungen wurde verbessert.
- **Verbesserungen beim Blockieren von Pop-ups.**
- **Die Funktion „Private Daten löschen“** bietet eine einfache Möglichkeit, persönliche Daten schnell über ein Menüelement oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Firefox unterstützt weiterhin die führenden Webstandards mit plattformübergreifend konsistenten Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematik-Markup-Sprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml/), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Associating Style Sheets with XML Documents 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformationen ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Version 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenübertragungsprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Seit der ersten Veröffentlichung von Firefox am 9. November 2004 wurden viele Änderungen eingeführt. Firefox hat sich mit zahlreichen neuen Funktionen und Fehlerbehebungen weiterentwickelt. Eine detaillierte Liste der Änderungen ist verfügbar über [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).
