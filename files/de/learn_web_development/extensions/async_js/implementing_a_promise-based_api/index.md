---
title: Anleitung zur Implementierung einer Promise-basierten API
short-title: Implementierung von Promise-basierten APIs
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel schauen wir uns die andere Seite an — wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine viel weniger häufige Aufgabe als die Verwendung von Promise-basierten APIs, aber es lohnt sich dennoch, dies zu wissen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie in den vorherigen Lektionen dieses Moduls behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen, wie Promise-basierte APIs implementiert werden.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen, wenn Sie eine Promise-basierte API implementieren, werden Sie eine asynchrone Operation umschließen, die möglicherweise Ereignisse, einfache Rückrufe oder ein Nachrichtenübermittlungsmodell verwendet. Sie sorgen dafür, dass ein `Promise`-Objekt den Erfolg oder das Scheitern dieser Operation ordnungsgemäß behandelt.

## Implementierung einer `alarm()` API

In diesem Beispiel implementieren wir eine promise-basierte Alarm-API, genannt `alarm()`. Sie nimmt als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden, bevor die Person geweckt wird. Nach der Verzögerung sendet die Funktion eine "Wake up!" Nachricht, einschließlich des Namens der Person, die geweckt werden soll.

### Einschließen von setTimeout()

Wir verwenden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) API, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die gegebene Verzögerung eingestellt ist, und wenn die Zeit abläuft, wird die gegebene Funktion aufgerufen.

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

{{EmbedLiveSample("Einschließen von setTimeout()", 600, 100)}}

### Der Promise() Konstruktor

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt ist, wenn der Timer abläuft. Es wird eine "Wake up!" Nachricht in den `then()` Handler übergeben und das Promise ablehnen, wenn der Aufrufer einen negativen Verzögerungswert übergibt.

Das Schlüsselelement hier ist der {{jsxref("Promise/Promise", "Promise()")}} Konstruktor. Der `Promise()` Konstruktor nimmt eine einzelne Funktion als Argument. Wir nennen diese Funktion den `executor`. Wenn Sie ein neues Promise erstellen, geben Sie die Implementierung des Executors an.

Diese Executor-Funktion selbst nimmt zwei Argumente, die beide ebenfalls Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können einen einzelnen Parameter beliebigen Typs in `resolve` und `reject` übergeben.

So können wir `alarm()` folgendermaßen implementieren:

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Innerhalb des Executors für das Promise:

- überprüfen wir, dass `delay` nicht negativ ist, und rufen `reject` auf, indem wir einen benutzerdefinierten Fehler übergeben, falls dies der Fall ist.

- rufen wir `setTimeout()` mit einem Rückruf und `delay` auf. Der Rückruf wird aufgerufen, wenn der Timer abläuft, und im Rückruf rufen wir `resolve` auf, indem wir unsere `"Wake up!"` Nachricht übergeben.

## Verwendung der `alarm()` API

Dieser Teil sollte aus dem letzten Artikel recht vertraut sein. Wir können `alarm()` aufrufen und an dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promise einzurichten.

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
      return;
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

Versuchen Sie, unterschiedliche Werte für "Name" und "Delay" einzustellen. Versuchen Sie, einen negativen Wert für "Delay" einzustellen.

## Verwendung von async und await mit der `alarm()` API

Da `alarm()` ein `Promise` zurückgibt, können wir alles damit tun, was wir auch mit jedem anderen Promise tun könnten: Promise-Verkettung, `Promise.all()` und `async` / `await`:

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
      return;
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

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
