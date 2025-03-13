---
title: "Response: redirected-Eigenschaft"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`redirected`**-Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces gibt an, ob die Antwort das Ergebnis einer von Ihnen gesendeten Anfrage ist, die umgeleitet wurde.

> [!NOTE]
> Sich auf `redirected` zu verlassen, um Umleitungen herauszufiltern, kann dazu führen, dass eine gefälschte Umleitung verhindert, dass Ihr Inhalt wie erwartet funktioniert.
> Stattdessen sollten Sie das Filtern durchführen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen.
> Siehe das Beispiel [Umleitungen nicht erlauben](#umleitungen_nicht_erlauben), das zeigt, wie dies gemacht wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort anzeigt, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Erkennen von Umleitungen

Zu überprüfen, ob die Antwort von einer umgeleiteten Anfrage stammt, ist so einfach wie das Überprüfen dieses Flags auf dem [`Response`](/de/docs/Web/API/Response)-Objekt.
Im folgenden Code wird eine Textnachricht in ein Element eingefügt, wenn während der Fetch-Operation eine Umleitung auftritt.
Beachten Sie jedoch, dass dies nicht so sicher ist wie das direkte Ablehnen von Umleitungen, wenn diese unerwartet sind, wie unten unter [Umleitungen nicht erlauben](#umleitungen_nicht_erlauben) beschrieben.

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

### Umleitungen nicht erlauben

Da die Verwendung von `redirected`, um Umleitungen manuell herauszufiltern, die Fälschung von Umleitungen ermöglichen kann, sollten Sie stattdessen den Redirect-Modus im `init`-Parameter beim Aufrufen von [`fetch()`](/de/docs/Web/API/Window/fetch) auf `"error"` setzen, wie folgt:

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
- [HTTP-Zugriffsteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
