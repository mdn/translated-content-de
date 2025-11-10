---
title: Firefox 54 Versionshinweise für Entwickler
short-title: Firefox 54
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Netzwerk-Anforderungsübersicht enthält jetzt die tatsächlich übertragenen Datenmengen ("übertragene Größe"), ebenso wie die Leistungsanalyseansicht ([Firefox-Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht für Netzwerk-Anforderungsheader verlinkt jetzt zur entsprechenden Dokumentation auf MDN ([Firefox-Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt jetzt [Grundformen](/de/docs/Web/CSS/Guides/Shapes) ([Firefox-Bug 1247229](https://bugzil.la/1247229)).
- Die Implementierungen von CSS Flexbox und CSS Alignment in Firefox wurden aktualisiert, um die aktualisierte Spezifikationssprache für die Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} zu implementieren ([Firefox-Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance: none")}} gesetzt darauf sind jetzt keine ersetzten Elemente mehr, um die Kompatibilität mit anderen Browsern zu erhöhen ([Firefox-Bug 605985](https://bugzil.la/605985)).
- Früher hatte ein Element, das mit {{cssxref("display")}}: `inline-block` gestylt war und ein Kind-Element vom Typ [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit `display:block` enthielt, eine falsche Grundlinie ([Firefox-Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhalts-Threads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie wieder Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, indem Sie die Attribute {{cssxref("color")}} und {{cssxref("background-color")}} verwenden. Weitere Informationen finden Sie im [Firefox-Bug 910022](https://bugzil.la/910022). Beachten Sie, dass dies unter Linux aufgrund mangelnden Kontrasts weiterhin deaktiviert ist (siehe [Firefox-Bug 1338283](https://bugzil.la/1338283) für Fortschritte).
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) senden jetzt wie erwartet das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)-Ereignis, wenn eine Animation vorzeitig abbricht ([Firefox-Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden in bestimmten Situationen zu dem [`transparent`-Farbkeyword](/de/docs/Web/CSS/Reference/Values/color_value) serialisiert; dies wurde behoben, damit Firefox der Spezifikation (sowie Implementierungen anderer Browser) folgt. Siehe ([Firefox-Bug 1339394](https://bugzil.la/1339394) für weitere Informationen.
- Die proprietäre Pseudoklasse `:-moz-table-border-nonzero` ist nicht mehr für Webinhalte verfügbar; sie ist jetzt auf das interne UA-Stylesheet von Firefox beschränkt ([Firefox-Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit `overflow:auto` überlappt im Grid ([Firefox-Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragener Minimalgrößenbeitrag bei Prozentgrößengitterelementen mit einem intrinsischen Verhältnis ([Firefox-Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß-/Kleinschreibung ignorierend) behandeln jetzt U+017F (LATEINISCHES KLEINBUCHSTABE LANGES S) und U+212A (KELVIN-ZEICHEN) als Wortzeichen ([Firefox-Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor wirft jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox-Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um der ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente bereitgestellt werden ([Firefox-Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um dem neuesten [vorgeschlagenen Standard](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox-Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML-DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox-Bug 1337702](https://bugzil.la/1337702)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt ein Record, das Zeichenfolgen als initiales Objekt enthält ([Firefox-Bug 1331580](https://bugzil.la/1331580)).
- Die in [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurückgegebenen Werte für druckbare Tasten, wenn die Steuerungstaste ebenfalls gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox-Bug 1342865](https://bugzil.la/1342865)).
- Die Einstellung `dom.workers.latestJSVersion`, die hauptsächlich implementiert wurde, um Probleme bei der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox-Bug 855665](https://bugzil.la/855665), der mittlerweile behoben wurde), wurde entfernt (siehe [Firefox-Bug 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt jetzt eine hochauflösende monotone Zeit ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Werts zurück, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web-Worker und Service-Worker

- `WorkerGlobalScope.close` ist stattdessen jetzt nur auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service-Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox-Bug 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) und die Eigenschaft [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox-Bug 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox-Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client)-Objekte in der Reihenfolge des zuletzt fokussierten zurück (siehe [Firefox-Bug 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden am beobachteten Verhalten vorgenommen, wenn der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor ein bestehendes [`Request`](/de/docs/Web/API/Request)-Objektinstanz übergeben bekommt, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sind darauf ausgelegt, die Sicherheit beizubehalten, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:
  - Wenn dieses Objekt in einer anderen Herkunft als dem Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- 5.1 Surround-Sound-Wiedergabe ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox-Bug 1334508](https://bugzil.la/1334508), [Firefox-Bug 1321502](https://bugzil.la/1321502), und [Firefox-Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts als Eingabeparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde veraltet — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox-Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt nun korrekt stille Samples im zurückgegebenen Buffer mit dem Wert `-Infinity` dar ([Firefox-Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wirft jetzt eine `TypeError`-Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox-Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted Media Extensions API

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt und daher haben wir ihn auch in Firefox 54 entfernt ([Firefox-Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9-Codec in verschlüsselten Streams unter Verwendung von [Clear Key](https://w3c.github.io/encrypted-media/#dfn-clear-key) und [Widevine](https://www.widevine.com/) wurde hinzugefügt ([Firefox-Bug 1338064](https://bugzil.la/1338064)).
- Zuvor war MSE nur erlaubt, WebM/VP8-Video zu verwenden, wenn das System als "schnell genug" eingestuft wurde. Jetzt wird die Wiedergabe von VP8-kodierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- Die Unterstützung für TCP-ICE-Kandidaten, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Schicht, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox-Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt die Funktion detaillierter.

## Entfernungen aus der Webplattform

### CSS

- Die `-moz`-präfixierten Versionen von `isolate`, `isolate-override` und `plaintext`-Werten für die {{cssxref("unicode-bidi")}}-Eigenschaft wurden entfernt ([Firefox-Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Angesichts der Kompatibilitäts- und Leistungsprobleme von Pipelining ist es nicht wert, dies beizubehalten, während wir uns in eine neue Welt voller HTTP/2 und anderer erheblicher, standardisierter Verbesserungen der Netzwerkperformance bewegen. Die Einstellung `network.http.pipelining` (sowie andere Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen finden Sie unter [Firefox-Bug 1340655](https://bugzil.la/1340655).
