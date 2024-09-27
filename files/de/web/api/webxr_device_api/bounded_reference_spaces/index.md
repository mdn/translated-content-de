---
title: Verwendung begrenzter Referenzräume
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: 4a7f3948e907b117fa2ea190fc6795642c49d624
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzräumen, die in der WebXR-API verfügbar sind, ist der **`bounded-floor` Referenzraum** etwas einzigartig. Er wird nicht nur durch eine einzigartige Unterklasse, [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), dargestellt, sondern ist der einzige, der Bewegungen aufgrund von Einschränkungen der realen Welt und nicht durch virtuelle Einschränkungen begrenzt. Dieser Artikel untersucht begrenzte Referenzräume, wie sie durch `XRBoundedReferenceSpace` repräsentiert werden, und beschreibt, was sie sind und wie sie verwendet werden.

Es gibt viele Anwendungen für begrenzte Referenzräume, darunter Projekte wie virtuelle Malstudios oder 3D-Konstruktions-, Modellierungs- oder Bildhauersysteme; Trainingssimulationen oder Unterrichtsszenarien; Tanz- oder andere leistungsbasierte Spiele; oder die Vorschau von 3D-Objekten in der realen Welt mittels Augmented Reality.

## Einführung

Ein begrenzter Referenzraum stellt eine XR-Umgebung dar, in der der Benutzer sich physisch in der realen Welt bewegen kann, während er von der XR-Hardware verfolgt wird, welche seine Bewegungen dann in die Simulation überträgt. Die durch den begrenzten Referenzraum festgelegten Grenzen repräsentieren die Ränder des sicher betretbaren, verfolgten Raums in der realen Umgebung des Benutzers, der für seine Bewegung innerhalb der Simulation zur Verfügung steht.

### Anforderungen

Da ein begrenzter Referenzraum einen begrenzten Bereich festlegt, in dem der Benutzer sich bewegen kann, begrenzt er naturgemäß, wie groß die simulierte Umgebung sein kann. Es ist schwierig (und wahrscheinlich ziemlich verwirrend), eine virtuelle Welt zu schaffen, die größer ist als der physische Raum, der dem Benutzer zur Verfügung steht, wenn Sie seine Bewegungen in der realen Welt in die virtuelle Umgebung übertragen. Stellen Sie sich vor, wie unangenehm es sich anfühlen würde, wenn Sie bei jedem Schritt 100 Meter zurücklegen würden!

Die Anforderungen an einen begrenzten Referenzraum sind daher:

- XR-Hardware, die die Bewegung des Benutzers in der realen Welt verfolgen kann, wie beispielsweise ein kamerabasiertes System.
- Ein physischer Raum mit ausreichend Platz, um sich sicher zu bewegen.

### Grundlagen

Der Referenzraumtyp aller begrenzten Referenzräume ist `bounded-floor`. Dies ist der einzige derzeit verfügbare Typ eines begrenzten Referenzraums; bei allen anderen müssen Sie, falls erforderlich, die Grenzen selbst verwalten.

Da `bounded-floor` ein bodenbezogener Referenzraum ist, beginnt der Benutzer auf dem Boden des Raumes, was angesichts der realen Implikationen sinnvoll ist. Daher platziert der Ursprung des begrenzten Referenzraums die Y=0-Ebene immer auf Bodenniveau. Die Grenze wird dann unter Verwendung eines Arrays von 2D-Koordinaten definiert, wobei nur die X- und Z-Komponenten angegeben werden, da Y immer 0 ist. Diese Punkte gehen im Uhrzeigersinn um den Raum herum.

Beachten Sie, dass, wenn die zugrunde liegende Plattform einen festen Raummaßstab-Ursprung und -Grenze definiert, sie möglicherweise nicht initialisierte Werte so initialisieren kann, dass sie mit diesen vordefinierten Informationen übereinstimmen; dies ist kein unerwartetes Verhalten für Benutzer dieser Plattformen.

