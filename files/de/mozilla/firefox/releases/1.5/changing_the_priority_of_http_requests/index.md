---
title: Ändern der Priorität von HTTP-Anfragen (Nicht-Standard)
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Die in diesem Thema beschriebene Vorgehensweise ist nicht standardisiert und wird nicht empfohlen.
>
> Die beste Methode, Ressourcen über HTTP anzufordern, ist die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), bei der Sie die Priorität in [`Request.priority`](/de/docs/Web/API/Request/priority) angeben können.
> Sie können auch die HTTP-Priorität auf den [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement/fetchPriority), [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement/fetchPriority) Elementen (und den zugehörigen Tags) mithilfe des `fetchpriority`-Attributes festlegen.

In [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) wurde eine API hinzugefügt, um die Priorität von [HTTP](/de/docs/Web/HTTP)-Anfragen zu ändern. Vorher gab es keine Möglichkeit, direkt anzugeben, dass eine Anfrage eine andere Priorität hat. Die API ist in `nsISupportsPriority` definiert, jedoch in sehr generischen Begriffen, sodass jedes Objekt diese Schnittstelle implementieren kann, um das Konzept der Priorität zu ermöglichen. Dieser Artikel behandelt speziell die Verwendung dieser Schnittstelle zur Änderung der Priorität von HTTP-Anfragen.

Zum Zeitpunkt des Schreibens beeinflusst die Änderung der Priorität einer HTTP-Anfrage nur die Reihenfolge, in der Verbindungsversuche unternommen werden. Das bedeutet, dass die Priorität nur dann Auswirkungen hat, wenn mehr Verbindungen (zu einem Server) vorhanden sind, als erlaubt sind.

Die Beispiele in diesem Dokument sind alle in [JavaScript](/de/docs/Web/JavaScript) unter Verwendung von XPCOM geschrieben.

Es sollte beachtet werden, dass der Wert des `priority`-Attributes den UNIX-Konventionen folgt, wobei kleinere Zahlen (einschließlich negativer Zahlen) eine höhere Priorität haben.

## Zugriff auf die Priorität von einem nsIChannel

Um die Priorität einer HTTP-Anfrage zu ändern, benötigen Sie Zugriff auf den `nsIChannel`, über den die Anfrage ausgeführt wird. Wenn Sie keinen vorhandenen Channel haben, können Sie diesen wie folgt erstellen:

```js
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(
  Components.interfaces.nsIIOService,
);
var ch = ios.newChannel("https://www.example.com/", null, null);
```

Sobald Sie einen `nsIChannel` haben, können Sie auf die Priorität wie folgt zugreifen:

```js
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
}
```

Zur Vereinfachung definiert die Schnittstelle mehrere Standardprioritätswerte, die Sie verwenden können, von `PRIORITY_HIGHEST` bis `PRIORITY_LOWEST`.

## Einen nsIChannel von XMLHttpRequest erhalten

Wenn Sie in [JavaScript](/de/docs/Web/JavaScript) programmieren, möchten Sie wahrscheinlich [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) verwenden, eine viel höher abstrahierte Darstellung einer HTTP-Anfrage. Sie können auf das `channel`-Mitglied eines [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) zugreifen, nachdem Sie die `open`-Methode darauf aufgerufen haben, wie folgt:

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

## Priorität anpassen

`nsISupportsPriority` enthält eine praktische Methode namens `adjustPriority`. Sie sollten diese verwenden, wenn Sie die Priorität einer Anfrage um einen bestimmten Betrag ändern möchten. Wenn Sie beispielsweise möchten, dass eine Anfrage eine etwas höhere Priorität hat als derzeit, könnten Sie Folgendes tun:

```js
// Annahme, dass wir bereits einen nsIChannel von oben haben
if (ch instanceof Components.interfaces.nsISupportsPriority) {
  ch.adjustPriority(-1);
}
```

Denken Sie daran, dass niedrigere Zahlen eine höhere Priorität bedeuten, sodass das Anpassen um eine negative Zahl die Priorität der Anfrage erhöht.
