---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("WebXR Device API")}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine völlig virtuelle Szene zu zeigen oder die Realität durch Hinzufügen oder Ändern der Umgebung zu erweitern. Um ein erfüllendes und ansprechendes Erlebnis zu schaffen, muss der Benutzer in der Lage sein, damit zu interagieren. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden sehen wir uns an, wie die Eingabegeräteverwaltungsfunktionen von WebXR genutzt werden können, um festzustellen, welche Eingabequellen verfügbar sind, und wie diese Quellen überwacht werden können, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu handhaben.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei Hauptkategorien: Zielsteuerung und Aktionen. Zielsteuerung ist die Spezifikation eines Punkts im Raum durch die Benutzereingabe. Dies kann bedeuten, dass der Benutzer auf einen Punkt auf dem Bildschirm tippt, seine Augenbewegungen verfolgt oder einen Joystick oder Controller mit Bewegungssensor verwendet, um einen Cursor zu bewegen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Button, als auch Quetschaktionen, wie das Betätigen eines Triggers oder das Festigen des Griffs, während man haptische Handschuhe trägt.

Durch die Kombination dieser beiden Eingabetypen mit der Änderung der Blickposition und/oder -orientierung durch das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung schaffen.

### Typen von Eingabegeräten

WebXR unterstützt eine Vielzahl unterschiedlicher Gerätetypen, um Zielsteuerung und Aktionsinputs zu handhaben. Diese Geräte umfassen, sind jedoch nicht beschränkt auf:

