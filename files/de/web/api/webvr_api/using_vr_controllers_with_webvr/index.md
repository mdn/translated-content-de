---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Setups verfügen über Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die API-Features für den Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein aufstrebendes, aber sehr interessantes neues Feature der Webplattform, das Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu schaffen. Sie stellt den Zugriff auf VR-Headsets bereit, die mit Ihrem Computer verbunden sind, als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte, die manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten (z. B. Orientierung und Position) abzufragen, die verwendet werden können, um das Display in jedem Frame der Animationsschleife zu aktualisieren, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie bereits mit den Grundlagen der WebVR API vertraut sein — lesen Sie zuerst [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben, da dieser Artikel auch die Browserunterstützung und die erforderliche Hardwarekonfiguration behandelt.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine ziemlich gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die mit Ihrem Computer verbunden sind, und sie zur Steuerung von Webanwendungen zu verwenden. Die grundlegende Gamepad API bietet Zugriff auf angeschlossene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Daumensticks (Achsen) bewegt werden usw.

Mehr Informationen zur grundlegenden Verwendung der Gamepad API finden Sie in [Using the Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns hauptsächlich auf einige der neuen Features, die die [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bietet, die den Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, die Steuerung von haptischen Aktuatoren (z. B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird aktuell nur standardmäßig in Firefox 55+ Beta/Nightly-Kanälen unterstützt und aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF (six-degrees-of-freedom) Controller bieten sowohl Zugriff auf Positions- als auch Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegung und auch Drehung manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (three-degrees-of-freedom) Controller bieten Orientierungs-, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream-Controller, der wie ein Laserpointer gedreht werden kann, um auf verschiedene Dinge im 3D-Raum zu zeigen, sich jedoch nicht innerhalb einer 3D-Szene bewegen kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Es gibt hier einige seltsame Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein einfaches Beispiel erstellt, um dies zu demonstrieren — sehen Sie sich unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode an ([sehen Sie es hier auch live](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen zu den VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

### Anzeigen der Display-Informationen

Der erste bemerkenswerte Code lautet wie folgt:

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

Hier verwenden wir zuerst eine Tracking-Variable, `initialRun`, um festzustellen, dass dies das erste Mal ist, dass die Seite geladen wurde. Später erfahren Sie mehr darüber. Als nächstes prüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir auf das Vorhandensein der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) überprüfen. Wenn dies der Fall ist, führen wir unsere benutzerdefinierte `reportDisplays()`-Funktion aus, um den Prozess zu starten. Diese Funktion sieht folgendermaßen aus:

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

Diese Funktion verwendet zuerst die auf Versprechen basierende [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)-Methode, die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte enthält, die die verbundenen Displays repräsentieren. Als nächstes gibt sie für jedes Display die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) aus sowie eine Reihe nützlicher Werte, die im zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays enthalten sind. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), die es Ihnen ermöglichen zu erkennen, ob das Gerät Orientierungs- und Positionsdaten liefern kann, und Ihre App entsprechend einzurichten.

Die letzte Zeile in dieser Funktion ist ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Aufruf, der die `reportGamepads()`-Funktion nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir dies tun? Zuerst werden VR-Controller nur dann bereit sein, wenn ihr zugehöriges VR-Headset aktiv ist. Daher müssen wir dies nach `getVRDisplays()` aufrufen und die Display-Informationen zurückgeben. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht eine kleine Weile warten, könnten die zurückgegebenen Informationen möglicherweise nicht genau sein (zumindest haben wir dies in unseren Tests festgestellt).

### Abrufen der Gamepad-Informationen

Die `reportGamepads()`-Funktion sieht wie folgt aus:

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

Dies funktioniert ähnlich wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Versprechen basierenden `getGamepads()`-Methode und durchlaufen dann jedes einzelne, um Informationen darüber auszugeben:

- Die [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)-Eigenschaft ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen zu verknüpfen.
- Die [`Gamepad.index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft ist eine eindeutige numerische Index, der jeden angeschlossenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller voraussichtlich gehalten wird.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der in den Controllern verfügbaren haptischen Aktuatoren zurück. Hier geben wir die Länge zurück, um zu sehen, wie viele dies verfügbar haben.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten liefern kann. Dies funktioniert genauso wie bei den Displays, außer dass diese Werte im Fall von Gamepads im Pose-Objekt verfügbar sind, nicht im Fähigkeiten-Objekt.

Beachten Sie, dass wir jedem Listeneintrag mit Controller-Informationen eine Klassennamen `gamepad` gegeben haben. Wir erklären später, wofür dies gedacht ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun abgeschlossen ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, schauen wir uns die gamepad-bezogenen Ereignisse an. Es gibt zwei, die uns interessieren sollten - [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) - und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels fügen wir zunächst die `removeGamepads()`-Funktion hinzu:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

Diese Funktion greift auf Referenzen zu allen Listeneinträgen mit dem Klassennamen `gamepad` zu und entfernt sie aus dem DOM. Dann führt sie `reportGamepads()` erneut aus, um die Liste mit der aktualisierten Liste der angeschlossenen Controller zu füllen.

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

Wir haben hier `setTimeout()`-Aufrufe platziert — wie wir es mit dem Initialisierungscode am Anfang des Skripts getan haben — um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten — Sie werden sehen, dass im `gamepadconnected`-Handler der Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Dies liegt daran, dass, wenn Ihre Gamepads verbunden sind, wenn das Dokument zuerst geladen wird, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher werden `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler nur nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` gedacht.

## Einführung in ein echtes Demo

Nun schauen wir uns die Verwendung der Gamepad API in einem echten WebVR-Demo an. Sie finden dieses Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([sehen Sie es hier auch live](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

In genau derselben Weise wie unser [raw-webgl-beispiel](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details) rendert dieses eine drehende 3D-Box, die Sie in einem VR-Display präsentieren können. Der einzige Unterschied besteht darin, dass dieses Demo im VR-Darstellungsmodus es Ihnen ermöglicht, die Box durch Bewegen eines VR-Controllers zu bewegen (das ursprüngliche Demo bewegt die Box, während Sie Ihr VR-Headset bewegen).

Wir werden die Codeunterschiede in dieser Version unten untersuchen — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

In der `drawVRScene()`-Funktion finden Sie diesen Codeblock:

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

Hier erhalten wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern das erste erkannte Gamepad in der `gp`-Variablen. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Das nächste, was wir tun, ist, das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller im `gpPose` (indem wir [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) abfragen) abzurufen und die aktuelle Gamepad-Position und -Orientierung für dieses Frame in Variablen zu speichern, so dass sie später leichter zugänglich sind. Wir zeigen auch die Pose-Statistiken für dieses Frame im DOM mit der `displayPoseStats()`-Funktion an. All dies wird nur getan, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo einen Fehler auslöst, wenn unser Gamepad nicht verbunden ist.

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

Hier ändern wir die Position der Box auf dem Bildschirm entsprechend den [`position`](/de/docs/Web/API/GamepadPose/position)- und [`orientation`](/de/docs/Web/API/GamepadPose/orientation)-Daten, die von dem verbundenen Controller empfangen werden. Diese Werte (in `curPos` und `curOrient` gespeichert) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], was X ist, und \[1], was Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und es Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, ändern wir die Boxposition mit Positions- und Orientierungswerten. Wenn nur das vorherige wahr ist, was auf einen 3DoF-Controller hinweist, ändern wir die Boxposition nur mit den Orientierungswerten. Wenn kein Gamepad verbunden ist, ändern wir die Boxposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der `displayPoseStats()`-Funktion greifen wir auf alle Daten zu, die wir aus dem [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt anzeigen möchten, das an sie übergeben wird, und drucken sie in das UI-Panel, das im Demo für die Anzeige solcher Daten existiert:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad Extensions verwenden können, um VR-Controller innerhalb von WebVR-Apps zu nutzen. In einer echten App hätten Sie wahrscheinlich ein viel komplexeres Steuerungssystem, bei dem die Tasten der VR-Controller Steuerfunktionen zugewiesen sind und das Display sowohl von der Display-Pose als auch von den Controller-Posen gleichzeitig beeinflusst wird. Hier wollten wir jedoch nur die reinen Gamepad Extensions-Teile isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
