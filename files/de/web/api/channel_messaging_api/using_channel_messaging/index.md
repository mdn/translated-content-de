---
title: Verwendung von Kanalnachrichten
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) ermöglicht es, zwei separate Skripte, die in verschiedenen Browserkontexten ausgeführt werden und mit demselben Dokument verbunden sind (z.B. zwei {{HTMLElement("iframe")}}-Elemente, das Hauptdokument und ein einzelnes {{HTMLElement("iframe")}}, oder zwei Dokumente über einen [`SharedWorker`](/de/docs/Web/API/SharedWorker)), direkt zu kommunizieren. Nachrichten können durch Zweikanäle (oder Rohre) mit einem Port an jedem Ende zwischen ihnen ausgetauscht werden.

In diesem Artikel werden wir die Grundlagen der Nutzung dieser Technologie erläutern.

## Anwendungsfälle

Kanalnachrichten sind vor allem nützlich in Fällen, in denen Sie eine soziale Seite haben, die Funktionen anderer Seiten über iframes in ihre Hauptschnittstelle einbettet, wie z.B. Spiele, Adressbücher oder ein Audioplayer mit personalisierten Musikwahlen. Wenn diese als eigenständige Einheiten agieren, ist alles in Ordnung, aber die Schwierigkeit entsteht, wenn Sie Interaktionen zwischen der Hauptseite und den {{HTMLElement("iframe")}}-Elementen oder zwischen verschiedenen {{HTMLElement("iframe")}}-Elementen wünschen. Zum Beispiel, was wäre, wenn Sie einen Kontakt vom Hauptseite zum Adressbuch hinzufügen, die Highscores Ihres Spiels zu Ihrem Hauptprofil hinzufügen oder neue Hintergrundmusikoptionen vom Audioplayer zum Spiel hinzufügen möchten? Solche Dinge sind mit herkömmlicher Webtechnologie nicht so einfach, da die Sicherheitsmodelle des Webs bedacht werden müssen. Sie müssen überlegen, ob die Ursprünge einander vertrauen und wie die Nachrichten übermittelt werden sollen.

Nachrichtenkanäle können dagegen einen sicheren Kanal bieten, der es ermöglicht, Daten zwischen verschiedenen Browserkontexten auszutauschen.

> [!NOTE]
> Für weitere Informationen und Ideen ist der Abschnitt [Ports as the basis of an object-capability model on the Web](https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web) der Spezifikation eine nützliche Lektüre.

## Einfache Beispiele

Um Ihnen den Einstieg zu erleichtern, haben wir ein paar Demos auf GitHub veröffentlicht. Schauen Sie sich zuerst unsere [Grunddemonstration zur Kanalnachricht](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)) an, die eine wirklich einfache einmalige Nachrichtenübertragung zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.

Zweitens sehen Sie sich unsere [Multimessaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) an ([führen Sie diese live aus](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), die ein etwas komplexeres Setup zeigt, das mehrere Nachrichten zwischen der Hauptseite und einem IFrame senden kann.

In diesem Artikel konzentrieren wir uns auf das letztere Beispiel, das folgendermaßen aussieht:

![Demo mit "Hello this is my demo", das als fünf separate Nachrichten gesendet wird. Die Nachrichten werden als Aufzählungsliste angezeigt.](channel-messaging-demo.png)

## Erstellen des Kanals

Auf der Hauptseite der Demo haben wir ein einfaches Formular mit einer Texteingabe, um Nachrichten einzugeben, die an ein {{htmlelement("iframe")}} gesendet werden sollen. Wir haben auch einen Absatz, den wir später verwenden, um Bestätigungsnachrichten anzuzeigen, die wir vom {{htmlelement("iframe")}} zurückerhalten.

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

Wenn das IFrame geladen ist, registrieren wir einen `onclick`-Handler für unseren Button und einen `onmessage`-Handler für [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1). Schließlich übertragen wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame unter Verwendung der [`window.postMessage`](/de/docs/Web/API/Window/postMessage)-Methode.

Lassen Sie uns die `iframe.contentWindow.postMessage`-Zeile genauer untersuchen. Sie nimmt drei Argumente:

1. Die gesendete Nachricht. Für diese anfängliche Portübertragung könnte diese Nachricht ein leerer String sein, aber in diesem Beispiel ist sie auf `'init'` gesetzt.
2. Der Ursprung, an den die Nachricht gesendet werden soll. `*` bedeutet "jeder Ursprung".
3. Ein Objekt, dessen Besitz auf den empfangenden Browserkontext übertragen wird. In diesem Fall übertragen wir [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) an das IFrame, damit es zur Kommunikation mit der Hauptseite verwendet werden kann.

Wenn unser Button geklickt wird, verhindern wir das normale Absenden des Formulars und senden dann den in unserer Texteingabe eingegebenen Wert an das IFrame über den [`MessageChannel`](/de/docs/Web/API/MessageChannel).

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

Wenn die anfängliche Nachricht von der Hauptseite über die [`window.postMessage`](/de/docs/Web/API/Window/postMessage)-Methode empfangen wird, führen wir die `initPort`-Funktion aus. Diese speichert den übertragenen Port und registriert einen `onmessage`-Handler, der jedes Mal aufgerufen wird, wenn eine Nachricht durch unseren [`MessageChannel`](/de/docs/Web/API/MessageChannel) übermittelt wird.

Wenn eine Nachricht von der Hauptseite empfangen wird, erzeugen wir ein Listenelement und fügen es in die ungeordnete Liste ein, wobei wir das [`textContent`](/de/docs/Web/API/Node/textContent) des Listenelements auf den `data`-Attributwert des Ereignisses setzen (dies enthält die eigentliche Nachricht).

Als nächstes senden wir eine Bestätigungsnachricht zurück an die Hauptseite über den Nachrichtenkanal, indem wir [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) auf [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) aufrufen, das ursprünglich an das IFrame übertragen wurde.

## Empfang der Bestätigung auf der Hauptseite

Kehren wir zur Hauptseite zurück und betrachten die `onmessage`-Handler-Funktion.

```js
// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

Wenn eine Nachricht vom IFrame empfangen wird, die bestätigt, dass die ursprüngliche Nachricht erfolgreich empfangen wurde, gibt dies die Bestätigung an einen Absatz aus und leert die Texteingabe, um sie für die nächste zu sendende Nachricht bereit zu machen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