- Bildschirmberührungen (insbesondere, aber nicht zwingend nur auf Telefonen oder Tablets) können verwendet werden, um gleichzeitig sowohl Zielsteuerung als auch Auswahlausführung zu ermöglichen.
- Bewegungssteuerungssensoren, die Beschleunigungsmesser, Magnetometer und andere Sensoren für die Bewegungserfassung und Zielsteuerung verwenden, und die möglicherweise darüber hinaus eine beliebige Anzahl von Knöpfen, Joysticks, Daumenpads, Touchpads, Kraftsensoren und so weiter beinhalten, um zusätzliche Eingabequellen sowohl für die Zielsteuerung als auch die Auswahl zu bieten.
- Zusammenpressbare Trigger oder Handschuhgriffpolster zur Durchführung von Quetschaktionen.
- Sprachbefehle mittels Spracherkennung.
- Räumlich verfolgte, gelenkige Hände, wie [verkabelte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Zielsteuerung als auch Quetschaktionen bereitstellen sowie Auswahl, wenn sie mit Tasten oder anderen Quellen für Auswahlausführungen ausgestattet sind.
- Einknopf-Klickgeräte.
- Blickverfolgung (Verfolgung der Augenbewegungen, um Ziele auszuwählen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen zu jeder Eingabequelle beinhalten, in welcher Hand sie gehalten wird (falls zutreffend), welches Zielsteuerungsverfahren sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die verwendet werden können, um den Zielstrahl zu zeichnen und das gezielte Objekt oder den Standort zu finden, sowie Profile-Strings, die die bevorzugte Darstellung der Steuerung im Sichtbereich des Benutzers beschreiben, als auch wie die Eingabe funktioniert.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zielsteuerung
  - : Überwachung von Richtungssteuerungen (zum Beispiel einen bewegungserkennenden Zeiger oder einen Joystick oder ein Trackpad), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, wobei die Zielsteuerung jedoch Ihnen überlassen bleibt. Siehe [Blick- und Zielsteuerung](#blickrichtung_und_zielsetzung) für weitere Informationen.
- Auswahl
  - : Verwendung des Hauptauswahlknopfes oder anderer Eingaben am Controller, um die angezielte Richtung (oder das Objekt, auf das es zeigt) auszuwählen oder um eine Aktion auszuführen. Details zur Hauptaktion finden Sie unter [Hauptaktion](#hauptaktion).
- Zusammendrücken
  - : Zusammendrücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszulösen. Der Abschnitt [Hauptquetschaktion](#primäre_quetschaktion) beschreibt dies ausführlicher.

Alle zusätzlichen Fähigkeiten, die ein WebXR-Controller möglicherweise hat, werden über das `gamepad`-Objekt der Eingabequelle zugegriffen. Dieses Objekt bietet Zugriff auf alle Knöpfe, Achsen, Trackpads und dergleichen, die Teil des Controllers sein können. Siehe [Erweiterte Controller mit dem Gamepad-Objekt verwenden](#erweiterte_controller_mit_dem_gamepad-objekt_verwenden), um zu erfahren, wie Sie diese Controller verwenden können.

### Instanz-Eigenschaften von Eingabequellen

Jede einzelne `XRInputSource` hat eine Reihe von Eigenschaften, die die verfügbaren Achsen und Knöpfe der Eingabe, die Hand, in der der Benutzer sie hält, und wie die Eingabequelle verwendet wird, um die Zielsteuerung im 3D-Raum zu handhaben, beschreiben.

#### Handpräferenz

**Handpräferenz**, angezeigt durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist ein String, der anzeigt, in welcher Hand des Betrachters der Controller ist: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht handgehalten ist oder unbekannt ist, in welcher Hand sich der Controller befindet.

Handpräferenz kann für verschiedene Dinge verwendet werden, einschließlich der Auswahl eines geeigneten Meshs zur Repräsentation des Controllers in der Ansicht und um ihn in der richtigen Hand darzustellen, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App das Konzept der "Haupthand" und "Nebenhand" zur Bestimmung der Funktionalität eines Controllers verwendet; in einem Spiel könnte zum Beispiel der Controller der Haupthand die Waffe des Spielers sein, während der Controller der Nebenhand verwendet werden könnte, um die Positionierung eines Schildes zu steuern.

#### Zielstrahlmodus

Der Zielstrahlmodus ist ein String, der sich in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft befindet. Er beschreibt die Technik, die zur Bestimmung des Zielstrahls verwendet wird und wie er dem Benutzer visuell präsentiert werden soll, falls er dargestellt wird.

Wenn der Zielstrahlmodus `gaze` ist, ist der Ursprung des Strahls beim Betrachter und zielt in die Richtung, in die der Benutzer blickt. Diese Gaze-Eingabemethode ist ziemlich einfach und benötigt keine speziellen Steuerungen, da sie auf der Blickrichtung basiert, die vom Headset oder einem anderen Gerät, das die Richtung des Gesichts des Betrachters bestimmt, gemeldet wird. Der Zielstrahl sollte von zwischen den Augen aus in eine Richtung senkrecht zum Gesicht des Betrachters ausgehen.

Flexibler ist der Modus `tracked-pointer`, bei dem der Ursprung des Strahls bei einem handgehaltenen Controller oder System zur Handverfolgung ist und in die Richtung zeigt, in die der Controller zeigt. Der Strahl dehnt sich in einer Richtung aus, die von der verwendeten Plattform und dem Controller definiert wird, falls diese definiert ist; andernfalls erstreckt sich der Strahl in die gleiche Richtung, in die der Benutzer mit ihrem Zeigefinger zeigt, würde dieser ausgerstreckt sein.

Der dritte und letzte Zielstrahlmodus findet sich am häufigsten auf mobilen Geräten wie Smartphones und Tablets. Der `screen`-Modus zeigt an, dass der Zielstrahl basierend auf der Interaktion des Benutzers mit dem WebXR-Kontext bestimmt wird, indem der Bildschirm auf irgendeine Weise genutzt wird – höchstwahrscheinlich durch das Tippen auf den Bildschirm oder das Ziehen des Zielstrahls mit den Fingern.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der die Position und Orientierung des Zielstrahls beschreibt, wird in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft gefunden. Der native Ursprung dieses Raums befindet sich an dem Punkt, von dem der Zielstrahl ausgeht (zum Beispiel an der vorderen Spitze des Controllers oder dem Ende eines Gewehrlaufs, falls der Controller als Gewehr dargestellt wird), und der Orientierungsvektor des Raums erstreckt sich entlang des Pfads des Zielstrahlstrahls.

Sie können den dem `targetRaySpace` entsprechenden Zielstrahl einfach innerhalb des Zeichenhandlers für einen bestimmten Frame mit der [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode von [`XRFrame`](/de/docs/Web/API/XRFrame) abrufen. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose)'s [`transform`](/de/docs/Web/API/XRPose/transform) ist die Transformation, die dem Zielstrahl entspricht. Somit können sie für einen Eingabecontroller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie nun den Punkt, von dem der Zielstrahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), angegeben im Referenzraum des Betrachters (`viewerRefSpace`). Das ist alles, was Sie brauchen, um den Zielstrahl zeichnen zu können, zu bestimmen, was anvisiert wird, Trefferprüfungen durchzuführen und so weiter.

#### Halteraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, den Sie verwenden können, um Objekte so anzuzeigen, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Das Koordinatensystem für den Halteraum der linken Hand.**
![Ein Diagramm, das zeigt, wie der Halteraum das lokale Koordinatensystem der Hand des Spielers relativ zur Welt anzeigt.](dark_left.svg)
**Abbildung: Das Koordinatensystem für den Halteraum der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Halteraum das lokale Koordinatensystem der Hand des Spielers relativ zur Welt anzeigt.](dark_right.svg)

Der native Ursprung des Halteraums, der sich um die Mitte der Faust des Spielers befindet, ist (0, 0, 0) im lokalen Koordinatensystem der Eingabequelle, während der [`XRSpace`](/de/docs/Web/API/XRSpace), der durch `gripSpace` angegeben wird, jederzeit verwendet werden kann, um Koordinaten oder Vektoren vom Raum der Eingabequelle in Weltkoordinaten (oder umgekehrt) zu konvertieren.

Das bedeutet, wenn Sie ein 3D-Modell verwenden, um Ihren Controller oder die Hände des Avatars des Spielers oder etwas anderes Repräsentatives für die Position des Controllers im Raum darzustellen, kann der `gripSpace` als Transformationsmatrix verwendet werden, die das Objektmodell richtig positioniert und ausrichtet für das Rendering. Dazu ist es notwendig, die Transformation zu verwenden, um den Halteraum in das Koordinatensystem der Welt zu konvertieren, das von WebGL für Renderzwecke verwendet wird.

**Abbildung: Abbilden des Halteraums auf das Weltkoordinatensystem. Die Abstände _x_, _y_ und _z_ bilden gemeinsam die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Halteraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen dem Halteraum und dem Weltraum zeigt](gripspace-on-worldspace.svg)

Im oben gezeigten Diagramm sehen wir den Halteraum, dessen Ursprung bei _G_ liegt, an der Mitte des Griffs des Benutzers auf dem Controller, der direkt vom Benutzer weg zeigt, parallel zur _z_-Achse. Relativ zum Ursprung des Weltraums, _W_, befindet sich der Ursprung des Halteraums _x_ Einheiten nach rechts, _y_ Einheiten darüber und _z_ Einheiten weiter weg. Angesichts der Ausrichtung der Achsen können die Koordinaten des Halteraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da der Halteraum weiter entlang der _z_-Achse liegt und somit in die negative Richtung weist.

Wäre der Controller stattdessen links vom Betrachter und näher an seiner Mitte als der Ursprung des Weltraums positioniert (oder möglicherweise hinter dem Benutzer, wenn sich der Benutzer am Ursprung befindet, auch wenn dies eine unangenehme Art ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre immer noch positiv, es sei denn, der Controller wird unter den Ursprung des Weltraums bewegt.

Dies wird im folgenden Diagramm gezeigt, in dem sich der Controller unterhalb und links des Ursprungs des Weltraums befindet, wobei der Controller auch näher bei uns ist als der Ursprung. Infolgedessen sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Abbilden eines Halteraums auf den Weltursprung, wenn der Controller unterhalb und links vom Weltursprung positioniert ist und näher bei uns liegt als der Weltursprung.**
![Die Beziehung zwischen einem weiteren Halteraum und dem Weltraum](gripspace-on-worldspace-diag.svg)

#### Gamepad-Aufzeichnung

Jede Eingabequelle verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, falls nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen Steuerungen und Widgets beschreibt, die auf dem Controller verfügbar sind. Wenn das Eingabegerät nur die primären Bewegungssensoren, eine Quetschsteuerung und einen Button hat, hat es möglicherweise keine `Gamepad`-Aufzeichnung. Wenn jedoch das `gamepad` vorhanden ist, können Sie es verwenden, um die Knöpfe und Achsen auf dem Controller zu identifizieren und abzufragen.

Während der `Gamepad`-Datensatz durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) Spezifikation definiert wird, wird er nicht tatsächlich von der Gamepad API verwaltet und funktioniert nicht genau gleich. Siehe [Erweiterte Controller mit dem Gamepad-Objekt verwenden](#erweiterte_controller_mit_dem_gamepad-objekt_verwenden) für weitere detaillierte Informationen.

#### Profil-Strings

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen**-Strings haben, die sich in dem Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) befinden, von denen jeder eine bevorzugte visuelle Repräsentation der Eingabequelle innerhalb der 3D-Welt sowie ihre Funktionsweise beschreibt. Die Verwendung dieser Profile wird kurz unter [Eingabeprofile](#eingabeprofile) beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erstellen, um in Verbindung mit einer Aktion verwendet zu werden, die nicht wirklich von diesem Gerät ausgeht, aber so präsentiert wird, als ob sie es wäre. Wenn ein XR-Gerät zum Beispiel einen Modus bietet, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt erstellt werden, um die simulierte Eingabequelle für die Dauer der Handhabung der Aktion zu repräsentieren.

Dies ist notwendig aufgrund der Trennung, die zwischen Standard-Eingabegeräten und XR-Eingabequellen aufrechterhalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) zu repräsentieren.

## Verwalten von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie in der Lage sein, Informationen über jede einzelne zu erhalten, einschließlich ihrer Position und Orientierung, ihres Zielstrahls (falls zutreffend) und Details, die Ihnen helfen können, zu entscheiden, wie die Eingabequelle visuell präsentiert werden soll, falls überhaupt. Sie müssen auch in der Lage sein, zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; zum Beispiel, wenn der Benutzer zwei Controller hat, welchen er für die Manipulation von UI-Elementen verfolgt, oder ob beide verwendet werden sollen.

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen zu enumerieren, Profilinformationen über jede Eingabequelle zu untersuchen und zu entscheiden, wie jeder Eingabesteuerer verwendet werden soll.

### Enumerieren von Eingabequellen

Die durch das [`XRSession`](/de/docs/Web/API/XRSession) Objekt dargestellte WebXR-Sitzung verfügt über eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources) Eigenschaft, die eine _live_ Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Aufgrund der Tatsache, dass der Inhalt der [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekte, die jede Eingabequelle in der Liste repräsentieren, schreibgeschützt ist, nimmt das WebXR-System Änderungen an diesen Eingaben vor, indem es den Datensatz der Quelle löscht und einen neuen hinzufügt, um ihn zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) Ereignis wird an Ihre `XRSession` gesendet, wann immer sich eine oder mehrere der Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder daraus entfernt wird.

Zum Beispiel, wenn Sie verfolgen müssen, welcher Controller in welcher Hand des Spielers gehalten wird, könnten Sie so etwas tun:

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

Das `inputsourceschange` Ereignis wird auch einmal ausgelöst, wenn der Erstellungs-Callback der Sitzung seine Ausführung zum ersten Mal abgeschlossen hat, sodass Sie es verwenden können, um die Liste der Eingabequellen so bald wie möglich beim Start der Sitzung abzurufen. Das Ereignis wird als ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) übertragen, das drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array aus null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekten, die die Eingabequellen angeben, die neu zum XR-System hinzugefügt wurden.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array aus null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekten, die alle Eingabequellen angeben, die aus dem XR-System entfernt wurden.

### Identifizieren des Eingabeprofils

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles) Eigenschaft, die eine Live-Liste der WebXR-Eingabeprofile enthält, die auf die Eingabequelle zutreffen, geordnet von spezifischstem bis am wenigsten spezifisch.

Um irgendetwas Bedeutendes in Bezug auf die Überprüfung von Profilen über die grundlegende Identifizierung von Funktionen hinaus zu tun, müssen Sie möglicherweise die JSON-Profil-Datenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) importieren.

