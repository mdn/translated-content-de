---
title: Einführung in Workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" stellen wir _Workers_ vor, die es Ihnen ermöglichen, einige Aufgaben in einem separaten [Thread](/de/docs/Glossary/Thread) der Ausführung laufen zu lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der grundlegenden JavaScript-Konzepte, einschließlich der Ereignisbehandlung.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu verstehen, wie man Web-Workers verwendet.</td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine langlaufende synchrone Aufgabe in Ihrem Programm haben — das gesamte Fenster wird völlig unempfänglich. Grundsätzlich liegt der Grund dafür darin, dass das Programm _einsträngig_ ist. Ein _Thread_ ist eine Abfolge von Anweisungen, die ein Programm befolgt. Da das Programm aus einem einzigen Thread besteht, kann es immer nur eine Sache gleichzeitig ausführen: Wenn es also auf unseren langlaufenden synchronen Aufruf wartet, kann es nichts anderes tun.

Workers geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Prozessen fortfahren können (wie zum Beispiel der Handhabung von Benutzeraktionen).

Ein Problem dabei ist, dass, wenn mehrere Threads Zugriff auf die gleichen geteilten Daten haben, diese unabhängig und unvorhersehbar (aus der Sicht der anderen Threads) verändert werden können. Dies kann schwer auffindbare Fehler verursachen.

Um diese Probleme im Web zu vermeiden, erhalten Ihr Hauptcode und Ihr Workercode niemals direkten Zugriff auf die Variablen des jeweils anderen und können Daten nur in sehr speziellen Fällen "wirklich" teilen. Workers und der Hauptcode laufen in völlig getrennten Welten und interagieren nur, indem sie einander Nachrichten senden. Insbesondere bedeutet dies, dass Workers nicht auf das DOM (das Fenster, das Dokument, Seitenelemente usw.) zugreifen können.

Es gibt drei verschiedene Arten von Workern:

- Dedizierte Worker
- Geteilte Worker
- Service Worker

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann die anderen beiden kurz besprechen.

## Verwendung von Web-Workern

Erinnern Sie sich an den ersten Artikel, in dem wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlberechnung durchzuführen, damit unsere Seite reaktionsfähig auf Benutzeraktionen bleibt.

### Der synchrone Primzahl-Generator

Sehen wir uns zunächst noch einmal das JavaScript in unserem vorherigen Beispiel an:

```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector("#output").textContent =
    `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

In diesem Programm wird das Programm völlig unempfänglich, nachdem wir `generatePrimes()` aufrufen.

### Primzahlberechnung mit einem Worker

Für dieses Beispiel beginnen Sie damit, eine lokale Kopie der Dateien von <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start> zu erstellen. Es gibt vier Dateien in diesem Verzeichnis:

- index.html
- style.css
- main.js
- generate.js

Die Dateien "index.html" und "style.css" sind bereits vollständig:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Prime numbers</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"
    </textarea>

    <div id="output"></div>
  </body>
</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode in "main.js" und den Workercode in "generate.js" hinzufügen.

Zuallererst können wir sehen, dass der Workercode in einem separaten Skript vom Hauptcode gehalten wird. Weiterhin sehen wir, wie oben in "index.html", dass nur der Hauptcode in einem `<script>`-Element eingebunden ist.

Kopieren Sie nun den folgenden Code in "main.js":

```js
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

- Zuerst erstellen wir den Worker mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Wir übergeben diesem eine URL, die auf das Workerskript zeigt. Sobald der Worker erstellt ist, wird das Workerskript ausgeführt.

- Als Nächstes fügen wir, wie in der synchronen Version, einen `click`-Ereignishandler für die "Generate primes"-Schaltfläche hinzu. Aber anstatt eine `generatePrimes()`-Funktion aufzurufen, senden wir eine Nachricht an den Worker mit [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage). Diese Nachricht kann ein Argument enthalten, in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:

  - `command`: ein String, der das identifiziert, was der Worker tun soll (für den Fall, dass unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Wir fügen einen `message`-Ereignishandler für den Worker hinzu. Dies ist so gedacht, dass der Worker uns mitteilen kann, wenn er fertig ist und uns eventuell resultierende Daten übergeben kann. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau die gleiche wie `quota`, daher ist das zwar etwas überflüssig, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Ereignishandler für die "Reload"-Schaltfläche. Dies ist genau das gleiche wie in der synchronen Version.

Nun zum Workercode. Kopieren Sie den folgenden Code in "generate.js":

```js
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  postMessage(primes.length);
}
```

Denken Sie daran, dass dies ausgeführt wird, sobald das Hauptskript den Worker erstellt.

Das erste, was der Worker tut, ist, auf Nachrichten vom Hauptskript zu hören. Er tut dies mithilfe von `addEventListener()`, das eine globale Funktion in einem Worker ist. Innerhalb des `message`-Ereignishandlers enthält die `data`-Eigenschaft des Ereignisses eine Kopie des Arguments, das vom Hauptskript übergeben wird. Wenn das Hauptskript den `generate`-Befehl übergibt, rufen wir `generatePrimes()` auf und übergeben den `quota`-Wert aus dem Nachrichtenevent.

Die `generatePrimes()`-Funktion ist wie die synchrone Version, außer dass anstelle eines zurückgegebenen Wertes eine Nachricht an das Hauptskript gesendet wird, wenn wir fertig sind. Wir verwenden dafür die [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Funktion, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und aktualisiert das DOM, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Webseite ausführen zu können, müssen Sie einen lokalen Webserver betreiben, da file:// URLs keine Worker laden dürfen. Siehe unseren Leitfaden zum [Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server). Sobald dies erledigt ist, sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite reaktionsfähig bleiben zu lassen.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und es [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workern

Der Worker, den wir gerade erstellt haben, war ein sogenannter _dedizierter Worker_. Das bedeutet, dass er von einer einzigen Skriptinstanz verwendet wird.

Es gibt jedoch auch andere Arten von Workern:

- [_Geteilte Worker_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten in verschiedenen Fenstern geteilt werden.
- [_Service Worker_](/de/docs/Web/API/Service_Worker_API) fungieren wie Proxy-Server, die Ressourcen zwischenspeichern, sodass Webanwendungen auch offline funktionieren können. Sie sind ein Schlüsselbestandteil von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Fazit

In diesem Artikel haben wir Web-Workers eingeführt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Hauptthread und der Worker teilen keine Variablen direkt, sondern kommunizieren durch das Senden von Nachrichten, die auf der anderen Seite als `message`-Ereignisse empfangen werden.

Workers können eine effektive Möglichkeit sein, die Hauptanwendung reaktionsfähig zu halten, obwohl sie nicht auf alle APIs zugreifen können, auf die die Hauptanwendung zugreifen kann, und insbesondere nicht auf das DOM zugreifen können.

## Siehe auch

- [Verwendung von Web-Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
