---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Zusammenfassung von Netzwerk-Anfragen enthält jetzt die tatsächlich übertragene Datenmenge ("übertragene Größe"), ebenso die Performance-Analyseansicht ([Firefox-Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerkanfrage-Header verlinkt nun zur entsprechenden Dokumentation auf MDN ([Firefox-Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [Grundformen](/de/docs/Web/CSS/CSS_shapes) ([Firefox-Bug 1247229](https://bugzil.la/1247229)).
- Firefox-Implementierungen von CSS Flexbox und CSS-Alignment implementieren nun die aktualisierte Spezifikationssprache für die Interaktion zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox-Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} sind jetzt nicht ersetzte Elemente, für die Kompatibilität mit anderen Browsern ([Firefox-Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element mit {{cssxref("display")}}: `inline-block` mit einem Kind-Element vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), das mit `display:block` gestylt war, eine falsche Grundlinie ([Firefox-Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vordergrund- und Hintergrundfarben auf `<option>`-Elemente anwenden, mithilfe der Attribute {{cssxref("color")}} und {{cssxref("background-color")}}. Weitere Informationen finden Sie in [Firefox-Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies unter Linux aufgrund des fehlenden Kontrasts immer noch deaktiviert ist (siehe [Firefox-Bug 1338283](https://bugzil.la/1338283) für Fortschritte dazu).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden jetzt das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox-Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden in bestimmten Situationen zum [`transparent` color keyword](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Weitere Informationen finden Sie in ([Firefox-Bug 1339394](https://bugzil.la/1339394) für weitere Informationen.
- Die proprietäre Pseudo-Klasse `:-moz-table-border-nonzero` steht Web-Inhalten nicht mehr zur Verfügung; sie ist jetzt auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox-Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Grid ([Firefox-Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene Mindestgrößenbeitrag von Prozentgrößen-Rasterelement mit einem intrinsischen Verhältnis ([Firefox-Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (case insensitive) behandeln jetzt U+017F (LATEINISCHER KLEINER BUCHSTABE LANGES S) und U+212A (KELVIN-ZEICHEN) als Wortzeichen ([Firefox-Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor löst jetzt einen {{jsxref("RangeError")}} aus, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox-Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um den ECMAScript 2017-Standards zu entsprechen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox-Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um den neuesten [vorgeschlagenen Spezifikationen](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox-Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox-Bug 1337702](https://bugzil.la/1337702)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert nun ein Record mit Strings als Initialisierungsobjekt ([Firefox-Bug 1331580](https://bugzil.la/1331580)).
- Zurückgegebene Werte in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten, wenn die Steuerungstaste ebenfalls gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox-Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Einstellung, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox-Bug 855665](https://bugzil.la/855665), der inzwischen behoben wurde), wurde entfernt (siehe [Firefox-Bug 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt jetzt eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Werts zurück, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden repräsentiert.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` bei Service-Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox-Bug 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) und der [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurde implementiert (siehe [Firefox-Bug 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox-Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der Reihenfolge des zuletzt fokussierten zurück (siehe [Firefox-Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor ein bestehendes [`Request`](/de/docs/Web/API/Request)-Objektinstanz übergeben bekommt, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sind darauf ausgelegt, die Sicherheit zu wahren, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:

  - Wenn dieses Objekt in einem anderen Ursprung zum Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der Wert `mode` in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- 5.1-Surround-Sound-Wiedergabe ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox-Bug 1334508](https://bugzil.la/1334508), [Firefox-Bug 1321502](https://bugzil.la/1321502) und [Firefox-Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture and Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde als veraltet gekennzeichnet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox-Bug 1334564](https://bugzil.la/1334564)). Sie sollten stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt jetzt korrekt stille Samples im zurückgegebenen Puffer mit dem Wert `-Infinity` dar ([Firefox-Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError`-Ausnahme aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox-Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der String `MediaKeySession.keySystem` wurde aus der Spezifikation entfernt und wir haben ihn aus Firefox 54 entfernt ([Firefox-Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9-Codec in verschlüsselten Streams mit [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox-Bug 1338064](https://bugzil.la/1338064)).
- Zuvor durfte MSE nur WebM/VP8-Video verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-codiertem `webm/video`-Material immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- TCP-ICE-Kandidatenunterstützung, ursprünglich in Firefox 41 eingeführt, ist jetzt standardmäßig aktiviert. Dadurch kann die ICE-Schicht Kandidaten in Betracht ziehen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox-Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature ausführlicher.

## Entfernungen aus der Web-Plattform

### CSS

- Die `-moz`-präfixierten Versionen der Werte `isolate`, `isolate-override` und `plaintext` für die {{cssxref("unicode-bidi")}}-Eigenschaft wurden entfernt ([Firefox-Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Die Aufrechterhaltung dieser Funktionalität ist im Zuge des Übergangs in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung nicht sinnvoll, angesichts der Kompatibilitäts- und Leistungsprobleme des Pipelining. Die `network.http.pipelining`-Einstellung (sowie die anderen Einstellungen, die mit "network.http.pipelining" beginnen) wird nun ignoriert. Weitere Informationen finden Sie in [Firefox-Bug 1340655](https://bugzil.la/1340655).

## Ältere Versionen

{{Firefox_for_developers}}
