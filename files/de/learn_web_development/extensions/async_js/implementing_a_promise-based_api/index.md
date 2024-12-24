---
title: Wie man eine Promise-basierte API implementiert
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite – wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine viel seltener ausgeführte Aufgabe als die Verwendung von Promise-basierten APIs, aber dennoch wissenswert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorhergehenden Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen, wie Promise-basierte APIs implementiert werden.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen, wenn Sie eine Promise-basierte API implementieren, werden Sie eine asynchrone Operation umhüllen, die Ereignisse, einfache Callback-Funktionen oder ein Nachrichtenübertragungsmodell verwenden könnte. Sie werden ein `Promise`-Objekt arrangieren, um den Erfolg oder Fehler dieser Operation korrekt zu behandeln.

## Implementieren einer `alarm()` API

In diesem Beispiel werden wir eine Promise-basierte Alarm-API implementieren, die `alarm()` genannt wird. Sie wird als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden annehmen, bevor die Person geweckt wird. Nach der Verzögerung wird die Funktion eine "Wake up!"-Nachricht senden, einschließlich des Namens der Person, die geweckt werden muss.

### Umhüllen von `setTimeout()`

Wir werden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) API verwenden, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()` API nimmt als Argumente eine Callback-Funktion und eine Verzögerung in Millisekunden. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer auf die gegebene Verzögerung eingestellt, und wenn diese Zeit abläuft, ruft es die gegebene Funktion auf.

Im Beispiel unten rufen wir `setTimeout()` mit einer Callback-Funktion und einer Verzögerung von 1000 Millisekunden auf:

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

{{EmbedLiveSample("Umhüllen von setTimeout()", 600, 100)}}

### Der `Promise()` Konstruktor

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine "Wake up!"-Nachricht in den `then()`-Handler übergeben und das Promise ablehnen, wenn der Aufrufer einen negativen Verzögerungswert übergibt.

Der Schlüsselfaktor hier ist der {{jsxref("Promise/Promise", "Promise()")}} Konstruktor. Der `Promise()` Konstruktor nimmt eine einzige Funktion als Argument. Wir nennen diese Funktion den `executor`. Wenn Sie ein neues Promise erstellen, liefern Sie die Implementierung des Executors.

Diese Executor-Funktion nimmt selbst zwei Argumente an, die beide ebenfalls Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. In `resolve` und `reject` können Sie einen einzelnen Parameter jeglichen Typs übergeben.

So können wir `alarm()` wie folgt implementieren:

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

- prüfen wir, ob `delay` nicht negativ ist, und rufen `reject` auf, wobei wir einen benutzerdefinierten Fehler übergeben, wenn dies der Fall ist.

- rufen wir `setTimeout()` auf, übergeben ein Callback und `delay`. Das Callback wird aufgerufen, wenn der Timer abläuft, und im Callback rufen wir `resolve` auf und übergeben unsere "`Wake up!`" Nachricht.

## Verwenden der `alarm()` API

Dieser Teil sollte aus dem letzten Artikel recht vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Promises festzulegen.

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

{{EmbedLiveSample("Verwenden der alarm() API", 600, 160)}}

Versuchen Sie, verschiedene Werte für "Name" und "Delay" einzustellen. Versuchen Sie, einen negativen Wert für "Delay" einzustellen.

## Verwenden von async und await mit der `alarm()` API

Da `alarm()` ein `Promise` zurückgibt, können wir alles mit ihm tun, was wir mit jedem anderen Promise tun könnten: Promise-Verkettung, `Promise.all()`, und `async` / `await`:

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

{{EmbedLiveSample("Verwenden von async und await mit der alarm() API", 600, 160)}}

## Siehe auch

- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
