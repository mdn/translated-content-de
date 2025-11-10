---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("WebVR API")}}

Viele WebVR-Hardwarekonfigurationen verfügen über Controller, die mit dem Headset zusammenarbeiten. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die API-Funktionen zum Zugriff auf [Controller-Haltung](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wird durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist eine entstehende, aber sehr interessante neue Funktion der Webplattform, die es Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu erstellen. Sie tut dies, indem sie Zugriff auf VR-Headsets gewährt, die mit Ihrem Computer als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte verbunden sind, die manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten (z. B. Orientierung und Position) abzufragen, die verwendet werden können, um das Display bei jedem Frame der Animationsschleife zu aktualisieren, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie sich wirklich bereits mit den Grundlagen der WebVR API vertraut gemacht haben — lesen Sie [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben. Dieser Artikel enthält auch Informationen zur Browserunterstützung und den erforderlichen Hardwarekonfigurationen.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine relativ gut unterstützte API, die Entwicklern den Zugriff auf Gamepads/Controller ermöglicht, die mit Ihrem Computer verbunden sind, und die Steuerung von Web-Apps damit ermöglicht. Die grundlegende Gamepad API bietet Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Steuerknüppel (Achsen) zu einem bestimmten Zeitpunkt bewegt werden usw.

Weitere Informationen zur grundlegenden Verwendung der Gamepad API finden Sie unter [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die die [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bietet, die Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, Kontrolle über haptische Aktuatoren (z. B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in den Beta-/Nightly-Kanälen von Firefox 55+ standardmäßig unterstützt und aktiviert.

## Controller-Typen

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF (sechs Freiheitsgrade)-Controller bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte mit Bewegung und auch Rotation manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (drei Freiheitsgrade)-Controller bieten Orientierung, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream-Controller, der gedreht werden kann, um auf verschiedene Objekte im 3D-Raum wie ein Laserpointer zu zeigen, aber nicht innerhalb einer 3D-Szene bewegt werden kann.

## Grundlegender Zugriff auf Controller

Kommen wir nun zu etwas Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Es gibt hier ein paar seltsame Nuancen zu beachten, sodass es sich lohnt, einen Blick darauf zu werfen.

Wir haben ein Beispiel geschrieben, um dies zu demonstrieren — siehe unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode ([siehe es auch hier live](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Diese Demo gibt Informationen zu den VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

### Anzeigeinformationen abrufen

Der erste bemerkenswerte Code ist wie folgt:

```js
let initialRun = true;

if (navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = "WebVR API and Gamepad API supported.";
  reportDisplays();
} else {
  info.textContent =
    "WebVR API and/or Gamepad API not supported by this browser.";
}
```

Hier verwenden wir zunächst eine Tracking-Variable, `initialRun`, um festzustellen, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie erfahren später mehr darüber. Als nächstes überprüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir auf das Vorhandensein der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) prüfen. Falls ja, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht wie folgt aus:

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    console.log(`${displays.length} displays`);
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement("li");
      listItem.innerText = `
VR Display ID: ${display.displayId}
VR Display Name: ${display.displayName}
Display can present content: ${cap.canPresent}
Display is separate from the computer's main display: ${cap.hasExternalDisplay}
Display can return position info: ${cap.hasPosition}
Display can return orientation info: ${cap.hasOrientation}
Display max layers: ${cap.maxLayers}`;
      listItem.insertBefore(
        document.createElement("strong"),
        listItem.firstChild,
      ).textContent = `Display ${i + 1}`;
      list.appendChild(listItem);
    });

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}
```

Diese Funktion verwendet zunächst die auf Versprechen basierende Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die die verbundenen Displays repräsentieren. Anschließend druckt es die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) jedes Displays und eine Reihe nützlicher Werte, die im zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays enthalten sind. Die nützlichsten dieser Werte sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), die es erlauben zu erkennen, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann und die App entsprechend einzurichten.

Die letzte Zeile in dieser Funktion ist ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Aufruf, der die Funktion `reportGamepads()` nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir dies tun? Zunächst sind VR-Controller erst bereit, nachdem ihr zugehöriges VR-Headset aktiv ist, sodass wir dies erst nach dem Aufruf von `getVRDisplays()` tun müssen, nachdem die Displayinformationen zurückgegeben wurden. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die Methode `getGamepads()` synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn man nicht eine Weile wartet, könnten die zurückgegebenen Informationen möglicherweise ungenau sein (zumindest haben wir das in unseren Tests herausgefunden).

### Gamepad-Informationen abrufen

Die Funktion `reportGamepads()` sieht wie folgt aus:

```js
function reportGamepads() {
  const gamepads = navigator.getGamepads();
  console.log(`${gamepads.length} controllers`);
  for (const gp of gamepads) {
    const listItem = document.createElement("li");
    listItem.classList = "gamepad";
    listItem.innerText = `
Associated with VR Display ID: ${gp.displayId}
Gamepad associated with which hand: ${gp.hand}
Available haptic actuators: ${gp.hapticActuators.length}
Gamepad can return position info: ${gp.pose.hasPosition}
Gamepad can return orientation info: ${gp.pose.hasOrientation}`;
    listItem.insertBefore(
      document.createElement("strong"),
      listItem.firstChild,
    ).textContent = `Gamepad ${gp.index}`;
    list.appendChild(listItem);
  }
  initialRun = false;
}
```

Dies funktioniert ähnlich wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Versprechen basierenden `getGamepads()`-Methode, durchlaufen dann jedes und drucken Informationen über jedes aus:

- Die Eigenschaft [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen zusammenzuführen.
- Die Eigenschaft [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) ist ein eindeutiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der im Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir seine Länge zurück, um zu sehen, wie viele jeder verfügbar hat.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass im Fall von Gamepads diese Werte am Pose-Objekt und nicht am Fähigkeiten-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listeneintrag, der Controller-Informationen enthält, einen Klassennamen `gamepad` gegeben haben. Wir werden später erklären, wofür das ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun vorbei ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, werfen wir einen Blick auf die mit Gamepads verbundenen Ereignisse. Es gibt zwei, die uns interessieren müssen — [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) — und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels fügen wir zunächst die Funktion `removeGamepads()` ein:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (const li of gpLi) {
    list.removeChild(li);
  }
  reportGamepads();
}
```

Diese Funktion holt Referenzen zu allen Listeneinträgen mit dem Klassennamen `gamepad` und entfernt sie aus dem DOM. Dann führt sie `reportGamepads()` aus, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

`removeGamepads()` wird jedes Mal ausgeführt, wenn ein Gamepad verbunden oder getrennt wird, über die folgenden Event-Handler:

```js
window.addEventListener("gamepadconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} connected.`;
  if (!initialRun) {
    setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener("gamepaddisconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} disconnected.`;
  setTimeout(removeGamepads, 1000);
});
```

Wir haben hier `setTimeout()`-Aufrufe platziert — wie bei dem Initialisierungscode am Anfang des Skripts — um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten — Sie werden sehen, dass innerhalb des `gamepadconnected`-Handlers der Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Das liegt daran, dass, wenn Ihre Gamepads beim ersten Laden des Dokuments verbunden sind, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher werden `removeGamepads()`/`reportGamepads()` mehrfach ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler nur nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` da.

## Einführung in eine echte Demo

Schauen wir uns nun die Gamepad API an, die in einer echten WebVR-Demo verwendet wird. Sie finden diese Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([siehe es auch hier live](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Auf genau die gleiche Weise wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details), rendert dies einen rotierenden 3D-Würfel, den Sie in einem VR-Display anzeigen können. Der einzige Unterschied ist, dass in diesem Demo, während Sie im VR-Anzeigemodus sind, es Ihnen ermöglicht wird, den Würfel durch Bewegen eines VR-Controllers zu bewegen (das Original-Demo bewegt den Würfel, während Sie Ihr VR-Headset bewegen).

Wir werden die Codeunterschiede in dieser Version unten näher erläutern — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

Innerhalb der Funktion `drawVRScene()` finden Sie diesen Codeabschnitt:

```js
const gamepads = navigator.getGamepads();
const gp = gamepads[0];

if (gp) {
  const gpPose = gp.pose;
  const curPos = gpPose.position;
  const curOrient = gpPose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}
```

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads), speichern dann das erste erkannte Gamepad in der Variablen `gp`. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Als nächstes holen wir das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller, das in `gpPose` gespeichert ist (indem wir [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) abfragen), und speichern auch die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leicht zugänglich sind. Wir zeigen auch die Post-Statistiken für diesen Frame im DOM mit der Funktion `displayPoseStats()` an. All dies wird nur ausgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo einen Fehler erzeugt, wenn unser Gamepad nicht verbunden ist.

Etwas später im Code finden Sie diesen Block:

```js
if (gp && gpPose.hasPosition) {
  mvTranslate([
    0.0 + curPos[0] * 15 - curOrient[1] * 15,
    0.0 + curPos[1] * 15 + curOrient[0] * 15,
    -15.0 + curPos[2] * 25,
  ]);
} else if (gp) {
  mvTranslate([0.0 + curOrient[1] * 15, 0.0 + curOrient[0] * 15, -15.0]);
} else {
  mvTranslate([0.0, 0.0, -15.0]);
}
```

Hier verändern wir die Position des Würfels auf dem Bildschirm entsprechend den [`position`](/de/docs/Web/API/GamepadPose/position) und [`orientation`](/de/docs/Web/API/GamepadPose/orientation)-Daten, die vom verbundenen Controller empfangen werden. Diese Werte (gespeichert in `curPos` und `curOrient`) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], was X ist, und \[1], was Y ist).

Wenn die Variable `gp` ein `Gamepad`-Objekt enthält und es Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, ändern wir die Würfelposition mit den Positions- und Orientierungswerten. Wenn nur Letzteres zutrifft, was auf einen 3DoF-Controller hinweist, ändern wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad verbunden ist, ändern wir die Würfelposition überhaupt nicht.

### Anzeigen der Gamepad-Haltungsdaten

In der Funktion `displayPoseStats()` holen wir alle Daten, die wir anzeigen möchten, aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das in sie übergeben wird, und drucken sie in das UI-Panel, das in der Demo für die Anzeige solcher Daten existiert:

```js
function displayPoseStats(pose) {
  const pos = pose.position;

  const formatCoords = ([x, y, z]) =>
    `x ${x.toFixed(3)}, y ${y.toFixed(3)}, z ${z.toFixed(3)}`;

  posStats.textContent = pose.hasPosition
    ? `Position: ${formatCoords(pose.position)}`
    : "Position not reported";

  orientStats.textContent = pose.hasOrientation
    ? `Orientation: ${formatCoords(pose.orientation)}`
    : "Orientation not reported";

  linVelStats.textContent = `Linear velocity: ${formatCoords(
    pose.linearVelocity,
  )}`;
  angVelStats.textContent = `Angular velocity: ${formatCoords(
    pose.angularVelocity,
  )}`;

  linAccStats.textContent = pose.linearAcceleration
    ? `Linear acceleration: ${formatCoords(pose.linearAcceleration)}`
    : "Linear acceleration not reported";

  angAccStats.textContent = pose.angularAcceleration
    ? `Angular acceleration: ${formatCoords(pose.angularAcceleration)}`
    : "Angular acceleration not reported";
}
```

## Zusammenfassung

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad-Erweiterungen verwenden, um VR-Controller innerhalb von WebVR-Apps zu verwenden. In einer echten App hätten Sie wahrscheinlich ein viel komplexeres Kontrollsystem im Einsatz, mit Steuerungsmöglichkeiten, die den Tasten auf den VR-Controllern zugewiesen sind, und die Anzeige würde gleichzeitig von der Haltung des Displays und der Haltung der Controller beeinflusst werden. Hier wollten wir jedoch nur die reinen Teile der Gamepad-Erweiterungen isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
