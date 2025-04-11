---
title: Firefox 84 für Entwickler
slug: Mozilla/Firefox/Releases/84
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 84, die Entwickler betreffen. Firefox 84 wurde am 15. Dezember 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Der Firefox [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) unterstützt nun die Anzeige der [Tastatur-Tab-Reihenfolge](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) auf einer Webseite. Dies bietet einen besseren Überblick darüber, wie die Seite mit der Tastatur navigiert wird, als das Durchtabben der Links ([Firefox Bug 1654956](https://bugzil.la/1654956)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben Unterstützung für komplexe Selektoren zur {{cssxref(":not")}} Pseudo-Klasse hinzugefügt ([Firefox Bug 933562](https://bugzil.la/933562)).

#### Entfernungen

- Wir haben die proprietären `-moz-default-appearance` Eigenschaftswerte `scrollbar-small` (es wird stattdessen `scrollbar-width: thin` verwendet) und `scrollbar` (nur macOS; es werden stattdessen `scrollbar-horizontal` und `scrollbar-vertical` verwendet) entfernt ([Firefox Bug 1673132](https://bugzil.la/1673132)).

### JavaScript

- Benutzerdefinierte Datums-/Zeitformate, die als Optionen an den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können nun `fractionalSecondDigits` enthalten — die Anzahl der Ziffern zur Darstellung von Sekundenbruchteilen ([Firefox Bug 1645107](https://bugzil.la/1645107)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Firefox stellt nun sicher, dass `localhost` URLs — wie `http://localhost/` und `http://dev.localhost/` — sich auf die Loopback-Schnittstelle des lokalen Hosts beziehen (z. B. `http://127.0.0.1`). Daher wird nun angenommen, dass Ressourcen, die von `localhost` geladen werden, sicher geliefert wurden (siehe [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)), und sie werden auch nicht als [Mixed Content](/de/docs/Web/Security/Mixed_content) behandelt ([Firefox Bug 1220810](https://bugzil.la/1220810), [Firefox Bug 1488740](https://bugzil.la/1488740)).

### APIs

- Wir haben Unterstützung für das [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) Interface der Paint Timing API hinzugefügt ([Firefox Bug 1518999](https://bugzil.la/1518999)).
- Die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) akzeptiert nun nur noch zwei Parameter: `scheme` und `url`. `title` wurde entfernt ([Firefox Bug 1631464](https://bugzil.la/1631464)).

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) wirft nun einen `InvalidModificationError`, wenn sich die Anzahl der Spuren im aufgenommenen Stream geändert hat ([Firefox Bug 1581139](https://bugzil.la/1581139)).

#### Entfernungen

- Der Anwendungscache wurde entfernt — Entwickler sollten stattdessen die [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwenden ([Firefox Bug 1619673](https://bugzil.la/1619673)).

### WebAssembly

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Unterstützung für den Chrome-Bereich für `WebDriver:PerformActions` und `WebDriver:ReleaseActions` hinzugefügt ([Firefox Bug 1365886](https://bugzil.la/1365886)).
- Die neue Fission-kompatible API wurde jetzt standardmäßig aktiviert. Um zur vorherigen API zurückzukehren, muss die Einstellung `marionette.actors.enabled` auf `false` gesetzt werden ([Firefox Bug 1669169](https://bugzil.la/1669169)).
- `WebDriver:SwitchToWindow` wurde behoben, um immer zum obersten Browsing-Kontext zurückzukehren ([Firefox Bug 1305822](https://bugzil.la/1305822)).
- Verbesserte Überprüfungen der Browsing-Kontexte für `WebDriver:SwitchToParentFrame` ([Firefox Bug 1671622](https://bugzil.la/1671622)).
- Ein Hänger bei `WebDriver:Back` wurde behoben, der auftrat, wenn das aktuell ausgewählte [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entladen wurde ([Firefox Bug 1672758](https://bugzil.la/1672758)).

#### Bekannte Bugs

- Nach der Navigation kann der Zugriff auf ein zuvor abgerufenes Element möglicherweise nicht immer einen "stale element" Fehler auslösen und kann auch zu einem "no such element" Fehler führen. Um dies zu verhindern, setzen Sie die Einstellung `marionette.actors.enabled` auf `false` ([Firefox Bug 1684827](https://bugzil.la/1684827)).

## Änderungen für Add-on-Entwickler

- Die API [`browsingData.remove()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) unterstützt nun das Entfernen eines Subsets von Datentypen nach `cookieStoreId`.

## Ältere Versionen

{{Firefox_for_developers}}
