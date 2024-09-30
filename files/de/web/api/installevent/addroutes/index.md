---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`**-Methode des [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Interfaces legt eine oder mehrere statische Routen fest, die Regeln zum Abrufen bestimmter Ressourcen definieren, die bereits vor dem Start des Service-Workers verwendet werden. Dies ermöglicht es Ihnen beispielsweise, einen Service-Worker in Fällen zu umgehen, in denen Sie eine Ressource immer aus dem Netzwerk oder einem Browser-`Cache` abrufen möchten, und vermeidet den Leistungsaufwand unnötiger Service-Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, die Regeln dafür repräsentieren, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die spezifizieren, welche Ressourcen dieser Regel entsprechen sollen. Die folgenden Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um der Regel zu entsprechen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt sein müssen, um der Regel zu entsprechen. Bedingungen, die in einer `not`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Ein Satz dieser definierten Bedingungen muss erfüllt sein, um der Regel zu entsprechen. Bedingungen, die in einer `or`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Methods) repräsentiert, mit der eine Anfrage gesendet werden soll, um der Regel zu entsprechen, wie zum Beispiel `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) repräsentiert, den eine Anfrage haben soll, um der Regel zu entsprechen, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage repräsentiert, d.h. welcher Inhaltstyp angefordert werden soll, um der Regel zu entsprechen. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den erforderlichen Ausführungsstatus des Service-Workers darstellt, damit eine Anfrage der Regel entspricht. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-`input`-Muster, das die URLs darstellt, die der Regel entsprechen.

    - `source`

      - : Ein enumerierter Wert oder ein Objekt, das die Quelle angibt, aus der passende Ressourcen geladen werden. Mögliche enumerierte Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-`Cache` geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler des Service-Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen aus einem Service-Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn nicht.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird versucht, Ressourcen gleichzeitig aus dem Netzwerk und dem `fetch`-Ereignishandler des Service-Workers zu laden. Welche zuerst fertig ist, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-`Cache` repräsentiert. Passende Ressourcen werden aus diesem speziellen benannten Cache geladen, falls dieser existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regelobjekte innerhalb `routerRules` ungültig sind oder einen `source`-Wert von `"fetch-event"` haben, wenn der zugehörige Service-Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler hat. Wird auch ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Spezifische Anfragen an das Netzwerk weiterleiten, wenn der Service-Worker nicht aktiv ist

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, an das Netzwerk weitergeleitet, wenn der Service-Worker derzeit nicht läuft:

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

### Formular-POST-Anfragen an das Netzwerk weiterleiten

Im folgenden Beispiel werden [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfragen an ein Formular direkt an das Netzwerk gesendet und umgehen den Service-Worker:

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

### Bestimmte Bildanfragen an einen benannten Cache weiterleiten

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, sodass die angeforderten Ressourcen dennoch bereitgestellt werden können, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren – dies führt zu einem `TypeError`. Wenn Sie zum Beispiel Dateien mit den Erweiterungen `.png` oder `.jpg` nur dann abgleichen möchten, wenn `requestMethod` `get` ist, müssen Sie zwei separate Bedingungen angeben:

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
- [`install`-Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwendung der Service Worker Static Routing API, um den Service Worker für bestimmte Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
