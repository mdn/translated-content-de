---
title: "XRSystem: requestSession() Methode"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **{{domxref("XRSystem")}}**-Schnittstelle besitzt die Methode **`requestSession()`**, die ein {{jsxref("promise")}} zurückgibt. Dieses Promise wird auf ein {{domxref("XRSession")}}-Objekt aufgelöst, über das Sie die angeforderte Art der WebXR-Sitzung verwalten können.

Während nur eine immersive VR-Sitzung gleichzeitig aktiv sein kann, können mehrere Inline-Sitzungen gleichzeitig laufen.

## Syntax

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### Parameter

- `mode`

  - : Ein {{jsxref("String")}}, der den XR-Sitzungsmodus definiert. Die unterstützten Modi sind:

    - {{Experimental_Inline}} `immersive-ar`: Der Ausgabe der Sitzung wird exklusiver Zugriff auf das immersive Gerät gewährt, jedoch wird der gerenderte Inhalt mit der realen Umgebung vermischt. Der {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} der Sitzung gibt die Methode an, die zum Mischen der Inhalte verwendet wird.
    - `immersive-vr`: Gibt an, dass die gerenderte Sitzung im VR-Modus auf einem immersiven XR-Gerät angezeigt wird; sie ist nicht zur Überlagerung oder Integration in die umgebende Umgebung vorgesehen. Der {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} sollte nach Möglichkeit `opaque` sein, könnte jedoch `additive` sein, wenn die Hardware dies erfordert.
    - `inline`: Die Ausgabe wird inline im Kontext eines Elements in einem standardmäßigen HTML-Dokument präsentiert und belegt nicht den gesamten visuellen Raum. Inline-Sitzungen können entweder im Mono- oder Stereo-Modus präsentiert werden und können über oder ohne Betrachterverfolgung verfügen. Inline-Sitzungen erfordern keine spezielle Hardware und sollten auf jedem {{Glossary("user agent")}} verfügbar sein, der die WebXR-API unterstützt.

- `options` {{Optional_Inline}}

  - : Ein Objekt zur Konfiguration der {{domxref("XRSession")}}. Falls keine angegeben sind, verwendet das Gerät eine Standardkonfiguration für alle Optionen.
    - `requiredFeatures` {{Optional_Inline}}: Ein Array von Werten, die die zurückgegebene {{domxref("XRSession")}} _unterstützen muss_. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `optionalFeatures` {{Optional_Inline}}: Ein Array von Werten, die optionale Funktionen identifizieren, die die zurückgegebene {{domxref("XRSession")}} möglicherweise unterstützt. Siehe [Sitzungsfunktionen](#sitzungsfunktionen) unten.
    - `domOverlay` {{Optional_Inline}}: Ein Objekt mit einer erforderlichen `root`-Eigenschaft, die das Overlay-Element angibt, das dem Benutzer als Inhalt des DOM-Overlays angezeigt wird. Siehe das [Beispiel unten](#anfordern_einer_sitzung_mit_einem_dom-overlay).
    - `depthSensing` {{Optional_Inline}}: Ein Objekt mit zwei erforderlichen Eigenschaften {{domxref("XRSession.depthUsage", "usagePreference")}} und {{domxref("XRSession.depthDataFormat", "dataFormatPreference")}}, um die Tiefenerfassung zu konfigurieren. Siehe das [Beispiel unten](#anfordern_einer_tiefenerfassungssitzung).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("XRSession")}}-Objekt aufgelöst wird, wenn das Gerät und der User-Agent den angeforderten Modus und die Funktionen unterstützen.

### Ausnahmen

Diese Methode wirft keine echten Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt, wobei ein {{domxref("DOMException")}} übergeben wird, dessen `name` einer der folgenden ist:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der angeforderte Sitzungsmodus `immersive-vr` ist, aber bereits eine immersive VR-Sitzung entweder derzeit aktiv ist oder gerade eingerichtet wird. Es kann nur eine immersive VR-Sitzung gleichzeitig geben.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn kein WebXR-kompatibles Gerät verfügbar ist oder das Gerät den angegebenen `sessionMode` nicht unterstützt; dieser Fehler kann auch ausgelöst werden, wenn eine der _erforderlichen_ Optionen nicht unterstützt wird.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Erlaubnis zum Betreten des angegebenen XR-Modus verweigert wird. Dies kann aus verschiedenen Gründen geschehen, die im Abschnitt [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) ausführlicher behandelt werden.

## Sitzungsfunktionen

Die folgenden Sitzungsfunktionen und Referenzräume können angefordert werden, entweder als `optionalFeatures` oder `requiredFeatures`.

- `anchors`
  - : Ermöglicht die Verwendung von {{domxref("XRAnchor")}}-Objekten.
- `bounded-floor`
  - : Ähnlich wie der `local`-Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorgegebenen Grenze zu bewegen, die durch die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} im zurückgegebenen Objekt gegeben ist.
- `depth-sensing`
  - : Aktiviert die Möglichkeit, Tiefeninformationen mithilfe von {{domxref("XRDepthInformation")}}-Objekten zu erhalten.
- `dom-overlay`
  - : Ermöglicht das Angeben eines DOM-Overlay-Elements, das dem Benutzer angezeigt wird.
- `hand-tracking`
  - : Ermöglicht artikulierte Handposeninformationen von handbasierten Eingabegeräten (siehe {{domxref("XRHand")}} und {{domxref("XRInputSource.hand")}}).
- `hit-test`
  - : Ermöglicht die Durchführung von Treffer-Tests an realer Geometrie.
- `layers`
  - : Ermöglicht das Erstellen von verschiedenen Schichttypen (außer {{domxref("XRProjectionLayer")}}).
- `light-estimation`
  - : Ermöglicht die Schätzung der Umgebungslichtbedingungen mithilfe von {{domxref("XRLightEstimate")}}-Objekten.
- `local`
  - : Aktiviert einen Tracking-Raum, dessen nativer Ursprung in der Nähe der Position des Betrachters zum Zeitpunkt der Sitzungsanlage liegt. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass der Benutzer sich wesentlich über die Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert.
- `local-floor`
  - : Ähnlich wie der `local`-Typ, außer dass die Startposition an einem sicheren Ort für den Zuschauer platziert wird, wo der Wert der y-Achse auf Bodenhöhe 0 ist. Wenn diese Bodenhöhe nicht bekannt ist, wird der {{Glossary("user agent")}} die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe ungleich null ist, wird der Browser diese in einer Weise runden, die [Fingerprinting](/de/docs/Glossary/Fingerprinting) vermeidet (wahrscheinlich auf den nächsten Zentimeter).
- `secondary-views`
  - : Ermöglicht {{domxref("XRView")}}-Objekte als sekundäre Ansichten. Dies kann für First-Person-Observer-Ansichten verwendet werden, die für Videoaufnahmen verwendet werden, oder "Quad-Ansichten", bei denen es zwei Ansichten pro Auge gibt, mit unterschiedlichen Auflösungen und Sichtfeldern.
- `unbounded`
  - : Ermöglicht einen Tracking-Raum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über sehr lange Entfernungen vom Ausgangspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung möglicherweise je nach Bedarf driften kann, um dies zu ermöglichen.
- `viewer`
  - : Ermöglicht einen Tracking-Raum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt.

## Sicherheit

Mehrere Sitzungsfunktionen und die verschiedenen Referenzräume haben Mindestanforderungen an Sicherheit und Datenschutz, wie das Anfordern der Zustimmung des Benutzers und/oder das Erfordern der {{HTTPHeader("Permissions-Policy")}}: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking)-Richtlinie. Siehe auch [Berechtigungen und Sicherheit](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security) für weitere Details.

| Sitzungsfunktion | Anforderung der Benutzereinwilligung | Anforderung an die Berechtigungsrichtlinie |
| ---------------- | ------------------------------------- | ----------------------------------------- |
| `bounded-floor`  | Immer erforderlich                    | `xr-spatial-tracking`                     |
| `depth-sensing`  | —                                     | `xr-spatial-tracking`                     |
| `hand-tracking`  | Immer erforderlich                    | —                                         |
| `hit-test`       | —                                     | `xr-spatial-tracking`                     |
| `local`          | Immer erforderlich für Inline-Sitzungen | `xr-spatial-tracking`                   |
| `local-floor`    | Immer erforderlich                    | `xr-spatial-tracking`                     |
| `unbounded`      | Immer erforderlich                    | `xr-spatial-tracking`                     |
| `viewer`         | Immer erforderlich                    | —                                         |

Siehe auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation).

