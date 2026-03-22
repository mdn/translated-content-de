---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Erweiterungen vertraut sind, können Sie diesen Abschnitt überspringen und sich stattdessen anschauen, [wie Erweiterungsdateien organisiert sind](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Nutzen Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow zur Entwicklung, zum Testen, zur Veröffentlichung und für Erweiterungen für Firefox zu erfahren.

Eine Erweiterung fügt einem Browser Funktionen und Eigenschaften hinzu. Sie erstellen eine mit bekannten, webbasierten Technologien: HTML, CSS und JavaScript. Eine Erweiterung kann die gleichen Web-APIs verwenden wie JavaScript auf einer Webseite, hat jedoch auch Zugriff auf einen zusätzlichen Satz von JavaScript-APIs.

Der zusätzliche Satz von JavaScript-APIs, die [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions), ist weitgehend kompatibel mit den wichtigsten Browsern: Google Chrome, Apple Safari, Microsoft Edge und Opera. Erweiterungen, die für Firefox geschrieben wurden, werden in den meisten Fällen auch in anderen Browsern mit wenigen oder gar keinen [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) laufen.

Die WebExtensions APIs ermöglichen es, in einer Erweiterung viel mehr zu tun als mit Code auf einer Webseite. Hier sind nur einige Beispiele für das, was Sie tun können:

**Eine Website erweitern oder ergänzen**: Verwenden Sie eine Erweiterung, um zusätzliche In-Browser-Funktionen oder Informationen von Ihrer Website zu liefern. Ermöglichen Sie Nutzern, Details von besuchten Seiten zu sammeln, um den von Ihnen angebotenen Service zu verbessern.

Beispiele: [Grammarly für Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/) und [Control Panel für Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Die Grammarly-Erweiterung zeigt einen Bearbeitungshinweis im GitHub-Editor.](grammarly-in-github-editor.png)

**Nutzern ermöglichen, ihre Persönlichkeit zu zeigen**: Erweiterungen können den Inhalt von Webseiten manipulieren; beispielsweise können Nutzer ihr Lieblingslogo oder -bild als Hintergrund für jede besuchte Seite hinzufügen. Erweiterungen können Nutzern auch ermöglichen, das Aussehen der Firefox-Oberfläche zu aktualisieren, wie eigenständige [Themen-Add-ons](https://extensionworkshop.com/documentation/themes/).

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Eine durch die Tabliss-Erweiterung gestylte neue Registerkarte zeigt ein Waldlandschaftsbild mit der Uhrzeit und einer Begrüßungsnachricht.](tabliss_new_tab.png)

**Inhalte zu Webseiten hinzufügen oder entfernen**: Sie können Nutzern helfen, aufdringliche Werbung zu blockieren, Zugang zu einem Reiseführer zu bieten, wann immer eine Seite ein Land oder eine Stadt erwähnt, oder Seiteninhalte neu formatieren, um ein konsistentes Leseerlebnis zu bieten. Mit der Fähigkeit, auf das HTML und CSS einer Seite zuzugreifen und zu aktualisieren, können Erweiterungen Nutzern helfen, das Web so zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/) und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![Das uBlock Origin-Popup zeigt blockierte Tracker-Statistiken.](ublock_origin_add_on.png)

**Werkzeuge und neue Browsing-Funktionen hinzufügen**: Fügen Sie einem Taskboard neue Funktionen hinzu oder generieren Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext. Mit flexiblen UI-Optionen und der Power der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie leicht neue Funktionen zu einem Browser hinzufügen. Und Sie können Funktionen oder Funktionalitäten nahezu jeder Website verbessern; es muss nicht Ihre eigene Website sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/) und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Worldwide Radio-Erweiterung zeigt eine Liste von Radiostationen für Kanada, wobei RadioOne zum Abspielen ausgewählt ist.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie traditionelle Computerspiele mit Offline-Spiel-Features an oder erkunden Sie neue Spielmöglichkeiten, wie z.B. das Integrieren von Gameplay in das alltägliche Browsen.

Beispiele: [RPG Game - Dedalium by Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Kartenspiel](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/) und [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

![Das Dedalium-Popup zeigt den Spielstatus und bietet Optionen, um einen Kampf oder ein Abenteuer zu starten.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Sie können Webentwicklungstools als Ihr Geschäft bereitstellen oder eine nützliche Technik oder einen Ansatz zur Webentwicklung entwickelt haben, den Sie teilen möchten. Wie auch immer, Sie können die integrierten Entwicklerwerkzeuge von Firefox verbessern, indem Sie der Entwicklertoolbar einen neuen Tab hinzufügen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Axe-Barrierefreiheitstest-Erweiterung zeigt gefundene Barrierefreiheitsprobleme auf einer Webseite.](axe_developer_tools_add_on.png)

Wenn Sie Ideen oder Fragen haben, können Sie uns im [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Was kommt als nächstes?

- Machen Sie sich mit der Entwicklung einer Erweiterung in [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) vertraut.
- Erfahren Sie mehr über die Struktur einer Erweiterung in [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Probieren Sie einige Beispielerweiterungen in [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) aus.
