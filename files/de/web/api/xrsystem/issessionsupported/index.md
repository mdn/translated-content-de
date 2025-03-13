---
title: "XRSystem: isSessionSupported() Methode"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** des [`XRSystem`](/de/docs/Web/API/XRSystem) gibt ein Versprechen zurück, das auf `true` aufgelöst wird, wenn der angegebene WebXR-Sitzungs-Modus vom WebXR-Gerät des Benutzers unterstützt wird. Andernfalls wird das Versprechen mit `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung hat, das XR-Gerät zu verwenden, wird das Versprechen mit einer entsprechenden [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den WebXR-Sitzungsmodus angibt, für den die Unterstützung überprüft werden soll. Mögliche Modi, die überprüft werden können:

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der angegebene Sitzungsmodus unterstützt wird; andernfalls wird das Versprechen auf `false` aufgelöst.

### Ausnahmen

Anstatt echte Ausnahmen auszulösen, lehnt `isSessionSupported()` das zurückgegebene Versprechen ab und übergibt dem Ablehnungs-Handler eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der folgenden Strings ist.

- `SecurityError`
  - : Die Nutzung dieses Features wird durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel sehen wir, wie `isSessionSupported()` verwendet wird, um zu erkennen, ob das Gerät den VR-Modus unterstützt, indem überprüft wird, ob eine `immersive-vr`-Sitzung unterstützt wird. Wenn dies der Fall ist, richten wir eine Schaltfläche ein, die "Enter XR" anzeigt, um eine Methode `onButtonClicked()` aufzurufen, und aktivieren die Schaltfläche.

Wenn noch keine Sitzung läuft, fordern wir die VR-Sitzung an und richten sie, wenn erfolgreich, in einer Methode namens `onSessionStarted()` ein, die hier nicht gezeigt wird. Falls bereits eine Sitzung läuft, wenn die Schaltfläche geklickt wird, rufen wir die [`end()`](/de/docs/Web/API/XRSession/end)-Methode des `xrSession`-Objekts auf, um die WebXR-Sitzung zu beenden.

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
