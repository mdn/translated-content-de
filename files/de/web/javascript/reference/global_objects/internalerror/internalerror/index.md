---
title: InternalError() Konstruktor
short-title: InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Der **`InternalError()`** Konstruktor erstellt {{jsxref("InternalError")}}-Objekte.

## Syntax

```js-nolint
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> [!NOTE]
> `InternalError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Varianten erzeugen eine neue Instanz von `InternalError`.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Wenn Sie einen Fehler abfangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut werfen, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

### Erstellen eines neuen InternalError

```js
new InternalError("Engine failure");
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
