---
title: Einführung in Workers
slug: Learn_web_development/Extensions/Async_JS/Introducing_workers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" führen wir _Workers_ ein, die es ermöglichen, einige Aufgaben in einem separaten {{Glossary("Thread", "thread")}} auszuführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein fundiertes Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchrone Konzepte, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man dedizierte Web-Worker verwendet und warum.</li>
          <li>Den Zweck anderer Arten von Web-Workern, wie Shared und Service Worker, verstehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine langlaufende synchrone Aufgabe in Ihrem Programm haben – das gesamte Fenster wird völlig unresponsive. Grundsätzlich liegt der Grund darin, dass das Programm _einsträngig_ ist. Ein _Thread_ ist eine Abfolge von Anweisungen, denen ein Programm folgt. Da das Programm nur aus einem Thread besteht, kann es nur eine Sache zu einer Zeit tun: Wenn es also auf unsere langlaufende synchrone Rückgabe wartet, kann es nichts anderes tun.

Workers geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderer Verarbeitung (wie der Handhabung von Benutzeraktionen) fortfahren können.

Eine der Bedenken hierbei ist, dass wenn mehrere Threads Zugriff auf die gleichen gemeinsamen Daten haben können, es möglich ist, dass sie diese unabhängig und unerwartet (voneinander) ändern können. Dies kann schwer auffindbare Fehler verursachen.

Um diese Probleme im Web zu vermeiden, erhalten Ihr Hauptcode und Ihr Worker-Code nie direkten Zugriff auf die Variablen des jeweils anderen und können Daten nur in sehr spezifischen Fällen „teilen“. Worker und der Hauptcode laufen in völlig getrennten Welten und interagieren nur, indem sie einander Nachrichten senden. Insbesondere bedeutet dies, dass Worker nicht auf den DOM zugreifen können (das Fenster, das Dokument, die Seitenelemente und so weiter).

Es gibt drei verschiedene Arten von Workern:

- dedizierte Worker
- Shared Worker
- Service Worker

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann kurz die anderen beiden besprechen.

## Verwendung von Web-Workern

Erinnern Sie sich an den ersten Artikel, in dem wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlberechnung auszuführen, damit unsere Seite für Benutzeraktionen reaktionsfähig bleibt.

### Der synchrone Prime-Generator

Lassen Sie uns zunächst einen weiteren Blick auf das JavaScript in unserem vorherigen Beispiel werfen:

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

In diesem Programm wird das Programm vollständig unresponsive, nachdem wir `generatePrimes()` aufrufen.

### Primzahlenerzeugung mit einem Worker

Für dieses Beispiel beginnen Sie mit dem Erstellen einer lokalen Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start>. Es gibt vier Dateien in diesem Verzeichnis:

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

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode zu "main.js" hinzufügen und den Worker-Code zu "generate.js".

Zuerst können wir sehen, dass der Worker-Code in einem separaten Skript vom Hauptcode gehalten wird. Wir können auch sehen, dass, wie wir oben in "index.html" sehen, nur der Hauptcode in einem `<script>`-Element enthalten ist.

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

- Zuerst erstellen wir den Worker mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktors. Wir übergeben ihm eine URL, die auf das Worker-Skript zeigt. Sobald der Worker erstellt ist, wird das Worker-Skript ausgeführt.

- Als nächstes fügen wir, wie in der synchronen Version, einen `click`-Event-Handler zur Schaltfläche „Primzahlen generieren“ hinzu. Aber jetzt senden wir anstatt einer `generatePrimes()`-Funktion einen Befehl an den Worker mithilfe von [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage). Diese Nachricht kann ein Argument erhalten, und in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:

  - `command`: Ein String, der angibt, was wir möchten, dass der Worker tut (falls unser Worker mehr als eine Sache tun könnte)
  - `quota`: Die Anzahl der zu generierenden Primzahlen.

- Danach fügen wir einen `message`-Event-Handler für den Worker hinzu. Damit kann uns der Worker mitteilen, wann er fertig ist und uns alle resultierenden Daten übergeben. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabe-Element (die Daten sind genau die gleichen wie `quota`, daher ist dies ein wenig sinnlos, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Event-Handler für die "Aktualisieren"-Taste. Das ist genau das gleiche wie in der synchronen Version.

Nun für den Worker-Code. Kopieren Sie den folgenden Code in "generate.js":

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

Das Erste, was der Worker tut, ist, auf Nachrichten vom Hauptskript zu hören. Dies geschieht mithilfe von `addEventListener()`, einer globalen Funktion in einem Worker. Innerhalb des `message`-Event-Handlers enthält die `data`-Eigenschaft des Events eine Kopie des Arguments, das vom Hauptskript übergeben wurde. Wenn das Hauptskript den Befehl `generate` übergeben hat, rufen wir `generatePrimes()` auf und übergeben dabei den `quota`-Wert aus dem Nachrichtenereignis.

Die Funktion `generatePrimes()` ist wie die synchrone Version, außer dass wir anstatt einen Wert zurückzugeben, eine Nachricht an das Hauptskript senden, wenn wir fertig sind. Wir verwenden die Funktion [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) dafür, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und wird den DOM aktualisieren, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Seite auszuführen, müssen Sie einen lokalen Webserver betreiben, da file:// URLS nicht erlaubt sind, um Worker zu laden. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), um zu erfahren wie. Danach sollten Sie in der Lage sein, auf „Primzahlen generieren“ zu klicken und Ihre Hauptseite reaktionsfähig zu halten.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und es [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workern

Der von uns gerade erstellte Worker war ein sogenannter _dedizierter Worker_. Das bedeutet, dass er von einer einzelnen Skriptinstanz verwendet wird.

Es gibt jedoch andere Arten von Workern:

- [_Shared Worker_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten genutzt werden, die in verschiedenen Fenstern laufen.
- [_Service Worker_](/de/docs/Web/API/Service_Worker_API) fungieren wie Proxy-Server und cachen Ressourcen, damit Webanwendungen funktionieren können, wenn der Benutzer offline ist. Sie sind ein Schlüsselelement von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Zusammenfassung

In diesem Artikel haben wir Web-Worker eingeführt, die es einer Webanwendung ermöglichen, Aufgaben auf einen separaten Thread auszulagern. Der Hauptthread und der Worker teilen keine Variablen direkt, sondern kommunizieren durch das Senden von Nachrichten, die von der jeweils anderen Seite als `message`-Events empfangen werden.

Worker können eine effektive Möglichkeit sein, um die Hauptanwendung reaktionsfähig zu halten, obwohl sie nicht auf alle APIs zugreifen können, die die Hauptanwendung kann, und insbesondere nicht auf den DOM.

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web-Worker API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}
