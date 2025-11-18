---
title: Einführung in Workers
slug: Learn_web_development/Extensions/Async_JS/Introducing_workers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}

In diesem letzten Artikel unseres Moduls "Asynchrones JavaScript" führen wir _Workers_ ein, die es Ihnen ermöglichen, einige Aufgaben in einem separaten {{Glossary("Thread", "Thread")}} auszuführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
         Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a> und asynchrone Konzepte, wie sie in den vorherigen Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man dedizierte Web-Workers verwendet und warum.</li>
          <li>Verstehen des Zwecks anderer Arten von Web-Workers, wie Shared- und Service-Worker.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Im ersten Artikel dieses Moduls haben wir gesehen, was passiert, wenn Sie eine lang laufende synchrone Aufgabe in Ihrem Programm haben — das gesamte Fenster wird völlig unresponsive. Grundsätzlich ist der Grund dafür, dass das Programm _einzelthreaded_ ist. Ein _Thread_ ist eine Abfolge von Anweisungen, denen ein Programm folgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache auf einmal tun: Wenn es also darauf wartet, dass unser lang laufender synchroner Aufruf zurückkommt, kann es nichts anderes tun.

Workers geben Ihnen die Möglichkeit, einige Aufgaben in einem anderen Thread auszuführen, sodass Sie die Aufgabe starten und dann mit anderen Prozessen (wie der Handhabung von Benutzeraktionen) fortfahren können.

Ein Anliegen bei all dem ist, dass wenn mehrere Threads Zugriff auf die gleichen geteilten Daten haben, sie diese unabhängig und unerwartet (in Bezug aufeinander) ändern können. Dies kann zu schwer auffindbaren Fehlern führen.

Um diese Probleme im Web zu vermeiden, bekommen Ihr Hauptcode und Ihr Workercode niemals direkten Zugriff auf die jeweiligen Variablen des anderen und können Daten nur in sehr spezifischen Fällen wirklich "teilen".
Workers und der Hauptcode laufen in völlig getrennten Welten und interagieren nur durch den Austausch von Nachrichten. Insbesondere bedeutet dies, dass Workers keinen Zugriff auf das DOM (das Fenster, das Dokument, Seitenelemente usw.) haben können.

Es gibt drei verschiedene Arten von Workers:

- dedizierte Workers
- Shared-Workers
- Service-Workers

In diesem Artikel werden wir ein Beispiel für die erste Art von Worker durchgehen und dann kurz die anderen beiden besprechen.

## Verwendung von Web-Workers

Erinnern Sie sich an den ersten Artikel, in dem wir eine Seite hatten, die Primzahlen berechnete? Wir werden einen Worker verwenden, um die Primzahlberechnung auszuführen, sodass unsere Seite für Benutzeraktionen reaktionsfähig bleibt.

### Der synchrone Primzahlengenerator

Werfen wir zuerst einen weiteren Blick auf das JavaScript in unserem vorherigen Beispiel:

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

In diesem Programm wird das Programm völlig unresponsive, nachdem wir `generatePrimes()` aufgerufen haben.

### Primzahlengenerierung mit einem Worker

Beginnen Sie für dieses Beispiel damit, eine lokale Kopie der Dateien unter <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start> zu erstellen. Es gibt vier Dateien in diesem Verzeichnis:

- index.html
- style.css
- main.js
- generate.js

Die Dateien "index.html" und "style.css" sind bereits abgeschlossen:

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

Die Dateien "main.js" und "generate.js" sind leer. Wir werden den Hauptcode in "main.js" hinzufügen und den Workercode zu "generate.js".

Zuerst können wir sehen, dass der Workercode in einem separaten Skript vom Hauptcode gehalten wird. Wir können außerdem sehen, dass nur der Hauptcode in einem `<script>`-Element enthalten ist, wie aus "index.html" oben ersichtlich ist.

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

- Zuerst erstellen wir den Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wir übergeben ihm eine URL, die auf das Worker-Skript zeigt. Sobald der Worker erstellt ist, wird das Worker-Skript ausgeführt.

