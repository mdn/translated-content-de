---
title: WebAssembly.Tag() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Tag/Tag
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **`WebAssembly.Tag()`** Konstruktor erstellt ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Objekt.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameter

- `type`
  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:
    - `parameters`
      - : Ein Array von [Datentypen](/de/docs/WebAssembly/Guides/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - Der `type`-Parameter ist kein Objekt.
    - Die Eigenschaft `type.parameters` wird nicht bereitgestellt.
    - `type.parameters` enthält einen nicht unterstützten Datentyp.

## Beispiele

Dies erstellt einen Tag mit zwei Werten.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
