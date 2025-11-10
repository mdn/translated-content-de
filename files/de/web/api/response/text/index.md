---
title: "Antwort: text()-Methode"
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 2845a346b971d6d0415bf24e53084cd4d7aab1e0
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`text()`**-Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest diesen vollständig aus. Sie gibt ein Promise zurück, das mit einem {{jsxref("String")}} erfüllt wird. Die Antwort wird _immer_ mit UTF-8 dekodiert.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("String")}} erfüllt wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).

## Beispiele

In unserem [Beispiel für das Abrufen von Text](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text) (führen Sie [fetch text live](https://mdn.github.io/dom-examples/fetch/fetch-text/) aus), haben wir ein {{htmlelement("article")}}-Element und drei Links (gespeichert im `myLinks`-Array). Zuerst iterieren wir durch alle diese und geben jedem einen `onclick`-Ereignishandler, sodass die `getData()`-Funktion ausgeführt wird – mit dem `data-page`-Identifikator des Links als Argument – wenn einer der Links angeklickt wird.

Wenn `getData()` ausgeführt wird, erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden diese, um eine bestimmte `.txt`-Datei abzurufen. Wenn das Abrufen erfolgreich ist, lesen wir einen String aus der Antwort mit `text()` und setzen dann das [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des {{htmlelement("article")}}-Elements gleich dem Textobjekt.

```js
const myArticle = document.querySelector("article");
const myLinks = document.querySelectorAll("ul a");

for (const link of myLinks) {
  link.onclick = (e) => {
    e.preventDefault();
    const linkData = e.target.getAttribute("data-page");
    getData(linkData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const myRequest = new Request(`${pageId}.txt`);
  fetch(myRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      myArticle.innerText = text;
    })
    .catch((error) => {
      myArticle.innerText = `Error: ${error.message}`;
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
