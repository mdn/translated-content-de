---
title: Firefox 2 für Entwickler
short-title: Firefox 2
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Fähigkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen behandeln.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte, prägnante Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Website- als auch Drittanbieterentwickler können sie bereitstellen, und Benutzer können wählen, ob sie Microsummaries anstelle statischer Titel anzeigen möchten, wenn sie Seiten mit Microsummaries als Lesezeichen speichern.
- [Creating a Microsummary](/de/docs/Creating_a_Microsummary)
  - : Eine Anleitung zum Erstellen eines Microsummary-Generators.
- [Microsummary XML grammar reference](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Leitfaden zur XML-Grammatik, die beim Erstellen von Microsummary-Generatoren verwendet wird.
- [Creating OpenSearch plugins for Firefox](/de/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Creating MozSearch plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Such-Plugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Supporting search suggestions in search plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : Wie Sie Ihr MozSearch-Plugin so gestalten, dass es Suchvorschläge unterstützt, die während der Eingabe in der Suchleiste in einer Dropdown-Liste erscheinen.
- [New in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destructuring-Zuweisung, Generatoren und Iteratoren sowie Array-Komprehensionen umfasst.
- [WHATWG Client-side session and persistent storage (aka DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Client-seitige Sitzungs- und persistente Speicherung ermöglicht es Webanwendungen, strukturierte Daten clientseitig zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für Scalable Vector Graphics (SVG) und implementiert das `<textPath>`-Element und fügt Unterstützung für einige zuvor nicht unterstützte Attribute hinzu.
- [Controlling spell checking in HTML forms](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Firefox 2 unterstützt die Rechtschreibprüfung in eingebettetem Text in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML so schreiben, dass die Rechtschreibprüfung für einzelne Formularelemente aktiviert und deaktiviert wird.
- [Security in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen an den Sicherheitsprotokollen, die standardmäßig aktiviert sind.

### Für XUL- und Erweiterungsentwickler

- [Updating extensions for Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Behandelt, wie Sie Ihre vorhandenen Erweiterungen für die Arbeit mit Firefox 2 kompatibel machen.
- [Session store API](/de/docs/Session_store_API)
  - : Beiträge zu Elementen, die über Sitzungen hinweg in Firefox gespeichert und wiederhergestellt werden.
- [Feed content access API](/de/docs/Feed_content_access_API)
  - : Eine API, mit der Entwickler auf RSS- und Atom-Feeds zugreifen und diese parsen können.
- [SAX support](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Adding search engines from web pages](/de/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchplugin zu installieren, das entweder im OpenSearch- oder im Sherlock-Format geschrieben werden kann.
- [Using spell checking in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie man die Rechtschreibung von Wörtern überprüft oder eine Liste von vorgeschlagenen Schreibweisen aus dem Code erhält.
- [Adding phishing protection data providers](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox zu verbessern, indem zusätzliche Datenanbieter für das System zum sicheren Surfen hinzugefügt werden.
- [Adding feed readers to Firefox](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, sei es webbasiert oder anwendungsbasiert.
- [Storage](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf sqlite basierende Datenbankarchitektur.
- [Theme changes in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Diskutiert die Änderungen, die erforderlich sind, um bestehende Themes für Firefox 2 zu aktualisieren.
- Textbox-Verbesserungen (nur Firefox 2.0.0.1 und höher)
  - : Die `<textbox>` hat nun eine `reset()` Methode, um den Wert der Textbox auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert der Textbox zu erhalten und zu ändern ([Firefox-Bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([WebKit-Bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen klaren Benutzeroberfläche wie frühere Versionen, mit verbesserten Sicherheitsfunktionen, um Ihre Online-Erfahrung sicherer und bequemer als je zuvor zu gestalten.

### Benutzererfahrung

- **Rechtschreibprüfung in eingebettetem Text für Textbereiche** ermöglicht es Ihnen, mit Vertrauen in Webformularen zu schreiben.
- **Microsummaries** bieten eine Möglichkeit, Lesezeichen zu erstellen, die Informationen aus der betreffenden Seite anzeigen und automatisch aktualisiert werden. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Benutzeroberfläche des Erweiterungsmanagers** wurde verbessert.
- **Suchmaschinenverwaltung** ermöglicht es Ihnen, Suchmaschinen in der Suchleiste neu zu arrangieren und zu entfernen.
- **Verbesserungen beim Tabbed Browsing** beinhalten das Hinzufügen von Schließen-Schaltflächen zu jedem Tab, Anpassungen, wie Firefox entscheidet, welcher Tab nach dem Schließen des aktuellen Tabs geöffnet wird, und vereinfachte Einstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** erlaubt es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, anzuzeigen, um ihre Plugins für Sie zu installieren.
- **Suchvorschläge** ermöglichen es Suchmaschinen, vorgeschlagene Suchbegriffe basierend auf dem, was Sie bisher in der Suchleiste eingegeben haben, anzuzeigen.

### Sicherheit und Privatsphäre

- **Phishing-Schutz**, um Benutzer zu warnen, wenn die von Ihnen besuchte Website eine Fälschung zu sein scheint.
