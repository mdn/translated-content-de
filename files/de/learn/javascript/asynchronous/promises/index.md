---
title: Anleitung zur Verwendung von Promises
slug: Learn/JavaScript/Asynchronous/Promises
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation darstellt. Zum Zeitpunkt, an dem das Promise dem Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen. Das Promise-Objekt stellt jedoch Methoden zur Verfügung, um mit dem späteren Erfolg oder Misserfolg der Operation umzugehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der JavaScript-Grundlagen, einschließlich der Ereignisbehandlung.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Promises in JavaScript verwendet.</td>
    </tr>
  </tbody>
</table>

Im [vorherigen Artikel](/de/docs/Learn/JavaScript/Asynchronous/Introducing) haben wir über die Verwendung von Callbacks zur Implementierung asynchroner Funktionen gesprochen. Bei diesem Design ruft man die asynchrone Funktion auf und übergibt die Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihren Callback auf, wenn die Operation abgeschlossen ist.

Mit einer promise-basierten API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch() API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Code-Beispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, sonst wird die Konsole sich beschweren, dass Sie `fetchPromise` neu deklariert haben.

In diesem Beispiel werden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunterladen und einige Informationen darüber protokollieren.

Dazu werden wir eine **HTTP-Anfrage** an den Server senden. Bei einer HTTP-Anfrage senden wir eine Anfragenachricht an einen entfernten Server, und dieser sendet uns eine Antwort zurück. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API gemacht haben? Nun, in diesem Artikel werden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API verwenden, welche die moderne, promise-basierte Ersatzlösung für `XMLHttpRequest` ist.

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

1. Aufrufen der `fetch()` API und Zuweisen des Rückgabewerts zur Variablen `fetchPromise`
2. Sofortiges Protokollieren der `fetchPromise` Variablen. Dies sollte etwas ausgeben wie: `Promise { <state>: "pending" }`, was uns sagt, dass wir ein `Promise`-Objekt haben und es einen `state` mit dem Wert `"pending"` hat. Der `"pending"`-Zustand bedeutet, dass die Fetch-Operation noch andauert.
3. Übergeben einer Handler-Funktion an die **`then()`**-Methode des Promise. Wenn (und falls) die Fetch-Operation erfolgreich ist, ruft das Promise unseren Handler auf und übergibt ein [`Response`](/de/docs/Web/API/Response)-Objekt, das die Serverantwort enthält.
4. Protokollieren einer Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Anfrage gestartet…` protokolliert wird, bevor wir die Antwort erhalten. Anders als bei einer synchronen Funktion kehrt `fetch()` zurück, während die Anfrage noch im Gange ist, was unserem Programm erlaubt, reaktionsfähig zu bleiben. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies scheint wahrscheinlich dem Beispiel im letzten Artikel sehr ähnlich, in dem wir Event-Handler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler an die `then()`-Methode des zurückgegebenen Promise.

## Promises verketteln

Mit der `fetch()` API, sobald Sie ein `Response`-Objekt erhalten, müssen Sie eine weitere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall wollen wir die Antwortdaten als JSON erhalten, daher würden wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

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

In diesem Beispiel fügen wir, wie zuvor, einen `then()`-Handler zu dem von `fetch()` zurückgegebenen Promise hinzu. Aber diesmal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler an das Promise, das von `response.json()` zurückgegeben wird.

Dies sollte "baked beans" (den Namen des ersten Produkts, das in "products.json" aufgeführt ist) protokollieren.

Aber halt! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass, indem wir einen Callback in einen anderen Callback rufen, wir zunehmend mehr verschachtelte Ebenen von Code erhielten? Und wir sagten, dass dieser "Callback-Hell" unseren Code schwer verständlich macht? Ist dies nicht dasselbe, nur mit `then()`-Aufrufen?

Ja, natürlich. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der ihm übergebenen Funktion abgeschlossen wird_. Dies bedeutet, dass wir (und sollten) den obigen Code so umschreiben können:

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

Anstatt den zweiten `then()` im Handler für den ersten `then()` aufzurufen, können wir das Promise zurückgeben, das von `json()` zurückgegeben wird, und den zweiten `then()` auf diesem Rückgabewert aufrufen. Dies wird als **Promise-Verkettung** bezeichnet und bedeutet, dass wir das zunehmende Maß an Einrückungen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe durchführen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es ein weiteres Stück hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage angenommen hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Dies werden wir tun, indem wir den Statuscode in der Antwort überprüfen und einen Fehler werfen, wenn er nicht "OK" war:

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

## Fehler abfangen

Das bringt uns zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()` API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung bestand oder die URL auf irgendeine Weise falsch war), und wir lösen selbst einen Fehler aus, wenn der Server einen Fehler zurückgab.

Im letzten Artikel haben wir gesehen, dass Fehlerbehandlung sehr schwierig werden kann mit verschachtelten Callbacks, die uns zwingen, Fehler auf jeder Verschachtelungsebene zu behandeln.

