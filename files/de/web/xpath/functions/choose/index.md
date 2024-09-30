---
title: choose
slug: Web/XPath/Functions/choose
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XsltSidebar}}

Die Funktion `choose` gibt basierend auf einem booleschen Parameter eines der angegebenen Objekte zurück.

> [!NOTE]
> Diese Methode sollte anstelle von `if ()` verwendet werden, das veraltet ist.

## Syntax

```plain
choose( boolean, object1, object2 )
```

### Parameter

- `boolean`
  - : Die boolesche Operation, die verwendet wird, um zu bestimmen, welches Objekt zurückgegeben wird.
- `object1`
  - : Das erste Objekt, das in Betracht gezogen wird, zurückgegeben zu werden.
- `object2`
  - : Das zweite Objekt, das in Betracht gezogen wird, zurückgegeben zu werden.

### Rückgabewert

Wenn der boolesche Parameter wahr ist, wird das erste Objekt zurückgegeben; andernfalls wird das zweite Objekt zurückgegeben.

> [!NOTE]
> Alle Parameter werden ausgewertet, auch derjenige, der nicht zurückgegeben wird.

## Spezifikationen

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Gecko-Unterstützung

Unterstützt.
