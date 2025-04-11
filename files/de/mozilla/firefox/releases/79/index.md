---
title: Firefox 79 für Entwickler
slug: Mozilla/Firefox/Releases/79
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 79, die Entwickler betreffen werden. Firefox 79 wurde am 28. Juli 2020 veröffentlicht.

Siehe auch [Firefox 79: The safe return of shared memory, new tooling, and platform updates](https://hacks.mozilla.org/2020/07/firefox-79/) auf Mozilla Hacks.

## Änderungen für Web-Entwickler

### Entwickler-Tools

#### Konsole

- Netzwerk-Nachrichten mit Antwortcodes im Bereich 400-499 und 500-599 werden nun als Fehler betrachtet und angezeigt [selbst wenn Response- oder XHR-Filter deaktiviert sind](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox-Bug 1635460](https://bugzil.la/1635460))
- Netzwerk-Nachrichten für Anfragen, die blockiert wurden (durch den Browser oder eine Erweiterung), werden nun mit einem "verbotenen" Symbol in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html) dargestellt. ([Firefox-Bug 1629875](https://bugzil.la/1629875))

#### Debugger

- ["Blackbox" für eine Quelldatei](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html) heißt jetzt "ignore" für eine Quelldatei. ([Firefox-Bug 1642811](https://bugzil.la/1642811))
- Inline-Vorschauen sind jetzt für [Ausnahmen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html) verfügbar. ([Firefox-Bug 1581708](https://bugzil.la/1581708))
- Elemente in den Bereichen Beobachtungsausdrücke und Geltungsbereiche haben jetzt beim Überfahren mit der Maus Tooltips, die ihre Werte anzeigen ([Firefox-Bug 1631545](https://bugzil.la/1631545))
- Im [Rückrufstapel-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) gibt es jetzt eine Kontextmenü-Option zum **Neustart des Rahmens**, um den aktuellen Stapelrahmen von Beginn an auszuführen. ([Firefox-Bug 1594467](https://bugzil.la/1594467))

#### Andere Werkzeuge

- Das neue [Anwendungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) ist jetzt verfügbar, das ursprünglich Unterstützung für die Inspektion und das Debuggen von [Service Workern](/de/docs/Web/API/Service_Worker_API) und [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest) bietet.
- Der Meldungen-Tab des Netzwerkmonitors wurde mit dem [Antworten-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) zusammengeführt. ([Firefox-Bug 1636421](https://bugzil.la/1636421))
- Der Barrierefreiheitsinspektor wird automatisch aktiviert, wenn Sie seinen Tab aufrufen; Sie müssen ihn nicht mehr explizit aktivieren. ([Firefox-Bug 1602075](https://bugzil.la/1602075))
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode), wenn die Touch-Simulation aktiviert ist, werden Maus-Zieh-Ereignisse jetzt als Touch-Zieh- oder Wisch-Ereignisse interpretiert. ([Firefox-Bug 1621781](https://bugzil.la/1621781))
- Beim [Remote-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) hat die Adressleiste jetzt **Zurück** und **Vorwärts** Schaltflächen, um die Navigation im Remote-Browser zu erleichtern. ([Firefox-Bug 1639425](https://bugzil.la/1639425))

### HTML

- Das [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element unterstützt jetzt im `sandbox`-Attribut das Token `allow-top-navigation-by-user-activation` ([Firefox-Bug 1359867](https://bugzil.la/1359867)).
- Das Setzen von `target="_blank"` auf [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) und [`<area>`](/de/docs/Web/HTML/Reference/Elements/area) Elementen sorgt implizit für dasselbe Verhalten wie das zusätzliche Setzen von `rel="noopener"` ([Firefox-Bug 1522083](https://bugzil.la/1522083)).

### CSS

- Externe Stylesheets werden jetzt pro Dokumentengruppe zwischengespeichert ([Firefox-Bug 1599160](https://bugzil.la/1599160)). Firefox minimiert das Abrufen und die Neubewertung zwischengespeicherter Stylesheets beim Navigieren auf Seiten desselben Ursprungs. Ein einfaches Neuladen (zum Beispiel `F5`) wird die zwischengespeicherten CSS-Dateien nicht neu bewerten. Um aktuelle Versionen der Stylesheets zu laden, laden Sie die Seite mit Umgehung des Caches neu (`Cmd`/`Ctrl` + `F5`).

#### Entfernen

- Der `no-preference`-Wert der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfunktion wurde aus der [Medienabfragen-Spezifikation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) und aus Firefox entfernt ([Firefox-Bug 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} wurde auf eine post-Spectre-sichere Weise wieder aktiviert. Es ist für Cross-Origin isolierte Seiten verfügbar ([Firefox-Bug 1619649](https://bugzil.la/1619649)).

  - Um Ihre Seite Cross-Origin zu isolieren, müssen Sie die neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header setzen.

- {{jsxref("Promise.any()")}} ist jetzt verfügbar ([Firefox-Bug 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}}-Objekte wurden implementiert ([Firefox-Bug 1639246](https://bugzil.la/1639246)).
- [Logische Zuweisungsoperatoren](https://github.com/tc39/proposal-logical-assignment) werden jetzt unterstützt ([Firefox-Bug 1639591](https://bugzil.la/1639591))

  - [Logische Nullish Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logische UND Zuweisung (`&&=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logische ODER Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}}-Objekte funktionieren jetzt auch mit nicht-geteiltem Speicher ([Firefox-Bug 1630706](https://bugzil.la/1630706)).
- Der [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) unterstützt jetzt die `dateStyle` und `timeStyle` Optionen ([Firefox-Bug 1557718](https://bugzil.la/1557718)).
- Der [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) unterstützt jetzt mehr Zahlensysteme ([Firefox-Bug 1413504](https://bugzil.la/1413504)).

### HTTP

- Cross-Origin-Isolierung wurde mit den neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Headern implementiert. Dies ermöglicht den Zugriff auf bestimmte Funktionen, wie etwa {{jsxref("SharedArrayBuffer")}}-Objekte und nicht gedrosselte Timer in [`Performance.now()`](/de/docs/Web/API/Performance/now).

### APIs

#### DOM

- Das [`FileReader`](/de/docs/Web/API/FileReader)-Interface's [`loadstart`-Ereignis](/de/docs/Web/API/FileReader/loadstart_event) wird jetzt asynchron ausgelöst, gemäß der Spezifikation ([Firefox-Bug 1502403](https://bugzil.la/1502403)).
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) unterstützt jetzt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt als Eingabeparameter sowie ein `SVGMatrix` Objekt ([Firefox-Bug 1565997](https://bugzil.la/1565997)).

#### Medien, WebRTC und Web Audio

- Firefox unterstützt nun Remote-Zeitstempel für Statistikdatensätze, deren [`RTCStats.type`](/de/docs/Web/API/RTCStatsReport) `remote-outbound-rtp` ist. Das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Wörterbuch, das zur Bereitstellung dieser Statistiken verwendet wird, enthält jetzt die Eigenschaft [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp), die den Zeitstempel des entfernten Peers angibt, zu dem die Statistiken erfasst oder generiert wurden ([Firefox-Bug 1615191](https://bugzil.la/1615191)).

#### Entfernen

- Eine Reihe von internen Gecko-Ereignissen — einschließlich `DOMWindowClose` — die versehentlich im Web freigegeben wurden, sind jetzt wie vorgesehen nur intern ([Firefox-Bug 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Bulk memory operations](/de/docs/WebAssembly/Guides/Understanding_the_text_format#bulk_memory_operations) sind nun ausgeliefert ([Firefox-Bug 1528294](https://bugzil.la/1528294)).
- [WebAssembly Reference types](/de/docs/WebAssembly/Guides/Understanding_the_text_format#reference_types) sind nun ausgeliefert ([Firefox-Bug 1637884](https://bugzil.la/1637884)).
- [WebAssembly Threads](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_threads) (Gemeinsamer Speicher & Atomics) sind nun ausgeliefert ([Firefox-Bug 1389458](https://bugzil.la/1389458), [Firefox-Bug 1648685](https://bugzil.la/1648685)).

## Änderungen für Add-on-Entwickler

- Neue API: [`tabs.warmup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([Bug 1402256](https://bugzil.la/1402256))
- [Speicherquoten werden nun für den `sync`-Speicherbereich durchgesetzt](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([Bug 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org Blogbeitrag](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))

## Ältere Versionen

{{Firefox_for_developers}}
