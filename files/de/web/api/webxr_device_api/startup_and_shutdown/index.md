---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("WebXR Device API")}}

Wenn Sie bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut sind, ist der nächste mutige Schritt in Richtung Mixed Reality - die Idee, künstliche Szenarien oder Objekte zusätzlich zur oder anstelle der realen Welt zu präsentieren - nicht allzu kompliziert. Bevor Sie beginnen können, Ihr Szenario für erweiterte oder virtuelle Realität zu rendern, müssen Sie die WebXR-Sitzung erstellen und einrichten, und Sie sollten auch wissen, wie man sie richtig beendet. In diesem Artikel erfahren Sie, wie Sie dies tun können.

## Zugriff auf die WebXR API

Der Zugriff Ihrer App auf die WebXR API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Gerätesuite, die Ihnen durch die auf der Benutzerhardware verfügbaren Hardware und Treiber zur Verfügung steht. Ein globales `XRSystem`-Objekt steht Ihrem Dokument über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) zur Verfügung, die das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware basierend auf der verfügbaren Hardware und der Umgebung Ihres Dokuments verfügbar ist.

Der einfachste Code, der das `XRSystem`-Objekt abruft, sieht folgendermaßen aus:

```js
const xr = navigator.xr;
```

Der Wert von `xr` ist `null` oder `undefined`, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Als neue und sich noch in der Entwicklung befindliche API ist die Unterstützung von WebXR auf bestimmte Geräte und Browser beschränkt; und selbst auf diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es können jedoch Optionen verfügbar sein, um mit WebXR zu experimentieren, auch wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat ein [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, das Sie verwenden können, um WebXR in Browsern zu simulieren, die keine Unterstützung für die WebXR-APIs haben. Wenn der Browser die ältere [WebVR API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls fällt das Polyfill auf eine Implementierung zurück, die Googles Cardboard VR API verwendet.

Das Polyfill wird zusammen mit der Spezifikation gepflegt und wird laufend mit der Spezifikation aktualisiert. Zusätzlich wird es aktualisiert, um die Kompatibilität mit Browsern zu erhalten, wenn sich deren Unterstützung für WebXR und andere damit verbundene Technologien im Laufe der Zeit ändert.

Stellen Sie sicher, dass Sie die Readme-Datei sorgfältig lesen; das Polyfill gibt es in mehreren Versionen, je nachdem, welcher Grad an Kompatibilität mit neueren JavaScript-Features Ihre Zielbrowser bieten.

##### Verwendung des Emulators

Obwohl es etwas unhandlich im Vergleich zur Verwendung eines tatsächlichen Headsets ist, ermöglicht dies Experimente mit und die Entwicklung von WebXR-Code auf einem Desktop-Computer, wo WebXR normalerweise nicht verfügbar ist. Es ermöglicht auch einige grundlegende Tests, bevor Ihr Code auf einem echten Gerät ausgeführt wird. Beachten Sie jedoch, dass der Emulator noch nicht vollständig alle WebXR-APIs emuliert, sodass Sie möglicherweise auf unerwartete Probleme stoßen. Lesen Sie die Readme-Datei sorgfältig durch und machen Sie sich mit den Einschränkungen vertraut, bevor Sie beginnen.

**Wichtig:** Sie sollten _immer_ Ihren Code auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt freigeben oder versenden! Emulierte, simulierte oder polyfüllte Umgebungen sind kein angemessener Ersatz für tatsächliche Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Probleme und Hinweise zum Emulator

Obwohl dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte Unterstützung für erweiterte Realität (AR) durch das [WebXR AR Module](https://immersive-web.github.io/webxr-ar-module/) ein, das sich einem stabilen Zustand nähert. Dokumentation für AR wird in Kürze hier auf MDN verfügbar sein.

Weitere Verbesserungen umfassen die Aktualisierung des Emulators zur Umbenennung des `XR`-Interface in [`XRSystem`](/de/docs/Web/API/XRSystem), die Einführung von Unterstützung für Squeeze (Grip)-Eingabequellen und das Hinzufügen von Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles).

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte (zum Beispiel durch die Verwendung einer URL wie `http://localhost/…`) oder über {{Glossary("HTTPS", "HTTPS")}} beim Laden der Seite geladen worden sein. Der JavaScript-Code muss ebenfalls sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht weit. Die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler anmutig behandeln oder eine Art von Alternativlösung bereitstellen.

### Rückgriff auf das WebXR-Polyfill

Eine Rückfalloption ist das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den WebXR-Standardisierungsprozess verantwortlich ist. Das {{Glossary("polyfill", "Polyfill")}} bietet Unterstützung für WebXR in Browsern, die keine native WebXR-Unterstützung haben, und beseitigt Inkonsistenzen zwischen Implementierungen in den Browsern, die dies tun. Es kann daher manchmal auch nützlich sein, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurückgibt, nachdem optional das Polyfill installiert wurde, vorausgesetzt, dass das Polyfill unter Verwendung eines vorherigen {{HTMLElement("script")}}-Tags enthalten oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Das Setzen auf `null` signalisiert, dass das Polyfill von der Garbage Collection entfernt werden kann, wenn keine Objekte mehr darauf zugreifen.

Natürlich kann man dies je nach Bedarf vereinfachen; da Ihre App wahrscheinlich nicht oft zwischen der Verwendung des Polyfill hin- und herwechseln wird, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen rund um WebXR. Als erstes erfordert die Verwendung des `immersive-vr`-Modus, der die Sicht des Benutzers auf die Welt vollständig ersetzt, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) aktiviert ist. Darüber hinaus muss das Dokument sicher sein und derzeit den Fokus haben. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) von einem Benutzerereignishandler aus aufrufen, wie beispielsweise dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis.

