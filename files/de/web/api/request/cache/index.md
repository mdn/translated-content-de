---
title: "Request: cache-Eigenschaft"
short-title: cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`cache`** des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält den Cache-Modus der Anfrage. Sie steuert, wie die Anfrage mit dem [HTTP-Cache](/de/docs/Web/HTTP/Caching) des Browsers interagiert.

## Wert

Ein `RequestCache`-Wert. Die verfügbaren Werte sind:

- `default` — Der Browser sucht nach einer passenden Anfrage in seinem HTTP-Cache.

  - Wenn es eine Übereinstimmung gibt, die [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird diese aus dem Cache zurückgegeben.
  - Wenn es eine Übereinstimmung gibt, die jedoch [abgelaufen](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
  - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `no-store` — Der Browser holt die Ressource vom entfernten Server, ohne zuvor im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
- `reload` — Der Browser holt die Ressource vom entfernten Server, ohne zuvor im Cache nachzusehen, _wird aber danach_ den Cache mit der heruntergeladenen Ressource aktualisieren.
- `no-cache` — Der Browser sucht nach einer passenden Anfrage in seinem HTTP-Cache.

  - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen,_ wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
  - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `force-cache` — Der Browser sucht nach einer passenden Anfrage in seinem HTTP-Cache.

  - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
  - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `only-if-cached` — Der Browser sucht nach einer passenden Anfrage in seinem HTTP-Cache. {{experimental_inline}}

  - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
  - Wenn es keine Übereinstimmung gibt, antwortet der Browser mit einem [504 Gateway timeout](/de/docs/Web/HTTP/Status/504)-Status.

  Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der `mode` einer Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden gefolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"`-Modus nicht verletzen.

## Beispiele

```js
// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* consume the response */
});

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", { cache: "reload" }).then((response) => {
  /* consume the response */
});

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* consume the response */
});

// Download a resource with economics in mind! Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* consume the response */
});

// Naive stale-while-revalidate client-level implementation.
// Prefer a cached albeit stale response; but update if it's too old.
// AbortController and signal to allow better memory cleaning.
// In reality; this would be a function that takes a path and a
// reference to the controller since it would need to change the value
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // Workaround for chrome; which fails with a TypeError
      : Promise.reject(e),
  )
  .then((res) => {
    if (res.status === 504) {
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "force-cache",
        mode: "same-origin",
        signal: controller.signal,
      });
    }
    const date = res.headers.get("date"),
      dt = date ? new Date(date).getTime() : 0;
    if (dt < Date.now() - 86_400_000) {
      // if older than 24 hours
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // Other possible conditions
    if (dt < Date.now() - 300_000)
      // If it's older than 5 minutes
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // no cancellation or return value.
    return res;
  })
  .then((response) => {
    /* consume the (possibly stale) response */
  })
  .catch((error) => {
    /* Can be an AbortError/DOMException or a TypeError */
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
