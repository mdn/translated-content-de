---
title: Wie man eine promise-basierte API implementiert
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite – wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine viel seltener ausgeführte Aufgabe als die Verwendung von promise-basierten APIs, aber es ist dennoch wissenswert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der JavaScript
        Grundkenntnisse, einschließlich Ereignisbehandlung und der Grundlagen von Promises.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis, wie man promise-basierte APIs implementiert.</td>
    </tr>
  </tbody>
</table>

Allgemein, wenn Sie eine promise-basierte API implementieren, werden Sie eine asynchrone Operation umschließen, die möglicherweise Ereignisse, einfache Rückruffunktionen oder ein Nachrichtenübermittlungsmodell verwendet. Sie arrangieren ein `Promise`-Objekt, um den Erfolg oder das Scheitern dieser Operation ordnungsgemäß zu handhaben.

## Implementierung einer alarm()-API

In diesem Beispiel implementieren wir eine promise-basierte Alarm-API, die `alarm()` genannt wird. Sie wird als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden erhalten, bevor die Person geweckt wird. Nach der Verzögerung wird die Funktion eine "Wach auf!"-Nachricht senden, einschließlich des Namens der Person, die geweckt werden muss.

### setTimeout() umschließen

Wir werden die [`setTimeout()`](/de/docs/Web/API/SetTimeout) API verwenden, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Callback-Funktion und eine Verzögerung in Millisekunden an. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die gegebene Verzögerung eingestellt ist, und wenn die Zeit abläuft, wird die gegebene Funktion aufgerufen.

Im untenstehenden Beispiel rufen wir `setTimeout()` mit einer Callback-Funktion und einer Verzögerung von 1000 Millisekunden auf:

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

{{EmbedLiveSample("Wrapping setTimeout()", 600, 100)}}

### Der Promise()-Konstruktor

Unsere `alarm()`-Funktion wird eine `Promise` zurückgeben, die erfüllt wird, wenn der Timer abläuft. Es wird eine "Wach auf!"-Nachricht an den `then()`-Handler weitergeben und die Promise ablehnen, wenn der Aufrufer einen negativen Verzögerungswert angibt.

Der Schlüsselbestandteil hier ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument. Wir werden diese Funktion den `executor` nennen. Wenn Sie eine neue Promise erstellen, liefern Sie die Implementierung des Executors.

Diese Executor-Funktion nimmt selbst zwei Argumente auf, die beide ebenfalls Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können einen einzelnen Parameter beliebigen Typs an `resolve` und `reject` übergeben.

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

Diese Funktion erstellt und gibt eine neue `Promise` zurück. Innerhalb des Executors für die Promise:

- überprüfen wir, dass `delay` nicht negativ ist, und werfen einen Fehler, wenn dies der Fall ist.

- rufen wir `setTimeout()` auf, übergeben eine Callback-Funktion und `delay`. Die Callback-Funktion wird aufgerufen, wenn der Timer abläuft, und in der Callback-Funktion rufen wir `resolve` auf und geben unsere "Wach auf!"-Nachricht weiter.

## Verwendung der alarm()-API

Dieser Teil sollte Ihnen aus dem letzten Artikel ziemlich vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung der Promise festzulegen.

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

{{EmbedLiveSample("Using the alarm() API", 600, 160)}}

Versuchen Sie, unterschiedliche Werte für "Name" und "Delay" einzustellen. Versuchen Sie, einen negativen Wert für "Delay" einzustellen.

## Verwendung von async und await mit der alarm()-API

Da `alarm()` eine `Promise` zurückgibt, können wir alles damit tun, was wir auch mit jeder anderen Promise tun könnten: [Promise chaining], `Promise.all()`, und `async` / `await`:

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

{{EmbedLiveSample("Using async and await with the alarm() API", 600, 160)}}

## Siehe auch

- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Umgang mit Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
