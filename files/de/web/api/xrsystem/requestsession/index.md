---
title: "XRSystem: requestSession() Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 75165f9f9bde9bce3093a0d9d908a239c519a9ce
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestSession()`** des **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Interfaces gibt ein {{jsxref("Promise")}} zurück, das ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt liefert, mit dem Sie den angeforderten Typ einer WebXR-Sitzung verwalten können.

Während nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere Inline-Sitzungen gleichzeitig laufen.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`
  - : Ein {{jsxref("String")}}, der den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:
    - {{Experimental_Inline}} `immersive-ar`: Die Ausgabe der Sitzung hat exklusiven Zugriff auf das immersive Gerät,
      aber der gerenderte Inhalt wird mit der realen Umgebung vermischt.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung zeigt die Methode an,
      um den Inhalt miteinander zu verschmelzen.
    - `immersive-vr`: Zeigt an, dass die gerenderte Sitzung mit einem immersiven XR-Gerät im VR-Modus angezeigt wird;
      sie soll nicht überlagert oder in die Umgebung integriert werden.
      Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) sollte, wenn möglich, `opaque` sein, kann aber `additive` sein, wenn die Hardware dies erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem Standard-HTML-Dokument präsentiert,
      anstatt den gesamten visuellen Raum einzunehmen. Inline-Sitzungen können entweder im Mono- oder Stereo-Modus präsentiert werden
      und verfügen möglicherweise oder möglicherweise nicht über ein Betrachter-Tracking. Inline-Sitzungen erfordern keine spezielle Hardware und sollten auf jedem {{Glossary("user_agent", "Benutzeragenten")}} verfügbar sein, der WebXR-API-Unterstützung bietet.

- `options` {{Optional_Inline}}
  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine Optionen angegeben sind, verwendet das Gerät eine Standardfunktionskonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) _unterstützen muss_. Siehe [Sitzungsmerkmale](#sitzungsmerkmale) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Merkmale identifizieren, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe [Sitzungsmerkmale](#sitzungsmerkmale) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element spezifiziert, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat), um zu konfigurieren, wie die Tiefenerfassung durchgeführt wird. Siehe das [Beispiel unten](#anfordern_einer_tiefenerfassungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, wenn das Gerät und der Benutzeragent den angeforderten Modus und die Funktionen unterstützen.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise ab,
indem sie ein [`DOMException`](/de/docs/Web/API/DOMException) übergibt, dessen `name` eines der folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, es jedoch bereits eine
    immersive VR-Sitzung entweder gerade aktiv ist oder im Prozess des Einrichtens. Es
    kann jeweils nur eine immersive VR-Sitzung geben.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den
    angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn eine der
    _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn die Berechtigung zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus mehreren Gründen passieren, welche detaillierter in [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) erklärt werden.

## Sitzungsmerkmale

Die folgenden Sitzungsmerkmale und Referenzräume können angefordert werden, entweder als `optionalFeatures` oder `requiredFeatures`.

- `anchors`
  - : Aktiviert die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich wie der Typ `local`, außer dass der Benutzer nicht erwartet wird, sich außerhalb eines vorgegebenen Bereichs zu bewegen, der durch den [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt gegeben ist.
- `depth-sensing`
  - : Ermöglichen die Fähigkeit, Tiefeninformationen mithilfe von [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekten zu erhalten.
- `dom-overlay`
  - : Ermöglicht die Spezifikation eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht Informationen über artikulierte Handposen von handbasierten Eingabegeräten (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Aktiviert Treffertestfunktionen für das Ausführen von Treffertests gegen reale Geometrien.
- `layers`
  - : Ermöglicht die Erstellung verschiedener Schichttypen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung der Umgebungslichtbedingungen mithilfe von [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekten.
- `local`
  - : Aktiviert einen Trackingraum, dessen native Herkunft sich in der Nähe der Position des Betrachters befindet, zu dem die Sitzung erstellt wurde. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Vom Benutzer wird nicht erwartet, dass er sich übermäßig weit von seinem Ausgangsstandort bewegt, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich wie der Typ `local`, außer dass die Startposition an einem sicheren Ort für den Betrachter platziert wird, wo der Wert der y-Achse am Boden null ist. Wenn diese Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user_agent", "Benutzeragent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe nicht null ist, wird der Browser sie so runden, dass eine {{Glossary("Fingerprinting", "Fingerabdruckspeicherung")}} vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView)-Objekte als sekundäre Ansichten. Dies kann für Erstbeobachter-Ansichten verwendet werden, die für die Videoaufnahme verwendet werden, oder "Quad-Ansichten", bei denen es zwei Ansichten pro Auge gibt, mit unterschiedlicher Auflösung und Sichtfeld.
- `unbounded`
  - : Ermöglicht einen Trackingraum, der dem Benutzer die völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem große Entfernungen von seinem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität rings um die aktuelle Position des Benutzers optimiert, sodass die native Herkunft bei Bedarf driftet, um diesen Bedarf zu decken.
- `viewer`
  - : Ermöglicht einen Trackingraum, dessen native Herkunft die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsmerkmale und die verschiedenen Referenzräume haben Mindestanforderungen an Sicherheit und Privatsphäre, wie das Einholen der Benutzerzustimmung und/oder die Anforderung, dass die {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking) Direktive gesetzt wird. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsmerkmal | Anforderung der Benutzerzustimmung      | Erforderliche Berechtigungspolitik |
| --------------- | --------------------------------------- | ---------------------------------- |
| `bounded-floor` | Immer erforderlich                      | `xr-spatial-tracking`              |
| `depth-sensing` | —                                       | `xr-spatial-tracking`              |
| `hand-tracking` | Immer erforderlich                      | —                                  |
| `hit-test`      | —                                       | `xr-spatial-tracking`              |
| `local`         | Immer erforderlich bei Inline-Sitzungen | `xr-spatial-tracking`              |
| `local-floor`   | Immer erforderlich                      | `xr-spatial-tracking`              |
| `unbounded`     | Immer erforderlich                      | `xr-spatial-tracking`              |
| `viewer`        | Immer erforderlich                      | —                                  |

Siehe auch [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf und fordert eine
`"immersive-vr"` Sitzung an. Wenn das {{jsxref("Promise")}} aufgelöst wird, wird eine
Sitzung eingerichtet und die Animationsschleife gestartet.

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

### Überprüfen der WebXR-Unterstützung und Verwenden eines Knopfes, um den VR-Modus zu starten

Das folgende Beispiel zeigt, wie sowohl `isSessionSupported()` als auch
`requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist, indem die Existenz von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) überprüft wird. Danach wird `isSessionSupported()` aufgerufen, wobei die gewünschte Sitzungsoption übergeben wird, bevor Steuerelemente zum Betreten von XR aktiviert werden. Das Hinzufügen von Steuerelementen ist ein notwendiger Schritt, da das Betreten von XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()` `requestSession()` auf und verwendet dabei dieselbe Sitzungsoption, die an `isSessionSupported()` übergeben wurde.

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

### Anfordern einer Sitzung mit erforderlichen Merkmalen

Fordern Sie eine ungebundene Erfahrung an, bei der der Benutzer sich frei in seiner physischen Umgebung bewegen kann:

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

Hier kann der Aufrufer sowohl CPU- als auch GPU-optimierte Nutzung sowie sowohl "luminance-alpha"- als auch "float32"-Formate verarbeiten. Die Reihenfolge zeigt eine Präferenz für CPU und "luminance-alpha" an:

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
