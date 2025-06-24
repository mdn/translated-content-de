---
title: "XRSystem: requestSession() Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Schnittstelle
stellt die Methode **`requestSession()`** zur Verfügung, die ein {{jsxref("promise")}}
zurückgibt, das zu einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, über das Sie den
angeforderten Typ der WebXR-Sitzung verwalten können.

Während jeweils nur eine immersive VR-Sitzung aktiv sein kann, können mehrere
Inline-Sitzungen gleichzeitig aktiv sein.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:
    - {{Experimental_Inline}} `immersive-ar`: Die Ausgabe der Sitzung erhält exklusiven Zugriff auf das immersive Gerät,
      jedoch wird der gerenderte Inhalt mit der realen Umgebung vermischt.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die verwendete Methode
      zum Mischen des Inhalts an.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung mit einem immersiven XR-Gerät
      im VR-Modus angezeigt wird; sie soll nicht überlagert oder in die Umgebung integriert werden.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) soll wenn möglich
      `opaque` sein, kann aber `additive` sein, wenn es die Hardware erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem standardmäßigen HTML-Dokument präsentiert,
      anstatt den gesamten visuellen Raum zu nutzen. Inline-Sitzungen können entweder im Mono- oder Stereo-Modus präsentiert werden
      und können je nach Benutzeragent sowohl mit als auch ohne Betrachterverfolgung verfügbar sein. Inline-Sitzungen erfordern keine spezielle Hardware und sollten
      auf jedem {{Glossary("user_agent", "User-Agent")}}, der die WebXR-API unterstützt, verfügbar sein.

- `options` {{Optional_Inline}}
  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen enthalten sind, verwendet das Gerät eine Standard-Feature-Konfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession)
      _unterstützen muss_. Siehe [Session-Features](#sitzungs-features) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Features identifizieren, die die zurückgegebene
      [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe [Session-Features](#sitzungs-features) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element spezifiziert, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat), um die Durchführung der Tiefenerfassung zu konfigurieren. Siehe das [Beispiel unten](#anfordern_einer_tiefenerfassungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt auflöst, wenn das
Gerät und der Benutzeragent den angeforderten Modus und die Features unterstützen.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab
und übergibt eine [`DOMException`](/de/docs/Web/API/DOMException), deren `name` einer der
folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits
    eine immersive VR-Sitzung entweder aktiv oder im Aufbau ist. Es
    kann jeweils nur eine immersive VR-Sitzung vorhanden sein.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den
    angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn einer der
    _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis zum Betreten des bestimmten XR-Modus verweigert wird. Dies kann aus mehreren Gründen geschehen, die in [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) ausführlicher behandelt werden.

## Sitzungs-Features

Die folgenden Sitzungs-Features und Referenzräume können entweder als `optionalFeatures` oder `requiredFeatures` angefordert werden.

- `anchors`
  - : Aktiviert die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich wie der `local`-Typ, außer dass der Benutzer sich nicht außerhalb einer vorher festgelegten Grenze, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird, bewegen soll.
- `depth-sensing`
  - : Aktiviert die Möglichkeit, Tiefeninformationen mithilfe von [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekten zu erhalten.
- `dom-overlay`
  - : Aktiviert die Möglichkeit, ein DOM-Overlay-Element zu spezifizieren, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht die Erfassung der Artikulationshaltung der Hand von handbasierten Eingabereglern (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Aktiviert Funktionen für den Hit-Test gegen reale Geometrien.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung von Lichtverhältnissen in der Umgebung mithilfe von [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekten.
- `local`
  - : Ermöglicht einen Verfolgungsraum, dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Sitzungsführung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Benutzer soll sich nicht viel weiter als seine Ausgangsposition bewegen, und die Verfolgung ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich dem `local`-Typ, außer dass die Ausgangsposition an einem sicheren Standort für den Benutzer platziert wird, wobei der Wert der y-Achse auf 0 am Boden liegt. Wenn diese Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user_agent", "Benutzeragent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe ungleich null ist, wird erwartet, dass der Browser sie entsprechend auf die nächste Ganzzahl rundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu vermeiden (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView)-Objekte als sekundäre Ansichten. Dies kann für Erst-Person-Ansichten, die zur Videofortführung verwendet werden, oder für "Quad-Ansichten", bei denen zwei Ansichten pro Auge sind, mit unterschiedlichen Auflösungen und Sichtfeldern genutzt werden.
- `unbounded`
  - : Ermöglicht einen Verfolgungsraum, der Benutzern totale Bewegungsfreiheit erlaubt, möglicherweise über extreme Entfernungen von ihrem Ursprungsstandort hinweg. Der Betrachter wird nicht verfolgt; die Verfolgung ist auf Stabilität rund um den aktuellen Position des Benutzers optimiert, sodass der native Ursprung driftet, um dies zu ermöglichen.
- `viewer`
  - : Ermöglicht einen Verfolgungsraum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungs-Features und die verschiedenen Referenzräume haben minimale Sicherheits- und Datenschutzanforderungen, wie etwa das Einholen der Benutzererlaubnis und/oder das Einrichten der {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking)-Richtlinie. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungs-Feature | Benutzererlaubnis erforderlich          | Richtlinie für Berechtigungen erforderlich |
| ---------------- | --------------------------------------- | ------------------------------------------ |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`                      |
| `hand-tracking`  | Immer erforderlich                      | —                                          |
| `hit-test`       | —                                       | `xr-spatial-tracking`                      |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`                      |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `viewer`         | Immer erforderlich                      | —                                          |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation).

## Beispiele

### Eine immersive VR-Sitzung erstellen

Das folgende Beispiel ruft `requestSession()` auf und fordert eine
`"immersive-vr"`-Sitzung an. Wenn das {{jsxref("Promise")}} aufgelöst wird, richtet es eine
Sitzung ein und startet die Animationsschleife.

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

### Überprüfen der WebXR-Unterstützung und Verwendung eines Buttons zur Aktivierung des VR-Modus

Das folgende Beispiel zeigt, wie `isSessionSupported()` und
`requestSession()` verwendet werden. Zuerst wird geprüft, ob WebXR verfügbar ist, indem das Vorhandensein von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) überprüft wird. Dann wird `isSessionSupported()` aufgerufen, wobei die gewünschte Sitzungsoption übergeben wird, bevor die
Steuerelemente für das Betreten von XR aktiviert werden. Das Hinzufügen von Steuerelementen ist notwendig, weil das Betreten von XR
einen Benutzeraktion erfordert. Abschließend ruft die Methode `onButtonClicked()` `requestSession()` auf, wobei dieselbe Sitzungsoption verwendet wird, die auch an `isSessionSupported()` übergeben wurde.

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

### Anfordern einer Sitzung mit erforderlichen Features

Erfordern eines uneingeschränkten Erlebnisses, bei dem der Benutzer sich frei in seiner physischen Umgebung bewegen kann:

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

Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie die Formate "luminance-alpha" und "float32" handhaben. Die Reihenfolge gibt eine Präferenz für die CPU-Nutzung und "luminance-alpha" an:

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
