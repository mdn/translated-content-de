---
title: "Response: redirected-Eigenschaft"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`redirected`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle zeigt an, ob die Antwort das Ergebnis einer Anforderung ist, die Sie gestellt haben und die umgeleitet wurde.

> [!NOTE]
> Sich auf `redirected` zu verlassen, um Weiterleitungen herauszufiltern, macht es einfach für eine gefälschte Weiterleitung, Ihr Inhalt daran zu hindern, wie erwartet zu funktionieren.
> Stattdessen sollten Sie die Filterung vornehmen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen.
> Siehe das Beispiel [Weiterleitungen nicht zulassen](#weiterleitungen_nicht_zulassen), das zeigt, wie dies gemacht wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort anzeigt, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Weiterleitungen erkennen

Zu überprüfen, ob die Antwort von einer umgeleiteten Anfrage stammt, ist so einfach wie das Überprüfen dieses Flags auf dem [`Response`](/de/docs/Web/API/Response)-Objekt.
Im untenstehenden Code wird eine Textnachricht in ein Element eingefügt, wenn während der Abrufoperation eine Umleitung stattgefunden hat.
Beachten Sie jedoch, dass dies nicht so sicher ist, wie das direkte Ablehnen von Weiterleitungen, wenn diese unerwartet sind, wie im Abschnitt [Weiterleitungen nicht zulassen](#weiterleitungen_nicht_zulassen) unten beschrieben.

Die [`url`](/de/docs/Web/API/Response/url)-Eigenschaft gibt die endgültige URL nach Weiterleitungen zurück.

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

### Weiterleitungen nicht zulassen

Da es durch das manuelle Filtern von Weiterleitungen mittels `redirected` möglich ist, gefälschte Weiterleitungen zuzulassen, sollten Sie stattdessen den Weiterleitungsmodus auf `"error"` im `init`-Parameter setzen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, wie folgt:

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
