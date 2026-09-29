---
title: "XMLHttpRequest: upload-Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`upload`** des Interfaces [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt ein [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)-Objekt zurück, mit dem sich der Fortschritt eines Uploads überwachen lässt.

Das Objekt selbst ist undurchsichtig. Da es jedoch auch ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) ist, können Event-Listener registriert werden, um den Verlauf des Uploads zu verfolgen.

> [!NOTE]
> Wenn Sie Event-Listener an diesem Objekt registrieren, gilt die Anfrage nicht mehr als „simple request“. Bei einer Cross-Origin-Anfrage wird dadurch eine Preflight-Anfrage ausgelöst; siehe [CORS](/de/docs/Web/HTTP/Guides/CORS). Deshalb müssen die Event-Listener vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) registriert werden, da andernfalls keine Upload-Events ausgelöst werden.

> [!NOTE]
> Die Spezifikation scheint außerdem vorzugeben, dass Event-Listener nach [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden sollten. Aufgrund von Browserfehlern müssen die Listener jedoch häufig _vor_ [`open()`](/de/docs/Web/API/XMLHttpRequest/open) registriert werden, damit sie funktionieren.

Die folgenden Events können für ein Upload-Objekt ausgelöst und zur Überwachung des Uploads verwendet werden:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Event</th>
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
        Wird regelmäßig ausgelöst, um den bisherigen Fortschritt anzuzeigen.
      </td>
    </tr>
    <tr>
      <td>[`abort`](/de/docs/Web/API/XMLHttpRequestEventTarget/abort_event)</td>
      <td>Der Upload wurde abgebrochen.</td>
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
        Der Upload hat das Zeitlimit überschritten, weil innerhalb des durch
        [`XMLHttpRequest.timeout`](/de/docs/Web/API/XMLHttpRequest/timeout)
        festgelegten Zeitraums keine Antwort eingegangen ist.
      </td>
    </tr>
    <tr>
      <td>[`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)</td>
      <td>
        Der Upload ist beendet. Dieses Event unterscheidet nicht zwischen Erfolg
        und Fehlschlag und wird unabhängig vom Ergebnis am Ende des Uploads
        ausgelöst. Zuvor wurde bereits eines der Events <code>load</code>,
        <code>error</code>, <code>abort</code> oder <code>timeout</code>
        ausgelöst, das den Grund für das Ende des Uploads angibt.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XMLHttpRequest verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
