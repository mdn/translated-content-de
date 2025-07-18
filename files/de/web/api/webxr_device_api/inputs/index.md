---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: b9befb5ba6dac55656fd4fa0092529d0e8c08fff
---

{{DefaultAPISidebar("WebXR Device API")}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine vollkommen virtuelle Szene zu zeigen oder die Realität zu erweitern, indem die Welt um ihn herum hinzugefügt oder verändert wird. Um ein erfüllendes und fesselndes Erlebnis zu schaffen, muss der Benutzer in der Lage sein, mit ihm zu interagieren. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden werden wir uns ansehen, wie Sie die Funktionen zur Verwaltung von Eingabegeräten von WebXR verwenden, um zu bestimmen, welche Eingabequellen verfügbar sind, und wie Sie dann diese Quellen auf Eingaben überwachen können, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu ermöglichen.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zielausrichtung und Aktionen. Zielausrichtung ist die Spezifikation eines Punktes im Raum durch die Benutzereingabe. Dies kann bedeuten, dass der Benutzer auf einen Punkt auf dem Bildschirm tippt, seine Augen verfolgt oder einen Joystick oder Bewegungsmelder verwendet, um einen Cursor zu bewegen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf eine Schaltfläche, als auch Druckaktionen, wie das Ziehen eines Abzugs oder das Anziehen des Griffs beim Tragen von haptischen Handschuhen.

Durch die Kombination dieser beiden Eingabetypen mit der Änderung der Betrachtungsposition und/oder -orientierung durch das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung schaffen.

### Eingabegerätetypen

WebXR unterstützt verschiedene Gerätetypen, um Zielausrichtungen und Aktionseingaben zu verarbeiten. Diese Geräte umfassen unter anderem:

- Bildschirmtipps (insbesondere, aber nicht nur auf Handys oder Tablets) können verwendet werden, um gleichzeitig sowohl Zielausrichtungen als auch Auswahlen durchzuführen.
- Bewegungsmelder, die Beschleunigungsmesser, Magnetometer und andere Sensoren zur Bewegungserfassung und Zielausrichtung verwenden und möglicherweise zusätzlich jede Anzahl von Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren usw. enthalten können, um zusätzliche Eingabequellen sowohl für Zielausrichtungen als auch Auswahlen bereitzustellen.
- Druckbare Abzüge oder Handgriffpolster zur Durchführung von Druckaktionen.
- Sprachbefehle mittels Spracherkennung.
- Räumlich erfasste artikulierte Hände, wie [verkabelte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), die sowohl Zielausrichtungen als auch Druckaktionen sowie Auswahlaktionen bereitstellen können, wenn sie mit Tasten oder anderen Auswahlquellen ausgestattet sind.
- Ein-Knopf-Klickgeräte.
- Blickverfolgung (Verfolgen der Augenbewegungen zur Zielauswahl).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt, das die Eingabequelle und deren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle umfassen, in welcher Hand sie gehalten wird (falls zutreffend), welche Zielmethode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)s, die verwendet werden können, um den Zielstrahl zu zeichnen und das angezielte Objekt oder den Ort zu finden, sowie Objekte in den Händen des Benutzers zu zeichnen, und Profilzeichenfolgen, die die bevorzugte Darstellung des Controllers im Sichtbereich des Benutzers sowie die Funktionsweise der Eingabe angeben.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zielausrichtung
  - : Überwachung von Richtungskontrollen (entweder ein bewegungssensitiver Zeiger oder ein Joystick oder Trackpad beispielsweise), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, wobei die Umsetzung der Zielausrichtung Ihnen überlassen ist. Siehe [Ausrichtung und Zielausrichtung](#ausrichtung_und_zielausrichtung) für weitere Informationen.
- Auswahl
  - : Verwendung der Haupt-"Select"-Taste oder einer anderen Eingabe am Controller, um die angezielte Richtung oder das Objekt, auf das es zeigt, auszuwählen oder eine andere Aktion zu starten. Details zur primären Aktion finden Sie unter [Primäre Aktion](#primäre_aktion).
- Drücken
  - : Drücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion zu starten. Der Abschnitt [Primäre Druckaktion](#primäre_druckaktion) beschreibt dies ausführlicher.

Alle zusätzlichen Fähigkeiten, die ein WebXR-Controller möglicherweise hat, sind über das [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Objekt der Eingabequelle zugänglich. Dieses Objekt ermöglicht den Zugriff auf alle Tasten, Achsen, Touchpads usw., die Teil des Controllers sein können. Siehe [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) um zu lernen, wie diese Controller verwendet werden können.

### Instanzeigenschaften von Eingabequellen

Jede einzelne `XRInputSource` hat eine Reihe von Eigenschaften, die die verfügbaren Achsen und Tasten der Eingabe, die Hand, in der der Benutzer sie hält, und wie die Eingabequelle zur Verwaltung der Zielausrichtung im 3D-Raum verwendet wird, beschreiben.

#### Händigkeit

**Händigkeit**, angezeigt durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist eine Zeichenfolge, die anzeigt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht handgehalten ist oder wenn unbekannt ist, in welcher Hand der Controller sich befindet.

Die Händigkeit kann für verschiedene Dinge verwendet werden, einschließlich der Auswahl eines geeigneten Meshes, um den Controller in der Ansicht darzustellen und ihn in der richtigen Hand zu präsentieren, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App den Begriff "Haupthand" und "Nebenhand" verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel zum Beispiel kann der Controller der Haupthand die Waffe des Spielers sein, während der Controller der Nebenhand verwendet wird, um die Stellung eines Schildes zu steuern.

#### Zielstrahlmodus

Der Zielstrahlmodus ist eine Zeichenfolge, die in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft gefunden wird. Sie beschreibt die Technik, die verwendet wird, um den Zielstrahl zu bestimmen und wie er dem Benutzer visuell präsentiert werden soll.

Wenn der Zielstrahlmodus `gaze` ist, befindet sich der Ursprung des Strahls beim Betrachter und zielt in die Richtung, in die der Benutzer schaut. Diese Blickeingabemethode ist ziemlich einfach und erfordert keine speziellen Steuerungen, da sie auf der von dem Headset oder dem verwendeten Gerät gemeldeten Blickrichtung basiert. Der Zielstrahl sollte von zwischen den Augen in eine Richtung ausgehen, die senkrecht zum Gesicht des Betrachters steht.

Flexibler ist der `tracked-pointer`-Modus, bei dem der Ursprung des Strahls an einer Handsteuerung oder einem Handverfolgungssystem liegt und sich in der Richtung erstreckt, in die der Controller zeigt. Der Strahl erstreckt sich in einer Richtung, die durch die verwendete Plattform und Steuerung definiert wird, wenn dies definiert ist; andernfalls erstreckt sich der Strahl in dieselbe Richtung, in die der Benutzer mit seinem Zeigefinger zeigt, wenn dieser ausgestreckt wäre.

Der dritte und letzte Zielstrahlmodus wird am häufigsten auf Mobilgeräten wie Smartphones und Tablets gefunden. Der `screen`-Modus zeigt an, dass der Zielstrahl auf der Grundlage der Benutzerinteraktion mit dem WebXR-Kontext durch Eingreifen mit dem Bildschirm auf irgendeine Weise bestimmt wird - höchstwahrscheinlich durch das Tippen oder Ziehen des Zielstrahls mit den Fingern.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der die Position und die Ausrichtung des Zielstrahls beschreibt, befindet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft. Der native Ursprung dieses Raums befindet sich an dem Punkt, von dem der Zielstrahl ausgeht (z. B. die vordere Spitze des Controllers oder das Ende eines Gewehrlaufs, wenn der Controller als Gewehr gerendert wird), und der Orientierungsvektor des Raums erstreckt sich entlang des Pfades des Zielstrahls.

Sie können den Zielstrahl, der dem `targetRaySpace` entspricht, einfach innerhalb des Zeichenhandlers für einen bestimmten Frame mithilfe der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) abrufen. Der zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) hat eine [`transform`](/de/docs/Web/API/XRPose/transform), die der Transformation des Zielstrahls entspricht. Für einen Eingabekontroller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie den Punkt, von dem der Zielstrahl ausgeht (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), in Bezug auf den Referenzraum des Betrachters (`viewerRefSpace`). Das ist alles, was Sie brauchen, um den Zielstrahl zu zeichnen, festzustellen, worauf gezeigt wird, die Treffererkennung durchzuführen usw.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, den Sie verwenden können, um Objekte so zu rendern, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Das Koordinatensystem für den Griffraum der linken Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_left.svg)
**Abbildung: Das Koordinatensystem für den Griffraum der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_right.svg)

