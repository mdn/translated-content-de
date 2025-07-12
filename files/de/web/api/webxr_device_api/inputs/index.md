---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("WebXR Device API")}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität durch Hinzufügen oder Verändern der Umgebung zu erweitern. Um ein erfüllendes und ansprechendes Erlebnis zu schaffen, muss der Benutzer mit diesem interagieren können. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden werden wir untersuchen, wie Sie die Eingabegeräte-Verwaltungsfunktionen von WebXR nutzen können, um festzustellen, welche Eingabequellen verfügbar sind, und anschließend diese Quellen auf Eingaben zu überwachen, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu handhaben.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zielanvisierung und Aktionen. Die Zielanvisierung ist die Spezifizierung eines Punktes im Raum durch die Eingabe des Benutzers. Dies kann das Tippen des Benutzers auf einen Punkt auf dem Bildschirm, die Verfolgung der Augen oder die Nutzung eines Joysticks oder eines Bewegungssensor-Controllers zur Bewegung eines Cursors umfassen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Button, als auch Quetschaktionen, wie das Drücken eines Triggers oder das Festziehen des Griffs beim Tragen von haptischen Handschuhen.

Durch die Kombination dieser beiden Arten von Eingaben mit der Veränderung der Betrachtungsposition und/oder -orientierung durch die Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung schaffen.

### Arten von Eingabegeräten

WebXR unterstützt eine Vielzahl von Geräten zur Handhabung von Zielanvisierungs- und Aktions-Eingaben. Diese Geräte umfassen, sind jedoch nicht beschränkt auf:

- Bildschirmberührungen (insbesondere, aber nicht nur auf Telefonen oder Tablets) können gleichzeitig sowohl zur Zielanvisierung als auch zur Auswahl verwendet werden.
- Bewegungssensor-Controller, die Beschleunigungsmesser, Magnetometer und andere Sensoren zur Bewegungsverfolgung und Zielanvisierung verwenden und möglicherweise eine beliebige Anzahl von Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren usw. enthalten, um zusätzliche Eingabequellen sowohl zur Zielanvisierung als auch zur Auswahl bereitzustellen.
- Drückbare Trigger oder Handgriffpolster zur Bereitstellung von Quetschaktionen.
- Sprachbefehle mittels Spracherkennung.
- Räumlich verfolgte artikulierte Hände, wie z.B. [verkabelte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Zielanvisierungs- als auch Quetschaktionen sowie Auswahlaktionen ausführen, wenn sie mit Tasten oder anderen Quellen von Auswahlaktionen ausgestattet sind.
- Ein-Knopf-Klickgeräte.
- Blickverfolgung (Verfolgung der Augenbewegungen zur Auswahl von Zielen).

### Eingabequellen

Jede Quelle von WebXR Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt repräsentiert, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle umfassen, in welcher Hand sie gehalten wird (falls zutreffend), welche Zielanvisierungsmethode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die verwendet werden können, um den Zielstrahl zu zeichnen und das anvisierte Objekt oder den Ort zu finden, sowie Profilsaiten, die die bevorzugte Darstellung des Controllers im Sichtbereich des Benutzers und die Funktionsweise der Eingabe angeben.

Die grundlegenden Fähigkeiten einer Eingabebauweise sind:

- Zielanvisierung
  - : Überwachung von Richtungssteuerungen (entweder ein Bewegungssensor-Zeiger oder Joystick oder Trackpad, zum Beispiel), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, obwohl die Zielanvisierung Sie selbst implementieren müssen. Siehe [Facing and targeting](#ausrichtung_und_zielanvisierung) für weitere Informationen.
- Auswahl
  - : Verwendung der Haupt-Auswahltaste oder anderer Eingaben am Controller, um die anvisierte Richtung (oder das Objekt, auf das es zeigt) auszuwählen oder eine andere Aktion auszuführen. Für Details zur Primäraktion siehe [Primary action](#primäraktion).
- Quetschen
  - : Drücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszuführen. Der Abschnitt [Primary squeeze action](#primäre_quetschaktion) beschreibt dies ausführlicher.

Weitere mögliche Fähigkeiten eines WebXR-Controllers werden über das [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Objekt des Eingabegeräts bereitgestellt. Dieses Objekt bietet Zugriff auf alle Tasten, Achsen, Trackpads usw., die Teil des Controllers sein können. Siehe [Fortgeschrittene Controller mit dem Gamepad-Objekt](#fortgeschrittene_controller_unter_verwendung_des_gamepad-objekts), um zu erfahren, wie Sie diese Controller verwenden.

### Instanz-Eigenschaften von Eingabequellen

Jede einzelne `XRInputSource` hat eine Reihe von Eigenschaften, die die verfügbaren Achsen und Tasten der Eingabe, welche Hand es hält und wie die Eingabequelle zur Handhabung der Zielanvisierung innerhalb des 3D-Raums verwendet wird, beschreiben.

#### Händigkeit

**Händigkeit**, angezeigt durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist ein Zeichenfolgenwert, der anzeigt, in welcher der Hände des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht in der Hand gehalten wird oder nicht bekannt ist, in welcher Hand sich der Controller befindet.

Händigkeit kann für verschiedene Dinge verwendet werden, einschließlich der Auswahl eines geeigneten Meshes zur Darstellung des Controllers in der Ansicht und zur Unterstützung seiner Darstellung in der richtigen Hand, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App den Begriff "Haupthand" und "Nebenhand" zur Bestimmung der Funktionalität eines Controllers verwendet; in einem Spiel könnte zum Beispiel der Controller der Haupthand die Waffe des Spielers kontrollieren, während der Controller der Nebenhand zur Steuerung der Ausrichtung eines Schildes verwendet wird.

#### Zielstrahlmodus

Der Zielstrahlmodus ist ein Zeichenfolgenwert, der in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft gefunden wird. Es beschreibt die Technik, die zur Bestimmung des Zielstrahls verwendet wird und wie er dem Nutzer visuell dargestellt werden soll.

Wenn der Zielstrahlmodus `gaze` ist, befindet sich der Ursprung des Strahls beim Betrachter und zielt in die Richtung, in die der Benutzer blickt. Diese blickbasierte Eingabemethode ist ziemlich einfach und benötigt keine speziellen Steuerungen, da sie auf der gemeldeten Blickrichtung basiert, die durch das Headset oder ein anderes Gerät bestimmt wird, das die Blickrichtung des Betrachters erfasst. Der Zielstrahl sollte vom Punkt zwischen den Augen in eine Richtung senkrecht zum Gesicht des Betrachters ausgehen.

Flexibler ist der `tracked-pointer` Modus, bei dem der Ursprung des Strahls an einem Handcontroller oder einem Handverfolgungssystem liegt und in die Richtung zeigt, in die der Controller weist. Der Strahl erstreckt sich in eine Richtung, die durch die Plattform und den Controller definiert wird, wenn dies definiert ist; andernfalls streckt sich der Strahl in derselben Richtung aus, in die der Benutzer mit dem ausgestreckten Zeigefinger weist.

Der dritte und letzte Zielstrahlmodus ist vor allem auf mobilen Geräten wie Smartphones und Tablets zu finden. Der `screen` Modus gibt an, dass der Zielstrahl basierend auf der Interaktion des Nutzers mit dem WebXR-Kontext durch das Bildschirmberühren bestimmt wird, indem der Betrachter den Bildschirm oder den Zielstrahl irgendwie mit den Fingern berührt oder zieht.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der die Position und Orientierung des Zielstrahls beschreibt, ist in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft zu finden. Dieser Raum hat seinen nativen Ursprung am Punkt, von dem der Zielstrahl ausgeht (z. B. die vordere Spitze des Controllers oder das Ende eines Gewehrlaufs, wenn der Controller als Gewehr gerendert wird) und sein Orientierungsvektor erstreckt sich entlang dem Pfad des Zielstrahls.

Den Zielstrahl, der dem `targetRaySpace` entspricht, können Sie innerhalb des Zeichnungs-Handlers für einen bestimmten Frame leicht mit der [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode des [`XRFrame`](/de/docs/Web/API/XRFrame) erhalten. Der zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose)'s [`transform`](/de/docs/Web/API/XRPose/transform) entspricht dem Transformationsmatrix des Zielstrahls. Für einen Eingabecontroller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie nun den Punkt, von dem der Zielstrahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), die im Bezugssystem des Betrachters (`viewerRefSpace`) angegeben sind. Das ist alles, was Sie benötigen, um den Zielstrahl zu zeichnen, zu bestimmen, was anvisiert wird, Treffererkennung durchzuführen usw.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, den Sie verwenden können, um Objekte so zu rendern, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Das Koordinatensystem des Griffraums der linken Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_left.svg)
**Abbildung: Das Koordinatensystem des Griffraums der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_right.svg)

Der native Ursprung des Griffraums, der sich um die Mitte der Faust des Spielers befindet, ist (0, 0, 0) im lokalen Koordinatensystem der Eingabequelle, während der durch `gripSpace` angegebene [`XRSpace`](/de/docs/Web/API/XRSpace) jederzeit verwendet werden kann, um Koordinaten oder Vektoren vom Raum der Eingabequelle in Weltkoordinaten zu konvertieren (oder umgekehrt).

Das bedeutet, dass, wenn Sie ein 3D-Modell verwenden, um Ihren Controller, die Hände Ihres Spieler-Avatars oder etwas anderes, das die Position des Controllers im Raum repräsentiert, darzustellen, der `gripSpace` als Transformationsmatrix verwendet werden kann, die das Modell des Objekts korrekt positioniert und ausrichtet, um es zu rendern. Um dies zu tun, ist es notwendig, die Transformation zu verwenden, um den Griffraum in das von WebGL für das Rendern verwendete Weltkoordinatensystem zu konvertieren.

**Abbildung: Abbildung des Griffraums auf das Weltkoordinatensystem. Die Abstände _x_, _y_ und _z_ zusammen ergeben die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen dem Griffraum und dem Weltraum zeigt](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung sich bei _G_ befindet, am Mittelpunkt des Griffs des Benutzers auf dem Controller, der direkt vom Benutzer weg zeigt, parallel zur _z_-Achse. Relativ zum Ursprung des Weltraums _W_ befindet sich der Ursprung des Griffraums _x_ Einheiten nach rechts, _y_ Einheiten nach oben und _z_ Einheiten weiter weg. Angesichts der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da sich der Griffraum weiter entlang der _z_-Achse befindet und daher in die negative Richtung zeigt.

Wenn der Controller stattdessen links von und näher beim Benutzer als der Weltraumursprung positioniert wäre (oder möglicherweise hinter dem Benutzer, wenn der Benutzer sich am Ursprung befindet, obwohl dies eine unbequeme Art ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre immer noch positiv, es sei denn, der Controller w würde unter dem Weltraumursprung bewegt.

Dies wird im folgenden Diagramm gezeigt, in dem sich der Controller unten und links vom Ursprung des Weltraums befindet, wobei der Controller auch näher bei uns als der Ursprung bewegt wird. Infolgedessen sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Abbildung eines Griffraums auf den Weltursprung, wenn der Controller unterhalb und links vom Weltursprung und näher bei uns als der Weltursprung positioniert ist.**
![Die Beziehung zwischen einem anderen Griffraum und dem Weltraum](gripspace-on-worldspace-diag.svg)

#### Gamepad-Datensatz

Jede Eingabequelle verfügt über eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, falls nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt beschreibt, das die verschiedenen Steuerelelemente und Widgets auf dem Controller beschreibt. Wenn das Eingabegerät nur die primären Bewegungssensoren, ein Quetschsteuerungselement und eine Taste hat, kann es keinen `Gamepad`-Datensatz haben. Wenn jedoch eine `gamepad` vorhanden ist, können Sie sie verwenden, um die verfügbaren Tasten und Achsen auf dem Controller zu identifizieren und abzufragen.

Obwohl das `Gamepad`-Datensatz durch die [Gamepad-API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird es nicht tatsächlich von der Gamepad-API verwaltet und funktioniert nicht genau auf die gleiche Weise. Siehe [Fortgeschrittene Controller mit dem Gamepad-Objekt](#fortgeschrittene_controller_unter_verwendung_des_gamepad-objekts) für genauere Informationen.

#### Profilzeichenfolgen

Jede Eingabequelle kann eine oder mehrere **Eingabeprofilnamen**-Zeichenfolgen haben, die im Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) zu finden sind, von denen jede eine bevorzugte visuelle Darstellung der Eingabequelle innerhalb der 3D-Welt sowie ihre Funktionen beschreibt. Die Verwendung dieser Profile wird kurz unter [Input profiles](#eingabeprofile) beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erstellen, die in Verbindung mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät kommt, sondern als ob sie es wäre. Wenn ein XR-Gerät beispielsweise einen Modus bietet, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle während der Aktion zu repräsentieren.

Dies ist notwendig wegen der Trennung, die zwischen Standard-Eingabegeräten und XR-Eingabequellen aufrechterhalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle während jeder [transienten Aktion](#transiente_aktionen) zu repräsentieren.

## Verwaltung von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie Informationen zu jeder von ihnen abrufen können, einschließlich ihrer Position und Orientierung, ihrem Zielstrahl (falls für Ihre Anforderungen zutreffend) und Details, die Ihnen helfen können, zu entscheiden, wie Sie die Eingabequelle visuell präsentieren, falls überhaupt. Sie müssen auch in der Lage sein, zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; zum Beispiel, wenn der Benutzer zwei Controller hat, welcher wird zur Manipulation von UI-Elementen verfolgt, oder beide?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen aufzulisten, Profilinformationen über jede Eingabequelle zu untersuchen und zu entscheiden, wie jeder Eingabekontroller verwendet werden soll.

### Aufzählen von Eingabequellen

Die WebXR-Sitzung, die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert wird, hat eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, die eine _live_-Liste der WebXR-Eingabegeräte, die derzeit mit dem XR-System verbunden sind, darstellt.

```js
let inputSourceList = xrSession.inputSources;
```

Aufgrund der Tatsache, dass die Inhalte der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die jede Eingabequelle in der Liste darstellen, schreibgeschützt sind, werden Änderungen an diesen Eingaben vom WebXR-System vorgenommen, indem der Eintrag der Quelle gelöscht und ein neuer hinzugefügt wird, um ihn zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, wenn sich eine oder mehrere der Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder entfernt wird.

Wenn Sie beispielsweise mitverfolgen müssen, welcher Controller in welcher Hand des Spielers gehalten wird, könnten Sie dies in etwa so tun:

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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Erstellungs-Callback der Sitzung zum ersten Mal die Ausführung abschließt, sodass Sie es verwenden können, um die Eingabequellenliste so bald wie möglich beim Start abzurufen. Das Ereignis wird als [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) geliefert, das drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die neu zum XR-System hinzugefügten Eingabequellen anzeigen.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die alle Eingabequellen angeben, die aus dem XR-System entfernt wurden.

### Identifizierung des Profils der Eingabe

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine live Liste der WebXR-Eingabeprofile enthält, die auf die Eingabequelle anwendbar sind, in Reihenfolge der Spezifität von am spezifischsten bis am wenigsten spezifisch.

Um über die Grundlagen der Funktionsidentifikation hinaus etwas Bedeutungsvolles hinsichtlich der Profilierung zu tun, müssen Sie möglicherweise die JSON-Profil-Datenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) importieren.

Siehe [Input profiles](#eingabeprofile) für spezifischere Details zur Arbeit mit Eingabeprofilen.

### Auswahl des primären Controllers

Um Probleme zu vermeiden, die durch mehrere Controller entstehen könnten, die unabsichtlich die Benutzeroberfläche manipulieren, kann Ihre App einen "primären" Controller haben. Dieser Controller würde nicht nur die Verantwortung für das Klicken durch die Benutzeroberfläche Ihrer App übernehmen, sondern auch als "Haupthand" angesehen werden, während andere Controller dann Nebenhand- oder zusätzliche Controller wären.

> [!NOTE]
> Das bedeutet nicht, dass Ihre App _muss_ einen primären Controller bestimmen. Aber wenn sie es tut, könnten diese Strategien hilfreich sein.

Es gibt einige Möglichkeiten, wie Sie einen primären Controller auswählen können. Wir werden uns drei ansehen.

#### Händigkeit

Der direkteste Weg, um zu entscheiden, welcher Controller primär ist, ist es, eine benutzerdefinierbare "Händigkeit"-Präferenz zu haben, die angibt, welche Hand des Benutzers dominant ist. Sie würden dann jede Eingabequelle untersuchen und eine finden, die dem entspricht, wenn verfügbar und als Fallback auf einen anderen Controller zurückgreifen, wenn in dieser Hand kein Controller vorhanden ist.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieses Code-Snippet beginnt mit der Annahme, dass die erste Eingabequelle die primäre ist, sucht dann jedoch nach einer, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der im `user`-Objekt angegebenen übereinstimmt. Wenn sie übereinstimmt, wird diese Eingabequelle als die primäre ausgewählt.

#### Erstverwendung

Eine andere Möglichkeit besteht darin, die erste Eingabe zu verwenden, auf die der Benutzer die Auswahlaktion auslöst. Der folgende Code startet damit, dass die erste Eingabequelle als die primäre angenommen wird, dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis einrichtet, der die Quelle des Ereignisses als die primäre Eingabequelle aufzeichnet. Der `select`-Ereignishandler wird anschließend durch die Funktion `realSelectHandler()` ersetzt, die für die Bearbeitung aller zukünftigen `select`-Ereignisse verwendet werden soll. Dann wird das Ereignis an `realSelectHandler()` weitergeleitet, um das Ereignis normal zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Der Effekt ist, dass wir die primäre Eingabequelle festlegen, sobald ein `select`-Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es stammt, das Ereignis von dort aus normal behandeln und von da an die Ereignisse ohne weitere Sorgen darüber, welche Eingabequelle primär ist, behandeln.

#### Vom Benutzer ausgewählt

Die komplexeste Möglichkeit, eine primäre Eingabequelle zu bestimmen, ist äußerst flexibel, erfordert jedoch möglicherweise viel Arbeit in der Implementierung. In diesem Szenario durchlaufen Sie die Liste der Eingabequellen und deren Profile, um Informationen über jede Eingabequelle zu sammeln, und präsentieren dann eine Benutzeroberfläche, die jede Eingabe beschreibt und dem Benutzer erlaubt, Verwendungen für jede von ihnen zuzuweisen. Dies gut zu tun könnte eine große Aufgabe sein, könnte jedoch für komplexe Anwendungen nützlich sein, die möglicherweise mehrere Benutzereingaben umfassen.

Ein Großteil der Informationen, die Sie benötigen, um dies zu implementieren, finden Sie im Abschnitt über [Input profiles](#eingabeprofile) unten. Einzelheiten liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einer Informationsmenge entsprechen, die diese Eingabequelle beschreibt und wie sie verwendet werden kann. Diese Namen werden in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft der Eingabequelle gefunden, und das offizielle Register dieser Profilsaiten wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub verwaltet.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profilinformationen zu finden, indem man das `profileId`-Feld lokalisiert, das den Wert `generic-trigger-squeeze-touchpad` hat.

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

Dies ist ein Controller, der unabhängig davon, in welcher Hand er sich befindet (und selbst wenn er derzeit nicht mit einer bestimmten Hand verbunden ist), drei Komponenten hat: einen Standard-Trigger, eine Standard-Quetscheingabe und ein Touchpad. Laut der `selectComponentId`-Eigenschaft ist die `xr-standard-trigger`-Komponente diejenige, die verwendet wird, um eine Hauptaktion auszuführen.

Zusätzlich ordnet das `gamepad`-Objekt diese Eingaben dem Gamepad zu, indem es den Trigger, die Quetschbewegung und den Touchpad-Tap der Liste der Tasten der Eingabequelle zuweist und die "Achsen" des Touchpads der Achsenliste zuordnet.

Die Liste in `profiles` ist in umgekehrter Reihenfolge der Spezifität; das heißt, die präziseste Beschreibung steht an erster Stelle und die am wenigsten präzise Beschreibung steht zuletzt. Der erste Eintrag in der Liste ist typisch für das genaue Modell des Controllers oder eines Modells, mit dem der Controller kompatibel ist.

Zum Beispiel ist Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Trigger, einer Quetschsteuerung und einem Daumenstick anzeigt. Während der Oculus Touch Controller tatsächlich einen Daumenpad hat, anstelle eines Daumensticks, ist die gesamte Beschreibung "nahe genug", dass die Details innerhalb des mit dem Namen übereinstimmenden Profils es ermöglichen, den Controller nützlich zu interpretieren.

## Aktionen

In WebXR ist eine **Aktion** eine besondere Art von Ereignis, das ausgelöst wird, wenn der Benutzer eine spezielle Taste auf dem Controller aktiviert. Alle zusätzlichen Tasten (sowie solche Dinge wie Achsencontroller—Joysticks, zum Beispiel—und dergleichen) werden ausschließlich über die [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft des [`XRInputSource`](/de/docs/Web/API/XRInputSource) verwaltet. Siehe [Fortgeschrittene Controller unter Verwendung des Gamepad-Objekts](#fortgeschrittene_controller_unter_verwendung_des_gamepad-objekts) unten für weitere Details zur Unterstützung dieser zusätzlichen Steuerelemente und Tasten.

Die **Primäraktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Haupteingabeelement, das einen besonderen Zweck erfüllt, aktiviert. Derzeit gibt es zwei Arten von Primäraktionen:

- Die **Primäraktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Auswahl"-Eingabe auf seinem Controller aktiviert. Diese Eingabe kann eine Taste, ein Auslöser, ein Touchpad-Tap oder -Klick, ein Sprachbefehl oder eine spezielle Handbewegung oder möglicherweise eine andere Form von Eingabe sein. Zum Beispiel, auf einem Handcontroller mit einem anklickbaren Touchpad, eines Steuerkörpers sowie Rück- und "Menü"-Tasten ist das Klicken auf das Trackpad wahrscheinlich die Primäraktion. Einige Controller haben möglicherweise eine Taste mit der Bezeichnung "Select". Auf einem Gamepad-ähnlichen Controller ist die "A"-Taste wahrscheinlich die Primäraktion.
- Die **primäre Quetschaktion** ist die Aktion, die engagiert wird, wenn der Benutzer den Controller quetscht. Dieses "Quetschen" kann durch die Verwendung eines Drucksensors im Controller erfasst werden oder kann durch einen Trigger, eine Handbewegung oder einen anderen Mechanismus simuliert werden. Wenn der Eingabekontroller zum Beispiel ein haptischer Handschuh ist, könnte er berichten, dass die primäre Quetschaktion erfolgt ist, wenn der Benutzer seine Faust macht und ballt.

Während eine gegebene Eingabequelle nur eine primäre Aktion und eine primäre Quetschaktion haben kann, kann es mehr als eine Steuerung auf dem Eingabegerät geben, die jede Primäraktion auslösen soll. Zum Beispiel könnte der Benutzer seinen Controller so einrichten, dass sowohl das Tippen als auch das Klicken auf das Trackpad eine Primäraktion generieren.

Diese Arten von Eingabeaktionen werden im Folgenden näher beschrieben.

### Primäraktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (die manchmal als "Auswahlaktion" abgekürzt wird) ist eine plattformabhängige Aktion, die reagiert, wenn der Benutzer sie manipuliert, indem die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) in dieser Reihenfolge geliefert werden. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine primäre Aktion hat, wird die Eingabequelle als eine **Hilfseingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum ausrichtet und dann eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das anzeigt, dass der Benutzer die Aktivität ausgeführt hat, die die Primäraktion beginnt. Dies kann eine Geste, das Drücken einer Taste oder Ähnliches sein.
2. Wenn die primäre Aktion erfolgreich endet (zum Beispiel, weil der Benutzer die Taste oder den Schalter loslässt), anstatt wegen eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nach dem `select`-Ereignis _oder_ wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt oder anderweitig nicht verfügbar wird, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Allgemein gesagt, teilen Ihnen die `selectstart`- und `selectend`-Ereignisse mit, wann Sie möglicherweise etwas dem Benutzer anzeigen möchten, das anzeigt, dass die Primäraktion ausgeführt wird. Dies könnte das Zeichnen eines Controllers mit der aktivierten Taste in einer neuen Farbe sein oder das angezielte Objekt wird gegriffen und bewegt, beginnend, wenn `selectstart` eintrifft, und endet, wenn `selectend` empfangen wird.

Das `select`-Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen möchte. Dies kann so einfach sein wie das Werfen eines Objekts oder das Drücken des Abzugs einer Waffe in einem Spiel oder so umfassend wie das Platzieren eines Objekts, das sie durch die Welt bewegt haben, an einem neuen Ort.

Wenn Ihre Primäraktion eine einfache Abzugsaktion ist und Sie nichts animieren müssen, während der Abzug betätigt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und das `select`-Ereignis verarbeiten.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen liefern diese Ereignisse sehr schnell hintereinander. Die Zeitspanne, die zwischen diesen Ereignissen vergeht, hängt sowohl von der Hardwarevorrichtung ab, die die Aktion auslöst, als auch von den Softwaretreibern, die die Hardware-Aktion interpretieren und in eine Ereignisserie umwandeln. Nehmen Sie nicht an, dass diese Ereignisse in einem bestimmten Zeitraum zwischen ihnen auftreten werden.

Zum Beispiel, wenn die Hardware, die die Primäraktion auslöst, eine Taste ist, würden Sie `selectstart` erhalten, wenn der Benutzer die Taste drückt, dann `select` und `selectend`, wenn der Benutzer sie loslässt.

In der Dokumentation gibt es mehrere Beispiele, die zeigen, wie man `select`-Ereignisse behandelt, wie im Abschnitt über [Zielanvisierung und der Zielstrahl](#zielanvisierung_und_der_zielstrahl) an anderer Stelle in diesem Artikel.

### Primäre Quetschaktion

Eine **primäre Quetschaktion** ist eine plattformabhängige Aktion, die der [`XRSession`](/de/docs/Web/API/XRSession) die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) sendet. Diese Ereignisse werden typischerweise generiert, wenn der Benutzer den Controller drückt, eine Handbewegung macht, die das Greifen von etwas imitiert, oder einen Auslöser drückt.

Die Ereignisse werden in der gleichen Reihenfolge gesendet wie die von der primären Aktion, abgesehen vom Namen jedes Ereignisses:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, das anzeigt, dass der Benutzer eine Quetschaktion angefangen hat.
2. Wenn die primäre Quetschaktion erfolgreich endet, wird ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis an die Sitzung gesendet.
3. Dann wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, um anzuzeigen, dass die Quetschaktion nicht mehr im Gange ist. Dies wird gesendet, ob die Quetschaktion erfolgreich war oder nicht.

Zwei häufige Verwendungen für die primäre Quetschaktion sind das Greifen und/oder Aufheben von Objekten in der 3D-Welt und das Drücken eines Triggers zum Abfeuern einer Waffe in einem Spiel oder einer Simulation.

#### Beispiel

Dieses Beispiel zeigt einen Satz von Quetschereignishandlern, die diese Ereignisse implementieren, um das Aufnehmen und Halten von Objekten aus der Szene zu verwalten. Der Code geht von der Existenz eines `avatar`-Objekts aus, das den Charakter darstellt, wie in mehreren anderen Beispielen auf dieser Seite verwendet, sowie die `pickUpObject()`- und `dropObject()`-Funktionen, die das Übertragen eines Objekts von der Welt in eine bestimmte Hand und das Loslassen eines Objekts aus der Hand und dessen Rückgabe in die Welt handhaben.

##### Aufheben eines Objekts: Behandlung von squeezestart-Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird bearbeitet, indem die Pose und Transformation wie gewohnt erfasst und die [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` aufgenommen werden. Diese verwenden wir zur Zuordnung der Hand zum in dieser Hand gehaltenen Objekt.

Der Code identifiziert dann das anvisierte Objekt und, falls ein Objekt entlang des Zielstrahls gefunden wird, hebt es auf. Das Aufheben eines Objekts besteht zunächst darin, zu prüfen, ob das in `avatar.heldObject[hand]` repräsentierte Objekt bereits ein Objekt in dieser Hand hält. Falls in dieser Hand bereits ein Objekt gehalten wird, wird es durch Aufrufen der `dropObject()`-Funktion fallen gelassen.

Dann wird `pickUpObject()` aufgerufen, wobei das anvisierte Objekt als das Objekt angegeben wird, das aus der Szene entfernt und in die angegebene `hand` gelegt werden soll. `pickUpObject()` zeichnet auch die ursprüngliche Position des Objekts auf, damit es zurück an diesen Ort gebracht werden kann, wenn die Quetschung storniert oder abgebrochen wird.

##### Ablegen des Objekts: der squeeze-Ereignishandler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Quetschaktion durch Loslassen des Griffs beendet. In diesem Beispiel interpretieren wir dies als das Loslassen des derzeit gehaltenen Objekts, indem es an der anvisierten Position in die Szene fallen gelassen wird.

Dieser Code geht von der Existenz zusätzlicher Funktionen `findTargetPosition()` aus, die den Zielstrahl verfolgt, bis er mit etwas kollidiert, dann die Koordinaten zurückgibt, an denen die Kollision aufgetreten ist, und `putObject()`, die das im `hand` gehaltene Objekt an der angegebenen Position platziert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies, indem die Informationen abgerufen werden, die für das Ereignis benötigt werden, einschließlich der Hand, die ein Objekt fallen lässt und des Zielstrahl-Transformations. Die Zielstrahl-Transformation wird in der vermuteten Funktion `findTargetPosition()` verwendet, um die Koordinaten zu ermitteln, an denen das fallengelassene Objekt positioniert werden soll.

Mit der Position kann das Objekt dann durch Aufrufen der `putObject()`-Funktion fallen gelassen werden, die als Eingaben die `hand` und die Zielposition hat. Die Aufgabe dieser Funktion ist es, das Objekt aus der angegebenen Hand zu entfernen und wieder in die Szene aufzunehmen, wobei seine Position so eingestellt wird, dass es auf den von `findTargetPosition()` zurückgegebenen Koordinaten platziert wird.

##### Zurücksetzen der Quetschung im squeezeend-Handler

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird empfangen, nachdem die Quetschung abgeschlossen ist, selbst wenn sie fehlschlägt. Wir behandeln es, indem wir das derzeit gehaltene Objekt an seinen ursprünglichen Ort zurückbringen, wo es beim Aufnehmen aufgezeichnet wurde.

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

Hierbei wird die `returnObject()`-Funktion als eine angenommen, die weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht wird, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

Hierbei wird die `returnObject()`-Funktion als eine angenommen, die weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht wird, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, wird die ungefähre Abfolge der Ereignisse ausgelöst:

1. Der Benutzer drückt die Maustaste, während er sich innerhalb des {{HTMLElement("canvas")}} befindet, der die WebXR-Szene präsentiert.
2. Das Maus-Ereignis wird vom Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt ein neues `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. Der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend in die Liste aufgenommen, die von der [`XRSession`](/de/docs/Web/API/XRSession)-Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse, die der Aktion entsprechen.
5. Eine primäre Aktion wird generiert und der App in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisses gesendet, wobei seine Quelle auf die neue `XRInputSource` eingestellt ist. Oder, wenn die Maus als Nebenhand- oder sekundärer Controller genutzt wird, wird stattdessen eine Hilfsaktion gesendet.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, dann erhält das DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung erhält dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, das das Ende der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle, und alle entsprechenden [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse werden gesendet.

Deshalb ist die transiente Eingabequelle tatsächlich flüchtig—sie existiert nur für die Dauer der Eingabeverarbeitung und wird daher nicht in der Liste der Eingabequellen aufgeführt.

## Ausrichtung und Zielanvisierung

**Ausrichtung** ist die Richtung, in die der Betrachter schaut. Diese wird nicht über eine Eingabequelle bereitgestellt. Stattdessen wird die Ausrichtung über die [`XRPose`](/de/docs/Web/API/XRPose) erfasst, die durch die `XRFrame.getViewerPose()`-Methode des aktuellen Animationsframes erhalten wird. Die Rotation der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Sie können mehr darüber erfahren, wie Sie die Betrachterpose verwenden, um die Blickrichtung zu bestimmen, im Artikel [Blickpunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras).

**Zielanvisierung** ist der Akt des Benutzers, in eine bestimmte Richtung mit einer Eingabequelle zu zeigen. Die `targetRaySpace`-Eigenschaft einer Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und tatsächlich wahrscheinlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), die verwendet werden kann, um die Orientierung des Zielstrahls relativ zur Blickrichtung des Betrachters zu bestimmen.

Dies kann oder kann nicht das tatsächliche Zeigen auf ein bestimmtes Objekt innerhalb der 3D-Welt umfassen; Sie müssen dies selbst mit Treffererkennung bestimmen—das heißt, durch Überprüfung, ob der Zielstrahl mit irgendwelchen Objekten in Ihrer Szene kollidiert.

### Zielanvisierung und der Zielstrahl

Der Zielstrahl, ein Strahl dessen Ursprung am Ursprung des Zielstrahraumes liegt und in die Richtung zeigt, in die der Benutzer das Controlling-Gerät richtet. Der Zielstrahl wird unter Verwendung eines [`XRSpace`](/de/docs/Web/API/XRSpace) definiert, dessen Ursprung an der Quelle des Zielstrahls (in der Regel das nach außen gerichtete Ende des Controllers oder dessen Repräsentation in der 3D-Welt) liegt, und dessen Orientierung die Entstehungsrichtung des Zielstrahls beschreibt. Dies kann mit dem folgenden Beispiel erreicht werden, das einen [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignishandler implementiert, der diese Informationen benötigt. Wie üblich wird davon ausgegangen, dass [glMatrix](https://glmatrix.net/) verwendet wird, um die Matrix- und Vektorrechnungen auszuführen:

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

Dies erfasst den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im {{Glossary("quaternion", "Quaternion")}} `targetDirection`. Mit entweder dem

Dies beginnt mit dem Abrufen des Raumes des Zielstrahls in die lokale Konstante `targetRaySpace`. Dies wird wiederum verwendet, wenn die Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) von `XRFrame` verwendet wird, um ein XRPose-Objekt darzustellen, das die Position und Ausrichtung des Zielstrahls im Referenzraum des Betrachters `viewerRefSpace` repräsentiert. Wenn dies `null` ist, kehrt der Ereignishandler zurück, ohne weiteres zu tun.

Die Transformation des Zielstrahls wird aus der Transformationsmatrix der Pose's [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft übernommen und im lokalen `targetRayTransform` gespeichert. Dies wird wiederum (in diesem Fall durch eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl in der Szene kollidiert. Wenn der Zielstrahl mit einem Objekt in der Szene kollidiert, können wir das tun, was wir brauchen.

Wenn Sie die tatsächliche Position des Ursprungs des Zielstrahls und die Strahlrichtung entnehmen müssen, können Sie dies so tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um festzustellen, welches Objekt anvisiert wird, folgen Sie dem Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Prozess wird als **Treffererkennung** oder **Kollisionserkennung** bezeichnet. Der Ansatz, den Sie bei der Treffererkennung wählen, hängt in hohem Maße von den spezifischen Bedürfnissen Ihrer App ab. Die erste Frage ist: Erkennen Sie Kollisionen mit virtuellen Objekten oder Terrain, realen Objekten oder Terrain oder beides?

In jedem Fall müssen Sie zur Identifizierung des anvisierten Objekts feststellen, ob der durch die `targetRaySpace`-Eigenschaft einer `XRInputSource`-Eingabequelle angegebene Strahl mit irgendwelchen Objekten in der Szene kollidiert, egal ob sie virtuell oder real sind.

Siehe [Zielanvisierung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting) für einen detaillierteren Einblick in das, was erforderlich ist.

### Präsentation von Handheld-Objekten

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft einer Eingabequelle gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) an, das den Ursprung und die Orientierung beschreibt, die beim Rendern eines Objekts verwendet werden, damit es wie in derselben Hand gehalten erscheint wie seine Eingabequelle. Dieser Raum ist dazu gedacht, beim Zeichnen eines Modells des Handheld-WebXR-Eingabekontrollers verwendet zu werden, der durch das [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt wird, kann aber ebenso gut verwendet werden, um irgendein Objekt, wie einen Ball, ein Werkzeug oder eine Waffe zu zeichnen. Wir haben den [grip space](#griffraum) oben behandelt, aber schauen wir uns an, wie er zum Zeichnen von Objekten verwendet werden kann, die die Hand oder Objekte in der Hand repräsentieren.

Da sich der Ursprung des Griffraums in der Mitte des Griffs der Hand befindet, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie jede benötigte Offsettransformation an, um den Ursprung an den Startpunkt zum Rendern Ihres Objekts zu verschieben, während Sie jede Drehung anwenden, die erforderlich ist, um Ihr Modell korrekt auszurichten und es an die Orientierung des Griffraums anzupassen.

## Fortgeschrittene Controller unter Verwendung des Gamepad-Objekts

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, wenn nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugang zu gamepad-ähnlichen Tasten, Achssteuerungen (wie Joysticks oder Daumenpads) und so weiter bietet. Dies kann dieselben Tasten enthalten, die die Standardaktionen des [`XRInputSource`](/de/docs/Web/API/XRInputSource) auslösen, kann aber auch eine beliebige Anzahl zusätzlicher Tasten und Steuerungen enthalten.

> [!NOTE]
> Obwohl `Gamepad` durch die [Gamepad-API](/de/docs/Web/API/Gamepad_API) definiert ist, wird sie nicht von der Gamepad-API verwaltet, daher dürfen Sie keine Gamepad-API-Methoden mit ihr verwenden. Der Objekttyp wird als Bequemlichkeit wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerungen mit dem `Gamepad`-Datensatz, entweder weil sie dies nicht unterstützt oder weil sie keine zusätzlichen Steuerelemente hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um Zugriff auf spezielle Tasten, Trackpads usw. zu erhalten, sondern bietet auch eine Möglichkeit, die Steuerelemente, die als primäre Auswahl- und Quetscheingaben dienen, direkt zuzugreifen und zu überwachen, da diese in ihrer [`buttons`](/de/docs/Web/API/Gamepad/buttons)-Liste enthalten sind.

Da diese Verwendung des `Gamepad`-Interfaces eine Bequemlichkeit ist und nicht eine echte Anwendung der Gamepad-API, gibt es mehrere Unterschiede zwischen der Verwendung mit WebXR und der Verwendung in Anwendungen der Gamepad-API. Der bemerkenswerteste—aber nicht der einzige—Unterschied ist, dass WebXR das `xr-standard`-Gamepad-Mapping hinzufügt, siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft für zusätzliche Unterschiede. Dieses Gamepad-Mapping definiert, wie die Steuerungen auf einem typischen einhändigen VR-Handheld-Controller den Gamepad-Steuerungen zugeordnet sind.

## Eingaben von nicht-WebXR-Quellen einbeziehen

Manchmal müssen Sie eine Möglichkeit haben, dem Benutzer zu gestatten, Eingaben mit Controllern vorzunehmen, die extern zu WebXR sind. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch nicht-XR-Gamepad-Geräte, Netzwerkeingaben oder andere Datenquellen verwenden, um Benutzerkontrollen zu simulieren. Obwohl WebXR keine Unterstützung bietet, um diese Eingabegeräte direkt mit der XR-Szene zu verbinden, können Sie die Eingabedaten selbst sammeln und selbst anwenden.

Angenommen, Eingaben werden verwendet, um einen Avatar innerhalb der Simulation zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben verwendet, um den Avatar auf die folgenden Weisen zu beeinflussen, unter Verwendung der von dem nicht-XR-Eingabegerät gesammelten Daten:

- Position
  - : Die Position des Avatars wird durch Anwendung eines {{Glossary("delta", "Deltas")}} auf die zuvor bekannte Position geändert, dann wird der Referenzraum des Avatars durch einen neuen ersetzt, dessen Transformation die neue Position reflektiert.
- Orientierung
  - : Die Orientierung oder Blickrichtung des Avatars wird durch Anwendung eines Deltas auf seine Rotation um die drei Achsen geändert, seine Orientierungsvektor wird aktualisiert und dann wird sein Referenzraum neu berechnet.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie die Verwendung eines Objekts oder einer Waffe, Springen oder eine andere Aktivität, die nicht mit grundlegender Bewegung und Rotation im Zusammenhang steht.

Einige Eingaben werden stattdessen verwendet, um die Anwendung anstelle des Avatars zu steuern. Beispielsweise könnte eine Taste ein Optionsmenü öffnen, das verwendet wird, um die Anwendung zu konfigurieren. Während dieses Menü geöffnet ist, könnten Eingaben, die ansonsten den Avatar steuern würden, stattdessen zur Steuerung der Menüoberfläche verwendet werden.

### Verwendung von Tastatur- und Mausereignissen

Das Erfassen von Eingaben von der Tastatur und der Maus erfolgt genauso wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie benötigen, um die Eingaben zu erhalten, die Sie erfassen möchten. Interessant ist, was Sie mit diesen Eingaben tun.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden werden, um Informationen über den Avatar und seine Weltanschauung nachzuverfolgen. Wir wollen dem Spieler erlauben, die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> zu verwenden, um sich vorwärts, nach links, rückwärts und nach rechts zu bewegen. Da wir die Position des Avatars wie auf der Tastatur und Maus definiert in Ergänzung zu allem, was die XR-Hardware tun könnte, verwalten, müssen wir diese Informationen separat halten und sie als eine Transformation vor dem Rendern des Avatars anwenden (oder die Welt aus der Sicht des Avatars).

Um dies zu erreichen, nehmen wir in das `avatar`-Objekt eine `posDelta`-Eigenschaft auf, vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint), die die Offsets enthält, die auf alle drei Achsen angewendet werden müssen, um die Position des Avatars anzupassen (den Ursprung des Referenzraums der Betrachterpose), um Bewegung und Rotation von der Tastatur Maus einbezogen zu haben.

Der entsprechende Code zur Tastatureingabe könnte etwa so aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie einige Kenntnisse der Physik anwenden, um die Beschleunigung im Laufe der Zeit basierend darauf zu ändern, wie lange die Taste gedrückt gehalten wird und andere Faktoren.

### Anwendungen der Eingaben auf die Szene an

Jetzt, da wir die deltas haben, die auf die Position und Orientierung angewendet werden müssen—beispielsweise in den `posDelta`- und `orientDelta`-Eigenschaften unseres `avatar`-Objekts—können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits nach einem Zeitplan rendern, können wir den Code, diese Änderungen aufzutragen, dort hinzufügen, zusammen mit der Vorbereitung und dem Zeichnen der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die hier gezeigte `drawFrame()`-Funktion ist der Callback, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie beim Aufrufen der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von `XRSession` festgelegt. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir gleich definieren werden; sie nimmt das `avatar`-Objekt und verwendet seine Informationen, um das Referenzrahmen des Avatars zu aktualisieren.

Nachdem das geschehen ist, geht alles wie gewohnt weiter—die Pose des Betrachters wird aus dem aktualisierten Referenzrahmen abgerufen, der nächste Frame-Callback wird durch `requestAnimationFrame()` angefordert und dann wird fortgefahren, WebGL einzurichten und die Szene zu zeichnen. Der Zeichnung- und andere zugehörige Code finden sich im Beispiel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die `applyExternalInputs()`-Methode nimmt das `avatar`-Objekt und ersetzt seine `referenceSpace`-Eigenschaft durch einen neuen Referenzraum, der die aktualisierten Deltas einbezieht.

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

- [Zielanvisierung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Blickpunkte und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
