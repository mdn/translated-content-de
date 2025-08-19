---
title: "Response: text() Methode"
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`text()`** Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Ende. Sie gibt ein Promise zurück, das mit einem {{jsxref("String")}} aufgelöst wird. Die Antwort wird _immer_ mit UTF-8 dekodiert.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("String")}} aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Ausgelöst aus einem der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).

## Beispiele

In unserem [Beispiel für das Abrufen von Text](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text) (führen Sie [fetch text live aus](https://mdn.github.io/dom-examples/fetch/fetch-text/)), haben wir ein {{htmlelement("article")}}-Element und drei Links (gespeichert im `myLinks` Array). Zuerst iterieren wir durch alle diese und geben jedem einen `onclick` Event-Handler, damit die `getData()` Funktion ausgeführt wird — mit dem `data-page` Identifier des Links, der als Argument übergeben wird — wenn einer der Links angeklickt wird.

Wenn `getData()` ausgeführt wird, erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor und verwenden sie, um eine bestimmte `.txt` Datei abzurufen.
Wenn das Abrufen erfolgreich ist, lesen wir einen String aus der Antwort mit `text()` und setzen dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des {{htmlelement("article")}}-Elements auf das Textobjekt.

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
    .then((response) => response.text())
    .then((text) => {
      myArticle.innerText = text;
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
