---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`**-Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Schnittstelle spezifiziert eine oder mehrere statische Routen, die Regeln für das Abrufen bestimmter Ressourcen definieren, die verwendet werden, noch bevor der Service Worker gestartet wird. Dies ermöglicht Ihnen beispielsweise, einen Service Worker zu umgehen, in Fällen, in denen Sie immer eine Ressource aus dem Netzwerk oder einem Browser-`Cache` abrufen möchten, und vermeidet die Leistungsbelastung unnötiger Service Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, die Regeln dafür repräsentieren, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die spezifizieren, welche Ressourcen mit dieser Regel übereinstimmen sollen. Die folgenden Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um der Regel zu entsprechen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich nicht erfüllt sein dürfen, um der Regel zu entsprechen. Bedingungen, die in einer `not`-Bedingung definiert sind, sind gegenseitig ausschließend mit anderen Bedingungen.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Ein Satz dieser definierten Bedingungen muss erfüllt sein, um der Regel zu entsprechen. Bedingungen, die in einer `or`-Bedingung definiert sind, sind gegenseitig ausschließend mit anderen Bedingungen.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) repräsentiert, mit der eine Anfrage gesendet werden soll, um der Regel zu entsprechen, wie z.B. `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) darstellt, den eine Anfrage haben soll, um der Regel zu entsprechen, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage repräsentiert, d.h. welcher Inhaltstyp angefordert werden soll, damit er der Regel entspricht. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den erforderlichen Betriebsstatus des Service Workers für eine Anfrage darstellt, um der Regel zu entsprechen. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-`input`-Muster, das die URLs darstellt, die der Regel entsprechen.

    - `source`

      - : Ein enumerierter Wert oder ein Objekt, das die Quelle angibt, aus der übereinstimmende Ressourcen geladen werden. Mögliche enumerierte Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-`Cache` geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen von einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn nicht.
        - `"network"`
          - : Ressourcen werden von dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird versucht, Ressourcen sowohl vom Netzwerk als auch vom [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers gleichzeitig zu laden. Die zuerst abgeschlossene Quelle wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-`Cache` darstellt. Übereinstimmende Ressourcen werden aus diesem spezifisch benannten Cache geladen, wenn er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regelnobjekte innerhalb von `routerRules` ungültig sind oder einen `source`-Wert von `"fetch-event"` haben, wenn der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler hat. Ebenfalls ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Spezifische Anfragen an das Netzwerk leiten, wenn der Service Worker nicht läuft

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, an das Netzwerk geleitet, wenn der Service Worker derzeit nicht läuft:

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

### Formular-POST-Anfragen direkt an das Netzwerk leiten

Im folgenden Beispiel werden [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen an ein Formular direkt an das Netzwerk gesendet und umgehen den Service Worker:

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

### Bestimmte Bildtypen-Anfragen an einen benannten Cache leiten

Im folgenden Beispiel wird der Browser-`Cache` namens `"pictures"` verwendet, um Dateien mit den Erweiterungen `.png` oder `.jpg` abzurufen:

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
> Wenn der Cache nicht existiert, weicht der Browser auf die Nutzung des Netzwerks aus, sodass die angeforderten Ressourcen dennoch abgerufen werden können, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren — dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Erweiterungen `.png` oder `.jpg` nur dann abgleichen möchten, wenn die `requestMethod` `get` ist, müssen Sie zwei separate Bedingungen angeben:

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
- [Use the Service Worker Static Routing API to bypass the service worker for specific paths](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
