---
title: choose
slug: Web/XPath/Reference/Functions/choose
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `choose`-Funktion gibt eines der angegebenen Objekte basierend auf einem booleschen Parameter zurück.

> [!NOTE]
> Diese Methode sollte anstelle von `if ()` verwendet werden, welches veraltet ist.

## Syntax

```plain
choose( boolean, object1, object2 )
```

### Parameter

- `boolean`
  - : Die boolesche Operation, die verwendet wird, um zu bestimmen, welches Objekt zurückgegeben werden soll.
- `object1`
  - : Das erste Objekt, das zur Rückgabe in Betracht gezogen wird.
- `object2`
  - : Das zweite Objekt, das zur Rückgabe in Betracht gezogen wird.

### Rückgabewert

Wenn der boolesche Parameter wahr ist, wird das erste Objekt zurückgegeben; andernfalls wird das zweite Objekt zurückgegeben.

> [!NOTE]
> Alle Parameter werden ausgewertet, auch der, der nicht zurückgegeben wird.

## Spezifikationen

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Gecko-Unterstützung

Unterstützt.
