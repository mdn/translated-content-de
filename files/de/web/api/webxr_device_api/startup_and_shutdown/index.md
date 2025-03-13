---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Vorausgesetzt, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, ist der nächste Schritt in die gemischte Realität – die Idee, künstliche Szenerien oder Objekte zusätzlich zur echten Welt oder an deren Stelle zu präsentieren – nicht allzu kompliziert. Bevor Sie Ihr augmentiertes oder virtuelles Realitätsszenario rendern können, müssen Sie die WebXR-Sitzung erstellen und einrichten und wissen, wie Sie sie ordnungsgemäß beenden. In diesem Artikel erfahren Sie, wie Sie diese Dinge tun.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Gerätesuite, die Ihnen über die Hardware und Treiber auf der Benutzergeräteausstattung zur Verfügung steht. Ein globales `XRSystem`-Objekt kann über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) von Ihrem Dokument genutzt werden, die das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware für Ihre Nutzung verfügbar ist, basierend auf der verfügbaren Hardware und der Umgebung Ihres Dokuments.

Der einfachste Code, um das `XRSystem`-Objekt abzurufen, sieht folgendermaßen aus:

```js
const xr = navigator.xr;
```

Der Wert von `xr` wird `null` oder `undefined` sein, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Als neue und sich noch in der Entwicklung befindende API ist die Unterstützung für WebXR auf spezifische Geräte und Browser beschränkt; und selbst dann ist sie möglicherweise nicht standardmäßig aktiviert. Es gibt jedoch möglicherweise Optionen, die es Ihnen ermöglichen, mit WebXR zu experimentieren, auch wenn Sie kein kompatibles System haben.

#### WebXR Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat ein [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, das Sie verwenden können, um WebXR auf Browsern zu simulieren, die keine Unterstützung für die WebXR-APIs haben. Falls der Browser die ältere [WebVR-API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls fällt das Polyfill auf eine Implementierung zurück, die Googles Cardboard VR-API verwendet.

Das Polyfill wird parallel zur Spezifikation gepflegt und wird mit der Spezifikation auf dem neuesten Stand gehalten. Zusätzlich wird es aktualisiert, um die Kompatibilität mit Browsern aufrechtzuerhalten, sobald sich ihre Unterstützung für WebXR und andere damit zusammenhängende Technologien oder die Implementierung des Polyfills ändern.

Lesen Sie unbedingt die README-Datei sorgfältig durch; das Polyfill wird in mehreren Versionen geliefert, abhängig davon, in welchem Maße Ihre Zielbrowser mit den neueren JavaScript-Features kompatibel sind.

##### Verwendung des Emulators

Obwohl es etwas umständlich im Vergleich zur Verwendung eines echten Headsets ist, macht dies möglich, WebXR-Code auf einem Desktop-Computer zu experimentieren und zu entwickeln, wo WebXR normalerweise nicht verfügbar ist. Es ermöglicht Ihnen auch, einige grundlegende Tests durchzuführen, bevor Sie Ihren Code auf ein echtes Gerät bringen. Beachten Sie jedoch, dass der Emulator noch nicht alle Funktionen der WebXR-API vollständig nachahmt. Daher könnten Sie auf unerwartete Probleme stoßen. Lesen Sie erneut die README-Datei gründlich durch und stellen Sie sicher, dass Sie sich der Einschränkungen bewusst sind, bevor Sie loslegen.

**Wichtig:** Sie sollten _immer_ Ihren Code auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder polyfillte Umgebungen sind _kein_ angemessener Ersatz für tatsächliche Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR-API-Emulator für Ihren unterstützten Browser unten herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Emulator-Probleme und Hinweise

Obwohl dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die erwähnenswert sind.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte die Unterstützung für Augmented Reality (AR) durch das [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/) ein, das sich einem stabilen Zustand nähert. Dokumentation für AR wird hier auf MDN in Kürze verfügbar sein.

Weitere Verbesserungen umfassen die Aktualisierung des Emulators, um die `XR`-Schnittstelle in [`XRSystem`](/de/docs/Web/API/XRSystem) umzubenennen, die Unterstützung für Quetscheingabequellen zu unterstützen und die Unterstützung für die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles) hinzuzufügen.

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder von der lokalen Festplatte geladen worden sein (z. B. durch die Verwendung einer URL wie `http://localhost/…`) oder mit {{Glossary("HTTPS", "HTTPS")}} beim Laden der Seite. Der JavaScript-Code muss ebenfalls sicher geladen worden sein.

