---
title: Ändern der Priorität von HTTP-Anfragen (Nicht-Standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

> [!WARNING]
> Der in diesem Thema beschriebene Ansatz ist nicht standardisiert und wird nicht empfohlen.
>
> Die beste Methode, um Ressourcen über HTTP anzufordern, ist die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), mit dem Sie die [`priority`](/de/docs/Web/API/RequestInit#priority) angeben können.
> Sie können auch die HTTP-Priorität für [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement/fetchPriority), [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement/fetchPriority) Elemente (und die zugehörigen Tags) mit dem `fetchpriority` Attribut festlegen.

In [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) wurde eine API hinzugefügt, um die Priorität von [HTTP](/de/docs/Web/HTTP)-Anfragen zu ändern. Vorher gab es keine Möglichkeit, direkt anzugeben, dass eine Anfrage eine andere Priorität hatte. Die API ist in `nsISupportsPriority` definiert, jedoch in sehr allgemeinen Begriffen, sodass jedes Objekt diese Schnittstelle implementieren kann, um das Konzept der Priorität zu ermöglichen. Dieser Artikel behandelt speziell die Verwendung dieser Schnittstelle zur Änderung der Priorität von HTTP-Anfragen.

Zum Zeitpunkt der Erstellung dieses Dokuments beeinflusst die Änderung der Priorität einer HTTP-Anfrage nur die Reihenfolge, in der Verbindungsversuche unternommen werden. Das bedeutet, dass die Priorität nur dann einen Effekt hat, wenn es mehr Verbindungen (zu einem Server) gibt, als erlaubt sind.

Die Beispiele in diesem Dokument sind alle in [JavaScript](/de/docs/Web/JavaScript) unter Verwendung von XPCOM geschrieben.

Es sollte angemerkt werden, dass der Wert des `priority` Attributs den UNIX-Konventionen folgt, wobei kleinere Zahlen (einschließlich negativer Zahlen) eine höhere Priorität haben.

## Zugriff auf die Priorität von einem nsIChannel

Um die Priorität einer HTTP-Anfrage zu ändern, benötigen Sie Zugriff auf das `nsIChannel`, auf dem die Anfrage erfolgt. Wenn Sie keinen bestehenden Channel haben, können Sie einen wie folgt erstellen:

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

Zur Bequemlichkeit definiert die Schnittstelle mehrere Standard-Prioritätswerte, die Sie verwenden können, von `PRIORITY_HIGHEST` bis `PRIORITY_LOWEST`.

## Einen nsIChannel von XMLHttpRequest erhalten

Wenn Sie in [JavaScript](/de/docs/Web/JavaScript) programmieren, möchten Sie wahrscheinlich [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) verwenden, eine viel höher abstrakte Darstellung einer HTTP-Anfrage. Sie können auf das `channel` Mitglied eines [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) zugreifen, nachdem Sie die `open` Methode davon aufgerufen haben, wie folgt:

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

`nsISupportsPriority` enthält eine praktische Methode namens `adjustPriority`. Sie sollten diese verwenden, wenn Sie die Priorität einer Anfrage um einen bestimmten Betrag ändern möchten. Zum Beispiel, wenn Sie möchten, dass eine Anfrage eine etwas höhere Priorität hat als aktuell, könnten Sie Folgendes tun:

```js
// assuming we already have a nsIChannel from above
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Denken Sie daran, dass niedrigere Zahlen eine höhere Priorität bedeuten, sodass eine Anpassung um eine negative Zahl die Priorität der Anfrage erhöht.
