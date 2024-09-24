---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und [sehen Sie, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Entwicklung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf zum Testen, Veröffentlichen und Entwickeln von Erweiterungen für Firefox zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen und Merkmale hinzu. Sie wird mit vertrauten webbasierten Technologien wie HTML, CSS und JavaScript erstellt. Eine Erweiterung kann auf dieselben Web-APIs zugreifen wie JavaScript auf einer Webseite, verfügt jedoch auch über einen eigenen Satz von JavaScript-APIs. Das bedeutet, dass Sie mit einer Erweiterung viel mehr tun können als mit Code auf einer Webseite. Hier sind nur einige Beispiele für das, was Sie tun können:

**Erweitern oder ergänzen Sie eine Website**: Verwenden Sie ein Add-on, um zusätzliche Funktionen im Browser oder Informationen von Ihrer Website bereitzustellen. Ermöglichen Sie es Benutzern, Details von besuchten Seiten zu sammeln, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/), [Enhancer für YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), und [Control Panel für Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung bietet einen Bearbeitungshinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Ermöglichen Sie Benutzern, ihre Persönlichkeit zu zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren, zum Beispiel, indem sie Benutzern erlauben, ihr Lieblingslogo oder -bild als Hintergrund für jede besuchte Seite hinzuzufügen. Erweiterungen können Benutzern auch ermöglichen, das Erscheinungsbild der Firefox-Benutzeroberfläche zu aktualisieren, ähnlich wie eigenständige [Themen-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neuer Tab, gestaltet von der Tabliss-Erweiterung, zeigt ein Waldmotiv mit der Zeitangabe und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte auf Webseiten hinzufügen oder entfernen**: Sie können Benutzern helfen, aufdringliche Werbung auf Webseiten zu blockieren, Zugang zu einem Reiseführer zu bieten, wann immer ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder Seiteninhalte umformatieren, um ein konsistentes Leseerlebnis zu bieten. Mit der Möglichkeit, sowohl das HTML als auch das CSS einer Seite zu aktualisieren, können Erweiterungen Benutzern helfen, das Web auf die Art zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![Das uBlock origin-Popup zeigt blockierte Tracker-Statistiken.](ublock_origin_add_on.png)

**Werkzeuge und neue Browserfunktionen hinzufügen**: Fügen Sie neue Funktionen zu einem Taskboard hinzu oder erstellen Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentexten. Mit flexiblen UI-Optionen und der Leistungsfähigkeit der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie leicht neue Funktionen zu einem Browser hinzufügen. Und Sie können fast jede Website in ihren Funktionen oder ihrer Funktionalität erweitern, es muss nicht Ihre Website sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste von Radiosendern für Kanada mit ausgewähltem RadioOne zum Abspielen.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spiel-Funktionen an oder erkunden Sie neue Spielmöglichkeiten, wie zum Beispiel das Einbinden von Gameplay in das tägliche Browsen.

Beispiele: [RPG Game - Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus und bietet Optionen, um einen Kampf oder ein Abenteuer zu starten.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Sie können Webentwicklungstools als Ihr Geschäft bereitstellen oder eine nützliche Technik oder Herangehensweise an die Webentwicklung entwickelt haben, die Sie teilen möchten. In jedem Fall können Sie die eingebauten Entwicklerwerkzeuge von Firefox erweitern, indem Sie einen neuen Tab zur Entwicklertoolbar hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe-Accessibility-Testing-Erweiterung zeigt Barrierefreiheitsprobleme, die in einer Webseite gefunden wurden.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mithilfe der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) erstellt, einem systemübergreifenden System zur Entwicklung von Erweiterungen. In großem Umfang ist die API kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Google Chrome und Opera unterstützt wird. Erweiterungen, die für diese Browser geschrieben wurden, laufen in den meisten Fällen mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox oder Microsoft Edge.

Wenn Sie Ideen oder Fragen haben, können Sie uns auf [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Gehen Sie die Entwicklung einer einfachen Erweiterung in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durch.
- Erfahren Sie mehr über die Struktur einer Erweiterung in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Probieren Sie einige Beispielerweiterungen in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
