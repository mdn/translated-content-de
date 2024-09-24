---
title: "Window: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

Die **`crypto`** Eigenschaft des {{domxref("Window")}}-Interfaces gibt das {{domxref("Crypto")}}-Objekt für den Bereich dieses Fensters zurück. Dieses Objekt gibt Webseiten Zugang zu bestimmten kryptographischen Diensten.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden des Kindobjekts {{domxref("SubtleCrypto")}}) nicht schreibgeschützt und daher anfällig für Angriffe durch {{glossary("polyfill")}}.

Obwohl `crypto` in allen Fenstern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt nur eine brauchbare Funktion in unsicheren Kontexten: die {{domxref("Crypto.getRandomValues", "getRandomValues()")}}-Methode. Im Allgemeinen sollten Sie diese API nur in sicheren Kontexten verwenden.

## Wert

Eine Instanz des {{domxref("Crypto")}}-Interfaces, die Zugang zu allgemeiner Kryptographie und einem starken Zufallszahlengenerator bietet.

## Beispiele

Dieses Beispiel verwendet die `crypto`-Eigenschaft, um auf die {{domxref("Crypto.getRandomValues", "getRandomValues()")}}-Methode zuzugreifen.

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  globalThis.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">The random numbers are:</p>
<button type="button" onClick="genRandomNumbers()">
  Generate 10 random numbers
</button>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("Crypto")}}-Interface
- {{domxref("WorkerGlobalScope.crypto")}}