Falls das Dokument nicht sicher geladen wurde, werden Sie nicht weit kommen. Die [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler problemlos behandeln oder eine Art von Fallback bereitstellen.

### Zurückfallen auf das WebXR Polyfill

Eine Fallback-Option ist das von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Standardisierungsprozess von WebXR verantwortlich ist, bereitgestellte [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/). Das {{Glossary("polyfill", "polyfill")}} bringt Unterstützung für WebXR in Browser, die keine native Unterstützung für WebXR haben, und glättet Inkonsistenzen zwischen den Implementierungen in den Browsern, die dies tun. Es kann manchmal auch nützlich sein, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt nach optionaler Installation des Polyfills zurückgibt, vorausgesetzt, dass das Polyfill mithilfe eines vorherigen {{HTMLElement("script")}}-Tags eingebunden oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Wenn Sie es auf `null` setzen, signalisiert dies, dass das Polyfill durch den Garbage Collector gesammelt werden kann, wenn keine Objekte mehr darauf zugreifen.

Natürlich können Sie dies je nach Ihren Bedürfnissen vereinfachen; da Ihre App wahrscheinlich nicht häufig zwischen der Verwendung des Polyfills hin- und herwechselt, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen, die sich um WebXR drehen. An erster Stelle steht, dass die Verwendung des `immersive-vr`-Modus – der die Sicht des Benutzers auf die Welt vollständig ersetzt – erfordert, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und aktuell im Fokus sein. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Benutzerevent-Handler heraus aufrufen, wie beispielsweise dem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Event.

Für genauere Informationen zur Sicherung von WebXR-Aktivitäten und zur Nutzung siehe den Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Bestätigen, dass der benötigte Sitzungstyp verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft ratsam, zunächst zu überprüfen, ob die Hardware und Software des Benutzers den Präsentationsmodus unterstützt, den Sie verwenden möchten. Darüber hinaus kann es verwendet werden, um festzustellen, ob Sie eine immersive oder eine Inline-Präsentation verwenden möchten.

Um herauszufinden, ob ein gegebener Modus unterstützt wird, rufen Sie die Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) des [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Diese gibt ein Versprechen zurück, das zu `true` aufgelöst wird, wenn die gegebene Sitzungsart zur Verwendung verfügbar ist, oder zu `false` andernfalls.

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

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert. Um ein `XRSession` zu erhalten, rufen Sie die [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession)-Methode Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf, die ein Versprechen zurückgibt, das mit einem `XRSession` aufgelöst wird, wenn es erfolgreich erstellt werden kann. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Code-Snippet an `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie erstellen möchten – in diesem Fall eine vollständig immersive Virtual Reality-Erfahrung. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive Virtual Reality-Sitzung mit einem Headset oder ähnlichen Gerät, das die Welt um den Benutzer vollständig mit den Bildern ersetzt, die Sie präsentieren.
- `immersive-ar`
  - : Eine Augmented Reality-Sitzung, in der Bilder zur echten Welt mit einem Headset oder ähnlich hinzugefügt werden. _Diese Option wird noch nicht weit verbreitet unterstützt, da die AR-Spezifikation im Fluss ist._
- `inline`
  - : Eine On-Screen-Präsentation der XR-Bilder im Kontext des Dokumentfensters.

Wenn die Sitzung aus irgendeinem Grund nicht erstellt werden konnte – wie beispielsweise, dass die Nutzungsrichtlinie ihre Verwendung nicht zulässt oder der Benutzer die Erlaubnis zur Verwendung des Headsets verweigert – wird das Versprechen abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt das neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder löst eine Ausnahme aus, falls beim Erstellen der Sitzung ein Fehler auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession)-Methode ein optionales Objekt mit Initialisierungsparametern zur Anpassung der Sitzung annehmen. Derzeit ist der einzige anpassbare Aspekt der Sitzung, welche der Referenzräume verwendet werden sollen, um das Koordinatensystem der Welt darzustellen. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den Referenzräumen kompatibel ist, die Sie benötigen oder bevorzugen.

Wenn Sie beispielsweise einen `unbounded`-Referenzraum benötigen, können Sie diesen als erforderliches Feature festlegen, um sicherzustellen, dass die Sitzung, die Sie erhalten, unbegrenzte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Andererseits, wenn Sie eine _inline_ Sitzung benötigen und einen `local`-Referenzraum bevorzugen, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion versucht, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie einen lokalen Raum versuchen, und falls das fehlschlägt, auf einen `viewer`-Referenzraum ausweichen, den alle Geräte unterstützen müssen.

### Vorbereiten der neuen Sitzung zur Nutzung

Sobald das Versprechen, das von der Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegeben wurde, erfolgreich aufgelöst wird, wissen Sie, dass Sie eine nutzbare WebXR-Sitzung in der Hand haben. Sie können dann mit der Vorbereitung der Sitzung zur Nutzung und dem Beginn Ihrer Animationen fortfahren.

Die wichtigsten Dinge, die Sie tun müssen (oder möglicherweise tun müssen), um die Konfiguration Ihrer Sitzung abzuschließen, sind:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie verfolgen müssen. Dazu gehört höchstwahrscheinlich das [`end`](/de/docs/Web/API/XRSession/end_event) mindestens, damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabesteuerungen verwenden, folgen Sie dem [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis, um das Hinzufügen oder Entfernen von XR-Eingabesteuerungen zu erkennen, sowie den verschiedenen [Aktionsereignissen für Auswahl und Quetschen](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Sie möchten möglicherweise auch auf das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) achten, damit Sie benachrichtigt werden, wenn sich die Menge der verfügbaren immersiven Geräte ändert.
- Erhalten Sie einen WebGL-Kontext für das Canvas, in das Sie Ihre Frames rendern möchten, indem Sie die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem Zielkontext aufrufen.
- Richten Sie Ihre WebGL-Daten und Modelle ein und bereiten Sie sich darauf vor, die Szene zu rendern.
- Setzen Sie den WebGL-Kontext als Quelle für das XR-System, indem Sie einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und den Wert der Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des Sitzungs-RenderState setzen.
- Führen Sie Berechnungen für die anfängliche Position und Skalierung Ihrer Objekte nach Bedarf durch.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In einfacher Form könnte der Code zur Durchführung dieser letzten Einrichtung folgendermaßen aussehen:

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

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Rendering-Umgebung zu kapseln. Dies umfasst die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle Daten, die zum Rendern der Szene in WebGL verwendet werden, den Weltreferenzraum und die ID, die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegeben wird.

Zuerst wird ein Handler für das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und eine Referenz auf seinen WebGL-Kontext abgerufen, wobei die `xrCompatible`-Option beim Aufrufen von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angegeben wird.

Als nächstes werden alle Daten und Setups durchgeführt, die für den WebGL-Renderer erforderlich sind, bevor dann WebGL konfiguriert wird, um den Framebuffer des WebGL-Kontexts als eigenen Framebuffer zu verwenden. Dies wird mit der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) von [`XRSession`](/de/docs/Web/API/XRSession) durchgeführt, um den RenderState des Sitzungs-RenderState auf eine neu erstellte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die den WebGL-Kontext kapselt, einzustellen.

### Vorbereitung zum Rendern der Szene

Zu diesem Zeitpunkt wurde das `XRSession`-Objekt vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, innerhalb dessen die Koordinaten für die Welt angegeben werden. Wir können den anfänglichen Referenzraum für die Sitzung erhalten, indem wir die Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession` aufrufen. Wir geben beim Aufruf von `requestReferenceSpace()` den Namen des gewünschten Referenzraumtyps an, in diesem Fall `unbounded`. Sie könnten ebenso `local` oder `viewer` angeben, je nach Ihren Bedürfnissen.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, siehe [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raums. Das ist großartig – wenn sich der Standpunkt des Spielers genau im Zentrum der Welt befindet. Aber in den meisten Fällen wird das wahrscheinlich nicht der Fall sein. Wenn das so ist, rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf den anfänglichen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) sich an der Position des Betrachters befindet und die Orientierung so verschoben wird, dass sie in die gewünschte Richtung blickt. Der Eingabewert in `getOffsetReferenceSpace()` ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die Position und Orientierung des Spielers gemäß den Standardweltkoordinaten kapselt.

Mit dem neuen Referenzraum in der Hand und in `worldData` zur sicheren Aufbewahrung gespeichert, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um einen Rückruf zu planen, der ausgeführt wird, wenn es Zeit ist, das nächste Animationsbild für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später zum Abbrechen des Requests verwenden können, falls erforderlich, sodass wir das auch in `worldData` speichern.

Am Ende wird das `worldData`-Objekt an den Anrufer zurückgegeben, damit der Hauptcode die Daten, die er später benötigt, referenzieren kann. An diesem Punkt ist der Einrichtungsprozess abgeschlossen und wir haben die Rendering-Phase unserer Anwendung erreicht. Um mehr über das Rendering zu erfahren, siehe den Artikel [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Zu betrieblichen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie aufbewahren müssen, auf beliebige Weise speichern. Möglicherweise benötigen Sie andere Informationen oder haben unterschiedliche spezifische Anforderungen, die Sie dazu veranlassen, Dinge anders oder in einer anderen Reihenfolge zu tun.

In ähnlicher Weise variiert die spezifische Methodik, die Sie zum Laden von Modellen und anderen Informationen verwenden und Ihre WebGL-Daten – Texturen, Vertex-Buffer, Shader und so weiter – einrichten, stark je nach Ihren Bedürfnissen, den verwendeten Frameworks und dergleichen.

## Wichtige Sitzungswartungsereignisse

Im Verlauf Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die auf Änderungen des Sitzungsstatus hinweisen oder die Sie darüber informieren, dass Sie etwas tun müssen, um den Betrieb der Sitzung ordnungsgemäß aufrechtzuerhalten.

### Erkennen von Änderungen im Sichtbarkeitsstatus der Sitzung

Wenn sich der Sichtbarkeitsstatus der `XRSession` ändert – beispielsweise wenn die Sitzung versteckt oder angezeigt wird oder wenn der Benutzer sich auf einen anderen Kontext konzentriert – erhält die Sitzung ein [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` in Abhängigkeit vom Sichtbarkeitsstatus, wenn er sich ändert. Vermutlich verwendet der Renderer diesen Wert, um zu berechnen, wie oft neue Frames gerendert werden sollen, während die Animationsschleife fortschreitet, und rendert somit weniger häufig, je "verschwommener" die Szene wird.

### Erkennen von Referenzraum-Resets

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Benutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies passiert, sind, wenn der Benutzer eine Neukalibrierung seines XR-Geräts anfordert oder wenn ein Schluckauf oder eine Störung im Fluss der von der XR-Hardware empfangenen Tracking-Daten auftritt. Diese Situationen führen dazu, dass der native Ursprung abrupt um die Entfernung und den Richtungswinkel springt, die notwendig sind, um den nativen Ursprung wieder mit der Position und Blickrichtung des Benutzers in Einklang zu bringen.

Wenn dies passiert, wird ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die Eigenschaft [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) des Ereignisses ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Transformation beschreibt, die erforderlich ist, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) gesendet, nicht an die [`XRSession`](/de/docs/Web/API/XRSession)!

Eine weitere häufige Ursache für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie ändert, wie sie durch die [`XRBoundedReferenceSpace`]-Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) spezifiziert wird.

Für häufigere Ursachen von Referenzraum-Resets und mehr Details sowie Beispielcode siehe die Dokumentation für das [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis.

### Erkennen, wenn sich die verfügbare Menge der WebXR-Eingabesteuerungen ändert

WebXR pflegt eine Liste von Eingabesteuerungen, die spezifisch für das WebXR-System ist. Zu diesen Geräten gehören Handheld-Controller, bewegungssensitive Kameras, bewegungsempfindliche Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controllergerät anschließt oder trennt, wird das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, es auf Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was auch immer Sie mit dem Gerät tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers zu Ende geht, endet die Sitzung. Das Herunterfahren einer [`XRSession`](/de/docs/Web/API/XRSession) kann entweder dadurch geschehen, dass die Sitzung selbst entscheidet, dass es Zeit ist, herunterzufahren (z. B. wenn der Benutzer sein XR-Gerät ausschaltet), oder weil der Benutzer auf eine Schaltfläche zum Beenden der Sitzung klickt, oder eine andere Situation, die für Ihre Anwendung zutrifft.

Hier besprechen wir sowohl, wie Sie das Herunterfahren der WebXR-Sitzung anfordern, als auch, wie Sie erkennen, wann die Sitzung beendet ist, sei es auf Ihren Antrag hin oder anders.

### Herunterfahren der Sitzung

Um die WebXR-Sitzung sauber zu beenden, wenn Sie mit ihr fertig sind, sollten Sie die Methode [`end()`](/de/docs/Web/API/XRSession/end) der Sitzung aufrufen. Diese gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, mit dem Sie wissen, wann das Herunterfahren abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` an seinen Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten zu erledigen haben, wenn die Sitzung endet, wie z. B. das Freigeben von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignishandler durchführen, anstatt im Hauptteil Ihres Codes. Auf diese Weise erfolgen die Aufräumarbeiten unabhängig davon, ob das Herunterfahren automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet ist

Wie bereits festgestellt, können Sie erkennen, wann die WebXR-Sitzung beendet ist – sei es, weil Sie die [`end()`](/de/docs/Web/API/XRSession/end)-Methode aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein unvermeidlicher Fehler im XR-System aufgetreten ist – indem Sie auf das [`end`](/de/docs/Web/API/XRSession/end_event)-Ereignis achten, das an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

Hier, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, wird eine `freeResources()`-Funktion aufgerufen, um die zuvor zugewiesenen und/oder geladenen Ressourcen für die XR-Präsentation freizugeben. Indem `freeResources()` im `end`-Ereignishandler aufgerufen wird, rufen wir es sowohl auf, wenn der Benutzer eine Schaltfläche anklickt, die ein Herunterfahren auslöst, wie es durch die oben gezeigte `shutdownXR()`-Funktion geschehen könnte, _als auch_ wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Raumverfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
