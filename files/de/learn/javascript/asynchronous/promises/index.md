---
title: So verwenden Sie Promises
slug: Learn/JavaScript/Asynchronous/Promises
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Promises** sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Ein Promise ist ein Objekt, das von einer asynchronen Funktion zurückgegeben wird und den aktuellen Status der Operation darstellt. Zu dem Zeitpunkt, an dem das Promise dem Aufrufer zurückgegeben wird, ist die Operation häufig noch nicht abgeschlossen, aber das Promise-Objekt bietet Methoden, um den späteren Erfolg oder Misserfolg der Operation zu behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der Grundlagen von JavaScript, einschließlich der Ereignisbehandlung.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Promises in JavaScript verwendet werden.</td>
    </tr>
  </tbody>
</table>

Im [vorherigen Artikel](/de/docs/Learn/JavaScript/Asynchronous/Introducing) haben wir die Verwendung von Callbacks zur Implementierung asynchroner Funktionen besprochen. Mit diesem Design rufen Sie die asynchrone Funktion auf und übergeben dabei Ihre Callback-Funktion. Die Funktion gibt sofort zurück und ruft Ihren Callback auf, wenn die Operation abgeschlossen ist.

Bei einer Promise-basierten API startet die asynchrone Funktion die Operation und gibt ein {{jsxref("Promise")}}-Objekt zurück. Sie können dann Handler an dieses Promise-Objekt anhängen, und diese Handler werden ausgeführt, wenn die Operation erfolgreich oder fehlgeschlagen ist.

## Verwendung der fetch()-API

> [!NOTE]
> In diesem Artikel werden wir Promises erkunden, indem wir Code-Beispiele von der Seite in die JavaScript-Konsole Ihres Browsers kopieren. Um dies einzurichten:
>
> 1. Öffnen Sie einen Browser-Tab und besuchen Sie <https://example.org>
> 2. Öffnen Sie in diesem Tab die JavaScript-Konsole in den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
> 3. Wenn wir ein Beispiel zeigen, kopieren Sie es in die Konsole. Sie müssen die Seite jedes Mal neu laden, wenn Sie ein neues Beispiel eingeben, oder die Konsole wird sich beschweren, dass Sie `fetchPromise` neu deklariert haben.

In diesem Beispiel laden wir die JSON-Datei von <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> herunter und protokollieren einige Informationen darüber.

Dazu werden wir eine **HTTP-Anfrage** an den Server senden. Bei einer HTTP-Anfrage senden wir eine Anfrage-Nachricht an einen Remote-Server, und er sendet uns eine Antwort zurück. In diesem Fall senden wir eine Anfrage, um eine JSON-Datei vom Server zu erhalten. Erinnern Sie sich an den letzten Artikel, in dem wir HTTP-Anfragen mit der {{domxref("XMLHttpRequest")}}-API gestartet haben? Nun, in diesem Artikel verwenden wir die {{domxref("Window/fetch", "fetch()")}}-API, die die moderne, Promise-basierte Alternative zu `XMLHttpRequest` ist.

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

1. Wir rufen die `fetch()`-API auf und weisen den Rückgabewert der Variable `fetchPromise` zu.
2. Unmittelbar danach protokollieren wir die Variable `fetchPromise`. Dies sollte etwas wie `Promise { <state>: "pending" }` ausgeben, was uns sagt, dass wir ein `Promise`-Objekt haben und es einen `state` hat, dessen Wert `"pending"` ist. Der Status `"pending"` bedeutet, dass die Fetch-Operation noch läuft.
3. Wir übergeben eine Handler-Funktion in die **`then()`**-Methode des Promise. Wenn (und falls) die Fetch-Operation erfolgreich ist, ruft das Promise unseren Handler auf und übergibt ein {{domxref("Response")}}-Objekt, das die Antwort des Servers enthält.
4. Wir protokollieren eine Nachricht, dass wir die Anfrage gestartet haben.

Die vollständige Ausgabe sollte etwa so aussehen:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Beachten Sie, dass `Started request…` protokolliert wird, bevor wir die Antwort erhalten. Im Gegensatz zu einer synchronen Funktion gibt `fetch()` zurück, während die Anfrage noch läuft, wodurch unser Programm reaktionsfähig bleibt. Die Antwort zeigt den `200` (OK)-[Statuscode](/de/docs/Web/HTTP/Status), was bedeutet, dass unsere Anfrage erfolgreich war.

Dies erscheint wahrscheinlich sehr ähnlich dem Beispiel im letzten Artikel, in dem wir Event-Handler zum {{domxref("XMLHttpRequest")}}-Objekt hinzugefügt haben. Stattdessen übergeben wir einen Handler in die `then()`-Methode des zurückgegebenen Promise.

