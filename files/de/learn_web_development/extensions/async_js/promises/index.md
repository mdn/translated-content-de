---
title: Anleitung zur Verwendung von Promises
short-title: Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation repräsentiert. In dem Moment, in dem das Promise an den Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den endgültigen Erfolg oder das Scheitern der Operation zu handhaben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein fundiertes Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Grundlagen der Verwendung von Promises in JavaScript.</li>
          <li>Verkettung und Kombination von Promises.</li>
          <li>Fehlerbehandlung in Promises.</li>
          <li><code>async</code> und <code>await</code>: wie sie sich auf Promises beziehen und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) haben wir die Verwendung von Callbacks zur Implementierung asynchroner Funktionen besprochen. Bei diesem Design rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihren Callback auf, wenn die Operation abgeschlossen ist.

Mit einer API, die auf Promises basiert, startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler zu diesem Promise-Objekt hinzufügen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der Fetch-API

> [!NOTE]
> In diesem Artikel werden wir Promises erforschen, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, oder die Konsole wird sich beschweren, dass Sie `fetchPromise` neu deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu werden wir eine **HTTP-Anfrage** an den Server senden. In einer HTTP-Anfrage senden wir eine Anforderungsnachricht an einen Remote-Server, und dieser sendet uns eine Antwort zurück. In diesem Fall senden wir eine Anforderung, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API gemacht haben? Nun, in diesem Artikel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API, die moderne, auf Promises basierende Ersatz für `XMLHttpRequest`.

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

Hier tun wir Folgendes:

1. Wir rufen die `fetch()`-API auf und weisen den Rückgabewert der Variablen `fetchPromise` zu.
2. Unmittelbar danach protokollieren wir die Variable `fetchPromise`. Dies sollte etwas wie folgendes ausgeben: `Promise { <state>: "pending" }`, was uns mitteilt, dass wir ein `Promise`-Objekt haben, das einen `state` mit dem Wert `"pending"` hat. Der Zustand `"pending"` bedeutet, dass die Fetch-Operation noch im Gange ist.
3. Wir übergeben eine Handler-Funktion an die **`then()`**-Methode des Promises. Wenn (und falls) die Fetch-Operation erfolgreich ist, wird das Promise unseren Handler aufrufen und dabei ein [`Response`](/de/docs/Web/API/Response)-Objekt übergeben, das die Antwort des Servers enthält.
4. Wir protokollieren eine Nachricht, dass wir die Anforderung gestartet haben.

Die vollständige Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Anders als eine synchrone Funktion kehrt `fetch()` zurück, während die Anforderung noch im Gange ist, was es unserem Programm ermöglicht, reaktionsfähig zu bleiben. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Reference/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies erscheint wahrscheinlich sehr ähnlich zu dem Beispiel im letzten Artikel, in dem wir Ereignishandler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler an die `then()`-Methode des zurückgegebenen Promises.

## Verkettung von Promises

Mit der `fetch()`-API, sobald Sie ein `Response`-Objekt erhalten, müssen Sie eine andere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

Versuchen Sie Folgendes:

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

In diesem Beispiel fügen wir wie zuvor einen `then()`-Handler zu dem von `fetch()` zurückgegebenen Promise hinzu. Aber diesmal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler an das von `response.json()` zurückgegebene Promise.

Dies sollte "baked beans" (den Namen des ersten Produkts in "products.json") protokollieren.

Aber Moment! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass wir durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks immer mehr verschachtelte Codeebenen erhielten? Und wir sagten, dass dieses "Callback-Hell" unseren Code schwer verständlich macht? Ist das nicht dasselbe, nur mit `then()`-Aufrufen?

Es ist natürlich. Aber die elegante Eigenschaft von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der übergebenen Funktion abgeschlossen wird_. Dies bedeutet, dass wir (und sollten) den obigen Code wie folgt umschreiben können:

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

Anstatt den zweiten `then()` innerhalb des Handlers für den ersten `then()` aufzurufen, können wir das Promise, das von `json()` zurückgegeben wird, _zurückgeben_ und den zweiten `then()` bei diesem Rückgabewert aufrufen. Dies nennt man **Promise-Verkettung** und bedeutet, dass wir immer tiefer werdende Einrückungsniveaus vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe machen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein Stück hinzuzufügen. Wir müssen überprüfen, dass der Server die Anfrage angenommen hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Wir tun dies, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn er nicht "OK" war:

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

## Abfangen von Fehlern

Dies bringt uns zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()`-API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung bestand oder die URL auf irgendeine Weise fehlerhaft war), und wir selbst werfen einen Fehler, wenn der Server einen Fehler zurückgemeldet hat.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung mit verschachtelten Callbacks sehr schwierig werden kann, was uns dazu zwingt, Fehler auf jeder Verschachtelungsebene zu behandeln.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Dies ist sehr ähnlich wie `then()`: Sie rufen es auf und übergeben eine Handler-Funktion. Während der Handler, der an `then()` übergeben wird, jedoch aufgerufen wird, wenn die asynchrone Operation _erfolgreich_ ist, wird der an `catch()` übergebene Handler aufgerufen, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` am Ende einer Promise-Verkettung hinzufügen, wird es aufgerufen, wenn eine der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und einen einzigen Ort haben, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehler-Handler unter Verwendung von `catch()` hinzugefügt und auch die URL so geändert, dass die Anfrage fehlschlagen wird.

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

Promises kommen mit einer ziemlich spezifischen Terminologie, die es wert ist, klar verstanden zu werden.

