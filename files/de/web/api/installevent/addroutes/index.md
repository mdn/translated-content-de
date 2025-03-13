---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`** Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent) Schnittstelle legt eine oder mehrere statische Routen fest, die Regeln zum Abrufen bestimmter Ressourcen definieren, welche auch vor dem Start des Service Workers verwendet werden. Damit können Sie zum Beispiel einen Service Worker umgehen, wenn Sie stets eine Ressource aus dem Netzwerk oder einem Browser-[`Cache`](/de/docs/Web/API/Cache) abrufen möchten, und vermeiden so den Leistungsaufwand unnötiger Service Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, die Regeln repräsentieren, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules` Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, welche spezifizieren, welche Ressourcen mit dieser Regel übereinstimmen sollen. Es können die folgenden Eigenschaften enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um mit der Regel übereinzustimmen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt sein müssen, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `not`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Eine Menge dieser definierten Bedingungen muss erfüllt sein, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `or`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `requestMethod` {{optional_inline}}
          - : Ein Zeichenfolgenwert, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) beschreibt, mit der eine Anfrage gesendet werden soll, damit sie mit der Regel übereinstimmt, wie zum Beispiel `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein Zeichenfolgenwert, der den [Modus](/de/docs/Web/API/Request/mode) einer Anfrage beschreibt, damit sie mit der Regel übereinstimmt, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein Zeichenfolgenwert, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage beschreibt, also welcher Inhaltstyp angefordert werden soll, damit sie mit der Regel übereinstimmt. Beispiele umfassen `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den geforderten Betriebsstatus des Service Workers repräsentiert, damit eine Anfrage mit der Regel übereinstimmt. Mögliche Werte sind `"running"` oder `"not-running"`.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor [`input`](/de/docs/Web/API/URLPattern/URLPattern#input) Muster, das die URLs repräsentiert, die mit der Regel übereinstimmen.

    - `source`

      - : Ein enumerierter Wert oder ein Objekt, das die Quelle spezifiziert, aus der passende Ressourcen geladen werden. Mögliche enumerierte Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-[`Cache`](/de/docs/Web/API/Cache) geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen von einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn nicht.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird versucht, Ressourcen sowohl aus dem Netzwerk als auch über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler des Service Workers gleichzeitig zu laden. Das zuerst abgeschlossene wird verwendet.

        Der `source` Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft, `cacheName`, enthält, deren Wert eine Zeichenfolge ist, die den Namen eines Browser-[`Cache`](/de/docs/Web/API/Cache) repräsentiert. Passende Ressourcen werden aus diesem spezifischen benannten Cache geladen, falls er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regeln-Objekte innerhalb von `routerRules` ungültig sind oder einen `source` Wert von `"fetch-event"` haben, wenn der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler hat. Wird auch ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Bestimmte Anfragen zum Netzwerk leiten, wenn der Service Worker nicht läuft

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

### Formular-POST-Anfragen zum Netzwerk leiten

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

### Bestimmte Bildanfragetypen zu einem benannten Cache leiten

Im folgenden Beispiel wird der Browser-[`Cache`](/de/docs/Web/API/Cache) mit dem Namen `"pictures"` verwendet, um Dateien mit den Erweiterungen `.png` oder `.jpg` abzurufen:

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, sodass die angeforderten Ressourcen weiterhin bezogen werden können, sofern das Netzwerk verfügbar ist.

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
- [`install` Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwenden Sie die Service Worker Static Routing API, um den Service Worker für bestimmte Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
