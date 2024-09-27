---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`**-Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Schnittstelle spezifiziert eine oder mehrere statische Routen, die Regeln für das Abrufen bestimmter Ressourcen definieren, die sogar vor dem Start des Service Workers verwendet werden. Dies ermöglicht es Ihnen beispielsweise, einen Service Worker zu umgehen, wenn Sie immer eine Ressource aus dem Netzwerk oder einem Browser-`Cache` abrufen möchten, und vermeidet den Leistungsaufwand unnötiger Service Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, das Regeln für die Art und Weise, wie bestimmte Ressourcen abgerufen werden sollen, darstellt. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die angeben, welche Ressourcen mit dieser Regel übereinstimmen sollen. Die folgenden Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um mit der Regel übereinzustimmen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die explizit **nicht** erfüllt werden dürfen, um mit der Regel übereinzustimmen. Bedingungen, die in einer `not`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Eine der definierten Bedingungen muss erfüllt sein, um mit der Regel übereinzustimmen. Bedingungen, die in einer `or`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Methods) darstellt, mit der eine Anfrage gesendet werden sollte, damit sie mit der Regel übereinstimmt, wie `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) darstellt, den eine Anfrage haben sollte, damit sie mit der Regel übereinstimmt, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage darstellt, also welcher Inhaltstyp angefordert werden soll, damit sie mit der Regel übereinstimmt. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den erforderlichen Laufstatus des Service Workers für eine Anfrage angibt, um mit der Regel übereinzustimmen. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-[`input`](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster, das die URLs darstellt, die mit der Regel übereinstimmen.

    - `source`

      - : Ein enumerierter Wert oder ein Objekt, das die Quelle angibt, aus der übereinstimmende Ressourcen geladen werden. Mögliche enumerierte Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-`Cache` geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen von einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn er nicht läuft.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird versucht, Ressourcen gleichzeitig aus dem Netzwerk und dem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers zu laden. Welcher zuerst fertig ist, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzige Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-`Cache` darstellt. Übereinstimmende Ressourcen werden aus diesem spezifisch benannten Cache geladen, wenn er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regeln-Objekte in `routerRules` ungültig sind oder wenn ein `source`-Wert von `"fetch-event"` angegeben ist, obwohl der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler hat. Wird auch ausgelöst, wenn `or` mit einem anderen Bedingungstyp kombiniert wird.

## Beispiele

### Routen Sie spezifische Anfragen zum Netzwerk, wenn der Service Worker nicht läuft

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, an das Netzwerk weitergeleitet, wenn der Service Worker derzeit nicht läuft:

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

### Routen Sie Formular-POST-Anfragen zum Netzwerk

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

### Routen Sie bestimmte Bildanfragen zu einem benannten Cache

Im folgenden Beispiel wird der Browser-`Cache` namens `"pictures"` zum Abrufen von Dateien mit den Erweiterungen `.png` oder `.jpg` verwendet:

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, so dass die angeforderten Ressourcen dennoch bezogen werden können, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren — dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Erweiterungen `.png` oder `.jpg` abgleichen möchten, aber nur, wenn die `requestMethod` `get` ist, müssten Sie zwei separate Bedingungen angeben:

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

- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
- [`install` event](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwenden Sie die Service Worker Static Routing API, um den Service Worker für bestimmte Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
