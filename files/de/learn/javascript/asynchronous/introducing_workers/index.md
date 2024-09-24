---
title: Einführung in Worker
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" stellen wir _Worker_ vor, die es Ihnen ermöglichen, einige Aufgaben in einem separaten {{Glossary("Thread", "Thread")}} der Ausführung auszuführen.

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
      <td>Verstehen, wie man Web-Worker verwendet.</td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine lang andauernde synchrone Aufgabe in Ihrem Programm haben — das gesamte Fenster wird völlig unresponsive. Grundsätzlich liegt der Grund dafür darin, dass das Programm _einzelnes Thread_ ist. Ein _Thread_ ist eine Folge von Anweisungen, denen ein Programm folgt. Da das Programm aus einem einzelnen Thread besteht, kann es nur eine Sache gleichzeitig tun: Wenn es also auf unseren lang andauernden synchronen Aufruf wartet, kann es nichts anderes tun.

Worker geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Verarbeitungen fortfahren können (z. B. das Verarbeiten von Benutzeraktionen).

Ein Anliegen bei all dem ist, dass wenn mehrere Threads auf dieselben geteilten Daten zugreifen können, es möglich ist, dass sie diese unabhängig und unerwartet (gegenüber dem anderen) verändern. Dies kann Fehler verursachen, die schwer zu finden sind.

Um diese Probleme im Web zu vermeiden, erhalten Ihr Hauptcode und Ihr Worker-Code niemals direkten Zugriff auf die Variablen des anderen und können nur in sehr spezifischen Fällen wirklich "Daten teilen". Worker und der Hauptcode laufen in völlig separaten Welten und interagieren nur, indem sie einander Nachrichten senden. Insbesondere bedeutet dies, dass Worker nicht auf das DOM zugreifen können (das Fenster, das Dokument, die Seitenelemente usw.).

Es gibt drei verschiedene Arten von Workern:

- dedizierte Worker
- geteilte Worker
- Service-Worker

In diesem Artikel gehen wir ein Beispiel für die erste Art von Worker durch und besprechen dann kurz die anderen beiden.

## Verwendung von Web-Workern

Erinnern Sie sich an den ersten Artikel, wo wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlenberechnung durchzuführen, sodass unsere Seite auf Benutzeraktionen ansprechbar bleibt.

### Der synchrone Primzahlerzeuger

Werfen wir zunächst einen weiteren Blick auf das JavaScript in unserem vorherigen Beispiel:

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

In diesem Programm wird das Programm vollständig unresponsive, nachdem wir `generatePrimes()` aufgerufen haben.

### Primzahlerzeugung mit einem Worker

Für dieses Beispiel beginnen Sie mit dem Erstellen einer lokalen Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start>. Es gibt vier Dateien in diesem Verzeichnis:

- index.html
- style.css
- main.js
- generate.js

Die Datei "index.html" und die Datei "style.css" sind bereits vollständig:

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

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode zu "main.js" hinzufügen und den Workercode zu "generate.js".

Zuerst können wir sehen, dass der Workercode in einem separaten Skript vom Hauptcode gehalten wird. Wir sehen auch, dass im obigen "index.html" nur der Hauptcode in einem `<script>`-Element enthalten ist.

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

- Zuerst erstellen wir den Worker mithilfe des {{domxref("Worker/Worker", "Worker()")}} Konstruktors. Wir übergeben ihm eine URL, die auf das Work-Skript zeigt. Sobald der Worker erstellt ist, wird das Work-Skript ausgeführt.

- Als Nächstes fügen wir, wie in der synchronen Version, einen `click` Ereignishandler zur Schaltfläche "Generate primes" hinzu. Anstatt jedoch die Funktion `generatePrimes()` aufzurufen, senden wir eine Nachricht an den Worker, indem wir {{domxref("Worker/postMessage", "worker.postMessage()")}} verwenden. Diese Nachricht kann ein Argument annehmen, und in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:

  - `command`: ein String, der identifiziert, was wir den Worker tun lassen möchten (für den Fall, dass unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Dann fügen wir einen `message` Ereignishandler für den Worker hinzu. Dies geschieht, damit der Worker uns mitteilen kann, wann er fertig ist, und uns resultierende Daten übergeben kann. Unser Handler nimmt die Daten aus der `data` Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau die gleichen wie `quota`, daher ist dies ein wenig sinnlos, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click` Ereignishandler für die Schaltfläche "Reload". Dies ist genau dasselbe wie in der synchronen Version.

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

Das erste, was der Worker macht, ist, auf Nachrichten vom Hauptskript zu hören. Er tut dies mithilfe von `addEventListener()`, das eine globale Funktion in einem Worker ist. Innerhalb des `message` Ereignishandlers enthält die `data` Eigenschaft des Ereignisses eine Kopie des Arguments, das vom Hauptskript übergeben wurde. Wenn das Hauptskript den Befehl `generate` übergeben hat, rufen wir `generatePrimes()` auf und übergeben den `quota` Wert aus dem Nachrichtenereignis.

Die Funktion `generatePrimes()` ist genauso wie die synchrone Version, außer dass wir anstelle eines Rückgabewerts eine Nachricht an das Hauptskript senden, wenn wir fertig sind. Wir verwenden die Funktion {{domxref("DedicatedWorkerGlobalScope/postMessage", "postMessage()")}} dafür, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und aktualisiert das DOM, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Seite auszuführen, müssen Sie einen lokalen Webserver betreiben, da file:// URLs nicht erlaubt sind, Worker zu laden. Siehe unseren Leitfaden zum [Aufsetzen eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server). Wenn das erledigt ist, sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite bleibt ansprechbar.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und sie [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workern

Der Worker, den wir gerade erstellt haben, war ein sogenannter _dedizierter Worker_. Das bedeutet, dass er von einer einzelnen Skriptinstanz verwendet wird.

Es gibt jedoch andere Arten von Workern:

- [_Geteilte Worker_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten in verschiedenen Fenstern geteilt werden.
- [_Service-Worker_](/de/docs/Web/API/Service_Worker_API) fungieren wie Proxy-Server und cachen Ressourcen, sodass Webanwendungen funktionieren können, wenn der Benutzer offline ist. Sie sind ein Schlüsselbestandteil von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Fazit

In diesem Artikel haben wir Web-Worker vorgestellt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Hauptthread und der Worker teilen keine Variablen direkt, sondern kommunizieren, indem sie Nachrichten senden, die von der anderen Seite als `message`-Ereignisse empfangen werden.

Worker können eine effektive Möglichkeit sein, die Hauptanwendung ansprechbar zu halten, obwohl sie nicht auf alle APIs zugreifen können, auf die die Hauptanwendung zugreifen kann, und insbesondere nicht auf das DOM zugreifen können.

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web-Worker-API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
