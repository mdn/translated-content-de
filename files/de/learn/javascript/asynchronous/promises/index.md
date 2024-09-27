---
title: Anleitung zur Nutzung von Promises
slug: Learn/JavaScript/Asynchronous/Promises
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Promises** sind das Fundament der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Status der Operation darstellt. Zu dem Zeitpunkt, zu dem das Promise dem Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den eventuellen Erfolg oder Misserfolg der Operation zu handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein vernünftiges Verständnis der JavaScript-Grundlagen, einschließlich der Ereignisbehandlung.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Promises in JavaScript verwendet.</td>
    </tr>
  </tbody>
</table>

Im [vorherigen Artikel](/de/docs/Learn/JavaScript/Asynchronous/Introducing) haben wir über die Verwendung von Callbacks zur Implementierung asynchroner Funktionen gesprochen. Mit diesem Design rufen Sie die asynchrone Funktion auf, indem Sie Ihre Callback-Funktion übergeben. Die Funktion gibt sofort zurück und ruft Ihr Callback auf, wenn die Operation abgeschlossen ist.

Mit einer auf Promises basierenden API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, die ausgeführt werden, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch()-API

> [!NOTE]
> In diesem Artikel werden wir Promises untersuchen, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, oder die Konsole wird sich beschweren, dass Sie `fetchPromise` neu deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu senden wir eine **HTTP-Anfrage** an den Server. In einer HTTP-Anfrage senden wir eine Anforderungsnachricht an einen entfernten Server, und dieser schickt uns eine Antwort zurück. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server abzurufen. Denken Sie an den letzten Artikel zurück, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API durchgeführt haben? Nun, in diesem Artikel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API, die moderne, auf Promises basierende Ersatzlösung für `XMLHttpRequest`.

Kopieren Sie dies in die JavaScript-Konsole Ihres Browsers:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

Hier sind wir:

1. Rufen die `fetch()`-API auf und weisen den Rückgabewert der Variable `fetchPromise` zu
2. Protokollieren unmittelbar danach die Variable `fetchPromise`. Dies sollte etwa so ausgegeben werden: `Promise { <state>: "pending" }`, was bedeutet, dass wir ein `Promise`-Objekt haben, und es einen `state` hat, dessen Wert `"pending"` ist. Der `"pending"` Status bedeutet, dass die Fetch-Operation noch läuft.
3. Übergeben eine Handlerfunktion an die **`then()`**-Methode des Promises. Wenn (und falls) die Fetch-Operation erfolgreich ist, ruft das Promise unseren Handler auf, indem es ein [`Response`](/de/docs/Web/API/Response)-Objekt übergibt, das die Serverantwort enthält.
4. Melden eine Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte in etwa wie folgt aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Im Gegensatz zu einer synchronen Funktion gibt `fetch()` zurück, während die Anfrage noch läuft, und ermöglicht es unserem Programm, reaktionsfähig zu bleiben. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies scheint wahrscheinlich dem Beispiel im letzten Artikel sehr ähnlich, in dem wir Ereignishandler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir jetzt jedoch einen Handler an die `then()`-Methode des zurückgegebene Promises.

## Verkettung von Promises

Mit der `fetch()`-API müssen Sie, sobald Sie ein `Response`-Objekt erhalten, eine weitere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

Versuchen Sie dies:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

In diesem Beispiel fügen wir, wie zuvor, einen `then()`-Handler zu dem von `fetch()` zurückgegebenen Promise hinzu. Aber dieses Mal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler an das von `response.json()` zurückgegebene Promise.

Dies sollte "baked beans" (den Namen des ersten in "products.json" aufgeführten Produkts) protokollieren.

Aber Moment mal! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass wir durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks sukzessive verschachtelte Ebenen von Code erhalten? Und wir sagten, dass dieser "Callback Hell" unseren Code schwer verständlich machte? Ist das nicht dasselbe, nur mit `then()`-Aufrufen?

In der Tat. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der Funktion vervollständigt wird, die ihm übergeben wird_. Das bedeutet, dass wir (und sollten) den obigen Code so umschreiben können:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

