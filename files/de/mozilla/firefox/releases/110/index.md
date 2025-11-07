---
title: Firefox 110 Versionshinweise für Entwickler
short-title: Firefox 110
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 110, die Entwickler betreffen. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Container-Abfragen und Container-Abfrage-Längeneinheiten werden jetzt standardmäßig unterstützt.
  Für weitere Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten siehe die [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) Dokumentation ([Firefox-Bug 1809720](https://bugzil.la/1809720)).
- Die [color-gamut media query](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) wird jetzt unterstützt ([Firefox-Bug 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Reference/Elements/datalist#color_type)-Attribut wird in `<input>`-Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox-Bug 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/Reference/At-rules/@page) At-Regel unterstützt jetzt benannte Seiten, was es dem Benutzer ermöglicht, Seitenumbrüche für spezifische Selektoren mit der [`page`](/de/docs/Web/CSS/Reference/Properties/page)-Eigenschaft zu erstellen ([Firefox-Bug 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [nativen Fehlertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) umfasst jetzt die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)-Eigenschaft in Workern, wenn [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet werden.
  Mit dieser Erweiterung funktioniert das Klonen von nativen Fehler-Stacks nun für alle Methoden, die den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Hauptthread als auch in Workern.
  (Siehe [Firefox-Bug 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

- Die `midi`-Berechtigung der [Permission API](/de/docs/Web/API/Permissions_API) wird jetzt unterstützt.
  Dies ermöglicht es, den Berechtigungsstatus zur Nutzung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) mithilfe von [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abzufragen ([Firefox-Bug 1772166](https://bugzil.la/1772166)).

- [`ReadableStream`](/de/docs/Web/API/ReadableStream) unterstützt jetzt [asynchrone Iteration über die Teile eines Streams](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of`-Syntax ([Firefox-Bug 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt jetzt das Senden des Satzes verfügbarer Kodierungen beim Hinzufügen eines Transceivers zu einer Peer-Verbindung und auch das Abrufen der aktiven Kodierung, die mit einem Sender verbunden ist.
  Insbesondere unterstützt [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) jetzt die Verwendung der [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Option im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init)-Parameterobjekt, und `active` kann verwendet werden, um festzustellen, ob die Kodierung verwendet wird, um Daten zu senden.
  (Siehe [Firefox-Bug 1676855](https://bugzil.la/1676855) für weitere Details.)

- WebRTC-Methoden [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters), und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) entsprechen jetzt der Spezifikation ([Firefox-Bug 1401592](https://bugzil.la/1401592)).

#### DOM

- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) wird unterstützt, sodass JavaScript auf den Namen und die Abfrage zugreifen kann, die in einer {{cssxref("@container")}}-Regeldefinition verwendet werden ([Firefox-Bug 1787173](https://bugzil.la/1787173)).

- Elemente verlieren jetzt den Fokus, wenn ein Stil angewendet wird, der sie für den Fokus ungeeignet macht, wie `hidden`, und das [`blur`-Ereignis](/de/docs/Web/API/Element/blur_event) ausgelöst wird.
  Der Fokus bewegt sich dann zum Viewport.
  Zuvor blieb der Fokus beim Element.
  (Siehe [Firefox-Bug 1810077](https://bugzil.la/1810077) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Ereignisse `network.beforeRequestSent` ([Firefox-Bug 1790368](https://bugzil.la/1790368)), `network.responseStarted` ([Firefox-Bug 1790370](https://bugzil.la/1790370)) und `network.responseCompleted` ([Firefox-Bug 1790372](https://bugzil.la/1790372)) hinzugefügt.

- Unterstützung für den Befehl `browsingContext.captureScreenshot` hinzugefügt, um vollständige Seiten-Screenshots zu erfassen ([Firefox-Bug 1800086](https://bugzil.la/1800086)).

- Unterstützung für die Serialisierung und Deserialisierung generischer Plattformobjekte hinzugefügt ([Firefox-Bug 1792524](https://bugzil.la/1792524)), sowie für `NodeList` und `HTMLCollection` Plattformobjekte ([Firefox-Bug 1802284](https://bugzil.la/1802284)).

- Ein `timestamp`-Feld zu den Ereignissen `browsingContext.domContentLoaded` und `browsingContext.load` hinzugefügt ([Firefox-Bug 1790378](https://bugzil.la/1790378)).

- Ein `type`-Feld zur Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox-Bug 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Nodes (Element- und Schattenwurzel-Referenzen) wurde von der Eltern- zur Webcontent-Prozessebene verschoben, entsprechend den jüngsten Änderungen im WebDriver-Klassiker ([Firefox-Bug 1692468](https://bugzil.la/1692468)).

- Verbesserte die JSON-Serialisierungs- und Deserialisierungsalgorithmen, um den WebDriver-Klassiker-Spezifikationen zu entsprechen ([Firefox-Bug 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-on-Entwickler

- Die Berechtigung `"webRequestFilterResponse"` der [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Berechtigung kann als optionale Berechtigung bereitgestellt werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Verwendung dieser Berechtigung ([Firefox-Bug 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor`-Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt jetzt den Wert der Standardzoomfaktor-Einstellung zurück ([Firefox-Bug 1772166](https://bugzil.la/1772166)).