## Verkettung von Promises

Mit der `fetch()`-API müssen Sie, sobald Sie ein `Response`-Objekt erhalten, eine weitere Funktion aufrufen, um die Antwortdaten zu erhalten. In diesem Fall möchten wir die Antwortdaten als JSON erhalten, also würden wir die {{domxref("Response/json", "json()")}}-Methode des `Response`-Objekts aufrufen. Es stellt sich heraus, dass `json()` ebenfalls asynchron ist. Dies ist also ein Fall, in dem wir zwei aufeinanderfolgende asynchrone Funktionen aufrufen müssen.

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

In diesem Beispiel fügen wir wie zuvor einen `then()`-Handler zum von `fetch()` zurückgegebenen Promise hinzu. Aber diesmal ruft unser Handler `response.json()` auf und übergibt dann einen neuen `then()`-Handler in das Promise, das von `response.json()` zurückgegeben wird.

Dies sollte "baked beans" (den Namen des ersten Produkts in "products.json") protokollieren.

Aber warten Sie! Erinnern Sie sich an den letzten Artikel, in dem wir sagten, dass wir durch das Aufrufen eines Callbacks innerhalb eines anderen Callbacks immer mehr geschachtelte Code-Ebenen erhielten? Und wir sagten, dass dieser "Callback-Hell" unseren Code schwer verständlich macht? Ist dies nicht dasselbe, nur mit `then()`-Aufrufen?

Das ist es natürlich. Aber das elegante Merkmal von Promises ist, dass _`then()` selbst ein Promise zurückgibt, das mit dem Ergebnis der Funktion abgeschlossen wird, die ihm übergeben wurde_. Das bedeutet, dass wir (und sollten) den obigen Code so umschreiben können:

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

Anstatt das zweite `then()` im Handler des ersten `then()` aufzurufen, können wir das von `json()` zurückgegebene Promise _zurückgeben_ und das zweite `then()` auf diesen Rückgabewert aufrufen. Dies wird **Promise-Verkettung** genannt und bedeutet, dass wir immer tiefer werdende Ebenen der Einrückung vermeiden können, wenn wir aufeinanderfolgende asynchrone Funktionsaufrufe benötigen.

Bevor wir zum nächsten Schritt übergehen, gibt es noch ein Stück hinzuzufügen. Wir müssen überprüfen, ob der Server die Anfrage akzeptiert und bearbeitet hat, bevor wir versuchen, sie zu lesen. Wir werden dies tun, indem wir den Statuscode in der Antwort überprüfen und einen Fehler werfen, wenn er nicht "OK" war:

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

Dies bringt uns zum letzten Punkt: Wie gehen wir mit Fehlern um? Die `fetch()`-API kann aus vielen Gründen einen Fehler auslösen (z. B. weil keine Netzwerkverbindung bestand oder die URL in irgendeiner Weise fehlerhaft war) und wir werfen selbst einen Fehler, wenn der Server einen Fehler zurückgibt.

Im letzten Artikel haben wir gesehen, dass die Fehlerbehandlung mit verschachtelten Callbacks sehr schwierig werden kann, da wir Fehler auf jeder Verschachtelungsebene behandeln müssen.

Zur Unterstützung der Fehlerbehandlung bieten `Promise`-Objekte eine {{jsxref("Promise/catch", "catch()")}}-Methode. Diese ist sehr ähnlich wie `then()`: Sie rufen sie auf und übergeben eine Handler-Funktion. Während der Handler, der an `then()` übergeben wird, jedoch aufgerufen wird, wenn die asynchrone Operation _erfolgreich_ ist, wird der Handler, der an `catch()` übergeben wird, aufgerufen, wenn die asynchrone Operation _fehlschlägt_.

Wenn Sie `catch()` am Ende einer Promise-Kette hinzufügen, wird es aufgerufen, wenn einer der asynchronen Funktionsaufrufe fehlschlägt. Auf diese Weise können Sie eine Operation als mehrere aufeinanderfolgende asynchrone Funktionsaufrufe implementieren und alle Fehler an einem Ort behandeln.

Probieren Sie diese Version unseres `fetch()`-Codes. Wir haben einen Fehlerbehandler mit `catch()` hinzugefügt und auch die URL so angepasst, dass die Anfrage fehlschlägt.

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

Promises kommen mit einigen recht spezifischen Begriffen, die es wert sind, klargestellt zu werden.

Erstens kann ein Promise in einem von drei Zuständen sein:

