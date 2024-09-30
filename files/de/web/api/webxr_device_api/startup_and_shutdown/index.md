---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Angenommen, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, dann ist der nächste mutige Schritt in die gemischte Realität – die Idee, künstliche Szenarien oder Objekte zusätzlich zur oder anstelle der realen Welt darzustellen – nicht allzu kompliziert. Bevor Sie mit dem Rendern Ihres Augmented- oder Virtual-Reality-Szenarios beginnen können, müssen Sie die WebXR-Sitzung erstellen und einrichten. Sie sollten auch wissen, wie Sie sie ordnungsgemäß beenden können. In diesem Artikel erfahren Sie, wie Sie diese Dinge tun.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Geräte-Suite, die Ihnen durch die auf der Benutzerhardware verfügbaren Geräte und Treiber zur Verfügung steht. Es gibt ein globales `XRSystem`-Objekt, das Ihrem Dokument über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) zur Verfügung steht, welches das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware für Ihre Nutzung verfügbar ist, abhängig von der verfügbaren Hardware und der Umgebung Ihres Dokuments.

Der einfachste Code, der das `XRSystem`-Objekt abruft, sieht so aus:

```js
const xr = navigator.xr;
```

Der Wert von `xr` ist `null` oder `undefined`, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Als eine neue und noch in der Entwicklung befindliche API ist die Unterstützung von WebXR auf bestimmte Geräte und Browser beschränkt; selbst dort ist sie möglicherweise nicht standardmäßig aktiviert. Es gibt jedoch möglicherweise Optionen, die es Ihnen erlauben, mit WebXR zu experimentieren, auch wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat einen [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, den Sie verwenden können, um WebXR in Browsern zu simulieren, die die WebXR-APIs nicht unterstützen. Wenn der Browser die ältere [WebVR-API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls greift der Polyfill auf eine Implementierung zurück, die Googles Cardboard-VR-API verwendet.

Der Polyfill wird zusammen mit der Spezifikation gepflegt und wird auf dem neuesten Stand der Spezifikation gehalten. Zusätzlich wird er aktualisiert, um die Kompatibilität mit Browsern beizubehalten, während ihre Unterstützung für WebXR und andere damit zusammenhängende Technologien sowie für die Implementierung des Polyfills im Laufe der Zeit geändert wird.

Lesen Sie die README-Datei sorgfältig durch; der Polyfill ist in mehreren Versionen erhältlich, je nachdem, welcher Grad an Kompatibilität mit neueren JavaScript-Features Ihre Zielbrowser unterstützen.

##### Verwendung des Emulators

Obwohl es etwas umständlich im Vergleich zur Verwendung eines tatsächlichen Headsets ist, ermöglicht es dies, mit WebXR-Code auf einem Desktop-Computer zu experimentieren und zu entwickeln, wo WebXR normalerweise nicht verfügbar ist. Es ermöglicht auch eine grundlegende Testung, bevor Sie Ihren Code auf ein echtes Gerät bringen. Beachten Sie jedoch, dass der Emulator momentan nicht die gesamte WebXR-API vollständig emuliert, sodass unerwartete Probleme auftreten können. Lesen Sie erneut die README-Datei sorgfältig und stellen Sie sicher, dass Sie sich der Einschränkungen bewusst sind, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder mit Polyfill ergänzte Umgebungen sind _kein_ adäquater Ersatz für tatsächliche Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR-API-Emulator für Ihren unterstützten Browser herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Probleme und Hinweise zum Emulator

Obwohl dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Punkte, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte die Unterstützung für Augmented Reality (AR) durch das [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/) ein, das sich einem stabilen Zustand nähert. Die Dokumentation für AR wird in Kürze hier auf MDN bereitgestellt.

Weitere Verbesserungen umfassen die Aktualisierung des Emulators, um die `XR`-Schnittstelle in [`XRSystem`](/de/docs/Web/API/XRSystem) umzubenennen, die Unterstützung für Eingabequellen mit Druckgriff hinzuzufügen und die Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles) hinzuzufügen.

### Anforderungen an den Kontext

Eine mit WebXR kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte geladen worden sein (z. B. durch die Verwendung einer URL wie `http://localhost/…`), oder die Seite muss unter Verwendung von [HTTPS](/de/docs/Glossary/HTTPS) geladen werden. Der JavaScript-Code muss ebenfalls sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, werden Sie nicht sehr weit kommen. Die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler reibungslos behandeln oder eine Art Fallback bereitstellen.

### Rückgriff auf den WebXR-Polyfill

Eine Rückfalloption ist der [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Prozess der Standardisierung von WebXR verantwortlich ist. Der [Polyfill](/de/docs/Glossary/polyfill) bringt Unterstützung für WebXR in Browser, die keine native Unterstützung für WebXR haben, und glättet die Inkonsistenzen zwischen den Implementierungen in den Browsern, die dies tun, sodass er manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurückgibt, nachdem der Polyfill optional installiert wurde, vorausgesetzt, der Polyfill wurde zuvor mit einem {{HTMLElement("script")}}-Tag eingebunden oder geladen.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf den Polyfill beizubehalten, um sicherzustellen, dass er verfügbar bleibt, bis Sie ihn nicht mehr benötigen. Das Setzen auf `null` signalisiert, dass der Polyfill gesammelt werden kann, wenn keine Objekte mehr darauf angewiesen sind.

Natürlich können Sie das je nach Ihren Bedürfnissen vereinfachen; da Ihre App wahrscheinlich nicht oft zwischen der Nutzung des Polyfills hin- und her wechseln wird, können Sie dies auf genau den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen im Zusammenhang mit WebXR. Der erste unter diesen ist, dass der Gebrauch des Modus `immersive-vr`—der die Sicht des Benutzers vollständig ersetzt—erfordert, dass die Berechtigungsrichtlinie `xr-spatial-tracking` [permission policy](/de/docs/Web/HTTP/Permissions_Policy) umgesetzt ist. Darüber hinaus muss das Dokument sicher und aktuell im Fokus sein. Schließlich müssen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Benutzerevent-Handler heraus aufrufen, wie zum Beispiel aus dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Event.

Weitere Einzelheiten zur Sicherung von WebXR-Aktivitäten und deren Nutzung finden Sie im Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Bestätigung der Verfügbarkeit des benötigten Sitzungstyps

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft klug, zunächst zu überprüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützen, den Sie verwenden möchten. Dies kann auch verwendet werden, um festzustellen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll.

Um herauszufinden, ob ein bestimmter Modus unterstützt wird, rufen Sie die [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf. Diese gibt ein Versprechen zurück, das sich auf `true` auflöst, wenn der gegebene Sitzungstyp zur Verwendung verfügbar ist, andernfalls auf `false`.

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // Create and use an immersive VR session
} else {
  // Create an inline session instead, or tell the user about the
  // incompatibility if inline is required
}
```

## Erstellung und Start der Sitzung

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert. Um an eine `XRSession` zu gelangen, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf, die ein Versprechen zurückgibt, das sich mit einer `XRSession` auflöst, wenn es gelingt, eine zu erstellen. Grundlegend sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Code-Ausschnitt `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten—in diesem Fall eine vollimmersive Virtual-Reality-Erfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollimmersive Virtual-Reality-Sitzung unter Verwendung eines Headsets oder eines ähnlichen Geräts, das die Welt um den Benutzer vollständig durch die von Ihnen präsentierten Bilder ersetzt.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, in der Bilder mit einem Headset oder ähnlichem Gerät der realen Welt hinzugefügt werden. _Diese Option wird noch nicht weitgehend unterstützt, da die AR-Spezifikation im Wandel ist._
- `inline`
  - : Eine On-Screen-Präsentation der XR-Bilder im Kontext des Dokumentfensters.

Wenn die Sitzung aus irgendeinem Grund—wie z.B. einer Richtlinie, die die Nutzung untersagt, oder der Benutzer lehnt es ab, die Erlaubnis zur Nutzung des Headsets zu erteilen—nicht erstellt werden konnte, wird das Versprechen abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder wirft eine Ausnahme, wenn beim Erstellen der Sitzung ein Fehler auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeige-Modus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern entgegennehmen, um die Sitzung anzupassen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welche der Referenzräume zur Darstellung des Koordinatensystems der Welt verwendet werden soll. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den von Ihnen benötigten oder bevorzugten Referenzräumen kompatibel ist.

Wenn Sie beispielsweise einen `unbounded`-Referenzraum benötigen, können Sie diesen als erforderliches Feature angeben, um sicherzustellen, dass die von Ihnen erhaltene Sitzung ungebundene Räume nutzen kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Wenn Sie andererseits eine _inline_-Sitzung benötigen und einen `local`-Referenzraum bevorzugen, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion wird versuchen, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie einen lokalen Raum versuchen und, falls das fehlschlägt, auf einen `viewer`-Referenzraum zurückgreifen, den alle Geräte unterstützen müssen.

### Die neue Sitzung zur Verwendung vorbereiten

Sobald das von der Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Versprechen erfolgreich aufgelöst ist, wissen Sie, dass Sie eine verwendbare WebXR-Sitzung in der Hand haben. Sie können dann fortfahren, die Sitzung zur Verwendung vorzubereiten und mit Ihren Animationen zu beginnen.

Die wichtigsten (oder möglicherweise benötigten) Dinge, die Sie tun müssen, um die Konfiguration Ihrer Sitzung abzuschließen, sind:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie überwachen müssen. Dies umfasst höchstwahrscheinlich mindestens den [`end`](/de/docs/Web/API/XRSession/end_event), damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabesteuerungen verwenden, beobachten Sie das Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event), um die Hinzufügung oder Entfernung von XR-Eingabesteuerungen zu erkennen, und die verschiedenen [Auswahl- und Drückaktionsevents](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Vielleicht möchten Sie das Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) des [`XRSystem`](/de/docs/Web/API/XRSystem) beobachten, damit Sie informiert werden, wenn sich die verfügbaren immersiven Geräte ändern.
- Erhalten Sie einen WebGL-Kontext für das Canvas, in das Sie Ihre Frames rendern möchten, indem Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) auf dem Zielkontext aufrufen.
- Richten Sie Ihre WebGL-Daten und -Modelle ein und bereiten Sie sich darauf vor, die Szene zu rendern.
- Setzen Sie den WebGL-Kontext als Quelle für das XR-System, indem Sie einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der Session's [`renderState`](/de/docs/Web/API/XRRenderState)-Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) setzen.
- Führen Sie Berechnungen für die anfängliche Position und den Maßstab Ihrer Objekte durch, falls erforderlich.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In einfacher Form könnte der Code für diesen letzten Setup-Vorgang etwa so aussehen:

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

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Renderumgebung zu kapseln. Dies umfasst die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die zum Rendern der Szene in WebGL verwendet werden, den Welt-Referenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und ein Referenz auf seinen WebGL-Kontext erhalten, wobei die `xrCompatible`-Option beim Aufrufen von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben wird.

