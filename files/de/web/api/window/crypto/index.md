---
title: "Window: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("Web Crypto API")}}

Die **`crypto`**-Schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt für den Gültigkeitsbereich dieses Fensters zurück. Dieses Objekt ermöglicht Web-Seiten den Zugriff auf bestimmte kryptografische Dienste.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden ihres Kindobjekts, [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)) nicht schreibgeschützt und daher anfällig für Angriffe durch {{Glossary("polyfill", "Polyfill")}}.

Obwohl `crypto` in allen Fenstern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt in unsicheren Kontexten nur eine nutzbare Funktion: die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode. Im Allgemeinen sollten Sie diese API nur in sicheren Kontexten verwenden.

## Wert

Eine Instanz der [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle, die Zugriff auf allgemeine Kryptografie und einen starken Zufallszahlengenerator bietet.

## Beispiele

Dieses Beispiel verwendet die `crypto`-Eigenschaft, um auf die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode zuzugreifen.

### HTML

```html
<p id="myRandText">The random numbers are:</p>
<button type="button">Generate 10 random numbers</button>
```

### JavaScript

```js
function genRandomNumbers() {
  const array = new Uint32Array(10);
  globalThis.crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
}

document.querySelector("button").addEventListener("click", genRandomNumbers);
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
