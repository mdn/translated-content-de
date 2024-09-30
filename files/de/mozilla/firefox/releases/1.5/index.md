---
title: Firefox 1.5 für Entwickler
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Basierend auf der [Gecko](/de/docs/Glossary/Gecko) 1.8 Engine, verbesserte Firefox 1.5 seine bereits erstklassige Unterstützung von Standards und bot neue Fähigkeiten, um die nächste Generation von Webanwendungen zu ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptfähige und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und `<canvas>`, [XForms](/de/docs/Glossary/XForms) und XML-Ereignisse sowie viele Verbesserungen bei DHTML, JavaScript und DOM.

## Entwicklerwerkzeuge

Mehrere Werkzeuge und Browser-Erweiterungen stehen zur Verfügung, um Entwicklern bei der Unterstützung von Firefox 1.5 zu helfen.

- [DOM-Inspektor](/de/docs/DOM_Inspector) – ein Werkzeug, das Entwicklern ermöglicht, Dokumente zu inspizieren und zu ändern, ohne das Dokument direkt bearbeiten zu müssen. Der DOM-Inspektor ist als Teil der benutzerdefinierten Installation unter Entwicklerwerkzeuge in Firefox 1.5 verfügbar.
- JavaScript-Konsole – ein Werkzeug zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquellcode anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Übersicht

Einige der neuen Funktionen in Firefox 1.5:

### Website- und Anwendungsentwickler

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild in der gleichen Weise zu manipulieren, wie Sie normales XHTML scripten würden. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um mehr über den Status und bekannte Probleme bei der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>`-Tag und wie Sie in Firefox Grafiken und andere Objekte zeichnen können.
- [CSS3 Columns](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für automatische mehrspaltige Textlayouts wie in [CSS3](/de/docs/Web/CSS) vorgeschlagen.
- [Verwendung von Firefox 1.5 Caching](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Vor- und Zurück-Navigation beschleunigt.

### XUL- und Erweiterungsentwickler

- [Eine Erweiterung erstellen](/de/docs/Mozilla/Add-ons)
  - : Diese Anleitung führt Sie durch die notwendigen Schritte, um eine sehr grundlegende Erweiterung für Firefox zu erstellen. Siehe auch [eine andere Anleitung in der MozillaZine Knowledge Base](https://kb.mozillazine.org/Getting_started_with_extension_development), die die neuen Funktionen des Erweiterungsmanagers in 1.5 demonstriert, die das Erstellen einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt einzuwickeln, sodass es [sicher aus privilegiertem Code zugänglich ist](/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) leicht verändert hat.
- [Präferenzsystem](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die es Ihnen ermöglichen, einfacher Optionsfenster mit weniger JavaScript-Code zu erstellen.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten.
- [Tree-API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL-`<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Änderungen im Zusammenhang mit Netzwerken

- Zertifikatsprompts können nun kanalweise überschrieben werden. Dies funktioniert, indem ein Interface-Anforderer als `nsIChannel`'s notificationCallbacks gesetzt wird und ein Interface für `nsIBadCertListener` bereitgestellt wird.
- nsIWebBrowserPersist's Listener können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und haben die Möglichkeit, alle Interfaces bereitzustellen, die Kanäle möglicherweise anfordern, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Interfaces hier sind `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Verbraucher, einschließlich XMLHttpRequest, können ein Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Funktionen für Endnutzer

### Benutzererfahrung

- **Schnellere Browsernavigation** mit Verbesserungen der Vor- und Zurück-Button-Leistung.
- **Drag-and-Drop-Neuanordnung von Browser-Tabs.**
- **Answers.com wird der Suchmaschinenliste** zur Wörterbuchsuche hinzugefügt.
- **Verbesserungen der Produkt-Nutzbarkeit** einschließlich beschreibender Fehlerseiten, eines neu gestalteten Optionsmenüs, RSS-Erkennung und "Abgesicherter Modus"-Erlebnis.
- **Bessere Unterstützung für Barrierefreiheit** einschließlich DHTML-Barrierefreiheit.
- **Assistent zum Melden einer defekten Website**, um Websites zu melden, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatische Aktualisierung** zur Vereinfachung von Produktupgrades. Die Benachrichtigung über ein Update ist deutlicher, und Updates zu Firefox können jetzt halb so groß oder kleiner sein. Auch das Aktualisieren von Erweiterungen wurde verbessert.
- **Verbesserungen beim Popup-Blocker.**
- Die Funktion **Private Daten löschen** bietet eine einfache Möglichkeit, persönliche Daten schnell über eine Menüoption oder Tastenkombination zu entfernen.

### Unterstützung für offene Webstandards

Firefox unterstützt weiterhin Webbstandards mit konsistenten plattformübergreifenden Implementierungen:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ([XHTML](/de/docs/Glossary/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml/), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Das Verknüpfen von Stylesheets mit XML-Dokumenten 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragmentbezeichner für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL-Transformationen ([XSLT](/de/docs/Web/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML-Pfad-Sprache ([XPath](/de/docs/Web/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Resource Description Framework ([RDF](/de/docs/Glossary/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenübertragungsprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es erstmals am 9. November 2004 veröffentlicht wurde. Firefox hat mit vielen neuen Funktionen und Fehlerbehebungen Fortschritte gemacht. Eine detaillierte Liste der Änderungen ist verfügbar bei [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).
