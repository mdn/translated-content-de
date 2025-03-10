---
title: Eingaben und Eingabequellen
slug: Web/API/WebXR_Device_API/Inputs
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}

Ein vollständiges WebXR-Erlebnis besteht nicht nur darin, dem Benutzer eine vollständig virtuelle Szene zu zeigen oder die Realität zu erweitern, indem die Welt um sie herum hinzugefügt oder verändert wird. Um ein erfüllendes und fesselndes Erlebnis zu schaffen, muss der Benutzer in der Lage sein, damit zu interagieren. Zu diesem Zweck bietet WebXR Unterstützung für eine Vielzahl von Eingabegeräten.

In diesem Leitfaden werden wir untersuchen, wie man die Eingabegeräteverwaltungsfunktionen von WebXR verwendet, um festzustellen, welche Eingabequellen verfügbar sind und wie man diese Quellen dann überwacht, um die Benutzerinteraktivität mit Ihrer virtuellen oder erweiterten Umgebung zu handhaben.

## Eingaben in WebXR

Grundsätzlich fallen Eingaben in WebXR in zwei grundlegende Kategorien: Zieldefinition und Aktionen. Zieldefinition ist die Spezifikation eines Punktes im Raum durch die Benutzereingabe. Dies kann beinhalten, dass der Benutzer auf eine Stelle auf dem Bildschirm tippt, seine Augen verfolgt oder einen Joystick oder einen Bewegungssensor-Controller verwendet, um einen Cursor zu bewegen.

Aktionen umfassen sowohl Auswahlaktionen, wie das Klicken auf einen Button, als auch Drückaktionen, wie das Betätigen eines Triggers oder das Festziehen des Griffs beim Tragen von haptischen Handschuhen.

Durch die Kombination dieser beiden Arten von Eingaben mit der Änderung der Betrachtungsposition und/oder -ausrichtung durch das Headset oder andere Mechanismen können Sie eine interaktive simulierte Umgebung schaffen.

### Arten von Eingabegeräten

WebXR unterstützt eine Vielzahl verschiedener Geräte, um Zieldefinitionen und Aktions-Eingaben zu handhaben. Diese Geräte umfassen, sind aber nicht beschränkt auf:

- Bildschirmberührungen (insbesondere, aber nicht ausschließlich auf Handys oder Tablets) können verwendet werden, um gleichzeitig sowohl Zieldefinitionen als auch Auswahlen durchzuführen.
- Bewegungssensor-Controller, die Beschleunigungssensoren, Magnetometer und andere Sensoren zur Bewegungserfassung und Zielbestimmung verwenden und zusätzlich eine beliebige Anzahl von Tasten, Joysticks, Daumenpads, Touchpads, Kraftsensoren usw. zur Verfügung stellen können, um zusätzliche Eingabequellen sowohl für die Zielbestimmung als auch für die Auswahl bereitzustellen.
- Drückbare Auslöser oder Griffpolster von Handschuhen zur Durchführung von Drückaktionen.
- Sprachbefehle mit Spracherkennung.
- Räumlich verfolgte artikulierte Hände, wie [vernetzte Handschuhe](https://en.wikipedia.org/wiki/Wired_glove), können sowohl Ziel- als auch Drückaktionen bereitstellen, ebenso wie eine Auswahl, wenn sie mit Tasten oder anderen Quellen für Auswahlaktionen ausgestattet sind.
- Ein-Knopf-Klickgeräte.
- Blickverfolgung (Verfolgen der Augenbewegungen zur Auswahl von Zielen).

### Eingabequellen

Jede Quelle von WebXR-Eingabedaten wird durch ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt dargestellt, das die Eingabequelle und ihren aktuellen Zustand beschreibt. Die Informationen jeder Eingabequelle schließen ein, in welcher Hand sie gehalten wird (falls zutreffend), welche Zielmethode sie verwendet, [`XRSpace`](/de/docs/Web/API/XRSpace)-Elemente, die verwendet werden können, um den Zielstrahl zu zeichnen und das Zielobjekt oder den Zielort zu finden, sowie, um Objekte in den Händen des Benutzers zu zeichnen, und Profil-Strings, die die bevorzugte Art und Weise spezifizieren, wie der Controller im Sichtbereich des Benutzers dargestellt wird und wie die Eingabe funktioniert.

Die grundlegenden Fähigkeiten einer Eingabequelle sind:

- Zieldefinition
  - : Überwachung von Richtungssteuerungen (entweder ein bewegungserkennender Zeiger oder ein Joystick oder Trackpad, zum Beispiel), um in eine Richtung zu zielen, möglicherweise auf ein Ziel, obwohl das Zielen Ihnen selbst überlassen bleibt. Weitere Informationen finden Sie unter [Blickrichtung und Zielsetzung](#blickrichtung_und_zielbestimmung).
- Auswahl
  - : Verwenden der Haupt-"Auswahl"-Taste oder einer anderen Eingabe auf dem Controller, um die angepeilte Richtung (oder das Objekt, auf das es zeigt) auszuwählen oder anderweitig eine Aktion durchzuführen. Details zur Hauptaktion finden Sie unter [Hauptaktion](#hauptaktion).
- Drücken
  - : Drücken des Controllers oder eines Mechanismus am Controller, um eine sekundäre Aktion auszulösen. Die Sektion [Primäre Drückaktion](#primäre_drückaktion) beschreibt dies ausführlicher.

Alle zusätzlichen Fähigkeiten, die ein WebXR-Controller möglicherweise hat, werden über das [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Objekt der Eingabequelle zugänglich gemacht. Dieses Objekt bietet Zugriff auf alle Tasten, Achsen, Trackpads und so weiter, die möglicherweise Teil des Controllers sind. Sehen Sie [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt), um zu erfahren, wie Sie diese Controller verwenden können.

### Instanzeigenschaften von Eingabequellen

Jede individuelle `XRInputSource` hat einen Satz von Eigenschaften, die die verfügbaren Achsen und Tasten der Eingabe sowie die Hand, in der der Benutzer sie hält, beschreiben und wie die Eingabequelle für die Zielbestimmung im 3D-Raum verwendet wird.

#### Händigkeit

**Händigkeit**, angezeigt durch die `XRInputSource`-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness), ist ein String, der angibt, in welcher Hand des Betrachters sich der Controller befindet: `left` oder `right`. Es kann auch auf `none` gesetzt werden, wenn der Controller nicht in der Hand gehalten wird oder wenn es unbekannt ist, in welcher Hand sich der Controller befindet.

Die Händigkeit kann für verschiedene Dinge verwendet werden, z. B. um ein geeignetes Mesh auszuwählen, das verwendet werden soll, um den Controller in der Ansicht zu repräsentieren, und um es in der richtigen Hand zu präsentieren, wenn Hände auf dem Display gezeichnet werden. Es kann auch nützlich sein, wenn Ihre App den Begriff "Haupthand" und "Zweithand" verwendet, um die Funktionalität eines Controllers zu bestimmen; in einem Spiel könnte beispielsweise der Haupthand-Controller die Waffe des Spielers sein, während der Zweithand-Controller zur Positionierung eines Schildes verwendet werden könnte.

#### Zielstrahl-Modus

Der Zielstrahl-Modus ist ein String, der sich in der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)-Eigenschaft befindet. Er beschreibt die Technik, die verwendet wird, um den Zielstrahl zu bestimmen und wie er dem Nutzer visuell gezeigt werden soll, falls dargestellt.

Wenn der Zielstrahl-Modus `gaze` ist, befindet sich der Ursprung des Strahls beim Betrachter und zeigt in die Richtung, in die der Benutzer schaut. Diese Blick-Eingabemethode ist relativ einfach und erfordert keine besonderen Steuerungen, da sie auf der Blickrichtung basiert, die vom Headset oder welchem Gerät auch immer verwendet wird, um festzustellen, in welche Richtung das Gesicht des Betrachters zeigt. Der Zielstrahl sollte von einem Punkt zwischen den Augen in einer Richtung senkrecht zum Gesicht des Betrachters ausgehen.

Flexibler ist der `tracked-pointer`-Modus, bei dem der Ursprung des Strahls bei einem Hand-Controller oder einem Handverfolgungssystem liegt und in die Richtung ausgeht, in die der Controller zeigt. Der Strahl geht in eine Richtung aus, die durch die verwendete Plattform und den Controller definiert ist, falls diese definiert ist; ansonsten zeigt der Strahl in die gleiche Richtung, in die der Benutzer mit seinem Zeigefinger zeigt, falls dieser ausgestreckt wäre.

Der dritte und letzte Zielstrahl-Modus ist am häufigsten auf mobilen Geräten wie Smartphones und Tablets zu finden. Der `screen`-Modus zeigt an, dass der Zielstrahl basierend auf der Interaktion des Benutzers mit dem WebXR-Kontext bestimmt wird, indem er in irgendeiner Weise mit dem Bildschirm interagiert – höchstwahrscheinlich durch das Antippen des Bildschirms oder das Ziehen des Zielstrahls mit den Fingern.

#### Zielstrahlraum

Der [`XRSpace`](/de/docs/Web/API/XRSpace), der verwendet wird, um die Position und Orientierung des Zielstrahls zu beschreiben, findet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft. Der native Ursprung dieses Raums befindet sich an dem Punkt, von dem der Zielstrahl ausgeht (zum Beispiel die Vorderkante des Controllers oder das Ende eines Gewehrlaufs, wenn der Controller als Gewehr gerendert wird), und der Orientierungsvektor des Raumes erstreckt sich entlang des Pfades des Zielstrahls.

Sie können den mit `targetRaySpace` korrespondierenden Zielstrahl leicht im Zeichnungs-Handler für einen gegebenen Frame mit der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) erhalten. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) enthält die [`transform`](/de/docs/Web/API/XRPose/transform) des Zielstrahls. Daher, für einen Eingabekontroller `primaryInput`:

```js
let targetRayPose = frame.getPose(primaryInput.targetRaySpace, viewerRefSpace);
let targetRayOrigin = targetRayPose.transform.position;
let targetRayVector = targetRayPose.transform.orientation;
```

Damit haben Sie jetzt den Punkt, von dem der Zielstrahl ausgesendet wird (`targetRayOrigin`), und die Richtung, in die er zeigt (`targetRayVector`), alles im Bezugssystem des Betrachters (`viewerRefSpace`). Das ist alles, was Sie benötigen, um den Zielstrahl zu zeichnen, festzustellen, auf was gezeigt wird, auf Kollisionen zu testen und so weiter.

#### Griffraum

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft der Eingabequelle ist ein `XRSpace`, das verwendet werden kann, um Objekte so zu rendern, dass sie in der Hand des Betrachters gehalten erscheinen.

**Abbildung: Koordinatensystem für den Griffbereich der linken Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](dark_left.svg)
**Abbildung: Koordinatensystem für den Griffbereich der rechten Hand.**
![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](dark_right.svg)

