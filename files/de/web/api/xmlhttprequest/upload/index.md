---
title: "XMLHttpRequest: upload-Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `upload`-Eigenschaft gibt ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Objekt zurück, das beobachtet werden kann, um den Fortschritt eines Uploads zu überwachen.

Es ist ein undurchsichtiges Objekt, aber da es auch ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) ist, können Ereignis-Listener angehängt werden, um seinen Prozess zu verfolgen.

> [!NOTE]
> Das Anhängen von Ereignis-Listenern an dieses Objekt verhindert, dass die Anfrage eine "einfache Anfrage" bleibt, und wird bei Cross-Origin einen Preflight-Request auslösen; siehe [CORS](/de/docs/Web/HTTP/Guides/CORS). Aus diesem Grund müssen Ereignis-Listener registriert werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird, ansonsten werden Upload-Ereignisse nicht ausgelöst.

> [!NOTE]
> Die Spezifikation scheint auch anzugeben, dass Ereignis-Listener nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) angehängt werden sollten. Allerdings sind Browser in dieser Hinsicht fehlerhaft und oft müssen die Listener _vor_ [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden, um zu funktionieren.

Die folgenden Ereignisse können auf einem Upload-Objekt ausgelöst werden und verwendet werden, um den Upload zu überwachen:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ereignis</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`loadstart`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event)</td>
      <td>Der Upload hat begonnen.</td>
    </tr>
    <tr>
      <td>[`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event)</td>
      <td>
        Wird regelmäßig geliefert, um den bisher fortgeschrittenen Fortschritt anzuzeigen.
      </td>
    </tr>
    <tr>
      <td>[`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)</td>
      <td>Der Upload-Vorgang wurde abgebrochen.</td>
    </tr>
    <tr>
      <td>[`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event)</td>
      <td>Der Upload ist aufgrund eines Fehlers fehlgeschlagen.</td>
    </tr>
    <tr>
      <td>[`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event)</td>
      <td>Der Upload wurde erfolgreich abgeschlossen.</td>
    </tr>
    <tr>
      <td>[`timeout`](/de/docs/Web/API/XMLHttpRequestEventTarget/timeout_event)</td>
      <td>
        Der Upload ist abgelaufen, weil innerhalb des durch
        [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
        festgelegten Zeitintervalls keine Antwort eingegangen ist.
      </td>
    </tr>
    <tr>
      <td>[`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)</td>
      <td>
        Der Upload ist beendet. Dieses Ereignis unterscheidet nicht zwischen
        Erfolg oder Fehlschlag und wird am Ende des Uploads gesendet, unabhängig
        vom Ergebnis. Vor diesem Ereignis wurde bereits eines der Ereignisse
        <code>load</code>, <code>error</code>, <code>abort</code> oder
        <code>timeout</code> geliefert, um anzugeben, warum der Upload
        beendet wurde.
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
