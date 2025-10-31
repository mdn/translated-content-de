---
title: Firefox 110 Versionshinweise für Entwickler
short-title: Firefox 110
slug: Mozilla/Firefox/Releases/110
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 110, die Entwickler betreffen werden. Firefox 110 wurde am 14. Februar 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Containerabfragen und Einheiten für Containerabfragen werden nun standardmäßig unterstützt.
  Für weitere Informationen zu diesen Abfragen und den zugehörigen Längeneinheiten, siehe die [Dokumentation zu CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) ([Firefox Fehler 1809720](https://bugzil.la/1809720)).
- Die [color-gamut Medienabfrage](/de/docs/Web/CSS/@media/color-gamut) wird jetzt unterstützt ([Firefox Fehler 1422237](https://bugzil.la/1422237)).
- Das [`list`](/de/docs/Web/HTML/Reference/Elements/datalist#color_type) Attribut wird in `<input>` Elementen mit `type="color"` unter Windows und Linux unterstützt ([Firefox Fehler 960984](https://bugzil.la/960984)).
- Die [`@page`](/de/docs/Web/CSS/@page) At-Regel unterstützt nun benannte Seiten, was es einem Benutzer ermöglicht, Seitenumbrüche für bestimmte Selektoren unter Verwendung der [`page`](/de/docs/Web/CSS/Reference/Properties/page) Eigenschaft zu erstellen ([Firefox Fehler 1787947](https://bugzil.la/1787947)).

### JavaScript

- Die Serialisierung von [nativen Error-Typen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) enthält nun die [`stack`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) Eigenschaft in Arbeitern, wenn [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwendet werden.
  Mit dieser Ergänzung funktioniert das Klonen nativer Fehlerstapel nun für alle Methoden, die den [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwenden, sowohl im Hauptthread als auch in Arbeitern.
  (Siehe [Firefox Fehler 1774866](https://bugzil.la/1774866) für weitere Details.)

### APIs

- Die `midi` Berechtigung der [Permission API](/de/docs/Web/API/Permissions_API) wird jetzt unterstützt.
  Dies ermöglicht es, den Berechtigungsstatus für die Verwendung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) über [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abzufragen ([Firefox Fehler 1772166](https://bugzil.la/1772166)).

- [`ReadableStream`](/de/docs/Web/API/ReadableStream) unterstützt jetzt die [asynchrone Iteration über die Chunks in einem Stream](/de/docs/Web/API/ReadableStream#async_iteration) mit der `for await...of` Syntax ([Firefox Fehler 1734244](https://bugzil.la/1734244)).

- WebRTC unterstützt nun das Senden des Satzes verfügbarer Kodierungen beim Hinzufügen eines Senders zu einer Peerverbindung und erhält zudem die aktive Kodierung, die mit einem Sender verbunden ist.
  Insbesondere unterstützt [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) jetzt die Verwendung der Option [`sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) im [`init`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#init) Parameterobjekt, und `active` kann verwendet werden, um zu bestimmen, ob die Kodierung verwendet wird, um Daten zu senden.
  (Siehe [Firefox Fehler 1676855](https://bugzil.la/1676855) für weitere Details.)

- Die WebRTC-Methoden [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters), [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) sind nun konform mit der Spezifikation ([Firefox Fehler 1401592](https://bugzil.la/1401592)).

#### DOM

- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) wird unterstützt, was es JavaScript ermöglicht, auf den Namen und die Abfrage zuzugreifen, die in einer {{cssxref("@container")}} At-Regel-Definition verwendet werden ([Firefox Fehler 1787173](https://bugzil.la/1787173)).

- Elemente verlieren nun den Fokus, wenn ein Stil angewendet wird, der sie nicht mehr in Frage kommen lässt, den Fokus zu halten, wie zum Beispiel `hidden`, und das [`blur`-Ereignis](/de/docs/Web/API/Element/blur_event) wird ausgelöst.
  Der Fokus bewegt sich dann zum Viewport.
  Zuvor blieb der Fokus beim Element.
  (Siehe [Firefox Fehler 1810077](https://bugzil.la/1810077) für weitere Details.)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die `network.beforeRequestSent` ([Firefox Fehler 1790368](https://bugzil.la/1790368)), `network.responseStarted` ([Firefox Fehler 1790370](https://bugzil.la/1790370)) und `network.responseCompleted` ([Firefox Fehler 1790372](https://bugzil.la/1790372)) Ereignisse hinzugefügt.

- Unterstützung für den `browsingContext.captureScreenshot` Befehl zum Aufnehmen ganzer Seiten-Screenshots hinzugefügt ([Firefox Fehler 1800086](https://bugzil.la/1800086)).

- Unterstützung für die Serialisierung und Deserialisierung generischer Plattform-Objekte hinzugefügt ([Firefox Fehler 1792524](https://bugzil.la/1792524)), sowie für `NodeList` und `HTMLCollection` Plattform-Objekte ([Firefox Fehler 1802284](https://bugzil.la/1802284)).

- Ein `timestamp` Feld zu den `browsingContext.domContentLoaded` und `browsingContext.load` Ereignissen hinzugefügt ([Firefox Fehler 1790378](https://bugzil.la/1790378)).

- Ein `type` Feld zur Antwort für `script.evaluate` und `script.callFunction` hinzugefügt, um entweder `success` oder `exception` Ergebnisse anzuzeigen ([Firefox Fehler 1803599](https://bugzil.la/1803599)).

#### Marionette

- Der Cache für bekannte Knoten (Element- und Shadow-Root-Referenzen) wurde nach den jüngsten Änderungen des klassischen WebDriver vom Elternprozess in den Web-Inhaltsprozess verschoben ([Firefox Fehler 1692468](https://bugzil.la/1692468)).

- Die JSON-Serialisierungs- und Deserialisierungsalgorithmen wurden verbessert, um mit der klassischen WebDriver-Spezifikation konform zu sein ([Firefox Fehler 1794078](https://bugzil.la/1794078)).

## Änderungen für Add-On-Entwickler

- Die `"webRequestFilterResponse"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}}. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Weitere Informationen zur Verwendung dieser Berechtigung finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox Fehler 1809235](https://bugzil.la/1809235)).
- Die `defaultZoomFactor` Eigenschaft von {{WebExtAPIRef("tabs.ZoomSettings")}} gibt jetzt den Wert der Standardeinstellung für den Zoomfaktor zurück ([Firefox Fehler 1772166](https://bugzil.la/1772166)).
