---
title: Firefox 84 Versionshinweise für Entwickler
short-title: Firefox 84
slug: Mozilla/Firefox/Releases/84
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 84, die Entwickler betreffen werden. Firefox 84 wurde am 15. Dezember 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der Firefox-[Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) unterstützt jetzt das Anzeigen der [Tastatur-Tabulatorreihenfolge](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) auf einer Webseite. Dies bietet eine bessere Übersicht darüber, wie die Seite mit der Tastatur navigiert wird, als das Durchgehen der Links ([Firefox Bug 1654956](https://bugzil.la/1654956)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben Unterstützung für komplexe Selektoren zur {{cssxref(":not")}} Pseudo-Klasse hinzugefügt ([Firefox Bug 933562](https://bugzil.la/933562)).

#### Entfernungen

- Wir haben die proprietären `-moz-default-appearance` Eigenschaftenwerte `scrollbar-small` (anstelle wird `scrollbar-width: thin` verwendet) und `scrollbar` (nur macOS; anstelle werden `scrollbar-horizontal` und `scrollbar-vertical` verwendet) entfernt ([Firefox Bug 1673132](https://bugzil.la/1673132)).

### JavaScript

- Anpassbare Datums-/Zeitformate, die als Optionen zum [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) angegeben werden, können jetzt `fractionalSecondDigits` enthalten — die Anzahl der Ziffern, die zur Darstellung von Bruchteilen einer Sekunde verwendet werden ([Firefox Bug 1645107](https://bugzil.la/1645107)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Firefox stellt jetzt sicher, dass `localhost` URLs — wie `http://localhost/` und `http://dev.localhost/` — auf die Loopback-Schnittstelle des lokalen Hosts verweisen (z.B. `http://127.0.0.1`). Infolgedessen wird angenommen, dass von `localhost` geladene Ressourcen sicher geliefert wurden (siehe [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)) und auch nicht als [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content) behandelt werden ([Firefox Bug 1220810](https://bugzil.la/1220810), [Firefox Bug 1488740](https://bugzil.la/1488740)).

### APIs

- Wir haben die Unterstützung für das [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) Interface der Paint Timing API hinzugefügt ([Firefox Bug 1518999](https://bugzil.la/1518999)).
- Die Methode [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) akzeptiert jetzt nur noch zwei Parameter: `scheme` und `url`. `title` wurde entfernt ([Firefox Bug 1631464](https://bugzil.la/1631464)).

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) löst jetzt einen `InvalidModificationError` aus, wenn sich die Anzahl der Spuren im aufgezeichneten Stream geändert hat ([Firefox Bug 1581139](https://bugzil.la/1581139)).

#### Entfernungen

- Der Application Cache wurde entfernt — Entwickler sollten stattdessen die [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwenden ([Firefox Bug 1619673](https://bugzil.la/1619673)).

### WebAssembly

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Chrome-Scope-Unterstützung für `WebDriver:PerformActions` und `WebDriver:ReleaseActions` hinzugefügt ([Firefox Bug 1365886](https://bugzil.la/1365886)).
- Die neue Fission-kompatible API ist jetzt standardmäßig aktiviert. Um zur vorherigen API zurückzukehren, muss die Einstellung `marionette.actors.enabled` auf `false` gesetzt werden ([Firefox Bug 1669169](https://bugzil.la/1669169)).
- `WebDriver:SwitchToWindow` wurde korrigiert, um immer auf den obersten Browsing-Kontext zurückzuschalten ([Firefox Bug 1305822](https://bugzil.la/1305822)).
- Verbesserte Checks des Browsing-Kontextes für `WebDriver:SwitchToParentFrame` ([Firefox Bug 1671622](https://bugzil.la/1671622)).
- Ein Hängen bei `WebDriver:Back` wurde behoben, wenn das aktuell ausgewählte [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) entladen wird ([Firefox Bug 1672758](https://bugzil.la/1672758)).

#### Bekannte Fehler

- Nach der Seitennavigation kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "stale element"-Fehler auslösen und kann auch zu einem "no such element"-Fehler führen. Um dies zu verhindern, setzen Sie die Einstellung `marionette.actors.enabled` auf `false` ([Firefox Bug 1684827](https://bugzil.la/1684827)).

## Änderungen für Add-on-Entwickler

- Die API [`browsingData.remove()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) unterstützt jetzt das Entfernen eines Teils der Datentypen nach `cookieStoreId`.
