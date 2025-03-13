---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne die gesamte Seite neu laden zu müssen. Dadurch kann eine Webseite nur einen Teil der Seite aktualisieren, ohne das, was der Benutzer gerade tut, zu unterbrechen.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` verwendet werden, um jeden Datentyp abzurufen, nicht nur XML.

Wenn Ihre Kommunikation das Empfangen von Ereignis- oder Meldungsdaten von einem Server beinhalten muss, sollten Sie die Verwendung von [server-sent events](/de/docs/Web/API/Server-sent_events) über das [`EventSource`](/de/docs/Web/API/EventSource)-Interface in Betracht ziehen. Für vollduplexe Kommunikation kann [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss vor allen anderen Methodenaufrufen aufgerufen werden.

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XMLHttpRequest.readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Status der Anfrage repräsentiert.
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType), das den Antwortinhalt enthält.
- [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Antwort auf die Anfrage als Text enthält, oder `null`, wenn die Anfrage nicht erfolgreich war oder noch nicht gesendet wurde.
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
  - : Gibt den Typ der Antwort an.
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte URL der Antwort oder den leeren String zurück, wenn die URL null ist.
- [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das die Antwort auf die Anfrage enthält, oder `null`, wenn die Anfrage nicht erfolgreich war, noch nicht gesendet wurde oder nicht als XML oder HTML geparst werden kann. Nicht verfügbar in [Web Workers](/de/docs/Web/API/Web_Workers_API).
- [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) {{ReadOnlyInline}}
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) der Anfrage zurück.
- [`XMLHttpRequest.statusText`](/de/docs/Web/API/XMLHttpRequest/statusText) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der die vom HTTP-Server zurückgegebene Antwortzeichenkette enthält. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) enthält dies den gesamten Text der Antwortnachricht (z. B. `"OK"`).

    > [!NOTE]
    > Laut der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}}, definiert HTTP/2 keine Möglichkeit, die Version oder den Grundsatz, der in einer HTTP/1.1-Statuszeile enthalten ist, zu übertragen.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage in Anspruch nehmen kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), das den Hochladeprozess repräsentiert.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn domänenübergreifende `Access-Control`-Anfragen unter Verwendung von Anmeldeinformationen wie Cookies oder Authentifizierungsheadern durchgeführt werden sollen; ansonsten `false`.

### Nicht standardisierte Eigenschaften

- [`XMLHttpRequest.channel`](/de/docs/Web/API/XMLHttpRequest/channel) {{ReadOnlyInline}}
  - : Der Kanal, der vom Objekt beim Ausführen der Anfrage verwendet wird.
- [`XMLHttpRequest.mozAnon`](/de/docs/Web/API/XMLHttpRequest/mozAnon) {{ReadOnlyInline}}
  - : Ein Boolean. Wenn `true`, wird die Anfrage ohne Cookie- und Authentifizierungsheader gesendet.
- [`XMLHttpRequest.mozSystem`](/de/docs/Web/API/XMLHttpRequest/mozSystem) {{ReadOnlyInline}}
  - : Ein Boolean. Wenn `true`, wird die Same-Origin-Richtlinie bei der Anfrage nicht durchgesetzt.
- [`XMLHttpRequest.mozBackgroundRequest`](/de/docs/Web/API/XMLHttpRequest/mozBackgroundRequest)
  - : Ein Boolean. Er gibt an, ob das Objekt eine Hintergrunddienstanfrage darstellt oder nicht.

## Instanzmethoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwortheader, getrennt durch {{Glossary("CRLF", "CRLF")}}, als String zurück, oder `null`, wenn keine Antwort empfangen wurde.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt den String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den vom Server zurückgegebenen MIME-Typ.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was der Standard ist), gibt diese Methode zurück, sobald die Anfrage gesendet wurde.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine Attributionsquelle oder ein Ereignis zu registrieren.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Setzt den Wert eines HTTP-Anfrageheaders. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

## Ereignisse

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, beispielsweise weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.
    Auch verfügbar über die `onabort`-Ereignishandler-Eigenschaft.
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
  - : Wird ausgelöst, wenn bei der Anfrage ein Fehler aufgetreten ist.
    Auch verfügbar über die `onerror`-Ereignishandler-Eigenschaft.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wird.
    Auch verfügbar über die `onload`-Ereignishandler-Eigenschaft.
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist, unabhängig davon, ob sie erfolgreich war (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder nicht erfolgreich war (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)).
    Auch verfügbar über die `onloadend`-Ereignishandler-Eigenschaft.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch verfügbar über die `onloadstart`-Ereignishandler-Eigenschaft.
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Wird regelmäßig ausgelöst, wenn eine Anfrage mehr Daten empfängt.
    Auch verfügbar über die `onprogress`-Ereignishandler-Eigenschaft.
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert.
    Auch verfügbar über die `onreadystatechange`-Ereignishandler-Eigenschaft.
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund abgelaufener voreingestellter Zeit beendet wird.
    Auch verfügbar über die `ontimeout`-Ereignishandler-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisieren eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
