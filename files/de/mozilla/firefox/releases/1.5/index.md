---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8 Engine, verbesserte Firefox 1.5 seine bereits branchenweit führende Standardunterstützung und bot neue Funktionen, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptfähige und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, {{Glossary("XForms", "XForms")}} und XML-Events, sowie viele DHTML-, JavaScript- und DOM-Verbesserungen.

## Entwicklerwerkzeuge

Mehrere Tools und Browser-Erweiterungen stehen zur Verfügung, um Entwicklern bei der Unterstützung von Firefox 1.5 zu helfen.

- [DOM-Inspector](/de/docs/DOM_Inspector), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu verändern, ohne das Dokument direkt bearbeiten zu müssen. DOM-Inspector ist als Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter Entwicklerwerkzeuge verfügbar.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen Firefox 1.5 derzeit nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf dieselbe Weise zu manipulieren, wie Sie reguläres XHTML skripten würden. Sehen Sie sich [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox) an, um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>` Tag und wie Sie Grafiken und andere Objekte in Firefox zeichnen können.
- [CSS3 Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für das automatische mehrspaltige Textlayout, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wird.
- [Verwendung des Firefox 1.5 Caching](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es das Vor- und Zurücknavigieren beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellen einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Dieses Tutorial führt Sie durch die Schritte, die erforderlich sind, um eine sehr grundlegende Erweiterung für Firefox zu erstellen. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in 1.5 zeigt, die das Erstellen einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt zu umwickeln, sodass es [sicher von privilegiertem Code aus zugänglich](/de/docs/Safely_accessing_content_DOM_from_chrome) ist. Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Präferenzsystem](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es ermöglichen, Optionenfenster einfacher mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können nun nicht-{{Glossary("ASCII", "ASCII")}} Zeichen enthalten.
- [Baum-API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL `<tree>` Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsabfragen können jetzt kanalweise überschrieben werden. Dies funktioniert, indem ein Anforderer als Anfragenotifikationen des `nsIChannel` gesetzt wird und eine Schnittstelle für `nsIBadCertListener` bereitgestellt wird.
- Die Listener von nsIWebBrowserPersist können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und erhalten die Möglichkeit, alle Schnittstellen bereitzustellen, die Kanäle möglicherweise anfordern, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier sind `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Konsumenten, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem ausdrücklich gesetzten Header kombiniert, wobei der explizite Header die gespeicherten Cookies überschreiben wird.

## Neue Endbenutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung der Vor- und Zurück-Schaltfläche.
- **Drag-and-Drop-Neuanordnung von Browser-Tabs.**
- **Answers.com wurde zur Suchmaschine-Liste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen der Produktbenutzerfreundlichkeit** einschließlich beschreibender Fehlerseiten, neu gestaltetes Optionsmenü, RSS-Erkennung und "Abgesicherter Modus"-Erfahrung.
- **Bessere Unterstützung für Barrierefreiheit** einschließlich DHTML-Zugänglichkeit.
- **Berichte über defekte Webseiten-Assistent** zum Melden von Websites, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und neuer), einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Privatsphäre

- **Automatisierte Updates** zur Vereinfachung von Produktaktualisierungen. Die Benachrichtigung über ein Update ist prominenter, und Updates für Firefox können nun ein halbes Megabyte oder kleiner sein. Auch die Aktualisierung von Erweiterungen wurde verbessert.
- **Verbesserungen der Popup-Blockierung.**
- **Funktion "Private Daten löschen"** bietet eine einfache Möglichkeit, persönliche Daten schnell über einen Menüpunkt oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Die Unterstützung von Firefox für Webstandards führt die Branche weiterhin mit konsistenten plattformübergreifenden Implementierungen an:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Zuordnung von Stylesheets zu XML-Dokumenten 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment-Identifier für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL-Transformationen ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datentransportprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichenkodierungen (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es erstmals am 9. November 2004 veröffentlicht wurde. Firefox hat sich mit vielen neuen Funktionen und Fehlerbehebungen weiterentwickelt. Eine detaillierte Liste der Änderungen ist auf [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
