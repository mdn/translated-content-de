---
title: Firefox 81 für Entwickler
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet jetzt das TypeScript-Icon für `.ts` und `.tsx` Dateien ([Firefox Bug 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Datei-Icon verwendet.
- Wir haben Unterstützung für Zeilenumbruch im [Quellbereich des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Bug 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsimulationsansichten](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (keine Farben) hinzugefügt ([Firefox Bug 1655053](https://bugzil.la/1655053)).
- Autovervollständigung wird jetzt unterstützt, wenn man einer [Klasse in einem Element](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) hinzufügt. Vorgeschlagene Klassen basieren auf vorhandenen Klassen im Dokument ([Firefox Bug 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden jetzt in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element blockiert ([Firefox Bug 1558394](https://bugzil.la/1558394)).

#### Entfernungen

- Die Unterstützung für das nicht-standardisierte Attribut `mozallowfullscreen` wurde aus [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entfernt. Erwägen Sie, stattdessen `allow="fullscreen"` zu verwenden ([Firefox Bug 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen nun den Wert `clip` für die {{CSSxRef("overflow")}} Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wurde ([Firefox Bug 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}} Eigenschaft ist jetzt nicht mehr animierbar, um den Spezifikationen zu entsprechen ([Firefox Bug 1654195](https://bugzil.la/1654195)).

#### Entfernungen

- Das nicht-standardisierte `::-moz-focus-outer` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde entfernt ([Firefox Bug 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert nun nicht-standardisierte [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition) Header mit einem unzitierten Dateinamen, der Leerzeichen enthält ([Firefox Bug 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt nun die HTTP [`Feature-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Header-Direktive [`web-share`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share), die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) auf vertrauenswürdige Ursprungspunkte zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt der Erstellung nicht unterstützt ([Firefox Bug 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Die Schwelle für die Aktivierung von Gamepad-Joysticks wurde erhöht. Dies verringert die Wahrscheinlichkeit von unbeabsichtigten Gamepad-Aktivierungen, sowohl von Steuerungen, die kleine Achsenwerte senden, wenn sie im Leerlauf sind, als auch von sehr kleinen Stößen. ([Firefox Bug 1539178](https://bugzil.la/1539178))

#### Workers/Service workers

- Strenge MIME-Typ-Prüfungen werden nun bei Worker- und Shared Worker-Skripten durchgesetzt, d.h. Skripte, die durch die [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) Konstruktoren angesprochen werden, müssen nun mit `text/javascript` bereitgestellt werden ([Firefox Bug 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die `setWindowRect`-Fähigkeit ist nun standardmäßig `true` für alle Desktop-Anwendungen (einschließlich Thunderbird) und `false` auf Android für GeckoView ([Firefox Bug 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf `true` gesetzt ist.
- Das fehlerhafte Tracking von Browsing-Kontexten nach dem Öffnen eines neuen Fensters wurde behoben ([Firefox Bug 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern gibt `WebDriver:SwitchToWindow` jetzt immer einen einheitlichen `NoSuchWindowError` zurück ([Firefox Bug 1663429](https://bugzil.la/1663429)).

#### Entfernungen

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Bestandteil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Bug 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird nun auf macOS unterstützt ([Firefox Bug 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. Zukünftig wird, wenn ein Tab verworfen wird, das Versprechen mit einem `null`-Wert erfüllt ([Firefox Bug 1654842](https://bugzil.la/1654842)).

## Ältere Versionen

{{Firefox_for_developers}}
