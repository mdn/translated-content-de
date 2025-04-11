---
title: Anleitung zur Verwendung von Promises
short-title: Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein von einer asynchronen Funktion zurückgegebenes Objekt, das den aktuellen Stand der Operation darstellt. Zu dem Zeitpunkt, an dem der Promise dem Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den möglichen Erfolg oder Misserfolg der Operation zu behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchronen Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
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

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) haben wir über die Verwendung von Callbacks zur Implementierung asynchroner Funktionen gesprochen. Mit diesem Design rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihr Callback auf, wenn die Operation abgeschlossen ist.

Mit einer auf Promises basierenden API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch()-API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browsertab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, oder die Konsole wird sich beschweren, dass Sie `fetchPromise` erneut deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu senden wir eine **HTTP-Anfrage** an den Server. Bei einer HTTP-Anfrage senden wir eine Anfrage-Nachricht an einen entfernten Server und dieser sendet eine Antwort zurück. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API gestellt haben? Nun, in diesem Artikel werden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API verwenden, die moderne, auf Promises basierende Ersatz für `XMLHttpRequest`.

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

1. wir rufen die `fetch()`-API auf und weisen den Rückgabewert der Variablen `fetchPromise` zu
2. direkt danach protokollieren wir die Variable `fetchPromise`. Dies sollte etwas wie `Promise { <state>: "pending" }` ausgeben, was uns sagt, dass wir ein `Promise`-Objekt haben und es einen `state` hat, dessen Wert `"pending"` ist. Der `"pending"`-Zustand bedeutet, dass die Fetch-Operation noch im Gange ist.
3. wir geben eine Handlerfunktion in die **`then()`**-Methode des Promise ein. Wenn (und falls) die Fetch-Operation erfolgreich ist, wird das Promise unseren Handler aufrufen und ein [`Response`](/de/docs/Web/API/Response)-Objekt übergeben, das die Antwort des Servers enthält.
4. wir protokollieren eine Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte etwa Folgendes sein:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Im Gegensatz zu einer synchronen Funktion gibt `fetch()` bereits zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsschnell bleibt. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Reference/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies scheint wahrscheinlich sehr ähnlich zu dem Beispiel im letzten Artikel, in dem wir Ereignishandler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler in die `then()`-Methode des zurückgegebenen Promises.

## Verkettung von Promises

Mit der `fetch()`-API benötigen Sie, sobald Sie ein `Response`-Objekt haben, eine weitere Funktion, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` auch asynchron ist. Das ist also ein Fall, in dem wir zwei aufeinander folgende asynchrone Funktionen aufrufen müssen.

Probieren Sie dies aus:

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

In diesem Beispiel fügen wir wie zuvor einen `then()`-Handler zu dem Promise hinzu, das von `fetch()` zurückgegeben wird. Aber dieses Mal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler in das Promise, das von `response.json()` zurückgegeben wird.

Dies sollte "baked beans" (der Name des ersten Produkts, das in "products.json" aufgeführt ist) protokollieren.

Aber halt! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass wir durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks immer tiefer verschachtelte Codeebenen erhalten? Und wir sagten, dass dieser "Callback-Hell" unseren Code schwer verständlich machte? Ist das nicht genau das Gleiche, nur mit `then()`-Aufrufen?

Das ist es natürlich. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der Funktion abgeschlossen wird, die daran übergeben wurde_. Dies bedeutet, dass wir den obigen Code neu schreiben können (und sollten) wie folgt:

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

Statt den zweiten `then()`-Handler innerhalb des ersten `then()`-Handlers aufzurufen, können wir das Promise zurückgeben, das von `json()` zurückgegeben wird, und den zweiten `then()`-Handler auf diesem Rückgabewert aufrufen. Dies wird als **Promise-Verkettung** bezeichnet und bedeutet, dass wir zunehmend tiefere Verschachtelungsebenen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe benötigen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein weiteres Stück hinzuzufügen. Wir müssen sicherstellen, dass der Server die Anfrage akzeptiert und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Wir tun dies, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn er nicht "OK" war:

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

Dies bringt uns zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()`-API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung vorhanden war oder die URL auf irgendeine Weise fehlerhaft war), und wir lösen selbst einen Fehler aus, wenn der Server einen Fehler zurückgegeben hat.

Im letzten Artikel haben wir gesehen, dass Fehlerbehandlung mit verschachtelten Callbacks sehr schwierig werden kann, da Fehler auf jeder Verschachtelungsebene behandelt werden müssen.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Diese ist der `then()`-Methode sehr ähnlich: Sie rufen sie auf und geben eine Handlerfunktion an. Während der Handler, der an `then()` übergeben wird, aufgerufen wird, wenn die asynchrone Operation _erfolgreich war_, wird der Handler, der an `catch()` übergeben wird, aufgerufen, wenn die asynchrone Operation _fehlgeschlagen ist_.

Wenn Sie `catch()` am Ende einer Promise-Kette hinzufügen, wird es aufgerufen, wenn einer der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und einen einzigen Ort für die Fehlerbehandlung haben.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehlerhandler mit `catch()` hinzugefügt und auch die URL so geändert, dass die Anfrage fehlschlägt.

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

Versuchen Sie, diese Version auszuführen: Sie sollten den von unserem `catch()`-Handler protokollierten Fehler sehen.

## Promise-Terminologie

Promises haben eine recht spezifische Terminologie, die es wert ist, klar darüber zu werden.

Erstens kann ein Promise in einem von drei Zuständen sein:

- **pending**: Der Promise wurde erstellt, und die asynchrone Funktion, mit der er verknüpft ist, war noch nicht erfolgreich oder fehlgeschlagen. Dies ist der Zustand, in dem sich Ihr Promise befindet, wenn es von einem `fetch()`-Aufruf zurückgegeben wird und die Anfrage noch ausgeführt wird.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()`-Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise abgelehnt wurde, wird sein `catch()`-Handler aufgerufen.

Beachten Sie, dass das, was "erfolgreich" oder "fehlgeschlagen" bedeutet, der jeweiligen API überlassen wird. Zum Beispiel lehnt `fetch()` den zurückgegebenen Promise ab, wenn (unter anderem) ein Netzwerkfehler die Übermittlung der Anfrage verhinderte, erfüllt jedoch das Promise, wenn der Server eine Antwort gesendet hat, selbst wenn die Antwort ein Fehler wie [404 Nicht gefunden](/de/docs/Web/HTTP/Reference/Status/404) war.

Manchmal verwenden wir den Begriff **settled**, um sowohl **fulfilled** als auch **rejected** zu umfassen.

Ein Promise ist **resolved**, wenn es settled ist oder wenn es "gesperrt" wurde, um dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombination mehrerer Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abschließen müssen, bevor Sie die nächste starten. Es gibt jedoch auch andere Möglichkeiten, asynchrone Funktionsaufrufe zu kombinieren, und die `Promise`-API bietet einige Hilfsmittel dafür.

Manchmal benötigen Sie, dass alle Promises erfüllt werden, aber sie sind nicht voneinander abhängig. In einem solchen Fall ist es viel effizienter, alle gleichzeitig zu starten und dann benachrichtigt zu werden, wenn alle erfüllt sind. Die {{jsxref("Promise/all", "Promise.all()")}}-Methode ist, was Sie hier brauchen. Sie nimmt ein Array von Promises und gibt ein einziges Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und falls _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten aufgerufen, in der gleichen Reihenfolge, in der die Promises in `all()` übergeben wurden.
- abgelehnt, wenn und falls _eines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der von dem Promise ausgelöst wurde, das abgelehnt wurde.

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

Hier machen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn alle erfolgreich sind, werden wir den Antwortstatus jedes einzelnen protokollieren. Wenn eine von ihnen fehlschlägt, protokollieren wir den Fehler.

Mit den von uns bereitgestellten URLs sollten alle Anfragen erfüllt sein, obwohl der Server für die zweite eine `404` (Nicht gefunden) anstelle von `200` (OK) zurückgibt, weil die angeforderte Datei nicht existiert. Die Ausgabe sollte daher sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht geformten URL ausprobieren, wie dieser:

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

Dann können wir erwarten, dass der `catch()`-Handler läuft und wir sollten etwas wie:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie, dass einer von mehreren Promises erfüllt wird, und es ist egal, welcher. In diesem Fall wollen Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt ist, sobald eines der Array von Promises erfüllt ist, oder abgelehnt wird, wenn alle abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zur Kombination mehrerer Promises. Um mehr über die restlichen zu erfahren, siehe die {{jsxref("Promise")}}-Referenzdokumentation.

## async und await

Das {{jsxref("Statements/async_function", "async")}}-Schlüsselwort gibt Ihnen eine einfachere Möglichkeit, mit asynchronem, auf Promises basierendem Code zu arbeiten. Wenn Sie `async` zu Beginn einer Funktion hinzufügen, wird sie zu einer asynchronen Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer asynchronen Funktion können Sie das Schlüsselwort `await` vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dadurch wird der Code an diesem Punkt angehalten, bis das Promise settled ist, wobei der erfüllte Wert des Promises als Rückgabewert behandelt wird oder der abgelehnte Wert ausgelöst wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir es verwenden, um unser Fetch-Beispiel neu zu schreiben:

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

Hier rufen wir `await fetch()` auf, und anstelle eines `Promise` erhält unser Aufrufer ein vollständig vollständiges `Response`-Objekt, genau so, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block für die Fehlerbehandlung verwenden, genau so, wie wir es tun würden, wenn der Code synchron wäre.

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

Stattdessen müssen Sie so etwas tun:

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

Hier haben wir den `try...catch` zurück zum `catch`-Handler auf dem zurückgegebenen Promise verschoben. Das bedeutet, dass unser `then`-Handler nicht mit dem Fall umgehen muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion abgefangen wurde, wodurch `data` undefiniert ist. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async`-Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies in keinem normalen Skript tun können:

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

Sie werden wahrscheinlich viel `async`-Funktionen verwenden, wo Sie sonst Promise-Ketten verwenden könnten, und sie machen die Arbeit mit Promises viel intuitiver.

Denken Sie daran, dass `await` genauso wie eine Promise-Kette asynchrone Operationen zwingt, in Reihe abgeschlossen zu werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn dies nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie machen es einfacher, Sequenzen von asynchronen Operationen auszudrücken und zu durchdenken, ohne tief verschachtelte Callbacks, und sie unterstützen einen Fehlerbehandlungsstil, der der synchronen `try...catch`-Anweisung ähnlich ist.

Die `async`- und `await`-Schlüsselwörter erleichtern es, eine Operation aus einer Reihe aufeinanderfolgender asynchroner Funktionsaufrufe zu erstellen, und vermeiden die Notwendigkeit, explizite Promise-Ketten zu erstellen, sodass Sie Code schreiben können, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; der einzige Ort, an dem die Unterstützung von Promises ein Problem darstellen wird, ist in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, sondern nur die interessantesten und nützlichsten. Wenn Sie anfangen, mehr über Promises zu lernen, werden Ihnen mehr Funktionen und Techniken begegnen.

Viele moderne Web-APIs basieren auf Promises, darunter [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Wir haben ein Problem mit Promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
