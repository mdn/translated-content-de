---
title: "InstallEvent: addRoutes() Methode"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: aafad07220c63481570e43cc66a5d9fb7b985ffc
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Die **`addRoutes()`** Methode der [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Schnittstelle spezifiziert eine oder mehrere statische Routen, die Regeln für das Abrufen bestimmter Ressourcen definieren, die noch vor dem Start des Service Workers verwendet werden. Dies ermöglicht es Ihnen, z. B. einen Service Worker zu umgehen, wenn Sie eine Ressource immer aus dem Netzwerk oder einem Browser-`Cache` abrufen möchten, und vermeidet den Leistungsaufwand unnötiger Service Worker-Zyklen.

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
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt werden dürfen, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `not`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `or` {{optional_inline}}
          - : Ein Array von `condition`-Objekten. Eines dieser definierten Bedingungssets muss erfüllt sein, um mit der Regel übereinzustimmen. Bedingungen, die innerhalb einer `or`-Bedingung definiert sind, schließen sich gegenseitig mit anderen Bedingungen aus.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) darstellt, mit der eine Anfrage gesendet werden soll, damit sie mit der Regel übereinstimmt, wie z. B. `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) darstellt, den eine Anfrage haben soll, um mit der Regel übereinzustimmen, zum Beispiel `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage darstellt, d.h. welcher Inhaltstyp angefordert werden soll, damit sie mit der Regel übereinstimmt. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein enumerierter Wert, der den erforderlichen Betriebsstatus des Service Workers für eine Anfrage darstellt, um mit der Regel übereinzustimmen. Werte können `"running"` oder `"not-running"` sein.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein `URLPattern()`-Konstruktor-[`input`](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster, das die URLs darstellt, die mit der Regel übereinstimmen. Reguläre Ausdrucks-Capturing-Gruppen sind nicht erlaubt, daher muss [`URLPattern.hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) `false` sein.

    - `source`
      - : Ein enumerierter Wert oder ein Objekt, das die Quelle angibt, von der übereinstimmende Ressourcen geladen werden. Mögliche enumerierte Werte sind:
        - `"cache"`
          - : Ressourcen werden aus einem Browser-`Cache` geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers geladen. Dies kann mit der `"runningStatus"`-Bedingung kombiniert werden, um Ressourcen aus einem Service Worker zu laden, wenn er läuft, und auf eine statische Route im Netzwerk zurückzugreifen, wenn dies nicht der Fall ist.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird versucht, Ressourcen gleichzeitig aus dem Netzwerk und dem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers zu laden. Welches auch immer zuerst abgeschlossen wird, wird verwendet.

        Der `source`-Wert kann auch auf ein Objekt gesetzt werden, das eine einzelne Eigenschaft enthält, `cacheName`, dessen Wert ein String ist, der den Namen eines Browser-`Cache` darstellt. Übereinstimmende Ressourcen werden aus diesem spezifisch benannten Cache geladen, wenn er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn eines oder mehrere der Regelobjekte in `routerRules` ungültig sind oder einen `source`-Wert von `"fetch-event"` haben, wenn der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler hat. Wird auch geworfen, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

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

### Formulare-POST-Anfragen an das Netzwerk leiten

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

### Bestimmte Bildanfragetypen an einen benannten Cache leiten

Im folgenden Beispiel wird der Browser-`Cache` mit dem Namen `"pictures"` zum Abrufen von Dateien mit den Erweiterungen `.png` oder `.jpg` verwendet:

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

Sie können `or` nicht mit einer anderen Bedingung kombinieren – dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Erweiterungen `.png` oder `.jpg` nur dann abgleichen möchten, wenn die `requestMethod` `get` ist, müssen Sie zwei separate Bedingungen angeben:

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
- [`install`-Event](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Use the Service Worker Static Routing API to bypass the service worker for specific paths](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
