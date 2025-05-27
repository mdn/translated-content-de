---
title: Verwenden von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Konfigurationen verfügen über Controller, die zusammen mit dem Headset verwendet werden können. Diese können in WebVR-Anwendungen über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die zusätzliche API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr bietet. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine geringe Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein neues, aber sehr interessantes Feature der Webplattform, das es Entwicklern ermöglicht, webbasierte virtuelle Realitätserlebnisse zu schaffen. Dies geschieht, indem Zugriff auf VR-Headsets, die mit Ihrem Computer verbunden sind, als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte bereitgestellt wird, die manipuliert werden können, um die Präsentation beim Display zu starten und zu stoppen, Bewegungsdaten (z.B. Orientierung und Position) abzufragen, die verwendet werden können, um das Display bei jedem Frame der Animationsschleife zu aktualisieren, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie sich bereits mit den Grundlagen der WebVR API vertraut gemacht haben – lesen Sie zuerst [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben. Dort finden Sie auch Informationen zur Browser-Unterstützung und zur erforderlichen Hardware-Einrichtung.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine ziemlich gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die mit Ihrem Computer verbunden sind, und diese für die Steuerung von Webanwendungen zu verwenden. Die grundlegende Gamepad API ermöglicht den Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die dann abgefragt werden können, um festzustellen, welche Tasten gedrückt werden, welche Joysticks (Achsen) bewegt werden, usw.

Sie können mehr über die grundlegende Nutzung der Gamepad API in [Using the Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API) erfahren.

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bereitgestellt werden, die den Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, Steuerung über haptische Aktuatoren (z.B. Vibrationsgeräte) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in Firefox 55+ Beta/Nightly-Kanälen unterstützt und standardmäßig aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF-Controller (sechs Freiheitsgrade) bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten – sie können eine VR-Szene und die darin enthaltenen Objekte sowohl durch Bewegung als auch durch Drehung manipulieren. Ein gutes Beispiel sind die HTC VIVE-Controller.
- 3DoF-Controller (drei Freiheitsgrade) bieten Orientierungs-, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream-Controller, der wie ein Laserpointer gedreht werden kann, um auf verschiedene Dinge im 3D-Raum zu zeigen, sich jedoch nicht innerhalb einer 3D-Szene bewegen kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Hier gibt es einige seltsame Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein Beispiel erstellt, um dies zu demonstrieren – sehen Sie sich unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode an ([sehen Sie es auch live hier](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen über die VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

### Abrufen der Display-Informationen

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

Hier verwenden wir zunächst eine Tracking-Variable, `initialRun`, um festzuhalten, dass dies das erste Mal ist, dass wir die Seite geladen haben. Mehr darüber später. Als Nächstes überprüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir die Existenz der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) überprüfen. Wenn ja, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht so aus:

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

Diese Funktion verwendet zunächst die versprechenbasierte Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte darstellt, die die verbundenen Displays darstellen. Anschließend werden die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) jedes Displays sowie eine Reihe nützlicher Werte ausgegeben, die im zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays enthalten sind. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), die es Ihnen ermöglichen, zu erkennen, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann und Ihre App entsprechend einzurichten.

Die letzte Zeile in dieser Funktion ist ein Anruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), der die `reportGamepads()`-Funktion nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Zuerst einmal werden VR-Controller nur bereit sein, nachdem ihr zugehöriges VR-Headset aktiv ist, daher müssen wir dies aufrufen, nachdem `getVRDisplays()` aufgerufen wurde und die Display-Informationen zurückgegeben hat. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht versprechenbasiert. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt einfach die `Gamepad`-Objekte sofort zurück – sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht eine Weile warten, sind die zurückgegebenen Informationen möglicherweise nicht genau (zumindest war dies das, was wir in unseren Tests festgestellt haben).

### Abrufen der Gamepad-Informationen

Die `reportGamepads()`-Funktion sieht so aus:

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

Diese funktioniert ähnlich wie `reportDisplays()` – wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht versprechenbasierten `getGamepads()`-Methode, durchlaufen dann jedes einzelne und geben Informationen zu jedem aus:

