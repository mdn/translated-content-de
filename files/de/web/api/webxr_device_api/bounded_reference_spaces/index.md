---
title: Begrenzte Referenzräume verwenden
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzräumen der WebXR-APIs nimmt der **`bounded-floor`-Referenzraum** eine Sonderstellung ein. Er wird nicht nur durch eine eigene Unterklasse, [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), repräsentiert, sondern ist auch der einzige Referenzraum, der Bewegungen anhand realer Gegebenheiten statt anhand virtueller Beschränkungen begrenzt. Dieser Artikel erläutert, was begrenzte Referenzräume sind und wie sie verwendet werden.

Begrenzte Referenzräume eignen sich für viele Anwendungen, darunter virtuelle Malstudios, Systeme für 3D-Konstruktion, -Modellierung oder -Bildhauerei, Trainingssimulationen und Lernszenarien, Tanzspiele und andere bewegungsbasierte Spiele sowie die Vorschau von 3D-Objekten in der realen Welt mithilfe von Augmented Reality.

## Einführung

Ein begrenzter Referenzraum stellt eine XR-Umgebung dar, in der sich die nutzende Person physisch in der realen Welt bewegen kann. Die XR-Hardware erfasst diese Bewegungen und überträgt sie in die Simulation. Die Grenzen des Referenzraums kennzeichnen dabei den Rand des sicher begehbaren und erfassten Bereichs in der realen Umgebung.

### Voraussetzungen

Da ein begrenzter Referenzraum den Bereich einschränkt, in dem sich die nutzende Person bewegen kann, begrenzt er auch die Größe der simulierten Umgebung. Wenn reale Bewegungen in die virtuelle Umgebung übertragen werden, ist es schwierig – und vermutlich ziemlich verwirrend –, eine virtuelle Welt zu schaffen, die größer ist als der verfügbare physische Raum. Stellen Sie sich vor, wie unangenehm es wäre, wenn Sie mit jedem Schritt 100 Meter zurücklegten!

Für einen begrenzten Referenzraum sind daher erforderlich:

- XR-Hardware, die Bewegungen in der realen Welt erfassen kann, beispielsweise ein kamerabasiertes System.
- Ein physischer Bereich mit ausreichend Platz, um sich sicher zu bewegen.

### Grundlagen

Der Referenzraumtyp aller begrenzten Referenzräume ist `bounded-floor`. Dies ist derzeit der einzige verfügbare Typ eines begrenzten Referenzraums. Bei allen anderen Typen müssen Sie benötigte Grenzen selbst verwalten.

Da `bounded-floor` ein auf den Boden bezogener Referenzraum ist, befindet sich die nutzende Person zunächst auf dessen Boden. Das ist angesichts der realen Gegebenheiten sinnvoll. Der Ursprung des begrenzten Referenzraums legt die Ebene Y=0 daher immer auf Bodenhöhe. Die Grenze wird durch ein Array aus 2D-Koordinaten definiert, das nur die X- und Z-Komponenten angibt, da Y immer 0 ist. Die Punkte verlaufen im Uhrzeigersinn um den Raum.

Wenn die zugrunde liegende Plattform einen festen Ursprung und eine feste Grenze für einen raumgroßen Bereich vorgibt, kann sie nicht initialisierte Werte anhand dieser Vorgaben initialisieren. Für Nutzende solcher Plattformen ist dieses Verhalten nicht ungewöhnlich.

Der Bereich innerhalb der Grenze ist der sichere Bewegungsbereich. Dort werden die Bewegungen der nutzenden Person erfasst und in der virtuellen Welt nachgebildet. Auch wenn das XR-System das Verlassen des sicheren Bereichs möglicherweise automatisch erkennt und verhindert, empfiehlt es sich, dies selbst zu berücksichtigen: Prüfen Sie, ob die Position der nutzenden Person mit der Grenze kollidiert, und geben Sie Hinweise, sich wieder zum Ursprung hin zu bewegen oder zumindest innerhalb des sicheren Bereichs zu bleiben.

XR-Hardware ohne fest vorgegebene Grenze unterstützt begrenzte Referenzräume möglicherweise, muss dies aber nicht. Falls sie diese unterstützt, bietet sie wahrscheinlich eine Möglichkeit, die zu verwendenden Grenzen festzulegen oder auszuwählen. Ein Gerät kann die Unterstützung begrenzter Referenzräume jedoch auch vollständig ablehnen. Sie sollten daher auf einen anderen Referenzraumtyp ausweichen können.

## Grenzen verstehen

Wie bereits erwähnt, wird die Grenze durch ein Array von Punkten auf Bodenhöhe definiert. Jeder Punkt bezeichnet eine Ecke des begrenzten Bereichs; die Punkte verlaufen im Uhrzeigersinn um den Ursprung. Die folgende Abbildung veranschaulicht dies.

![Diagramm zur Definition der Grenze eines begrenzten Referenzraums](boundedspace.svg)