Für genauere Informationen zur Sicherung von WebXR-Aktivitäten und -Nutzung lesen Sie den Artikel [Permissions and security for WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Bestätigen, dass der benötigte Sitzungstyp verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft ratsam zunächst zu prüfen, ob die Benutzerhardware und -software den Präsentationsmodus unterstützen, den Sie verwenden möchten. Dies kann auch verwendet werden, um zu bestimmen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll.

Um herauszufinden, ob ein bestimmter Modus unterstützt wird, rufen Sie die Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) des [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Dies gibt ein Promise zurück, das auf `true` aufgelöst wird, wenn der angegebene Sitzungstyp verfügbar ist, oder andernfalls auf `false`.

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

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellt. Um eine `XRSession` zu erhalten, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Diese gibt ein Promise zurück, das mit einer `XRSession` aufgelöst wird, falls es erfolgreich eine erstellen kann. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Codeausschnitt an `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten - in diesem Fall eine vollständig immersive Virtual-Reality-Erfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive Virtual-Reality-Sitzung unter Verwendung eines Headsets oder ähnlichen Geräts, das die Welt um den Benutzer vollständig durch die von Ihnen präsentierten Bilder ersetzt.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, in der Bilder zur realen Welt hinzugefügt werden, unter Verwendung eines Headsets oder einer ähnlichen Apparatur. _Diese Option wird noch nicht weitgehend unterstützt, da die AR-Spezifikation noch im Fluss ist._
- `inline`
  - : Eine On-Screen-Präsentation der XR-Bilder innerhalb des Kontextes des Dokumentfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte - wie zum Beispiel, dass die Feature-Policy ihre Verwendung nicht erlaubt oder der Benutzer die Erlaubnis zur Verwendung des Headsets verweigert - wird das Promise abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder wirft eine Ausnahme, wenn beim Erstellen der Sitzung ein Fehler auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern zur Anpassung der Sitzung enthalten. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welcher der Referenzräume zur Darstellung des Koordinatensystems der Welt verwendet werden soll. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine mit den benötigten oder bevorzugten Referenzräumen kompatible Sitzung zu erhalten.

Zum Beispiel, wenn Sie einen `unbounded` Referenzraum benötigen, können Sie dies als ein erforderliches Feature angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, unbegrenzte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Andererseits, wenn Sie eine _inline_-Sitzung benötigen und einen `local` Referenzraum bevorzugen, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion versucht, eine Inline-Sitzung zu erstellen, die mit dem `local` Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie versuchen, einen lokalen Raum zu verwenden, und wenn dies fehlschlägt, auf einen `viewer` Referenzraum zurückgreifen, den alle Geräte unterstützen müssen.

### Vorbereiten der neuen Sitzung auf die Nutzung

Sobald das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Promise erfolgreich aufgelöst ist, wissen Sie, dass Sie eine nutzbare WebXR-Sitzung in der Hand haben. Sie können dann mit der Vorbereitung der Sitzung für die Nutzung fortfahren und Ihre Animationen beginnen.

Die wichtigsten Dinge, die Sie tun müssen (oder möglicherweise müssen), um die Konfiguration Ihrer Sitzung abzuschließen, umfassen:

- Hinzufügen von Hand

- ler für die Ereignisse, die Sie beobachten müssen. Dies umfasst höchstwahrscheinlich das [`end`](/de/docs/Web/API/XRSession/end_event) mindestens, damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabesteuerungen verwenden, beobachten Sie das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, um die Hinzufügung oder Entfernung von XR-Eingabesteuerungen zu erkennen, sowie die verschiedenen [Auswahl- und Greifaktionen](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Sie möchten möglicherweise auf das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) achten, damit Sie benachrichtigt werden, wenn sich die Menge der verfügbaren immersiven Geräte ändert.
- Abrufen eines WebGL-Kontextes für die Leinwand, auf die Sie Ihre Frames rendern möchten, indem Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Zielkontext des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) aufrufen.
- Einrichten Ihrer WebGL-Daten und -Modelle und Vorbereitung zum Rendern der Szene.
- Setzen Sie den WebGL-Kontext als Quelle für das XR-System, indem Sie eine [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der Sitzung [`renderState`](/de/docs/Web/API/XRRenderState)-Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) setzen.
- Berechnungen für die anfängliche Position und Skalierung Ihrer Objekte nach Bedarf durchführen.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In seiner grundlegendsten Form könnte der Code für diese abschließende Einrichtung wie folgt aussehen:

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

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Informationen über die Welt und die Render-Umgebung zu kapseln. Dies umfasst die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die zum Rendern der Szene in WebGL verwendet werden, den Weltreferenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird die Rendering-Leinwand abgerufen und eine Referenz auf ihren WebGL-Kontext abgerufen, und zwar unter Angabe der Option `xrCompatible`, wenn [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufgerufen wird.

Als nächstes werden alle für den WebGL-Renderer benötigten Daten und Einrichtungsarbeiten durchgeführt, bevor WebGL so konfiguriert wird, dass es den Framebuffer des WebGL-Kontextes als seinen eigenen Framebuffer verwendet. Dies wird mit der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) der [`XRSession`](/de/docs/Web/API/XRSession) durchgeführt, um den Renderstatus [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) auf eine neu erstellte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, die den WebGL-Kontext kapselt.

### Vorbereitung auf das Rendern der Szene

An diesem Punkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, in dem die Koordinaten für die Welt angegeben werden. Wir können den anfänglichen Referenzraum für die Sitzung erhalten, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession` aufrufen. Wir geben beim Aufruf von `requestReferenceSpace()` den Namen des gewünschten Referenzraumtyps an; in diesem Fall `unbounded`. Ebenso könnte `local` oder `viewer` angegeben werden, je nach Ihren Bedürfnissen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, sehen Sie sich [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type) an.

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raumes. Dies ist großartig, wenn der Standpunkt Ihres Spielers genau in der Mitte der Welt beginnt. Aber höchstwahrscheinlich ist das überhaupt nicht der Fall. Wenn dies so ist, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) am anfänglichen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) an der Position des Betrachters im Raum liegt und die Ausrichtung entsprechend der gewünschten Richtung verschoben wird. Der Eingabewert in `getOffsetReferenceSpace()` ist eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Position und Orientierung des Spielers in den Standardweltkoordinaten kapselt.

