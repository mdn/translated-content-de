---
title: Einführung in Worker
slug: Learn_web_development/Extensions/Async_JS/Introducing_workers
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" werden wir _Worker_ einführen, mit denen Sie einige Aufgaben in einem separaten {{Glossary("Thread", "Thread")}} ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchrone Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man dedizierte Web-Worker verwendet und warum.</li>
          <li>Das Verständnis des Zwecks anderer Arten von Web-Workern, wie Shared-Worker und Service-Worker.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine lang andauernde synchrone Aufgabe in Ihrem Programm haben – das gesamte Fenster wird völlig unempfindlich. Grundsätzlich liegt der Grund dafür darin, dass das Programm _einzelsträngig_ ist. Ein _Thread_ ist eine Abfolge von Anweisungen, die ein Programm befolgt. Da das Programm aus einem einzigen Thread besteht, kann es jeweils nur eine Sache tun: Wenn es also auf unseren lang andauernden synchronen Aufruf wartet, kann es nichts anderes tun.

Worker geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Prozessen fortfahren können (wie der Handhabung von Benutzeraktionen).

Ein Problem hierbei ist, dass, wenn mehrere Threads auf die gleichen gemeinsamen Daten zugreifen können, sie diese unabhängig und unerwartet (in Bezug auf einander) ändern können. Dies kann schwer zu findende Fehler verursachen.

Um diese Probleme im Web zu vermeiden, haben Ihr Hauptcode und Ihr Workercode niemals direkten Zugang zu den Variablen des anderen und können Daten nur in sehr speziellen Fällen wirklich "teilen". Worker und Hauptcode laufen in völlig getrennten Welten und interagieren nur, indem sie sich gegenseitig Nachrichten senden. Insbesondere bedeutet dies, dass Worker nicht auf das DOM zugreifen können (das Fenster, das Dokument, die Seitenelemente und so weiter).

Es gibt drei verschiedene Arten von Workern:

- dedizierte Worker
- Shared-Worker
- Service-Worker

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann kurz die anderen beiden besprechen.

## Verwendung von Web-Workern

Erinnern Sie sich an den ersten Artikel, in dem wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlenberechnung auszuführen, damit unsere Seite auf Benutzeraktionen reagieren kann.

### Der synchrone Primzahlengenerator

Lassen Sie uns zuerst einen Blick auf das JavaScript in unserem vorherigen Beispiel werfen:

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

In diesem Programm wird das Programm vollständig unempfindlich, nachdem wir `generatePrimes()` aufgerufen haben.

### Primzahlengenerierung mit einem Worker

Für dieses Beispiel erstellen Sie zunächst eine lokale Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start>. In diesem Verzeichnis befinden sich vier Dateien:

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

Zunächst können wir sehen, dass der Workercode in einem separaten Skript vom Hauptcode gehalten wird. Wir können auch sehen, dass im obigen "index.html" nur der Hauptcode in ein `<script>`-Element aufgenommen wird.

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

- Zuerst erstellen wir den Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wir übergeben ihm eine URL, die auf das Workerkonzept zeigt. Sobald der Worker erstellt ist, wird das Workerkonzept ausgeführt.

- Danach, wie in der synchronen Version, fügen wir einen `click`-Ereignis-Handler zur Schaltfläche "Generate primes" hinzu. Aber jetzt senden wir anstelle eines Aufrufs einer `generatePrimes()`-Funktion eine Nachricht an den Worker mit `worker.postMessage()`. Diese Nachricht kann ein Argument annehmen, und in diesem Fall übergeben wir ein JSON-Objekt, das zwei Eigenschaften enthält:

  - `command`: ein String, der identifiziert, was der Worker tun soll (falls unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Dann fügen wir einen `message`-Ereignis-Handler zum Worker hinzu. Dies ist so, dass der Worker uns mitteilen kann, wenn er fertig ist, und uns alle resultierenden Daten übermitteln kann. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau dieselben wie `quota`, was ein bisschen sinnlos ist, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Ereignis-Handler für die Schaltfläche "Reload". Dies ist genau die gleiche wie in der synchronen Version.

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

Das erste, was der Worker tut, ist das Lauschen auf Nachrichten vom Hauptskript. Er tut dies mit `addEventListener()`, das eine globale Funktion in einem Worker ist. Im `message`-Ereignis-Handler enthält die `data`-Eigenschaft des Ereignisses eine Kopie des vom Hauptskript übergebenen Arguments. Wenn das Hauptskript den `generate`-Befehl übermittelt hat, rufen wir `generatePrimes()` auf und übergeben den `quota`-Wert vom Nachrichtenereignis.

Die Funktion `generatePrimes()` ist genau wie die synchrone Version, außer dass anstatt eines Rückgabewertes eine Nachricht an das Hauptskript gesendet wird, wenn wir fertig sind. Wir verwenden die [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Funktion dafür, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und aktualisiert das DOM, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Seite auszuführen, müssen Sie einen lokalen Webserver starten, da file:// URLs nicht zugelassen sind, um Worker zu laden. Sehen Sie [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), um herauszufinden, wie es geht. Damit sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite reaktionsfähig zu halten.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und es [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workern

Der von uns gerade erstellte Worker war ein sogenannter _dedizierter Worker_. Das bedeutet, dass er von einem einzelnen Skript-Instanz verwendet wird.

Es gibt jedoch andere Arten von Workern:

- [_Shared-Worker_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten verwendet werden, die in verschiedenen Fenstern ausgeführt werden.
- [_Service-Worker_](/de/docs/Web/API/Service_Worker_API) agieren wie Proxy-Server und cachen Ressourcen, sodass Webanwendungen auch dann funktionieren können, wenn der Benutzer offline ist. Sie sind eine zentrale Komponente von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Zusammenfassung

In diesem Artikel haben wir Web-Worker eingeführt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Hauptthread und der Worker teilen direkt keine Variablen, kommunizieren jedoch durch das Senden von Nachrichten, die auf der anderen Seite als `message`-Ereignisse empfangen werden.

Worker können eine effektive Möglichkeit sein, um die Hauptanwendung reaktionsfähig zu halten, auch wenn sie nicht auf alle APIs zugreifen können, die die Hauptanwendung kann, und insbesondere keinen Zugriff auf das DOM haben.

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}
