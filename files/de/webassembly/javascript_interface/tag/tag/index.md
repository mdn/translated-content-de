---
title: WebAssembly.Tag() Konstruktor
slug: WebAssembly/JavaScript_interface/Tag/Tag
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Tag()`** Konstruktor erstellt ein neues [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag) Objekt.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameter

- `type`

  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:

    - `parameters`
      - : Ein Array von [Datentypen](/de/docs/WebAssembly/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - Der `type`-Parameter ist kein Objekt.
    - Die `type.parameters`-Eigenschaft wird nicht bereitgestellt.
    - Die `type.parameters` enthalten einen nicht unterstützten Datentyp.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
