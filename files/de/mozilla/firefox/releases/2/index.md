---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Fähigkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen abdecken.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte, prägnante Zusammenstellungen der wichtigsten Informationen auf Webseiten. Sowohl Seiten- als auch Drittentwickler können sie bereitstellen, und Benutzer können wählen, Microsummaries anstelle statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen speichern.
- [Creating a Microsummary](/de/docs/Creating_a_Microsummary)
  - : Ein Tutorial zur Erstellung eines Microsummary-Generators.
- [Microsummary XML grammar reference](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Referenzleitfaden zur XML-Grammatik für die Erstellung von Microsummary-Generatoren.
- [Creating OpenSearch plugins for Firefox](/de/docs/Web/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Creating MozSearch plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein Suchplugin-Format basierend auf OpenSearch, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Supporting search suggestions in search plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : Wie Sie Ihr MozSearch-Plugin so gestalten, dass es Suchvorschläge unterstützt, die in einer Dropdown-Liste erscheinen, während Sie in die Suchleiste tippen.
- [New in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destrukturierungszuweisungen, Generatoren und Iteratoren sowie Array-Komprehensionen enthält.
- [WHATWG Client-side session and persistent storage (aka DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Client-seitige Session- und permanente Speicherung ermöglicht es Webanwendungen, strukturierte Daten auf der Client-Seite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung von Scalable Vector Graphics (SVG) durch die Implementierung des `<textPath>`-Elements und die Unterstützung einiger bisher nicht unterstützter Attribute.
- [Controlling spell checking in HTML forms](/de/docs/Web/HTML/Global_attributes/spellcheck)
  - : Firefox 2 unterstützt die inline Rechtschreibprüfung in Textfeldern und Textbereichen. Dieser Artikel beschreibt, wie Sie Ihr HTML so gestalten, dass Sie die Rechtschreibprüfung für einzelne Formularelemente aktivieren und deaktivieren können.
- [Security in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen an den Sicherheitsprotokollen, die standardmäßig aktiviert sind.

### Für XUL- und Erweiterungsentwickler

- [Updating extensions for Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Behandelt, wie Sie Ihre vorhandenen Erweiterungen mit Firefox 2 zum Laufen bringen.
- [Session store API](/de/docs/Session_store_API)
  - : Beiträge von Elementen, die in Firefox über Sitzungen hinweg gespeichert und wiederhergestellt werden sollen.
- [Feed content access API](/de/docs/Feed_content_access_API)
  - : API, die es Entwicklern ermöglicht, auf RSS- und Atom-Feeds zuzugreifen und sie zu analysieren.
- [SAX support](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Adding search engines from web pages](/de/docs/Web/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder im Sherlock-Format geschrieben werden kann.
- [Using spell checking in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie Sie von Code aus die Rechtschreibung von Wörtern überprüfen oder eine Liste mit Rechtschreibvorschlägen abrufen können.
- [Adding phishing protection data providers](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz in Firefox zu verbessern, indem zusätzliche Datenanbieter für das sichere Browsen-System hinzugefügt werden.
- [Adding feed readers to Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, unabhängig davon, ob sie webbasiert oder anwendungsbasiert sind.
- [Storage](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf SQLite basierende Datenbankarchitektur.
- [Theme changes in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Erörtert die Änderungen, die erforderlich sind, um vorhandene Designs in Firefox 2 zu aktualisieren.
- Verbesserungen des Textfeldes (nur Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern ([Firefox Bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld abzurufen ([Webkit Bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen klaren Benutzeroberfläche, die frühere Versionen boten, mit verbesserten Sicherheitsfunktionen, die Ihr Online-Erlebnis sicherer und komfortabler denn je machen.

### Benutzererfahrung

- **Inline-Rechtschreibprüfung für Textfelder** ermöglicht es Ihnen, mit Vertrauen in Webformularen zu schreiben.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen anzeigen, die von der Seite abgerufen werden, auf die sie sich beziehen, und die automatisch aktualisiert werden. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Erweiterungs-Manager-Benutzeroberfläche** wurde verbessert.
- **Suchmaschinen-Manager** ermöglicht es Ihnen, die Suchmaschinen in der Suchleiste zu ordnen und zu entfernen.
- **Verbesserungen beim Tabbed-Browsing** beinhalten das Hinzufügen von Schließen-Schaltflächen zu jedem Tab, Anpassungen daran, wie Firefox entscheidet, zu welchem Tab Sie beim Schließen des aktuellen Tabs wechseln, und vereinfachte Einstellungen für Tabs.
- **Autodetektion von Suchmaschinen** ermöglicht es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, ihre Plugins für Sie zur Installation anzubieten.
- **Suchvorschläge** ermöglichen es Suchmaschinen, vorgeschlagene Suchbegriffe basierend auf dem, was Sie bisher in die Suchleiste eingegeben haben, anzubieten.

### Sicherheit und Privatsphäre

- **Phishing-Schutz** warnt Benutzer, wenn die von Ihnen betrachtete Webseite eine Fälschung zu sein scheint.

## Siehe auch

{{Firefox_for_developers}}
