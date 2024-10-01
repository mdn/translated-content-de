---
title: "RTCSessionDescription: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/RTCSessionDescription/toJSON
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`RTCSessionDescription.toJSON()`**-Methode erzeugt eine
{{Glossary("JSON", "JSON")}}-Beschreibung des Objekts. Beide Eigenschaften,
[`type`](/de/docs/Web/API/RTCSessionDescription/type) und
[`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp), sind in dem generierten JSON enthalten.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die folgenden Eigenschaften enthält:

- `type`
  - : Eine der folgenden: `"offer"`, `"answer"`, `"pranswer"` oder `null`.
- `sdp`
  - : Entweder `null` oder der {{Glossary("SDP", "SDP")}}-Nachrichtenstring, der der Eigenschaft [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) entspricht.

## Beispiel

```js
// sd is a RTCSessionDescriptor

alert(JSON.stringify(sd)); // This call the toJSON() method behind the scene.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
