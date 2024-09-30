---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Ihnen die grundlegenden Konzepte von Browser-Erweiterungen bereits vertraut sind, überspringen Sie diesen Abschnitt und [sehen Sie, wie Erweiterungsdateien zusammengestellt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow zum Testen, Veröffentlichen und Erstellen von Erweiterungen für Firefox zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen und Merkmale hinzu. Sie wird mit vertrauten, web-basierten Technologien wie HTML, CSS und JavaScript erstellt. Sie kann dieselben Web-APIs nutzen wie JavaScript auf einer Webseite, hat jedoch zusätzlich Zugriff auf ein eigenes Set von JavaScript-APIs. Das bedeutet, dass Sie mit einer Erweiterung viel mehr tun können als mit Code auf einer Webseite. Hier sind nur einige Beispiele für das, was Sie tun können:

**Eine Webseite verbessern oder ergänzen**: Nutzen Sie ein Add-on, um zusätzliche In-Browser-Funktionen oder Informationen von Ihrer Webseite bereitzustellen. Erlauben Sie Benutzern, Details von besuchten Seiten zu sammeln, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/), [Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), und [Control Panel for Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung bietet einen Bearbeitungshinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Benutzern ermöglichen, ihre Persönlichkeit zu zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren; zum Beispiel, indem Benutzer ihr Lieblingslogo oder -bild als Hintergrund für jede besuchte Seite hinzufügen. Erweiterungen können Benutzern auch ermöglichen, das Erscheinungsbild der Firefox-Benutzeroberfläche zu aktualisieren, genauso wie eigenständige [Theme-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neuer Tab, gestaltet von der Tabliss-Erweiterung, zeigt ein Wald-Bild mit der Uhrzeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte von Webseiten hinzufügen oder entfernen**: Sie möchten möglicherweise Benutzern helfen, aufdringliche Werbung auf Webseiten zu blockieren, Zugang zu einem Reiseführer bereitzustellen, wann immer ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder Seiteninhalte neu formatieren, um ein konsistentes Leseerlebnis zu bieten. Mit der Möglichkeit, sowohl auf das HTML als auch CSS einer Seite zuzugreifen und es zu aktualisieren, können Erweiterungen Benutzern helfen, das Web so zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![uBlock Origin-Popup zeigt geblockte Tracker-Statistiken an.](ublock_origin_add_on.png)

**Werkzeuge und neue Browsing-Funktionen hinzufügen**: Fügen Sie neue Funktionen zu einem Aufgabenboard hinzu oder generieren Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext. Mit flexiblen UI-Optionen und der Leistungsfähigkeit der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie ganz einfach neue Funktionen zu einem Browser hinzufügen. Und Sie können fast jede Webseite in ihren Funktionen oder ihrer Funktionalität erweitern, es muss nicht Ihre Webseite sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste der Radiosender für Kanada an, wobei RadioOne zum Abspielen ausgewählt ist.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spielmöglichkeiten an oder erkunden Sie neue Spielmöglichkeiten, wie das Integrieren von Gameplay in das alltägliche Surfen.

Beispiele: [RPG Game - Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus an und bietet Optionen zum Starten eines Kampfes oder Abenteuers.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Vielleicht bieten Sie als Unternehmen Web-Entwicklungswerkzeuge an oder haben eine nützliche Technik oder Herangehensweise an die Webentwicklung entwickelt, die Sie teilen möchten. In jedem Fall können Sie die integrierten Entwicklerwerkzeuge von Firefox verbessern, indem Sie der Entwickler-Toolbar einen neuen Tab hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe-Erweiterung für Barrierefreiheitstests zeigt gefundene Barrierefreiheitsprobleme auf einer Webseite an.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mit den [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) erstellt, einem browserübergreifenden System zur Entwicklung von Erweiterungen. Weitgehend ist die API kompatibel mit der von Google Chrome und Opera unterstützten [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/). Erweiterungen, die für diese Browser geschrieben wurden, laufen in den meisten Fällen auch in Firefox oder Microsoft Edge mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

Wenn Sie Ideen oder Fragen haben, können Sie uns auf dem [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Gehen Sie die Entwicklung einer einfachen Erweiterung in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durch.
- Erfahren Sie mehr über den Aufbau einer Erweiterung in [Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Probieren Sie einige Beispielerweiterungen in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
