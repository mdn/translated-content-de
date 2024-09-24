---
title: Firefox 54 für Entwickler
slug: Mozilla/Firefox/Releases/54
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{FirefoxSidebar}}

Firefox 54 wurde am 13. Juni 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Zusammenfassung der Netzwerk-Anfragen beinhaltet jetzt die tatsächlich übertragene Datenmenge ("transferred size"), ebenso wie die Ansicht der Leistungsanalyse ([Firefox Fehler 1168376](https://bugzil.la/1168376)).
- Die Kopfzeilenansicht der Netzwerk-Anfragen verlinkt jetzt zur zugehörigen Dokumentation auf MDN ([Firefox Fehler 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} unterstützt nun [Grundformen](/de/docs/Web/CSS/CSS_shapes) ([Firefox Fehler 1247229](https://bugzil.la/1247229)).
- Firefox's Implementierungen von CSS Flexbox und CSS-Ausrichtung implementieren nun die aktualisierte Spezifikationssprache für Interaktionen zwischen den Eigenschaften {{cssxref("align-items")}} und {{cssxref("align-self")}} sowie zwischen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} ([Firefox Fehler 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}}-Elemente der Typen `checkbox` und `radio` mit {{cssxref("appearance", "-moz-appearance")}}`: none;` werden jetzt, zum Ausgleich mit anderen Browsern, als nicht-ersetzte Elemente behandelt ([Firefox Fehler 605985](https://bugzil.la/605985)).
- Zuvor hatte ein Element, das mit {{cssxref("display")}}: `inline-block` gestylt war und ein Kind-Element vom Typ {{domxref("HTMLInputElement")}}, das mit `display:block` gestylt war, eine falsche Basislinie ([Firefox Fehler 1330962](https://bugzil.la/1330962)). Dies ist jetzt behoben.
- Als Mozilla dedizierte Inhalts-Threads zu Firefox einführte (durch das Electrolysis oder e10s Projekt), wurde die Unterstützung für das Styling von {{HTMLElement("option")}}-Elementen vorübergehend entfernt. Ab Firefox 54 können Sie Vorder- und Hintergrundfarben auf `<option>`-Elemente anwenden, mithilfe der {{cssxref("color")}} und {{cssxref("background-color")}}-Attribute. Weitere Informationen finden Sie unter [Firefox Fehler 910022](https://bugzil.la/910022). Beachten Sie, dass dies aufgrund mangelnden Kontrasts in Linux immer noch deaktiviert ist (siehe [Firefox Fehler 1338283](https://bugzil.la/1338283) für Fortschritte hierzu).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) senden nun das {{domxref("Element/animationcancel_event", "animationcancel")}}-Event wie erwartet, wenn eine Animation vorzeitig abbricht ([Firefox Fehler 1302648](https://bugzil.la/1302648)).
- Transparente Farben (d.h. solche mit einem Alpha-Kanal von 0) wurden unter bestimmten Umständen zur [`transparent`-Farbwert](/de/docs/Web/CSS/color_value) serialisiert; dies wurde korrigiert, sodass Firefox der Spezifikation folgt (sowie den Implementierungen anderer Browser). Weitere Informationen siehe ([Firefox Fehler 1339394](https://bugzil.la/1339394)).
- Die proprietäre Pseudoklasse `:-moz-table-border-nonzero` ist für Web-Inhalte nicht mehr verfügbar; sie ist jetzt auf Firefox's internes UA-Stylesheet beschränkt ([Firefox Fehler 1341925](https://bugzil.la/1341925)).
- \[css-grid] Inhalt mit Überlauf:auto überlappt sich im Raster ([Firefox Fehler 1348857](https://bugzil.la/1348857)).
- \[css-grid] Übertragene Mindestgröße von prozentual großen Raster-Elementen mit einem inneren Verhältnis ([Firefox Fehler 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` und `\B` in {{jsxref("RegExp")}} mit den Flags `"u"` (Unicode) und `"i"` (Groß- und Kleinschreibung ignorieren) behandeln nun U+017F (LATIN SMALL LETTER LONG S) und U+212A (KELVIN SIGN) als Wortzeichen ([Firefox Fehler 1338373](https://bugzil.la/1338373)).
- Der {{jsxref("DataView")}}-Konstruktor wirft jetzt einen {{jsxref("RangeError")}}, wenn der `byteOffset`-Parameter außerhalb von {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) liegt ([Firefox Fehler 1317382](https://bugzil.la/1317382)).
- Die Methode {{jsxref("Date.UTC()")}} wurde aktualisiert, um ECMAScript 2017 zu entsprechen, wenn weniger als zwei Argumente übergeben werden ([Firefox Fehler 1050755](https://bugzil.la/1050755)).
- Die Methode {{jsxref("Function.prototype.toString()")}} wurde aktualisiert, um der neuesten [vorgeschlagenen Spezifikation](https://tc39.es/Function-prototype-toString-revision/) zu entsprechen ([Firefox Fehler 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- Die Methode {{domxref("URL.toJSON()")}} wurde implementiert ([Firefox Fehler 1337702](https://bugzil.la/1337702)).
- Der {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}}-Konstruktor akzeptiert nun ein Record mit Strings als Init-Objekt ([Firefox Fehler 1331580](https://bugzil.la/1331580)).
- Werte, die unter {{domxref("KeyboardEvent.key")}} für druckbare Tasten zurückgegeben werden, wenn die Steuertaste ebenfalls gedrückt ist, wurden auf macOS korrigiert (außer wenn die Befehlstaste gedrückt wird) ([Firefox Fehler 1342865](https://bugzil.la/1342865)).
- Die `dom.workers.latestJSVersion`-Einstellung, die hauptsächlich implementiert wurde, um Probleme mit der Verwendung von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) in Workern zu umgehen (aufgrund von [Firefox Fehler 855665](https://bugzil.la/855665), der inzwischen behoben wurde), wurde entfernt (siehe [Firefox Fehler 1219523](https://bugzil.la/1219523)).
- Die Eigenschaft {{domxref("event.timeStamp")}} gibt jetzt eine hochauflösende monotone Zeit ({{domxref("DOMHighResTimeStamp")}}) zurück anstelle eines Werts, der die [Unixzeit](/de/docs/Glossary/Unix_time) in Millisekunden darstellt.

### Web Workers und Service Workers

- `WorkerGlobalScope.close` ist jetzt stattdessen auf {{domxref("DedicatedWorkerGlobalScope.close", "DedicatedWorkerGlobalScope")}} und {{domxref("SharedWorkerGlobalScope.close", "SharedWorkerGlobalScope")}} verfügbar. Diese Änderung wurde vorgenommen, um `close()` in Service Workern nicht verfügbar zu machen, da es dort nicht verwendet werden soll und immer eine Ausnahme auslöst, wenn es aufgerufen wird (siehe [Firefox Fehler 1336043](https://bugzil.la/1336043)).
- Die Eigenschaft {{domxref("Window.origin")}} und die {{domxref("WorkerGlobalScope.origin")}} wurden implementiert (siehe [Firefox Fehler 1306170](https://bugzil.la/1306170)).
- Die Eigenschaft {{domxref("Client.type")}} wurde implementiert (siehe [Firefox Fehler 1339844](https://bugzil.la/1339844)).
- {{domxref("Clients.matchAll()")}} gibt jetzt {{domxref("Client")}}-Objekte in der zuletzt fokussierten Reihenfolge zurück (siehe [Firefox Fehler 1266747](https://bugzil.la/1266747)).
- Einige Änderungen wurden an dem beobachteten Verhalten vorgenommen, wenn der {{domxref("Request.Request","Request()")}}-Konstruktor eine bestehende {{domxref("Request")}}-Objektinstanz übergeben bekommt, um eine neue Instanz zu erstellen. Die folgenden neuen Verhaltensweisen sollen Sicherheit erhalten, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:

  - Wenn dieses Objekt auf einem anderen Ursprung als der Konstruktoraufruf existiert, wird das {{domxref("Request.referrer")}} entfernt.
  - Wenn dieses Objekt ein {{domxref("Request.mode")}} von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

### Audio/Video

#### Allgemein

- Die Wiedergabe von 5.1 Surround Sound ist jetzt standardmäßig auf Windows, macOS und Linux aktiviert ([Firefox Fehler 1334508](https://bugzil.la/1334508), [Firefox Fehler 1321502](https://bugzil.la/1321502) und [Firefox Fehler 1323659](https://bugzil.la/1323659)).

#### Media Capture und Streams API

- Die Verwendung eines {{domxref("MediaStream")}}-Objekts als Eingabeparameter für {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} wurde abgelehnt — die Konsole zeigt nun eine Warnung an (siehe [Firefox Fehler 1334564](https://bugzil.la/1334564)). Es wird empfohlen, {{domxref("HTMLMediaElement.srcObject")}} stattdessen zu verwenden.

#### Web Audio API

- Die Methode {{domxref("AnalyserNode.getFloatFrequencyData()")}} repräsentiert nun korrekt stille Proben im zurückgegebenen Puffer mit dem Wert `-Infinity` ([Firefox Fehler 1336098](https://bugzil.la/1336098)).
- {{domxref("AudioParam.setValueCurveAtTime()")}} wirft nun eine `TypeError`-Ausnahme, wenn einer der angegebenen Werte nicht endlich ist ([Firefox Fehler 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- Der `MediaKeySession.keySystem`-String wurde aus der Spezifikation entfernt, und dementsprechend haben wir ihn in Firefox 54 entfernt ([Firefox Fehler 1335555](https://bugzil.la/1335555)).
- Unterstützung für den VP9-Codec in verschlüsselten Streams, die [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) und [Widevine](https://www.widevine.com/) verwenden, wurde hinzugefügt ([Firefox Fehler 1338064](https://bugzil.la/1338064)).
- Bisher durfte MSE nur WebM/VP8-Video verwenden, wenn das System als "schnell genug" angesehen wurde. Jetzt wird die Wiedergabe von VP8-kodierten `webm/video`-Medien immer unterstützt, unabhängig von der Systemleistung.

#### WebRTC

- Unterstützt werden TCP ICE-Kandidaten, die ursprünglich in Firefox 41 hinzugefügt wurden und jetzt standardmäßig aktiviert sind. Dadurch kann die ICE-Schicht Kandidaten berücksichtigen, die TCP anstelle des bevorzugten UDP für die Übertragung verwenden. Dies kann in Umgebungen nützlich sein, in denen UDP blockiert ist ([Firefox Fehler 1176382](https://bugzil.la/1176382)). Dieser [Blog-Post](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) erklärt das Feature im Detail.

## Entfernungen aus der Web-Plattform

### CSS

- Entfernt wurden die `-moz`-präfixierten Versionen der `isolate`, `isolate-override` und `plaintext`-Werte für die {{cssxref("unicode-bidi")}}-Eigenschaft ([Firefox Fehler 1333675](https://bugzil.la/1333675)).

### HTTP

- Die Unterstützung für HTTP/1 Pipelining wurde in Firefox 54 entfernt. Angesichts der Kompatibilitäts- und Leistungsprobleme von Pipelining ist es nicht sinnvoll, es beizubehalten, während wir in eine neue Welt voller HTTP/2 und anderer wesentlicher, standardisierter Verbesserungen der Netzwerkleistung wechseln. Die `network.http.pipelining`-Einstellung (sowie die anderen Einstellungen, die mit "network.http.pipelining" beginnen) wird jetzt ignoriert. Weitere Informationen siehe [Firefox Fehler 1340655](https://bugzil.la/1340655).

## Ältere Versionen

{{Firefox_for_developers}}
