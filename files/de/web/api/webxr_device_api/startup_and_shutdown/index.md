---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Vorausgesetzt, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, ist der nächste mutige Schritt in die Mischrealität, also die Idee, künstliche Szenerien oder Objekte zusätzlich oder anstelle der realen Welt darzustellen, nicht übermäßig kompliziert. Bevor Sie mit dem Rendern Ihres erweiterten oder virtuellen Realitätsszenarios beginnen können, müssen Sie die WebXR-Sitzung erstellen und einrichten und sollten auch wissen, wie Sie diese ordnungsgemäß herunterfahren. In diesem Artikel erfahren Sie, wie Sie diese Dinge tun.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte verfügbare WebXR-Gerätesuite, die Ihnen durch die Hardware und Treiber auf der Benutzerplattform zur Verfügung steht. Ein globales `XRSystem`-Objekt steht für Ihr Dokument über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) zur Verfügung, die das `XRSystem`-Objekt zurückgibt, falls geeignete XR-Hardware auf der Grundlage der verfügbaren Hardware und der Umgebung Ihres Dokuments verfügbar ist.

Der einfachste Code, um das `XRSystem`-Objekt abzurufen, ist:

```js
const xr = navigator.xr;
```

Der Wert von `xr` wird `null` oder `undefined` sein, wenn WebXR nicht verfügbar ist.

### WebXR-Verfügbarkeit

Als neue und sich noch in der Entwicklung befindende API ist die WebXR-Unterstützung auf bestimmte Geräte und Browser beschränkt. Und selbst auf diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es kann jedoch Möglichkeiten geben, um mit WebXR zu experimentieren, selbst wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat einen [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, den Sie verwenden können, um WebXR auf Browsern zu simulieren, die keine Unterstützung für die WebXR-APIs haben. Unterstützt der Browser die ältere [WebVR-API](/de/docs/Web/API/WebVR_API), wird diese genutzt. Andernfalls greift das Polyfill auf eine Implementierung zurück, die die VR-API von Google Cardboard verwendet.

Das Polyfill wird zusammen mit der Spezifikation gepflegt und wird mit dieser aktualisiert. Darüber hinaus wird es so aktualisiert, dass es mit Browsern kompatibel bleibt, während deren Unterstützung für WebXR und andere verwandt Technologien sowie die Implementation des Polyfills sich ändern.

Lesen Sie die Readme sorgfältig; das Polyfill ist in mehreren Versionen erhältlich, abhängig davon, welchen Grad an Kompatibilität mit neueren JavaScript-Funktionen Ihre Zielbrowser bieten.

##### Verwendung des Emulators

Auch wenn es etwas umständlich ist im Vergleich zur Verwendung eines echten Headsets, ermöglicht dies das Experimentieren mit und Entwickeln von WebXR-Code auf einem Desktop-Computer, auf dem WebXR normalerweise nicht verfügbar ist. Es ermöglicht auch einige grundlegende Tests, bevor Sie Ihren Code auf ein echtes Gerät bringen. Beachten Sie jedoch, dass der Emulator noch nicht das gesamte WebXR-API vollständig emuliert, sodass Sie auf unerwartete Probleme stoßen können. Lesen Sie erneut die Readme-Datei sorgfältig und vergewissern Sie sich, dass Sie sich der Einschränkungen bewusst sind, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder mit Polyfill ausgestattete Umgebungen sind _kein_ adäquater Ersatz für tatsächliche Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser unten herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Emulator-Probleme und Hinweise

Auch wenn dies nicht der Platz für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte Unterstützung für augmented reality (AR) durch das [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/) ein, das sich einem stabilen Zustand nähert. Dokumentation für AR wird in Kürze hier auf MDN bereitgestellt.

Weitere Verbesserungen umfassen die Aktualisierung des Emulators zur Umbenennung der `XR`-Schnittstelle in [`XRSystem`](/de/docs/Web/API/XRSystem), die Einführung der Unterstützung für Squeeze (Grip)-Eingabequellen und das Hinzufügen der Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles).

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder vom lokalen Laufwerk (wie durch die Verwendung einer URL wie `http://localhost/…`) oder unter Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) beim Laden der Seite geladen worden sein. Der JavaScript-Code muss ebenfalls sicher geladen sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht weit. Die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler ordentlich behandeln oder eine Art Fallback bereitstellen.

### Fallback auf das WebXR-Polyfill

