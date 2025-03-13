---
title: "Response: json() Methode"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das mit dem Ergebnis der Verarbeitung des Body-Inhalts als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis, trotz der Bezeichnung der Methode als `json()`, kein JSON ist, sondern das Ergebnis, das durch die Verarbeitung von JSON als Eingabe entsteht und ein JavaScript-Objekt erzeugt.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein JavaScript-Objekt aufgelöst wird. Dieses Objekt kann alles sein, was durch JSON dargestellt werden kann – ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Body-Inhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Antwortkörper kann nicht als JSON geparst werden.

## Beispiele

In unserem [fetch JSON Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (laufen Sie [fetch JSON live](https://mdn.github.io/dom-examples/fetch/fetch-json/)),
erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden sie, um eine `.json`-Datei abzurufen.
Wenn der Abruf erfolgreich ist, lesen und parsen wir die Daten mit `json()`, extrahieren anschließend die erwarteten Werte aus den resultierenden Objekten und fügen sie als Listenelemente ein, um unsere Produktdaten anzuzeigen.

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
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
