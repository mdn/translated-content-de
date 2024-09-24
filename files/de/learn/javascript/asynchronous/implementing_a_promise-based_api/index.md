---
title: Anleitung zur Implementierung einer Promise-basierten API
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite — wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine weitaus weniger häufige Aufgabe als die Nutzung von Promise-basierten APIs, aber es ist dennoch wissenswert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein fundiertes Verständnis der JavaScript-Grundlagen, einschließlich Ereignisbehandlung und die Grundlagen von Promises.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Promise-basierte APIs implementiert.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen, wenn Sie eine promise-basierte API implementieren, werden Sie einen asynchronen Vorgang umwickeln, der Ereignisse, einfache Rückrufe oder ein Nachrichtenübermittlungsmodell verwenden könnte. Sie werden dafür sorgen, dass ein `Promise`-Objekt den Erfolg oder das Scheitern dieses Vorgangs richtig handhabt.

## Implementierung einer `alarm()` API

In diesem Beispiel implementieren wir eine Promise-basierte Alarm-API, genannt `alarm()`. Diese Funktion nimmt als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden, die gewartet werden soll, bevor die Person geweckt wird. Nach der Verzögerung sendet die Funktion eine "Wake up!"-Nachricht, inklusive des Namens der Person, die geweckt werden muss.

### Umhüllung von setTimeout()

Wir verwenden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) API, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()`-API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden entgegen. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die angegebene Verzögerung eingestellt ist, und ruft die gegebene Funktion auf, wenn die Zeit abläuft.

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

{{EmbedLiveSample("Wrapping setTimeout()", 600, 100)}}

### Der Promise()-Konstruktor

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Wake up!"-Nachricht an den `then()`-Handler übergeben und das Promise ablehnen, wenn der Anrufer einen negativen Verzögerungswert übergibt.

Der Schlüsselkomponente hier ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt als Argument eine einzelne Funktion entgegen. Wir nennen diese Funktion den `executor`. Wenn Sie ein neues Promise erstellen, bieten Sie die Implementierung des Executors an.

Diese Executor-Funktion selbst nimmt zwei Argumente entgegen, die beide auch Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die grundlegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können einen einzelnen Parameter jeden Typs an `resolve` und `reject` übergeben.

So können wir `alarm()` wie folgt implementieren:

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

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Im Executor für das Promise:

- überprüfen wir, dass `delay` nicht negativ ist, und werfen einen Fehler, wenn es so ist.

- rufen wir `setTimeout()` auf, übergeben eine Rückruffunktion und `delay`. Die Rückruffunktion wird aufgerufen, wenn der Timer abläuft, und im Rückruf rufen wir `resolve` auf, wobei wir unsere "Wake up!"-Nachricht übergeben.

## Verwendung der `alarm()` API

Dieser Teil sollte aus dem letzten Artikel ziemlich vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für das Erfüllen und Ablehnen des Promises festzulegen.

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

Versuchen Sie, verschiedene Werte für "Name" und "Delay" einzustellen. Versuchen Sie, einen negativen Wert für "Delay" einzustellen.

## Verwendung von async und await mit der `alarm()` API

Da `alarm()` ein `Promise` zurückgibt, können wir alles mit ihm machen, was wir mit jedem anderen Promise auch machen könnten: Promise-Ketten, `Promise.all()` und `async` / `await`:

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
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
