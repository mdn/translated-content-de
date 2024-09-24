---
title: "RTCSessionDescription: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/RTCSessionDescription/toJSON
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`RTCSessionDescription.toJSON()`**-Methode erzeugt eine {{Glossary("JSON")}}-Beschreibung des Objekts. Beide Eigenschaften, {{domxref("RTCSessionDescription.type", "type")}} und {{domxref("RTCSessionDescription.sdp", "sdp")}}, sind im generierten JSON enthalten.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die folgenden Eigenschaften enthält:

- `type`
  - : Eine der folgenden Optionen: `"offer"`, `"answer"`, `"pranswer"` oder `null`.
- `sdp`
  - : Entweder `null` oder der {{Glossary("SDP")}}-Nachrichtenstring, der der Eigenschaft {{domxref("RTCSessionDescription.sdp")}} entspricht.

## Beispiel

```js
// sd ist ein RTCSessionDescriptor

alert(JSON.stringify(sd)); // Dies ruft die toJSON()-Methode im Hintergrund auf.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
