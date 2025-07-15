---
title: Firefox 79 für Entwickler
short-title: Firefox 79
slug: Mozilla/Firefox/Releases/79
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 79, die Entwickler betreffen. Firefox 79 wurde am 28. Juli 2020 veröffentlicht.

Siehe auch [Firefox 79: Die sichere Rückkehr des Shared Memory, neue Tools und Plattformaktualisierungen](https://hacks.mozilla.org/2020/07/firefox-79/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

#### Konsole

- Netzwerkmeldungen mit Antwortcodes im Bereich 400-499 und 500-599 werden jetzt als Fehler betrachtet und werden angezeigt [auch wenn die Filter für Antwort oder XHR deaktiviert sind](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox Bug 1635460](https://bugzil.la/1635460))
- Netzwerkmeldungen für Anfragen, die blockiert werden (durch den Browser oder eine Erweiterung), werden jetzt mit einem Symbol "verboten" in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html) gestylt. ([Firefox Bug 1629875](https://bugzil.la/1629875))

#### Debugger

- ["Blackbox" einer Quelldatei](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html) wird jetzt als "ignorieren" einer Quelldatei bezeichnet. ([Firefox Bug 1642811](https://bugzil.la/1642811))
- Inline-Vorschau ist jetzt bei [Ausnahmen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html) verfügbar. ([Firefox Bug 1581708](https://bugzil.la/1581708))
- Elemente in den Abschnitten "Watch Expressions" und "Scopes" haben jetzt bei Hover Tooltips, die ihre Werte anzeigen. ([Firefox Bug 1631545](https://bugzil.la/1631545))
- Im [Call Stack-Abschnitt](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) gibt es jetzt eine Kontextmenüoption zum **Neustarten des Frames**, um den aktuellen Stack-Frame von Beginn an auszuführen. ([Firefox Bug 1594467](https://bugzil.la/1594467))

#### Andere Tools

- Das neue [Anwendungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) ist jetzt verfügbar, das zunächst Inspektions- und Debugging-Support für [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) bietet.
- Die Registerkarte "Messages" des Netzwerkmonitors wurde mit der [Antworten-Registerkarte](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) zusammengeführt. ([Firefox Bug 1636421](https://bugzil.la/1636421))
- Der Accessibility Inspector wird automatisch aktiviert, wenn Sie seine Registerkarte aufrufen; Sie müssen ihn nicht mehr explizit aktivieren. ([Firefox Bug 1602075](https://bugzil.la/1602075))
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode) werden Maus-Zieh-Ereignisse jetzt als Touch-Zieh- oder Wisch-Ereignisse interpretiert, wenn die Touch-Simulation aktiviert ist. ([Firefox Bug 1621781](https://bugzil.la/1621781))
- Beim [Remote-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) hat die URL-Leiste jetzt **Zurück**- und **Vorwärts**-Schaltflächen, um die Navigation im Remote-Browser zu erleichtern. ([Firefox Bug 1639425](https://bugzil.la/1639425))

### HTML

- Das `<iframe>`-Element unterstützt jetzt das `sandbox`-Attribut mit dem Token `allow-top-navigation-by-user-activation` ([Firefox Bug 1359867](https://bugzil.la/1359867)).
- Das Setzen von `target="_blank"` bei `<a>`- und `<area>`-Elementen hat implizit das gleiche Verhalten wie das zusätzliche Setzen von `rel="noopener"` ([Firefox Bug 1522083](https://bugzil.la/1522083)).

### CSS

- Externe Stylesheets werden jetzt pro Dokumentgruppe zwischengespeichert ([Firefox Bug 1599160](https://bugzil.la/1599160)). Firefox minimiert somit das Abrufen und Verifizieren zwischengespeicherter Stylesheets beim Navigieren auf Seiten desselben Ursprungs. Ein einfaches Neuladen (zum Beispiel `F5`) wird die zwischengespeicherten CSS-Dateien nicht erneut validieren. Um aktuelle Versionen der Stylesheets zu laden, laden Sie die Seite unter Umgehung des Caches neu (`Cmd`/`Ctrl` + `F5`).

#### Entfernungen

- Der `no-preference`-Wert der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Feature wurde aus der [Media-Queries-Spezifikation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) entfernt und in Firefox entfernt ([Firefox Bug 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} wurde in einer post-Spectre-sicheren Art und Weise wieder aktiviert. Es ist für Cross-Origin isolierte Seiten verfügbar ([Firefox Bug 1619649](https://bugzil.la/1619649)).
  - Um Ihre Seite Cross-Origin zu isolieren, müssen Sie die neuen Header {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) einstellen.

- {{jsxref("Promise.any()")}} ist jetzt verfügbar ([Firefox Bug 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}}-Objekte wurden implementiert ([Firefox Bug 1639246](https://bugzil.la/1639246)).
- [Logische Zuweisungsoperatoren](https://github.com/tc39/proposal-logical-assignment) werden jetzt unterstützt ([Firefox Bug 1639591](https://bugzil.la/1639591))
  - [Logische nullish Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logische UND-Zuweisung (`&&=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logische OR-Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}}-Objekte funktionieren jetzt auch mit nicht-geteiltem Speicher ([Firefox Bug 1630706](https://bugzil.la/1630706)).
- Der [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) unterstützt jetzt die Optionen `dateStyle` und `timeStyle` ([Firefox Bug 1557718](https://bugzil.la/1557718)).
- Der [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) unterstützt jetzt mehr Zahlensysteme ([Firefox Bug 1413504](https://bugzil.la/1413504)).

### HTTP

- Die Cross-Origin-Isolation wurde mit den neuen Headern {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) implementiert. Dies ermöglicht den Zugriff auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte und nicht gedrosselte Timer in [`Performance.now()`](/de/docs/Web/API/Performance/now).

### APIs

#### DOM

- Das [`FileReader`](/de/docs/Web/API/FileReader)-Interface löst jetzt das [`loadstart`-Event](/de/docs/Web/API/FileReader/loadstart_event) asynchron aus, wie in der Spezifikation vorgesehen ([Firefox Bug 1502403](https://bugzil.la/1502403)).
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) unterstützt jetzt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt als Eingabeparameter sowie ein `SVGMatrix`-Objekt ([Firefox Bug 1565997](https://bugzil.la/1565997)).

#### Medien, WebRTC und Web Audio

- Firefox unterstützt jetzt Remote-Zeitstempel auf Statistikdatensätzen, deren [`RTCStats.type`](/de/docs/Web/API/RTCStatsReport) `remote-outbound-rtp` ist. Das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuch, das zur Bereitstellung dieser Statistiken verwendet wird, enthält jetzt die [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp)-Eigenschaft, die den Zeitstempel des Remote-Peers angibt, zu dem die Statistiken gesammelt oder erstellt wurden ([Firefox Bug 1615191](https://bugzil.la/1615191)).

#### Entfernungen

- Eine Reihe interner Gecko-Events — einschließlich `DOMWindowClose` — die versehentlich dem Web zugänglich gemacht wurden, sind jetzt nur noch intern, wie beabsichtigt ([Firefox Bug 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Bulk Memory-Operationen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#bulk_memory_operations) sind jetzt verfügbar ([Firefox Bug 1528294](https://bugzil.la/1528294)).
- [WebAssembly Referenztypen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#reference_types) sind jetzt verfügbar ([Firefox Bug 1637884](https://bugzil.la/1637884)).
- [WebAssembly Threads](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_threads) (Shared Memory & Atomics) sind jetzt verfügbar ([Firefox Bug 1389458](https://bugzil.la/1389458), [Firefox Bug 1648685](https://bugzil.la/1648685)).

## Änderungen für Add-on-Entwickler

- Neue API: [`tabs.warmup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([Bug 1402256](https://bugzil.la/1402256))
- [Speicherquoten werden jetzt für den `sync` Speicherbereich durchgesetzt](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([Bug 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org Blogbeitrag](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))
