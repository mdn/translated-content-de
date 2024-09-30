---
title: Die Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Setups umfassen Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Anwendungen über die [Gamepad API](/de/docs/Web/API/Gamepad_API) genutzt werden, insbesondere die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions), die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein aufstrebendes, aber sehr interessantes neues Merkmal der Webplattform, das Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu erstellen. Sie ermöglicht den Zugriff auf VR-Headsets, die mit Ihrem Computer verbunden sind, als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte, die manipuliert werden können, um die Darstellung auf dem Display zu starten und zu stoppen, Bewegungsdaten (z.B. Orientierung und Position) abzufragen, die zur Aktualisierung des Displays in jedem Frame der Animationsschleife verwendet werden können, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie bereits mit den Grundlagen der WebVR API vertraut sein — lesen Sie [Die Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben, was auch die Unterstützung durch Browser und die erforderliche Hardware-Einrichtung erläutert.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine recht gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die mit Ihrem Computer verbunden sind, und sie zur Steuerung von Webanwendungen zu verwenden. Die grundlegende Gamepad API bietet Zugang zu verbundenen Controllern als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Thumbsticks (Achsen) bewegt werden, usw.

Weitere Informationen zur grundlegenden Verwendung der Gamepad API finden Sie in [Die Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bereitgestellt werden, die den Zugriff auf erweiterte Controller-Informationen, wie Positions- und Orientierungsdaten, die Steuerung über haptische Aktoren (z.B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in den Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controllern

Bei VR-Hardware gibt es zwei Arten von Controllern, denen Sie begegnen werden:

- 6DoF (Six-Degrees-of-Freedom) Controller bieten Zugriff sowohl auf Positions- als auch auf Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegungen, aber auch durch Drehungen manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (Three-Degrees-of-Freedom) Controller bieten Orientierungs- aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream Controller, der gedreht werden kann, um wie ein Laserpointer auf verschiedene Dinge im 3D-Raum zu zeigen, aber nicht innerhalb einer 3D-Szene bewegt werden kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Sehen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Es gibt hier einige seltsame Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein einfaches Beispiel erstellt, um das zu demonstrieren — siehe unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode ([sehen Sie es hier live laufen](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen über die mit Ihrem Computer verbundenen VR-Displays und Gamepads aus.

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

Hier verwenden wir zuerst eine Tracking-Variable, `initialRun`, um zu vermerken, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie werden später mehr darüber erfahren. Als Nächstes überprüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir das Vorhandensein der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) überprüfen. Wenn dies der Fall ist, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht wie folgt aus:

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

Diese Funktion verwendet zuerst die auf Versprechen basierende Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte enthält, die die verbundenen Displays darstellen. Anschließend gibt sie den `displayId`- und `displayName`-Wert jedes Displays sowie eine Reihe nützlicher Werte des mit dem Display verbundenen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekts aus. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), mit denen Sie feststellen können, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann und Ihre App entsprechend einrichten.

Die letzte Zeile dieser Funktion ist ein [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Aufruf, der die Funktion `reportGamepads()` nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Erstens werden VR-Controller nur dann bereit sein, wenn das zugehörige VR-Headset aktiv ist, daher müssen wir dies aufrufen, nachdem `getVRDisplays()` aufgerufen und die Display-Informationen zurückgegeben hat. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die Methode `getGamepads()` synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht ein wenig warten, sind die zurückgegebenen Informationen möglicherweise nicht genau (zumindest war dies das, was wir in unseren Tests festgestellt haben).

### Abrufen der Gamepad-Informationen

Die Funktion `reportGamepads()` sieht folgendermaßen aus:

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

Diese funktioniert ähnlich wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Versprechen basierenden Methode `getGamepads()`, durchlaufen dann jedes und geben Informationen zu jedem aus:

- Die Eigenschaft [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen zu verknüpfen.
- Die Eigenschaft [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) ist ein einzigartiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der haptischen Aktoren zurück, die im Controller verfügbar sind. Hier geben wir seine Länge zurück, um zu sehen, wie viele jeder verfügbar hat.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass im Fall von Gamepads diese Werte im Pose-Objekt verfügbar sind, nicht im Capabilities-Objekt.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, einen Klassennamen `gamepad` gegeben haben. Wir erklären später, wofür das ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun abgeschlossen ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, schauen wir uns die mit Gamepads verbundenen Ereignisse an. Es gibt zwei, die uns interessieren — [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) — und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels fügen wir zunächst die Funktion `removeGamepads()` ein:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
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

Wir haben `setTimeout()`-Aufrufe hier platziert — wie wir es mit dem Initialisierungscode am Anfang des Skripts gemacht haben — um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Es gibt jedoch noch eine weitere Sache zu beachten — Sie werden sehen, dass im `gamepadconnected`-Handler das Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Dies ist, weil, wenn Ihre Gamepads verbunden sind, wenn das Dokument zuerst geladen wird, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher wird `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler nur nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` da.

## Einführung eines echten Demos

Sehen wir uns nun die Gamepad API an, die in einem echten WebVR-Demo verwendet wird. Sie finden dieses Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([sehen Sie es hier live laufen auch](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Auf genau die gleiche Weise wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Die Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Einzelheiten) rendert es einen sich drehenden 3D-Würfel, den Sie wählen können, um ihn in einem VR-Display darzustellen. Der einzige Unterschied besteht darin, dass, während Sie sich im VR-Darstellungsmodus befinden, dieses Demo Ihnen erlaubt, den Würfel durch Bewegen eines VR-Controllers zu bewegen (das ursprüngliche Demo bewegt den Würfel, während Sie Ihr VR-Headset bewegen).

Wir werden die unterschiedlichen Codeelemente in dieser Version unten erkunden — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

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

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern das erste erkannte Gamepad in der Variable `gp`. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Als Nächstes holen wir uns das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den im `gp` gespeicherten Controller (indem wir [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) abfragen) und speichern auch die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leichter zugänglich sind. Wir geben auch die Pose-Daten für diesen Frame im DOM mit der Funktion `displayPoseStats()` aus. All dies wird nur ausgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo fehlerhaft ist, wenn unser Gamepad nicht angeschlossen ist.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm entsprechend den [`position`](/de/docs/Web/API/GamepadPose/position)- und [`orientation`](/de/docs/Web/API/GamepadPose/orientation)-Daten, die vom verbundenen Controller empfangen werden. Diese Werte (gespeichert in `curPos` und `curOrient`) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], was X ist, und \[1], was Y ist).

Wenn die Variable `gp` ein `Gamepad`-Objekt enthält und Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, modifizieren wir die Würfelposition mit Positions- und Orientierungswerten. Wenn nur ersteres zutrifft, was auf einen 3DoF-Controller hinweist, modifizieren wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad verbunden ist, modifizieren wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der Funktion `displayPoseStats()` greifen wir auf alle Daten zu, die wir aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das in sie übergeben wird, anzeigen möchten, und drucken sie in das UI-Panel, das im Demo für die Anzeige solcher Daten existiert:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad Extensions nutzen können, um VR-Controller in WebVR-Anwendungen zu verwenden. In einer echten Anwendung hätten Sie wahrscheinlich ein viel komplexeres Steuersystem im Einsatz, mit Steuerungen, die den Tasten auf den VR-Controllern zugewiesen sind, und die Anzeige würde sowohl durch die Display-Pose als auch durch die Controller-Poses gleichzeitig beeinflusst. Hier wollten wir jedoch nur die reinen Gamepad-Extension-Teile davon isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Die Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
