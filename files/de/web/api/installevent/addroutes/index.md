---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

Die **`addRoutes()`** Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Schnittstelle spezifiziert eine oder mehrere statische Routen, die Regeln für das Abrufen bestimmter Ressourcen definieren, die verwendet werden, noch bevor der Service Worker gestartet wird. Dies ermöglicht es Ihnen beispielsweise, einen Service Worker zu umgehen, wenn Sie immer eine Ressource aus dem Netzwerk oder einem Browser-[`Cache`](/de/docs/Web/API/Cache) abrufen möchten und vermeidet so den Leistungsaufwand unnötiger Service Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`
  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, das Regeln repräsentiert, wie bestimmte Ressourcen abgerufen werden sollten. Jedes `routerRules`-Objekt enthält folgende Eigenschaften:
    - `condition`
      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die festlegen, welche Ressourcen dieser Regel entsprechen sollten. Die folgenden Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um der Regel zu entsprechen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt werden dürfen, um der Regel zu entsprechen. Bedingungen, die innerhalb einer `not`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Ein Satz dieser definierten Bedingungen muss erfüllt sein, um der Regel zu entsprechen. Bedingungen, die innerhalb einer `or`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) repräsentiert, mit der eine Anfrage gesendet werden sollte, damit sie der Regel entspricht, wie z.B. `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) repräsentiert, den eine Anfrage haben sollte, damit sie der Regel entspricht, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage repräsentiert, d.h. welcher Inhaltstyp angefordert werden soll, damit sie der Regel entspricht. Beispiele umfassen `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein aufgezählter Wert, der den erforderlichen Betriebsstatus des Service Workers repräsentiert, damit eine Anfrage der Regel entspricht. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-[`input`](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster, das die URLs repräsentiert, die der Regel entsprechen. Reguläre Ausdrucksgruppen sind nicht erlaubt, daher muss [`URLPattern.hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) `false` sein.

    - `source`
      - : Ein aufgezählter Wert oder ein Objekt, das die Quelle spezifiziert, aus der übereinstimmende Ressourcen geladen werden. Mögliche aufgezählte Werte sind:
        - `"cache"`
          - : Ressourcen werden aus einem Browser-[`Cache`](/de/docs/Web/API/Cache) geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis-Handler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen aus einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn nicht.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Versuche werden unternommen, Ressourcen gleichzeitig aus dem Netzwerk und dem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis-Handler des Service Workers zu laden. Welches auch immer zuerst abgeschlossen wird, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-`Cache` repräsentiert. Übereinstimmende Ressourcen werden aus diesem spezifischen benannten Cache geladen, falls dieser existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit `undefined` erfüllt.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regelobjekte in `routerRules` ungültig sind oder einen `source`-Wert von `"fetch-event"` haben, wenn der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis-Handler hat. Auch ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Leite spezifische Anfragen zum Netzwerk, wenn der Service Worker nicht läuft

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, zum Netzwerk geleitet, wenn der Service Worker derzeit nicht läuft:

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

### Leite Formular-POST-Anfragen zum Netzwerk

Im folgenden Beispiel werden [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen an ein Formular direkt zum Netzwerk gesendet und umgehen den Service Worker:

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

### Leite bestimmte Bildtypen-Anfragen zu einem benannten Cache

Im folgenden Beispiel wird der Browser-`Cache` mit dem Namen `"pictures"` verwendet, um Dateien mit den Endungen `.png` oder `.jpg` abzurufen:

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, sodass die angeforderten Ressourcen immer noch abgerufen werden können, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren — dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Endungen `.png` oder `.jpg` nur dann übereinstimmen lassen möchten, wenn die `requestMethod` `get` ist, müssten Sie zwei separate Bedingungen angeben:

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
