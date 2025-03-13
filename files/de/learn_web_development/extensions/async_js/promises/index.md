---
title: Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: fc8d0192598d258b346887b3f52e29947d59c7e1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation darstellt. Zu dem Zeitpunkt, an dem das Promise an den Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den späteren Erfolg oder Misserfolg der Operation zu behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchrone Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
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

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) sprachen wir über die Verwendung von Callbacks zur Implementierung asynchroner Funktionen. Bei diesem Design rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihr Callback auf, wenn die Operation beendet ist.

Mit einer Promise-basierten API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}} Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, die ausgeführt werden, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch() API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Beispielcode von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browsing-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, sonst beschwert sich die Konsole, dass Sie `fetchPromise` erneut deklariert haben.

In diesem Beispiel werden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunterladen und einige Informationen darüber protokollieren.

Dazu werden wir eine **HTTP-Anfrage** an den Server stellen. In einer HTTP-Anfrage senden wir eine Anfragenachricht an einen entfernten Server, und er sendet uns eine Antwort zurück. In diesem Fall werden wir eine Anfrage senden, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API gemacht haben? In diesem Artikel werden wir die moderne, Promise-basierte [`fetch()`](/de/docs/Web/API/Window/fetch) API verwenden, die `XMLHttpRequest` ersetzt.

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

1. Rufen die `fetch()` API auf und weisen den Rückgabewert der Variablen `fetchPromise` zu.
2. Protokollieren unmittelbar danach die `fetchPromise` Variable. Dies sollte etwas wie folgendes ausgeben: `Promise { <state>: "pending" }`, was uns sagt, dass wir ein `Promise` Objekt haben, und es hat einen `state`, dessen Wert `"pending"` ist. Der `"pending"` Status bedeutet, dass die Fetch-Operation noch läuft.
3. Übergeben eine Handler-Funktion an die **`then()`** Methode des Promises. Wenn (und falls) die Fetch-Operation erfolgreich ist, wird das Promise unseren Handler aufrufen, wobei ein [`Response`](/de/docs/Web/API/Response) Objekt übergeben wird, das die Antwort des Servers enthält.
4. Protokollieren eine Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte in etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Im Gegensatz zu einer synchronen Funktion kehrt `fetch()` zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsfähig bleibt. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies scheint wahrscheinlich sehr dem Beispiel im letzten Artikel ähnlich zu sein, wo wir Ereignishandler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt hinzugefügt haben. Stattdessen übergeben wir jedoch einen Handler an die `then()` Methode des zurückgegebenen Promises.

## Verkettung von Promises

Mit der `fetch()` API, sobald Sie ein `Response` Objekt erhalten, müssen Sie eine andere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die [`json()`](/de/docs/Web/API/Response/json) Methode des `Response` Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

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

In diesem Beispiel fügen wir wie zuvor einen `then()` Handler zu dem von `fetch()` zurückgegebenen Promise hinzu. Aber dieses Mal ruft unser Handler `response.json()` auf, und übergibt dann einen neuen `then()` Handler an das von `response.json()` zurückgegebene Promise.

Dies sollte "baked beans" (der Name des ersten Produkts in "products.json") protokollieren.

Aber Moment! Erinnern Sie sich an den letzten Artikel, wo wir gesagt haben, dass durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks wir immer mehr geschachtelte Ebenen von Code erhielten? Und wir sagten, dass dieser "Callback-Hölle" unser Code schwer verständlich machte? Ist das nicht dasselbe, nur mit `then()` Aufrufen?

Natürlich ist es das. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der Funktion abgeschlossen wird, die an sie übergeben wurde_. Das bedeutet, dass wir das obige Codebeispiel umschreiben können (und sollten), wie folgt:

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

