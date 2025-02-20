---
title: Anleitung zur Implementierung einer API auf Basis von Promises
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
l10n:
  sourceCommit: 594eb7514960642e7c79b19fdd71c203db55c9db
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Promises zurückgeben. In diesem Artikel betrachten wir die andere Seite — wie man APIs _implementiert_, die Promises zurückgeben. Dies ist eine weitaus seltenere Aufgabe als die Verwendung von auf Promises basierenden APIs, aber es ist dennoch hilfreich, darüber Bescheid zu wissen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">grundlegenden JavaScript-Konzepte</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen, wie man APIs auf Basis von Promises implementiert.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen wird bei der Implementierung einer API auf Basis von Promises eine asynchrone Operation umschlossen, die möglicherweise mit Ereignissen, einfachen Rückruffunktionen (Callbacks) oder einem Nachrichtenübertragungsmodell arbeitet. Sie organisieren ein `Promise`-Objekt so, dass es den Erfolg oder das Scheitern dieser Operation korrekt behandelt.

## Implementierung einer `alarm()`-API

In diesem Beispiel implementieren wir eine API auf Basis von Promises namens `alarm()`. Diese Funktion nimmt als Argumente den Namen der Person, die geweckt werden soll, und eine Verzögerung in Millisekunden, bevor die Person geweckt wird. Nach Ablauf der Verzögerung sendet die Funktion eine "Aufwachen!"-Nachricht, die den Namen der Person enthält, die geweckt werden soll.

### Umhüllung von `setTimeout()`

Wir verwenden die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-API, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()`-API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer mit der angegebenen Verzögerung. Sobald die Zeit abgelaufen ist, ruft es die angegebene Funktion auf.

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

### Der `Promise()`-Konstruktor

Unsere `alarm()`-Funktion gibt ein `Promise` zurück, das erfüllt wird, wenn der Timer abgelaufen ist. Es übergibt eine „Aufwachen!“-Nachricht an den `then()`-Handler und lehnt das Promise ab, wenn der Aufrufer einen negativen Wert für die Verzögerung angibt.

Das zentrale Element hierbei ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument, die als `executor` bezeichnet wird. Wenn Sie ein neues Promise erstellen, geben Sie die Implementierung des `executor` an.

Diese `executor`-Funktion selbst nimmt zwei Argumente, die ebenfalls Funktionen sind und konventionell als `resolve` und `reject` bezeichnet werden. In Ihrer `executor`-Implementierung rufen Sie die zugrunde liegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die `executor`-Funktion einen Fehler auslöst, wird `reject` automatisch aufgerufen. Sie können ein einzelnes Argument beliebigen Typs an `resolve` und `reject` übergeben.

So können wir `alarm()` wie folgt implementieren:

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

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Innerhalb des `executor` für das Promise:

- prüfen wir, ob `delay` nicht negativ ist, und rufen `reject` mit einem benutzerdefinierten Fehler auf, falls dies der Fall ist.

- rufen wir `setTimeout()` auf, übergeben einen Callback und `delay`. Der Callback wird aufgerufen, wenn der Timer abläuft, und im Callback rufen wir `resolve` auf und übergeben unsere „Aufwachen!“-Nachricht.

## Verwendung der `alarm()`-API

Dieser Teil sollte Ihnen aus dem letzten Artikel vertraut sein. Wir können `alarm()` aufrufen und am zurückgegebenen Promise `then()` und `catch()` aufrufen, um Handler für das Erfüllen und das Ablehnen der Promises zu setzen.

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

{{EmbedLiveSample("Using the alarm() API", 600, 160)}}

Versuchen Sie, verschiedene Werte für "Name" und "Delay" einzustellen. Probieren Sie, einen negativen Wert für "Delay" zu setzen.

## Verwendung von async und await mit der `alarm()`-API

Da `alarm()` ein `Promise` zurückgibt, können wir alles damit machen, was wir auch mit jedem anderen Promise machen können: Promise-Verkettung, `Promise.all()` und die Verwendung von `async` / `await`:

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

{{EmbedLiveSample("Using async and await with the alarm() API", 600, 160)}}

## Siehe auch

- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
