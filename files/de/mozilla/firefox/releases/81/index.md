---
title: Firefox 81 für Entwickler
slug: Mozilla/Firefox/Releases/81
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 81, die Entwickler betreffen. Firefox 81 wurde am 22. September 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) verwendet jetzt das TypeScript-Symbol für `.ts`- und `.tsx`-Dateien ([Firefox Bug 1642769](https://bugzil.la/1642769)). Zuvor wurde ein generisches Dateisymbol verwendet.
- Wir haben Unterstützung für den Zeilenumbruch im [Quellpaneel des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) hinzugefügt ([Firefox Bug 1590885](https://bugzil.la/1590885)).
- Wir haben unnötige [Farbsehsimulationen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (Protanomalie, Deuteranomalie und Tritanomalie) aus dem [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) entfernt und eine Simulation für Achromatopsie (keine Farbe) hinzugefügt ([Firefox Bug 1655053](https://bugzil.la/1655053)).
- Die Autovervollständigung wird jetzt unterstützt, wenn Sie einer [Elementklasse](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) eine Klasse hinzufügen. Vorgeschlagene Klassen basieren auf vorhandenen Klassen im Dokument ([Firefox Bug 1492797](https://bugzil.la/1492797)).

### HTML

- Automatische Downloads werden jetzt in einem Sandbox-`<iframe>`-Element blockiert ([Firefox Bug 1558394](https://bugzil.la/1558394)).

#### Entfernungen

- Die Unterstützung für das nicht standardmäßige `mozallowfullscreen`-Attribut wurde aus dem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entfernt. Verwenden Sie stattdessen `allow="fullscreen"` ([Firefox Bug 1657599](https://bugzil.la/1657599)).

### CSS

- Wir unterstützen jetzt den Wert von `clip` für die {{CSSxRef("overflow")}}-Eigenschaft, indem `overflow: -moz-hidden-unscrollable` umbenannt wird ([Firefox Bug 1531609](https://bugzil.la/1531609)).
- Die {{CSSxRef("text-combine-upright")}}-Eigenschaft wurde nicht animierbar gemacht, um der Spezifikation zu entsprechen ([Firefox Bug 1654195](https://bugzil.la/1654195)).

#### Entfernungen

- Das nicht standardmäßige `::-moz-focus-outer` [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wurde entfernt ([Firefox Bug 1655859](https://bugzil.la/1655859)).

### JavaScript

_Keine Änderungen._

### HTTP

- Firefox akzeptiert jetzt nicht standardmäßige [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition)-Header mit einem nicht zitierten Dateinamen, der Leerzeichen enthält ([Firefox Bug 1440677](https://bugzil.la/1440677)).
- Firefox unterstützt jetzt die HTTP-Header [`Feature-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) mit der [`web-share`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share)-Direktive, die verwendet werden kann, um den Zugriff auf die [Web Share API](/de/docs/Web/API/Navigator/share) zu vertrauenswürdigen Ursprüngen zu beschränken. Beachten Sie, dass Firefox die Web Share API selbst zum Zeitpunkt des Schreibens nicht unterstützt ([Firefox Bug 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- Der Schwellenwert für die Aktivierung von Gamepad-Joysticks wurde erhöht. Dadurch wird die Wahrscheinlichkeit einer unbeabsichtigten Gamepad-Aktivierung reduziert, sowohl durch Controller, die kleine Achsenwerte senden, wenn sie im Leerlauf sind, als auch durch sehr kleine Erschütterungen. ([Firefox Bug 1539178](https://bugzil.la/1539178))

#### Workers/Service Workers

- Strenge MIME-Typ-Prüfungen werden jetzt bei Worker- und Shared-Worker-Skripten erzwungen, d.h. Skripte, die von den [`Worker()`](/de/docs/Web/API/Worker/Worker)- und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktoren verwendet werden, müssen jetzt mit `text/javascript` bereitgestellt werden ([Firefox Bug 1569123](https://bugzil.la/1569123)).

### WebDriver-Konformität (Marionette)

- Die Fähigkeit `setWindowRect` ist nun standardmäßig für alle Desktop-Anwendungen (einschließlich Thunderbird) `true` und `false` auf Android für GeckoView ([Firefox Bug 1650872](https://bugzil.la/1650872)).
- Wir haben Fission-Unterstützung für die folgenden Befehle hinzugefügt: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. Alle Fission-kompatiblen Befehle sind nur verfügbar, wenn `marionette.actors.enabled` auf `true` gesetzt ist.
- Der defekte Verlauf von Browsing-Kontexten nach dem Öffnen eines neuen Fensters wurde behoben ([Firefox Bug 1661495](https://bugzil.la/1661495)).
- Im Falle von Fehlern liefert `WebDriver:SwitchToWindow` jetzt immer einen einheitlichen `NoSuchWindowError` zurück ([Firefox Bug 1663429](https://bugzil.la/1663429)).

#### Entfernungen

- `WebDriver:GetActiveFrame` wurde entfernt, da es nicht Teil der WebDriver-Spezifikation ist und nicht mehr verwendet wird ([Firefox Bug 1659502](https://bugzil.la/1659502)).

## Änderungen für Add-on-Entwickler

- [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) wird jetzt auf macOS unterstützt ([Firefox Bug 1653354](https://bugzil.la/1653354)).
- Das Verhalten von [`webNavigation.getFrame()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) und [`webNavigation.getAllFrames()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) hat sich geändert. Künftig wird bei einem Tab, der verworfen wird, das Versprechen mit einem `null`-Wert erfüllt ([Firefox Bug 1654842](https://bugzil.la/1654842)).

## Ältere Versionen

{{Firefox_for_developers}}
