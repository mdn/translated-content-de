---
title: "Navigator: wakeLock Eigenschaft"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

Die **`wakeLock`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`WakeLock`](/de/docs/Web/API/WakeLock)-Interface zurück, das es einem Dokument ermöglicht, einen Bildschirm-Wachsamkeitssperre zu erwerben. Solange eine Bildschirm-Wachsamkeitssperre aktiv ist, wird der Benutzeragent versuchen, das Gerät daran zu hindern, den Bildschirm zu dimmen, vollständig auszuschalten oder einen Bildschirmschoner anzuzeigen.

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
