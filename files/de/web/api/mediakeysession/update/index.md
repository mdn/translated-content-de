---
title: "MediaKeySession: update()-Methode"
short-title: update()
slug: Web/API/MediaKeySession/update
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `update()`-Methode des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces lädt Nachrichten und Lizenzen in das CDM und gibt dann ein {{jsxref('Promise')}} zurück.

## Syntax

```js-nolint
update(response)
```

### Parameter

- `response`
  - : Eine Instanz, die entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} ist.

### Rückgabewert

Ein {{jsxref('Promise')}} das zu `undefined` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
