---
title: "Response: redirected-Eigenschaft"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`redirected`** schreibgeschützte Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces gibt an, ob die Antwort das Ergebnis einer von Ihnen angeforderten Weiterleitung ist.

> [!NOTE]
> Sich auf `redirected` zu verlassen, um Weiterleitungen herauszufiltern, macht es einfach, dass eine gefälschte Weiterleitung verhindert, dass Ihr Inhalt wie erwartet funktioniert.
> Stattdessen sollten Sie das Filtern vornehmen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen.
> Siehe das Beispiel [Verhindern von Weiterleitungen](#verhindern_von_weiterleitungen), das dies zeigt.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort anzeigt, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Erkennen von Weiterleitungen

Zu überprüfen, ob die Antwort von einer umgeleiteten Anfrage stammt, ist so einfach wie das Überprüfen dieses Flags auf dem [`Response`](/de/docs/Web/API/Response)-Objekt.
Im folgenden Code wird eine textuelle Nachricht in ein Element eingefügt, wenn eine Weiterleitung während der Fetch-Operation erfolgt ist.
Beachten Sie jedoch, dass dies nicht so sicher ist, wie das konsequente Ablehnen von Weiterleitungen, wenn sie unerwartet sind, wie im Abschnitt [Verhindern von Weiterleitungen](#verhindern_von_weiterleitungen) unten beschrieben.

Die [`url`](/de/docs/Web/API/Response/url)-Eigenschaft gibt die endgültige URL nach den Weiterleitungen zurück.

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

### Verhindern von Weiterleitungen

Da die Verwendung von `redirected`, um Weiterleitungen manuell herauszufiltern, die Fälschung von Weiterleitungen ermöglichen kann, sollten Sie stattdessen den Weiterleitungsmodus auf `"error"` im `init`-Parameter setzen, wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, wie folgt:

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
