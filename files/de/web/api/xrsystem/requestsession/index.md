---
title: "XRSystem: requestSession() Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **[`XRSystem`](/de/docs/Web/API/XRSystem)** Schnittstelle verfügt über die
**`requestSession()`** Methode, die ein {{jsxref("Promise")}} zurückgibt,
das zu einem [`XRSession`](/de/docs/Web/API/XRSession) Objekt aufgelöst wird, über das Sie den angeforderten Typ der WebXR-Sitzung verwalten können.

Obwohl nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere Inline-Sitzungen gleichzeitig im Gange sein.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`
  - : Ein {{jsxref("String")}}, das den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:
    - {{Experimental_Inline}} `immersive-ar`: Die Ausgabe der Sitzung erhält exklusiven Zugriff auf das immersive Gerät, aber der gerenderte Inhalt wird mit der realen Umgebung vermischt. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die Methode an, mit der der Inhalt zusammengeführt wird.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung mit einem immersiven XR-Gerät im VR-Modus angezeigt wird; sie soll nicht überlagert oder in die umgebende Umgebung integriert werden. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) sollte, wenn möglich, `opaque` sein, kann aber `additive` sein, wenn die Hardware dies erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem Standard-HTML-Dokument präsentiert, anstatt den gesamten visuellen Raum zu beanspruchen. Inline-Sitzungen können im Mono- oder Stereo-Modus präsentiert werden und können mit oder ohne Betrachter-Tracking verfügbar sein. Inline-Sitzungen erfordern keine spezielle Hardware und sollten auf jedem {{Glossary("user_agent", "User Agent")}} verfügbar sein, der die WebXR API unterstützt.

- `options` {{Optional_Inline}}
  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen enthalten sind, verwendet das Gerät eine Standardfunktionskonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) _unterstützen muss_. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Funktionen identifizieren, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) möglicherweise unterstützen kann. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element angibt, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat), um zu konfigurieren, wie das Tiefenerfassen durchgeführt werden soll. Siehe das [Beispiel unten](#anfordern_einer_tiefensensor-sitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRSession`](/de/docs/Web/API/XRSession) Objekt auflöst, wenn das Gerät und der User Agent den angeforderten Modus und die Funktionen unterstützen.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen lehnt sie das zurückgegebene Versprechen ab und gibt ein [`DOMException`](/de/docs/Web/API/DOMException) zurück, dessen `name` einer der folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits eine immersive VR-Sitzung entweder gerade aktiv oder im Aufbau ist. Es kann immer nur eine immersive VR-Sitzung gleichzeitig geben.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn eine der _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Berechtigung zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus mehreren Gründen geschehen, die im Abschnitt zu [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) ausführlicher behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können entweder als `optionalFeatures` oder `requiredFeatures` angefordert werden.

- `anchors`
  - : Aktiviert die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor) Objekten.
- `bounded-floor`
  - : Ähnlich wie der `local` Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorherbestimmten Grenze zu bewegen, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt definiert ist.
- `depth-sensing`
  - : Ermöglicht die Fähigkeit, Tiefeninformationen mithilfe von [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation) Objekten zu erhalten.
- `dom-overlay`
  - : Ermöglicht die Angabe eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Aktiviert detaillierte Handposes von handbasierten Eingabegeräten (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Aktiviert Funktionen zum Durchführen von Trefferprüfungen gegen reale Geometrie.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Fähigkeit, die Umgebungslichtverhältnisse mithilfe von [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate) Objekten abzuschätzen.
- `local`
  - : Aktiviert einen Trackingraum, dessen native Ursprung in der Nähe der Position des Betrachters zum Zeitpunkt der Sitzungserstellung liegt. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich der Benutzer wesentlich über seine Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich wie der `local` Typ, außer dass die Ausgangsposition an einem sicheren Standort für den Betrachter zum Stehen platziert wird, wobei der Wert der y-Achse an der Bodenebene 0 ist. Wenn diese Bodenebene nicht bekannt ist, schätzt der {{Glossary("user_agent", "User Agent")}} die Bodenebene. Wenn die geschätzte Bodenebene ungleich null ist, wird erwartet, dass der Browser diese auf eine Weise rundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu vermeiden (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView) Objekte als sekundäre Ansichten. Dies kann für Beobachteransichten aus der ersten Person verwendet werden, die für die Videoaufnahme genutzt werden, oder "Quad-Ansichten", bei denen es zwei Ansichten pro Auge mit unterschiedlicher Auflösung und Sichtfeldern gibt.
- `unbounded`
  - : Aktiviert einen Trackingraum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem große Entfernungen von ihrem Ursprungsort. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung nach Bedarf driften kann, um diesen Bedarf zu decken.
- `viewer`
  - : Ermöglicht einen Trackingraum, dessen native Ursprung der Position und Orientierung des Betrachters folgt.

## Sicherheit

Mehrere Sitzungsfunktionen und die verschiedenen Referenzräume haben Mindestanforderungen an Sicherheit und Privatsphäre, wie etwa das Einholen der Zustimmung des Benutzers und/oder das Erfordern der {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking) Direktive. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsfunktion | Anforderung der Benutzereinwilligung    | Anforderung an die Berechtigungsrichtlinie |
| ---------------- | --------------------------------------- | ------------------------------------------ |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`                      |
| `hand-tracking`  | Immer erforderlich                      | —                                          |
| `hit-test`       | —                                       | `xr-spatial-tracking`                      |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`                      |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`                      |
| `viewer`         | Immer erforderlich                      | —                                          |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf, um eine
`"immersive-vr"` Sitzung anzufordern. Wenn das {{jsxref("Promise")}} aufgelöst wird, richtet es eine
Sitzung ein und initiiert die Animationsschleife.

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

### Überprüfen der Unterstützung von WebXR und Verwenden eines Buttons, um den VR-Modus zu starten

Das folgende Beispiel zeigt, wie sowohl `isSessionSupported()` als auch
`requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist, indem das Vorhandensein von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) verifiziert wird. Dann wird `isSessionSupported()` aufgerufen, wobei die gewünschte Sitzungsoption übergeben wird, bevor Steuerungen zum Betreten von XR aktiviert werden. Das Hinzufügen von Steuerungen ist ein notwendiger Schritt, da das Betreten von XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()`
`requestSession()` auf, wobei dieselbe Sitzungsoption verwendet wird, die auch an `isSessionSupported()` übergeben wurde.

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

Ermöglicht eine ungebundene Erfahrung, bei der sich der Benutzer frei in seiner physischen Umgebung bewegen kann:

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

### Anfordern einer Tiefensensor-Sitzung

Hier kann der Aufrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie die Formate "luminance-alpha" und "float32" handhaben. Die Reihenfolge gibt die Präferenz für CPU und "luminance-alpha" an:

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