Mit dem neuen Referenzraum in der Hand und sicher in dem `worldData`-Objekt gespeichert, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Rückruf zu planen, der ausgeführt wird, wenn es Zeit ist, den nächsten Animationsrahmen für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die später verwendet werden kann, um die Anfrage bei Bedarf abzubrechen, sodass wir diesen ebenfalls in `worldData` speichern.

Am Ende wird das `worldData`-Objekt an den Aufrufer zurückgegeben, damit der Hauptcode die Daten bei Bedarf später referenzieren kann. An diesem Punkt ist der Einrichtungsprozess abgeschlossen und wir haben die Renderphase unserer Anwendung betreten. Um mehr über das Rendern zu lernen, sehen Sie sich den Artikel [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering) an.

### Zu den betrieblichen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie aufbewahren müssen, auf jede beliebige Weise speichern. Sie benötigen möglicherweise unterschiedliche Informationen oder haben spezifische Anforderungen, die dazu führen, dass Sie Dinge anders oder in einer anderen Reihenfolge tun.

Ebenso variiert die spezifische Methodik, die Sie zum Laden von Modellen und anderen Informationen sowie zum Einrichten Ihrer WebGL-Daten verwenden - Texturen, Vertex-Buffer, Shader und so weiter - erheblich, je nach Ihren Bedürfnissen, welchen Frameworks Sie verwenden oder dergleichen.

