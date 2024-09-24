---
title: "Response: json()-Methode"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

Die **`json()`**-Methode der {{DOMxRef("Response")}}-Schnittstelle nimmt einen {{DOMxRef("Response")}}-Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das mit dem Ergebnis der Analyse des Body-Texts als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis trotz des Namens der Methode `json()` kein JSON ist, sondern das Ergebnis, JSON als Eingabe zu nehmen und es zu analysieren, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein JavaScript-Objekt aufgelöst wird. Dieses Objekt kann alles sein, was durch JSON dargestellt werden kann – ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- {{domxref("DOMException")}} `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Response-Body ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Body-Inhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Response-Body kann nicht als JSON analysiert werden.

## Beispiele

In unserem [Fetch-JSON-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (führen Sie [Fetch-JSON live aus](https://mdn.github.io/dom-examples/fetch/fetch-json/)),
erstellen wir eine neue Anfrage mit dem {{DOMxRef("Request.Request", "Request()")}}-Konstruktor und verwenden diese, um eine `.json`-Datei abzurufen.
Wenn der Abruf erfolgreich ist, lesen und analysieren wir die Daten mit `json()`, lesen anschließend die Werte aus den resultierenden Objekten aus, wie Sie es erwarten würden, und fügen sie in Listenelemente ein, um unsere Produktdaten anzuzeigen.

```js
const myList = document.querySelector("ul");
const myRequest = new Request("products.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        product.Name;
      listItem.append(` can be found in ${product.Location}. Cost: `);
      listItem.appendChild(document.createElement("strong")).textContent =
        `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
