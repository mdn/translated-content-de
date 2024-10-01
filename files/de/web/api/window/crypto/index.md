---
title: "Window: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

Die **`crypto`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces ist schreibgeschützt und gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt für den Gültigkeitsbereich dieses Fensters zurück. Dieses Objekt bietet Webseiten Zugang zu bestimmten kryptographischen Diensten.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden ihres Kind-Objekts, [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)) nicht schreibgeschützt und daher anfällig für Angriffe durch {{Glossary("polyfill", "Polyfills")}}.

Obwohl `crypto` in allen Fenstern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt in unsicheren Kontexten nur eine nutzbare Funktion: die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode. Im Allgemeinen sollten Sie diese API nur in sicheren Kontexten verwenden.

## Wert

Eine Instanz des [`Crypto`](/de/docs/Web/API/Crypto)-Interfaces, die Zugang zu allgemeiner Kryptographie und einem starken Zufallszahlengenerator bietet.

## Beispiele

Dieses Beispiel verwendet die `crypto`-Eigenschaft, um auf die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode zuzugreifen.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Crypto`](/de/docs/Web/API/Crypto)-Interface
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)
