---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}

Eine vollständige WebXR-Erfahrung besteht nicht nur darin, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität durch Hinzufügen oder Ändern der Umgebung um ihn herum zu erweitern. Um eine erfüllende und ansprechende Erfahrung zu schaffen, muss der Benutzer in der Lage sein, mit ihr zu interagieren. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden werden wir untersuchen, wie Sie die Funktionen zur Verwaltung von Eingabegeräten in WebXR nutzen können, um zu bestimmen, welche Eingabequellen verfügbar sind, und wie Sie diese Quellen dann auf Eingaben überwachen können, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu handhaben.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zielauswahl und Aktionen. Zielauswahl ist die Spezifikation eines Punktes im Raum durch die Benutzereingabe. Dies kann das Tippen des Benutzers auf einen Punkt auf dem Bildschirm, das Verfolgen seiner Augen oder die Verwendung eines Joysticks oder bewegungssensitiven Controllers zur Bewegung eines Cursors umfassen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Knopf, als auch Quetschaktionen, wie das Ziehen eines Abzugs oder das Anziehen des Griffs beim Tragen von haptischen Handschuhen.

Durch die Kombination dieser beiden Arten von Eingaben mit der Änderung der Betrachtungsposition und/oder -ausrichtung durch das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung schaffen.

### Eingabegerätetypen

WebXR unterstützt eine Vielzahl unterschiedlicher Gerätetypen zur Handhabung von Ziel- und Aktionseingaben. Zu diesen Geräten gehören, ohne darauf beschränkt zu sein:

- Bildschirmtaps (insbesondere, aber nicht nur auf Handys oder Tablets) können verwendet werden, um gleichzeitig sowohl Ziel- als auch Auswahlfunktionen auszuführen.
- Bewegungssensitive Controller, die Beschleunigungsmesser, Magnetometer und andere Sensoren zur Bewegungserkennung und Zielauswahl verwenden und zusätzlich eine beliebige Anzahl von Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren usw. umfassen können, um zusätzliche Eingabequellen sowohl für Ziel- als auch Auswahlaktionen bereitzustellen.
- Quetschbare Abzüge oder Handschuhgriffe, um Quetschaktionen bereitzustellen.
- Sprachbefehle mit Spracherkennung.
- Räumlich verfolgte artikulierte Hände, wie z.B. [kabelgebundene Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Ziel- als auch Quetschaktionen ebenso wie Auswahl bereitstellen, wenn sie mit Tasten oder anderen Quellen für Auswahlaktionen ausgestattet sind.
- Ein-Knopf-Klickgeräte.
- Blickverfolgung (Verfolgen der Bewegungen des Auges, um Ziele auszuwählen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt, welches die Eingabequelle und deren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle beinhalten, in welcher Hand sie gehalten wird (falls zutreffend), welche Zielmethode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die verwendet werden können, um den Zielstrahl zu zeichnen und das anvisierte Objekt oder den Standort sowie Objekte in den Händen des Benutzers zu finden, und Profilstrings, die die bevorzugte Art und Weise zur Darstellung des Controllers im Sichtbereich des Benutzers sowie die Funktionsweise der Eingabe spezifizieren.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zielauswahl
  - : Überwachen von Richtungssteuerungen (entweder ein bewegungssensitiver Zeiger oder ein Joystick oder Trackpad, zum Beispiel), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, obwohl die Zielauswahl Ihnen überlassen bleibt, um sie selbst zu implementieren. Siehe [Facing and targeting](#straßenrichtung_feststellen_und_ziele_anvisieren) für weitere Informationen.
- Auswahl
  - : Verwenden der Haupt-„Select“-Taste oder einer anderen Eingabe auf dem Controller, um die anvisierte Richtung (oder das Objekt, auf das sie zeigt) auszuwählen, oder um eine Aktion auszuführen. Für Details zur Hauptaktion siehe [Primary action](#primäre_aktion).
- Quetschen
  - : Quetschen des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszulösen. Der Abschnitt [Primary squeeze action](#primäre_quetschaktion) beschreibt dies ausführlicher.

Jede weiteren Fähigkeiten, die ein WebXR-Controller möglicherweise hat, sind über das `gamepad`-Objekt der Eingabequelle zugänglich. Dieses Objekt gewährt Zugriff auf alle Knöpfe, Achsen, Trackpads usw., die Teil des Controllers sein können. Siehe [Advanced controllers using the gamepad object](#fortgeschrittene_controller_mit_dem_gamepad-objekt), um zu erfahren, wie diese Controller verwendet werden können.

### Eigenschaftsinstanzen von Eingabequellen

Jede einzelne `XRInputSource` hat eine Reihe von Eigenschaften, die die verfügbaren Achsen und Knöpfe der Eingabe beschreiben, welche Hand der Benutzer hält, und wie die Eingabequelle verwendet wird, um das Zielen im 3D-Raum zu verwalten.

#### Händigkeit

**Händigkeit**, angezeigt durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist ein String, der angibt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht in der Hand gehalten wird, oder wenn es unbekannt ist, in welcher Hand sich der Controller befindet.

Händigkeit kann für verschiedene Dinge verwendet werden, einschließlich der Auswahl eines geeigneten Meshs zur Darstellung des Controllers im Blickfeld und zur Hilfe, ihn in der korrekten Hand darzustellen, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App den Begriff der "Haupthand" und "Nebenhand" verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel könnte zum Beispiel der Controller in der Haupthand die Waffe des Spielers sein, während der Controller in der anderen Hand verwendet werden könnte, um die Position eines Schildes zu steuern.

#### Strahlmodi für Zielauswahl

Der Strahlmodus für die Zielauswahl ist ein String, der in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft gefunden wird. Er beschreibt die Technik, die verwendet wird, um den Zielstrahl zu bestimmen und wie er dem Benutzer gezeigt werden sollte, wenn er optisch präsentiert wird.

When the targeting ray mode is `gaze`, the ray's origin is at the viewer and aims in the direction the user is facing. This gaze input method is fairly simple, and doesn't need any special controls, as it will be based on the facing direction reported by the headset or whatever device is used to determine what direction the viewer's face is pointing in. The target ray should extend outward from between the eyes in a direction perpendicular to the viewer's face.

Der flexibelste Modus ist der `tracked-pointer`-Modus, in welchem der Ursprung des Strahls an einem handgehaltenen Controller oder Ursprung des Hand-Tracking-Systems liegt und in die Richtung extendsiert, in die der Controller zeigt. Der Strahl extendsiert in eine Richtung, die durch die verwendete Plattform und den Controller definiert wird, wenn diese definiert ist; andernfalls extendsiert der Strahl in die gleiche Richtung, in die der Benutzer mit seinem ausgestreckten Zeigefinger zeigen würde.

Der dritte und letzte Zielstrahlmodus ist am häufigsten auf mobilen Geräten wie Smartphones und Tablets zu finden. Der `screen`-Modus zeigt an, dass der Zielstrahl auf Basis der Interaktion des Benutzers mit dem WebXR-Kontext bei der Nutzung des Bildschirms bestimmt wird - höchstwahrscheinlich, indem der Betrachter auf den Bildschirm tippt oder den Zielstrahl mit den Fingern zieht.

#### Zielstrahlraum

Das [`XRSpace`](/de/docs/Web/API/XRSpace), das die Position und Ausrichtung des Zielstrahls beschreibt, befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft. Der native Ursprung dieses Raumes liegt am Punkt, von dem der Zielstrahl ausgeht (z. B. der vordere Ansatz des Controllers oder der Endpunkt eines Gewehrlaufs, wenn der Controller als Gewehr gerendert wird), und der Orientierungsvektor des Raumes extendsiert entlang des Pfades des Zielstrahls.

Sie können den zugehörigen Zielstrahl einfach innerhalb des Zeichenhandlers für einen gegebenen Frame mit der [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode von [`XRFrame`](/de/docs/Web/API/XRFrame) erhalten. Der zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) und sein [`transform`](/de/docs/Web/API/XRPose/transform) ist die Transformation, die dem Zielstrahl entspricht. Daher für einen Eingabekontroller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie jetzt den Punkt, von dem der Zielstrahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), angegeben in der Referenzdomäne des Betrachters (`viewerRefSpace`). Das ist alles, was Sie benötigen, um den Zielstrahl zu zeichnen, festzustellen, auf was gezeigt wird, Hit-Tests durchzuführen und so weiter.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, das Sie verwenden können, um Objekte zu rendern, damit sie so erscheinen, als ob sie in der Hand des Betrachters gehalten werden.

**Abbildung: Das Koordinatensystem für den Griffraum der linken Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](dark_left.svg)
**Abbildung: Das Koordinatensystem für den Griffraum der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](dark_right.svg)

Der native Ursprung des Griffraums, der sich um die Mitte der Faust des Spielers befindet, ist (0, 0, 0) innerhalb des lokalen Koordinatensystems der Eingabequelle, während das durch `gripSpace` angegebene [`XRSpace`](/de/docs/Web/API/XRSpace) jederzeit verwendet werden kann, um Koordinaten oder Vektoren vom Raum der Eingabequelle in Weltkoordinaten umzuwandeln (oder umgekehrt).

Das bedeutet, dass Sie, wenn Sie ein 3D-Modell zur Darstellung Ihres Controllers, der Hände des Avatars oder irgendetwas anderes verwenden, das die Position des Controllers im Raum repräsentiert, den `gripSpace` als Transformationsmatrix verwenden können, die das Modell des Objekts korrekt positioniert und ausrichtet, um es zu rendern. Dazu muss die Transformation verwendet werden, um den Griffraum in das Weltkoordinatensystem zu konvertieren, das von WebGL für Renderzwecke verwendet wird.

**Abbildung: Zuordnung des Griffraums zum Weltkoordinatensystem. Die Distanzen _x_, _y_ und _z_ zusammen ergeben die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen dem Griffraum und dem Weltkoordinatensystem zeigt](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung sich an _G_ befindet, am Mittelpunkt des Griffs des Benutzers am Controller, der direkt vom Benutzer wegzeigt, parallel zur _z_-Achse. Relativ zum Ursprung des Weltkoordinatensystems, _W_, befindet sich der Ursprung des Griffraums _x_ Einheiten nach rechts, _y_ Einheiten nach oben und _z_ Einheiten weiter entfernt. Aufgrund der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da sich der Griffraum weiter entlang der _z_-Achse befindet und somit in der negativen Richtung ist.

Wenn der Controller stattdessen links vom Benutzer und näher bei ihm wäre als der Ursprung des Weltkoordinatensystems (oder möglicherweise hinter dem Benutzer, wenn der Benutzer sich am Ursprung befindet, was jedoch eine unangenehme Weise ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre weiterhin positiv, es sei denn, der Controller wurde unterhalb des Weltkoordinatenursprungs bewegt.

Dies wird im Diagramm unten gezeigt, in dem sich der Controller unten und links vom Weltkoordinatenursprung befindet, wobei der Controller auch näher bei uns ist als der Ursprung. Infolgedessen sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Zuordnung eines Griffraums zum Weltkoordinatenursprung, wenn sich der Controller unterhalb und links vom Weltkoordinatenursprung befindet und näher bei uns ist als der Weltkoordinatenursprung.**
![Die Beziehung zwischen einem anderen Griffraum und dem Weltkoordinatensystem](gripspace-on-worldspace-diag.svg)

### Gamepad-Aufzeichnung

Jede Eingabequelle hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, falls nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen Steuerungen und Bedienelemente auf dem Controller beschreibt. Wenn das Eingabegerät nur die primären Bewegungssensoren, eine Quetschsteuerung und eine Taste hat, hat es möglicherweise keine `Gamepad`-Aufzeichnung. Wenn jedoch das `gamepad` vorhanden ist, können Sie es verwenden, um die auf dem Controller verfügbaren Tasten und Achsen zu identifizieren und abzufragen.

Obwohl die `Gamepad`-Aufzeichnung durch die [Gamepad API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird sie nicht tatsächlich von der Gamepad API verwaltet und funktioniert nicht genau gleich. Weitere Details zu fortgeschrittenen Controllern mit dem Gamepad-Objekt finden Sie unter [Advanced controllers using the gamepad object](#fortgeschrittene_controller_mit_dem_gamepad-objekt).

#### Profilstrings

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen**-Strings haben, die sich im Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) befinden und die angeben, wie die Eingabequelle innerhalb der 3D-Welt visuell dargestellt werden soll sowie wie die Eingabequelle funktioniert. Die Verwendung dieser Profile wird weiter unten unter [Input profiles](#eingabeprofile) kurz beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erzeugen, die zusammen mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät stammt, aber so präsentiert wird, als ob sie es wäre. Wenn ein XR-Gerät einen Modus bereitstellt, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle für die Dauer der Aktionsverarbeitung zu repräsentieren.

Dies ist notwendig, weil die Trennung zwischen standardmäßigen Eingabegeräten und XR-Eingabequellen gewahrt bleibt. Eine künstliche Quelle wird zur Repräsentation der externen Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) verwendet.

## Eingabequellen verwalten

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie in der Lage sein, Informationen über jede einzelne zu erhalten, einschließlich ihrer Position und Orientierung, ihres Zielstrahls (falls für Ihre Anforderungen relevant) und Details, die Ihnen helfen können, zu entscheiden, wie die Eingabequelle optisch dargestellt werden soll, wenn überhaupt. Sie müssen auch in der Lage sein, zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; zum Beispiel, wenn der Benutzer zwei Controller hat, welcher wird zur Manipulation von UI-Elementen verfolgt, oder werden beide?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen aufzulisten, Profilinformationen über jede Eingabequelle zu überprüfen und zu entscheiden, wie jeder Eingabekontroller verwendet werden soll.

### Eingabequellen auflisten

Die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentierte WebXR-Sitzung hat eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, die eine _live_ Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Aufgrund der Tatsache, dass die Inhalte der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die jede Eingabequelle in der Liste repräsentieren, schreibgeschützt sind, werden Änderungen an diesen Eingaben vom WebXR-System vorgenommen, indem der Datensatz der Quelle gelöscht und ein neuer hinzugefügt wird, um ihn zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, wann immer sich eine oder mehrere der Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder aus dieser entfernt wird.

Wenn Sie zum Beispiel auf dem Laufenden bleiben müssen, welcher Controller in welcher Hand des Spielers gehalten wird, könnten Sie so etwas tun:

```js
let inputSourceList = NULL;
let leftHandSource = NULL;
let rightHandSource = NULL;

xrSession.addEventListener("inputsourceschange", (event) => {
  inputSourceList = event.session.inputSources;

  inputSourceList.forEach((source) => {
    switch (source) {
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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Sitzungerstellungs-Callback der Sitzung erstmalig ausgeführt wird, sodass Sie es verwenden können, um die Eingabequellenliste so schnell wie möglich beim Start zu laden. Das Ereignis wird als ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) geliefert, welches drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen verändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die auf die Eingabequellen hinweisen, die neu zum XR-System hinzugefügt wurden.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die auf die Eingabequellen hinweisen, die aus dem XR-System entfernt wurden.

### Das Profil der Eingabe identifizieren

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine live Liste der WebXR-Eingabeprofile enthält, welche auf die Eingabequelle anwendbar sind, in der Reihenfolge der Spezifität von am spezifischsten zu am wenigsten spezifischen.

Um irgendetwas Wesentliches zu tun, was das Durchsuchen von Profilen über die grundlegende Identifizierung von Funktionen hinaus betrifft, müssen Sie die JSON-Profilbibliothek aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry) importieren.

Weitere Details zur Arbeit mit Eingabeprofilen finden Sie unter [Input profiles](#eingabeprofile).

### Den primären Controller auswählen

Um Probleme zu vermeiden, die durch mehrere Controller entstehen könnten, die unbeabsichtigt die UI gleichzeitig manipulieren, kann es sein, dass Ihre App einen "primären" Controller benötigt. Dieser Controller würde dann nicht nur die Verantwortung dafür übernehmen, durch die Benutzeroberfläche Ihrer App zu klicken, sondern auch als "Haupthand" betrachtet werden, während andere Controller dann als Nebenhand oder zusätzliche Controller betrachtet würden.

> [!NOTE]
> Das bedeutet nicht, dass Ihre App _verpflichtet_ ist, einen primären Controller zu bestimmen. Wenn sie es jedoch tut, können diese Strategien helfen.

Es gibt einige Möglichkeiten, wie Sie einen primären Controller bestimmen können. Wir werden uns drei ansehen.

#### Händigkeit

Die direkteste Möglichkeit, um zu entscheiden, welcher Controller primär ist, besteht darin, eine benutzerdefinierbare "Händigkeit"-Präferenz zu haben, die der Benutzer einstellt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann jede Eingabequelle betrachten und eine auswählen, die dieser Präferenz entspricht, falls verfügbar, und andernfalls auf eine andere Steuerung zurückgreifen, wenn kein Controller in dieser Hand liegt.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieser Code-Schnipsel geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, sucht dann jedoch nach einer, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der im `user`-Objekt angegebenen übereinstimmt. Wenn es passt, wird diese Eingabequelle als primär ausgewählt.

#### Erster-verwendet

Eine andere Option besteht darin, die erste Eingabe zu verwenden, bei der der Benutzer die Auswahlaktion ausführt. Der folgende Code geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, und richtet dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ein, der die Quelle des Ereignisses als primäre Eingabequelle erfasst. Dann wird der `select`-Ereignishandler durch die Funktion `realSelectHandler()` ersetzt, die für alle zukünftigen `select`-Ereignisse verwendet wird. Danach wird das Ereignis an `realSelectHandler()` weitergegeben, um das Ereignis wie normal zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Das Ergebnis ist, dass wir die primäre Eingabequelle festlegen, sobald ein `select`-Ereignis empfangen wird, unabhängig davon, welche Eingabequelle es ausgelöst hat, das Ereignis von da an normal behandeln und von da an die Ereignisse ohne weitere Sorgen um die primäre Eingabequelle verarbeiten.

#### Vom Benutzer ausgewählt

Die komplexeste Möglichkeit, eine primäre Eingabequelle zu bestimmen, ist höchst flexibel, kann aber viel Arbeit erfordern, um sie zu implementieren. In diesem Szenario durchlaufen Sie die Liste der Eingabequellen und deren Profile, um Informationen über jede Eingabequelle zu sammeln, dann stellen Sie eine Benutzeroberfläche bereit, die jede Eingabe beschreibt, und ermöglichen es dem Benutzer, den Eingaben Verwendungen zuzuordnen. Dies gut zu tun, könnte ein großer Aufwand sein, könnte aber für komplexe Apps nützlich sein, die möglicherweise mehrere Benutzereingaben beinhalten.

Ein Großteil der Informationen, die Sie benötigen, um dies zu implementieren, finden Sie in dem Abschnitt über [Input profiles](#eingabeprofile), unten. Details sind jedoch über den Umfang dieses Artikels hinaus.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einem Satz von Informationen entsprechen, die diese Eingabequelle beschreiben und wie sie verwendet werden kann. Diese Namen finden sich in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft der Eingabequelle, und das offizielle Verzeichnis dieser Profilstrings wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub verwaltet.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profil-Daten zu lokalisieren, indem man das `profileId`-Feld findet, das den Wert `generic-trigger-squeeze-touchpad` hat.

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

Dies ist ein Controller, unabhängig davon, in welcher Hand er sich befindet (und selbst wenn er derzeit keiner spezifischen Hand zugeordnet ist), mit drei Komponenten: einem Standardabzug, einer Standardsqueeze-Eingabe und einem Touchpad. Gemäß der `selectComponentId`-Eigenschaft ist die `xr-standard-trigger`-Komponente diejenige, die für eine primäre Aktion verwendet wird.

Zusätzlich ordnet das `gamepad`-Objekt diese Eingaben dem Gamepad zu und weist den Abzug, das Quetschen und die Touchpad-Berührung der Tastenliste der Eingabequelle zu und weist die "Achsen" des Touchpads der Achsliste zu.

Die Liste in `profiles` befindet sich in umgekehrter Spezifitätsreihenfolge; das heißt, die präziseste Beschreibung ist zuerst, und die unpräziseste Beschreibung ist zuletzt. Der erste Eintrag in der Liste ist typischerweise ein Hinweis auf das präzise Modell des Controllers oder auf ein Modell, mit dem der Controller kompatibel ist.

Zum Beispiel ist Eintrag 0 in `profiles` für einen Oculus Touch-Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Abzug, einer Quetschsteuerung und einem Daumenstick angibt. Obwohl der Oculus Touch-Controller tatsächlich ein Daumenpad anstelle eines Daumensticks hat, ist die Gesamtdescription "nahe genug", dass die Details innerhalb des Profils, das zu diesem Namen passt, es ermöglichen, den Controller nützlich zu interpretieren.

## Aktionen

In WebXR ist eine **Aktion** eine spezielle Art von Ereignis, das ausgelöst wird, wenn der Benutzer eine spezielle Taste am Controller aktiviert. Alle zusätzlichen Knöpfe (sowie Achssteuerungen - Joysticks, zum Beispiel - und dergleichen) werden ausschließlich durch die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) verwaltet. Weitere Details zur Unterstützung dieser zusätzlichen Steuerungen und Knöpfe finden Sie unten unter [Advanced controllers using the gamepad object](#fortgeschrittene_controller_mit_dem_gamepad-objekt).

Die **primäre Aktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Hauptelement zur Steuerung, das einen speziellen Zweck hat, aktiviert. Derzeit gibt es zwei Arten von primärer Aktion:

- Die **primäre Aktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Select"-Eingabe an seinem Controller betätigt. Diese Eingabe kann eine Taste, ein Abzug, ein Trackpad-Berührung oder Klick, ein Sprachbefehl, oder eine spezielle Handgeste oder möglicherweise eine andere Form der Eingabe sein. Wenn zum Beispiel ein Handcontroller mit einem Trackpad, das geklickt werden kann, einer Abzugssteuerung sowie Back- und „Menü“-Tasten ausgestattet ist, ist das Klicken auf das Trackpad wahrscheinlich die primäre Aktion. Einige Controller könnten eine „Select“-Taste haben. Bei einem Gamepad-ähnlichen Controller ist die „A“-Taste wahrscheinlich die primäre Aktion.
- Die **primäre Quetschaktion** ist die Aktion, die aktiviert wird, wenn der Benutzer den Controller quetscht. Dieses "Quetschen" kann durch einen wörtlich anwendenden Drucksensor im Controller erfasst werden oder kann mithilfe eines Abzugs-, einer Handgeste oder eines anderen Mechanismus simuliert werden. Wenn der Eingabekontroller z. B. ein haptischer Handschuh ist, könnte er berichten, dass die primäre Quetschaktion aufgetreten ist, wenn der Benutzer seine Faust macht und quetscht.

Eine gegebene Eingabequelle kann nur eine primäre Aktion und eine primäre Quetschaktion haben, es kann jedoch mehr als eine Kontrolle auf dem Eingabegerät geben, die eingestellt ist, um jede primäre Aktion auszulösen. Der Benutzer könnte beispielsweise seinen Controller so eingestellt haben, dass sowohl das Antippen als auch das Klicken auf das Trackpad eine primäre Aktion erzeugen.

Diese Arten von Eingabeaktionen werden im Folgenden genauer beschrieben.

### Primäre Aktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (die manchmal auf „Select-Aktion“ verkürzt wird) ist eine plattformabhängige Aktion, die auf die Manipulation durch den Benutzer antwortet, indem nacheinander die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) geliefert werden. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine primäre Aktion hat, wird die Eingabequelle als **Hilfseingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum richtet und dann eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das anzeigt, dass der Benutzer die Aktivität, die die primäre Aktion beginnt, ausgeführt hat. Dies könnte eine Geste, das Drücken eines Knopfes oder dergleichen sein.
2. Wenn die primäre Aktion erfolgreich endet (z. B. aufgrund der Tatsache, dass der Benutzer den Knopf oder den Abzug loslässt), anstatt wegen eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nach dem Senden des `select`-Ereignisses _oder_ wenn der Controller, auf dem die Aktion durchgeführt wird, getrennt wird oder sonst nicht mehr verfügbar ist, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Im Allgemeinen sagen Ihnen die `selectstart`- und `selectend`-Ereignisse, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das darauf hinweist, dass die primäre Aktion im Gange ist. Dies könnte ein Controller sein, der mit dem aktivierten Knopf in einer neuen Farbe angezeigt wird, oder das anvisierte Objekt, das aufgenommen und bewegt wird, beginnend, wenn `selectstart` eintrifft und stoppt, wenn `selectend` empfangen wird.

Das `select`-Ereignis ist hingegen das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Ziehen des Abzugs eines Gewehrs in einem Spiel oder so aufwendig wie das Platzieren eines Objekts, das sie im Raum umhergetragen haben, und es an einer neuen Position wieder abzulegen.

Wenn Ihre primäre Aktion eine einfache Abzugsaktion ist und Sie nichts animieren müssen, während der Abzug gezogen ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das `select`-Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen können diese Ereignisse sehr schnell senden, eines nach dem anderen. Die verstrichene Zeit zwischen diesen Ereignissen hängt sowohl vom Hardwareapparat, der die Aktion verursacht, als auch von den Softwaretreibern ab, die die Hardwareaktion interpretieren und in eine Sequenz von Ereignissen umwandeln. Gehen Sie nicht davon aus, dass diese Ereignisse mit einer bestimmten Zeitspanne zwischen ihnen auftreten.

Wenn zum Beispiel die Hardware, die die primäre Aktion verursacht, ein Knopf ist, würden Sie `selectstart` erhalten, wenn der Benutzer den Knopf drückt, dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt eine Reihe von Beispielen, die zeigen, wie `select`-Ereignisse im gesamten Dokumentationsbereich verwaltet werden, wie z. B. im Abschnitt zu [Targeting and the targeting ray](#zielauswahl_und_der_zielstrahl) an anderer Stelle in diesem Artikel.

### Primäre Quetschaktion

Eine **primäre Quetschaktion** ist eine plattformabhängige Aktion, die die [`XRSession`](/de/docs/Web/API/XRSession) [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignisse sendet. Dies wird normalerweise dadurch generiert, dass der Benutzer den Controller quetscht, eine Handgeste macht, die das Greifen etwas nachahmt, oder einen Abzug verwendet (quetscht).

Die Ereignisfolge ist identisch mit denen, die durch die primäre Aktion gesendet werden, abgesehen vom Namen jedes Ereignisses:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, das angibt, dass der Benutzer eine Quetschaktion begonnen hat.
2. Wenn die primäre Quetschaktion erfolgreich endet, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.
3. Dann wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, ob die Quetschaktion erfolgreich war oder nicht.

Zwei häufige Verwendungen für die primäre Quetschaktion bestehen darin, Objekte in der 3D-Welt zu erfassen und/oder aufzuheben und einen Abzug zu quetschen, um eine Waffe in einem Spiel oder einer Simulation abzufeuern.

#### Beispiel

Dieser Beispielcode zeigt eine Reihe von Quetschereignishandlern, die diese Ereignisse implementieren, um das Aufheben und Halten von Objekten aus der Szene zu verwalten. Der Code nimmt die Existenz eines `avatar`-Objekts an, das den Charakter repräsentiert, wie es in mehreren anderen Beispielen auf dieser Seite verwendet wird, sowie die `pickUpObject()`- und `dropObject()`-Funktionen, die das Übertragen eines Objekts aus der Welt in eine bestimmte Hand und das Loslassen eines Objekts aus der Hand und das Zurücklegen in die Welt handhaben.

##### Ein Objekt aufheben: Umgang mit squeezestart-Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird behandelt, indem diese Pose und Transformation wie üblich erhalten und das [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` aufgenommen wird. Wir verwenden dies, um die Hand mit dem Objekt zu verknüpfen, das in dieser Hand gehalten wird.

Der Code identifiziert dann das anvisierte Objekt und, wenn ein Objekt entlang des Zielstrahls gefunden wird, es aufhebt. Das Aufheben eines Objekts beinhaltet zunächst, ob jemand bereits ein Objekt in der Hand hält, indem man `dropObject()` aufruft, um das bereits in der Hand befindliche Objekt fallen zu lassen, das durch `avatar.heldObject[hand]` repräsentiert wird. Wenn ein Objekt bereits in dieser Hand gehalten wird, wird `dropObject()` aufgerufen, um es fallen zu lassen.

Dann wird `pickUpObject()` aufgerufen, indem das anvisierte Objekt als das Objekt angegeben wird, das aus der Szene entfernt und in die angegebene `hand` platziert werden soll. `pickUpObject()` protokolliert auch die ursprüngliche Position des Objekts, somit kann es zu dieser Position zurückgebracht werden, wenn der Quetschvorgang abgebrochen wird.

##### Das Objekt loslassen: Der Quetschereignishandler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Quetschaktion beendet, indem er seinen Griff loslässt. In diesem Beispiel interpretieren wir dies als das Loslassen des aktuell gehaltenen Objekts und das Absetzen in der Szene an der anvisierten Position.

Dieser Code nimmt die Existenz zusätzlicher Funktionen `findTargetPosition()` an, die dem Zielstrahl folgen, bis es zu einer Kollision mit etwas kommt, und dann die Koordinaten zum Platzieren der abgelegten Objekte zurückgibt, sowie `putObject()`, die das in der angegebenen `hand` gehaltene Objekt an die gegebene Position platziert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies, indem Informationen über das Ereignis gesammelt werden, einschließlich der Hand, die ein Objekt ablegt, und der Transformationsdaten des Zielstrahls. Die Transformation des Zielstrahls wird an die vermuteten `findTargetPosition()`-Funktionen weitergegeben, um die Koordinaten zu erhalten, an denen das abgelegte Objekt platziert werden soll.

Mit den Koordinaten können wir dann das Objekt abwerfen, indem wir die `putObject()`-Funktion aufrufen, die als Eingaben die `hand` und die Zielposition benötigt. Diese Funktion hat die Aufgabe, das Objekt aus der angegebenen Hand zu entfernen und in die Szene zurückzusetzen, wobei seine Position so festgelegt wird, dass es auf den durch `findTargetPosition()` zurückgegebenen Koordinaten liegt.

##### Das Quetschen im squeezeend-Handler abbrechen

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird empfangen, nachdem der Quetschvorgang abgeschlossen ist, auch wenn er nicht erfolgreich war. Wir behandeln es, indem wir das aktuell gehaltene Objekt an den Ort zurückbringen, an dem es aufgenommen wurde.

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

Hier wird davon ausgegangen, dass `returnObject()` die Funktion ist, die weiß, wie man das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, so wie es durch `pickUpObject()` im `squeezestart`-Ereignishandler protokolliert wurde.

Hier wird davon ausgegangen, dass `returnObject()` die Funktion ist, die weiß, wie man das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, so wie es durch `pickUpObject()` im `squeezestart`-Ereignishandler protokolliert wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, findet eine ungefähre Sequenz von Ereignissen statt:

1. Der Benutzer drückt die Maustaste, während er sich innerhalb des {{HTMLElement("canvas")}} befindet, der die WebXR-Szene präsentiert.
2. Das Mausereignis wird vom Treiber des XR-Geräts abgefangen.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle zu repräsentieren. Der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend der Liste hinzugefügt, die von der [`XRSession`](/de/docs/Web/API/XRSession)-Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse, die der Aktion entsprechen.
5. Eine primäre Aktion wird generiert und als [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis an die App gesendet, wobei die Quelle auf die neue `XRInputSource` gesetzt wird. Oder, falls die Maus als Nebenhand- oder Sekundärcontroller verwendet wird, wird stattdessen eine Hilfsaktion gesendet.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, dann erhält der DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung erhält dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, das den Abschluss der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle und alle entsprechenden [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse werden gesendet.

Somit ist die transiente Eingabequelle tatsächlich transient - sie existiert nur für die Dauer der Bearbeitung der Eingabe und wird somit nicht in der Eingabequellenliste aufgeführt.

## Straßenrichtung feststellen und Ziele anvisieren

**Straßenrichtung** ist die Richtung, in die der Betrachter blickt. Diese wird nicht über eine Eingabequelle bereitgestellt. Stattdessen wird sie durch die [`XRPose`](/de/docs/Web/API/XRPose) ermittelt, die aus der [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)-Methode des aktuellen Animateframes gewonnen wird. Der Rotationsbestandteil der Transformationsmatrix der Betrachterpose ist die Ausrichtungsrichtung des Betrachters.

Weitere Informationen darüber, wie Sie den Betrachterpose verwenden können, um die Blickrichtung zu bestimmen, finden Sie im Artikel [Viewpoints and viewers](/de/docs/Web/API/WebXR_Device_API/Cameras).

**Zielauswahl** ist die Handlung des Benutzers, der mithilfe einer Eingabequelle in eine bestimmte Richtung zeigt. Die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft der Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und tatsächlich wahrscheinlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), der verwendet werden kann, um die Orientierung des Zielstrahls relativ zur Ausrichtungsrichtung des Betrachters zu bestimmen.

Dies kann möglicherweise nicht beinhalten, auf ein bestimmtes Objekt in der 3D-Welt tatsächlich zu zeigen; dies müssen Sie selbst mithilfe von Hit-Tests - das heißt, durch Überprüfen, ob der Zielstrahl mit irgendwelchen Objekten in Ihrer Szene kollidiert - feststellen.

### Zielauswahl und der Zielstrahl

Der Zielstrahl, welcher ein Strahl ist, dessen Ursprung sich am Ursprung des Zielstrahlraums befindet und in die Richtung zeigt, in die der Benutzer das Controllergerät zeigt. Der Zielstrahl wird unter Verwendung eines [`XRSpace`](/de/docs/Web/API/XRSpace) definiert, dessen Ursprung sich an der Quelle des Zielstrahls befindet (typischerweise das vom Benutzer abgewandte Ende des Controllers oder dessen Darstellung in der 3D-Welt), und dessen Orientierung -Z extendsiert vom Controller in die gleiche Richtung wie [`XRInputSource`](/de/docs/Web/API/XRInputSource)'s [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace).

Dieser Raum befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft der Eingabequelle. Er kann verwendet werden, um die Richtung zu bestimmen, in die der Controller zeigt, und den Ursprung und die Orientierung des Zielstrahls zu bestimmen. Dies kann durch Beispielcode, wie dem folgenden, der einen [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignishandler implementiert, der diese Information benötigt, demonstriert werden. Wie gewohnt wird in diesem Code angenommen, dass [glMatrix](https://glmatrix.net/) zur Durchführung der Matrix- und Vektorrechnung verwendet wird:

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

Diese Funktion erhält den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im [Quaternion](/de/docs/Glossary/quaternion) `targetDirection`. Mit dem

Schließlich wird der Zielstrahlraum in die lokale Konstante `targetRaySpace` geladen. Diese wird dann verwendet, wenn die [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode von [`XRFrame`](/de/docs/Web/API/XRFrame) aufgerufen wird, um ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zu erstellen, das die Position und Orientierung des Zielstrahls in der Referenzdomäne des Betrachters `viewerRefSpace` darstellt. Falls diese `null` ist, kehrt der Ereignishandler ohne weitere Ausführung zurück.

Die Transformation des Zielstrahls wird aus der [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft der Pose erhalten und in der lokalen `targetRayTransform` gespeichert. Diese wird wiederum (in diesem Beispiel durch eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl kollidiert. Wenn der Zielstrahl mit einem Objekt in der Szene kollidiert, können wir damit tun, was immer nötig ist.

Wenn Sie die tatsächliche Position des Ursprungs des Zielstrahls und die Richtung des Strahls selbst auflösen müssen, können Sie das wie folgt tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt anvisiert wird, verfolgen Sie den Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Prozess wird als **Hit-Testing** oder **Kollisionserkennung** bezeichnet. Der Ansatz, den Sie für das Hit-Testing wählen, hängt sehr stark von den spezifischen Bedürfnissen Ihrer App ab. Die erste Frage ist: Wollen Sie die Kollisionen mit virtuellen Objekten oder Gelände erkennen, mit realen Objekten oder Gelände, oder beides?

In jedem Fall müssen Sie, um das anvisierte Objekt zu identifizieren, feststellen, ob der durch die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der [`XRInputSource`](/de/docs/Web/API/XRInputSource) angegebene Strahl mit irgendwelchen Objekten in der Szene, ob virtuell oder realweltlich, kollidiert.

Siehe [Targeting and hit detection](/de/docs/Web/API/WebXR_Device_API/Targeting) für einen detaillierteren Blick darauf, was involviert ist.

### Handgehaltene Objekte präsentieren

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft einer Eingabequelle identifiziert ein [`XRSpace`](/de/docs/Web/API/XRSpace), das den Ursprung und die Orientierung beschreibt, die beim Rendern eines Objekts verwendet werden soll, damit es so scheint, als ob es in der gleichen Hand wie seine Eingabequelle gehalten wird. Dieser Raum ist dazu gedacht, beim Zeichnen eines Models des handgehaltenen WebXR-Eingabecontrollers, der durch das Objekt [`XRInputSource`](/de/docs/Web/API/XRInputSource) repräsentiert wird, verwendet zu werden, kann jedoch genauso gut für die Zeichnung eines beliebigen Objekts verwendet werden, wie eines Balls, eines Werkzeugs oder einer Waffe. Wir haben den [gripSpace](#griffraum) oben abgedeckt, lassen Sie uns aber sehen, wie er verwendet werden kann, um objekte zu zeichnen, die die Hand oder in der Hand repräsentieren.

Da sich der Ursprung des gripSpace im Mittelpunkt des Griffs der Hand befindet, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie jede benötigte Offset-Transformation an, um den Ursprung auf den Startpunkt für das Rendern Ihres Objekts zu verschieben, während Sie jede erforderliche Rotation anwenden, um Ihr Modell korrekt in Einklang mit der Orientierung des gripSpace auszurichten.

## Fortgeschrittene Controller mit dem Gamepad-Objekt

Eine [`XRInputSource`](/de/docs/Web/API/XRInputSource) hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, falls nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugriff auf Gamepad-ähnliche Knöpfe, Achssteuerungen (wie Joysticks oder Daumenpads) und so weiter bietet. Dies kann dieselben Knöpfe umfassen, die die Standardfunktionen der [`XRInputSource`](/de/docs/Web/API/XRInputSource) auslösen, kann aber auch eine beliebige Anzahl zusätzlicher Knöpfe und Bedienelemente beinhalten.

> [!NOTE]
> Während `Gamepad` durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert wird, wird es nicht von der Gamepad API verwaltet, daher dürfen Sie keine Methoden der Gamepad API damit versuchen. Der Objekttyp werde aus Bequemlichkeit wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerungen über die `Gamepad`-Aufzeichnung, entweder weil sie es nicht unterstützt oder weil sie keine zusätzlichen Steuerungen darauf hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um Zugriff auf spezielle Knöpfe, Trackpads usw. zu erhalten, sondern bietet auch eine Möglichkeit, direkter auf die Steuerungen zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Quetscheingaben dienen, da diese in seine [`buttons`](/de/docs/Web/API/Gamepad/buttons)-Liste aufgenommen sind.

Da diese Verwendung der `Gamepad`-Schnittstelle laut Bequemlichkeit erfolgt und nicht als echte Anwendung der Gamepad API, gibt es mehrere Unterschiede zwischen der Verwendung im Zusammenhang mit WebXR und der Verwendung in Gamepad API-Anwendungen. Der signifikanteste, aber nicht der einzige Unterschied ist, dass WebXR die `xr-standard`-Gamepad-Zuweisung hinzufügt. Siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft für weitere Unterschiede. Diese Gamepad-Zuweisung definiert, wie die Steuerungen an einem typischen, einhändigen, handgehaltenen VR-Controller den Gamepad-Kontrollen zugeordnet werden.

## Eingaben von Nicht-WebXR-Quellen integrieren

Manchmal müssen Sie einen Weg finden, um den Benutzer in der Lage zu versetzen, Eingaben mit Controllern zu machen, die extern zu WebXR sind. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch Nicht-XR-Spielgeräte, Netzwerkeingaben oder andere Datenquellen verwenden, um Benutzersteuerungen zu simulieren. Obwohl WebXR keine Unterstützung bietet, um direkt diese Eingabegeräte mit der XR-Szene zu verbinden, können Sie die Eingabedaten selbst erfassen und anwenden.

Angenommen, Eingaben werden verwendet, um einen Avatar innerhalb der Simulation zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben verwendet, um den Avatar auf folgende Weisen zu beeinflussen, unter Verwendung von Daten, die von den Nicht-XR-Eingabegerät gesammelt werden:

- Position
  - : Die Position des Avatars wird verändert, indem ein [Delta](/de/docs/Glossary/delta) auf die zuvor bekannte Position angewendet und dann der Referenzraum des Avatars durch einen neuen ersetzt wird, dessen Transformation die neue Position widerspiegelt.
- Orientierung
  - : Die Orientierung oder die Blickrichtung des Avatars wird verändert, indem ein Delta zur Rotation um die drei Achsen angewendet und dann der Orientierungsvektor aktualisiert und der Referenzraum neu berechnet wird.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie das Verwenden eines Objekts oder einer Waffe, Springen oder jede andere Aktivität, die nichts mit elementarer Bewegung und Rotation zu tun hat.

Einige Eingaben werden stattdessen verwendet, um die Anwendung zu steuern, anstatt den Avatar. Zum Beispiel könnte ein Knopf ein Optionsmenü öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menü geöffnet ist, könnten Eingaben, die normalerweise zur Steuerung des Avatars verwendet werden, stattdessen zur Steuerung der Menüschnittstelle angewendet werden.

### Verwenden von Tastatur- und Mausereignissen

Das Ergreifen von Eingaben von der Tastatur und Maus erfolgt genauso wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie handhaben möchten, um die Eingaben zu erhalten, die Sie benötigen. Was Sie mit diesen Eingaben machen, ist interessant.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden, um Informationen über den Avatar und seine Weltansicht zu verfolgen. Wir möchten, dass der Spieler die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> verwenden kann, um vorwärts, links, rückwärts und rechts zu gehen. Da wir die Position des Avatars, die von der Tastatur und Maus in zusätzlich zu allem, was die XR-Hardware möglicherweise tun könnte, beeinflusst wird, verwalten, müssen wir diese Informationen getrennt halten und als Transformation anwenden, bevor wir den Avatar (oder die Welt aus der Sicht des Avatars) rendern.

Um dies zu erreichen, enthalten wir im `avatar`-Objekt eine `posDelta`-Eigenschaft, vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint), die die Offsets enthält, die auf alle drei Achsen angewendet werden, um die Position des Avatars (den Ursprung des Referenzraums der Betrachterpose) so anzupassen, dass Bewegungen und Rotationen aus der Tastatur und Maus berücksichtigt werden.

Der entsprechende Code für Tastatureingaben könnte etwa folgendermaßen aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie einige Kenntnisse der Physik anwenden, um die Beschleunigung über die Zeit basierend darauf, wie lange die Taste gedrückt gehalten wird, usw. zu ändern.

### Eingaben auf die Szene anwenden

Jetzt, da wir die Deltas haben, die auf die Position und Orientierung angewendet werden müssen - in unserem Beispiel in den `posDelta`- und `orientDelta`-Eigenschaften unseres `avatar`-Objekts - können wir den Code schreiben, um diese Änderungen anzuwenden. Da wir bereits die Szene nach einem Zeitplan rendern, können wir einfach den Code zum Anwenden dieser Änderungen dort hinzufügen, zusammen mit der Vorbereitung und dem Zeichnen der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die `drawFrame()`-Funktion, die hier gezeigt wird, ist der Callback, der aufgerufen wird, wenn es Zeit ist, das Frame zu zeichnen, wie es durch den Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) etabliert wurde. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir in Kürze definieren werden; sie nimmt das `avatar`-Objekt und verwendet dessen Informationen, um das Referenzframe des Avatars zu aktualisieren.

Danach geht alles wie gewohnt weiter, indem die Pose des Betrachters aus dem aktualisierten Referenzraum erfasst, der nächste Frame-Callback über `requestAnimationFrame()` angefordert und dann fortgesetzt wird, WebGL einzurichten und die Szene zu zeichnen. Der Zeichnungskreis und andere relevante Codes finden sich im Beispiel [Movement, orientation, and motion](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die `applyExternalInputs()`-Methode nimmt das `avatar`-Objekt und ersetzt seine `referenceSpace`-Eigenschaft durch einen neuen Referenzraum, der die aktualisierten Deltas integriert.

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

- [Targeting and hit detection](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Standpunkte und Betrachter: Kamerasimulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
