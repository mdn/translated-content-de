---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Setups verfügen über Controller, die mit dem Headset zusammenarbeiten. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [controller pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wird durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. Die WebVR wurde nie als Standard verabschiedet, wurde von sehr wenigen Browsern implementiert und standardmäßig aktiviert sowie unterstützte nur eine geringe Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein aufkommendes, aber sehr interessantes neues Merkmal der Web-Plattform, das es Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu schaffen. Sie ermöglicht den Zugriff auf VR-Headsets, die mit Ihrem Computer verbunden sind, als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte, die manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten abzufragen (z.B. Orientierung und Position), die zur Aktualisierung des Displays in jedem Frame der Animationsschleife verwendet werden können, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie bereits mit den Grundlagen der WebVR API vertraut sein — lesen Sie zuerst [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie das noch nicht getan haben. Dieser Artikel enthält auch Details zur Browser-Unterstützung und den erforderlichen Hardware-Anforderungen.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine recht gut unterstützte API, die Entwicklern den Zugriff auf Gamepads/Controller ermöglicht, die mit Ihrem Computer verbunden sind, und die Steuerung von Web-Apps damit erlaubt. Die grundlegende Gamepad API bietet Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die dann abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Sticks (Achsen) zu einem beliebigen Zeitpunkt bewegt werden, usw.

Sie können mehr über die grundlegende Nutzung der Gamepad API in [Using the Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API) erfahren.

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bereitgestellt werden, die Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, Kontrolle über haptische Aktuatoren (z.B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in den Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF (sechs Freiheitsgrade) Controller bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten — sie können eine VR-Szene und deren Objekte sowohl durch Bewegung als auch Rotation manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (drei Freiheitsgrade) Controller bieten Orientierung, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream Controller, der gedreht werden kann, um auf verschiedene Dinge im 3D-Raum wie ein Laserpointer zu zeigen, sich aber nicht innerhalb einer 3D-Szene bewegen kann.

## Grundlegender Controller-Zugriff

Nun kommen wir zu etwas Code. Schauen wir uns zuerst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Es gibt hier ein paar ungewöhnliche Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein einfaches Beispiel erstellt, um dies zu demonstrieren — siehe unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode ([sehen Sie es auch live hier](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen zu den VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

### Abrufen der Displayinformationen

Der erste wichtige Code sieht folgendermaßen aus:

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

Hier verwenden wir zuerst eine Tracking-Variable, `initialRun`, um festzuhalten, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie werden später mehr darüber erfahren. Als nächstes prüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir sehen, ob die Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) vorhanden sind. Falls ja, führen wir unsere benutzerdefinierte `reportDisplays()`-Funktion aus, um den Prozess zu starten. Diese Funktion sieht folgendermaßen aus:

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

Diese Funktion verwendet zuerst die auf Versprechen basierende Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte enthält, die die verbundenen Displays repräsentieren. Anschließend druckt es die `[`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId)` und `[`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName)` Werte jedes Displays aus sowie eine Reihe nützlicher Werte, die im zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays enthalten sind. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), die es Ihnen ermöglichen zu erkennen, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann, und entsprechend Ihre App einzurichten.

Die letzte Zeile in dieser Funktion ist ein [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Aufruf, der die `reportGamepads()`-Funktion nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir dies tun? Erstens: VR-Controller sind erst bereit, nachdem ihr zugehöriges VR-Headset aktiv ist, daher müssen wir dies nach dem Aufruf von `getVRDisplays()` tun und nachdem die Anzeigeinformationen zurückgegeben wurden. Zweitens: Die Gamepad-API ist viel älter als die WebVR-API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn man nicht eine Weile wartet, könnten die zurückgegebenen Informationen ungenau sein (zumindest war dies das Ergebnis unserer Tests).

### Abrufen der Gamepad-Informationen

Die `reportGamepads()`-Funktion sieht folgendermaßen aus:

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
      }),
      listItem.firstChild,
    ).textContent = `Gamepad ${gp.index}`;
    list.appendChild(listItem);
  }
  initialRun = false;
}
```

Dies funktioniert in ähnlicher Weise wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Versprechen basierenden `getGamepads()`-Methode, durchlaufen dann jedes einzelne und drucken für jedes Informationen aus:

- Die [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)-Eigenschaft ist dieselbe wie die `displayId` des mit dem Controller verbundenen Headsets und daher nützlich, um Controller- und Headset-Informationen miteinander zu verknüpfen.
- Die [`Gamepad.index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft ist ein einzigartiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der im Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir dessen Länge zurück, damit wir sehen können, wie viele jede hat.
- Schließlich zeigen wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) an, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass im Fall von Gamepads diese Werte auf dem Pose-Objekt und nicht dem Fähigkeiten-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, einen Klassennamen `gamepad` gegeben haben. Wir erklären später, wofür dies ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Lauf jetzt vorbei ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, schauen wir uns die mit Gamepads verbundenen Ereignisse an. Es gibt zwei, die uns interessieren — [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) — und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels fügen wir zuerst die `removeGamepads()`-Funktion hinzu:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

