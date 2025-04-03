---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Konfigurationen umfassen Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) genutzt werden, die API-Funktionen zum Zugriff auf [Controller-Haltungen](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in sehr wenigen Browsern implementiert und standardmäßig aktiviert sowie von einer geringen Anzahl von Geräten unterstützt.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein aufstrebendes, aber sehr interessantes neues Feature der Webplattform, das es Entwicklern ermöglicht, webbasierte Virtual-Reality-Erfahrungen zu schaffen. Dies geschieht durch den Zugriff auf VR-Headsets, die mit Ihrem Computer als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte verbunden sind, welche manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten abzufragen (z.B. Orientierung und Position), die zur Aktualisierung des Displays bei jedem Bild im Animationszyklus verwendet werden können, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie mit den Grundlagen der WebVR API bereits vertraut sein — lesen Sie [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), falls Sie es noch nicht getan haben. Dieser Artikel enthält auch Details zur Browser-Unterstützung und zur erforderlichen Hardware-Konfiguration.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine recht gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die mit Ihrem Computer verbunden sind und sie zur Steuerung von Web-Apps zu nutzen. Die grundlegende Gamepad API bietet Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Daumensticks (Achsen) sich zu einem bestimmten Zeitpunkt bewegen, usw.

Weitere Informationen über die grundlegende Nutzung der Gamepad API finden Sie unter [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bereitgestellt werden, die den Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, Steuerung über haptische Aktuatoren (z.B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen können:

- 6DoF (Six-Degrees-of-Freedom) Controller bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegung und auch Drehung manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (Three-Degrees-of-Freedom) Controller bieten Orientierungs-, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream Controller, der wie ein Laserpointer gedreht werden kann, um auf verschiedene Dinge im 3D-Raum zu zeigen, aber nicht innerhalb einer 3D-Szene bewegt werden kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Zuerst schauen wir uns die Grundlagen an, wie wir mit der Gamepad API auf VR-Controller zugreifen. Es gibt hier einige merkwürdige Nuancen zu beachten, daher lohnt es sich, diese genauer anzusehen.

Wir haben ein Beispiel erstellt, um dies zu demonstrieren — siehe unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode ([sehen Sie es auch hier live laufen](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen über die mit Ihrem Computer verbundenen VR-Displays und Gamepads aus.

### Anzeige der Display-Informationen

Der erste bemerkenswerte Code sieht wie folgt aus:

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

Hier verwenden wir zunächst eine Tracking-Variable, `initialRun`, um zu notieren, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie werden später mehr darüber erfahren. Anschließend prüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir auf das Vorhandensein der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) testen. Falls ja, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht folgendermaßen aus:

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

Diese Funktion verwendet zunächst die versprochensbasierte [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays)-Methode, die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte darstellt, die die verbundenen Displays repräsentieren. Anschließend werden die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) jedes Displays zusammen mit einer Anzahl nützlicher Werte ausgegeben, die im zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt des Displays enthalten sind. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), mit denen Sie erkennen können, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann, und Ihre App entsprechend einrichten.

Die letzte Zeile in dieser Funktion ist ein Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), der die Funktion `reportGamepads()` nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Zunächst einmal sind VR-Controller erst dann bereit, wenn ihr zugehöriges VR-Headset aktiv ist. Daher müssen wir dies nach dem Aufruf von `getVRDisplays()` tun, das die Display-Informationen zurückgegeben hat. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht versprechensbasiert. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht eine kleine Weile warten, sind die zurückgegebenen Informationen möglicherweise nicht korrekt (zumindest haben wir das in unseren Tests festgestellt).

### Abrufen der Gamepad-Informationen

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

Diese funktioniert in ähnlicher Weise wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht-versprechensbasierten `getGamepads()`-Methode und durchlaufen dann jedes Objekt, um Informationen über jedes einzelne auszugeben:

- Die Eigenschaft [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verbunden ist, und daher nützlich, um Controller- und Headset-Informationen miteinander zu verknüpfen.
- Die Eigenschaft [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) ist ein einzigartiger numerischer Index, der jeden verbundenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der im Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir seine Länge zurück, um zu sehen, wie viele jeder hat.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Position und Orientierung zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass im Fall von Gamepads diese Werte im Pose-Objekt und nicht im Fähigkeiten-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listenpunkt mit Controller-Informationen einen Klassennamen `gamepad` zugewiesen haben. Wir erklären später, wofür das ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun abgeschlossen ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, betrachten wir die mit Gamepads verbundenen Ereignisse. Es gibt zwei, die uns interessieren — [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) — und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels binden wir zunächst die Funktion `removeGamepads()` ein:

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

Wir haben hier `setTimeout()`-Aufrufe eingebaut — ähnlich wie mit dem Initialisierungscode oben im Skript —, um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten — Sie werden sehen, dass innerhalb des `gamepadconnected`-Handlers das Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Der Grund ist, dass, wenn Ihre Gamepads beim ersten Laden des Dokuments verbunden sind, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher wird `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen. Daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler erst nach dem ersten Durchlauf ausführen, nicht währenddessen. Dafür ist `initialRun` da.

## Einführung in ein echtes Demo

Nun schauen wir uns die Verwendung der Gamepad API in einem echten WebVR-Demo an. Sie finden dieses Demo bei [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([sehen Sie es auch hier live](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Genauso wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details) rendert dieses ein drehendes 3D-Würfel, den Sie zur Präsentation in einem VR-Display auswählen können. Der einzige Unterschied besteht darin, dass während des VR-Präsentationsmodus dieses Demo es Ihnen ermöglicht, den Würfel durch Bewegen eines VR-Controllers zu bewegen (das Original-Demo bewegt den Würfel, wenn Sie Ihr VR-Headset bewegen).

Wir werden die Codeunterschiede in dieser Version unten erkunden — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

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

Hier holen wir die verbundenen Gamepads mit [`Navigator.getGamepads`](/de/docs/Web/API/Navigator/getGamepads) und speichern das erste erkannte Gamepad in der Variable `gp`. Da wir für dieses Demo nur ein Gamepad benötigen, ignorieren wir einfach die anderen.

Als Nächstes holen wir das [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt für den Controller, der in gpPose gespeichert ist (indem wir [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) abfragen), und speichern die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leichter zugänglich sind. Wir zeigen auch die Post-Statistiken für diesen Frame im DOM mit der Funktion `displayPoseStats()` an. All dies wird nur durchgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass das Demo Fehler auslöst, wenn wir unser Gamepad nicht verbunden haben.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm gemäß den [`position`](/de/docs/Web/API/GamepadPose/position) und [`orientation`](/de/docs/Web/API/GamepadPose/orientation) Daten, die von dem verbundenen Controller empfangen wurden. Diese Werte (gespeichert in `curPos` und `curOrient`) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], welches X ist, und \[1], welches Y ist).

Wenn die Variable `gp` ein `Gamepad`-Objekt enthält und es Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, ändern wir die Würfelposition mit Positions- und Orientierungswerten. Wenn nur ersteres wahr ist, was auf einen 3DoF-Controller hinweist, ändern wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad verbunden ist, ändern wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der Funktion `displayPoseStats()` greifen wir auf alle Daten zu, die wir aus dem übergebenen [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt anzeigen möchten, und geben sie im UI-Panel aus, welches in dem Demo zum Anzeigen solcher Daten vorhanden ist:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad Extensions verwenden, um VR-Controller in WebVR-Apps zu verwenden. In einer echten App hätten Sie wahrscheinlich ein viel komplexeres Kontrollsystem im Einsatz, mit Steuerungen, die den Tasten auf den VR-Controllern zugewiesen sind, und das Display, das von sowohl der Display-Haltung als auch den Controller-Haltungen gleichzeitig beeinflusst wird. Hier wollten wir jedoch nur die reinen Gamepad Extensions-Teile davon isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
