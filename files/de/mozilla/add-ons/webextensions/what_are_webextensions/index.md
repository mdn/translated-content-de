---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt, um zu [sehen, wie Erweiterungsdateien zusammengestellt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Erstellen Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über das Arbeitsablauf für das Testen, Veröffentlichen und Erweiterungen für Firefox zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen und Merkmale hinzu. Sie wird mit vertrauten webbasierten Technologien erstellt — HTML, CSS und JavaScript. Eine Erweiterung kann dieselben Web-APIs nutzen wie JavaScript auf einer Webseite, hat aber auch Zugriff auf einen eigenen Satz von JavaScript-APIs. Das bedeutet, dass Sie in einer Erweiterung weit mehr tun können als mit Code auf einer Webseite. Hier sind nur einige Beispiele für das, was Sie tun können:

**Eine Website erweitern oder ergänzen**: Verwenden Sie ein Add-on, um zusätzliche In-Browser-Funktionen oder Informationen von Ihrer Website bereitzustellen. Ermöglichen Sie Nutzern, Details von besuchten Seiten zu sammeln, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/), [Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/), und [Control Panel for Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung bietet einen Bearbeitungshinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Nutzern ermöglichen, ihre Persönlichkeit zu zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren; zum Beispiel, indem Nutzer ihr Lieblingslogo oder Bild als Hintergrund zu jeder von ihnen besuchten Seite hinzufügen können. Erweiterungen können auch Nutzern ermöglichen, das Aussehen der Firefox-Benutzeroberfläche zu aktualisieren, ähnlich wie eigenständige [Theme-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neu gestalteter Tab durch die Tabliss-Erweiterung zeigt ein Wald-Bild mit der Uhrzeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte von Webseiten hinzufügen oder entfernen**: Sie möchten vielleicht Nutzern helfen, aufdringliche Werbung von Webseiten zu blockieren, Zugang zu einem Reiseführer zu gewähren, wann immer ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder Seiteneinhalte neu zu formatieren, um ein konsistentes Leseerlebnis zu bieten. Mit der Fähigkeit, sowohl das HTML als auch das CSS einer Seite zu aktualisieren, können Erweiterungen Nutzern helfen, das Web so zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![Das uBlock Origin-Popup zeigt die Statistiken der blockierten Tracker an.](ublock_origin_add_on.png)

**Werkzeuge und neue Browserfunktionen hinzufügen**: Neue Funktionen zu einem Aufgabenboard hinzufügen oder QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext generieren. Mit flexiblen UI-Optionen und der Leistungsfähigkeit der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie problemlos neue Funktionen zu einem Browser hinzufügen. Und Sie können fast jede Webseite in ihren Funktionen oder ihrer Funktionalität verbessern, die Webseite muss nicht einmal Ihnen gehören.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Erweiterung Worldwide Radio zeigt eine Liste von Radiosendern für Kanada an, wobei RadioOne zum Abspielen ausgewählt ist.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spiel-Funktionen an oder erkunden Sie neue Spielmöglichkeiten, wie z. B. das Einfügen von Spielmechaniken in den Alltag beim Surfen.

Beispiele: [RPG Game – Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire-Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus an und bietet Optionen, um ein Abenteuer oder einen Kampf zu starten.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Sie können Webentwicklungstools als Ihr Geschäft anbieten oder haben eine nützliche Technik oder Herangehensweise an die Webentwicklung entwickelt, die Sie teilen möchten. So oder so, Sie können die integrierten Firefox-Entwicklertools erweitern, indem Sie einen neuen Tab zur Entwicklertools-Leiste hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe-Erweiterung zum Testen der Barrierefreiheit zeigt gefundene Barrierefreiheitsprobleme auf einer Webseite an.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mithilfe der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) entwickelt, einem systemübergreifenden System zur Entwicklung von Erweiterungen. In großem Umfang ist die API kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Google Chrome und Opera unterstützt wird. In den meisten Fällen werden Erweiterungen, die für diese Browser geschrieben wurden, mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox oder Microsoft Edge ausgeführt.

Wenn Sie Ideen oder Fragen haben, können Sie uns im [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Entwickeln Sie eine Erweiterung Schritt für Schritt in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension).
- Erfahren Sie mehr über die Struktur einer Erweiterung in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Probieren Sie einige Beispielerweiterungen in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
