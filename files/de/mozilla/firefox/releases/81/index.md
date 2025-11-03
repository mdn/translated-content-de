---
title: Firefox 81 Versionshinweise für Entwickler
short-title: Firefox 81
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel informiert über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet nun das TypeScript-Icon für `.ts` und `.tsx` Dateien ([Firefox Fehler 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Datei-Icon verwendet.
- Wir haben Unterstützung für den Zeilenumbruch im [Quellbereich des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Fehler 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsehsimulationen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (kein Farbsehen) hinzugefügt ([Firefox Fehler 1655053](https://bugzil.la/1655053)).
- Die Autovervollständigung wird jetzt unterstützt, wenn Sie eine [Klasse zu einem Element hinzufügen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element). Vorgeschlagene Klassen basieren auf vorhandenen Klassen im Dokument ([Firefox Fehler 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden nun in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element blockiert ([Firefox Fehler 1558394](https://bugzil.la/1558394)).

#### Entfernungen

- Die Unterstützung für das nicht standardisierte Attribut `mozallowfullscreen` wurde aus [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entfernt. Verwenden Sie stattdessen `allow="fullscreen"` ([Firefox Fehler 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen nun den Wert `clip` für die {{CSSxRef("overflow")}}-Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wurde ([Firefox Fehler 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}}-Eigenschaft wurde nicht animierbar gemacht, um der Spezifikation zu entsprechen ([Firefox Fehler 1654195](https://bugzil.la/1654195)).

#### Entfernungen

- Das nicht standardisierte `::-moz-focus-outer` [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wurde entfernt ([Firefox Fehler 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert jetzt nicht standardisierte [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition)-Header mit einem unzitierten Dateinamen, der Leerzeichen enthält ([Firefox Fehler 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt jetzt die HTTP [`Feature-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Header-Richtlinie [`web-share`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share), die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) auf vertrauenswürdige Ursprünge zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt des Schreibens nicht unterstützt ([Firefox Fehler 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Der Schwellenwert für die Aktivierung des Gamepad-Joysticks wurde erhöht. Dies verringert die Wahrscheinlichkeit einer unbeabsichtigten Gamepad-Aktivierung, sowohl durch Controller, die kleine Achsenwerte senden, wenn sie im Leerlauf sind, als auch durch sehr kleine Stöße. ([Firefox Fehler 1539178](https://bugzil.la/1539178))

#### Workers/Service Workers

- Strikte MIME-Typ-Prüfungen werden jetzt bei Worker- und Shared-Worker-Skripten durchgesetzt, d.h. Skripte, die durch die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) angesprochen werden, müssen jetzt mit `text/javascript` bedient werden ([Firefox Fehler 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die `setWindowRect`-Fähigkeit ist jetzt standardmäßig für alle Desktop-Anwendungen (einschließlich Thunderbird) auf "true" gesetzt und auf Android für GeckoView auf "false" ([Firefox Fehler 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf "true" gesetzt ist.
- Das fehlerhafte Tracking der Browsing-Kontexte nach dem Öffnen eines neuen Fensters wurde behoben ([Firefox Fehler 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern gibt `WebDriver:SwitchToWindow` jetzt immer einen einheitlichen `NoSuchWindowError` zurück ([Firefox Fehler 1663429](https://bugzil.la/1663429)).

#### Entfernungen

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Teil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Fehler 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird jetzt unter macOS unterstützt ([Firefox Fehler 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. Zukünftig wird bei einer abgeworfenen Registerkarte das Versprechen mit einem `null` Wert erfüllt ([Firefox Fehler 1654842](https://bugzil.la/1654842)).
