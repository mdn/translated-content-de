---
title: Firefox 80 Versionshinweise für Entwickler
short-title: Firefox 80
slug: Mozilla/Firefox/Releases/80
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 80, die Entwickler betreffen. Firefox 80 wurde am 25. August 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Sie können jetzt Netzwerk-Anfragen im Web-Konsolenwerkzeug mit den [Hilfsbefehlen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) `:block` und `:unblock` blockieren und wieder freigeben ([Firefox Bug 1546394](https://bugzil.la/1546394)).
- Beim [Hinzufügen einer Klasse](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) zu einem Element im Regelbereich des Seiteninspektors werden vorhandene Klassen mit Autovervollständigung vorgeschlagen (Siehe [Firefox Bug 1492797](https://bugzil.la/1492797)).
- Wenn der Debugger [bei einer Ausnahme anhält](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html), zeigt das Tooltip im Quelltextbereich jetzt ein Dreiecksymbol zur Offenlegung an, das einen Stack-Trace zeigt ([Firefox Bug 1643633](https://bugzil.la/1643633)).
- Im [Netzwerkmonitor-Anfragenliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) wird ein Schildkrötensymbol für "langsame" Anfragen angezeigt, die einen konfigurierbaren Schwellenwert für die Wartezeit überschreiten ([Firefox Bug 1648373](https://bugzil.la/1648373)).

### HTML

_Keine Änderungen._

### CSS

- Die standardisierte, unpräfixte {{CSSxRef("appearance", "appearance")}} Eigenschaft wird jetzt unterstützt; die vorhandenen `-moz-appearance` und `-webkit-appearance` sind jetzt Aliase der unpräfixten Eigenschaft ([Firefox Bug 1620467](https://bugzil.la/1620467)).

### JavaScript

- Die ECMAScript 2021 `export * as namespace` Syntax für die [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung wird nun unterstützt ([Firefox Bug 1496852](https://bugzil.la/1496852)).

### HTTP

- Zuvor funktionierte die [fullscreen](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen) Direktive in einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) (d.h. über das `allow` Attribut) nicht, es sei denn, das `allowfullscreen` Attribut war ebenfalls vorhanden. Dies wurde nun behoben ([Firefox Bug 1608358](https://bugzil.la/1608358)).

### APIs

#### DOM

- Web Animations API Kompositionsoperationen sind jetzt aktiviert — siehe [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) und [`KeyframeEffect.iterationComposite`](/de/docs/Web/API/KeyframeEffect/iterationComposite) ([Firefox Bug 1652676](https://bugzil.la/1652676)).

#### Entfernungen

- Die `outerHeight` und `outerWidth` Funktionen von [`Window.open()`](/de/docs/Web/API/Window/open) sind nicht mehr für Webinhalte zugänglich ([Firefox Bug 1623826](https://bugzil.la/1623826)).

### WebAssembly

- Atomare Operationen sind jetzt auf nicht-geteilten Speichern erlaubt ([Firefox Bug 1619196](https://bugzil.la/1619196)).

### WebDriver-Konformität (Marionette)

- Das Verwenden von `WebDriver:NewWindow` zum Öffnen eines neuen Tabs kehrt nicht mehr zu früh zurück, wenn Tests im Headless-Modus laufen ([Firefox Bug 1653281](https://bugzil.la/1653281)).
- Wir haben das `name` Argument für `WebDriver:SwitchToWindow` entfernt — es wird im W3C-kompatiblen Modus nicht unterstützt und sollte nicht mehr verwendet werden ([Firefox Bug 1588424](https://bugzil.la/1588424)).
- Wir haben begonnen, Fission-Unterstützung für die folgenden Befehle hinzuzufügen: `WebDriver:FindElement`, `WebDriver:FindElements`, `WebDriver:GetElementAttribute`, `WebDriver:GetElementProperty`.
- **Bekanntes Problem**: Das Öffnen eines neuen Tabs durch Verwendung von `WebDriver:NewWindow` oder über ein beliebiges Skript, das `window.open()` aufruft, wechselt jetzt automatisch zu diesem neuen Fenster ([Firefox Bug 1661495](https://bugzil.la/1661495)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._
