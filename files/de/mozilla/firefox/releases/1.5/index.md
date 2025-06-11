---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{FirefoxSidebar}}

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8-Engine, hat Firefox 1.5 seine bereits erstklassige Unterstützung von Standards verbessert und neue Fähigkeiten bereitgestellt, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skript- und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, {{Glossary("XForms", "XForms")}} und XML-Ereignisse, sowie viele Verbesserungen bei DHTML, JavaScript und DOM.

## Entwickler-Tools

Mehrere Tools und Browser-Erweiterungen stehen zur Verfügung, um Entwicklern bei der Unterstützung von Firefox 1.5 zu helfen.

- [DOM Inspector](/de/docs/DOM_Inspector), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. Der DOM Inspector ist als Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter "Entwickler-Tools" verfügbar.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntaxhervorhebung und Suchfunktion.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>), und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild in derselben Weise zu manipulieren, wie Sie es mit regulärem XHTML skripten würden. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Lernen Sie das neue `<canvas>`-Tag kennen und wie Sie Grafiken und andere Objekte in Firefox zeichnen können.
- [CSS3-Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Lernen Sie die neue Unterstützung für automatisches mehrspaltiges Textlayout kennen, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wurde.
- [Verwendung des Caching in Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation vor und zurück beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erweiterung erstellen](/de/docs/Mozilla/Add-ons)
  - : Diese Anleitung führt Sie durch die notwendigen Schritte zur Erstellung einer sehr einfachen Erweiterung für Firefox. Siehe auch [eine weitere Anleitung in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), die die neuen Funktionen des Erweiterungsmanagers in 1.5 demonstriert, die das Erstellen einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so zu umhüllen, dass es [sicher aus privilegiertem Code zugänglich](/de/docs/Safely_accessing_content_DOM_from_chrome) ist. Es kann in allen Firefox-Versionen verwendet werden, wobei sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Preferenzsystem](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es ermöglichen, Optionsfenster einfacher mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL JavaScript-Dateien können jetzt nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Tree API Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL-`<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Änderungen im Zusammenhang mit Netzwerken

- Zertifikatsaufforderungen können jetzt pro Kanal überschrieben werden. Dies funktioniert, indem ein Interface-Anforderer als `nsIChannel`'s notificationCallbacks festgelegt wird und eine Schnittstelle für `nsIBadCertListener` bereitgestellt wird.
- Die Listener von nsIWebBrowserPersist können nun `nsIInterfaceRequestor::GetInterface` implementieren und erhalten die Gelegenheit, alle Schnittstellen bereitzustellen, nach denen Kanäle möglicherweise fragen, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier sind `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere necko-Verbraucher, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, sodass der explizite Header die gespeicherten Cookies überschreibt.

## Neue Endbenutzer-Funktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung der Vor- und Zurück-Buttons.
- **Drag-and-Drop-Umsortierung für Browser-Tabs.**
- **Answers.com wird zur Suchmaschinenliste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen der Produktbenutzbarkeit**, darunter beschreibende Fehlerseiten, überarbeitetes Optionsmenü, RSS-Erkennung und "Safe Mode"-Erfahrung.
- **Bessere Unterstützung für Barrierefreiheit**, einschließlich DHTML-Zugänglichkeit.
- **Assistent zum Melden fehlerhafter Websites**, um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher), einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisiertes Update**, um Produkt-Upgrades zu vereinfachen. Benachrichtigungen über Updates sind auffälliger, und Updates für Firefox können jetzt einen halben Megabyte oder kleiner sein. Auch das Aktualisieren von Erweiterungen wurde verbessert.
- **Verbesserungen beim Pop-up-Blocker.**
- **Funktion "Private Daten löschen"** bietet eine einfache Möglichkeit, schnell persönliche Daten über ein Menüelement oder eine Tastenkombination zu entfernen.

### Unterstützung für Open-Web-Standards

Die Firefox-Unterstützung für Webstandards führt weiterhin die Branche an, mit konsistenten plattformübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Style Sheets mit XML-Dokumenten verknüpfen 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragmentbezeichner für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformierungen ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenübertragungsprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden seit der ersten Veröffentlichung von Firefox am 9. November 2004 eingeführt. Firefox hat sich mit vielen neuen Funktionen und Fehlerbehebungen weiterentwickelt. Eine detaillierte Liste der Änderungen ist auf [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