Das Diagramm zeigt die Grenzen eines Raums mit dem Ursprung in der Mitte sowie 12 Punkten, die die Eckpunkte des verfügbaren physischen Bereichs darstellen. Im Raum gibt es zwei ausgesparte Bereiche: Möglicherweise befindet sich hinter der nutzenden Person eine Couch, ein Sofa oder eine Bank und an der anderen Stelle ein Gestell oder Tisch mit dem Computer oder anderer Hardware. Wie dies zeigt, muss der sichere Bereich nicht konvex sein. Er kann beliebig viele Einbuchtungen oder Ausbuchtungen aufweisen, solange er eine zusammenhängende Fläche bildet.

Die Koordinaten des Ursprungs, (0, 0), verdeutlichen hier, dass die Grenzen auf Bodenhöhe definiert sind und im Wesentlichen eine 2D-Form auf dem Boden bilden – ähnlich einem unsichtbaren Zaun, der Haustiere davon abhält, das Grundstück zu verlassen. Die vollständigen Koordinaten wären (0, 0, 0).

Diese Grenze wird in der Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) von [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) gespeichert. Die Eigenschaft enthält ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten. Jedes Objekt definiert einen Punkt der Grenze; die Punkte sind im Uhrzeigersinn um den Raum angeordnet. Die `y`-Koordinate jedes Eckpunkts im Array ist 0, da die gesamte Grenze auf Bodenhöhe definiert ist und sich bis zur Decke oder unbegrenzt nach oben erstreckt. Der Wert `w` jedes Punkts ist ebenfalls immer 1.

Das Innere des begrenzten Bereichs liegt stets auf der _rechten Seite_ der Grenze. Durch die Anordnung der Punkte im Uhrzeigersinn liegt der sichere Bereich innerhalb der definierten Form. Wären die Punkte gegen den Uhrzeigersinn angeordnet, würde dies darauf hindeuten, dass der sichere Bereich _außerhalb_ der Grenze liegt – vermutlich mit unerwünschten Folgen.

Erwägen Sie, frühzeitig zu prüfen, ob sich die nutzende Person der Grenze nähert. Das dient ihrer Sicherheit, falls die Grenze ein physisches Hindernis darstellt, und hilft, Situationen zu vermeiden, in denen die Erfassung nahe der Grenze ungenauer wird. Zudem kann eine Person so in ein Spiel oder eine andere Aktivität vertieft sein, dass sie die Annäherung an die Grenze nicht bemerkt. Verlässt sie den Erfassungsbereich, kann dies verwirrend oder beunruhigend sein – insbesondere, wenn sie dadurch ein Spiel verliert.

Am einfachsten ist es, jedes Grenzsegment wie ein Objekt zu behandeln, gegen das eine Kollision geprüft wird. Wenn sich die nutzende Person der Grenze nähert, können Sie sie beispielsweise durch eine Meldung, eine blinkende Warnanzeige oder einen Warnton warnen. Erreicht sie die Grenze tatsächlich, sollten Sie verhindern, dass sie sich im virtuellen Raum darüber hinausbewegt.

## Einen begrenzten Referenzraum erstellen

Bevor Sie ein Projekt entwickeln, das auf begrenzten Referenzräumen beruht, sollten Sie bedenken, dass nicht alle XR-Geräte solche Räume erstellen können. Begrenzte Referenzräume stellen besondere Anforderungen an die Hardware: Sie muss erfassen können, wie sich eine Person physisch im Raum bewegt. In diesem Abschnitt erfahren Sie, wie Sie eine Sitzung so erstellen, dass sie unabhängig davon funktioniert, ob begrenzte Referenzräume unterstützt werden.

### Eine Sitzung mit bevorzugtem begrenztem Referenzraum sicher erstellen

Bevor Sie einen begrenzten Referenzraum erstellen können, benötigen Sie eine Sitzung, die diesen unterstützt. Da nicht jede Hardware begrenzte Referenzräume unterstützt, sollten Sie sie als optionale und nicht als erforderliche Funktion angeben – es sei denn, Sie kennen die Umgebung, in der Ihr Code ausgeführt wird, genau. Mit Code wie dem folgenden können Sie eine Sitzung erstellen, die einen `bounded-floor`-Referenzraum unterstützt, sofern einer verfügbar ist:

```js
async function onActivateXRButton(event) {
  if (!xrSession) {
    navigator.xr
      .requestSession("immersive-vr", {
        requiredFeatures: ["local-floor"],
        optionalFeatures: ["bounded-floor"],
      })
      .then((session) => {
        xrSession = session;
        startSessionAnimation();
      });
  }
}
```

Diese Funktion wird aufgerufen, wenn die nutzende Person auf eine Schaltfläche klickt, um das XR-Erlebnis zu starten. Sie beendet sich sofort, falls bereits eine Sitzung besteht, und fordert andernfalls eine neue Sitzung im Modus `immersive-vr` an. Die dabei angegebenen Optionen legen fest, dass die Sitzung mindestens mit dem Referenzraum `local-floor` kompatibel sein muss. Die Unterstützung von `bounded-floor` ist ebenfalls erwünscht, aber nicht erforderlich.

