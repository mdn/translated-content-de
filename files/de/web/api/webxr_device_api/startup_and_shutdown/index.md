---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{DefaultAPISidebar("WebXR Device API")}}

Wenn Sie mit 3D-Grafik im Allgemeinen und WebGL im Besonderen bereits vertraut sind, ist der nächste Schritt zur Mixed Reality – also zur Darstellung künstlicher Umgebungen oder Objekte zusätzlich zur realen Welt oder an ihrer Stelle – nicht übermäßig kompliziert. Bevor Sie Ihr Augmented- oder Virtual-Reality-Szenario rendern können, müssen Sie eine WebXR-Sitzung erstellen und einrichten. Außerdem sollten Sie wissen, wie Sie sie ordnungsgemäß beenden. In diesem Artikel erfahren Sie, wie das geht.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer Anwendung auf die WebXR-API beginnt mit dem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Geräteausstattung, die Ihnen über die Hardware und Treiber des Geräts der nutzenden Person zur Verfügung steht. Über die [`Navigator`](/de/docs/Web/API/Navigator)-Eigenschaft [`xr`](/de/docs/Web/API/Navigator/xr) kann Ihr Dokument auf ein globales `XRSystem`-Objekt zugreifen. Die Eigenschaft gibt das `XRSystem`-Objekt zurück, wenn angesichts der verfügbaren Hardware und der Umgebung Ihres Dokuments geeignete XR-Hardware zur Nutzung bereitsteht.

Der einfachste Code zum Abrufen des `XRSystem`-Objekts lautet daher:

```js
const xr = navigator.xr;
```

Der Wert von `xr` ist `null` oder `undefined`, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Da WebXR eine neue API ist, die sich noch in der Entwicklung befindet, wird sie nur von bestimmten Geräten und Browsern unterstützt. Selbst dort ist sie möglicherweise nicht standardmäßig aktiviert. Unter Umständen können Sie WebXR jedoch auch dann ausprobieren, wenn Sie kein kompatibles System haben.

#### WebXR-Polyfill