Als nächstes werden alle für den WebGL-Renderer benötigten Daten und Konfigurationen ausgeführt, bevor WebGL so konfiguriert wird, dass es den Framebuffer des WebGL-Kontextes als seinen eigenen Framebuffer verwendet. Dies geschieht mit der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) des [`XRSession`](/de/docs/Web/API/XRSession), um den Renderzustand [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) auf einen neu erstellten [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, der den WebGL-Kontext umschließt.

### Vorbereiten des Szenenrenderings

An diesem Punkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, in dem die Koordinaten der Welt angegeben werden. Wir können den anfänglichen Referenzraum für die Sitzung erhalten, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession` aufrufen. Wir spezifizieren bei Aufrufen von `requestReferenceSpace()` den Namen des Referenzraumtyps, den wir verwenden möchten; in diesem Fall `unbounded`. Sie könnten genauso gut `local` oder `viewer` angeben, je nach Ihren Anforderungen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, lesen Sie [Den Referenzraumtyp auswählen](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raumes. Das ist großartig—wenn der Standpunkt Ihres Spielers genau in der Mitte der Welt beginnt. Wahrscheinlich ist das jedoch überhaupt nicht der Fall. Wenn das so ist, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf dem anfänglichen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem versetzt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) sich an der Position des Betrachters befindet, wobei die Ausrichtung ebenfalls verschoben wird, um in die gewünschte Richtung zu schauen. Der Eingabewert in `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), welcher die Position und Ausrichtung des Spielers in den Standardweltkoordinaten kapselt.