## Wichtige Sitzungswartungsereignisse

Im Laufe Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die auf Änderungen am Zustand der Sitzung hinweisen oder Sie über Dinge informieren, die Sie tun müssen, um die Sitzung ordnungsgemäß laufen zu lassen.

### Erkennen von Änderungen am Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert - wie z.B. wenn die Sitzung ausgeblendet oder angezeigt wird oder wenn der Benutzer einen anderen Kontext fokussiert hat - erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` in Abhängigkeit vom Sichtbarkeitsstatus, während er sich ändert. Es wird angenommen, dass der Renderer diesen Wert verwendet, um zu berechnen, wie oft neue Frames gerendert werden sollen, während die Animationsschleife fortschreitet, und somit weniger häufig gerendert wird, je „unscharf“ die Szene wird.

### Erkennen von Aktualisierungen des Referenzraums

Gelegentlich können während der Verfolgung der Position des Benutzers in der Welt Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten. Die häufigsten Szenarien, in denen dies geschieht, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn eine Unterbrechung oder ein Fehler im Empfang des Verfolgungsdatenflusses von der XR-Hardware auftritt. Diese Situationen lassen den nativen Ursprung abrupt um die Entfernung und den Richtungswinkel springen, die erforderlich sind, um den nativen Ursprung wieder in Übereinstimmung mit der Benutzerposition und der Blickrichtung zu bringen.

Wenn dies geschieht, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die notwendige Transformation zur Realignierung des nativen Ursprungs beschreibt.

> [!NOTE]
> Das `reset`-Ereignis wird am [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ausgelöst, nicht an der [`XRSession`](/de/docs/Web/API/XRSession)!

Ein weiterer häufiger Grund für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie ändert, wie sie durch die Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) des [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) spezifiziert wird.

Für häufigere Ursachen für Referenzraum-Resets und weitere Details und Beispielcode lesen Sie die Dokumentation für das [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen von Änderungen an der verfügbaren Menge an WebXR-Eingabegeräten

WebXR führt eine Liste von Eingabegeräten, die spezifisch für das WebXR-System ist. Diese Geräte umfassen Dinge wie Handcontroller, bewegungssensitive Kameras, bewegungsempfindliche Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controller-Gerät anschließt oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, um den Benutzer über die Verfügbarkeit des Geräts zu informieren, es auf Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder dadurch erfolgen, dass die Sitzung selbst entscheidet, dass es Zeit zum Beenden ist (zum Beispiel, wenn der Benutzer sein XR-Gerät ausschaltet), weil der Benutzer eine Schaltfläche zum Beenden der Sitzung gedrückt hat oder in einem anderen, für Ihre Anwendung geeigneten Fall.

Hier besprechen wir, wie man sowohl das Herunterfahren der WebXR-Sitzung anfordert als auch wie man erkennt, wann die Sitzung beendet ist, sei es durch Ihre Anforderung oder auf andere Weise.

### Die Sitzung beenden

Um die WebXR-Sitzung sauber zu beenden, wenn Sie damit fertig sind, sollten Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) der Sitzung aufrufen. Diese gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das Sie verwenden können, um zu erfahren, wann das Herunterfahren abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` zu seinem Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten haben, die beim Beenden der Sitzung erledigt werden müssen, wie das Freigeben von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler erledigen, anstatt in Ihrem Hauptcodekörper. So behandeln Sie die Bereinigung unabhängig davon, ob das Herunterfahren automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet ist

Wie bereits festgestellt, können Sie erkennen, wann die WebXR-Sitzung beendet ist - sei es, weil Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein nicht behebbarer Fehler im XR-System aufgetreten ist - indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier ruft, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, eine `freeResources()`-Funktion auf, um die zuvor zugewiesenen und/oder geladenen Ressourcen zur Behandlung der XR-Präsentation freizugeben. Indem `freeResources()` im `end`-Ereignishandler aufgerufen wird, wird es aufgerufen, sowohl wenn der Benutzer auf eine Schaltfläche klickt, die ein Herunterfahren auslöst, wie z.B. durch das Aufrufen der oben gezeigten Funktion `shutdownXR()`, _als auch_ wenn die Sitzung automatisch endet, sei es durch einen Fehler oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Blickpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
