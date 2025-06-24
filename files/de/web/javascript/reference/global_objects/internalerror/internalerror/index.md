---
title: InternalError() Konstruktor
short-title: InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{Non-standard_Header}}

Der **`InternalError()`** Konstruktor erstellt {{jsxref("InternalError")}} Objekte.

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

> [!NOTE] > `InternalError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `InternalError` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzugeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursachte.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursachte.

## Beispiele

### Erstellen eines neuen InternalError

```js
new InternalError("Engine failure");
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
