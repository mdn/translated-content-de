---
title: "XRSession: Methode requestLightProbe()"
short-title: requestLightProbe()
slug: Web/API/XRSession/requestLightProbe
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestLightProbe()`**-Methode der {{domxref("XRSession")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("XRLightProbe")}}-Objekt aufgelöst wird, welches Lichtinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.

## Syntax

```js-nolint
requestLightProbe()
requestLightProbe(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `reflectionFormat`
      - : Das interne Reflexionsformat, das angibt, wie die Texturdaten dargestellt werden, entweder `srgba8` (Standardwert) oder `rgba16f`. Siehe auch {{domxref("XRSession.preferredReflectionFormat")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("XRLightProbe")}}-Objekt aufgelöst wird.

### Ausnahmen

Statt echte Ausnahmen zu werfen, lehnt `requestLightProbe()` das zurückgegebene Promise mit einer {{domxref("DOMException")}} ab, insbesondere eine der folgenden:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `lighting-estimation` keine aktivierte Funktion in {{domxref("XRSystem.requestSession()")}} ist oder wenn das `reflectionFormat` nicht `srgb8` oder das `preferredReflectionFormat` ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Sitzung bereits beendet ist.

## Beispiele

### Anfordern einer Lichtsonde mit dem bevorzugten Format des Systems

Das Standardformat ist `srgb8`, jedoch können einige Rendering-Engines andere (High Dynamic Range) Formate verwenden. Sie können die Lichtsonde mit {{domxref("XRSession.preferredReflectionFormat")}} anfordern, die das bevorzugte interne Format angibt.

```js
const lightProbe = await xrSession.requestLightProbe({
  reflectionFormat: xrSession.preferredReflectionFormat,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSession.preferredReflectionFormat")}}
