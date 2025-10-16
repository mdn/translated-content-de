---
title: Firefox 79 Versionshinweise für Entwickler
short-title: Firefox 79
slug: Mozilla/Firefox/Releases/79
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 79, die Entwickler betreffen. Firefox 79 wurde am 28. Juli 2020 veröffentlicht.

Siehe auch [Firefox 79: Die sichere Rückkehr des gemeinsamen Speichers, neue Werkzeuge und Plattform-Updates](https://hacks.mozilla.org/2020/07/firefox-79/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Konsole

- Netzwerkmeldungen mit Antwortcodes im Bereich 400-499 und 500-599 gelten jetzt als Fehler und werden angezeigt [auch wenn Response oder XHR-Filter deaktiviert sind](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox Bug 1635460](https://bugzil.la/1635460))
- Netzwerkmeldungen für Anfragen, die blockiert wurden (durch den Browser oder eine Erweiterung), werden jetzt mit einem "verboten"-Symbol in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html) angezeigt. ([Firefox Bug 1629875](https://bugzil.la/1629875))

#### Debugger

- „Blackbox“ einer Quelldatei wird nun als „Ignorieren“ einer Quelldatei bezeichnet. ([Firefox Bug 1642811](https://bugzil.la/1642811))
- Inline-Vorschau ist jetzt verfügbar für [Ausnahmen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html). ([Firefox Bug 1581708](https://bugzil.la/1581708))
- Elemente im Bereich Watch Expressions und Scopes haben jetzt Tooltips bei Hover, die ihre Werte anzeigen ([Firefox Bug 1631545](https://bugzil.la/1631545))
- Im [Call Stack Abschnitt](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) gibt es jetzt eine Kontextmenüoption, um **Frame neu starten** zu wählen, um den aktuellen Stapelrahmen von Beginn an auszuführen. ([Firefox Bug 1594467](https://bugzil.la/1594467))

#### Andere Werkzeuge

- Das neue [Anwendungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) ist jetzt verfügbar, das anfänglich Unterstützung für die Inspektion und das Debugging von [Service Workern](/de/docs/Web/API/Service_Worker_API) und [Web App Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) bietet.
- Der Nachrichten-Tab des Netzwerkanalysators wurde mit dem [Antworten-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) zusammengeführt. ([Firefox Bug 1636421](https://bugzil.la/1636421))
- Der Barrierefreiheitsinspektor wird automatisch aktiviert, wenn Sie dessen Tab aufrufen; es ist nicht mehr notwendig, ihn explizit zu aktivieren. ([Firefox Bug 1602075](https://bugzil.la/1602075))
- In [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode), wenn die Touch-Simulation aktiviert ist, werden Maus-Zieh-Ereignisse jetzt als Touch-Zieh- oder Wisch-Ereignisse interpretiert. ([Firefox Bug 1621781](https://bugzil.la/1621781))
- Beim [Fern-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) hat die URL-Leiste jetzt **Zurück** und **Vorwärts**-Tasten, um die Navigation im entfernten Browser zu erleichtern. ([Firefox Bug 1639425](https://bugzil.la/1639425))

### HTML

- Das `<iframe>`-Element hat jetzt einen `sandbox`-Attribut, das das `allow-top-navigation-by-user-activation` Token unterstützt ([Firefox Bug 1359867](https://bugzil.la/1359867)).
- Das Setzen von `target="_blank"` auf `<a>` und `<area>`-Elementen bietet implizit das gleiche Verhalten, wie auch das Setzen von `rel="noopener"` ([Firefox Bug 1522083](https://bugzil.la/1522083)).

### CSS

- Externe Stylesheets werden jetzt pro Dokumentgruppe zwischengespeichert ([Firefox Bug 1599160](https://bugzil.la/1599160)). Firefox wird die Abrufe und Neuauswertungen von zwischengespeicherten Stylesheets minimieren, wenn Sie auf Seiten innerhalb desselben Ursprungs navigieren. Ein einfaches Neuladen (zum Beispiel `F5`) wird die zwischengespeicherten CSS-Dateien nicht neu validieren. Um die aktuellen Versionen der Stylesheets zu laden, laden Sie die Seite mit Umgehung des Cache neu (`Cmd`/`Ctrl` + `F5`).

#### Entferntes

- Der `prefers-color-scheme` Medien-Feature-Wert `no-preference` wurde aus der [medienabfragen Spec](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) sowie aus Firefox entfernt ([Firefox Bug 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} wurde auf eine nach Spectre sichere Art und Weise wieder aktiviert. Er ist für Cross-Origin isolierte Seiten verfügbar ([Firefox Bug 1619649](https://bugzil.la/1619649)).
  - Um Ihre Seite Cross-Origin zu isolieren, müssen Sie die neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header setzen.
- {{jsxref("Promise.any()")}} ist jetzt verfügbar ([Firefox Bug 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}} Objekte wurden implementiert ([Firefox Bug 1639246](https://bugzil.la/1639246)).
- [Logische Zuweisungsoperatoren](https://github.com/tc39/proposal-logical-assignment) werden jetzt unterstützt ([Firefox Bug 1639591](https://bugzil.la/1639591))
  - [Logische Nullish-Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logische UND-Zuweisung (`&&=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logische ODER-Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}} Objekte funktionieren jetzt auch mit nicht geteiltem Speicher ([Firefox Bug 1630706](https://bugzil.la/1630706)).
- Der [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) unterstützt jetzt die Optionen `dateStyle` und `timeStyle` ([Firefox Bug 1557718](https://bugzil.la/1557718)).
- Der [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) unterstützt jetzt mehr Nummerierungssysteme ([Firefox Bug 1413504](https://bugzil.la/1413504)).

### HTTP

- Cross-Origin Isolation wurde mithilfe der neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header implementiert. Dies ermöglicht den Zugriff auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte und nicht gedrosselte Timer in [`Performance.now()`](/de/docs/Web/API/Performance/now).

### APIs

#### DOM

- Das [`FileReader`](/de/docs/Web/API/FileReader) Interface's [`loadstart` Ereignis](/de/docs/Web/API/FileReader/loadstart_event) wird jetzt asynchron gemäß Spezifikation ausgelöst ([Firefox Bug 1502403](https://bugzil.la/1502403)).
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) unterstützt jetzt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt als Eingabeparameter sowie ein `SVGMatrix` Objekt ([Firefox Bug 1565997](https://bugzil.la/1565997)).

#### Medien, WebRTC und Web Audio

- Firefox unterstützt jetzt Remote-Zeitstempel auf Statistik-Aufzeichnungen, deren [`RTCStats.type`](/de/docs/Web/API/RTCStatsReport) `remote-outbound-rtp` ist. Das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Wörterbuch, das verwendet wird, um diese Statistiken bereitzustellen, enthält jetzt die [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) Eigenschaft, welche die Zeitstempel auf dem entfernten Peer angibt, zu denen die Statistiken erhoben oder erstellt wurden ([Firefox Bug 1615191](https://bugzil.la/1615191)).

#### Entferntes

- Eine Anzahl von internen Gecko-Ereignissen — einschließlich `DOMWindowClose` — die versehentlich im Web freigelegt wurden, sind jetzt wie beabsichtigt ausschließlich intern ([Firefox Bug 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Massenspeicheroperationen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#bulk_memory_operations) sind jetzt verfügbar ([Firefox Bug 1528294](https://bugzil.la/1528294)).
- [WebAssembly Referenztypen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#reference_types) sind jetzt verfügbar ([Firefox Bug 1637884](https://bugzil.la/1637884)).
- [WebAssembly Threads](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_threads) (Shared Memory & Atomics) sind jetzt verfügbar ([Firefox Bug 1389458](https://bugzil.la/1389458), [Firefox Bug 1648685](https://bugzil.la/1648685)).

## Änderungen für Add-on-Entwickler

- Neue API: [`tabs.warmup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([Bug 1402256](https://bugzil.la/1402256))
- [Speicherquoten werden jetzt für den `sync` Speicherbereich durchgesetzt](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([Bug 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org Blog-Post](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))
