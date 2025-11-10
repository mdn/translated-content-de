---
title: Anleitung zur Verwendung von Promises
short-title: Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: 7dea5a04405d1bfce4f471d9284f7f7148bc9a4d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation darstellt. Wenn das Promise dem Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den eventuellen Erfolg oder Misserfolg der Operation zu behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Grundlagen der Verwendung von Promises in JavaScript.</li>
          <li>Verkettung und Kombination von Promises.</li>
          <li>Fehlerbehandlung in Promises.</li>
          <li><code>async</code> und <code>await</code>: deren Beziehung zu Promises und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) haben wir über die Verwendung von Callbacks zur Implementierung asynchroner Funktionen gesprochen. Bei diesem Entwurf rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihren Callback auf, wenn die Operation abgeschlossen ist.

Bei einer auf Promises basierenden API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch() API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, sonst beschwert sich die Konsole, dass Sie `fetchPromise` neu deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu machen wir eine **HTTP-Anfrage** an den Server. Bei einer HTTP-Anfrage senden wir eine Anfragenachricht an einen entfernten Server und dieser sendet uns eine Antwort zurück. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API gemacht haben? Nun, in diesem Artikel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API, die die moderne, auf Promises basierende Ersatzlösung für `XMLHttpRequest` ist.

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

1. Rufen die `fetch()` API auf und weisen den Rückgabewert der Variable `fetchPromise` zu
2. Protokollieren unmittelbar danach die Variable `fetchPromise`. Dies sollte etwas wie `Promise { <state>: "pending" }` ausgeben, was uns sagt, dass wir ein `Promise`-Objekt haben, und es hat einen `state`, dessen Wert `"pending"` ist. Der `"pending"`-Zustand bedeutet, dass die Fetch-Operation noch andauert.
3. Übergeben einer Handler-Funktion an die **`then()`**-Methode des Promises. Wenn (und falls) die Fetch-Operation erfolgreich ist, ruft das Promise unseren Handler auf und übergibt ein [`Response`](/de/docs/Web/API/Response)-Objekt, das die Antwort des Servers enthält.
4. Protokollieren einer Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Im Gegensatz zu einer synchronen Funktion gibt `fetch()` zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsfähig bleibt. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Reference/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies erscheint wahrscheinlich sehr ähnlich wie das Beispiel im letzten Artikel, in dem wir Ereignis-Handler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir jedoch einen Handler an die `then()`-Methode des zurückgegebenen Promises.

## Verkettung von Promises

Bei der `fetch()` API, sobald Sie ein `Response`-Objekt erhalten, müssen Sie eine weitere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die Methode [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, bei dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

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

In diesem Beispiel fügen wir wie zuvor einen `then()`-Handler zum von `fetch()` zurückgegebenen Promise hinzu. Aber diesmal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler an das von `response.json()` zurückgegebene Promise.

Dies sollte "baked beans" (den Namen des ersten Produkts, das in "products.json" aufgeführt ist) protokollieren.

Aber halt! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass wir durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks zunehmend mehr verschachtelte Codeebenen erhalten? Und wir sagten, dass dieses "Callback-Hell" es schwierig machte, unseren Code zu verstehen? Ist das nicht dasselbe, nur mit `then()`-Aufrufen?

Es ist natürlich. Aber die elegante Eigenschaft von Promises ist, dass `then()` selbst ein neues Promise zurückgibt, das mit dem Rückgabewert der Callback-Funktion erfüllt wird (vorausgesetzt, die Funktion läuft erfolgreich). Das bedeutet, dass wir den obigen Code folgendermaßen umschreiben können (und sollten):

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

Anstatt den zweiten `then()` im Handler für das erste `then()` aufzurufen, können wir _das von `json()` zurückgegebene Promise zurückgeben_ und den zweiten `then()`-Aufruf auf diesem Rückgabewert ausführen. Dies wird als **Promise-Verkettung** bezeichnet und bedeutet, dass wir immer tiefer werdende Einrückungsebenen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe durchführen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein weiteres Stück hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage akzeptiert hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Wir tun dies, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn er nicht "OK" war:

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

Das bringt uns zum letzten Punkt: Wie behandeln wir Fehler? Die `fetch()` API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung bestand oder die URL in irgendeiner Weise fehlerhaft war) und wir werfen selbst einen Fehler, wenn der Server einen Fehler zurückgegeben hat.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung mit verschachtelten Callbacks sehr schwierig werden kann, da wir Fehler auf jeder Verschachtelungsebene behandeln müssen.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Diese ist sehr ähnlich zu `then()`: Sie rufen sie auf und übergeben eine Handler-Funktion. Der Handler, der an `then()` übergeben wird, wird jedoch aufgerufen, wenn die asynchrone Operation _erfolgreich_ ist, während der Handler, der an `catch()` übergeben wird, aufgerufen wird, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` am Ende einer Promise-Kette hinzufügen, wird es aufgerufen, wenn ein beliebiger asynchroner Funktionsaufruf fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und einen einzigen Ort haben, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehler-Handler mit `catch()` hinzugefügt und auch die URL so geändert, dass die Anfrage fehlschlägt.

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

Promises kommen mit einer recht spezifischen Terminologie, die es wert ist, klar darüber zu sein.

Zuerst kann ein Promise in einem von drei Zuständen sein:

- **pending**: Der Anfangszustand. Die Operation ist noch nicht abgeschlossen (erfolgreich oder fehlgeschlagen).
- **fulfilled**: Die Operation war erfolgreich. Dies ist, wenn der `.then()`-Handler des Promises aufgerufen wird.
- **rejected**: Die Operation ist fehlgeschlagen. Dies ist, wenn der `.catch()`-Handler des Promises aufgerufen wird.

Beachten Sie, dass das, was hier "erfolgreich" oder "fehlschlägt" bedeutet, der jeweiligen API überlassen ist. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler das Senden der Anfrage verhinderte, erfüllt aber das Promise, wenn der Server eine Antwort sendete, selbst wenn die Antwort ein Fehler wie [404 Nicht gefunden](/de/docs/Web/HTTP/Reference/Status/404) war.

Wir verwenden auch einige andere Begriffe, um den Zustand eines Promises zu beschreiben:

- **completed**: Das Promise ist nicht mehr ausstehend; es wurde entweder erfüllt oder abgelehnt.
- **resolved**: Das Promise ist abgeschlossen oder es wurde "eingefroren", um dem Zustand eines anderen Promises zu folgen. Dies ist ein fortgeschrittenes Konzept, das relevant ist, wenn ein Promise von einem anderen abhängt.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren Sie mehrere Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie benötigen, dass jede einzelne abgeschlossen ist, bevor Sie die nächste starten. Aber es gibt andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise`-API bietet einige Helfer dafür.

