---
title: "XMLHttpRequest: upload-Eigenschaft"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{domxref("XMLHttpRequest")}} `upload`-Eigenschaft gibt ein {{domxref("XMLHttpRequestUpload")}}-Objekt zurück, das beobachtet werden kann, um den Fortschritt eines Uploads zu überwachen.

Es ist ein undurchsichtiges Objekt, aber da es auch ein {{domxref("XMLHttpRequestEventTarget")}} ist, können Ereignis-Listener angehängt werden, um seinen Prozess zu verfolgen.

> [!NOTE]
> Das Anhängen von Ereignis-Listenern an dieses Objekt verhindert, dass die Anfrage eine „einfache Anfrage“ ist, und führt zu einer Preflight-Anfrage, wenn es sich um eine Cross-Origin-Anfrage handelt; siehe [CORS](/de/docs/Web/HTTP/CORS). Aus diesem Grund müssen Ereignis-Listener registriert werden, bevor {{domxref("XMLHttpRequest.send", "send()")}} aufgerufen wird, da sonst keine Upload-Ereignisse ausgelöst werden.

> [!NOTE]
> Die Spezifikation scheint auch anzudeuten, dass Ereignis-Listener nach {{domxref("XMLHttpRequest.open", "open()")}} angebracht werden sollten. Browser enthalten jedoch oft Fehler in diesem Bereich und benötigen häufig, dass die Listener _vor_ {{domxref("XMLHttpRequest.open", "open()")}} registriert werden, um zu funktionieren.

Die folgenden Ereignisse können an einem Upload-Objekt ausgelöst werden und dienen zur Überwachung des Uploads:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ereignis</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}</td>
      <td>Der Upload hat begonnen.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/progress_event", "progress")}}</td>
      <td>
        Wird regelmäßig ausgeliefert, um den Fortschritt bis zu diesem Punkt anzuzeigen.
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/abort_event", "abort")}}</td>
      <td>Der Upload-Vorgang wurde abgebrochen.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/error_event", "error")}}</td>
      <td>Der Upload ist aufgrund eines Fehlers fehlgeschlagen.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/load_event", "load")}}</td>
      <td>Der Upload wurde erfolgreich abgeschlossen.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}</td>
      <td>
        Der Upload ist abgelaufen, da innerhalb des durch die
        {{domxref("XMLHttpRequest.timeout")}} festgelegten Zeitintervalls keine Antwort einging.
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}</td>
      <td>
        Der Upload ist beendet. Dieses Ereignis unterscheidet nicht zwischen Erfolg
        oder Misserfolg und wird am Ende des Uploads unabhängig vom Ergebnis gesendet. Vor diesem Ereignis
        wird einer der <code>load</code>, <code>error</code>, <code>abort</code> oder <code>timeout</code>-
        Ereignisse bereits ausgeliefert worden sein, um anzugeben, warum der Upload beendet wurde.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Die Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequestUpload")}}