Diese Funktion holt sich Referenzen zu allen Listenelementen mit dem Klassennamen `gamepad` und entfernt sie aus dem DOM. Dann führt sie `reportGamepads()` erneut aus, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

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

Wir haben hier `setTimeout()`-Aufrufe an Ort und Stelle — wie wir es mit dem Initialisierungscode oben im Skript getan haben — um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten — Sie werden sehen, dass der Timeout im `gamepadconnected`-Handler nur ausgeführt wird, wenn `initialRun` `false` ist. Das liegt daran, dass, wenn Ihre Gamepads beim ersten Laden des Dokuments verbunden sind, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher werden `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler erst nach dem Initialdurchlauf und nicht währenddessen ausführen. Dafür ist `initialRun` gedacht.

## Einführung eines echten Demos

Nun schauen wir uns die Gamepad API in einer echten WebVR-Demo an. Sie finden dieses Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([sehen Sie es auch live hier](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

In genau der gleichen Weise wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details), rendert es einen sich drehenden 3D-Würfel, den Sie wählen können, in einem VR-Display zu präsentieren. Der einzige Unterschied besteht darin, dass in diesem Demo der Würfel im VR-Präsentationsmodus mit einem VR-Controller bewegt werden kann (im ursprünglichen Demo bewegt sich der Würfel, wenn Sie Ihr VR-Headset bewegen).

Wir werden die Codedifferenzen in dieser Version unten untersuchen — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

Innerhalb der `drawVRScene()`-Funktion finden Sie diesen Codeabschnitt:

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

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern das erste erkannte Gamepad in der Variablen `gp`. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir einfach die anderen.

Als nächstes holen wir uns das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller und speichern die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leicht zugänglich sind. Außerdem zeigen wir die Post-Stats für diesen Frame im DOM mithilfe der `displayPoseStats()`-Funktion an. All dies wird nur durchgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo fehlerhaft funktioniert, wenn wir unser Gamepad nicht angeschlossen haben.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm entsprechend der [`position`](/de/docs/Web/API/GamepadPose/position) und [`orientation`](/de/docs/Web/API/GamepadPose/orientation) Daten, die vom verbundenen Controller empfangen werden. Diese Werte (in `curPos` und `curOrient` gespeichert) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], das X ist, und \[1], das Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und es Positionswerte zurückgeben kann (`gpPose.hasPosition`), was einen 6DoF-Controller anzeigt, modifizieren wir die Würfelposition mithilfe von Positions- und Orientierungswerten. Zeigt nur das erste an, dass ein 3DoF-Controller vorliegt, modifizieren wir die Würfelposition ausschließlich mithilfe der Orientierungswerte. Wenn kein Gamepad verbunden ist, ändern wir die Würfelposition gar nicht.

### Anzeige der Gamepad-Pose-Daten

In der `displayPoseStats()`-Funktion holen wir alle Daten, die wir anzeigen möchten, aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das ihr übergeben wird, und drucken sie in das UI-Panel, das im Demo zum Anzeigen solcher Daten existiert:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad-Erweiterungen verwenden können, um VR-Controller in WebVR-Apps zu verwenden. In einer echten App hätten Sie wahrscheinlich ein viel komplexeres Steuerungssystem im Einsatz, mit Steuerungen, die den Tasten auf den VR-Controllern zugewiesen sind, und das Display würde gleichzeitig sowohl durch die Display-Pose als auch durch die Controller-Posen beeinflusst werden. Hier wollten wir jedoch nur die reinen Teile der Gamepad-Erweiterungen isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
