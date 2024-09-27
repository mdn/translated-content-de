---
title: "XRSystem: isSessionSupported()-Methode"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** des [`XRSystem`](/de/docs/Web/API/XRSystem) gibt ein Versprechen zurück, das bei Erfolg zu `true` aufgelöst wird, wenn der angegebene WebXR-Sitzungsmodus vom WebXR-Gerät des Benutzers unterstützt wird. Andernfalls wird das Versprechen mit `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung hat, das XR-Gerät zu verwenden, wird das Versprechen mit einem entsprechenden [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den WebXR-Sitzungsmodus angibt, für den die Unterstützung geprüft werden soll. Mögliche Modi, die geprüft werden können:

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn der angegebene Sitzungsmodus unterstützt wird; ansonsten wird das Versprechen zu `false` aufgelöst.

### Ausnahmen

Anstatt tatsächlicher Ausnahmen löst `isSessionSupported()` das zurückgegebene Versprechen ab und übergibt dem Ablehnungs-Handler ein [`DOMException`](/de/docs/Web/API/DOMException), dessen `name` eine der folgenden Zeichenfolgen ist.

- `SecurityError`
  - : Die Nutzung dieser Funktion wird durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel wird `isSessionSupported()` verwendet, um zu erkennen, ob das Gerät den VR-Modus unterstützt, indem geprüft wird, ob eine `immersive-vr`-Sitzung unterstützt wird. Wenn ja, richten wir eine Schaltfläche ein, die "Enter XR" liest, um eine Methode `onButtonClicked()` aufzurufen und die Schaltfläche zu aktivieren.

Wenn keine Sitzung bereits läuft, fordern wir die VR-Sitzung an und richten bei Erfolg die Sitzung in einer Methode namens `onSessionStarted()` ein, die nicht gezeigt wird. Wenn bereits eine Sitzung läuft, wenn die Schaltfläche geklickt wird, rufen wir die [`end()`](/de/docs/Web/API/XRSession/end)-Methode des `xrSession`-Objekts auf, um die WebXR-Sitzung zu beenden.

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
