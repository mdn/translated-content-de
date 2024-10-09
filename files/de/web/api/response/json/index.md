---
title: "Response: json() Methode"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`** Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Ende. Sie gibt ein Promise zurück, das mit dem Ergebnis der Analyse des Rumpftexts als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass der Name der Methode `json()` zwar auf JSON hinweist, das Ergebnis jedoch kein JSON ist, sondern das Resultat der Analyse von JSON-Eingaben, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem JavaScript-Objekt aufgelöst wird. Dieses Objekt kann alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Ausgelöst aus einem der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Rumpfinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Antwortkörper kann nicht als JSON analysiert werden.

## Beispiele

In unserem [fetch JSON Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (führen Sie [fetch JSON live aus](https://mdn.github.io/dom-examples/fetch/fetch-json/)),
erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden diese, um eine `.json`-Datei abzurufen.
Wenn das Abrufen erfolgreich ist, lesen und analysieren wir die Daten mit `json()`, lesen dann die Werte aus den resultierenden Objekten aus, wie Sie es erwarten würden, und fügen sie in Listenelemente ein, um unsere Produktdaten anzuzeigen.

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
