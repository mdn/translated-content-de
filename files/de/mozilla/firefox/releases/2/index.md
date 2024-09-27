---
title: Firefox 2 für Entwickler
slug: Mozilla/Firefox/Releases/2
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Neue Entwicklerfunktionen in Firefox 2

Firefox 2 führt eine Vielzahl neuer Funktionen und Fähigkeiten ein. Dieser Artikel bietet Links zu Artikeln, die die neuen Funktionen behandeln.

### Für Website- und Anwendungsentwickler

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries sind regelmäßig aktualisierte prägnante Zusammenfassungen der wichtigsten Informationen auf Webseiten. Sowohl Seitenentwickler als auch Drittanbieter können sie bereitstellen, und Benutzer können sich entscheiden, Microsummaries anstelle statischer Titel anzuzeigen, wenn sie Seiten mit Microsummaries bookmarken.
- [Erstellen einer Microsummary](/de/docs/Creating_a_Microsummary)
  - : Ein Tutorial zum Erstellen eines Microsummary-Generators.
- [Microsummary XML-Grammatikreferenz](/de/docs/Microsummary_XML_grammar_reference)
  - : Ein Leitfaden zur XML-Grammatik für die Erstellung von Microsummary-Generatoren.
- [Erstellen von OpenSearch-Plugins für Firefox](/de/docs/Web/OpenSearch)
  - : Firefox 2 unterstützt das OpenSearch-Suchmaschinenformat.
- [Erstellen von MozSearch-Plugins](/de/docs/Creating_MozSearch_plugins)
  - : Firefox 2 unterstützt MozSearch, ein auf OpenSearch basierendes Suchplugin-Format, das jedoch nur für den internen Gebrauch bestimmt ist.
- [Unterstützung von Suchvorschlägen in Such-Plugins](/de/docs/Supporting_search_suggestions_in_search_plugins)
  - : So machen Sie Ihr MozSearch-Plugin für Suchvorschläge nutzbar, die in einer Dropdown-Liste während der Eingabe in der Suchleiste erscheinen.
- [Neu in JavaScript 1.7](/de/docs/New_in_JavaScript_1.7)
  - : Firefox 2 unterstützt JavaScript 1.7, das neue Funktionen wie `let`, Destrukturierungszuweisung, Generatoren und Iteratoren sowie Listenkomprehensionen enthält.
- [WHATWG Client-seitige Sitzungs- und permanente Speicherung (auch bekannt als DOM Storage)](/de/docs/Web/API/Web_Storage_API)
  - : Client-seitige Sitzungs- und permanente Speicherung ermöglicht es Webanwendungen, strukturierte Daten auf der Clientseite zu speichern.
