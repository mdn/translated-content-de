---
title: "CryptoKey: extractable Eigenschaft"
short-title: extractable
slug: Web/API/CryptoKey/extractable
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

Die schreibgeschützte **`extractable`** Eigenschaft des {{DOMxRef("CryptoKey")}}-Interfaces gibt an, ob der Schlüssel mithilfe von [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) extrahiert werden kann.

Wenn der Schlüssel nicht exportiert werden kann, werfen [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) eine Ausnahme, wenn sie zur Extraktion verwendet werden.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Schlüssel exportiert werden kann, und `false`, wenn nicht.

## Beispiele

In diesem Beispiel ist die _Export_-Schaltfläche deaktiviert und es wird kein Listener hinzugefügt, wenn der Schlüssel nicht exportiert werden kann.

```js
// Exportieren Sie den gegebenen Schlüssel und schreiben Sie ihn in den "exported-key"-Bereich.
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

// Aktivieren oder deaktivieren Sie die exportButton, je nachdem, ob der Schlüssel extrahierbar ist oder nicht
function setExportButton(key) {
  const exportButton = document.querySelector(".raw");

  // Deaktivieren Sie die Schaltfläche, wenn der Schlüssel nicht extrahierbar ist
  exportButton.disabled = !key.extractable;
  if (key.extractable) {
    // Fügen Sie einen Event-Listener hinzu, um den Schlüssel zu extrahieren
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  }
}

// Generieren Sie einen Verschlüsselungs-/Entschlüsselungsgeheimschlüssel,
// dann aktivieren Sie die "Export"-Schaltfläche und richten einen Event-Listener ein.
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
