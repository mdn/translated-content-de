---
title: Firefox 1.5 für Entwickler
short-title: Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8-Engine, verbesserte Firefox 1.5 seine bereits erstklassige Unterstützung von Standards und bot neue Fähigkeiten für die nächste Generation von Webanwendungen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skript- und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und [`<canvas>`](/de/docs/Web/API/Canvas_API), {{Glossary("XForms", "XForms")}} und XML-Ereignisse, sowie viele DHTML-, JavaScript- und DOM-Verbesserungen.

## Entwicklerwerkzeuge

Es stehen mehrere Werkzeuge und Browser-Erweiterungen zur Verfügung, um Entwicklern die Unterstützung von Firefox 1.5 zu erleichtern.

- [DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html), ein Werkzeug, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. DOM Inspector ist als Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter Entwicklerwerkzeuge verfügbar.
- JavaScript-Konsole, ein Werkzeug zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Live HTTP Headers](https://web.archive.org/web/20200628024648/http://livehttpheaders.mozdev.org/), [HTML Validator](https://validator.w3.org/) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild in gleicher Weise zu manipulieren, wie Sie es mit regulärem XHTML skripten würden. Siehe [SVG in Firefox](https://web.archive.org/web/20210413180914/https://developer.mozilla.org/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Graphiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>` Tag und wie man Graphen und andere Objekte in Firefox zeichnet.
- [CSS3 Spalten](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
  - : Erfahren Sie mehr über die neue Unterstützung für automatische mehrspaltige Textlayout-Vorschläge für [CSS3](/de/docs/Web/CSS).
- [Verwendung von Firefox 1.5-Caching](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation zurück und vorwärts beschleunigt.

### XUL- und Erweiterungsentwickler

- [Eine Erweiterung erstellen](/de/docs/Mozilla/Add-ons)
  - : Diese Anleitung führt Sie durch die Schritte zur Erstellung einer sehr einfachen Erweiterung für Firefox. Siehe auch [ein weiteres Tutorial auf der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in Version 1.5 zeigt, die das Erstellen neuer Erweiterungen noch einfacher machen.
- [XPCNativeWrapper](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so zu umhüllen, dass es [sicher von privilegiertem Code zugegriffen werden kann](https://web.archive.org/web/20130905110328/https://developer.mozilla.org/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen genutzt werden, wobei sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas verändert hat.
- [Präferenzsystem](https://web.archive.org/web/20210620034317/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Preferences_system)
  - : Erfahren Sie mehr über die neuen Widgets, die es Ihnen ermöglichen, einfachere Optionsfenster mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](https://web.archive.org/web/20210126100844/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Tree-API-Änderungen](https://web.archive.org/web/20210414021241/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Tree_Widget_Changes)
  - : Die Schnittstellen für den Zugriff auf XUL-`<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](https://web.archive.org/web/20200812075014/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsaufforderungen können jetzt kanalweise überschrieben werden. Dies funktioniert, indem ein Interface-Anforderer als `nsIChannel`'s `notificationCallbacks` festgelegt wird und eine Schnittstelle für `nsIBadCertListener` bereitgestellt wird.
- `nsIWebBrowserPersist`'s Listener können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und erhalten die Gelegenheit, alle Schnittstellen bereitzustellen, die Kanäle möglicherweise anfordern, einschließlich `nsIProgressEventSink` (nicht allzu nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier sind `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Konsumenten, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und Necko wird diesen nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreiben wird.

## Neue Endbenutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Leistung von Zurück- und Vorwärtstasten.
- **Drag-and-Drop-Umsortierung für Browser-Tabs.**
- **Answers.com ist zur Suchmaschinenliste** für Wörterbuchabfragen hinzugefügt.
- **Verbesserte Benutzerfreundlichkeit des Produkts**, einschließlich beschreibender Fehlerseiten, neu gestaltetes Optionsmenü, RSS-Erkennung und "Abgesicherter Modus"-Erfahrung.
- **Bessere Unterstützung für Barrierefreiheit**, einschließlich DHTML-Zugänglichkeit.
- **Assistent zum Melden einer fehlerhaften Website**, um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher), einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisches Update**, um Produktupdates zu optimieren. Die Benachrichtigung über ein Update ist auffälliger und Updates auf Firefox können jetzt ein halbes Megabyte oder kleiner sein. Auch das Aktualisieren von Erweiterungen hat sich verbessert.
- **Verbesserungen im Popup-Blocker.**
- **Funktion "Private Daten löschen"** bietet einen einfachen Weg, um persönliche Daten schnell über einen Menüpunkt oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Firefox' Unterstützung für Webstandards führt die Branche weiterhin an, mit konsistenten plattformübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Stylesheets mit XML-Dokumenten verknüpfen 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment-Identifier für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenübertragungsprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichenkodierungen (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](https://web.archive.org/web/20210623231028/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es erstmals am 9. November 2004 veröffentlicht wurde. Firefox hat sich mit vielen neuen Funktionen und Fehlerbehebungen weiterentwickelt. Eine detaillierte Liste der Änderungen ist bei [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
