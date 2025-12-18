---
title: Firefox 54 Versionshinweise für Entwickler
short-title: Firefox 54
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Zusammenfassung der Netzwerk-Anfragen enthält jetzt die tatsächlich übertragenen Datenmengen ("übertragene Größe"), ebenso wie die Performance-Analyse-Ansicht ([Firefox Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerk-Anfrage-Header verlinkt jetzt zur zugehörigen Dokumentation auf MDN ([Firefox Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [Grundformen](/de/docs/Web/CSS/Guides/Shapes) ([Firefox Bug 1247229](https://bugzil.la/1247229)).
- Firefox' Implementierungen von CSS Flexbox und CSS-Ausrichtung setzen nun die aktualisierte Spezifikationssprache für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} um ([Firefox Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit gesetztem {{cssxref("appearance", "-moz-appearance: none")}} sind jetzt nicht ersetzende Elemente, um die Kompatibilität mit anderen Browsern sicherzustellen ([Firefox Bug 605985](https://bugzil.la/605985)).
- Frühere Probleme mit der falschen Basislinie bei einem Element, das mit {{cssxref("display")}}: `inline-block` und einem Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` gestylt war, wurden behoben ([Firefox Bug 1330962](https://bugzil.la/1330962)).
- Als Mozilla dedizierte Content-Threads zu Firefox durch das Electrolysis oder e10s-Projekt einführte, wurde die Unterstützung für die Gestaltung von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vordergrund- und Hintergrundfarben auf `<option>`-Elemente anwenden, indem Sie die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwenden. Siehe [Firefox Bug 910022](https://bugzil.la/910022) für weitere Informationen. Beachten Sie, dass dies unter Linux aufgrund mangelnden Kontrasts noch deaktiviert ist (siehe [Firefox Bug 1338283](https://bugzil.la/1338283) für den Fortschritt).
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) senden jetzt wie erwartet das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis, wenn eine Animation vorzeitig abgebrochen wird ([Firefox Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen an das [`transparent` Farbschlüsselwort](/de/docs/Web/CSS/Reference/Values/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Siehe ([Firefox Bug 1339394](https://bugzil.la/1339394) für weitere Informationen).
- Die proprietäre Pseudoklasse `:-moz-table-border-nonzero` ist nicht mehr für Webinhalte verfügbar; sie ist jetzt auf Firefox' internes UA-Stylesheet beschränkt ([Firefox Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlagert sich im Raster ([Firefox Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene min-size-Beitrag von Prozentsatzgröße Grid-Element mit einem intrinsischen Verhältnis ([Firefox Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (groß-/kleinschreibungsempfindlich) behandeln jetzt U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor wirft jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um der ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox Bug 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktor akzeptiert jetzt ein Record, das Zeichenfolgen als Init-Objekt enthält ([Firefox Bug 1331580](https://bugzil.la/1331580)).
- Die zurückgegebenen Werte in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten, wenn die Steuerungstaste ebenfalls gedrückt wird, wurden unter macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Präferenz, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Bug 855665](https://bugzil.la/855665), der inzwischen behoben wurde), wurde entfernt (siehe [Firefox Bug 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt jetzt eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Wertes zurück, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen verfügbar auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close). Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service-Workern verfügbar ist, da es dort nicht verwendet werden sollte und beim Aufruf immer eine Ausnahme auslöst (siehe [Firefox Bug 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) sowie die Eigenschaft [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Bug 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der Reihenfolge der zuletzt fokussierten Objekte zurück (siehe [Firefox Bug 1266747](https://bugzil.la/1266747)).
- Es wurden einige Änderungen am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor mit einer vorhandenen [`Request`](/de/docs/Web/API/Request)-Objektinstanz aufgerufen wird, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit bewahren, während der Konstruktor mit geringerer Wahrscheinlichkeit Ausnahmen auslöst:
  - Wenn dieses Objekt bei einem anderen Ursprung als dem des Konstruktoraufrufs existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die 5.1 Surround-Sound-Wiedergabe ist jetzt unter Windows, macOS und Linux standardmäßig aktiviert ([Firefox Bug 1334508](https://bugzil.la/1334508), [Firefox Bug 1321502](https://bugzil.la/1321502) und [Firefox Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) repräsentiert nun korrekt stille Samples im zurückgegebenen Puffer mit dem Wert `-Infinity` ([Firefox Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wirft jetzt eine `TypeError`-Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Bug 1308437](https://bugzil.la/1308437)).

#### Verschlüsselte MediaExtensions API

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt und daher haben wir ihn aus Firefox 54 herausgenommen ([Firefox Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9-Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox Bug 1338064](https://bugzil.la/1338064)).
- Zuvor war MSE nur erlaubt, WebM/VP8-Videos zu verwenden, wenn das System als "schnell genug" erachtet wurde. Nun wird die Wiedergabe von VP8-kodierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- TCP ICE-Kandidatensupport, ursprünglich hinzugefügt in Firefox 41, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann nützlich in Umgebungen sein, in denen UDP blockiert ist ([Firefox Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature detaillierter.

## Entfernte Funktionen aus der Web-Plattform

### CSS

- Die `-moz`-präfixierten Versionen der `isolate`, `isolate-override` und `plaintext` Werte für die {{cssxref("unicode-bidi")}}-Eigenschaft wurden entfernt ([Firefox Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Die Aufrechterhaltung dieser Unterstützung bei unserem Übergang in eine neue Welt voller HTTP/2 und anderer substanzieller, standardisierter Verbesserungen der Netzwerkleistung ist aufgrund der Kompatibilitäts- und Leistungsprobleme des Pipelinings nicht lohnend. Die `network.http.pipelining`-Einstellung (sowie die anderen Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox Bug 1340655](https://bugzil.la/1340655).