Eine Fallback-Option ist das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Standardisierungsprozess von WebXR zuständig ist. Das [Polyfill](/de/docs/Glossary/polyfill) bringt Unterstützung für WebXR in Browsern, die keine native WebXR-Unterstützung haben, und gleicht die Inkonsistenzen unter den Implementierungen in den Browsern, die es nativ haben, aus, sodass es manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine Funktion `getXR()`, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt nach optionaler Installation des Polyfills zurückgibt, vorausgesetzt, dass das Polyfill mit einem früheren {{HTMLElement("script")}}-Tag eingebunden oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Wenn Sie es auf `null` setzen, wird signalisiert, dass das Polyfill zum Müll gesammelt werden kann, wenn keine von ihm abhängigen Objekte es mehr verwenden.

Natürlich können Sie dies je nach Ihren Bedürfnissen vereinfachen; da Ihre App wahrscheinlich nicht viel hin- und herwechseln wird, ob sie das Polyfill verwendet oder nicht, können Sie dies auf den spezifischen Fall, den Sie benötigen, vereinfachen.

### Berechtigungen und Sicherheit

Es gibt eine Anzahl von Sicherheitsmaßnahmen im Zusammenhang mit WebXR. An erster Stelle davon steht, dass die Verwendung des `immersive-vr`-Modus—der die Sicht des Benutzers auf die Welt vollständig ersetzt—erfordert, dass die `xr-spatial-tracking`-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und derzeit fokussiert sein. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) von einem Benutzerevent-Handler aus aufrufen, wie z. B. dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis.

