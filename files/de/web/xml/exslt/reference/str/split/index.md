---
title: str:split()
slug: Web/XML/EXSLT/Reference/str/split
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`str:split()` teilt einen String mithilfe eines Muster-Strings, um zu bestimmen, wo die Trennungen erfolgen sollen, und gibt eine Knotenmenge zurück, die die resultierenden Strings enthält.

## Syntax

```plain
str:split(string, pattern)
```

### Parameter

- `string`
  - : Der String, der geteilt werden soll.
- `pattern`
  - : Das Muster, das angibt, wo der String getrennt werden soll.

### Rückgabewert

Eine Knotenmenge von `token`-Elementen, wobei jedes Element einen Token aus dem `string` enthält.

## Beispiel

```plain
str:split('book, phone, computer, chair', ', ')
```

Gibt eine Knotenmenge wie folgt zurück:

```xml
<token>book</token>
<token>phone</token>
<token>computer</token>
<token>chair</token>
```

## Spezifikationen

[EXSLT - STR:SPLIT](https://exslt.github.io/str/functions/split/index.html)

## Siehe auch

- [`str:tokenize()`](/de/docs/Web/XML/EXSLT/Reference/str/tokenize)