Der native Ursprung des Griffraums, der sich im Zentrum der Faust des Spielers befindet, ist (0, 0, 0) im lokalen Koordinatensystem der Eingabequelle, während der durch `gripSpace` angegebene [`XRSpace`](/de/docs/Web/API/XRSpace) jederzeit verwendet werden kann, um Koordinaten oder Vektoren vom Raum der Eingabequelle in Weltkoordinaten (oder umgekehrt) umzuwandeln.

Das bedeutet, dass wenn Sie ein 3D-Modell verwenden, um Ihren Controller, die Hände Ihres Spielers oder etwas anderes, das die Position des Controllers im Raum repräsentiert, darzustellen, `gripSpace` als Transformationsmatrix verwendet werden kann, um das Modell des Objekts korrekt zu positionieren und auszurichten. Dazu ist es notwendig, die Transformation zu verwenden, um den Griffraum in das Weltkoordinatensystem zu konvertieren, das von WebGL zu Darstellungszwecken verwendet wird.

**Abbildung: Der Griffraum nach dem Weltkoordinatensystem abzubilden. Die Abstände _x_, _y_ und _z_ bilden zusammen die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen dem Griffraum und dem Weltraum zeigt](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung bei _G_ liegt, am Mittelpunkt des Griffs des Benutzers am Controller, der direkt vom Benutzer wegzeigt und parallel zur _z_-Achse ist. Relativ zum Ursprung des Weltraums _W_ befindet sich der Ursprung des Griffraums _x_ Einheiten nach rechts, _y_ Einheiten darüber und _z_ Einheiten weiter entfernt. Angesichts der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da sich der Griffraum entlang der _z_-Achse weiter entfernt befindet und somit in die negative Richtung geht.

Wenn der Controller stattdessen links von und näher beim Benutzer als der Weltraumursprung positioniert wäre (oder möglicherweise hinter dem Benutzer, wenn der Benutzer sich am Ursprung befindet, obwohl das eine unbequeme Weise ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_._der Wert von \_y_ wäre immer noch positiv, es sei denn, der Controller wird unter den Ursprung des Weltraums bewegt.

Dies wird im unten stehenden Diagramm gezeigt, in dem sich der Controller unterhalb und links vom Ursprung des Weltraums befindet, wobei der Controller auch näher zu uns bewegt wurde als der Ursprung. Infolgedessen sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Einen Griffraum zum Weltursprung abzubilden, wenn der Controller unter und links vom Weltursprung positioniert ist und näher zu uns als der Weltursprung ist.**
![Die Beziehung zwischen einem anderen Griffraum und dem Weltraum](gripspace-on-worldspace-diag.svg)

#### Gamepad-Aufzeichnung

Jede Eingabequelle hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, falls nicht `NULL`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen Bedienelemente und Widgets auf dem Controller beschreibt. Falls das Eingabegerät nur die primären Bewegungssensoren, eine Drucksteuerung und einen Knopf hat, kann es sein, dass es keinen `Gamepad`-Eintrag hat. Ist jedoch das `gamepad` vorhanden, können Sie es verwenden, um die auf dem Controller verfügbaren Tasten und Achsen zu identifizieren und abzufragen.

Während der `Gamepad`-Eintrag durch die [Gamepad API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird er nicht tatsächlich von der Gamepad API verwaltet und funktioniert nicht genau auf die gleiche Weise. Siehe [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) für detailliertere Informationen.

#### Profilzeichenfolgen

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen**-Zeichenfolgen haben, die im Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) gefunden werden, von denen jede eine bevorzugte visuelle Darstellung der Eingabequelle in der 3D-Welt beschreibt sowie, wie die Eingabequelle funktioniert. Die Verwendung dieser Profile wird kurz unter [Eingabeprofile](#eingabeprofile) beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** bereitstellen, die in Kombination mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät stammt, aber so dargestellt wird, als wäre sie es. Zum Beispiel, wenn ein XR-Gerät einen Modus bietet, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle für die Dauer der Aktion zu repräsentieren.

Dies ist notwendig aufgrund der Trennung, die zwischen Standard-Eingabegeräten und XR-Eingabequellen beibehalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) darzustellen.

## Verwaltung von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie in der Lage sein, Informationen über jede Quelle zu erhalten, einschließlich ihrer Position und Ausrichtung, ihres Zielstrahls (falls auf Ihre Bedürfnisse zutreffend) und Details, die Ihnen helfen können zu entscheiden, wie die Eingabequelle visuell dargestellt werden soll, wenn überhaupt. Sie müssen auch in der Lage sein zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; zum Beispiel, wenn der Benutzer zwei Controller hat, welcher wird zur Manipulation von UI-Elementen verfolgt, oder beide?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen aufzulisten, Profilinformationen über jede Eingabequelle zu untersuchen und zu entscheiden, wie jeder Eingabekontroller verwendet werden soll.

### Auflisten von Eingabequellen

Die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt dargestellte WebXR-Sitzung hat eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, die eine _Live_-Liste der aktuell mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Da die Inhalte der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die jede Eingabequelle in der Liste darstellen, schreibgeschützt sind, werden Änderungen an diesen Eingaben durch das WebXR-System vorgenommen, indem der Eintrag der Quelle gelöscht und ein neues hinzugefügt wird, um es zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, wann immer sich eine oder mehrere der Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder entfernt wird.

Wenn Sie beispielsweise mitverfolgen müssen, welcher Controller in jeder Hand des Spielers gehalten wird, könnten Sie so etwas tun:

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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Erstellungs-Callback der Sitzung die Ausführung zum ersten Mal abschließt, sodass Sie es verwenden können, um die Eingabequellenliste zu holen, sobald sie zum Startzeitpunkt verfügbar ist. Das Ereignis wird als ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) geliefert, das drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die Eingabequellen angeben, die neu zum XR-System hinzugefügt wurden.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die alle Eingabequellen angeben, die aus dem XR-System entfernt wurden.

### Das Profil der Eingabe identifizieren

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine Live-Liste der WebXR-Eingabeprofile enthält, die auf die Eingabequelle zutreffen, in der Reihenfolge von der spezifischsten zur allgemeinsten.

Um mehr als eine grundlegende Identifizierung von Funktionen über das Scannen von Profilen hinaus zu erreichen, müssen Sie möglicherweise die JSON-Profiler-Datenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) importieren.

