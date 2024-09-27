---
title: Änderung der Priorität von HTTP-Anfragen (Nicht-Standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Die in diesem Thema beschriebene Vorgehensweise ist nicht standardisiert und wird nicht empfohlen.
>
> Der beste Weg, Ressourcen über HTTP anzufordern, ist die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), mit dem Sie die Priorität in [`Request.priority`](/de/docs/Web/API/Request/priority) festlegen können.
> Sie können auch die HTTP-Priorität auf den Elementen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement/fetchPriority), [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement/fetchPriority) (und den zugehörigen Tags) mit dem `fetchpriority`-Attribut festlegen.

In [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) wurde eine API hinzugefügt, um die Priorität von [HTTP](/de/docs/Web/HTTP)-Anfragen zu ändern. Vorher gab es keine Möglichkeit, direkt anzugeben, dass eine Anfrage eine andere Priorität hatte. Die API ist in `nsISupportsPriority` definiert, jedoch in sehr generischen Begriffen, sodass jedes Objekt diese Schnittstelle implementieren kann, um das Konzept der Priorität zu ermöglichen. Dieser Artikel befasst sich speziell mit der Verwendung dieser Schnittstelle, um die Priorität von HTTP-Anfragen zu ändern.

Zum Zeitpunkt des Schreibens hat die Änderung der Priorität einer HTTP-Anfrage nur Auswirkungen auf die Reihenfolge, in der Verbindungsversuche unternommen werden. Dies bedeutet, dass die Priorität nur dann eine Wirkung hat, wenn es mehr Verbindungen (zu einem Server) gibt, als erlaubt sind.

Die Beispiele in diesem Dokument sind alle in [JavaScript](/de/docs/Web/JavaScript) unter Verwendung von XPCOM geschrieben.

Es sollte beachtet werden, dass der Wert des `priority`-Attributs den UNIX-Konventionen folgt, wobei kleinere Zahlen (einschließlich negativer Zahlen) eine höhere Priorität haben.

## Zugriff auf die Priorität von einem nsIChannel

Um die Priorität einer HTTP-Anfrage zu ändern, benötigen Sie Zugriff auf das `nsIChannel`, über das die Anfrage gestellt wird. Wenn Sie keinen vorhandenen Kanal haben, können Sie einen wie folgt erstellen:

```js
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(
  Components.interfaces.nsIIOService,
);
var ch = ios.newChannel("https://www.example.com/", null, null);
```

Sobald Sie ein `nsIChannel` haben, können Sie die Priorität wie folgt aufrufen:

```js
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
```

Der Einfachheit halber definiert die Schnittstelle mehrere Standardprioritätswerte, die Sie verwenden können, von `PRIORITY_HIGHEST` bis `PRIORITY_LOWEST`.

## Ein nsIChannel von XMLHttpRequest abrufen

Wenn Sie in [JavaScript](/de/docs/Web/JavaScript) programmieren, möchten Sie wahrscheinlich [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) verwenden, eine viel höher abstrahierte Darstellung einer HTTP-Anfrage. Sie können auf das `channel`-Mitglied eines [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) zugreifen, nachdem Sie die `open`-Methode aufgerufen haben, wie folgt:

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
> Dieses Beispiel verwendet eine synchrone [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest), die Sie in der Praxis nicht verwenden sollten.

## Anpassung der Priorität

`nsISupportsPriority` enthält eine Komfortmethode namens `adjustPriority`. Sie sollten diese verwenden, wenn Sie die Priorität einer Anfrage um einen bestimmten Betrag ändern möchten. Wenn Sie beispielsweise eine Anfrage ein wenig höher priorisieren möchten als sie derzeit ist, könnten Sie Folgendes tun:

```js
// assuming we already have a nsIChannel from above
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Denken Sie daran, dass niedrigere Zahlen eine höhere Priorität bedeuten, sodass das Anpassen um eine negative Zahl die Priorität der Anfrage erhöht.
