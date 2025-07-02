---
title: Firefox 79 für Entwickler
slug: Mozilla/Firefox/Releases/79
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 79, die Entwickler betreffen werden. Firefox 79 wurde am 28. Juli 2020 veröffentlicht.

Siehe auch [Firefox 79: The safe return of shared memory, new tooling, and platform updates](https://hacks.mozilla.org/2020/07/firefox-79/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Konsole

- Netzwerknachrichten mit Antwortcodes im Bereich 400-499 und 500-599 werden nun als Fehler betrachtet und werden angezeigt [selbst wenn Response- oder XHR-Filter deaktiviert sind](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox-Bug 1635460](https://bugzil.la/1635460))
- Netzwerknachrichten für Anfragen, die blockiert werden (vom Browser oder einer Erweiterung), sind jetzt mit einem "verboten"-Symbol in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html) formatiert. ([Firefox-Bug 1629875](https://bugzil.la/1629875))

#### Debugger

- ["Blackbox" einer Quelldatei](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html) wird jetzt "ignore" einer Quelldatei genannt. ([Firefox-Bug 1642811](https://bugzil.la/1642811))
- Inline-Vorschau ist jetzt für [Ausnahmen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html) verfügbar. ([Firefox-Bug 1581708](https://bugzil.la/1581708))
- Elemente in den Abschnitten Überwachungs-Ausdrücke und Bereiche haben jetzt Tooltips bei Hover, die ihre Werte anzeigen ([Firefox-Bug 1631545](https://bugzil.la/1631545))
- Im [Call-Stack-Abschnitt](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) gibt es jetzt eine Kontextmenüoption, um **Frame neu zu starten**, um den aktuellen Stack-Frame von seinem Anfang aus auszuführen. ([Firefox-Bug 1594467](https://bugzil.la/1594467))

#### Andere Werkzeuge

- Das neue [Anwendungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) ist jetzt verfügbar, das zunächst Unterstützung für die Inspektion und das Debugging von [Service-Workern](/de/docs/Web/API/Service_Worker_API) und [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest) bietet.
- Der Nachrichten-Tab des Netzwerkmonitors wurde mit dem [Antworten-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) zusammengeführt. ([Firefox-Bug 1636421](https://bugzil.la/1636421))
- Der Zugänglichkeitsinspektor wird automatisch eingeschaltet, wenn Sie seinen Tab aufrufen; Sie müssen ihn nicht mehr explizit aktivieren. ([Firefox-Bug 1602075](https://bugzil.la/1602075))
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode), wenn die Touch-Simulation aktiviert ist, werden Maus-Zieh-Vorgänge jetzt als Touch-Zieh- oder Wischbewegungen interpretiert. ([Firefox-Bug 1621781](https://bugzil.la/1621781))
- Beim [Remote-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) hat die URL-Leiste jetzt **Zurück** und **Vorwärts**-Schaltflächen, um die Navigation im Remote-Browser zu erleichtern. ([Firefox-Bug 1639425](https://bugzil.la/1639425))

### HTML

- Das `<iframe>`-Element unterstützt nun das `sandbox`-Attribut mit dem Token `allow-top-navigation-by-user-activation` ([Firefox-Bug 1359867](https://bugzil.la/1359867)).
- Das Setzen von `target="_blank"` auf `<a>`- und `<area>`-Elemente impliziert jetzt die gleiche Funktionalität wie das zusätzliche Setzen von `rel="noopener"` ([Firefox-Bug 1522083](https://bugzil.la/1522083)).

### CSS

- Externe Stylesheets werden jetzt pro Dokumentgruppe zwischengespeichert ([Firefox-Bug 1599160](https://bugzil.la/1599160)). Firefox minimiert die Abfrage- und Nevalidierung von gecacheten Stylesheets beim Navigieren auf derselben Herkunft. Ein einfaches Neuladen (z. B. `F5`) wird die gecachten CSS-Dateien nicht nevalidieren. Um die aktuellen Versionen der Stylesheets zu laden, laden Sie die Seite neu, indem Sie den Cache umgehen (`Cmd`/`Ctrl` + `F5`).

#### Entfernungen

- Der Wert `no-preference` der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienfunktion wurde aus der [Medienabfragen-Spezifikation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) und aus Firefox entfernt ([Firefox-Bug 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} wurde in einer post-Spectre-sicheren Weise wieder aktiviert. Es ist für cross-origin isolierte Seiten verfügbar ([Firefox-Bug 1619649](https://bugzil.la/1619649)).
  - Um Ihre Seite cross-origin zu isolieren, müssen Sie die neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header setzen.

- {{jsxref("Promise.any()")}} ist jetzt verfügbar ([Firefox-Bug 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}}-Objekte wurden implementiert ([Firefox-Bug 1639246](https://bugzil.la/1639246)).
- [Logische Zuweisungsoperatoren](https://github.com/tc39/proposal-logical-assignment) werden jetzt unterstützt ([Firefox-Bug 1639591](https://bugzil.la/1639591))
  - [Logische nullish Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logische UND-Zuweisung (`&&=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logische ODER-Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}}-Objekte funktionieren jetzt auch mit nicht-geteiltem Speicher ([Firefox-Bug 1630706](https://bugzil.la/1630706)).
- Der [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) unterstützt jetzt die Optionen `dateStyle` und `timeStyle` ([Firefox-Bug 1557718](https://bugzil.la/1557718)).
- Der [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) unterstützt jetzt mehr Zahlensysteme ([Firefox-Bug 1413504](https://bugzil.la/1413504)).

### HTTP

- Die cross-origin Isolation wurde mithilfe der neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header implementiert. Dies ermöglicht Ihnen, auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte und ungedrosselte Timer in [`Performance.now()`](/de/docs/Web/API/Performance/now) zuzugreifen.

### APIs

#### DOM

- Das [`FileReader`](/de/docs/Web/API/FileReader)-Interface löst das [`loadstart`-Ereignis](/de/docs/Web/API/FileReader/loadstart_event) jetzt asynchron aus, gemäß der Spezifikation ([Firefox-Bug 1502403](https://bugzil.la/1502403)).
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) unterstützt jetzt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt als Eingabeparameter sowie ein `SVGMatrix`-Objekt ([Firefox-Bug 1565997](https://bugzil.la/1565997)).

#### Medien, WebRTC und Web Audio

- Firefox unterstützt jetzt Remote-Zeitstempel auf Statistikdatensätzen, deren [`RTCStats.type`](/de/docs/Web/API/RTCStatsReport) `remote-outbound-rtp` ist. Das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuch, das verwendet wird, um diese Statistiken bereitzustellen, enthält jetzt die Eigenschaft [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp), die den Zeitstempel auf dem Remote-Peer angibt, zu dem die Statistiken erfasst oder generiert wurden ([Firefox-Bug 1615191](https://bugzil.la/1615191)).

#### Entfernungen

- Eine Reihe interner Gecko-Ereignisse — darunter `DOMWindowClose` — die versehentlich im Web offengelegt wurden, sind jetzt wie vorgesehen nur intern ([Firefox-Bug 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Bulk-Speicheroperationen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#bulk_memory_operations) sind jetzt ausgeliefert ([Firefox-Bug 1528294](https://bugzil.la/1528294)).
- [WebAssembly-Referenztypen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#reference_types) sind jetzt ausgeliefert ([Firefox-Bug 1637884](https://bugzil.la/1637884)).
- [WebAssembly-Threads](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_threads) (Geteilter Speicher & Atomics) sind jetzt ausgeliefert ([Firefox-Bug 1389458](https://bugzil.la/1389458), [Firefox-Bug 1648685](https://bugzil.la/1648685)).

## Änderungen für Add-on-Entwickler

- Neues API: [`tabs.warmup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([Bug 1402256](https://bugzil.la/1402256))
- [Speicherkontingente werden jetzt für den `sync`-Speicherbereich durchgesetzt](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([Bug 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org Blogbeitrag](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))

## Ältere Versionen

{{Firefox_for_developers}}