Der native Ursprung des Griffraums, der sich ungefähr im Zentrum der Faust des Spielers befindet, ist (0, 0, 0) im lokalen Koordinatensystem der Eingabequelle. Der durch `gripSpace` angegebene [`XRSpace`](/de/docs/Web/API/XRSpace) kann jederzeit verwendet werden, um Koordinaten oder Vektoren von dem Raum der Eingabequelle in Weltkoordinaten zu konvertieren (oder umgekehrt).

Das bedeutet, dass, wenn Sie ein 3D-Modell verwenden, um Ihren Controller darzustellen, die Hände des Spielers oder etwas anderes, das die Position des Controllers im Raum repräsentiert, der `gripSpace` als Transformationsmatrix verwendet werden kann, die das Modell des Objekts korrekt positioniert und orientiert. Dazu ist es notwendig, die Transformation zu verwenden, um den Griffraum in das Weltkoordinatensystem zu konvertieren, das von WebGL für Renderzwecke verwendet wird.

**Abbildung: Zuordnung des Griffraums zum Weltkoordinatensystem. Die Abstände _x_, _y_ und _z_ bilden zusammen die Weltkoordinaten (_x_, _y_, z), die dem Ursprung des Griffraums _G_ entsprechen.**
![Ein Diagramm, das die Beziehung zwischen dem Griffraum und dem Weltkoordinatensystem zeigt](gripspace-on-worldspace.svg)

Im obigen Diagramm sehen wir den Griffraum, dessen Ursprung bei _G_ liegt, am Mittelpunkt des Griffs des Benutzers auf den Controller, der direkt von dem Benutzer weg zeigt, parallel zur _z_-Achse. Relativ zum Ursprung des Weltkoordinatensystems, _W_, befindet sich der Ursprung des Griffraums _x_ Einheiten nach rechts, _y_ Einheiten darüber und _z_ Einheiten weiter weg. Angesichts der Richtung der Achsen können die Koordinaten des Griffraums in Weltkoordinaten als (_x_, _y_, -_z_) ausgedrückt werden; _z_ ist negativ, da der Griffraum weiter entlang der _z_-Achse entfernt ist und sich somit in der negativen Richtung befindet.

Wäre der Controller stattdessen links und näher am Benutzer positioniert als am Weltkoordinatenursprung (oder möglicherweise hinter dem Benutzer, wenn der Benutzer sich am Ursprung befindet, obwohl das eine unangenehme Art ist, einen Controller zu halten), hätten die Koordinaten einen negativen Wert für _x_, aber einen positiven Wert für _z_. Der Wert von _y_ wäre immer noch positiv, es sei denn, der Controller würde unter den Weltkoordinatenursprung bewegt.

Dies wird im nächsten Diagramm gezeigt, in dem der Controller sich unten und links vom Ursprung des Weltkoordinatensystems befindet, wobei der Controller auch näher bei uns ist als der Ursprung. Als Ergebnis sind die Werte von _x_ und _y_ beide negativ, während _z_ positiv ist.

