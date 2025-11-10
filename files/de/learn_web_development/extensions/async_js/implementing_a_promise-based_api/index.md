---
title: Umsetzung einer API auf Basis von Promises
short-title: Umsetzung von APIs auf Basis von Promises
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

Im letzten Artikel haben wir besprochen, wie man APIs nutzt, die Promises zurückgeben. In diesem Artikel schauen wir uns die andere Seite an – wie man APIs _umsetzt_, die Promises zurückgeben. Diese Aufgabe ist viel seltener als die Nutzung von auf Promises basierenden APIs, aber es ist dennoch wertvoll, darüber Bescheid zu wissen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis von <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchronen Konzepten, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>Verstehen, wie man APIs auf Basis von Promises umsetzt.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen werden Sie, wenn Sie eine API mit Promises umsetzen, eine asynchrone Operation umhüllen, die Ereignisse verwenden könnte, einfache Rückruffunktionen oder ein Nachrichtenübermittlungsmodell. Sie arrangieren ein `Promise`-Objekt, um den Erfolg oder das Scheitern dieser Operation korrekt zu handhaben.

## Umsetzung einer `alarm()` API

In diesem Beispiel implementieren wir eine Alarm-API auf Basis von Promises, genannt `alarm()`. Die Funktion nimmt als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden, bevor die Person geweckt werden soll. Nach der Verzögerung sendet die Funktion eine "Wake up!"-Nachricht, die den Namen der Person enthält, die geweckt werden muss.

### Umhüllung von setTimeout()

Wir verwenden die API [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()`-API nimmt als Argumente eine Rückruffunktion und eine Verzögerung, angegeben in Millisekunden. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die gegebene Verzögerung eingestellt ist, und wenn die Zeit abläuft, wird die gegebene Funktion aufgerufen.

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

### Der Konstruktor Promise()

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Wake up!"-Nachricht in den `then()`-Handler übergeben und das Promise ablehnen, wenn der Anrufer einen negativen Verzögerungswert angibt.

Der entscheidende Bestandteil hier ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument. Wir nennen diese Funktion den `executor`. Wenn Sie ein neues Promise erstellen, liefern Sie die Implementierung des Executors.

Diese Executor-Funktion selbst nimmt zwei Argumente entgegen, die beide auch Funktionen sind und die konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf und wenn sie scheitert, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können ein einzelnes Argument eines beliebigen Typs an `resolve` und `reject` übergeben.

So können wir `alarm()` wie folgt umsetzen:

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

- überprüfen wir, dass `delay` nicht negativ ist, und rufen `reject` auf, wobei wir einen benutzerdefinierten Fehler übergeben, falls dies der Fall ist.

- rufen wir `setTimeout()` auf, übergeben eine Rückruffunktion und `delay`. Die Rückruffunktion wird aufgerufen, wenn der Timer abläuft, und in der Rückruffunktion rufen wir `resolve` auf, wobei wir unsere "Wake up!"-Nachricht übergeben.

## Nutzung der `alarm()`-API

Dieser Abschnitt sollte Ihnen aus dem letzten Artikel bekannt vorkommen. Wir können `alarm()` aufrufen und an dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promises einzurichten.

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

{{EmbedLiveSample("Nutzung der alarm()-API", 600, 160)}}

Versuchen Sie, verschiedene Werte für "Name" und "Delay" festzulegen. Versuchen Sie, einen negativen Wert für "Delay" festzulegen.

## Verwendung von async und await mit der `alarm()`-API

Da `alarm()` ein `Promise` zurückgibt, können wir alles damit tun, was wir auch mit anderen Promises machen könnten: Promise-Verkettung, `Promise.all()` und `async` / `await`:

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

{{EmbedLiveSample("Verwendung von async und await mit der alarm()-API", 600, 160)}}

## Siehe auch

- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
