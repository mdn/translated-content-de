---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("WebXR Device API")}}

Angenommen, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, dann ist der nächste mutige Schritt in die Mischrealität — also die Idee, künstliche Szenerie oder Objekte zusätzlich oder anstelle der realen Welt darzustellen — nicht allzu kompliziert. Bevor Sie jedoch Ihre erweiterte oder virtuelle Realitätsszene rendern können, müssen Sie die WebXR-Sitzung erstellen und einrichten und auch wissen, wie Sie sie ordnungsgemäß beenden. In diesem Artikel erfahren Sie, wie das geht.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Gerätesuite, die Ihnen durch die Hardware und Treiber zur Verfügung steht, die auf dem Benutzergerät verfügbar sind. Über die Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) des [`Navigator`](/de/docs/Web/API/Navigator) gibt es ein globales `XRSystem`-Objekt, das für Ihr Dokument verfügbar ist, wenn geeignete XR-Hardware für die Nutzung verfügbar ist, basierend auf der verfügbaren Hardware und der Umgebung Ihres Dokuments.

Der einfachste Code, um das `XRSystem`-Objekt abzurufen, sieht folgendermaßen aus:

```js
const xr = navigator.xr;
```

Der Wert von `xr` wird `null` oder `undefined` sein, wenn WebXR nicht verfügbar ist.

### WebXR-Verfügbarkeit

Als neue und noch in Entwicklung befindliche API ist die Unterstützung von WebXR auf bestimmte Geräte und Browser beschränkt; und selbst bei diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es kann jedoch Optionen geben, die es Ihnen ermöglichen, mit WebXR zu experimentieren, selbst wenn Sie kein kompatibles System haben.

#### WebXR Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat ein [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, das Sie verwenden können, um WebXR in Browsern zu simulieren, die die WebXR-APIs nicht unterstützen. Wenn der Browser die ältere [WebVR API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls fällt der Polyfill auf eine Implementierung zurück, die die Google Cardboard VR API verwendet.

Der Polyfill wird zusammen mit der Spezifikation gepflegt und wird regelmäßig mit der Spezifikation aktualisiert. Zusätzlich wird er aktualisiert, um die Kompatibilität mit Browsern aufrechtzuerhalten, wenn sich deren Unterstützung für WebXR und andere damit zusammenhängende Technologien sowie die Implementierung des Polyfills im Laufe der Zeit ändert.

Lesen Sie die Readme-Datei sorgfältig durch; der Polyfill kommt in mehreren Versionen, je nachdem, welchen Grad an Kompatibilität mit neueren JavaScript-Funktionen Ihre Zielbrowser haben.

##### Emulatornutzung

Obwohl dies im Vergleich zur Verwendung eines tatsächlichen Headsets etwas umständlich ist, ermöglicht es das Experimentieren mit und die Entwicklung von WebXR-Code auf einem Desktop-Computer, auf dem WebXR normalerweise nicht verfügbar ist. Es ermöglicht auch einige grundlegende Tests, bevor Ihr Code auf ein echtes Gerät gebracht wird. Beachten Sie jedoch, dass der Emulator noch nicht alle WebXR-APIs vollständig emuliert, sodass Sie auf unerwartete Probleme stoßen könnten. Auch hier: Lesen Sie die Readme-Datei sorgfältig und machen Sie sich mit den Einschränkungen vertraut, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder versenden! Emulierte, simulierte oder durch Polyfills ergänzte Umgebungen sind _kein_ angemessener Ersatz für tatsächliche Tests auf physischer Hardware.

##### Die Erweiterung erhalten

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser unten herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode für die Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Emulatorprobleme und Hinweise

Obwohl dies nicht der richtige Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die es zu erwähnen gilt.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte Unterstützung für Augmented Reality (AR) über das [WebXR AR Module](https://immersive-web.github.io/webxr-ar-module/) ein, das sich einem stabilen Zustand nähert. Dokumentation zu AR wird in Kürze hier auf MDN veröffentlicht.

Weitere Verbesserungen beinhalten die Aktualisierung des Emulators zur Umbenennung der `XR`-Schnittstelle in [`XRSystem`](/de/docs/Web/API/XRSystem), die Einführung der Unterstützung für Quetsch- (Grip-) Eingabequellen und die Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles).

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte geladen sein (zum Beispiel durch die Verwendung einer URL wie `http://localhost/…`) oder unter Verwendung von {{Glossary("HTTPS", "HTTPS")}} beim Laden der Seite. Der JavaScript-Code muss ebenso sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht weit. Die Eigenschaft [`navigator.xr`](/de/docs/Web/API/Navigator/xr) existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler elegant behandeln oder eine Art Rückfalloption bereitstellen.

