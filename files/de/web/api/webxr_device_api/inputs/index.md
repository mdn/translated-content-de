---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{DefaultAPISidebar("WebXR Device API")}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität zu erweitern, indem die Welt um ihn herum ergänzt oder verändert wird. Um ein erfüllendes und ansprechendes Erlebnis zu schaffen, muss der Benutzer damit interagieren können. Zu diesem Zweck unterstützt WebXR verschiedene Arten von Eingabegeräten.

In diesem Leitfaden sehen wir uns an, wie Sie die Funktionen zur Verwaltung von Eingabegeräten von WebXR verwenden, um festzustellen, welche Eingabequellen verfügbar sind und wie Sie diese Quellen anschließend auf Eingaben überwachen, um Benutzerinteraktionen mit Ihrer virtuellen oder erweiterten Umgebung zu verarbeiten.

## Eingaben in WebXR

Grundsätzlich lassen sich Eingaben in WebXR in zwei Basiskategorien einteilen: Targeting und Aktionen. Targeting ist die Angabe eines Punkts im Raum durch die Eingabe des Benutzers. Dies kann beinhalten, dass der Benutzer auf eine Stelle auf dem Bildschirm tippt, seine Augen verfolgt werden oder ein Joystick oder bewegungserfassender Controller verwendet wird, um einen Cursor zu bewegen.

Aktionen umfassen sowohl Auswahlaktionen wie das Klicken auf eine Schaltfläche als auch Squeeze-Aktionen wie das Betätigen eines Abzugs oder das Festigen des Griffs beim Tragen haptischer Handschuhe.

Durch die Kombination dieser beiden Eingabearten mit der Änderung der Betrachtungsposition und/oder -ausrichtung durch das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung erstellen.

### Arten von Eingabegeräten

WebXR unterstützt verschiedene Arten von Geräten zur Verarbeitung von Targeting- und Aktionseingaben. Zu diesen Geräten gehören unter anderem:

