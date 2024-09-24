---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne die gesamte Seite neu laden zu müssen. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne das zu stören, was der Benutzer gerade tut.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` verwendet werden, um beliebige Datentypen abzurufen, nicht nur XML.

Wenn Ihre Kommunikation das Empfangen von Ereignisdaten oder Nachrichten von einem Server umfassen muss, sollten Sie in Betracht ziehen, [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) über die {{domxref("EventSource")}}-Schnittstelle zu verwenden. Für bidirektionale Kommunikation könnten [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Es muss vor jeder anderen Methodenaufruf aufgerufen werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("XMLHttpRequestEventTarget")}} und {{domxref("EventTarget")}}._

- {{domxref("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Status der Anfrage darstellt.
- {{domxref("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}}, ein {{domxref("Blob")}}, ein {{domxref("Document")}}, ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von {{domxref("XMLHttpRequest.responseType")}}, der den Antwortkörpereinheit enthält.
- {{domxref("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Antwort auf die Anfrage als Text enthält, oder `null`, wenn die Anfrage nicht erfolgreich war oder noch nicht gesendet wurde.
- {{domxref("XMLHttpRequest.responseType")}}
  - : Gibt den Typ der Antwort an.
- {{domxref("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : Gibt die serialisierte URL der Antwort oder einen leeren String zurück, wenn die URL null ist.
- {{domxref("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Document")}} zurück, das die Antwort auf die Anfrage enthält, oder `null`, wenn die Anfrage nicht erfolgreich war, noch nicht gesendet wurde oder nicht als XML oder HTML geparst werden kann. Nicht verfügbar in [Web Workers](/de/docs/Web/API/Web_Workers_API).
- {{domxref("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) der Anfrage zurück.
- {{domxref("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die von dem HTTP-Server zurückgegebene Antwortzeichenfolge enthält. Im Gegensatz zu {{domxref("XMLHttpRequest.status")}} enthält dies den gesamten Text der Antwortnachricht (z.B. "`OK`").

    > [!NOTE]
    > Gemäß der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keine Möglichkeit, die Version oder den Grundsatz zu übermitteln, die in einer HTTP/1.1-Statuszeile enthalten sind.

- {{domxref("XMLHttpRequest.timeout")}}
  - : Die Zeit in Millisekunden, die eine Anfrage dauern kann, bevor sie automatisch beendet wird.
- {{domxref("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XMLHttpRequestUpload")}}, das den Hochladeprozess darstellt.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : Gibt `true` zurück, wenn CORS-Anfragen mit Anmeldeinformationen wie Cookies oder Autorisierungs-Header ausgeführt werden sollen; andernfalls `false`.

### Nicht-standardisierte Eigenschaften

- {{domxref("XMLHttpRequest.channel")}} {{ReadOnlyInline}}
  - : Der Kanal, der von dem Objekt verwendet wird, wenn die Anfrage ausgeführt wird.
- {{domxref("XMLHttpRequest.mozAnon")}} {{ReadOnlyInline}}
  - : Ein Boolean. Wenn wahr, wird die Anfrage ohne Cookie- und Authentifizierungsheader gesendet.
- {{domxref("XMLHttpRequest.mozSystem")}} {{ReadOnlyInline}}
  - : Ein Boolean. Wenn wahr, wird die Same-Origin-Policy bei der Anfrage nicht durchgesetzt.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : Ein Boolean. Er zeigt an, ob das Objekt einen Hintergrunddienstanfrage darstellt oder nicht.

## Instanz-Methoden

- {{domxref("XMLHttpRequest.abort()")}}
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : Gibt alle Antwort-Header zurück, getrennt durch {{Glossary("CRLF")}}, als String, oder `null`, wenn keine Antwort empfangen wurde.
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : Gibt den String zurück, der den Text des spezifizierten Headers enthält, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.
- {{domxref("XMLHttpRequest.open()")}}
  - : Initialisiert eine Anfrage.
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : Überschreibt den vom Server zurückgegebenen MIME-Typ.
- {{domxref("XMLHttpRequest.send()")}}
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (welches der Standard ist), gibt diese Methode zurück, sobald die Anfrage gesendet wurde.
- {{domxref("XMLHttpRequest.setAttributionReporting()")}} {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine Attributionsquelle oder ein Auslöserereignis registrieren kann.
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : Setzt den Wert eines HTTP-Anfrage-Headers. `setRequestHeader()` muss nach {{domxref("XMLHttpRequest.open", "open()")}}, aber vor {{domxref("XMLHttpRequest.send", "send()")}} aufgerufen werden.

## Ereignisse

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, beispielsweise weil das Programm {{domxref("XMLHttpRequest.abort()")}} aufgerufen hat.
    Auch über die `onabort`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : Wird ausgelöst, wenn bei der Anfrage ein Fehler aufgetreten ist.
    Auch über die `onerror`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wurde.
    Auch über die `onload`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, ob erfolgreich (nach {{domxref("XMLHttpRequest/load_event", "load")}}) oder erfolglos (nach {{domxref("XMLHttpRequest/abort_event", "abort")}} oder {{domxref("XMLHttpRequest/error_event", "error")}}).
    Auch über die `onloadend`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch über die `onloadstart`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Wird regelmäßig ausgelöst, wenn eine Anfrage mehr Daten empfängt.
    Auch über die `onprogress`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : Wird ausgelöst, immer wenn sich die {{domxref("XMLHttpRequest.readyState", "readyState")}}-Eigenschaft ändert.
    Auch über die `onreadystatechange`-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : Wird ausgelöst, wenn der Fortschritt wegen abgelaufener voreingestellter Zeit beendet wird.
    Auch über die `ontimeout`-Ereignishandler-Eigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLSerializer")}}: Serialisierung eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
