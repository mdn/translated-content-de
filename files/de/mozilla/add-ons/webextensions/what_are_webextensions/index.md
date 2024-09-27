---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und sehen Sie sich an, [wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf für das Testen, Veröffentlichen und Erstellen von Erweiterungen für Firefox zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen und Merkmale hinzu. Sie wird mit vertrauten web-basierten Technologien erstellt — HTML, CSS und JavaScript. Sie kann die gleichen Web-APIs nutzen wie JavaScript auf einer Webseite, hat aber zusätzlich Zugriff auf ein eigenes Set von JavaScript-APIs. Das bedeutet, dass Sie in einer Erweiterung viel mehr tun können als mit Code auf einer Webseite. Hier sind nur einige Beispiele für Dinge, die Sie tun können:

**Eine Webseite verbessern oder ergänzen**: Verwenden Sie ein Add-on, um zusätzliche Funktionen im Browser oder Informationen von Ihrer Website bereitzustellen. Ermöglichen Sie Nutzern, Details von besuchten Seiten zu sammeln, um den angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/), [Enhancer für YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), und [Control Panel für Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung bietet einen Bearbeitungshinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Lassen Sie Nutzer ihre Persönlichkeit zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren; beispielsweise, indem Nutzer ihr Lieblingslogo oder Bild als Hintergrund zu jeder besuchten Seite hinzufügen. Erweiterungen können auch Nutzern ermöglichen, das Erscheinungsbild der Firefox-Benutzeroberfläche zu aktualisieren, ähnlich wie eigenständige [Design-Add-ons](https://extensionworkshop.com/documentation/themes/) es tun.

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neuer Tab, gestylt von der Tabliss-Erweiterung, zeigt ein Waldbild mit der Uhrzeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte zu Webseiten hinzufügen oder entfernen**: Sie könnten Nutzern helfen, aufdringliche Anzeigen auf Webseiten zu blockieren, Zugriff auf einen Reiseführer bieten, wann immer ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder den Seiteninhalt umformatieren, um ein einheitliches Leseerlebnis zu bieten. Mit der Möglichkeit, sowohl das HTML als auch das CSS einer Seite zu aktualisieren, können Erweiterungen Nutzern helfen, das Web auf die Art zu sehen, die sie möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![uBlock origin Pop-up zeigt blockierte Tracker-Statistiken.](ublock_origin_add_on.png)

**Werkzeuge und neue Browsing-Funktionen hinzufügen**: Fügen Sie einem Aufgabenboard neue Funktionen hinzu oder erzeugen Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext. Mit flexiblen UI-Optionen und der Kraft der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie ganz einfach neue Funktionen zu einem Browser hinzufügen. Und, Sie können die Funktionen oder die Funktionalität fast jeder Website verbessern, es muss nicht Ihre Website sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste von Radiostationen für Kanada, wobei RadioOne ausgewählt ist, um zu spielen.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spielmöglichkeiten an oder erkunden Sie neue Spielmöglichkeiten, wie das Einfügen von Spielmechaniken in das alltägliche Browsen.

Beispiele: [RPG-Spiel - Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Pop-up zeigt den Spielfortschritt und bietet Optionen zum Starten eines Kampfes oder Abenteuers.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Sie können Webentwicklungswerkzeuge anbieten, da Sie dies als Geschäft betreiben oder eine nützliche Technik oder Herangehensweise an die Webentwicklung entwickelt haben, die Sie teilen möchten. So oder so, Sie können die integrierten Entwicklerwerkzeuge von Firefox verbessern, indem Sie einen neuen Tab zur Entwicklerwerkzeugleiste hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe-Zugänglichkeitstest-Erweiterung zeigt gefundene Zugänglichkeitsprobleme in einer Webseite.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mithilfe der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) erstellt, einem plattformübergreifenden System zur Entwicklung von Erweiterungen. Großenteils ist die API kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Google Chrome und Opera unterstützt wird. Erweiterungen, die für diese Browser geschrieben wurden, können in den meisten Fällen mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox oder Microsoft Edge ausgeführt werden.

Wenn Sie Ideen oder Fragen haben, können Sie uns im [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons-Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Gehen Sie die Entwicklung einer einfachen Erweiterung durch in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension).
- Lernen Sie die Struktur einer Erweiterung kennen in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Probieren Sie einige Beispielerweiterungen aus in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples).