Das Team, das die WebXR-Spezifikation entwickelt, hat einen [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht. Damit können Sie WebXR in Browsern simulieren, die die WebXR-APIs nicht unterstützen. Falls der Browser die ältere [WebVR-API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls greift der Polyfill auf eine Implementierung zurück, die Googles Cardboard-VR-API verwendet.

Der Polyfill wird parallel zur Spezifikation gepflegt und an deren aktuellen Stand angepasst. Außerdem wird er aktualisiert, um mit Browsern kompatibel zu bleiben, wenn sich deren Unterstützung für WebXR und andere für den Polyfill relevante Technologien im Laufe der Zeit ändert.

Lesen Sie die Readme-Datei sorgfältig: Der Polyfill ist in mehreren Versionen verfügbar, je nachdem, in welchem Umfang Ihre Zielbrowser neuere JavaScript-Funktionen unterstützen.

##### Verwendung des Emulators

Auch wenn die Verwendung im Vergleich zu einem echten Headset etwas umständlich ist, können Sie damit WebXR-Code auf einem Desktop-Computer ausprobieren und entwickeln, auf dem WebXR normalerweise nicht verfügbar ist. Außerdem können Sie einige grundlegende Tests durchführen, bevor Sie Ihren Code auf einem echten Gerät ausführen. Beachten Sie jedoch, dass der Emulator noch nicht die gesamte WebXR-API vollständig emuliert. Dadurch können unerwartete Probleme auftreten. Lesen Sie auch hier die Readme-Datei sorgfältig und machen Sie sich mit den Einschränkungen vertraut, bevor Sie beginnen.

**Wichtig:** Testen Sie Ihren Code _immer_ auf echter AR- und/oder VR-Hardware, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder durch einen Polyfill bereitgestellte Umgebungen sind _kein_ angemessener Ersatz für Tests auf physischen Geräten.

##### Erweiterung beziehen

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser herunter:

- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode der Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Probleme und Hinweise zum Emulator

Eine vollständige Beschreibung der Erweiterung würde den Rahmen dieses Artikels sprengen. Einige Punkte sind jedoch besonders erwähnenswert.

Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte Unterstützung für Augmented Reality (AR) über das [WebXR AR Module](https://immersive-web.github.io/webxr-ar-module/) ein, dessen Spezifikation sich einem stabilen Stand nähert. Eine Dokumentation zu AR wird in Kürze hier auf MDN erscheinen.

Zu den weiteren Verbesserungen gehören die Umbenennung des `XR`-Interface in [`XRSystem`](/de/docs/Web/API/XRSystem), die Unterstützung von Squeeze-Eingabequellen (Griffbetätigung) und die Unterstützung der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles).

### Anforderungen an die Umgebung

Eine WebXR-kompatible Umgebung setzt ein sicher geladenes Dokument voraus. Ihr Dokument muss entweder lokal geladen worden sein (beispielsweise über eine URL wie `http://localhost/…`) oder beim Laden der Seite {{Glossary("HTTPS", "HTTPS")}} verwenden. Auch der JavaScript-Code muss sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht weit: Die Eigenschaft [`navigator.xr`](/de/docs/Web/API/Navigator/xr) ist dann gar nicht vorhanden. Das kann auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In beiden Fällen müssen Sie darauf vorbereitet sein, dass die Eigenschaft `xr` fehlt, und entweder den Fehler angemessen behandeln oder eine Ausweichlösung anbieten.

### Auf den WebXR-Polyfill zurückgreifen

Eine mögliche Ausweichlösung ist der [WebXR-Polyfill](https://github.com/immersive-web/webxr-polyfill/) der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für die Standardisierung von WebXR zuständig ist. Der {{Glossary("polyfill", "Polyfill")}} stellt WebXR-Unterstützung für Browser ohne native WebXR-Unterstützung bereit und gleicht Unterschiede zwischen den Implementierungen in Browsern aus, die WebXR bereits unterstützen. Daher kann er manchmal auch dann nützlich sein, wenn WebXR nativ verfügbar ist.

Hier definieren wir eine Funktion `getXR()`, die das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurückgibt, nachdem sie bei Bedarf den Polyfill installiert hat. Dabei wird vorausgesetzt, dass der Polyfill zuvor mithilfe eines {{HTMLElement("script")}}-Tags eingebunden oder geladen wurde.

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

Das zurückgegebene `XRSystem`-Objekt können Sie anschließend wie hier auf MDN dokumentiert verwenden. Die globale Variable `webxrPolyfill` dient lediglich dazu, eine Referenz auf den Polyfill zu behalten. So bleibt er verfügbar, bis Sie ihn nicht mehr benötigen. Wenn Sie die Variable auf `null` setzen, kann der Polyfill durch die Garbage Collection entfernt werden, sobald keine von ihm abhängigen Objekte ihn mehr verwenden.

Natürlich können Sie dies je nach Bedarf vereinfachen: Da Ihre Anwendung wahrscheinlich nicht häufig zwischen der Verwendung und Nichtverwendung des Polyfills wechselt, können Sie den Code auf den für Sie relevanten Fall beschränken.

### Berechtigungen und Sicherheit

Für WebXR gelten verschiedene Sicherheitsmaßnahmen. Insbesondere erfordert die Verwendung des Modus `immersive-vr`, der die Sicht der nutzenden Person auf die Welt vollständig ersetzt, dass die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) `xr-spatial-tracking` eingerichtet ist. Darüber hinaus muss das Dokument sicher sein und aktuell den Fokus haben. Schließlich müssen Sie [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aus einem Handler für ein Benutzerereignis aufrufen, beispielsweise aus dem Handler für das Ereignis [`click`](/de/docs/Web/API/Element/click_event).

Weitere Einzelheiten zur Absicherung und Verwendung von WebXR finden Sie im Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Prüfen, ob der benötigte Sitzungstyp verfügbar ist

Bevor Sie eine neue WebXR-Sitzung erstellen, sollten Sie häufig zunächst prüfen, ob die Hardware und Software der nutzenden Person den gewünschten Darstellungsmodus unterstützen. So können Sie beispielsweise auch entscheiden, ob Sie eine immersive oder eine Inline-Darstellung verwenden.

Um festzustellen, ob ein bestimmter Modus unterstützt wird, rufen Sie die Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) von [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Sie gibt ein Promise zurück, das mit `true` erfüllt wird, wenn der angegebene Sitzungstyp verfügbar ist, andernfalls mit `false`.

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // Create and use an immersive VR session
} else {
  // Create an inline session instead, or tell the user about the
  // incompatibility if inline is required
}
```

## Sitzung erstellen und starten

Eine WebXR-Sitzung wird durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert. Um eine `XRSession` zu erhalten, rufen Sie die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Ihres [`XRSystem`](/de/docs/Web/API/XRSystem) auf. Sie gibt ein Promise zurück, das mit einer `XRSession` erfüllt wird, wenn die Sitzung erfolgreich eingerichtet werden konnte. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* continue to set up the session */
});
```

Beachten Sie den Parameter, der in diesem Codebeispiel an `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten – hier ein vollständig immersives Virtual-Reality-Erlebnis. Es gibt drei Möglichkeiten:

- `immersive-vr`
  - : Eine vollständig immersive Virtual-Reality-Sitzung mit einem Headset oder einem ähnlichen Gerät, bei der die Umgebung der nutzenden Person vollständig durch die von Ihnen dargestellten Bilder ersetzt wird.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, bei der mithilfe eines Headsets oder eines ähnlichen Geräts Bilder zur realen Welt hinzugefügt werden. _Diese Option wird noch nicht allgemein unterstützt, da sich die AR-Spezifikation noch verändert._
- `inline`
  - : Eine Darstellung der XR-Bilder auf dem Bildschirm innerhalb des Dokumentfensters.

Falls die Sitzung aus irgendeinem Grund nicht erstellt werden kann – etwa weil eine Richtlinie ihre Verwendung untersagt oder die nutzende Person die Berechtigung zur Verwendung des Headsets verweigert –, wird das Promise zurückgewiesen. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte daher so aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue [`XRSession`](/de/docs/Web/API/XRSession) zurück oder löst eine Ausnahme aus, wenn beim Erstellen der Sitzung ein Fehler auftritt.

### Sitzung anpassen

Neben dem Darstellungsmodus kann die Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ein optionales Objekt mit Initialisierungsparametern entgegennehmen, um die Sitzung anzupassen. Derzeit lässt sich nur konfigurieren, welche Referenzräume zur Darstellung des Weltkoordinatensystems verwendet werden sollen. Sie können erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den von Ihnen benötigten oder bevorzugten Referenzräumen kompatibel ist.

Wenn Sie beispielsweise einen Referenzraum vom Typ `unbounded` benötigen, können Sie ihn als erforderliches Feature angeben. So stellen Sie sicher, dass die erhaltene Sitzung unbeschränkte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Wenn Sie dagegen eine _Inline_-Sitzung benötigen und einen Referenzraum vom Typ `local` bevorzugen, können Sie Folgendes tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Die Funktion `createInlineSession()` versucht, eine Inline-Sitzung zu erstellen, die mit dem Referenzraum `local` kompatibel ist. Wenn Sie anschließend Ihren Referenzraum erstellen, können Sie zunächst einen lokalen Raum anfordern. Schlägt das fehl, können Sie auf einen Referenzraum vom Typ `viewer` zurückgreifen, den alle Geräte unterstützen müssen.

### Neue Sitzung für die Verwendung vorbereiten

Sobald das von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) zurückgegebene Promise erfolgreich erfüllt wurde, steht Ihnen eine verwendbare WebXR-Sitzung zur Verfügung. Nun können Sie die Sitzung vorbereiten und mit Ihren Animationen beginnen.

Zu den wichtigsten Schritten, die Sie zum Abschluss der Sitzungskonfiguration ausführen müssen oder möglicherweise ausführen möchten, gehören:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie überwachen müssen. Dazu gehört wahrscheinlich mindestens [`end`](/de/docs/Web/API/XRSession/end_event), damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabecontroller verwenden, überwachen Sie das Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event), um das Hinzufügen und Entfernen von XR-Eingabecontrollern zu erkennen, sowie die verschiedenen [Ereignisse für Select- und Squeeze-Aktionen](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Möglicherweise möchten Sie das [`XRSystem`](/de/docs/Web/API/XRSystem)-Ereignis [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) überwachen, um über Änderungen an den verfügbaren immersiven Geräten informiert zu werden.
- Rufen Sie die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) von [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) auf dem Ziel-Canvas auf, um einen WebGL-Kontext für das Canvas zu erhalten, in das Sie Ihre Frames rendern möchten.
- Richten Sie Ihre WebGL-Daten und -Modelle ein und bereiten Sie das Rendern der Szene vor.
- Legen Sie den WebGL-Kontext als Quelle für das XR-System fest, indem Sie ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen und es als Wert der Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des [`renderState`](/de/docs/Web/API/XRRenderState) der Sitzung setzen.
- Berechnen Sie bei Bedarf die anfängliche Position und Skalierung Ihrer Objekte.
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

Für dieses Beispiel wird ein Objekt namens `worldData` erstellt, das Daten über die Welt und die Rendering-Umgebung zusammenfasst. Dazu gehören die [`XRSession`](/de/docs/Web/API/XRSession) selbst, alle zum Rendern der Szene in WebGL verwendeten Daten, der Weltreferenzraum und die von [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) zurückgegebene ID.

Zunächst wird ein Handler für das Ereignis [`end`](/de/docs/Web/API/XRSession/end_event) eingerichtet. Anschließend wird das Rendering-Canvas abgerufen und eine Referenz auf seinen WebGL-Kontext ermittelt. Beim Aufruf von [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wird dabei die Option `xrCompatible` angegeben.

Danach werden die für den WebGL-Renderer erforderlichen Daten und Einstellungen vorbereitet. Anschließend wird WebGL so konfiguriert, dass der Framebuffer des WebGL-Kontexts für die XR-Darstellung verwendet wird. Dazu wird mit der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) von [`XRSession`](/de/docs/Web/API/XRSession) die Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des Renderzustands auf ein neu erstelltes [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gesetzt, das den WebGL-Kontext enthält.

### Rendern der Szene vorbereiten

Zu diesem Zeitpunkt ist die `XRSession` selbst vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zunächst benötigen wir einen Referenzraum, in dem die Koordinaten der Welt angegeben werden. Den anfänglichen Referenzraum für die Sitzung erhalten wir durch Aufruf der Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) der `XRSession`. Beim Aufruf von `requestReferenceSpace()` geben wir den Namen des gewünschten Referenzraumtyps an – in diesem Fall `unbounded`. Je nach Bedarf könnten Sie ebenso `local` oder `viewer` angeben.

> [!NOTE]
> Wie Sie den passenden Referenzraum für Ihre Anforderungen auswählen, erfahren Sie unter [Den Typ des Referenzraums auswählen](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum legt den Ursprung (0, 0, 0) in die Mitte des Raums. Das ist ideal, wenn der Blickpunkt der spielenden Person genau in der Mitte der Welt beginnt. Meistens ist das jedoch nicht der Fall. Dann rufen Sie [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) auf dem anfänglichen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space). Dadurch liegt (0, 0, 0) an der Position der betrachtenden Person, und auch die Ausrichtung wird so verschoben, dass sie in die gewünschte Richtung zeigt. Als Eingabewert für `getOffsetReferenceSpace()` dient ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Ausrichtung der spielenden Person in den Standard-Weltkoordinaten beschreibt.

Nachdem wir den neuen Referenzraum erhalten und im Objekt `worldData` gespeichert haben, rufen wir die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf. Damit planen wir einen Callback für den Zeitpunkt, an dem der nächste Animationsframe der WebXR-Sitzung gerendert werden soll. Der Rückgabewert ist eine ID, mit der wir die Anfrage später bei Bedarf abbrechen können. Daher speichern wir auch sie in `worldData`.

Zum Schluss wird das Objekt `worldData` an den aufrufenden Code zurückgegeben, damit der Hauptcode später auf die benötigten Daten zugreifen kann. Damit ist die Einrichtung abgeschlossen und die Anwendung befindet sich in der Rendering-Phase. Weitere Informationen finden Sie im Artikel [Rendering und der WebXR-Callback für Animationsframes](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Hinweise zur praktischen Umsetzung

Dies war selbstverständlich nur ein Beispiel. Sie müssen nicht alles in einem `worldData`-Objekt speichern; Sie können die benötigten Informationen auf beliebige Weise verwalten. Möglicherweise benötigen Sie andere Informationen oder haben besondere Anforderungen, aufgrund derer Sie die Schritte anders oder in einer anderen Reihenfolge ausführen.

Ebenso hängt die konkrete Vorgehensweise beim Laden von Modellen und anderen Informationen sowie beim Einrichten Ihrer WebGL-Daten – Texturen, Vertex-Buffer, Shader und so weiter – stark von Ihren Anforderungen und den gegebenenfalls verwendeten Frameworks ab.

## Wichtige Ereignisse für die Verwaltung der Sitzung

Im Verlauf Ihrer WebXR-Sitzung können verschiedene Ereignisse auftreten, die Änderungen am Sitzungszustand anzeigen oder Sie auf Maßnahmen hinweisen, die für den ordnungsgemäßen Betrieb der Sitzung erforderlich sind.

### Änderungen des Sichtbarkeitszustands der Sitzung erkennen

Wenn sich der Sichtbarkeitszustand der `XRSession` ändert – etwa weil die Sitzung ausgeblendet oder angezeigt wird oder die nutzende Person einen anderen Kontext fokussiert –, empfängt die Sitzung ein Ereignis vom Typ [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event).

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

Dieses Beispiel ändert eine Variable namens `myFrameRate` entsprechend dem jeweiligen Sichtbarkeitszustand. Vermutlich verwendet der Renderer diesen Wert, um während der Animationsschleife zu berechnen, wie häufig neue Frames gerendert werden sollen. Je stärker die Szene „aus dem Fokus“ gerät, desto seltener wird sie gerendert.

### Zurücksetzungen von Referenzräumen erkennen

Beim Verfolgen der Position der nutzenden Person in der Welt können gelegentlich Unstetigkeiten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten. Am häufigsten geschieht dies, wenn die nutzende Person eine Neukalibrierung ihres XR-Geräts anfordert oder wenn die von der XR-Hardware empfangenen Tracking-Daten kurzzeitig gestört sind. In solchen Situationen springt der native Ursprung abrupt um die Entfernung und den Winkel, die nötig sind, um ihn wieder an der Position und Blickrichtung der nutzenden Person auszurichten.

In diesem Fall wird ein Ereignis vom Typ [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event) an den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) der Sitzung gesendet. Die Eigenschaft [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) des Ereignisses enthält ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die zur Neuausrichtung des nativen Ursprungs erforderliche Transformation beschreibt.

> [!NOTE]
> Das Ereignis `reset` wird bei [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ausgelöst, nicht bei [`XRSession`](/de/docs/Web/API/XRSession)!

Eine weitere häufige Ursache für `reset`-Ereignisse ist eine Änderung der Geometrie eines begrenzten Referenzraums (`bounded-floor`), wie sie durch die Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) von [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) beschrieben wird.

Weitere häufige Ursachen für die Zurücksetzung von Referenzräumen sowie zusätzliche Einzelheiten und Beispielcode finden Sie in der Dokumentation zum Ereignis [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event).

### Änderungen an den verfügbaren WebXR-Eingabegeräten erkennen

WebXR verwaltet eine Liste von Eingabegeräten, die für das jeweilige WebXR-System spezifisch ist. Dazu gehören beispielsweise Handcontroller, Kameras zur Bewegungserfassung, bewegungssensitive Handschuhe und andere Geräte, die Eingaben oder Rückmeldungen ermöglichen. Wenn die nutzende Person einen WebXR-Controller verbindet oder trennt, wird das Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) an die `XRSession` gesendet. Sie können dann die nutzende Person über die Verfügbarkeit des Geräts informieren, dessen Eingaben überwachen, Konfigurationsoptionen anbieten oder andere erforderliche Schritte ausführen.

## WebXR-Sitzung beenden

Wenn die VR- oder AR-Nutzung endet, endet auch die Sitzung. Eine [`XRSession`](/de/docs/Web/API/XRSession) kann aus verschiedenen Gründen beendet werden: etwa weil die Sitzung selbst ihre Beendigung veranlasst, wenn die nutzende Person ihr XR-Gerät ausschaltet, weil die nutzende Person auf eine Schaltfläche zum Beenden klickt oder aufgrund einer anderen für Ihre Anwendung relevanten Situation.

Im Folgenden wird erläutert, wie Sie das Beenden einer WebXR-Sitzung anfordern und erkennen, wann die Sitzung beendet wurde – unabhängig davon, ob dies auf Ihre Anforderung hin oder aus einem anderen Grund geschah.

### Sitzung beenden

Um eine WebXR-Sitzung nach Gebrauch ordnungsgemäß zu beenden, rufen Sie ihre Methode [`end()`](/de/docs/Web/API/XRSession/end) auf. Sie gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, anhand dessen Sie erkennen können, wann das Beenden abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* At this point, WebXR is fully shut down */
  }
}
```

Wenn `shutdownXR()` an den aufrufenden Code zurückkehrt, ist die WebXR-Sitzung vollständig und sicher beendet.

Falls beim Ende der Sitzung Arbeiten erforderlich sind, etwa das Freigeben von Ressourcen, sollten Sie diese in Ihrem Handler für das Ereignis [`end`](/de/docs/Web/API/XRSession/end_event) ausführen und nicht im Hauptteil Ihres Codes. So erfolgt die Bereinigung unabhängig davon, ob das Beenden automatisch oder manuell ausgelöst wurde.

### Erkennen, wann die Sitzung beendet wurde

Wie bereits beschrieben, erkennen Sie das Ende einer WebXR-Sitzung daran, dass ein Ereignis vom Typ [`end`](/de/docs/Web/API/XRSession/end_event) an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet wird. Das gilt unabhängig davon, ob Sie ihre Methode [`end()`](/de/docs/Web/API/XRSession/end) aufgerufen haben, die nutzende Person ihr Headset ausgeschaltet hat oder im XR-System ein nicht behebbarer Fehler aufgetreten ist.

```js
session.onend = (event) => {
  /* the session has shut down */

  freeResources();
};
```

In diesem Beispiel wird beim Empfang des Ereignisses `end` nach dem Ende der Sitzung die Funktion `freeResources()` aufgerufen. Sie gibt die Ressourcen frei, die zuvor für die XR-Darstellung zugewiesen und/oder geladen wurden. Da `freeResources()` im Handler für das Ereignis `end` aufgerufen wird, erfolgt dies sowohl dann, wenn die nutzende Person eine Schaltfläche anklickt, die beispielsweise die oben gezeigte Funktion `shutdownXR()` ausführt, _als auch_ dann, wenn die Sitzung aufgrund eines Fehlers oder aus einem anderen Grund automatisch endet.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Blickpunkte und Betrachtende: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Begrenzte Referenzräume verwenden](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
