---
title: "Response: text() Methode"
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

Die **`text()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig. Sie gibt ein Promise zurück, das mit einem {{jsxref("String")}} aufgelöst wird. Die Antwort wird _immer_ mit UTF-8 dekodiert.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("String")}} aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Nachrichteninhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).

## Beispiele

In unserem [fetch text Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text) (laufen [fetch text live](https://mdn.github.io/dom-examples/fetch/fetch-text/)), haben wir ein {{htmlelement("article")}}-Element und drei Links (gespeichert im `myLinks` Array). Zuerst durchlaufen wir alle diese und geben jedem einen `onclick`-Event-Handler, sodass die `getData()` Funktion ausgeführt wird — mit der `data-page` Kennung des Links als Argument übergeben — wenn einer der Links angeklickt wird.

Wenn `getData()` ausgeführt wird, erstellen wir eine neue Anfrage mittels des [`Request()`](/de/docs/Web/API/Request/Request) Konstruktors und verwenden diese, um eine bestimmte `.txt`-Datei abzurufen. Wenn der Abruf erfolgreich ist, lesen wir einen String aus der Antwort mit `text()` und setzen dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des {{htmlelement("article")}}-Elements gleich dem Textobjekt.

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
      myArticle.innertext = text;
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
