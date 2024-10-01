---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Zusammenfassung von Netzwerk-Anfragen enthält jetzt die tatsächlich übertragene Datenmenge ("transferred size"), ebenso wie die Leistungsanalyseansicht ([Firefox Bug 1168376](https://bugzil.la/1168376)).
- Die Ansicht von Netzwerk-Anfrage-Headern enthält jetzt Links zur entsprechenden Dokumentation auf MDN ([Firefox Bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt nun [einfache Formen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Bug 1247229](https://bugzil.la/1247229)).
- Firefox's Implementierungen von CSS Flexbox und CSS-Ausrichtung implementieren nun aktualisierte Sprachspezifikationen für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}} Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance")}}`: none;` werden jetzt nicht mehr als ersetzte Elemente behandelt, um die Kompatibilität mit anderen Browsern zu gewährleisten ([Firefox Bug 605985](https://bugzil.la/605985)).
- Früher hatte ein mit {{cssxref("display")}}: `inline-block` gestyltes Element mit einem Kind-Element des Typs [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), das mit `display:block` gestylt ist, eine falsche Baseline ([Firefox Bug 1330962](https://bugzil.la/1330962)). Dies wurde nun behoben.
- Als Mozilla dedizierte Inhaltsthreads in Firefox einführte (durch das Electrolysis- oder e10s-Projekt), wurde die Unterstützung zur Gestaltung von {{HTMLElement("option")}} Elementen vorübergehend entfernt. Ab Firefox 54 können Sie Vordergrund- und Hintergrundfarben wieder auf `<option>` Elemente anwenden, mithilfe der {{cssxref("color")}} und {{cssxref("background-color")}} Attribute. Siehe [Firefox Bug 910022](https://bugzil.la/910022) für weitere Informationen. Beachten Sie, dass dies immer noch unter Linux deaktiviert ist aufgrund mangelnden Kontrasts (siehe [Firefox Bug 1338283](https://bugzil.la/1338283) für Fortschritte hierzu).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden jetzt das [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event) Ereignis wie erwartet, wenn eine Animation vorzeitig abgebrochen wird ([Firefox Bug 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alphakanal von 0) wurden in bestimmten Situationen in das [`transparent` Farbstichwort](/de/docs/Web/CSS/color_value) serialisiert; dies wurde behoben, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Siehe ([Firefox Bug 1339394](https://bugzil.la/1339394) für weitere Informationen.
- Die proprietäre `:-moz-table-border-nonzero` Pseudo-Klasse ist nicht länger für Webinhalte verfügbar; sie ist jetzt auf Firefox's internem UA-Stylesheet beschränkt ([Firefox Bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsischer Inhalt mit overflow:auto überlappt im Grid ([Firefox Bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragener Mindestgrößenbeitrag eines prozentual großen Gitterelements mit einem intrinsischen Verhältnis ([Firefox Bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (nicht unterscheidend hinsichtlich Groß- und Kleinschreibung) behandeln nun U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Bug 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}} Konstruktor wirft nun einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Bug 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente übergeben werden ([Firefox Bug 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode [`URL.toJSON()`](/de/docs/Web/API/URL/toJSON) wurde implementiert ([Firefox Bug 1337702](https://bugzil.la/1337702)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert nun ein Record, das Zeichenfolgen als Init-Objekt enthält ([Firefox Bug 1331580](https://bugzil.la/1331580)).
- Werte, die im [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) für druckbare Tasten zurückgegeben werden, wenn die Steuertaste ebenfalls gedrückt wird, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Bug 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion` Voreinstellung, die hauptsächlich implementiert wurde, um Probleme mit der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Bug 855665](https://bugzil.la/855665), der inzwischen behoben wurde) wurde entfernt (siehe [Firefox Bug 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) gibt jetzt eine hochauflösende monotone Zeit zurück ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) anstelle eines Werts, der die {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden darstellt.

### Web-Worker und Service-Worker

- `WorkerGlobalScope.close` ist jetzt stattdessen auf [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope/close) verfügbar. Diese Änderung wurde vorgenommen, um zu verhindern, dass `close()` auf Service Workern verfügbar ist, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox Bug 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft [`Window.origin`](/de/docs/Web/API/Window/origin) und die [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) wurden implementiert (siehe [Firefox Bug 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft [`Client.type`](/de/docs/Web/API/Client/type) wurde implementiert (siehe [Firefox Bug 1339844](https://bugzil.la/1339844)).
- [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) gibt jetzt [`Client`](/de/docs/Web/API/Client) Objekte in der Reihenfolge des zuletzt fokussierten zurück (siehe [Firefox Bug 1266747](https://bugzil.la/1266747)).
- Es wurden einige Änderungen am beobachteten Verhalten vorgenommen, wenn dem Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) ein bestehendes [`Request`](/de/docs/Web/API/Request) Objekt-Exemplar übergeben wird, um ein neues Exemplar zu erstellen. Die folgenden neuen Verhaltensweisen sollen die Sicherheit bewahren, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:

  - Wenn dieses Objekt auf einem anderen Ursprung zum Konstruktoraufruf existiert, wird [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
  - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode` Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die 5.1 Surround-Sound-Wiedergabe ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox Bug 1334508](https://bugzil.la/1334508), [Firefox Bug 1321502](https://bugzil.la/1321502) und [Firefox Bug 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Nutzung eines [`MediaStream`](/de/docs/Web/API/MediaStream) Objekts als Eingangsparameter für [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wurde als veraltet markiert — die Konsole zeigt jetzt eine Warnung an (siehe [Firefox Bug 1334564](https://bugzil.la/1334564)). Es wird empfohlen, stattdessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) zu verwenden.

#### Web Audio API

- Die Methode [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) stellt nun korrekt stille Samples im zurückgegebenen Buffer mit dem Wert `-Infinity` dar ([Firefox Bug 1336098](https://bugzil.la/1336098)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wirft jetzt eine `TypeError` Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Bug 1308437](https://bugzil.la/1308437)).

#### Encrypted Media Extensions API

- Der `MediaKeySession.keySystem` String wurde aus der Spezifikation entfernt, und dementsprechend haben wir ihn aus Firefox 54 entfernt ([Firefox Bug 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9-Codec in verschlüsselten Streams mit [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) und [Widevine](https://www.widevine.com/) wurde hinzugefügt ([Firefox Bug 1338064](https://bugzil.la/1338064)).
- Zuvor durfte MSE WebM/VP8-Video nur verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-kodierten `webm/video` Medien unabhängig von der Systemleistung immer unterstützt.

#### WebRTC

- TCP ICE-Kandidatensupport, ursprünglich in Firefox 41 hinzugefügt, ist jetzt standardmäßig aktiviert. Dies ermöglicht es der ICE-Ebene, Kandidaten zu berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Bug 1176382](https://bugzil.la/1176382)). Dieser [Blogbeitrag](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature im Detail.

## Entfernungen von der Webplattform

### CSS

- Die `-moz` präfixierten Versionen der `isolate`, `isolate-override` und `plaintext` Werte für die {{cssxref("unicode-bidi")}} Eigenschaft wurden entfernt ([Firefox Bug 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1-Pipelining wurde in Firefox 54 entfernt. Diese aufrechtzuerhalten, während wir in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung übergehen, ist aufgrund der Kompatibilitäts- und Leistungsprobleme von Pipelining nicht lohnenswert. Die `network.http.pipelining` Voreinstellung (sowie die anderen Voreinstellungen, die mit "network.http.pipelining" beginnen) wird nun ignoriert. Siehe [Firefox Bug 1340655](https://bugzil.la/1340655) für weitere Informationen.

## Ältere Versionen

{{Firefox_for_developers}}