Siehe [Eingabeprofile](#eingabeprofile) für spezifischere Details zur Arbeit mit Eingabeprofilen.

### Auswahl des primären Controllers

Um Probleme zu vermeiden, die durch mehrere Controller entstehen, die versehentlich die Benutzeroberfläche gleichzeitig manipulieren können, muss Ihre App möglicherweise einen "primären" Controller haben. Dieser Controller würde dann die Verantwortung für das Durchklicken der Benutzeroberfläche Ihrer App übernehmen und auch als "Haupthand" betrachtet werden, während andere Controller dann Nebenhand- oder zusätzliche Controller wären.

> [!NOTE]
> Das bedeutet nicht, dass Ihre App entscheiden _muss_, welcher Controller primär ist. Aber wenn sie es tut, können diese Strategien helfen.

Es gibt mehrere Möglichkeiten, einen primären Controller auszuwählen. Wir werden uns drei davon ansehen.

#### Handpräferenz

Der direkteste Weg, um zu entscheiden, welcher Controller primär ist, besteht darin, eine benutzerdefinierbare "Handpräferenz"-Einstellung zu haben, die der Benutzer setzt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann jede Eingabequelle untersuchen und eine suchen, die diesem entspricht, falls verfügbar, und auf einen anderen Controller zurückgreifen, falls kein Controller in dieser Hand ist.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieses Code-Snippet geht davon aus, dass die erste Eingabequelle der primäre ist, sucht dann jedoch nach einem, dessen [`handedness`](/de/docs/Web/API/XRInputSource/handedness) dem im `user` Objekt angegebenen entspricht. Wenn es übereinstimmt, wird diese Eingabequelle als primär ausgewählt.

#### First-used

Eine andere Möglichkeit ist es, die erste Eingabe zu verwenden, bei der der Benutzer die Auswahlaktion auslöst. Der unten stehende Code geht davon aus, dass die erste Eingabequelle die primäre ist, und installiert dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event) Ereignis, der die Quelle des Ereignisses als primäre Eingabequelle aufzeichnet. Dann wird der `select` Ereignishandler durch die Funktion `realSelectHandler()` ersetzt, die für den Umgang mit allen zukünftigen `select` Ereignissen verwendet wird. Schließlich wird das Ereignis an `realSelectHandler()` weitergegeben, um das Ereignis wie üblich zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Der Effekt ist, dass wir die primäre Eingabequelle das erste Mal einstellen, wenn ein `select` Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es kommt, das Ereignis dann normal behandeln und von da an die Ereignisse wie gewohnt behandeln, ohne weitere Sorgen darüber, welche Eingabequelle primär ist.

