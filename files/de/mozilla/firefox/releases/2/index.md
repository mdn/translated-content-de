---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Möglichkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen behandeln.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte, prägnante Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Website- als auch Drittanbieter-Entwickler können sie bereitstellen, und Benutzer können sich entscheiden, Microsummaries anstelle statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen hinzufügen.
- [Erstellung einer Microsummary](/de/docs/Creating_a_Microsummary)
  - : Ein Tutorial zur Erstellung eines Microsummary-Generators.
- [Microsummary XML-Grammatikreferenz](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Leitfaden zur XML-Grammatik, die zur Erstellung von Microsummary-Generatoren verwendet wird.
- [Erstellung von OpenSearch-Plugins für Firefox](/de/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Erstellung von MozSearch-Plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Suchplugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Unterstützung von Suchvorschlägen in Suchplugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : So lässt Sie Ihr MozSearch-Plugin Suchvorschläge unterstützen, die in einer Dropdown-Liste beim Tippen in die Suchleiste erscheinen.
- [Neu in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destrukturierungszuweisung, Generatoren und Iteratoren sowie Array-Komprensionen umfasst.
- [WHATWG Client-seitige Sitzungs- und Persistenzspeicherung (auch bekannt als DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Client-seitige Sitzungs- und Persistenzspeicherung ermöglicht es Webanwendungen, strukturierte Daten auf der Client-Seite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für Scalable Vector Graphics (SVG) und implementiert das `<textPath>`-Element und fügt Unterstützung für einige zuvor nicht unterstützte Attribute hinzu.
- [Rechtschreibprüfung in HTML-Formularen steuern](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Firefox 2 unterstützt die Rechtschreibprüfung in Textfeldern und Textbereichen. Dieser Artikel beschreibt, wie Sie Ihr HTML schreiben, um die Rechtschreibprüfung für einzelne Formularelemente zu aktivieren und zu deaktivieren.
- [Sicherheit in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen an den Sicherheitsprotokollen, die standardmäßig aktiviert sind.

### Für XUL- und Erweiterungsentwickler

- [Aktualisieren von Erweiterungen für Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Behandelt, wie Sie Ihre vorhandenen Erweiterungen mit Firefox 2 zum Laufen bringen.
- [Sitzungsspeicher-API](/de/docs/Session_store_API)
  - : Beitrag von Elementen, die über Sitzungen in Firefox gespeichert und wiederhergestellt werden sollen.
- [Feed-Inhalt Zugriff API](/de/docs/Feed_content_access_API)
  - : API, die es Entwicklern ermöglicht, auf RSS- und Atom-Feeds zuzugreifen und diese zu analysieren.
- [SAX-Unterstützung](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Hinzufügen von Suchmaschinen von Webseiten](/de/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder im Sherlock-Format geschrieben werden kann.
- [Verwendung der Rechtschreibprüfung in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : So überprüfen Sie die Rechtschreibung von Wörtern oder erhalten eine Liste vorgeschlagener Schreibweisen aus dem Code.
- [Hinzufügen von Phishing-Schutz-Datenanbietern](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox zu erweitern, indem zusätzliche Datenanbieter für das Safe-Browsing-System hinzugefügt werden.
- [Hinzufügen von Feed-Readern zu Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, sei es webbasiert oder anwendungsbasiert.
- [Speicherung](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf sqlite basierende Datenbankarchitektur.
- [Designänderungen in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Diskutiert die notwendigen Änderungen, um bestehende Designs mit Firefox 2 zu aktualisieren.
- Verbesserungen an Texfeldern (Nur Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern ([Firefox Bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld abzurufen ([WebKit Bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen sauberen Benutzeroberfläche, die in früheren Versionen angeboten wurde, mit verbesserten Sicherheitsfunktionen, die Ihre Online-Erfahrung sicherer und komfortabler als je zuvor machen.

### Benutzererfahrung

- **Inline-Rechtschreibprüfung für Textbereiche** lässt Sie mit Vertrauen in Webformularen schreiben.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen anzeigen, die von der Seite stammen, auf die sie sich beziehen und automatisch aktualisiert werden. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Benutzeroberfläche des Erweiterungsmanagers** wurde verbessert.
- **Suchmaschinenmanager** lässt Sie Suchmaschinen in der Suchleiste neu anordnen und entfernen.
- **Verbesserungen beim Tabbed Browsing** wie das Hinzufügen von Schaltflächen zum Schließen zu jedem Tab, Anpassungen daran, wie Firefox entscheidet, welchen Tab es öffnet, wenn Sie den aktuellen Tab schließen, und vereinfachte Einstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** ermöglicht es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, Ihnen das Installieren ihrer Plugins anzubieten.
- **Suchvorschläge** ermöglichen es Suchmaschinen, basierend auf dem, was Sie bisher in der Suchleiste eingegeben haben, vorgeschlagene Suchbegriffe anzubieten.

### Sicherheit und Datenschutz

- **Phishing-Schutz**, um Benutzer zu warnen, wenn die von ihnen betrachtete Website vermutlich eine Fälschung ist.

## Siehe auch

{{Firefox_for_developers}}
