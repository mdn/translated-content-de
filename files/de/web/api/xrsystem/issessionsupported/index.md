---
title: "XRSystem: isSessionSupported()-Methode"
short-title: isSessionSupported()
slug: Web/API/XRSystem/isSessionSupported
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`isSessionSupported()`** von {{domxref("XRSystem")}} gibt ein Promise zurück, das auf `true` aufgelöst wird, wenn der angegebene WebXR-Sitzungsmodus vom WebXR-Gerät des Benutzers unterstützt wird. Andernfalls wird das Promise mit `false` aufgelöst.

Wenn keine Geräte verfügbar sind oder der Browser keine Berechtigung hat, das XR-Gerät zu verwenden, wird das Promise mit einem entsprechenden {{domxref("DOMException")}} abgelehnt.

## Syntax

```js-nolint
isSessionSupported(mode)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den WebXR-Sitzungsmodus angibt, für den die Unterstützung überprüft werden soll. Mögliche Modi zur Überprüfung:

    - `immersive-ar` {{Experimental_Inline}}
    - `immersive-vr`
    - `inline`

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der angegebene Sitzungsmodus unterstützt wird; andernfalls wird das Promise mit `false` aufgelöst.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, weist `isSessionSupported()` das zurückgegebene Promise ab und übergibt dem Ablehnungshandler ein {{domxref("DOMException")}}, dessen `name` einer der folgenden Zeichenfolgen ist.

- `SecurityError`
  - : Die Nutzung dieser Funktion wird durch eine `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

In diesem Beispiel sehen wir, wie `isSessionSupported()` verwendet wird, um zu erkennen, ob das Gerät den VR-Modus unterstützt, indem überprüft wird, ob eine `immersive-vr`-Sitzung unterstützt wird. Wenn ja, stellen wir einen Button bereit, dessen Beschriftung "Enter XR" lautet, eine Methode `onButtonClicked()` aufruft und den Button aktiviert.

Wenn keine Sitzung bereits läuft, fordern wir die VR-Sitzung an und richten sie bei Erfolg in einer Methode namens `onSessionStarted()` ein, die hier nicht gezeigt wird. Wenn bereits eine Sitzung läuft, wenn der Button geklickt wird, rufen wir die {{domxref("XRSession.end", "end()")}}-Methode des `xrSession`-Objekts auf, um die WebXR-Sitzung zu beenden.

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
      // onSessionStarted() nicht gezeigt aus Gründen der Kürze und Klarheit.
      onSessionStarted(xrSession);
    });
  } else {
    // Button ist ein Umschaltknopf.
    xrSession.end();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
