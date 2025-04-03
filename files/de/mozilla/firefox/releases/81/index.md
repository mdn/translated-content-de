---
title: Firefox 81 für Entwickler
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet nun das TypeScript-Symbol für `.ts` und `.tsx` Dateien ([Firefox Bug 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Dateisymbol verwendet.
- Wir haben die Unterstützung für Zeilenumbruch im [Quelltextfenster des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Bug 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsehsimulationen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (keine Farbe) hinzugefügt ([Firefox Bug 1655053](https://bugzil.la/1655053)).
- Die Autovervollständigung wird jetzt unterstützt, wenn Sie einer [Klasse zu einem Element](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) hinzufügen. Angeboten werden Klassen, die auf bestehenden Klassen im Dokument basieren ([Firefox Bug 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden jetzt in einem eingeschränkten [`<iframe>`](/de/docs/Web/HTML/Element/iframe) blockiert ([Firefox Bug 1558394](https://bugzil.la/1558394)).

#### Entfernungen

- Die Unterstützung für das nicht standardmäßige `mozallowfullscreen` Attribut wurde aus [`<iframe>`](/de/docs/Web/HTML/Element/iframe) entfernt. Verwenden Sie stattdessen `allow="fullscreen"` ([Firefox Bug 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen nun den Wert `clip` für die {{CSSxRef("overflow")}} Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wurde ([Firefox Bug 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}} Eigenschaft ist nicht mehr animierbar, um der Spezifikation gerecht zu werden ([Firefox Bug 1654195](https://bugzil.la/1654195)).

#### Entfernungen

- Das nicht standardmäßige `::-moz-focus-outer` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde entfernt ([Firefox Bug 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert nun nicht standardmäßige [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition) Header mit einem unverkleideten Dateinamen, der Leerzeichen enthält ([Firefox Bug 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt jetzt die HTTP [`Feature-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Header-Direktive [`web-share`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share), die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) auf vertrauenswürdige Ursprünge zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt der Erstellung dieses Dokuments nicht unterstützt ([Firefox Bug 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Der Schwellenwert für die Aktivierung des Joysticks wurde erhöht. Dies verringert die Wahrscheinlichkeit einer unbeabsichtigten Aktivierung, sowohl durch Controller, die kleine Achsenwerte im Leerlauf senden, als auch durch sehr kleine Erschütterungen ([Firefox Bug 1539178](https://bugzil.la/1539178)).

#### Workers/Service Workers

- Strenge MIME-Typ-Prüfungen werden nun auf Worker- und Shared-Worker-Skripten durchgesetzt, d.h. Skripte, die von den Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) angesprochen werden, müssen nun mit `text/javascript` bereitgestellt werden ([Firefox Bug 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die `setWindowRect` Fähigkeit ist nun standardmäßig für alle Desktop-Anwendungen (einschließlich Thunderbird) `true` und auf Android `false` für GeckoView ([Firefox Bug 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf `true` gesetzt ist.
- Die fehlerhafte Verfolgung der Browserkontexte nach dem Öffnen eines neuen Fensters wurde behoben ([Firefox Bug 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern gibt `WebDriver:SwitchToWindow` jetzt immer einen einheitlichen `NoSuchWindowError` aus ([Firefox Bug 1663429](https://bugzil.la/1663429)).

#### Entfernungen

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Teil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Bug 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird nun auf macOS unterstützt ([Firefox Bug 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. Zukünftig wird, wenn ein Tab verworfen wird, das Versprechen mit einem `null` Wert erfüllt ([Firefox Bug 1654842](https://bugzil.la/1654842)).

## Ältere Versionen

{{Firefox_for_developers}}
