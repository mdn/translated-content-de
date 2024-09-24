---
title: Verwendung von Channel Messaging
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) ermöglicht zwei separaten Skripten, die in unterschiedlichen Browserkontexten an dasselbe Dokument angehängt sind (z.B. zwei {{HTMLElement("iframe")}}-Elemente, das Hauptdokument und ein einzelnes {{HTMLElement("iframe")}}, oder zwei Dokumente über einen {{domxref("SharedWorker")}}), direkt zu kommunizieren und Nachrichten über Zwei-Wege-Kanäle (oder Pipes) mit einem Port an jedem Ende zu übermitteln.

In diesem Artikel werden wir die Grundlagen der Nutzung dieser Technologie erkunden.

## Anwendungsfälle

Channel Messaging ist hauptsächlich nützlich, wenn Sie eine soziale Website haben, die Funktionen von anderen Websites über iframes in ihre Hauptoberfläche einbettet, wie Spiele, Adressbücher oder einen Audioplayer mit personalisierten Musikauswahlen. Wenn diese als eigenständige Einheiten agieren, ist das in Ordnung, aber die Schwierigkeit entsteht, wenn Sie eine Interaktion zwischen der Hauptseite und den {{HTMLElement("iframe")}}-Elementen oder zwischen verschiedenen {{HTMLElement("iframe")}}-Elementen wünschen. Beispielsweise, was ist, wenn Sie einen Kontakt aus dem Adressbuch auf der Hauptseite hinzufügen, hohe Punktzahlen aus Ihrem Spiel zu Ihrem Hauptprofil hinzufügen oder neue Hintergrundmusikoptionen vom Audioplayer zum Spiel hinzufügen möchten? Solche Dinge sind mit herkömmlicher Webtechnologie nicht so einfach aufgrund der Sicherheitsmodelle, die das Web verwendet. Sie müssen darüber nachdenken, ob die Ursprünge sich gegenseitig vertrauen und wie die Nachrichten übermittelt werden.

Nachrichtenkanäle hingegen können einen sicheren Kanal bereitstellen, der Ihnen erlaubt, Daten zwischen verschiedenen Browserkontexten zu übermitteln.

> [!NOTE]
> Für weitere Informationen und Ideen ist der Abschnitt [Ports als Grundlage eines objektfähigen Modells im Web](https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web) der Spezifikation eine nützliche Lektüre.

## Einfache Beispiele

Um Ihnen den Einstieg zu erleichtern, haben wir ein paar Demos auf GitHub veröffentlicht. Schauen Sie sich zuerst unser [grundlegendes Channel Messaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) an ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)), das eine wirklich einfache einzelne Nachrichtenübertragung zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.

