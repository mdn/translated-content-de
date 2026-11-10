---
title: Was sind Erweiterungen?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

> [!NOTE]
> Wenn Sie bereits mit den grundlegenden Konzepten von Erweiterungen vertraut sind, können Sie diesen Abschnitt überspringen und [nachlesen, wie die Dateien einer Erweiterung organisiert sind](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Nutzen Sie anschließend die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Entwicklung Ihrer Erweiterung zu beginnen. Im [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension) erfahren Sie mehr über den Ablauf beim Entwickeln, Testen und Veröffentlichen von Erweiterungen für Firefox.

Eine Erweiterung fügt einem Browser Funktionen hinzu. Sie erstellen sie mit vertrauten Webtechnologien: HTML, CSS und JavaScript. Eine Erweiterung kann dieselben Web-APIs wie JavaScript auf einer Webseite verwenden, hat aber zusätzlich Zugriff auf weitere JavaScript-APIs.

Diese zusätzlichen JavaScript-APIs, die [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions), sind weitgehend mit den wichtigsten Browsern kompatibel: Google Chrome, Apple Safari, Microsoft Edge und Opera. Für Firefox geschriebene Erweiterungen funktionieren in den meisten Fällen auch in den anderen Browsern und erfordern dafür nur wenige oder gar keine [Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

Dank der WebExtensions APIs können Sie mit einer Erweiterung viel mehr tun als mit Code auf einer Webseite. Hier sind einige Beispiele:

**Eine Website verbessern oder ergänzen**: Nutzen Sie eine Erweiterung, um zusätzliche Funktionen oder Informationen Ihrer Website direkt im Browser bereitzustellen. Ermöglichen Sie Benutzern, Informationen von besuchten Seiten zu sammeln, um Ihren Dienst zu verbessern.

Beispiele: [Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/) und [Control Panel for Twitter](https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-twitter/).

![Eine YouTube-Videoseite mit der Steuerleiste von Enhancer for YouTube unterhalb des Videoplayers. Der Mauszeiger befindet sich über einer Schaltfläche der Steuerleiste und zeigt den Tooltip für den Kinomodus an.](enhancer_for_youtube.png)

**Benutzern ermöglichen, ihre Persönlichkeit auszudrücken**: Erweiterungen können den Inhalt von Webseiten verändern. So können Benutzer beispielsweise ihr Lieblingslogo oder ein Bild als Hintergrund für jede besuchte Seite festlegen. Erweiterungen können es Benutzern auch ermöglichen, das Erscheinungsbild der Firefox-Benutzeroberfläche anzupassen, wie es eigenständige [Theme-Add-ons](https://extensionworkshop.com/documentation/themes/) tun.

Beispiele: [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) und [Emoji](https://addons.mozilla.org/en-US/firefox/addon/emoji-sav/).

![Ein von der Tabliss-Erweiterung gestalteter neuer Tab zeigt ein Bild sowie die Uhrzeit und eine Begrüßung.](tabliss_new_tab.png)

**Inhalte auf Webseiten hinzufügen oder entfernen**: Sie können Benutzern helfen, aufdringliche Werbung zu blockieren, einen Reiseführer bereitzustellen, sobald auf einer Seite ein Land oder eine Stadt erwähnt wird, oder Seiteninhalte für ein einheitliches Leseerlebnis neu zu formatieren. Da Erweiterungen auf HTML und CSS einer Seite zugreifen und beides ändern können, helfen sie Benutzern, das Web so zu sehen, wie sie es möchten.

Beispiele: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/) und [LeechBlock NG](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/).

![Das Pop-up von uBlock Origin zeigt Statistiken zu blockierten Trackern.](ublock_origin_add_on.png)

**Werkzeuge und neue Funktionen zum Surfen hinzufügen**: Ergänzen Sie ein Taskboard um neue Funktionen oder erzeugen Sie QR-Code-Bilder aus URLs, Hyperlinks oder Seitentext. Dank flexibler Möglichkeiten für die Benutzeroberfläche und der Leistungsfähigkeit der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions) können Sie einem Browser problemlos neue Funktionen hinzufügen. Außerdem können Sie die Funktionen nahezu jeder Website verbessern – es muss nicht Ihre eigene sein.

Beispiele: [Worldwide Radio](https://addons.mozilla.org/en-US/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/en-US/firefox/addon/flagfox/) und [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

![Die Erweiterung Worldwide Radio zeigt eine Liste von Radiosendern für Kanada. Ein Sender ist zur Wiedergabe ausgewählt.](worldwide_radio_extension.png)

**Spiele**: Bieten Sie klassische Computerspiele mit Offline-Funktionen an oder erkunden Sie neue Spielmöglichkeiten, etwa indem Sie Spielelemente in das alltägliche Surfen einbinden.

Beispiele: [RPG Game - Dedalium by Loycom Games](https://addons.mozilla.org/en-US/firefox/addon/rpg-game-online-dedalium/), [Solitaire Card Game](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/) und [Boxel 3D](https://addons.mozilla.org/en-US/firefox/addon/boxel-3d-game/).

![Das Pop-up von Dedalium zeigt den Bildschirm „Build your Network Guardian“ mit Optionen zur Auswahl von Ausrüstung und zum Erstellen einer Spielfigur.](dedalium_popup.png)

**Entwicklungswerkzeuge hinzufügen**: Vielleicht bieten Sie Werkzeuge für die Webentwicklung als Teil Ihres Geschäfts an oder haben eine nützliche Technik oder Herangehensweise für die Webentwicklung entwickelt, die Sie teilen möchten. In beiden Fällen können Sie die integrierten Firefox-Entwicklerwerkzeuge um einen neuen Tab in der Entwickler-Symbolleiste ergänzen.

Beispiele: [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) und [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

![Die Erweiterung axe DevTools zeigt in den Firefox-Entwicklerwerkzeugen eine Zusammenfassung der auf einer Webseite gefundenen Barrierefreiheitsprobleme und darunter eine Liste der Probleme.](axe_developer_tools_add_on.png)

Wenn Sie Ideen oder Fragen haben, erreichen Sie uns im [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons-Raum](https://chat.mozilla.org/#/room/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix).

## Wie geht es weiter?

- Gehen Sie die Entwicklung einer Erweiterung unter [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) Schritt für Schritt durch.
- Erfahren Sie unter [Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) mehr über die Struktur einer Erweiterung.
- Probieren Sie unter [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) einige Erweiterungsbeispiele aus.