Zuerst kann ein Promise in einem von drei Zuständen sein:

- **pending**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, hat noch keinen Erfolg oder Fehlschlag. Dies ist der Zustand, in dem sich Ihr Promise befindet, wenn es von einem `fetch()`-Aufruf zurückgegeben wird und die Anfrage noch durchgeführt wird.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()`-Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise abgelehnt wird, wird sein `catch()`-Handler aufgerufen.

Beachten Sie, dass es hier dem jeweiligen API überlassen ist, zu bestimmen, was "erfolgreich" oder "fehlgeschlagen" bedeutet. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler das Senden der Anfrage verhindert, erfüllt das Promise jedoch, wenn der Server eine Antwort gesendet hat, selbst wenn die Antwort ein Fehler wie [404 Not Found](/de/docs/Web/HTTP/Reference/Status/404) war.

Manchmal verwenden wir den Begriff **settled** für sowohl **fulfilled** als auch **rejected**.

Ein Promise ist **resolved**, wenn es abgeschlossen ist oder wenn es "gesperrt" wurde, um dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren mehrerer Promises

Die Promise-Verkettung ist das, was Sie brauchen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abschließen müssen, bevor Sie die nächste starten. Aber es gibt auch andere Wege, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise`-API bietet einige Helfer dafür.

Manchmal müssen alle Promises erfüllt sein, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, alle zusammen zu starten und dann benachrichtigt zu werden, wenn alle erfüllt sind. Die Methode {{jsxref("Promise/all", "Promise.all()")}} ist hier das, was Sie brauchen. Sie nimmt ein Array von Promises und gibt ein einziges Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und falls _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten aufgerufen, in der gleichen Reihenfolge, in der die Promises an `all()` übergeben wurden.
- abgelehnt, wenn und falls _irgendeines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem vom abgelehnten Promise geworfenen Fehler aufgerufen.

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

Hier machen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn alle erfolgreich sind, werden wir den Antwortstatus von jedem protokollieren. Wenn eine von ihnen fehlschlägt, dann protokollieren wir das Scheitern.

Mit den bereitgestellten URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Nicht gefunden) anstelle von `200` (OK) zurückgeben wird, da die angeforderte Datei nicht existiert. Die Ausgabe sollte also sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht geformten URL versuchen, wie diese:

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

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten etwas wie Folgendes sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie möglicherweise, dass irgendeines der Promises aus einer Menge erfüllt wird, und es ist Ihnen egal, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist ähnlich wie `Promise.all()`, außer dass es erfüllt wird, sobald eines der Promises im Array erfüllt ist oder abgelehnt wird, wenn alle abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zum Kombinieren mehrerer Promises. Um mehr über die anderen zu lernen, schauen Sie sich die {{jsxref("Promise")}}-Referenzdokumentation an.

## Async und Await

Das Schlüsselwort {{jsxref("Statements/async_function", "async")}} bietet Ihnen eine einfachere Möglichkeit, mit asynchronem, auf Promises basierendem Code zu arbeiten. Wenn Sie `async` am Anfang einer Funktion hinzufügen, wird diese zu einer async Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer async Funktion können Sie das Schlüsselwort `await` vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies sorgt dafür, dass der Code an dieser Stelle wartet, bis das Promise abgeschlossen ist, zu welchem Zeitpunkt der erfüllte Wert des Promises als Rückgabewert behandelt wird oder der abgelehnte Wert geworfen wird.

Dies ermöglicht Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir es verwenden, um unser Fetch-Beispiel umzuschreiben:

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

Hier rufen wir `await fetch()` auf, und statt ein `Promise` zu erhalten, bekommt unser Aufrufer ein vollständig abgeschlossenes `Response`-Objekt zurück, genau so, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block für die Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass async Funktionen immer ein Promise zurückgeben, sodass Sie so etwas nicht tun können:

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

Hier haben wir den `try...catch`-Block zurück zum `catch`-Handler am zurückgegebenen Promise verschoben. Dies bedeutet, dass unser `then`-Handler nicht mit dem Fall umgehen muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion abgefangen wurde, was dazu führen würde, dass `data` undefiniert ist. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async`-Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies in einem normalen Skript nicht tun können:

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

Sie werden wahrscheinlich async Funktionen dort häufig verwenden, wo Sie sonst Promise-Ketten verwenden würden, und sie machen den Umgang mit Promises viel intuitiver.

Denken Sie daran, dass `await` wie eine Promise-Kette zwingt, dass asynchrone Operationen in Serie abgeschlossen werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn das nicht der Fall ist, dann wird etwas wie `Promise.all()` leistungsfähiger sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie machen es einfacher, Sequenzen asynchroner Operationen ohne tief verschachtelte Callbacks auszudrücken und darüber zu argumentieren, und sie unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch`-Statement ähnelt.

Die Schlüsselwörter `async` und `await` machen es einfacher, aus einer Reihe aufeinanderfolgender asynchroner Funktionsaufrufe eine Operation zu erstellen, ohne explizite Promise-Ketten erstellen zu müssen, und erlauben Ihnen, Code zu schreiben, der genau wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; das einzige Problem mit der Unterstützung von Promises besteht in Opera Mini und IE11 und früheren Versionen.

In diesem Artikel haben wir nicht alle Funktionen von Promises behandelt, sondern nur die interessantesten und nützlichsten. Wenn Sie beginnen, mehr über Promises zu lernen, werden Sie auf mehr Funktionen und Techniken stoßen.

Viele moderne Web-APIs basieren auf Promises, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