- Als nächstes fügen wir, wie in der synchronen Version, einen `click`-Ereignishandler zum "Generate primes"-Button hinzu. Aber jetzt senden wir eine Nachricht an den Worker, anstatt eine `generatePrimes()`-Funktion aufzurufen, indem wir [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) verwenden. Diese Nachricht kann ein Argument annehmen, und in diesem Fall übergeben wir ein JSON-Objekt mit zwei Eigenschaften:
  - `command`: ein String, der das kennzeichnet, was wir den Worker tun lassen wollen (falls unser Worker mehr als eine Sache tun könnte)
  - `quota`: die Anzahl der zu generierenden Primzahlen.

- Als nächstes fügen wir einen `message`-Ereignishandler zum Worker hinzu. Dies ist so, dass der Worker uns mitteilen kann, wenn er fertig ist, und uns alle resultierenden Daten senden kann. Unser Handler nimmt die Daten aus der `data`-Eigenschaft der Nachricht und schreibt sie in das Ausgabeelement (die Daten sind genau die gleichen wie `quota`, also ist dies etwas sinnlos, aber es zeigt das Prinzip).

- Schließlich implementieren wir den `click`-Ereignishandler für den "Reload"-Button. Dies ist genau das gleiche wie in der synchronen Version.

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

Das erste, was der Worker tut, ist, das Lauschen auf Nachrichten vom Hauptskript zu starten. Er macht dies unter Verwendung von `addEventListener()`, das eine globale Funktion in einem Worker ist. Innerhalb des `message`-Ereignishandlers enthält die `data`-Eigenschaft des Ereignisses eine Kopie des vom Hauptskript übergebenen Arguments. Falls das Hauptskript den `generate`-Befehl übergibt, rufen wir `generatePrimes()` auf und übergeben den `quota`-Wert aus dem Message-Event.

Die `generatePrimes()`-Funktion ist genau wie die synchrone Version, außer dass wir anstelle eines Wertes eine Nachricht an das Hauptskript senden, wenn wir fertig sind. Wir verwenden dafür die [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Funktion, die wie `addEventListener()` eine globale Funktion in einem Worker ist. Wie wir bereits gesehen haben, hört das Hauptskript auf diese Nachricht und wird das DOM aktualisieren, wenn die Nachricht empfangen wird.

> [!NOTE]
> Um diese Seite auszuführen, müssen Sie einen lokalen Webserver starten, da file:// URLs nicht erlaubt sind, um Workers zu laden. Siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), um herauszufinden, wie das geht. Danach sollten Sie in der Lage sein, auf "Generate primes" zu klicken und Ihre Hauptseite bleibt reaktionsfähig.
>
> Wenn Sie Probleme beim Erstellen oder Ausführen des Beispiels haben, können Sie die [fertige Version](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/finished) überprüfen und sie [live ausprobieren](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished/).

## Andere Arten von Workers

Der gerade erstellte Worker ist ein sogenannter _dedizierter Worker_. Das bedeutet, dass er von einer einzigen Skriptinstanz verwendet wird.

Es gibt jedoch andere Arten von Workers:

- [_Shared Workers_](/de/docs/Web/API/SharedWorker) können von mehreren verschiedenen Skripten, die in verschiedenen Fenstern ausgeführt werden, geteilt werden.
- [_Service Workers_](/de/docs/Web/API/Service_Worker_API) fungieren als Proxy-Server, die Ressourcen zwischenspeichern, damit Webanwendungen auch funktionieren können, wenn der Benutzer offline ist. Sie sind eine Schlüsselkomponente von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps).

## Zusammenfassung

In diesem Artikel haben wir Web-Workers eingeführt, die es einer Webanwendung ermöglichen, Aufgaben an einen separaten Thread auszulagern. Der Hauptthread und der Worker teilen keine Variablen direkt, sondern kommunizieren, indem sie Nachrichten senden, die von der anderen Seite als `message`-Ereignisse empfangen werden.

Workers können eine effektive Möglichkeit sein, die Hauptanwendung reaktionsfähig zu halten, obwohl sie nicht auf alle APIs zugreifen können, auf die die Hauptanwendung zugreifen kann, insbesondere nicht auf das DOM.

## Siehe auch

- [Verwendung von Web-Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Verwendung von Service-Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web-Workers API](/de/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API", "Learn_web_development/Extensions/Async_JS/Sequencing_animations", "Learn_web_development/Extensions/Async_JS")}}
