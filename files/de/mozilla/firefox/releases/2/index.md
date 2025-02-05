---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl von neuen Funktionen und Fähigkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen abdecken.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte, prägnante Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Website- als auch Drittentwickler können sie bereitstellen, und Benutzer können wählen, Microsummaries anstelle statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries als Lesezeichen speichern.
- [Creating a Microsummary](/de/docs/Creating_a_Microsummary)
  - : Eine Anleitung zum Erstellen eines Microsummary-Generators.
- [Microsummary XML grammar reference](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Referenz-Leitfaden zur XML-Grammatik, die für die Erstellung von Microsummary-Generatoren verwendet wird.
- [Creating OpenSearch plugins for Firefox](/de/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Creating MozSearch plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Suchplugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Supporting search suggestions in search plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : So ermöglichen Sie Ihrem MozSearch-Plugin, Suchvorschläge zu unterstützen, die während der Eingabe in der Suchleiste in einer Dropdown-Liste erscheinen.
- [New in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destrukturierungszuweisungen, Generatoren und Iteratoren sowie Array-Comprehensions beinhaltet.
- [WHATWG Client-side session and persistent storage (aka DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Clientseitige Sitzungs- und persistente Speicherung ermöglicht Webanwendungen, strukturierte Daten auf der Client-Seite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für Scalable Vector Graphics (SVG) und implementiert das `<textPath>`-Element sowie die Unterstützung für zuvor nicht unterstützte Attribute.
- [Controlling spell checking in HTML forms](/de/docs/Web/HTML/Global_attributes/spellcheck)
  - : Firefox 2 unterstützt die Inline-Rechtschreibprüfung in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML schreiben, um die Rechtschreibprüfung für einzelne Formularelemente zu aktivieren oder zu deaktivieren.
- [Security in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 enthält Änderungen an den standardmäßig aktivierten Sicherheitsprotokollen.

### Für XUL- und Erweiterungsentwickler

- [Updating extensions for Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Beschreibt, wie Sie Ihre bestehenden Erweiterungen mit Firefox 2 kompatibel machen.
- [Session store API](/de/docs/Session_store_API)
  - : Elemente, die zwischen Sitzungen in Firefox gespeichert und wiederhergestellt werden können, beisteuern.
- [Feed content access API](/de/docs/Feed_content_access_API)
  - : API, die Entwicklern ermöglicht, RSS- und Atom-Feeds zu lesen und zu parsen.
- [SAX support](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Adding search engines from web pages](/de/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder mit dem OpenSearch- oder Sherlock-Format erstellt wurde.
- [Using spell checking in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie Sie die Rechtschreibprüfung von Wörtern oder eine Liste von Vorschlägen aus Code verwenden.
- [Adding phishing protection data providers](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox durch Hinzufügen zusätzlicher Datenanbieter für das Safe-Browsing-System zu erweitern.
- [Adding feed readers to Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, unabhängig davon, ob sie web- oder anwendungsbasiert sind.
- [Storage](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf SQLite basierende Datenbankarchitektur.
- [Theme changes in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Bespricht die Änderungen, die erforderlich sind, um bestehende Themes für Firefox 2 zu aktualisieren.
- Verbesserungen am Textfeld (Nur für Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` besitzt jetzt eine `reset()`-Methode, um den Wert des Textfelds auf den Standardwert zurückzusetzen. Die `defaultValue`-Eigenschaft kann verwendet werden, um den Standardwert des Textfelds abzurufen und zu ändern ([Firefox-Bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor`-Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([WebKit-Bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der zuvor bereitgestellten einfachen Benutzeroberfläche sowie verbesserte Sicherheitsfunktionen, um Ihre Online-Erfahrung sicherer und benutzerfreundlicher zu gestalten.

### Benutzererfahrung

- **Inline-Rechtschreibprüfung für Textbereiche** ermöglicht es Ihnen, mit Sicherheit in Webformularen zu schreiben.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die automatisch aktualisierte Informationen von der referenzierten Website anzeigen. Ideal für Börsenticker, Auktionsüberwachung u.Ä.
- **Erweiterte Benutzeroberfläche im Add-on-Manager**.
- **Suchmaschinen-Manager** ermöglicht das Umordnen und Entfernen von Suchmaschinen in der Suchleiste.
- **Verbesserungen beim Tabbed-Browsing** umfassen Schließen-Buttons auf jedem Tab, Anpassungen, wie Firefox den nächsten Tab auswählt, und vereinfachte Einstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** erlaubt Suchmaschinen, Plugins für die Firefox-Suchleiste zum Installieren anzubieten.
- **Suchvorschläge** ermöglichen Suchmaschinen, Ihnen basierend auf Ihrer bisherigen Eingabe vorgeschlagene Suchbegriffe anzubieten.

### Sicherheit und Datenschutz

- **Phishing-Schutz**, um Benutzer zu warnen, wenn die Webseite, die Sie betrachten, eine Fälschung zu sein scheint.

## Siehe auch

{{Firefox_for_developers}}
