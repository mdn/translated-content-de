---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Konfigurationen verfügen über Controller, die mit dem Headset verwendet werden. Diese können in WebVR-Anwendungen über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und insbesondere die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügen. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR-API wird durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

## Die WebVR-API

Die [WebVR-API](/de/docs/Web/API/WebVR_API) ist eine aufstrebende, aber sehr interessante neue Funktion der Webplattform, die es Entwicklern ermöglicht, webbasierte virtuelle Realitätserfahrungen zu erstellen. Sie ermöglicht den Zugriff auf VR-Headsets, die mit Ihrem Computer als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte verbunden sind, die manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten abzufragen (z. B. Orientierung und Position), die zur Aktualisierung des Displays in jedem Frame der Animationsschleife verwendet werden können, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie bereits mit den Grundlagen der WebVR-API vertraut sein. Lesen Sie daher zuerst [Die WebVR-API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), falls Sie dies noch nicht getan haben. Dort finden Sie auch Informationen zur Browser-Kompatibilität und zur erforderlichen Hardware-Konfiguration.

## Die Gamepad-API

Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) ist eine gut unterstützte API, die es Entwicklern ermöglicht, Zugriff auf Gamepads/Controller zu erhalten, die mit Ihrem Computer verbunden sind, und diese zur Steuerung von Webanwendungen zu verwenden. Die grundlegende Gamepad-API bietet Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten zu einem beliebigen Zeitpunkt gedrückt und welche Daumensticks (Achsen) bewegt werden usw.

Weitere Informationen zur grundlegenden Verwendung der Gamepad-API finden Sie unter [Die Gamepad-API verwenden](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Steuerelemente mit der Gamepad-API implementieren](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bereitgestellt werden, die den Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, die Steuerung über haptische Aktuatoren (z. B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, auf die Sie mit VR-Hardware stoßen werden:

- 6DoF (six-degrees-of-freedom)-Controller bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten – sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegung, aber auch durch Rotation manipulieren. Ein gutes Beispiel sind die HTC VIVE-Controller.
- 3DoF (three-degrees-of-freedom)-Controller bieten nur Orientierungsdaten, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream-Controller, der in einem 3D-Raum wie ein Laserpointer gedreht werden kann, um auf verschiedene Dinge zu zeigen, aber nicht innerhalb einer 3D-Szene bewegt werden kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad-API Zugriff auf VR-Controller erhalten. Es gibt ein paar ungewöhnliche Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein Beispiel erstellt, um dies zu demonstrieren – sehen Sie sich unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode an ([sehen Sie es hier auch live](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen zu den VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

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

Hier verwenden wir zuerst eine Tracking-Variable, `initialRun`, um zu notieren, dass dies das erste Mal ist, dass wir die Seite geladen haben. Mehr dazu später. Als Nächstes prüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir auf das Vorhandensein der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) überprüfen. Wenn ja, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht wie folgt aus:

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

Diese Funktion verwendet zuerst die auf Versprechen basierende Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die die verbundenen Displays darstellen. Anschließend druckt sie die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) jedes Displays sowie einige nützliche Werte aus dem zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays aus. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), mit denen Sie feststellen können, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann und Ihre Anwendung entsprechend einrichten können.

Die letzte Zeile, die in dieser Funktion enthalten ist, ist ein Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), der die Funktion `reportGamepads()` nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Zunächst sind VR-Controller erst bereit, wenn ihr zugehöriges VR-Headset aktiv ist, daher müssen wir dies aufrufen, nachdem `getVRDisplays()` aufgerufen wurde und die Displayinformationen zurückgegeben hat. Zweitens ist die Gamepad-API viel älter als die WebVR-API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die Methode `getGamepads()` synchron und gibt die `Gamepad`-Objekte sofort zurück – sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht eine Weile warten, sind die zurückgegebenen Informationen möglicherweise nicht genau (zumindest war dies bei unseren Tests der Fall).

### Abrufen der Gamepad-Informationen

Die Funktion `reportGamepads()` sieht so aus:

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

Diese funktioniert ähnlich wie `reportDisplays()` – wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Versprechen basierenden Methode `getGamepads()` und durchlaufen dann jedes einzelne und drucken Informationen über jede aus:

