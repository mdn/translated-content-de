---
title: Ändern der Priorität von HTTP-Anfragen (Nicht-Standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Der in diesem Thema beschriebene Ansatz ist nicht standardisiert und wird nicht empfohlen.
>
> Der beste Weg, Ressourcen über HTTP anzufordern, ist die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), die es Ihnen ermöglicht, die Priorität in [`Request.priority`](/de/docs/Web/API/Request/priority) anzugeben.
> Sie können auch die HTTP-Priorität auf Elementen wie [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement/fetchPriority), [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement/fetchPriority) (und den zugehörigen Tags) mit dem Attribut `fetchpriority` festlegen.

In [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) wurde eine API hinzugefügt, die die Änderung der Priorität von [HTTP](/de/docs/Web/HTTP)-Anfragen unterstützt. Vorher gab es keine Möglichkeit, direkt anzugeben, dass eine Anfrage eine andere Priorität hat. Die API ist in `nsISupportsPriority` definiert, jedoch in sehr allgemeinen Begriffen, so dass jedes Objekt diese Schnittstelle implementieren kann, um das Konzept der Priorität zu ermöglichen. Dieser Artikel befasst sich speziell mit der Verwendung dieser Schnittstelle, um die Priorität von HTTP-Anfragen zu ändern.

Zum Zeitpunkt dieses Schreibens wirkt sich die Änderung der Priorität einer HTTP-Anfrage nur auf die Reihenfolge aus, in der Verbindungsversuche unternommen werden. Das bedeutet, dass die Priorität nur von Bedeutung ist, wenn mehr Verbindungen (zu einem Server) bestehen als erlaubt sind.

Die Beispiele in diesem Dokument sind alle in [JavaScript](/de/docs/Web/JavaScript) unter Verwendung von XPCOM geschrieben.

Es sollte beachtet werden, dass der Wert des `priority`-Attributs den UNIX-Konventionen folgt, wobei kleinere Zahlen (einschließlich negativer Zahlen) eine höhere Priorität haben.

## Zugriff auf die Priorität über ein nsIChannel

Um die Priorität einer HTTP-Anfrage zu ändern, benötigen Sie Zugriff auf das `nsIChannel`, auf dem die Anfrage gestellt wird. Wenn Sie kein existierendes Channel haben, können Sie eines wie folgt erstellen:

```js
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(
  Components.interfaces.nsIIOService,
);
var ch = ios.newChannel("https://www.example.com/", null, null);
```

Sobald Sie ein `nsIChannel` haben, können Sie auf die Priorität wie folgt zugreifen:

```js
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
```

Zur Bequemlichkeit definiert die Schnittstelle mehrere Standardprioritätswerte, die Sie verwenden können, die von `PRIORITY_HIGHEST` bis `PRIORITY_LOWEST` reichen.

## Ein nsIChannel von XMLHttpRequest erhalten

Wenn Sie in [JavaScript](/de/docs/Web/JavaScript) programmieren, möchten Sie wahrscheinlich [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) verwenden, eine viel höhere Abstraktion einer HTTP-Anfrage. Sie können auf das `channel`-Element eines [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) zugreifen, sobald Sie die `open`-Methode aufgerufen haben, wie folgt:

```js
var req = new XMLHttpRequest();
req.open("GET", "https://www.example.com", false);
if (req.channel instanceof Components.interfaces.nsISupportsPriority) {
  req.channel.priority =
    Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
req.send(null);
```

> [!NOTE]
> Dieses Beispiel verwendet einen synchronen [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest), den Sie in der Praxis nicht verwenden sollten.

## Priorität anpassen

`nsISupportsPriority` enthält eine Methode namens `adjustPriority`. Sie sollten diese verwenden, wenn Sie die Priorität einer Anfrage um einen bestimmten Betrag ändern möchten. Wenn Sie beispielsweise möchten, dass eine Anfrage eine etwas höhere Priorität als derzeit hat, könnten Sie Folgendes tun:

```js
// assuming we already have a nsIChannel from above
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Denken Sie daran, dass niedrigere Zahlen eine höhere Priorität bedeuten, so dass das Anpassen um eine negative Zahl die Priorität der Anfrage erhöhen wird.
