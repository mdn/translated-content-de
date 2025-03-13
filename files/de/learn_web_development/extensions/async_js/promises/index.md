---
title: Anleitung zur Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation darstellt. Wenn das Promise dem Anrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt stellt Methoden bereit, um den eventuellen Erfolg oder das Scheitern der Operation zu handhaben.

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

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) haben wir über die Verwendung von Callbacks gesprochen, um asynchrone Funktionen zu implementieren. Mit diesem Design rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion gibt sofort zurück und ruft Ihr Callback auf, wenn die Operation abgeschlossen ist.

Mit einer auf Promises basierenden API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch() API

> [!NOTE]
> In diesem Artikel werden wir Promises untersuchen, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. wenn wir ein Beispiel anzeigen, kopieren Sie es in die Konsole. Sie müssen bei jedem neuen Beispiel die Seite neu laden, sonst beschwert sich die Konsole, dass Sie `fetchPromise` erneut deklariert haben.

In diesem Beispiel werden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunterladen und einige Informationen darüber protokollieren.

Dazu werden wir eine **HTTP-Anfrage** an den Server stellen. In einer HTTP-Anfrage senden wir eine Anforderungsnachricht an einen Remote-Server, der uns eine Antwort zurücksendet. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API gemacht haben? Nun, in diesem Artikel werden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API verwenden, die moderne, Promise-basierte Ersatz für `XMLHttpRequest`.

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

