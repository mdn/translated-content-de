---
title: Firefox 84 Versionshinweise für Entwickler
short-title: Firefox 84
slug: Mozilla/Firefox/Releases/84
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 84, die Entwickler betreffen. Firefox 84 wurde am 15. Dezember 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Firefox [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) unterstützt jetzt die Anzeige der [Tastatur-Tab-Reihenfolge](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) auf einer Webseite. Dies bietet eine bessere Übersicht darüber, wie die Seite mit der Tastatur navigiert wird, als durch die Links zu tabben ([Firefox-Bug 1654956](https://bugzil.la/1654956)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben die Unterstützung für komplexe Selektoren in der {{cssxref(":not")}}-Pseudoklasse hinzugefügt ([Firefox-Bug 933562](https://bugzil.la/933562)).

#### Entfernungen

- Wir haben die proprietären `-moz-default-appearance`-Eigenschaftswerte `scrollbar-small` (es wird stattdessen `scrollbar-width: thin` verwendet) und `scrollbar` (nur macOS; es werden stattdessen `scrollbar-horizontal` und `scrollbar-vertical` verwendet) entfernt ([Firefox-Bug 1673132](https://bugzil.la/1673132)).

### JavaScript

- Benutzerdefinierte Datums-/Zeitformate, die als Optionen an den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können jetzt `fractionalSecondDigits` enthalten — die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden ([Firefox-Bug 1645107](https://bugzil.la/1645107)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Firefox stellt jetzt sicher, dass `localhost`-URLs — wie `http://localhost/` und `http://dev.localhost/` — auf die Loopback-Schnittstelle des lokalen Hosts verweisen (z. B. `http://127.0.0.1`). Infolgedessen wird angenommen, dass von `localhost` geladene Ressourcen sicher bereitgestellt wurden (siehe [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)) und sie werden auch nicht als [gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) behandelt ([Firefox-Bug 1220810](https://bugzil.la/1220810), [Firefox-Bug 1488740](https://bugzil.la/1488740)).

### APIs

- Wir haben die Unterstützung für das [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Interface der Paint Timing API hinzugefügt ([Firefox-Bug 1518999](https://bugzil.la/1518999)).
- Die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) akzeptiert jetzt nur noch zwei Parameter: `scheme` und `url`. `title` wurde entfernt ([Firefox-Bug 1631464](https://bugzil.la/1631464)).

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) löst jetzt einen `InvalidModificationError` aus, wenn sich die Anzahl der Tracks im aufgezeichneten Stream geändert hat ([Firefox-Bug 1581139](https://bugzil.la/1581139)).

#### Entfernungen

- Der Anwendungscache wurde entfernt — Entwickler sollten stattdessen die [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwenden ([Firefox-Bug 1619673](https://bugzil.la/1619673)).

### WebAssembly

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Unterstützung für den Chrome-Scope für `WebDriver:PerformActions` und `WebDriver:ReleaseActions` hinzugefügt ([Firefox-Bug 1365886](https://bugzil.la/1365886)).
- Die neue Fission-kompatible API ist jetzt standardmäßig aktiviert. Um zur früheren API zurückzukehren, muss die Einstellung `marionette.actors.enabled` auf `false` gesetzt werden ([Firefox-Bug 1669169](https://bugzil.la/1669169)).
- `WebDriver:SwitchToWindow` wurde behoben, um immer zum top-level Browsing-Kontext zurückzuwechseln ([Firefox-Bug 1305822](https://bugzil.la/1305822)).
- Verbesserte Browsing-Kontext-Prüfungen für `WebDriver:SwitchToParentFrame` ([Firefox-Bug 1671622](https://bugzil.la/1671622)).
- Ein Hängenbleiben bei `WebDriver:Back`, das auftritt, wenn das aktuell ausgewählte [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entladen wird, wurde behoben ([Firefox-Bug 1672758](https://bugzil.la/1672758)).

#### Bekannte Fehler

- Nach der Seitennavigation kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "stale element"-Fehler auslösen und auch zu einem "no such element"-Fehler führen. Um dies zu verhindern, setzen Sie die Einstellung `marionette.actors.enabled` auf `false` ([Firefox-Bug 1684827](https://bugzil.la/1684827)).

## Änderungen für Add-on-Entwickler

- Die API [`browsingData.remove()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) unterstützt jetzt das Entfernen eines Teilmengen von Datentypen nach `cookieStoreId`.