Anstelle der zweiten `then()`-Aufruf innerhalb des Handlers für das erste `then()` können wir das von `json()` zurückgegebene Promise _zurückgeben_ und die zweite `then()`-Methode für diesen Rückgabewert aufrufen. Dies nennt man **Promise Chaining** und bedeutet, dass wir zunehmend mehr Einrückungen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe vornehmen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein Element hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage angenommen hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Wir tun dies, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn er nicht "OK" war:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

## Fehler erfassen

Dies bringt uns zum letzten Teil: Wie gehen wir mit Fehlern um? Die `fetch()`-API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung vorhanden war oder die URL auf irgendeine Weise fehlerhaft war), und wir werfen selbst einen Fehler aus, wenn der Server einen Fehler zurückgegeben hat.

Im letzten Artikel haben wir festgestellt, dass die Fehlerbehandlung bei verschachtelten Callback-Funktionen sehr schwierig werden kann, da wir auf jeder Verschachtelungsebene Fehler behandeln müssen.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Diese ist ähnlich wie `then()`: Sie rufen sie auf und übergeben eine Handlerfunktion. Der Unterschied besteht darin, dass während der Handler, der an `then()` übergeben wurde, aufgerufen wird, wenn der asynchrone Vorgang _Erfolg_ hat, der an `catch()` übergebene Handler aufgerufen wird, wenn der asynchrone Vorgang _fehlschlägt_.

Wenn Sie `catch()` an das Ende einer Promise-Kette anhängen, wird es aufgerufen, wenn einer der asynchronen Funktionsaufrufe fehlschlägt. So können Sie einen Vorgang als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und haben einen einzigen Ort, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehlerhandler mit `catch()` hinzugefügt und die URL so modifiziert, dass die Anfrage fehlschlägt.

```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

Versuchen Sie, diese Version auszuführen: Sie sollten den Fehler sehen, der von unserem `catch()`-Handler protokolliert wird.

## Terminologie von Promises

Promises bringen einige ziemlich spezifische Terminologien mit sich, die es wert sind, dass man sich damit vertraut macht.

Erstens kann ein Promise in einem von drei Zuständen sein:

- **pending**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, war noch nicht erfolgreich oder fehlgeschlagen. Dies ist der Zustand, in dem sich Ihr Promise befindet, wenn es von einem Aufruf von `fetch()` zurückgegeben wird und die Anfrage noch ausgeführt wird.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird der `then()`-Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise abgelehnt wird, wird der `catch()`-Handler aufgerufen.

Beachten Sie, dass hier, was "erfolgreich" oder "fehlgeschlagen" bedeutet, von der betreffenden API abhängt. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler verhindert hat, dass die Anfrage gesendet werden kann, erfüllt das Promise jedoch, wenn der Server eine Antwort gesendet hat, auch wenn die Antwort ein Fehler wie [404 Not Found](/de/docs/Web/HTTP/Status/404) war.

Manchmal verwenden wir den Begriff **settled**, um sowohl **fulfilled** als auch **rejected** abzudecken.

Ein Promise ist **resolved**, wenn es abgeschlossen ist oder wenn es "fixiert" ist, um dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombination mehrerer Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihr Vorgang aus mehreren asynchronen Funktionen besteht und jede abgeschlossen sein muss, bevor die nächste beginnt. Aber es gibt andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise`-API bietet einige Hilfsmittel dafür.

Manchmal müssen alle Promises erfüllt werden, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, sie alle zusammen zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die Methode {{jsxref("Promise/all", "Promise.all()")}} ist hier das, was Sie brauchen. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und nur wenn _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten aufgerufen, in der gleichen Reihenfolge, in der die Promises `all()` übergeben wurden.
- abgelehnt, wenn und nur wenn _irgendeines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der von dem Promise geworfen wurde, das abgelehnt wurde.

Zum Beispiel:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Hier machen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn sie alle erfolgreich sind, werden wir den Antwortstatus jeder Anfrage protokollieren. Wenn eine von ihnen fehlschlägt, dann protokollieren wir den Misserfolg.

