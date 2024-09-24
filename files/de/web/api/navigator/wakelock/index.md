---
title: "Navigator: wakeLock-Eigenschaft"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

Die **`wakeLock`**-Schreibgeschützte Eigenschaft des {{domxref("Navigator")}}-Interfaces gibt ein {{DOMxRef("WakeLock")}}-Interface zurück, das es einem Dokument ermöglicht, eine Bildschirmsperre zu erwerben.
Während eine Bildschirmsperre aktiv ist, versucht der Benutzeragent zu verhindern, dass das Gerät den Bildschirm verdunkelt, vollständig ausschaltet oder einen Bildschirmschoner anzeigt.

## Syntax

```js-nolint
navigator.wakeLock
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{DOMxRef("WakeLock.request()")}}
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