- **pending**: Das Promise wurde erstellt, und die asynchrone Funktion, mit der es verbunden ist, war noch nicht erfolgreich oder fehlgeschlagen. Dies ist der Zustand, in dem sich Ihr Promise befindet, wenn es von einem Aufruf von `fetch()` zurückgegeben wird und die Anfrage noch gestellt wird.
- **fulfilled**: Die asynchrone Funktion war erfolgreich. Wenn ein Promise erfüllt wird, wird sein `then()`-Handler aufgerufen.
- **rejected**: Die asynchrone Funktion ist fehlgeschlagen. Wenn ein Promise zurückgewiesen wird, wird sein `catch()`-Handler aufgerufen.

Beachten Sie, dass das, was hier als "erfolgreich" oder "fehlgeschlagen" bezeichnet wird, von der jeweiligen API abhängt. Beispielsweise lehnt `fetch()` das zurückgegebene Promise ab, wenn (unter anderem) ein Netzwerkfehler das Senden der Anfrage verhindert hat, erfüllt aber das Promise, wenn der Server eine Antwort gesendet hat, selbst wenn es eine Fehlerantwort wie [404 Nicht gefunden](/de/docs/Web/HTTP/Status/404) war.

Manchmal verwenden wir den Begriff **settled** (eingelöst), um sowohl **fulfilled** (erfüllt) als auch **rejected** (zurückgewiesen) zu umfassen.

Ein Promise ist **resolved** (aufgelöst), wenn es eingelöst ist oder wenn es "festgelegt" wurde, dem Zustand eines anderen Promises zu folgen.

Der Artikel [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) gibt eine großartige Erklärung der Details dieser Terminologie.

## Kombinieren mehrerer Promises

Die Promise-Kette ist das, was Sie benötigen, wenn Ihre Operation aus mehreren asynchronen Funktionen besteht und Sie jede abgeschlossen haben müssen, bevor Sie die nächste starten. Aber es gibt auch andere Möglichkeiten, wie Sie asynchrone Funktionsaufrufe kombinieren müssen, und die `Promise`-API bietet einige Helfer dafür.

Manchmal benötigen Sie alle Promises, um erfüllt zu werden, aber sie hängen nicht voneinander ab. In einem solchen Fall ist es viel effizienter, sie alle zusammen zu starten und dann benachrichtigt zu werden, wenn sie alle erfüllt sind. Die {{jsxref("Promise/all", "Promise.all()")}}-Methode ist das, was Sie hier benötigen. Sie akzeptiert ein Array von Promises und gibt ein einzelnes Promise zurück.

Das von `Promise.all()` zurückgegebene Promise ist:

- erfüllt, wenn und falls _alle_ Promises im Array erfüllt sind. In diesem Fall wird der `then()`-Handler mit einem Array aller Antworten aufgerufen, in derselben Reihenfolge, in der die Promises in `all()` übergeben wurden.
- zurückgewiesen, wenn und falls _eines_ der Promises im Array abgelehnt wird. In diesem Fall wird der `catch()`-Handler mit dem Fehler aufgerufen, der vom Promise ausgelöst wurde, das abgelehnt wurde.

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

Hier führen wir drei `fetch()`-Anfragen an drei verschiedene URLs aus. Wenn alle erfolgreich sind, protokollieren wir den Antwortstatus jedes einzelnen. Wenn eine von ihnen fehlschlägt, protokollieren wir den Fehler.

Mit den angegebenen URLs sollten alle Anfragen erfüllt werden, obwohl der Server für die zweite `404` (Nicht gefunden) statt `200` (OK) zurückgibt, da die angeforderte Datei nicht existiert. Die Ausgabe sollte daher so aussehen:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Wenn wir denselben Code mit einer schlecht formatierten URL ausprobieren, wie folgt:

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

Dann können wir erwarten, dass der `catch()`-Handler ausgeführt wird, und wir sollten so etwas sehen:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Manchmal benötigen Sie möglicherweise irgendein Promise, das erfüllt wird, und es ist Ihnen egal, welches. In diesem Fall möchten Sie {{jsxref("Promise/any", "Promise.any()")}}. Dies ist ähnlich wie `Promise.all()`, mit der Ausnahme, dass es erfüllt wird, sobald eines der Promises im Array erfüllt ist, oder abgelehnt wird, wenn alle von ihnen abgelehnt werden:

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

Dies sind nur zwei der zusätzlichen `Promise`-Funktionen zum Kombinieren mehrerer Promises. Um mehr über den Rest zu erfahren, sehen Sie in der {{jsxref("Promise")}}-Referenzdokumentation nach.

## async und await

Das Schlüsselwort {{jsxref("Statements/async_function", "async")}} bietet Ihnen eine einfachere Möglichkeit, mit asynchronem Promise-basiertem Code zu arbeiten. Wenn Sie `async` am Anfang einer Funktion hinzufügen, wird diese zu einer asynchronen Funktion:

```js
async function myFunction() {
  // Dies ist eine asynchrone Funktion
}
```

Innerhalb einer asynchronen Funktion können Sie das Schlüsselwort `await` vor einem Aufruf einer Funktion verwenden, die ein Promise zurückgibt. Dies bewirkt, dass der Code an diesem Punkt wartet, bis das Promise eingelöst ist, in welchem Fall der erfüllte Wert des Promise als Rückgabewert behandelt wird, oder der abgelehnte Wert ausgelöst wird.

Dies ermöglicht es Ihnen, Code zu schreiben, der asynchrone Funktionen verwendet, aber wie synchroner Code aussieht. Zum Beispiel könnten wir unseren Fetch-Beispielcode so umschreiben:

```js
async function fetchProducts() {
  try {
    // nach dieser Zeile wird unsere Funktion warten, bis der `fetch()`-Aufruf abgeschlossen ist
    // der `fetch()`-Aufruf wird entweder eine Response zurückgeben oder einen Fehler auslösen
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // nach dieser Zeile wird unsere Funktion warten, bis der `response.json()`-Aufruf abgeschlossen ist
    // der `response.json()`-Aufruf wird entweder das geparste JSON-Objekt zurückgeben oder einen Fehler auslösen
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

Hier rufen wir `await fetch()` auf, und anstatt ein `Promise` zu erhalten, bekommt unser Aufrufer ein vollständig abgeschlossenes `Response`-Objekt zurück, als ob `fetch()` eine synchrone Funktion wäre!

Wir können sogar einen `try...catch`-Block zur Fehlerbehandlung verwenden, genau wie wir es tun würden, wenn der Code synchron wäre.

Beachten Sie jedoch, dass asynchrone Funktionen immer ein Promise zurückgeben, sodass Sie nicht so etwas tun können:

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
console.log(promise[0].name); // "promise" ist ein Promise-Objekt, daher wird dies nicht funktionieren
```

Stattdessen müssten Sie Folgendes tun:

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

Hier haben wir das `try...catch` zurück in den `catch`-Handler am zurückgegebenen Promise verschoben. Das bedeutet, dass unser `then`-Handler nicht den Fall behandeln muss, in dem ein Fehler innerhalb der `fetchProducts`-Funktion abgefangen wurde, was dazu führt, dass `data` `undefined` ist. Behandeln Sie Fehler als letzten Schritt Ihrer Promise-Kette.

Beachten Sie auch, dass Sie `await` nur innerhalb einer asynchronen Funktion verwenden können, es sei denn, Ihr Code befindet sich in einem [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules). Das bedeutet, dass Sie dies in einem normalen Skript nicht tun können:

```js
try {
  // Die Verwendung von await außerhalb einer asynchronen Funktion ist nur in einem Modul zulässig
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

Sie werden wahrscheinlich oft `async`-Funktionen verwenden, wo Sie ansonsten Promise-Ketten verwenden könnten, und sie machen das Arbeiten mit Promises erheblich intuitiver.

Denken Sie daran, dass `await` wie eine Promise-Kette asynchrone Operationen zwingt, in Serie abgeschlossen zu werden. Dies ist erforderlich, wenn das Ergebnis der nächsten Operation vom Ergebnis der vorherigen abhängt, aber wenn dies nicht der Fall ist, wird etwas wie `Promise.all()` leistungsfähiger sein.

## Fazit

Promises sind die Grundlage der asynchronen Programmierung in modernem JavaScript. Sie erleichtern es, Sequenzen asynchroner Operationen ohne tief verschachtelte Callbacks auszudrücken und zu verstehen, und sie unterstützen einen Stil der Fehlerbehandlung, der dem synchronen `try...catch`-Statement ähnelt.

Die Schlüsselwörter `async` und `await` erleichtern den Aufbau einer Operation aus einer Reihe aufeinanderfolgender asynchroner Funktionsaufrufe, indem sie die Notwendigkeit vermeiden, explizite Promise-Ketten zu erstellen, und es Ihnen ermöglichen, Code zu schreiben, der genau wie synchroner Code aussieht.

Promises funktionieren in den neuesten Versionen aller modernen Browser; der einzige Ort, an dem die Unterstützung von Promises ein Problem darstellen wird, ist in Opera Mini und IE11 und früheren Versionen.

Wir haben in diesem Artikel nicht alle Funktionen von Promises behandelt, nur die interessantesten und nützlichsten. Wenn Sie anfangen, mehr über Promises zu lernen, werden Sie auf weitere Funktionen und Techniken stoßen.

Viele moderne Web-APIs sind Promise-basiert, einschließlich [WebRTC](/de/docs/Web/API/WebRTC_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und viele mehr.

## Siehe auch

- [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) von Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
