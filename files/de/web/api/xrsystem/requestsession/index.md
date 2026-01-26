---
title: "XRSystem: requestSession()-Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Schnittstelle's
**`requestSession()`**-Methode gibt ein {{jsxref("promise")}} zurück,
das mit einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, über welches Sie die
angeforderte Art der WebXR-Sitzung verwalten können.

Während nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere
Inline-Sitzungen gleichzeitig durchgeführt werden.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`
  - : Ein {{jsxref("String")}}, der den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:
    - {{Experimental_Inline}} `immersive-ar`: Der Ausgabe der Sitzung wird exklusiver Zugriff auf das immersive Gerät gegeben,
      aber der gerenderte Inhalt wird mit der realen Umgebung vermischt.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die Methode an,
      die verwendet wird, um den Inhalt zu mischen.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung mit einem immersiven XR-Gerät
      im VR-Modus angezeigt wird; sie ist nicht dafür vorgesehen, in die umgebende Umgebung überlagert oder integriert zu werden.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) sollte, wenn möglich,
      `opaque` sein, könnte aber `additive` sein, wenn es die Hardware erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem Standard-HTML-Dokument präsentiert,
      anstatt den gesamten visuellen Raum zu beanspruchen. Inline-Sitzungen können entweder in Mono- oder Stereo-Modus präsentiert werden
      und könnten möglicherweise oder möglicherweise nicht über eine Beobachterverfolgung verfügen. Inline-Sitzungen erfordern keine spezielle Hardware und sollten
      auf jedem {{Glossary("user_agent", "User-Agent")}} verfügbar sein, der die WebXR-API unterstützt.

- `options` {{Optional_Inline}}
  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen enthalten sind, verwendet das Gerät eine Standardfunktionskonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession)
      _unterstützen muss_. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Funktionen identifizieren, die die zurückgegebene
      [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element angibt, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat), um die Tiefenerkennung zu konfigurieren. Siehe das [Beispiel unten](#anfordern_einer_tiefenerkennungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, wenn das
Gerät und der User-Agent den angeforderten Modus und Funktionen unterstützen.

### Ausnahmen

Diese Methode löst keine echten Ausnahmen aus; stattdessen lehnt sie das zurückgegebene Versprechen ab,
indem sie ein [`DOMException`](/de/docs/Web/API/DOMException) hineinreicht, dessen `name` einer der
folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits eine
    immersive VR-Sitzung entweder aktiv ist oder gerade eingerichtet wird. Es
    kann nur eine immersive VR-Sitzung gleichzeitig geben.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den
    angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn eine der
    _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis, den angegebenen XR-Modus zu betreten, verweigert wird. Dies kann aus mehreren Gründen geschehen, die im Detail unter [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können angefordert werden, entweder als `optionalFeatures` oder `requiredFeatures`.

- `anchors`
  - : Ermöglicht die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich wie der `local`-Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorher festgelegten Grenze zu bewegen, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt gegeben ist.
- `depth-sensing`
  - : Ermöglicht die Erfassung von Tiefeninformationen mit [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekten.
- `dom-overlay`
  - : Ermöglicht das Spezifizieren eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht detaillierte Handposeninformationen von handbasierten Eingabesteuerungen (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Ermöglicht Treffertestfunktionen zur Durchführung von Treffertests gegen reale Geometrien.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung von Umgebungslichtbedingungen mit [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekten.
- `local`
  - : Ermöglicht einen Verfolgungsbereich, dessen nativer Ursprung in der Nähe der Position des Betrachters zur Zeit der Sitzungerstellung liegt. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Vom Benutzer wird nicht erwartet, dass er sich weit über seine Anfangsposition hinaus bewegt, und die Verfolgung ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich wie der `local`-Typ, außer dass die Startposition an einem sicheren Ort für den Betrachter zum Stehen platziert wird, wobei der Wert der y-Achse auf 0 auf Bodenhöhe liegt. Wenn diese Bodenhöhe nicht bekannt ist, wird der {{Glossary("user_agent", "User-Agent")}} die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe nicht null ist, wird erwartet, dass der Browser sie so rundet, dass {{Glossary("Fingerprinting", "Fingerprinting")}} vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht, dass [`XRView`](/de/docs/Web/API/XRView)-Objekte Sekundäransichten sind. Dies kann für Beobachteransichten aus der Ego-Perspektive zur Videoaufnahme oder "Quad-Ansichten" verwendet werden, bei denen es pro Auge zwei Ansichten mit unterschiedlicher Auflösung und unterschiedlichen Sichtfeldern gibt.
- `unbounded`
  - : Ermöglicht einen Verfolgungsbereich, der dem Benutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem große Entfernungen von ihrem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; die Verfolgung ist für Stabilität rund um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung bei Bedarf abdriften kann, um dieser Anforderung gerecht zu werden.
- `viewer`
  - : Ermöglicht einen Verfolgungsbereich, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsfunktionen und die verschiedenen Referenzräume haben minimale Sicherheits- und Datenschutzanforderungen, wie das Einholen der Benutzereinwilligung und/oder das Erfordern der {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking)-Direktive. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsfunktion | Erfordernis der Benutzereinwilligung    | Erfordernis der Berechtigungsrichtlinie |
| ---------------- | --------------------------------------- | --------------------------------------- |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`                   |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`                   |
| `hand-tracking`  | Immer erforderlich                      | —                                       |
| `hit-test`       | —                                       | `xr-spatial-tracking`                   |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`                   |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`                   |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`                   |
| `viewer`         | Immer erforderlich                      | —                                       |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf und fordert eine
`"immersive-vr"`-Sitzung an. Wenn das {{jsxref("Promise")}} aufgelöst wird, richtet es eine
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

### Überprüfen der WebXR-Unterstützung und Verwendung eines Buttons zur Aktivierung des VR-Modus

Das folgende Beispiel zeigt, wie sowohl `isSessionSupported()` als auch
`requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist,
indem die Existenz von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) überprüft wird. Als nächstes wird
`isSessionSupported()` aufgerufen und die gewünschte Sitzungsoption übergeben, bevor
Steuerelemente zum Eingeben von XR aktiviert werden. Das Hinzufügen von Steuerelementen ist ein notwendiger Schritt, da das Eingeben von XR
eine Benutzeraktion erfordert. Schließlich ruft die `onButtonClicked()`-Methode
`requestSession()` mit derselben Sitzungsoption auf, die an
`isSessionSupported()` übergeben wurde.

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

Fordert eine unbegrenzte Erfahrung an, bei der der Benutzer sich frei in seiner physischen Umgebung bewegen kann:

```js
navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: ["unbounded"],
});
```

### Anfordern einer Sitzung mit DOM-Overlay

```js
navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["dom-overlay"],
  domOverlay: {
    root: document.getElementById("xr-overlay"),
  },
});
```

### Anfordern einer Tiefenerkennungssitzung

Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie sowohl "luminance-alpha" als auch "float32" Formate handhaben. Die Reihenfolge gibt die Präferenz für CPU und "luminance-alpha" an:

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
