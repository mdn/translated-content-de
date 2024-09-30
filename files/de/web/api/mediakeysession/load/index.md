---
title: "MediaKeySession: load()-Methode"
short-title: load()
slug: Web/API/MediaKeySession/load
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `load()`-Methode des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das nach dem Laden von Daten für ein bestimmtes Sitzungsobjekt auf einen booleschen Wert aufgelöst wird.

## Syntax

```js-nolint
load(sessionId)
```

### Parameter

- `sessionId`
  - : Ein eindeutiger String, der vom Inhaltsbeschreibungsmodul für das aktuelle Medienobjekt und seine zugeordneten Schlüssel oder Lizenzen generiert wird.

### Rückgabewert

Ein {{jsxref('Promise')}} das auf einen booleschen Wert aufgelöst wird, der angibt, ob das Laden erfolgreich war oder fehlgeschlagen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
