---
title: "InstallEvent: addRoutes()-Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`**-Methode der {{domxref("InstallEvent")}}-Schnittstelle spezifiziert eine oder mehrere statische Routen, die Regeln für das Abrufen bestimmter Ressourcen definieren, die sogar vor dem Start des Service Workers verwendet werden. Dies ermöglicht es Ihnen beispielsweise, einen Service Worker in Fällen zu umgehen, in denen Sie eine Ressource immer aus dem Netzwerk oder einem Browser-{{domxref("Cache")}} abrufen möchten, und vermeidet den Leistungsaufwand unnötiger Service-Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, die Regeln dafür darstellen, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die angeben, welche Ressourcen mit dieser Regel übereinstimmen sollen. Die folgenden Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um mit der Regel übereinzustimmen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt sein müssen, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `not`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Eine festgelegte dieser definierten Bedingungen muss erfüllt sein, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `or`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Methods) darstellt, mit der eine Anfrage gesendet werden sollte, damit sie mit der Regel übereinstimmt, wie z.B. `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) darstellt, den eine Anfrage haben sollte, damit sie mit der Regel übereinstimmt, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage darstellt, also welchen Inhaltstyp angefordert werden sollte, damit sie mit der Regel übereinstimmt. Beispiele beinhalten `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den erforderlichen Laufstatus des Service Workers darstellt, damit eine Anfrage mit der Regel übereinstimmt. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine {{domxref("URLPattern")}}-Instanz oder ein `URLPattern()`-Konstruktor-["Eingabe"](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster, das die URLs darstellt, die mit der Regel übereinstimmen.

    - `source`

      - : Ein enumerierter Wert oder ein Objekt, das die Quelle angibt, von der übereinstimmende Ressourcen geladen werden sollen. Mögliche enumerierte Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-{{domxref("Cache")}} geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}}-Ereignishandler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen von einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn er nicht läuft.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es werden Versuche unternommen, Ressourcen gleichzeitig aus dem Netzwerk und dem {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}}-Ereignishandler des Service Workers zu laden. Welche zuerst fertig ist, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-{{domxref("Cache")}} darstellt. Übereinstimmende Ressourcen werden aus diesem spezifischen benannten Cache geladen, falls er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eines oder mehrere der Regelobjekte innerhalb von `routerRules` ungültig sind oder einen `source`-Wert von `"fetch-event"` haben, wenn der zugehörige Service Worker keinen {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}}-Ereignishandler hat. Auch ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Leiten Sie bestimmte Anfragen an das Netzwerk, wenn der Service Worker nicht läuft

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, an das Netzwerk gesendet, wenn der Service Worker derzeit nicht läuft:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/articles/*",
      runningStatus: "not-running",
    },
    source: "network",
  });
});
```

### Leiten Sie POST-Formularanfragen an das Netzwerk um

Im folgenden Beispiel werden [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfragen an ein Formular direkt an das Netzwerk gesendet und umgehen den Service Worker:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/form/*",
      requestMethod: "post",
    },
    source: "network",
  });
});
```

### Leiten Sie bestimmte Bildtypenanforderungen an einen benannten Cache um

Im folgenden Beispiel wird der Browser-{{domxref("Cache")}} namens `"pictures"` zum Abrufen von Dateien mit den Erweiterungen `.png` oder `.jpg` verwendet:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      or: [{ urlPattern: "*.png" }, { urlPattern: "*.jpg" }],
    },
    source: {
      cacheName: "pictures",
    },
  });
});
```

> [!NOTE]
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, sodass die angeforderten Ressourcen weiterhin abgerufen werden können, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren — dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Erweiterungen `.png` oder `.jpg` nur dann abgleichen möchten, wenn die `requestMethod` `get` ist, müssen Sie zwei separate Bedingungen spezifizieren:

```js
addEventListener("install", (event) => {
  event.addRoutes(
    {
      condition: {
        urlPattern: "*.png",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
    {
      condition: {
        urlPattern: "*.jpg",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("InstallEvent")}}
- [`install` event](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwenden Sie die Service Worker Static Routing API, um den Service Worker für spezifische Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
