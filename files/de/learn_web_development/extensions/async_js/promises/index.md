---
title: Anleitung zur Verwendung von Promises
slug: Learn_web_development/Extensions/Async_JS/Promises
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}

**Promises** sind die Grundlage der asynchronen Programmierung im modernen JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Zustand der Operation darstellt. In dem Moment, in dem das Promise dem Aufrufer zurückgegeben wird, ist die Operation oft noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um mit dem letztendlichen Erfolg oder Misserfolg der Operation umzugehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Fundierte Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
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

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) haben wir darüber gesprochen, wie man Callbacks verwendet, um asynchrone Funktionen zu implementieren. Bei diesem Design rufen Sie die asynchrone Funktion auf und übergeben Ihre Callback-Funktion. Die Funktion kehrt sofort zurück und ruft Ihren Callback auf, wenn die Operation abgeschlossen ist.

Mit einer auf Promises basierenden API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann diesem Promise-Objekt Handler hinzufügen, die ausgeführt werden, wenn die Operation erfolgreich war oder fehlgeschlagen ist.

## Verwendung der fetch() API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Codebeispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browsertab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn ein Beispiel gezeigt wird, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, oder die Konsole wird sich beschweren, dass Sie `fetchPromise` erneut deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu werden wir eine **HTTP-Anfrage** an den Server stellen. Bei einer HTTP-Anfrage senden wir eine Anfragenachricht an einen entfernten Server, und dieser sendet uns eine Antwort zurück. In diesem Fall werden wir eine Anfrage stellen, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API gestellt haben? Nun, in diesem Artikel werden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API verwenden, die die moderne, auf Promises basierende Ersatzlösung für `XMLHttpRequest` darstellt.

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

Hier machen wir:

1. einen Aufruf der `fetch()`-API und weisen den Rückgabewert der Variablen `fetchPromise` zu
2. direkt danach protokollieren wir die Variable `fetchPromise`. Dies sollte etwas wie: `Promise { <state>: "pending" }` ausgeben, was uns sagt, dass wir ein `Promise`-Objekt haben und es einen `state` hat, dessen Wert `"pending"` ist. Der `"pending"`-Zustand bedeutet, dass die Fetch-Operation noch läuft.
3. Wir übergeben eine Handler-Funktion in die **`then()`**-Methode des Promises. Wenn (und falls) die Fetch-Operation erfolgreich ist, wird das Promise unseren Handler aufrufen und ein [`Response`](/de/docs/Web/API/Response)-Objekt übergeben, das die Antwort des Servers enthält.
4. Wir protokollieren eine Nachricht, dass wir die Anfrage gestartet haben.