Statt den zweiten `then()` im Handler des ersten `then()` aufzurufen, können wir das Promise zurückgeben, das von `json()` zurückgegeben wird, und den zweiten `then()` auf diesem Rückgabewert aufrufen. Dies wird **Promise-Verkettung** genannt und bedeutet, dass wir immer komplexere Einrückungsebenen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe machen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein Stück hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage angenommen hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Dies tun wir, indem wir den Statuscode in der Antwort überprüfen und einen Fehler werfen, wenn er nicht "OK" war:

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

Das bringt uns zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()` API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung bestand oder die URL auf irgendeine Weise fehlerhaft war) und wir selbst werfen einen Fehler, wenn der Server einen Fehler zurückgegeben hat.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung sehr schwierig werden kann, wenn wir mit geschachtelten Callbacks arbeiten, da wir bei jedem Verschachtelungsgrad Fehler behandeln mussten.

Zur Unterstützung der Fehlerbehandlung bieten `Promise` Objekte eine {{jsxref("Promise/catch", "catch()")}} Methode. Diese ist ähnlich wie `then()`: Sie rufen sie auf und übergeben eine Handler-Funktion. Aber während der an `then()` übergebene Handler aufgerufen wird, wenn die asynchrone Operation _erfolgreich_ ist, wird der an `catch()` übergebene Handler aufgerufen, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` an das Ende einer Promise-Kette hinzufügen, wird sie aufgerufen, wenn mindestens einer der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und haben einen einzigen Ort, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()` Codes. Wir haben einen Fehler-Handler mit `catch()` hinzugefügt und auch die URL verändert, damit die Anfrage fehlschlägt.

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

Versuchen Sie, diese Version auszuführen: Sie sollten den Fehler sehen, der von unserem `catch()` Handler protokolliert wird.

## Promise-Terminologie

Promises kommen mit recht spezifischer Terminologie, die es wert ist, verstanden zu werden.

Zuerst kann ein Promise in einem von drei Zuständen sein:

- **pending**: das Promise wurde erstellt, und die asynchrone Funktion, mit der es verknüpft ist, war noch nicht erfolgreich oder ist gescheitert. Dies ist der Zustand Ihres Promises, wenn es von einem Aufruf an `fetch()` zurückgegeben wird und die Anfrage noch gestellt wird.
- **fulfilled**: die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()` Handler aufgerufen.
- **rejected**: die asynchrone Funktion ist gescheitert. Wenn ein Promise abgelehnt wird, wird sein `catch()` Handler aufgerufen.

Beachten Sie, dass was "erfolgreich" oder "gescheitert" hier bedeutet, von der betreffenden API abhängt. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler die Übermitt sichert verhindert hat, erfüllt das Promise jedoch, wenn der Server eine Antwort sendet, selbst wenn die Antwort ein Fehler wie [404 Nicht gefunden](/de/docs/Web/HTTP/Status/404) war.

Manchmal verwenden wir den Begriff **abgeschlossen** (eng. settled), um sowohl **erfüllt** als auch **abgelehnt** abzudecken.

Ein Promise ist **aufgelöst** (eng. resolved), wenn es abgeschlossen ist oder wenn es "eingeschlossen" wurde, um den Zustand eines anderen Promises zu übernehmen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren mehrerer Promises

Die Promisekette ist das, was Sie brauchen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abschließen müssen, bevor Sie die nächste starten. Aber es gibt auch andere Möglichkeiten, asynchrone Funktionsaufrufe zu kombinieren, und die `Promise` API bietet einige Helfer dafür.

Manchmal müssen Sie alle Promises erfüllt haben, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, alle gleichzeitig zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die {{jsxref("Promise/all", "Promise.all()")}} Methode ist hier das, was Sie brauchen. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und nur wenn _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()` Handler mit einem Array aller Antworten aufgerufen, in der gleichen Reihenfolge, in der die Promises in `all()` übergeben wurden.
- abgelehnt, wenn und nur wenn _irgendeines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()` Handler mit dem Fehler aufgerufen, der von dem Promise ausgegeben wird, das abgelehnt wurde.

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

