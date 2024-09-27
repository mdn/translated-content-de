---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`URIError`**-Objekt repräsentiert einen Fehler, wenn eine globale URI-Verarbeitungsfunktion falsch verwendet wurde.

`URIError` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mittels [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`URIError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("URIError/URIError", "URIError()")}}
  - : Erstellt ein neues `URIError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `URIError.prototype` definiert und werden von allen `URIError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `URIError`-Instanzen ist der Anfangswert der {{jsxref("URIError/URIError", "URIError")}}-Konstruktor.
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `URIError.prototype.name` ist der Anfangswert `"URIError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Abfangen eines URIError

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

### Erzeugung eines URIError

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