- Die [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)-Eigenschaft ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen zusammenzuführen.
- Die [`Gamepad.index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft ist ein einzigartiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller voraussichtlich gehalten wird.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der in dem Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir deren Länge zurück, um zu sehen, wie viele verfügbar sind.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass im Fall von Gamepads diese Werte im Pose-Objekt verfügbar sind, nicht im Fähigkeiten-Objekt.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, einen Klassennamen von `gamepad` gegeben haben. Wir werden später erklären, wofür das ist.

Das letzte, was hier zu tun ist, ist die `initialRun`-Variable auf `false` zu setzen, da der erste Durchlauf jetzt vorbei ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, betrachten wir die mit Gamepad verbundenen Ereignisse. Es gibt zwei, die uns interessieren müssen – [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) – und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels fügen wir zunächst die `removeGamepads()`-Funktion ein:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (const li of gpLi) {
    list.removeChild(li);
  }
  reportGamepads();
}
```

Diese Funktion greift auf alle Listenelemente mit dem Klassennamen `gamepad` zu und entfernt sie aus dem DOM. Dann wird `reportGamepads()` erneut ausgeführt, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

`removeGamepads()` wird jedes Mal ausgeführt, wenn ein Gamepad verbunden oder getrennt wird, über die folgenden Ereignishandler:

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

Wir haben `setTimeout()`-Anrufe hier platziert – wie wir es mit dem Initialisierungscode am Anfang des Skripts getan haben – um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten – Sie werden sehen, dass im `gamepadconnected`-Handler das Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Dies liegt daran, dass, wenn Ihre Gamepads beim ersten Laden des Dokuments verbunden sind, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher werden `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher wollen wir `removeGamepads()` im `gamepadconnected`-Handler erst nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` gedacht.

## Einführung in eine echte Demo

Schauen wir uns nun an, wie die Gamepad API in einer echten WebVR-Demo verwendet wird. Sie finden diese Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([sehen Sie sie auch live hier](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Genau wie bei unserem [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details), wird hier ein sich drehender 3D-Würfel gerendert, den Sie in einem VR-Display präsentieren können. Der einzige Unterschied besteht darin, dass diese Demo Ihnen im VR-Präsentationsmodus ermöglicht, den Würfel zu bewegen, indem Sie einen VR-Controller bewegen (die ursprüngliche Demo bewegt den Würfel, wenn Sie Ihr VR-Headset bewegen).

Wir werden die Unterscheidungen im Code dieser Version unten untersuchen – siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

Innerhalb der `drawVRScene()`-Funktion finden Sie diesen Codeblock:

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

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern dann das erste erkannte Gamepad in der `gp`-Variable. Da wir für diese Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Als nächstes erhalten wir das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller, der in `gp` gespeichert ist (durch Abfragen von [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose)), und speichern die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leicht zugänglich sind. Wir zeigen auch die Pose-Statistiken für diesen Frame im DOM mithilfe der `displayPoseStats()`-Funktion an. All dies wird nur gemacht, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass die Demo Fehler ausgibt, wenn unser Gamepad nicht angeschlossen ist.

Etwas später im Code können Sie diesen Block finden:

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

Hier ändern wir die Position des Würfels auf dem Bildschirm entsprechend den von dem verbundenen Controller empfangenen [`position`](/de/docs/Web/API/GamepadPose/position) und [`orientation`](/de/docs/Web/API/GamepadPose/orientation)-Daten. Diese Werte (gespeichert in `curPos` und `curOrient`) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier benutzen wir nur \[0], das X, und \[1], das Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und es Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, ändern wir die Würfelposition mit den Positions- und Orientierungswerten. Wenn nur ersteres zutrifft, was auf einen 3DoF-Controller hinweist, ändern wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad angeschlossen ist, ändern wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der `displayPoseStats()`-Funktion holen wir alle Daten, die wir anzeigen möchten, aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das dort übergeben wird, und drucken sie in das UI-Panel, das in der Demo für die Anzeige solcher Daten existiert:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad Extensions verwenden, um VR-Controller in WebVR-Anwendungen zu nutzen. In einer echten Anwendung hätten Sie wahrscheinlich ein viel komplexeres Steuerungssystem im Einsatz, bei dem Steuerungen den Tasten auf den VR-Controllern zugewiesen wären und das Display sowohl von der Display-Pose als auch den Controller-Posen gleichzeitig beeinflusst würde. Hier wollten wir jedoch nur die reinen Gamepad Extensions-Teile davon isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Steuerungen implementieren mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
