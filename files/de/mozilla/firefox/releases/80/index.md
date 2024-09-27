---
title: Firefox 80 für Entwickler
slug: Mozilla/Firefox/Releases/80
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 80, die Entwickler betreffen. Firefox 80 wurde am 25. August 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Sie können jetzt Netzwerkanforderungen mit den `:block` und `:unblock` [Hilfsbefehlen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in der Webkonsole blockieren und entsperren ([Firefox-Bug 1546394](https://bugzil.la/1546394)).
- Wenn Sie im Regelbereich des Seiteninspektors [eine Klasse zu einem Element hinzufügen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element), werden vorhandene Klassen mit Autovervollständigung vorgeschlagen (siehe [Firefox-Bug 1492797](https://bugzil.la/1492797)).
- Wenn der Debugger [bei einer Ausnahme stoppt](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html), zeigt das Tooltip im Quellbereich jetzt ein Offenlegungssymbol, das einen Stack-Trace offenbart ([Firefox-Bug 1643633](https://bugzil.la/1643633)).
- In der [Netzwerkmonitor-Anforderungsliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) wird ein Schildkrötensymbol für "langsame" Anfragen angezeigt, die einen konfigurierbaren Schwellenwert für die Wartezeit überschreiten ([Firefox-Bug 1648373](https://bugzil.la/1648373)).

### HTML

_Keine Änderungen._

### CSS

- Die standardisierte, unpräfixierte {{CSSxRef("appearance", "appearance")}}-Eigenschaft wird jetzt unterstützt; bestehende `-moz-appearance` und `-webkit-appearance` sind nun Aliase der unpräfixierten Eigenschaft ([Firefox-Bug 1620467](https://bugzil.la/1620467)).

### JavaScript

- Die ECMAScript 2021-Syntax `export * as namespace` für die [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung wird jetzt unterstützt ([Firefox-Bug 1496852](https://bugzil.la/1496852)).

### HTTP

- Bisher funktionierte die [fullscreen]-Richtlinie(/de/docs/Web/HTTP/Headers/Permissions-Policy/fullscreen), wenn sie auf ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) angewendet wurde (d.h. über das `allow`-Attribut), nicht, es sei denn, das `allowfullscreen`-Attribut war ebenfalls vorhanden. Dies wurde nun behoben ([Firefox-Bug 1608358](https://bugzil.la/1608358)).

### APIs

#### DOM

- Web Animations API-Kompositionsoperationen sind jetzt aktiviert — siehe [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) und [`KeyframeEffect.iterationComposite`](/de/docs/Web/API/KeyframeEffect/iterationComposite) ([Firefox-Bug 1652676](https://bugzil.la/1652676)).

#### Entfernungen

- Die `outerHeight` und `outerWidth` Funktionen von [`Window.open()`](/de/docs/Web/API/Window/open) sind nicht mehr für Webinhalte verfügbar ([Firefox-Bug 1623826](https://bugzil.la/1623826)).

### WebAssembly

- Atomare Operationen sind jetzt auf nicht-geteilten Speichern erlaubt ([Firefox-Bug 1619196](https://bugzil.la/1619196)).

### WebDriver-Konformität (Marionette)

- Mit `WebDriver:NewWindow` geöffnete neue Tabs kehren nicht mehr zu früh zurück, wenn Tests im Headless-Modus durchgeführt werden ([Firefox-Bug 1653281](https://bugzil.la/1653281)).
- Wir haben das `name`-Argument für `WebDriver:SwitchToWindow` entfernt — es wird im W3C-kompatiblen Modus nicht unterstützt und sollte nicht mehr verwendet werden ([Firefox-Bug 1588424](https://bugzil.la/1588424)).
- Wir haben begonnen, Fission-Unterstützung für die folgenden Befehle hinzuzufügen: `WebDriver:FindElement`, `WebDriver:FindElements`, `WebDriver:GetElementAttribute`, `WebDriver:GetElementProperty`.
- **Bekanntes Problem**: Das Öffnen eines neuen Tabs mit `WebDriver:NewWindow` oder über ein beliebiges Skript, das `window.open()` aufruft, wechselt nun automatisch zu diesem neuen Fenster ([Firefox-Bug 1661495](https://bugzil.la/1661495)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