## Beispiele

### Erstellen einer immersiven VR-Sitzung

Das folgende Beispiel ruft `requestSession()` auf und fordert eine `"immersive-vr"`-Sitzung an. Wenn das {{jsxref("Promise")}} aufgelöst wird, wird eine Sitzung eingerichtet und die Animationsschleife gestartet.

```js
navigator.xr
  .requestSession("immersive-vr")
  .then((xrSession) => {
    xrSession.addEventListener("end", onXRSessionEnded);
    // Notwendige Sitzungseinrichtung hier vornehmen.
    // Die Animationsschleife der Sitzung starten.
    xrSession.requestAnimationFrame(onXRAnimationFrame);
  })
  .catch((error) => {
    // "immersive-vr"-Sitzungen werden nicht unterstützt
    console.error(
      "'immersive-vr' wird nicht unterstützt oder ein Fehler ist beim Aktivieren des VR-Modus aufgetreten!",
    );
  });
```

### Überprüfen der WebXR-Unterstützung und Verwenden eines Buttons zum Starten des VR-Modus

Das folgende Beispiel zeigt, wie sowohl `isSessionSupported()` als auch `requestSession()` verwendet werden. Zuerst wird überprüft, ob WebXR verfügbar ist, indem die Existenz von {{domxref("navigator.xr")}} überprüft wird. Anschließend wird `isSessionSupported()` aufgerufen, wobei die gewünschte Sitzungsoption übergeben wird, bevor die Steuerelemente zur Eingabe in XR aktiviert werden. Das Hinzufügen von Steuerelementen ist ein notwendiger Schritt, da das Betreten von XR eine Benutzeraktion erfordert. Schließlich ruft die Methode `onButtonClicked()` `requestSession()` auf, wobei dieselbe Sitzungsoption an `isSessionSupported()` übergeben wird.

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      immersiveButton.addEventListener("click", onButtonClicked);
      immersiveButton.textContent = "Enter XR";
      immersiveButton.disabled = false;
    } else {
      console.error("WebXR unterstützt den Modus immersive-vr nicht!");
    }
  });
} else {
  console.error("WebXR ist nicht verfügbar!");
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      xrSession = session;
      // onSessionStarted() wird aus Gründen der Kürze und Klarheit nicht angezeigt.
      onSessionStarted(xrSession);
    });
  } else {
    // Button ist ein Toggle-Button.
    xrSession.end().then(() => (xrSession = null));
  }
}
```

### Anfordern einer Sitzung mit erforderlichen Funktionen

Fordern Sie ein unbegrenztes Erlebnis an, bei dem der Benutzer sich frei im physischen Raum bewegen kann:

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

Hier kann der Aufrufer sowohl CPU- als auch GPU-optimierten Gebrauch sowie sowohl "luminance-alpha" als auch "float32"-Formate behandeln. Die Reihenfolge zeigt die Präferenz für CPU und "luminance-alpha" an:

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
