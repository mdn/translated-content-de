---
title: Implementierung einer versprechensbasierten API
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

Im letzten Artikel haben wir besprochen, wie man APIs verwendet, die Versprechungen zurückgeben. In diesem Artikel betrachten wir die andere Seite – wie man APIs implementiert, die Versprechungen zurückgeben. Dies ist eine viel seltener vorkommende Aufgabe als die Verwendung von versprechensbasierten APIs, aber es lohnt sich dennoch, sie zu kennen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der JavaScript-Grundlagen, einschließlich der Ereignisbehandlung und der Grundlagen von Versprechungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu verstehen, wie man versprechensbasierte APIs implementiert.</td>
    </tr>
  </tbody>
</table>

Im Allgemeinen werden Sie bei der Implementierung einer versprechensbasierten API einen asynchronen Vorgang umschließen, der möglicherweise Ereignisse, einfache Rückrufe oder ein Nachrichtenübermittlungsmodell verwendet. Sie werden ein `Promise`-Objekt arrangieren, um den Erfolg oder das Scheitern dieses Vorgangs richtig zu bearbeiten.

## Implementierung einer alarm() API

In diesem Beispiel implementieren wir eine versprechensbasierte Alarm-API, genannt `alarm()`. Sie wird als Argumente den Namen der Person annehmen, die geweckt werden soll, sowie eine Wartezeit in Millisekunden, bevor die Person geweckt wird. Nach der Verzögerung wird die Funktion eine „Aufwachen!“-Nachricht senden, einschließlich des Namens der Person, die geweckt werden muss.

### Umhüllung von setTimeout()

Wir verwenden die {{domxref("setTimeout()")}} API, um unsere `alarm()`-Funktion zu implementieren. Die `setTimeout()`-API nimmt als Argumente eine Rückruffunktion und eine Verzögerung in Millisekunden entgegen. Wenn `setTimeout()` aufgerufen wird, startet es einen Timer, der auf die angegebene Verzögerung eingestellt ist, und wenn die Zeit abläuft, ruft es die gegebene Funktion auf.

Im folgenden Beispiel rufen wir `setTimeout()` mit einer Rückruffunktion und einer Verzögerung von 1000 Millisekunden auf:

```html
<button id="set-alarm">Alarm setzen</button>
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

Unsere `alarm()`-Funktion wird ein `Promise` zurückgeben, das erfüllt wird, wenn der Timer abläuft. Es wird eine „Aufwachen!“-Nachricht an den `then()`-Handler weitergeben und das Versprechen ablehnen, wenn der Anrufer einen negativen Verzögerungswert angibt.

Der Schlüsselkomponente hier ist der {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor. Der `Promise()`-Konstruktor nimmt eine einzelne Funktion als Argument. Wir werden diese Funktion den `executor` nennen. Wenn Sie ein neues Versprechen erstellen, geben Sie die Implementierung des Executors an.

Diese Executor-Funktion selbst nimmt zwei Argumente an, die beide ebenfalls Funktionen sind und konventionell `resolve` und `reject` genannt werden. In Ihrer Executor-Implementierung rufen Sie die zugrundeliegende asynchrone Funktion auf. Wenn die asynchrone Funktion erfolgreich ist, rufen Sie `resolve` auf, und wenn sie fehlschlägt, rufen Sie `reject` auf. Wenn die Executor-Funktion einen Fehler wirft, wird `reject` automatisch aufgerufen. Sie können einen einzigen Parameter jeden Typs an `resolve` und `reject` übergeben.

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

Diese Funktion erstellt und gibt ein neues `Promise` zurück. Im Executor des Versprechens:

- überprüfen wir, dass `delay` nicht negativ ist, und werfen einen Fehler, wenn es so ist.

- rufen wir `setTimeout()` auf, wobei ein Rückruf und `delay` übergeben werden. Der Rückruf wird aufgerufen, wenn der Timer abläuft, und im Rückruf rufen wir `resolve` auf und übergeben unsere „Wake up!"-Nachricht.

## Verwendung der alarm() API

Dieser Teil sollte Ihnen aus dem letzten Artikel ziemlich vertraut sein. Wir können `alarm()` aufrufen und auf dem zurückgegebenen Versprechen `then()` und `catch()` aufrufen, um Handler für die Erfüllung und Ablehnung des Versprechens festzulegen.

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Verzögerung:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Alarm setzen</button>
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

Versuchen Sie, unterschiedliche Werte für „Name“ und „Verzögerung“ festzulegen. Versuchen Sie, einen negativen Wert für „Verzögerung“ festzulegen.

## Verwendung von async und await mit der alarm() API

Da `alarm()` ein `Promise` zurückgibt, können wir mit ihm alles tun, was wir mit jedem anderen Versprechen tun könnten: Versprechenskettung, `Promise.all()`, und `async` / `await`:

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Verzögerung:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Alarm setzen</button>
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

- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Verwendung von Versprechungen](/de/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
