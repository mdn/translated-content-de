---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und [sehen Sie sich an, wie Erweiterungsdateien zusammengesetzt sind](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow für das Testen, Veröffentlichen und für Erweiterungen in Firefox zu erfahren.

Eine Erweiterung fügt einem Browser zusätzliche Funktionen hinzu. Sie wird mit bekannten, web-basierten Technologien erstellt — HTML, CSS und JavaScript. Sie kann dieselben Web-APIs wie JavaScript auf einer Webseite nutzen, hat aber darüber hinaus Zugang zu einer eigenen Reihe von JavaScript-APIs. Das bedeutet, dass Sie in einer Erweiterung viel mehr tun können als mit Code auf einer Webseite. Hier sind nur einige Beispiele für Dinge, die Sie tun können:

**Erweitern oder ergänzen Sie eine Website**: Verwenden Sie ein Add-on, um zusätzliche In-Browser-Funktionen oder Informationen von Ihrer Website bereitzustellen. Ermöglichen Sie Nutzern, Details von besuchten Seiten zu sammeln, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/), [Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), und [Control Panel for Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung gibt einen Editierhinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Lassen Sie Benutzer ihre Persönlichkeit zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren; zum Beispiel können Nutzer ihr Lieblingslogo oder Bild als Hintergrund auf jeder besuchten Seite hinzufügen. Erweiterungen können auch Nutzern ermöglichen, das Erscheinungsbild der Firefox-Benutzeroberfläche zu aktualisieren, ähnlich wie eigenständige [Themen-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neuer Tab, gestaltet von der Tabliss-Erweiterung, zeigt ein Bild eines Waldes mit der Uhrzeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte auf Webseiten hinzufügen oder entfernen**: Sie könnten Nutzern helfen, aufdringliche Werbung von Webseiten zu blockieren, Zugang zu einem Reiseführer zu bieten, wenn ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder Seiteninhalte so umformatieren, dass ein einheitliches Leseerlebnis geboten wird. Mit der Möglichkeit, sowohl auf das HTML als auch auf das CSS einer Seite zuzugreifen und diese zu aktualisieren, können Erweiterungen den Nutzern helfen, das Web auf ihre Weise zu sehen.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![uBlock Origin-Popup zeigt blockierte Tracker-Statistiken.](ublock_origin_add_on.png)

**Fügen Sie Werkzeuge und neue Browser-Funktionen hinzu**: Fügen Sie einem Taskboard neue Funktionen hinzu oder generieren Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext. Mit flexiblen UI-Optionen und der Leistungsfähigkeit der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie leicht neue Funktionen zu einem Browser hinzufügen. Sie können auch die Funktionen fast jeder Website verbessern, es muss nicht Ihre eigene Website sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste von Radiosendern für Kanada, mit RadioOne ausgewählt, um zu spielen.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spielmöglichkeiten an oder erkunden Sie neue Spielmöglichkeiten, wie zum Beispiel die Einbindung von Gameplay in das alltägliche Surfen.

Beispiele: [RPG Game - Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus und bietet Optionen, um einen Kampf oder ein Abenteuer zu starten.](dedalium_popup.png)

**Fügen Sie Entwicklungstools hinzu**: Wenn Sie Web-Entwicklungstools als Ihr Geschäft anbieten oder eine nützliche Technik oder Herangehensweise an die Web-Entwicklung entwickelt haben, die Sie teilen möchten. In jedem Fall können Sie die integrierten Entwicklerwerkzeuge von Firefox erweitern, indem Sie einen neuen Tab zur Entwickler-Toolbar hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe Accessibility Testing-Erweiterung zeigt Barrierefreiheitsprobleme, die auf einer Webseite gefunden wurden.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mit den [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) erstellt, einem browserübergreifenden System zur Entwicklung von Erweiterungen. In großem Umfang ist die API kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Google Chrome und Opera unterstützt wird. In den meisten Fällen werden Erweiterungen, die für diese Browser geschrieben wurden, mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox oder Microsoft Edge laufen.

Wenn Sie Ideen oder Fragen haben, können Sie uns auf dem [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons room](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Gehen Sie die Entwicklung einer Erweiterung in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durch.
- Lernen Sie die Struktur einer Erweiterung in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) kennen.
- Probieren Sie einige Beispiel-Erweiterungen in [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
