---
title: "Response: bodyUsed-Eigenschaft"
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`bodyUsed`** des [`Response`](/de/docs/Web/API/Response)-Interfaces ist ein boolescher Wert, der angibt, ob der Body bereits gelesen wurde.

## Wert

Ein boolescher Wert.

## Beispiele

### Überprüfung von `bodyUsed`

Dieses Beispiel zeigt, dass das Lesen des Bodys einer Antwort den Wert von `bodyUsed` von `false` auf `true` ändert.

Das Beispiel enthält ein leeres Bild.

Wenn das JavaScript des Beispiels ausgeführt wird, laden wir ein Bild und weisen das zurückgegebene Versprechen einer Variablen `responsePromise` zu.

Wenn der Benutzer auf "Use response" klickt, überprüfen wir, ob die Antwort bereits verwendet wurde. Wenn ja, drucken wir eine Nachricht aus. Wenn nicht, lesen wir den Body der Antwort und verwenden ihn, um einen Wert für das `src`-Attribut des Bildes bereitzustellen.

#### HTML

```html
<button id="use">Use response</button>
<button id="reset">Reset</button>
<br />
<img id="my-image" src="" />
<pre id="log"></pre>
```

#### JavaScript

```js
const useResponse = document.querySelector("#use");
const reset = document.querySelector("#reset");
const myImage = document.querySelector("#my-image");
const log = document.querySelector("#log");

const responsePromise = fetch(
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg",
);

useResponse.addEventListener("click", async () => {
  const response = await responsePromise;
  if (response.bodyUsed) {
    log.textContent = "Body has already been used!";
  } else {
    const result = await response.blob();
    const objectURL = URL.createObjectURL(result);
    myImage.src = objectURL;
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Ergebnis

Anfangs gibt es keinen Wert für das Bild. Wenn Sie einmal auf "Use response" klicken, ist `bodyUsed` `false`, also lesen wir die Antwort und setzen das Bild. Wenn Sie dann erneut auf "Use response" klicken, ist `bodyUsed` `true`, und wir drucken die Nachricht.

Klicken Sie auf "Reset", um das Beispiel neu zu laden, damit Sie es erneut versuchen können.

{{ EmbedLiveSample('Examples', '100%', '300px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
