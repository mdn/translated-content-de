---
title: Firefox 79 für Entwickler
slug: Mozilla/Firefox/Releases/79
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 79, die Entwickler betreffen. Firefox 79 wurde am 28. Juli 2020 veröffentlicht.

Siehe auch [Firefox 79: Die sichere Rückkehr des gemeinsamen Speichers, neue Tools und Plattform-Updates](https://hacks.mozilla.org/2020/07/firefox-79/) auf Mozilla Hacks.

## Änderungen für Web-Entwickler

### Entwickler-Tools

#### Konsole

- Netzwerkmeldungen mit Antwortcodes im Bereich von 400-499 und 500-599 werden jetzt als Fehler betrachtet und angezeigt [selbst wenn die Filter Response oder XHR deaktiviert sind](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox Fehler 1635460](https://bugzil.la/1635460))
- Netzwerkmeldungen für blockierte Anfragen (durch den Browser oder eine Erweiterung) sind jetzt mit einem "verboten"-Symbol in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html) versehen. ([Firefox Fehler 1629875](https://bugzil.la/1629875))

#### Debugger

- Ein Quelltext kann jetzt als "ignorieren" anstelle von "Blackbox" markiert werden. ([Firefox Fehler 1642811](https://bugzil.la/1642811))
- Die Inline-Vorschau ist jetzt für [Ausnahmen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html) verfügbar. ([Firefox Fehler 1581708](https://bugzil.la/1581708))
- Elemente in den Abschnitten Überwachungs-Ausdrücke und Bereiche zeigen jetzt ihre Werte in Tooltips beim Hover an ([Firefox Fehler 1631545](https://bugzil.la/1631545))
- Im [Bereich Anrufstapel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack) gibt es jetzt eine Kontextmenüoption, um **Rahmen neu starten** zu wählen, um den aktuellen Stapelrahmen von seinem Anfang an auszuführen. ([Firefox Fehler 1594467](https://bugzil.la/1594467))

#### Andere Werkzeuge

- Das neue [Anwendungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) ist jetzt verfügbar, das zunächst Inspektions- und Debugging-Unterstützung für [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Web-App-Manifeste](/de/docs/Web/Manifest) bietet.
- Die Nachrichten-Registerkarte des Netzwerkmonitors wurde mit der [Antworten-Registerkarte](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) zusammengeführt. ([Firefox Fehler 1636421](https://bugzil.la/1636421))
- Der Zugänglichkeitsinspektor wird automatisch aktiviert, wenn Sie dessen Registerkarte aufrufen; es ist nicht mehr notwendig, ihn explizit zu aktivieren. ([Firefox Fehler 1602075](https://bugzil.la/1602075))
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode) werden Mouse-Drag-Ereignisse jetzt als Touch-Drag- oder Swipe-Ereignisse interpretiert, wenn die Touch-Simulation aktiviert ist. ([Firefox Fehler 1621781](https://bugzil.la/1621781))
- Beim [Remote-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) verfügt die URL-Leiste jetzt über **Zurück**- und **Vorwärts**-Schaltflächen zur Unterstützung der Navigation im Remote-Browser. ([Firefox Fehler 1639425](https://bugzil.la/1639425))

### HTML

- Das `sandbox`-Attribut des [`<iframe>`](/de/docs/Web/HTML/Element/iframe)-Elements unterstützt jetzt das Token `allow-top-navigation-by-user-activation` ([Firefox Fehler 1359867](https://bugzil.la/1359867)).
- Das Setzen von `target="_blank"` auf `<a>`- und `<area>`-Elementen führt implizit zum gleichen Verhalten, als wenn auch `rel="noopener"` gesetzt wäre ([Firefox Fehler 1522083](https://bugzil.la/1522083)).

### CSS

- Externe Stylesheets werden jetzt pro Dokumentgruppe gecached ([Firefox Fehler 1599160](https://bugzil.la/1599160)). Firefox wird das Abrufen und die Revalidierung gecachter Stylesheets beim Navigieren auf Seiten derselben Herkunft minimieren. Ein einfaches Neuladen (zum Beispiel `F5`) wird die gecachten CSS-Dateien nicht revalidieren. Um aktuelle Versionen der Stylesheets zu laden, laden Sie die Seite unter Umgehung des Caches neu (`Cmd`/`Ctrl` + `F5`).

#### Entfernt

- Der `no-preference` Wert der Media-Feature `prefers-color-scheme` wurde aus der [Media Queries Spezifikation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) und aus Firefox entfernt ([Firefox Fehler 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} wurde in einer gegen Spectre sicheren Weise erneut aktiviert. Es steht seitenübergreifend isolierten Seiten zur Verfügung ([Firefox Fehler 1619649](https://bugzil.la/1619649)).

  - Um Ihre Seite seitenübergreifend zu isolieren, müssen Sie die neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Header setzen.

- {{jsxref("Promise.any()")}} ist jetzt verfügbar ([Firefox Fehler 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}} Objekte wurden implementiert ([Firefox Fehler 1639246](https://bugzil.la/1639246)).
- [Logische Zuweisungsoperatoren](https://github.com/tc39/proposal-logical-assignment) werden jetzt unterstützt ([Firefox Fehler 1639591](https://bugzil.la/1639591))

  - [Logische nullish Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logische UND-Zuweisung (`&&=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logische ODER-Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}} Objekte funktionieren jetzt auch mit nicht-teilbarem Speicher ([Firefox Fehler 1630706](https://bugzil.la/1630706)).
- Der [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) unterstützt jetzt die Optionen `dateStyle` und `timeStyle` ([Firefox Fehler 1557718](https://bugzil.la/1557718)).
- Der [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) unterstützt jetzt mehr Zahlensysteme ([Firefox Fehler 1413504](https://bugzil.la/1413504)).

### HTTP

- Die seitenübergreifende Isolation wurde mit den neuen {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) und {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) Headern implementiert. Dies ermöglicht Ihnen den Zugriff auf bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}} Objekte und unbeschränkte Timer in [`Performance.now()`](/de/docs/Web/API/Performance/now).

### APIs

#### DOM

- Das `loadstart`-Ereignis der [`FileReader`](/de/docs/Web/API/FileReader) Schnittstelle wird jetzt asynchron gesendet, wie in der Spezifikation vorgesehen ([Firefox Fehler 1502403](https://bugzil.la/1502403)).
- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform) unterstützt jetzt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt als Eingabeparameter sowie ein `SVGMatrix` Objekt ([Firefox Fehler 1565997](https://bugzil.la/1565997)).

#### Medien, WebRTC und Web Audio

- Firefox unterstützt jetzt Remote-Zeitstempel auf Statistikdatensätzen, deren [`RTCStats.type`](/de/docs/Web/API/RTCStatsReport) `remote-outbound-rtp` ist. Das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Wörterbuch, das für diese Statistiken verwendet wird, enthält nun die [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) Eigenschaft, die den Zeitstempel beim entfernten Peer angibt, zu dem die Statistiken erhoben oder generiert wurden ([Firefox Fehler 1615191](https://bugzil.la/1615191)).

#### Entfernt

- Eine Reihe interner Gecko-Ereignisse — einschließlich `DOMWindowClose` — die versehentlich dem Web offengelegt wurden, sind jetzt wieder wie beabsichtigt nur intern ([Firefox Fehler 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Bulk Memory Operationen](/de/docs/WebAssembly/Understanding_the_text_format#bulk_memory_operations) sind jetzt ausgeliefert ([Firefox Fehler 1528294](https://bugzil.la/1528294)).
- [WebAssembly Referenztypen](/de/docs/WebAssembly/Understanding_the_text_format#reference_types) sind jetzt ausgeliefert ([Firefox Fehler 1637884](https://bugzil.la/1637884)).
- [WebAssembly Threads](/de/docs/WebAssembly/Understanding_the_text_format#webassembly_threads) (Shared Memory & Atomics) sind jetzt ausgeliefert ([Firefox Fehler 1389458](https://bugzil.la/1389458), [Firefox Fehler 1648685](https://bugzil.la/1648685)).

## Änderungen für Add-on-Entwickler

- Neue API: [`tabs.warmup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([Fehler 1402256](https://bugzil.la/1402256))
- [Speicherquoten werden jetzt durchgesetzt für den `sync` Speicherbereich](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([Fehler 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org Blogbeitrag](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))

## Ältere Versionen

{{Firefox_for_developers}}