Manchmal benötigen Sie, dass alle Promises erfüllt werden, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, sie alle gleichzeitig zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die Methode {{jsxref("Promise/all", "Promise.all()")}} ist das, was Sie hier brauchen. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten in derselben Reihenfolge aufgerufen, in der die Promises in `all()` übergeben wurden.
- abgelehnt, wenn _ein beliebiges_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der von dem abgelehnten Promise ausgelöst wurde.

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

Hierbei stellen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn alle erfolgreich sind, protokollieren wir den Antwortstatus jeder Anfrage. Wenn eine von ihnen fehlschlägt, protokollieren wir den Fehler.

Mit den angegebenen URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Nicht gefunden) anstelle von `200` (OK) zurückgibt, da die angeforderte Datei nicht existiert. Die Ausgabe sollte also sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht geformten URL versuchen, wie in diesem Beispiel:

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

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten etwas wie dies sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie, dass irgendeines der Promises erfüllt wird und es Ihnen egal ist, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt ist, sobald eines der Promises im Array erfüllt ist, oder abgelehnt, wenn alle abgelehnt sind:

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

Beachten Sie, dass wir in diesem Fall nicht vorhersagen können, welche `fetch()`-Anfrage zuerst abgeschlossen wird.

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zum Kombinieren mehrerer Promises. Um mehr über den Rest zu erfahren, siehe die {{jsxref("Promise")}} Referenzdokumentation.

## async und await

Das {{jsxref("Statements/async_function", "async")}}-Schlüsselwort bietet Ihnen eine einfachere Möglichkeit, mit asynchronem, auf Promises basierendem Code zu arbeiten. Das Hinzufügen von `async` zu Beginn einer Funktion macht sie zu einer async-Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer async-Funktion können Sie das `await`-Schlüsselwort vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies bewirkt, dass der Code an dieser Stelle wartet, bis das Promise erledigt ist, zu welchem Zeitpunkt der erfüllte Wert des Promises als Rückgabewert behandelt wird oder der abgelehnte Wert ausgelöst wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir es verwenden, um unser `fetch()`-Beispiel umzuschreiben:

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

Hier rufen wir `await fetch()` auf, und anstatt ein `Promise` zu erhalten, erhält der Aufrufer ein vollständig vollständiges `Response`-Objekt zurück, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block zur Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass async-Funktionen immer ein Promise zurückgeben, sodass Sie nichts dergleichen tun können:

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

Stattdessen müssten Sie etwas wie dies tun:

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

Hier haben wir das `try...catch` zurück zum `catch`-Handler am zurückgegebenen Promise verschoben. Dies bedeutet, dass unser `then`-Handler nicht den Fall behandeln muss, in dem ein Fehler in der `fetchProducts`-Funktion abgefangen wurde, was dazu führte, dass `data` `undefined` war. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

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

Sie werden wahrscheinlich oft `async`-Funktionen verwenden, wo Sie ansonsten Promise-Ketten verwenden könnten, und sie machen die Arbeit mit Promises viel intuitiver.

Denken Sie daran, dass `await` wie eine Promise-Kette asynchrone Operationen zur Fertigstellung in Serie zwingt. Dies ist erforderlich, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn das nicht der Fall ist, wird `Promise.all()` performanter sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie machen es einfacher, Sequenzen asynchroner Operationen ohne tief verschachtelte Callbacks auszudrücken und zu verstehen, und sie unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch`-Statement ähnelt.

Die Schlüsselwörter `async` und `await` erleichtern den Aufbau einer Operation aus einer Reihe von aufeinanderfolgenden asynchronen Funktionsaufrufen, ohne die Notwendigkeit, explizite Promise-Ketten zu erstellen, und ermöglichen es Ihnen, Code zu schreiben, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; der einzige Ort, an dem die Unterstützung von Promises ein Problem sein wird, ist in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, nur die interessantesten und nützlichsten. Wenn Sie anfangen, mehr über Promises zu lernen, werden Ihnen mehr Funktionen und Techniken begegnen.

Viele moderne Web-APIs basieren auf Promises, darunter [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API), und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Wir haben ein Problem mit Promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
