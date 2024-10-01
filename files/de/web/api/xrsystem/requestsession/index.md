---
title: "XRSystem: Methode requestSession()"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestSession()`** der **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, über das Sie die angeforderte Art der WebXR-Sitzung verwalten können.

Während nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere Inline-Sitzungen gleichzeitig laufen.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, das den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:

    - {{Experimental_Inline}} `immersive-ar`: Dem Ausgabegerät der Sitzung wird exklusiver Zugriff gewährt, aber die gerenderten Inhalte werden mit der realen Umgebung vermischt. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die Methode an, die zum Mischen der Inhalte verwendet werden soll.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung in VR-Modus mit einem immersiven XR-Gerät angezeigt wird; sie soll nicht überlagert oder in die Umgebung integriert werden. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) sollte nach Möglichkeit `opaque` sein, könnte jedoch `additive` sein, wenn die Hardware dies erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem Standard-HTML-Dokument angezeigt, anstatt den gesamten visuellen Raum zu belegen. Inline-Sitzungen können entweder im Mono- oder Stereo-Modus präsentiert werden und können mit oder ohne Benutzerrichtungserkennung verfügbar sein. Inline-Sitzungen erfordern keine spezielle Hardware und sollten in jedem {{Glossary("user_agent", "User Agent")}}, der die WebXR-API unterstützt, verfügbar sein.

- `options` {{Optional_Inline}}

  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen enthalten sind, verwendet das Gerät eine Standardkonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) _unterstützen muss_. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Funktionen identifizieren, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element angibt, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat), um die Tiefenerfassung zu konfigurieren. Siehe das [Beispiel unten](#anfordern_einer_tiefenerfassungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei Unterstützung des angeforderten Modus und der Funktionen durch Gerät und Benutzer-Agent mit einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt und ein [`DOMException`](/de/docs/Web/API/DOMException) übergeben, dessen `name` einer der folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits eine immersive VR-Sitzung entweder aktuell aktiv oder im Aufbau befindet. Es kann nur eine immersive VR-Sitzung gleichzeitig geben.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den angegebenen `sessionMode` nicht unterstützt; dies kann auch auftreten, wenn eine der _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus mehreren Gründen geschehen, die detaillierter in [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können entweder als `optionalFeatures` oder `requiredFeatures` angefordert werden.

- `anchors`
  - : Aktiviert die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich dem Typ `local`, außer dass der Benutzer nicht außerhalb eines vorgegebenen Bereichs erwartet wird, angegeben durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt.
- `depth-sensing`
  - : Ermöglicht die Fähigkeit, Tiefeninformationen über [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekte zu erhalten.
- `dom-overlay`
  - : Ermöglicht das Spezifizieren eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht die Erfassung von Handbewegungsdaten über handbasierte Eingabesteuerungen (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Aktiviert Funktionen für Hit-Tests gegen reale Geometrien.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung von Umgebungslichtbedingungen über [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekte.
- `local`
  - : Ermöglicht einen Tracking-Bereich, dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Sitzungserstellung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Benutzer wird nicht erwartet, sich signifikant von seiner Ausgangsposition zu bewegen, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich dem Typ `local`, außer dass die Ausgangsposition an einem sicheren Ort positioniert ist, um zu stehen, wobei der y-Achsenwert bei 0 auf Bodenhöhe liegt. Wenn diese Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user_agent", "User Agent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe nicht null ist, wird vom Browser erwartet, dass er sie so abrundet, dass eine {{Glossary("Fingerprinting", "Fingerabdruckerkennung")}} vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView)-Objekte als sekundäre Ansichten. Dies kann für Beobachteransichten aus der ersten Person für Videoaufnahmen oder "Quad-Ansichten" verwendet werden, bei denen es zwei Ansichten pro Auge mit unterschiedlichen Auflösungen und Sichtfeldern gibt.
- `unbounded`
  - : Ermöglicht einen Tracking-Bereich, der dem Benutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem lange Distanzen von seinem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für die Stabilität um die aktuelle Position des Benutzers optimiert, sodass sich der native Ursprung bei Bedarf verschieben kann, um dieses Bedürfnis zu erfüllen.
- `viewer`
  - : Ermöglicht einen Tracking-Bereich, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsfunktionen und die verschiedenen Referenzräume haben Mindestanforderungen an Sicherheit und Datenschutz, wie das Einholen der Zustimmung des Benutzers und/oder das Erfordernis der Richtlinie {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking) zu setzen. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsfunktion | Anforderung der Benutzerzustimmung      | Anforderungsrichtlinie |
| ---------------- | --------------------------------------- | ---------------------- |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`  |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`  |
| `hand-tracking`  | Immer erforderlich                      | —                      |
| `hit-test`       | —                                       | `xr-spatial-tracking`  |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`  |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`  |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`  |
| `viewer`         | Immer erforderlich                      | —                      |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf und fordert eine `"immersive-vr"`-Sitzung an. Wenn das {{jsxref("Promise")}} aufgelöst wird, wird eine Sitzung eingerichtet und die Animationsschleife gestartet.

```js
navigator.xr
  .requestSession("immersive-vr")
  .then((xrSession) => {
    xrSession.addEventListener("end", onXRSessionEnded);
    // Do necessary session setup here.
    // Begin the session's animation loop.
    xrSession.requestAnimationFrame(onXRAnimationFrame);
  })
  .catch((error) => {
    // "immersive-vr" sessions are not supported
    console.error(
      "'immersive-vr' isn't supported, or an error occurred activating VR!",
    );
  });
```

### Überprüfen der WebXR-Unterstützung und Nutzung eines Buttons zum Starten des VR-Modus

Das folgende Beispiel zeigt, wie sowohl `isSessionSupported()` als auch `requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist, indem das Vorhandensein von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) überprüft wird. Dann wird `isSessionSupported()` aufgerufen, wobei die gewünschte Sitzungsoption übergeben wird, bevor die Steuerung zum Betreten von XR aktiviert wird. Das Hinzufügen von Steuerelementen ist ein notwendiger Schritt, da das Betreten von XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()` `requestSession()` auf, wobei dieselbe Sitzungsoption übergeben wird, die auch an `isSessionSupported()` übergeben wurde.

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      immersiveButton.addEventListener("click", onButtonClicked);
      immersiveButton.textContent = "Enter XR";
      immersiveButton.disabled = false;
    } else {
      console.error("WebXR doesn't support immersive-vr mode!");
    }
  });
} else {
  console.error("WebXR is not available!");
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
    xrSession.end().then(() => (xrSession = null));
  }
}
```

### Anfordern einer Sitzung mit erforderlichen Funktionen

Ermöglichen Sie eine unbegrenzte Erfahrung, bei der sich der Benutzer frei in seiner physischen Umgebung bewegen kann:

```js
navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: ["unbounded"],
});
```

### Anfordern einer Sitzung mit einem DOM-Overlay

```js
navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["dom-overlay"],
  domOverlay: {
    root: document.getElementById("xr-overlay"),
  },
});
```

### Anfordern einer Tiefenerfassungssitzung

Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie die Formate "luminance-alpha" und "float32" handhaben. Die Reihenfolge zeigt die Präferenz für CPU und "luminance-alpha" an:

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    dataFormatPreference: ["luminance-alpha", "float32"],
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
