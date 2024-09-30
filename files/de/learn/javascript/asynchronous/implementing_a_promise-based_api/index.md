---
title: So implementieren Sie eine Promise-basierte API
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite — wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine viel weniger häufige Aufgabe als die Verwendung von Promise-basierten APIs, aber es lohnt sich dennoch, sie zu kennen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein vernünftiges Verständnis der JavaScript-Grundlagen, einschließlich Ereignisbehandlung und der Grundlagen von Promises.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der Implementierung von Promise-basierten APIs erlangen.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen werden Sie bei der Implementierung einer Promise-basierten API eine asynchrone Operation umschließen, die möglicherweise Ereignisse, einfache Rückruffunktionen oder ein Nachrichtenübermittlungsmodell verwendet. Sie arrangieren ein `Promise`-Objekt, um den Erfolg oder das Scheitern dieser Operation ordnungsgemäß zu handhaben.

## Implementierung einer `alarm()` API

In diesem Beispiel implementieren wir eine Promise-basierte Alarm-API, genannt `alarm()`. Sie wird als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden entgegennehmen, bevor die Person geweckt wird. Nach der Verzögerung sendet die Funktion eine "Aufwachen!"-Nachricht, einschließlich des Namens der Person, die geweckt werden muss.

### Umhüllung von setTimeout()

Wir werden die [`setTimeout()`](/de/docs/Web/API/SetTimeout) API verwenden, um unsere `alarm()` Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden entgegen. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer mit der angegebenen Verzögerung, und wenn die Zeit abgelaufen ist, ruft es die angegebene Funktion auf.

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

{{EmbedLiveSample("Umhüllung von setTimeout()", 600, 100)}}

### Der Promise()-Konstruktor

Unsere `alarm()` Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Aufwachen!"-Nachricht in den `then()` Handler übergeben und das Promise ablehnen, wenn ein negativer Verzögerungswert übergeben wird.

Das Schlüsselbestandteil hier ist der {{jsxref("Promise/Promise", "Promise()")}} Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument entgegen. Wir nennen diese Funktion den `Executor`. Wenn Sie ein neues Promise erstellen, liefern Sie die Implementierung des Executors.

Diese Executor-Funktion selbst nimmt zwei Argumente, die beide ebenfalls Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler auslöst, wird `reject` automatisch aufgerufen. Sie können ein einzelnes Argument von beliebigem Typ an `resolve` und `reject` übergeben.

So können wir `alarm()` so implementieren:

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Im Executor des Promises:

- überprüfen wir, dass `delay` nicht negativ ist, und werfen einen Fehler, wenn es der Fall ist.

- rufen `setTimeout()` auf, übergeben einen Rückruf und `delay`. Der Rückruf wird aufgerufen, wenn der Timer abläuft und im Rückruf rufen wir `resolve` auf, übergeben unsere `"Aufwachen!"`-Nachricht.

## Verwendung der `alarm()` API

Dieser Teil sollte aus dem letzten Artikel ziemlich vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promises festzulegen.

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
      throw new Error("Alarm delay must not be negative");
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

Versuchen Sie, unterschiedliche Werte für "Name" und "Delay" festzulegen. Versuchen Sie, einen negativen Wert für "Delay" festzulegen.

## Verwendung von async und await mit der `alarm()` API

Da `alarm()` ein `Promise` zurückgibt, können wir damit alles tun, was wir mit jedem anderen Promise tun könnten: Promise-Chaining, `Promise.all()`, und `async` / `await`:

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
      throw new Error("Alarm delay must not be negative");
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