#### Benutzerdefiniert

Die komplexeste Möglichkeit, eine primäre Eingabequelle zu bestimmen, bietet große Flexibilität, kann jedoch viel Arbeit erfordern, um implementiert zu werden. In diesem Szenario durchlaufen Sie die Liste der Eingabequellen und ihrer Profile, um Informationen über jede Eingabequelle zu sammeln, und präsentieren dann eine Benutzeroberfläche, die jede Eingabe beschreibt und dem Benutzer die Zuweisung von Funktionen zu jeder von ihnen ermöglicht. Das gut zu machen, könnte eine große Aufgabe sein, aber es könnte für komplexe Apps nützlich sein, die möglicherweise mehrere Benutzereingaben benötigen.

Viel der Informationen, die Sie zur Implementierung dieser Funktionalität benötigen, finden Sie im Abschnitt über [Eingabeprofile](#eingabeprofile). Details liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einem Satz von Informationen entsprechen, die diese Eingabequelle und wie sie verwendet werden kann beschreiben. Diese Namen finden sich in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles) Eigenschaft der Eingabequelle, und das offizielle Register dieser Profil-Strings wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub gepflegt.

Ein Beispiel ist der `generic-trigger-squeeze-touchpad` Profilname, der verwendet werden kann, um die folgenden JSON-Profil-Daten zu finden, wobei man das `profileId`-Feld mit dem Wert `generic-trigger-squeeze-touchpad` sucht.

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

Dies ist ein Controller, der unabhängig davon, in welcher Hand er sich befindet (und selbst wenn er derzeit nicht mit einer bestimmten Hand verknüpft ist), drei Komponenten beinhaltet: einen Standard-Trigger, eine Standard-Quetscheingabe und ein Touchpad. Laut der `selectComponentId`-Eigenschaft ist die `xr-standard-trigger` Komponente diejenige, die für die Durchführung einer Hauptaktion verwendet wird.

Darüber hinaus ordnet das `gamepad` Objekt diese Eingaben dem Gamepad zu und weist den Trigger, die Quetscheingabe und das Touchpad-Tippen der Button-Liste der Eingabequelle zu und die "Achsen" des Touchpads der Achsenliste.

Die Liste in `profiles` ist in umgekehrter Spezifität geordnet; das heißt, die präziseste Beschreibung steht an erster Stelle, und die am wenigsten präzise Beschreibung am Ende. Der erste Eintrag in der Liste ist typischerweise ein Hinweis auf das genaue Modell des Controllers oder ein mit ihm kompatibles Modell.

Zum Beispiel ist der Eintrag 0 in `profiles` für einen Oculus Touch-Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Trigger, einer Quetschsteuerung und einem Thumbstick anzeigt. Während der Oculus Touch-Controller tatsächlich ein Daumenpad anstelle eines Thumbsticks besitzt, ist die Gesamtbeschreibung "ausreichend nah", sodass die Details im Profil, das dem Namen entspricht, den Controller sinnvoll interpretieren lassen können.

## Aktionen

In WebXR ist eine **Aktion** ein spezieller Typ von Ereignis, das ausgelöst wird, wenn der Benutzer ein spezielles Bedienelement auf dem Controller aktiviert. Alle zusätzlichen Knöpfe (sowie Dinge wie Achsenkontroller—z. B. Joysticks—und dergleichen) werden ausschließlich über die [`XRInputSource`](/de/docs/Web/API/XRInputSource) Eigenschaft [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) verwaltet. Siehe [Erweiterte Controller mit dem Gamepad-Objekt verwenden](#erweiterte_controller_mit_dem_gamepad-objekt_verwenden) unten für weitere Details zur Unterstützung dieser zusätzlichen Steuerungen und Tasten.

Die **Hauptaktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Hauptbedienungselement aktiviert, das eine besondere Funktion hat. Derzeit gibt es zwei Arten von Hauptaktionen:

- Die **Hauptaktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder „Auswahl“-Eingabe auf seinem Controller aktiviert. Diese Eingabe kann ein Button, Trigger, ein Touchpad-Tippen oder -Klicken, ein Sprachbefehl oder eine spezielle Handbewegung oder eventuell eine andere Form von Eingabe sein. Zum Beispiel auf einem Handcontroller mit einem klickbaren Touchpad, einem Trigger-Steuerelement sowie Back- und "Menü"-Buttons, dürfte das Klicken auf das Touchpad die Hauptaktion sein. Einige Controller könnten eine Taste mit der Aufschrift "select" haben. Auf einem Gamepad-ähnlichen Controller dürfte die Taste "A" die Hauptaktion sein.
- Die **Primäre Quetschaktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer den Controller zusammendrückt. Dieses „Quetschen“ kann entweder buchstäblich durch einen Drucksensor im Controller erfasst werden oder kann durch einen Trigger, eine Handbewegung oder ein anderes Mechanismus simuliert werden. Wenn der Eingabesteuerer zum Beispiel ein haptischer Handschuh ist, könnte er melden, dass die primäre Quetschaktion aufgetreten ist, wenn der Benutzer seine Faust macht und anspannt.

Eine gegebene Eingabequelle kann nur eine Hauptaktion und eine primäre Quetschaktion haben, aber es können mehr als eine Steuerung auf dem Eingabegerät konfiguriert sein, um jede Hauptaktion auszulösen. Zum Beispiel könnte der Benutzer seinen Controller so eingerichtet haben, dass sowohl das Tippen als auch das Klicken auf das Touchpad eine Hauptaktion generieren.

Diese Arten von Eingabeaktionen werden im Folgenden ausführlicher beschrieben.

### Hauptaktion

Jede Eingabequelle sollte eine **Hauptaktion** definieren. Eine Hauptaktion (die mitunter auf „Auswahlaktion“ verkürzt wird) ist eine plattformspezifische Aktion, die reagiert, wenn der Benutzer sie durch die Bereitstellung, in Reihenfolge, der Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event), und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) manipuliert. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine Hauptaktion hat, gilt die Eingabequelle als **Hilfseingabequelle**.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum zeigt und dann eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) Ereignis, das anzeigt, dass der Benutzer die Aktivität durchgeführt hat, die die Hauptaktion beginnt. Dies kann eine Geste, ein Druck auf eine Taste oder Ähnliches sein.
2. Wenn die Hauptaktion erfolgreich endet (zum Beispiel, weil der Benutzer den Knopf oder Trigger loslässt), anstelle wegen eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event) Ereignis gesendet.
3. Nachdem das `select` Ereignis gesendet wurde _oder_ wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt oder anderweitig nicht verfügbar wird, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event) Ereignis gesendet.