Die gesamte Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Anders als eine synchrone Funktion kehrt `fetch()` zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsfähig bleibt. Die Antwort zeigt den `200`- (OK) [Status-Code](/de/docs/Web/HTTP/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies scheint wahrscheinlich sehr ähnlich wie das Beispiel im letzten Artikel, in dem wir Ereignishandler zum [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler in die `then()`-Methode des zurückgegebenen Promises.

## Verkettung von Promises

Mit der `fetch()`-API, sobald Sie ein `Response`-Objekt erhalten, müssen Sie eine weitere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, daher würden wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` auch asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

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

In diesem Beispiel fügen wir wie zuvor einen `then()`-Handler zum Promise hinzu, das von `fetch()` zurückgegeben wird. Aber diesmal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler zum Promise zurück, das von `response.json()` zurückgegeben wird.

Dies sollte "baked beans" (den Namen des ersten Produkts, das in "products.json" aufgeführt ist) protokollieren.

Aber Moment! Erinnern Sie sich an den letzten Artikel, in dem wir gesagt haben, dass das Aufrufen eines Callbacks innerhalb eines anderen Callbacks dazu führte, dass unsere Codeebenen schrittweise verschachtelt wurden? Und wir haben gesagt, dass diese "Callback-Hölle" unseren Code schwer verständlich machte? Ist das nicht dasselbe, nur mit `then()`-Aufrufen?

Natürlich ist es das. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der Funktion vervollständigt wird, die ihm übergeben wurde_. Das bedeutet, dass wir (und sollten) den obigen Code so umschreiben können:

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

Anstatt den zweiten `then()` innerhalb des Handlers für den ersten `then()` aufzurufen, können wir das Promise zurückgeben, das von `json()` zurückgegeben wird, und den zweiten `then()` auf diesem Rückgabewert aufrufen. Dies nennt man **Promise-Verkettung** und bedeutet, dass wir eine immer tiefer werdende Verschachtelungsebene vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe machen müssen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein weiteres Stück, das hinzugefügt werden muss. Wir müssen überprüfen, ob der Server die Anfrage akzeptiert hat und in der Lage war, sie zu bearbeiten, bevor wir versuchen, sie zu lesen. Dies werden wir tun, indem wir den Statuscode in der Antwort überprüfen und einen Fehler auslösen, wenn es nicht "OK" war:

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

Damit kommen wir zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()`-API kann aus vielen Gründen einen Fehler auslösen (zum Beispiel, weil keine Netzwerkverbindung bestand oder die URL auf irgendeine Weise fehlerhaft war), und wir selbst werfen einen Fehler, wenn der Server einen Fehler zurückgab.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung bei verschachtelten Callbacks sehr schwierig werden kann, da wir Fehler auf jeder Verschachtelungsebene behandeln mussten.

Um die Fehlerbehandlung zu unterstützen, bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Diese ähnelt `then()`: Sie rufen sie auf und übergeben eine Handler-Funktion. Der Unterschied besteht jedoch darin, dass der Handler, der `then()` übergeben wird, aufgerufen wird, wenn die asynchrone Operation _erfolgreich_ ist, während der Handler, der `catch()` übergeben wird, aufgerufen wird, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` am Ende einer Promise-Kette hinzufügen, wird es aufgerufen, wenn eine der asynchronen Funktionsaufrufe fehlschlägt. So können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und haben einen einzigen Ort, um alle Fehler zu behandeln.

Versuchen Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehler-Handler mit `catch()` hinzugefügt und die URL auch modifiziert, damit die Anfrage fehlschlägt.

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

Versuchen Sie, diese Version auszuführen: Sie sollten den Fehler sehen, den unser `catch()`-Handler protokolliert.

## Promise-Terminologie

Promises kommen mit einigen recht spezifischen Begriffen, die es wert sind, geklärt zu werden.

Erstens, ein Promise kann in einem von drei Zuständen sein:

- **pending**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, ist noch nicht erfolgreich oder fehlgeschlagen. Dies ist der Zustand, in dem sich Ihr Promise befindet, wenn es von einem Aufruf von `fetch()` zurückgegeben wird und die Anfrage noch gestellt wird.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt ist, wird sein `then()`-Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise zurückgewiesen wird, wird sein `catch()`-Handler aufgerufen.

Beachten Sie, dass das, was hier als "erfolgreich" oder "fehlgeschlagen" angesehen wird, von der jeweiligen API abhängt. Beispielsweise lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler die Übermittlung der Anfrage verhinderte, aber erfüllt das Promise, wenn der Server eine Antwort sendet, selbst wenn die Antwort ein Fehler wie [404 Not Found](/de/docs/Web/HTTP/Status/404) war.

Manchmal verwenden wir den Begriff **settled**, um sowohl **fulfilled** als auch **rejected** abzudecken.

Ein Promise ist **resolved**, wenn es erfüllt ist oder wenn es "fixiert" wurde, um dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) bietet eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren mehrerer Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abschließen müssen, bevor Sie die nächste starten. Aber es gibt andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise`-API bietet einige Helfer dafür.

Manchmal müssen alle Promises erfüllt sein, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, alle gemeinsam zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die {{jsxref("Promise/all", "Promise.all()")}}-Methode ist, was Sie hier benötigen. Sie nimmt ein Array von Promises und gibt ein einzelnes Promise zurück.

Das Promise, das von `Promise.all()` zurückgegeben wird, ist:

- erfüllt, wenn und wenn _alle_ die Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten in der gleichen Reihenfolge aufgerufen, in der die Promises `all()` übergeben wurden.
- abgelehnt, wenn und wenn _irgendein_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der durch das Promise geworfen wurde, das abgelehnt wurde.

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

Hier machen wir drei `fetch()`-Anfragen an drei verschiedene URLs. Wenn sie alle erfolgreich sind, protokollieren wir den Antwortstatus jeder einzelnen. Wenn eine von ihnen scheitert, protokollieren wir den Fehler.

Mit den bereitgestellten URLs sollten alle Anfragen erfüllt sein, obwohl der Server für die zweite `404` (Not Found) anstelle von `200` (OK) zurückgibt, weil die angeforderte Datei nicht existiert. Das Ergebnis sollte sein:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir den gleichen Code mit einer schlecht formatierten URL versuchen, wie hier:

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

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten etwas wie:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie möglicherweise eines der Promises aus einem Satz als erfüllt und es ist Ihnen egal, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist wie `Promise.all()`, außer dass es erfüllt wird, sobald eines der Promises in der Reihe erfüllt ist, oder abgewiesen, wenn alle abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zum Kombinieren mehrerer Promises. Um mehr über den Rest zu erfahren, siehe die {{jsxref("Promise")}} Referenzdokumentation.

## async und await

Das {{jsxref("Statements/async_function", "async")}}-Schlüsselwort bietet Ihnen eine einfachere Möglichkeit, mit asynchronem, auf Promises basierendem Code zu arbeiten. Wenn Sie `async` am Anfang einer Funktion hinzufügen, wird sie zu einer asynchronen Funktion:

```js
async function myFunction() {
  // This is an async function
}
```

Innerhalb einer asynchronen Funktion können Sie das `await`-Schlüsselwort vor einem Ruf an eine Funktion verwenden, die ein Promise zurückgibt. Dies bewirkt, dass der Code an dieser Stelle wartet, bis das Promise erfüllt ist, zu welchem Zeitpunkt der erfüllte Wert des Promises als Rückgabewert behandelt wird, oder der abgelehnte Wert geworfen wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen nutzt, aber wie synchroner Code aussieht. Zum Beispiel könnten wir damit unser Fetch-Beispiel umschreiben:

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

Hier rufen wir `await fetch()` auf, und anstelle eines `Promise` erhält unser Aufrufer ein vollständig vollständiges `Response`-Objekt zurück, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block für die Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass asynchrone Funktionen immer ein Promise zurückgeben, daher können Sie nichts wie das tun:

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

Stattdessen müssten Sie etwas wie:

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

Hier haben wir den `try...catch` zurück zum `catch`-Handler auf das zurückgegebene Promise verschoben. Das bedeutet, dass unser `then`-Handler nicht mit dem Fall umgehen muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion ausgefangen wurde, wodurch `data` `undefined` ist. Planen Sie Fehlerbehandlungen als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer asynchronen Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies nicht in einem normalen Skript tun können:

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

Sie werden wahrscheinlich oft asynchrone Funktionen verwenden, wo Sie sonst Promise-Ketten verwenden könnten, und sie machen die Arbeit mit Promises viel intuitiver.

Denken Sie daran, dass `await` wie eine Promise-Kette erfordert, dass asynchrone Operationen in Serie ausgeführt werden. Dies ist erforderlich, wenn das Ergebnis der nächsten Operation vom Ergebnis der letzten abhängt, aber wenn das nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Zusammenfassung

Promises sind die Grundlage der asynchronen Programmierung im modernen JavaScript. Sie erleichtern das Ausdruck und das Nachdenken über Sequenzen von asynchronen Operationen ohne tief verschachtelte Callbacks und unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch`-Statement ähnelt.

Die `async`- und `await`-Schlüsselwörter erleichtern den Aufbau einer Operation aus einer Reihe aufeinanderfolgender asynchroner Funktionsaufrufe, ohne dass explizite Promise-Ketten erstellt werden müssen, und ermöglichen es Ihnen, Code zu schreiben, der wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; das einzige Problem bei der Unterstützung für Promises besteht in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, sondern nur die interessantesten und nützlichsten. Wenn Sie beginnen, mehr über Promises zu lernen, werden Ihnen weitere Funktionen und Techniken begegnen.

Viele moderne Web-APIs basieren auf Promises, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS")}}