1. wir rufen die `fetch()` API auf und weisen den Rückgabewert der Variablen `fetchPromise` zu
2. unmittelbar danach protokollieren wir die Variable `fetchPromise`. Dies sollte etwas wie: `Promise { <state>: "pending" }` ausgeben, das uns sagt, dass wir ein `Promise`-Objekt haben und es einen `state` hat, dessen Wert `"pending"` ist. Der `"pending"` state bedeutet, dass die Fetch-Operation noch läuft.
3. wir übergeben eine Handler-Funktion an die **`then()`** Methode des Promise. Wenn (und falls) die Fetch-Operation erfolgreich ist, wird das Promise unseren Handler aufrufen und dabei ein [`Response`](/de/docs/Web/API/Response) Objekt übergeben, welches die Antwort des Servers enthält.
4. wir protokollieren eine Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Anders als eine synchrone Funktion gibt `fetch()` zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsfähig bleibt. Die Antwort zeigt den `200` (OK) [Statuscode](/de/docs/Web/HTTP/Reference/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies erscheint wahrscheinlich ähnlich dem Beispiel im letzten Artikel, in dem wir Event-Handler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler an die `then()` Methode des zurückgegebenen Promise.

## Verkettung von Promises

Mit der `fetch()` API, sobald Sie ein `Response` Objekt erhalten, müssen Sie eine andere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die [`json()`](/de/docs/Web/API/Response/json) Methode des `Response` Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

Probieren Sie dies:

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

In diesem Beispiel fügen wir wie zuvor einen `then()` Handler zum Promise hinzu, das von `fetch()` zurückgegeben wird. Aber dieses Mal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()` Handler an das Promise, das von `response.json()` zurückgegeben wird.

Dies sollte "baked beans" (der Name des ersten in "products.json" aufgelisteten Produkts) protokollieren.

Aber halt! Erinnern Sie sich an den letzten Artikel, in dem wir gesagt haben, dass wir durch das Aufrufen eines Rückrufs in einem anderen Rückruf zunehmend verschachtelte Code-Ebenen erhalten haben? Und wir gesagt haben, dass diese "Callback-Hölle" unseren Code schwer verständlich macht? Ist das nicht dasselbe, nur mit `then()` Aufrufen?

Es ist natürlich so. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der übergebenen Funktion abgeschlossen wird_. Das bedeutet, dass wir den obigen Code umschreiben können (und sollten):

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

Anstatt das zweite `then()` innerhalb des Handlers für das erste `then()` aufzurufen, können wir das von `json()` zurückgegebene Promise _zurückgeben_ und das zweite `then()` darauf aufrufen. Dies wird als **Promise-Verkettung** bezeichnet und bedeutet, dass wir immer tiefere Einrückungsstufen vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe tätigen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein weiteres Stück hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage angenommen hat und in der Lage war, sie zu verarbeiten, bevor wir versuchen, sie zu lesen. Dies werden wir tun, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn er nicht "OK" war:

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

Dies führt uns zum letzten Stück: Wie gehen wir mit Fehlern um? Die `fetch()` API kann aus vielen Gründen einen Fehler auslösen (z. B. weil keine Netzwerkverbindung bestand oder die URL auf irgendeine Weise fehlerhaft war), und wir werfen selbst einen Fehler, wenn der Server ein Fehler zurückgegeben hat.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung mit verschachtelten Callbacks sehr schwierig werden kann, da wir auf jeder Verschachtelungsebene Fehler behandeln müssen.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise` Objekte eine {{jsxref("Promise/catch", "catch()")}} Methode an. Dies ist ähnlich wie `then()`: Sie rufen sie auf und übergeben eine Handler-Funktion. Während jedoch der Handler, der `then()` übergeben wird, aufgerufen wird, wenn die asynchrone Operation _erfolgreich_ ist, wird der Handler, der `catch()` übergeben wird, aufgerufen, wenn die asynchrone Operation _gescheitert_ ist.

Wenn Sie `catch()` am Ende einer Promise-Kette hinzufügen, wird es aufgerufen, wenn einer der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und an einer einzigen Stelle alle Fehler behandeln.

Probieren Sie diese Version unseres `fetch()` Codes. Wir haben einen Fehler-Handler mit `catch()` hinzugefügt und auch die URL geändert, damit die Anfrage fehlschlägt.

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

Versuchen Sie, diese Version auszuführen: Sie sollten den von unserem `catch()` Handler geloggten Fehler sehen.

## Promise-Terminologie

Promises kommen mit einer ziemlich spezifischen Terminologie, die es wert ist, geklärt zu werden.

Zuerst kann ein Promise einen von drei Zuständen haben:

- **pending**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, ist noch nicht erfolgreich oder gescheitert. Dies ist der Zustand, in dem Ihr Promise sich befindet, wenn es von einem Aufruf von `fetch()` zurückgegeben wird und die Anfrage noch läuft.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()` Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise abgelehnt ist, wird sein `catch()` Handler aufgerufen.

Beachten Sie, dass was "erfolgreich" oder "fehlgeschlagen" bedeutet, von der betreffenden API abhängt. Zum Beispiel lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler verhinderte, dass die Anfrage gesendet wurde, aber erfüllt das Promise, wenn der Server eine Antwort gesendet hat, auch wenn die Antwort ein Fehler wie [404 Nicht gefunden](/de/docs/Web/HTTP/Reference/Status/404) war.

Manchmal verwenden wir den Begriff **settled** um sowohl **fulfilled** als auch **rejected** zu umfassen.

Ein Promise ist **resolved**, wenn es settled ist oder wenn es "eingeschlossen" wurde, dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren mehrerer Promises

Die Promise-Kette ist, was Sie brauchen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abschließen müssen, bevor Sie die nächste starten. Aber es gibt andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren können, und die `Promise` API bietet einige Hilfsmittel dafür.

Manchmal müssen alle Promises erfüllt sein, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, sie alle zusammen zu starten, und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die Methode {{jsxref("Promise/all", "Promise.all()")}} ist hier das Richtige. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()` Handler mit einem Array aller Antworten aufgerufen, in der gleichen Reihenfolge wie die Promises in `all()` übergeben wurden.
- abgelehnt, wenn und _irgendeines_ der Promises im Array abgelehnt ist. In diesem Fall wird der `catch()` Handler mit dem Fehler aufgerufen, der von dem Promise ausgelöst wurde, das abgelehnt wurde.

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

Hier machen wir drei `fetch()` Anfragen zu drei verschiedenen URLs. Wenn sie alle erfolgreich sind, werden wir den Antwortstatus von jeder protokollieren. Wenn eine von ihnen fehlschlägt, dann protokollieren wir das Scheitern.

Mit den von uns bereitgestellten URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Nicht gefunden) anstelle von `200` (OK) zurückgeben wird, da die angeforderte Datei nicht existiert. Also sollte die Ausgabe so aussehen:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer fehlerhaft geformten URL ausprobieren, wie dies:

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

