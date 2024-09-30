---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne eine vollständige Seitenaktualisierung durchführen zu müssen. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne den Benutzer zu stören.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` zur Abfrage beliebiger Datentypen verwendet werden, nicht nur XML.

Falls Ihre Kommunikation den Empfang von Ereignis- oder Nachrichtendaten von einem Server beinhalten muss, ziehen Sie in Betracht, [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) über die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zu verwenden. Für vollduplexe Kommunikation könnten [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss aufgerufen werden, bevor andere Methoden aufgerufen werden.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XMLHttpRequest.readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Status der Anfrage darstellt.
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType), der den Antwort-Entitätskörper enthält.
- [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Antwort auf die Anforderung als Text enthält, oder `null`, wenn die Anfrage erfolglos war oder noch nicht gesendet wurde.
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
  - : Gibt den Typ der Antwort an.
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte URL der Antwort oder den leeren String zurück, wenn die URL null ist.
- [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das die Antwort der Anfrage enthält, oder `null`, wenn die Anfrage erfolglos war, noch nicht gesendet wurde oder nicht als XML oder HTML geparst werden kann. Nicht verfügbar in [Web Workers](/de/docs/Web/API/Web_Workers_API).
- [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) {{ReadOnlyInline}}
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) der Anfrage zurück.
- [`XMLHttpRequest.statusText`](/de/docs/Web/API/XMLHttpRequest/statusText) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den vom HTTP-Server zurückgegebenen Antwortstring enthält. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) enthält dies den gesamten Text der Antwortnachricht (zum Beispiel `"OK"`).

    > [!NOTE]
    > Laut der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keinen Weg, die Version oder den Grundsatz zu transportieren, der in einer HTTP/1.1-Statuszeile enthalten ist.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage dauern kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), der den Upload-Prozess darstellt.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn die Erstellung von `Access-Control`-Anfragen über Websites hinweg mit Anmeldedaten wie Cookies oder Autorisierungsheadern erfolgen soll; andernfalls `false`.

### Nicht-standardmäßige Eigenschaften

- [`XMLHttpRequest.channel`](/de/docs/Web/API/XMLHttpRequest/channel) {{ReadOnlyInline}}
  - : Der Kanal, den das Objekt während der Durchführung der Anfrage verwendet.
- [`XMLHttpRequest.mozAnon`](/de/docs/Web/API/XMLHttpRequest/mozAnon) {{ReadOnlyInline}}
  - : Ein Boolean. Wenn `true`, wird die Anfrage ohne Cookie- und Authentifizierungsheader gesendet.
- [`XMLHttpRequest.mozSystem`](/de/docs/Web/API/XMLHttpRequest/mozSystem) {{ReadOnlyInline}}
  - : Ein Boolean. Wenn `true`, wird die Same-Origin-Richtlinie auf die Anfrage nicht angewendet.
- [`XMLHttpRequest.mozBackgroundRequest`](/de/docs/Web/API/XMLHttpRequest/mozBackgroundRequest)
  - : Ein Boolean. Er zeigt an, ob das Objekt eine Hintergrunddienstanfrage darstellt oder nicht.

## Instanzmethoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwort-Header, getrennt durch [CRLF](/de/docs/Glossary/CRLF), als String zurück, oder `null`, wenn keine Antwort empfangen wurde.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt den String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den vom Server zurückgegebenen MIME-Typ.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was der Standard ist), gibt diese Methode zurück, sobald die Anfrage gesendet wird.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie wollen, dass die Antwort auf die Anfrage eine Zuordnungsquelle oder ein Trigger-Ereignis registrieren kann.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Setzt den Wert eines HTTP-Anfrage-Headers. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

## Ereignisse

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, beispielsweise weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.
    Auch verfügbar über die `onabort` Ereignis-Handler-Eigenschaft.
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
  - : Wird ausgelöst, wenn die Anfrage auf einen Fehler gestoßen ist.
    Auch verfügbar über die `onerror` Ereignis-Handler-Eigenschaft.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wurde.
    Auch verfügbar über die `onload` Ereignis-Handler-Eigenschaft.
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, unabhängig davon, ob erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder nicht (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)).
    Auch verfügbar über die `onloadend` Ereignis-Handler-Eigenschaft.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch verfügbar über die `onloadstart` Ereignis-Handler-Eigenschaft.
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Wird periodisch ausgelöst, wenn eine Anfrage mehr Daten empfängt.
    Auch verfügbar über die `onprogress` Ereignis-Handler-Eigenschaft.
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird jedes Mal ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert.
    Auch verfügbar über die `onreadystatechange` Ereignis-Handler-Eigenschaft.
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund Ablauf der voreingestellten Zeit abgebrochen wird.
    Auch verfügbar über die `ontimeout` Ereignis-Handler-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisierung eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
