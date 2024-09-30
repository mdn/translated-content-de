---
title: "Response: redirected-Eigenschaft"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`redirected`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt an, ob die Antwort das Ergebnis einer von Ihnen angeforderten Umleitung ist.

> [!NOTE]
> Sich auf `redirected` zu verlassen, um Umleitungen auszuschließen, kann dazu führen, dass eine gefälschte Umleitung verhindert, dass Ihr Inhalt wie erwartet funktioniert.
> Stattdessen sollten Sie die Filterung vornehmen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen.
> Siehe das Beispiel [Umleitungen verbieten](#umleitungen_verbieten), das dies zeigt.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort anzeigt, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Erkennen von Umleitungen

Zu überprüfen, ob die Antwort auf eine umgeleitete Anfrage zurückzuführen ist, ist so einfach wie das Überprüfen dieses Flags auf dem [`Response`](/de/docs/Web/API/Response)-Objekt.
Im folgenden Code wird eine Textnachricht in ein Element eingefügt, wenn während der Fetch-Operation eine Umleitung erfolgt ist.
Beachten Sie jedoch, dass dies nicht so sicher ist, wie das vollständige Ablehnen von Umleitungen, wenn diese unerwartet sind, wie im Abschnitt [Umleitungen verbieten](#umleitungen_verbieten) unten beschrieben.

Die [`url`](/de/docs/Web/API/Response/url)-Eigenschaft gibt die endgültige URL nach Umleitungen zurück.

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

Da die manuelle Filterung von Umleitungen mit `redirected` die Fälschung von Umleitungen ermöglichen kann, sollten Sie stattdessen den Umleitungsmodus auf `"error"` im `init`-Parameter setzen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, wie folgt:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
