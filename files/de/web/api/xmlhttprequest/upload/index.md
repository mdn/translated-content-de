---
title: "XMLHttpRequest: upload-Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `upload`-Eigenschaft gibt ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Objekt zurück, das überwacht werden kann, um den Fortschritt eines Uploads zu verfolgen.

Es handelt sich um ein intransparentes Objekt, aber da es auch ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) ist, können Event-Listener angehängt werden, um seinen Prozess zu überwachen.

> [!NOTE]
> Das Anhängen von Event-Listenern an dieses Objekt verhindert, dass die Anfrage eine "einfache Anfrage" bleibt, und führt dazu, dass eine Vorab-Anfrage gestellt wird, wenn sie Cross-Origin ist; siehe [CORS](/de/docs/Web/HTTP/CORS). Aus diesem Grund müssen Event-Listener registriert werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird, da ansonsten keine Upload-Ereignisse gesendet werden.

> [!NOTE]
> Die Spezifikation scheint auch anzugeben, dass Event-Listener nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) angehängt werden sollten. Allerdings sind Browser in dieser Hinsicht fehlerhaft und benötigen oft, dass die Listener _vor_ [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden, damit sie funktionieren.

Die folgenden Ereignisse können an ein Upload-Objekt ausgelöst werden und zur Überwachung des Uploads genutzt werden:

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
      <td>Wird periodisch ausgeliefert, um den bisher erreichten Fortschritt anzuzeigen.</td>
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
        [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
        angegebenen Zeitintervalls keine Antwort einging.
      </td>
    </tr>
    <tr>
      <td>[`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event)</td>
      <td>
        Der Upload ist beendet. Dieses Ereignis unterscheidet nicht zwischen
        Erfolg oder Misserfolg und wird am Ende des Uploads unabhängig vom
        Ergebnis gesendet. Vor diesem Ereignis wurde bereits eines der
        <code>load</code>, <code>error</code>, <code>abort</code> oder
        <code>timeout</code> gesendet, um anzugeben, warum der Upload beendet
        wurde.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