Mit dem neuen Referenzraum in der Hand und in das `worldData`-Objekt für die sichere Aufbewahrung gespeichert, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Rückruf zu planen, der ausgeführt wird, wenn es Zeit ist, den nächsten Frame der Animation für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anforderung bei Bedarf abzubrechen. Wir speichern diesen also ebenfalls in `worldData`.

Am Ende wird das `worldData`-Objekt an den Aufrufer zurückgegeben, um es dem Hauptcode zu ermöglichen, die Daten zu referenzieren, die er später benötigt. An diesem Punkt ist der Einrichtungsprozess abgeschlossen, und wir haben die Renderphase unserer Anwendung erreicht. Um mehr über das Rendern zu lernen, sehen Sie sich den Artikel [Rendern und der WebXR-Frame-Animations-Rückruf](/de/docs/Web/API/WebXR_Device_API/Rendering) an.

### Zu den betrieblichen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen nicht unbedingt ein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie pflegen müssen, auf jede Weise speichern, die Sie möchten. Möglicherweise benötigen Sie andere Informationen oder haben spezifische Anforderungen, die Sie dazu veranlassen, Dinge anders oder in einer anderen Reihenfolge zu tun.

Auch die spezifische Methode, die Sie für das Laden von Modellen und anderen Informationen und das Einrichten Ihrer WebGL-Daten—Texturen, Vertex-Buffer, Shader und dergleichen—verwenden werden, variiert stark, je nach Ihren Anforderungen, welchen Rahmenwerken Sie verwenden, und dergleichen.