Zweitens werfen Sie einen Blick auf unser [multimessaging Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) ([dieses live ausführen](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), das einen etwas komplexeren Aufbau zeigt, der mehrere Nachrichten zwischen der Hauptseite und einem IFrame senden kann.

Wir werden uns in diesem Artikel auf das letztgenannte Beispiel konzentrieren, das folgendermaßen aussieht:

![Demo mit "Hello this is my demo", gesendet als fünf separate Nachrichten. Die Nachrichten werden als Aufzählungsliste angezeigt.](channel-messaging-demo.png)

## Erstellen des Kanals

Auf der Hauptseite des Demos haben wir ein einfaches Formular mit einem Texteingabefeld zum Eingeben von Nachrichten, die an ein {{htmlelement("iframe")}} gesendet werden sollen. Wir haben auch einen Absatz, den wir später verwenden werden, um Bestätigungsnachrichten anzuzeigen, die wir vom {{htmlelement("iframe")}} zurückerhalten.

```js
const input = document.getElementById("message-input");
const output = document.getElementById("message-output");
const button = document.querySelector("button");
const iframe = document.querySelector("iframe");

const channel = new MessageChannel();
const port1 = channel.port1;

// Warten bis das iframe geladen ist
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Auf Button-Klicks warten
  button.addEventListener("click", onClick);

  // Auf Nachrichten auf port1 warten
  port1.onmessage = onMessage;

  // Port2 an das iframe übertragen
  iframe.contentWindow.postMessage("init", "*", [channel.port2]);
}

// Eine Nachricht auf port1 senden, wenn der Button geklickt wird
function onClick(e) {
  e.preventDefault();
  port1.postMessage(input.value);
}

// Empfangene Nachrichten auf port1 bearbeiten
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

Wir beginnen damit, einen neuen Nachrichtenkanal durch die Verwendung des {{domxref("MessageChannel.MessageChannel","MessageChannel()")}}-Konstruktors zu erstellen.

Wenn das IFrame geladen ist, registrieren wir einen `onclick`-Handler für unseren Button und einen `onmessage`-Handler für {{domxref("MessageChannel.port1")}}. Schließlich übertragen wir {{domxref("MessageChannel.port2")}} an das IFrame mittels der {{domxref("window.postMessage")}}-Methode.

Schauen wir uns genauer an, wie die Zeile `iframe.contentWindow.postMessage` funktioniert. Sie nimmt drei Argumente an:

1. Die gesendete Nachricht. Für diese anfängliche Portübertragung könnte diese Nachricht ein leerer String sein, aber in diesem Beispiel ist sie auf 'init' gesetzt.
2. Der Ursprung, an den die Nachricht gesendet werden soll. `*` bedeutet "jeder Ursprung".
3. Ein Objekt, dessen Eigentum an den empfangenden Browserkontext übertragen wird. In diesem Fall übertragen wir {{domxref("MessageChannel.port2")}} an das IFrame, damit es zur Kommunikation mit der Hauptseite verwendet werden kann.

Wenn unser Button geklickt wird, verhindern wir, dass das Formular wie gewohnt gesendet wird, und senden dann den in unserem Texteingabefeld eingegebenen Wert über den {{domxref("MessageChannel")}} an das IFrame.

## Empfangen des Ports und der Nachricht im IFrame

In den {{HTMLElement("iframe")}}-Elementen haben wir folgendes JavaScript:

```js
const list = document.querySelector("ul");
let port2;

// Auf die anfängliche Portübertragungsnachricht warten
window.addEventListener("message", initPort);

// Den übertragenen Port einrichten
function initPort(e) {
  port2 = e.ports[0];
  port2.onmessage = onMessage;
}

// Empfangene Nachrichten auf port2 bearbeiten
function onMessage(e) {
  const listItem = document.createElement("li");
  listItem.textContent = e.data;
  list.appendChild(listItem);
  port2.postMessage(`Message received by IFrame: "${e.data}"`);
}
```

Wenn die anfängliche Nachricht von der Hauptseite über die {{domxref("window.postMessage")}}-Methode empfangen wird, führen wir die `initPort`-Funktion aus. Diese speichert den übertragenen Port und registriert einen `onmessage`-Handler, der jedes Mal aufgerufen wird, wenn eine Nachricht über unseren {{domxref("MessageChannel")}} übertragen wird.

Wenn eine Nachricht von der Hauptseite empfangen wird, erstellen wir ein Listenelement und fügen es in die ungeordnete Liste ein, wobei wir die {{domxref("Node.textContent","textContent")}} des Listenelements gleich dem `data`-Attribut des Ereignisses setzen (dies enthält die tatsächliche Nachricht).

Anschließend senden wir eine Bestätigungsnachricht zurück an die Hauptseite über den Nachrichtenkanal, indem wir {{domxref("MessagePort.postMessage")}} auf {{domxref("MessageChannel.port2")}} aufrufen, der ursprünglich an das iframe übertragen wurde.

## Empfang der Bestätigung auf der Hauptseite

Zurückkehrend zur Hauptseite, betrachten wir nun die `onmessage`-Handlerfunktion.

```js
// Empfangene Nachrichten auf port1 bearbeiten
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

Wenn eine Nachricht von dem IFrame zurückkommt und bestätigt, dass die ursprüngliche Nachricht erfolgreich empfangen wurde, wird diese Bestätigung in einem Absatz ausgegeben und das Texteingabefeld geleert, um die nächste zu sendende Nachricht vorzubereiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
