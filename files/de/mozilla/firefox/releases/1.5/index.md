---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Basierend auf der [Gecko](/de/docs/Glossary/Gecko) 1.8 Engine, verbesserte Firefox 1.5 seine bereits erstklassige Unterstützung von Standards und bot neue Funktionen, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 beinhaltet eine verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptbare und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, [XForms](/de/docs/Glossary/XForms) und XML-Ereignisse sowie viele DHTML-, JavaScript- und DOM-Verbesserungen.

## Entwicklerwerkzeuge

Verschiedene Werkzeuge und Browser-Erweiterungen stehen zur Verfügung, um Entwickler bei der Unterstützung von Firefox 1.5 zu helfen.

- [DOM Inspector](/de/docs/DOM_Inspector), ein Tool, das Entwicklern ermöglicht, Dokumente zu inspizieren und zu ändern, ohne das Dokument direkt bearbeiten zu müssen. Der DOM Inspector ist als Teil der benutzerdefinierten Installationsoption unter Entwicklerwerkzeuge in Firefox 1.5 verfügbar.
- JavaScript-Konsole, ein Werkzeug, um JavaScript-Code zu schreiben und zu testen sowie JavaScript- und CSS-Fehler auf einer Seite anzuzeigen.
- Seitenquelltext ansehen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML-Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf die gleiche Weise zu manipulieren, wie Sie reguläres XHTML skripten würden. Sehen Sie sich [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox) an, um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>`-Tag und wie Sie in Firefox Grafiken und andere Objekte zeichnen.
- [CSS3-Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für automatisches mehrspaltiges Textlayout, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wird.
- [Firefox 1.5 Caching verwenden](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation zurück und vorwärts beschleunigt.

### XUL- und Erweiterungsentwickler

- [Eine Erweiterung erstellen](/de/docs/Mozilla/Add-ons)
  - : Dieses Tutorial führt Sie durch die Schritte, die erforderlich sind, um eine sehr grundlegende Erweiterung für Firefox zu erstellen. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in Version 1.5 demonstriert, die die Erstellung einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so einzuwickeln, dass es [sicher aus privilegiertem Code zugänglich ist](/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten mit Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Preferences System](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es Ihnen ermöglichen, Optionsfenster einfacher mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten.
- [Tree API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen für den Zugriff auf XUL `<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsanfragen können jetzt pro Kanal überschrieben werden. Dies funktioniert, indem ein Schnittstellen-Anfrager als `nsIChannel`'s notificationCallbacks gesetzt wird und eine Schnittstelle für `nsIBadCertListener` bereitgestellt wird.
- nsIWebBrowserPersist's Listener können nun `nsIInterfaceRequestor::GetInterface` implementieren und haben die Möglichkeit, alle Schnittstellen bereitzustellen, die Kanäle möglicherweise anfordern, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier beinhalten `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Verbraucher, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Benutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung der Zurück- und Vorwärts-Taste.
- **Drag-and-Drop-Umsortierung für Browser-Tabs.**
- **Answers.com wurde zur Suchmaschinenliste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen der Produktbenutzbarkeit** einschließlich beschreibender Fehlerseiten, neu gestaltetem Optionsmenü, RSS-Erkennung und "Abgesicherter Modus"-Erlebnis.
- **Bessere Unterstützung der Barrierefreiheit** einschließlich DHTML-Barrierefreiheit.
- **Assistent zum Melden einer fehlerhaften Website** zum Melden von Websites, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher), einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisierte Updates**, um Produktaufrüstungen zu vereinfachen. Die Benachrichtigung über ein Update ist deutlicher, und Updates für Firefox können jetzt einen halben Megabyte oder kleiner sein. Auch das Aktualisieren von Erweiterungen hat sich verbessert.
- **Verbesserungen des Popup-Blockers.**
- **Funktion "Private Daten löschen"** bietet eine einfache Möglichkeit, persönliche Daten schnell über einen Menüpunkt oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Die Unterstützung von Firefox für Webstandards ist weiterhin führend in der Branche mit konsistenten plattformübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ([XHTML](/de/docs/Glossary/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml/), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Style Sheets mit XML-Dokumenten verknüpfen 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL-Transformationen ([XSLT](/de/docs/Web/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Ressource Description Framework ([RDF](/de/docs/Glossary/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Seit der ersten Veröffentlichung am 9. November 2004 wurden viele Änderungen in Firefox eingeführt. Firefox hat sich mit vielen neuen Funktionen und Fehlerkorrekturen weiterentwickelt. Eine detaillierte Liste der Änderungen ist auf [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