Hier machen wir drei `fetch()` Anfragen an drei verschiedene URLs. Wenn sie alle erfolgreich sind, werden wir den Antwortstatus von jedem protokollieren. Wenn irgendeiner von ihnen fehlschlägt, protokollieren wir das Scheitern.

Mit den von uns bereitgestellten URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Nicht gefunden) anstelle von `200` (OK) zurück hat, da die angeforderte Datei nicht existiert. Die Ausgabe sollte also sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht geformten URL ausprobieren, wie hier:

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

Dann können wir erwarten, dass der `catch()` Handler ausgeführt wird, und wir sollten etwas wie folgendes sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal möchten Sie, dass irgendeines eines Satzes von Promises erfüllt wird, und es ist Ihnen egal, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt ist, sobald eines der Array von Promises erfüllt ist, oder abgelehnt, wenn sie alle abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise` Funktionen, um mehrere Promises zu kombinieren. Um mehr über die anderen zu erfahren, siehe die {{jsxref("Promise")}} Referenzdokumentation.

## async und await

Das Schlüsselwort {{jsxref("Statements/async_function", "async")}} bietet Ihnen eine einfachere Möglichkeit, mit asynchronem Promise-basiertem Code zu arbeiten. Wenn Sie `async` am Anfang einer Funktion hinzufügen, wird sie zu einer asynchronen Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

In einer asynchronen Funktion können Sie das `await` Schlüsselwort vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies bringt den Code an diesem Punkt zum Warten, bis das Promise abgeschlossen ist, in welchem Fall der erfüllte Wert des Promises als Rückgabewert behandelt wird, oder der abgelehnte Wert abgefangen wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir es verwenden, um unser Fetch-Beispiel umzuschreiben:

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

Hier rufen wir `await fetch()` auf, und anstatt ein `Promise` zu erhalten, bekommt der Aufrufer ein vollständig abgefülltes `Response` Objekt zurück, als wäre `fetch()` eine synchrone Funktion!

Wir können sogar einen `try...catch` Block für die Fehlerbehandlung verwenden, genau so, wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass asynchrone Funktionen immer ein Promise zurückgeben, sodass Sie so etwas nicht tun können:

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

Hier haben wir den `try...catch` zurück zum `catch` Handler des zurückgegebenen Promises verschoben. Das bedeutet, dass unser `then` Handler nicht mit dem Fall umgehen muss, in dem ein Fehler innerhalb der `fetchProducts` Funktion abgefangen wird und `data` undefiniert ist. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async` Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies in einem normalen Skript nicht tun können:

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

Wahrscheinlich werden Sie `async` Funktionen häufig dort verwenden, wo Sie sonst möglicherweise Promise-Ketten verwenden würden, und sie machen die Arbeit mit Promises viel intuitiver.

Denken Sie daran, dass genau wie eine Promise-Kette `await` asynchrone Operationen zwingt, in Serie abgeschlossen zu werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn das nicht der Fall ist, dann wird etwas wie `Promise.all()` leistungsfähiger sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie erleichtern es, Abfolgen von asynchronen Operationen ohne tief verschachtelte Callbacks auszudrücken und zu verstehen und unterstützen eine Art der Fehlerbehandlung, die ähnlich der synchronen `try...catch` Anweisung ist.

Die `async` und `await` Schlüsselwörter erleichtern es, eine Operation aus einer Reihe von aufeinanderfolgenden asynchronen Funktionsaufrufen zu erstellen, ohne dass explizite Promise-Ketten erstellt werden müssen, und ermöglichen Ihnen, Code zu schreiben, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; das einzige Problem bei der Unterstützung von Promises wird in Opera Mini und IE11 und früheren Versionen auftreten.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, nur die interessantesten und nützlichsten. Wenn Sie mehr über Promises lernen, werden Sie auf weitere Funktionen und Techniken stoßen.

Viele moderne Web-APIs sind Promise-basiert, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele andere.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
