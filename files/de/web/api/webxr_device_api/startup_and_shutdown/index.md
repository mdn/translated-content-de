---
title: Starten und Beenden einer WebXR-Sitzung
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

Vorausgesetzt, Sie sind bereits mit 3D-Grafiken im Allgemeinen und WebGL im Besonderen vertraut, ist der nächste mutige Schritt in die erweiterte Realität—die Idee, künstliche Szenerien oder Objekte zusätzlich oder anstelle der realen Welt darzustellen—nicht übermäßig kompliziert. Bevor Sie beginnen können, Ihr erweiterte oder virtuelle Realitätsszenario zu rendern, müssen Sie die WebXR-Sitzung erstellen und einrichten und wissen, wie man sie korrekt beendet. Sie lernen in diesem Artikel, wie man diese Aufgaben erledigt.

## Zugriff auf die WebXR-API

Der Zugriff Ihrer App auf die WebXR-API beginnt mit dem {{domxref("XRSystem")}} Objekt. Dieses Objekt repräsentiert die gesamte WebXR-Gerätesuite, die Ihnen durch die Hardware und Treiber auf der Ausrüstung des Benutzers zur Verfügung steht. Ein globales `XRSystem`-Objekt steht Ihrem Dokument durch die {{domxref("Navigator")}} Eigenschaft {{domxref("Navigator.xr", "xr")}} zur Verfügung, das das `XRSystem`-Objekt zurückgibt, wenn geeignete XR-Hardware für Ihre Nutzung verfügbar ist, basierend auf der verfügbaren Hardware und der Umgebung Ihres Dokuments.

Der einfachste Code, der das `XRSystem`-Objekt abruft, sieht so aus:

```js
const xr = navigator.xr;
```

Der Wert von `xr` wird `null` oder `undefined` sein, wenn WebXR nicht verfügbar ist.

### Verfügbarkeit von WebXR

Da es sich bei WebXR um eine neue und noch in Entwicklung befindliche API handelt, ist die Unterstützung auf bestimmte Geräte und Browser beschränkt; und selbst auf diesen ist sie möglicherweise nicht standardmäßig aktiviert. Es gibt möglicherweise Optionen, die es Ihnen erlauben, mit WebXR zu experimentieren, auch wenn Sie kein kompatibles System haben.

#### WebXR Polyfill

Das Team, das die WebXR-Spezifikation entwirft, hat eine [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill) veröffentlicht, die Sie verwenden können, um WebXR auf Browsern zu simulieren, die die WebXR-APIs nicht unterstützen. Wenn der Browser die ältere [WebVR API](/de/docs/Web/API/WebVR_API) unterstützt, wird diese verwendet. Andernfalls fällt das Polyfill auf eine Implementierung zurück, die Googles Cardboard VR API nutzt.

Das Polyfill wird zusammen mit der Spezifikation gepflegt und wird regelmäßig mit der Spezifikation auf den neuesten Stand gebracht. Zusätzlich wird es aktualisiert, um die Kompatibilität mit Browsern zu bewahren, da deren Unterstützung für WebXR und andere damit zusammenhängende Technologien sowie die Implementierung des Polyfills sich im Laufe der Zeit ändern kann.

Lesen Sie das Readme sorgfältig; das Polyfill ist in mehreren Versionen erhältlich, abhängig vom Grad der Kompatibilität mit neueren JavaScript-Funktionen, den Ihre Zielbrowser einschließen.

##### Emulator-Einsatz

Obwohl es im Vergleich zur Verwendung eines echten Headsets etwas umständlich ist, ermöglicht dies das Experimentieren mit und Entwickeln von WebXR-Code auf einem Desktop-Computer, wo WebXR normalerweise nicht verfügbar ist. Es ermöglicht Ihnen auch, einige grundlegende Tests durchzuführen, bevor Sie Ihren Code auf ein echtes Gerät bringen. Beachten Sie jedoch, dass der Emulator noch nicht die gesamte WebXR-API vollständig emuliert, sodass Sie mit Problemen konfrontiert werden können, die Sie nicht erwarten. Auch hier ist es wichtig, die Readme-Datei sorgfältig zu lesen und sicherzustellen, dass Sie sich der Einschränkungen bewusst sind, bevor Sie beginnen.

