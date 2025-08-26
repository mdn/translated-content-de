---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` ist das Interface, das die gemeinsamen Ereignis-Handler für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload) beschreibt.

Sie verwenden `XMLHttpRequestEventTarget` nicht direkt, sondern interagieren mit den Unterklassen.

## Ereignisse

Die folgenden Ereignisse stehen für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload) zur Verfügung:

- [`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, zum Beispiel weil das Programm [`XMLHttpRequest.abort()`](/de/docs/Web/API/XMLHttpRequest/abort) aufgerufen hat.
    Auch über die Eigenschaft `onabort` des Ereignis-Handlers verfügbar.
- [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event)
  - : Wird ausgelöst, wenn die Anfrage auf einen Fehler gestoßen ist.
    Auch über die Eigenschaft `onerror` des Ereignis-Handlers verfügbar.
- [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)
  - : Wird ausgelöst, wenn eine Anfragetransaktion erfolgreich abgeschlossen wurde.
    Auch über die Eigenschaft `onload` des Ereignis-Handlers verfügbar.
- [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, egal ob erfolgreich (nach [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)) oder erfolglos (nach [`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event) oder [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event)).
    Auch über die Eigenschaft `onloadend` des Ereignis-Handlers verfügbar.
- [`loadstart`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event)
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch über die Eigenschaft `onloadstart` des Ereignis-Handlers verfügbar.
- [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event)
  - : Wird regelmäßig ausgelöst, wenn eine Anfrage weitere Daten erhält.
    Auch über die Eigenschaft `onprogress` des Ereignis-Handlers verfügbar.
- [`timeout`](/de/docs/Web/API/XMLHttpRequestEventTarget/timeout_event)
  - : Wird ausgelöst, wenn der Fortschritt aufgrund von Zeitablauf beendet wird.
    Auch über die Eigenschaft `ontimeout` des Ereignis-Handlers verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
