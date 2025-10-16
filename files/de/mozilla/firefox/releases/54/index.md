---
title: Firefox 54 Versionshinweise für Entwickler
short-title: Firefox 54
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Zusammenfassung von Netzwerkanfragen enthält jetzt die tatsächlich übertragenen Daten ("übertragene Größe"), ebenso wie die Leistungsanalyseansicht ([Firefox Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht der Netzwerk-Anforderungsheader verlinkt jetzt auf die entsprechende Dokumentation auf MDN ([Firefox Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [grundlegende Formen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Bug 1247229](https://bugzil.la/1247229)).
- Die Implementierungen von CSS Flexbox und CSS Alignments in Firefox verwenden nun eine aktualisierte Spezifikationssprache für die Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}} Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} werden nun als non-replaced Elemente behandelt, um mit anderen Browsern kompatibel zu sein ([Firefox Bug 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element mit {{cssxref("display")}}: `inline-block`, das ein Kindelement vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` enthielt, eine falsche Baseline ([Firefox Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Elektrolyse- oder e10s-Projekt), wurde die Unterstützung für die Gestaltung von {{HTMLElement("option")}} Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vordergrund- und Hintergrundfarben auf `<option>`-Elemente anwenden, indem Sie die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwenden. Weitere Informationen finden Sie unter [Firefox Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies unter Linux aufgrund fehlender Kontraste noch deaktiviert ist (siehe [Firefox Bug 1338283](https://bugzil.la/1338283) für den Fortschritt).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden nun das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event) Ereignis wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen in das [`transparente` Farbstichwort](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation sowie den Implementierungen anderer Browser folgt. Siehe ([Firefox Bug 1339394](https://bugzil.la/1339394) für weitere Informationen).
- Die proprietäre Pseudo-Klasse `:-moz-table-border-nonzero` ist nicht mehr für Webinhalte verfügbar; sie ist nun auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Grid ([Firefox Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene Mindestgrößenbeiträge eines prozentualen Größen-Grid-Elements mit einem intrinsischen Verhältnis ([Firefox Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Fallunterscheidung) behandeln nun U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}} Konstruktor löst nun einen {{jsxref("RangeError")}} aus, wenn der `byteOffset` Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Bug 1317382](https://bugzil.la/1317382)).
- Die {{jsxref("Date.UTC()")}} Methode wurde aktualisiert, um den Anforderungen von ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox Bug 1050755](https://bugzil.la/1050755)).
- Die {{jsxref("Function.prototype.toString()")}} Methode wurde aktualisiert, um der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) Methode wurde implementiert ([Firefox Bug 1337702](https://bugzil.la/1337702)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert nun ein Record, das Strings als Initialisierungsobjekt enthält ([Firefox Bug 1331580](https://bugzil.la/1331580)).
- Die in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurückgegebenen Werte für druckbare Tasten, wenn die Strg-Taste ebenfalls gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Bug 1342865](https://bugzil.la/1342865)).
- Die Einstellung `dom.workers.latestJSVersion`, die hauptsächlich implementiert wurde, um Probleme mit der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Bug 855665](https://bugzil.la/855665), der inzwischen behoben wurde), wurde entfernt (siehe [Firefox Bug 1219523](https://bugzil.la/1219523)).
- Die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) Eigenschaft gibt nun eine hochauflösende monotone Zeit zurück ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Werts, der {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Webarbeiter und Service-Arbeiter

- `WorkerGlobalScope.close` ist jetzt stattdessen verfügbar in [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close). Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` bei Servicearbeitern verfügbar ist, da es dort nicht verwendet werden sollte und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox Bug 1336043](https://bugzil.la/1336043)).
- Die [`Window.origin`](/de/docs/Web/API/Window/origin) Eigenschaft und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurde implementiert (siehe [Firefox Bug 1306170](https://bugzil.la/1306170)).
- Die [`Client.type`](/de/docs/Web/API/Client/type) Eigenschaft wurde implementiert (siehe [Firefox Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client) Objekte in der Reihenfolge der zuletzt fokussierten zurück (siehe [Firefox Bug 1266747](https://bugzil.la/1266747)).
- Es wurden einige Änderungen am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor eine vorhandene [`Request`](/de/docs/Web/API/Request) Objektinstanz übergeben wird, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit bewahren, während sie den Konstruktor weniger wahrscheinlich Ausnahmen werfen lassen:
  - Wenn dieses Objekt auf einem anderen Ursprung als der Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt ein [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode` Wert zu `same-origin` konvertiert.

### Audio/Video

#### Allgemein

- Die 5.1 Surround-Sound-Wiedergabe ist jetzt standardmäßig unter Windows, macOS und Linux aktiviert ([Firefox Bug 1334508](https://bugzil.la/1334508), [Firefox Bug 1321502](https://bugzil.la/1321502) und [Firefox Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream) Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde als veraltet markiert — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt nun stille Samples im zurückgegebenen Puffer korrekt mit dem Wert `-Infinity` dar ([Firefox Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) löst jetzt eine `TypeError` Ausnahme aus, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der `MediaKeySession.keySystem` String wurde aus der Spezifikation entfernt, und daher haben wir ihn in Firefox 54 entfernt ([Firefox Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung wurde für den VP9-Codec in verschlüsselten Streams unter Verwendung des [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) hinzugefügt ([Firefox Bug 1338064](https://bugzil.la/1338064)).
- Zuvor war MSE nur berechtigt, WebM/VP8 Video zu verwenden, wenn das System als "schnell genug" betrachtet wurde. Jetzt wird die Wiedergabe von VP8-codierten `webm/video`-Medien unabhängig von der Systemleistung immer unterstützt.

#### WebRTC

- Unterstützung für TCP-ICE-Kandidaten, die ursprünglich in Firefox 41 hinzugefügt wurden, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Bug 1176382](https://bugzil.la/1176382)). Dieser [Blog-Beitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt die Funktion im Detail.

## Entfernung von der Webplattform

### CSS

- Die `-moz` präfixierten Versionen von `isolate`, `isolate-override` und `plaintext` Werten für die {{cssxref("unicode-bidi")}} Eigenschaft wurden entfernt ([Firefox Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Unterstützung für HTTP/1 Pipelining wurde in Firefox 54 entfernt. Es ist nicht lohnenswert, es aufrechtzuerhalten, da wir in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung übergehen, angesichts von Pipelining-Kompatibilitäts- und Leistungsproblemen. Die Einstellung `network.http.pipelining` (sowie andere Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox Bug 1340655](https://bugzil.la/1340655).