Der Raum innerhalb der Grenze ist dann der sichere Bewegungsbereich des Benutzers, innerhalb dessen er verfolgt und seine Bewegungen in die virtuelle Welt übertragen werden. Obwohl das XR-System des Benutzers möglicherweise eine automatische Erkennung und Schutzmaßnahmen gegen das Verlassen des sicheren Bereichs bietet, ist es immer gute Praxis, dies selbst zu handhaben, indem Sie Kollisionen zwischen der Position des Benutzers und der Grenze der Welt überwachen und Anweisungen geben, um zurück zum Ursprungspunkt zu gelangen oder zumindest im sicheren Bereich zu bleiben.

XR-Hardware, die keine inhärente Grenze definiert hat, unterstützt möglicherweise den begrenzten Referenzraum oder nicht. Wenn sie dies tut, hat sie wahrscheinlich ein System, das dem Benutzer erlaubt, die Grenzen anzugeben oder auszuwählen, die anzuwenden sind, wenn ein begrenzter Raum verwendet werden soll. Es ist jedoch durchaus möglich, dass das Gerät die Unterstützung von begrenzten Räumen insgesamt ablehnt, daher sollten Sie darauf vorbereitet sein, auf einen anderen Referenzraumtyp auszuweichen.

## Verständnis der Grenzen

Wie bereits erwähnt, wird die Grenze als ein Array von Punkten auf Bodenniveau definiert, das jede Ecke des Grenzbereichs beschreibt und im Uhrzeigersinn um den Ursprung verläuft. Dies wird im untenstehenden Diagramm veranschaulicht.

![Diagramm, das zeigt, wie die Grenze eines begrenzten Raums definiert ist](boundedspace.svg)

Dieses Diagramm definiert die Grenzen eines Raumes mit dem Ursprung in der Mitte, wie vorgeschrieben, und einem Satz von 12 Punkten, die die Scheitelpunkte des verfügbaren physischen Raums darstellen. Es gibt zwei ausgesparte Bereiche in dem Raum, die vermutlich ein Sofa, eine Couch oder eine Bank hinter dem Benutzer und einen Stand oder Tisch, auf dem der Computer oder andere Hardware platziert sind, darstellen. Wie dies andeutet, muss der sichere Bereich nicht konvex sein, sondern kann beliebige Einkerbungen oder Vorsprünge haben, solange es sich um eine zusammenhängende Form handelt.

Beachten Sie, dass die hier verwendeten Koordinaten des Ursprungs, (0, 0), darauf hindeuten, dass die Grenzen auf Bodenniveau definiert und im Wesentlichen eine 2D-Form auf dem Boden sind, ähnlich einem unsichtbaren Zaun, der verhindert, dass Haustiere weglaufen. Die vollständigen Koordinaten hier wären (0, 0, 0).

Diese Grenze wird in der [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) in der [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) aufbewahrt. Diese Eigenschaft enthält ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekten, von denen jedes einen der Punkte definiert, die die Grenze des Raumes bilden, sich im Uhrzeigersinn um den Raum bewegend. Jeder Scheitelpunkt im Array hat eine `y`-Koordinate von 0, da die gesamte Grenze auf Bodenniveau definiert ist und sich nach oben zur Decke oder unendlich erstreckt. Auch der `w` eines jeden Punktes ist immer 1.

Der Innenraum des begrenzten Bereichs wird immer als _rechte Seite_ der Grenze betrachtet. Durch das Auflisten der Punkte im Uhrzeigersinn wird die Grenze innerhalb der definierten Form platziert. Wenn die Punkte gegen den Uhrzeigersinn aufgelistet werden, würde dies andeuten, dass der sichere Bereich _außerhalb_ der Grenze liegt, wahrscheinlich mit unerwünschten Ergebnissen.

