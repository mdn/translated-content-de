---
title: Firefox 81 für Entwickler
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet jetzt das TypeScript-Symbol für `.ts` und `.tsx` Dateien ([Firefox Bug 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Dateisymbol verwendet.
- Wir haben Unterstützung für Zeilenumbruch im [Debugger-Quellenfenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Bug 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsehsimulationen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (keine Farben) hinzugefügt ([Firefox Bug 1655053](https://bugzil.la/1655053)).
- Autovervollständigung wird nun unterstützt, wenn Sie einer Klasse ein Element hinzufügen. Vorgeschlagene Klassen basieren auf vorhandenen Klassen im Dokument ([Firefox Bug 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden nun in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) Element blockiert ([Firefox Bug 1558394](https://bugzil.la/1558394)).

#### Entfernungen

- Die Unterstützung für das nicht standardmäßige `mozallowfullscreen` Attribut wurde aus [`<iframe>`](/de/docs/Web/HTML/Element/iframe) entfernt. Erwägen Sie stattdessen die Verwendung von `allow="fullscreen"` ([Firefox Bug 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen jetzt den Wert von `clip` für die {{CSSxRef("overflow")}} Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wurde ([Firefox Bug 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}} Eigenschaft wurde nicht mehr animierbar gemacht, um der Spezifikation zu entsprechen ([Firefox Bug 1654195](https://bugzil.la/1654195)).

#### Entfernungen

- Das nicht standardmäßige `::-moz-focus-outer` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde entfernt ([Firefox Bug 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert jetzt nicht standardmäßige [`Content-Disposition`](/de/docs/Web/HTTP/Headers/Content-Disposition) Header mit einem unzitierten Dateinamen, der Leerzeichen enthält ([Firefox Bug 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt jetzt die HTTP [`Feature-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) Header-Direktive [`web-share`](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share), die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) auf vertrauenswürdige Ursprünge zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt des Schreibens nicht unterstützt ([Firefox Bug 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Der Schwellenwert für die Aktivierung von Gamepad-Joysticks wurde erhöht. Dies verringert die Wahrscheinlichkeit einer unbeabsichtigten Aktivierung des Gamepads, sowohl durch Controller, die im Leerlauf kleine Achsenwerte senden, als auch bei sehr kleinen Stößen ([Firefox Bug 1539178](https://bugzil.la/1539178)).

#### Arbeiter/Servicearbeiter

- Strikte MIME-Typ-Überprüfungen werden nun bei Worker- und Shared-Worker-Skripten durchgesetzt, d.h. die von den [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) Konstruktoren angezielten Skripte müssen jetzt mit `text/javascript` ausgeliefert werden ([Firefox Bug 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die Fähigkeit `setWindowRect` ist jetzt standardmäßig auf `true` für alle Desktop-Anwendungen (einschließlich Thunderbird) und auf `false` für Android und GeckoView ([Firefox Bug 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf `true` gesetzt ist.
- Es wurde das defekte Tracking von Browsing-Kontexten nach dem Öffnen eines neuen Fensters behoben ([Firefox Bug 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern gibt jetzt `WebDriver:SwitchToWindow` immer einen einheitlichen `NoSuchWindowError` zurück ([Firefox Bug 1663429](https://bugzil.la/1663429)).

#### Entfernungen

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Teil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Bug 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird jetzt auf macOS unterstützt ([Firefox Bug 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. In Zukunft wird, wenn ein Tab verworfen wird, das Versprechen mit einem `null` Wert erfüllt ([Firefox Bug 1654842](https://bugzil.la/1654842)).

## Ältere Versionen

{{Firefox_for_developers}}
