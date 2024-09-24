---
title: "MediaKeySession: update()-Methode"
short-title: update()
slug: Web/API/MediaKeySession/update
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `update()`-Methode der {{domxref('MediaKeySession')}} Schnittstelle lädt Nachrichten und Lizenzen in das CDM hoch und gibt dann ein {{jsxref('Promise')}} zurück.

## Syntax

```js-nolint
update(response)
```

### Parameter

- `response`
  - : Eine Instanz, die entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich in `undefined` auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
