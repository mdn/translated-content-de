---
title: "MediaKeys: createSession()-Methode"
short-title: createSession()
slug: Web/API/MediaKeys/createSession
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `createSession()`-Methode der {{domxref("MediaKeys")}}-Schnittstelle gibt ein neues {{domxref("MediaKeySession")}}-Objekt zurück, das einen Kontext für den Nachrichtenaustausch mit einem Content-Decryption-Module (CDM) darstellt.

## Syntax

```js-nolint
createSession()
createSession(mediaKeySessionType)
```

### Parameter

- `mediaKeySessionType` {{optional_inline}}
  - : Ein String. Entweder "temporary" oder "persistent-license". Der Standardwert ist "temporary".

### Rückgabewert

Ein neues {{domxref("MediaKeySession")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
