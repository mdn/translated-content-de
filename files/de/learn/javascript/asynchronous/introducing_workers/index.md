---
title: Einführung in Workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

In diesem abschließenden Artikel unseres Moduls "Asynchrones JavaScript" stellen wir _Workers_ vor, die es Ihnen ermöglichen, einige Aufgaben in einem separaten {{Glossary("Thread", "Thread")}} auszuführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein gutes Verständnis der JavaScript-Grundlagen, einschließlich Ereignisbehandlung.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Web Workers verwendet.</td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine lang andauernde synchrone Aufgabe in Ihrem Programm haben – das gesamte Fenster wird völlig unresponsiv. Grundsätzlich liegt der Grund dafür darin, dass das Programm _einzelthreadig_ ist. Ein _Thread_ ist eine Abfolge von Anweisungen, denen ein Programm folgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache auf einmal erledigen: Wenn es also darauf wartet, dass unser lang andauernder synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Workers geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Verarbeitungen (wie der Bearbeitung von Benutzeraktionen) fortfahren können.

Ein Problem dabei ist, dass wenn mehrere Threads auf die gleichen geteilten Daten zugreifen können, sie diese unabhängig und unerwartet (in Bezug aufeinander) ändern könnten. Dies kann zu schwer zu findenden Fehlern führen.

Um diese Probleme im Web zu vermeiden, erhalten Ihr Hauptcode und Ihr Worker-Code niemals direkten Zugriff auf die Variablen des jeweils anderen und können Daten nur in sehr spezifischen Fällen tatsächlich "teilen". Workers und der Hauptcode laufen in völlig getrennten Welten und interagieren nur, indem sie sich gegenseitig Nachrichten senden. Insbesondere bedeutet dies, dass Workers nicht auf das DOM (das Fenster, Dokument, Seitenelemente und so weiter) zugreifen können.

Es gibt drei verschiedene Arten von Workers:

- dedizierte Workers
- shared Workers
- Service Workers

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann kurz die anderen beiden besprechen.

## Verwendung von Web Workers

Erinnern Sie sich an den ersten Artikel, in dem wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlberechnung auszuführen, damit unsere Seite auf Benutzeraktionen reagiert bleibt.

### Der synchrone Primzahlen-Generator

Lassen Sie uns zunächst noch einmal den JavaScript-Code in unserem vorherigen Beispiel betrachten:

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

In diesem Programm wird das Programm nach dem Aufruf von `generatePrimes()` völlig unresponsiv.

### Primzahlengenerierung mit einem Worker

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

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode in "main.js" und den Worker-Code in "generate.js" hinzufügen.

Zuerst ist zu sehen, dass der Worker-Code in einem separaten Skript vom Hauptcode aufbewahrt wird. Es ist auch zu erkennen, dass, wie in "index.html" oben zu sehen ist, nur der Hauptcode in einem `<script>`-Element enthalten ist.

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

- Zuerst erstellen wir den Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor. Wir übergeben ihm eine URL, die auf das Worker-Skript zeigt. Sobald der Worker erstellt ist, wird das Worker-Skript ausgeführt.

- Als nächstes fügen wir, wie in der synchronen Version, einen `click`-Ereignishandler für die Schaltfläche "Generate primes" hinzu. Aber jetzt senden wir statt eines Aufrufs der `generatePrimes()`-Funktion eine Nachricht an den Worker mit [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage). Diese Nachricht kann ein Argument annehmen, und in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:

  - `command`: ein String, der das identifiziert, was wir den Worker tun lassen möchten (falls unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Als nächstes fügen wir einen `message`-Ereignishandler zum Worker hinzu. Dies dient dazu, dass der Worker uns mitteilen kann, wenn er fertig ist, und uns die resultierenden Daten übergeben kann. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau die gleichen wie `quota`, daher ist das ein bisschen sinnlos, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Ereignishandler für die Schaltfläche "Reload". Dies ist genau das gleiche wie in der synchronen Version.

Nun zum Worker-Code. Kopieren Sie den folgenden Code in "generate.js":

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

Das Erste, was der Worker tut, ist, auf Nachrichten vom Hauptskript zu lauschen. Es benutzt dafür `addEventListener()`, was eine globale Funktion in einem Worker ist. Innerhalb des `message`-Ereignishandlers enthält die `data`-Eigenschaft des Ereignisses eine Kopie des Arguments, das vom Hauptskript übergeben wurde. Wenn das Hauptskript den `generate`-Befehl übergeben hat, rufen wir `generatePrimes()` auf und übergeben den `quota`-Wert aus dem Nachrichtenereignis.

Die `generatePrimes()`-Funktion ist genau wie die synchrone Version, außer dass wir anstatt einen Wert zurückzugeben, eine Nachricht an das Hauptskript senden, wenn wir fertig sind. Wir benutzen dazu die [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) Funktion, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, lauscht das Hauptskript auf diese Nachricht und aktualisiert das DOM, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Website auszuführen, müssen Sie einen lokalen Webserver betreiben, da file:// URLs nicht erlaubt sind, um Workers zu laden. Siehe unseren Leitfaden zum [Einrichten eines lokalen Testservers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server). Wenn das erledigt ist, sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite reaktionsfähig zu halten.
>
> Wenn Sie Probleme haben, das Beispiel zu erstellen oder auszuführen, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und es [live](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/) ausprobieren.

## Andere Arten von Workers

Der Worker, den wir gerade erstellt haben, wird als _dedizierter Worker_ bezeichnet. Das bedeutet, dass er von einer einzelnen Skriptinstanz verwendet wird.

Es gibt jedoch auch andere Arten von Workers:

- [_Shared Workers_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten verwendet werden, die in verschiedenen Fenstern ausgeführt werden.
- [_Service Workers_](/de/docs/Web/API/Service_Worker_API) fungieren als Proxy-Server und cachen Ressourcen, sodass Webanwendungen funktionieren, wenn der Benutzer offline ist. Sie sind ein Schlüsselelement von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Fazit

In diesem Artikel haben wir Web Workers eingeführt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Haupt-Thread und der Worker teilen keine Variablen direkt, sondern kommunizieren, indem sie Nachrichten senden, die von der anderen Seite als `message`-Ereignisse empfangen werden.

Workers können eine effektive Methode sein, um die Hauptanwendung reaktionsfähig zu halten, obwohl sie nicht auf alle APIs zugreifen können, auf die die Hauptanwendung zugreifen kann, und insbesondere nicht auf das DOM zugreifen können.

## Siehe auch

- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
