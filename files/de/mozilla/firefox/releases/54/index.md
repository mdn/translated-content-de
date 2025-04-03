---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Zusammenfassung von Netzwerkanfragen enthält jetzt die tatsächlich übertragene Datenmenge ("übertragene Größe"), ebenso wie die Leistungsanalyseansicht ([Firefox Fehler 1168376](https://bugzil.la/1168376)).
- Die Ansicht für Netzwerkanfragen-Header verlinkt jetzt zur zugehörigen Dokumentation auf MDN ([Firefox Fehler 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [grundlegende Formen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Fehler 1247229](https://bugzil.la/1247229)).
- Die Implementierungen von CSS Flexbox und CSS-Ausrichtung in Firefox folgen nun der aktualisierten Spezifikationssprache für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Fehler 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance")}}`: none;` sind jetzt nicht mehr ersetzte Elemente, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox Fehler 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element mit {{cssxref("display")}}: `inline-block` und einem Kind-Element vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` eine falsche Grundlinie ([Firefox Fehler 1330962](https://bugzil.la/1330962)). Dies ist jetzt behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für die Stilgebung von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, durch die Verwendung der Attribute {{cssxref("color")}} und {{cssxref("background-color")}}. Weitere Informationen finden Sie im [Firefox Fehler 910022](https://bugzil.la/910022). Beachten Sie, dass dies auf Linux aufgrund mangelnden Kontrasts weiterhin deaktiviert ist (siehe [Firefox Fehler 1338283](https://bugzil.la/1338283) für Fortschritte).
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) senden jetzt das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event) Ereignis wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox Fehler 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen auf das [`transparent` Farb-Schlüsselwort](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Weitere Informationen finden Sie im ([Firefox Fehler 1339394](https://bugzil.la/1339394).
- Die proprietäre `:-moz-table-border-nonzero` Pseudo-Klasse ist im Webinhalt nicht mehr verfügbar; sie ist jetzt auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox Fehler 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt in einem Grid ([Firefox Fehler 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragener Min-Size-Beitrag eines prozentualen Grid-Items mit einem intrinsischen Seitenverhältnis ([Firefox Fehler 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (case insensitive) behandeln jetzt U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Fehler 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor wirft jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Fehler 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um der ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox Fehler 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Fehler 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox Fehler 1337702](https://bugzil.la/1337702)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt ein Record, das Strings als Initialisierungsobjekt enthält ([Firefox Fehler 1331580](https://bugzil.la/1331580)).
- Die in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten zurückgegebenen Werte wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Fehler 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Einstellung, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Fehler 855665](https://bugzil.la/855665), der inzwischen behoben wurde) wurde entfernt (siehe [Firefox Fehler 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt nun eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) zurück, anstatt einen Wert, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Workers and Service Workers

- `WorkerGlobalScope.close` ist jetzt nur noch in [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, damit `close()` nicht mehr in Service-Workern verfügbar ist, da es dort nicht verwendet werden soll und beim Aufruf immer eine Ausnahme auslöst (siehe [Firefox Fehler 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) und die Eigenschaft [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Fehler 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox Fehler 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der zuletzt fokussierten Reihenfolge zurück (siehe [Firefox Fehler 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor eine vorhandene [`Request`](/de/docs/Web/API/Request)-Objektinstanz erhält, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit gewährleisten und gleichzeitig die Wahrscheinlichkeit, dass der Konstruktor Ausnahmen auslöst, verringern:

  - Wenn dieses Objekt in einem anderen Ursprung als der Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die Wiedergabe von 5.1-Surround-Sound ist nun standardmäßig unter Windows, macOS und Linux aktiviert ([Firefox Fehler 1334508](https://bugzil.la/1334508), [Firefox Fehler 1321502](https://bugzil.la/1321502) und [Firefox Fehler 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Nutzung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde als veraltet markiert — die Konsole zeigt nun eine Warnung an (siehe [Firefox Fehler 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) repräsentiert nun stille Proben im zurückgegebenen Puffer korrekt mit dem Wert `-Infinity` ([Firefox Fehler 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wirft jetzt eine `TypeError`-Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Fehler 1308437](https://bugzil.la/1308437)).

#### API für verschlüsselte Medienerweiterungen

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt, und daher haben wir ihn auch aus Firefox 54 entfernt ([Firefox Fehler 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9-Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) und [Widevine](https://www.widevine.com/) wurde hinzugefügt ([Firefox Fehler 1338064](https://bugzil.la/1338064)).
- Bisher durfte MSE WebM/VP8-Videos nur verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien unabhängig von der Systemleistung immer unterstützt.

#### WebRTC

- Die Unterstützung für das TCP-ICE-Kandidatensystem, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dies erlaubt der ICE-Schicht, Kandidaten in Betracht zu ziehen, die TCP statt des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Fehler 1176382](https://bugzil.la/1176382)). Dieser [Blogpost](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt die Funktionalität ausführlicher.

## Entfernungen aus der Webplattform

### CSS

- Die `-moz`-präfixierten Versionen von `isolate`, `isolate-override` und `plaintext` Werten für die Eigenschaft {{cssxref("unicode-bidi")}} wurden entfernt ([Firefox Fehler 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Die Wartung angesichts des Wechsels zu einer neuen Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung lohnt sich nicht im Hinblick auf Kompatibilitäts- und Leistungsprobleme des Pipelining. Die Einstellung `network.http.pipelining` (sowie die anderen Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie im [Firefox Fehler 1340655](https://bugzil.la/1340655).

## Ältere Versionen

{{Firefox_for_developers}}
