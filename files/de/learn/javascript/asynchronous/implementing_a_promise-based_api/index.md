---
title: Anleitung zur Implementierung einer auf Promises basierenden API
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: e2a558f8e077395153b0e38ccdc6554b33fd87bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite – wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine deutlich seltenere Aufgabe als die Verwendung auf Promises basierender APIs, aber es ist dennoch wissenswert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der grundlegenden JavaScript-Konzepte, einschließlich der Ereignisbehandlung und der Grundlagen von Promises.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu verstehen, wie man auf Promises basierende APIs implementiert.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen wird bei der Implementierung einer auf Promises basierenden API eine asynchrone Operation umschlossen, die Ereignisse, einfache Rückrufmethoden oder ein Nachrichtenaustauschmodell verwenden könnte. Sie organisieren ein `Promise`-Objekt, um den Erfolg oder das Scheitern dieser Operation ordnungsgemäß zu behandeln.

## Implementierung einer `alarm()` API

In diesem Beispiel implementieren wir eine auf Promises basierende Alarm-API, genannt `alarm()`. Sie nimmt als Argumente den Namen der aufzuweckenden Person und eine Verzögerung in Millisekunden, bevor die Person geweckt wird. Nach der Verzögerung sendet die Funktion eine "Aufwachen!"-Nachricht, einschließlich des Namens der Person, die aufgeweckt werden muss.

### Verwendung von setTimeout()

Wir verwenden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) API, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die angegebene Verzögerung eingestellt ist, und ruft bei Ablauf der Zeit die gegebene Funktion auf.

Im folgenden Beispiel rufen wir `setTimeout()` mit einer Rückruffunktion und einer Verzögerung von 1000 Millisekunden auf:

```html
<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
```

{{EmbedLiveSample("Verwendung von setTimeout()", 600, 100)}}

### Der Promise() Konstruktor

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Aufwachen!"-Nachricht an den `then()`-Handler übergeben und das Promise ablehnen, wenn der Aufrufer einen negativen Verzögerungswert angibt.

Der entscheidende Bestandteil hier ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument. Wir nennen diese Funktion den `executor`. Wenn Sie ein neues Promise erstellen, liefern Sie die Implementierung des Executors.

Diese Executor-Funktion selbst nimmt zwei Argumente, die beide ebenfalls Funktionen sind, und die konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler auslöst, wird `reject` automatisch aufgerufen. Sie können einen einzelnen Parameter beliebigen Typs in `resolve` und `reject` übergeben.

So können wir `alarm()` implementieren:

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Innerhalb des Executors für das Promise:

- Überprüfen wir, ob `delay` nicht negativ ist, und rufen `reject` mit einem benutzerdefinierten Fehler auf, wenn dies der Fall ist.

- Rufen wir `setTimeout()` auf, übergeben einen Rückruf und `delay`. Der Rückruf wird aufgerufen, wenn der Timer abläuft, und im Rückruf rufen wir `resolve` auf und übergeben unsere `"Aufwachen!"`-Nachricht.

## Verwendung der alarm() API

Dieser Teil sollte Ihnen aus dem letzten Artikel vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promises festzulegen.

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
```

{{EmbedLiveSample("Verwendung der alarm() API", 600, 160)}}

Versuchen Sie, verschiedene Werte für "Name" und "Verzögerung" zu setzen. Versuchen Sie, einen negativen Wert für "Verzögerung" zu setzen.

## Verwendung von async und await mit der alarm() API

Da `alarm()` ein `Promise` zurückgibt, können wir alles damit machen, was wir mit jedem anderen Promise tun könnten: Promise-Chaining, `Promise.all()` und `async` / `await`:

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
```

{{EmbedLiveSample("Verwendung von async und await mit der alarm() API", 600, 160)}}

## Siehe auch

- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
