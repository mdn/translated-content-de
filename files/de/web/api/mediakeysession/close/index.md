---
title: "MediaKeySession: close()-Methode"
short-title: close()
slug: Web/API/MediaKeySession/close
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `close()`-Methode des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces zeigt an, dass die aktuelle Media-Session nicht mehr benötigt wird und dass das Content-Decryption-Modul alle mit diesem Objekt verbundenen Ressourcen freigeben und es schließen sollte.
Anschließend gibt die Methode ein {{jsxref('Promise')}} zurück.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