**Wichtig:** Sie sollten Ihren Code _immer_ auf tatsächlicher AR- und/oder VR-Hardware testen, bevor Sie ein Produkt veröffentlichen oder ausliefern! Emulierte, simulierte oder polygefillte Umgebungen sind _kein_ adäquater Ersatz für tatsächliche Tests auf physischen Geräten.

##### Herunterladen der Erweiterung

Laden Sie den WebXR API Emulator für Ihren unterstützten Browser unten herunter:

- [Google Chrome](https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/)

Der [Quellcode für die Erweiterung](https://github.com/MozillaReality/WebXR-emulator-extension) ist ebenfalls auf GitHub verfügbar.

##### Emulator-Probleme und Hinweise

Obwohl dies nicht der Ort für einen vollständigen Artikel über die Erweiterung ist, gibt es einige spezifische Dinge, die erwähnenswert sind.

Die Version 0.4.0 der Erweiterung wurde am 26. März 2020 angekündigt. Sie führte die Unterstützung für Augmented Reality (AR) durch das [WebXR AR Module](https://www.w3.org/TR/webxr-ar-module-1/) ein, das sich in einem stabilen Zustand nähert. Die Dokumentation für AR wird in Kürze hier auf MDN veröffentlicht.

Zu den weiteren Verbesserungen gehören die Aktualisierung des Emulators, um die `XR`-Schnittstelle in {{domxref("XRSystem")}} umzubenennen, Unterstützung für druckbasierte Eingabequellen einzuführen und Unterstützung für die {{domxref("XRInputSource")}} Eigenschaft {{domxref("XRInputSource.profiles", "profiles")}} hinzuzufügen.

### Kontextanforderungen

Eine WebXR-kompatible Umgebung beginnt mit einem sicher geladenen Dokument. Ihr Dokument muss entweder vom lokalen Laufwerk geladen worden sein (z.B. durch die Verwendung einer URL wie `http://localhost/…`) oder über {{Glossary("HTTPS")}} geladen werden. Der JavaScript-Code muss ebenfalls sicher geladen worden sein.

Wenn das Dokument nicht sicher geladen wurde, kommen Sie nicht weit. Die {{domxref("navigator.xr")}}-Eigenschaft existiert nicht einmal, wenn das Dokument nicht sicher geladen wurde. Dies könnte auch der Fall sein, wenn keine kompatible XR-Hardware verfügbar ist. In jedem Fall müssen Sie auf das Fehlen einer `xr`-Eigenschaft vorbereitet sein und entweder den Fehler reibungslos behandeln oder eine Art Rückfalloption bereitstellen.

### Rückfall auf das WebXR Polyfill

Eine Rückfalloption ist das [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill/), bereitgestellt von der [Immersive Web Working Group](https://www.w3.org/immersive-web/), die für den Standardisierungsprozess von WebXR verantwortlich ist. Das {{Glossary("polyfill")}} bringt Unterstützung für WebXR zu Browsern, die keine native WebXR-Unterstützung haben, und glättet die Inkonsistenzen zwischen Implementierungen in den Browsern, die es haben, sodass es manchmal auch nützlich sein kann, selbst wenn WebXR nativ verfügbar ist.

Hier definieren wir eine `getXR()`-Funktion, die das {{domxref("XRSystem")}}-Objekt zurückgibt, nachdem das Polyfill optional installiert wurde, vorausgesetzt, dass das Polyfill zuvor durch einen {{HTMLElement("script")}}-Tag eingeschlossen oder geladen wurde.

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

const nativeXr = getXR("no"); // Holen Sie sich das native XRSystem-Objekt
const polyfilledXr = getXR("yes"); // Gibt immer ein XRSystem aus dem Polyfill zurück
const xr = getXR("if-needed"); // Verwenden Sie das Polyfill nur, wenn navigator.xr fehlt
```

Das zurückgegebene `XRSystem`-Objekt kann dann gemäß der hier auf MDN bereitgestellten Dokumentation verwendet werden. Die globale Variable `webxrPolyfill` wird nur verwendet, um eine Referenz auf das Polyfill zu behalten, um sicherzustellen, dass es verfügbar bleibt, bis Sie es nicht mehr benötigen. Wenn es auf `null` gesetzt wird, signalisiert das, dass das Polyfill dem Müllsammler zur Verfügung stehen kann, wenn keine davon abhängigen Objekte es mehr verwenden.

Natürlich können Sie dies je nach Bedarf vereinfachen; da Ihre App wahrscheinlich nicht viel hin- und hergehen wird, ob das Polyfill verwendet werden soll, können Sie dies auf den spezifischen Fall vereinfachen, den Sie benötigen.

### Berechtigungen und Sicherheit

Es gibt eine Reihe von Sicherheitsmaßnahmen rund um WebXR. An erster Stelle steht, dass die Verwendung des `immersive-vr`-Modus—der die Sicht des Benutzers auf die Welt vollständig ersetzt—erfordert, dass die `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) vorhanden ist. Darüber hinaus muss das Dokument sicher und derzeit im Fokus stehen. Schließlich müssen Sie {{domxref("XRSystem.requestSession", "requestSession()")}} von einem Benutzerereignishandler aus aufrufen, wie dem Handler für das {{domxref("Element.click_event", "click")}}-Ereignis.

Weitere Einzelheiten zu Sicherheitsaspekten und Nutzung von WebXR finden Sie im Artikel [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security).

### Überprüfen, ob der erforderliche Sitzungstyp verfügbar ist

Bevor Sie versuchen, eine neue WebXR-Sitzung zu erstellen, ist es oft ratsam, zuerst zu überprüfen, ob die Hardware und Software des Nutzers den Präsentationsmodus unterstützen, den Sie verwenden möchten. Dies kann auch verwendet werden, um zu bestimmen, ob eine immersive oder eine Inline-Präsentation verwendet werden soll, beispielsweise.

Um herauszufinden, ob ein gegebener Modus unterstützt wird, rufen Sie die {{domxref("XRSystem")}}-Methode {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} auf. Diese gibt ein Versprechen zurück, das zu `true` aufgelöst wird, wenn der gegebene Sitzungstyp zur Nutzung verfügbar ist, oder zu `false` andernfalls.

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // Erstellen und verwenden Sie eine immersive VR-Sitzung
} else {
  // Erstellen Sie stattdessen eine Inline-Sitzung oder informieren Sie den Benutzer über die
  // Inkompatibilität, wenn Inline erforderlich ist
}
```

## Erstellen und Starten der Sitzung

Eine WebXR-Sitzung wird durch ein {{domxref("XRSession")}}-Objekt repräsentiert. Um ein `XRSession` zu erhalten, rufen Sie die Methode {{domxref("XRSystem.requestSession", "requestSession()")}} Ihres {{domxref("XRSystem")}}-Objekts auf, die ein Versprechen zurückgibt, das mit einem `XRSession` aufgelöst wird, wenn es erfolgreich eine Sitzung herstellen kann. Grundsätzlich sieht das so aus:

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* fahren Sie mit der Einrichtung der Sitzung fort */
});
```

Beachten Sie den Parameter, der in diesem Code-Snippet an `requestSession()` übergeben wird: `immersive-vr`. Dieser String gibt den Typ der WebXR-Sitzung an, die Sie einrichten möchten—in diesem Fall ein vollständig immersives Virtual-Reality-Erlebnis. Es gibt drei Optionen:

- `immersive-vr`
  - : Eine vollständig immersive Virtual-Reality-Sitzung, die ein Headset oder ein ähnliches Gerät verwendet, das die Umgebung des Benutzers vollständig durch die von Ihnen präsentierten Bilder ersetzt.
- `immersive-ar`
  - : Eine Augmented-Reality-Sitzung, in der Bilder mit einem Headset oder ähnlichem Gerät zur realen Welt hinzugefügt werden. _Diese Option wird derzeit nicht weit verbreitet unterstützt, da die AR-Spezifikation im Fluss ist._
- `inline`
  - : Eine Präsentation der XR-Bilder auf dem Bildschirm im Kontext des Dokumentenfensters.

Wenn die Sitzung aus irgendeinem Grund—zum Beispiel aufgrund der Ablehnung der Funktionalität durch die Richtlinie oder weil der Benutzer nicht die Erlaubnis zur Verwendung des Headsets erteilt hat—nicht erstellt werden konnte, wird das Versprechen abgelehnt. Eine vollständigere Funktion, die eine WebXR-Sitzung startet und zurückgibt, könnte wie folgt aussehen:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr");
  return session;
}
```

Diese Funktion gibt die neue {{domxref("XRSession")}} zurück oder wirft eine Ausnahme, wenn beim Erstellen der Sitzung ein Fehler auftritt.

### Anpassen der Sitzung

Zusätzlich zum Anzeigemodus kann die Methode {{domxref("XRSystem.requestSession", "requestSession()")}} ein optionales Objekt mit Initialisierungsparametern annehmen, um die Sitzung anzupassen. Derzeit ist der einzige konfigurierbare Aspekt der Sitzung, welche der Referenzräume verwendet werden sollen, um das Koordinatensystem der Welt darzustellen. Sie können entweder erforderliche oder optionale Referenzräume angeben, um eine Sitzung zu erhalten, die mit den von Ihnen benötigten oder bevorzugten Referenzräumen kompatibel ist.

Wenn Sie beispielsweise einen `unbounded`-Referenzraum benötigen, können Sie dies als erforderliches Feature angeben, um sicherzustellen, dass die Sitzung, die Sie erhalten, nicht begrenzte Räume verwenden kann:

```js
async function createImmersiveSession(xr) {
  session = await xr.requestSession("immersive-vr", {
    requiredFeatures: ["unbounded"],
  });
  return session;
}
```

Wenn Sie andererseits eine _Inline_-Sitzung benötigen und einen `local`-Referenzraum bevorzugen, können Sie dies tun:

```js
async function createInlineSession(xr) {
  session = await xr.requestSession("inline", {
    optionalFeatures: ["local"],
  });
  return session;
}
```

Diese `createInlineSession()`-Funktion versucht, eine Inline-Sitzung zu erstellen, die mit dem `local`-Referenzraum kompatibel ist. Wenn Sie bereit sind, Ihren Referenzraum zu erstellen, können Sie versuchen, einen lokalen Raum zu erhalten, und wenn das fehlschlägt, auf einen `viewer`-Referenzraum zurückfallen, den alle Geräte unterstützen müssen.

### Vorbereitung der neuen Sitzung zur Nutzung

Sobald das von der Methode {{domxref("XRSystem.requestSession", "requestSession()")}} zurückgegebene Versprechen erfolgreich aufgelöst wird, wissen Sie, dass Sie eine verwendbare WebXR-Sitzung in der Hand haben. Sie können dann mit der Vorbereitung der Sitzung zur Nutzung fortfahren und mit Ihren Animationen beginnen.

Die wichtigsten Dinge, die Sie tun müssen (oder tun müssen könnten), um die Konfiguration Ihrer Sitzung abzuschließen, sind:

- Fügen Sie Handler für die Ereignisse hinzu, die Sie beobachten müssen. Dazu gehört höchstwahrscheinlich das {{domxref("XRSession.end_event", "end")}}-Ereignis mindestens, damit Sie erkennen können, wann die Sitzung beendet ist.
- Wenn Sie XR-Eingabegeräte verwenden, achten Sie auf das {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis, um die Hinzufügung oder Entfernung von XR-Eingabegeräten zu erkennen, und auf die verschiedenen [Select- und Squeeze-Aktionsereignisse](/de/docs/Web/API/WebXR_Device_API/Inputs#actions).
- Möglicherweise möchten Sie das {{domxref("XRSystem")}}-Ereignis {{domxref("XRSystem.devicechange_event", "devicechange")}} verfolgen, damit Sie benachrichtigt werden, wenn sich die verfügbaren immersiven Geräte ändern.
- Holen Sie sich einen WebGL-Kontext für das Canvas, in das Sie Ihre Frames rendern möchten, indem Sie die {{domxref("HTMLCanvasElement")}}-Methode {{domxref("HTMLCanvasElement.getContext", "getContext()")}} auf dem Zielkontext aufrufen.
- Richten Sie Ihre WebGL-Daten und Modelle ein und bereiten Sie das Rendern der Szene vor.
- Legen Sie den WebGL-Kontext als Quelle für das XR-System fest, indem Sie ein {{domxref("XRWebGLLayer")}} erstellen und den Wert der {{domxref("XRRenderState", "renderState")}}-Eigenschaft {{domxref("XRRenderState.baseLayer", "baseLayer")}} der Sitzung festlegen.
- Führen Sie Berechnungen für die Anfangsposition und -skalierung Ihrer Objekte nach Bedarf durch.
- Beginnen Sie den [Frame-Rendering-Zyklus](/de/docs/Web/API/WebXR_Device_API/Rendering).

In einfacher Form könnte der Code, um dieses letzte Setup zu erledigen, so aussehen:

```js
async function runSession(session) {
  session.addEventListener("end", onSessionEnd);

  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext("webgl", { xrCompatible: true });

  // Richten Sie WebGL-Daten ein und dergleichen

  const worldData = loadGLPrograms(session, "worlddata.xml");
  if (!worldData) {
    return null;
  }

  // Beenden Sie das Konfigurieren von WebGL

  worldData.session.updateRenderState({
    baseLayer: new XRWebGLLayer(worldData.session, gl),
  });

  // Starten Sie das Rendern der Szene

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

Für die Zwecke dieses Beispiels wird ein Objekt namens `worldData` erstellt, um Daten über die Welt und die Rendering-Umgebung zu kapseln. Dies umfasst die {{domxref("XRSession")}} selbst, alle Daten, die zum Rendern der Szene in WebGL verwendet werden, den Welt-Referenzraum und die von {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} zurückgegebene ID.

Zuerst wird ein Handler für das {{domxref("XRSession.end_event", "end")}}-Ereignis eingerichtet. Dann wird das Rendering-Canvas abgerufen und eine Referenz auf dessen WebGL-Kontext abgerufen, wobei die `xrCompatible`-Option beim Aufruf von {{domxref("HTMLCanvasElement.getContext", "getContext()")}} angegeben wird.

Anschließend werden die Daten und die Einstellungen, die für den WebGL-Renderer benötigt werden, durchgeführt, bevor dann WebGL so konfiguriert wird, dass es den Framebuffer des WebGL-Kontexts als seinen eigenen Framebuffer verwendet. Dies geschieht mithilfe der {{domxref("XRSession")}}-Methode {{domxref("XRSession.updateRenderState", "updateRenderState()")}}, um den Render-State {{domxref("XRRenderState.baseLayer", "baseLayer")}} auf eine neu erstellte {{domxref("XRWebGLLayer")}} zu setzen, die den WebGL-Kontext kapselt.

### Vorbereitung auf das Rendern der Szene

An diesem Punkt ist die `XRSession` vollständig konfiguriert, sodass wir mit dem Rendern beginnen können. Zuerst benötigen wir einen Referenzraum, in dem die Weltkoordinaten angegeben werden. Wir können den initialen Referenzraum für die Sitzung abrufen, indem wir die Methode {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} des `XRSession`-Objekts aufrufen. Wir geben beim Aufruf von `requestReferenceSpace()` den Namen des gewünschten Referenzraumtyps an; in diesem Fall `unbounded`. Sie könnten genauso leicht `local` oder `viewer` angeben, je nach Bedarf.

> [!NOTE]
> Um zu verstehen, wie Sie den richtigen Referenzraum für Ihre Bedürfnisse auswählen, siehe [Auswahl des Referenzraumtyps](/de/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type).

Der von `requestReferenceSpace()` zurückgegebene Referenzraum platziert den Ursprung (0, 0, 0) in der Mitte des Raums. Das ist großartig—wenn der Blickpunkt Ihres Spielers in der exakten Mitte der Welt startet. Aber höchstwahrscheinlich ist das überhaupt nicht der Fall. Wenn dem so ist, rufen Sie {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} auf dem initialen Referenzraum auf, um einen _neuen_ Referenzraum zu erstellen, [der das Koordinatensystem verschiebt](/de/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space), sodass (0, 0, 0) an der Position des Betrachters liegt, mit der Ausrichtung, die ebenfalls verschoben wurde, um in die gewünschte Richtung zu zeigen. Der Eingabewert in `getOffsetReferenceSpace()` ist ein {{domxref("XRRigidTransform")}}, der die Position und Orientierung des Spielers in den Standard-Weltkoordinaten kapselt.

Mit dem neuen Referenzraum in der Hand und im `worldData`-Objekt zur sicheren Aufbewahrung gespeichert, rufen wir die {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}-Methode der Sitzung auf, um einen Rückruf zu planen, der ausgeführt wird, wenn es Zeit ist, den nächsten Animationsframe für die WebXR-Sitzung zu rendern. Der zurückgegebene Wert ist eine ID, die wir später verwenden können, um die Anforderung bei Bedarf zu stornieren, sodass wir diesen auch in `worldData` speichern.

Schließlich wird das `worldData`-Objekt an den Aufrufer zurückgegeben, um dem Hauptcode zu ermöglichen, bei Bedarf auf die benötigten Daten zuzugreifen. An diesem Punkt ist der Einrichtungsprozess abgeschlossen, und wir haben die Render-Phase unserer Anwendung erreicht. Um mehr über das Rendering zu erfahren, siehe den Artikel [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering).

### Zu betrieblichen Details

Offensichtlich war dies nur ein Beispiel. Sie benötigen kein `worldData`-Objekt, um alles zu speichern; Sie können die Informationen, die Sie beibehalten müssen, in jeder gewünschten Weise speichern. Möglicherweise benötigen Sie andere Informationen oder haben andere spezifische Anforderungen, die dazu führen, dass Sie Dinge anders oder in einer unterschiedlichen Reihenfolge erledigen.

Ebenso wird die spezifische Methodik, die Sie zum Laden von Modellen und anderen Informationen und zur Einrichtung Ihrer WebGL-Daten—Texturen, Vertex-Puffer, Shader usw.—verwenden, stark variieren, je nach Ihren Bedürfnissen, welchen Frameworks Sie verwenden und dergleichen.

## Wichtige Wartungsereignisse der Sitzung

Im Verlauf Ihrer WebXR-Sitzung können Sie eine Reihe von Ereignissen erhalten, die Änderungen am Status der Sitzung anzeigen oder Sie auf Dinge hinweisen, die Sie tun müssen, um die Sitzung ordnungsgemäß am Laufen zu halten.

### Erkennung von Änderungen am Sichtbarkeitszustand der Sitzung

Wenn sich der Sichtbarkeitszustand der `XRSession` ändert—zum Beispiel, wenn die Sitzung ausgeblendet oder angezeigt wird oder wenn der Benutzer den Fokus auf einen anderen Kontext gelegt hat—erhält die Sitzung ein {{domxref("XRSession.visibilitychange_event", "visibilitychange")}}-Ereignis.

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

Dieses Beispiel ändert eine Variable `myFrameRate` je nach Sichtbarkeitszustand, wenn er sich ändert. Vermutlich verwendet der Renderer diesen Wert, um zu berechnen, wie oft neue Frames gerendert werden, während die Animationsschleife fortschreitet, und rendert dabei umso seltener, je "verschwommener" die Szene wird.

### Erkennung von Rücksetzungen des Referenzraums

Gelegentlich können Diskontinuitäten oder Sprünge im [nativen Ursprung](/de/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces) auftreten, während die Position des Nutzers in der Welt verfolgt wird. Die häufigsten Szenarien, in denen dies passiert, sind, wenn der Benutzer eine Neukalibrierung seines XR-Gerätes anfordert oder wenn eine Störung oder ein Fehler im Datenfluss der vom XR-Gerät empfangenen Tracking-Daten auftritt. Diese Situationen führen dazu, dass der native Ursprung abrupt durch die Distanz und den Richtungswinkel springt, der notwendig ist, um den nativen Ursprung wieder in Einklang mit der Position und der Blickrichtung des Nutzers zu bringen.

Wenn dies passiert, wird ein {{domxref("XRReferenceSpace.reset_event", "reset")}}-Ereignis an die {{domxref("XRReferenceSpace")}} der Sitzung gesendet. Die {{domxref("XRReferenceSpaceEvent.transform", "transform")}}-Eigenschaft des Ereignisses ist ein {{domxref("XRRigidTransform")}}, das die Transformation beschreibt, die benötigt wird, um den nativen Ursprung neu auszurichten.

> [!NOTE]
> Das `reset`-Ereignis wird an der {{domxref("XRReferenceSpace")}}, nicht an der {{domxref("XRSession")}} ausgelöst!

Ein weiterer häufiger Grund für `reset`-Ereignisse ist, wenn ein begrenzter Referenzraum (`bounded-floor`) seine Geometrie, wie sie in der Eigenschaft {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} der {{domxref("XRBoundedReferenceSpace")}} angegeben ist, ändert.

Für häufigere Ursachen von Rücksetzungen des Referenzraums und weiterführende Details sowie Beispielcode siehe die Dokumentation zu dem {{domxref("XRReferenceSpace.reset_event", "reset")}}-Ereignis.

### Erkennung, wenn sich die verfügbaren WebXR-Eingabesteuerelemente ändern

WebXR pflegt eine Liste von Eingabesteuerelementen, die spezifisch für das WebXR-System sind. Diese Geräte umfassen Dinge wie die Handcontroller, Bewegungssensor-Kameras, bewegungsempfindliche Handschuhe und andere Feedback-Geräte. Wenn der Benutzer ein WebXR-Controller-Gerät verbindet oder trennt, wird das {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis an die `XRSession` gesendet. Dies ist eine Gelegenheit, den Benutzer über die Verfügbarkeit des Geräts zu informieren, es auf Eingaben zu überwachen, Konfigurationsoptionen anzubieten oder was auch immer Sie damit tun müssen.

## Beenden der WebXR-Sitzung

Wenn die VR- oder AR-Sitzung des Benutzers endet, wird die Sitzung beendet. Der Abschluss einer {{domxref("XRSession")}} kann entweder dadurch geschehen, dass die Sitzung selbst entscheidet, dass es Zeit ist, herunterzufahren (z.B. wenn der Benutzer sein XR-Gerät ausschaltet), weil der Benutzer eine Schaltfläche geklickt hat, um die Sitzung zu beenden, oder eine andere Situation, die für Ihre Anwendung angemessen ist.

Hier besprechen wir sowohl, wie man einen Shutdown der WebXR-Sitzung anfordert, als auch, wie man erkennt, wann die Sitzung beendet ist, sei es auf Ihre Anfrage hin oder auf andere Weise.

### Herunterfahren der Sitzung

Um die WebXR-Sitzung sauber herunterzufahren, wenn Sie damit fertig sind, sollten Sie die {{domxref("XRSession.end", "end()")}}-Methode der Sitzung aufrufen. Dies gibt ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das Sie verwenden können, um zu erfahren, wann der Shutdown abgeschlossen ist.

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* Zu diesem Zeitpunkt ist WebXR vollständig heruntergefahren */
  }
}
```

Wenn `shutdownXR()` zu seinem Aufrufer zurückkehrt, ist die WebXR-Sitzung vollständig und sicher heruntergefahren.

Wenn Sie Arbeiten haben, die erledigt werden müssen, wenn die Sitzung endet, wie das Freigeben von Ressourcen und dergleichen, sollten Sie diese Arbeiten in Ihrem {{domxref("XRSession.end_event", "end")}}-Ereignishandler erledigen, anstatt in Ihrem Hauptcode. So kümmern Sie sich um die Bereinigung, unabhängig davon, ob der Shutdown automatisch oder manuell ausgelöst wurde.

### Erkennung, wann die Sitzung beendet ist

Wie bereits festgestellt, können Sie erkennen, wann die WebXR-Sitzung beendet—sei es, weil Sie ihre {{domxref("XRSession.end", "end()")}}-Methode aufgerufen haben, der Benutzer sein Headset ausgeschaltet hat oder ein nicht behebbarer Fehler im XR-System aufgetreten ist—indem Sie auf das {{domxref("XRSession.end_event", "end")}}-Ereignis achten, das an die {{domxref("XRSession")}} gesendet wird.

```js
session.onend = (event) => {
  /* die Sitzung ist heruntergefahren */

  freeResources();
};
```

Hier wird, wenn die Sitzung beendet ist und das `end`-Ereignis empfangen wird, eine `freeResources()`-Funktion aufgerufen, um die zuvor zugewiesenen und/oder geladenen Ressourcen für die Handhabung der XR-Präsentation freizugeben. Indem `freeResources()` im `end`-Ereignishandler aufgerufen wird, rufen wir es sowohl auf, wenn der Benutzer auf eine Schaltfläche klickt, die einen Shutdown auslöst, wie durch Aufruf der oben gezeigten `shutdownXR()`-Funktion, _als auch_ wenn die Sitzung automatisch endet, sei es aufgrund eines Fehlers oder aus einem anderen Grund.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Standpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
