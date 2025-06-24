---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Netzwerkabfragezusammenfassung umfasst nun die tatsächlich übertragenen Datenmengen ("übertragene Größe"), ebenso wie die Leistungsanalyseansicht ([Firefox-Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerkabfrage-Header enthält jetzt Links zur zugehörigen Dokumentation auf MDN ([Firefox-Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [basic shapes](/de/docs/Web/CSS/CSS_shapes) ([Firefox-Bug 1247229](https://bugzil.la/1247229)).
- Firefox's Implementierungen von CSS Flexbox und CSS-Ausrichtung implementieren nun die aktualisierte Spezifikationssprache für die Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox-Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio`, bei denen {{cssxref("appearance", "-moz-appearance: none")}} gesetzt ist, sind nun nicht mehr ersetzte Elemente, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox-Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein mit {{cssxref("display")}}: `inline-block` gestyltes Element mit einem Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), das mit `display:block` gestylt war, eine falsche Grundlinie ([Firefox-Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhaltsthreads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vordergrund- und Hintergrundfarben für `<option>`-Elemente verwenden, indem Sie die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwenden. Weitere Informationen finden Sie unter [Firefox-Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies auf Linux aufgrund fehlender Kontraste noch deaktiviert ist (siehe [Firefox-Bug 1338283](https://bugzil.la/1338283) für Fortschritte in dieser Angelegenheit).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden jetzt das [`animationcancel`-Ereignis](/de/docs/Web/API/Element/animationcancel_event) wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox-Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen als [`transparent` Farbschlüsselwort](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Siehe ([Firefox-Bug 1339394](https://bugzil.la/1339394) für weitere Informationen.
- Die proprietäre Pseudoklasse `:-moz-table-border-nonzero` ist nicht länger für Web-Inhalte verfügbar; sie ist nun auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox-Bug 1341925](https://bugzil.la/1341925)).
- [css-grid] Intrinsischer Inhalt mit overflow:auto überlappt in Grid ([Firefox-Bug 1348857](https://bugzil.la/1348857)).
- [css-grid] Übertragener Min-Size-Beitrag eines prozentual großen Gitterelements mit einem intrinsischen Verhältnis ([Firefox-Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß-/Kleinschreibung nicht beachtet) behandeln jetzt U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox-Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor löst jetzt einen {{jsxref("RangeError")}} aus, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox-Bug 1317382](https://bugzil.la/1317382)).
- Die {{jsxref("Date.UTC()")}}-Methode wurde aktualisiert, um mit ECMAScript 2017 konform zu sein, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox-Bug 1050755](https://bugzil.la/1050755)).
- Die {{jsxref("Function.prototype.toString()")}}-Methode wurde aktualisiert, um mit der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) übereinzustimmen ([Firefox-Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die [`URL.toJSON()`]-Methode(/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox-Bug 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`]-Konstruktor(/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert nun ein Record mit Zeichenfolgen als Init-Objekt ([Firefox-Bug 1331580](https://bugzil.la/1331580)).
- Die Werte, die von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten zurückgegeben werden, wenn die Steuerungstaste ebenfalls gedrückt wird, wurden auf macOS (außer wenn die Command-Taste gedrückt wird) korrigiert ([Firefox-Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Voreinstellung, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox-Bug 855665](https://bugzil.la/855665), welcher inzwischen behoben wurde), wurde entfernt (siehe [Firefox-Bug 1219523](https://bugzil.la/1219523)).
- Die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft gibt jetzt eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) zurück, anstatt einen Wert, der die {{Glossary("Unix_time", "Unix-Time")}} in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service Workern verfügbar ist, da es dort nicht verwendet werden soll und beim Aufruf immer eine Ausnahme auslöst (siehe [Firefox-Bug 1336043](https://bugzil.la/1336043)).
- Die [`Window.origin`](/de/docs/Web/API/Window/origin)-Eigenschaft und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox-Bug 1306170](https://bugzil.la/1306170)).
- Die [`Client.type`](/de/docs/Web/API/Client/type)-Eigenschaft wurde implementiert (siehe [Firefox-Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der Reihenfolge des zuletzt fokussierten Clients zurück (siehe [Firefox-Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden im beobachteten Verhalten vorgenommen, wenn der [`Request()`]-Konstruktor(/de/docs/Web/API/Request/Request) ein vorhandenes [`Request`](/de/docs/Web/API/Request)-Objekt-Instanz erhält, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sind dazu gedacht, die Sicherheit zu bewahren, während sie es dem Konstruktor weniger wahrscheinlich machen, Ausnahmen auszulösen:
  - Wenn dieses Objekt auf einem anderen Ursprung im Vergleich zum Aufruf des Konstruktors existiert, wird die [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die 5.1 Surround-Sound-Wiedergabe ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox-Bug 1334508](https://bugzil.la/1334508), [Firefox-Bug 1321502](https://bugzil.la/1321502) und [Firefox-Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams-API

- Die Verwendung eines [`MediaStream`]-Objekts(/de/docs/Web/API/MediaStream) als Eingabeparameter zu [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox-Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt jetzt stumme Samples im zurückgegebenen Buffer korrekt mit dem Wert `-Infinity` dar ([Firefox-Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError`-Ausnahme aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox-Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt, und als solches haben wir ihn aus Firefox 54 entfernt ([Firefox-Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9-Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox-Bug 1338064](https://bugzil.la/1338064)).
- Zuvor durfte MSE nur WebM/VP8-Video verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- TCP-ICE-Kandidatenunterstützung, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dadurch kann die ICE-Schicht Kandidaten in Betracht ziehen, die anstelle des bevorzugten UDP TCP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox-Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature ausführlicher.

## Entfernungen aus der Webplattform

### CSS

- Die `-moz`-präfixierten Versionen der Werte `isolate`, `isolate-override` und `plaintext` für die {{cssxref("unicode-bidi")}}-Eigenschaft wurden entfernt ([Firefox-Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Die Beibehaltung ist angesichts der Kompatibilitäts- und Leistungsprobleme von Pipelining nicht wert, da wir uns in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung bewegen. Die Voreinstellung `network.http.pipelining` (sowie die anderen Präferenzen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox-Bug 1340655](https://bugzil.la/1340655).

## Ältere Versionen

{{Firefox_for_developers}}
