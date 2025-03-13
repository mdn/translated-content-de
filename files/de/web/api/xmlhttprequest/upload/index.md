---
title: "XMLHttpRequest: upload-Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `upload`-Eigenschaft gibt ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Objekt zurück, das beobachtet werden kann, um den Fortschritt eines Uploads zu überwachen.

Es ist ein undurchsichtiges Objekt, aber da es auch ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) ist, können Ereignis-Listener angehängt werden, um seinen Prozess zu verfolgen.

> [!NOTE]
> Das Anfügen von Ereignis-Listenern an dieses Objekt verhindert, dass die Anfrage eine "einfache Anfrage" bleibt und führt dazu, dass eine Preflight-Anfrage gesendet wird, wenn sie über mehrere Ursprünge hinweg erfolgt; siehe [CORS](/de/docs/Web/HTTP/Guides/CORS). Aus diesem Grund müssen Ereignis-Listener registriert werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird, andernfalls werden Upload-Ereignisse nicht ausgelöst.

> [!NOTE]
> Die Spezifikation scheint auch darauf hinzuweisen, dass Ereignis-Listener nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) angehängt werden sollten. Allerdings verhalten sich Browser in dieser Angelegenheit fehlerhaft und benötigen oft, dass die Listener _vor_ [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden, um zu funktionieren.

Die folgenden Ereignisse können an einem Upload-Objekt ausgelöst werden und zur Überwachung des Uploads verwendet werden:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ereignis</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event)</td>
      <td>Der Upload hat begonnen.</td>
    </tr>
    <tr>
      <td>[`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event)</td>
      <td>
        Wird periodisch bereitgestellt, um den bisher erzielten Fortschritt anzuzeigen.
      </td>
    </tr>
    <tr>
      <td>[`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event)</td>
      <td>Der Upload-Vorgang wurde abgebrochen.</td>
    </tr>
    <tr>
      <td>[`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)</td>
      <td>Der Upload ist aufgrund eines Fehlers fehlgeschlagen.</td>
    </tr>
    <tr>
      <td>[`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event)</td>
      <td>Der Upload wurde erfolgreich abgeschlossen.</td>
    </tr>
    <tr>
      <td>[`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)</td>
      <td>
        Der Upload ist zeitlich abgelaufen, weil keine Antwort innerhalb des durch die
        [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout) angegebenen Zeitraums eingegangen ist.
      </td>
    </tr>
    <tr>
      <td>[`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event)</td>
      <td>
        Der Upload ist abgeschlossen. Dieses Ereignis unterscheidet nicht zwischen Erfolg
        oder Misserfolg und wird am Ende des Uploads unabhängig vom Ergebnis gesendet.
        Vor diesem Ereignis wird bereits eines der Ereignisse <code>load</code>,
        <code>error</code>, <code>abort</code> oder <code>timeout</code> ausgelöst
        worden sein, um anzugeben, warum der Upload beendet wurde.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
