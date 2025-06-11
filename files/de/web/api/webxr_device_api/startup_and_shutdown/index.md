---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Angenommen, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, so ist der nächste mutige Schritt in die gemischte Realität - die Idee, künstliche Landschaften oder Objekte zusätzlich zur realen Welt oder anstelle dieser darzustellen - nicht übermäßig kompliziert. Bevor Sie beginnen können, Ihr erweitertes oder virtuelles Realitätsszenario darzustellen, müssen Sie die WebXR-Sitzung erstellen und einrichten und sollten auch wissen, wie man diese ordnungsgemäß beendet. In diesem Artikel erfahren Sie, wie Sie dies tun können.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer Anwendung auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Gerätesuite, die Ihnen durch die Hardware und Treiber, die auf der Benutzeranlage verfügbar sind, zur Verfügung steht. Ein globales `XRSystem`-Objekt steht Ihrem Dokument über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) zur Verfügung, die das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware unter den gegebenen Hardwarebedingungen und der Umgebung Ihres Dokuments verfügbar ist.

Der einfachste Code, der das `XRSystem`-Objekt abruft, ist also:

```js
const xr = navigator.xr;
```

Der Wert von `xr` ist `null` oder `undefined`, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Als eine neue und noch in Entwicklung befindliche API ist die Unterstützung für WebXR auf bestimmte Geräte und Browser begrenzt; selbst auf diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es können jedoch Optionen zur Verfügung stehen, die es Ihnen ermöglichen, mit WebXR zu experimentieren, selbst wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwickelt, hat einen [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, den Sie verwenden können, um WebXR in Browsern zu simulieren, die keine Unterstützung für die WebXR-APIs haben. Wenn der Browser die ältere [WebVR API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls greift der Polyfill auf eine Implementierung zurück, die Googles Cardboard VR API verwendet.

Der Polyfill wird zusammen mit der Spezifikation gepflegt und wird regelmäßig entsprechend der Spezifikation aktualisiert. Zudem wird er aktualisiert, um die Kompatibilität mit Browsern aufrechtzuerhalten, da sich diese mit der Unterstützung für WebXR und andere verwandte Technologien sowie mit der Implementierung des Polyfills im Laufe der Zeit ändern.

Lesen Sie unbedingt die README-Datei sorgfältig; der Polyfill kommt in mehreren Versionen, abhängig davon, in welchem Maß seine Kompatibilität mit neuen JavaScript-Funktionen in Ihren Zielbrowsern enthalten ist.

##### Verwendung des Emulators

Auch wenn es im Vergleich zur Verwendung eines tatsächlichen Headsets etwas umständlich ist, ermöglicht dies das Experimentieren mit und Entwickeln von WebXR-Code auf einem Desktop-Computer, auf dem WebXR normalerweise nicht verfügbar ist. Es ermöglicht Ihnen auch, einige grundlegende Tests durchzuführen, bevor Sie Ihren Code auf ein echtes Gerät bringen. Beachten Sie jedoch, dass der Emulator noch nicht alle Aspekte der WebXR-API vollständig emuliert, sodass Sie auf unerwartete Probleme stoßen könnten. Lesen Sie erneut die README-Datei sorgfältig durch und machen Sie sich mit den Einschränkungen vertraut, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder polygefüllte Umgebungen sind _kein_ adäquater Ersatz für echte Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser unten herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/de/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist auch auf GitHub verfügbar.

##### Probleme und Hinweise zum Emulator

Auch wenn dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte Unterstützung für erweiterte Realität (AR) durch das [WebXR AR Module](https://immersive-web.github.io/webxr-ar-module/) ein, das sich einem stabilen Zustand nähert. Dokumentation für AR wird in Kürze hier auf MDN bereitgestellt.

Weitere Verbesserungen umfassen die Aktualisierung des Emulators zur Umbenennung des `XR`-Interfaces in [`XRSystem`](/de/docs/Web/API/XRSystem), die Einführung der Unterstützung für Eingabequellen für das Drücken (Grip) und die Unterstützung der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles).

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte geladen worden sein (z. B. durch Verwendung einer URL wie `http://localhost/…`) oder unter Verwendung von {{Glossary("HTTPS", "HTTPS")}} beim Laden der Seite. Auch der JavaScript-Code muss sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht sehr weit. Die Eigenschaft [`navigator.xr`](/de/docs/Web/API/Navigator/xr) existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. So oder so, Sie müssen auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler elegant handhaben oder eine Art Rückfalloption bereitstellen.

### Rückgriff auf das WebXR-Polyfill

Eine Fallback-Option ist das [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Standardisierungsprozess von WebXR zuständig ist. Das {{Glossary("polyfill", "Polyfill")}} bringt Unterstützung für WebXR zu Browsern, die keine native WebXR-Unterstützung haben, und beseitigt die Inkonsistenzen unter den Implementierungen in den Browsern, die es haben, sodass es manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurückgibt, nachdem das Polyfill optional installiert wurde, unter der Annahme, dass das Polyfill mittels eines {{HTMLElement("script")}}-Tags zuvor aufgenommen oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der bereitgestellten Dokumentation hier auf MDN verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Setzen Sie es auf `null`, um zu signalisieren, dass das Polyfill vom Garbage Collector gesammelt werden kann, wenn keine Objekte mehr darauf angewiesen sind.

Natürlich können Sie dies je nach Ihren Anforderungen vereinfachen; da Ihre App wahrscheinlich nicht oft hin und her wechselt, ob Sie das Polyfill verwenden oder nicht, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen im Zusammenhang mit WebXR. Die erste davon ist, dass die Verwendung des `immersive-vr`-Modus, der die Sicht des Benutzers auf die Welt vollständig ersetzt, erfordert, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und aktuell fokussiert sein. Schließlich müssen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Benutzerereignis-Handler aufrufen, wie z.B. dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis.

Für weitere Details zur Absicherung von WebXR-Aktivitäten und -Nutzung lesen Sie den Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Überprüfen, ob der benötigte Sitzungstyp verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es ratsam, zunächst zu überprüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützt, den Sie verwenden möchten. Dies kann auch verwendet werden, um festzustellen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll.

Um herauszufinden, ob ein gegebener Modus unterstützt wird, rufen Sie die Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) von [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Diese gibt ein Versprechen zurück, das sich zu `true` auflöst, wenn die angegebene Sitzungsart verfügbar ist, oder zu `false`, wenn nicht.

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

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellt. Um ein `XRSession` zu erhalten, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekts auf, die ein Versprechen zurückgibt, das sich zu einem `XRSession` auflöst, falls die Erstellung erfolgreich war. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Codeausschnitt an `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten - in diesem Fall ein vollständig immersives Virtual-Reality-Erlebnis. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive Virtual-Reality-Sitzung mit einem Headset oder einem ähnlichen Gerät, das die Welt um den Benutzer herum vollständig durch die von Ihnen präsentierten Bilder ersetzt.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, bei der Bilder mit einem Headset oder ähnlichem Apparat zur realen Welt hinzugefügt werden. _Diese Option wird noch nicht weitläufig unterstützt, da die AR-Spezifikation im Wandel ist._
- `inline`
  - : Eine Bildschirmpräsentation der XR-Bilder innerhalb des Kontextes des Dokumentenfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte - zum Beispiel, weil die Feature-Policy ihre Verwendung nicht zulässt oder der Benutzer die Erlaubnis zur Verwendung des Headsets verweigert hat - wird das Versprechen abgelehnt. Eine vollständige Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder wirft eine Ausnahme, falls ein Fehler bei der Sitzungsbereitstellung auftritt.

### Anpassen der Sitzung

Zusätzlich zum Darstellungsmodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern zum Anpassen der Sitzung annehmen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welche der Referenzräume verwendet werden sollen, um das Weltkoordinatensystem darzustellen. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den Referenzräumen kompatibel ist, die Sie benötigen oder bevorzugen.

Zum Beispiel, wenn Sie einen `unbounded` (grenzenlosen) Referenzraum benötigen, können Sie diesen als notwendiges Feature angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, grenzenlose Räume nutzen kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Auf der anderen Seite, wenn Sie eine _inline_ Sitzung benötigen und einen `local` (lokalen) Referenzraum bevorzugen würden, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion wird versuchen, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie einen lokalen Raum versuchen, und falls das fehlschlägt, auf einen `viewer`-Referenzraum zurückfallen, den alle Geräte unterstützen müssen.

### Die neue Sitzung für die Verwendung vorbereiten

Sobald das an die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Versprechen erfolgreich gelöst wurde, wissen Sie, dass Sie eine verwendbare WebXR-Sitzung zur Hand haben. Sie können dann fortfahren, die Sitzung vorzubereiten und Ihre Animationen zu starten.

Die wichtigsten Dinge, die Sie tun müssen (oder tun könnten), um die Konfiguration Ihrer Sitzung abzuschließen, umfassen:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie beobachten müssen. Dies umfasst höchstwahrscheinlich das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis als Minimum, sodass Sie erkennen können, wann die Sitzung beendet ist.
- Falls Sie XR-Eingabesteuerungen verwenden, beobachten Sie das Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event), um das Hinzufügen oder Entfernen von XR-Eingabesteuerungen zu erkennen, sowie die verschiedenen [Select- und Squeeze-Aktionsevents](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Sie möchten möglicherweise das Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) von [`XRSystem`](/de/docs/Web/API/XRSystem) überwachen, um benachrichtigt zu werden, wenn sich die Menge verfügbarer immersiver Geräte ändert.
- Erhalten Sie einen WebGL-Kontext für das Canvas, in den Sie Ihre Frames rendern möchten, indem Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) aufrufen.
- Richten Sie Ihre WebGL-Daten und -Modelle ein und bereiten Sie sich darauf vor, die Szene zu rendern.
- Setzen Sie den WebGL-Kontext als Quelle für das XR-System, indem Sie einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des Sitzungs-`renderState` setzen.
- Berechnen Sie gegebenenfalls die Anfangsposition und -skalierung Ihrer Objekte.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In einfacher Form könnte der Code für diese abschließende Einrichtung etwa so aussehen:

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

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Renderumgebung zu kapseln. Dies umfasst die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die zur Darstellung der Szene in WebGL verwendet werden, den Weltreferenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zunächst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und eine Referenz auf dessen WebGL-Kontext bezogen, wobei die Option `xrCompatible` beim Aufruf von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) spezifiziert wird.

Anschließend werden alle notwendigen Daten und Vorbereitungen für den WebGL-Renderer getroffen, bevor WebGL schließlich so konfiguriert wird, dass es den Framebuffer des WebGL-Kontexts als eigenen Framebuffer verwendet. Dies erfolgt durch Verwendung der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) von [`XRSession`](/de/docs/Web/API/XRSession), um den `baseLayer` des Renderzustands auf einen neu-erstellten [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) einzustellen, der den WebGL-Kontext kapselt.

### Vorbereitung zum Rendern der Szene

An diesem Punkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, innerhalb dessen Koordinaten für die Welt angegeben werden. Wir können den Anfangsreferenzraum für die Sitzung erhalten, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) von `XRSession` aufrufen. Wir geben beim Aufruf von `requestReferenceSpace()` den Namen des gewünschten Referenzraumtyps an; in diesem Fall `unbounded`. Man könnte ebenso einfach `local` oder `viewer` angeben, je nach Bedarf.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, sehen Sie sich [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type) an.

Der von `requestReferenceSpace()` zurückgegebene Referenzraum legt den Ursprung (0, 0, 0) in der Mitte des Raumes fest. Das ist großartig - wenn die Übersicht Ihrer Spieler tatsächlich genau im Mittelpunkt der Welt beginnt. Aber höchstwahrscheinlich ist das nicht der Fall. Wenn das so ist, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf den anfänglichen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) an der Position des Betrachters liegt und die Orientierung entsprechend der gewünschten Richtung angepasst wird. Der Eingabewert in `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Orientierung des Spielers in den Standardweltkoordinaten einkapselt.

Mit dem neuen Referenzraum in der Hand und sicher in das `worldData`-Objekt gespeichert, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Callback zu planen, der ausgeführt wird, wenn es an der Zeit ist, den nächsten Animationsframe für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anforderung bei Bedarf zu stornieren, sodass wir diese ebenfalls in `worldData` speichern.

Zum Schluss wird das `worldData`-Objekt an den Aufrufer zurückgegeben, damit der Hauptcode später auf die erforderlichen Daten zugreifen kann. An diesem Punkt ist der Einrichtungsprozess abgeschlossen und wir befinden uns in der Rendering-Phase unserer Anwendung. Weitere Informationen zum Rendern finden Sie im Artikel [Rendering und der WebXR-Frame-Animation-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Zu den operativen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie aufrechterhalten müssen, auf jede beliebige Weise speichern, die Sie möchten. Möglicherweise benötigen Sie unterschiedliche Informationen oder haben spezifische Anforderungen, die dazu führen, dass Sie Dinge anders machen oder in einer anderen Reihenfolge.

Ebenso wird die spezifische Methode, die Sie für das Laden von Modellen und anderen Informationen sowie das Einrichten Ihrer WebGL-Daten verwenden - Texturen, Vertex-Buffer, Shader usw. - stark variieren, je nach Ihren Bedürfnissen, den Rahmenbedingungen, die Sie verwenden, und dergleichen.

## Wichtige Sitzungswartungsereignisse

Im Verlauf Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die Änderungen des Sitzungszustands anzeigen oder Ihnen mitteilen, was Sie tun müssen, um die Sitzung ordnungsgemäß zu warten.

### Erkennen von Änderungen am Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert - beispielsweise wenn die Sitzung ausgeblendet oder angezeigt wird oder wenn der Benutzer einen anderen Kontext fokussiert hat - erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` basierend auf dem sich ändernden Sichtbarkeitsstatus. Vermutlich verwendet der Renderer diesen Wert, um zu berechnen, wie oft neue Frames gerendert werden sollen, während die Animationsschleife fortschreitet, wodurch weniger häufig gerendert wird, je "unscharfer" die Szene wird.

### Erkennen von Resets des Referenzraums

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies geschieht, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn ein Schluckauf oder eine Störung im Fluss der vom XR-Gerät erhaltenen Tracking-Daten auftritt. Diese Situationen verursachen, dass der native Ursprung abrupt um den Abstand und den Richtungswinkel springt, die erforderlich sind, um den nativen Ursprung wieder in Einklang mit der Position und Blickrichtung des Benutzers zu bringen.

Wenn dies geschieht, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Transformation beschreibt, die erforderlich ist, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) gesendet, nicht an die [`XRSession`](/de/docs/Web/API/XRSession)!

Eine weitere häufige Ursache für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie entsprechend der [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry)-Eigenschaft des [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ändert.

Weitere häufige Ursachen für Resets des Referenzraums sowie Details und Beispielcode finden Sie in der Dokumentation zum [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen von Änderungen der verfügbaren WebXR-Eingabesteuerungen

WebXR führt eine Liste von Eingabesteuerungen, die für das WebXR-System spezifisch sind. Zu diesen Geräten gehören zum Beispiel Handheld-Controller, bewegungssensitive Kameras, bewegungsempfindliche Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controller-Gerät anschließt oder entfernt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, es auf Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Der Abschluss einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder durch die Sitzung selbst erfolgen, die entscheidet, dass es Zeit ist, herunterzufahren (zum Beispiel wenn der Benutzer sein XR-Gerät ausschaltet), weil der Benutzer auf eine Schaltfläche geklickt hat, um die Sitzung zu beenden, oder eine andere Situation, die für Ihre Anwendung angemessen ist.

Hier besprechen wir sowohl, wie man eine Beendigung der WebXR-Sitzung anfordert, als auch, wie man erkennt, wann die Sitzung beendet wurde, sei es auf Ihre Anfrage oder anderweitig.

### Sitzung beenden

Um die WebXR-Sitzung sauber herunterzufahren, wenn Sie damit fertig sind, sollten Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) der Sitzung aufrufen. Dies gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, mit dem Sie wissen können, wann der Shutdown abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` zu seinem Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Falls Sie Arbeiten haben, die beim Ende der Sitzung durchgeführt werden müssen, wie das Freigeben von Ressourcen und ähnliches, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler anstelle Ihres Hauptkodekörpers durchführen. So wird die Bereinigung gehandhabt, unabhängig davon, ob der Shutdown automatisch oder manuell eingeleitet wird.

### Erkennen, wann die Sitzung beendet wurde

Wie bereits festgestellt, können Sie erkennen, wann die WebXR-Sitzung beendet wurde - sei es, weil Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein unlösbarer Fehler im XR-System aufgetreten ist -, indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

In diesem Fall wird, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, eine `freeResources()`-Funktion aufgerufen, um die zuvor zugeteilten und/oder geladenen Ressourcen zur Handhabung der XR-Präsentation freizugeben. Durch den Aufruf von `freeResources()` im `end`-Ereignishandler wird diese sowohl aufgerufen, wenn der Benutzer auf eine Schaltfläche klickt, die einen Shutdown wie durch das oben gezeigte `shutdownXR()`-Funktion auslöst, _als auch_, wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder eines anderen Grundes.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwenden von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
