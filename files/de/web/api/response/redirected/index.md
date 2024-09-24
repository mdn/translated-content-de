---
title: "Response: Eigenschaft redirected"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`redirected`** Eigenschaft der {{domxref("Response")}} Schnittstelle zeigt an, ob die Antwort das Ergebnis einer von Ihnen getätigten Anfrage ist, die umgeleitet wurde.

> [!NOTE]
> Sich auf `redirected` zu verlassen, um Umleitungen herauszufiltern, erleichtert es, dass eine gefälschte Umleitung verhindert, dass Ihr Inhalt wie erwartet funktioniert.
> Stattdessen sollten Sie das Filtern durchführen, wenn Sie {{domxref("Window/fetch", "fetch()")}} aufrufen.
> Siehe das Beispiel [Umleitungen nicht erlauben](#umleitungen_nicht_erlauben), das dies zeigt.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Antwort anzeigt, dass Ihre Anfrage umgeleitet wurde.

## Beispiele

### Umleitungen erkennen

Zu überprüfen, ob die Antwort aus einer umgeleiteten Anfrage stammt, ist so einfach wie das Prüfen dieses Flags auf dem {{domxref("Response")}} Objekt.
Im folgenden Code wird eine Textnachricht in ein Element eingefügt, wenn während der Fetch-Operation eine Umleitung aufgetreten ist.
Beachten Sie jedoch, dass dies nicht so sicher ist wie die direkte Ablehnung von Umleitungen, wenn sie nicht erwartet werden, wie unter [Umleitungen nicht erlauben](#umleitungen_nicht_erlauben) unten beschrieben.

Die {{domxref("Response.url", "url")}} Eigenschaft gibt die endgültige URL nach Umleitungen zurück.

```js
fetch("awesome-picture.jpg")
  .then((response) => {
    const elem = document.getElementById("warning-message-box");
    elem.textContent = response.redirected ? "Unerwartete Umleitung" : "";
    // endgültige URL nach Umleitungen erhalten
    console.log(response.url);
    return response.blob();
  })
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

### Umleitungen nicht erlauben

Da die Verwendung von `redirected`, um Umleitungen manuell herauszufiltern, die Fälschung von Umleitungen ermöglichen kann, sollten Sie stattdessen den Umleitungsmodus auf `"error"` im `init` Parameter einstellen, wenn Sie {{domxref("Window/fetch", "fetch()")}} aufrufen, wie folgt:

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
