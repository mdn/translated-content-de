---
title: "InstallEvent: Methode addRoutes()"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Service Workers API")}}

Die Methode **`addRoutes()`** der Schnittstelle [`InstallEvent`](/de/docs/Web/API/InstallEvent) legt eine oder mehrere statische Routen fest. Diese definieren Regeln zum Abrufen bestimmter Ressourcen, die bereits vor dem Start des Service Workers angewendet werden. So können Sie beispielsweise den Service Worker umgehen, wenn eine Ressource immer aus dem Netzwerk oder einem Browser-[`Cache`](/de/docs/Web/API/Cache) abgerufen werden soll. Dadurch entfällt der Leistungsaufwand für unnötige Service-Worker-Abläufe.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameter

- `routerRules`
  - : Ein einzelnes Objekt oder ein Array aus einem oder mehreren Objekten, die Regeln dafür darstellen, wie bestimmte Ressourcen abgerufen werden sollen. Jedes `routerRules`-Objekt enthält die folgenden Eigenschaften:
    - `condition`
      - : Ein Objekt, das eine oder mehrere Bedingungen definiert, anhand derer bestimmt wird, welche Ressourcen dieser Regel entsprechen. Die folgenden Eigenschaften können enthalten sein. Werden mehrere Eigenschaften verwendet, muss eine Ressource alle angegebenen Bedingungen erfüllen, um der Regel zu entsprechen.
        - `not` {{optional_inline}}
          - : Ein `condition`-Objekt, das Bedingungen definiert, die ausdrücklich **nicht** erfüllt sein dürfen, damit die Regel zutrifft. Bedingungen innerhalb einer `not`-Bedingung schließen sich mit anderen Bedingungen gegenseitig aus.
        - `or` {{optional_inline}}
          - : Ein Array aus `condition`-Objekten. Einer dieser Bedingungssätze muss erfüllt sein, damit die Regel zutrifft. Bedingungen innerhalb einer `or`-Bedingung schließen sich mit anderen Bedingungen gegenseitig aus.
        - `requestMethod` {{optional_inline}}
          - : Ein String, der die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) angibt, mit der eine Anfrage gesendet werden muss, damit die Regel zutrifft, beispielsweise `"get"`, `"put"` oder `"head"`.
        - `requestMode` {{optional_inline}}
          - : Ein String, der den [Modus](/de/docs/Web/API/Request/mode) angibt, den eine Anfrage haben muss, damit die Regel zutrifft, beispielsweise `"same-origin"`, `"no-cors"` oder `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : Ein String, der das [Ziel](/de/docs/Web/API/Request/destination) einer Anfrage angibt, also welcher Inhaltstyp angefordert werden muss, damit die Regel zutrifft. Beispiele sind `"audio"`, `"document"`, `"script"` und `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : Ein Aufzählungswert, der angibt, welchen Ausführungsstatus der Service Worker haben muss, damit eine Anfrage der Regel entspricht. Mögliche Werte sind `"running"` und `"not-running"`.
        - `urlPattern` {{optional_inline}}
          - : Eine [`URLPattern`](/de/docs/Web/API/URLPattern)-Instanz oder ein [`input`](/de/docs/Web/API/URLPattern/URLPattern#input)-Muster für den `URLPattern()`-Konstruktor, das die URLs beschreibt, die der Regel entsprechen. Einfanggruppen in regulären Ausdrücken sind nicht zulässig; daher muss [`URLPattern.hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) den Wert `false` haben.

    - `source`
      - : Ein Aufzählungswert oder ein Objekt, das die Quelle angibt, aus der passende Ressourcen geladen werden. Mögliche Aufzählungswerte sind:
        - `"cache"`
          - : Ressourcen werden aus einem Browser-[`Cache`](/de/docs/Web/API/Cache) geladen.
        - `"fetch-event"`
          - : Ressourcen werden über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers geladen. Dies lässt sich mit der Bedingung `"runningStatus"` kombinieren, um Ressourcen aus dem Service Worker zu laden, wenn er ausgeführt wird, und andernfalls auf eine statische Route über das Netzwerk zurückzugreifen.
        - `"network"`
          - : Ressourcen werden aus dem Netzwerk geladen.
        - `"race-network-and-fetch-handler"`
          - : Es wird gleichzeitig versucht, Ressourcen aus dem Netzwerk und über den [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler des Service Workers zu laden. Verwendet wird die Quelle, die zuerst fertig ist.

        Der Wert von `source` kann auch ein Objekt mit einer einzigen Eigenschaft sein: `cacheName`. Deren Wert ist ein String mit dem Namen eines Browser-[`Cache`](/de/docs/Web/API/Cache). Passende Ressourcen werden aus diesem benannten Cache geladen, sofern er existiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere der Regelobjekte in `routerRules` ungültig sind oder den `source`-Wert `"fetch-event"` haben, obwohl der zugehörige Service Worker keinen [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler besitzt. Wird auch ausgelöst, wenn Sie versuchen, `or` mit einem anderen Bedingungstyp zu kombinieren.

## Beispiele

### Bestimmte Anfragen an das Netzwerk weiterleiten, wenn der Service Worker nicht ausgeführt wird

Im folgenden Beispiel werden Anfragen an URLs, die mit `/articles` beginnen, an das Netzwerk weitergeleitet, wenn der Service Worker gerade nicht ausgeführt wird:

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

### POST-Anfragen eines Formulars an das Netzwerk weiterleiten

Im folgenden Beispiel werden [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen eines Formulars direkt an das Netzwerk gesendet und umgehen den Service Worker:

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

### Anfragen für bestimmte Bildtypen an einen benannten Cache weiterleiten

Im folgenden Beispiel wird der Browser-[`Cache`](/de/docs/Web/API/Cache) mit dem Namen `"pictures"` verwendet, um Dateien mit den Endungen `.png` oder `.jpg` abzurufen:

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
> Wenn der Cache nicht existiert, verwendet der Browser standardmäßig das Netzwerk. So können die angeforderten Ressourcen dennoch abgerufen werden, sofern das Netzwerk verfügbar ist.

Sie können `or` nicht mit einer anderen Bedingung kombinieren – dies führt zu einem `TypeError`. Wenn Sie beispielsweise Dateien mit den Endungen `.png` oder `.jpg` nur dann abgleichen möchten, wenn `requestMethod` den Wert `get` hat, müssen Sie zwei separate Bedingungen angeben:

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
- [Die Service Worker Static Routing API verwenden, um den Service Worker für bestimmte Pfade zu umgehen](https://developer.chrome.com/blog/service-worker-static-routing) auf `developer.chrome.com` (2024)
