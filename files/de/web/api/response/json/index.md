---
title: "Response: Methode json()"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt
einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Textkörpers als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis trotz des Namens der Methode `json()` kein JSON ist, sondern das Ergebnis des Parsens der JSON-Eingabe, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem JavaScript-Objekt auflöst. Dieses Objekt kann
alles sein, was durch JSON dargestellt werden kann – ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wirft eine der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Antwortkörper kann nicht als JSON geparst werden.

## Beispiele

In unserem [fetch-JSON-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (ausführen [fetch JSON live](https://mdn.github.io/dom-examples/fetch/fetch-json/)),
erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden es dann, um eine `.json`-Datei abzurufen.
Wenn das Abrufen erfolgreich ist, lesen und parsen wir die Daten mit `json()`, lesen
die Werte aus den resultierenden Objekten wie erwartet heraus und fügen sie in Listenelemente ein, um unsere Produktdaten anzuzeigen.

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

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
