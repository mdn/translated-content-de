---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Vorausgesetzt, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, ist der nächste mutige Schritt in die gemischte Realität – die Idee, künstliche Szenerien oder Objekte zusätzlich zur realen Welt oder an deren Stelle darzustellen – nicht allzu kompliziert. Bevor Sie mit dem Rendern Ihres Szenarios für erweiterte oder virtuelle Realität beginnen können, müssen Sie die WebXR-Sitzung erstellen und einrichten, und Sie sollten wissen, wie Sie sie ordnungsgemäß beenden. In diesem Artikel lernen Sie, wie Sie diese Dinge tun.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt steht für die gesamte WebXR-Gerätesuite, die Ihnen durch die auf der Benutzerhardware verfügbaren Geräte und Treiber zur Verfügung steht. Ein globales `XRSystem`-Objekt steht Ihrem Dokument über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) zur Verfügung, die das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware unter Berücksichtigung der verfügbaren Hardware und der Umgebung Ihres Dokuments verfügbar ist.

Der einfachste Code zum Abrufen des `XRSystem`-Objekts lautet daher:

```js
const xr = navigator.xr;
```

Der Wert von `xr` wird `null` oder `undefined` sein, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Als neue und sich noch in der Entwicklung befindende API ist die Unterstützung für WebXR auf bestimmte Geräte und Browser beschränkt; und selbst bei diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es gibt jedoch möglicherweise Optionen, die es Ihnen ermöglichen, mit WebXR zu experimentieren, selbst wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwickelt, hat ein [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, das Sie verwenden können, um WebXR in Browsern zu simulieren, die keine Unterstützung für die WebXR-APIs haben. Wenn der Browser die ältere [WebVR API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls greift das Polyfill auf eine Implementierung zurück, die die Google Cardboard VR-API verwendet.

Das Polyfill wird parallel zur Spezifikation gepflegt und regelmäßig auf den neuesten Stand gebracht. Zusätzlich wird sichergestellt, dass es mit den Browsern kompatibel bleibt, während sich deren Unterstützung für WebXR und andere damit verbundene Technologien sowie die Implementierung des Polyfills im Laufe der Zeit ändert.

Lesen Sie die Readme-Datei sorgfältig; das Polyfill gibt es in mehreren Versionen, je nachdem, welchem Grad an Kompatibilität mit neueren JavaScript-Funktionen Ihre Zielbrowser bieten.

##### Verwendung des Emulators

Obwohl es etwas umständlich ist, im Vergleich zur Verwendung eines echten Headsets, ermöglicht dies das Experimentieren und Entwickeln von WebXR-Code auf einem Desktop-Computer, wo WebXR normalerweise nicht verfügbar ist. Außerdem ermöglicht es einige grundlegende Tests, bevor Sie Ihren Code auf ein echtes Gerät übertragen. Beachten Sie jedoch, dass der Emulator noch nicht das gesamte WebXR-API vollständig emuliert, sodass Sie auf Probleme stoßen können, die Sie nicht erwartet haben. Lesen Sie erneut sorgfältig die Readme-Datei und stellen Sie sicher, dass Sie sich der Einschränkungen bewusst sind, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf echter AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder mit Polyfill umgesetzte Umgebungen sind _kein_ adäquater Ersatz für tatsächliche Tests auf physischen Geräten.

##### Erweiterung beschaffen

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser hier herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode für die Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist auch auf GitHub verfügbar.

##### Emulator Probleme und Hinweise

Während dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Punkte, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte die Unterstützung für Augmented Reality (AR) durch das [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/) ein, das sich einem stabilen Zustand nähert. Dokumentation zu AR folgt in Kürze hier auf MDN.

Andere Verbesserungen umfassen das Aktualisieren des Emulators, um die `XR`-Schnittstelle in [`XRSystem`](/de/docs/Web/API/XRSystem) umzubenennen, Unterstützung für Squeeze (grip) Eingabequellen einzuführen und Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles) hinzuzufügen.

### Kontextanforderungen

Eine mit WebXR kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte geladen worden sein (z.B. durch die Verwendung einer URL wie `http://localhost/…`), oder über {{Glossary("HTTPS", "HTTPS")}} beim Laden der Seite. Der JavaScript-Code muss ebenfalls sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, werden Sie nicht weit kommen. Die [`navigator.xr`](/de/docs/Web/API/Navigator/xr) Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. Wie auch immer, Sie müssen auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler anmutig behandeln oder eine Art Ersatzlösung bieten.

### Rückgriff auf das WebXR-Polyfill

Eine Rückfalloption ist das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Standardisierungsprozess von WebXR verantwortlich ist. Das {{Glossary("polyfill", "Polyfill")}} bringt Unterstützung für WebXR in Browsern, die keine native Unterstützung für WebXR haben, und glättet die Inkonsistenzen zwischen Implementierungen in den Browsern, die es haben, sodass es manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurückgibt, nachdem optional das Polyfill installiert wurde, vorausgesetzt, dass das Polyfill zuvor mit einem {{HTMLElement("script")}}-Tag eingebunden oder geladen wurde.

```js
let webxrPolyfill = null;

function getXR(usePolyfill) {
  let tempXR;

  switch (usePolyfill) {
    case "if-needed":
      tempXR = navigator.xr;
      if (!tempXR) {
        webxrPolyfill = new WebXRPolyfill();
        tempXR = webxrPolyfill;
      }
      break;
    case "yes":
      webxrPolyfill = new WebXRPolyfill();
      tempXR = webxrPolyfill;
      break;
    case "no":
    default:
      tempXR = navigator.xr;
      break;
  }

  return tempXR;
}

const nativeXr = getXR("no"); // Get the native XRSystem object
const polyfilledXr = getXR("yes"); // Always returns an XRSystem from the polyfill
const xr = getXR("if-needed"); // Use the polyfill only if navigator.xr missing
```

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Das Setzen auf `null` signalisiert, dass das Polyfill dem Müllsammler übergeben werden kann, wenn keine Objekte, die darauf beruhen, es mehr nutzen.

Natürlich können Sie dies vereinfachen, je nach Ihren Bedürfnissen; da Ihre App wahrscheinlich nicht häufig hin und her wechselt, ob sie das Polyfill verwendet oder nicht, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsvorkehrungen im Zusammenhang mit WebXR. An erster Stelle steht, dass die Verwendung des `immersive-vr`-Modus – der die Sicht des Benutzers auf die Welt vollständig ersetzt – erfordert, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und gegenwärtig fokussiert sein. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Benutzer-Ereignishandler aufrufen, wie etwa dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis.

Für weitere Einzelheiten zur Sicherung von WebXR-Aktivitäten und -Nutzung lesen Sie den Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Bestätigen, dass der benötigte Sitzungstyp verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft klug, zunächst zu überprüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützt, den Sie verwenden möchten. Dies kann auch genutzt werden, um zu bestimmen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll, zum Beispiel.

Um herauszufinden, ob ein bestimmter Modus unterstützt wird, rufen Sie die [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf. Diese gibt ein Versprechen zurück, das mit `true` aufgelöst wird, wenn der angegebene Sitzungstyp verfügbar ist, oder `false` andernfalls.

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // Create and use an immersive VR session
} else {
  // Create an inline session instead, or tell the user about the
  // incompatibility if inline is required
}
```

## Erstellen und Starten der Sitzung

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellt. Um eine `XRSession` zu erhalten, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf, die ein Versprechen zurückgibt, das mit einer `XRSession` aufgelöst wird, wenn es erfolgreich eine solche erstellen kann. Grundsätzlich sieht das folgendermaßen aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Codebeispiel an `requestSession()` übergeben wird: `immersive-vr`. Dieser Zeichenfolgenwert gibt den Typ der WebXR-Sitzung an, den Sie erstellen möchten – in diesem Fall eine voll immersive Virtual-Reality-Erfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine voll immersive Virtual-Reality-Sitzung, die ein Headset oder ein ähnliches Gerät verwendet, das die Welt um den Benutzer mit den von Ihnen präsentierten Bildern vollständig ersetzt.
- `immersive-ar`
  - : Eine erweiterte Realitätssitzung, bei der Bilder mit einem Headset oder einem ähnlichen Apparat zur realen Welt hinzugefügt werden. _Diese Option wird noch nicht weitläufig unterstützt, da sich die AR-Spezifikation in Bewegung befindet._
- `inline`
  - : Eine Bildschirmpräsentation der XR-Bilder im Kontext des Dokumentfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte – etwa weil die Funktionsrichtlinie ihre Nutzung nicht zulässt oder der Benutzer die Erlaubnis zur Nutzung des Headsets verweigert hat – wird das Versprechen abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte folgendermaßen aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder löst eine Ausnahme aus, wenn beim Erstellen der Sitzung ein Fehler auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern akzeptieren, um die Sitzung anzupassen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welche der Referenzräume verwendet werden soll, um das Koordinatensystem der Welt darzustellen. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den Referenzräumen kompatibel ist, die Sie benötigen oder bevorzugen.

Wenn Sie beispielsweise einen `unbounded`-Referenzraum benötigen, können Sie dies als erforderliche Funktion angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, unbeschränkte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Wenn Sie hingegen eine _inline_-Sitzung benötigen und einen `local`-Referenzraum bevorzugen, können Sie dies so tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese Funktion `createInlineSession()` wird versuchen, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie versuchen einen lokalen Raum zu verwenden und, falls dies fehlschlägt, auf einen `viewer`-Referenzraum zurückfallen, den alle Geräte unterstützen müssen.

### Vorbereiten der neuen Sitzung zur Nutzung

Sobald das zurückgegebene Versprechen der Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erfolgreich aufgelöst wird, wissen Sie, dass Sie eine nutzbare WebXR-Sitzung in der Hand haben. Dann können Sie fortfahren, die Sitzung zur Nutzung vorzubereiten und Ihre Animationen zu starten.

Die wichtigsten Dinge, die Sie tun müssen (oder möglicherweise tun müssen), um die Konfiguration Ihrer Sitzung abzuschließen, umfassen:

- Hinzufügen von Handlern für die Ereignisse, die Sie beobachten müssen. Dazu gehört wahrscheinlich mindestens das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis, damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabesteuerungen verwenden, beobachten Sie das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, um das Hinzufügen oder Entfernen von XR-Eingabesteuerungen zu erkennen, und die verschiedenen [Selektions- und Drückaktionen-Ereignisse](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Eventuell möchten Sie das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) überwachen, um informiert zu werden, wenn sich die verfügbaren immersiven Geräte ändern.
- Abrufen eines WebGL-Kontexts für das Canvas, in das Sie Ihre Frames rendern möchten, indem Sie die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Zielkontext aufrufen.
- Einrichtung Ihrer WebGL-Daten und Modelle und Vorbereitung, die Szenerie zu rendern.
- Festlegen des WebGL-Kontexts als Quelle für das XR-System, indem Sie eine [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der Sitzungseigenschaft [`renderState`](/de/docs/Web/API/XRRenderState) [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) übergeben.
- Berechnung der anfänglichen Position und Skalierung Ihrer Objekte nach Bedarf.
- Beginnen des [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In grundlegender Form könnte etwas Code für Setup wie folgt aussehen:

```js
async function runSession(session) {
  session.addEventListener("end", onSessionEnd);

  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext("webgl", { xrCompatible: true });

  // Set up WebGL data and such

  const worldData = loadGLPrograms(session, "world-data.xml");
  if (!worldData) {
    return null;
  }

  // Finish configuring WebGL

  worldData.session.updateRenderState({
    baseLayer: new XRWebGLLayer(worldData.session, gl),
  });

  // Start rendering the scene

  referenceSpace = await worldData.session.requestReferenceSpace("unbounded");
  worldData.referenceSpace = referenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(
      worldData.playerSpawnPosition,
      worldData.playerSpawnOrientation,
    ),
  );
  worldData.animationFrameRequestID =
    worldData.session.requestAnimationFrame(onDrawFrame);

  return worldData;
}
```

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Renderumgebung zu kapseln. Dies umfasst die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die zum Rendern der Szene in WebGL verwendet werden, den Welten-Referenzraum und die ID, die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wird.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und eine Referenz auf seinen WebGL-Kontext geholt, wobei die `xrCompatible`-Option beim Aufruf von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben wird.

Als nächstes werden alle Daten und die Einrichtung benötigt, die für den WebGL-Renderer durchgeführt wird, bevor WebGL so konfiguriert wird, dass es das Framebuffer des WebGL-Kontexts als eigenes Framebuffer verwendet. Dies geschieht durch die Verwendung der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState), um den Render-Zustand [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) auf eine neu erstellte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, die den WebGL-Kontext kapselt.

### Vorbereitung auf das Rendern der Szene

Zu diesem Zeitpunkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, in dem die Koordinaten für die Welt angegeben werden. Wir können den ursprünglichen Referenzraum für die Sitzung abrufen, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession` aufrufen. Wir geben beim Aufruf von `requestReferenceSpace()` den Namen des Referenzraumtyps an, den wir möchten; in diesem Fall `unbounded`. Genauso gut könnten Sie `local` oder `viewer` angeben, je nach Ihren Bedürfnissen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, lesen Sie [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raums. Das ist großartig – wenn der Blickpunkt Ihres Spielers genau in der Mitte der Welt beginnt. Aber höchstwahrscheinlich ist das überhaupt nicht der Fall. Wenn dem so ist, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf dem ursprünglichen Referenzraum auf, um einen _neuen_ Referenzraum [zu schaffen, der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) sich an der Position des Betrachters befindet, wobei die Orientierung ebenfalls in die gewünschte Richtung verschoben wird. Der Eingabewert in `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die Position und Orientierung des Spielers in den Standard-Weltkoordinaten kapselt.

Mit dem neuen Referenzraum in der Hand und im `worldData`-Objekt zur sicheren Aufbewahrung gespeichert, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Rückruf zu planen, der ausgeführt wird, wenn es Zeit ist, den nächsten Animationsframe für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anforderung gegebenenfalls zu stornieren, daher speichern wir diese auch in `worldData`.

Letztendlich wird das `worldData`-Objekt dem Aufrufer zurückgegeben, damit der Hauptcode später auf die benötigten Daten zugreifen kann. An diesem Punkt ist der Einrichtungsprozess abgeschlossen und wir haben die Rendering-Phase unserer Anwendung erreicht. Um mehr über das Rendern zu erfahren, lesen Sie den Artikel [Rendern und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Zu betrieblichen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie beibehalten müssen, auf beliebige Weise speichern. Möglicherweise benötigen Sie unterschiedliche Informationen oder haben unterschiedliche spezifische Anforderungen, die dazu führen, dass Sie die Dinge anders oder in anderer Reihenfolge machen müssen.

Ebenso wird die spezifische Methode, die Sie zum Laden von Modellen und anderen Informationen und zum Einrichten Ihrer WebGL-Daten verwenden – Texturen, Vertex-Puffer, Shader, usw. – stark variieren, abhängig von Ihren Bedürfnissen, den von Ihnen verwendeten Frameworks und Ähnlichem.

## Wichtige Wartungsereignisse der Sitzung

Im Laufe Ihrer WebXR-Sitzung erhalten Sie möglicherweise eine Anzahl von Ereignissen, die Änderungen am Status der Sitzung anzeigen oder die Sie über Dinge informieren, die Sie tun müssen, um den ordnungsgemäßen Betrieb der Sitzung aufrechtzuerhalten.

### Erkennen von Änderungen im Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert – zum Beispiel, wenn die Sitzung ausgeblendet oder angezeigt wird oder wenn der Benutzer einen anderen Kontext fokussiert hat – empfängt die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

```js
session.onvisibilitychange = (event) => {
  switch (event.session.visibilityState) {
    case "hidden":
      myFrameRate = 10;
      break;
    case "blurred-visible":
      myFrameRate = 30;
      break;
    case "visible":
    default:
      myFrameRate = 60;
      break;
  }
};
```

Dieses Beispiel ändert eine Variable `myFrameRate` abhängig vom Sichtbarkeitsstatus, sobald sich dieser ändert. Es wird angenommen, dass der Renderer diesen Wert verwendet, um zu berechnen, wie oft neue Frames gerendert werden, während die Animationsschleife fortschreitet, und somit weniger häufig rendert, je "verschwommener" die Szene wird.

### Erkennen von Rücksetzvorgängen des Referenzraums

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies geschieht, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn eine Störung oder ein Fehler im Fluss der von der XR-Hardware empfangenen Tracking-Daten auftritt. Diese Situationen verursachen, dass der native Ursprung abrupt um die erforderliche Distanz und den Richtungswinkel springt, um den nativen Ursprung wieder mit der Position des Benutzers und der Blickrichtung in Einklang zu bringen.

Wenn dies passiert, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die notwendige Transformation beschreibt, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird auf dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) und nicht der [`XRSession`](/de/docs/Web/API/XRSession) ausgelöst!

Eine weitere häufige Ursache für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie, wie sie durch die [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) angegeben ist, ändert.

Für weitere häufige Ursachen von Rücksetzvorgängen im Referenzraum sowie mehr Details und Beispielcode, siehe die Dokumentation zum [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen von Änderungen im verfügbaren Satz von WebXR-Eingabesteuerungen

WebXR pflegt eine Liste von Eingabesteuerungen, die spezifisch für das WebXR-System ist. Diese Geräte umfassen Dinge wie die tragbaren Controller, Bewegungssensor-Kameras, bewegungssensitive Handschuhe und andere Rückmeldungsgeräte. Wenn der Benutzer ein WebXR-Controllergerät verbindet oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, es für Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder dadurch geschehen, dass die Sitzung selbst entscheidet, dass es Zeit ist herunterzufahren (wie etwa wenn der Benutzer sein XR-Gerät ausschaltet), weil der Benutzer einen Button geklickt hat, um die Sitzung zu beenden, oder durch eine andere Situation, die für Ihre Anwendung angemessen ist.

Hier besprechen wir sowohl, wie Sie das Herunterfahren der WebXR-Sitzung anfordern können, als auch wie Sie erkennen, wann die Sitzung beendet ist, unabhängig davon, ob auf Ihre Anfrage hin oder nicht.

### Abschalten der Sitzung

Um die WebXR-Sitzung sauber herunterzufahren, wenn Sie damit fertig sind, sollten Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) der Sitzung aufrufen. Dies gibt ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das Ihnen mitteilt, wann der Shutdown abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` zu seinem Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Aufgaben haben, die beim Ende der Sitzung erledigt werden müssen, wie das Freigeben von Ressourcen oder Ähnliches, sollten Sie diese Arbeit in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler erledigen und nicht in Ihrem Hauptcode. Auf diese Weise behandeln Sie die Bereinigung unabhängig davon, ob der Shutdown automatisch ausgelöst oder manuell ausgelöst wird.

### Erkennen, wann die Sitzung beendet ist

Wie bereits erwähnt, können Sie erkennen, wann die WebXR-Sitzung beendet ist – sei es, weil Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein unlösbarer Fehler im XR-System aufgetreten ist – indem Sie das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis beobachten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier wird, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, eine Funktion `freeResources()` aufgerufen, um die Ressourcen freizugeben, die zuvor zugewiesen und/oder geladen wurden, um die XR-Darstellung zu handhaben. Durch das Aufrufen von `freeResources()` im `end`-Ereignishandler rufen wir es sowohl auf, wenn der Benutzer auf einen Knopf klickt, der einen Shutdown auslöst (wie etwa durch Aufrufen der oben gezeigten Funktion `shutdownXR()`) _als auch_ wenn die Sitzung automatisch beendet wird, unabhängig davon, ob dies aufgrund eines Fehlers oder eines anderen Grundes geschieht.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
