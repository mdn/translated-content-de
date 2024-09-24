---
title: "URLSearchParams: entries()-Methode"
short-title: entries()
slug: Web/API/URLSearchParams/entries
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`entries()`**-Methode der
{{domxref("URLSearchParams")}}-Schnittstelle gibt einen
{{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Der Iterator gibt Schlüssel/Wert-Paare in der gleichen Reihenfolge zurück, wie sie im Abfrage-String erscheinen. Der Schlüssel und der Wert jedes Paares sind Zeichenfolgen.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

```js
// Erstellen eines Test-URLSearchParams Objekts
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Anzeigen der Schlüssel/Wert-Paare
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
```

Das Ergebnis ist:

```plain
key1, value1
key2, value2
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle.
