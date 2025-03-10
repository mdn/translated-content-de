---
title: Firefox 110 für Entwickler
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 110, die Entwickler betreffen werden. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Container-Abfragen und Container-Abfrage-Längeneinheiten werden jetzt standardmäßig unterstützt.
  Für weitere Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten siehe die [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) Dokumentation ([Firefox-Bug 1809720](https://bugzil.la/1809720)).
- Die [color-gamut media query](/de/docs/Web/CSS/@media/color-gamut) wird jetzt unterstützt ([Firefox-Bug 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Element/datalist#color_type) Attribut wird in `<input>` Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox-Bug 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/@page) Regel unterstützt jetzt benannte Seiten, die es einem Benutzer ermöglichen, Seitenumbrüche für bestimmte Selektoren mit der [`page`](/de/docs/Web/CSS/page) Eigenschaft zu erstellen ([Firefox-Bug 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [native Error Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) umfasst jetzt die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft in Workern, wenn [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet werden.
  Mit dieser Ergänzung funktioniert das Klonen von nativen Fehler-Stacks jetzt für alle Methoden, die den [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Hauptthread als auch in Workern.
  (Weitere Details finden Sie unter [Firefox-Bug 1774866](https://bugzil.la/1774866)).

### APIs

- Die `midi` Berechtigung der [Permission API](/de/docs/Web/API/Permissions_API) wird jetzt unterstützt.
  Dies ermöglicht das Abfragen des Berechtigungsstatus für die Nutzung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) mit [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) ([Firefox-Bug 1772166](https://bugzil.la/1772166)).

- [`ReadableStream`](/de/docs/Web/API/ReadableStream) unterstützt jetzt [asynchrone Iteration über die Teile in einem Stream](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of` Syntax ([Firefox-Bug 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt jetzt das Senden des Satzes verfügbarer Encodings beim Hinzufügen eines Transceivers zu einer Peer-Verbindung, sowie das Abrufen des aktiven Encodings, das mit einem Sender assoziiert ist.
  Insbesondere [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) unterstützt nun die Verwendung der [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Option im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init) Parameterobjekt, und `active` kann verwendet werden, um festzustellen, ob das Encoding zum Senden von Daten verwendet wird.
  (Weitere Details finden Sie unter [Firefox-Bug 1676855](https://bugzil.la/1676855)).

- WebRTC-Methoden [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters), und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) sind jetzt mit der Spezifikation konform ([Firefox-Bug 1401592](https://bugzil.la/1401592)).

#### DOM

- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) wird unterstützt, was JavaScript erlaubt, auf den Namen und die Abfrage zuzugreifen, die in einer {{cssxref("@container")}}-Regeldefinition verwendet werden ([Firefox-Bug 1787173](https://bugzil.la/1787173)).

- Elemente verlieren jetzt den Fokus, wenn ein Stil angewendet wird, der sie ineligible macht, den Fokus zu halten, wie `hidden`, und das [`blur` Ereignis](/de/docs/Web/API/Element/blur_event) wird ausgelöst.
  Der Fokus bewegt sich dann zum Viewport.
  Bisher würde der Fokus beim Element bleiben.
  (Weitere Details finden Sie unter [Firefox-Bug 1810077](https://bugzil.la/1810077)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung wurde hinzugefügt für die `network.beforeRequestSent` ([Firefox-Bug 1790368](https://bugzil.la/1790368)), `network.responseStarted` ([Firefox-Bug 1790370](https://bugzil.la/1790370)), und `network.responseCompleted` ([Firefox-Bug 1790372](https://bugzil.la/1790372)) Ereignisse.

- Unterstützung wurde hinzugefügt für den `browsingContext.captureScreenshot` Befehl, um vollständige Seiten-Screenshots zu erfassen ([Firefox-Bug 1800086](https://bugzil.la/1800086)).

- Unterstützung wurde hinzugefügt für die Serialisierung und Deserialisierung von generischen Plattformobjekten ([Firefox-Bug 1792524](https://bugzil.la/1792524)), sowie für `NodeList` und `HTMLCollection` Plattformobjekte ([Firefox-Bug 1802284](https://bugzil.la/1802284)).

- Ein `timestamp` Feld wurde den `browsingContext.domContentLoaded` und `browsingContext.load` Ereignissen hinzugefügt ([Firefox-Bug 1790378](https://bugzil.la/1790378)).

- Ein `type` Feld wurde der Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox-Bug 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Knoten (Element- und Shadow-Root-Referenzen) wurde vom Parent-Prozess in den Web-Content-Prozess verschoben, nach jüngsten Änderungen an WebDriver Classic ([Firefox-Bug 1692468](https://bugzil.la/1692468)).

- Die JSON-Serialisierungs- und Deserialisierungs-Algorithmen wurden verbessert, um mit der WebDriver Classic-Spezifikation konform zu sein ([Firefox-Bug 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-on-Entwickler

- Die `"webRequestFilterResponse"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Verwendung dieser Berechtigung ([Firefox-Bug 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor` Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt nun den Wert der Standard-Zoomfaktoreinstellung zurück ([Firefox-Bug 1772166](https://bugzil.la/1772166)).

## Ältere Versionen

{{Firefox_for_developers}}
