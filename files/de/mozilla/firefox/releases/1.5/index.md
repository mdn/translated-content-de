---
title: Firefox 1.5 für Entwickler
short-title: Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Basierend auf der {{Glossary("Gecko", "Gecko")}} 1.8 Engine hat Firefox 1.5 seine bereits erstklassige Unterstützung für Standards verbessert und neue Funktionen bereitgestellt, die die nächste Generation von Webanwendungen ermöglichen. Firefox 1.5 bietet verbesserte Unterstützung für CSS2 und CSS3, APIs für skriptfähige und programmierbare 2D-Grafiken durch [SVG](/de/docs/Web/SVG) 1.1 und [`<canvas>`](/de/docs/Web/API/Canvas_API), {{Glossary("XForms", "XForms")}} und XML-Ereignisse sowie viele DHTML-, JavaScript- und DOM-Verbesserungen.

## Entwickler-Tools

Mehrere Tools und Browser-Erweiterungen stehen zur Verfügung, um Entwicklern die Unterstützung von Firefox 1.5 zu erleichtern.

- [DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html), ein Tool, das es Entwicklern ermöglicht, Dokumente zu inspizieren und zu modifizieren, ohne das Dokument direkt bearbeiten zu müssen. DOM Inspector ist als Teil der benutzerdefinierten Installationsoption in Firefox 1.5 unter Entwickler-Tools verfügbar.
- JavaScript-Konsole, ein Tool zum Schreiben und Testen von JavaScript-Code sowie zum Anzeigen von JavaScript- und CSS-Fehlern auf einer Seite.
- Seitenquelle anzeigen, mit Syntaxhervorhebung und Suchfunktionen.
- [Browser-Erweiterungen](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) einschließlich [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer Toolbar](</de/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</de/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</de/docs/HTML_Validator_(external)>) und viele mehr.

> [!NOTE]
> Einige Erweiterungen unterstützen derzeit Firefox 1.5 nicht und werden automatisch deaktiviert.

## Überblick

Einige der neuen Funktionen in Firefox 1.5:

### Entwickler von Websites und Anwendungen

- SVG wird in XHTML unterstützt
  - : SVG kann in XHTML-Seiten verwendet werden. JavaScript und CSS können verwendet werden, um das Bild in der gleichen Weise zu manipulieren, wie Sie es mit regulären XHTML-Skripten tun würden. Siehe [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox), um den Status und bekannte Probleme der SVG-Implementierung in Firefox zu erfahren.
