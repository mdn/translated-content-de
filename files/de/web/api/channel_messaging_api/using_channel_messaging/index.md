---
title: Verwendung der Kanalnachrichtenübermittlung
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) ermöglicht es zwei separaten Skripten, die in unterschiedlichen Browsing-Kontexten ausgeführt werden und an dasselbe Dokument angehängt sind (z.B. zwei {{HTMLElement("iframe")}}-Elemente, das Hauptdokument und ein einzelnes {{HTMLElement("iframe")}}, oder zwei Dokumente über einen [`SharedWorker`](/de/docs/Web/API/SharedWorker)), direkt zu kommunizieren. Sie können Nachrichten über Kanäle in beide Richtungen (oder Pipes) mit einem Port an jedem Ende austauschen.

In diesem Artikel werden wir die Grundlagen der Verwendung dieser Technologie untersuchen.

## Anwendungsfälle

Kanalnachrichtenübermittlung ist hauptsächlich nützlich in Fällen, in denen Sie eine soziale Seite haben, die Fähigkeiten von anderen Seiten in ihre Hauptschnittstelle via IFrame einbettet, wie Spiele, Adressbücher oder ein Audioplayer mit personalisierten Musikauswahlen. Wenn diese als eigenständige Einheiten agieren, ist das in Ordnung, aber die Schwierigkeit entsteht, wenn Sie eine Interaktion zwischen der Hauptseite und den {{HTMLElement("iframe")}}-Elementen oder zwischen verschiedenen {{HTMLElement("iframe")}}-Elementen wünschen. Zum Beispiel, was wäre, wenn Sie einen Kontakt aus dem Adressbuch auf der Hauptseite hinzufügen, hohe Punktzahlen aus Ihrem Spiel in Ihr Hauptprofil übernehmen oder neue Hintergrundmusikoptionen vom Audioplayer ins Spiel hinzufügen möchten? Solche Dinge sind mit herkömmlicher Webtechnologie nicht so einfach, aufgrund der Sicherheitsmodelle, die das Web verwendet. Sie müssen darüber nachdenken, ob die Ursprünge einander vertrauen und wie die Nachrichten übermittelt werden.

Nachrichtkanäle hingegen können einen sicheren Kanal bereitstellen, mit dem Sie Daten zwischen unterschiedlichen Browsing-Kontexten übermitteln können.

> [!NOTE]
> Für weitere Informationen und Ideen ist der Abschnitt [Ports as the basis of an object-capability model on the Web](https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web) der Spezifikation eine nützliche Lektüre.

## Einfache Beispiele

Um Ihnen den Einstieg zu erleichtern, haben wir ein paar Demos auf GitHub veröffentlicht. Schauen Sie sich zuerst unsere [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) ([führen Sie sie auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)) an, die eine wirklich einfache Einzelübertragung von Nachrichten zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.

