---
title: "XRSystem: Methode isSessionSupported()"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** von [`XRSystem`](/de/docs/Web/API/XRSystem) gibt ein Promise zurück, das zu `true` aufgelöst wird, wenn das WebXR-Gerät des Benutzers den angegebenen WebXR-Sitzungsmodus unterstützt. Andernfalls wird das Promise zu `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung zur Nutzung des XR-Geräts hat, wird das Promise mit einer entsprechenden [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`
  - : Ein {{jsxref("String")}}, der den WebXR-Sitzungsmodus angibt, dessen Unterstützung geprüft werden soll. Folgende Modi können geprüft werden:
    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn der angegebene Sitzungsmodus unterstützt wird; andernfalls wird es zu `false` aufgelöst.

### Ausnahmen

Statt Ausnahmen auszulösen, weist `isSessionSupported()` das zurückgegebene Promise zurück und übergibt dem Rejection-Handler eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der folgenden Strings ist:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wird durch eine `xr-spatial-tracking`-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel wird mit `isSessionSupported()` geprüft, ob das Gerät den VR-Modus unterstützt. Dazu wird geprüft, ob eine `immersive-vr`-Sitzung unterstützt wird. Falls ja, richten wir eine Schaltfläche mit der Beschriftung „Enter XR“ ein, die beim Anklicken die Methode `onButtonClicked()` aufruft, und aktivieren die Schaltfläche.

Wenn noch keine Sitzung läuft, fordern wir die VR-Sitzung an. Bei Erfolg richten wir die Sitzung in einer hier nicht gezeigten Methode namens `onSessionStarted()` ein. Wenn beim Anklicken der Schaltfläche _bereits_ eine Sitzung läuft, rufen wir die Methode [`end()`](/de/docs/Web/API/XRSession/end) des `xrSession`-Objekts auf, um die WebXR-Sitzung zu beenden.

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
