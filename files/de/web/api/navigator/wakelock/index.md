---
title: "Navigator: wakeLock-Eigenschaft"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

Die schreibgeschützte **`wakeLock`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt eine [`WakeLock`](/de/docs/Web/API/WakeLock)-Schnittstelle zurück, die es einem Dokument ermöglicht, eine Bildschirm-Aufwach-Sperre zu erwerben.
Während eine Bildschirm-Aufwach-Sperre aktiv ist, wird der Benutzeragent versuchen, zu verhindern, dass das Gerät den Bildschirm dimmt, vollständig ausschaltet oder einen Bildschirmschoner anzeigt.

## Syntax

```js-nolint
navigator.wakeLock
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
