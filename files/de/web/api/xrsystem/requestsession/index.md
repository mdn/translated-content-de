---
title: "XRSystem: requestSession()-Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Schnittstelle bietet die
**`requestSession()`**-Methode, die ein {{jsxref("promise")}} zurückgibt,
das sich zu einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt auflöst, über das Sie den
angeforderten Typ der WebXR-Session verwalten können.

Während jeweils nur eine immersive VR-Sitzung aktiv sein kann, können mehrere
Inline-Sitzungen gleichzeitig aktiv sein.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den XR-Sessionsmodus definiert. Die unterstützten Modi sind:

    - {{Experimental_Inline}} `immersive-ar`: Der Ausgabe der Sitzung wird exklusiver Zugriff auf das immersive Gerät gewährt, aber der gerenderte Inhalt wird mit der realen Umgebung vermischt.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die Methode an,
      mit der die Inhalte zusammengefügt werden sollen.
    - `immersive-vr`: Zeigt an, dass die gerenderte Sitzung in VR-Modus mit einem immersiven XR-Gerät angezeigt wird;
      sie soll nicht überlagert oder in die umgebende Umgebung integriert werden.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) sollte nach Möglichkeit
      `opaque` sein, könnte jedoch `additive` sein, falls es die Hardware erfordert.
    - `inline`: Die Ausgabe wird innerhalb eines Elements in einem Standard-HTML-Dokument inline präsentiert,
      anstatt den gesamten visuellen Raum einzunehmen. Inline-Sitzungen können in Mono- oder Stereo-Modus präsentiert werden
      und möglicherweise ist das Verfolgen der Betrachter nicht verfügbar. Inline-Sitzungen erfordern keine spezielle Hardware und sollten
      auf jedem [User-Agent](/de/docs/Glossary/user_agent) verfügbar sein, der die WebXR-API unterstützt.

- `options` {{Optional_Inline}}

  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen enthalten sind, verwendet das Gerät eine Standardfunktionskonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession)
      _unterstützen muss_. Siehe unten [Sitzungsfunktionen](#sitzungsfunktionen).
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Funktionen identifizieren, die die zurückgegebene
      [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe unten [Sitzungsfunktionen](#sitzungsfunktionen).
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element spezifiziert, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat) zur Konfiguration der Tiefenerfassung. Siehe das [Beispiel unten](#anfordern_einer_tiefenerkennungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das, falls das Gerät und der Benutzeragent den angeforderten Modus und die Funktionen unterstützen, sich zu einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt auflöst.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt,
und ein [`DOMException`](/de/docs/Web/API/DOMException) darin übergeben, dessen `name` einer der folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, jedoch bereits eine
    immersive VR-Sitzung entweder aktiv ist oder eingerichtet wird. Es kann immer nur eine immersive VR-Sitzung existieren.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den
    angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn eine der
    _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus verschiedenen Gründen geschehen, die detaillierter unter [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können angefordert werden, entweder als `optionalFeatures` oder `requiredFeatures`.

- `anchors`
  - : Ermöglicht die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich dem `local`-Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb eines vordefinierten Bereichs zu bewegen, der durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird.
- `depth-sensing`
  - : Ermöglicht die Fähigkeit, Tiefeninformationen mithilfe von [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekten zu erhalten.
- `dom-overlay`
  - : Ermöglicht das Festlegen eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Aktiviert die Erfassung von Handposeninformationen von handbasierten Eingabegeräten (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Aktiviert Funktionen für Treffertests gegen reale Geometrie.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung der Umgebungslichtbedingungen mithilfe von [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekten.
- `local`
  - : Aktiviert einen Verfolgungsraum, dessen nativer Ursprung in der Nähe der Position des Betrachters liegt, als die Sitzung erstellt wurde. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich der Benutzer wesentlich über seine Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich dem `local`-Typ, außer dass die Startposition an einem sicheren Ort für den Betrachter platziert wird, wobei der Wert der y-Achse auf Bodenhöhe 0 beträgt. Wenn diese Bodenhöhe nicht bekannt ist, wird der [User-Agent](/de/docs/Glossary/user_agent) die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe ungleich Null ist, wird der Browser erwartet, sie so zu runden, dass [Fingerprinting](/de/docs/Glossary/Fingerprinting) vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView)-Objekte als sekundäre Ansichten. Dies kann für Ansichten des ersten Beobachters verwendet werden, die für die Videoaufnahme genutzt werden, oder "Quad-Views", bei denen es zwei Ansichten pro Auge gibt, mit unterschiedlicher Auflösung und Blickfeldern.
- `unbounded`
  - : Ermöglicht einen Verfolgungsraum, der dem Benutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem weite Entfernungen von seinem Ursprungsort. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist auf Stabilität rund um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung bei Bedarf driftet, um diesen Bedarf zu erfüllen.
- `viewer`
  - : Ermöglicht einen Verfolgungsraum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsfunktionen und die verschiedenen Referenzräume haben minimale Sicherheits- und Datenschutzanforderungen, wie z.B. das Einholen der Zustimmung des Benutzers und/oder das Anfordern der {{HTTPHeader("Permissions-Policy")}}-Richtlinie: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking). Weitere Details finden Sie unter [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

| Sitzungsfunktion | Benutzerzustimmung erforderlich         | Erforderliche Berechtigungsrichtlinie |
| ---------------- | --------------------------------------- | ------------------------------------- |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`                 |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`                 |
| `hand-tracking`  | Immer erforderlich                      | —                                     |
| `hit-test`       | —                                       | `xr-spatial-tracking`                 |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`                 |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`                 |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`                 |
| `viewer`         | Immer erforderlich                      | —                                     |

Siehe auch [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation).

## Beispiele

### Erstellung einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf, um eine
`"immersive-vr"`-Sitzung anzufordern. Wenn das {{jsxref("Promise")}} aufgelöst wird, wird eine Sitzung eingerichtet und die Animationsschleife initiiert.

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

### Überprüfung der WebXR-Unterstützung und Nutzung eines Buttons zum Starten des VR-Modus

Das folgende Beispiel zeigt, wie Sie sowohl `isSessionSupported()` als auch
`requestSession()` verwenden können. Zuerst wird überprüft, ob WebXR verfügbar ist, indem das Vorhandensein von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) verifiziert wird. Anschließend wird `isSessionSupported()` aufgerufen, indem die gewünschte Sitzungsoption übergeben wird, bevor Steuerungsmöglichkeiten zum Betreten von XR aktiviert werden. Das Hinzufügen von Steuerungen ist ein notwendiger Schritt, da das Betreten von XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()`
`requestSession()` mit derselben Sitzungsoption auf, die `isSessionSupported()` übergeben wurde.

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

Fordern Sie eine unbegrenzte Erfahrung an, bei der der Benutzer sich frei in seiner physischen Umgebung bewegen kann:

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

### Anfordern einer Tiefenerkennungssitzung

Hier kann der Anrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie die Formate "luminance-alpha" und "float32" behandeln. Die Reihenfolge gibt die Präferenz für CPU und "luminance-alpha" an:

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