Um Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Dies ist sehr ähnlich zu `then()`: Sie rufen es auf und übergeben eine Handler-Funktion. Allerdings wird der Handler, der an `then()` übergeben wird, aufgerufen, wenn die asynchrone Operation _erfolgreich_ ist, während der an `catch()` übergebene Handler aufgerufen wird, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` ans Ende einer Promise-Kette anhängen, wird es aufgerufen, wenn einer der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation mit mehreren aufeinanderfolgenden asynchronen Funktionsaufrufen implementieren und nur einen Ort haben, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehlerhandler mit `catch()` hinzugefügt und auch die URL geändert, damit die Anfrage fehlschlägt.

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

## Promise-Terminologie

Promises kommen mit einer recht spezifischen Terminologie, die es wert ist, klar unterschieden zu werden.

Zuerst kann ein Promise in einem von drei Zuständen sein:

- **pending (ausstehend)**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, war noch nicht erfolgreich oder ist fehlgeschlagen. Dies ist der Zustand Ihres Promises, wenn es aus einem Aufruf von `fetch()` zurückkehrt und die Anfrage noch gemacht wird.
- **fulfilled (erfüllt)**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()`-Handler aufgerufen.
- **rejected (abgelehnt)**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise abgelehnt wird, wird sein `catch()`-Handler aufgerufen.

Beachten Sie, dass die Bedeutung von "erfolgreich" oder "fehlgeschlagen" hier von der jeweiligen API abhängt. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler verhinderte, dass die Anfrage gesendet wurde, erfüllt aber das Promise, wenn der Server eine Antwort gesendet hat, selbst wenn die Antwort ein Fehler war, wie [404 Not Found](/de/docs/Web/HTTP/Status/404).

Manchmal verwendet man den Begriff **settled (erledigt)**, um sowohl **fulfilled** als auch **rejected** abzudecken.

Ein Promise ist **resolved (aufgelöst)**, wenn es erledigt ist oder "festgelegt" wurde, um dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombination mehrerer Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie benötigen, dass jede abgeschlossen ist, bevor die nächste beginnt. Aber es gibt andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise` API bietet einige Helfer dafür.

Manchmal möchten Sie, dass alle Promises erfüllt werden, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, sie alle zusammen zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die {{jsxref("Promise/all", "Promise.all()")}}-Methode ist das, was Sie hier benötigen. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und _wenn alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten aufgerufen, in derselben Reihenfolge, wie die Promises in `all()` übergeben wurden.
- abgelehnt, wenn und _wenn eines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der von dem Promise ausgelöst wurde, das abgelehnt wurde.

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

Hier machen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn alle erfolgreich sind, werden wir den Antwortstatus jeder anzeigen. Wenn eine von ihnen fehlschlägt, protokollieren wir das Scheitern.

Mit den angegebenen URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Not Found) anstelle von `200` (OK) zurückgeben wird, weil die angeforderte Datei nicht existiert. Die Ausgabe sollte also sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht geformten URL ausprobieren, wie:

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

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten etwas wie sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie vielleicht, dass eine von einer Reihe von Promises erfüllt wird und es Ihnen egal ist, welches. In diesem Fall benötigen Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt wird, sobald eines der Array von Promises erfüllt ist, oder abgelehnt, wenn alle von ihnen abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zum Kombinieren mehrerer Promises. Um mehr über die anderen zu erfahren, sehen Sie sich die {{jsxref("Promise")}}-Referenzdokumentation an.

## async und await

Das {{jsxref("Statements/async_function", "async")}}-Schlüsselwort bietet eine einfachere Möglichkeit, mit asynchronem Promise-basiertem Code zu arbeiten. Wenn Sie `async` zu Beginn einer Funktion hinzufügen, wird sie zu einer Async-Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer Async-Funktion können Sie das `await`-Schlüsselwort vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies lässt den Code an diesem Punkt warten, bis das Promise erledigt ist, woraufhin der erfüllte Wert des Promise als Rückgabewert behandelt wird, oder der abgelehnte Wert geworfen wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir unseren Fetch-Beispiel umschreiben:

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

Hier rufen wir `await fetch()` auf, und anstelle eines `Promise` erhält unser Aufrufer ein vollständig abgeschlossenes `Response`-Objekt zurück, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block für die Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass Async-Funktionen immer ein Promise zurückgeben, sodass Sie nicht etwas wie:

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

tun können. Stattdessen müsste man so etwas tun wie:

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

Hier haben wir den `try...catch` zurück zum `catch`-Handler des zurückgegebenen Promise verschoben. Dies bedeutet, dass unser `then`-Handler nicht den Fall behandeln muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion abgefangen wurde, was `data` auf `undefined` setzen würde. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async`-Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies nicht in einem normalen Skript tun können:

```js
try {
  // using await outside an async function is only allowed in a module
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
  throw error;
}
```

Sie werden wahrscheinlich `async`-Funktionen häufig dort verwenden, wo Sie ansonsten Promise-Ketten verwenden würden, und sie machen die Arbeit mit Promises viel intuitiver.

Denken Sie daran, dass genauso wie eine Promise-Kette `await` asynchrone Operationen zwingt, in Serie abgeschlossen zu werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn dies nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Fazit

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie erleichtern es, Sequenzen von asynchronen Operationen auszudrücken und zu verstehen, ohne tief verschachtelte Callbacks, und sie unterstützen einen Fehlerbehandlungsstil, der dem synchronen `try...catch`-Statement ähnlich ist.

Die `async` und `await` Schlüsselwörter erleichtern es, eine Operation aus einer Serie aufeinanderfolgender asynchroner Funktionsaufrufe aufzubauen, ohne die Notwendigkeit, explizite Promise-Ketten zu erstellen, und erlauben Ihnen, Code zu schreiben, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; das einzige Problem bei der Unterstützung von Promises besteht in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, sondern nur die interessantesten und nützlichsten. Während Sie mehr über Promises erfahren, werden Sie auf mehr Funktionen und Techniken stoßen.

Viele moderne Web-APIs sind promise-basiert, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
