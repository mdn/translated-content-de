---
title: Anleitung zur Implementierung einer Promise-basierten API
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

Im letzten Artikel haben wir besprochen, wie man APIs nutzt, die `promises` zurückgeben. In diesem Artikel schauen wir uns die andere Seite an — wie man APIs implementiert, die `promises` zurückgeben. Dies ist eine viel weniger häufige Aufgabe als die Verwendung von promise-basierten APIs, aber es ist trotzdem wissenswert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein fundiertes Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen, wie man promise-basierte APIs implementiert.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen werden Sie bei der Implementierung einer Promise-basierten API eine asynchrone Operation umschließen, die Events, einfache Callbacks oder ein Nachrichtenübertragungsmodell verwenden könnte. Sie werden ein `Promise`-Objekt arrangieren, das den Erfolg oder das Scheitern dieser Operation ordnungsgemäß handhabt.

## Implementierung einer `alarm()` API

In diesem Beispiel implementieren wir eine promise-basierte Alarm-API, genannt `alarm()`. Sie wird als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden entgegennehmen, bevor die Person geweckt wird. Nach der Verzögerung sendet die Funktion eine "Wake up!"-Nachricht, einschließlich des Namens der Person, die wir wecken müssen.

### Einwickeln von `setTimeout()`

Wir verwenden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) API, um unsere `alarm()` Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Callback-Funktion und eine Verzögerung in Millisekunden entgegen. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die gegebene Verzögerung eingestellt ist, und wenn die Zeit abläuft, ruft es die gegebene Funktion auf.

Im folgenden Beispiel rufen wir `setTimeout()` mit einer Callback-Funktion und einer Verzögerung von 1000 Millisekunden auf:

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

{{EmbedLiveSample("Einwickeln von setTimeout()", 600, 100)}}

### Der `Promise()` Konstruktor

Unsere `alarm()` Funktion gibt ein `Promise` zurück, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Wake up!"-Nachricht an den `then()`-Handler übergeben und das Promise wird abgelehnt, wenn der Aufrufer einen negativen Verzögerungswert liefert.

Das Kernstück hier ist der {{jsxref("Promise/Promise", "Promise()")}} Konstruktor. Der `Promise()` Konstruktor nimmt eine einzige Funktion als Argument. Wir nennen diese Funktion den `Executor`. Wenn Sie ein neues Promise erstellen, geben Sie die Implementierung des Executors an.

Diese Executor-Funktion selbst nimmt zwei Argumente, die beide ebenfalls Funktionen sind, und die konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können einen einzigen Parameter beliebigen Typs an `resolve` und `reject` übergeben.

Daher können wir `alarm()` so implementieren:

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

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Im Executor für das Promise:

- prüfen wir, dass `delay` nicht negativ ist, und rufen `reject` auf, wobei wir einen benutzerdefinierten Fehler übergeben, wenn dies der Fall ist.

- rufen wir `setTimeout()` auf, mit einem Callback und `delay`. Der Callback wird aufgerufen, wenn der Timer abläuft, und im Callback rufen wir `resolve` auf, wobei wir unsere "Wake up!"-Nachricht übergeben.

## Verwendung der `alarm()` API

Dieser Teil sollte Ihnen aus dem letzten Artikel ziemlich bekannt vorkommen. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promises festzulegen.

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

Versuchen Sie, unterschiedliche Werte für "Name" und "Delay" festzulegen. Versuchen Sie, einen negativen Wert für "Delay" festzulegen.

## Verwendung von `async` und `await` mit der `alarm()` API

Da `alarm()` ein `Promise` zurückgibt, können wir damit alles machen, was wir mit jedem anderen Promise tun könnten: Verkettung von Promises, `Promise.all()`, und `async` / `await`:

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

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
