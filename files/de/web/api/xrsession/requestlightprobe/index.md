---
title: "XRSession: Methode requestLightProbe()"
short-title: requestLightProbe()
slug: Web/API/XRSession/requestLightProbe
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestLightProbe()`**-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)-Objekt aufgelöst wird, das Beleuchtungsinformationen an einem bestimmten Punkt in der Umgebung des Benutzers schätzt.

## Syntax

```js-nolint
requestLightProbe()
requestLightProbe(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `reflectionFormat`
      - : Das interne Reflexionsformat, das angibt, wie die Texturdaten dargestellt werden, entweder `srgba8` (Standardwert) oder `rgba16f`. Siehe auch [`XRSession.preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)-Objekt aufgelöst wird.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, verwirft `requestLightProbe()` das zurückgegebene Versprechen mit einer [`DOMException`](/de/docs/Web/API/DOMException), insbesondere eine der folgenden:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `lighting-estimation` keine aktivierte Funktion in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist oder wenn das `reflectionFormat` nicht `srgb8` oder das `preferredReflectionFormat` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Sitzung bereits beendet ist.

## Beispiele

### Anfordern einer Lichtsonde mit dem bevorzugten Format des Systems

Das Standardformat ist `srgb8`, jedoch können einige Render-Engines andere (High Dynamic Range) Formate verwenden. Sie können die Lichtsonde mit [`XRSession.preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat) anfordern, das das bevorzugte interne Format angibt.

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

- [`XRSession.preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat)