- [SVG in Firefox](/de/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 verbessert die Unterstützung für skalierbare Vektorgrafiken (SVG) und implementiert das `<textPath>` Element und fügt Unterstützung für einige zuvor nicht unterstützte Attribute hinzu.
- [Rechtschreibprüfung in HTML-Formularen steuern](/de/docs/Web/HTML/Global_attributes/spellcheck)
  - : Firefox 2 bietet Unterstützung für die Inline-Rechtschreibprüfung in Textbereichen und Textfeldern. Dieser Artikel beschreibt, wie Sie Ihr HTML schreiben, um die Rechtschreibprüfung bei einzelnen Formularelementen zu aktivieren und zu deaktivieren.
- [Sicherheit in Firefox 2](/de/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 hat Änderungen an den standardmäßig aktivierten Sicherheitsprotokollen vorgenommen.

### Für XUL- und Erweiterungsentwickler

- [Erweiterungen für Firefox 2 aktualisieren](/de/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Behandelt, wie Sie Ihre vorhandenen Erweiterungen mit Firefox 2 funktionsfähig machen.
- [Session Store API](/de/docs/Session_store_API)
  - : Beitrag von Elementen, die zwischen Sitzungen in Firefox gespeichert und wiederhergestellt werden sollen.
- [Feed Content Access API](/de/docs/Feed_content_access_API)
  - : API, die es Entwicklern ermöglicht, auf RSS- und Atom-Feeds zuzugreifen und diese zu analysieren.
- [SAX-Unterstützung](/de/docs/SAX)
  - : Ereignisbasierte XML-Parser-API.
- [Suchmaschinen von Webseiten hinzufügen](/de/docs/Web/OpenSearch)
  - : JavaScript-Code kann Firefox anweisen, ein neues Suchmaschinen-Plugin zu installieren, das entweder im OpenSearch- oder Sherlock-Format geschrieben werden kann.
- [Verwendung der Rechtschreibprüfung in XUL](/de/docs/Using_spell_checking_in_XUL)
  - : Wie man die Rechtschreibung von Wörtern überprüft oder eine Liste vorgeschlagener Schreibweisen aus dem Code erhält.
- [Phishing-Schutz-Datenanbieter hinzufügen](/de/docs/Adding_phishing_protection_data_providers)
  - : Es ist möglich, den Phishing-Schutz von Firefox zu verbessern, indem zusätzliche Datenanbieter für das sicheres Browsen-System hinzugefügt werden.
- [Feed-Reader zu Firefox hinzufügen](/de/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : Sie können neue Feed-Reader zu Firefox hinzufügen, egal ob webbasiert oder anwendungsbasiert.
- [Speicherung](/de/docs/Storage)
  - : Firefox 2 führt mozStorage ein, eine auf sqlite basierende Datenbankarchitektur.
- [Änderungen an Themes in Firefox 2](/de/docs/Theme_changes_in_Firefox_2)
  - : Diskutiert die notwendigen Änderungen, um bestehende Themes für Firefox 2 funktionsfähig zu machen.
- Verbesserungen am Textfeld (nur Firefox 2.0.0.1 und höher)
  - : Das `<textbox>` hat jetzt eine `reset()` Methode, um den Wert des Textfeldes auf den Standardwert zurückzusetzen. Die `defaultValue` Eigenschaft kann verwendet werden, um den Standardwert des Textfeldes abzurufen und zu ändern ([Firefox bug 312867](https://bugzil.la/312867)). Unterstützt eine `editor` Eigenschaft, um den internen `nsIEditor` für das Textfeld zu erhalten ([Webkit bug 312867](https://bugzil.la/312867)).

## Neue Funktionen für Endbenutzer

Firefox 2 bietet eine verbesserte Version der gleichen sauberen Benutzeroberfläche, die in früheren Versionen angeboten wurde, mit verbesserten Sicherheitsfunktionen, um Ihr Online-Erlebnis sicherer und komfortabler zu gestalten als je zuvor.

### Benutzererfahrung

- **Inline-Rechtschreibprüfung für Textbereiche** ermöglicht es Ihnen, mit Vertrauen Webformulare auszufüllen.
- **Microsummaries** bieten eine Methode, Lesezeichen zu erstellen, die Informationen anzeigen, die automatisch von der Seite abgerufen werden, auf die sie verweisen. Ideal für Börsenticker, Auktionsüberwachung usw.
- **Benutzeroberfläche des Erweiterungsmanagers** wurde verbessert.
- **Suchmaschinen-Manager** ermöglicht es Ihnen, die im Suchfeld angezeigten Suchmaschinen neu anzuordnen und zu entfernen.
- **Verbesserungen beim Tabbed Browsing** umfassen das Hinzufügen von Schließen-Schaltflächen zu jedem Tab, Anpassungen daran, wie Firefox entscheidet, zu welchem Tab Sie geführt werden, wenn Sie den aktuellen Tab schließen, sowie vereinfachte Einstellungen für Tabs.
- **Automatische Erkennung von Suchmaschinen** ermöglicht es Suchmaschinen, die Plugins für die Firefox-Suchleiste anbieten, diese Plugins zur Installation anzubieten.
- **Suchvorschläge** ermöglichen es Suchmaschinen, basierend auf dem, was Sie bisher in die Suchleiste eingegeben haben, vorgeschlagene Suchbegriffe anzubieten.

### Sicherheit und Datenschutz

- **Phishing-Schutz**, um Benutzer zu warnen, wenn die Website, die Sie ansehen, möglicherweise eine Fälschung ist.

## Siehe auch

{{Firefox_for_developers}}