- Bildschirmberührungen (insbesondere, aber nicht ausschließlich auf Mobiltelefonen oder Tablets) können verwendet werden, um gleichzeitig sowohl Targeting als auch Auswahl auszuführen.
- Bewegungserfassende Controller, die Beschleunigungsmesser, Magnetometer und andere Sensoren für Bewegungsverfolgung und Targeting verwenden und zusätzlich eine beliebige Anzahl von Tasten, Joysticks, Thumbpads, Touchpads, Kraftsensoren usw. enthalten können, um zusätzliche Eingabequellen sowohl für Targeting als auch für Auswahl bereitzustellen.
- Zusammendrückbare Auslöser oder Griffpolster von Handschuhen, um Squeeze-Aktionen bereitzustellen.
- Sprachbefehle mittels Spracherkennung.
- Räumlich verfolgte gelenkige Hände, etwa [kabelgebundene Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Targeting- als auch Squeeze-Aktionen sowie Auswahl bereitstellen, wenn sie mit Tasten oder anderen Quellen für Auswahlaktionen ausgestattet sind.
- Klickgeräte mit einer Taste.
- Blickverfolgung (Verfolgen der Augenbewegungen zur Auswahl von Zielen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle umfassen, in welcher Hand sie gehalten wird (falls zutreffend), welche Targeting-Methode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die zum Zeichnen des Targeting-Strahls und zum Finden des anvisierten Objekts oder Ortes sowie zum Zeichnen von Objekten in den Händen des Benutzers verwendet werden können, und Profilzeichenfolgen, die sowohl die bevorzugte Darstellung des Controllers im Sichtbereich des Benutzers als auch die Funktionsweise der Eingabe angeben.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Targeting
  - : Überwachung von Richtungssteuerungen (beispielsweise ein bewegungserfassender Zeiger oder ein Joystick bzw. Trackpad), um in eine Richtung und möglicherweise auf ein Ziel zu zielen, wobei Sie das Targeting selbst implementieren müssen. Weitere Informationen finden Sie unter [Ausrichtung und Targeting](#ausrichtung_und_targeting).
- Auswählen
  - : Verwendung der Haupttaste „select“ oder einer anderen Eingabe am Controller, um die anvisierte Richtung (oder das Objekt, auf das er zeigt) auszuwählen oder auf andere Weise eine Aktion auszulösen. Einzelheiten zur primären Aktion finden Sie unter [Primäre Aktion](#primäre_aktion).
- Squeezing
  - : Zusammendrücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszulösen. Der Abschnitt [Primäre Squeeze-Aktion](#primäre_squeeze-aktion) beschreibt dies ausführlicher.

Auf zusätzliche Fähigkeiten eines WebXR-Controllers greifen Sie über das [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Objekt der Eingabequelle zu. Dieses Objekt bietet Zugriff auf alle Tasten, Achsen, Trackpads usw., die Teil des Controllers sein können. Unter [Erweiterte Controller mit dem gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) erfahren Sie, wie Sie diese Controller verwenden.

### Instanzeigenschaften von Eingabequellen

Jede einzelne `XRInputSource` verfügt über eine Reihe von Eigenschaften, die die verfügbaren Achsen und Tasten der Eingabe beschreiben, in welcher Hand der Benutzer sie hält und wie die Eingabequelle zur Verarbeitung von Targeting im 3D-Raum verwendet wird.

#### Händigkeit

**Händigkeit**, angegeben durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist eine Zeichenfolge, die angibt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Sie kann auch auf `none` gesetzt sein, wenn der Controller nicht in der Hand gehalten wird oder unbekannt ist, in welcher Hand sich der Controller befindet.

Die Händigkeit kann für verschiedene Zwecke verwendet werden, unter anderem zur Auswahl eines geeigneten Mesh zur Darstellung des Controllers in der Ansicht und zur korrekten Darstellung in der richtigen Hand, wenn Hände auf dem Display gezeichnet werden. Sie kann auch nützlich sein, wenn Ihre Anwendung das Konzept einer „Haupthand“ und einer „Nebenhand“ verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel kann der Controller der Haupthand beispielsweise die Waffe des Spielers sein, während der Controller der Nebenhand zur Steuerung der Position eines Schilds verwendet wird.

#### Targeting-Strahlmodus

Der Targeting-Strahlmodus ist eine Zeichenfolge in der Eigenschaft [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode). Sie beschreibt die Technik, mit der der Targeting-Strahl bestimmt wird, und wie er dem Benutzer angezeigt werden soll, wenn er visuell dargestellt wird.

Wenn der Targeting-Strahlmodus `gaze` ist, liegt der Ursprung des Strahls beim Betrachter und zeigt in die Richtung, in die der Benutzer blickt. Diese Blickeingabemethode ist recht einfach und benötigt keine speziellen Steuerelemente, da sie auf der vom Headset oder einem anderen Gerät gemeldeten Blickrichtung basiert, das bestimmt, in welche Richtung das Gesicht des Betrachters zeigt. Der Zielstrahl sollte sich von zwischen den Augen aus in einer Richtung senkrecht zum Gesicht des Betrachters nach außen erstrecken.

Flexibler ist der Modus `tracked-pointer`, bei dem der Ursprung des Strahls am Handcontroller oder am Ursprung eines Handverfolgungssystems liegt und sich in die Richtung erstreckt, in die der Controller zeigt. Der Strahl erstreckt sich in einer Richtung, die durch die verwendete Plattform und den verwendeten Controller definiert ist, sofern diese definiert ist; andernfalls erstreckt sich der Strahl in dieselbe Richtung, in die der Benutzer mit seinem Zeigefinger zeigen würde, wenn dieser ausgestreckt wäre.

Der dritte und letzte Zielstrahlmodus ist am häufigsten auf Mobilgeräten wie Smartphones und Tablets zu finden. Der Modus `screen` gibt an, dass der Zielstrahl anhand der Interaktion des Benutzers mit dem WebXR-Kontext über den Bildschirm bestimmt wird – höchstwahrscheinlich indem der Betrachter auf den Bildschirm tippt oder den Zielstrahl mit den Fingern verschiebt.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der zur Beschreibung der Position und Ausrichtung des Zielstrahls verwendet wird, befindet sich in der Eigenschaft [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace). Der natürliche Ursprung dieses Raums liegt an dem Punkt, von dem der Zielstrahl ausgeht (etwa an der vorderen Spitze des Controllers oder am Ende eines Gewehrlaufs, wenn der Controller beispielsweise als Gewehr gerendert wird), und der Orientierungsvektor des Raums erstreckt sich entlang des Verlaufs des Zielstrahls nach außen.

Sie können den `targetRaySpace` entsprechenden Zielstrahl innerhalb des Zeichen-Handlers für einen bestimmten Frame einfach mithilfe der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) abrufen. Der [`transform`](/de/docs/Web/API/XRPose/transform) der zurückgegebenen [`XRPose`](/de/docs/Web/API/XRPose) ist die dem Zielstrahl entsprechende Transformation. Für einen Eingabecontroller `primaryInput` gilt daher:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit verfügen Sie nun über den Punkt, von dem der Targeting-Strahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), angegeben im Referenzraum des Betrachters (`viewerRefSpace`). Das ist alles, was Sie benötigen, um den Targeting-Strahl zeichnen, bestimmen zu können, worauf gezeigt wird, Hit-Tests durchführen zu können usw.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, den Sie zum Rendern von Objekten verwenden können, damit diese so erscheinen, als würden sie in der Hand des Betrachters gehalten.

**Abbildung: Das Koordinatensystem für den Griffraum der linken Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_left.svg)
**Abbildung: Das Koordinatensystem für den Griffraum der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_right.svg)

Der natürliche Ursprung des Griffraums, der sich ungefähr in der Mitte der Faust des Spielers befindet, ist im lokalen Koordinatensystem der Eingabequelle (0, 0, 0), während der durch `gripSpace` angegebene [`XRSpace`](/de/docs/Web/API/XRSpace) jederzeit verwendet werden kann, um Koordinaten oder Vektoren aus dem Raum der Eingabequelle in Weltkoordinaten umzuwandeln (oder umgekehrt).

Das bedeutet, dass der `gripSpace` als Transformationsmatrix verwendet werden kann, die das Modell eines Objekts für das Rendering korrekt positioniert und ausrichtet, wenn Sie ein 3D-Modell verwenden, um Ihren Controller, die Hände des Avatars Ihres Spielers oder etwas anderes darzustellen, das für die Position des Controllers im Raum repräsentativ ist. Dazu muss die Transformation verwendet werden, um den Griffraum in das von WebGL für Rendering-Zwecke verwendete Weltkoordinatensystem umzuwandeln.

**Abbildung: Abbildung des Griffraums auf das Weltkoordinatensystem. Die Entfernungen _x_, _y_ und _z_ bilden zusammen die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen Griffraum und Weltraum zeigt](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung bei _G_ liegt, am Mittelpunkt des Griffs des Benutzers um den Controller, der direkt vom Benutzer weg parallel zur _z_-Achse zeigt. Relativ zum Ursprung des Weltraums _W_ befindet sich der Ursprung des Griffraums _x_ Einheiten rechts, _y_ Einheiten oberhalb und _z_ Einheiten weiter entfernt. Aufgrund der Richtungen der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da der Griffraum entlang der _z_-Achse weiter entfernt und daher in negativer Richtung liegt.

Wenn der Controller stattdessen links vom Benutzer und näher bei ihm als der Ursprung des Weltraums positioniert wäre (oder möglicherweise hinter dem Benutzer, wenn dieser sich am Ursprung befindet, obwohl dies eine unbequeme Haltung für einen Controller ist), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre weiterhin positiv, es sei denn, der Controller würde unter den Ursprung des Weltraums bewegt.

Dies wird im folgenden Diagramm gezeigt, in dem sich der Controller unterhalb und links vom Ursprung des Weltraums befindet und außerdem näher bei uns als der Ursprung liegt. Daher sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Abbildung eines Griffraums auf den Weltursprung, wenn der Controller unterhalb und links vom Weltursprung und näher bei uns als der Weltursprung positioniert ist.**
![Die Beziehung zwischen einem weiteren Griffraum und dem Weltraum](gripspace-on-worldspace-diag.svg)

#### Gamepad-Datensatz

Jede Eingabequelle verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, falls nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen auf dem Controller verfügbaren Steuerelemente und Bedienelemente beschreibt. Wenn das Eingabegerät nur die primären Bewegungssensoren, ein Squeeze-Steuerelement und eine Taste besitzt, verfügt es möglicherweise nicht über einen `Gamepad`-Datensatz. Wenn jedoch `gamepad` vorhanden ist, können Sie damit die auf dem Controller verfügbaren Tasten und Achsen identifizieren und abfragen.

Während der `Gamepad`-Datensatz durch die Spezifikation der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert wird, wird er nicht tatsächlich durch die Gamepad API verwaltet und funktioniert nicht genau auf dieselbe Weise. Ausführlichere Informationen finden Sie unter [Erweiterte Controller mit dem gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt).

#### Profilzeichenfolgen

Jede Eingabequelle kann null oder mehr Zeichenfolgen für **Eingabeprofilnamen** aufweisen, die im Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) zu finden sind. Jede davon beschreibt eine bevorzugte visuelle Darstellung der Eingabequelle innerhalb der 3D-Welt sowie die Funktionsweise der Eingabequelle. Die Verwendung dieser Profile wird weiter unten unter [Eingabeprofile](#eingabeprofile) kurz beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erstellen, die zusammen mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät stammt, aber so dargestellt wird, als ob sie es täte. Wenn ein XR-Gerät beispielsweise einen Modus bereitstellt, in dem die Maus zur Simulation von Ereignissen auf dem Gerät verwendet wird, kann für die Dauer der Verarbeitung der Aktion ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle darzustellen.

Dies ist aufgrund der Trennung erforderlich, die zwischen Standard-Eingabegeräten und XR-Eingabequellen beibehalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) darzustellen.

## Verwalten von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie Informationen zu jeder einzelnen erhalten können, einschließlich ihrer Position und Ausrichtung, ihres Targeting-Strahls (falls für Ihre Anforderungen relevant) und Details, die Ihnen bei der Entscheidung helfen können, wie die Eingabequelle visuell dargestellt werden soll, falls überhaupt. Sie müssen außerdem bestimmen können, welche Eingabequelle für welche Aktivitäten verwendet wird; wenn der Benutzer beispielsweise zwei Controller hat, welcher wird für die Bearbeitung von UI-Elementen verfolgt, oder werden beide verwendet?

Zur Verwaltung von Eingabequellen müssen Sie daher Eingabequellen aufzählen, Profilinformationen zu jeder Eingabequelle untersuchen und entscheiden können, wie jeder Eingabecontroller verwendet werden soll.

### Eingabequellen aufzählen

Die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellte WebXR-Sitzung besitzt eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, bei der es sich um eine _Live_-Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte handelt.

```js
let inputSourceList = xrSession.inputSources;
```

Da die Inhalte der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, welche jede Eingabequelle in der Liste darstellen, schreibgeschützt sind, werden Änderungen an diesen Eingaben vom WebXR-System vorgenommen, indem der Datensatz der Quelle gelöscht und ein neuer hinzugefügt wird, der ihn ersetzt. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, wenn sich eine oder mehrere Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder daraus entfernt wird.

Wenn Sie beispielsweise nachverfolgen müssen, welcher Controller in jeder Hand des Spielers gehalten wird, könnten Sie Folgendes tun:

```js
let inputSourceList = NULL;
let leftHandSource = NULL;
let rightHandSource = NULL;

xrSession.addEventListener("inputsourceschange", (event) => {
  inputSourceList = event.session.inputSources;

  inputSourceList.forEach((source) => {
    switch (source.handedness) {
      case "left":
        leftHandSource = source;
        break;
      case "right":
        rightHandSource = source;
        break;
    }
  });
});
```

Das `inputsourceschange`-Ereignis wird außerdem einmal ausgelöst, wenn der Callback zur Erstellung der Sitzung erstmals vollständig ausgeführt wurde. Sie können es daher verwenden, um die Liste der Eingabequellen abzurufen, sobald sie beim Start verfügbar ist. Das Ereignis wird als [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) übermittelt, das drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array mit null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die Eingabequellen angeben, die neu zum XR-System hinzugefügt wurden.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array mit null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die alle Eingabequellen angeben, die aus dem XR-System entfernt wurden.

### Identifizieren des Eingabeprofils

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine Live-Liste der auf die Eingabequelle zutreffenden WebXR-Eingabeprofile in der Reihenfolge ihrer Spezifität enthält, vom spezifischsten zum unspezifischsten.

Um über die grundlegende Identifizierung von Merkmalen hinaus etwas Sinnvolles mit dem Durchsuchen von Profilen zu tun, müssen Sie möglicherweise die JSON-Profildatenbank aus der [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) importieren.

Ausführlichere Informationen zur Arbeit mit Eingabeprofilen finden Sie unter [Eingabeprofile](#eingabeprofile).

### Auswahl des primären Controllers

Um Probleme zu vermeiden, die dadurch entstehen, dass mehrere Controller gleichzeitig unbeabsichtigt versuchen, die UI zu bearbeiten, benötigt Ihre Anwendung möglicherweise einen „primären“ Controller. Dieser Controller würde dann nicht nur die Verantwortung für das Durchklicken der Benutzeroberfläche Ihrer Anwendung übernehmen, sondern auch als „Haupthand“ betrachtet werden, während andere Controller Nebenhand- oder zusätzliche Controller wären.

> [!NOTE]
> Das bedeutet nicht, dass Ihre Anwendung _einen_ primären Controller bestimmen _muss_. Falls sie dies jedoch tut, können diese Strategien hilfreich sein.

Es gibt mehrere Möglichkeiten, einen primären Controller zu bestimmen. Wir betrachten drei davon.

#### Händigkeit

Die direkteste Methode zur Entscheidung, welcher Controller primär ist, besteht darin, eine benutzerdefinierbare Einstellung „Händigkeit“ anzubieten, die der Benutzer festlegt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann jede Eingabequelle prüfen und, sofern verfügbar, eine dazu passende finden und andernfalls auf einen anderen Controller zurückgreifen, falls kein Controller in dieser Hand gehalten wird.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieser Codeausschnitt geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, sucht dann jedoch nach einer Quelle, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der im `user`-Objekt angegebenen übereinstimmt. Wenn sie übereinstimmt, wird diese Eingabequelle als primär ausgewählt.

#### Zuerst verwendet

Eine weitere Option besteht darin, die erste Eingabe zu verwenden, bei der der Benutzer die Auswahlaktion auslöst. Der folgende Code geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, und richtet dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ein, der die Quelle des Ereignisses als primäre Eingabequelle speichert. Anschließend wird der `select`-Ereignishandler durch die Funktion `realSelectHandler()` ersetzt, die zur Verarbeitung aller zukünftigen `select`-Ereignisse verwendet wird. Dann übergeben wir das Ereignis an `realSelectHandler()`, damit es wie gewohnt verarbeitet werden kann.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Das Ergebnis ist, dass wir die primäre Eingabequelle beim ersten Empfang eines `select`-Ereignisses festlegen, unabhängig davon, von welcher Eingabequelle es stammt, das Ereignis anschließend normal verarbeiten und von da an die Ereignisse wie üblich behandeln, ohne uns weiter darum kümmern zu müssen, welche Eingabequelle primär ist.

#### Vom Benutzer ausgewählt

Die komplexeste Methode zur Bestimmung einer primären Eingabequelle ist sehr flexibel, kann aber einen erheblichen Implementierungsaufwand erfordern. In diesem Szenario iterieren Sie über die Liste der Eingabequellen und deren Profile, um Informationen zu jeder Eingabequelle zu sammeln, und präsentieren dann eine Benutzeroberfläche, welche jede Eingabe beschreibt und dem Benutzer ermöglicht, jeder von ihnen Verwendungszwecke zuzuweisen. Dies gut umzusetzen kann eine umfangreiche Aufgabe sein, könnte jedoch für komplexe Anwendungen nützlich sein, die mehrere Benutzereingaben umfassen.

Viele der Informationen, die Sie zur Implementierung benötigen, finden Sie im folgenden Abschnitt über [Eingabeprofile](#eingabeprofile). Einzelheiten liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, verfügt jede Eingabequelle über eine Liste von Eingabeprofilnamen, die einem Satz von Informationen entsprechen, welche diese Eingabequelle und ihre Verwendung beschreiben. Diese Namen befinden sich in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft der Eingabequelle, und das offizielle Register dieser Profilzeichenfolgen wird in der [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub verwaltet.

Der Profilname `generic-trigger-squeeze-touchpad` kann beispielsweise verwendet werden, um die folgenden JSON-Profildaten zu finden, indem das Feld `profileId` gesucht wird, das den Wert `generic-trigger-squeeze-touchpad` hat.

```json
{
  "profileId": "generic-trigger-squeeze-touchpad",
  "fallbackProfileIds": [],
  "layouts": {
    "left-right-none": {
      "selectComponentId": "xr-standard-trigger",
      "components": {
        "xr-standard-trigger": { "type": "trigger" },
        "xr-standard-squeeze": { "type": "squeeze" },
        "xr-standard-touchpad": { "type": "touchpad" }
      },
      "gamepad": {
        "mapping": "xr-standard",
        "buttons": [
          "xr-standard-trigger",
          "xr-standard-squeeze",
          "xr-standard-touchpad"
        ],
        "axes": [
          { "componentId": "xr-standard-touchpad", "axis": "x-axis" },
          { "componentId": "xr-standard-touchpad", "axis": "y-axis" }
        ]
      }
    }
  }
}
```

Dabei handelt es sich um einen Controller, der unabhängig davon, in welcher Hand er sich befindet (und selbst wenn er derzeit keiner bestimmten Hand zugeordnet ist), drei Komponenten hat: einen Standardauslöser, eine Standard-Squeeze-Eingabe und ein Touchpad. Gemäß der Eigenschaft `selectComponentId` ist die Komponente `xr-standard-trigger` diejenige, die zur Ausführung einer primären Aktion verwendet wird.

Zusätzlich ordnet das `gamepad`-Objekt diese Eingaben dem Gamepad zu, indem es Auslöser, Squeeze und Touchpad-Berührung der Tastenliste der Eingabequelle sowie die „Achsen“ des Touchpads der Achsenliste zuweist.

Die Liste in `profiles` ist in umgekehrter Reihenfolge der Spezifität angeordnet; das heißt, die präziseste Beschreibung steht zuerst und die unpräziseste zuletzt. Der erste Eintrag in der Liste weist typischerweise auf das genaue Modell des Controllers oder auf ein Modell hin, mit dem der Controller kompatibel ist.

Beispielsweise ist Eintrag 0 in `profiles` für einen Oculus-Touch-Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Auslöser, einem Squeeze-Steuerelement und einem Thumbstick angibt. Obwohl der Oculus-Touch-Controller tatsächlich ein Thumbpad statt eines Thumbsticks besitzt, ist die allgemeine Beschreibung „nah genug“, sodass die Details im Profil, das dem Namen entspricht, eine sinnvolle Interpretation des Controllers ermöglichen.

## Aktionen

In WebXR ist eine **Aktion** ein besonderer Ereignistyp, der ausgelöst wird, wenn der Benutzer eine spezielle Taste auf dem Controller aktiviert. Zusätzliche Tasten (sowie Elemente wie Achsensteuerungen – beispielsweise Joysticks – und Ähnliches) werden ausschließlich über die [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft von [`XRInputSource`](/de/docs/Web/API/XRInputSource) verwaltet. Weitere Informationen zur Unterstützung dieser zusätzlichen Steuerelemente und Tasten finden Sie unten unter [Erweiterte Controller mit dem gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt).

Die **primäre Aktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Hauptsteuerelement aktiviert, das einem besonderen Zweck dient. Derzeit gibt es zwei Arten primärer Aktionen:

- Die **primäre Aktion** wird aktiviert, wenn der Benutzer die primäre Eingabe oder Eingabe „select“ seines Controllers aktiviert. Diese Eingabe kann eine Taste, ein Auslöser, ein Tippen oder Klicken auf ein Trackpad, ein Sprachbefehl, eine besondere Handgeste oder möglicherweise eine andere Eingabeform sein. Bei einem Handcontroller mit klickbarem Trackpad, einer Auslösersteuerung sowie Zurück- und „menu“-Tasten ist das Klicken auf das Trackpad wahrscheinlich die primäre Aktion. Einige Controller haben möglicherweise eine mit „select“ beschriftete Taste. Bei einem Controller im Gamepad-Stil ist die Taste „A“ wahrscheinlich die primäre Aktion.
- Die **primäre Squeeze-Aktion** wird ausgelöst, wenn der Benutzer den Controller zusammendrückt. Dieses „Zusammendrücken“ kann durch einen tatsächlichen Drucksensor im Controller erkannt oder mittels eines Auslösers, einer Handgeste oder eines anderen Mechanismus simuliert werden. Wenn der Eingabecontroller beispielsweise ein haptischer Handschuh ist, kann er melden, dass die primäre Squeeze-Aktion stattgefunden hat, wenn der Benutzer seine Faust ballt und zusammenpresst.

Während eine bestimmte Eingabequelle nur eine primäre Aktion und eine primäre Squeeze-Aktion haben kann, kann mehr als ein Steuerelement auf dem Eingabegerät so konfiguriert sein, dass es jede primäre Aktion auslöst. Der Benutzer kann seinen Controller beispielsweise so eingerichtet haben, dass sowohl das Tippen als auch das Klicken auf das Trackpad eine primäre Aktion erzeugen.

Diese Arten von Eingabeaktionen werden weiter unten ausführlicher beschrieben.

### Primäre Aktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (die manchmal zu „Auswahlaktion“ verkürzt wird) ist eine plattformspezifische Aktion, die auf die Betätigung durch den Benutzer reagiert, indem sie der Reihe nach die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) auslöst. Jedes dieser Ereignisse hat den Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine primäre Aktion hat, wird sie als **zusätzliche Eingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum ausrichtet und anschließend eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das angibt, dass der Benutzer die Aktivität ausgeführt hat, mit der die primäre Aktion beginnt. Dies kann eine Geste, das Drücken einer Taste oder Ähnliches sein.
2. Wenn die primäre Aktion erfolgreich endet (beispielsweise weil der Benutzer die Taste oder den Auslöser loslässt) und nicht aufgrund eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nachdem das `select`-Ereignis gesendet wurde _oder_ wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt wird oder anderweitig nicht mehr verfügbar ist, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Allgemein geben Ihnen die Ereignisse `selectstart` und `selectend` an, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion stattfindet. Dies könnte darin bestehen, einen Controller mit der aktivierten Taste in einer neuen Farbe zu zeichnen oder das anvisierte Objekt beim Eintreffen von `selectstart` als gegriffen und bewegt darzustellen und dies beim Empfang von `selectend` zu beenden.

Das `select`-Ereignis dagegen teilt Ihrem Code mit, dass der Benutzer die Aktion abgeschlossen hat, die er ausführen wollte. Dies kann so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel oder so umfangreich wie das erneute Ablegen eines Objekts an einer neuen Position, das zuvor durch die Welt gezogen wurde.

Wenn Ihre primäre Aktion eine einfache Auslöseraktion ist und Sie nichts animieren müssen, während der Auslöser betätigt wird, können Sie die Ereignisse `selectstart` und `selectend` ignorieren und auf das `select`-Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen können diese Ereignisse sehr schnell nacheinander senden. Die zwischen diesen Ereignissen vergehende Zeit hängt sowohl von der Hardware ab, die die Aktion verursacht, als auch von den Softwaretreibern, welche die Hardwareaktion interpretieren und in eine Ereignisreihe umwandeln. Gehen Sie nicht davon aus, dass zwischen diesen Ereignissen eine bestimmte Zeitspanne liegt.

Wenn die Hardware, welche die primäre Aktion auslöst, beispielsweise eine Taste ist, würden Sie `selectstart` erhalten, wenn der Benutzer die Taste drückt, und anschließend `select` und `selectend`, wenn der Benutzer sie loslässt.

In der gesamten Dokumentation gibt es eine Reihe von Beispielen zur Verarbeitung von `select`-Ereignissen, etwa im Abschnitt [Targeting und der Targeting-Strahl](#targeting_und_der_targeting-strahl) an anderer Stelle in diesem Artikel.

### Primäre Squeeze-Aktion

Eine **primäre Squeeze-Aktion** ist eine plattformspezifische Aktion, die die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) an die [`XRSession`](/de/docs/Web/API/XRSession) sendet. Dies wird typischerweise erzeugt, wenn der Benutzer den Controller zusammendrückt, eine Handgeste ausführt, welche das Greifen von etwas nachahmt, oder einen Auslöser verwendet bzw. zusammendrückt.

Die Ereignisfolge entspricht derjenigen, die von der primären Aktion gesendet wird, mit Ausnahme des Namens jedes Ereignisses:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet und gibt an, dass der Benutzer eine Squeeze-Aktion begonnen hat.
2. Wenn die primäre Squeeze-Aktion erfolgreich endet, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis an die Sitzung gesendet.
3. Anschließend wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, das angibt, dass die Squeeze-Aktion nicht mehr stattfindet. Dies wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich war oder nicht.

Zwei häufige Verwendungen der primären Squeeze-Aktion sind das Greifen und/oder Aufheben von Objekten in der 3D-Welt sowie das Betätigen eines Auslösers, um eine Waffe in einem Spiel oder einer Simulation abzufeuern.

#### Beispiel

Dieser Beispielcode zeigt eine Reihe von Squeeze-Ereignishandlern, die diese Ereignisse implementieren, um das Aufheben und Halten von Objekten aus der Szene zu verwalten. Der Code setzt voraus, dass ein `avatar`-Objekt existiert, das den Charakter darstellt, wie es in mehreren anderen Beispielen auf dieser Seite verwendet wird, sowie die Funktionen `pickUpObject()` und `dropObject()`, die das Übertragen eines Objekts von der Welt in eine bestimmte Hand und das Loslassen eines Objekts aus der Hand und dessen Rückgabe in die Welt verarbeiten.

##### Ein Objekt aufheben: Verarbeitung von squeezestart-Ereignissen

```js
xrSession.addEventListener("squeezestart", (event) => {
  const targetRaySpace = event.inputSource.targetRaySpace;
  const hand = event.inputSource.handedness;

  let targetRayPose = event.frame.getPose(targetRaySpace, viewerRefSpace);
  if (!targetRayPose) {
    return;
  }

  let targetRayTransform = targetRayPose.transform;
  let targetObject = findTargetObject(targetRayTransform);

  if (targetObject) {
    if (avatar.heldObject[hand]) {
      dropObject(hand);
    }
    pickUpObject(targetObject, hand);
  }
});
```

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird verarbeitet, indem Pose und Transformation wie üblich abgerufen und die [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` übernommen wird. Diese verwenden wir, um die Hand dem in dieser Hand gehaltenen Objekt zuzuordnen.

Der Code identifiziert dann das anvisierte Objekt und hebt es auf, wenn ein Objekt entlang des Targeting-Strahls gefunden wird. Das Aufheben eines Objekts umfasst zunächst die Prüfung, ob die durch `avatar.heldObject[hand]` dargestellte Hand bereits ein Objekt hält. Wenn in dieser Hand bereits ein Objekt gehalten wird, wird es durch Aufruf der Funktion `dropObject()` fallen gelassen.

Anschließend wird `pickUpObject()` aufgerufen und das anvisierte Objekt als das aus der Szene zu entfernende und in die angegebene `hand` zu platzierende Objekt angegeben. `pickUpObject()` speichert außerdem die ursprüngliche Position des Objekts, damit es an diese Stelle zurückgegeben werden kann, wenn der Squeeze abgebrochen wird.

##### Das Objekt ablegen: der squeeze-Ereignishandler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Squeeze-Aktion durch Loslassen seines Griffs beendet. In diesem Beispiel interpretieren wir dies als Loslassen des aktuell gehaltenen Objekts und legen es an der anvisierten Position in der Szene ab.

Dieser Code setzt voraus, dass zusätzliche Funktionen `findTargetPosition()` vorhanden sind, die dem Zielstrahl folgt, bis er mit etwas kollidiert, und dann die Koordinaten der Kollision zurückgibt, sowie `putObject()`, die das in der angegebenen `hand` gehaltene Objekt an der angegebenen Position platziert und aus der Hand entfernt.

```js
xrSession.addEventListener("squeeze", (event) => {
  const targetRaySpace = event.inputSource.targetRaySpace;
  const hand = event.inputSource.handedness;

  let targetRayPose = event.frame.getPose(targetRaySpace, viewerRefSpace);
  if (!targetRayPose) {
    return;
  }

  let targetRayTransform = targetRayPose.transform;
  let targetPosition = findTargetPosition(targetRayTransform);

  if (targetPosition) {
    if (avatar.heldObject[hand]) {
      putObject(hand, targetPosition);
      avatar.heldObject[hand] = null;
    }
  }
});
```

Wie im `squeezestart`-Handler beginnt dies mit dem Sammeln der benötigten Informationen über das Ereignis, einschließlich der Hand, die ein Objekt ablegt, und der Transformation des Zielstrahls. Die Zielstrahltransformation wird an die angenommene Funktion `findTargetPosition()` übergeben, um die Koordinaten zu erhalten, an denen das abgelegte Objekt positioniert werden soll.

Mit der Position können wir das Objekt dann durch Aufruf der Funktion `putObject()` ablegen, die als Eingaben die `hand` und die Zielposition verwendet. Aufgabe dieser Funktion ist es, das Objekt aus der angegebenen Hand zu entfernen und es wieder zur Szene hinzuzufügen, wobei seine Position so gesetzt wird, dass es auf den von `findTargetPosition()` zurückgegebenen Koordinaten liegt.

##### Abbrechen des Squeeze im squeezeend-Handler

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird nach Abschluss des Squeeze empfangen, selbst wenn dieser fehlschlägt. Wir verarbeiten es, indem wir das aktuell gehaltene Objekt an die Stelle zurückgeben, an der es beim Aufheben war.

```js
xrSession.addEventListener("squeezeend", (event) => {
  const targetRaySpace = event.inputSource.targetRaySpace;
  const hand = event.inputSource.handedness;

  if (avatar.heldObject[hand]) {
    returnObject(hand);
    avatar.heldObject[hand] = null;
  }
});
```

Hier wird angenommen, dass die Funktion `returnObject()` weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgegeben wird, wie sie von `pickUpObject()` im `squeezestart`-Ereignishandler gespeichert wurde.

Hier wird angenommen, dass die Funktion `returnObject()` weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgegeben wird, wie sie von `pickUpObject()` im `squeezestart`-Ereignishandler gespeichert wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um im Modus `inline` einen Controller zu simulieren, findet ungefähr folgende Abfolge von Vorgängen statt:

1. Der Benutzer drückt die Maustaste innerhalb des {{HTMLElement("canvas")}}, das die WebXR-Szene darstellt.
2. Das Mausereignis wird vom Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt, und die übrigen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend zur Liste hinzugefügt, die von der [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft von [`XRSession`](/de/docs/Web/API/XRSession) zurückgegeben wird.
4. Der Browser liefert der Aktion entsprechende [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse.
5. Eine primäre Aktion wird erzeugt und in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisses an die Anwendung gesendet, wobei ihre Quelle auf die neue `XRInputSource` gesetzt ist. Oder es wird stattdessen eine zusätzliche Aktion gesendet, wenn die Maus als Controller für die Nebenhand oder als sekundärer Controller verwendet wird.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, anschließend empfängt das DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung empfängt dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, das den Abschluss der Aktion angibt.
7. Nach Abschluss der Aktion löscht der Browser die transiente Eingabequelle, und alle entsprechenden [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse werden gesendet.

Die transiente Eingabequelle ist somit tatsächlich transient – sie existiert nur für die Dauer der Verarbeitung der Eingabe und wird daher nicht in der Liste der Eingabequellen aufgeführt.

## Ausrichtung und Targeting

**Ausrichtung** ist die Richtung, in die der Betrachter blickt. Sie wird nicht über eine Eingabequelle bereitgestellt. Stattdessen wird sie mithilfe der [`XRPose`](/de/docs/Web/API/XRPose) abgerufen, die durch die Methode [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des aktuellen Animationsframes erhalten wird. Die Rotationskomponente der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Im Artikel [Blickpunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) erfahren Sie mehr darüber, wie Sie diese Betrachterpose zur Bestimmung der Blickrichtung verwenden.

**Targeting** ist das Zeigen des Benutzers mit einer Eingabequelle in eine bestimmte Richtung. Der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und vermutlich tatsächlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), der verwendet werden kann, um die Ausrichtung des Zielstrahls relativ zur Blickrichtung des Betrachters zu bestimmen.

Dies kann tatsächlich das Zeigen auf ein bestimmtes Objekt in der 3D-Welt beinhalten oder auch nicht; Sie müssen dies selbst mittels Hit-Testing bestimmen – also durch Überprüfung, ob der Zielstrahl Objekte in Ihrer Szene schneidet.

### Targeting und der Targeting-Strahl

Der Targeting-Strahl ist ein Strahl, dessen Ursprung sich am Ursprung des Targeting-Strahlraums befindet und der in die Richtung zeigt, in die der Benutzer das Controllergerät ausrichtet. Der Targeting-Strahl wird mithilfe eines [`XRSpace`](/de/docs/Web/API/XRSpace) definiert, dessen Ursprung an der Quelle des Targeting-Strahls liegt (typischerweise am nach außen gerichteten Ende des Controllers oder seiner Darstellung in der 3D-Welt) und dessen Ausrichtung -Z vom Controller in dieselbe Richtung nach außen erstreckt wie der [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) der [`XRInputSource`](/de/docs/Web/API/XRInputSource).

Dieser Raum befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft der Eingabequelle. Er kann verwendet werden, um die Richtung zu bestimmen, in die der Controller zeigt, sowie Ursprung und Ausrichtung des Zielstrahls. Dies kann durch etwas wie das folgende Beispiel erreicht werden, das einen [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignishandler implementiert, der diese Informationen benötigt. Wie üblich geht dieser Code von der Verwendung von [glMatrix](https://glmatrix.net/) zur Durchführung der Matrix- und Vektormathematik aus:

```js
xrSession.addEventListener("select", (event) => {
  const targetRaySpace = event.inputSource.targetRaySpace;

  let targetRayPose = event.frame.getPose(targetRaySpace, viewerRefSpace);
  if (!targetRayPose) {
    return;
  }

  let targetRayTransform = targetRayPose.transform;
  let targetObject = findTargetObject(targetRayTransform);

  if (targetObject) {
    /* do stuff with the targeted object */
  }
});
```

Dadurch wird der Ursprung des Targeting-Strahls im Vektor `targetSourcePoint` und die Ausrichtung des Strahls im {{Glossary("quaternion", "Quaternion")}} `targetDirection` abgerufen. Mit einer der

Dies beginnt mit dem Abrufen des Raums des Zielstrahls in die lokale Konstante `targetRaySpace`. Dieser wird wiederum beim Aufruf der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) verwendet, um ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zu erstellen, das die Position und Ausrichtung des Zielstrahls im Referenzraum des Betrachters `viewerRefSpace` darstellt. Wenn dies `null` ist, kehrt der Ereignishandler zurück, ohne weitere Aktionen auszuführen.

Die Transformation des Zielstrahls wird aus der [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft der Pose abgerufen und in der lokalen Variable `targetRayTransform` gespeichert. Diese wird wiederum verwendet (in diesem Fall durch eine Funktion namens `findTargetObject()`), um das erste Objekt zu finden, das der Strahl schneidet. Wenn der Targeting-Strahl ein Objekt in der Szene schneidet, können wir damit alles tun, was erforderlich ist.

Wenn Sie die tatsächliche Position des Ursprungs des Zielstrahls und die Richtung des Strahls extrahieren müssen, können Sie dies folgendermaßen tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt anvisiert wird, verfolgen Sie den Targeting-Strahl, bis er ein Objekt schneidet. Dieser Prozess wird **Hit-Testing** oder **Kollisionserkennung** genannt. Der Ansatz für Hit-Testing hängt stark von den spezifischen Anforderungen Ihrer Anwendung ab. Die erste Frage lautet: Erkennen Sie Kollisionen mit virtuellen Objekten oder Gelände, Objekten oder Gelände der realen Welt oder mit beidem?

In jedem Fall müssen Sie zur Identifizierung des anvisierten Objekts feststellen, ob der durch die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft von [`XRInputSource`](/de/docs/Web/API/XRInputSource) angegebene Strahl irgendwelche Objekte in der Szene schneidet, unabhängig davon, ob sie virtuell oder real sind.

Unter [Targeting und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting) finden Sie eine ausführlichere Betrachtung der damit verbundenen Aspekte.

### Darstellung handgehaltener Objekte

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft einer Eingabequelle identifiziert einen [`XRSpace`](/de/docs/Web/API/XRSpace), der Ursprung und Ausrichtung beschreibt, die beim Rendern eines Objekts verwendet werden sollen, damit es so erscheint, als würde es in derselben Hand wie seine Eingabequelle gehalten. Dieser Raum ist für das Zeichnen eines Modells des handgehaltenen WebXR-Eingabecontrollers vorgesehen, der durch das Objekt [`XRInputSource`](/de/docs/Web/API/XRInputSource) dargestellt wird, kann jedoch genauso gut verwendet werden, um beliebige Objekte zu zeichnen, etwa einen Ball, ein Werkzeug oder eine Waffe. Wir haben den [Griffraum](#griffraum) oben behandelt, aber sehen wir uns an, wie er zum Zeichnen von Objekten verwendet werden kann, die für die Hand oder ein Objekt in der Hand repräsentativ sind.

Da der Ursprung des Griffraums in der Mitte des Handgriffs liegt, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie jede erforderliche Offset-Transformation an, um den Ursprung zum Startpunkt für das Rendern Ihres Objekts zu verschieben, und wenden Sie jede Rotation an, die erforderlich ist, um Ihr Modell korrekt an der Ausrichtung des Griffraums auszurichten.

## Erweiterte Controller mit dem gamepad-Objekt

Eine [`XRInputSource`](/de/docs/Web/API/XRInputSource) verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, wenn er nicht `null` ist, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugriff auf Tasten im Gamepad-Stil, Achsensteuerungen (etwa Joysticks oder Thumbpads) usw. bietet. Dies kann dieselben Tasten umfassen, die die Standardaktionen von [`XRInputSource`](/de/docs/Web/API/XRInputSource) auslösen, jedoch auch eine beliebige Anzahl zusätzlicher Tasten und Steuerelemente.

> [!NOTE]
> Obwohl `Gamepad` durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert wird, wird es nicht von der Gamepad API verwaltet. Daher dürfen Sie nicht versuchen, damit irgendwelche Methoden der Gamepad API zu verwenden. Der Objekttyp wird aus Gründen der Zweckmäßigkeit wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerelemente mithilfe des `Gamepad`-Datensatzes, entweder weil sie dies nicht unterstützt oder weil sie keine zusätzlichen Steuerelemente besitzt.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um Zugriff auf spezielle Tasten, Trackpads usw. zu erhalten, sondern bietet auch eine Möglichkeit, direkter auf die Steuerelemente zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Squeeze-Eingaben dienen, da diese in seiner [`buttons`](/de/docs/Web/API/Gamepad/buttons)-Liste enthalten sind.

Da diese Nutzung der `Gamepad`-Schnittstelle eine Zweckmäßigkeit und keine echte Anwendung der Gamepad API ist, gibt es mehrere Unterschiede zwischen ihrer Verwendung mit WebXR und ihrer Verwendung in Anwendungen der Gamepad API. Der auffälligste – jedoch nicht der einzige – Unterschied besteht darin, dass WebXR das `xr-standard`-Gamepad-Mapping hinzufügt; zusätzliche Unterschiede finden Sie in der [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft. Dieses Gamepad-Mapping definiert, wie die Steuerelemente eines typischen handgehaltenen VR-Controllers für eine Hand auf Gamepad-Steuerelemente abgebildet werden.

## Einbeziehen von Eingaben aus Nicht-WebXR-Quellen

Manchmal benötigen Sie eine Möglichkeit, dem Benutzer Eingaben über Controller zu ermöglichen, die außerhalb von WebXR liegen. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, Sie könnten jedoch auch Nicht-XR-Gamepad-Geräte, Netzwerkeingaben oder andere Datenquellen verwenden, um Benutzersteuerungen zu simulieren. WebXR bietet zwar keine Unterstützung für die direkte Anbindung dieser Eingabegeräte an die XR-Szene, Sie können die Eingabedaten jedoch selbst erfassen und selbst anwenden.

Unter der Annahme, dass Eingaben zur Steuerung eines Avatars innerhalb der Simulation verwendet werden – was der häufigste Anwendungsfall ist –, werden WebXR-Eingaben auf folgende Weise verwendet, um den Avatar zu beeinflussen, wobei Daten genutzt werden, die vom Nicht-XR-Eingabegerät erfasst wurden:

- Position
  - : Die Position des Avatars wird geändert, indem ein {{Glossary("delta", "Delta")}} auf die zuvor bekannte Position angewendet und anschließend der Referenzraum des Avatars durch einen neuen ersetzt wird, dessen Transformation die neue Position widerspiegelt.
- Ausrichtung
  - : Die Ausrichtung oder Blickrichtung des Avatars wird geändert, indem ein Delta auf seine Rotation um die drei Achsen angewendet, sein Orientierungsvektor aktualisiert und anschließend sein Referenzraum neu berechnet wird.
- Aktion
  - : Der Avatar führt eine Aktion aus, beispielsweise die Verwendung eines Objekts oder einer Waffe, das Springen oder eine andere Aktivität, die nicht mit grundlegender Bewegung und Rotation zusammenhängt.

Einige Eingaben werden stattdessen zur Steuerung der Anwendung und nicht des Avatars verwendet. Beispielsweise könnte eine Taste ein Optionsmenü öffnen, das zur Konfiguration der Anwendung dient. Während dieses Menü geöffnet ist, könnten Eingaben, die andernfalls den Avatar steuern würden, stattdessen zur Steuerung der Benutzeroberfläche des Menüs verwendet werden.

### Verwenden von Tastatur- und Mausereignissen

Das Erfassen von Eingaben von Tastatur und Maus erfolgt genauso wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie verarbeiten müssen, um die gewünschten Eingaben zu erhalten. Interessant ist, was Sie mit diesen Eingaben tun.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden, um Informationen über den Avatar und seine Weltansicht nachzuverfolgen. Der Spieler soll die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> verwenden können, um sich vorwärts, nach links, rückwärts und nach rechts zu bewegen. Da wir die durch Tastatur und Maus definierte Position des Avatars zusätzlich zu allem verwalten, was die XR-Hardware möglicherweise tut, müssen wir diese Informationen separat beibehalten und sie als Transformation anwenden, bevor wir den Avatar rendern (oder die Welt aus Sicht des Avatars).

Zu diesem Zweck fügen wir dem `avatar`-Objekt eine `posDelta`-Eigenschaft vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) hinzu, die die auf alle drei Achsen anzuwendenden Offsets enthält, um die Position des Avatars (den Ursprung des Referenzraums der Betrachterpose) um Bewegung und Rotation von Tastatur und Maus anzupassen.

Der entsprechende Code für Tastatureingaben könnte ungefähr so aussehen:

```js
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
    case "A":
      avatar.posDelta.x -= ACCEL_X;
      break;
    case "d":
    case "D":
      avatar.posDelta.x += ACCEL_X;
      break;
    case "w":
    case "W":
      avatar.posDelta.y += ACCEL_Y;
      break;
    case "s":
    case "S":
      avatar.posDelta.y -= ACCEL_Y;
      break;
    default:
      break;
  }
});
```

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie Kenntnisse der Physik anwenden, sodass sich die Beschleunigung im Laufe der Zeit abhängig davon ändert, wie lange eine Taste gedrückt gehalten wird, und von weiteren Faktoren.

### Anwenden von Eingaben auf die Szene

Nachdem wir nun die Deltas haben, die auf Position und Ausrichtung angewendet werden müssen – in unserem Beispiel in den Eigenschaften `posDelta` und `orientDelta` unseres `avatar`-Objekts –, können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits nach einem Zeitplan rendern, können wir den Code zum Anwenden dieser Änderungen dort zusammen mit der Vorbereitung und dem Zeichnen der Szene hinzufügen.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die hier gezeigte Funktion `drawFrame()` ist der Callback, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie durch den Aufruf der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) festgelegt. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir gleich definieren werden; diese nimmt das `avatar`-Objekt und verwendet seine Informationen, um den Referenzframe des Avatars zu aktualisieren.

Danach wird wie üblich fortgefahren: Die Pose des Betrachters wird aus dem aktualisierten Referenzframe abgerufen, der nächste Frame-Callback wird über `requestAnimationFrame()` angefordert, und anschließend werden WebGL eingerichtet und die Szene gezeichnet. Der Zeichen- und weitere zugehörige Code ist im Beispiel [Bewegung, Ausrichtung und Motion](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) zu finden.

Die Methode `applyExternalInputs()` nimmt das `avatar`-Objekt und ersetzt seine `referenceSpace`-Eigenschaft durch einen neuen Referenzraum, der die aktualisierten Deltas einbezieht.

```js
function applyExternalInputs(avatar) {
  if (!avatar.posDelta.x && !avatar.posDelta.y && !avatar.posDelta.z) {
    return; // Player hasn't moved with keyboard
  }

  let newTransform = new XRRigidTransform({
    x: avatar.posDelta.x,
    y: avatar.posDelta.y,
    z: avatar.posDelta.z,
  });
  avatar.referenceSpace =
    avatar.referenceSpace.getOffsetReferenceSpace(newTransform);
}
```

## Siehe auch

- [Targeting und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animationscallback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Blickpunkte und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Ausrichtung und Motion: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
