---
title: choose
slug: Web/XPath/Functions/choose
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `choose`-Funktion gibt eines der angegebenen Objekte basierend auf einem booleschen Parameter zurück.

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
  - : Das erste Objekt, das für die Rückgabe in Betracht gezogen wird.
- `object2`
  - : Das zweite Objekt, das für die Rückgabe in Betracht gezogen wird.

### Rückgabewert

Wenn der boolesche Parameter wahr ist, wird das erste Objekt zurückgegeben; andernfalls das zweite.

> [!NOTE]
> Alle Parameter werden ausgewertet, auch derjenige, der nicht zurückgegeben wird.

## Spezifikationen

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Gecko-Unterstützung

Unterstützt.
