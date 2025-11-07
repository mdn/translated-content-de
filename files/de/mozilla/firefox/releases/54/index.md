---
title: Firefox 54 Versionshinweise für Entwickler
short-title: Firefox 54
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Zusammenfassung der Netzwerk-Anfragen enthält nun die tatsächlich übertragene Datenmenge ("übertragene Größe"), ebenso die Leistungsanalyse-Ansicht ([Firefox Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht für Netzwerk-Anfrage-Header verlinkt jetzt zur zugehörigen Dokumentation auf MDN ([Firefox Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [Grundformen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Bug 1247229](https://bugzil.la/1247229)).
- Firefox's Implementierungen von CSS Flexbox und CSS Alignment umfassen jetzt aktualisierte Spezifikationsbeschreibungen für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} gesetzt sind nun nicht-ersetzte Elemente, für die Kompatibilität mit anderen Browsern ([Firefox Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element mit {{cssxref("display")}}: `inline-block` und einem Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), das mit `display:block` gestylt war, eine falsche Basislinie ([Firefox Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, mit den Attributen {{cssxref("color")}} und {{cssxref("background-color")}}. Weitere Informationen finden Sie in [Firefox Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies aufgrund des Mangels an Kontrast unter Linux noch deaktiviert ist (siehe [Firefox Bug 1338283](https://bugzil.la/1338283) für Fortschritte hierzu).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden nun das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden in bestimmten Situationen zum [`transparent` color keyword](/de/docs/Web/CSS/Reference/Values/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (ebenso wie die Implementierungen anderer Browser). Siehe ([Firefox Bug 1339394](https://bugzil.la/1339394) für weitere Informationen).
- Die proprietäre `:-moz-table-border-nonzero` Pseudo-Klasse ist für Webinhalte nicht mehr verfügbar; sie ist jetzt auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Raster ([Firefox Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene Mindestgrößenbeitrag von prozentual skalierbaren Raster-Elementen mit einem intrinsischen Seitenverhältnis ([Firefox Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß-/Kleinschreibung beachten) behandeln jetzt U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor erzeugt jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um mit ECMAScript 2017 konform zu sein, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um dem neuesten [vorgeschlagenen Spezifikationsentwurf](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox Bug 1337702](https://bugzil.la/1337702)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt ein Record, das Zeichenketten als Init-Objekt enthält ([Firefox Bug 1331580](https://bugzil.la/1331580)).
- Werte, die in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten zurückgegeben werden, wenn die Strg-Taste ebenfalls gedrückt wird, sind auf macOS korrigiert worden (außer wenn die Befehlstaste gedrückt wird) ([Firefox Bug 1342865](https://bugzil.la/1342865)).
- Die Einstellung `dom.workers.latestJSVersion`, die hauptsächlich zur Umgehung von Problemen mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern implementiert wurde (aufgrund von [Firefox Bug 855665](https://bugzil.la/855665), der mittlerweile behoben wurde), wurde entfernt (siehe [Firefox Bug 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt jetzt eine hochauflösende monotone Zeit zurück ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) statt eines Werts, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Worker und Service Worker

- `WorkerGlobalScope.close` ist jetzt stattdessen auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox Bug 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) und die Eigenschaft [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Bug 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der Reihenfolge der zuletzt fokussierten zurück (siehe [Firefox Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor mit einem vorhandenen [`Request`](/de/docs/Web/API/Request)-Objektinstanz aufgerufen wird, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit beibehalten und den Konstruktor weniger anfällig für Exceptions machen:
  - Wenn dieses Objekt aus einem anderen Ursprung als der Konstruktoraufruf stammt, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die Wiedergabe von 5.1 Surround Sound ist jetzt standardmäßig unter Windows, macOS und Linux aktiviert ([Firefox Bug 1334508](https://bugzil.la/1334508), [Firefox Bug 1321502](https://bugzil.la/1321502), und [Firefox Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde abgelehnt — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox Bug 1334564](https://bugzil.la/1334564)). Es wird geraten, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) gibt jetzt stille Samples korrekt mit dem Wert `-Infinity` im zurückgegebenen Puffer wieder ([Firefox Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError`-Exception aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Bug 1308437](https://bugzil.la/1308437)).

#### API für verschlüsselte Medienerweiterungen

- Die Zeichenkette `MediaKeySession.keySystem` wurde aus der Spezifikation entfernt, und daher haben wir sie aus Firefox 54 entfernt ([Firefox Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9 Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox Bug 1338064](https://bugzil.la/1338064)).
- Bisher durfte MSE `WebM/VP8`-Video nur dann verwenden, wenn das System als "schnell genug" galt. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- Unterstützung für TCP ICE-Kandidaten, die ursprünglich in Firefox 41 hinzugefügt wurde, ist nun standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Bug 1176382](https://bugzil.la/1176382)). Dieser [Blog-Beitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature ausführlicher.

## Entfernungen aus der Web-Plattform

### CSS

- Die `-moz`-präfixierten Versionen der Werte `isolate`, `isolate-override` und `plaintext` für die Eigenschaft {{cssxref("unicode-bidi")}} wurden entfernt ([Firefox Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1 Pipelining wurde in Firefox 54 entfernt. Es ist nicht lohnenswert, dies zu pflegen, da wir in eine neue Welt voller HTTP/2 und anderer bedeutender, standardisierter Leistungsverbesserungen im Netzwerk wechseln, angesichts der Kompatibilitäts- und Leistungsprobleme von Pipelining. Die `network.http.pipelining`-Voreinstellung (sowie die anderen Voreinstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox Bug 1340655](https://bugzil.la/1340655).