Generell gesprochen, teilen die `selectstart` und `selectend` Ereignisse Ihnen mit, wann Sie dem Benutzer etwas anzeigen sollten, das darauf hinweist, dass die Hauptaktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Button in einer neuen Farbe sein oder das angezielte Objekt nehmen und bewegen, beginnend, wenn `selectstart` eintrifft, und endend, wenn `selectend` empfangen wird.

Das `select` Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er vervollständigen möchte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Betätigen des Abzugs einer Waffe in einem Spiel oder so aufwendig wie das Ablegen eines Objekts, das der Benutzer in der Welt herumbewegte, an einem neuen Ort.

Wenn Ihre Hauptaktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger aktiviert ist, können Sie die `selectstart` und `selectend` Ereignisse ignorieren und auf das `select` Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen können diese Ereignisse sehr schnell senden, eines nach dem anderen. Die Zeit, die zwischen diesen Ereignissen vergeht, hängt sowohl vom Hardware-Apparat ab, der die Aktion verursacht, als auch davon, wie die Softwaretreiber diese Hardware-Aktion interpretieren und in eine Reihe von Ereignissen umwandeln. Gehen Sie nicht davon aus, dass diese Ereignisse mit einem bestimmten Zeitabstand zwischen ihnen auftreten.

Zum Beispiel, wenn die Hardware, die die Hauptaktion auslöst, ein Knopf ist, würden Sie `selectstart` erhalten, wenn der Benutzer den Knopf drückt, dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt eine Reihe von Beispielen, die zeigen, wie `select` Ereignisse in der gesamten Dokumentation behandelt werden, wie im Abschnitt über [Zielsetzung und den Zielstrahl](#zielsetzung_und_der_zielstrahl) an anderer Stelle in diesem Artikel.

### Primäre Quetschaktion

Eine **primäre Quetschaktion** ist eine plattformspezifische Aktion, die die [`XRSession`](/de/docs/Web/API/XRSession) [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event), und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) Ereignisse sendet. Diese wird normalerweise erzeugt, wenn der Benutzer den Controller zusammendrückt, eine Handgeste macht, die das Greifen eines Objekts imitiert, oder einen (druckbasierten) Trigger verwendet.

Die Ereignisse sind identisch mit denjenigen, die von der Hauptaktion gesendet werden, abgesehen von den Namen der einzelnen Ereignisse:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, das anzeigt, dass der Benutzer eine Quetschaktion begonnen hat.
2. Wenn die primäre Quetschaktion erfolgreich endet, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) Ereignis an die Sitzung gesendet.
3. Dann wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dieses wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

Eine häufige Verwendung für die primäre Quetschaktion besteht darin, Objekte in der 3D-Welt zu greifen und/oder aufzuheben und den Auslöser einer Waffe in einem Spiel oder einer Simulation zu quetschen.

#### Beispiel

