---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Ein vollständiges WebXR-Erlebnis beschränkt sich nicht nur darauf, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität durch Hinzufügen oder Ändern der Umgebung zu erweitern. Um ein erfüllendes und ansprechendes Erlebnis zu schaffen, muss der Benutzer damit interagieren können. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden sehen wir uns an, wie Sie die Eingabegeräteverwaltungsfunktionen von WebXR nutzen können, um zu bestimmen, welche Eingabequellen verfügbar sind, und wie Sie diese Quellen dann auf Eingaben überwachen können, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu steuern.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zielauswahl und Aktionen. Zielauswahl ist die Spezifikation eines Punkts im Raum durch die Eingabe des Benutzers. Dies kann beinhalten, dass der Benutzer auf einen Punkt auf dem Bildschirm tippt, seine Augen verfolgt oder einen Joystick oder einen bewegungserkennenden Controller verwendet, um einen Cursor zu bewegen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Button, als auch Quetschaktionen, wie das Drücken eines Auslösers oder das Festziehen des Griffs beim Tragen von haptischen Handschuhen.

Durch die Kombination dieser beiden Eingabetypen mit der Änderung der Betrachtungsposition und/oder -ausrichtung über das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung erstellen.

### Typen von Eingabegeräten

WebXR unterstützt eine Vielzahl unterschiedlicher Gerätetypen, um Zielauswahl- und Aktions-Eingaben zu verarbeiten. Diese Geräte umfassen, sind aber nicht beschränkt auf:

- Bildschirmtippen (insbesondere, aber nicht nur auf Telefonen oder Tablets) kann verwendet werden, um gleichzeitig sowohl Zielauswahl als auch Auswahlaktionen durchzuführen.
- Bewegungs-sensing Controller, die Beschleunigungsmesser, Magnetometer und andere Sensoren für die Bewegungserkennung und Zielauswahl verwenden und zusätzlich verschiedene Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren usw. umfassen können, um zusätzliche Eingabequellen für sowohl Zielauswahl als auch Auswahlaktionen bereitzustellen.
- Drückbare Auslöser oder Handschuhgriff-Pads, um Quetschaktionen bereitzustellen.
- Sprachbefehle mit Spracherkennung.
- Räumlich verfolgte artikulierte Hände, wie z.B. [verkabelte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), die sowohl Zielauswahl- als auch Quetschaktionen bereitstellen können, sowie Auswahlaktionen, wenn sie mit Tasten oder anderen Quelle für Auswahlaktionen ausgestattet sind.
- Geräte mit Einzelknopf.
- Blickverfolgung (Verfolgung der Augenbewegungen zur Auswahl von Zielen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein {{domxref("XRInputSource")}}-Objekt repräsentiert, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen für jede Eingabequelle umfassen, in welcher Hand sie gehalten wird (falls zutreffend), welche Zielauswahl-Methode sie verwendet, {{domxref("XRSpace")}}s, die verwendet werden können, um den Zielstrahl zu zeichnen und das anvisierte Objekt oder den Ort zu finden, sowie Objekte in den Händen des Benutzers zu zeichnen, und Profilstrings, die die bevorzugte Darstellungsmethode des Controllers im Sichtbereich des Benutzers sowie die Funktionsweise der Eingabe spezifizieren.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zielauswahl
  - : Überwachung von Richtungssteuerungen (entweder ein bewegungssensitiver Zeiger oder ein Joystick- oder Trackpad beispielsweise), um in Richtung eines Ziels zu zielen, obwohl das Zielauswahlverfahren von Ihnen selbst implementiert werden muss. Weitere Informationen finden Sie unter [Ausrichtung und Zielauswahl](#ausrichtung_und_zielauswahl).
- Auswahl
  - : Verwenden des Haupt-"Auswahl"-Knopfes oder einer anderen Eingabe auf dem Controller, um die gewählte Richtung (oder das Objekt, auf das sie zeigt) auszuwählen, oder um eine Aktion in Gang zu setzen. Einzelheiten zur primären Aktion finden Sie unter [Primäre Aktion](#primäre_aktion).
- Quetschen
  - : Das Zusammendrücken des Controllers oder eines Mechanismus auf dem Controller, um eine sekundäre Aktion auszuführen. Der Abschnitt [Primäre Quetschaktionen](#primäre_quetschaktion) beschreibt dies genauer.

Alle zusätzlichen Fähigkeiten eines WebXR-Controllers können über das {{domxref("XRInputSource.gamepad", "gamepad")}}-Objekt der Eingabequelle aufgerufen werden. Dieses Objekt bietet Zugriff auf alle Tasten, Achsen, Trackpads usw., die Teil des Controllers sein können. Siehe [Erweiterte Controller unter Verwendung des Gamepad-Objekts](#erweiterte_controller_unter_verwendung_des_gamepad-objekts), um zu erfahren, wie Sie diese Controller verwenden können.

### Instanzeigenschaften von Eingabequellen

Jede individuelle `XRInputSource` hat eine Reihe von Eigenschaften, die die verfügbaren Achsen und Tasten der Eingabe, die Hand, in der der Benutzer sie hält, und die Verwendung der Eingabequelle zur Bearbeitung der Zielauswahl im 3D-Raum beschreiben.

#### Händigkeit

**Händigkeit**, angezeigt durch die Eigenschaft {{domxref("XRInputSource.handedness", "handedness")}} von `XRInputSource`, ist ein String, der angibt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht von Hand gehalten wird, oder wenn es unbekannt ist, in welcher Hand der Controller sich befindet.

Händigkeit kann für verschiedene Zwecke genutzt werden, einschließlich der Auswahl eines geeigneten Meshs zur Darstellung des Controllers in der Ansicht und um sicherzustellen, dass er in der richtigen Hand dargestellt wird, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App das Konzept der „Haupt- und Nebenhand“ verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel könnte der Controller der Haupthand die Waffe des Spielers sein, während der Controller der Nebenhand möglicherweise die Positionierung eines Schildes steuert.

#### Zielstrahl-Modus

Der Zielstrahl-Modus ist ein String, der sich in der Eigenschaft {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} von `XRInputSource` befindet. Er beschreibt die Technik, die zur Bestimmung des Zielstrahls verwendet wird und wie dieser dem Benutzer visuell dargestellt werden soll.

Wenn der Zielstrahl-Modus `gaze` ist, befindet sich der Ursprung des Strahls beim Betrachter und zielt in die Richtung, in die der Benutzer blickt. Diese Gaze-Eingabemethode ist ziemlich einfach und erfordert keine speziellen Steuerungen, da sie auf der Blickrichtung basiert, die vom Headset oder einem anderen Gerät gemeldet wird, das die Blickrichtung des Betrachters bestimmt. Der Zielstrahl sollte von einem Punkt zwischen den Augen in eine Richtung senkrecht zum Gesicht des Betrachters ausgehen.

Flexibler ist der `tracked-pointer`-Modus, bei dem der Ursprung des Strahls am Ursprung eines Hand-Controllers oder eines Handverfolgungssystems liegt und in die Richtung zeigt, in die der Controller zeigt. Der Strahl erstreckt sich in eine Richtung, die durch die verwendete Plattform und den Controller definiert ist, falls diese definiert sind; andernfalls erstreckt sich der Strahl in die Richtung, in die der Benutzer mit seinem ausgestreckten Zeigefinger zeigt.

Der dritte und letzte Zielstrahl-Modus ist am häufigsten auf mobilen Geräten wie Smartphones und Tablets zu finden. Der `screen`-Modus zeigt an, dass der Zielstrahl anhand der Interaktion des Benutzers mit dem WebXR-Kontext bestimmt wird, indem er auf irgendeiner Weise mit dem Bildschirm interagiert - höchstwahrscheinlich durch Tippen des Betrachters auf den Bildschirm oder Ziehen des Zielstrahls mit den Fingern.

#### Zielstrahl-Raum

Der {{domxref("XRSpace")}}, der verwendet wird, um die Position und Orientierung des Zielstrahls zu beschreiben, befindet sich in der Eigenschaft {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}}. Der native Ursprung dieses Raums liegt an dem Punkt, von dem der Zielstrahl ausgeht (zum Beispiel der vordere Punkt des Controllers oder das Ende eines Gewehrlaufrs, wenn der Controller als Gewehr gerendert wird), und der Orientierungsvektor des Raums erstreckt sich entlang des Pfades des Zielstrahls.

Sie können den Zielstrahl, der dem `targetRaySpace` entspricht, leicht innerhalb des Zeichnungs-Handlers für einen gegebenen Frame mithilfe der Methode {{domxref("XRFrame")}}'s {{domxref("XRFrame.getPose", "getPose()")}} erhalten. Die zurückgegebene {{domxref("XRPose")}}'s {{domxref("XRPose.transform", "transform")}} ist die Transformation, die dem Zielstrahl entspricht. Somit gilt für einen Eingabe-Controller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie nun den Punkt, von dem der Zielstrahl emittiert wird (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), angegeben im Referenzraum des Betrachters (`viewerRefSpace`). Das ist alles, was Sie benötigen, um den Zielstrahl zu zeichnen, zu bestimmen, worauf gezeigt wird, Hit-Tests durchzuführen, und so weiter.

#### Griff-Raum

Die Eigenschaft {{domxref("XRInputSource.gripSpace", "gripSpace")}} der Eingabequelle ist ein `XRSpace`, den Sie verwenden können, um Objekte so zu rendern, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Das Koordinatensystem für den Griff-Raum der linken Hand.**
![Ein Diagramm zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_left.svg)
**Abbildung: Das Koordinatensystem für den Griff-Raum der rechten Hand.**
![Ein Diagramm zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt angibt.](dark_right.svg)

Der native Ursprung des Griff-Raums, der sich etwa in der Mitte der Faust des Spielers befindet, ist (0, 0, 0) im lokalen Koordinatensystem der Eingabequelle, während der {{domxref("XRSpace")}}, der durch `gripSpace` angegeben wird, jederzeit verwendet werden kann, um Koordinaten oder Vektoren vom Raum der Eingabequelle in Weltkoordinaten zu konvertieren (oder umgekehrt).

Das bedeutet, dass, wenn Sie ein 3D-Modell verwenden, um Ihren Controller darzustellen, die Hände des Avatars Ihres Spielers oder etwas anderes Repräsentatives für die Position des Controllers im Raum, die `gripSpace` als Transformationsmatrix verwendet werden kann, um das Modell korrekt zu positionieren und zu orientieren, damit es gerendert werden kann. Dazu ist es notwendig, die Transformation zu verwenden, um den Griff-Raum in das Koordinatensystem der Welt zu konvertieren, das von WebGL für Rendering-Zwecke verwendet wird.

**Abbildung: Mapping des Griffraums auf das Weltkoordinatensystem. Die Abstände _x_, _y_ und _z_ bilden zusammen die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm zeigt die Beziehung zwischen dem Griffraum und dem Weltkoordinatensystem.](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung sich bei _G_ befindet, im Mittelpunkt des Griffs des Benutzers am Controller, der sich direkt von uns weg zeigt, parallel zur _z_-Achse. Relativ zum Ursprung der Weltkoordinaten, _W_, befindet sich der Ursprung des Griffraums _x_ Einheiten nach rechts, _y_ Einheiten oben und _z_ Einheiten weiter entfernt. Aufgrund der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da der Griffraum entlang der _z_ Achse weiter entfernt ist und sich somit in der negativen Richtung befindet.

Wenn der Controller stattdessen links von und näher am Benutzer als der Ursprung des Weltkoordinatensystems positioniert wäre (oder möglicherweise hinter dem Benutzer, wenn sich der Benutzer am Ursprung befindet, obwohl dies eine unbequeme Art ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre immer noch positiv, es sei denn, der Controller würde unter den Ursprung des Weltkoordinatensystems verschoben.

Dies wird im unten stehenden Diagramm gezeigt, in dem der Controller sich unten links vom Ursprung des Weltkoordinatensystems befindet, wobei der Controller auch der Kamera näher positioniert ist als der Ursprung. Daher sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung Mapping eines Griffraums auf den Weltursprung, wenn der Controller unterhalb und links des Weltursprungs positioniert und näher an uns als der Weltursprung ist.**
![Die Beziehung zwischen einem weiteren Griffraum und dem Weltkoordinatensystem.](gripspace-on-worldspace-diag.svg)

#### Gamepad-Eintrag

Jede Eingabequelle hat eine {{domxref("XRInputSource.gamepad", "gamepad")}}-Eigenschaft, die, falls sie nicht `NULL` ist, ein {{domxref("Gamepad")}}-Objekt ist, das die verschiedenen Steuerungen und Widgets beschreibt, die auf dem Controller verfügbar sind. Wenn das Eingabegerät nur die primären Bewegungs-Sensoren, eine Quetschsteuerung und einen Knopf hat, kann es sein, dass es keinen `Gamepad`-Eintrag hat. Wenn jedoch das `gamepad` vorhanden ist, können Sie es verwenden, um die auf dem Controller verfügbaren Tasten und Achsen zu identifizieren und abzufragen.

Obwohl der `Gamepad`-Eintrag durch die [Gamepad API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird sie nicht tatsächlich von der Gamepad API verwaltet und funktionert nicht genau gleich. Siehe [Erweiterte Controller unter Verwendung des Gamepad-Objekts](#erweiterte_controller_unter_verwendung_des_gamepad-objekts) für detailliertere Informationen.

#### Profil-Strings

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen**-Strings haben, die im Array {{domxref("XRInputSource.profiles", "profiles")}} gefunden werden, von denen jeder eine bevorzugte visuelle Darstellung der Eingabequelle innerhalb der 3D-Welt sowie die Funktionsweise der Eingabequelle beschreibt. Die Verwendung dieser Profile wird kurz im Abschnitt [Eingabeprofile](#eingabeprofile) unten beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erstellen, die zusammen mit einer Aktion verwendet werden, die eigentlich nicht von diesem Gerät stammt, aber so präsentiert wird, als ob sie es wäre. Zum Beispiel, wenn ein XR-Gerät einen Modus bietet, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues {{domxref("XRInputSource")}}-Objekt erstellt werden, um die simulierte Eingabequelle für die Dauer der Handhabung der Aktion darzustellen.

Dies ist notwendig aufgrund der Trennung, die zwischen den Standard-Eingabegeräten und XR-Eingabequellen aufrechterhalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) darzustellen.

## Verwaltung von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie in der Lage sein, Informationen über jede einzelne zu erhalten, einschließlich ihrer Position und Orientierung, ihres Zielstrahls (falls für Ihre Bedürfnisse zutreffend) und Details, die Ihnen dabei helfen können zu entscheiden, wie die Eingabequelle visuell dargestellt werden soll, falls überhaupt. Sie müssen auch in der Lage sein zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; zum Beispiel, wenn der Benutzer zwei Controller hat, welcher wird für die Manipulation von UI-Elementen verfolgt, oder beide?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen aufzulisten, Profilinformationen über jede Eingabequelle zu prüfen und zu entscheiden, wie jeder Eingabe-Controller verwendet werden soll.

### Auflisten von Eingabequellen

Die WebXR-Sitzung, die durch das {{domxref("XRSession")}}-Objekt repräsentiert wird, hat eine {{domxref("XRSession.inputSources", "inputSources")}}-Eigenschaft, die eine _lebendige_ Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Da der Inhalt der {{domxref("XRInputSource")}}-Objekte, die jede Eingabequelle in der Liste repräsentieren, schreibgeschützt ist, werden Änderungen an diesen Eingaben vom WebXR-System vorgenommen, indem der Eintrag der Quelle gelöscht und ein neuer hinzugefügt wird, um ihn zu ersetzen. Ein {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis wird an Ihre `XRSession` gesendet, wenn eine oder mehrere der Eingabequellen sich ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder aus ihr entfernt wird.

Zum Beispiel, wenn Sie auf dem Laufenden bleiben müssen, welcher Controller sich in jeder der Hände des Spielers befindet, könnten Sie so etwas tun:

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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Erstellungscallback der Sitzung erstmals ausgeführt wird, sodass Sie ihn verwenden können, um die Eingabequellenliste so früh wie möglich beim Start abzurufen. Das Ereignis wird als {{domxref("XRInputSourcesChangeEvent")}} geliefert, das drei interessante Eigenschaften umfasst:

- {{domxref("XRInputSourcesChangeEvent.session", "session")}}
  - : Die `XRSession`, für die sich die Eingabequellen geändert haben.
- {{domxref("XRInputSourcesChangeEvent.added", "added")}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}}-Objekten, die die Eingabequellen angeben, die neu dem XR-System hinzugefügt wurden.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}}
  - : Ein Array von null oder mehr {{domxref("XRInputSource")}}-Objekten, die alle Eingabequellen angeben, die aus dem XR-System entfernt wurden.

### Identifizieren des Profils der Eingabe

Jede Eingabequelle verfügt über eine {{domxref("XRInputSource.profiles", "profiles")}}-Eigenschaft, die eine lebende Liste der WebXR-Eingabeprofile enthält, die auf die Eingabequelle anzuwenden sind, und zwar in der Reihenfolge der Spezifität von der spezifischsten bis zur am wenigsten spezifischen.

Um etwas Bedeutungsvolles mit der Profilerstellung über die grundlegende Identifizierung von Funktionen hinaus zu tun, müssen Sie möglicherweise die JSON-Profil-Datenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry) importieren.

Siehe [Eingabeprofile](#eingabeprofile) für spezifischere Details zur Arbeit mit Eingabeprofilen.

### Auswahl des primären Controllers

Um zu vermeiden, dass Probleme durch mehrere Controller eingeführt werden, die unbeabsichtigt die Benutzeroberfläche manipulieren, muss Ihre App möglicherweise einen „primären“ Controller haben. Nicht nur würde dieser Controller dann die Verantwortung für das Durchklicken der Benutzeroberfläche Ihrer App übernehmen, sondern er würde auch als "Haupthand" betrachtet, während andere Controller dann Nebenhand- oder zusätzliche Controller wären.

> [!NOTE]
> Dies bedeutet nicht, dass Ihre App _unbedingt_ einen primären Controller festlegen muss. Wenn sie jedoch dies tut, können diese Strategien hilfreich sein.

Es gibt einige Möglichkeiten, wie Sie einen primären Controller auswählen können. Wir werden uns drei ansehen.

#### Händigkeit

Die direkteste Möglichkeit, zu entscheiden, welcher Controller primär ist, besteht darin, eine vom Benutzer definierbare „Händigkeit“-Präferenz zu haben, die der Benutzer einstellt, um anzugeben, welche seiner Hände dominant ist. Sie würden dann jede Eingabequelle betrachten und eine passende suchen, wenn verfügbar, und auf einen anderen Controller zurückgreifen, wenn sich kein Controller in dieser Hand befindet.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieses Code-Snippet geht davon aus, dass die erste Eingabequelle der primäre ist, sucht dann aber nach einer, deren {{domxref("XRInputSource.handedness", "handedness")}} mit der im `user`-Objekt angegebenen übereinstimmt. Wenn es übereinstimmt, wird diese Eingabequelle als primäre ausgewählt.

#### Erstverwendung

Eine weitere Option besteht darin, die erste Eingabe zu verwenden, auf der der Benutzer die Auswahlaktion auslöst. Der Code unten geht davon aus, dass die erste Eingabequelle die primäre ist, und richtet dann einen Handler für das {{domxref("XRSession.select_event", "select")}}-Ereignis ein, der die Eingabequelle des Ereignisses als primäre Eingabequelle aufzeichnet. Dann wird der `select`-Ereignishandler durch die Funktion `realSelectHandler()` ersetzt, die zukünftig für die Behandlung aller `select`-Ereignisse verwendet wird. Anschließend wird das Ereignis an `realSelectHandler()` weitergegeben, um es normal zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Der Effekt ist, dass wir die primäre Eingabequelle festlegen, sobald ein `select`-Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es stammt, es dann normal verarbeiten und von da an die Ereignisse wie gewohnt ohne weitere Bedenken in Bezug auf die primäre Eingabequelle behandeln.

#### Vom Benutzer ausgewählt

Die komplexeste Art, eine primäre Eingabequelle zu bestimmen, ist äußerst flexibel, kann jedoch eine erhebliche Arbeit erfordern, um sie zu implementieren. In diesem Szenario iterieren Sie über die Liste der Eingabequellen und ihrer Profile, um Informationen über jede Eingabequelle zu sammeln, und präsentieren dann eine Benutzeroberfläche, die jede Eingabe beschreibt, wodurch der Benutzer jeder von ihnen Verwendungen zuweisen kann. Dies wirklich gut zu machen könnte ein großer Job sein, aber es könnte nützlich für komplexe Apps sein, die möglicherweise mehrere Benutzer-Eingaben beinhalten.

Ein Großteil der Informationen, die Sie benötigen, um dies zu implementieren, finden Sie im Abschnitt über [Eingabeprofile](#eingabeprofile) weiter unten. Einzelheiten liegen jedoch außerhalb des Rahmens dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einer Menge von Informationen entsprechen, die diese Eingabequelle und ihre Nutzungsmöglichkeiten beschreiben. Diese Namen finden sich in der Eigenschaft {{domxref("XRInputSource.profiles", "profiles")}} der Eingabequelle, und das offizielle Verzeichnis dieser Profil-Strings wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub gepflegt.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profil-Daten zu lokalisieren, indem das `profileId`-Feld mit dem Wert `generic-trigger-squeeze-touchpad` lokalisiert wird.

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

Hierbei handelt es sich um einen Controller, der unabhängig davon, in welcher Hand er sich befindet (und auch wenn er derzeit keiner bestimmten Hand zugeordnet ist), drei Komponenten hat: einen Standard-Trigger, einen Standard-Quetscheingang und ein Touchpad. Laut der `selectComponentId`-Eigenschaft ist die `xr-standard-trigger`-Komponente diejenige, die für die Durchführung einer primären Aktion verwendet wird.

Zusätzlich ordnet das `gamepad`-Objekt diese Eingaben dem Gamepad zu, wobei der Trigger, das Quetschen und der Touchpad-Tap der Tastenliste der Eingabequelle und die "Achsen" des Touchpads der Achsenliste zugeordnet werden.

Die Liste in `profiles` ist in umgekehrter Reihenfolge der Spezifität; das heißt, die präziseste Beschreibung steht zuerst, und die am wenigsten präzise Beschreibung steht zuletzt. Der erste Eintrag in der Liste ist typischerweise indikativ für das genaue Modell des Controllers oder eines Modells, mit dem der Controller kompatibel ist.

Zum Beispiel ist Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was auf ein generisches Gerät mit einem Trigger, einer Quetschkontrolle und einem Daumenstick hinweist. Der Oculus Touch Controller hat tatsächlich ein Daumenpad statt eines Daumensticks, aber die allgemeine Beschreibung ist "nahe genug", dass die Details innerhalb des Profils, das mit dem Namen übereinstimmt, es dem Controller ermöglichen, sinnvoll interpretiert zu werden.

## Aktionen

In WebXR ist eine **Aktion** ein spezieller Typ von Ereignissen, die durch das Aktivieren eines speziellen Knopfes am Controller ausgelöst werden. Alle zusätzlichen Tasten (sowie Dinge wie Achskontroller - Joysticks beispielsweise - und dergleichen) werden ausschließlich über die {{domxref("XRInputSource")}}-Eigenschaft {{domxref("XRInputSource.gamepad", "gamepad")}} verwaltet. Weitere Details zur Unterstützung dieser zusätzlichen Steuerungen und Tasten finden Sie im Abschnitt [Erweiterte Controller unter Verwendung des Gamepad-Objekts](#erweiterte_controller_unter_verwendung_des_gamepad-objekts) weiter unten.

Die **primäre Aktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer das Hauptelement, das eine besondere Funktion erfüllt, aktiviert. Derzeit gibt es zwei Arten von primären Aktionen:

- Die **primäre Aktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Auswahl"-Eingabe auf seinem Controller aktiviert. Diese Eingabe kann ein Knopf, Auslöser, ein Klick oder ein Tap auf das Trackpad, ein Sprachbefehl, eine spezielle Handbewegung oder möglicherweise eine andere Art von Eingabe sein. Beispielsweise auf einem Hand-Controller mit einem klickbaren Trackpad, einer Trigger-Steuerung sowie Rückwärts- und „Menü“-Tasten wird wahrscheinlich das Klicken auf das Trackpad die primäre Aktion sein. Einige Controller könnten eine Taste namens "Select" haben. Auf einem Gamepad-ähnlichen Controller wird wahrscheinlich die Taste "A" die primäre Aktion sein.
- Die **primäre Quetschaktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer den Controller quetscht. Dieses „Quetschen“ kann durch einen Drucksensor im Controller erfasst werden oder durch Verwendung eines Triggers, Handgesten oder eines anderen Mechanismus simuliert werden. Wenn beispielsweise der Eingabe-Controller ein haptisches Handschuh ist, könnte er melden, dass die primäre Quetschaktion stattgefunden hat, wenn der Benutzer seine Faust ballt und quetscht.

Obwohl eine gegebene Eingabequelle nur eine primäre Aktion und eine primäre Quetschaktion haben kann, können möglicherweise mehr als eine Steuerung auf dem Eingabegerät eingerichtet sein, um jede primäre Aktion auszulösen. Der Benutzer könnte zum Beispiel seinen Controller so eingerichtet haben, dass sowohl das Tippen als auch das Klicken auf das Trackpad eine primäre Aktion erzeugen.

Diese Arten von Eingabeaktionen werden im Folgenden näher beschrieben.

### Primäre Aktion

Jede Eingabequelle sollte eine **primäre Aktion** definieren. Eine primäre Aktion (die manchmal zu „Auswahlaktion“ verkürzt wird) ist eine plattformspezifische Aktion, die auf die Manipulation durch den Benutzer dadurch reagiert, dass sie die Ereignisse {{domxref("XRSession.selectstart_event", "selectstart")}}, {{domxref("XRSession.select_event", "select")}} und {{domxref("XRSession.selectend_event", "selectend")}} liefert. Jedes dieser Ereignisse ist vom Typ {{domxref("XRInputSourceEvent")}}.

> [!NOTE]
> Wenn eine Eingabequelle keine primäre Aktion hat, wird die Eingabequelle als **Hilfseingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum zeigt und dann eine Auswahlaktion auslöst, werden die folgenden Ereignisse an die aktive {{domxref("XRSession")}} gesendet:

1. Ein {{domxref("XRSession.selectstart_event", "selectstart")}}-Ereignis, das angibt, dass der Benutzer die Aktivität, die die primäre Aktion beginnt, durchgeführt hat. Dies kann eine Geste, das Drücken eines Knopfes oder Ähnliches sein.
2. Wenn die primäre Aktion erfolgreich endet (z.B. dadurch, dass der Benutzer den Knopf oder Auslöser loslässt), anstatt aufgrund eines Fehlers, wird das {{domxref("XRSession.select_event", "select")}}-Ereignis gesendet.
3. Nach dem `select`-Ereignis oder, wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt oder anderweitig nicht verfügbar wird, wird das {{domxref("XRSession.selectend_event", "selectend")}}-Ereignis gesendet.

Im Allgemeinen sagen Ihnen die `selectstart`- und `selectend`-Ereignisse, wann Sie dem Benutzer möglicherweise etwas anzeigen wollen, das anzeigt, dass die primäre Aktion im Gange ist. Dies könnte das Zeichnen eines Controllers mit dem aktivierten Knopf in einer neuen Farbe oder das Zeigen des anvisierten Objekts sein, das gegriffen und herumbewegt wird, beginnend bei `selectstart` und aufhörend bei `selectend`.

Das `select`-Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Dies könnte so einfach sein wie das Werfen eines Objekts oder das Drücken des Auslösers einer Waffe in einem Spiel, oder so kompliziert wie das Platzieren eines Objekts, das sie in der Welt herumgezogen haben, um es in einem neuen Ort wieder abzulegen.

Wenn Ihre primäre Aktion eine einfache Auslöseaktion ist und Sie nichts animieren müssen, während der Auslöser engagiert ist, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und stattdessen auf das `select`-Ereignis agieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* Implementieren Sie das Event-Handling hier */
});
```

Einige Aktionen können diese Ereignisse sehr schnell senden, eines nach dem anderen. Die Zeit, die zwischen diesen Ereignissen verstreicht, hängt sowohl von den Hardwarevorrichtungen ab, die die Aktion verursachen, als auch von den Softwaretreibern, die die Hardwareaktion interpretieren und in eine Reihe von Ereignissen umwandeln. Nehmen Sie nicht an, dass diese Ereignisse innerhalb eines bestimmten Zeitraums geschehen werden.

Zum Beispiel, wenn die Hardware, die die primäre Aktion verursacht, ein Knopf ist, würden Sie `selectstart` erhalten, wenn der Benutzer den Knopf drückt, dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt eine Reihe von Beispielen, die zeigen, wie `select`-Ereignisse in der Dokumentation behandelt werden, wie im Abschnitt über [Zielauswahl und den Zielstrahl](#zielauswahl_und_der_zielstrahl) an anderer Stelle in diesem Artikel.

### Primäre Quetschaktion

Eine **primäre Quetschaktion** ist eine plattformspezifische Aktion, die die {{domxref("XRSession")}} {{domxref("XRSession.squeezestart_event", "squeezestart")}}, {{domxref("XRSession.squeezeend_event", "squeezeend")}} und {{domxref("XRSession.squeeze_event", "squeeze")}}-Ereignisse sendet. Diese wird in der Regel aktiviert, indem der Benutzer den Controller quetscht, eine Handbewegung macht, die so aussieht wie das Greifen eines Objekts, oder (quetschen) eines Triggers verwendet.

Die Ereignisfolge ist identisch mit der von der primären Aktion gesendeten, abgesehen vom Namen jedes Ereignisses:

1. Ein {{domxref("XRSession.squeezestart_event", "squeezestart")}}-Ereignis wird an die {{domxref("XRSession")}} gesendet, das anzeigt, dass der Benutzer eine Quetschaktion begonnen hat.
2. Wenn die primäre Quetschaktion erfolgreich endet, wird der Sitzung ein {{domxref("XRSession.squeeze_event", "squeeze")}}-Ereignis gesendet.
3. Dann wird ein {{domxref("XRSession.squeezeend_event", "squeezeend")}}-Ereignis gesendet, um anzugeben, dass die Quetschaktion nicht mehr fortgesetzt wird. Dies wird gesendet, unabhängig davon, ob die Quetschaktion erfolgreich war oder nicht.

Zwei häufige Verwendungen für die primäre Quetschaktion sind das Greifen und/oder Aufheben von Objekten in der 3D-Welt und das Drücken eines Auslösers, um eine Waffe in einem Spiel oder einer Simulation abzufeuern.

#### Beispiel

Dieser Beispielcode zeigt eine Reihe von Quetschereignis-Handlern, die diese Ereignisse implementieren, um das Aufheben und Halten von Objekten aus der Szene zu verwalten. Der Code nimmt das Vorhandensein eines `avatar`-Objekts an, das den Charakter darstellt, wie in mehreren anderen Beispielen auf dieser Seite verwendet wird, sowie die Funktionen `pickUpObject()` und `dropObject()`, die das Übertragen eines Objekts von der Welt auf eine bestimmte Hand und das Freigeben eines Objekts aus der Hand und das Zurücklegen in die Welt behandeln.

##### Aufheben eines Objekts: Handhabung von squeezestart-Ereignissen

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

Das {{domxref("XRSession.squeezestart_event", "squeezestart")}}-Ereignis wird behandelt, indem zunächst die Pose und Transformation wie üblich abgerufen und die {{domxref("XRInputSource.handedness", "handedness")}} der Eingabequelle in die lokale Konstante `hand` geschrieben wird. Wir werden dies verwenden, um die Hand der Map zwischen der Hand und dem in dieser Hand gehaltenen Objekt zu verbinden.

Der Code identifiziert dann das anvisierte Objekt. Wenn ein Objekt entlang des Zielstrahls gefunden wird, wird es aufgehoben. Das Aufheben eines Objekts beinhaltet zunächst das Überprüfen, ob die Hand, die durch `avatar.heldObject[hand]` repräsentiert wird, ein bereits gehaltenes Objekt fallen lässt. Wenn in dieser Hand bereits ein Objekt gehalten wird, wird es durch Aufrufen der Funktion `dropObject()` fallen gelassen.

Dann wird `pickUpObject()` aufgerufen, wobei das anvisierte Objekt als das anzuhebende Objekt aus der Szene und als das zu plazierende `hand` angegeben wird. `pickUpObject()` zeichnet auch die ursprüngliche Position des Objekts auf, damit es an diese Stelle zurückgebracht werden kann, wenn das Quetschen abgebrochen oder rückgängig gemacht wird.

##### Absetzen des Objekts: Der Quetsch-Ereignishandler

Das {{domxref("XRSession.squeeze_event", "squeeze")}}-Ereignis wird empfangen, wenn der Benutzer die Quetschaktion durch das Loslassen seines Griffs beendet. In diesem Beispiel interpretieren wir das als Freigeben des aktuell gehaltenen Objekts, indem es an der anvisierten Stelle in die Szene gelegt wird.

Dieser Code geht von der Existenz zusätzlicher Funktionen `findTargetPosition()` aus, die den Zielstrahl auf Kollision abklopfen und dann die Koordinaten angeben, an denen die Kollision aufgetreten ist, und `putObject()`, die das in der angegebenen `hand` gehaltene Objekt an der angegebenen Position platziert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies damit, die erforderlichen Informationen über das Ereignis zu sammeln, einschließlich der Hand, die ein Objekt ablegt, und der Transformation des Zielstrahls. Die Zielstrahl-Transformation wird an die angenommene `findTargetPosition()`-Funktion übergeben, um die Koordinaten zu erhalten, an denen das abgelegte Objekt positioniert werden soll.

Mit der Position in der Hand können wir dann das Objekt fallen lassen, indem wir die `putObject()`-Funktion aufrufen, die als Eingaben die `hand` und die Zielposition nimmt. Die Aufgabe dieser Funktion besteht darin, das Objekt von der angegebenen Hand zu entfernen und zurück in die Szene zu bringen, wobei seine Position so eingestellt wird, dass es auf den von `findTargetPosition()` zurückgegebenen Koordinaten platziert wird.

##### Stornieren des Quetschens im squeezeend-Handler

Das {{domxref("XRSession.squeezeend_event", "squeezeend")}}-Ereignis wird empfangen, nachdem das Quetschen abgeschlossen ist, auch wenn es fehlschlägt. Wir behandeln es, indem wir das aktuell gehaltene Objekt an die Stelle zurückbringen, an der es aufgenommen wurde.

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

Hier wird davon ausgegangen, dass die `returnObject()`-Funktion eine ist, die weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht wird, wie sie von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

Hier wird davon ausgegangen, dass die `returnObject()`-Funktion eine ist, die weiß, wie das in der angegebenen `hand` gehaltene Objekt an seine ursprüngliche Position zurückgebracht wird, wie sie von `pickUpObject()` im `squeezestart`-Ereignishandler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, findet ungefähr Folgendes statt:

1. Der Benutzer drückt den Mausknopf innerhalb des {{HTMLElement("canvas")}}, der die WebXR-Szene präsentiert.
2. Das Mausereignis wird vom Treiber des XR-Geräts erfasst.
3. Das Gerät erstellt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle darzustellen. Die {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} wird auf `screen` gesetzt, und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird temporär zu der Liste hinzugefügt, die von der {{domxref("XRSession")}}-Eigenschaft {{domxref("XRSession.inputSources", "inputSources")}} zurückgegeben wird.
4. Der Browser liefert entsprechend der Aktion {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignisse.
5. Eine primäre Aktion wird generiert und an die App in Form eines {{domxref("XRSession.selectstart_event", "selectstart")}}-Ereignisses gesendet, dessen Quelle auf die neue `XRInputSource` gesetzt ist. Oder, wenn die Maus als Neben- oder Sekundär-Controller verwendet wird, wird stattdessen eine Hilfsaktion gesendet.
6. Wenn der Benutzer den Mausknopf wieder loslässt, wird das {{domxref("XRSession.select_event", "select")}}-Ereignis an die `XRSession` gesendet, und das DOM erhält ein {{domxref("Element.click_event", "click")}}-Ereignis. Die Sitzung erhält dann das {{domxref("XRSession.selectend_event", "selectend")}}-Ereignis, das den Abschluss der Aktion angibt.
7. Wenn die Handlung abgeschlossen ist, löscht der Browser die transiente Eingabequelle, und alle entsprechenden {{domxref("Element/pointerup_event", "pointerup")}}-Ereignisse werden gesendet.

Die transiente Eingabequelle ist in der Tat transient – sie existiert nur für die Dauer der Eingabeverarbeitung und wird daher nicht in der Eingabequellenliste aufgeführt.

## Ausrichtung und Zielauswahl

**Ausrichtung** ist die Richtung, in die der Betrachter schaut. Dies wird nicht mit einer Eingabequelle bereitgestellt. Stattdessen wird es mit der {{domxref("XRPose")}} aus der {{domxref("XRFrame.getViewerPose()")}}-Methode des aktuellen Animationsrahmens erhalten. Die Rotationskomponente der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Sie können mehr darüber erfahren, wie Sie den Standpunkt des Betrachters verwenden, um die Blickrichtung zu bestimmen, im Artikel [Standpunkte und Betrachter: Kamerasimulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras).

**Zielauswahl** ist die Handlung des Benutzers, durch eine Eingabequelle in eine bestimmte Richtung zu zeigen. Die {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} der Eingabequelle ist ein {{domxref("XRSpace")}} (und wahrscheinlich ein {{domxref("XRReferenceSpace")}}), das verwendet werden kann, um die Ausrichtung des Zielstrahls relativ zur Blickrichtung des Betrachters zu bestimmen.

Dies kann oder muss nicht tatsächlich das Zeigen auf ein bestimmtes Objekt innerhalb der 3D-Welt beinhalten; dies müssen Sie selbst mithilfe von Hit-Tests ermitteln – d. h. prüfen, ob der Zielstrahl mit irgendeinem Objekt in Ihrer Szene kollidiert.

### Zielauswahl und der Zielstrahl

Der Zielstrahl ist ein Strahl, dessen Ursprung sich am Ursprung des Zielstrahlraums befindet und in die Richtung zeigt, in die der Benutzer das Controll-Gerät zeigt. Der Zielstrahl wird mit einem {{domxref("XRSpace")}} definiert, dessen Ursprung sich an der Quelle des Zielstrahls befindet (typischerweise das nach außen weisende Ende des Controllers oder dessen Darstellung in der 3D-Welt), und dessen Orientierung die -Z-Achse umfasst, die vom Controller in die gleiche Richtung wie das {{domxref("XRInputSource")}}'s {{domxref("XRInputSource.gripSpace", "gripSpace")}} zeigt.

Dieser Raum befindet sich in der Eigenschaft {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} der Eingabequelle. Er kann verwendet werden, um die Richtung zu bestimmen, in die der Controller zeigt, und um den Ursprung und die Ausrichtung des Zielstrahls zu bestimmen. Dies kann durch etwas wie das folgende Beispiel erreicht werden, das einen {{domxref("XRSession.select_event", "select")}}-Ereignishandler implementiert, der diese Informationen benötigt. Wie üblich geht dieser Code davon aus, dass [glMatrix](https://glmatrix.net/) verwendet wird, um die Matrix- und Vektormathematik auszuführen:

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
    /* Führen Sie Aktionen mit dem anvisierten Objekt durch */
  }
});
```

Dies erhält den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Ausrichtung des Strahls im {{Glossary("quaternion")}} `targetDirection`. Mit beiden können Sie bestimmen, auf welches Objekt gezielt wird, indem Sie den Zielstrahl verfolgen, bis er auf ein Objekt trifft.

Dies beginnt damit, den Raum des Zielstrahls in die lokale Konstante `targetRaySpace` zu bringen. Dies wird wiederum bei der Methode {{domxref("XRFrame.getPose", "getPose()")}} der {{domxref("XRFrame")}} verwendet, um ein {{domxref("XRPose")}}-Objekt zu erstellen, das die Position und Ausrichtung des Zielstrahls im Referenzraum des Betrachters `viewerRefSpace` darstellt. Wenn dies `Null` ist, gibt der Ereignis-Handler ohne Weiteres zurück.

Die Transformation des Zielstrahls wird aus der Eigenschaft {{domxref("XRPose.transform", "transform")}} der Pose abgerufen und im lokalen `targetRayTransform` gespeichert. Diese wird wiederum verwendet (in diesem Fall durch eine Funktion namens `findTargetObject()`) um das erste Objekt zu finden, mit dem der Strahl kollidiert. Wenn der Zielstrahl mit einem Objekt in der Szene kollidiert, können wir tun, was auch immer wir dafür benötigen.

Falls Sie die tatsächliche Position des Ursprungs des Zielstrahls und die Richtung des Strahls ausklammern müssen, können Sie dies wie folgt tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt anvisiert wird, verfolgen Sie den Zielstrahl, bis er auf ein Objekt trifft. Dieser Vorgang wird als **Hit-Testing** oder **Kollisionsprüfung** bezeichnet. Der Ansatz, den Sie für das Hit-Testing wählen, hängt stark von den spezifischen Bedürfnissen Ihrer App ab. Die erste Frage lautet: Erkennen Sie Kollisionen mit virtuellen Objekten oder Gelände, realen Objekten oder Gelände oder beidem?

In jedem Fall müssen Sie, um das anvisierte Objekt zu identifizieren, bestimmen, ob der durch die {{domxref("XRInputSource")}}-Eigenschaft {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} spezifizierte Strahl mit irgendeinem Objekt in der Szene, sei es virtuell oder real, kollidiert.

Siehe [Zielauswahl und Hit Detection](/de/docs/Web/API/WebXR_Device_API/Targeting) für einen detaillierteren Blick auf das, was darin verwickelt ist.

### Präsentation von handgehaltenen Objekten

Die {{domxref("XRInputSource.gripSpace", "gripSpace")}}-Eigenschaft einer Eingabequelle identifiziert einen {{domxref("XRSpace")}}, der den Ursprung und die Ausrichtung beschreibt, die beim Rendern eines Objekts verwendet werden sollen, sodass es so erscheint, als würde es in derselben Hand wie die Eingabequelle gehalten werden. Dieser Raum soll beim Zeichnen eines Modells des handgehaltenen WebXR-Eingabecontrollers verwendet werden, der durch das {{domxref("XRInputSource")}}-Objekt dargestellt wird, kann jedoch genauso verwendet werden, um ein beliebiges Objekt zu zeichnen, wie etwa einen Ball, ein Werkzeug oder eine Waffe. Wir haben den [Griff-Raum](#griff-raum) bereits behandelt, aber lassen Sie uns sehen, wie er verwendet werden kann, um Objekte zu zeichnen, die die Hand oder in der Hand repräsentieren.

Da der Ursprung des Griff-Raums sich in der Mitte des Griffs der Hand befindet, können Sie ihn als Ausgangspunkt für das Rendern Ihres Objekts verwenden. Wenden Sie alle erforderlichen Versetzungs-Transformationen an, um den Ursprung auf den Startpunkt für das Rendern Ihres Objekts zu verschieben, während Sie alle notwendigen Rotationen anwenden, um Ihr Modell korrekt auszurichten, sodass es mit der Orientierung des Griff-Raums übereinstimmt.

## Erweiterte Controller unter Verwendung des Gamepad-Objekts

Eine {{domxref("XRInputSource")}} hat eine {{domxref("XRInputSource.gamepad", "gamepad")}}-Eigenschaft, dessen Wert, sofern nicht `null`, ein {{domxref("Gamepad")}}-Objekt ist, das Zugriff auf Gamepad-ähnliche Tasten, Achsregler (wie Joysticks oder Daumenpads) und so weiter bietet. Dies kann dieselben Tasten umfassen, die die Standard-{{domxref("XRInputSource")}}-Aktionen auslösen, kann jedoch eine beliebige Anzahl zusätzlicher Tasten und Steuerungen umfassen.

> [!NOTE]
> Obwohl `Gamepad` durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert wird, wird es nicht von der Gamepad API verwaltet, daher sollte keine Verwendung von Gamepad API-Methoden mit ihm versucht werden. Der Objekttyp wird aus Bequemlichkeit wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerungen mit dem `Gamepad`-Eintrag, entweder weil sie es nicht unterstützt oder weil sie keine zusätzlichen Steuerungen darauf hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um auf Spezialtasten, Trackpads usw. zuzugreifen, sondern bietet auch eine Möglichkeit, direkter auf die Steuerungen zuzugreifen und diese zu überwachen, die als primäre Auswahl- und Quetscheingaben dienen, da diese ebenfalls in der {{domxref("Gamepad.buttons", "buttons")}}-Liste enthalten sind.

Da diese Nutzung der `Gamepad`-Schnittstelle ein Komfort ist, anstatt eine echte Anwendung der Gamepad API, gibt es mehrere Unterschiede zwischen ihrer Verwendung mit WebXR und ihrer Verwendung in Gamepad API-Anwendungen. Der auffälligste, aber nicht der einzige Unterschied, besteht darin, dass WebXR das `xr-standard` Gamepad-Mapping hinzufügt, siehe die {{domxref("XRInputSource.gamepad")}}-Eigenschaft für zusätzliche Unterschiede. Dieses Gamepad-Mapping definiert, wie die Steuerungen eines typischen einhändigen VR-Controllers auf Gamepad-Steuerungen abgebildet werden.

## Aufnahme von Eingaben von Nicht-WebXR-Quellen

Manchmal müssen Sie dem Benutzer die Möglichkeit geben, Eingabe über Controller bereitzustellen, die extern zu WebXR sind. Häufig sind diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch Nicht-XR-Gamepad-Geräte, Netzwerkeingaben oder andere Datenquellen verwenden, um Benutzersteuerungen zu simulieren. Während WebXR keine Unterstützung für die direkte Schnittstelle dieser Eingabegeräte mit der XR-Szene bietet, können Sie die Eingabedaten selbst sammeln und selbst anwenden.

Angenommen, die Eingaben werden verwendet, um einen Avatar innerhalb der Simulation zu steuern, was der häufigste Anwendungsfall ist, werden WebXR-Eingaben verwendet, um den Avatar wie folgt zu beeinflussen, unter Verwendung der von dem Nicht-XR-Eingabegerät gesammelten Daten:

- Position
  - : Die Position des Avatars wird geändert, indem ein {{Glossary("delta")}} auf die zuvor bekannte Position angewendet wird, dann wird der Referenzraum des Avatars durch einen neuen ersetzt, dessen Transformation die neue Position widerspiegelt.
- Orientierung
  - : Die Orientierung oder Blickrichtung des Avatars wird geändert, indem ein Delta auf seine Rotation um die drei Achsen angewendet wird, sein Orientierungsvektor aktualisiert wird und dann sein Referenzraum neu berechnet wird.
- Aktion
  - : Der Avatar führt eine Aktion aus, wie das Verwenden eines Objekts oder einer Waffe, Springen oder eine andere Aktivität, die nicht mit grundlegender Bewegung und Rotation zusammenhängt.

Einige Eingaben werden stattdessen zur Steuerung der Anwendung verwendet, anstatt des Avatars. Zum Beispiel könnte eine Taste ein Optionsmenü öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menü geöffnet ist, könnten Eingaben, die normalerweise den Avatar steuern würden, stattdessen verwendet werden, um die Benutzeroberfläche des Menüs zu steuern.

### Verwendung von Tastatur- und Mausereignissen

Das Erfassen von Eingaben von der Tastatur und der Maus erfolgt genauso wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie zur Verarbeitung der benötigten Eingaben benötigen. Es ist das, was Sie mit diesen Eingaben machen, das interessant ist.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden werden, um Informationen über den Avatar und seine Weltanschauung zu verfolgen. Wir möchten, dass der Spieler die <kbd>W</kbd>-, <kbd>A</kbd>-, <kbd>S</kbd>- und <kbd>D</kbd>-Tasten verwenden kann, um vorwärts, links, rückwärts und rechts zu gehen. Da wir die Position des Avatars verwalten, wie sie durch die Tastatur und die Maus definiert wird, zusätzlich zu allem, was die XR-Hardware möglicherweise tut, müssen wir diese Informationen separat verwalten und sie als Transformation vor dem Rendern des Avatars (oder der Welt aus der Sicht des Avatars) anwenden.

Dazu enthalten wir im `avatar`-Objekt eine `posDelta`-Eigenschaft vom Typ {{domxref("DOMPoint")}}, die die Versetzungen enthält, die auf alle drei Achsen angewendet werden müssen, um die Position des Avatars (des Ursprungs des Referenzraums der Betrachterpose) so anzupassen, dass Bewegungen und Rotationen von der Tastatur und der Maus berücksichtigt werden.

Der entsprechende Code für die Tastatureingaben könnte etwa so aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie einige Kenntnisse der Physik anwenden, um die Beschleunigung im Laufe der Zeit basierend darauf, wie lange die Taste gedrückt gehalten wird, und anderen Faktoren zu ändern.

### Anwendung von Eingaben auf die Szene

Jetzt, da wir die Deltas haben, die auf die Position und Orientierung angewendet werden müssen - in unserem Beispiel in den `posDelta`- und `orientDelta`-Eigenschaften unseres `avatar`-Objekts - können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits nach einem Zeitplan rendern, können wir den Code, um diese Änderungen anzuwenden, zusammen mit der Vorbereitung und Zeichnung der Szene hinzufügen.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* Zeichnen Sie hier den Frame */
}
```

Die hier gezeigte `drawFrame()`-Funktion ist der Rückruf, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie durch den Aufruf der Methode {{domxref("XRSession")}} {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} etabliert. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir in Kürze definieren werden; sie nimmt das `avatar`-Objekt und verwendet dessen Informationen, um den Referenzrahmen des Avatars zu aktualisieren.

Danach läuft alles wie gewohnt weiter, indem die Pose des Betrachters aus dem aktualisierten Referenzrahmen abgerufen wird, der nächste Frame-Callback durch `requestAnimationFrame()` angefordert wird und dann mit dem Einrichten von WebGL und dem Zeichnen der Szene fortgefahren wird. Der Zeichnungs- und andere verwandte Code finden sich im Beispiel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die `applyExternalInputs()`-Methode nimmt das `avatar`-Objekt und ersetzt dessen `referenceSpace`-Eigenschaft mit einem neuen Referenzraum, der die aktualisierten Deltas enthält.

```js
function applyExternalInputs(avatar) {
  if (!avatar.posDelta.x && !avatar.posDelta.y && !avatar.posDelta.z) {
    return; // Der Spieler hat sich nicht mit der Tastatur bewegt
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

- [Zielauswahl und Hit Detection](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Standpunkte und Betrachter: Kamerasimulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
