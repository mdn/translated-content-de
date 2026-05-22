---
title: WebAssembly.Tag() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Tag/Tag
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`WebAssembly.Tag()`** Konstruktor erstellt eine neue Instanz eines [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Objekts.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameter

- `type`
  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:
    - `parameters`
      - : Ein Array von Zeichenfolgen, die die Parameter des Ausnahme-Typs und deren Typen darstellen. Die Zeichenfolgen können jeden [Wasm-Typ](/de/docs/WebAssembly/Reference/Value_types) repräsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen zutrifft:
    - Der `type`-Parameter ist kein Objekt.
    - Die `type.parameters`-Eigenschaft wird nicht bereitgestellt.
    - Die `type.parameters`-Eigenschaft enthält einen nicht unterstützten Datentyp.

## Beispiele

### Grundlegende Verwendung

Dies erstellt ein Tag mit zwei Werten.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Definition
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Typ
