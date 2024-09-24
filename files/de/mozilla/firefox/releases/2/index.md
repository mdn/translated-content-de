---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine große Anzahl neuer Funktionen und Möglichkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen behandeln.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte prägnante Zusammenstellungen der wichtigsten Informationen auf Webseiten. Sowohl Seiten- als auch Drittentwickler können sie bereitstellen, und Benutzer können wählen, Microsummaries anstelle statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen speichern.
- [Erstellen einer Microsummary](/de/docs/Creating_a_Microsummary)
  - : Ein Tutorial zur Erstellung eines Microsummary-Generators.
- [Microsummary XML-Grammatikreferenz](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Referenzhandbuch zur XML-Grammatik, die zur Erstellung von Microsummary-Generatoren verwendet wird.
- [Erstellen von OpenSearch-Plugins für Firefox](/de/docs/Web/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Erstellen von MozSearch-Plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Such-Plugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Unterstützung von Suchvorschlägen in Such-Plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : Wie Sie Ihr MozSearch-Plugin so gestalten, dass es Suchvorschläge unterstützt, die während der Eingabe in der Suchleiste in einer Dropdown-Liste erscheinen.
- [Neu in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destrukturierung, Generatoren und Iteratoren sowie Array-Kompilationen umfasst.
- [WHATWG clientseitiger Sitzungs- und dauerhafter Speicher (auch bekannt als DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Clientseitiger Sitzungs- und dauerhafter Speicher ermöglicht es Webanwendungen, strukturierte Daten auf der Clientseite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für Scalable Vector Graphics (SVG), implementiert das `<textPath>`-Element und fügt Unterstützung für einige zuvor nicht unterstützte Attribute hinzu.
- [Rechtschreibprüfung in HTML-Formularen steuern](/de/docs/Web/HTML/Global_attributes/spellcheck)
  - : Firefox 2 umfasst Unterstützung für Inline-Rechtschreibprüfung in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML so gestalten, dass die Rechtschreibprüfung für einzelne Formularelemente aktiviert und deaktiviert wird.
- [Sicherheit in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen, welche Sicherheitsprotokolle standardmäßig aktiviert sind.

### Für XUL- und Erweiterungsentwickler

- [Aktualisieren von Erweiterungen für Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Erläutert, wie Sie Ihre vorhandenen Erweiterungen mit Firefox 2 kompatibel machen.
- [Session-Store-API](/de/docs/Session_store_API)
  - : Beitrag von Elementen, die über Sitzungen in Firefox gespeichert und wiederhergestellt werden.
- [Feed Content Access API](/de/docs/Feed_content_access_API)
  - : API, die es Entwicklern ermöglicht, auf RSS- und Atom-Feeds zuzugreifen und diese zu parsen.
- [SAX-Unterstützung](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Hinzufügen von Suchmaschinen von Webseiten](/de/docs/Web/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder im Sherlock-Format geschrieben werden kann.
- [Rechtschreibprüfung in XUL verwenden](/de/docs/Using_spell_checking_in_XUL)
  - : Wie Sie die Rechtschreibung von Wörtern prüfen oder eine Liste vorgeschlagener Schreibweisen aus Code erhalten.
- [Hinzufügen von Anbietern von Phishing-Schutzdaten](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox zu erweitern, indem zusätzliche Datenanbieter für das sichere Browsing-System hinzugefügt werden.
- [Hinzufügen von Feedlesern zu Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feedleser zu Firefox hinzufügen, sei es webbasiert oder anwendungsbasiert.
- [Speicherung](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf sqlite basierende Datenbankarchitektur.
- [Theme-Änderungen in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Behandelt die Änderungen, die erforderlich sind, um bestehende Themes an Firefox 2 anzupassen.
- Verbesserungen am Textfeld (nur Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfelds auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert des Textfelds abzurufen und zu ändern ([Firefox-bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([Webkit bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen sauberen Benutzeroberfläche früherer Versionen mit verbesserten Sicherheitsfunktionen, um Ihr Online-Erlebnis noch sicherer und komfortabler zu machen.

### Benutzererfahrung

- **Inline-Rechtschreibprüfung für Textbereiche** ermöglicht es Ihnen, mit Vertrauen in Webformularen zu komponieren.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen anzeigen, die von der Seite stammen, auf die sie sich beziehen, und automatisch aktualisiert werden. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Benutzeroberfläche des Erweiterungsmanagers** wurde verbessert.
- **Suchmaschinenmanager** ermöglicht es Ihnen, Suchmaschinen zu arrangieren und zu entfernen, die in der Suchleiste angezeigt werden.
- **Verbesserungen beim Tabbed-Browsing** umfassen das Hinzufügen von Schaltflächen zum Schließen auf jeder Registerkarte, Anpassungen daran, wie Firefox entscheidet, zu welcher Registerkarte man gelangt, wenn die aktuelle Registerkarte geschlossen wird, und vereinfachte Präferenzen für Tabs.
- **Autodetektion von Suchmaschinen** ermöglicht es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, ihre Plugins zur Installation anzubieten.
- **Suchvorschläge** erlauben es Suchmaschinen, vorgeschlagene Suchbegriffe basierend auf Ihren bisher in der Suchleiste eingetippten Wörtern anzubieten.

### Sicherheit und Datenschutz

- **Phishing-Schutz**, der Benutzer warnt, wenn die von Ihnen betrachtete Webseite als Fälschung erscheint.

## Siehe auch

{{Firefox_for_developers}}