Dieses Beispiel zeigt eine Sammlung von Quetsch-Ereignishandlern, die diese Ereignisse implementieren, um das Aufnehmen und Halten von Objekten aus der Szene zu verwalten. Der Code geht davon aus, dass ein `avatar`-Objekt existiert, das den Charakter repräsentiert, wie in mehreren anderen Beispielen auf dieser Seite, sowie die `pickUpObject()` und `dropObject()` Funktionen, die die Übertragung eines Objekts von der Welt in eine bestimmte Hand und das Freigeben eines Objekts aus der Hand und das Platzieren in der Welt handhaben.

##### Ein Objekt aufnehmen: Umgang mit squeezestart Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event) Ereignis wird behandelt, indem wie üblich die Pose und die Transformation abgerufen werden, und die [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` abgerufen wird. Wir verwenden das, um die Hand mit dem gehaltenen Objekt in dieser Hand abzustimmen.

Der Code identifiziert dann das angezielte Objekt. Wenn ein Objekt entlang des Zielstrahls gefunden wird, wird es aufgehoben. Das Aufheben eines Objekts umfasst zunächst das Überprüfen, ob die durch `avatar.heldObject[hand]` dargestellte Hand bereits ein Objekt hält und dieses zu löschen, indem die `dropObject()` Funktion aufgerufen wird.

Anschließend wird `pickUpObject()` aufgerufen, wobei das anvisierte Objekt als das Objekt angegeben wird, das aus der Szene entfernt und in die angegebene `hand` platziert werden soll. `pickUpObject()` zeichnet zudem die ursprüngliche Position des Objekts auf, damit es dorthin zurückgesetzt werden kann, falls das Quetschen abgebrochen oder abgebrochen wird.

##### Das Objekt fallen lassen: der squeeze Ereignishandler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) Ereignis wird empfangen, wenn der Benutzer die Quetschaktion durch das Loslassen beendet. In diesem Beispiel interpretieren wir das als das Loslassen des gerade gehaltenen Objekts und das Platzieren dieses in der Szene an der anvisierten Stelle.

Dieser Code geht davon aus, dass zusätzliche Funktionen `findTargetPosition()`, die den Zielstrahl verfolgt, bis er mit etwas kollidiert, dann die Koordinaten zurückgibt, an denen die Kollision aufgetreten ist, und `putObject()`, die das in der angegebenen `hand` gehaltene Objekt an der gegebenen Position platziert und es aus der Hand entfernt.

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

Wie beim `squeezestart`-Handler beginnt dies damit, die für das Ereignis benötigten Informationen zu sammeln, einschließlich der Hand, die ein Objekt fallen lässt, und der Zielstrahl-Transformation. Die Zielstrahl-Transformation wird in die vermutete `findTargetPosition()` Funktion übergeben, um die Koordinaten zu erhalten, an denen das fallengelassene Objekt positioniert werden soll.

Mit der Position in Hand können wir das Objekt dann durch Aufruf der `putObject()` Funktion ablegen, die als Eingaben die `hand` und die Zielposition nimmt. Die Aufgabe dieser Funktion besteht darin, das Objekt aus der angegebenen Hand zu entfernen und es wieder in die Szene zu integrieren, wobei seine Position so eingestellt wird, dass sie an den Koordinaten liegt, die von `findTargetPosition()` zurückgegeben werden.

##### Das Quetschen im squeezeend-Handler abbrechen

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) Ereignis wird empfangen, nachdem das Quetschen abgeschlossen ist, selbst wenn es fehlschlägt. Wir behandeln es, indem wir das derzeit gehaltene Objekt zurück an seinen ursprünglichen Ort bringen, wo es aufgenommen wurde.

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

Hier wird angenommen, dass die `returnObject()` Funktion eine ist, die weiß, wie man das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

Hier wird angenommen, dass die `returnObject()` Funktion eine ist, die weiß, wie man das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus für die Simulation eines Controllers im `inline`-Modus verwendet, findet ungefähr folgendes statt:

1. Der Benutzer drückt die Maustaste, während er sich im {{HTMLElement("canvas")}} befindet, das die WebXR-Szene präsentiert.
2. Das Mausereignis wird vom Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. Der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt, und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend zur Liste hinzugefügt, die von der [`XRSession`](/de/docs/Web/API/XRSession) Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisse, die der Aktion entsprechen.
5. Eine Hauptaktion wird erzeugt und in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) Ereignisses an die App gesendet, wobei die Quelle auf die neue `XRInputSource` gesetzt wird. Oder, wenn die Maus als Neben- oder Sekundärsteuerung verwendet wird, wird stattdessen eine Hilfsaktion gesendet.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event) Ereignis an die `XRSession` gesendet, und die DOM erhält ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis. Die Sitzung erhält dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event) Ereignis, das den Abschluss der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle, und alle entsprechenden [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse werden gesendet.

Somit ist die transiente Eingabequelle in der Tat transient – sie existiert nur für die Dauer der Handhabung der Eingabe und wird daher nicht in der Liste der Eingabequellen aufgeführt.

## Blickrichtung und Zielsetzung

**Blickrichtung** ist die Richtung, in die der Betrachter blickt. Dies wird nicht mithilfe einer Eingabequelle bereitgestellt. Stattdessen wird es mithilfe der [`XRPose`](/de/docs/Web/API/XRPose) abgerufen, die aus der [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) Methode des aktuellen Animationsframes stammt. Die Drehkomponente der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Sie können mehr darüber erfahren, wie Sie diese Betrachterpose verwenden, um die Blickrichtung in dem Artikel [Ausblicke und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) zu bestimmen.

**Zielsetzung** ist der Akt des Benutzers, in eine bestimmte Richtung mit einer Eingabequelle zu zeigen. Die Eingabequelle [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und tatsächlich wahrscheinlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), mit dem die Orientierung des Zielstrahls relativ zur Blickrichtung des Betrachters bestimmt werden kann.

Dies kann oder muss nicht unbedingt das Zielen auf ein bestimmtes Objekt innerhalb der 3D-Welt beinhalten; Sie müssen dies selbst mithilfe von Trefferprüfungen bestimmen, also die Überprüfung, ob der Zielstrahl mit einem Objekt in Ihrer Szene kollidiert.

### Zielsetzung und der Zielstrahl

Der Zielstrahl, der ein Strahl ist, dessen Ursprung sich am Ursprung des Zielstrahlraums befindet und in die Richtung zeigt, in die der Benutzer das Controller-Gerät zeigt. Der Zielstrahl wird mithilfe eines [`XRSpace`](/de/docs/Web/API/XRSpace) definiert, dessen Ursprung sich an der Quelle des Zielstrahls befindet (normalerweise am nach außen gerichteten Ende des Controllers oder seiner Darstellung in der 3D-Welt), und dessen Orientierung hat -Z, das sich vom Controller in die gleiche Richtung wie die [`XRInputSource`](/de/docs/Web/API/XRInputSource)'s [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) erstreckt.

Dieser Raum befindet sich in der Eingabequelle [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) Eigenschaft. Er kann verwendet werden, um die Richtung zu bestimmen, in die der Controller zeigt und den Ursprung und die Orientierung des Zielstrahls festzustellen. Dies kann durch etwas wie das folgende Beispiel erreicht werden, das einen [`select`](/de/docs/Web/API/XRSession/select_event) Ereignishandler implementiert, der diese Informationen benötigt. Wie üblich geht dieser Code davon aus, dass zur Durchführung der Matrix- und Vektormathematik [glMatrix](https://glmatrix.net/) verwendet wird:

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

Dies erhält den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im {{Glossary("quaternion", "quaternion")}} `targetDirection`. Mit entweder der

Dies beginnt damit, den Zielstrahl-Raum in die lokale Konstante `targetRaySpace` zu laden. Dies wird wiederum verwendet, wenn die [`XRFrame`](/de/docs/Web/API/XRFrame) Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) aufgerufen wird, um ein [`XRPose`](/de/docs/Web/API/XRPose) Objekt zu erstellen, das die Position und Orientierung des Zielstrahls im Referenzraum des Betrachters, `viewerRefSpace`, darstellt. Ist dies `null`, gibt der Ereignis-Handler ohne weiteres zurück.

Die Transformation des Zielstrahls wird von der Pose's [`transform`](/de/docs/Web/API/XRPose/transform) Eigenschaft abgerufen und in `targetRayTransform` gespeichert. Dies wird dann (in diesem Fall durch eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl kollidiert. Wenn der Zielstrahl ein Objekt in der Szene kreuzt, können wir damit genau das tun, was wir brauchen.

Sollte es notwendig sein, die tatsächliche Position des Ursprungs des Zielstrahls und die Richtung des Strahls zu extrahieren, kann dies so gemacht werden:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt anvisiert wird, folgen Sie dem Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Prozess wird **Trefferprüfung** oder **Kollisionserkennung** genannt. Der Ansatz, den Sie für die Trefferprüfung ergreifen, hängt stark von den spezifischen Bedürfnissen Ihrer App ab. Die erste Frage ist: Erkennen Sie Kollisionen mit virtuellen Objekten oder Gelände, realen Objekten oder Gelände oder beidem?

In jedem Fall müssen Sie zur Identifizierung des anvisierten Objekts feststellen, ob der Strahl, der von der [`XRInputSource`](/de/docs/Web/API/XRInputSource) Eigenschaft [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) spezifiziert wird, ein beliebiges Objekt in der Szene kreuzt, sei es virtuell oder real.

Siehe [Zielsetzung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting) für einen detaillierteren Blick darauf, was erforderlich ist.

### Präsentation von handgehaltenen Objekten

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) Eigenschaft einer Eingabequelle identifiziert einen [`XRSpace`](/de/docs/Web/API/XRSpace), der den Ursprung und die Orientierung beschreibt, die verwendet werden sollten, um ein Objekt anzuzeigen, sodass es aussieht, als würde es in derselben Hand wie seine Eingabequelle gehalten. Dieser Raum soll verwendet werden, um ein Modell des handgehaltenen WebXR-Eingabesteuerers darzustellen, kann aber genauso gut verwendet werden, um jedes Objekt zu zeichnen, wie zum Beispiel einen Ball, ein Werkzeug oder eine Waffe. Wir haben den [Halteraum](#halteraum) oben behandelt, aber lassen Sie uns sehen, wie er verwendet werden kann, um Objekte darzustellen, die die Hand oder die in der Hand darstellen.

Da sich der Ursprung des Halteraums im Mittelpunkt des Griffs der Hand befindet, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie bei Bedarf eine Offset-Transformation an, um den Ursprung auf den Startpunkt für das Rendern Ihres Objekts zu verschieben, während Sie die nötige Rotation anwenden, um Ihr Modell korrekt auszurichten, sodass es der Orientierung des Halteraums entspricht.

## Erweiterte Controller mit dem Gamepad-Objekt verwenden

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) Eigenschaft, deren Wert, falls nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad) Objekt ist, das Zugriff auf gamepad-artige Tasten, Achsensteuerungen (wie Joysticks oder Daumenpads) und so weiter bietet. Dies kann die gleichen Tasten umfassen, die die standardmäßigen [`XRInputSource`](/de/docs/Web/API/XRInputSource) Aktionen auslösen, aber möglicherweise beliebig viele zusätzliche Tasten und Steuerungen enthalten.