Zweitens werfen Sie einen Blick auf unsere [multimessaging demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) ([führen Sie diese live aus](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), die eine etwas komplexere Einrichtung zeigt, die mehrere Nachrichten zwischen der Hauptseite und einem IFrame senden kann.

Wir konzentrieren uns in diesem Artikel auf das letztgenannte Beispiel, das folgendermaßen aussieht:

![Demo mit "Hello this is my demo", gesendet als fünf separate Nachrichten. Die Nachrichten werden als Aufzählungsliste angezeigt.](channel-messaging-demo.png)

## Erstellen des Kanals

Auf der Hauptseite des Demos haben wir ein einfaches Formular mit einem Texteingabefeld für Nachrichten, die an ein {{htmlelement("iframe")}} gesendet werden sollen. Wir haben auch einen Absatz, den wir später verwenden werden, um Bestätigungsnachrichten anzuzeigen, die wir vom {{htmlelement("iframe")}} zurückerhalten.

```js
const input = document.getElementById("message-input");
const output = document.getElementById("message-output");
const button = document.querySelector("button");
const iframe = document.querySelector("iframe");

const channel = new MessageChannel();
const port1 = channel.port1;

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for button clicks
  button.addEventListener("click", onClick);

  // Listen for messages on port1
  port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage("init", "*", [channel.port2]);
}

// Post a message on port1 when the button is clicked
function onClick(e) {
  e.preventDefault();
  port1.postMessage(input.value);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

Wir beginnen damit, einen neuen Nachrichtenkanal mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor zu erstellen.

Wenn das IFrame geladen ist, registrieren wir einen `onclick`-Handler für unseren Button und einen `onmessage`-Handler für [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1). Schließlich übertragen wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame mit der [`window.postMessage`](/de/docs/Web/API/Window/postMessage)-Methode.

Lassen Sie uns genauer untersuchen, wie die Zeile `iframe.contentWindow.postMessage` funktioniert. Sie nimmt drei Argumente:

1. Die zu sendende Nachricht. Für diese anfängliche Portübertragung könnte diese Nachricht eine leere Zeichenfolge sein, aber in diesem Beispiel wird sie auf `'init'` gesetzt.
2. Der Ursprung, an den die Nachricht gesendet werden soll. `*` bedeutet "jeder Ursprung".
3. Ein Objekt, dessen Eigentum an den empfangenden Browsing-Kontext übertragen wird. In diesem Fall übertragen wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame, damit es zur Kommunikation mit der Hauptseite verwendet werden kann.

Wenn unser Button geklickt wird, verhindern wir, dass das Formular wie gewohnt abgesendet wird, und senden dann den im Texteingabefeld eingegebenen Wert über den [`MessageChannel`](/de/docs/Web/API/MessageChannel) an das IFrame.

## Empfang des Ports und der Nachricht im IFrame

In den {{HTMLElement("iframe")}}-Elementen haben wir folgendes JavaScript:

```js
const list = document.querySelector("ul");
let port2;

// Listen for the initial port transfer message
window.addEventListener("message", initPort);

// Setup the transferred port
function initPort(e) {
  port2 = e.ports[0];
  port2.onmessage = onMessage;
}

// Handle messages received on port2
function onMessage(e) {
  const listItem = document.createElement("li");
  listItem.textContent = e.data;
  list.appendChild(listItem);
  port2.postMessage(`Message received by IFrame: "${e.data}"`);
}
```

Wenn die anfängliche Nachricht von der Hauptseite über die [`window.postMessage`](/de/docs/Web/API/Window/postMessage)-Methode empfangen wird, führen wir die Funktion `initPort` aus. Diese speichert den übertragenen Port und registriert einen `onmessage`-Handler, der jedes Mal aufgerufen wird, wenn eine Nachricht durch unseren [`MessageChannel`](/de/docs/Web/API/MessageChannel) übergeben wird.

Wenn eine Nachricht von der Hauptseite empfangen wird, erstellen wir ein Listenelement und fügen es in die ungeordnete Liste ein, wobei wir die [`textContent`](/de/docs/Web/API/Node/textContent) des Listenelements auf das `data`-Attribut des Ereignisses (dies enthält die eigentliche Nachricht) setzen.

Anschließend senden wir eine Bestätigungsnachricht zurück an die Hauptseite über den Nachrichtenkanal, indem wir [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) auf [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) aufrufen, das ursprünglich an das IFrame übertragen wurde.

## Empfang der Bestätigung auf der Hauptseite

Zurück zur Hauptseite, lassen Sie uns nun die `onmessage`-Handler-Funktion betrachten.

```js
// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

Wenn eine Nachricht von dem IFrame zurückerhalten wird, die bestätigt, dass die ursprüngliche Nachricht erfolgreich empfangen wurde, gibt dies die Bestätigung an einen Absatz aus und leert das Texteingabefeld, um bereit für die nächste zu sendende Nachricht zu sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
