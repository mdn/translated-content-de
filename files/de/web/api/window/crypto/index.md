---
title: "Window: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

Die **`crypto`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt für diesen Fensterbereich zurückgibt. Dieses Objekt bietet Webseiten Zugriff auf bestimmte kryptografische Dienste.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden ihres Kindobjekts, [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)) nicht schreibgeschützt und daher anfällig für Angriffe durch [Polyfills](/de/docs/Glossary/polyfill).

Obwohl `crypto` in allen Fenstern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt in unsicheren Kontexten nur eine nutzbare Funktion: die Methode [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues). Im Allgemeinen sollten Sie diese API nur in sicheren Kontexten verwenden.

## Wert

Eine Instanz der [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle, die Zugriff auf allgemeine Kryptographie und einen starken Zufallszahlengenerator bietet.

## Beispiele

Dieses Beispiel nutzt die `crypto`-Eigenschaft, um auf die Methode [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues) zuzugreifen.

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

- Die [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)
