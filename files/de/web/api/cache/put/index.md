---
title: "Cache: put() Methode"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`put()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces ermöglicht es, Schlüssel/Wert-Paare dem aktuellen [`Cache`](/de/docs/Web/API/Cache)-Objekt hinzuzufügen.

Oft möchten Sie einfach einen oder mehrere Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) abholen und das Ergebnis direkt in Ihrem Cache hinzufügen. In solchen Fällen ist es besser, [`Cache.add()`](/de/docs/Web/API/Cache/add)/[`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) zu verwenden, da sie Abkürzungsmethoden für eine oder mehrere dieser Operationen sind.

> **Note:** `put()` überschreibt jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das mit der Anfrage übereinstimmt.

> **Note:** [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) speichern keine Antworten mit `Response.status`-Werten außerhalb des 200-Bereichs, während `Cache.put` es Ihnen ermöglicht, jedes Anfrage-/Antwort-Paar zu speichern. Infolgedessen können [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) nicht verwendet werden, um opake Antworten zu speichern, während `Cache.put` dies kann.

## Syntax

### Parameter

- `request`
  - : Das [`Request`](/de/docs/Web/API/Request)-Objekt oder die URL, die Sie dem Cache hinzufügen möchten.
- `response`
  - : Die [`Response`](/de/docs/Web/API/Response), die Sie mit der Anfrage abgleichen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das URL-Schema nicht `http` oder `https` ist.

## Beispiele

Dieses Beispiel stammt aus dem MDN [Simple-Service-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [simple-service-worker live ausführen](https://bncb2v.csb.app/)).
Hier warten wir, bis ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir erstellen eine benutzerdefinierte Antwort wie folgt:

1. Prüfen, ob im [`CacheStorage`](/de/docs/Web/API/CacheStorage) über [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) eine Übereinstimmung für die Anfrage gefunden wird. Wenn ja, wird diese bereitgestellt.
2. Wenn nicht, öffnen Sie den `v1` Cache mit `open()`, fügen Sie die Standard-Netzwerkanfrage mit `Cache.put()` in den Cache ein und geben Sie einen Klon der Standard-Netzwerkanfrage mit `return response.clone()` zurück. Der Klon wird benötigt, weil `put()` den Antwortkörper konsumiert.
3. Falls dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), wird eine Ausweichantwort zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
