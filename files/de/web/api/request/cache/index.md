---
title: "Request: cache-Eigenschaft"
short-title: cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{APIRef("Fetch API")}}

Die **`cache`**-Schreibgeschützte Eigenschaft der {{domxref("Request")}}-Schnittstelle enthält den Cache-Modus der Anfrage. Sie steuert, wie die Anfrage mit dem [HTTP-Cache](/de/docs/Web/HTTP/Caching) des Browsers interagiert.

## Wert

Ein `RequestCache`-Wert. Die verfügbaren Werte sind:

- `default` — Der Browser sucht in seinem HTTP-Cache nach einer übereinstimmenden Anfrage.

  - Wenn eine Übereinstimmung vorliegt und diese [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
  - Wenn eine Übereinstimmung vorliegt, diese aber [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
  - Wenn keine Übereinstimmung vorliegt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `no-store` — Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache zu suchen, und wird den Cache _nicht_ mit der heruntergeladenen Ressource aktualisieren.
- `reload` — Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache zu suchen, _aber wird_ den Cache mit der heruntergeladenen Ressource aktualisieren.
- `no-cache` — Der Browser sucht in seinem HTTP-Cache nach einer übereinstimmenden Anfrage.

  - Wenn eine Übereinstimmung vorliegt, _aktuell oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
  - Wenn keine Übereinstimmung vorliegt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `force-cache` — Der Browser sucht in seinem HTTP-Cache nach einer übereinstimmenden Anfrage.

  - Wenn eine Übereinstimmung vorliegt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
  - Wenn keine Übereinstimmung vorliegt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

- `only-if-cached` — Der Browser sucht in seinem HTTP-Cache nach einer übereinstimmenden Anfrage. {{experimental_inline}}

  - Wenn eine Übereinstimmung vorliegt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
  - Wenn keine Übereinstimmung vorliegt, wird der Browser mit einem [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504)-Status antworten.

  Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"`-Modus nicht verletzen.

## Beispiele

```js
// Laden einer Ressource mit Cache-Busting, um den Cache
// vollständig zu umgehen.
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* Verarbeite die Antwort */
});

// Laden einer Ressource mit Cache-Busting, aber Aktualisierung des HTTP-
// Caches mit der heruntergeladenen Ressource.
fetch("some.json", { cache: "reload" }).then((response) => {
  /* Verarbeite die Antwort */
});

// Laden einer Ressource mit Cache-Busting, wenn man mit einem
// korrekt konfigurierten Server arbeitet, der die richtigen ETag-
// und Date-Header sendet und die If-Modified-Since- und
// If-None-Match-Request-Header korrekt behandelt, sodass wir uns
// auf die Validierung verlassen können, um eine frische Antwort
// zu garantieren.
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* Verarbeite die Antwort */
});

// Laden einer Ressource mit Rücksicht auf ökonomische Aspekte!
// Bevorzugen Sie eine zwischengespeicherte, wenn auch veraltete
// Antwort, um möglichst viel Bandbreite zu sparen.
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* Verarbeite die Antwort */
});

// Naive Implementierung eines Stale-While-Revalidate-Clients auf
// der Anwendungsebene. Bevorzugen Sie eine zwischengespeicherte,
// wenn auch veraltete Antwort; aktualisieren Sie aber, wenn sie zu
// alt ist. AbortController und Signal zur besseren Speicherbereinigung.
// In Wirklichkeit wäre dies eine Funktion, die einen Pfad und einen
// Verweis auf den Controller übernimmt, da der Wert geändert werden
// muss.
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // Workaround für Chrome, das mit einem TypeError fehlschlägt
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
      // Wenn älter als 24 Stunden
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // Andere mögliche Bedingungen
    if (dt < Date.now() - 300_000)
      // Wenn älter als 5 Minuten
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // keine Stornierung oder Rückgabewert.
    return res;
  })
  .then((response) => {
    /* Verarbeite die (möglicherweise veraltete) Antwort */
  })
  .catch((error) => {
    /* Kann ein AbortError/DOMException oder ein TypeError sein */
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
