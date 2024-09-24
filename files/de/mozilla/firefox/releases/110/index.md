---
title: Firefox 110 für Entwickler
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 110, die Entwickler betreffen werden. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Container-Abfragen und Container-Abfrage-Längeneinheiten werden nun standardmäßig unterstützt. Weitere Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten finden Sie in der [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) Dokumentation ([Firefox Bug 1809720](https://bugzil.la/1809720)).
- Die [color-gamut Media-Abfrage](/de/docs/Web/CSS/@media/color-gamut) wird jetzt unterstützt ([Firefox Bug 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Element/datalist#color_type) Attribut wird in `<input>` Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox Bug 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/@page) At-Regel unterstützt nun benannte Seiten, was es dem Benutzer ermöglicht, Seitenumbrüche für spezifische Selektoren unter Verwendung der [`page`](/de/docs/Web/CSS/page) Eigenschaft zu erstellen ([Firefox Bug 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [nativen Error-Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) beinhaltet nun die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft in Workern bei der Verwendung von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/structuredClone). Mit dieser Ergänzung funktioniert das Klonen nativer Fehlerstapel nun für alle Methoden, die den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Hauptthread als auch in Workern. (Siehe [Firefox Bug 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

- Die `midi` Berechtigung der [Permission API](/de/docs/Web/API/Permissions_API) wird jetzt unterstützt. Dadurch kann der Berechtigungsstatus für die Nutzung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) mithilfe von [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden ([Firefox Bug 1772166](https://bugzil.la/1772166)).

- {{domxref("ReadableStream")}} unterstützt nun [asynchrone Iteration über die Datenblöcke in einem Stream](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of` Syntax ([Firefox Bug 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt nun das Senden des Sets der verfügbaren Encodings beim Hinzufügen eines Transceivers zu einer Peer-Verbindung sowie das Abrufen des aktiven Encodings, das mit einem Sender verbunden ist. Insbesondere unterstützt {{domxref("RTCPeerConnection.addTransceiver()")}} nun die Nutzung der [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Option im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init) Parameterobjekt, und `active` kann verwendet werden, um festzustellen, ob die Kodierung zum Senden von Daten verwendet wird. (Siehe [Firefox Bug 1676855](https://bugzil.la/1676855) für weitere Details.)

- WebRTC Methoden {{domxref("RTCRtpSender.getParameters()")}}, {{domxref("RTCRtpSender.setParameters()")}}, und {{domxref("RTCRtpReceiver.getParameters()")}} sind nun konform mit der Spezifikation ([Firefox Bug 1401592](https://bugzil.la/1401592)).

#### DOM

- {{domxref("CSSContainerRule")}} wird unterstützt, was es JavaScript ermöglicht, auf den Namen und die Abfrage zuzugreifen, die in einer {{cssxref("@container")}} At-Regel-Definition verwendet werden ([Firefox Bug 1787173](https://bugzil.la/1787173)).

- Elemente verlieren nun den Fokus, wenn ein Stil angewendet wird, der sie unfähig macht, den Fokus zu halten, wie `hidden`, und das [`blur` Ereignis](/de/docs/Web/API/Element/blur_event) wird ausgelöst. Der Fokus bewegt sich dann zum Ansichtsfenster. Zuvor würde der Fokus auf dem Element verbleiben. (Siehe [Firefox Bug 1810077](https://bugzil.la/1810077) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Ereignisse `network.beforeRequestSent` ([Firefox Bug 1790368](https://bugzil.la/1790368)), `network.responseStarted` ([Firefox Bug 1790370](https://bugzil.la/1790370)), und `network.responseCompleted` ([Firefox Bug 1790372](https://bugzil.la/1790372)) hinzugefügt.

- Unterstützung für den Befehl `browsingContext.captureScreenshot` zur Erstellung von Bildschirmfotos ganzer Seiten hinzugefügt ([Firefox Bug 1800086](https://bugzil.la/1800086)).

- Unterstützung für die Serialisierung und Deserialisierung von generischen Plattform-Objekten hinzugefügt ([Firefox Bug 1792524](https://bugzil.la/1792524)), sowie für `NodeList` und `HTMLCollection` Plattform-Objekte ([Firefox Bug 1802284](https://bugzil.la/1802284)).

- Ein `timestamp` Feld zu den Ereignissen `browsingContext.domContentLoaded` und `browsingContext.load` hinzugefügt ([Firefox Bug 1790378](https://bugzil.la/1790378)).

- Ein `type` Feld zur Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox Bug 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Knoten (Element- und Shadow-Root-Referenzen) wurde vom Elternprozess zum Webinhaltsprozess verlagert, im Anschluss an jüngste Änderungen im WebDriver-Classic ([Firefox Bug 1692468](https://bugzil.la/1692468)).

- Die JSON-Serialisierungs- und Deserialisierungsalgorithmen wurden verbessert, um konform mit der WebDriver-Classic-Spezifikation zu sein ([Firefox Bug 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-on-Entwickler

- Die `"webRequestFilterResponse"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) hinzugefügt. Diese Berechtigung gewährt Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Weitere Informationen zur Verwendung dieser Berechtigung finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox Bug 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor` Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt jetzt den Wert der Standard-Zoomfaktor-Einstellung zurück ([Firefox Bug 1772166](https://bugzil.la/1772166)).

## Ältere Versionen

{{Firefox_for_developers}}
