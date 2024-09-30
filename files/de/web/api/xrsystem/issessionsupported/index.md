---
title: "XRSystem: isSessionSupported() Methode"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** von [`XRSystem`](/de/docs/Web/API/XRSystem) gibt ein Promise zurück, das zu `true` aufgelöst wird, wenn der angegebene WebXR-Sessionmodus vom WebXR-Gerät des Benutzers unterstützt wird. Andernfalls wird das Promise mit `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung zur Nutzung des XR-Geräts hat, wird das Promise mit einer entsprechenden [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den WebXR-Sessionmodus angibt, für den die Unterstützung überprüft werden soll. Mögliche Modi, die überprüft werden können:

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn der angegebene Sessionmodus unterstützt wird; andernfalls wird das Promise zu `false` aufgelöst.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, lehnt `isSessionSupported()` das zurückgegebene Promise ab und übergibt dem Rückruf für die Ablehnung eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der folgenden Strings ist.

- `SecurityError`
  - : Die Nutzung dieser Funktion wird durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel wird `isSessionSupported()` verwendet, um zu erkennen, ob das Gerät den VR-Modus unterstützt, indem geprüft wird, ob eine `immersive-vr`-Session unterstützt wird. Wenn ja, richten wir einen Button ein, der "Enter XR" liest, eine Methode `onButtonClicked()` aufruft und den Button aktiviert.

Wenn keine Session bereits läuft, fordern wir die VR-Session an und richten sie bei Erfolg in einer Methode namens `onSessionStarted()` ein, die hier nicht gezeigt wird. Wenn bereits eine Session läuft, wenn der Button geklickt wird, rufen wir die Methode [`end()`](/de/docs/Web/API/XRSession/end) des `xrSession`-Objekts auf, um die WebXR-Session zu beenden.

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
