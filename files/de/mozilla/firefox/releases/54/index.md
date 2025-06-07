---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Zusammenfassung der Netzwerkabfragen enthält jetzt die tatsächlich übertragene Datenmenge ("übertragene Größe"), ebenso wie die Ansicht der Leistungsanalyse ([Firefox Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerkabfrage-Header enthält jetzt Links zur zugehörigen Dokumentation auf MDN ([Firefox Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [einfache Formen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Bug 1247229](https://bugzil.la/1247229)).
- Die Implementierungen von Firefox für CSS Flexbox und CSS-Ausrichtung implementieren jetzt die aktualisierte Spezifikationssprache für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} gelten jetzt als nicht ersetzte Elemente, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element, das mit {{cssxref("display")}}: `inline-block` und einem Kindelement des Typs [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` gestyled war, eine falsche Basislinie ([Firefox Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Content-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, indem Sie die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwenden. Siehe [Firefox Bug 910022](https://bugzil.la/910022) für weitere Informationen. Beachten Sie, dass dies unter Linux immer noch deaktiviert ist, da es an Kontrast fehlt (siehe [Firefox Bug 1338283](https://bugzil.la/1338283) für den Fortschritt in dieser Angelegenheit).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis jetzt wie erwartet, wenn eine Animation vorzeitig abgebrochen wird ([Firefox Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen fälschlicherweise in das [`transparent` color keyword](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Siehe ([Firefox Bug 1339394](https://bugzil.la/1339394) für weitere Informationen).
- Die proprietäre Pseudoklasse `:-moz-table-border-nonzero` ist in Webinhalten nicht mehr verfügbar; sie ist nun auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsische Inhalte mit overflow:auto überlappen im Raster ([Firefox Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene Mindestgröße eines prozentualen Größen-Rasteritems mit einem intrinsischen Verhältnis ([Firefox Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß-/Kleinschreibung ignorieren) behandeln jetzt U+017F (LATEINISCHER KLEINBUCHSTABE LANGES S) und U+212A (KELVINZEICHEN) als Wortzeichen ([Firefox Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor löst jetzt einen {{jsxref("RangeError")}} aus, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Bug 1317382](https://bugzil.la/1317382)).
- Die {{jsxref("Date.UTC()")}}-Methode wurde aktualisiert, um den Vorgaben von ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente angegeben werden ([Firefox Bug 1050755](https://bugzil.la/1050755)).
- Die {{jsxref("Function.prototype.toString()")}}-Methode wurde aktualisiert, um die neueste [vorgeschlagene Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu erfüllen ([Firefox Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON)-Methode wurde implementiert ([Firefox Bug 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktor akzeptiert jetzt ein Aufzeichnungsobjekt, das Strings als Init-Objekt enthält ([Firefox Bug 1331580](https://bugzil.la/1331580)).
- Werte, die in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten zurückgegeben werden, wenn die Steuerungstaste ebenfalls gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Einstellung, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen ([Firefox Bug 855665](https://bugzil.la/855665), das inzwischen behoben wurde), wurde entfernt (siehe [Firefox Bug 1219523](https://bugzil.la/1219523)).
- Die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft gibt jetzt eine hochauflösende monotone Zeit zurück ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Wertes, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen verfügbar auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close). Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` in Service Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme wirft, wenn es aufgerufen wird (siehe [Firefox Bug 1336043](https://bugzil.la/1336043)).
- Die [`Window.origin`](/de/docs/Web/API/Window/origin)-Eigenschaft und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Bug 1306170](https://bugzil.la/1306170)).
- Die [`Client.type`](/de/docs/Web/API/Client/type)-Eigenschaft wurde implementiert (siehe [Firefox Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der am kürzesten fokussierten Reihenfolge zurück (siehe [Firefox Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor ein vorhandenes [`Request`](/de/docs/Web/API/Request)-Objektinstanz übergeben bekommt, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit gewährleisten und gleichzeitig den Konstruktor weniger anfällig für Ausnahmen machen:

  - Wenn dieses Objekt zu einem anderen Ursprung als dem des Konstruktorrufs gehört, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die Wiedergabe von 5.1 Surround Sound ist jetzt standardmäßig unter Windows, macOS und Linux aktiviert ([Firefox Bug 1334508](https://bugzil.la/1334508), [Firefox Bug 1321502](https://bugzil.la/1321502) und [Firefox Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Nutzung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — jetzt wird in der Konsole eine Warnung angezeigt (siehe [Firefox Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) repräsentiert jetzt korrekt stille Proben im zurückgegebenen Puffer mit dem Wert `-Infinity` ([Firefox Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError`-Ausnahme aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Bug 1308437](https://bugzil.la/1308437)).

#### API für verschlüsselte Medienerweiterungen

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt, und daher haben wir ihn aus Firefox 54 entfernt ([Firefox Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9-Codec in verschlüsselten Streams mit [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox Bug 1338064](https://bugzil.la/1338064)).
- Zuvor war MSE nur erlaubt, WebM/VP8-Video zu verwenden, wenn das System als "schnell genug" galt. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- TCP ICE-Kandidatenunterstützung, die ursprünglich in Firefox 41 hinzugefügt wurde, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten in Betracht zu ziehen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature genauer.

## Entfernungen von der Webplattform

### CSS

- Die `-moz`-präfixierten Versionen von `isolate`, `isolate-override` und `plaintext`-Werten für die {{cssxref("unicode-bidi")}}-Eigenschaft wurden entfernt ([Firefox Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- HTTP/1-Pipelining-Unterstützung wurde in Firefox 54 entfernt. Diese aufrechtzuerhalten, während wir den Übergang zu einer neuen Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung vollziehen, ist aufgrund der Kompatibilitäts- und Leistungsprobleme von Pipelining nicht sinnvoll. Die `network.http.pipelining`-Präferenz (sowie die anderen Präferenzen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Siehe [Firefox Bug 1340655](https://bugzil.la/1340655) für weitere Informationen.

## Ältere Versionen

{{Firefox_for_developers}}
