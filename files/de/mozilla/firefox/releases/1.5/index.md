---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8 Engine, verbesserte Firefox 1.5 seine bereits führende Unterstützung von Standards und bot neue Möglichkeiten, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptbare und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, {{Glossary("XForms", "XForms")}} und XML-Ereignisse sowie viele Verbesserungen in DHTML, JavaScript und DOM.

## Entwicklerwerkzeuge

Mehrere Tools und Browsererweiterungen stehen zur Verfügung, um Entwicklern die Unterstützung von Firefox 1.5 zu erleichtern.

- [DOM Inspector](/de/docs/DOM_Inspector), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. DOM Inspector ist als Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter Entwicklerwerkzeuge verfügbar.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zur Ansicht von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Überblick

Einige der neuen Funktionen in Firefox 1.5:

### Webseiten- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf die gleiche Weise zu manipulieren, wie man normales XHTML skriptet. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>`-Tag und wie man in Firefox Grafiken und andere Objekte zeichnet.
- [CSS3 Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für automatische Mehrspalten-Textlayouts, wie sie für [CSS3](/de/docs/Web/CSS) vorgeschlagen wurden.
- [Verwendung des Firefox 1.5-Cachings](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Vorwärts- und Rückwärtsnavigation beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellung einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Diese Anleitung führt Sie durch die Schritte zur Erstellung einer sehr einfachen Erweiterung für Firefox. Siehe auch [eine andere Anleitung in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), die die neuen Funktionen des Erweiterungsmanagers in Version 1.5 demonstriert, welche die Erstellung einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Methode, ein Objekt zu kapseln, sodass es [sicher aus privilegiertem Code zugänglich ist](/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Versionen von Firefox verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Präferenzen-System](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es erleichtern, Optionsfenster mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Tree API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen für den Zugriff auf XUL `<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsabfragen können nun pro Kanal überschrieben werden. Dies funktioniert durch das Setzen eines Interface-Requesters als `nsIChannel`'s notificationCallbacks und das Bereitstellen einer Schnittstelle für `nsIBadCertListener`.
- Die Listener von `nsIWebBrowserPersist` können nun `nsIInterfaceRequestor::GetInterface` implementieren und haben die Möglichkeit, alle Schnittstellen bereitzustellen, die Kanäle möglicherweise anfordern, einschließlich `nsIProgressEventSink` (weniger nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier umfassen `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Nutzer, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreiben wird.

## Neue Endbenutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung der Zurück- und Vorwärts-Schaltflächen.
- **Drag-and-Drop-Neuanordnung für Browser-Tabs.**
- **Answers.com wurde zur Suchmaschinenliste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen der Produktbenutzbarkeit**, einschließlich beschreibender Fehlerseiten, überarbeitetem Optionenmenü, RSS-Erkennung und "Abgesicherter Modus"-Erfahrungen.
- **Bessere Barrierefreiheit** einschließlich DHTML-Barrierefreiheit.
- **Assistent zum Melden einer defekten Website** zum Melden von Websites, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisches Update** für reibungslosere Produktaktualisierungen. Benachrichtigungen über ein Update sind auffälliger, und Updates zu Firefox können jetzt einen halben Megabyte oder kleiner sein. Auch die Aktualisierung von Erweiterungen hat sich verbessert.
- **Verbesserungen beim Blockieren von Pop-ups.**
- Die Funktion **Private Daten löschen** bietet eine einfache Möglichkeit, persönliche Daten schnell über einen Menüpunkt oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Die Unterstützung von Firefox für Webstandards führt weiterhin die Branche an mit konsistenten plattformübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Zuweisung von Stylesheets zu XML-Dokumenten 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragmentbezeichner für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL-Transformationen ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datentransportprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es erstmals am 9. November 2004 veröffentlicht wurde. Firefox hat sich durch viele neue Funktionen und Fehlerkorrekturen weiterentwickelt. Eine detaillierte Liste der Änderungen ist unter [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
