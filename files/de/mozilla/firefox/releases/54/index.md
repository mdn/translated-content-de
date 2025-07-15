---
title: Firefox 54 für Entwickler
short-title: Firefox 54
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Zusammenfassung von Netzwerk-Anfragen umfasst jetzt die tatsächlich übertragene Datenmenge ("transferred size") und auch die Ansichtsleistung der Analyse ([Firefox Fehler 1168376](https://bugzil.la/1168376)).
- Die Ansicht für Netzwerk-Anfrageheader enthält jetzt Links zur zugehörigen Dokumentation auf MDN ([Firefox Fehler 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [grundlegende Formen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Fehler 1247229](https://bugzil.la/1247229)).
- Firefox's Implementierungen von CSS Flexbox und CSS-Ausrichtung implementieren nun die aktualisierte Spezifikationssprache für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Fehler 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}} Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} sind jetzt nicht mehr ersetzte Elemente, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox Fehler 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element, das mit {{cssxref("display")}}: `inline-block` und einem Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` formatiert wurde, eine falsche Basislinie ([Firefox Fehler 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Content-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für die Gestaltung von {{HTMLElement("option")}} Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, mithilfe der {{cssxref("color")}} und {{cssxref("background-color")}} Attribute. Weitere Informationen finden Sie unter [Firefox Fehler 910022](https://bugzil.la/910022). Beachten Sie, dass dies unter Linux weiterhin deaktiviert ist, da es an Kontrast mangelt (siehe [Firefox Fehler 1338283](https://bugzil.la/1338283) für den Fortschritt).
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) senden nun das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event) Ereignis erwartungsgemäß, wenn eine Animation vorzeitig abbricht ([Firefox Fehler 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden in bestimmten Situationen in das [`transparent` Farb-Schlüsselwort](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, damit Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Weitere Informationen finden Sie unter ([Firefox Fehler 1339394](https://bugzil.la/1339394)).
- Die proprietäre `:-moz-table-border-nonzero` Pseudoklasse ist für Webinhalte nicht mehr verfügbar; sie ist jetzt auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox Fehler 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Raster ([Firefox Fehler 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragener Mindestgrößenbeitrag eines Prozentsatzgrößen-Rasterelements mit einem intrinsischen Verhältnis ([Firefox Fehler 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß- und Kleinschreibung ignorierend) behandeln nun U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN ZEICHEN) als Wortzeichen ([Firefox Fehler 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}} Konstruktor wirft jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset` Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Fehler 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um mit ECMAScript 2017 konform zu sein, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox Fehler 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um mit der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) übereinzustimmen ([Firefox Fehler 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox Fehler 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert nun ein Record, das Zeichenfolgen als ein Initialisierungsobjekt enthält ([Firefox Fehler 1331580](https://bugzil.la/1331580)).
- Die zurückgegebenen Werte in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten, wenn die Steuerungstaste ebenfalls gedrückt ist, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Fehler 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion` Präferenz, die hauptsächlich implementiert wurde, um Probleme mit der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Fehler 855665](https://bugzil.la/855665), der inzwischen behoben wurde), wurde entfernt (siehe [Firefox Fehler 1219523](https://bugzil.la/1219523)).
- Die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) Eigenschaft gibt jetzt eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Wertes zurück, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt ausschließlich auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auswirft, wenn es aufgerufen wird (siehe [Firefox Fehler 1336043](https://bugzil.la/1336043)).
- Die [`Window.origin`](/de/docs/Web/API/Window/origin) Eigenschaft und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Fehler 1306170](https://bugzil.la/1306170)).
- Die [`Client.type`](/de/docs/Web/API/Client/type) Eigenschaft wurde implementiert (siehe [Firefox Fehler 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client) Objekte in der Reihenfolge des letzten Fokus zurück (siehe [Firefox Fehler 1266747](https://bugzil.la/1266747)).
- Es wurden einige Änderungen am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor mit einem bestehenden [`Request`](/de/docs/Web/API/Request) Objekt aufgerufen wird, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit beibehalten, während der Konstruktor weniger wahrscheinlich Ausnahmen wirft:
  - Wenn dieses Objekt von einem anderen Ursprung als dem des Konstruktorrufs stammt, wird die [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode` Wert auf `same-origin` konvertiert.

### Audio/Video

#### Allgemein

- 5.1 Surround Sound Wiedergabe ist jetzt standardmäßig aktiviert auf Windows, macOS und Linux ([Firefox Fehler 1334508](https://bugzil.la/1334508), [Firefox Fehler 1321502](https://bugzil.la/1321502) und [Firefox Fehler 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream) Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox Fehler 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt jetzt stillgelegte Samples im zurückgegebenen Buffer korrekt mit dem Wert `-Infinity` dar ([Firefox Fehler 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wirft jetzt eine `TypeError` Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Fehler 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der `MediaKeySession.keySystem` String wurde aus der Spezifikation entfernt und dementsprechend haben wir ihn aus Firefox 54 entfernt ([Firefox Fehler 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9 Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) wurde hinzugefügt ([Firefox Fehler 1338064](https://bugzil.la/1338064)).
- Zuvor durfte MSE nur WebM/VP8 Video verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-kodierten `webm/video` Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- TCP ICE Kandidatenunterstützung, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten in Betracht zu ziehen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Fehler 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature ausführlicher.

## Entfernungen von der Web-Plattform

### CSS

- Die `-moz`-präfixierten Versionen der `isolate`, `isolate-override` und `plaintext` Werte für die {{cssxref("unicode-bidi")}} Eigenschaft wurden entfernt ([Firefox Fehler 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1 Pipelining wurde in Firefox 54 entfernt. Angesichts der Kompatibilitäts- und Leistungsprobleme von Pipelining lohnt es sich nicht, diese Unterstützung aufrechtzuerhalten, da wir den Übergang in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Leistungsverbesserungen im Networking durchführen. Die `network.http.pipelining`-Präferenz (sowie die anderen Präferenzen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox Fehler 1340655](https://bugzil.la/1340655).