Dann können wir erwarten, dass der `catch()` Handler ausgeführt wird, und wir sollten etwas sehen wie:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie möglicherweise irgendeines von einem Set von Promises, das erfüllt wird, und es ist Ihnen egal, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt ist, sobald eines der Arrays von Promises erfüllt ist, oder abgelehnt, wenn alle abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise` Funktionen zum Kombinieren mehrerer Promises. Um mehr über die anderen zu erfahren, siehe die {{jsxref("Promise")}} Referenzdokumentation.

## async und await

Das Schlüsselwort {{jsxref("Statements/async_function", "async")}} bietet Ihnen eine einfachere Möglichkeit, mit asynchronem Promise-basiertem Code zu arbeiten. Indem Sie `async` am Anfang einer Funktion hinzufügen, machen Sie sie zu einer asynchronen Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer asynchronen Funktion können Sie das Schlüsselwort `await` vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dadurch wartet der Code an diesem Punkt, bis das Promise abgeschlossen ist, wobei der erfüllte Wert des Promises als Rückgabewert behandelt wird, oder der abgelehnte Wert ausgelöst wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet aber wie synchroner Code aussieht. Zum Beispiel könnten wir es verwenden, um unser Fetch-Beispiel neu zu schreiben:

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

Hier rufen wir `await fetch()` auf, und anstatt ein `Promise` zu erhalten, erhält unser Anrufer ein vollständig abgeschlossenes `Response` Objekt zurück, so als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch` Block zur Fehlerbehandlung verwenden, genau wie wir es bei synchronem Code tun würden.

Beachten Sie jedoch, dass asynchrone Funktionen immer ein Promise zurückgeben, sodass Sie nicht etwas wie das tun können:

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

Stattdessen müssen Sie etwas tun wie:

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

Hier haben wir den `try...catch` wieder zum `catch` Handler am zurückgegebenen Promise verschoben. Dies bedeutet, dass unser `then` Handler nicht den Fall behandeln muss, in dem ein Fehler innerhalb der `fetchProducts` Funktion abgefangen wurde, was dazu führt, dass `data` undefiniert ist. Behandeln Sie Fehler als den letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer `async` Funktion verwenden können, es sei denn Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie das in einem normalen Skript nicht tun können:

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

Sie werden `async` Funktionen wahrscheinlich häufig verwenden, dort wo Sie ansonsten Promise-Ketten nutzen würden, und sie machen das Arbeiten mit Promises wesentlich intuitiver.

Behalten Sie im Kopf, dass `await` wie eine Promise-Kette, asynchrone Operationen zwingt, nacheinander abgeschlossen zu werden. Dies ist notwendig, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn dies nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie machen es einfacher, Sequenzen von asynchronen Operationen ohne tief verschachtelte Rückrufe auszudrücken und zu verstehen, und sie unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch` Statement ähnelt.

Die `async` und `await` Keywords erleichtern es, eine Operation aus einer Reihe konsekutiver asynchroner Funktionsaufrufe zu erstellen, wodurch die Notwendigkeit expliziter Promise-Ketten verringert wird, und es Ihnen ermöglicht, Code zu schreiben, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; der einzige Ort, an dem Promise-Unterstützung ein Problem darstellen wird, ist in Opera Mini und IE11 und früheren Versionen.

Wir haben nicht alle Funktionen von Promises in diesem Artikel behandelt, nur die interessantesten und nützlichsten. Wenn Sie anfangen, mehr über Promises zu lernen, werden Sie auf weitere Funktionen und Techniken stoßen.

Viele moderne Web-APIs sind Promise-basiert, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
