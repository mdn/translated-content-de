---
title: "Response: bodyUsed-Eigenschaft"
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: 77fd649b791632aec695c5c4c7ca5bc726f4d1e9
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`bodyUsed`** der [`Response`](/de/docs/Web/API/Response)-Schnittstelle ist ein boolescher Wert, der anzeigt, ob der Body bereits gelesen wurde.

## Wert

Ein boolescher Wert.

## Beispiele

### Überprüfung von `bodyUsed`

Dieses Beispiel zeigt, dass das Lesen des Bodys einer Antwort den Wert von `bodyUsed` von `false` auf `true` ändert.

Das Beispiel enthält ein leeres Bild.

Wenn das JavaScript des Beispiels ausgeführt wird, holen wir ein Bild und weisen das zurückgegebene Versprechen einer Variablen `responsePromise` zu.

Wenn der Benutzer auf "Antwort verwenden" klickt, prüfen wir, ob die Antwort bereits verwendet wurde. Wenn ja, geben wir eine Nachricht aus. Wenn nicht, lesen wir den Antwort-Body und verwenden ihn, um einen Wert für das `src`-Attribut des Bildes bereitzustellen.

#### HTML

```html
<p><button id="use">Use response</button> <button id="reset">Reset</button></p>
<p><img id="my-image" src="" width="150" /></p>
<pre id="log"></pre>
```

#### JavaScript

```js
const useResponse = document.querySelector("#use");
const reset = document.querySelector("#reset");
const myImage = document.querySelector("#my-image");
const log = document.querySelector("#log");

const responsePromise = fetch(
  "/shared-assets/images/examples/firefox-logo.svg",
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

Anfangs gibt es keinen Wert für das Bild. Wenn Sie einmal auf "Antwort verwenden" klicken, ist `bodyUsed` `false`, also lesen wir die Antwort und setzen das Bild. Wenn Sie dann erneut auf "Antwort verwenden" klicken, ist `bodyUsed` `true`, und wir geben die Nachricht aus.

Klicken Sie auf "Zurücksetzen", um das Beispiel neu zu laden, sodass Sie es erneut ausprobieren können.

{{ EmbedLiveSample('Examples', '100%', '300px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
