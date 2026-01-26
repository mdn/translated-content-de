---
title: Firefox 37 Versionshinweise für Entwickler
short-title: Firefox 37
slug: Mozilla/Firefox/Releases/37
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 37 wurde am 31. März 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Sicherheits-Panel im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Animations-Panel im Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-37)
- _Unterstützung für das Ausführen eines benutzerdefinierten Build-Schritts in WebIDE_

[Alle Devtools-Bugs, die zwischen Firefox 36 und Firefox 37 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-01-12&chfield=resolution&query_format=advanced&chfieldfrom=2014-11-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11892733).

### CSS

- `display: contents` ist jetzt standardmäßig aktiviert ([Firefox Bug 1102374](https://bugzil.la/1102374) und [Firefox Bug 1105369](https://bugzil.la/1105369)).
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout/Using) funktioniert jetzt auf Elementen mit `display: table-caption` ([Firefox Bug 1109571](https://bugzil.la/1109571)).
- Relative Positionierung (`position: relative`) von Tabellenspalten wurde implementiert ([Firefox Bug 35168](https://bugzil.la/35168)).
- Das Quirks-Mode-Verhalten von {{cssxref("empty-cells")}} wurde entfernt: Es ist jetzt standardmäßig auf `show` wie im Standardmodus ([Firefox Bug 1020400](https://bugzil.la/1020400)).

### HTML

- Der Wert `<a rel="noreferrer">` funktioniert jetzt auch, wenn der Link in einem neuen Tab geöffnet wird ([Firefox Bug 1031264](https://bugzil.la/1031264)).
- Die `'.'` gefolgt von der Erweiterung ist jetzt in `<input accept>` erlaubt: Wird sie verwendet, filtert ein Dateiauswahldialog mit dieser angegebenen Erweiterung, um dem Benutzer vorgeschlagen zu werden ([Firefox Bug 826176](https://bugzil.la/826176)).

### JavaScript

- Die {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} Konstruktoren ignorieren jetzt das null Iterable ([Firefox Bug 1092538](https://bugzil.la/1092538)).
- Die {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} Konstruktoren unterstützen jetzt monkey-gepatchte `prototype.set` oder `prototype.add` ([Firefox Bug 804279](https://bugzil.la/804279)).
- Die nicht-standardmäßige Methode `String.prototype.quote()` wurde entfernt ([Firefox Bug 1103181](https://bugzil.la/1103181)).
- Die {{jsxref("RegExp.prototype.flags")}}-Eigenschaft wurde implementiert ([Firefox Bug 1108467](https://bugzil.la/1108467)).
- Mehrere {{jsxref("Array")}}-Methoden wurden ebenfalls für [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) implementiert:
  - Die {{jsxref("TypedArray.every", "every()")}} und {{jsxref("TypedArray.some", "some()")}} Methoden ([Firefox Bug 1116390](https://bugzil.la/1116390)).
  - Die {{jsxref("TypedArray.find", "find()")}} und {{jsxref("TypedArray.findIndex", "findIndex()")}} Methoden ([Firefox Bug 1078975](https://bugzil.la/1078975)).
  - Die {{jsxref("TypedArray.fill", "fill()")}} Methode ([Firefox Bug 1113722](https://bugzil.la/1113722)).
  - Die {{jsxref("TypedArray.indexOf", "indexOf()")}} und {{jsxref("TypedArray.lastIndexOf", "lastIndexOf()")}} Methoden ([Firefox Bug 1107601](https://bugzil.la/1107601)).
  - Die {{jsxref("TypedArray.join", "join()")}} Methode ([Firefox Bug 1115817](https://bugzil.la/1115817)).
  - Die {{jsxref("TypedArray.reduce", "reduce()")}} und {{jsxref("TypedArray.reduceRight", "reduceRight()")}} Methoden ([Firefox Bug 1117350](https://bugzil.la/1117350)).
  - Die {{jsxref("TypedArray.reverse", "reverse()")}} Methode ([Firefox Bug 1111516](https://bugzil.la/1111516)).
  - Die {{jsxref("TypedArray.keys", "keys()")}}, {{jsxref("TypedArray.values", "values()")}} und {{jsxref("TypedArray.entries", "entries()")}} Methoden ([Firefox Bug 1119217](https://bugzil.la/1119217)).

- Die ES2015 {{jsxref("Proxy")}} Enumerate-Falle für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen ist implementiert ([Firefox Bug 783829](https://bugzil.la/783829)).
- Das `configurable` Attribut der {{jsxref("Function.length")}} Eigenschaft ist jetzt entsprechend der ES2015 Spezifikation `true` ([Firefox Bug 911142](https://bugzil.la/911142)).
- Die Entwicklung von [ParallelJS (PJS)](https://web.archive.org/web/20161113115816/http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism) wurde aufgrund der begrenzten Zukunftsaussichten, des geringen Interesses und der Codekomplexität eingestellt. Die experimentelle Implementierung, die nur im Nightly Channel aktiviert war, einschließlich der Methoden `Array.prototype.mapPar`, `filterPar` und `reducePar`, wurde vollständig entfernt.

### Schnittstellen/APIs/DOM

- Der [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) [Web Audio](/de/docs/Web/API/Web_Audio_API) Knoten wurde implementiert ([Firefox Bug 1100349](https://bugzil.la/1100349)).
- Die auf {{jsxref("Promise")}} basierende Version von [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist jetzt verfügbar ([Firefox Bug 1087944](https://bugzil.la/1087944)).
- Die experimentelle, nicht standardmäßig aktivierte Implementierung von [Service Workers](/de/docs/Web/API/Service_Worker_API) macht Fortschritte: [`ServiceWorkerGlobalScope.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update) wurde implementiert ([Firefox Bug 1065366](https://bugzil.la/1065366)).
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) kann jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verwendet werden ([Firefox Bug 701634](https://bugzil.la/701634)).
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!
  - Die Methode [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData) wurde implementiert, um Zugriff auf Buffer-Objekte zu bieten ([Firefox Bug 1048731](https://bugzil.la/1048731)).

- In Übereinstimmung mit der sich entwickelnden WebRTC-Spezifikation haben wir `RTCIceServer.url` zugunsten von `RTCIceServer.urls` als veraltet erklärt, das die Angabe von mehr als einer URL für einen bestimmten ICE-Server ermöglicht.
- Einige Schlüsselnamen von `KeyboardEvent.key` wurden geändert, um der [neuesten DOM Level 3 Events-Spezifikation](https://w3c.github.io/DOM-Level-3-Events-key/) zu entsprechen. Siehe [die Tabellen der `KeyboardEvent.key`-Werte in MDN](/de/docs/Web/API/UI_Events/Keyboard_event_key_values). Meta-Bug für diese Änderungen ist [Firefox Bug 900372](https://bugzil.la/900372).
- Die [`console`](/de/docs/Web/API/console) Schnittstelle funktioniert jetzt mit [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker). Sie war zuvor verfügbar, funktionierte aber nicht ([Firefox Bug 1058644](https://bugzil.la/1058644)).
- Der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurde fälschlicherweise als `"RomanCharacters"` gemeldet, wenn die `英数` (`Eisu`) Taste gedrückt wurde. Jetzt wird korrekt `"Eisu"` zurückgegeben.

### MathML

_Keine Änderung._

### SVG

- SVG2's `<marker orient="auto-start-reverse">` wurde implementiert ([Firefox Bug 1107584](https://bugzil.la/1107584)).

### Audio/Video

_Keine Änderung._

## Netzwerke

- WebSockets unterstützen jetzt die `permessage` Komprimierungsmethode, wenn der Server sie unterstützt ([Firefox Bug 792831](https://bugzil.la/792831)).

## Sicherheit

- Die Verwendung von schwachen Protokollen oder Chiffren, wie SSL 3.0 und RC4, wird jetzt in der Konsole protokolliert, um Seiten zu warnen, die diese verwenden ([Firefox Bug 1092835](https://bugzil.la/1092835)).
- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `referrer` [Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox Bug 965727](https://bugzil.la/965727)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

_Keine Änderung._

### XUL

_Keine Änderung._
