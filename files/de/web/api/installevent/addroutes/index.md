---
title: "InstallEvent: Methode addRoutes()"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`**-Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Schnittstelle legt eine oder mehrere statische Routen fest, die Regeln für das Abrufen bestimmter Ressourcen definieren, die bereits vor dem Start des Service Workers verwendet werden. Dies ermöglicht es Ihnen, z.B. einen Service Worker in Fällen zu umgehen, in denen Sie immer eine Ressource aus dem Netzwerk oder einem Browser-[`Cache`](/de/docs/Web/API/Cache) abrufen möchten, und vermeidet so den Leistungsaufwand unnötiger Service Worker-Zyklen.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`

  - : Ein einzelnes Objekt oder ein Array von einem oder mehreren Objekten, das Regeln darstellt, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:

    - `condition`

      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, die angeben, welche Ressourcen dieser Regel entsprechen sollen. Folgende Eigenschaften können enthalten sein; wenn mehrere Eigenschaften verwendet werden, muss eine Ressource alle angegebenen Bedingungen erfüllen, um der Regel zu entsprechen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt sein dürfen, um der Regel zu entsprechen. Bedingungen, die innerhalb einer `not`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Ein Satz dieser definierten Bedingungen muss erfüllt sein, damit die Regel zutrifft. Bedingungen, die innerhalb einer `or`-Bedingung definiert sind, sind mit anderen Bedingungen gegenseitig ausschließend.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) darstellt, mit der eine Anfrage gesendet werden sollte, damit sie der Regel entspricht, wie `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) darstellt, den eine Anfrage haben muss, um der Regel zu entsprechen, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage darstellt, d.h. welchen Inhaltstyp angefordert werden soll, damit die Regel zutrifft. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein aufzuzählender Wert, der den erforderlichen Betriebsstatus des Service Workers darstellt, damit eine Anfrage der Regel entspricht. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-[`input`](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster, das die URLs darstellt, die der Regel entsprechen.

    - `source`

      - : Ein aufzuzählender Wert oder ein Objekt, das die Quelle spezifiziert, aus der übereinstimmende Ressourcen geladen werden. Mögliche aufzuzählende Werte sind:

        - `"cache"`
          - : Ressourcen werden aus einem Browser-[`Cache`](/de/docs/Web/API/Cache) geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen aus einem Service Worker zu laden, wenn dieser läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn nicht.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Versucht, Ressourcen sowohl aus dem Netzwerk als auch über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler des Service Workers gleichzeitig zu laden. Welche zuerst abgeschlossen ist, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzige Eigenschaft, `cacheName`, enthält, deren Wert ein String ist, der den Namen eines Browser-[`Cache`](/de/docs/Web/API/Cache) darstellt. Übereinstimmende Ressourcen werden aus diesem spezifischen benannten Cache geladen, wenn er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der Regelobjekte innerhalb von `routerRules` ungültig sind oder ein `source`-Wert von `"fetch-event"` angegeben ist, wenn der zugeordnete Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler hat. Wird auch ausgelöst, wenn versucht wird, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Spezifische Anforderungen zum Netzwerk umleiten, wenn der Service Worker nicht läuft

Im folgenden Beispiel werden URLs, die mit `/articles` beginnen, zum Netzwerk umgeleitet, wenn der Service Worker derzeit nicht läuft:

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

### Formular-POST-Anfragen direkt zum Netzwerk umleiten

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

### Bestimmte Bildanfragen zu einem benannten Cache umleiten

Im folgenden Beispiel wird der Browser-[`Cache`](/de/docs/Web/API/Cache) namens `"pictures"` zum Abrufen von Dateien mit den Erweiterungen `.png` oder `.jpg` verwendet:

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk, damit die angeforderten Ressourcen dennoch abgerufen werden können, sofern das Netzwerk verfügbar ist.

Es ist nicht möglich, `or` mit einer anderen Bedingung zu kombinieren – dies führt zu einem `TypeError`. Wenn Sie zum Beispiel Dateien mit den Erweiterungen `.png` oder `.jpg` abgleichen möchten, aber nur wenn die `requestMethod` `get` ist, müssten Sie zwei separate Bedingungen angeben:

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
- [Verwenden Sie die Service Worker Static Routing API, um den Service Worker für bestimmte Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
