---
title: "CryptoKey: extractable-Eigenschaft"
short-title: extractable
slug: Web/API/CryptoKey/extractable
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`extractable`**-Eigenschaft der [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Schnittstelle gibt an, ob der Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) extrahiert werden kann.

Wenn der Schlüssel nicht exportiert werden kann, wird [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) eine Ausnahme auslösen, wenn sie zur Extraktion verwendet werden.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Schlüssel exportiert werden kann, und `false`, wenn nicht.

## Beispiele

In diesem Beispiel ist der _Export_-Button deaktiviert, und es wird kein Listener hinzugefügt, wenn der Schlüssel nicht exportiert werden kann.

```js
// Export the given key and write it into the "exported-key" space.
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

// Enable or disable the exportButton if the key is extractable or not
function setExportButton(key) {
  const exportButton = document.querySelector(".raw");

  // Disable the button if the key is not extractable
  exportButton.disabled = !key.extractable;
  if (key.extractable) {
    // Add an event listener to extract the key
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  }
}

// Generate an encrypt/decrypt secret key,
// then enable and set up an event listener on the "Export" button.
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then(setExportButton(key));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
