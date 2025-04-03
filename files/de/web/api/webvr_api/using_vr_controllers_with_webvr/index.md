---
title: Verwendung von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardware-Setups verfügen über Controller, die zusammen mit dem Headset verwendet werden. Diese können in WebVR-Apps über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und speziell die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in nur sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine geringe Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein neuartiges, aber sehr interessantes neues Feature der Webplattform, das es Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu erstellen. Dies geschieht durch den Zugriff auf VR-Headsets, die mit Ihrem Computer verbunden sind, als [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte, die manipuliert werden können, um die Anzeige zu starten und zu stoppen, Bewegungsdaten abzufragen (z. B. Orientierung und Position), die verwendet werden können, um die Anzeige bei jedem Frame der Animationsschleife zu aktualisieren, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie sich wirklich bereits mit den Grundlagen der WebVR API vertraut gemacht haben - lesen Sie zuerst [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben. Dieser Artikel behandelt auch die Browser-Unterstützung sowie die erforderliche Hardware-Einrichtung.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine ziemlich gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die mit Ihrem Computer verbunden sind, und sie zur Steuerung von Web-Apps zu verwenden. Die grundlegende Gamepad API bietet Zugriff auf verbundene Controller als [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekte, die abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Thumbsticks (Achsen) zu einem bestimmten Zeitpunkt bewegt werden, usw.

Weitere Informationen zur grundlegenden Nutzung der Gamepad API finden Sie unter [Using the Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementing controls using the Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API).

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die die [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) API bietet, die Zugriff auf erweiterte Controller-Informationen wie Positions- und Orientierungsdaten, Steuerung über haptische Aktuatoren (z. B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und derzeit nur in den Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controller

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF (sechs Freiheitsgrade)-Controller bieten Zugriff auf sowohl Positions- als auch Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegung, aber auch durch Rotation manipulieren. Ein gutes Beispiel sind die HTC VIVE-Controller.
- 3DoF (drei Freiheitsgrade)-Controller bieten Orientierung, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream-Controller, der gedreht werden kann, um wie ein Laserpointer auf verschiedene Dinge im 3D-Raum zu zeigen, aber nicht innerhalb einer 3D-Szene bewegt werden kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zum Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API Zugriff auf VR-Controller erhalten. Hier gibt es einige seltsame Nuancen zu beachten, daher lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein Beispiel geschrieben, um dies zu demonstrieren — siehe unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode ([sehen Sie es hier auch live](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Dieses Demo gibt Informationen zu den VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

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

Hier verwenden wir zunächst eine Tracking-Variable, `initialRun`, um festzustellen, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie werden später mehr darüber erfahren. Als nächstes überprüfen wir, ob die WebVR- und Gamepad-APIs durch Überprüfung der Existenz der Methoden [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays) und [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) unterstützt werden. Wenn dies der Fall ist, führen wir unsere benutzerdefinierte Funktion `reportDisplays()` aus, um den Prozess zu starten. Diese Funktion sieht so aus:

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

Diese Funktion verwendet zunächst die auf Promises basierende Methode [`Navigator.getVRDisplays()`](/de/docs/Web/API/Navigator/getVRDisplays), die mit einem Array aufgelöst wird, das [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekte enthält, die die verbundenen Displays darstellen. Anschließend werden die Werte [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) und [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) jedes Displays sowie eine Reihe nützlicher Werte des zugehörigen [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekts ausgegeben. Die nützlichsten davon sind [`hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) und [`hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition), mit denen Sie erkennen können, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann, und Ihre App entsprechend einrichten können.

Die letzte Zeile, die in dieser Funktion enthalten ist, ist ein [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Aufruf, der die `reportGamepads()`-Funktion nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Zunächst werden die VR-Controller nur dann bereit sein, wenn ihr zugehöriges VR-Headset aktiv ist, sodass wir dies nach dem Aufruf von `getVRDisplays()` und der Rückgabe der Display-Informationen aufrufen müssen. Zweitens ist die Gamepad-API viel älter als die WebVR-API und nicht auf Promises basierend. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt die `Gamepad`-Objekte sofort zurück – sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht eine Weile warten, sind die zurückgegebenen Informationen möglicherweise nicht genau (zumindest haben wir das in unseren Tests festgestellt).

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

Diese funktioniert ähnlich wie `reportDisplays()` — wir erhalten ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten mit der nicht auf Promises basierenden Methode `getGamepads()`, durchlaufen dann jedes und geben Informationen über jedes aus:

- Die [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)-Eigenschaft ist dieselbe wie die `displayId` des Headsets, mit dem der Controller verknüpft ist, und daher nützlich, um Controller- und Headset-Informationen miteinander zu verbinden.
- Die [`Gamepad.index`](/de/docs/Web/API/Gamepad/index)-Eigenschaft ist ein eindeutiger numerischer Index, der jeden angeschlossenen Controller identifiziert.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) gibt zurück, in welcher Hand der Controller gehalten werden soll.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) gibt ein Array der in dem Controller verfügbaren haptischen Aktuatoren zurück. Hier geben wir dessen Länge zurück, um zu sehen, wie viele verfügbar sind.
- Schließlich geben wir [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) und [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie bei den Displays, außer dass diese Werte im Fall von Gamepads am Pose-Objekt und nicht am Fähigkeiten-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, einen Klassennamen von `gamepad` gegeben haben. Wir werden später erklären, wofür dies ist.

Das Letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Durchlauf nun vorbei ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, schauen wir uns die gamepad-bezogenen Ereignisse an. Es gibt zwei, mit denen wir uns beschäftigen müssen: [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) — und es ist ziemlich offensichtlich, was sie tun.

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

Diese Funktion ruft Referenzen auf alle Listenelemente mit dem Klassennamen `gamepad` ab und entfernt sie aus dem DOM. Dann wird `reportGamepads()` erneut aufgerufen, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

`removeGamepads()` wird jedes Mal ausgeführt, wenn ein Gamepad angeschlossen oder getrennt wird, über die folgenden Ereignis-Handler:

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

Wir haben `setTimeout()`-Aufrufe hier installiert - wie wir es mit dem Initialisierungscode oben im Skript gemacht haben - um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten - Sie werden sehen, dass im `gamepadconnected`-Handler das Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Das liegt daran, dass, wenn Ihre Gamepads angeschlossen sind, wenn das Dokument zuerst geladen wird, `gamepadconnected` für jedes Gamepad einmal ausgelöst wird, daher wird `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler erst nach dem ersten Durchlauf ausführen, nicht während dessen. Dafür ist `initialRun` da.

## Einführung in eine echte Demo

Schauen wir nun auf die Verwendung der Gamepad-API in einer echten WebVR-Demo. Sie können diese Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) finden ([sehen Sie sie hier auch live](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Auf genau die gleiche Weise wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details), wird hier ein rotierender 3D-Würfel gerendert, den Sie in einem VR-Display darstellen können. Der einzige Unterschied besteht darin, dass dieses Demo während des VR-Darstellungsmodus ermöglicht, den Würfel durch die Bewegung eines VR-Controllers zu bewegen (das ursprüngliche Demo bewegt den Würfel, während Sie Ihr VR-Headset bewegen).

Wir werden die Codunterschiede in dieser Version weiter unten erkunden — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

In der Funktion `drawVRScene()` finden Sie diesen Codeabschnitt:

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

Das nächste, was wir tun, ist das Abrufen des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekts für den Controller, der in gpPose gespeichert ist (durch Abfragen von [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose)), und speichern auch die aktuelle Gamepad-Position und -Orientierung für diesen Frame in Variablen, damit sie später leicht zugänglich sind. Wir zeigen auch die Pose-Statistiken für diesen Frame im DOM mit der Funktion `displayPoseStats()` an. All dies wird nur ausgeführt, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad angeschlossen ist), was verhindert, dass das Demo einen Fehler anzeigt, falls kein Gamepad angeschlossen ist.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm entsprechend den [`position`](/de/docs/Web/API/GamepadPose/position) und [`orientation`](/de/docs/Web/API/GamepadPose/orientation) Daten, die vom verbundenen Controller empfangen werden. Diese Werte, die in `curPos` und `curOrient` gespeichert sind, sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur \[0], was X ist, und \[1], was Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, modifizieren wir die Würfelposition unter Verwendung der Positions- und Orientierungswerte. Wenn nur das erstere zutrifft, was auf einen 3DoF-Controller hinweist, modifizieren wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad angeschlossen ist, modifizieren wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der Funktion `displayPoseStats()` holen wir alle Daten, die wir anzeigen möchten, aus dem in sie übergebenen [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt und drucken sie in das in dem Demo vorhandene UI-Panel, das zum Anzeigen solcher Daten dient:

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

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie Sie die Gamepad-Erweiterungen verwenden können, um VR-Controller in WebVR-Apps zu verwenden. In einer echten App hätten Sie wahrscheinlich ein viel komplexeres Steuerungssystem in Funktion, mit Steuerelementen, die den Tasten der VR-Controller zugewiesen sind, und die Anzeige würde sowohl durch die Display-Pose als auch durch die Controller-Posen gleichzeitig beeinflusst. Hier jedoch wollten wir nur die reinen Gamepad-Erweiterungsteile davon isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementieren von Steuerelementen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
