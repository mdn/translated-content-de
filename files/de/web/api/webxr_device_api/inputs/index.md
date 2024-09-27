---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität durch Hinzufügen oder Verändern der Welt um ihn herum zu erweitern. Um ein zufriedenstellendes und fesselndes Erlebnis zu schaffen, muss der Benutzer in der Lage sein, damit zu interagieren. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden werden wir uns ansehen, wie Sie die Eingabegeräteverwaltungsfunktionen von WebXR nutzen können, um festzustellen, welche Eingabequellen verfügbar sind, und wie Sie dann diese Quellen auf Eingaben überwachen können, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu steuern.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zielsetzung und Aktionen. Zielsetzung ist die Spezifikation eines Punktes im Raum durch die Benutzereingabe. Dies kann das Tippen auf einen Punkt auf dem Bildschirm, das Verfolgen der Augen oder die Verwendung eines Joysticks oder eines Bewegungssensors zur Steuerung eines Cursors umfassen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Button, als auch Squeeze-Aktionen, wie das Ziehen eines Abzugs oder das Festziehen des Griffs mit haptischen Handschuhen.

Indem Sie diese beiden Arten von Eingaben mit der Änderung der Betrachtungsposition und/oder -ausrichtung durch das Headset oder andere Mechanismen kombinieren, können Sie eine interaktive simulierte Umgebung schaffen.

### Arten von Eingabegeräten

WebXR unterstützt eine Vielzahl unterschiedlicher Arten von Geräten zur Handhabung von Ziel- und Aktions-Eingaben. Zu diesen Geräten gehören, aber nicht ausschließlich:

- Bildschirmeingaben (insbesondere, aber nicht nur auf Telefonen oder Tablets) können verwendet werden, um gleichzeitig sowohl Ziel- als auch Auswahlaktionen auszuführen.
- Bewegungssensorische Controller, die mit Beschleunigungsmessern, Magnetometern und anderen Sensoren zur Bewegungserfassung und Zielsetzung ausgestattet sind und möglicherweise zusätzlich eine beliebige Anzahl von Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren und so weiter zur Bereitstellung zusätzlicher Eingabequellen für sowohl Ziel- als auch Auswahlaktionen enthalten.
- Drückbare Abzüge oder Griffpolster an Handschuhen, um Squeeze-Aktionen bereitzustellen.
- Sprachbefehle unter Verwendung der Spracherkennung.
- Räumlich verfolgte, artikulierte Hände, wie etwa [verkabelte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Ziel- als auch Squeeze-Aktionen sowie Auswahlaktionen bereitstellen, wenn sie mit Tasten oder anderen Quellen für Auswahlaktionen ausgestattet sind.
- Ein-Knopf-Klickgeräte.
- Sichtverfolgung (Verfolgen der Augenbewegungen zur Auswahl von Zielen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt repräsentiert, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle umfassen, welche Hand sie hält (falls zutreffend), welche Zielmethode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die zur Zeichnung des Zielstrahls und zur Auffindung des gezielten Objekts oder Standorts sowie zur Zeichnung von Objekten in den Händen des Benutzers verwendet werden können, und Profilzeichenketten, die die bevorzugte Darstellungsweise des Controllers im Sichtbereich des Benutzers sowie die Funktionsweise der Eingabe festlegen.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zielsetzung
  - : Überwachen von Richtungssteuerungen (entweder ein Bewegungserfassungszeiger oder ein Joystick oder Trackpad, zum Beispiel), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, obwohl die Zielsetzung Ihnen selbst überlassen bleibt. Weitere Informationen finden Sie unter [Facing and targeting](#facing_und_targeting).
- Auswahl
  - : Verwenden des Haupt-"Select"-Buttons oder einer anderen Eingabe am Controller, um die gezielte Richtung (oder das Objekt, auf das es zeigt) auszuwählen oder um eine andere Aktion einzuleiten. Details zur primären Aktion finden Sie unter [Primary action](#primäre_aktion).
- Drücken
  - : Drücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszulösen. Der Abschnitt [Primary squeeze action](#primäre_squeeze-aktion) beschreibt dies ausführlicher.

Alle zusätzlichen Fähigkeiten, die ein WebXR-Controller möglicherweise hat, werden über das `gamepad` des Eingabegeräts [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Objekt aufgerufen. Dieses Objekt bietet Zugriff auf alle Knöpfe, Achsen, Trackpads usw., die Teil des Controllers sein können. Weitere Informationen zur Nutzung dieser Controller finden Sie unter [Advanced controllers using the gamepad object](#erweiterte_controller_mit_dem_gamepad-objekt).

### Instanzeigenschaften von Eingabequellen

Jede individuelle `XRInputSource` verfügt über eine Reihe von Eigenschaften, die die verfügbaren Achsen und Buttons der Eingabe beschreiben, in welcher Hand der Benutzer sie hält und wie die Eingabequelle zur Handhabung der Zielsetzung im 3D-Raum verwendet wird.

#### Handedness

**Handedness**, angegeben durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist eine Zeichenkette, die angibt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht handgehalten ist oder wenn es unbekannt ist, in welcher Hand sich der Controller befindet.

Handedness kann für verschiedene Dinge verwendet werden, einschließlich der Auswahl eines geeigneten Meshs, das den Controller in der Ansicht repräsentieren soll, und um ihn in der richtigen Hand darzustellen, wenn Hände auf dem Display dargestellt werden. Es kann auch nützlich sein, wenn Ihre App das Konzept der "Haupthand" und "Nebenhand" verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel könnte der Controller der Haupthand beispielsweise die Waffe des Spielers sein, während der Controller der Nebenhand verwendet wird, um die Positionierung eines Schilds zu steuern.

#### Targeting ray mode

Der Zielstrahlmodus ist eine Zeichenkette, die sich in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft befindet. Er beschreibt die Technik, die verwendet wird, um den Zielstrahl zu bestimmen und wie er dem Benutzer angezeigt werden sollte, wenn er visuell dargestellt wird.

Wenn der Zielstrahlmodus `gaze` ist, befindet sich der Ursprung des Strahls beim Betrachter und zielt in die Richtung, in die der Benutzer blickt. Diese Sicht-Eingabemethode ist relativ einfach und erfordert keine speziellen Steuerungen, da sie auf der Blickrichtung basiert, die vom Headset oder dem Gerät, das verwendet wird, um die Richtung zu bestimmen, in die das Gesicht des Betrachters zeigt, gemeldet wird. Der Zielstrahl sollte von einem Punkt zwischen den Augen aus in eine Richtung senkrecht zum Gesicht des Betrachters nach außen gerichtet sein.

Flexibler ist der Modus `tracked-pointer`, bei dem sich der Ursprung des Strahls an einem handgehaltenen Controller oder Ursprung eines Handverfolgungssystems befindet und nach außen in die Richtung erstreckt, in die der Controller zeigt. Der Strahl erstreckt sich in die Richtung, die von der verwendeten Plattform und dem verwendeten Controller bestimmt wird, wenn sie definiert sind; andernfalls erstreckt sich der Strahl in die Richtung, in die der Benutzer mit ihrem ausgestreckten Zeigefinger zeigt.

Der dritte und letzte Zielstrahlmodus ist am häufigsten auf mobilen Geräten wie Smartphones und Tablets zu finden. Der Modus `screen` zeigt an, dass der Zielstrahl anhand der Interaktion des Benutzers mit dem WebXR-Kontext bestimmt wird, indem er mit dem Bildschirm in irgendeiner Weise interagiert — höchstwahrscheinlich, indem der Betrachter den Bildschirm anklopft oder den Zielstrahl mit seinen Fingern bewegt.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der die Position und Ausrichtung des Zielstrahls beschreibt, befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft. Der native Ursprung dieses Raumes befindet sich an dem Punkt, von dem der Zielstrahl ausgeht (wie die Vorderseite des Controllers oder der Endpunkt einer Pistolenmündung, wenn der Controller als Pistole gerendert wird, zum Beispiel), und der Orientierungsvektor des Raumes erstreckt sich entlang des Pfades des Zielstrahls nach außen.

Sie können den Zielstrahl, der dem `targetRaySpace` entspricht, einfach innerhalb des Zeichen-Handlers für einen bestimmten Frame mittels der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) abrufen. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) enthält die Transformation, die dem Zielstrahl entspricht. So, für einen Eingabe-Controller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie nun den Punkt, von dem aus der Zielstrahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), im Referenzraum des Betrachters (`viewerRefSpace`). Das ist alles, was Sie benötigen, um den Zielstrahl zu zeichnen, zu bestimmen, wohin er zeigt, Treffer-Tests durchzuführen und so weiter.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, das verwendet werden kann, um Objekte so zu rendern, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Das Koordinatensystem des Griffraums der linken Hand.**
![Eine Diagramm zeigt, wie der Griffraum das lokale Koordinatensystem der Hand des Spielers relativ zur Welt angibt.](dark_left.svg)
**Abbildung: Das Koordinatensystem des Griffraums der rechten Hand.**
![Eine Diagramm zeigt, wie der Griffraum das lokale Koordinatensystem der Hand des Spielers relativ zur Welt angibt.](dark_right.svg)

Der native Ursprung des Griffraums, der sich zentral in der Faust des Spielers befindet, ist (0, 0, 0) innerhalb des lokalen Koordinatensystems der Eingabequelle, während der durch `gripSpace` spezifizierte [`XRSpace`](/de/docs/Web/API/XRSpace) jederzeit verwendet werden kann, um Koordinaten oder Vektoren aus dem Raum der Eingabequelle in Weltkoordinaten umzuwandeln (oder umgekehrt).

Das bedeutet, dass, wenn Sie ein 3D-Modell verwenden, um Ihren Controller, die Hände des Avatars oder irgendetwas anderes, das die Position in Raum des Controllers darstellt, zu repräsentieren, der `gripSpace` als Transformationsmatrix verwendet werden kann, die das Objektmodell korrekt positioniert und ausrichtet, um es darzustellen. Um dies zu tun, ist es notwendig, die Transformation zu verwenden, um den Griffraum in das Weltkoordinatensystem zu konvertieren, das von WebGL zu Darstellungszwecken verwendet wird.

**Abbildung: Mapping des Griffraums auf das Weltkoordinatensystem. Die Distanzen _x_, _y_ und _z_ zusammen bilden die Weltkoordinaten (_x_, _y_, _z_), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm zeigt die Beziehung zwischen dem Griffraum und dem Weltraum](gripspace-on-worldspace.svg)

In dem obigen Diagramm sehen wir den Griffraum, dessen Ursprung sich bei _G_ befindet, am Mittelpunkt des Griffs des Benutzers am Controller, der direkt vom Benutzer weg zeigt, parallel zur _z_-Achse. Relativ zum Ursprung des Weltraums, _W_, befindet sich der Ursprung des Griffraums _x_ Einheiten rechts, _y_ Einheiten darüber und _z_ Einheiten weiter entfernt. Aufgrund der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da der Griffraum weiter entlang der _z_-Achse entfernt und somit in negativer Richtung liegt.

Wenn der Controller stattdessen links von und näher beim Benutzer als der Welttraumursprung positioniert wäre (oder möglicherweise hinter dem Benutzer, wenn der Benutzer sich am Ursprung befindet, obwohl das eine unangenehme Art ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre immer noch positiv, es sei denn, der Controller würde sich unterhalb des Welttraumursprungs bewegen.

Dies wird im folgenden Diagramm gezeigt, in dem der Controller nach unten und links vom Ursprung des Weltraums positioniert ist, wobei der Controller auch näher bei uns ist als der Ursprung. Infolgedessen sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Mapping eines Griffraums auf den Weltursprung, wenn der Controller unter und links vom Weltursprung positioniert ist und näher bei uns ist als der Weltursprung.**
![Die Beziehung eines anderen Griffraums zum Welttraum](gripspace-on-worldspace-diag.svg)

#### Gamepad-Aufzeichnung

Jede Eingabequelle verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, sofern nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen verfügbaren Steuerungen und Widgets am Controller beschreibt. Wenn das Eingabegerät nur die primären Bewegungssensoren, eine Griffsteuerung und einen Button hat, kann es keine `Gamepad`-Aufzeichnung haben. Wenn jedoch das `gamepad` vorhanden ist, können Sie es verwenden, um die verfügbaren Buttons und Achsen am Controller zu identifizieren und abzurufen.

Während das `Gamepad`-Aufzeichnung durch die [Gamepad API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird es nicht tatsächlich von der Gamepad API verwaltet und funktioniert nicht genau so. Siehe [Advanced controllers using the gamepad object](#erweiterte_controller_mit_dem_gamepad-objekt) für ausführlichere Informationen.

#### Profilzeichenketten

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen** besitzen, die in dem Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) zu finden sind, von denen jeder eine bevorzugte visuelle Darstellung der Eingabequelle innerhalb der 3D-Welt sowie die Funktionsweise der Eingabequelle beschreibt. Die Verwendung dieser Profile wird unten unter [Input profiles](#eingabeprofile) kurz beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erzeugen, die in Kombination mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät stammt, sondern so dargestellt wird, als ob sie es wäre. Wenn ein XR-Gerät beispielsweise einen Modus bereitstellt, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle für XR für die Dauer der Aktionsbearbeitung darzustellen.

Dies ist notwendig wegen der Trennung, die zwischen Standard-Eingabegeräten und XR-Eingabequellen beibehalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) zu repräsentieren.

## Verwaltung von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie Informationen über jede davon erhalten, einschließlich ihrer Position und Ausrichtung, ihres Zielstrahls (falls auf Ihre Bedürfnisse zutreffend) und Details, die Ihnen helfen können, zu entscheiden, wie Sie die Eingabequelle visuell darstellen, falls überhaupt. Sie müssen auch bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; beispielsweise, wenn der Benutzer zwei Controller hat, welcher wird zur Manipulation von UI-Elementen verfolgt, oder werden beide verwendet?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen zu enumerieren, Profilinformationen über jede Eingabequelle zu untersuchen und zu entscheiden, wie Sie jeden Eingabe-Controller verwenden.

### Enumeration von Eingabequellen

Die WebXR-Sitzung, die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert wird, verfügt über eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, die eine _Live_-Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Aufgrund der Tatsache, dass der Inhalt der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die jede Eingabequelle in der Liste repräsentieren, nur gelesen werden kann, werden Änderungen an diesen Eingaben vom WebXR-System vorgenommen, indem der Datensatz der Quelle gelöscht und ein neuer hinzugefügt wird, um ihn zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, wann immer sich eine oder mehrere der Eingabequellen ändern oder eine Eingabequelle zur Liste hinzugefügt oder daraus entfernt wird.

Wenn Sie beispielsweise verfolgen möchten, welcher Controller in den Händen des Spielers gehalten wird, könnten Sie so vorgehen:

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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Erstellungscallback der Sitzung zum ersten Mal ausgeführt wird, sodass Sie es verwenden können, um die Eingabequellenliste so schnell wie möglich zum Startzeitpunkt abzurufen. Das Ereignis wird als [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) geliefert, das drei interessante Eigenschaften umfasst:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array mit null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die neu hinzugefügten Eingabequellen zum XR-System anzeigen.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array mit null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die aus dem XR-System entfernten Eingabequellen anzeigen.

### Identifizierung des Eingabeprofils

Jede Eingabequelle verfügt über eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine Live-Liste der WebXR-Eingabeprofile enthält, die auf die Eingabequelle angewendet werden, in Reihenfolge der Spezifität von am spezifischsten zu am wenigsten spezifisch.

Um etwas Sinnvolles zu tun, das über die grundlegende Identifizierung von Funktionen hinausgeht, müssen Sie möglicherweise die JSON-Profildatenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry) importieren.

Siehe [Input profiles](#eingabeprofile) für spezifischere Details zur Arbeit mit Eingabeprofilen.

### Auswahl des primären Controllers

Um Probleme zu vermeiden, die durch mehrere Controller entstehen könnten, die unbeabsichtigt gleichzeitig die Benutzeroberfläche manipulieren, könnte Ihre App einen "primären" Controller benötigen. Nicht nur würde dieser Controller dann die Verantwortung für die Benutzeroberfläche Ihrer App übernehmen, sondern er würde auch als "Haupthand" betrachtet, während andere Controller dann Nebenhand- oder zusätzliche Controller wären.

> [!NOTE]
> Dies bedeutet nicht, dass Ihre App unbedingt einen primären Controller festlegen muss. Wenn sie dies jedoch tut, können diese Strategien hilfreich sein.

Es gibt ein paar Möglichkeiten, wie Sie sich auf einen primären Controller einigen können. Wir schauen uns drei davon an.

#### Handedness

Der direkteste Weg, einen primären Controller auszuwählen, besteht darin, eine benutzerdefinierbare "Handedness"-Präferenz zu haben, die der Benutzer einstellt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann bei jeder Eingabequelle nach einer suchen, die dem entspricht, falls verfügbar, und darauf zurückgreifen, einen anderen Controller auszuwählen, wenn keiner in dieser Hand ist.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieser Codeabschnitt startet mit der Annahme, dass die erste Eingabequelle die primäre ist, sucht jedoch dann nach einer, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der übereinstimmt, die im `user`-Objekt angegeben ist. Wenn es übereinstimmt, wird diese Eingabequelle als primär ausgewählt.

#### Zuerst verwendet

Eine andere Möglichkeit besteht darin, die erste Eingabe zu verwenden, bei der der Benutzer die Auswahlaktion auslöst. Der folgende Code startet mit der Annahme, dass die erste Eingabequelle die primäre ist, und richtet dann eine Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis ein, das die Quelle des Ereignisses als primäre Eingabequelle aufzeichnet. Dann wird der `select`-Ereignishandler durch die Funktion `realSelectHandler()` ersetzt, die zur Handhabung aller zukünftigen `select`-Ereignisse verwendet wird. Dann leiten wir das Ereignis an `realSelectHandler()` weiter, damit das Ereignis wie gewohnt verarbeitet werden kann.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Die Wirkung ist, dass wir die primäre Eingabequelle festlegen, sobald ein `select`-Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es kommt, das Ereignis wie gewohnt von dort aus handhaben und dann die Ereignisse wie gewohnt handhaben, ohne sich weiter darum zu kümmern, welche Eingabequelle primär ist.

#### Vom Benutzer ausgewählt

Die komplexeste Art, eine primäre Eingabequelle zu bestimmen, ist höchst flexibel, kann jedoch viel Arbeit erfordern, um sie zu implementieren. In diesem Szenario iterieren Sie über die Liste der Eingabequellen und ihrer Profile, um Informationen über jede Eingabequelle zu sammeln, dann präsentieren Sie eine Benutzeroberfläche, die jede Eingabe beschreibt, und ermöglichen dem Benutzer, Verwendungen für jede von ihnen zuzuweisen. Dies gut zu machen könnte eine große Arbeit sein, aber es könnte nützlich für komplexe Apps sein, die mehrere Benutzereingaben beinhalten könnten.

Viel von den Informationen, die Sie benötigen, um dies zu implementieren, können im Abschnitt über [Input profiles](#eingabeprofile) weiter unten gefunden werden. Details liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die zu einem Satz von Informationen gehören, welche diese Eingabequelle beschreiben und wie sie verwendet werden kann. Diese Namen sind in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft der Eingabequelle zu finden, und das offizielle Verzeichnis dieser Profilzeichenketten wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub gepflegt.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profildaten zu finden, indem der `profileId`-Feld gefunden wird, das den Wert `generic-trigger-squeeze-touchpad` hat.

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

Dies ist ein Controller, der, unabhängig davon, in welcher Hand er sich befindet (und selbst wenn er derzeit nicht einer bestimmten Hand zugeordnet ist), drei Komponenten hat: einen Standard-Auslöser, eine Standard-Griff-Eingabe und ein Touchpad. Entsprechend der `selectComponentId`-Eigenschaft wird die `xr-standard-trigger`-Komponente verwendet, um eine primäre Aktion auszuführen.

Zusätzlich wird das `gamepad`-Objekt verwendet, um diese Eingaben dem Gamepad zuzuordnen, und ordnet den Auslöser, den Griff und das Touchpad-Tippen der Button-Liste der Eingabequelle zu, und die "Achsen" des Touchpads der Achsenliste.

Die Liste in `profiles` ist in umgekehrter Reihenfolge der Spezifität; das heißt, die genaueste Beschreibung ist zuerst, und die am wenigsten genaue Beschreibung ist zuletzt. Der erste Eintrag in der Liste ist typischerweise repräsentativ für das genaue Modell des Controllers oder für ein Modell, das mit dem Controller kompatibel ist.

Zum Beispiel ist Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was auf ein generisches Gerät mit einem Trigger, einer Griffsteuerung und einem Thumbstick hinweist. Obwohl der Oculus Touch Controller tatsächlich ein Thumbpad statt eines Thumbsticks hat, ist die allgemeine Beschreibung "nah genug", sodass die Details innerhalb des Profils, das dem Namen entspricht, es ermöglichen, den Controller nützlich zu interpretieren.

## Aktionen

In WebXR ist eine **Aktion** eine spezielle Art von Ereignis, das durch die Aktivierung eines speziellen Knopfes am Controller durch den Benutzer ausgelöst wird. Alle zusätzlichen Knöpfe (sowie Steuerungen wie Achsen – Joysticks zum Beispiel – und dergleichen) werden ausschließlich über die [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft der [`XRInputSource`](/de/docs/Web/API/XRInputSource) verwaltet. Siehe [Advanced controllers using the gamepad object](#erweiterte_controller_mit_dem_gamepad-objekt) unten für weitere Details zu unterstützenden Steuerungen und Tasten.

Die **primäre Aktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Hauptelement des Controllers verwendet, das einen besonderen Zweck hat. Es gibt derzeit zwei Arten der primären Aktion:

- Die **primäre Aktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Select"-Eingabe an ihrem Controller aktiviert. Diese Eingabe kann ein Knopf, ein Auslöser, ein Trackpad-Tap oder -Klick, ein Sprachbefehl, eine spezielle Handgeste oder möglicherweise eine andere Form von Eingabe sein. Zum Beispiel, auf einem Handcontroller mit einem klickbaren Trackpad, einer Auslöse-Steuerung sowie Zurück- und "Menü"-Buttons ist das Trackpad-Klicken wahrscheinlich die primäre Aktion. Einige Controller könnten einen Knopf mit der Bezeichnung "Select" haben. Auf einem Gamepad-Stil-Controller ist der "A"-Button wahrscheinlich die primäre Aktion.
- Die **primäre Squeeze-Aktion** ist die Aktion, die eingeleitet wird, wenn der Benutzer den Controller zusammendrückt. Dieses "Zusammenpressen" kann durch die Verwendung eines Drucksensors im Controller wörtlich erkannt werden oder durch ein simuliertes Auslösen, eine Handbewegung oder einen anderen Mechanismus. Wenn der Eingabecontroller zum Beispiel ein haptischer Handschuh ist, könnte er melden, dass die primäre Squeeze-Aktion eingetreten ist, wenn der Benutzer seine Faust ballt und zusammenpresst.

Während eine gegebene Eingabequelle nur eine primäre Aktion und eine primäre Squeeze-Aktion haben kann, können mehr als eine Steuerung auf dem Eingabegerät so konfiguriert sein, dass sie jede primäre Aktion auslösen. Zum Beispiel könnte der Benutzer ihren Controller so eingerichtet haben, dass sowohl das Tippen als auch das Klicken auf das Trackpad eine primäre Aktion auslösen.

Diese Arten von Eingabeaktionen werden im Folgenden ausführlicher beschrieben.

### Primäre Aktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (die manchmal auf "Select-Aktion" gekürzt wird) ist eine plattformdefinierte Aktion, die auf die Manipulation des Benutzers reagiert, indem in der Reihenfolge die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) geliefert werden. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine primäre Aktion hat, wird die Eingabequelle als **zusätzliche Eingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum zeigt und dann eine Auswahlaktion auslöst, werden folgende Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das darauf hinweist, dass der Benutzer die Aktivität ausgeführt hat, die die primäre Aktion beginnt. Dies kann eine Geste, das Drücken eines Knopfes oder Ähnliches sein.
2. Wenn die primäre Aktion erfolgreich endet (zum Beispiel, weil der Benutzer den Knopf oder Auslöser loslässt), anstatt aufgrund eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nachdem das `select`-Ereignis gesendet wurde, _oder_ wenn der Controller, mit dem die Aktion ausgeführt wird, getrennt oder auf andere Weise nicht mehr verfügbar ist, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Generell gesagt, die `selectstart`- und `selectend`-Ereignisse informieren Sie darüber, wann Sie dem Benutzer etwas anzeigen sollten, um darauf hinzuweisen, dass die primäre Aktion im Gange ist. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe sein oder das Zeigen des angezielten Objekts, das ergriffen und herumbewegt wird, beginnend, wenn `selectstart` ankommt und aufhörend, wenn `selectend` empfangen wird.

Das `select`-Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Das mag so einfach sein wie das Werfen eines Objekts oder das Betätigen eines Abzugs in einem Spiel oder so komplex wie das Platzieren eines Objekts, das er in der Welt herumschleppte, wieder an einer neuen Position.

Wenn Ihre primäre Aktion eine einfache Auslöseaktion ist und Sie nichts animieren müssen, während der Auslöser betätigt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das `select`-Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen können diese Ereignisse sehr schnell senden, ein nach dem anderen. Die Zeit, die zwischen diesen Ereignissen vergeht, hängt sowohl von der Hardwareapparatur ab, die die Aktion verursacht, als auch von den Softwaretreibern, die die Hardwareaktion interpretieren und in eine Serie von Ereignissen umwandeln. Gehen Sie nicht davon aus, dass diese Ereignisse mit einem bestimmten Zeitabstand zwischen ihnen auftreten werden.

Wenn die Hardware, die die primäre Aktion verursacht, zum Beispiel ein Knopf ist, würden Sie `selectstart` erhalten, wenn der Benutzer den Knopf drückt, dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt eine Reihe von Beispielen, die zeigen, wie `select`-Ereignisse gehandhabt werden, beispielsweise im Abschnitt über [Targeting und den Zielstrahl](#targeting_und_der_zielstrahl) an anderer Stelle in diesem Artikel.

### Primäre Squeeze-Aktion

Eine **primäre Squeeze-Aktion** ist eine plattformdefinierte Aktion, die die [`XRSession`](/de/docs/Web/API/XRSession) Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) sendet. Dies wird typischerweise durch das Drücken des Controllers, das Ausführen einer Handbewegung, die das Greifen von etwas simuliert, oder durch das Verwenden (Zusammendrücken) eines Triggers generiert.

Die Ereignisse folgen in ihrer Abfolge den gleichen Prinzipien wie bei der primären Aktion, lediglich mit dem jeweils abweichenden Ereignisnamen:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, das darauf hinweist, dass der Benutzer eine Squeeze-Aktion begonnen hat.
2. Wenn die primäre Squeeze-Aktion erfolgreich beendet wird, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.
3. Anschließend wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, um anzuzeigen, dass die Squeezeaktion nicht mehr im Gange ist. Dieses Ereignis wird gesendet, unabhängig davon, ob die Squeeze-Aktion erfolgreich ist oder nicht.

Zwei häufige Verwendungen für die primäre Squeeze-Aktion sind das Greifen und/oder Aufheben von Objekten in der 3D-Welt und das Drücken eines Triggers, um eine Waffe in einem Spiel oder einer Simulation abzufeuern.

#### Beispiel

Dieser Beispielcode zeigt eine Reihe von Squeeze-Event-Handlern, die diese Ereignisse implementieren, um das Aufheben und Halten von Objekt aus der Szene zu verwalten. Der Code setzt die Existenz eines `avatar`-Objekts voraus, das den Charakter darstellt, wie es in mehreren anderen Beispielen auf dieser Seite verwendet wird, sowie der Funktionen `pickUpObject()` und `dropObject()`, die das Übertragen eines Objekts von der Welt in eine bestimmte Hand und das Loslösen eines Objekts von der Hand und das Platzieren in die Welt zurück verwalten.

##### Ein Objekt aufheben: Behandlung von squeezestart-Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird behandelt, indem Informationen zur Pose und Transformation wie üblich erfasst werden, und die [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` umgewandelt wird. Wir werden dies verwenden, um die Hand mit dem Objekt zu verknüpfen, das in dieser Hand gehalten wird.

Der Code identifiziert dann das angezielte Objekt und hebt es auf, wenn ein Objekt entlang des Zielstrahls gefunden wurde. Das Aufheben eines Objekts beinhaltet zunächst das Überprüfen, ob in der von `avatar.heldObject[hand]` repräsentierten Hand bereits ein Objekt gehalten wird. Falls ja, wird das Objekt durch Aufrufen der `dropObject()`-Funktion fallen gelassen.

Dann wird `pickUpObject()` aufgerufen, indem das angezielte Objekt als Objekt spezifiziert wird, das aus der Szene entfernt und in die angegebene `Hand` platziert werden soll. `pickUpObject()` zeichnet auch die ursprüngliche Position des Objekts auf, damit es an diesen Ort zurückgebracht werden kann, wenn die Squeeze-Aktion abgebrochen oder abgebrochen wird.

##### Das Objekt fallen lassen: der Squeeze-Event-Handler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Squeeze-Aktion beendet, indem er seinen Griff löst. In diesem Beispiel interpretieren wir das als das Freigeben des aktuell gehaltenen Objekts, das in der Szene an der angezielten Position fallen gelassen wird.

Dieser Code setzt die Existenz zusätzlicher Funktionen `findTargetPosition()`, die dem Zielstrahl folgt, bis er mit etwas kollidiert, und dann die Koordinaten zurückgibt, an denen die Kollision aufgetreten ist, und `putObject()`, die das in der angegebenen `Hand` gehaltene Objekt an der gegebenen Position positioniert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies mit dem Sammeln von Informationen über das Ereignis, einschließlich der Hand, die ein Objekt fallen lässt, und der Transformation des Zielstrahls. Die Zielstrahltransformation wird an die mutmaßliche `findTargetPosition()`-Funktion übergeben, um die Koordinaten zu erhalten, an denen das fallengelassene Objekt positioniert werden soll.

Mit der Position in der Hand können wir das Objekt dann durch Aufruf der `putObject()`-Funktion fallen lassen, die als Eingaben die `Hand` und die Zielposition nimmt. Die Aufgabe dieser Funktion besteht darin, das Objekt aus der angegebenen Hand zu entfernen und es mit der Position zurück in die Szene zu geben, die es auf den von `findTargetPosition()` erhaltenen Koordinaten platziert.

##### Das Squeeze im squeezeend-Handler abbrechen

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird empfangen, nachdem das Squeeze abgeschlossen ist, auch wenn es fehlschlägt. Wir behandeln es, indem wir das gerade gehaltene Objekt dorthin zurückbringen, wo es war, als es aufgehoben wurde.

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

Hier wird die `returnObject()`-Funktion angenommen, die weiß, wie sie das in der angegebenen `Hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, wie es von `pickUpObject()` im `squeezestart`-Event-Handler aufgezeichnet wurde.

Hier wird die `returnObject()`-Funktion angenommen, die weiß, wie sie das in der angegebenen `Hand` gehaltene Objekt an seine ursprüngliche Position zurückbringt, wie es von `pickUpObject()` im `squeezestart`-Event-Handler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, erfolgt die ungefähre Abfolge der Dinge:

1. Der Benutzer drückt die Maustaste, während er sich innerhalb des {{HTMLElement("canvas")}} befindet, der die WebXR-Szene präsentiert.
2. Das Mausereignis wird vom Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. Der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt, und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend zur Liste hinzugefügt, die von der [`XRSession`](/de/docs/Web/API/XRSession)-Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse, die der Aktion entsprechen.
5. Eine primäre Aktion wird generiert und in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisses an die App gesendet, wobei ihre Quelle auf die neue `XRInputSource` gesetzt wird. Oder, wenn die Maus als Nebenhand- oder Sekundärcontroller verwendet wird, wird stattdessen eine zusätzliche Aktion gesendet.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, dann empfängt das DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung empfängt dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, das den Abschluss der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle, und alle entsprechenden [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse werden gesendet.

Somit ist die transiente Eingabequelle wirklich transient — sie existiert nur für die Dauer der Eingabeverarbeitung und wird folglich nicht in der Eingabequellenliste aufgeführt.

## Facing und Targeting

**Facing** ist die Richtung, in die der Betrachter schaut. Diese wird nicht durch eine Eingabequelle bereitgestellt. Stattdessen wird sie mit dem [`XRPose`](/de/docs/Web/API/XRPose) erhalten, das vom aktuellen Animationsframe aus mittels der Methode [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) abgerufen wird. Die Rotationskomponente der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Mehr darüber, wie Sie die Betrachterpose verwenden können, um die Blickrichtung zu bestimmen, erfahren Sie im Artikel [Ansichten und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras).

**Targeting** ist der Akt des Benutzers, in eine bestimmte Richtung mit einer Eingabequelle zu zeigen. Die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und wahrscheinlich eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), das zur Bestimmung verwendet werden kann, wie der Zielstrahl relativ zur Blickrichtung des Betrachters ausgerichtet ist.

Dies kann oder kann nicht tatsächlich das Zeigen auf ein bestimmtes Objekt innerhalb der 3D-Welt beinhalten; das müssen Sie selbst durch Treffer-Tests ermitteln – also das Überprüfen, ob der Zielstrahl mit irgendeinem Objekt in Ihrer Szene interagiert.

### Targeting und der Zielstrahl

Der Zielstrahl ist ein Strahl, dessen Ursprung am Ursprung des Zielstrahlraums liegt und in die Richtung zeigt, in die der Benutzer das Eingabegerät zeigt. Der Zielstrahl wird unter Verwendung eines [`XRSpace`](/de/docs/Web/API/XRSpace) definiert, dessen Ursprung sich am Ausgangspunkt des Zielstrahls (typischerweise das nach außen gerichtete Ende des Controllers oder dessen Abbild in der 3D-Welt) befindet und dessen Ausrichtung -Z das sich vom Controller aus erstreckt, in die gleiche Richtung zeigt wie das [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) der [`XRInputSource`](/de/docs/Web/API/XRInputSource).

Dieser Raum befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft der Eingabequelle. Er kann zur Bestimmung verwendet werden, in welche Richtung der Controller zeigt, und zur Bestimmung des Ursprungs und der Ausrichtung des Zielstrahls. Dies kann erreicht werden, indem Sie etwa wie im folgenden Beispiel den [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignishandler implementieren. Wie üblich geht dieser Code von der Verwendung von [glMatrix](https://glmatrix.net/) aus, um die Matrix- und Vektorrechnungen durchzuführen:

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

Dies erhält den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im [Quaternion](/de/docs/Glossary/quaternion) `targetDirection`. Mit entweder dem

Dies beginnt mit dem Abrufen des Zielstrahlraums in die lokale Konstante `targetRaySpace`. Diese wird wiederum beim Aufruf der [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) verwendet, um ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zu erstellen, das die Position und Ausrichtung des Zielstrahls im Referenzraum des Betrachters `viewerRefSpace` darstellt. Wenn dies `null` ist, kehrt der Ereignishandler ohne weitere Maßnahmen zurück.

Die Transformation des Zielstrahls wird von der [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft der Pose abgerufen und in `targetRayTransform` gespeichert. Diese wird wiederum (in diesem Fall über eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl in der Szene interagiert. Wenn der Zielstrahl mit einem Objekt in der Szene interagiert, können wir tun, was auch immer wir mit ihm tun müssen.

Wenn Sie die tatsächliche Position des Ursprungs des Zielstrahls und seine Richtung herauslösen müssen, können Sie dies wie folgt tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt angezielt wird, folgen Sie dem Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Prozess wird **Treffer-Testen** oder **Kollisionsdetektion** genannt. Der Ansatz, den Sie für das Treffer-Testen wählen, hängt sehr stark von den speziellen Bedürfnissen Ihrer App ab. Die erste Frage lautet: Testen Sie Kollisionen mit virtuellen Objekten oder Gelände, mit realen Objekten oder Gelände oder beidem?

In jedem Fall müssen Sie, um das angezielte Objekt zu identifizieren, feststellen, ob der durch die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der [`XRInputSource`](/de/docs/Web/API/XRInputSource) angegebene Strahl mit irgendwelchen Objekten in der Szene interagiert, sei es virtuell oder real.

Weitere Informationen finden Sie unter [Targeting and hit detection](/de/docs/Web/API/WebXR_Device_API/Targeting).

### Darstellung von handgehaltenen Objekten

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) der Eingabequelle identifiziert ein [`XRSpace`](/de/docs/Web/API/XRSpace), das den Ursprung und die Ausrichtung beschreibt, die beim Rendern eines Objekts verwendet werden sollen, um es so darzustellen, dass es in derselben Hand gehalten wird wie die Eingabequelle. Dieser Raum ist zur Verwendung beim Zeichnen eines Modells des handgehaltenen WebXR-Controllers der [`XRInputSource`](/de/docs/Web/API/XRInputSource) vorgesehen, kann aber genauso gut verwendet werden, um jedes Objekt zu zeichnen, wie eine Kugel, ein Werkzeug oder eine Waffe. Wir haben den [grip space](#griffraum) oben behandelt, aber werfen wir einen Blick darauf, wie er zum Zeichnen von Objekten verwendet werden kann, die die Hand oder die Hand innehaben.

Da sich der Ursprung des Griffraums zentral am Griff der Hand befindet, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie alle erforderlichen Offset-Transformationen an, um den Ursprung an den Startpunkt Ihres Objekts zu verschieben, während Sie jede erforderliche Drehung vornehmen, um Ihr Modell korrekt auszurichten, damit es mit der Ausrichtung des Griffraums übereinstimmt.

## Erweiterte Controller mit dem Gamepad-Objekt

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, wenn nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugriff auf Gamepad-ähnliche Knöpfe, Achsenregler (wie Joysticks oder Thumbpads) und so weiter bietet. Dies kann dieselben Knöpfe enthalten, die die standardmäßigen [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Aktionen auslösen, kann jedoch auch eine Reihe anderer Knöpfe und Steuerungen beinhalten.

> [!NOTE]
> Während `Gamepad` von der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ist, wird es nicht von der Gamepad API verwaltet, daher sollten Sie nicht versuchen, irgendwelche Gamepad API-Methoden damit zu verwenden. Der Objekttyp wird aus Bequemlichkeitsgründen wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerungen mit der `Gamepad`-Aufzeichnung, entweder, weil sie dies nicht unterstützt oder, weil sie keine zusätzlichen Steuerungen hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um auf spezielle Knöpfe, Touchpads usw. zuzugreifen, sondern bietet auch eine Möglichkeit, direkter auf die Steuerungen zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Squeeze-Eingaben dienen, da diese in seiner [`buttons`](/de/docs/Web/API/Gamepad/buttons)-Liste enthalten sind.

Da diese Verwendung der `Gamepad`-Schnittstelle eine Bequemlichkeit darstellt und keine echte Anwendung der Gamepad-API ist, gibt es mehrere Unterschiede zwischen der Verwendung mit WebXR und ihrer Verwendung in Gamepad-API-Anwendungen. Der bemerkenswerteste—aber nicht der einzige—Unterschied ist, dass WebXR das `xr-standard`-Gamepad-Mapping hinzufügt, siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft für zusätzliche Unterschiede. Dieses Gamepad-Mapping definiert, wie die Steuerungen auf einem typischen Einhand-VR-Controller im Taschenformat auf Gamepad-Steuerungen abgebildet werden.

## Eingaben von nicht-WebXR-Quellen einbeziehen

Manchmal müssen Sie eine Möglichkeit haben, dem Benutzer die Eingabe mit Controllern zu ermöglichen, die extern zu WebXR sind. Am häufigsten sind diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch nicht-XR-Gamepad-Geräte, Netzwerkeingaben oder andere Quellen von Daten verwenden, um Benutzereingaben zu simulieren. Während WebXR keine direkte Unterstützung für die Verbindung dieser Eingabegeräte mit der XR-Szene bietet, können Sie die Eingabedaten selbst sammeln und selbst anwenden.

Angenommen, Eingaben werden verwendet, um in der Simulation einen Avatar zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben folgendermaßen verwendet, um den Avatar zu beeinflussen, mit den vom nicht-XR-Eingabegerät gesammelten Daten:

- Position
  - : Die Position des Avatars wird durch Anwenden eines [Deltas](/de/docs/Glossary/delta) auf die zuvor bekannte Position geändert, dann wird der Referenzraum des Avatars durch einen neuen ersetzt, dessen Transformation die neue Position widerspiegelt.
- Ausrichtung
  - : Die Ausrichtung oder Blickrichtung des Avatars wird durch Anwenden eines Deltas auf seine Rotation um die drei Achsen geändert, dabei wird sein Ausrichtungsvektor aktualisiert und sein Referenzrahmen neu berechnet.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie das Verwenden eines Objekts oder einer Waffe, Springen oder jede andere Aktivität, die sich nicht auf grundlegende Bewegungen und Drehungen bezieht.

Einige Eingaben werden stattdessen verwendet, um die Anwendung anstelle des Avatars zu steuern. Zum Beispiel könnte ein Button verwendet werden, um ein Optionsmenü zu öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menüs offen ist, könnten Eingaben, die sonst den Avatar steuern würden, stattdessen verwendet werden, um die Benutzeroberfläche des Menüs zu steuern.

### Verwendung von Tastatur- und Mausereignissen

Das Erfassen von Eingaben von der Tastatur und Maus geschieht so wie in jeder Webanwendung. Richten Sie Handhabungen für die Ereignisse ein, die Sie handhaben müssen, um die gewünschten Eingaben zu erhalten. Es ist das, was Sie mit diesen Eingaben tun, das interessant ist.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden werden, um Informationen über den Avatar und seine Weltsicht zu verfolgen. Wir möchten, dass der Spieler in der Lage ist, die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu verwenden, um sich nach vorne, links, hinten und rechts zu bewegen. Da wir die Position des Avatars sowohl aufgrund der Tastatur- und Mausinformationen als auch der möglichen Bewegungen von XR-Hardware verwalten, müssen wir diese Informationen separat verwalten und sie als Transformation anwenden, bevor wir den Avatar (oder die Welt aus der Perspektive des Avatars) zeichnen.

Um dies zu erreichen, fügen wir dem `avatar`-Objekt eine `posDelta`-Eigenschaft hinzu, vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint), die die Offsets enthält, die auf alle drei Achsen angewendet werden müssen, um die Position des Avatars (den Ursprung des Referenzrahmens der Betrachterpose) zu justieren, damit die Bewegung und Rotation von der Tastatur und Maus einbezogen wird.

Der entsprechende Code für die Tastatureingabe könnte etwa so aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant ist und nicht besonders realistisch. Sie können dies erheblich verbessern, indem Sie einige Kenntnisse über Physik anwenden, um die Beschleunigung über die Zeit basierend darauf zu ändern, wie lange die Taste gedrückt gehalten wird, und andere Faktoren.

### Anwenden von Eingaben auf die Szene

Da wir nun die Deltas haben, die auf die Position und Ausrichtung angewendet werden müssen – in unserem Beispiel in den `posDelta`- und `orientDelta`-Eigenschaften unseres `avatar`-Objekts – können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits nach einem Zeitplan rendern, können wir den Code, um diese Änderungen anzuwenden, einfach dort hinzufügen, neben dem Vorbereiten und Zeichnen der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die hier gezeigte `drawFrame()`-Funktion ist der Callback, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie es durch den Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) festgelegt wurde. Diese ruft eine Funktion `applyExternalInputs()` auf, die wir bald definieren werden; sie nimmt das `avatar`-Objekt an und verwendet dessen Informationen, um den Referenzrahmen des Avatars zu aktualisieren.

Danach geht alles weiter wie üblich, wobei die Pose des Betrachters aus dem aktualisierten Referenzrahmen entspricht, der nächste Frame-Callback mittels `requestAnimationFrame()` angefordert sowie alles für die Verwendung von WebGL aufgestellt und die Szenerie gezeichnet wird. Der Zeichnungs- und andere verwandte Code kann im Beispiel [Bewegung, Ausrichtung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) zu finden.

Die `applyExternalInputs()`-Methode nimmt das `avatar`-Objekt zurrück und ersetzt seine Eigenschaft `referenceSpace` durch einen neuen Referenzrahmen, der die aktualisierten Deltas inkludiert.

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
- [Geometry and reference spaces in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Spatial tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering and the WebXR frame animation callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Viewpoints and viewers: Simulating cameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Movement, orientation, and motion: A WebXR example](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