### Rückgriff auf den WebXR Polyfill

Eine Rückfalloption ist das [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/), das von der für die Standardisierung von WebXR verantwortlichen [Immersive Web Working Group](https://www.w3.org/immersive-web/) bereitgestellt wird. Der {{Glossary("polyfill", "Polyfill")}} bringt Unterstützung für WebXR in Browser, die keine native WebXR-Unterstützung haben, und gleicht die Inkonsistenzen zwischen Implementierungen in den Browsern aus, die dies tun, sodass es manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt nach optionaler Installation des Polyfills zurückgibt, vorausgesetzt, dass das Polyfill mit einem vorherigen {{HTMLElement("script")}}-Tag eingeschlossen oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Wenn es auf `null` gesetzt wird, signalisiert dies, dass das Polyfill garbage collected werden kann, wenn keine darauf abhängigen Objekte es mehr verwenden.

Natürlich können Sie dies je nach Ihren Bedürfnissen vereinfachen; Da Ihre App wahrscheinlich nicht oft hin und her springen wird, ob Sie das Polyfill verwenden oder nicht, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen im Zusammenhang mit WebXR. Die erste ist, dass die Verwendung des Modus `immersive-vr` — der die Sicht auf die Welt des Benutzers vollständig ersetzt — erfordert, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und aktuell fokussiert sein. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Benutzer-Ereignishandler heraus aufrufen, z. B. dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis.

Weitere Einzelheiten zur Sicherung von WebXR-Aktivitäten und -Nutzung finden Sie im Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Überprüfen der Verfügbarkeit des benötigten Sitzungstyps

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft ratsam, zuerst zu prüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützt, den Sie verwenden möchten. Dies kann auch genutzt werden, um zu bestimmen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll, zum Beispiel.

Um herauszufinden, ob ein gegebener Modus unterstützt wird, rufen Sie die [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf. Diese gibt ein Promise zurück, das zu `true` aufgelöst wird, wenn die angegebene Sitzungsart zur Verwendung verfügbar ist, oder zu `false` andernfalls.

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

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellt. Um eine `XRSession` zu erhalten, rufen Sie die [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Methode Ihres [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekts auf, die ein Promise zurückgibt, das mit einer `XRSession` aufgelöst wird, falls es erfolgreich eine erstellen kann. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Code-Snippet an `requestSession()` übergeben wird: `immersive-vr`. Dieser String spezifiziert die Art der WebXR-Sitzung, die Sie einrichten möchten — in diesem Fall eine vollständig immersive virtuelle Realitätserfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive virtuelle Realitätssitzung, die ein Headset oder ein ähnliches Gerät verwendet, das die Welt um den Benutzer vollständig mit den von Ihnen präsentierten Bildern ersetzt.
- `immersive-ar`
  - : Eine Augmented Reality-Sitzung, in der Bilder zur realen Welt hinzugefügt werden, mithilfe eines Headsets oder eines ähnlichen Apparates. _Diese Option wird noch nicht weit verbreitet unterstützt, da die AR-Spezifikation im Fluss ist._
- `inline`
  - : Eine On-Screen-Präsentation der XR-Bilder innerhalb des Dokumentfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte — wie z.B. durch ein Feature-Policy, das ihre Nutzung verbietet, oder der Benutzer die Erlaubnis zur Nutzung des Headsets verweigert — wird das Promise abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder löst eine Ausnahme aus, wenn ein Fehler bei der Erstellung der Sitzung auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern annehmen, um die Sitzung anzupassen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welcher der Referenzräume verwendet werden soll, um das Koordinatensystem der Welt darzustellen. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den Referenzräumen kompatibel ist, die Sie benötigen oder bevorzugen.

Zum Beispiel, wenn Sie einen `unbounded` Referenzraum benötigen, können Sie dies als ein erforderliches Feature angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, unbeschränkte Räume verwenden kann:

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

Diese `createInlineSession()` Funktion wird versuchen, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie einen lokalen Raum versuchen, und wenn das fehlschlägt, auf einen `viewer`-Referenzraum zurückgreifen, den alle Geräte unterstützen müssen.

### Vorbereitung der neuen Sitzung für die Nutzung

Sobald das Promise, das von der Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wird, erfolgreich aufgelöst wird, wissen Sie, dass Sie eine nutzbare WebXR-Sitzung in der Hand haben. Sie können dann fortfahren, die Sitzung zur Nutzung vorzubereiten und Ihre Animationen zu starten.

Die wichtigsten Dinge, die Sie tun müssen (oder tun müssen), um die Konfiguration Ihrer Sitzung abzuschließen, beinhalten:

- Hinzufügen von Handlern für die Ereignisse, die Sie überwachen müssen. Dies beinhaltet höchstwahrscheinlich das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis, mindestens, damit Sie erkennen können, wenn die Sitzung beendet ist.
- Wenn Sie XR-Eingabegeräte verwenden, überwachen Sie das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, um die Hinzufügung oder Entfernung von XR-Eingabegeräten zu erkennen und die verschiedenen [Auswahl- und Quetschaktionsereignisse](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Es könnte nützlich sein, das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) zu überwachen, damit Sie benachrichtigt werden können, wenn sich die Verfügbarkeit von immersiven Geräten ändert.
- Erhalten Sie einen WebGL-Kontext für das Canvas, in das Sie Ihre Frames rendern möchten, indem Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) des Zielkontexts aufrufen.
- Richten Sie Ihre WebGL-Daten und -Modelle ein und bereiten Sie sich darauf vor, die Szene zu rendern.
- Setzen Sie den WebGL-Kontext als Quelle für das XR-System, indem Sie einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der [`renderState`](/de/docs/Web/API/XRRenderState)-Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) der Sitzung setzen.
- Führen Sie Berechnungen für die anfängliche Position und Skalierung Ihrer Objekte durch, wenn nötig.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In einfacher Form könnte der Code für dieses letzte Setup so aussehen:

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

Zu Zwecken dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Rendering-Umgebung zu kapseln. Dazu gehören die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die benötigt werden, um die Szene in WebGL zu rendern, der Weltreferenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Render-Canvas abgerufen und eine Referenz auf seinen WebGL-Kontext abgerufen, wobei die `xrCompatible`-Option beim Aufrufen von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben wird.

Als nächstes werden alle Daten und Einstellungen vorgenommen, die für den WebGL-Renderer benötigt werden, bevor dann WebGL so konfiguriert wird, dass es den Framebuffer des WebGL-Kontexts als eigenen Framebuffer verwendet. Dies wird mithilfe der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) durchgeführt, um den Renderstatus [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des Sitzung auf einen neu erstellten [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, der den WebGL-Kontext einkapselt.

### Vorbereitung, um die Szene zu rendern

Zu diesem Zeitpunkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, innerhalb dessen die Koordinaten für die Welt angegeben werden. Wir können den anfänglichen Referenzraum für die Sitzung erhalten, indem wir die `XRSession`-Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen. Wir spezifizieren beim Aufruf von `requestReferenceSpace()` den Namen des Referenzraumtyps, den wir möchten; in diesem Fall `unbounded`. Sie könnten genauso gut `local` oder `viewer` angeben, abhängig von Ihren Bedürfnissen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, siehe [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raums. Das ist großartig, wenn Ihr Spieleransichtspunkt genau im Zentrum der Welt beginnt. Aber höchstwahrscheinlich ist das überhaupt nicht der Fall. In diesem Fall rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf den anfänglichen Referenzraum zurück, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem versetzt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) sich am Standort des Betrachters befindet, wobei die Ausrichtung ebenfalls so verschoben ist, dass sie in die gewünschte Richtung zeigt. Der Eingabewert an `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Ausrichtung des Spielers, wie im Standard-Weltkoordinatensystem spezifiziert, einkapselt.

Mit dem neuen Referenzraum in der Hand und in dem `worldData`-Objekt zur sicheren Aufbewahrung gespeichert, rufen wir die Sitzungsmethode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) auf, um einen Callback einzuplanen, der ausgeführt wird, wenn es Zeit ist, das nächste Animationsbild für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anfrage bei Bedarf zu stornieren, sodass wir diese auch in `worldData` speichern.

Am Ende wird das `worldData`-Objekt an den Aufrufer zurückgegeben, um es dem Hauptcode zu ermöglichen, die Daten zu referenzieren, die er später benötigt. An diesem Punkt ist der Einrichtungsprozess abgeschlossen und wir haben die Rendering-Phase unserer Anwendung betreten. Um mehr über das Rendering zu erfahren, siehe den Artikel [Rendern und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Über betriebliche Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie zur Aufrechterhaltung benötigen, auf jede gewünschte Weise speichern. Sie benötigen möglicherweise unterschiedliche Informationen oder haben unterschiedliche spezifische Anforderungen, die Sie dazu veranlassen, Dinge anders oder in einer anderen Reihenfolge zu tun.

Ebenso wird die spezifische Methodik, die Sie zum Laden von Modellen und anderen Informationen und zum Einrichten Ihrer WebGL-Daten — Texturen, Vertex-Buffer, Shader und so weiter — verwenden, stark variieren, abhängig von Ihren Bedürfnissen, ob und welche Frameworks Sie verwenden und dergleichen.

## Wichtige Ereignisse zur Sitzungswartung

Im Verlauf Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die Änderungen am Zustand der Sitzung anzeigen oder Ihnen mitteilen, was Sie tun müssen, um die Sitzung ordnungsgemäß am Laufen zu halten.

### Erkennen von Änderungen am Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert — wie z.B., wenn die Sitzung versteckt oder angezeigt wird, oder wenn der Benutzer einen anderen Kontext fokussiert hat — erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate`, abhängig vom Sichtbarkeitsstatus, sobald er sich ändert. Vermutlich verwendet der Renderer diesen Wert, um zu berechnen, wie oft neue Frames gerendert werden sollen, während die Animationsschleife fortschreitet, und rendert somit umso seltener, je „verschwommener“ die Szene wird.

### Erkennen von Referenzraum-Resets

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies passiert, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn ein Hiccup oder Glitch im Fluss der vom XR-Hardware erhaltenen Tracking-Daten auftritt. Diese Situationen führen dazu, dass der native Ursprung abrupt um den für das Zurückbringen in Übereinstimmung mit der Benutzerposition und -blickrichtung erforderlichen Abstand und Winkel springt.

Wenn dies passiert, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die zur Neujustierung des nativen Ursprungs erforderliche Transformation beschreibt.

> [!NOTE]
> Das `reset`-Ereignis wird an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) gesendet, nicht an die [`XRSession`](/de/docs/Web/API/XRSession)!

Ein weiterer häufiger Grund für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie, wie sie durch die Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) des [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) spezifiziert ist, ändert.

Weitere häufige Ursachen für Referenzraum-Resets und weitere Details sowie Beispielcode finden Sie in der Dokumentation zum [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen von Änderungen an den verfügbaren WebXR-Eingabesteuerungen

WebXR pflegt eine Liste von Eingabesteuerungen, die spezifisch für das WebXR-System ist. Diese Geräte umfassen Dinge wie die tragbaren Controller, bewegungsempfindliche Kameras, bewegungsempfindliche Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controllergerät verbindet oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer auf die Verfügbarkeit des Geräts hinzuweisen, es für Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers endet, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder darauf zurückzuführen sein, dass die Sitzung selbst entscheidet, dass es Zeit ist, herunterzufahren (z.B. wenn der Benutzer sein XR-Gerät ausschaltet), weil der Benutzer eine Taste gedrückt hat, um die Sitzung zu beenden, oder eine andere Situation, die für Ihre Anwendung geeignet ist.

Hier besprechen wir sowohl, wie man das Herunterfahren der WebXR-Sitzung anfordert, als auch wie man erkennt, wann eine Sitzung beendet ist, sei es durch Ihre Anforderung oder auf andere Weise.

### Sitzungsbeendigung

Um die WebXR-Sitzung ordnungsgemäß herunterzufahren, wenn Sie damit fertig sind, sollten Sie die [`end()`](/de/docs/Web/API/XRSession/end)-Methode der Sitzung aufrufen. Dies gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, mit dem Sie wissen, wann das Herunterfahren abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` an den Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten haben, die bei Beendigung der Sitzung erledigt werden müssen, wie z.B. das Freigeben von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler erledigen, statt im Hauptcode. Auf diese Weise führen Sie die Bereinigung durch, unabhängig davon, ob das Herunterfahren automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet ist

Wie bereits festgestellt wurde, können Sie erkennen, wann die WebXR-Sitzung beendet wurde — sei es, weil Sie ihre [`end()`](/de/docs/Web/API/XRSession/end)-Methode aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein nicht behebbarer Fehler im XR-System aufgetreten ist — indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das zur [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, wird eine `freeResources()`-Funktion aufgerufen, um die zuvor für die Handhabung der XR-Präsentation zugewiesenen und/oder geladenen Ressourcen freizugeben. Durch das Aufrufen von `freeResources()` im `end`-Ereignishandler rufen wir dies sowohl dann auf, wenn der Benutzer eine Schaltfläche drückt, die ein Herunterfahren auslöst, wie beim Aufrufen der oben gezeigten `shutdownXR()`-Funktion, _als auch_ wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Blickpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
