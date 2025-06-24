---
title: "XRSystem: isSessionSupported()-Methode"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** des [`XRSystem`](/de/docs/Web/API/XRSystem) gibt ein `Promise` zurück, das auf `true` aufgelöst wird, wenn der spezifizierte WebXR-Sitzungsmodus vom WebXR-Gerät des Nutzers unterstützt wird. Andernfalls wird das `Promise` mit `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung hat, das XR-Gerät zu verwenden, wird das `Promise` mit einer entsprechenden [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`
  - : Ein {{jsxref("String")}}, der den WebXR-Sitzungsmodus angibt, dessen Unterstützung überprüft werden soll. Mögliche zu überprüfende Modi:
    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der angegebene Sitzungsmodus unterstützt wird; andernfalls wird das `Promise` mit `false` aufgelöst.

### Ausnahmen

Anstatt echte Ausnahmen auszulösen, lehnt `isSessionSupported()` das zurückgegebene `Promise` ab und übergibt dem Ablehnungs-Handler eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der folgenden Zeichenfolgen ist:

- `SecurityError`
  - : Die Nutzung dieses Features wird durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel wird `isSessionSupported()` verwendet, um zu erkennen, ob das Gerät den VR-Modus unterstützt, indem überprüft wird, ob eine `immersive-vr`-Sitzung unterstützt wird. Falls dies der Fall ist, richten wir einen Button ein, der "Enter XR" liest, eine Methode `onButtonClicked()` aufruft und den Button aktiviert.

Wenn noch keine Sitzung läuft, fordern wir die VR-Sitzung an und, im Erfolgsfall, richten wir die Sitzung in einer Methode namens `onSessionStarted()` ein, die hier nicht gezeigt wird. Wenn bereits eine Sitzung läuft, wenn der Button gedrückt wird, rufen wir die Methode [`end()`](/de/docs/Web/API/XRSession/end) des `xrSession`-Objekts auf, um die WebXR-Sitzung zu beenden.

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      userButton.addEventListener("click", onButtonClicked);
      userButton.textContent = "Enter XR";
      userButton.disabled = false;
    }
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      xrSession = session;
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(xrSession);
    });
  } else {
    // Button is a toggle button.
    xrSession.end();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