- [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Erfahren Sie mehr über das neue `<canvas>`-Tag und wie man Diagramme und andere Objekte in Firefox zeichnet.
- [CSS3 Columns](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Erfahren Sie mehr über die neue Unterstützung für automatische mehrspaltige Textlayouts, wie sie für [CSS3](/de/docs/Web/CSS) vorgeschlagen wurden.
- [Verwendung des Firefox 1.5 Caches](/de/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Erfahren Sie mehr über `bfcache` und wie es die Navigation vor und zurück beschleunigt.

### XUL- und Erweiterungsentwickler

- [Erstellen einer Erweiterung](/de/docs/Mozilla/Add-ons)
  - : Dieses Tutorial führt Sie durch die erforderlichen Schritte, um eine grundlegende Erweiterung für Firefox zu erstellen. Siehe auch [ein weiteres Tutorial in der MozillaZine-Wissensdatenbank](https://kb.mozillazine.org/Getting_started_with_extension_development), das die neuen Funktionen des Erweiterungs-Managers in 1.5 zeigt, die das Erstellen einer neuen Erweiterung noch einfacher machen.
- [XPCNativeWrapper](/de/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` ist eine Möglichkeit, ein Objekt so zu verpacken, dass es [sicher aus privilegiertem Code zugreifbar ist](/de/docs/Safely_accessing_content_DOM_from_chrome). Es kann in allen Firefox-Versionen verwendet werden, obwohl sich das Verhalten ab Firefox 1.5 (Gecko 1.8) etwas geändert hat.
- [Einstellungs-System](/de/docs/Preferences_System)
  - : Erfahren Sie mehr über die neuen Widgets, die Ihnen die Erstellung von Optionsfenstern erleichtern, indem Sie weniger JavaScript-Code verwenden.
- [Internationale Zeichen in XUL JavaScript](/de/docs/International_characters_in_XUL_JavaScript)
  - : XUL-JavaScript-Dateien können jetzt nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen enthalten.
- [Tree API-Änderungen](/de/docs/Tree_Widget_Changes)
  - : Die Schnittstellen zum Zugriff auf XUL `<tree>`-Elemente haben sich geändert.
- [XUL-Änderungen für Firefox 1.5](/de/docs/XUL_Changes_for_Firefox_1.5)
  - : Zusammenfassung der XUL-Änderungen.

#### Änderungen im Zusammenhang mit dem Netzwerk

- Zertifikatsabfragen können jetzt kanalbasiert überschrieben werden. Dies funktioniert, indem ein Interface Requester als Benachrichtigungs-Callbacks eines `nsIChannel` gesetzt wird und eine Schnittstelle für `nsIBadCertListener` bereitstellt.
- Die Listener von `nsIWebBrowserPersist` können jetzt `nsIInterfaceRequestor::GetInterface` implementieren und bekommen die Möglichkeit, alle Schnittstellen bereitzustellen, die Kanäle möglicherweise anfordern könnten, einschließlich `nsIProgressEventSink` (nicht sehr nützlich, redundant mit `nsIWebProgressListener`). Nützliche Schnittstellen hier umfassen `nsIChannelEventSink` und `nsIBadCertListener`.
- Erweiterungen oder andere Necko-Konsumenten einschließlich XMLHttpRequest können einen Cookie-Header explizit setzen, und Necko wird ihn nicht ersetzen. Gespeicherte Cookies werden mit dem explizit gesetzten Header zusammengeführt, wobei der explizite Header die gespeicherten Cookies überschreibt.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Schnellere Browser-Navigation** mit Verbesserungen der Performance von Vor- und Zurück-Tasten.
- **Drag-and-Drop-Umsortierung für Browser-Tabs.**
- **Answers.com wurde zur Suchmaschinenliste hinzugefügt** für die Wörterbuchsuche.
- **Verbesserungen der Produktbenutzerfreundlichkeit** einschließlich beschreibender Fehlerseiten, überarbeitetes Optionsmenü, RSS-Entdeckung und „Abgesicherter Modus“-Erfahrung.
- **Bessere Unterstützung für Barrierefreiheit** einschließlich DHTML-Barrierefreiheit.
- **Wizard zum Melden einer defekten Website** zum Melden von Websites, die in Firefox nicht funktionieren.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) einschließlich Profilmigration von Safari und Mac Internet Explorer.

### Sicherheit und Datenschutz

- **Automatisiertes Update** zur Vereinfachung von Produkt-Upgrades. Die Benachrichtigung über ein Update ist auffälliger und Updates für Firefox können jetzt bis zu einem halben Megabyte oder kleiner sein. Auch die Aktualisierung von Erweiterungen wurde verbessert.
- **Verbesserungen beim Popup-Blockieren.**
- Die Funktion **Private Daten löschen** bietet eine einfache Möglichkeit, schnell persönliche Daten über ein Menüelement oder einen Tastaturbefehl zu entfernen.

### Unterstützung offener Web-Standards

Die Unterstützung von Firefox für Web-Standards ist weiterhin branchenführend mit konsistenten plattformübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/docs/Web/HTML)) und Extensible Hypertext Markup Language ({{Glossary("XHTML", "XHTML")}}): [HTML 4.01](https://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/de/docs/Web/CSS)): [CSS Stufe 1](https://www.w3.org/TR/CSS1/), [CSS Stufe 2](https://www.w3.org/TR/CSS22/) und Teile von [CSS Stufe 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/docs/Web/API/Document_Object_Model)): [DOM Stufe 1](https://www.w3.org/TR/DOM-Level-1/), [DOM Stufe 2](https://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Stufe 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematische Auszeichnungssprache: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/xml/), [Namespaces in XML](https://www.w3.org/TR/xml-names/), [Zuordnen von Stylesheets zu XML-Dokumenten 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier für XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/de/docs/Web/XML/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- XML Path Language ([XPath](/de/docs/Web/XML/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF", "RDF")}}): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/de/docs/Web/JavaScript) 1.6, basierend auf [ECMA-262, Revision 3](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 unterstützt die folgenden Datenübertragungsprotokolle (HTTP, FTP, SSL, TLS und andere), mehrsprachige Zeichendaten (Unicode), Grafiken (GIF, JPEG, PNG, SVG und andere) und die neueste Version der weltweit beliebtesten Skriptsprache, [JavaScript 1.6](/de/docs/New_in_JavaScript_1.6).

## Änderungen seit Firefox 1.0

Viele Änderungen wurden in Firefox eingeführt, seit es erstmals am 9. November 2004 veröffentlicht wurde. Firefox hat sich mit vielen neuen Funktionen und Fehlerkorrekturen weiterentwickelt. Eine detaillierte Liste der Änderungen ist bei [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) verfügbar.
