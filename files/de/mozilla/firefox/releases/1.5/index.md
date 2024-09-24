---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Basierend auf der [Gecko](/de/docs/Glossary/Gecko) 1.8 Engine verbesserte Firefox 1.5 seine bereits erstklassige Unterstützung für Standards und bot neue Möglichkeiten, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptfähige und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und [`<canvas>`](/de/docs/Web/API/Canvas_API), [XForms](/de/docs/Glossary/XForms) und XML-Ereignisse sowie viele Verbesserungen bei DHTML, JavaScript und DOM.

## Entwicklerwerkzeuge

Verschiedene Werkzeuge und Browsererweiterungen stehen zur Verfügung, um Entwickler bei der Unterstützung von Firefox 1.5 zu unterstützen.

- [DOM Inspector](/de/docs/DOM_Inspector), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. DOM Inspector ist im benutzerdefinierten Installationsmodus in Firefox 1.5 unter Entwicklerwerkzeuge verfügbar.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browsererweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Überblick

Einige der neuen Funktionen in Firefox 1.5:

### Webseiten- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf die gleiche Weise zu manipulieren, wie man reguläres XHTML skripten würde. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Lernen Sie den neuen `<canvas>`-Tag und wie Sie in Firefox Grafiken und andere Objekte zeichnen können.
- [CSS3 Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Lernen Sie die neue Unterstützung für automatisches mehrspaltiges Textlayout kennen, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wird.
- [Verwendung des Firefox 1.5-Caching](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation vor und zurück beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellung einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Dieses Tutorial führt Sie durch die Schritte zur Erstellung einer sehr einfachen Erweiterung für Firefox. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in 1.5 demonstriert, die das Erstellen einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so zu kapseln, dass es [sicher von privilegiertem Code aus zugänglich ist](/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Präferenzsystem](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es ermöglichen, Optionsfenster einfacher mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL JavaScript-Dateien können jetzt Nicht-{{Glossary("ASCII")}}-Zeichen enthalten.
- [Tree API Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL `<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsabfragen können jetzt kanalspezifisch überschrieben werden. Dies funktioniert, indem ein Schnittstellenanforderer als `nsIChannel`'s notificationCallbacks gesetzt und eine Schnittstelle für `nsIBadCertListener` bereitgestellt wird.
- nsIWebBrowserPersist's Zuhörer können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und erhalten eine Gelegenheit, alle Schnittstellen bereitzustellen, die von Kanälen möglicherweise angefordert werden, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier beinhalten `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Nutzer, einschließlich XMLHttpRequest, können explizit einen Cookie-Header setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Endbenutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung der Vor- und Zurück-Buttons.
- **Ziehen und Ablegen zum Neuanordnen von Browser-Tabs.**
- **Answers.com wird zur Suchmaschinenliste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen zur Benutzerfreundlichkeit des Produkts**, einschließlich beschreibender Fehlerseiten, überarbeitetem Optionsmenü, RSS-Erkennung und "Abgesicherter Modus"-Erlebnis.
- **Bessere Unterstützung für Barrierefreiheit** einschließlich DHTML-Zugänglichkeit.
- **Assistent zum Melden einer defekten Website**, um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisiertes Update**, um Produkt-Upgrades zu vereinfachen. Die Benachrichtigung über ein Update ist deutlicher, und Updates für Firefox können jetzt halb so groß wie ein Megabyte sein oder sogar kleiner. Das Aktualisieren von Erweiterungen wurde ebenfalls verbessert.
- **Verbesserungen der Pop-up-Blockierung.**
- **Funktion zum Löschen privater Daten** bietet eine einfache Möglichkeit, schnell persönliche Daten über ein Menüelement oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Die Unterstützung von Firefox für Webstandards setzt den Standard in der Branche mit konsistenten plattformübergreifenden Implementierungen fort für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ([XHTML](/de/docs/Glossary/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml/), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Style-Sheets mit XML-Dokumenten verknüpfen 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL-Transformationen ([XSLT](/de/docs/Web/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML Path Language ([XPath](/de/docs/Web/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Resource Description Framework ([RDF](/de/docs/Glossary/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datentransportprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es am 9. November 2004 erstmals veröffentlicht wurde. Firefox hat mit vielen neuen Funktionen und Fehlerbehebungen Fortschritte gemacht. Eine detaillierte Liste der Änderungen ist auf [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
