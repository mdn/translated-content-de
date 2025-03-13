---
title: "XRSystem: Methode requestSession()"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestSession()`** des **[`XRSystem`](/de/docs/Web/API/XRSystem)**-Interfaces gibt ein {{jsxref("promise")}} zurück, das ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt auflöst, mit dem Sie den angeforderten WebXR-Sitzungstyp verwalten können.

Während nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere Inline-Sitzungen gleichzeitig laufen.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den XR-Sitzungsmodus definiert. Unterstützte Modi sind:

    - {{Experimental_Inline}} `immersive-ar`: Der Ausgabe der Sitzung wird exklusiver Zugriff auf das immersive Gerät gewährt, jedoch wird der gerenderte Inhalt mit der realen Umgebung vermischt. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) der Sitzung gibt die Methode an, mit der die Inhalte zusammengeführt werden.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung in VR-Modus auf einem immersiven XR-Gerät angezeigt wird; sie soll nicht überlagert oder in die umgebende Umgebung integriert werden. Der [`environmentBlendMode`](/de/docs/Web/API/XRSession/environmentBlendMode) wird im Idealfall auf `opaque` erwartet, könnte aber `additive` sein, falls die Hardware dies erfordert.
    - `inline`: Die Ausgabe wird inline innerhalb des Kontextes eines Elements in einem Standard-HTML-Dokument präsentiert, anstatt den gesamten visuellen Raum einzunehmen. Inline-Sitzungen können entweder im Mono- oder Stereo-Modus dargestellt werden und können mit oder ohne Viewer-Tracking verfügbar sein. Inline-Sitzungen erfordern keine spezielle Hardware und sollten auf jedem {{Glossary("user_agent", "User-Agent")}} verfügbar sein, der die WebXR-API unterstützt.

- `options` {{Optional_Inline}}

  - : Ein Objekt zur Konfiguration der [`XRSession`](/de/docs/Web/API/XRSession). Wenn keine enthalten sind, verwendet das Gerät eine Standard-Feature-Konfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) _unterstützen muss_. Siehe [Sitzungsfeatures](#sitzungsfunktionen) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die Features identifizieren, welche die zurückgegebene [`XRSession`](/de/docs/Web/API/XRSession) optional unterstützen kann. Siehe [Sitzungsfeatures](#sitzungsfunktionen) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Überlagerungselement angibt, das dem Benutzer als Inhalt der DOM-Überlagerung angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_dom-überlagerung).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften [`usagePreference`](/de/docs/Web/API/XRSession/depthUsage) und [`dataFormatPreference`](/de/docs/Web/API/XRSession/depthDataFormat) zur Konfiguration der Tiefenerfassung. Siehe das [Beispiel unten](#anfordern_einer_tiefenerfassungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt aufgelöst wird, wenn das Gerät und der User-Agent den angeforderten Modus und die Funktionen unterstützen.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen wird das zurückgegebene Versprechen abgelehnt und ein [`DOMException`](/de/docs/Web/API/DOMException) übergeben, dessen `name` einer der folgenden ist:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits eine immersive VR-Sitzung entweder aktuell aktiv ist oder gerade eingerichtet wird. Es kann immer nur eine immersive VR-Sitzung geben.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den angegebenen `sessionMode` nicht unterstützt; dies kann auch ausgelöst werden, wenn eine der _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus mehreren Gründen geschehen, die ausführlicher in [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können entweder als `optionalFeatures` oder `requiredFeatures` angefordert werden.

- `anchors`
  - : Ermöglicht die Verwendung von [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekten.
- `bounded-floor`
  - : Ähnlich dem Typ `local`, außer dass der Benutzer nicht erwartet wird, sich außerhalb eines vorgegebenen Bereichs zu bewegen, der von der [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt definiert wird.
- `depth-sensing`
  - : Ermöglicht die Fähigkeit, Tiefeninformationen mit Hilfe von [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Objekten zu erhalten.
- `dom-overlay`
  - : Ermöglicht das Festlegen eines DOM-Überlagerungselements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht artikulierte Handpose-Informationen von handbasierten Eingabegeräten (siehe [`XRHand`](/de/docs/Web/API/XRHand) und [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)).
- `hit-test`
  - : Ermöglicht Funktionen für Treffsicherheitstests gegen reale Geometrie.
- `layers`
  - : Ermöglicht die Fähigkeit, verschiedene Schichtenarten zu erstellen (außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)).
- `light-estimation`
  - : Ermöglicht die Schätzung von Umgebungslichtbedingungen mit Hilfe von [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)-Objekten.
- `local`
  - : Ermöglicht einen Tracking-Raum, dessen nativer Ursprung sich nahe der Position des Betrachters befindet, als die Sitzung erstellt wurde. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Benutzer wird nicht erwartet, sich viel oder überhaupt über seinen Ausgangsposition hinaus zu bewegen, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich dem Typ `local`, außer dass die Startposition an einem sicheren Ort für den Betrachter zum Stehen platziert wird, wobei der Wert der y-Achse bei 0 auf Bodenhöhe liegt. Wenn diese Bodenhöhe nicht bekannt ist, wird der {{Glossary("user_agent", "User-Agent")}} die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe ungleich null ist, wird erwartet, dass der Browser sie so abrundet, dass Fingerprinting vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht [`XRView`](/de/docs/Web/API/XRView)-Objekte als sekundäre Ansichten. Dies kann für First-Person-Observer-Ansichten verwendet werden, die für Videoaufnahmen verwendet werden, oder "Quad-Ansichten", bei denen es zwei Ansichten pro Auge gibt, mit unterschiedlichen Auflösungen und Blickwinkeln.
- `unbounded`
  - : Ermöglicht einen Tracking-Raum, der dem Benutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem weite Entfernungen von ihrem Ausgangspunkt. Der Betrachter wird überhaupt nicht getrackt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung bei Bedarf abdriften kann, um diese Notwendigkeit zu berücksichtigen.
- `viewer`
  - : Ermöglicht einen Tracking-Raum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsfunktionen und verschiedene Referenzräume haben minimale Sicherheits- und Datenschutzanforderungen, wie z. B. die Einholung der Zustimmung des Benutzers und/oder die Anforderung des {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking)-Direktive. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsfunktion | Benutzerzustimmungsanforderung          | Berechtigungsrichtlinienanforderung |
| ---------------- | --------------------------------------- | ----------------------------------- |
| `bounded-floor`  | Immer erforderlich                      | `xr-spatial-tracking`               |
| `depth-sensing`  | —                                       | `xr-spatial-tracking`               |
| `hand-tracking`  | Immer erforderlich                      | —                                   |
| `hit-test`       | —                                       | `xr-spatial-tracking`               |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`               |
| `local-floor`    | Immer erforderlich                      | `xr-spatial-tracking`               |
| `unbounded`      | Immer erforderlich                      | `xr-spatial-tracking`               |
| `viewer`         | Immer erforderlich                      | —                                   |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf, um eine
`"immersive-vr"`-Sitzung anzufordern. Wenn das {{jsxref("Promise")}} aufgelöst wird, richtet es eine Sitzung ein und startet die Animationsschleife.

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

### Überprüfung der WebXR-Unterstützung und Verwenden eines Schalters zum Starten des VR-Modus

Das folgende Beispiel zeigt, wie `isSessionSupported()` und
`requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist, indem die Existenz von [`navigator.xr`](/de/docs/Web/API/Navigator/xr) überprüft wird. Anschließend wird `isSessionSupported()` aufgerufen und die gewünschte Sitzungsoption übergeben, bevor die Steuerungen für den Eintritt in XR aktiviert werden. Das Hinzufügen von Steuerelementen ist ein notwendiger Schritt, da der Eintritt in XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()` `requestSession()` mit derselben Sitzungsoption auf, die auch an `isSessionSupported()` übergeben wurde.

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

Erfordert eine unbegrenzte Erfahrung, bei der der Benutzer sich frei in seiner physischen Umgebung bewegen kann:

```js
navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: ["unbounded"],
});
```

### Anfordern einer Sitzung mit DOM-Überlagerung

```js
navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["dom-overlay"],
  domOverlay: {
    root: document.getElementById("xr-overlay"),
  },
});
```

### Anfordern einer Tiefenerfassungssitzung

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
