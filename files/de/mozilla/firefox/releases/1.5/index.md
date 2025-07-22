---
title: Firefox 1.5 für Entwickler
short-title: Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8-Engine hat Firefox 1.5 seine bereits beste Standardsunterstützung weiter verbessert und neue Möglichkeiten geschaffen, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptbare und programmierbare 2D-Grafiken über [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, {{Glossary("XForms", "XForms")}} und XML-Ereignisse sowie viele DHTML-, JavaScript- und DOM-Verbesserungen.

## Entwicklerwerkzeuge

Mehrere Werkzeuge und Browser-Erweiterungen stehen zur Verfügung, um Entwicklern die Unterstützung von Firefox 1.5 zu erleichtern.

- [DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. Der DOM Inspector ist Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter Entwicklerwerkzeuge.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelltext anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools), einschließlich des [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), der [Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), der [Live HTTP Headers](https://web.archive.org/web/20200628024648/http://livehttpheaders.mozdev.org/), des [HTML Validators](https://validator.w3.org/) und vieler weiterer.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Überblick

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild auf die gleiche Weise zu manipulieren, wie Sie reguläre XHTML skripten würden. Siehe [SVG in Firefox](https://web.archive.org/web/20210413180914/https://developer.mozilla.org/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>`-Tag und wie Sie Grafiken und andere Objekte in Firefox zeichnen können.
- [CSS3 Columns](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für automatisches Mehrspalten-Textlayout, wie es für [CSS3](/de/docs/Web/CSS) vorgeschlagen wurde.
- [Verwendung des Cache von Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation zurück und vorwärts beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellen einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Diese Anleitung führt Sie durch die Schritte, die erforderlich sind, um eine sehr grundlegende Erweiterung für Firefox zu erstellen. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungsmanagers in 1.5 zeigt, die die Erstellung einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so zu verpacken, dass es [sicher von privilegiertem Code aus zugreifbar ist](https://web.archive.org/web/20130905110328/https://developer.mozilla.org/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Preferences System](https://web.archive.org/web/20210620034317/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Preferences_system)
  - : Erfahren Sie mehr über die neuen Widgets, die es einfacher machen, Optionsfenster zu erstellen, indem Sie weniger JavaScript-Code verwenden.
- [Internationale Zeichen in XUL JavaScript](https://web.archive.org/web/20210126100844/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Änderungen der Tree-API](https://web.archive.org/web/20210414021241/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL-`<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](https://web.archive.org/web/20200812075014/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Netzwerkbezogene Änderungen

- Zertifikatsaufforderungen können jetzt pro Kanal überschrieben werden. Dies funktioniert, indem ein Interface-Requester als `nsIChannel`'s notificationCallbacks gesetzt wird und ein Interface für `nsIBadCertListener` bereitstellt.
- nsIWebBrowserPersist's Listener können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und erhalten die Möglichkeit, alle Schnittstellen bereitzustellen, nach denen Kanäle fragen könnten, einschließlich `nsIProgressEventSink` (nicht zu nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier sind `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Verbraucher, einschließlich XMLHttpRequest, können einen Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Endbenutzerfunktionen

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Vor- und Zurückschaltflächen.
- **Drag-and-Drop-Umsortierung von Browser-Tabs.**
- **Answers.com wird der Suchmaschinenliste hinzugefügt** für Wörterbuchabfragen.
- **Verbesserungen der Benutzerfreundlichkeit des Produkts** einschließlich beschreibender Fehlerseiten, überarbeitetem Optionsmenü, RSS-Erkennung und "Abgesicherter Modus"-Erfahrung.
- **Bessere Unterstützung für Barrierefreiheit** einschließlich DHTML-Barrierefreiheit.
- **Assistent zum Melden von defekten Websites** um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisierte Updates** zur Rationalisierung von Produktaktualisierungen. Die Benachrichtigung über ein Update ist deutlicher, und Updates zu Firefox können jetzt ein halbes Megabyte oder kleiner sein. Auch die Aktualisierung von Erweiterungen hat sich verbessert.
- **Verbesserungen der Popup-Blockierung.**
- **Funktion "Private Daten löschen"** bietet eine einfache Möglichkeit, persönliche Daten schnell über ein Menüelement oder eine Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Die Unterstützung von Firefox für Webstandards setzt den Industriestandard mit konsistenten plattformübergreifenden Implementierungen fort für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Verknüpfen von Style Sheets mit XML-Dokumenten 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment-Identifikator für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- XML Path Language ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Einfaches Objektzugriffsprotokoll (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datentransportprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](https://web.archive.org/web/20210623231028/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.6).

## Änderungen seit Firefox 1.0

Seit der ersten Veröffentlichung am 9. November 2004 wurden viele Änderungen in Firefox eingeführt. Firefox hat sich mit vielen neuen Funktionen und Bugfixes weiterentwickelt. Eine detaillierte Liste der Änderungen ist auf [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
