---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Zusammenfassung der Netzwerkanforderungen enthält nun die tatsächlich übertragenen Datenmengen ("übertragene Größe"), ebenso wie die Leistungsanalyseansicht ([Firefox-Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerk-Anforderungsheader verlinkt jetzt auf die zugehörige Dokumentation auf MDN ([Firefox-Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [Grundformen](/de/docs/Web/CSS/CSS_shapes) ([Firefox-Bug 1247229](https://bugzil.la/1247229)).
- Firefox-Implementierungen von CSS Flexbox und CSS-Ausrichtung setzen nun die aktualisierte Spezifikationssprache für die Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} um ([Firefox-Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} sind jetzt nicht mehr ersetzte Elemente, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox-Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element mit {{cssxref("display")}}: `inline-block`, das ein Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` enthielt, eine falsche Basislinie ([Firefox-Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente angewendet werden, indem die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwendet werden. Weitere Informationen finden Sie unter [Firefox-Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies in Linux aufgrund mangelnden Kontrasts weiterhin deaktiviert ist (siehe [Firefox-Bug 1338283](https://bugzil.la/1338283) für Fortschritte dazu).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden nun das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox-Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden in bestimmten Situationen zum [`transparent` color keyword](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation sowie Implementierungen anderer Browser folgt. Siehe ([Firefox-Bug 1339394](https://bugzil.la/1339394) für weitere Informationen).
- Die proprietäre `:-moz-table-border-nonzero` Pseudo-Klasse ist nicht mehr für Web-Inhalte verfügbar; sie ist nun auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox-Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Grid ([Firefox-Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragener Mindestgrößenbeitrag eines Prozentgrößen-Grid-Items mit einem intrinsischen Verhältnis ([Firefox-Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß-/Kleinschreibung ignorieren) behandeln nun U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox-Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor löst nun einen {{jsxref("RangeError")}} aus, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2\*\*53) liegt ([Firefox-Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um mit ECMAScript 2017 übereinzustimmen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox-Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um mit der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) übereinzustimmen ([Firefox-Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON)-Methode wurde implementiert ([Firefox-Bug 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktor akzeptiert nun ein Record, das Strings als Init-Objekt enthält ([Firefox-Bug 1331580](https://bugzil.la/1331580)).
- Die zurückgegebenen Werte in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten, wenn auch die Steuerungstaste gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox-Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Präferenz, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox-Bug 855665](https://bugzil.la/855665), der seitdem behoben wurde), wurde entfernt (siehe [Firefox-Bug 1219523](https://bugzil.la/1219523)).
- Die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft gibt nun eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Werts, der {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen verfügbar auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close). Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` für Service Worker verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox-Bug 1336043](https://bugzil.la/1336043)).
- Die [`Window.origin`](/de/docs/Web/API/Window/origin)-Eigenschaft und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox-Bug 1306170](https://bugzil.la/1306170)).
- Die [`Client.type`](/de/docs/Web/API/Client/type)-Eigenschaft wurde implementiert (siehe [Firefox-Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der zuletzt fokussierten Reihenfolge zurück (siehe [Firefox-Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor ein bestehendes [`Request`](/de/docs/Web/API/Request)-Objektinstanz übergeben bekommt, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sind darauf ausgelegt, die Sicherheit zu gewährleisten, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:
  - Wenn dieses Objekt aus einem anderen Ursprung als der Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- 5.1 Surround-Sound-Wiedergabe ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox-Bug 1334508](https://bugzil.la/1334508), [Firefox-Bug 1321502](https://bugzil.la/1321502) und [Firefox-Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture and Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox-Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) repräsentiert jetzt korrekt lautlose Samples im zurückgegebenen Puffer mit dem Wert `-Infinity` ([Firefox-Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError`-Ausnahme aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox-Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der String `MediaKeySession.keySystem` wurde aus der Spezifikation entfernt, und daher haben wir ihn aus Firefox 54 entfernt ([Firefox-Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9-Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) wurde hinzugefügt ([Firefox-Bug 1338064](https://bugzil.la/1338064)).
- Zuvor durfte MSE nur WebM/VP8-Videos verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien unabhängig von der Systemleistung immer unterstützt.

#### WebRTC

- Der TCP-ICE-Kandidatensupport, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox-Bug 1176382](https://bugzil.la/1176382)). Dieser [Blog-Beitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature ausführlicher.

## Entfernt aus der Web-Plattform

### CSS

- Entfernte die `-moz`-präfixierten Versionen der Werte `isolate`, `isolate-override` und `plaintext` für die {{cssxref("unicode-bidi")}}-Eigenschaft ([Firefox-Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Es lohnt sich nicht mehr, diese Funktionalität zu pflegen, während wir den Übergang in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkperformance machen, angesichts der Kompatibilitäts- und Performanceprobleme des Pipeline-Konzepts. Die `network.http.pipelining`-Einstellung (sowie die anderen Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox-Bug 1340655](https://bugzil.la/1340655).

## Ältere Versionen

{{Firefox_für_Entwickler}}
