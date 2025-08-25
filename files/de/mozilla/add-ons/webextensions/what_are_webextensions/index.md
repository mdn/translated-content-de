---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

> [!NOTE]
> Wenn Sie bereits mit den Grundkonzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und sehen Sie sich [an, wie Erweiterungsdateien zusammengesetzt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Nutzen Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Bau Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow für das Testen, Veröffentlichen und die Firefox-Erweiterungen zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen hinzu. Sie wird mit vertrauten webbasierten Technologien erstellt — HTML, CSS und JavaScript. Sie kann dieselben Web-APIs nutzen wie JavaScript auf einer Webseite, hat jedoch zusätzlich Zugriff auf ihre eigenen JavaScript-APIs. Das bedeutet, dass Sie mit einer Erweiterung weit mehr tun können, als mit Code auf einer Webseite möglich ist. Hier sind nur einige Beispiele für die Dinge, die Sie tun können:

**Eine Website erweitern oder ergänzen**: Verwenden Sie ein Add-on, um ihrem Browser zusätzliche Funktionen oder Informationen von Ihrer Website bereitzustellen. Ermöglichen Sie Benutzern, Details von Seiten zu sammeln, die sie besuchen, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/) und [Control Panel for Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung bietet einen Editier-Vorschlag im GitHub-Editor.](grammarly-in-github-editor.png)

**Lassen Sie Nutzer ihre Persönlichkeit zeigen**: Browser-Erweiterungen können den Inhalt von Webseiten manipulieren; beispielsweise können Benutzer ihr Lieblingslogo oder -bild als Hintergrund auf jeder besuchten Seite hinzufügen. Erweiterungen können auch Benutzern ermöglichen, das Aussehen der Firefox-Benutzeroberfläche zu aktualisieren, ähnlich wie eigenständige [Theme-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein neues Tab, gestaltet durch die Tabliss-Erweiterung, zeigt ein Wald-Bild mit Zeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalt von Webseiten hinzufügen oder entfernen**: Sie könnten Benutzern helfen, aufdringliche Werbung von Webseiten zu blockieren, Zugang zu einem Reiseführer bereitstellen, wann immer ein Land oder eine Stadt auf einer Webseite erwähnt wird, oder den Seiteninhalt umformatieren, um ein konsistentes Leseerlebnis zu bieten. Durch den Zugriff auf und die Aktualisierung sowohl des HTML als auch des CSS einer Seite können Erweiterungen den Nutzern helfen, das Web so zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/), und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![Das uBlock Origin-Popup zeigt blockierte Tracker-Statistiken an.](ublock_origin_add_on.png)

**Werkzeuge und neue Browsing-Funktionen hinzufügen**: Fügen Sie einer Aufgabenliste neue Funktionen hinzu oder generieren Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentexten. Mit flexiblen UI-Optionen und der Macht der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie problemlos neue Funktionen zu einem Browser hinzufügen. Und Sie können fast jede Website-Funktion oder -Eigenschaft verbessern, es muss nicht Ihre eigene Website sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/), und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste von Radiosendern für Kanada, mit RadioOne zum Abspielen ausgewählt.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spielmöglichkeiten an oder erkunden Sie neue Spielmöglichkeiten, wie zum Beispiel das Einbeziehen von Spielmechaniken in das tägliche Surfen.

Beispiele: [RPG Game - Dedalium von Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus und bietet Optionen zum Starten eines Kampfes oder Abenteuers.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Sie können Werkzeuge zur Webentwicklung anbieten, sei es als Teil Ihres Geschäfts oder um eine nützliche Technik oder Herangehensweise an die Webentwicklung zu teilen, die Sie entwickelt haben. So oder so, Sie können die integrierten Firefox-Entwicklerwerkzeuge durch Hinzufügen eines neuen Tabs zur Entwickler-Symbolleiste verbessern.

Beispiele: [aXe Entwicklerwerkzeuge](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Das aXe Accessibility Testing-Addon zeigt gefundene Barrierefreiheitsprobleme in einer Webseite an.](axe_developer_tools_add_on.png)

Erweiterungen für Firefox werden mithilfe der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions) gebaut, einem plattformübergreifenden System zur Erstellung von Erweiterungen. In großem Umfang ist die API kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Google Chrome und Opera unterstützt wird. Erweiterungen, die für diese Browser geschrieben wurden, laufen in den meisten Fällen mit nur wenigen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox oder Microsoft Edge.

Wenn Sie Ideen oder Fragen haben, können Sie uns im [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons-Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als Nächstes?

- Gehen Sie die Entwicklung einer Erweiterung in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) durch.
- Lernen Sie den Aufbau einer Erweiterung in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) kennen.
- Probieren Sie einige Beispielerweiterungen in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