Nachdem die Sitzung erstellt wurde, kann unsere Funktion `startSessionAnimation()` versuchen, einen `bounded-floor`-Referenzraum einzurichten. Schlägt das fehl, kann sie stattdessen einen `local-floor`-Referenzraum anfordern. In diesem Fall müssen wir die Grenzen selbst verwalten.

So startet die Sitzung unabhängig davon, ob die Plattform der nutzenden Person begrenzte Referenzräume bereitstellen kann.

### Den Referenzraum erstellen

Beim Aufruf der [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) Unterstützung für `bounded-floor` anzufordern, reicht nicht aus, um einen begrenzten Referenzraum zu erhalten. Sie müssen ihn auch beim Aufruf von [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) anfordern. Ändern Sie dazu den Code, der `requestReferenceSpace()` aufruft, sodass er zunächst einen begrenzten Referenzraum anfordert und bei einem Fehlschlag auf eine Alternative zurückgreift:

```js
let xrSession = null;
let xrReferenceSpace = null;
let spaceType = null;

function onSessionStarted(session) {
  xrSession = session;

  spaceType = "bounded-floor";
  xrSession
    .requestReferenceSpace(spaceType)
    .then(onRefSpaceCreated)
    .catch(() => {
      spaceType = "local-floor";
      xrSession
        .requestReferenceSpace(spaceType)
        .then(onRefSpaceCreated)
        .catch(handleError);
    });
}

function onRefSpaceCreated(refSpace) {
  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });

  // Now set up matrices, create a secondary reference space to
  // transform the viewer's pose, and so forth.

  xrSession.requestAnimationFrame(onDrawFrame);
}
```

Wenn Sie diesen Code mit Beispielen für unbegrenzte Referenzräume vergleichen, werden Sie feststellen, dass der wesentliche Unterschied tatsächlich der Referenzraumtyp `bounded-floor` ist.

Der Code versucht zunächst, einen `bounded-floor`-Referenzraum zu erhalten. Schlägt dies fehl, fordert er einen `local-floor`-Referenzraum an. Sobald einer der beiden Referenzräume erfolgreich erstellt wurde, wird er an die Funktion `onRefSpaceCreated()` übergeben. Kann keiner der beiden Typen erstellt werden, wird die Fehlerbehandlung `handleError()` aufgerufen.

`onRefSpaceCreated()` übernimmt anschließend die Einrichtung des Referenzraums für die weitere Verwendung.

Beachten Sie jedoch, dass sich `local-floor` und `bounded-floor` wesentlich unterscheiden. `local-floor` stellt zwar einen auf den Boden bezogenen Raum bereit und ist für immersive Sitzungen immer verfügbar, liefert aber keine Grenzen. Dieser Typ ist vor allem für Situationen gedacht, in denen die nutzende Person während der gesamten Sitzung an einem Ort bleibt. Deshalb speichert das obige Codebeispiel den verwendeten Referenzraumtyp in der Variablen `spaceType`, damit Sie die Unterschiede berücksichtigen können.

Wenn das XR-Gerät beim Erstellen eines `local-floor`-Referenzraums die Bodenhöhe nicht selbst bestimmen kann, erstellt die WebXR-Schicht trotzdem einen solchen Raum. Sie simuliert dann die Bodenhöhe, indem sie einen Wert dafür festlegt und die Ansicht um einen festen Betrag nach oben verschiebt, damit die Inhalte der Szene an der richtigen Stelle gerendert werden.

Standardmäßig befindet sich die Position des Betrachters _unmittelbar_ über dem Boden – wie bei einer Kamera, die auf dem Boden liegt. Wenn Sie die Perspektive eines Menschen auf die Szene simulieren möchten, sollten Sie den Blickpunkt ungefähr auf menschliche Augenhöhe anheben. Übergeben Sie dazu eine geeignete Transformationsmatrix an die [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace).

Dadurch würde sich die Methode `onRefSpaceCreated()` aus dem obigen Beispiel wie folgt ändern:

```js
function onRefSpaceCreated(refSpace) {
  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });

  let startPosition = vec3.fromValues(0, 1.5, 0);
  const startOrientation = vec3.fromValues(0, 0, 1.0);
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(startPosition, startOrientation),
  );

  xrSession.requestAnimationFrame(onDrawFrame);
}
```

Dieser Code wird ausgeführt, nachdem der Referenzraum erstellt wurde. Er erstellt eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die den Blickpunkt um 1,5 Meter nach oben verschiebt. Das entspricht näherungsweise der Augenhöhe eines Menschen. Dabei wird vorausgesetzt, dass das Koordinatensystem zuvor so transformiert wurde, dass die Koordinatenwerte nicht mehr auf -1 bis 1 beschränkt sind, ein Wert von 1 aber weiterhin einen Meter darstellt.

Die neue Transformation wird an `getOffsetReferenceSpace()` übergeben. So entsteht ein Referenzraum, der die Koordinaten des zugrunde liegenden Koordinatensystems denen des gerenderten Bildes zuordnet. Dieser neue Referenzraum ersetzt den ursprünglichen. Schließlich beginnt das Zeichnen durch einen Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Erfassung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Ausrichtung und Bewegungsabläufe](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
