---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest` (XHR)-Objekte werden verwendet, um mit Servern zu interagieren. Sie können Daten von einer URL abrufen, ohne die gesamte Seite aktualisieren zu müssen. Dies ermöglicht es einer Webseite, nur einen Teil der Seite zu aktualisieren, ohne die Aktivitäten des Nutzers zu unterbrechen.

{{InheritanceDiagram}}

Trotz seines Namens kann `XMLHttpRequest` zum Abrufen beliebiger Datentypen verwendet werden, nicht nur für XML.

Falls Ihre Kommunikation den Empfang von Ereignisdaten oder Nachrichtendaten von einem Server beinhalten soll, ziehen Sie die Verwendung von [server-sent events](/de/docs/Web/API/Server-sent_events) über das [`EventSource`](/de/docs/Web/API/EventSource)-Interface in Betracht. Für vollduplexe Kommunikation könnten [WebSockets](/de/docs/Web/API/WebSockets_API) eine bessere Wahl sein.

## Konstruktor

- [`XMLHttpRequest()`](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest)
  - : Der Konstruktor initialisiert ein `XMLHttpRequest`. Er muss vor jedem anderen Methodenaufruf aufgerufen werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

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
  - : Gibt den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) der Anfrage zurück.
- [`XMLHttpRequest.statusText`](/de/docs/Web/API/XMLHttpRequest/statusText) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den Antwortstring enthält, der vom HTTP-Server zurückgegeben wurde. Im Gegensatz zu [`XMLHttpRequest.status`](/de/docs/Web/API/XMLHttpRequest/status) umfasst dies den gesamten Text der Antwortnachricht (zum Beispiel `"OK"`).

    > [!NOTE]
    > Gemäß der HTTP/2-Spezifikation {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}} definiert HTTP/2 keinen Weg, die Version oder den Grundsatz mitzuteilen, der in einer HTTP/1.1-Statuszeile enthalten ist.

- [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
  - : Die Zeit in Millisekunden, die eine Anfrage dauern kann, bevor sie automatisch beendet wird.
- [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) {{ReadOnlyInline}}
  - : Ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), das den Upload-Prozess darstellt.
- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
  - : Gibt `true` zurück, wenn standortübergreifende `Access-Control`-Anfragen mit Anmeldeinformationen wie Cookies oder Autorisierungs-Headern gestellt werden sollen; sonst `false`.

### Nicht-standardisierte Eigenschaften

- [`XMLHttpRequest.channel`](/de/docs/Web/API/XMLHttpRequest/channel) {{ReadOnlyInline}}
  - : Der Kanal, der vom Objekt beim Ausführen der Anfrage verwendet wird.
- [`XMLHttpRequest.mozAnon`](/de/docs/Web/API/XMLHttpRequest/mozAnon) {{ReadOnlyInline}}
  - : Ein boolescher Wert. Wenn `true`, wird die Anfrage ohne Cookie- und Authentifizierungsheader gesendet.
- [`XMLHttpRequest.mozSystem`](/de/docs/Web/API/XMLHttpRequest/mozSystem) {{ReadOnlyInline}}
  - : Ein boolescher Wert. Wenn `true`, wird die Same-Origin-Policy für die Anfrage nicht durchgesetzt.
- [`XMLHttpRequest.mozBackgroundRequest`](/de/docs/Web/API/XMLHttpRequest/mozBackgroundRequest)
  - : Ein boolescher Wert. Er gibt an, ob das Objekt einen Hintergrunddienstantrag darstellt.

## Instanz-Methoden

- [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
  - : Bricht die Anfrage ab, wenn sie bereits gesendet wurde.
- [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
  - : Gibt alle Antwort-Header, getrennt durch [CRLF](/de/docs/Glossary/CRLF), als String zurück, oder `null`, wenn keine Antwort empfangen wurde.
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader)
  - : Gibt einen String zurück, der den Text des angegebenen Headers enthält, oder `null`, wenn die Antwort noch nicht eingegangen ist oder der Header in der Antwort nicht existiert.
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open)
  - : Initialisiert eine Anfrage.
- [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType)
  - : Überschreibt den MIME-Typ, der vom Server zurückgegeben wird.
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)
  - : Sendet die Anfrage. Wenn die Anfrage asynchron ist (was der Standard ist), gibt diese Methode sofort nach dem Senden der Anfrage zurück.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) {{securecontext_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine Attributionsquelle oder ein Auslöserereignis zu registrieren.
- [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
  - : Legt den Wert eines HTTP-Anforderungs-Headers fest. Sie müssen `setRequestHeader()` nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) und vor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

## Ereignisse

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel, weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.
    Auch über die `onabort`-Ereignishandler-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
  - : Wird ausgelöst, wenn die Anfrage auf einen Fehler gestoßen ist.
    Auch über die `onerror`-Ereignishandler-Eigenschaft verfügbar.
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
  - : Wird ausgelöst, wenn eine `XMLHttpRequest`-Transaktion erfolgreich abgeschlossen wurde.
    Auch über die `onload`-Ereignishandler-Eigenschaft verfügbar.
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, unabhängig davon, ob sie erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)) oder erfolglos (nach [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)) abgeschlossen wurde.
    Auch über die `onloadend`-Ereignishandler-Eigenschaft verfügbar.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch über die `onloadstart`-Ereignishandler-Eigenschaft verfügbar.
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
  - : Wird periodisch ausgelöst, wenn eine Anfrage mehr Daten empfängt.
    Auch über die `onprogress`-Ereignishandler-Eigenschaft verfügbar.
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
  - : Wird ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft ändert.
    Auch über die `onreadystatechange`-Ereignishandler-Eigenschaft verfügbar.
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund des Ablaufs einer voreingestellten Zeit beendet wird.
    Auch über die `ontimeout`-Ereignishandler-Eigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisieren eines DOM-Baums in XML
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/de/docs/Web/API/Fetch_API)
