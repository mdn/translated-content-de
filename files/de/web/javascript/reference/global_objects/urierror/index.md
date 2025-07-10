---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`URIError`**-Objekt repräsentiert einen Fehler, wenn eine globale URI-Verarbeitungsfunktion auf falsche Weise verwendet wurde.

`URIError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`URIError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("URIError/URIError", "URIError()")}}
  - : Erstellt ein neues `URIError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem übergeordneten Objekt {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `URIError.prototype` definiert und werden von allen `URIError` Instanzen geteilt.

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `URIError`-Instanzen ist der Anfangswert der {{jsxref("URIError/URIError", "URIError")}}-Konstruktor.
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : Repräsentiert den Namen des Fehler-Typs. Für `URIError.prototype.name` ist der Anfangswert `"URIError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem übergeordneten Objekt {{jsxref("Error")}}_.

## Beispiele

### Einen URIError abfangen

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

### Einen URIError erstellen

```js
try {
  throw new URIError("Hello");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
