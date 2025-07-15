---
title: Firefox 110 für Entwickler
short-title: Firefox 110
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 110, die Entwickler betreffen. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Container-Abfragen und Längeneinheiten für Container-Abfragen werden jetzt standardmäßig unterstützt. Für mehr Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten, siehe die [Dokumentation zu CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) ([Firefox Bug 1809720](https://bugzil.la/1809720)).
- Die [color-gamut Mediaabfrage](/de/docs/Web/CSS/@media/color-gamut) wird jetzt unterstützt ([Firefox Bug 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Reference/Elements/datalist#color_type) Attribut wird in `<input>` Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox Bug 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/@page) At-Regel unterstützt jetzt benannte Seiten, was es einem Benutzer ermöglicht, Seitenumbrüche für spezifische Selektoren mit der [`page`](/de/docs/Web/CSS/page) Eigenschaft zu erstellen ([Firefox Bug 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [nativen Fehlertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) schließt jetzt die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft in Arbeitern ein, wenn [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet werden. Mit dieser Ergänzung funktioniert das Klonen von nativen Fehlerstapeln jetzt für alle Methoden, die den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Hauptthread als auch in Arbeitern. (Siehe [Firefox Bug 1774866](https://bugzil.la/1774866) für mehr Details.)

### APIs

- Die `midi`-Erlaubnis der [Permissions API](/de/docs/Web/API/Permissions_API) wird jetzt unterstützt. Dies ermöglicht es, den Berechtigungsstatus für die Nutzung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abzufragen ([Firefox Bug 1772166](https://bugzil.la/1772166)).

- [`ReadableStream`](/de/docs/Web/API/ReadableStream) unterstützt jetzt [asynchrone Iteration über die Chunks in einem Stream](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of` Syntax ([Firefox Bug 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt jetzt das Senden der verfügbaren Kodierungen bei der Hinzufügung eines Transceivers zu einer Peer-Verbindung und auch das Abrufen der aktiven Kodierung eines Senders. Insbesondere unterstützt [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) jetzt die Verwendung der [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Option im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init) Parameterobjekt, und `active` kann verwendet werden, um festzustellen, ob die Kodierung zum Senden von Daten verwendet wird. (Siehe [Firefox Bug 1676855](https://bugzil.la/1676855) für mehr Details.)

- WebRTC-Methoden [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) entsprechen jetzt der Spezifikation ([Firefox Bug 1401592](https://bugzil.la/1401592)).

#### DOM

- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) wird unterstützt, was es JavaScript ermöglicht, auf den Namen und die Abfrage zuzugreifen, die in einer {{cssxref("@container")}} At-Regeldifinition verwendet werden ([Firefox Bug 1787173](https://bugzil.la/1787173)).

- Elemente verlieren jetzt den Fokus, wenn ein Stil angewendet wird, der sie ungeeignet macht, den Fokus zu halten, wie `hidden`, und das [`blur` event](/de/docs/Web/API/Element/blur_event) wird ausgelöst. Der Fokus wird dann auf den Viewport verschoben. Zuvor blieb der Fokus beim Element. (Siehe [Firefox Bug 1810077](https://bugzil.la/1810077) für mehr Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die `network.beforeRequestSent` ([Firefox Bug 1790368](https://bugzil.la/1790368)), `network.responseStarted` ([Firefox Bug 1790370](https://bugzil.la/1790370)) und `network.responseCompleted` ([Firefox Bug 1790372](https://bugzil.la/1790372)) Ereignisse hinzugefügt.

- Unterstützung für den `browsingContext.captureScreenshot` Befehl hinzugefügt, um vollständige Seitenscreenshots zu erfassen ([Firefox Bug 1800086](https://bugzil.la/1800086)).

- Unterstützung für die Serialisierung und Deserialisierung von generischen Plattformobjekten ([Firefox Bug 1792524](https://bugzil.la/1792524)) und für `NodeList` und `HTMLCollection` Plattformobjekte ([Firefox Bug 1802284](https://bugzil.la/1802284)) hinzugefügt.

- Ein `timestamp` Feld zu den `browsingContext.domContentLoaded` und `browsingContext.load` Ereignissen hinzugefügt ([Firefox Bug 1790378](https://bugzil.la/1790378)).

- Ein `type` Feld zur Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox Bug 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Knoten (Element- und Schattenwurzelreferenzen) wurde vom übergeordneten Prozess zum Webinhalt-Prozess verschoben, entsprechend den letzten Änderungen in WebDriver Classic ([Firefox Bug 1692468](https://bugzil.la/1692468)).

- Die JSON-Serialisierungs- und Deserialisierungsalgorithmen wurden verbessert, um mit der WebDriver-Classic-Spezifikation konform zu sein ([Firefox Bug 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-on-Entwickler

- Die `"webRequestFilterResponse"` [API-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Erlaubnis ermöglicht den Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Erlaubnis kann als optionale Erlaubnis angegeben werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für mehr Informationen zur Verwendung dieser Erlaubnis ([Firefox Bug 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor` Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt jetzt den Wert der standardmäßigen Zoomfaktoreinstellung zurück ([Firefox Bug 1772166](https://bugzil.la/1772166)).
