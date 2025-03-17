---
title: Firefox 81 für Entwickler
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet jetzt das TypeScript-Symbol für `.ts` und `.tsx` Dateien ([Firefox Fehler 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Dateisymbol verwendet.
- Wir haben Unterstützung für Zeilenumbruch im [Quelltextbereich des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Fehler 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsimulationen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (keine Farbe) hinzugefügt ([Firefox Fehler 1655053](https://bugzil.la/1655053)).
- Autovervollständigung wird jetzt unterstützt, wenn eine [Klasse zu einem Element hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) wird. Vorgegebene Klassen basieren auf vorhandenen Klassen im Dokument ([Firefox Fehler 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden jetzt in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe)-Element blockiert ([Firefox Fehler 1558394](https://bugzil.la/1558394)).

#### Entfernung

- Die Unterstützung für das nicht standardmäßige Attribut `mozallowfullscreen` wurde aus [`<iframe>`](/de/docs/Web/HTML/Element/iframe) entfernt. Verwenden Sie stattdessen `allow="fullscreen"` ([Firefox Fehler 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen jetzt den Wert `clip` für die {{CSSxRef("overflow")}}-Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wurde ([Firefox Fehler 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}}-Eigenschaft wurde in Übereinstimmung mit der Spezifikation nicht animierbar gemacht ([Firefox Fehler 1654195](https://bugzil.la/1654195)).

#### Entfernung

- Das nicht standardmäßige `::-moz-focus-outer` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde entfernt ([Firefox Fehler 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert jetzt nicht standardmäßige [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition)-Header mit einem nicht in Anführungszeichen gesetzten Dateinamen, der Leerzeichen enthält ([Firefox Fehler 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt jetzt die HTTP [`Feature-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Header-Direktive [`web-share`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share), die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) auf vertrauenswürdige Ursprünge zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt der Erstellung nicht unterstützt ([Firefox Fehler 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Der Schwellenwert für die Aktivierung des Gamepad-Joysticks wurde erhöht. Dies verringert die Wahrscheinlichkeit einer unbeabsichtigten Aktivierung des Gamepads, sowohl durch Controller, die kleine Achsenwerte senden, wenn sie inaktiv sind, als auch durch sehr kleine Stöße. ([Firefox Fehler 1539178](https://bugzil.la/1539178))

#### Workers/Service Workers

- Strenge MIME-Typ-Prüfungen werden jetzt bei Worker- und Shared-Worker-Skripten durchgesetzt, d.h. Skripte, die von den Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) angesprochen werden, müssen jetzt mit `text/javascript` bereitgestellt werden ([Firefox Fehler 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die Fähigkeit `setWindowRect` ist jetzt standardmäßig für alle Desktop-Anwendungen (einschließlich Thunderbird) auf `true` und für Android für GeckoView auf `false` gesetzt ([Firefox Fehler 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf `true` gesetzt ist.
- Die fehlerhafte Nachverfolgung von Browsing-Kontexten nach dem Öffnen eines neuen Fensters wurde behoben ([Firefox Fehler 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern gibt `WebDriver:SwitchToWindow` jetzt immer einen einheitlichen `NoSuchWindowError` zurück ([Firefox Fehler 1663429](https://bugzil.la/1663429)).

#### Entfernung

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Teil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Fehler 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird jetzt unter macOS unterstützt ([Firefox Fehler 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. Zukünftig wird, wenn ein Tab verworfen wird, das Versprechen mit einem `null`-Wert erfüllt ([Firefox Fehler 1654842](https://bugzil.la/1654842)).

## Ältere Versionen

{{Firefox_for_developers}}
