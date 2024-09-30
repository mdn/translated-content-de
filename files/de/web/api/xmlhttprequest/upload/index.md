---
title: "XMLHttpRequest: upload Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die `upload`-Eigenschaft von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Objekt zurück, das beobachtet werden kann, um den Fortschritt eines Uploads zu überwachen.

Es ist ein undurchsichtiges Objekt, aber da es auch ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) ist, können Ereignis-Listener hinzugefügt werden, um den Prozess zu verfolgen.

> [!NOTE]
> Das Hinzufügen von Ereignis-Listenern zu diesem Objekt verhindert, dass die Anfrage eine "einfache Anfrage" ist und führt dazu, dass eine Preflight-Anfrage gesendet wird, wenn es sich um eine Cross-Origin-Anfrage handelt; siehe [CORS](/de/docs/Web/HTTP/CORS). Aufgrund dessen müssen Ereignis-Listener vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) registriert werden, sonst werden Upload-Ereignisse nicht gesendet.

> [!NOTE]
> Die Spezifikation scheint auch darauf hinzudeuten, dass Ereignis-Listener nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) hinzugefügt werden sollten. Browser sind jedoch in dieser Hinsicht fehlerhaft und benötigen oft, dass die Listener _vor_ [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden, um zu funktionieren.

Die folgenden Ereignisse können bei einem Upload-Objekt ausgelöst werden und zur Überwachung des Uploads verwendet werden:

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
        Wird periodisch gesendet, um die Menge des bisher erzielten Fortschritts anzuzeigen.
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
        Der Upload wurde abgebrochen, weil innerhalb des durch die
        [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout) angegebenen Zeitintervalls keine Antwort eingetroffen ist.
      </td>
    </tr>
    <tr>
      <td>[`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event)</td>
      <td>
        Der Upload wurde beendet. Dieses Ereignis unterscheidet nicht zwischen Erfolg oder Misserfolg und wird am Ende des Uploads gesendet, unabhängig vom Ergebnis. Vor diesem Ereignis wurde bereits eines von <code>load</code>, <code>error</code>, <code>abort</code> oder <code>timeout</code> gesendet, um anzugeben, warum der Upload beendet wurde.
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