Sie sollten erwägen, proaktive Überprüfungen für den Benutzer vorzusehen, der sich der Grenze nähert. Dies ist sowohl für ihre Sicherheit nützlich (falls die Grenze ein physisches Hindernis jeglicher Art darstellt) als auch, um mögliche Bedingungen zu vermeiden, in denen die Genauigkeit in der Nähe der Grenzen reduziert wird. Es ist auch nützlich, da der Benutzer möglicherweise so vertieft in das Spiel oder eine andere Aktivität ist, dass er nicht merkt, dass er sich der Grenze nähert, und verwirrt oder verängstigt werden könnte, wenn er den Verfolgungsbereich verlässt (insbesondere, wenn dies dazu führt, dass er ein Spiel verliert).

Die einfachste Lösung besteht darin, jedes Grenzsegment so zu behandeln, als wäre es ein Objekt, welches getestet werden muss, ob es getroffen wird. Wenn sich der Benutzer der Grenze nähert, könnten Sie ihn warnen, indem eine Nachricht angezeigt wird, ein Warnsignal blinkt, ein akustisches Warnsignal abgespielt wird oder Ähnliches. Und wenn der Benutzer tatsächlich mit der Grenze kollidiert, lassen Sie ihn nicht einfach weiterlaufen.

## Erstellen eines begrenzten Referenzraums

Bevor Sie ein Projekt erstellen, das auf begrenzte Referenzräume angewiesen ist, ist es wichtig zu berücksichtigen, dass nicht alle XR-Geräte in der Lage sind, diese zu erstellen. Aufgrund ihrer Beschaffenheit haben begrenzte Referenzräume spezielle Hardware-Anforderungen, da sie dem Benutzer ermöglichen müssen, sich physisch im Raum zu bewegen, während seine Bewegungen verfolgt werden. In diesem Abschnitt werden wir uns ansehen, wie man sicher eine Sitzung erstellt, die funktioniert, unabhängig davon, ob begrenzte Räume unterstützt werden oder nicht.

### Sicheres Erstellen eines bevorzugten begrenzten Raums

Bevor Sie tatsächlich versuchen, einen begrenzten Referenzraum zu erstellen, müssen Sie eine Sitzung erstellen, die diese unterstützt. Da nicht alle Hardware begrenzte Referenzräume unterstützt, sollten Sie sicherstellen, dass Sie begrenzte Referenzräume als Option und nicht als erforderliches Merkmal unterstützen, es sei denn, Sie verfügen über spezifische Kenntnisse der Umgebung, in der Ihr Code ausgeführt wird. Sie können eine Sitzung erstellen, die einen `bounded-floor` Referenzraum unterstützt, falls verfügbar, indem Sie Code wie den folgenden verwenden:

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

Diese Funktion, die ausgeführt wird, wenn der Benutzer auf eine Schaltfläche klickt, um die XR-Erfahrung zu starten, funktioniert wie gewohnt, indem sie sofort abbricht, wenn bereits eine Sitzung vorhanden ist, und dann eine neue Sitzung im Modus `immersive-vr` anfordert. Die Optionen, die bei der Anforderung der Sitzung angegeben werden, zeigen an, dass die Sitzung mindestens kompatibel mit dem `local-floor` Referenzraum sein muss, aber es wäre schön, wenn auch der `bounded-floor` Raum unterstützt wird.

Wenn die Sitzung erstellt wurde, kann unsere Funktion `startSessionAnimation()` versuchen, einen `bounded-floor` Referenzraum zu etablieren, und falls dies fehlschlägt, kann sie dann auf die Anforderung eines `local-floor` Referenzraums ausweichen (wo wir selbst Grenzen verwalten müssen).

Auf diese Weise wird unsere Sitzung unabhängig davon starten, ob die Plattform des Benutzers in der Lage ist, begrenzte Referenzräume bereitzustellen oder nicht.

### Erstellen des Referenzraums