**Abbildung: Zuordnung eines Griffraums zum Weltursprung, wenn der Controller unterhalb und links vom Weltursprung positioniert ist und näher bei uns als der Weltursprung ist.**
![Die Beziehung zwischen einem anderen Griffraum und dem Weltkoordinatensystem](gripspace-on-worldspace-diag.svg)

#### Gamepad-Aufzeichnung

Jede Eingabequelle hat eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, die, wenn nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das die verschiedenen Bedienelemente und Widgets beschreibt, die auf dem Controller verfügbar sind. Wenn das Eingabegerät nur die primären Bewegungssensoren, eine Drücksteuerung und eine Taste enthält, kann es sein, dass keine `Gamepad`-Aufzeichnung vorhanden ist. Wenn jedoch das `gamepad` vorhanden ist, können Sie es verwenden, um die verfügbaren Tasten und Achsen des Controllers zu identifizieren und abzufragen.

Während die `Gamepad`-Aufzeichnung durch die [Gamepad API](/de/docs/Web/API/Gamepad_API)-Spezifikation definiert ist, wird sie nicht tatsächlich von der Gamepad API verwaltet und funktioniert nicht genau auf die gleiche Weise. Siehe [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) für detailliertere Informationen.

#### Profil-Strings

Jede Eingabequelle kann null oder mehr **Eingabeprofilnamen**-Strings haben, die in dem Array [`profiles`](/de/docs/Web/API/XRInputSource/profiles) enthalten sind, von denen jeder eine bevorzugte visuelle Darstellung der Eingabequelle innerhalb der 3D-Welt beschreibt sowie wie die Eingabequelle funktioniert. Die Verwendung dieser Profile wird unten unter [Eingabeprofile](#eingabeprofile) kurz beschrieben.

### Transiente Eingabequellen

Einige Geräte können **transiente Eingabequellen** erzeugen, die zusammen mit einer Aktion verwendet werden, die nicht wirklich von diesem Gerät stammt, sondern so präsentiert wird, als ob sie es wäre. Wenn ein XR-Gerät beispielsweise einen Modus bereitstellt, in dem die Maus verwendet wird, um Ereignisse auf dem Gerät zu simulieren, könnte ein neues [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt erstellt werden, um die simulierte Eingabequelle für die Dauer der Aktionsverarbeitung darzustellen.

Das ist notwendig wegen der Trennung, die zwischen Standard-Eingabegeräten und XR-Eingabequellen aufrechterhalten wird. Eine künstliche Quelle wird verwendet, um die externe Quelle für die Dauer jeder [transienten Aktion](#transiente_aktionen) darzustellen.

## Verwaltung von Eingabequellen

Wenn mehrere Eingabequellen verfügbar sind, müssen Sie in der Lage sein, Informationen über jede zu erhalten, einschließlich ihrer Position und Ausrichtung, ihres Zielstrahls (falls zutreffend für Ihre Bedürfnisse) und Details, die Ihnen helfen können, zu entscheiden, wie Sie die Eingabequelle visuell präsentieren, wenn überhaupt. Sie müssen auch in der Lage sein, zu bestimmen, welche Eingabequelle für welche Aktivitäten verwendet werden soll; wenn der Benutzer beispielsweise zwei Controller hat, welcher wird zur Manipulation von UI-Elementen verfolgt oder beide?

Um Eingabequellen zu verwalten, müssen Sie in der Lage sein, Eingabequellen aufzulisten, Profilinformationen über jede Eingabequelle zu untersuchen und zu entscheiden, wie jeder Eingabekontroller verwendet werden soll.

### Auflistung von Eingabequellen

Die WebXR-Sitzung, die durch das [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert wird, hat eine [`inputSources`](/de/docs/Web/API/XRSession/inputSources)-Eigenschaft, die eine _lebendige_ Liste der derzeit mit dem XR-System verbundenen WebXR-Eingabegeräte ist.

```js
let inputSourceList = xrSession.inputSources;
```

Da der Inhalt der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die jede Eingabequelle in der Liste darstellen, schreibgeschützt ist, nimmt das WebXR-System Änderungen an diesen Eingaben vor, indem der Datensatz der Quelle gelöscht und ein neuer hinzugefügt wird, um ihn zu ersetzen. Ein [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis wird an Ihre `XRSession` gesendet, sobald sich eine oder mehrere der Eingabequellen ändern oder wenn eine Eingabequelle zur Liste hinzugefügt oder daraus entfernt wird.

Wenn Sie beispielsweise darüber informiert bleiben möchten, welcher Controller sich in jeder der Hände des Spielers befindet, könnten Sie so etwas tun:

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

Das `inputsourceschange`-Ereignis wird auch einmal ausgelöst, wenn der Sitzungs-Erzeugungsrückruf seine Ausführung das erste Mal abschließt, damit Sie es nutzen können, um die Eingabequellenliste sofort bei Startverfügbarkeit abzurufen. Das Ereignis wird als ein [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent) übermittelt, das drei interessante Eigenschaften enthält:

- [`session`](/de/docs/Web/API/XRInputSourcesChangeEvent/session)
  - : Die `XRSession`, für die die Eingabequellen geändert wurden.
- [`added`](/de/docs/Web/API/XRInputSourcesChangeEvent/added)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die die Eingabequellen anzeigen, die neu dem XR-System hinzugefügt wurden.
- [`removed`](/de/docs/Web/API/XRInputSourcesChangeEvent/removed)
  - : Ein Array von null oder mehr [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekten, die alle Eingabequellen anzeigen, die aus dem XR-System entfernt wurden.

### Identifizierung des Eingabeprofils

Jede Eingabequelle hat eine [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft, die eine lebendige Liste der WebXR-Eingabeprofile enthält, die für die Eingabequelle gelten, in der Reihenfolge der Spezifität von am spezifischsten bis am wenigsten spezifisch.

Um irgendetwas Bedeutungsvolles zu machen, das über die grundlegende Identifizierung von Funktionen hinausgeht, müssen Sie möglicherweise die JSON-Profil-Datenbank aus dem [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) importieren.

Siehe [Eingabeprofile](#eingabeprofile) für spezifischere Details zum Arbeiten mit Eingabeprofilen.

### Auswahl des primären Controllers

Um Probleme zu vermeiden, die durch mehrere Controller verursacht werden könnten, die zufällig gleichzeitig mit der Benutzeroberfläche interagieren, muss Ihre App möglicherweise einen "primären" Controller haben. Dieser Controller würde dann die Verantwortung übernehmen, die Benutzeroberfläche Ihrer App zu bedienen, und würde auch als "Haupt-Hand" angesehen, während andere Controller dann als Zweithand oder zusätzliche Controller betrachtet werden würden.

> [!NOTE]
> Das bedeutet nicht, dass Ihre App _einen_ primären Controller auswählen _muss_. Aber wenn sie es tut, könnten diese Strategien helfen.

Es gibt einige Möglichkeiten, wie Sie einen primären Controller auswählen können. Wir werden uns drei davon anschauen.

#### Händigkeit

Die direkteste Möglichkeit, einen primären Controller zu bestimmen, ist die Verwendung einer vom Benutzer definierbaren "Händigkeit"-Einstellung, die der Benutzer festlegt, um anzuzeigen, welche seiner Hände dominierend ist. Sie würden dann jede Eingabequelle untersuchen und eine wählen, die dazu passt, falls verfügbar, und auf einen anderen Controller zurückfallen, wenn sich kein Controller in dieser Hand befindet.

```js
const primaryInputSource =
  xrSession.inputSources.find((src) => src.handedness === user.handedness) ??
  xrSession.inputSources[0];
```

Dieses Codebeispiel geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, sucht jedoch nach einer, deren [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit der im `user`-Objekt angegebenen übereinstimmt. Wenn dies übereinstimmt, wird diese Eingabequelle als primäre ausgewählt.

#### Zuerst genutzt

Eine andere Option ist die Verwendung der ersten Eingabe, bei der der Benutzer die Auswahlaktion auslöst. Der folgende Code geht zunächst davon aus, dass die erste Eingabequelle die primäre ist, und erstellt dann einen Handler für das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis, das die Quelle des Ereignisses als primäre Eingabequelle aufzeichnet. Dann wird der `select`-Ereignis-Handler durch die Funktion `realSelectHandler()` ersetzt, die für die Handhabung aller zukünftigen `select`-Ereignisse verwendet wird. Danach geben wir das Ereignis an `realSelectHandler()` weiter, um das Ereignis wie gewohnt zu verarbeiten.

```js
let primaryInputSource = xrSession.inputSources[0];

xrSession.onselect = (event) => {
  primaryInputSource = event.inputSource;
  xrSession.onselect = realSelectHandler;
  return realSelectHandler(event);
};
```

Der Effekt ist, dass wir die primäre Eingabequelle zum ersten Mal festlegen, wenn ein `select`-Ereignis empfangen wird, unabhängig davon, von welcher Eingabequelle es kommt. Danach wird das Ereignis wie gewohnt verarbeitet, ohne weitere Sorgen darüber, welche Eingabequelle primär ist.

#### Benutzerselektiert

Die komplexeste Methode, um eine primäre Eingabequelle festzulegen, ist hoch flexibel, kann aber enormen Aufwand erfordern, um sie umzusetzen. In diesem Szenario iterieren Sie über die Liste der Eingabequellen und deren Profile, um Informationen über jede Eingabequelle zu sammeln, und präsentieren dann eine Benutzeroberfläche, die jede Eingabe beschreibt und es dem Benutzer ermöglicht, den Eingaben bestimmte Funktionen zuzuweisen. Dies gut zu machen, könnte eine große Aufgabe sein, aber es könnte für komplexe Apps nützlich sein, die mehrere Benutzer-Eingaben beinhalten.

Vieles der Informationen, die Sie zur Umsetzung dieser Funktion benötigen, finden Sie in der Sektion [Eingabeprofile](#eingabeprofile). Details liegen jedoch außerhalb des Umfangs dieses Artikels.

## Eingabeprofile

Wie oben erwähnt, hat jede Eingabequelle eine Liste von Eingabeprofilnamen, die einer Reihe von Informationen entsprechen, die diese Eingabequelle beschreiben und wie sie verwendet werden kann. Diese Namen finden sich in der [`profiles`](/de/docs/Web/API/XRInputSource/profiles)-Eigenschaft der Eingabequelle, und das offizielle Register dieser Profil-Strings wird im [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles) auf GitHub verwaltet.

Zum Beispiel kann der Profilname `generic-trigger-squeeze-touchpad` verwendet werden, um die folgenden JSON-Profil-Daten zu lokalisieren, indem das `profileId`-Feld aufgespürt wird, das den Wert `generic-trigger-squeeze-touchpad` hat.

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

Hierbei handelt es sich um einen Controller, der unabhängig davon, in welcher Hand er sich befindet (und auch wenn er derzeit keiner spezifischen Hand zugeordnet ist), drei Komponenten hat: einen Standard-Trigger, eine Standard-Drück-Eingabe und ein Touchpad. Entsprechend der `selectComponentId`-Eigenschaft wird das `xr-standard-trigger`-Element verwendet, um eine Hauptaktion durchzuführen.

Zusätzlich ordnet das `gamepad`-Objekt diese Eingaben dem Gamepad zu, indem es den Trigger, den Drück und den Touchpad-Tap der Tastenliste der Eingabequelle und die "Achsen" des Touchpads der Achsenliste zuweist.

Die Liste in `profiles` ist in umgekehrter Spezifitätsordnung; das heißt, die genaueste Beschreibung steht an erster Stelle, und die am wenigsten spezifische Beschreibung steht an letzter Stelle. Der erste Eintrag in der Liste gibt typischerweise das genaue Modell des Controllers oder ein Modell, mit dem der Controller kompatibel ist, an.

Ein Beispiel: Eintrag 0 in `profiles` für einen Oculus-Touch-Controller ist `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Trigger, einer Drücksteuerung und einem Thumbstick anzeigt. Während der Oculus-Touch-Controller tatsächlich ein Daumenpad anstelle eines Thumbsticks hat, ist die Beschreibung "nah genug", sodass die Details im Profil, das mit dem Namen übereinstimmt, den Controller nützlich interpretieren lassen.

## Aktionen

In WebXR ist eine **Aktion** ein spezieller Typ von Ereignis, das ausgelöst wird, indem der Benutzer einen speziellen Knopf auf dem Controller betätigt. Alle weiteren Knöpfe (sowie Achsensteuerungen—Joysticks zum Beispiel—und dergleichen) werden ausschließlich über die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) verwaltet. Siehe [Erweiterte Controller mit dem Gamepad-Objekt](#erweiterte_controller_mit_dem_gamepad-objekt) unten für weitere Details zur Unterstützung dieser zusätzlichen Steuerelemente und Knöpfe.

Die **Hauptaktion** ist die Aktion, die aktiviert wird, wenn der Benutzer das Hauptelement, das einem speziellen Zweck dient, betätigt. Derzeit gibt es zwei Arten von Hauptaktionen:

- Die **Hauptaktion** ist die Aktion, die aktiviert wird, wenn der Benutzer die primäre oder "Auswahl"-Eingabe auf seinem Controller aktiviert. Diese Eingabe kann ein Knopf, Trigger, Touchpad-Tap oder -Klick, ein Sprachbefehl oder eine spezielle Handbewegung sein, oder möglicherweise eine andere Form von Eingabe. Bei einem Handcontroller mit einem anklickbaren Touchpad, einem Trigger und Tasten für "Zurück" und "Menü" ist es wahrscheinlich, dass der Klick auf das Touchpad die Hauptaktion ist. Einige Controller haben möglicherweise einen Knopf, der mit "Auswählen" beschriftet ist. Bei einem Controller im Gamepad-Stil ist der "A"-Knopf wahrscheinlich die Hauptaktion.
- Die **primäre Drückaktion** ist die Aktion, die ausgelöst wird, wenn der Benutzer den Controller drückt. Dieses "Drücken" kann durch einen Drucksensor im Controller wörtlich erkannt werden, oder es kann durch einen Trigger, eine Handbewegung oder einen anderen Mechanismus simuliert werden. Beispielsweise könnte ein haptischer Handschuh melden, dass die primäre Drückaktion eingetreten ist, wenn der Benutzer seine Faust ballt und sie zusammendrückt.

Während eine gegebene Eingabequelle nur eine Hauptaktion und eine primäre Drückaktion haben kann, können mehr als ein Steuerungselement auf dem Eingabegerät konfiguriert werden, um jede Hauptaktion auszulösen. Beispielsweise könnte der Benutzer seinen Controller so eingerichtet haben, dass sowohl das Antippen als auch das Klicken des Touchpads eine Hauptaktion auslösen.

Diese Arten von Eingabeaktionen werden weiter unten näher beschrieben.

### Hauptaktion

Jede Eingabequelle sollte eine **Hauptaktion** definieren. Eine Hauptaktion (die manchmal auch als "Auswahlaktion" abgekürzt wird) ist eine plattformspezifische Aktion, die auf das Manipulieren durch den Benutzer reagiert, indem sie in Reihenfolge die Ereignisse [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`select`](/de/docs/Web/API/XRSession/select_event) und [`selectend`](/de/docs/Web/API/XRSession/selectend_event) liefert. Jedes dieser Ereignisse ist vom Typ [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent).

> [!NOTE]
> Wenn eine Eingabequelle keine Hauptaktion hat, wird die Eingabequelle als **Hilfseingabequelle** betrachtet.

Wenn der Benutzer ein Gerät entlang eines Zielstrahls in Ihrem 3D-Raum richtet und dann eine Auswahlaction auslöst, werden die folgenden Ereignisse an die aktive [`XRSession`](/de/docs/Web/API/XRSession) gesendet:

1. Ein [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das darauf hinweist, dass der Benutzer die Tätigkeit ausgeführt hat, die die Hauptaktion initiiert. Dies kann eine Geste, das Drücken eines Knopfes oder ähnliches sein.
2. Wenn die Hauptaktion erfolgreich endet (zum Beispiel, weil der Benutzer die Taste oder den Trigger loslässt), anstelle eines Fehlers, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis gesendet.
3. Nachdem das `select`-Ereignis gesendet wurde _oder_ wenn der Controller, auf dem die Aktion ausgeführt wird, getrennt wird oder anderweitig nicht mehr verfügbar ist, wird das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis gesendet.

Im Allgemeinen sagen Ihnen die Ereignisse `selectstart` und `selectend`, wann Sie dem Benutzer möglicherweise etwas anzeigen möchten, das darauf hinweist, dass die Hauptaktion ausgeführt wird. Dies könnte sein, einen Controller mit dem aktivierten Knopf in einer neuen Farbe zu zeichnen oder das anvisierte Objekt zu zeigen, das ergriffen und bewegt wird, beginnend wenn `selectstart` eintrifft und endend wenn `selectend` empfangen wird.

Das `select`-Ereignis hingegen ist das Ereignis, das Ihrem Code mitteilt, dass der Benutzer die Aktion abgeschlossen hat, die er abschließen wollte. Das könnte so einfach sein wie das Werfen eines Objekts oder das Betätigen des Triggers einer Waffe in einem Spiel, oder ebenso komplex wie das Ablegen eines Objekts, das er in der Welt herumgeschleppt hat, an einem neuen Ort.

Wenn Ihre Hauptaktion eine einfache Triggeraktion ist und Sie nichts animieren müssen, während der Trigger gedrückt wird, können Sie die `selectstart`- und `selectend`-Ereignisse ignorieren und auf das `select`-Ereignis reagieren.

```js
xrSession.addEventListener("select", (event) => {
  let inputSource = event.inputSource;
  let frame = event.frame;

  /* handle the event */
});
```

Einige Aktionen können diese Ereignisse sehr schnell hintereinander senden. Die Zeit, die zwischen diesen Ereignissen vergeht, hängt sowohl von der Hardwarevorrichtung, die die Aktion auslöst, als auch von den Softwaretreibern ab, die die Hardwareaktion interpretieren und in eine Ereignisfolge umwandeln. Gehen Sie nicht davon aus, dass diese Ereignisse mit einem bestimmten Zeitraum zwischen ihnen stattfinden werden.

Zum Beispiel, wenn die Hardware, die die primäre Aktion auslöst, ein Knopf ist, erhalten Sie `selectstart`, wenn der Benutzer den Knopf drückt, und dann `select` und `selectend`, wenn der Benutzer ihn loslässt.

Es gibt zahlreiche Beispiele, die zeigen, wie `select`-Ereignisse über die Dokumentation hinweg behandelt werden, wie im Abschnitt über [Zielbestimmung und der Zielstrahl](#zielbestimmung_und_der_zielstrahl) anderswo in diesem Artikel.

### Primäre Drückaktion

Eine **primäre Drückaktion** ist eine plattformspezifische Aktion, die die [`XRSession`](/de/docs/Web/API/XRSession) veranlasst, die Ereignisse [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event), [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event) und [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event) zu senden. Dies wird typischerweise ausgelöst, indem der Benutzer den Controller drückt, eine Handbewegung macht, die das Greifen von etwas imitiert, oder einen Trigger verwendet.

Die Ereignisfolge ist identisch mit derjenigen, die von der Hauptaktion gesendet wird, abgesehen vom Namen jedes Ereignisses:

1. Ein [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird an die [`XRSession`](/de/docs/Web/API/XRSession) gesendet, das darauf hinweist, dass der Benutzer eine Drückaktion eingeleitet hat.
2. Wenn die primäre Drückaktion erfolgreich endet, wird der Sitzung ein [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis gesendet.
3. Dann wird ein [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis gesendet, um anzuzeigen, dass die Drückaktion nicht mehr im Gange ist. Dies wird gesendet, unabhängig davon, ob die Drückaktion erfolgreich war oder nicht.

Zwei gängige Anwendungen der primären Drückaktion sind das Greifen und/oder Aufheben von Objekten in der 3D-Welt und das Drücken eines Auslösers, um eine Waffe in einem Spiel oder einer Simulation abzufeuern.

#### Beispiel

Dieses Beispielcode zeigt eine Reihe von Ereignishandlern für Drückaktionen, die diese Ereignisse implementieren, um das Aufheben und Halten von Objekten aus der Szene zu verwalten. Der Code setzt die Existenz eines `avatar`-Objekts voraus, das den Charakter darstellt, wie in mehreren anderen Beispielen auf dieser Seite verwendet, sowie die Funktionen `pickUpObject()` und `dropObject()`, die das Übertragen eines Objekts von der Welt in eine bestimmte Hand und das Loslassen eines Objekts aus der Hand und das Zurücklegen in die Welt handhaben.

##### Aufheben eines Objekts: Verarbeiten von `squeezestart`-Ereignissen

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

Das [`squeezestart`](/de/docs/Web/API/XRSession/squeezestart_event)-Ereignis wird verarbeitet, indem wie üblich Pose und Transformation erhalten werden und die [`handedness`](/de/docs/Web/API/XRInputSource/handedness) der Eingabequelle in die lokale Konstante `hand` übernommen wird. Wir benutzen das, um die Hand zu kartieren, die das in dieser Hand gehaltene Objekt hält.

Der Code identifiziert dann das Zielobjekt und, wenn ein Objekt entlang des Zielstrahls gefunden wird, hebt es auf. Beim Aufheben eines Objekts wird zunächst nachgesehen, ob die Hand, die durch `avatar.heldObject[hand]` repräsentiert wird, bereits ein Objekt hält. Wenn ein Objekt bereits in dieser Hand gehalten wird, wird es durch Aufruf der Funktion `dropObject()` abgelegt.

Anschließend wird `pickUpObject()` aufgerufen. Das Zielobjekt wird als das Objekt spezifiziert, das aus der Szene entfernt und in die angegebene `hand` platziert werden soll. `pickUpObject()` zeichnet auch die ursprüngliche Position des Objekts auf, damit es an diese Stelle zurückgebracht werden kann, wenn die Drückung abgebrochen oder unterbrochen wird.

##### Das Objekt ablegen: der Drück-Event-Handler

Das [`squeeze`](/de/docs/Web/API/XRSession/squeeze_event)-Ereignis wird empfangen, wenn der Benutzer die Drückaktion durch das Loslassen seiner Faust beendet. In diesem Beispiel interpretieren wir das als das Loslassen des aktuell gehaltenen Objekts und lassen es auf der Szene an die anvisierte Stelle fallen.

Dieser Code nimmt die Existenz zusätzlicher Funktionen wie `findTargetPosition()` an, die dem Zielstrahl folgt, bis dieser mit etwas kollidiert, und dann die Koordinaten zurückgibt, an denen die Kollision aufgetreten ist, und `putObject()`, die das in der angegebenen `hand` gehaltene Objekt an der gegebenen Stelle platziert und es aus der Hand entfernt.

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

Wie im `squeezestart`-Handler beginnt dies damit, die Informationen zu dem Ereignis zu sammeln, einschließlich der Hand, die ein Objekt ablegt und der Transformation des Zielstrahls. Die Zielstrahltransformation wird an die vorausgesetzte Funktion `findTargetPosition()` übergeben, um die Koordinaten zu erhalten, an denen das abgelegte Objekt zu positionieren ist.

Mit der Position in der Hand können wir das Objekt dann durch Aufruf der Funktion `putObject()` loslassen, die als Eingaben die `hand` und die Zielposition annimmt. Diese Funktion ist dafür verantwortlich, das Objekt aus der angegebenen Hand zu entfernen und es zurück in die Szene hinzuzufügen, wobei seine Position so gesetzt wird, dass es auf den von `findTargetPosition()` zurückgegebenen Koordinaten platziert wird.

##### Abbrechen der Drückung im `squeezeend`-Handler

Das [`squeezeend`](/de/docs/Web/API/XRSession/squeezeend_event)-Ereignis wird empfangen, nachdem das Drücken abgeschlossen ist, auch wenn es fehlschlägt. Wir behandeln es, indem wir das aktuell gehaltene Objekt dahin zurückbringen, wo es war, als es aufgehoben wurde.

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

Hier wird angenommen, dass die Funktion `returnObject()` eine Funktion ist, die weiß, wie sie das in der angegebenen `hand` gehaltene Objekt zurück zu seiner Anfangsposition bringt, wie es von `pickUpObject()` im `squeezestart`-Ereignis-Handler aufgezeichnet wurde.

Hier wird angenommen, dass die Funktion `returnObject()` eine Funktion ist, die weiß, wie sie das in der angegebenen `hand` gehaltene Objekt zurück zu seiner Anfangsposition bringt, wie es von `pickUpObject()` im `squeezestart`-Ereignis-Handler aufgezeichnet wurde.

### Transiente Aktionen

Wenn ein XR-Gerät die Maus verwendet, um einen Controller im `inline`-Modus zu simulieren, findet ungefähr folgende Abfolge von Dingen statt:

1. Der Benutzer drückt die Maustaste, während er sich innerhalb der {{HTMLElement("canvas")}} befindet, die die WebXR-Szene präsentiert.
2. Das Mausbvetereignis wird durch den Treiber des XR-Geräts erfasst.
3. Das Gerät erzeugt eine neue `XRInputSource`, um die simulierte XR-Eingabequelle zu repräsentieren. Der [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) wird auf `screen` gesetzt, und die anderen Informationen werden entsprechend ausgefüllt. Diese neue Eingabequelle wird vorübergehend der Liste hinzugefügt, die von der [`XRSession`](/de/docs/Web/API/XRSession) -Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) zurückgegeben wird.
4. Der Browser liefert [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisse, die der Aktion entsprechen.
5. Eine primäre Aktion wird erzeugt und in Form eines [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignisses an die App gesendet, wobei ihre Quelle auf die neue `XRInputSource` gesetzt ist. Oder, wenn die Maus als Zweithand- oder Sekundär-Controller verwendet wird, wird stattdessen eine Hilfsaktion gesendet.
6. Wenn der Benutzer die Maustaste loslässt, wird das [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis an die `XRSession` gesendet, anschließend erhält das DOM ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis. Die Sitzung erhält dann das [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis, das das Abschließen der Aktion anzeigt.
7. Wenn die Aktion abgeschlossen ist, löscht der Browser die transiente Eingabequelle und sendet gegebenenfalls [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse.

Demnach ist die transiente Eingabequelle tatsächlich flüchtig—sie existiert nur für die Dauer der Verarbeitung der Eingabe und wird dementsprechend nicht in der Liste der Eingabequellen aufgeführt sein.

## Blickrichtung und Zielbestimmung

**Blickrichtung** ist die Richtung, in die der Betrachter schaut. Dies wird nicht durch eine Eingabequelle bereitgestellt. Stattdessen wird es unter Verwendung der [`XRPose`](/de/docs/Web/API/XRPose) erhalten, die aus dem aktuellen Animationsframe durch die Methode [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) gewonnen wird. Die Rotationskomponente der Transformationsmatrix der Betrachterpose ist die Blickrichtung des Betrachters.

Mehr darüber, wie Sie die Betrachterpose nutzen können, um die Blickrichtung zu bestimmen, erfahren Sie im Artikel [Ansichten und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras).

**Zielbestimmung** ist der Akt des Benutzers, in eine bestimmte Richtung unter Verwendung einer Eingabequelle zu zeigen. Die [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) der Eingabequelle ist ein [`XRSpace`](/de/docs/Web/API/XRSpace) (und wahrscheinlich ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), die verwendet werden kann, um die Orientierung des Zielstrahls relativ zur Blickrichtung des Betrachters zu bestimmen.

Dies kann, muss aber nicht unbedingt beinhalten, tatsächlich auf ein bestimmtes Objekt innerhalb der 3D-Welt zu zeigen; Sie müssen selbst mittels Kollisionstest bestimmen, ob der Zielstrahl mit Objekten in Ihrer Szene schneidet.

### Zielbestimmung und der Zielstrahl

Der Zielstrahl ist ein Strahl, dessen Ursprung am Ursprung des Zielstrahlraums liegt und in die Richtung zeigt, in die der Benutzer das Controllervorrichtung richtet. Der Zielstrahl ist definiert durch einen [`XRSpace`](/de/docs/Web/API/XRSpace), dessen Ursprung sich am Quellpunkt des Zielstrahls befindet (normalerweise das nach außen gerichtete Ende des Controllers oder dessen Darstellung in der 3D-Welt), und dessen Orientierung -Z erstreckt sich nach außen vom Controller in dieselbe Richtung wie [`XRInputSource`](/de/docs/Web/API/XRInputSource)'s [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace).

Dieser Raum findet sich in der [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace)-Eigenschaft der Eingabequelle. Er kann verwendet werden, um zu bestimmen, in welche Richtung der Controller zeigt und um den Ursprung und die Orientierung des Zielstrahls zu bestimmen. Dies kann erreicht werden, indem etwas wie das folgende Beispiel implementiert wird, das einen [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis-Handler implementiert, der diese Informationen benötigt. Wie üblich geht dieser Code davon aus, dass [glMatrix](https://glmatrix.net/) verwendet wird, um die Matrix- und Vektormathematik durchzuführen:

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

Dies ermittelt den Ursprung des Zielstrahls im Vektor `targetSourcePoint` und die Orientierung des Strahls im {{Glossary("quaternion", "Quaternion")}} `targetDirection`. Mit dem

Der Beispielcode startet damit, den Zielstrahlraum in die lokale Konstante `targetRaySpace` zu holen. Dies wird wiederum verwendet, wenn die Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) aufgerufen wird, um ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt zu erstellen, das die Position und Orientierung des Zielstrahls im Referenzraum des Betrachters, `viewerRefSpace`, darstellt. Wenn dies `null` ist, gibt der Ereignis-Handler ohne weitere Aktion zurück.

Die Transformation des Zielstrahls wird aus der [`transform`](/de/docs/Web/API/XRPose/transform) der Pose übernommen und in der lokalen Variable `targetRayTransform` gespeichert. Dies wird wiederum (in diesem Fall durch eine Funktion namens `findTargetObject()`) verwendet, um das erste Objekt zu finden, mit dem der Strahl in der Szene kollidiert. Wenn es tatsächlich ein Objekt gibt, mit dem der Zielstrahl in der Szene kollidiert, können wir tun, was wir damit tun müssen.

Wenn Sie die tatsächlichen Position der Ursprung des Zielstrahls und die Richtung des Strahls herausarbeiten müssen, so können Sie dies tun:

```js
const targetRayOrigin = vec3.create();
const targetRayDirection = quat.create();
mat4.getTranslation(targetRayOrigin, viewerRefSpace);
mat4.getRotation(targetRayDirection, viewerRefSpace);
```

Um zu bestimmen, welches Objekt angezielt wird, verfolgen Sie den Zielstrahl, bis er mit einem Objekt kollidiert. Dieser Vorgang nennt sich **Kollisionstest** oder **Kollisionsdetektion**. Der Ansatz, den Sie zum Kollisionstest verwenden, hängt sehr von den spezifischen Anforderungen Ihrer App ab. Die erste Frage ist: Erkennen Sie Kollisionen mit virtuellen Objekten oder Gelände, realen Objekten oder Gelände oder beidem?

In jedem Fall müssen Sie, um das anvisierte Objekt zu identifizieren, feststellen, ob der durch die [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`targetRaySpace`](/de/docs/Web/API/XRInputSource/targetRaySpace) spezifizierte Strahl mit einem beliebigen Objekt in der Szene, ob virtuell oder real, kollidiert.

Weitere Informationen finden Sie in der detaillierteren Betrachtung unter [Zielbestimmung und Kollisionsdetektion](/de/docs/Web/API/WebXR_Device_API/Targeting).

### Präsentation von handgehaltenen Objekten

Die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft einer Eingabequelle identifiziert einen [`XRSpace`](/de/docs/Web/API/XRSpace), der den Ursprung und die Orientierung beschreibt, die zum Rendern eines Objekts verwendet werden sollen, damit es erscheint, als ob es in derselben Hand wie seine Eingabequelle gehalten wird. Dieser Raum soll verwendet werden, wenn ein Modell des handgehaltenen WebXR-Eingabekontrollers dargestellt wird, das durch das Objekt [`XRInputSource`](/de/docs/Web/API/XRInputSource) repräsentiert wird, kann jedoch genauso gut verwendet werden, um ein beliebiges Objekt zu zeichnen, wie einen Ball, ein Werkzeug oder eine Waffe. Wir haben den [Griffraum](#griffraum) oben behandelt, schauen wir jedoch, wie er verwendet werden kann, um Objekte, die die Hand oder etwas in der Hand darstellen, zu zeichnen.

Da sich der Ursprung des Griffraums in der Mitte des Griffs der Hand befindet, können Sie dies als Ausgangspunkt verwenden, um Ihr Objekt zu rendern. Wenden Sie alle nötigen Offset-Transformationen an, um den Ursprung zu verschieben, um den Startpunkt für das Rendern Ihres Objekts zu bestimmen, während Sie alle nötigen Rotationen anwenden, um Ihr Modell korrekt mit der Orientierung des Griffraums auszurichten.

## Erweiterte Controller mit dem Gamepad-Objekt

Eine [`XRInputSource`](/de/docs/Web/API/XRInputSource) besitzt eine [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft, deren Wert, wenn nicht `null`, ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt ist, das Zugriff auf Gamepad-ähnliche Tasten, Achsesteuerungen (wie Joysticks oder Daumenpads) und so weiter bietet. Dies kann die gleichen Tasten umfassen, die die Standardaktionen der [`XRInputSource`](/de/docs/Web/API/XRInputSource) auslösen, kann jedoch jede Anzahl von zusätzlichen Tasten und Steuerelementen umfassen.

> [!NOTE]
> Obwohl `Gamepad` durch die [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ist, wird es nicht von der Gamepad API verwaltet, daher dürfen Sie keine Methoden der Gamepad API mit ihm verwenden. Der Objekttyp wird als Bequemlichkeit wiederverwendet.

Wenn der Wert von `gamepad` `null` ist, definiert die Eingabequelle keine Steuerelemente mit der `Gamepad`-Aufzeichnung, entweder weil sie dies nicht unterstützt oder weil sie keine zusätzlichen Steuerelemente hat.

Dieses `gamepad`-Objekt wird nicht nur verwendet, um auf spezielle Tasten, Trackpads usw. zuzugreifen, sondern bietet auch eine Möglichkeit, direkter auf die Steuerelemente zuzugreifen und zu überwachen, die als primäre Auswahl- und Drückeingaben dienen, da diese in seiner [`buttons`](/de/docs/Web/API/Gamepad/buttons)-Liste enthalten sind.

Da diese Verwendung der `Gamepad`-Schnittstelle eine Bequemlichkeit und keine wirkliche Anwendung der Gamepad API ist, gibt es mehrere Unterschiede, wie sie in WebXR und wie sie in Gamepad-API-Anwendungen verwendet wird. Der bemerkenswerteste—aber nicht der einzige—Unterschied besteht darin, dass WebXR das `xr-standard`-Gamepad-Mapping hinzufügt; siehe die [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft für weitere Unterschiede. Diese Gamepad-Zuweisung definiert, wie die Steuerelemente eines typischen einhand-gehaltenen VR-Controllers zu Gamepad-Steuerelementen zugeordnet sind.

## Eingaben aus nicht-WebXR Quellen einbeziehen

Manchmal müssen Sie eine Möglichkeit haben, den Benutzer Eingaben mit Controllern, die außerhalb von WebXR liegen, machen zu lassen. Am häufigsten stammen diese Eingaben von Tastaturen und Mäusen, aber Sie könnten auch nicht-XR-Gamepad-Geräte, Netzwerk-Eingaben oder andere Datenquellen verwenden, um Benutzereingaben zu simulieren. Während WebXR keine Unterstützung zur direkten Schnittstellenbildung dieser Eingabegeräte mit der XR-Szene bietet, können Sie die Eingabedaten selbst sammeln und selbst anwenden.

Geben wir davon aus, dass Eingaben verwendet werden, um einen Avatar in der Simulation zu steuern, was der häufigste Anwendungsfall ist. WebXR-Eingaben wird verwendet, um den Avatar auf folgende Weise zu beeinflussen, unter Verwendung von Daten, die vom nicht-XR-Eingabegerät gesammelt wurden:

- Position
  - : Die Position des Avatars wird geändert, indem ein {{Glossary("delta", "Delta")}} auf die zuvor bekannte Position angewendet wird, dann der Referenzraum des Avatars mit einem neuen ersetzt wird, dessen Transformation die neue Position reflektiert.
- Orientierung
  - : Die Orientierung oder Blickrichtung des Avatars wird geändert, indem ein Delta zu seiner Rotation um die drei Achsen angewandt wird, seinen Orientierungsmäßigkeitsvektor aktualisierend, dann seinen Referenzraum neu berechnend.
- Aktion
  - : Der Avatar führt eine Aktion durch, wie die Verwendung eines Objekts oder einer Waffe, Springen oder eine andere Aktivität, die nicht im Zusammenhang mit Grundbewegung und Rotation steht.

Einige Eingaben werden stattdessen verwendet, um die Anwendung zu steuern, anstelle des Avatars. Zum Beispiel könnte ein Knopf ein Optionsmenü öffnen, das zur Konfiguration der Anwendung verwendet wird. Während dieses Menü geöffnet ist, könnten Eingaben, die sonst den Avatar steuern würden, stattdessen zur Steuerung der Schnittstelle des Menüs verwendet werden.

### Verwendung von Tastatur- und Mausereignissen

Das Erfassen der Eingaben von Tastatur und Maus erfolgt genauso wie in jeder Webanwendung. Richten Sie Handler für die Ereignisse ein, die Sie zur Verarbeitung benötigen, um

die gewünschten Eingaben zu erhalten. Es ist, was Sie mit diesen Eingaben machen, das interessant ist.

Stellen Sie sich ein `avatar`-Objekt vor, das wir verwenden, um Informationen über den Avatar und seine Sichtweise zu verfolgen. Wir möchten, dass der Spieler die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> verwenden kann, um sich vorwärts, links, rückwärts und rechts zu bewegen. Da wir die Position des Avatars definieren, wie sie von der Tastatur und Maus beeinflusst wird, zusätzlich zu allem, was die XR-Hardware tut, müssen wir diese Informationen separat verwalten und diese als Transformationsmatrix anwenden, bevor wir den Avatar (oder die Welt aus Sicht des Avatars) rendern.

Um dies zu erreichen, fügen wir dem `avatar`-Objekt eine `posDelta`-Eigenschaft hinzu, vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint), die die Offsetwerte enthält, die auf alle drei Achsen anzuwenden sind, um die Position des Avatars anzupassen (der Ursprung des Referenzraums der Betrachterpose), um Bewegung und Rotation durch die Tastatur und die Maus einzubeziehen.

Der entsprechende Code für die Tastatureingabe könnte folgendermaßen aussehen:

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

Dies ist ein einfaches Beispiel, bei dem die Beschleunigung konstant und nicht besonders realistisch ist. Sie können dies erheblich verbessern, indem Sie Kenntnisse der Physik anwenden, um die Beschleunigung über die Zeit zu ändern, basierend darauf, wie lange die Taste gedrückt gehalten wird und andere Faktoren.

### Anwenden von Eingaben auf die Szene

Jetzt, da wir die Deltas haben, die auf die Position und Orientierung angewendet werden müssen — in unserem Beispiel in den Eigenschaften `posDelta` und `orientDelta` unseres `avatar`-Objekts — können wir Code schreiben, um diese Änderungen anzuwenden. Da wir die Szene bereits nach einem festgelegten Zeitplan rendern, können wir einfach den Code zum Anwenden dieser Änderungen dort hinzufügen, zusammen mit dem Vorbereiten und Zeichnen der Szene.

```js
function drawFrame(time, frame) {
  applyExternalInputs(avatar);
  let pose = frame.getViewerPose(avatar.referenceSpace);

  animationFrameRequest = session.requestAnimationFrame(drawFrame);

  /* draw the frame here */
}
```

Die hier gezeigte `drawFrame()`-Funktion ist der Rückruf, der aufgerufen wird, wenn es Zeit ist, den Frame zu zeichnen, wie durch einen Aufruf der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der [`XRSession`](/de/docs/Web/API/XRSession) festgelegt. Sie ruft eine Funktion `applyExternalInputs()` auf, die wir gleich definieren werden; sie nimmt das `avatar`-Objekt und verwendet seine Informationen, um den Referenzrahmen des Avatars zu aktualisieren.

Danach geht alles wie gewohnt weiter, indem die Pose des Betrachters aus dem aktualisierten Referenzrahmen geholt, der nächste Frame-Rückruf über `requestAnimationFrame()` angefordert und dann mit dem Einrichten von WebGL und dem Zeichen der Szene fortgefahren wird. Der Zeichen- und andere damit zusammenhängende Code finden sich im Beispiel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

Die Methode `applyExternalInputs()` nimmt das `avatar`-Objekt und ersetzt dessen `referenceSpace`-Eigenschaft mit einem neuen Referenzraum, der die aktualisierten Change-Deltas beinhaltet.

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

- [Zielbestimmung und Kollisionsdetektion](/de/docs/Web/API/WebXR_Device_API/Targeting)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracken in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
