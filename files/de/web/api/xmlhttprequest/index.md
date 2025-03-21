---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 2f1159d6a0d59bccbb6cde08bad95bfe4f06d9ba
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne die gesamte Seite neu laden zu müssen. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne die Aktivitäten des Nutzers zu unterbrechen.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` verwendet werden, um Daten jeglichen Typs abzurufen, nicht nur XML.

Wenn Ihre Kommunikation das Empfangen von Ereignis- oder Nachrichtendaten von einem Server beinhalten muss, sollten Sie in Erwägung ziehen, [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) über die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zu verwenden. Für Vollduplex-Kommunikation könnten [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss aufgerufen werden, bevor andere Methoden aufgerufen werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XMLHttpRequest.readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Status der Anfrage repräsentiert.
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}}, einen [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType), der den Antwort-Inhalt enthält.
- [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Antwort auf die Anfrage als Text enthält, oder `null`, wenn die Anfrage erfolglos war oder noch nicht gesendet wurde.
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
  - : Gibt den Typ der Antwort an.
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte URL der Antwort oder den leeren String zurück, wenn die URL `null` ist.
- [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das die Antwort auf die Anfrage enthält, oder `null`, wenn die Anfrage erfolglos war, noch nicht gesendet wurde oder nicht als XML oder HTML geparst werden kann. Nicht verfügbar in [Web Workers](/de/docs/Web/API/Web_Workers_API).
- [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) {{ReadOnlyInline}}
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) der Anfrage zurück.
- [`XMLHttpRequest.statusText`](/de/docs/Web/API/XMLHttpRequest/statusText) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den vom HTTP-Server zurückgegebenen Antworttext enthält. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) enthält dies den gesamten Text der Antwortnachricht (zum Beispiel `"OK"`).

    > [!NOTE]
    > Laut der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keine Möglichkeit, die Version oder den Begründungssatz zu übertragen, der in einer HTTP/1.1-Statuszeile enthalten ist.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage dauern kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), das den Hochladevorgang darstellt.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn standortübergreifende `Access-Control`-Anfragen unter Verwendung von Anmeldeinformationen wie Cookies oder Autorisierungsheadern gestellt werden sollen; andernfalls `false`.

### Nicht-standardmäßige Eigenschaften

- [`XMLHttpRequest.channel`](/de/docs/Web/API/XMLHttpRequest/channel) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Der Kanal, der vom Objekt bei der Ausführung der Anfrage verwendet wird.
- [`XMLHttpRequest.mozAnon`](/de/docs/Web/API/XMLHttpRequest/mozAnon) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein Boolean. Wenn wahr, wird die Anfrage ohne Cookie- und Authentifizierungs-Header gesendet.
- [`XMLHttpRequest.mozSystem`](/de/docs/Web/API/XMLHttpRequest/mozSystem) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein Boolean. Wenn wahr, wird die Same-Origin-Policy bei der Anfrage nicht durchgesetzt.
- [`XMLHttpRequest.mozBackgroundRequest`](/de/docs/Web/API/XMLHttpRequest/mozBackgroundRequest) {{Non-standard_Inline}}
  - : Ein Boolean. Er zeigt an, ob das Objekt eine Hintergrunddienstanfrage darstellt oder nicht.

## Instanz-Methoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwort-Header, getrennt durch {{Glossary("CRLF", "CRLF")}}, als String zurück, oder `null`, wenn keine Antwort eingegangen ist.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt den String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn entweder die Antwort noch nicht eingegangen ist oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den MIME-Typ, der vom Server zurückgegeben wird.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was der Standard ist), gibt diese Methode zurück, sobald die Anfrage gesendet wurde.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine Attributionsquelle oder ein Ereignis auslösen kann.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Setzt den Wert eines HTTP-Anfrage-Headers. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

## Ereignisse

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel, weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.
    Auch über die `onabort`-Ereignis-Handler-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
  - : Wird ausgelöst, wenn die Anfrage einen Fehler hat.
    Auch über die `onerror`-Ereignis-Handler-Eigenschaft verfügbar.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wurde.
    Auch über die `onload`-Ereignis-Handler-Eigenschaft verfügbar.
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist, unabhängig davon, ob sie erfolgreich war (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder nicht (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)).
    Auch über die `onloadend`-Ereignis-Handler-Eigenschaft verfügbar.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch über die `onloadstart`-Ereignis-Handler-Eigenschaft verfügbar.
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Wird regelmäßig ausgelöst, wenn eine Anfrage mehr Daten empfängt.
    Auch über die `onprogress`-Ereignis-Handler-Eigenschaft verfügbar.
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird ausgelöst, wenn immer sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert.
    Auch über die `onreadystatechange`-Ereignis-Handler-Eigenschaft verfügbar.
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund abgelaufener voreingestellter Zeit abgebrochen wird.
    Auch über die `ontimeout`-Ereignis-Handler-Eigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisierung eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
