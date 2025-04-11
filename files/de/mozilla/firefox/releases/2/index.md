---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Möglichkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen abdecken.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte kompakte Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Entwickler von Websites als auch Dritte können sie bereitstellen, und Benutzer können sich entscheiden, Microsummaries statt statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen setzen.
- [Creating a Microsummary](/de/docs/Creating_a_Microsummary)
  - : Eine Anleitung zum Erstellen eines Microsummary-Generators.
- [Microsummary XML grammar reference](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Leitfaden zur XML-Grammatik, die zur Erstellung von Microsummary-Generatoren verwendet wird.
- [Creating OpenSearch plugins for Firefox](/de/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Creating MozSearch plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Such-Plugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Supporting search suggestions in search plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : Anleitung, wie Sie Ihr MozSearch-Plugin unterstützen, um Suchvorschläge anzuzeigen, die in einer Dropdown-Liste erscheinen, während Sie in die Suchleiste tippen.
- [New in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destructuring-Zuweisung, Generatoren und Iteratoren sowie Array-Comprehensions umfasst.
- [WHATWG Client-side session and persistent storage (aka DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Client-seitige Sitzungs- und dauerhafte Speicherung ermöglichen es Webanwendungen, strukturierte Daten auf der Client-Seite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für Scalable Vector Graphics (SVG) und implementiert das `<textPath>`-Element und fügt Unterstützung für einige vorher nicht unterstützte Attribute hinzu.
- [Controlling spell checking in HTML forms](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Firefox 2 beinhaltet Unterstützung für die Rechtschreibprüfung direkt in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML schreiben, um die Rechtschreibprüfung für einzelne Formularelemente zu aktivieren und zu deaktivieren.
- [Security in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen an den standardmäßig aktivierten Sicherheitsprotokollen vorgenommen.

### Für XUL- und Erweiterungsentwickler

- [Updating extensions for Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Behandelt, wie Sie Ihre vorhandenen Erweiterungen kompatibel mit Firefox 2 machen.
- [Session store API](/de/docs/Session_store_API)
  - : Beiträge von Elementen, die über Sitzungen hinweg in Firefox gespeichert und wiederhergestellt werden sollen.
- [Feed content access API](/de/docs/Feed_content_access_API)
  - : API, das Entwicklern Zugriff und Parsing von RSS- und Atom-Feeds ermöglicht.
- [SAX support](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Adding search engines from web pages](/de/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder Sherlock-Format geschrieben werden kann.
- [Using spell checking in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie man die Rechtschreibung von Wörtern überprüft oder eine Liste von Vorschlägen für die Rechtschreibung aus dem Code erhält.
- [Adding phishing protection data providers](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishingschutz von Firefox zu verbessern, indem zusätzliche Datenanbieter für das Safe-Browsing-System hinzugefügt werden.
- [Adding feed readers to Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, egal ob sie web-basiert oder anwendungsbasiert sind.
- [Storage](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf SQLite basierende Datenbankarchitektur.
- [Theme changes in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Erörtert die Änderungen, die erforderlich sind, um bestehende Themes mit Firefox 2 kompatibel zu machen.
- Textbox Verbesserungen (nur Firefox 2.0.0.1 und höher)
  - : Die `<textbox>` hat nun eine `reset()` Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert der Textbox abzurufen und zu ändern ([Firefox bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([WebKit bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen benutzerfreundlichen Oberfläche, die frühere Versionen boten, mit verbesserten Sicherheitsfunktionen, um Ihr Online-Erlebnis sicherer und bequemer als je zuvor zu machen.

### Benutzererfahrung

- **Rechtschreibprüfung in Textbereichen** ermöglicht es Ihnen, mit Vertrauen in Webformularen zu schreiben.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen anzeigen, die von der Website, auf die sie sich beziehen, automatisch aktualisiert werden. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Erweiterungs-Manager-Benutzeroberfläche** wurde verbessert.
- **Suchmaschinen-Manager** ermöglicht es Ihnen, die Suchmaschinen zu ordnen und zu entfernen, die in der Suchleiste angezeigt werden.
- **Verbesserungen beim Tabbed-Browsing** beinhalten das Hinzufügen von Schließen-Schaltflächen zu jedem Tab, Anpassungen, wie Firefox entscheidet, welchen Tab es bei Schließen des aktuellen Tabs anzeigt, und vereinfachte Voreinstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** erlaubt Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, sich anzubieten, Ihre Plugins für Sie zu installieren.
- **Suchvorschläge** ermöglichen es Suchmaschinen, vorgeschlagene Suchbegriffe anzubieten, basierend darauf, was Sie bisher in die Suchleiste getippt haben.

### Sicherheit und Datenschutz

- **Phishingschutz**, um Benutzer zu warnen, wenn die Website, die Sie sich ansehen, gefälscht zu sein scheint.

## Siehe auch

{{Firefox_for_developers}}