## Wichtige Wartungsereignisse der Sitzung

Im Laufe Ihrer WebXR-Sitzung könnte eine Reihe von Ereignissen auftreten, die auf Änderungen am Zustand der Sitzung hinweisen oder Sie darüber informieren, was Sie tun müssen, um die Sitzung ordnungsgemäß fortzuführen.

### Erkennung von Änderungen am Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert—zum Beispiel, wenn die Sitzung ausgeblendet oder angezeigt wird, oder wenn der Benutzer einen anderen Kontext fokussiert—erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` abhängig vom Sichtbarkeitsstatus, während es sich ändert. Anscheinend verwendet der Renderer diesen Wert, um zu berechnen, wie oft neue Frames gerendert werden sollen, während der Animationszyklus fortschreitet, und rendert somit weniger häufig, je mehr die Szene "verschwimmt".

### Erkennung von Resets des Referenzraums

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies geschieht, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn eine Störung oder ein Fehler im Fluss von Tracking-Daten von der XR-Hardware auftritt. Diese Situationen führen dazu, dass der native Ursprung abrupt um den Abstand und den Richtungswinkel springt, der erforderlich ist, um den nativen Ursprung wieder in Einklang mit der Position und der Blickrichtung des Benutzers zu bringen.

Wenn dies geschieht, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die Transformation beschreibt, die erforderlich ist, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird auf den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) und nicht auf die [`XRSession`](/de/docs/Web/API/XRSession) ausgelöst!

Eine weitere häufige Ursache für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie, wie durch die [`XRBoundedReferenceSpace`-Eigenschaft](/de/docs/Web/API/XRBoundedReferenceSpace) [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) angegeben, ändert.

Für häufigere Ursachen von Referenzraum-Resets und mehr Details sowie Beispielcode, siehe die Dokumentation für das [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennung, wenn sich der verfügbare Satz von WebXR-Eingabesteuerungen ändert

WebXR führt eine Liste von Eingabesteuerungen, die spezifisch für das WebXR-System sind. Diese Geräte umfassen beispielsweise die Handcontrollers, bewegungserkennende Kameras, bewegungsempfindliche Handschuhe und andere Rückmeldegeräte. Wenn der Benutzer ein WebXR-Steuergerät anschließt oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, mit der Überwachung von Eingaben zu beginnen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit zu tun haben.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder auf die Entscheidung der Sitzung selbst zurückzuführen sein (z. B. wenn der Benutzer sein XR-Gerät ausschaltet), auf einen vom Benutzer angeklickten Button, der die Sitzung beendet, oder auf eine andere, für Ihre Anwendung geeignete Situation.

Hier besprechen wir sowohl, wie Sie ein Herunterfahren der WebXR-Sitzung anfordern, als auch wie Sie erkennen, wann die Sitzung beendet ist, ob auf Ihre Anfrage hin oder aus anderen Gründen.

### Sitzung herunterfahren

Um die WebXR Sitzung sauber herunterzufahren, wenn Sie damit fertig sind, sollten Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) der Sitzung aufrufen. Dies gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, mit dem Sie wissen können, wann das Herunterfahren abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` an seinen Aufrufer zurückkehrt, ist die WebXR Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten haben, die beim Beenden der Sitzung erledigt werden müssen, wie z. B. das Freigeben von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis-Handler durchführen, anstatt in Ihrem Hauptcode. Auf diese Weise behandeln Sie das Cleanup unabhängig davon, ob das Herunterfahren automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet wurde

Wie bereits festgestellt, können Sie erkennen, wann die WebXR Sitzung beendet ist—sei es, weil Sie ihre [`end()`](/de/docs/Web/API/XRSession/end)-Methode aufgerufen, der Benutzer sein Headset ausgeschaltet oder ein unlösbarer Fehler im XR-System aufgetreten ist—indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, wird eine `freeResources()`-Funktion aufgerufen, um die Ressourcen freizugeben, die zuvor geladen und/oder zugewiesen wurden, um die XR-Präsentation zu bearbeiten. Indem `freeResources()` im `end`-Ereignis-Handler aufgerufen wird, wird dies sowohl aufgerufen, wenn der Benutzer auf einen Button klickt, der einen Herunterfahren, wie durch den Aufruf der oben gezeigten `shutdownXR()`-Funktion, auslöst, als auch wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Raumverfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