> [!NOTE]
> Während `Gamepad` von der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert wird, wird es nicht von der Gamepad API verwaltet, daher sollten Sie nicht versuchen, irgendwelche Gamepad-API-Methoden damit zu verwenden. Der Objekttyp wird aus Komfortgründen wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerungen, die mit dem `Gamepad`-Datensatz genutzt werden, entweder weil sie nicht unterstützt werden oder weil sie keine zusätzlichen Steuerungen darauf hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um Zugriff auf spezielle Tasten, Touchpads und so weiter zu erhalten, sondern bietet auch einen Weg, um direkter auf die Steuerungen zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Quetscheingaben dienen, da diese in seiner [`buttons`](/de/docs/Web/API/Gamepad/buttons) Liste enthalten sind.

Da diese Verwendung der `Gamepad`-Schnittstelle eher ein Komfort denn eine echte Anwendung der Gamepad-API darstellt, gibt es mehrere Unterschiede zwischen ihrer Verwendung mit WebXR und ihrer Verwendung in Gamepad-API-Anwendungen. Der auffälligste – aber nicht der einzige – Unterschied besteht darin, dass WebXR die `xr-standard` Gamepad-Zuordnung hinzufügt, siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad) Eigenschaft für zusätzliche Unterschiede. Diese Gamepad-Zuordnung definiert, wie die Steuerungen auf einem typischen einhändigen handgehaltenen VR-Controller auf Gamepad-Steuerungen abgebildet sind.

## Eingaben von Nicht-WebXR-Quellen integrieren

Manchmal müssen Sie eine Möglichkeit haben, dem Benutzer die Möglichkeit zu geben, Eingaben mit Controllern zu machen, die außerhalb von WebXR liegen. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch nicht-XR-Gamepad-Geräte, Netzwerkeingaben oder andere Datenquellen verwenden, um Benutzersteuerungen zu simulieren. Während WebXR keine Unterstützung für die direkte Verbindung dieser Eingabegeräte mit der XR-Szene bietet, können Sie die Eingabedaten selbst sammeln und selbst anwenden.

Angenommen, Eingaben werden verwendet, um einen Avatar innerhalb der Simulation zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben verwendet, um den Avatar auf folgende Weise zu beeinflussen, unter Verwendung der gesammelten Daten des Nicht-XR-Eingabegeräts:

- Position
  - : Die Position des Avatars wird geändert, indem ein {{Glossary("delta", "Delta")}} auf die zuvor bekannte Position angewendet wird, dann wird der Referenzraum des Avatars durch einen neuen ersetzt, dessen Transformation die neue Position widerspiegelt.
- Orientierung
  - : Die Orientierung oder Blickrichtung des Avatars wird geändert, indem ein Delta auf seine Rotation um die drei Achsen angewendet und sein Orientierungsvektor aktualisiert wird, dann wird sein Referenzraum neu berechnet.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie die Verwendung eines Objekts oder einer Waffe, Springen oder eine andere Aktivität, die nicht mit grundlegender Bewegung und Rotation zu tun hat.

Einige Eingaben werden stattdessen verwendet, um die Anwendung zu steuern anstatt den Avatar. Ein Button könnte zum Beispiel ein Optionsmenü öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menü geöffnet ist, könnten Eingaben, die sonst den Avatar steuern würden, stattdessen zur Steuerung der Menüoberfläche verwendet werden.

### Verwenden von Tastatur- und Mausereignissen

Das Erfassen von Eingaben über Tastatur und Maus erfolgt genau so wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie benötigen, um die Eingaben zu erhalten, die Sie möchten. Was Sie mit diesen Eingaben machen, ist interessant.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden, um Informationen über den Avatar und seine Weltanschauung zu verfolgen. Wir möchten, dass der Spieler die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> verwenden kann, um sich vorwärts, links, rückwärts und rechts zu bewegen. Da wir die Position des Avatars sowohl durch die Tastatur und Maus als auch durch die XR-Hardware managen, müssen wir diese Informationen separat verwalten und als Transformation anwenden, bevor wir den Avatar (oder die Welt aus Sicht des Avatars) rendern.

Um das zu erreichen, schließen wir in das `avatar`-Objekt eine `posDelta` Eigenschaft ein, vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint), die die Versätze enthält, die auf alle drei Achsen angewendet werden müssen, um die Position des Avatars anzupassen (den Ursprung des Referenzraums der Betrachterpose) und Bewegung und Rotation von Tastatur und Maus einzubeziehen.

Der entsprechende Code für die Tastatureingabe könnte in etwa so aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie Kenntnisse der Physik anwenden, um die Beschleunigung basierend darauf zu ändern, wie lange die Taste gedrückt gehalten wird und andere Faktoren.

### Anwenden von Eingaben auf die Szene

Jetzt, da wir die Deltas haben, die auf die Position und Orientierung angewendet werden müssen – in unserem Beispiel in den `posDelta` und `orientDelta` Eigenschaften unseres `avatar`-Objekts – können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits auf einem Zeitplan rendern, können wir den Code dort hinzufügen, zusammen mit dem Vorbereiten und Zeichnen der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die hier gezeigte `drawFrame()` Funktion ist der Callback, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie es durch das Aufrufen der [`XRSession`](/de/docs/Web/API/XRSession) Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) festgelegt wurde. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir gleich definieren; sie nimmt das `avatar`-Objekt und verwendet seine Informationen, um den Referenzrahmen des Avatars zu aktualisieren.

Danach geht alles wie gewohnt weiter, wobei die Pose des Betrachtenden aus dem aktualisierten Referenzrahmen geholt, der nächste Frame-Callback über `requestAnimationFrame()` angefordert und dann WebGL eingerichtet und die Szene gezeichnet wird. Der Zeichenvorgang und anderer verwandter Code finden sich im Beispiel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die `applyExternalInputs()`-Methode nimmt das `avatar`-Objekt und ersetzt dessen `referenceSpace`-Eigenschaft mit einem neuen Referenzraum, der die aktualisierten Deltas enthält.

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

- [Zielsetzung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ausblicke und Beobachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
