---
title: Firefox 110 Versionshinweise für Entwickler
short-title: Firefox 110
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 110, die Entwickler betreffen. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Containerabfragen und Längeneinheiten für Containerabfragen werden jetzt standardmäßig unterstützt. Weitere Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten finden Sie in der [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) Dokumentation ([Firefox Fehler 1809720](https://bugzil.la/1809720)).
- Die [color-gamut Medienabfrage](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) wird jetzt unterstützt ([Firefox Fehler 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Reference/Elements/datalist#color_type) Attribut wird in `<input>` Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox Fehler 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/Reference/At-rules/@page) At-Regel unterstützt nun benannte Seiten, die es dem Benutzer ermöglichen, Seitenumbrüche für spezifische Selektoren mit der [`page`](/de/docs/Web/CSS/Reference/Properties/page) Eigenschaft zu erstellen ([Firefox Fehler 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [nativen Fehlertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) beinhaltet nun die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft in Workern, wenn [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet werden. Mit dieser Ergänzung funktioniert das Klonen nativer Fehler-Stacks nun für alle Methoden, die den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Haupt-Thread als auch in Workern. (Siehe [Firefox Fehler 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

- Die `midi` Berechtigung der [Permission API](/de/docs/Web/API/Permissions_API) wird nun unterstützt. Dies ermöglicht das Abfragen des Berechtigungsstatus für die Nutzung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) ([Firefox Fehler 1772166](https://bugzil.la/1772166)).

- [`ReadableStream`](/de/docs/Web/API/ReadableStream) unterstützt jetzt [asynchrone Iteration über die Chunks in einem Stream](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of` Syntax ([Firefox Fehler 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt jetzt das Senden des Satzes verfügbarer Kodierungen beim Hinzufügen eines Transceivers zu einer Peer-Verbindung und das Abrufen der aktiven Kodierung, die einem Sender zugeordnet ist. Speziell unterstützt [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) jetzt die Verwendung der [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Option im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init) Parameterobjekt, und `active` kann verwendet werden, um zu bestimmen, ob die Kodierung zum Senden von Daten verwendet wird. (Siehe [Firefox Fehler 1676855](https://bugzil.la/1676855) für mehr Details.)

- WebRTC-Methoden [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) sind jetzt konform mit der Spezifikation ([Firefox Fehler 1401592](https://bugzil.la/1401592)).

#### DOM

- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) wird unterstützt, was es JavaScript ermöglicht, auf den Namen und die Abfrage zuzugreifen, die in einer {{cssxref("@container")}} At-Regel definiert sind ([Firefox Fehler 1787173](https://bugzil.la/1787173)).

- Elemente verlieren nun den Fokus, wenn ein Stil angewendet wird, der sie unfähig macht, den Fokus zu halten, wie z.B. `hidden`, und das [`blur` Ereignis](/de/docs/Web/API/Element/blur_event) wird ausgelöst. Der Fokus bewegt sich dann zum Viewport. Zuvor blieb der Fokus beim Element. (Siehe [Firefox Fehler 1810077](https://bugzil.la/1810077) für mehr Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die `network.beforeRequestSent` ([Firefox Fehler 1790368](https://bugzil.la/1790368)), die `network.responseStarted` ([Firefox Fehler 1790370](https://bugzil.la/1790370)) und die `network.responseCompleted` ([Firefox Fehler 1790372](https://bugzil.la/1790372)) Ereignisse hinzugefügt.

- Unterstützung für den `browsingContext.captureScreenshot` Befehl zum Erfassen von Vollseiten-Screenshots hinzugefügt ([Firefox Fehler 1800086](https://bugzil.la/1800086)).

- Unterstützung für die Serialisierung und Deserialisierung generischer Plattformobjekte hinzugefügt ([Firefox Fehler 1792524](https://bugzil.la/1792524)), und für `NodeList` und `HTMLCollection` Plattformobjekte ([Firefox Fehler 1802284](https://bugzil.la/1802284)).

- Ein `timestamp` Feld zu den `browsingContext.domContentLoaded` und `browsingContext.load` Ereignissen hinzugefügt ([Firefox Fehler 1790378](https://bugzil.la/1790378)).

- Ein `type` Feld zur Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox Fehler 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Knoten (Element- und Shadow-Root-Referenzen) wurde vom übergeordneten Prozess in den Webinhalt-Prozess verschoben, basierend auf den Änderungen am klassischen WebDriver ([Firefox Fehler 1692468](https://bugzil.la/1692468)).

- Die JSON-Serialisierungs- und Deserialisierungsalgorithmen wurden verbessert, um konform mit der klassischen WebDriver-Spezifikation zu sein ([Firefox Fehler 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-on-Entwickler

- Die `"webRequestFilterResponse"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Verwendung dieser Berechtigung ([Firefox Fehler 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor` Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt jetzt den Wert der Standard-Zoomfaktor-Einstellung zurück ([Firefox Fehler 1772166](https://bugzil.la/1772166)).
