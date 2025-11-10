---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne eine vollständige Seitenaktualisierung durchführen zu müssen. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne das zu unterbrechen, was der Benutzer gerade tut.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` verwendet werden, um Daten jeglichen Typs abzurufen, nicht nur XML.

Wenn Ihre Kommunikation das Empfangen von Ereignisdaten oder Nachrichtendaten von einem Server umfassen muss, sollten Sie die Verwendung von [Server-sent events](/de/docs/Web/API/Server-sent_events) über die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle in Betracht ziehen. Für eine vollständige Duplex-Kommunikation könnten [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss aufgerufen werden, bevor andere Methoden aufgerufen werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`XMLHttpRequest.readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Zustand der Anfrage darstellt.
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-Objekt oder einen String zurück, abhängig vom Wert von [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType), der den Antwortkörper enthält.
- [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Antwort auf die Anfrage als Text enthält, oder `null`, wenn die Anfrage erfolglos war oder noch nicht gesendet wurde.
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
  - : Gibt den Typ der Antwort an.
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte URL der Antwort oder den leeren String zurück, wenn die URL null ist.
- [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das die Antwort auf die Anfrage enthält, oder `null`, wenn die Anfrage erfolglos war, noch nicht gesendet wurde oder nicht als XML oder HTML geparst werden kann. Nicht verfügbar in [Web Workers](/de/docs/Web/API/Web_Workers_API).
- [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) {{ReadOnlyInline}}
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) der Anfrage zurück.
- [`XMLHttpRequest.statusText`](/de/docs/Web/API/XMLHttpRequest/statusText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Antworttext zurückgegeben vom HTTP-Server enthält. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) enthält dies den gesamten Text der Antwortmeldung (z. B. `"OK"`).

    > [!NOTE]
    > Laut der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keine Möglichkeit, die Version oder den Grundsatz zu übertragen, die in einer HTTP/1.1-Statuszeile enthalten sind.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage in Anspruch nehmen kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), das den Upload-Prozess darstellt.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn standortübergreifende `Access-Control`-Anfragen unter Verwendung von Anmeldeinformationen wie Cookies oder Autorisierungsheadern gestellt werden sollen; andernfalls `false`.

### Nicht standardisierte Eigenschaften

- `XMLHttpRequest.mozAnon` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein boolean. Wenn true, wird die Anfrage ohne Cookie- und Authentifizierungsheader gesendet.
- `XMLHttpRequest.mozSystem` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein boolean. Wenn true, wird die Same-Origin-Policy bei der Anfrage nicht durchgesetzt.

## Instanz-Methoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwortheader, getrennt durch {{Glossary("CRLF", "CRLF")}}, als String zurück oder `null`, wenn keine Antwort empfangen wurde.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt den String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den MIME-Typ, der vom Server zurückgegeben wird.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was standardmäßig der Fall ist), gibt diese Methode zurück, sobald die Anfrage gesendet wird.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine Attribution-Quelle oder ein Trigger-Ereignis zu registrieren.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Setzt den Wert eines HTTP-Anfrage-Headers. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

## Ereignisse

_Diese Schnittstelle erbt auch Ereignisse von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)._

- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert.
    Auch verfügbar über die `onreadystatechange`-Ereignishandler-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisierung eines DOM-Baums in XML
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