Siehe [Eingabeprofile](#eingabeprofile) für spezifischere Details zur Arbeit mit Eingabeprofilen.

### Den primären Controller auswählen

Um Probleme zu vermeiden, die durch mehrere Controller entstehen könnten, die gleichzeitig unbeabsichtigt die Benutzeroberfläche manipulieren, muss Ihre App möglicherweise einen "primären" Controller haben. Dieser Controller würde nicht nur die Verantwortung übernehmen, durch die Benutzeroberfläche Ihrer App zu klicken, sondern auch als "Haupthand" betrachtet werden, während andere Controller dann als Nebenhand oder zusätzliche Controller gelten würden.

> [!NOTE]
> Das bedeutet nicht, dass Ihre App _entscheiden muss_, welcher Controller primär ist. Aber wenn doch, können diese Strategien hilfreich sein.

Es gibt einige Möglichkeiten, wie Sie einen primären Controller auswählen können. Wir schauen uns drei davon an.

#### Händigkeit

Die direkteste Möglichkeit, zu entscheiden, welcher Controller primär ist, besteht darin, eine vom Benutzer definierbare "Händigkeit"-Einstellung zu haben, die der Benutzer festlegt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann jedes Eingabequelle betrachten und eine finden, die dieser entspricht, falls vorhanden, und auf einen anderen Controller zurückgreifen, falls kein Controller in dieser Hand ist.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieses Code-Snippet geht davon aus, dass die erste Eingabequelle die primäre ist, sucht dann aber nach einer Eingabequelle, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der im `user`-Objekt angegebenen übereinstimmt. Wenn es übereinstimmt, wird diese Eingabequelle als primär ausgewählt.

#### Erstbenutzte

Eine andere Option ist es, die erste Eingabequelle zu verwenden, auf die der Benutzer die Auswahlaktion auslöst. Der unten stehende Code geht davon aus, dass die erste Eingabequelle die primäre ist, und erstellt dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis, der die Quelle des Ereignisses als primäre Eingabequelle speichert. Der `select`-Ereignishandler wird dann durch die Funktion `realSelectHandler()` ersetzt, die für die Verarbeitung aller zukünftigen `select`-Ereignisse verwendet wird. Dann wird das Ereignis an `realSelectHandler()` weitergegeben, um das Ereignis wie gewohnt zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Der Effekt ist, dass wir die primäre Eingabequelle festlegen, sobald ein `select`-Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es stammt, das Ereignis von dort wie gewohnt behandelt wird und in Zukunft die Ereignisse ohne weitere Sorgen darüber, welche Eingabequelle primär ist, bearbeitet werden.

#### Vom Benutzer ausgewählt

Die komplexeste Methode zur Bestimmung einer primären Eingabequelle ist hochflexibel, kann jedoch eine Menge Arbeit erfordern. In diesem Szenario durchlaufen Sie die Liste der Eingabequellen und deren Profile, um Informationen über jede Eingabequelle zu sammeln, dann stellen Sie eine Benutzeroberfläche bereit, die jede Eingabe beschreibt, sodass der Benutzer die Verwendung jeder einzelnen zuweisen kann. Dies gut zu machen, könnte eine große Aufgabe sein, könnte aber für komplexe Apps nützlich sein, die möglicherweise mehrere Benutzereingaben erfordern.

Viel von den Informationen, die Sie benötigen, um dies zu implementieren, finden Sie im Abschnitt über [Eingabeprofile](#eingabeprofile) unten. Details liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einem Satz von Informationen entsprechen, welche diese Eingabequelle beschreiben und wie sie verwendet werden kann. Diese Namen sind in der Eigenschaft [`profiles`](/de/docs/Web/API/XRInputSource/profiles) der Eingabequelle zu finden, und das offizielle Verzeichnis dieser Profilzeichenfolgen wird in der [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub gepflegt.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profiler-Daten zu finden, indem das Feld `profileId` aufgesucht wird, das den Wert `generic-trigger-squeeze-touchpad` hat.

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

Dies ist ein Controller, der unabhängig davon, in welcher Hand er ist (und auch wenn er derzeit nicht mit einer bestimmten Hand in Verbindung gebracht wird), drei Komponenten hat: einen Standardauslöser, eine Standarddruckeingabe und ein Touchpad. Laut der Eigenschaft `selectComponentId` ist die `xr-standard-trigger`-Komponente diejenige, die zur Ausführung einer primären Aktion verwendet wird.

Zusätzlich mappt das `gamepad`-Objekt diese Eingaben auf das Gamepad, indem es den Auslöser, die Druckeingabe und das Touchpad-Tippen auf die Tastenliste der Eingabequelle zuweist und die "Achsen" des Touchpads auf die Achsenliste.

Die Liste in `profiles` ist in umgekehrter Spezifität angeordnet; das heißt, die genaueste Beschreibung zuerst, und die am wenigsten spezifische Beschreibung zuletzt. Der erste Eintrag in der Liste weist typischerweise auf das genaue Modell des Controllers hin oder auf ein Modell, mit dem der Controller kompatibel ist.

Zum Beispiel ist der Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was auf ein generisches Gerät mit einem Trigger, einer Drucksteuerung und einem Thumbstick hinweist. Während der Oculus Touch Controller tatsächlich ein Daumenpad anstelle eines Daumensticks hat, ist die Gesamtbeschreibung "ausreichend nah", sodass die Details innerhalb des Profils mit dem Namen den Controller nützlich interpretieren lassen.

## Aktionen

In WebXR ist eine **Aktion** eine spezielle Art von Ereignis, das ausgelöst wird, wenn der Benutzer eine spezielle Taste am Controller betätigt. Alle zusätzlichen Tasten (sowie Elemente wie Achsensteuerungen - Joysticks zum Beispiel - und dergleichen) werden ausschließlich über die [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft von [`XRInputSource`](/de/docs/Web/API/XRInputSource) verwaltet. Siehe [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) weiter unten für weitere Details zur Unterstützung dieser zusätzlichen Bedienelemente und Tasten.

Die **Primäre Aktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Haupteingabeelement betätigt, das einen speziellen Zweck erfüllt. Derzeit gibt es zwei Arten von primären Aktionen:

- Die **Primäre Aktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Select"-Eingabe auf seinem Controller betätigt. Diese Eingabe kann ein Knopf, ein Auslöser, ein Trackpad-Tippen oder -Klicken, ein Sprachbefehl oder eine spezielle Handbewegung oder möglicherweise eine andere Form der Eingabe sein. Zum Beispiel könnte bei einem Handcontroller mit einem Trackpad, das angeklickt werden kann, einem Auslösersteuerung sowie Rück- und "Menü"-Tasten das Klicken des Trackpads die primäre Aktion sein. Einige Controller könnten eine mit "Select" gekennzeichnete Taste haben. Bei einem Gamepad-Style-Controller ist die "A"-Taste wahrscheinlich die primäre Aktion.
- Die **Primäre Druckaktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer den Controller zusammendrückt. Dieses "Drücken" kann entweder durch einen Drucksensor im Controller erkannt werden oder durch einen Auslöser, eine Handbewegung oder einen anderen Mechanismus simuliert werden. Wenn zum Beispiel der Eingabekontroller ein haptischer Handschuh ist, könnte er melden, dass die primäre Druckaktion stattgefunden hat, wenn der Benutzer seine Faust schließt und ballt.

Während eine gegebene Eingabequelle nur eine primäre Aktion und eine primäre Druckaktion haben kann, können mehr als ein Bedienungselement auf dem Eingabegerät konfiguriert sein, um jede primäre Aktion auszulösen. Der Benutzer könnte seinen Controller beispielsweise so eingestellt haben, dass sowohl das Tippen als auch das Klicken auf das Trackpad eine primäre Aktion auslösen.

Diese Arten von Eingabeaktionen werden im Folgenden genauer beschrieben.

### Primäre Aktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (manchmal auch als "Select-Aktion" abgekürzt) ist eine plattformspezifische Aktion, die durch die Manipulation durch den Benutzer in der Reihenfolge die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) liefert. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Falls eine Eingabequelle keine primäre Aktion hat, wird die Eingabequelle als **zusätzliche Eingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum richtet und dann eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das angibt, dass der Benutzer die Aktivität ausgeführt hat, die die primäre Aktion startet. Dies kann eine Geste, das Drücken einer Taste oder dergleichen sein.
2. Wenn die primäre Aktion erfolgreich endet (zum Beispiel, weil der Benutzer die Taste oder den Abzug loslässt), anstatt aufgrund eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nachdem das `select`-Ereignis gesendet wurde _oder_ wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt wird oder anderweitig nicht verfügbar wird, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Im Allgemeinen signalisieren Ihnen die `selectstart`- und `selectend`-Ereignisse, wann Sie dem Benutzer etwas anzeigen sollten, das darauf hinweist, dass die primäre Aktion im Gange ist. Dies könnte sein, einen Controller mit der aktivierten Taste in einer neuen Farbe zu zeichnen oder das Zielobjekt zu zeigen, das gegriffen und herumbewegt wird, beginnend, wenn `selectstart` eintrifft und stoppend, wenn `selectend` empfangen wird.

Das `select`-Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen möchte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Ziehen des Abzugs einer Waffe in einem Spiel oder so aufwendig wie das Ablegen eines Objekts, das sie in der Welt herumgezogen haben und es wieder in einem neuen Ort abzusetzen.

Wenn Ihre primäre Aktion eine einfache Triggeraktion ist und Sie nicht animieren müssen, während der Trigger betätigt ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das `select`-Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen senden diese Ereignisse sehr schnell, eines nach dem anderen. Die Zeit, die zwischen diesen Ereignissen vergeht, hängt sowohl von der Hardwareapparatur ab, die die Aktion auslöst, als auch von den Softwaretreibern, die die Hardwareaktion interpretieren und in eine Reihe von Ereignissen umwandeln. Gehen Sie nicht davon aus, dass diese Ereignisse mit einer bestimmten Zeitspanne dazwischen auftreten.

Zum Beispiel, wenn die Hardware, die das Auftreten der primären Aktion verursacht, ein Knopf ist, würden Sie `selectstart` erhalten, wenn der Benutzer den Knopf drückt, dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt zahlreiche Beispiele, die zeigen, wie `select`-Ereignisse im gesamten Dokument behandelt werden, wie im Abschnitt "Zielausrichtung und Zielstrahl" (#zielausrichtung_und_der_zielstrahl) anderweitig in diesem Artikel.

### Primäre Druckaktion

Eine **primäre Druckaktion** ist eine plattformspezifische Aktion, die die [`XRSession`](/de/docs/Web/API/XRSession)-Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) sendet. Dies wird typischerweise ausgelöst, indem der Benutzer den Controller zusammendrückt, eine Handgeste macht, die das Greifen von etwas imiti

ert, oder (betätigen) einen Abzug verwendet.

Die Ereignisse sind identisch mit denen, die von der primären Aktion gesendet werden, abgesehen vom Namen jedes Ereignisses:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet und gibt an, dass der Benutzer eine Druckaktion gestartet hat.
2. Wenn die primäre Druckaktion erfolgreich endet, wird eine [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis an die Sitzung gesendet.
3. Dann wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, um anzuzeigen, dass die Druckaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Druckaktion erfolgreich war oder nicht.

Zwei häufige Verwendungen der primären Druckaktion bestehen darin, Objekte in der 3D-Welt zu greifen und/oder aufzuheben und einen Abzug zu drücken, um in einem Spiel oder einer Simulation zu feuern.

#### Beispiel

Dieser Beispielcode zeigt eine Reihe von Druckereignishandlern, die diese Ereignisse implementieren, um Objekte aus der Szene aufzuheben und zu halten. Der Code setzt die Existenz eines `avatar`-Objekts voraus, das den Charakter repräsentiert, wie es in mehreren anderen Beispielen auf dieser Seite verwendet wird. Ebenso die Funktionen `pickUpObject()` und `dropObject()`, die das Übertragen eines Objekts von der Welt in eine bestimmte Hand und das Loslassen eines Objekts aus der Hand und das Platzieren in der Welt behandeln.

##### Aufnehmen eines Objekts: Behandlung von squeezestart-Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird durch das Abrufen dieser Pose und Transformation wie gewohnt behandelt und das `handedness` der Eingabequelle in die lokale Konstante `hand` gebracht. Wir werden das verwenden, um die Hand mit dem Objekt zu verbinden, das in dieser Hand gehalten wird.

Der Code identifiziert dann das angezielte Objekt, dann, wenn ein Objekt entlang des Zielstrahls gefunden wird, nimmt er es auf. Das Aufnehmen eines Objekts beinhaltet zunächst das Überprüfen, ob die Hand, die durch das `avatar.heldObject[hand]` repräsentiert wird, bereits ein Objekt hält. Wenn ein Objekt bereits in dieser Hand gehalten wird, wird es durch Aufrufen der Funktion `dropObject()` abgelegt.

Dann wird `pickUpObject()` aufgerufen, wobei das angezielte Objekt als das Objekt, das aus der Szene entfernt und in die angegebene Hand gelegt werden soll, übergeben wird. `pickUpObject()` zeichnet auch die ursprüngliche Position des Objekts auf, damit es an diesen Ort zurückgebracht werden kann, wenn der Druck abgebrochen oder abgebrochen wird.

##### Ablegen des Objekts: Der squeeze-Ereignishandler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Druckaktion beendet, indem er seinen Griff löst. In diesem Beispiel interpretieren wir das als das Loslassen des aktuell gehaltenen Objekts, das in der Szene an der anvisierten Position abgelegt wird.

Dieser Code setzt die Existenz zusätzlicher Funktionen `findTargetPosition()` voraus, die den Zielstrahl verfolgt, bis er auf etwas stößt, dann die Koordinaten zurückgibt, an denen der Zusammenstoß stattfand, und `putObject()`, die das in der angegebenen Hand gehaltene Objekt an der gegebenen Position platziert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies mit dem Sammeln von Informationen über das Ereignis, einschließlich der Hand, die ein Objekt fallen lässt, und der Transformation des Zielstrahls. Die Zielstrahltransformation wird an die vermutete Funktion `findTargetPosition()` übergeben, um die Koordinaten zu erhalten, an denen das abgelegte Objekt positioniert werden soll.

Mit der Position in der Hand können wir dann das Objekt durch Aufrufen der `putObject()`-Funktion ablegen, die als Eingaben die `hand` und die Zielposition nimmt. Diese Funktion hat die Aufgabe, das Objekt aus der angegebenen Hand zu entfernen und es zurück in die Szene zu setzen, wobei seine Position so festgelegt wird, dass es auf den Koordinaten platziert wird, die von `findTargetPosition()` zurückgegeben werden.

##### Abbrechen des Drucks im squeezeend-Handler

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird nach dem vollständigen Drücken empfangen, auch wenn es fehlschlägt. Wir behandeln es, indem wir das derzeit gehaltene Objekt an seinen ursprünglichen Ort zurückbringen.

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

Hier wird die `returnObject()`-Funktion vorausgesetzt, dass sie weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht werden soll, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

Hier wird die `returnObject()`-Funktion vorausgesetzt, dass sie weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht werden soll, wie es von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, findet ungefähr die folgende Abfolge von Dingen statt:

1. Der Benutzer drückt die Maustaste, während sich die {{HTMLElement("canvas")}} im WebXR-Szenenbereich befindet.
2. Das Mausereignis wird von dem Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. Der [`targetRayMode`](/de/docs/Web/XMLDocument/targetRayMode) wird auf `screen` gesetzt, und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird temporär in der Liste hinzugefügt, die von der [`XRSession`](/de/docs/Web/API/XRSession)-Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse, die der Aktion entsprechen.
5. Eine primäre Aktion wird generiert und der App in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisses gesendet, dessen Quelle auf die neue `XRInputSource` eingestellt ist. Oder, wenn die Maus als Neben- oder Sekundärcontroller verwendet wird, wird stattdessen eine zusätzliche Aktion gesendet.
6. Wenn der Benutzer die Maustaste löst, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, dann empfängt das DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung empfängt dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, was den Abschluss der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle, und alle relevanten [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse werden gesendet.

Daher ist die transiente Eingabequelle tatsächlich transient - sie existiert nur für die Dauer der Eingabeverarbeitung und wird daher in der Eingabequellenliste nicht aufgeführt.

## Ausrichtung und Zielausrichtung

**Ausrichtung** ist die Richtung, in die der Betrachter schaut. Diese wird nicht durch eine Eingabequelle bereitgestellt. Stattdessen wird sie mithilfe des [`XRPose`](/de/docs/Web/API/XRPose)-Objekts ermittelt, das aus der [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)-Methode des aktuellen Animationsframes gewonnen wird. Der Rotationsanteil der Transformation der Betrachterpose ist die Ausrichtungsrichtung des Betrachters.

Sie können mehr darüber erfahren, wie Sie diese Betrachterpose verwenden, um die Ausrichtungsrichtung im Artikel [Ansichtspunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) zu bestimmen.

**Zielausrichtung** ist der Akt des Benutzers, in eine bestimmte Richtung mit einer Eingabequelle zu zeigen. Die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und wahrscheinlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), die verwendet werden kann, um die Orientierung des Zielstrahls relativ zur Ausrichtung des Betrachters zu bestimmen.

Dies kann oder muss nicht tatsächlich darauf hinweisen, dass auf ein bestimmtes Objekt innerhalb der 3D-Welt gezeigt wird; Sie müssen dies selbst durch Treffererkennung bestimmen - das heißt, überprüfen, ob der Zielstrahl mit einem Objekt in Ihrer Szene kollidiert.

### Zielausrichtung und der Zielstrahl

Der Zielstrahl, ein Strahl, dessen Ursprung am Ursprung des Zielstrahlraums liegt und in die Richtung zeigt, in die der Benutzer das Steuergerät zeigt, wird festgelegt mittels eines [`XRSpace`](/de/docs/Web/API/XRSpace), dessen Ursprung am Ausgangspunkt des Zielstrahls liegt (typischerweise dem äußeren Ende des Controllers oder seiner Darstellung in der 3D-Welt) und dessen Orientierung mit -Z dorthin zeigt.

Dieser Raum befindet sich in der Eigenschaft [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle. Er kann verwendet werden, um die Richtung, in die der Controller zeigt, zu bestimmen sowie den Ursprung und die Orientierung des Zielstrahls zu ermitteln. Dies kann erreicht werden, indem ein Beispiel wie das folgende verwendet wird, welches einen [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignishandler implementiert, der diese Informationen benötigt. Wie üblich geht dieser Code davon aus, dass [glMatrix](https://glmatrix.net/) verwendet wird, um die Matrizen- und Vektorrechnung durchzuführen:

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

Dies liefert den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im {{Glossary("quaternion", "Quaternion")}} `targetDirection`.

Dies beginnt mit dem Abrufen des Zielstrahlraums in die lokale Konstante `targetRaySpace`. Diese wird dann verwendet, wenn die Methode [`XRFrame`](/de/docs/Web/API/XRFrame) [`getPose()`](/de/docs/Web/API/XRFrame/getPose) aufgerufen wird, um ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zu erstellen, das die Position und Orientierung des Zielstrahls im Referenzraum des Betrachters, `viewerRefSpace`, darstellt. Ist dieser `null`, kehrt der Ereignishandler zurück, ohne etwas Weiteres zu tun.

Die Transformation des Zielstrahls wird von der [`transform`](/de/docs/Web/API/XRPose/transform) Eigenschaft der Pose abgerufen und im lokalen `targetRayTransform` gespeichert. Diese wird dann (in diesem Fall durch eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl kollidiert. Wenn der Zielstrahl mit einem Objekt in der Szene kollidiert, können wir tun, was wir brauchen.

Wenn Sie die tatsächliche Position des Ursprungs des Zielstrahls sowie seine Richtung benötigt, können Sie dies folgendermaßen ausführen:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt angezielt ist, verfolgen Sie den Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Prozess wird als **Treffererkennung** oder **Kollisionsdetektion** bezeichnet. Der Ansatz, den Sie zur Treffererkennung anwenden, hängt stark von den spezifischen Bedürfnissen Ihrer App ab. Die erste Frage ist: Erkennen Sie Kollisionen mit virtuellen Objekten oder Gelände, realen Objekten oder Gelände oder beidem?

In jedem Fall, um das anvisierte Objekt zu identifizieren, müssen Sie bestimmen, ob der durch die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) festgelegte Strahl mit Objekten in der Szene kollidiert, egal ob sie virtuell oder real sind.

Weitere Informationen finden Sie unter [Zielausrichtung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting).

### Präsentieren von Hand-Objekten

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft einer Eingabequelle identifiziert einen [`XRSpace`](/de/docs/Web/API/XRSpace), der die Herkunft und Orientierung beschreibt, die bei der Darstellung eines Objekts verwendet werden soll, sodass es so aussieht, als ob es in derselben Hand wie die Eingabequelle gehalten wird. Dieser Raum soll verwendet werden, um ein Modell des handgehaltenen WebXR-Eingabegeräts, das durch das [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt wird, zu zeichnen, kann aber ebenso gut verwendet werden, um jedes Objekt zu zeichnen, wie einen Ball, ein Werkzeug oder eine Waffe. Wir haben den [Griffraum](#griffraum) oben behandelt, aber lassen Sie uns sehen, wie er verwendet werden kann, um Objekte zu zeichnen, die die Hand repräsentieren oder in der Hand.

Da sich der Ursprung des Griffraums im Zentrum des Griffes der Hand befindet, können Sie ihn als Ausgangspunkt zum Rendern Ihres Objekts verwenden. Wenden Sie alle erforderlichen Transformationsverschiebungen an, um den Ursprung zum Startpunkt zum Zeichnen Ihres Objekts zu verschieben, während Sie alle benötigten Rotationen anwenden, um Ihr Modell korrekt mit der Orientierung des Griffraums abzustimmen.

## Erweiterte Controller mit dem Gamepad-Objekt

Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, falls nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugang zu gamepad-ähnlichen Tasten, Achsensteuerungen (wie Joysticks oder Daumenpads) usw. bietet. Dies kann die gleichen Tasten umfassen, die die Standardaktionen des [`XRInputSource`](/de/docs/Web/API/XRInputSource) auslösen, kann jedoch zusätzliche Tasten und Steuerungen enthalten.

> [!NOTE]
> Obwohl `Gamepad` durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ist, wird sie nicht von der Gamepad API verwaltet, daher dürfen Sie keine Gamepad-API-Methoden damit verwenden. Der Objekttyp wird als Bequemlichkeit wiederverwendet.

Ist der Wert von `gamepad` `null`, definiert die Eingabequelle keine Steuerungen mit dem `Gamepad`-Eintrag, entweder weil sie es nicht unterstützt oder weil es keine zusätzlichen Steuerungen darauf hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um Zugang zu speziellen Tasten, Touchpads usw. zu erhalten, sondern bietet auch eine Möglichkeit, direkter auf die Steuerungen zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Druckeingaben dienen, da diese in der Liste seiner [`buttons`](/de/docs/Web/API/Gamepad/buttons) enthalten sind.

Da die Verwendung der `Gamepad`-Schnittstelle eine Bequemlichkeit und nicht eine echte Anwendung der Gamepad-API ist, gibt es mehrere Unterschiede zwischen ihrer Verwendung mit WebXR und ihrer Verwendung in Gamepad-API-Anwendungen. Der bemerkenswerteste - aber nicht der einzige - Unterschied ist, dass WebXR das `xr-standard` Gamepad-Mapping hinzufügt. Siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft für zusätzliche Unterschiede. Dieses Gamepad-Mapping definiert, wie die Steuerungen auf einem typischen Einhand-VR-Controller zu Gamepad-Steuerungen zugeordnet werden.

## Eingaben von Nicht-WebXR-Quellen einbeziehen

Manchmal müssen Sie eine Möglichkeit bieten, dem Benutzer die Eingabe von Controllern, die außerhalb von WebXR liegen, zu ermöglichen. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch Nicht-XR-Gamepad-Geräte, Netzwerk-Eingaben oder andere Datenquellen verwenden, um Benutzersteuerungen zu simulieren. Obwohl WebXR keine Unterstützung für die direkte Schnittstelle dieser Eingabegeräte mit der XR-Szene bietet, können Sie die Eingabedaten selbst sammeln und anwenden.

Angenommen, Eingaben werden verwendet, um einen Avatar in der Simulation zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben verwendet, um den Avatar in den folgenden Weisen zu beeinflussen, unter Verwendung von Daten, die vom Nicht-XR-Eingabegerät gesammelt wurden:

- Position
  - : Die Position des Avatars wird durch Anwenden einer {{Glossary("delta", "Delta")}} auf die vorher bekannte Position geändert, dann wird der Bezugspunkt des Avatars durch einen neuen ersetzt, dessen Transform die neue Position widerspiegelt.
- Orientierung
  - : Die Orientierung oder Blickrichtung des Avatars wird durch Anwenden einer Delta auf seine Rotation um die drei Achsen geändert, seine Vektororientierung aktualisiert, dann sein Bezugsraum neu berechnet.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie einen Gegenstand oder eine Waffe zu verwenden, zu springen oder eine andere Aktivität, die nicht mit grundlegender Bewegung und Rotation zusammenhängt.

Einige Eingaben werden stattdessen verwendet, um die Anwendung zu steuern, anstatt den Avatar. Beispielsweise könnte ein Knopf ein Optionsmenü öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menü offen ist, könnten Eingaben, die sonst den Avatar steuern würden, stattdessen zur Steuerung der Menüoberfläche verwendet werden.

### Verwendung von Tastatur- und Mausereignissen

Das Erfassen von Eingaben von der Tastatur und Maus erfolgt wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie zur Behandlung der gewünschten Eingaben benötigen. Was Sie mit diesen Eingaben tun, ist interessant.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden, um Informationen über den Avatar und seine Weltanschauung zu verfolgen. Wir möchten, dass das Abspielen der <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten nutzen kann, um vorwärts, links, rückwärts und rechts zu bewegen. Da wir die Position des Avatars basierend auf der Tastatureingabe und der Maussteuerung verwalten und gleichzeitig alles berücksichtigen, was die XR-Hardware tun könnte, müssen wir diese Informationen separat verwalten und als Transformation anwenden, bevor wir den Avatar (oder die Welt aus der Sicht des Avatars) rendern.

Dazu fügen wir dem Avatar-Objekt eine `posDelta`-Eigenschaft vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) hinzu, die die zum Justieren der Position des Avatars (des Ursprungs des Bezugssystems der Betrachterpose) um den Bewegungs- und Rotationsversatz von der Tastatur und Maus anzeigt.

Der zugehörige Code zum Erfassen der Tastaturbewegungen könnte in etwa so aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie einige Kenntnisse der Physik anwenden, um die Beschleunigung über die Zeit basierend darauf zu ändern, wie lange die Taste gedrückt wird und andere Faktoren berücksichtigen.

### Anwenden von Eingaben auf die Szene

Nun, da wir die Deltas haben, die angewendet werden müssen, um die Position und Orientierung zu aktualisieren - in unserem Beispiel in den `posDelta` und `orientDelta` Eigenschaften unseres `avatar`-Objekts - können wir einen Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits in einem Zeitplan rendern, können wir diesen Code hinzufügen, um diese Änderungen dort anzuwenden, zusammen mit der Vorbereitung und Zeichnung der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die gezeigte `drawFrame()`-Funktion ist der Callback, der aufgerufen wird, wenn es an der Zeit ist, den Frame zu zeichnen, wie es durch den Aufruf der [`XRSession`](/de/docs/Web/API/XRSession) Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) festgelegt wird. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir in Kürze definieren werden; sie nutzt die Informationen im `avatar`-Objekt, um den Bezugspunkt des Avatars zu aktualisieren.

Anschließend verlaufen die Dinge wie gewohnt weiter, wobei die Pose des Betrachters aus dem aktualisierten Bezugspunkt geholt, der nächste Frame-Callback über `requestAnimationFrame()` angefordert wird und dann fortgefahren wird, WebGL einzurichten und die Szene zu zeichnen. Der Zeichnung und weitere verwandte Code finden sich im Beispiel [Bewegung, Ausrichtung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die Methode `applyExternalInputs()` basiert auf dem `avatar`-Objekt, um dessen `referenceSpace`-Eigenschaft mit einem neuen Bezug auf ein neuen Bezugspunkt zu ersetzen, der die aktualisierten Deltas enthält.

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

- [Zielausrichtung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Bezugsspänne in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Kamera-Simulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
