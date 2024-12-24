---
title: Einführung in Worker
slug: Learn_web_development/Extensions/Async_JS/Introducing_workers
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" stellen wir _Worker_ vor, die es Ihnen ermöglichen, einige Aufgaben in einem separaten {{Glossary("Thread", "Thread")}} auszuführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchroner Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von dedizierten Web-Workern und deren Vorteile verstehen.</li>
          <li>Den Zweck anderer Arten von Web-Workern verstehen, wie z. B. Shared- und Service-Worker.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn ein lang andauernder synchroner Task in Ihrem Programm ausgeführt wird – das gesamte Fenster wird völlig unresponsiv. Grundsätzlich liegt dies daran, dass das Programm _single-threaded_ ist. Ein _Thread_ ist eine Reihenfolge von Anweisungen, die ein Programm ausführt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache gleichzeitig tun: Wenn es also darauf wartet, dass unser lang andauernder synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Worker bieten Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Prozessen (wie etwa der Bearbeitung von Benutzeraktionen) fortfahren können.

Ein Bedenken bei all dem ist, dass wenn mehrere Threads auf die gleichen freigegebenen Daten zugreifen können, es möglich ist, dass sie diese unabhängig und unerwartet (in Bezug auf einander) ändern. Dies kann Fehler verursachen, die schwer zu finden sind.

Um diese Probleme im Web zu vermeiden, erhalten Ihr Hauptcode und Ihr Worker-Code niemals direkten Zugriff auf die Variablen des anderen und können Daten nur in sehr spezifischen Fällen "teilen". Worker und der Hauptcode laufen in völlig getrennten Welten und interagieren nur, indem sie einander Nachrichten senden. Insbesondere bedeutet dies, dass Worker nicht auf das DOM (das Fenster, das Dokument, Seitenelemente usw.) zugreifen können.

Es gibt drei verschiedene Arten von Workern:

- dedizierte Worker
- Shared Worker
- Service Worker

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann kurz die anderen beiden besprechen.

## Verwendung von Web-Workern

Erinnern Sie sich an den ersten Artikel, wo wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Berechnung der Primzahlen durchzuführen, damit unsere Seite auf Benutzeraktionen ansprechbar bleibt.

### Der synchrone Primzahlengenerator

Werfen wir zunächst noch einmal einen Blick auf das JavaScript in unserem vorherigen Beispiel:

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

In diesem Programm wird das Programm völlig unresponsive, nachdem wir `generatePrimes()` aufrufen.

### Primzahlengenerierung mit einem Worker

Für dieses Beispiel beginnen Sie damit, eine lokale Kopie der Dateien von <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start> zu erstellen. In diesem Verzeichnis befinden sich vier Dateien:

- index.html
- style.css
- main.js
- generate.js

Die "index.html"- und die "style.css"-Dateien sind bereits vollständig:

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

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode in "main.js" hinzufügen und den Workercode in "generate.js".

Zuerst können wir sehen, dass der Workercode in einem separaten Skript vom Hauptcode gehalten wird. Wir können auch sehen, dass aus "index.html" oben nur der Hauptcode in einem `<script>`-Element enthalten ist.

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

- Zuerst erstellen wir den Worker mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Wir übergeben eine URL, die auf das Workerkonzept verweist. Sobald der Worker erstellt wird, wird das Workerskript ausgeführt.

- Als Nächstes fügen wir, wie in der synchronen Version, einen `click`-Event-Handler zur Schaltfläche "Generate primes" hinzu. Jetzt senden wir jedoch anstelle eines Aufrufs einer `generatePrimes()`-Funktion eine Nachricht an den Worker mithilfe von [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage). Diese Nachricht kann ein Argument annehmen, und in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:

  - `command`: ein Zeichenfolge, die das Ding identifiziert, das wir möchten, dass der Worker es tut (falls unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Als Nächstes fügen wir dem Worker einen `message`-Event-Handler hinzu. Dies dient dazu, dass der Worker uns mitteilen kann, wann er fertig ist und gegebenenfalls resultierende Daten übermitteln kann. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau die gleichen wie `quota`, also ist dies ein wenig sinnlos, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Event-Handler für die Schaltfläche "Reload". Dies ist genau das Gleiche wie in der synchronen Version.

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

Das erste, was der Worker tut, ist, auf Nachrichten aus dem Hauptskript zu hören. Er tut dies mit `addEventListener()`, das eine globale Funktion in einem Worker ist. Innerhalb des `message`-Event-Handlers enthält die `data`-Eigenschaft des Events eine Kopie des Arguments, das vom Hauptskript übergeben wurde. Wenn das Hauptskript den `generate`-Befehl übergeben hat, rufen wir `generatePrimes()` auf und übergeben den `quota`-Wert aus dem Nachrichten-Event.

Die `generatePrimes()`-Funktion ist genau wie die synchrone Version, außer dass sie nicht einen Wert zurückgibt, sondern eine Nachricht an das Hauptskript sendet, wenn sie fertig ist. Wir verwenden die [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Funktion dafür, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und wird das DOM aktualisieren, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Seite auszuführen, müssen Sie einen lokalen Webserver betreiben, da file:// URLs nicht erlaubt sind, um Worker zu laden. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), um herauszufinden, wie. Mit dem erledigten sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite bleibt responsive.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und sie [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workern

Der von uns gerade erstellte Worker war ein sogenannter _dedizierter Worker_. Das bedeutet, dass es von einer einzigen Skriptinstanz verwendet wird.

Es gibt jedoch andere Arten von Workern:

- [_Shared Worker_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten, die in unterschiedlichen Fenstern laufen, geteilt werden.
- [_Service Worker_](/de/docs/Web/API/Service_Worker_API) handeln wie Proxy-Server und cachen Ressourcen, damit Webanwendungen funktionieren können, wenn der Benutzer offline ist. Sie sind ein Schlüsselbaustein von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Zusammenfassung

In diesem Artikel haben wir Web-Worker vorgestellt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Haupt-Thread und der Worker teilen keine Variablen direkt, sondern kommunizieren, indem sie Nachrichten senden, die als `message`-Events von der anderen Seite empfangen werden.

Worker können eine effektive Möglichkeit sein, um die Hauptanwendung ansprechbar zu halten, obwohl sie nicht auf alle APIs zugreifen können, die die Hauptanwendung kann, und insbesondere nicht auf das DOM zugreifen können.

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}