- Die Eigenschaft [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen zu verknüpfen.
- Die Eigenschaft [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) ist ein eindeutiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der im Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir dessen Länge zurück, damit wir sehen können, wie viele jeweils verfügbar sind.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um anzuzeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass bei Gamepads diese Werte auf dem Pose-Objekt und nicht auf dem Fähigkeiten-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, auch einen Klassennamen `gamepad` gegeben haben. Wir erklären später, wofür dies ist.

Das letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun abgeschlossen ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, betrachten wir die mit Gamepads verbundenen Ereignisse. Es gibt zwei, die uns interessieren – [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) – und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels binden wir zuerst die Funktion `removeGamepads()` ein:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

Diese Funktion holt Referenzen zu allen Listenelementen mit dem Klassennamen `gamepad` und entfernt sie aus dem DOM. Danach wird `reportGamepads()` erneut ausgeführt, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

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

Wir haben hier `setTimeout()`-Aufrufe platziert – wie bei dem Initialisierungscode am Anfang des Skripts – um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten – Sie werden sehen, dass der Timeout innerhalb des `gamepadconnected`-Handlers nur dann ausgeführt wird, wenn `initialRun` `false` ist. Dies liegt daran, dass, wenn Ihre Gamepads beim ersten Laden des Dokuments verbunden sind, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher werden `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` nur innerhalb des `gamepadconnected`-Handlers nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` gedacht.

## Einführung eines echten Demos

Schauen wir uns nun an, wie die Gamepad-API in einem echten WebVR-Demo verwendet wird. Sie können dieses Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) finden ([sehen Sie es auch live hier](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Genau wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (sehen Sie [Die WebVR-API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details) rendert dieses eine sich drehende 3D-Würfel, den Sie auswählen können, um ihn in einem VR-Display anzuzeigen. Der einzige Unterschied besteht darin, dass Sie in diesem Demo im VR-Darstellungsmodus den Würfel bewegen können, indem Sie einen VR-Controller bewegen (im Original-Demo bewegt sich der Würfel, wenn Sie Ihr VR-Headset bewegen).

Wir werden die Codierunterschiede in dieser Version unten erkunden – siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

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

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern das erste erkannte Gamepad in der Variablen `gp`. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Als nächstes holen wir das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller, der in gpPose gespeichert ist (indem wir [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) abfragen), und speichern die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leicht zugänglich sind. Wir zeigen auch die Pose-Statistiken für diesen Frame im DOM mit der `displayPoseStats()`-Funktion an. All dies wird nur durchgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo einen Fehler ausgibt, wenn unser Gamepad nicht verbunden ist.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm gemäß den aus dem verbundenen Controller empfangenen [`position`](/de/docs/Web/API/GamepadPose/position)- und [`orientation`](/de/docs/Web/API/GamepadPose/orientation)-Daten. Diese Werte (gespeichert in `curPos` und `curOrient`) sind `Float32Array`s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], welches X ist, und \[1], welches Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, modifizieren wir die Würfelposition mit den Positions- und Orientierungswerten. Wenn nur letzteres wahr ist, was auf einen 3DoF-Controller hinweist, modifizieren wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad verbunden ist, ändern wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der Funktion `displayPoseStats()` holen wir alle Daten, die wir anzeigen möchten, aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das an sie übergeben wird, und drucken sie dann in das UI-Panel, das im Demo zum Anzeigen solcher Daten existiert:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie man die Gamepad Extensions verwendet, um VR-Controller in WebVR-Anwendungen zu verwenden. In einer echten Anwendung hätten Sie wahrscheinlich ein viel komplexeres Steuerungssystem im Einsatz, bei dem Steuerelemente den Tasten der VR-Controller zugewiesen sind und das Display sowohl von der Display-Pose als auch den Controller-Poses gleichzeitig beeinflusst wird. Hier wollten wir jedoch nur die reinen Gamepad Extensions-Teile isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Die WebVR-API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Steuerelemente mit der Gamepad-API implementieren](/de/docs/Games/Techniques/Controls_Gamepad_API)
