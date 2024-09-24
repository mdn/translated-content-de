---
title: Verwenden von VR-Controllern mit WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

Viele WebVR-Hardwarekonfigurationen beinhalten Controller, die mit dem Headset verwendet werden. Diese können in WebVR-Anwendungen über die [Gamepad API](/de/docs/Web/API/Gamepad_API) und insbesondere die [Gamepad Extensions API](/de/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) verwendet werden, die API-Funktionen zum Zugriff auf [Controller-Pose](/de/docs/Web/API/GamepadPose), [haptische Aktuatoren](/de/docs/Web/API/GamepadHapticActuator) und mehr hinzufügt. Dieser Artikel erklärt die Grundlagen.

> [!NOTE]
> WebVR API wird durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine geringe Anzahl von Geräten.

## Die WebVR API

Die [WebVR API](/de/docs/Web/API/WebVR_API) ist ein aufstrebendes, aber sehr interessantes neues Feature der Webplattform, das es Entwicklern ermöglicht, webbasierte Virtual-Reality-Erlebnisse zu erstellen. Sie ermöglicht dies durch den Zugriff auf VR-Headsets, die an Ihren Computer angeschlossen sind, als {{domxref("VRDisplay")}}-Objekte, die manipuliert werden können, um die Präsentation auf dem Display zu starten und zu stoppen, Bewegungsdaten (z.B. Orientierung und Position) abzufragen, die zur Aktualisierung des Displays bei jedem Frame der Animationsschleife verwendet werden können, und mehr.

Bevor Sie diesen Artikel lesen, sollten Sie sich bereits mit den Grundlagen der WebVR API vertraut machen — lesen Sie zuerst [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API), wenn Sie dies noch nicht getan haben, wo auch die Browserunterstützung und die erforderliche Hardwarekonfiguration beschrieben werden.

## Die Gamepad API

Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist eine ziemlich gut unterstützte API, die es Entwicklern ermöglicht, auf Gamepads/Controller zuzugreifen, die an Ihren Computer angeschlossen sind, und diese zur Steuerung von Web-Apps zu verwenden. Die grundlegende Gamepad API bietet Zugriff auf angeschlossene Controller als {{domxref("Gamepad")}}-Objekte, die dann abgefragt werden können, um herauszufinden, welche Tasten gedrückt werden und welche Thumbsticks (Achsen) zu einem bestimmten Zeitpunkt bewegt werden.

Sie können mehr über die grundlegende Verwendung der Gamepad API in [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) und [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API) erfahren.

In diesem Artikel konzentrieren wir uns jedoch hauptsächlich auf einige der neuen Funktionen, die von der [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html)-API bereitgestellt werden, die Zugriff auf erweiterte Controllerinformationen wie Positions- und Orientierungsdaten, Steuerung über haptische Aktuatoren (z.B. Vibrationshardware) und mehr ermöglicht. Diese API ist sehr neu und wird derzeit nur in den Firefox 55+ Beta/Nightly-Kanälen standardmäßig unterstützt und aktiviert.

## Arten von Controllern

Es gibt zwei Arten von Controllern, die Sie bei VR-Hardware antreffen werden:

- 6DoF (sechs Freiheitsgrade) Controller bieten sowohl Zugriff auf Positions- als auch Orientierungsdaten — sie können eine VR-Szene und die darin enthaltenen Objekte durch Bewegung, aber auch Drehung manipulieren. Ein gutes Beispiel sind die HTC VIVE Controller.
- 3DoF (drei Freiheitsgrade) Controller bieten Orientierungsdaten, aber keine Positionsdaten. Ein gutes Beispiel ist der Google Daydream Controller, der gedreht werden kann, um auf verschiedene Dinge im 3D-Raum zu zeigen, wie ein Laserpointer, aber nicht in einer 3D-Szene bewegt werden kann.

## Grundlegender Controller-Zugriff

Kommen wir nun zu etwas Code. Schauen wir uns zunächst die Grundlagen an, wie wir mit der Gamepad API auf VR-Controller zugreifen können. Hier gibt es ein paar seltsame Nuancen zu beachten, also lohnt es sich, einen Blick darauf zu werfen.

Wir haben ein einfaches Beispiel erstellt, um es zu demonstrieren — sehen Sie sich unseren [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) Quellcode an ([sehen Sie es sich auch hier live an](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)). Diese Demo gibt Informationen über die VR-Displays und Gamepads aus, die mit Ihrem Computer verbunden sind.

### Abrufen der Displayinformationen

Der erste bemerkenswerte Code ist folgender:

```js
let initialRun = true;

if (navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = "WebVR API und Gamepad API unterstützt.";
  reportDisplays();
} else {
  info.textContent =
    "WebVR API und/oder Gamepad API werden von diesem Browser nicht unterstützt.";
}
```

Hier verwenden wir zuerst eine Verfolgungsvariable, `initialRun`, um festzuhalten, dass dies das erste Mal ist, dass wir die Seite geladen haben. Sie werden später mehr darüber erfahren. Als nächstes überprüfen wir, ob die WebVR- und Gamepad-APIs unterstützt werden, indem wir auf das Vorhandensein der Methoden {{domxref("Navigator.getVRDisplays()")}} und {{domxref("Navigator.getGamepads()")}} testen. Wenn dies der Fall ist, führen wir unsere `reportDisplays()`-Funktion aus, um den Prozess zu starten. Diese Funktion sieht wie folgt aus:

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    console.log(`${displays.length} Anzeigen`);
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap ist ein VRDisplayCapabilities-Objekt
      const listItem = document.createElement("li");
      listItem.innerText = `
VR-Display-ID: ${display.displayId}
VR-Display-Name: ${display.displayName}
Anzeige kann Inhalte präsentieren: ${cap.canPresent}
Anzeige ist getrennt vom Hauptdisplay des Computers: ${cap.hasExternalDisplay}
Anzeige kann Positionsinformationen zurückgeben: ${cap.hasPosition}
Anzeige kann Orientierungsinformationen zurückgeben: ${cap.hasOrientation}
Maximale Anzeigeebenen: ${cap.maxLayers}`;
      listItem.insertBefore(
        document.createElement("strong"),
        listItem.firstChild,
      ).textContent = `Anzeige ${i + 1}`;
      list.appendChild(listItem);
    });

    setTimeout(reportGamepads, 1000);
    // Für VR sind Controller erst aktiv, nachdem das zugehörige Headset aktiv ist
  });
}
```

Diese Funktion verwendet zuerst die auf Versprechen basierende Methode {{domxref("Navigator.getVRDisplays()")}}, die mit einem Array aufgelöst wird, das {{domxref("VRDisplay")}}-Objekte enthält, die die verbundenen Anzeigen darstellen. Als nächstes druckt sie die Werte {{domxref("VRDisplay.displayId")}} und {{domxref("VRDisplay.displayName")}} jeder Anzeige sowie eine Reihe nützlicher Werte, die im zugehörigen {{domxref("VRDisplayCapabilities")}}-Objekt der Anzeige enthalten sind. Die nützlichsten davon sind {{domxref("VRDisplayCapabilities.hasOrientation","hasOrientation")}} und {{domxref("VRDisplayCapabilities.hasPosition","hasPosition")}}, die es Ihnen ermöglichen, zu erkennen, ob das Gerät Orientierungs- und Positionsdaten zurückgeben kann und Ihre App entsprechend einzurichten.

Die letzte Zeile, die in dieser Funktion enthalten ist, ist ein Aufruf von {{domxref("setTimeout()")}}, der die `reportGamepads()`-Funktion nach einer Verzögerung von 1 Sekunde ausführt. Warum müssen wir das tun? Erstens sind VR-Controller erst bereit, nachdem ihr zugehöriges VR-Headset aktiv ist, daher müssen wir dies nach dem Aufruf von `getVRDisplays()` und der Rückgabe der Anzeigedaten tun. Zweitens ist die Gamepad API viel älter als die WebVR API und nicht auf Versprechen basierend. Wie Sie später sehen werden, ist die `getGamepads()`-Methode synchron und gibt die `Gamepad`-Objekte sofort zurück — sie wartet nicht darauf, dass der Controller bereit ist, Informationen zu melden. Wenn Sie nicht kurz warten, sind die zurückgegebenen Informationen möglicherweise nicht genau (zumindest ist dies, was wir in unseren Tests festgestellt haben).

### Abrufen der Gamepad-Informationen

Die `reportGamepads()`-Funktion sieht so aus:

```js
function reportGamepads() {
  const gamepads = navigator.getGamepads();
  console.log(`${gamepads.length} Controller`);
  for (const gp of gamepads) {
    const listItem = document.createElement("li");
    listItem.classList = "gamepad";
    listItem.innerText = `
Verknüpft mit VR-Display-ID: ${gp.displayId}
Gamepad mit welchem Hand assoziiert: ${gp.hand}
Verfügbare haptische Aktuatoren: ${gp.hapticActuators.length}
Gamepad kann Positionsinformationen zurückgeben: ${gp.pose.hasPosition}
Gamepad kann Orientierungsinformationen zurückgeben: ${gp.pose.hasOrientation}`;
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

Dies funktioniert ähnlich wie `reportDisplays()` — wir erhalten ein Array von {{domxref("Gamepad")}}-Objekten mithilfe der nicht auf Versprechen basierenden `getGamepads()`-Methode, dann durchlaufen wir jedes und drucken Informationen über jedes aus:

- Die {{domxref("Gamepad.displayId")}}-Eigenschaft entspricht der `displayId` des Headsets, mit dem der Controller verbunden ist, und ist daher nützlich, um Controller- und Headset-Informationen zusammenzuführen.
- Die {{domxref("Gamepad.index")}}-Eigenschaft ist ein eindeutiger numerischer Index, der jeden verbundenen Controller identifiziert.
- {{domxref("Gamepad.hand")}} gibt zurück, in welcher Hand der Controller erwartet wird.
- {{domxref("Gamepad.hapticActuators")}} gibt ein Array der verfügbaren haptischen Aktuatoren im Controller zurück. Hier geben wir die Länge aus, um zu sehen, wie viele jeder verfügbar hat.
- Schließlich geben wir {{domxref("GamepadPose.hasPosition")}} und {{domxref("GamepadPose.hasOrientation")}} zurück, um zu zeigen, ob der Controller Positions- und Orientierungsdaten zurückgeben kann. Dies funktioniert genauso wie für die Anzeigen, außer dass im Fall von Gamepads diese Werte im Pose-Objekt und nicht im Capabilities-Objekt verfügbar sind.

Beachten Sie, dass wir jedem Listenelement, das Controller-Informationen enthält, einen Klassennamen `gamepad` gegeben haben. Wir erklären später, wofür dies ist.

Das letzte, was hier zu tun ist, ist die Variable `initialRun` auf `false` zu setzen, da der erste Lauf nun abgeschlossen ist.

### Gamepad-Ereignisse

Um diesen Abschnitt abzuschließen, werfen wir einen Blick auf die gamepad-assoziierten Ereignisse. Es gibt zwei, die uns betreffen — {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} — und es ist ziemlich offensichtlich, was sie tun.

Am Ende unseres Beispiels schließen wir zunächst die `removeGamepads()`-Funktion ein:

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

Diese Funktion holt sich Referenzen auf alle Listenelemente mit einem Klassennamen `gamepad` und entfernt sie aus dem DOM. Dann führt sie `reportGamepads()` erneut aus, um die Liste mit der aktualisierten Liste der verbundenen Controller zu füllen.

`removeGamepads()` wird jedes Mal ausgeführt, wenn ein Gamepad verbunden oder getrennt wird, über die folgenden Ereignishandler:

```js
window.addEventListener("gamepadconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} verbunden.`;
  if (!initialRun) {
    setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener("gamepaddisconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} getrennt.`;
  setTimeout(removeGamepads, 1000);
});
```

Wir haben `setTimeout()`-Aufrufe hier platziert — wie wir es mit dem Initialisierungscode am Anfang des Skripts getan haben — um sicherzustellen, dass die Gamepads bereit sind, ihre Informationen zu melden, wenn `reportGamepads()` in jedem Fall aufgerufen wird.

Aber es gibt noch eine Sache zu beachten — Sie werden sehen, dass innerhalb des `gamepadconnected`-Handlers der Timeout nur ausgeführt wird, wenn `initialRun` `false` ist. Dies liegt daran, dass, wenn Ihre Gamepads verbunden sind, wenn das Dokument zum ersten Mal geladen wird, `gamepadconnected` einmal für jedes Gamepad ausgelöst wird, daher `removeGamepads()`/`reportGamepads()` mehrmals ausgeführt werden würde. Dies könnte zu ungenauen Ergebnissen führen, daher möchten wir `removeGamepads()` im `gamepadconnected`-Handler erst nach dem ersten Lauf ausführen, nicht während dessen. Dafür ist `initialRun` gedacht.

## Einführung einer echten Demo

Zuletzt betrachten wir die Verwendung der Gamepad API innerhalb einer echten WebVR-Demo. Sie können diese Demo unter [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) finden ([sehen Sie sie auch hier live an](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).

Auf genau die gleiche Weise wie unser [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (siehe [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API) für Details) rendert diese ein sich drehender 3D-Würfel, den Sie im VR-Display anzeigen lassen können. Der einzige Unterschied besteht darin, dass während des VR-Anzeigemodus diese Demo es Ihnen ermöglicht, den Würfel zu bewegen, indem Sie einen VR-Controller bewegen (die ursprüngliche Demo bewegt den Würfel, während Sie Ihr VR-Headset bewegen).

Wir werden die Codeunterschiede in dieser Version unten erkunden — siehe [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js).

### Zugriff auf die Gamepad-Daten

Innerhalb der `drawVRScene()`-Funktion finden Sie dieses Stück Code:

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

Hier erhalten wir die verbundenen Gamepads mit {{domxref("Navigator.getGamepads")}}, dann speichern wir das erste gefundene Gamepad in der Variablen `gp`. Da wir für diese Demo nur ein Gamepad benötigen, ignorieren wir die anderen.

Das nächste, was wir tun, ist, das {{domxref("GamepadPose")}}-Objekt für den Controller in `gpPose` zu speichern (indem wir {{domxref("Gamepad.pose")}} abfragen) und auch die aktuelle Position und Orientierung des Gamepads für diesen Frame in Variablen zu speichern, damit sie später einfach abgerufen werden können. Außerdem zeigen wir die Pose-Statistik für diesen Frame im DOM mit der `displayPoseStats()`-Funktion an. All dies wird nur gemacht, wenn `gp` tatsächlich einen Wert hat (wenn ein Gamepad verbunden ist), was verhindert, dass die Demo fehlerhaft ist, wenn unser Gamepad nicht verbunden ist.

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

Hier ändern wir die Position des Würfels auf dem Bildschirm entsprechend den {{domxref("GamepadPose.position","Position")}} und {{domxref("GamepadPose.orientation","Orientierung")}}-Daten, die vom verbundenen Controller empfangen werden. Diese Werte (gespeichert in `curPos` und `curOrient`) sind {{jsxref("Float32Array")}}s, die die X-, Y- und Z-Werte enthalten (hier verwenden wir nur [0], was X ist, und [1], was Y ist).

Wenn die `gp`-Variable ein `Gamepad`-Objekt enthält und Positionswerte zurückgeben kann (`gpPose.hasPosition`), was auf einen 6DoF-Controller hinweist, modifizieren wir die Würfelposition mit Positions- und Orientierungswerten. Wenn nur ersteres zutrifft, was auf einen 3DoF-Controller hinweist, modifizieren wir die Würfelposition nur mit den Orientierungswerten. Wenn kein Gamepad angeschlossen ist, ändern wir die Würfelposition überhaupt nicht.

### Anzeige der Gamepad-Pose-Daten

In der `displayPoseStats()`-Funktion holen wir alle Daten, die wir anzeigen möchten, aus dem {{domxref("GamepadPose")}}-Objekt, das an sie übergeben wurde, und drucken sie dann in das UI-Panel, das in der Demo zur Anzeige solcher Daten existiert:

```js
function displayPoseStats(pose) {
  const pos = pose.position;

  const formatCoords = ([x, y, z]) =>
    `x ${x.toFixed(3)}, y ${y.toFixed(3)}, z ${z.toFixed(3)}`;

  posStats.textContent = pose.hasPosition
    ? `Position: ${formatCoords(pose.position)}`
    : "Position nicht gemeldet";

  orientStats.textContent = pose.hasOrientation
    ? `Orientierung: ${formatCoords(pose.orientation)}`
    : "Orientierung nicht gemeldet";

  linVelStats.textContent = `Lineare Geschwindigkeit: ${formatCoords(
    pose.linearVelocity,
  )}`;
  angVelStats.textContent = `Winkelgeschwindigkeit: ${formatCoords(
    pose.angularVelocity,
  )}`;

  linAccStats.textContent = pose.linearAcceleration
    ? `Lineare Beschleunigung: ${formatCoords(pose.linearAcceleration)}`
    : "Lineare Beschleunigung nicht gemeldet";

  angAccStats.textContent = pose.angularAcceleration
    ? `Winkelbeschleunigung: ${formatCoords(pose.angularAcceleration)}`
    : "Winkelbeschleunigung nicht gemeldet";
}
```

## Zusammenfassung

Dieser Artikel hat Ihnen eine sehr grundlegende Vorstellung davon gegeben, wie man die Gamepad-Erweiterungen verwendet, um VR-Controller in WebVR-Apps zu verwenden. In einer realen App hätten Sie wahrscheinlich ein viel komplexeres Steuersystem im Einsatz, mit Steuerungen, die den Tasten auf den VR-Controllern zugewiesen sind, und dem Display, das sowohl von der Display-Pose als auch von den Controller-Posen gleichzeitig beeinflusst wird. Hier wollten wir jedoch nur die reinen Gamepad-Erweiterungsteile davon isolieren.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)
