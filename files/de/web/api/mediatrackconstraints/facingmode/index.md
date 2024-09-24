---
title: "MediaTrackConstraints: Eigenschaft facingMode"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`facingMode`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die angeforderten oder zwingenden Einschränkungen beschreibt, die für den Wert der einschränkbaren Eigenschaft {{domxref("MediaTrackSettings.facingMode", "facingMode")}} festgelegt wurden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.facingMode")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht nötig, da Browser alle Einschränkungen ignorieren, die ihnen nicht bekannt sind.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein Objekt, basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, dass ein oder mehrere akzeptable, ideale und/oder genaue (zwingende) Ausrichtungen für eine Videospur akzeptabel sind.

Ein `exact`-Wert in diesem Fall zeigt an, dass der angegebene Ausrichtungstyp speziell erforderlich ist; zum Beispiel:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

Dies bedeutet, dass nur eine benutzerzugewandte Kamera akzeptabel ist; wenn keine solche Kamera vorhanden ist oder der Benutzer die Erlaubnis zur Nutzung dieser Kamera verweigert, wird die Medienanforderung fehlschlagen.

Die folgenden Zeichenfolgen sind zulässige Werte für den Ausrichtungstyp. Diese können separate Kameras darstellen oder Richtungen, in die eine einstellbare Kamera ausgerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist auf den Benutzer gerichtet; dies schließt zum Beispiel die Frontkamera eines Smartphones ein.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer abgewandt und betrachtet dessen Umgebung. Dies ist die Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, aber zu dessen linken Seite, wie eine Kamera, die auf den Benutzer, aber über seine linke Schulter hinweg, zielt.
- `"right"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, aber zu dessen rechten Seite, wie eine Kamera, die auf den Benutzer, aber über seine rechte Schulter hinweg, zielt.

## Beispiele

Siehe das [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
