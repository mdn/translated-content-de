---
title: "Response: json() Methode"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

Die **`json()`** Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das sich mit dem Ergebnis des Parsens des Textkörpers als {{JSxRef("JSON")}} auflöst.

Beachten Sie, dass trotz der Namensgebung `json()`, das Ergebnis kein JSON ist, sondern das Ergebnis der Verarbeitung von JSON als Eingabe, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem JavaScript-Objekt auflöst. Dieses Objekt könnte alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Ausgelöst aus einem der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Antwortkörper kann nicht als JSON geparst werden.

## Beispiele

In unserem [fetch JSON Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (führen Sie [fetch JSON live aus](https://mdn.github.io/dom-examples/fetch/fetch-json/)),
erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden sie, um eine `.json`-Datei abzurufen.
Wenn der Abruf erfolgreich ist, lesen und parsen wir die Daten mit `json()`, dann lesen wir erwartungsgemäß Werte aus den resultierenden Objekten aus und fügen sie in Listenelemente ein, um unsere Produktdaten anzuzeigen.

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
