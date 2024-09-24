---
title: "MediaKeySession: Methode close()"
short-title: close()
slug: Web/API/MediaKeySession/close
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `close()`-Methode der {{domxref('MediaKeySession')}}-Schnittstelle benachrichtigt, dass die aktuelle Mediensitzung nicht mehr benötigt wird und dass das Inhaltsentschlüsselungsmodul alle mit diesem Objekt verbundenen Ressourcen freigeben und es schließen sollte. Anschließend gibt sie ein {{jsxref('Promise')}} zurück.

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
