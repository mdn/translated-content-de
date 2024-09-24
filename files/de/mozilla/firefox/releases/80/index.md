---
title: Firefox 80 für Entwickler
slug: Mozilla/Firefox/Releases/80
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 80, die Entwickler betreffen werden. Firefox 80 wurde am 25. August 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Sie können jetzt Netzwerkanfragen sperren und entsperren, indem Sie die Befehle `:block` und `:unblock` in der Webkonsole verwenden ([Firefox-Bug 1546394](https://bugzil.la/1546394)).
- Beim [Hinzufügen einer Klasse](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) zu einem Element im Regelbereich des Seiteninspektors werden vorhandene Klassen mit Autovervollständigung vorgeschlagen (siehe [Firefox-Bug 1492797](https://bugzil.la/1492797)).
- Wenn der Debugger bei einer Ausnahme [anhält](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html), zeigt das Tooltip im Quellbereich jetzt ein Dreiecksymbol zur Offenlegung, das einen Stack-Trace offenbart ([Firefox-Bug 1643633](https://bugzil.la/1643633)).
- In der [Netzwerkmonitor-Anfragenliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) wird ein Schildkrötensymbol für "langsame" Anfragen angezeigt, die einen konfigurierbaren Schwellenwert für die Wartezeit überschreiten ([Firefox-Bug 1648373](https://bugzil.la/1648373)).

### HTML

_Keine Änderungen._

### CSS

- Die standardisierte, nicht-geprefixte {{CSSxRef("appearance", "appearance")}}-Eigenschaft wird jetzt unterstützt; bestehende `-moz-appearance` und `-webkit-appearance` sind nun Aliase der nicht-geprefixten Eigenschaft ([Firefox-Bug 1620467](https://bugzil.la/1620467)).

### JavaScript

- Die ECMAScript 2021-Syntax `export * as namespace` für die [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung wird jetzt unterstützt ([Firefox-Bug 1496852](https://bugzil.la/1496852)).

### HTTP

- Früher funktionierte die [vollbild](/de/docs/Web/HTTP/Headers/Permissions-Policy/fullscreen)-Direktive bei einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) (d.h. über das `allow`-Attribut) nicht, es sei denn, das `allowfullscreen` Attribut war ebenfalls vorhanden. Dies wurde nun behoben ([Firefox-Bug 1608358](https://bugzil.la/1608358)).

### APIs

#### DOM

- Web Animation API Kompositionsoperationen sind jetzt aktiviert — siehe [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) und [`KeyframeEffect.iterationComposite`](/de/docs/Web/API/KeyframeEffect/iterationComposite) ([Firefox-Bug 1652676](https://bugzil.la/1652676)).

#### Entfernungen

- Die `outerHeight` und `outerWidth` Funktionen von [`Window.open()`](/de/docs/Web/API/Window/open) sind nicht länger für Webinhalte verfügbar ([Firefox-Bug 1623826](https://bugzil.la/1623826)).

### WebAssembly

- Atomare Operationen sind jetzt auf nicht-geteilte Speicher erlaubt ([Firefox-Bug 1619196](https://bugzil.la/1619196)).

### WebDriver-Konformität (Marionette)

- Die Verwendung von `WebDriver:NewWindow`, um einen neuen Tab zu öffnen, kehrt nicht mehr zu früh zurück, wenn Tests im Headless-Modus ausgeführt werden ([Firefox-Bug 1653281](https://bugzil.la/1653281)).
- Wir haben das `name`-Argument für `WebDriver:SwitchToWindow` entfernt — es wird im W3C-kompatiblen Modus nicht unterstützt und sollte nicht mehr verwendet werden ([Firefox-Bug 1588424](https://bugzil.la/1588424)).
- Wir haben begonnen, Fission-Unterstützung für folgende Befehle hinzuzufügen: `WebDriver:FindElement`, `WebDriver:FindElements`, `WebDriver:GetElementAttribute`, `WebDriver:GetElementProperty`.
- **Bekanntes Problem**: Das Öffnen eines neuen Tabs durch die Verwendung von `WebDriver:NewWindow` oder über ein beliebiges Skript, das `window.open()` aufruft, wechselt jetzt automatisch zu diesem neuen Fenster ([Firefox-Bug 1661495](https://bugzil.la/1661495)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
