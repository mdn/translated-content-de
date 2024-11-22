---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Fähigkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen abdecken.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte, prägnante Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Seiten- als auch Drittentwickler können sie bereitstellen, und Benutzer können wählen, ob sie Microsummaries anstelle von statischen Titeln anzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen speichern.
- [Erstellung einer Microsummary](/de/docs/Creating_a_Microsummary)
  - : Ein Tutorial zur Erstellung eines Microsummary-Generators.
- [Microsummary XML-Grammatikreferenz](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Leitfaden zur XML-Grammatik, die zur Erstellung von Microsummary-Generatoren verwendet wird.
- [Erstellen von OpenSearch-Plugins für Firefox](/de/docs/Web/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Erstellen von MozSearch-Plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein Suchpluginformat basierend auf OpenSearch, das jedoch nur für den internen Gebrauch vorgesehen ist.
- [Unterstützung von Suchvorschlägen in Suchplugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : Wie Sie Ihr MozSearch-Plugin so gestalten, dass es Suchvorschläge unterstützt, die in einer Dropdown-Liste erscheinen, während Sie in die Suchleiste tippen.
- [Neu in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destructuring Assignment, Generatoren und Iteratoren sowie Array Comprehensions beinhaltet.
- [WHATWG Client-seitige Sitzungs- und dauerhafte Speicherung (aka DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Die client-seitige Sitzungs- und dauerhafte Speicherung ermöglicht es Webanwendungen, strukturierte Daten auf der Client-Seite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung von skalierbaren Vektorgrafiken (SVG), implementiert das `<textPath>`-Element und fügt Unterstützung für einige zuvor nicht unterstützte Attribute hinzu.
- [Rechtschreibprüfung in HTML-Formularen steuern](/de/docs/Web/HTML/Global_attributes/spellcheck)
  - : Firefox 2 enthält Unterstützung für die integrierte Rechtschreibprüfung in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML so schreiben, dass die Rechtschreibprüfung für einzelne Formularelemente aktiviert oder deaktiviert wird.
- [Sicherheit in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen hinsichtlich der standardmäßig aktivierten Sicherheitsprotokolle.

### Für XUL- und Erweiterungsentwickler

- [Aktualisieren von Erweiterungen für Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Erläutert, wie Sie Ihre bestehenden Erweiterungen mit Firefox 2 kompatibel machen.
- [Session Store API](/de/docs/Session_store_API)
  - : Hinzufügen von Elementen, die über Sessions hinweg gespeichert und wiederhergestellt werden sollen, in Firefox.
- [Feed Content Access API](/de/docs/Feed_content_access_API)
  - : API, die Entwicklern ermöglicht, RSS- und Atom-Feeds zu erreichen und zu parsen.
- [SAX-Unterstützung](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Hinzufügen von Suchmaschinen von Webseiten](/de/docs/Web/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder im Sherlock-Format geschrieben werden kann.
- [Verwendung der Rechtschreibprüfung in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie man die Rechtschreibung von Wörtern überprüft oder eine Liste von vorgeschlagenen Schreibweisen aus dem Code erhält.
- [Hinzufügen von Phishing-Schutz-Datenanbietern](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox zu erweitern, indem zusätzliche Datenanbieter für das Safe-Browsing-System hinzugefügt werden.
- [Hinzufügen von Feed-Readern zu Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, sei es web-basiert oder anwendungsbasiert.
- [Speicherung](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine sqlite-basierte Datenbank-Architektur.
- [Designänderungen in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Diskutiert die Änderungen, die erforderlich sind, um bestehende Designs mit Firefox 2 kompatibel zu machen.
- Verbesserungen bei Textfeldern (nur Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern ([Firefox-Fehler 312867](https://bugzil.la/312867)). Unterstützt eine `editor`-Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([WebKit-Fehler 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen sauberen Benutzeroberfläche, die von früheren Versionen angeboten wurde, mit verbesserten Sicherheitsfunktionen, die Ihr Online-Erlebnis sicherer und komfortabler denn je machen.

### Benutzererfahrung

- **Integrierte Rechtschreibprüfung für Textbereiche** ermöglicht es Ihnen, mit Zuversicht in Webformularen zu verfassen.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen anzeigen, die von der Seite, auf die sie sich beziehen, gezogen werden und automatisch aktualisiert werden. Ideal für Aktien-Ticker, Auktionsüberwachung usw.
- **Benutzeroberfläche des Erweiterungsmanagers** wurde verbessert.
- **Suchmaschinenmanager** ermöglicht es Ihnen, Suchmaschinen in der Suchleiste neu anzuordnen und zu entfernen.
- **Verbesserungen beim Tabbed-Browsing** umfassen das Hinzufügen von Schließen-Schaltflächen zu jedem Tab, Anpassungen daran, wie Firefox entscheidet, welchen Tab es ausführt, wenn Sie den aktuellen Tab schließen, und vereinfachte Einstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** ermöglicht es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, Ihnen ihre Plugins zur Installation anzubieten.
- **Suchvorschläge** erlauben es Suchmaschinen, vorgeschlagene Suchbegriffe basierend auf dem, was Sie bisher in die Suchleiste eingegeben haben, anzubieten.

### Sicherheit und Datenschutz

- **Phishing-Schutz**, um Benutzer zu warnen, wenn die Website, die Sie betrachten, wie eine Fälschung erscheint.

## Siehe auch

{{Firefox_for_developers}}