Mit den von uns bereitgestellten URLs sollten alle Anfragen erfüllt werden, obwohl der zweite Server `404` (Not Found) statt `200` (OK) zurückgeben wird, weil die angeforderte Datei nicht existiert. Daher sollte die Ausgabe so aussehen:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Versuchen wir denselben Code mit einer schlecht geformten URL, wie dieser:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten Folgendes sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie, dass ein beliebiges Promise aus einer Menge von Promises erfüllt wird, und es ist Ihnen egal, welches. In diesem Fall verwenden Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt wird, sobald eines der Promises in dem Array erfüllt ist, oder abgelehnt wird, wenn alle abgelehnt wurden:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Beachten Sie, dass wir in diesem Fall nicht vorhersagen können, welche Fetch-Anfrage zuerst abgeschlossen wird.

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zur Kombination mehrerer Promises. Um mehr über die restlichen Funktionen zu erfahren, lesen Sie die {{jsxref("Promise")}} Referenzdokumentation.

## async und await

Das Schlüsselwort {{jsxref("Statements/async_function", "async")}} bietet eine einfachere Möglichkeit, mit asynchronem, auf Promises basierendem Code zu arbeiten. Das Hinzufügen von `async` am Anfang einer Funktion macht sie zu einer asynchronen Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer asynchronen Funktion können Sie das Schlüsselwort `await` vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies sorgt dafür, dass der Code an dieser Stelle wartet, bis das Promise abgeschlossen ist, wobei der erfüllte Wert des Promises als Rückgabewert behandelt wird, oder der abgelehnte Wert wird geworfen.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie eine synchrone Code aussieht. Zum Beispiel könnten wir damit unser Fetch-Beispiel umschreiben:

```js
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

Hier rufen wir `await fetch()` auf, und anstatt ein `Promise` zu erhalten, bekommt unser Aufrufer ein vollständiges `Response`-Objekt zurück, so als wäre `fetch()` eine synchrone Funktion!

Wir können sogar einen `try...catch`-Block zur Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass asynchrone Funktionen immer ein Promise zurückgeben, und Sie können so etwas nicht tun:

```js example-bad
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work
```

Stattdessen müssten Sie so etwas tun:

```js
async function fetchProducts() {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

const promise = fetchProducts();
promise
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

Hier haben wir den `try...catch`-Block zurück in den `catch`-Handler des zurückgegebenen Promises verschoben. Das bedeutet, dass unser `then`-Handler nicht den Fall behandeln muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion abgefangen wurde und `data` dadurch `undefined` wurde. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async`-Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies nicht in einem normalen Skript tun können:

![](15-9e5e4f3.md)

Sie werden wahrscheinlich `async`-Funktionen oft verwenden, wo Sie sonst Promise-Ketten verwenden könnten, da sie die Arbeit mit Promises viel intuitiver machen.

Denken Sie daran, dass genau wie eine Promise-Kette, `await` asynchrone Operationen zwingt, in einer Serie abgeschlossen zu werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn das nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Fazit

Promises sind das Fundament der asynchronen Programmierung in modernem JavaScript. Sie erleichtern es, Abfolgen von asynchronen Operationen auszudrücken und zu verstehen, ohne tief verschachtelte Callbacks, und sie unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch`-Statement ähnlich ist.

Die `async`- und `await`-Schlüsselwörter erleichtern den Aufbau einer Operation aus einer Reihe aufeinanderfolgender asynchroner Funktionsaufrufe und ersparen die Notwendigkeit, explizite Promise-Ketten zu erstellen. Sie ermöglichen es Ihnen, Code zu schreiben, der genauso aussieht wie synchroner Code.

Promises funktionieren in den neuesten Versionen aller modernen Browser; der einzige Ort, an dem die Promise-Unterstützung ein Problem sein wird, ist in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, sondern nur die interessantesten und nützlichsten. Wenn Sie anfangen, mehr über Promises zu lernen, werden Sie auf weitere Funktionen und Techniken stoßen.

Viele moderne Web-APIs sind Promise-basiert, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
