---
title: Ändern der Priorität von HTTP-Anfragen (Nicht-Standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

> [!WARNING]
> Die in diesem Thema beschriebene Vorgehensweise ist nicht standardisiert und nicht empfohlen.
>
> Der beste Weg, um Ressourcen über HTTP anzufordern, ist die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), mit der Sie die Priorität in [`Request.priority`](/de/docs/Web/API/Request/priority) angeben können.
> Sie können auch die HTTP-Priorität auf [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement/fetchPriority), [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement/fetchPriority)-Elementen (und den zugehörigen Tags) mit dem `fetchpriority`-Attribut setzen.

In [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) wurde eine API hinzugefügt, um die Priorität von [HTTP](/de/docs/Web/HTTP)-Anfragen zu ändern. Vorher gab es keine Möglichkeit, direkt anzugeben, dass eine Anfrage eine andere Priorität hat. Die API ist in `nsISupportsPriority` definiert, jedoch in sehr generischen Begriffen, sodass jedes Objekt diese Schnittstelle implementieren kann, um das Konzept der Priorität zu ermöglichen. Dieser Artikel befasst sich speziell mit der Verwendung dieser Schnittstelle, um die Priorität von HTTP-Anfragen zu ändern.

Zum Zeitpunkt des Schreibens hat das Ändern der Priorität einer HTTP-Anfrage nur Auswirkungen auf die Reihenfolge, in der Verbindungsversuche unternommen werden. Das bedeutet, dass die Priorität nur eine Rolle spielt, wenn es mehr Verbindungen (zu einem Server) gibt, als erlaubt sind.

Die Beispiele in diesem Dokument sind alle in [JavaScript](/de/docs/Web/JavaScript) unter Verwendung von XPCOM geschrieben.

Es sollte beachtet werden, dass der Wert des `priority`-Attributs den UNIX-Konventionen folgt, wobei kleinere Zahlen (einschließlich negativer Zahlen) eine höhere Priorität haben.

## Zugriff auf die Priorität über ein nsIChannel

Um die Priorität einer HTTP-Anfrage zu ändern, benötigen Sie Zugriff auf das `nsIChannel`, auf dem die Anfrage erfolgt. Wenn Sie noch kein vorhandenes Channel haben, können Sie eines wie folgt erstellen:

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

Der Einfachheit halber definiert die Schnittstelle mehrere standardmäßige Prioritätswerte, die Sie verwenden können, und reicht von `PRIORITY_HIGHEST` bis `PRIORITY_LOWEST`.

## Erhalten eines nsIChannel von XMLHttpRequest

Wenn Sie in [JavaScript](/de/docs/Web/JavaScript) programmieren, möchten Sie wahrscheinlich [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) verwenden, eine viel höhere Abstraktion einer HTTP-Anfrage. Sie können auf das `channel`-Mitglied eines [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) zugreifen, sobald Sie die `open`-Methode darauf aufgerufen haben, wie folgt:

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

## Anpassen der Priorität

`nsISupportsPriority` enthält eine Komfortmethode namens `adjustPriority`. Sie sollten diese verwenden, wenn Sie die Priorität einer Anfrage um einen bestimmten Betrag ändern möchten. Wenn Sie beispielsweise möchten, dass eine Anfrage eine etwas höhere Priorität hat als derzeit, könnten Sie Folgendes tun:

```js
// assuming we already have a nsIChannel from above
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Denken Sie daran, dass kleinere Zahlen höhere Priorität bedeuten, daher wird durch das Anpassen um eine negative Zahl die Priorität der Anfrage erhöht.
