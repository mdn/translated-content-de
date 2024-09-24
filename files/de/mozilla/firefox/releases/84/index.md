---
title: Firefox 84 für Entwickler
slug: Mozilla/Firefox/Releases/84
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 84, die Entwickler betreffen werden. Firefox 84 wurde am 15. Dezember 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Firefox [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) unterstützt jetzt die Anzeige der [Tastenreihenfolge](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) auf einer Webseite. Dies bietet einen besseren Überblick über die Navigation der Seite mittels Tastatur als das Weiterhüpfen durch die Links ([Firefox Fehler 1654956](https://bugzil.la/1654956)).

### HTML

_Keine Änderungen._

### CSS

- Wir haben Unterstützung für komplexe Selektoren zur {{cssxref(":not")}} Pseudoklasse hinzugefügt ([Firefox Fehler 933562](https://bugzil.la/933562)).

#### Entfernungen

- Die proprietären `-moz-default-appearance` Eigenschaftswerte `scrollbar-small` (stattdessen wird `scrollbar-width: thin` verwendet) und `scrollbar` (nur macOS; stattdessen werden `scrollbar-horizontal` und `scrollbar-vertical` verwendet) wurden entfernt ([Firefox Fehler 1673132](https://bugzil.la/1673132)).

### JavaScript

- Benutzerdefinierte Datums-/Zeitformate, die als Optionen an den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) übergeben werden, können jetzt `fractionalSecondDigits` enthalten — die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden ([Firefox Fehler 1645107](https://bugzil.la/1645107)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Firefox stellt jetzt sicher, dass `localhost` URLs — wie `http://localhost/` und `http://dev.localhost/` — sich auf die Loopback-Schnittstelle des lokalen Hosts beziehen (z.B. `http://127.0.0.1`). Dadurch wird angenommen, dass von `localhost` geladene Ressourcen sicher bereitgestellt wurden (siehe [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)) und nicht als [mixed content](/de/docs/Web/Security/Mixed_content) behandelt werden ([Firefox Fehler 1220810](https://bugzil.la/1220810), [Firefox Fehler 1488740](https://bugzil.la/1488740)).

### APIs

- Wir haben Unterstützung für die {{domxref('PerformancePaintTiming')}} Schnittstelle der Paint Timing API hinzugefügt ([Firefox Fehler 1518999](https://bugzil.la/1518999)).
- Die {{domxref('Navigator.registerProtocolHandler()')}} Methode akzeptiert jetzt nur noch zwei Parameter: `scheme` und `url`. `title` wurde entfernt ([Firefox Fehler 1631464](https://bugzil.la/1631464)).

#### Medien, WebRTC und Web Audio

- Die {{domxref('MediaRecorder.start()')}} Methode wirft jetzt einen `InvalidModificationError`, wenn sich die Anzahl der Spuren im Stream, der aufgenommen wird, geändert hat ([Firefox Fehler 1581139](https://bugzil.la/1581139)).

#### Entfernungen

- Der Anwendungscache wurde entfernt — Entwickler sollten stattdessen die [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwenden ([Firefox Fehler 1619673](https://bugzil.la/1619673)).

### WebAssembly

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Unterstützung für den Chrome-Bereich für `WebDriver:PerformActions` und `WebDriver:ReleaseActions` wurde hinzugefügt ([Firefox Fehler 1365886](https://bugzil.la/1365886)).
- Die neue, mit Fission kompatible API ist jetzt standardmäßig aktiviert. Um zur früheren API zurückzukehren, muss die Einstellung `marionette.actors.enabled` auf `false` gesetzt werden ([Firefox Fehler 1669169](https://bugzil.la/1669169)).
- `WebDriver:SwitchToWindow` wurde korrigiert, um immer zum obersten Browsing-Kontext zurückzukehren ([Firefox Fehler 1305822](https://bugzil.la/1305822)).
- Verbesserte Überprüfungen des Browsing-Kontextes für `WebDriver:SwitchToParentFrame` ([Firefox Fehler 1671622](https://bugzil.la/1671622)).
- Ein Hängenzustand für `WebDriver:Back`, der auftritt, wenn das derzeit ausgewählte [`<iframe>`](/de/docs/Web/HTML/Element/iframe) entladen wird, wurde behoben ([Firefox Fehler 1672758](https://bugzil.la/1672758)).

#### Bekannte Fehler

- Nach der Seitennavigation kann der Zugriff auf ein zuvor abgerufenes Element möglicherweise nicht immer einen "stale element" Fehler auslösen und kann auch zu einem "no such element" Fehler führen. Um dies zu verhindern, setzen Sie die Einstellung `marionette.actors.enabled` auf `false` ([Firefox Fehler 1684827](https://bugzil.la/1684827)).

## Änderungen für Add-on-Entwickler

- Die API [`browsingData.remove()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) unterstützt jetzt das Entfernen einer Teilmenge von Datentypen nach `cookieStoreId`.

## Ältere Versionen

{{Firefox_for_developers}}
