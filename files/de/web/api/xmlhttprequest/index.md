---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne die gesamte Seite neu zu laden. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne die Aktionen des Benutzers zu unterbrechen.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` verwendet werden, um jegliche Art von Daten abzurufen, nicht nur XML.

Wenn Ihre Kommunikation das Empfangen von Ereignisdaten oder Nachrichtendaten von einem Server umfassen muss, ziehen Sie die Verwendung von [server-sent events](/de/docs/Web/API/Server-sent_events) über die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle in Betracht. Für Vollduplex-Kommunikation könnte [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss aufgerufen werden, bevor andere Methoden aufgerufen werden.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XMLHttpRequest.readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Zustand der Anforderung darstellt.
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType), der den Antwort-Entity-Body enthält.
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

  - : Gibt einen String zurück, der den von dem HTTP-Server zurückgegebenen Antwort-String enthält. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) enthält dies den gesamten Text der Antwortnachricht (zum Beispiel `"OK"`).

    > [!NOTE]
    > Gemäß der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keine Möglichkeit, die Version oder den Grundsatz zu übertragen, der in einer HTTP/1.1-Statuszeile enthalten ist.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage dauern kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), das den Upload-Prozess darstellt.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn `Access-Control`-Anfragen mit Anmeldeinformationen wie Cookies oder Authorisierungs-Headern gemacht werden sollen; andernfalls `false`.

### Nicht-standardisierte Eigenschaften

- `XMLHttpRequest.mozAnon` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein Boolean. Wenn wahr, wird die Anfrage ohne Cookie- und Authentifizierungs-Header gesendet.
- `XMLHttpRequest.mozSystem` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein Boolean. Wenn wahr, wird die Same-Origin-Policy bei der Anfrage nicht durchgesetzt.

## Instanzmethoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwort-Header zurück, getrennt durch {{Glossary("CRLF", "CRLF")}}, als String, oder `null`, wenn keine Antwort empfangen wurde.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt den String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den vom Server zurückgegebenen MIME-Typ.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was der Standard ist), gibt diese Methode zurück, sobald die Anfrage gesendet wurde.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine Attributionsquelle oder ein Auslöseevent registrieren kann.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Setzt den Wert eines HTTP-Anfrage-Headers. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen, jedoch vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send).

## Ereignisse

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel, weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat. Auch über die `onabort`-Ereignishandlereigenschaft verfügbar.
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
  - : Wird ausgelöst, wenn die Anfrage auf einen Fehler gestoßen ist. Auch über die `onerror`-Ereignishandlereigenschaft verfügbar.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wurde. Auch über die `onload`-Ereignishandlereigenschaft verfügbar.
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, ob erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder nicht erfolgreich (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)). Auch über die `onloadend`-Ereignishandlereigenschaft verfügbar.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden. Auch über die `onloadstart`-Ereignishandlereigenschaft verfügbar.
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Wird periodisch ausgelöst, wenn eine Anfrage mehr Daten empfängt. Auch über die `onprogress`-Ereignishandlereigenschaft verfügbar.
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird jedes Mal ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert. Auch über die `onreadystatechange`-Ereignishandlereigenschaft verfügbar.
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund einer abgelaufenen voreingestellten Zeit beendet wird. Auch über die `ontimeout`-Ereignishandlereigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisierung eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