Die Anforderung der Unterstützung für `bounded-floor` beim Aufruf der [`XRSystem`](/de/docs/Web/API/XRSystem) Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist nicht ausreichend, um einen begrenzten Raum zu erhalten. Sie müssen zusätzlich eine solche Anforderung stellen, wenn Sie [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen. Das bedeutet, dass Sie den Code, der `requestReferenceSpace()` aufruft, ändern müssen, um einen begrenzten Referenzraum anzufordern, und, falls dies fehlschlägt, auf Ihre Ersatzwahl ausweichen, wie hier:

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

Wenn Sie diesen Code mit dem in Beispielen verwendeten Code für unbegrenzte Referenzräume vergleichen, bestätigen Sie, dass der größte Unterschied im Referenzraumtyp `bounded-floor` liegt.

Der Code beginnt damit, zu versuchen, einen `bounded-floor` Referenzraum zu erhalten, aber falls dies fehlschlägt, fordert er einen `local-floor` Raum an. In beiden Fällen wird der neu erstellte Raum in die Funktion `onRefSpaceCreated()` übergeben, wenn erfolgreich ein Referenzraum erhalten wurde. Wenn keiner der beiden Raumtypen erstellt werden kann, wird ein Fehlerhandler aufgerufen (`handleError()`).

In jedem Fall, sobald ein Referenzraum erstellt wurde, wird er an eine Funktion namens `onRefSpaceCreated()` übergeben, die die Einrichtung des Raumes für den Gebrauch übernimmt.

Es ist jedoch wichtig zu beachten, dass während ein `local-floor` Raum einen bodenbezogenen Raum bereitstellt und immer für immersive Sitzungen verfügbar ist, er auch wesentliche Unterschiede zu `bounded-floor` aufweist, sodass Sie darauf vorbereitet sein müssen, diese Unterschiede zu handhaben. Aus diesem Grund zeichnet der obige Code-Schnipsel den verwendeten Referenzraum im Variablen `spaceType` auf. Der offensichtlichste Unterschied ist, dass `local-floor` Räume keine Grenzen bereitstellen und hauptsächlich für Situationen gedacht sind, in denen der Benutzer während der gesamten Sitzung an Ort und Stelle bleibt.

Wenn beim Versuch, einen `local-floor` Referenzraum zu erstellen, das XR-Gerät des Benutzers keine eingebaute Unterstützung zur Bestimmung des Bodenniveaus hat, wird die WebXR-Schicht dennoch einen `local-floor` Raum erstellen. Das Bodenniveau wird jedoch simuliert, indem das Bodenniveau ausgewählt und emuliert und die Ansicht um einen festen Betrag nach oben verschoben wird, um sicherzustellen, dass der Inhalt der Szene an der richtigen Stelle gerendert wird.

Beachten Sie, dass standardmäßig die Position des Betrachters _unmittelbar_ über dem Boden platziert wird, wie eine Kamera, die auf dem Boden liegt. Wenn Sie die Perspektive eines Menschen auf die Szene simulieren möchten, sollten Sie den Blickpunkt wahrscheinlich um eine Distanz nach oben verschieben, die das menschliche Augenmaß annähert, indem Sie diese durch das Bereitstellen einer geeigneten Transformationsmatrix für die [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) transformieren.

Dies würde die Methode `onRefSpaceCreated()` aus dem obigen Schnipsel wie folgt ändern:

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

In diesem Code, der nach der Erstellung des Referenzraums ausgeführt wird, erstellen wir eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Transformation darstellt, welche den Sichtpunkt um 1,5 Meter nach oben verschieben wird. Dies nähert die menschliche Höhe an, obwohl angenommen wird, dass wir zuvor das Koordinatensystem so transformiert haben, dass der Wert jeder Koordinate nicht länger auf -1 bis 1 beschränkt ist, während die Definition beibehalten wird, dass ein Wert von 1 einen Meter darstellt.

Die neue Transformation wird `getOffsetReferenceSpace()` zugeführt, um einen Referenzraum zu erhalten, welcher die Koordinaten zwischen dem Basis-Koordinatensystem und dem des gerenderten Bildes abbildet. Der neue Referenzraum ersetzt den ursprünglichen. Schließlich beginnt das Zeichnen durch Aufruf der [`XRSession`](/de/docs/Web/API/XRSession) Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

## Siehe auch

- [WebXR Gerät-API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Unterstützung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
