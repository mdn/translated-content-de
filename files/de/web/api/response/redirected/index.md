---
title: "Response: redirected Eigenschaft"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 31a80a3156d2e93145ae172fdc97a82f6782de48
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`redirected`** des [`Response`](/de/docs/Web/API/Response) Interfaces zeigt an, ob die Antwort das Ergebnis einer von Ihnen durchgeführten Anfrage ist, die umgeleitet wurde.

> [!NOTE]
> Es wird nicht empfohlen, `redirected` zu überprüfen, um Umleitungen zu verhindern, da die Umleitung bereits erfolgt ist, wenn eine Antwort empfangen wird, und Sie möglicherweise die Anfrage an ein unerwünschtes Ziel gesendet haben, wobei potenziell sensible Informationen übermittelt werden könnten.
> Stattdessen sollten Sie die Filterung durchführen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen.
> Siehe das Beispiel [Umleitungen verbieten](#umleitungen_verbieten), das dies zeigt.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort darauf hinweist, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Umleitungen erkennen

Zu überprüfen, ob die Antwort auf eine umgeleitete Anfrage zurückzuführen ist, ist so einfach wie das Überprüfen dieses Flags auf dem [`Response`](/de/docs/Web/API/Response) Objekt.
Im folgenden Code wird eine Textnachricht in ein Element eingefügt, wenn während der `fetch`-Operation eine Umleitung auftrat.
Es ist jedoch zu beachten, dass dies nicht so sicher ist wie das vollständige Ablehnen von Umleitungen, wenn diese unerwartet sind, wie unten unter [Umleitungen verbieten](#umleitungen_verbieten) beschrieben.

Die [`url`](/de/docs/Web/API/Response/url) Eigenschaft gibt die endgültige URL nach Umleitungen zurück.

```js
fetch("awesome-picture.jpg")
  .then((response) => {
    const elem = document.getElementById("warning-message-box");
    elem.textContent = response.redirected ? "Unexpected redirect" : "";
    // final url obtained after redirects
    console.log(response.url);
    return response.blob();
  })
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

### Umleitungen verbieten

Die Überprüfung von `redirected` ist eine schlechte Methode, um Umleitungen zu verhindern, da die Umleitung bereits erfolgt ist. Stattdessen sollten Sie den Umleitungsmodus auf `"error"` im `options` Parameter setzen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, wie folgt:

```js
fetch("awesome-picture.jpg", { redirect: "error" })
  .then((response) => response.blob())
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
