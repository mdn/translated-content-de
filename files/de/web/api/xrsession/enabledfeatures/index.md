---
title: "XRSession: enabledFeatures-Eigenschaft"
short-title: enabledFeatures
slug: Web/API/XRSession/enabledFeatures
l10n:
  sourceCommit: 104ee33c990973514704bdf8227d15c05f59ebcb
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`enabledFeatures`**-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein Array der aktivierten (gewährten) Funktionen für eine `XRSession` zurück. Dieses enthält alle `requiredFeatures` und eine Teilmenge der `optionalFeatures`, die mit [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) angefordert wurden.

## Wert

Ein {{jsxref("Array")}} von Zeichenketten.

## Beispiele

### Erkennung verfügbarer WebXR-Sitzungsfunktionen

Die Methode [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ermöglicht Ihnen, XR-[Sitzungsfunktionen](/de/docs/Web/API/XRSystem/requestSession#session_features) anzufordern. Die Funktionen können entweder als `requiredFeatures` (die `XRSession` muss die Funktion unterstützen) oder als `optionalFeatures` (die `XRSession` kann die Funktion unterstützen) angefordert werden. Die `enabledFeatures`-Eigenschaft kennzeichnet, welche Funktionen tatsächlich in der Sitzung verfügbar sind.

```js
navigator.xr
  .requestSession("immersive-ar", {
    requiredFeatures: ["local", "hit-test"],
    optionalFeatures: ["anchors"],
  })
  .then((xrSession) => {
    // Log enabledFeatures
    console.log(xrSession.enabledFeatures);

    // Check if anchors can be used
    if (xrSession.enabledFeatures.includes("anchors")) {
      // Go ahead and set up anchors
    }
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)
- [Sitzungsfunktionen](/de/docs/Web/API/XRSystem/requestSession#session_features)