Für weitere Details zur Sicherung von WebXR-Aktivitäten und -Nutzung finden Sie in dem Artikel [Permissions and security for WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Überprüfen, ob der benötigte Sitzungsmodus verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft klug, zuerst zu überprüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützen, den Sie verwenden möchten. Dies kann auch verwendet werden, um zu bestimmen, ob Sie eine immersive oder eine Inline-Präsentation verwenden sollten, zum Beispiel.

Um herauszufinden, ob ein gegebener Modus unterstützt wird, rufen Sie die [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf. Dies gibt ein Promise zurück, das zu `true` aufgelöst wird, wenn der gegebene Sitzungstyp verfügbar ist, oder `false` andernfalls.

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

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellt. Um eine `XRSession` zu erhalten, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf, die ein Promise zurückgibt, das zu einer `XRSession` aufgelöst wird, wenn es erfolgreich eine erstellen kann. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Code-Schnipsel an `requestSession()` übergeben wird: `immersive-vr`. Diese Zeichenfolge gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten—in diesem Fall eine vollständig immersive virtuelle Realitätserfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive virtuelle Realitätssitzung mit einem Headset oder ähnlichem Gerät, das die Welt um den Benutzer vollständig durch die von Ihnen präsentierten Bilder ersetzt.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, in der Bilder mit einem Headset oder ähnlichem Apparat zur realen Welt hinzugefügt werden. _Diese Option wird noch nicht weit verbreitet unterstützt, da die AR-Spezifikation in der Entwicklung ist._
- `inline`
  - : Eine Bildschirmpräsentation der XR-Bilder innerhalb des Kontextes des Dokumentenfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte—wie etwa durch die Ablehnung durch den Benutzer oder durch die Verwaltung von Funktionen, die ihre Verwendung nicht erlauben—wird das Promise abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder wirft eine Ausnahme, wenn ein Fehler beim Erstellen der Sitzung auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern annehmen, um die Sitzung anzupassen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welche der Referenzräume verwendet werden sollen, um das Koordinatensystem der Welt zu repräsentieren. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den von Ihnen benötigten oder bevorzugten Referenzräumen kompatibel ist.

Zum Beispiel, wenn Sie einen `unbounded`-Referenzraum benötigen, können Sie diesen als erforderliches Merkmal angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, unbeschränkte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Andererseits, wenn Sie eine _Inline_-Sitzung benötigen und einen `local`-Referenzraum bevorzugen, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion wird versuchen, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie einen lokalen Raum versuchen, und wenn das fehlschlägt, auf einen `viewer`-Referenzraum zurückfallen, der von allen Geräten unterstützt werden muss.

### Vorbereiten der neuen Sitzung zur Verwendung

Sobald das Promise, das von der Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird, erfolgreich aufgelöst wurde, wissen Sie, dass Sie eine verwendbare WebXR-Sitzung in der Hand haben. Sie können dann mit der Vorbereitung der Sitzung zur Verwendung fortfahren und mit Ihren Animationen beginnen.

Die wichtigsten Dinge, die Sie tun müssen (oder tun müssen können), um die Konfiguration Ihrer Sitzung abzuschließen, umfassen:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie überwachen müssen. Dies beinhaltet höchstwahrscheinlich den [`end`](/de/docs/Web/API/XRSession/end_event) mindestens, damit Sie erkennen können, wann die Sitzung vorbei ist.
- Wenn Sie XR-Eingaberegler verwenden, überwachen Sie das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, um die Hinzufügung oder Entfernung von XR-Eingabereglern zu erkennen und die verschiedenen [Wähl- und Drück-Aktionsereignisse](/de/docs/Web/API/WebXR_Device_API/Inputs#actionen).
- Möglicherweise möchten Sie das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) überwachen, damit Sie informiert werden, wenn sich die verfügbare Menge an immersiven Geräten ändert.
- Rufen Sie einen WebGL-Kontext für das Canvas-Objekt ab, in das Sie Ihre Frames rendern möchten, indem Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) im Ziel-Kontext aufrufen.
- Richten Sie Ihre WebGL-Daten und -Modelle ein und bereiten Sie sich darauf vor, die Szene zu rendern.
- Legen Sie den WebGL-Kontext als Quelle für das XR-System fest, indem Sie eine [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der [`renderState`](/de/docs/Web/API/XRRenderState)-Eigenschaft der Sitzung [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) setzen.
- Führen Sie Berechnungen für die anfängliche Position und Skalierung Ihrer Objekte durch, soweit notwendig.
- Beginnen Sie den [Frame-Render-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In ihrer Grundform könnte der Code für diese endgültige Einrichtung etwa so aussehen:

```js
async function runSession(session) {
  session.addEventListener("end", onSessionEnd);

  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext("webgl", { xrCompatible: true });

  // Set up WebGL data and such

  const worldData = loadGLPrograms(session, "worlddata.xml");
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

Zu Zwecken dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Render-Umgebung zu kapseln. Dies beinhaltet die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle dazwischengerenderten Szenendaten in WebGL, den Welt-Referenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und eine Referenz auf seinen WebGL-Kontext erhalten, wobei die `xrCompatible`-Option beim Aufrufen von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben wird.

Als Nächstes werden alle für den WebGL-Renderer benötigten Daten und Sets eingerichtet, bevor WebGL so konfiguriert wird, dass es das Framebuffer des WebGL-Kontexts als eigenes Framebuffer verwendet. Dies wird durch die Sitzungsmethode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) durchgeführt, um den Render-Status [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) auf eine neu erstellte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, die den WebGL-Kontext kapselt.

### Vorbereitung zum Rendern der Szene

An diesem Punkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, in dem die Koordinaten für die Welt angegeben werden. Wir können den initialen Referenzraum für die Sitzung erhalten, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession` aufrufen. Wir geben beim Aufrufen von `requestReferenceSpace()` den Namen des Typs des Referenzraums an, den wir möchten; in diesem Fall `unbounded`. Sie könnten ebenso gut `local` oder `viewer` angeben, je nach Ihren Bedürfnissen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, sehen Sie sich [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type) an.

Der durch `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) im Zentrum des Raumes. Das ist großartig—wenn der Startpunkt Ihres Spielers genau im Mittelpunkt der Welt beginnt. Wahrscheinlich ist das jedoch überhaupt nicht der Fall. Ist das so, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf dem initialen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass sich (0, 0, 0) an der Position des Zuschauers befindet, wobei die Ausrichtung ebenfalls auf die gewünschte Richtung verschoben wird. Der Eingabewert in `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die Position und Orientierung des Spielers wie in den Standard-Weltkoordinaten angegeben kapselt.

Mit dem neuen Referenzraum in der Hand und sicher im `worldData`-Objekt abgelegt, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Callback zu planen, der ausgeführt wird, wenn es Zeit ist, den nächsten Animationsframe für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anfrage bei Bedarf zu stornieren, sodass wir diese auch in `worldData` speichern.

Am Ende wird das `worldData`-Objekt an den Aufrufer zurückgegeben, sodass der Hauptcode später auf die benötigten Daten verweisen kann. An dieser Stelle ist der Einrichtungsprozess abgeschlossen und wir sind in die Renderphase unserer Anwendung eingetreten. Um mehr über das Rendern zu erfahren, siehe den Artikel [Rendering und der WebXR Frame Animation Callback](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Über Betriebsdetails

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie benötigen, speichern, wie auch immer Sie es möchten. Möglicherweise benötigen Sie unterschiedliche Informationen oder haben unterschiedliche spezifische Anforderungen, die Sie dazu veranlassen, Dinge anders oder in einer anderen Reihenfolge zu tun.

Ebenso wird die spezifische Methodologie, die Sie für das Laden von Modellen und anderen Informationen sowie das Einrichten Ihrer WebGL-Daten—Texturen, Vertex-Puffer, Shader usw.—verwenden, stark variieren, je nach Ihren Bedürfnissen, welche Frameworks Sie verwenden, und dergleichen.

## Wichtige Ereignisse zur Sitzungswartung

Im Verlauf Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die Änderungen am Zustand der Sitzung anzeigen oder Sie über Dinge informieren, die Sie tun müssen, um die Sitzung ordnungsgemäß fortzusetzen.

### Erkennen von Änderungen des Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert—zum Beispiel, wenn die Sitzung versteckt oder angezeigt wird, oder wenn der Benutzer einen anderen Kontext fokussiert hat—erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` abhängig vom Sichtbarkeitsstatus, wenn dieser sich ändert. Der Renderer verwendet diesen Wert vermutlich, um zu berechnen, wie oft neue Frames gerendert werden sollen, wenn die Animationsschleife fortschreitet, und rendert daher seltener, je "unscharfer" die Szene wird.

### Erkennen von Referenzraum-Rücksetzungen

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies passiert, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn ein Schluckauf oder eine Störung im Fluss der vom XR-Hardware empfangenen Tracking-Daten auftritt. Diese Situationen führen dazu, dass der native Ursprung abrupt um die Distanz und den Winkel springt, die erforderlich sind, um den nativen Ursprung wieder mit der Position und Blickrichtung des Benutzers in Einklang zu bringen.

Wenn dies passiert, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die Transformation detailliert beschreibt, die erforderlich ist, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird beim [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) und nicht bei der [`XRSession`](/de/docs/Web/API/XRSession) ausgelöst!

Ein weiterer häufiger Grund für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie ändert, wie durch die Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) des [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) angegeben.

Für häufigere Ursachen von Referenzraum-Rücksetzungen und mehr Details sowie Beispielcode siehe die Dokumentation für das [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen, wann sich der verfügbare Satz von WebXR-Eingabesteuerungen ändert

WebXR verwaltet eine Liste von Eingabesteuerungen, die spezifisch für das WebXR-System sind. Diese Geräte umfassen Dinge wie die Handcontroller, bewegungssensible Kameras, sensorgesteuerte Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controller-Gerät anschließt oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, es zu überwachen, um Eingaben zu überprüfen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder dadurch geschehen, dass die Sitzung selbst entscheidet, dass es Zeit ist, herunterzufahren (wie wenn der Benutzer sein XR-Gerät ausschaltet) oder weil der Benutzer einen Knopf gedrückt hat, um die Sitzung zu beenden, oder eine andere Situation, die für Ihre Anwendung angemessen ist.

Hier besprechen wir, wie Sie das Herunterfahren der WebXR-Sitzung anfordern und wie Sie erkennen, wann die Sitzung beendet ist, sei es auf Ihre Anfrage hin oder aus anderen Gründen.

### Herunterfahren der Sitzung

Um die WebXR-Sitzung ordnungsgemäß herunterzufahren, wenn Sie damit fertig sind, sollten Sie die [`end()`](/de/docs/Web/API/XRSession/end)-Methode der Sitzung aufrufen. Dies gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, mit dem Sie wissen, wann das Herunterfahren abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` an seinen Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten auszuführen haben, wenn die Sitzung endet, wie z. B. Freigabe von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler ausführen, anstatt in Ihrem Hauptcode-Körper. Auf diese Weise erledigen Sie das Aufräumen, unabhängig davon, ob das Herunterfahren automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet ist

Wie bereits festgestellt, können Sie erkennen, wann die WebXR-Sitzung beendet ist—sei es, weil Sie ihre [`end()`](/de/docs/Web/API/XRSession/end)-Methode aufgerufen haben, der Benutzer ihr Headset ausgeschaltet hat oder ein nicht auflösbares Problem im XR-System aufgetreten ist—indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier wird, nachdem die Sitzung beendet ist und das `end`-Ereignis empfangen wird, eine `freeResources()`-Funktion aufgerufen, um die zuvor zugeordneten und/oder geladenen Ressourcen für die XR-Präsentation freizugeben. Indem Sie `freeResources()` im `end`-Ereignishandler aufrufen, rufen wir es sowohl dann auf, wenn der Benutzer einen Knopf klickt, der ein Herunterfahren auslöst, wie durch das obige Beispiel der `shutdownXR()`-Funktion gezeigt, als auch dann, wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Zuschauer: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
