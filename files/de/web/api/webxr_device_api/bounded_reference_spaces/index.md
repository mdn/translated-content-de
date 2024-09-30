---
title: Verwendung von begrenzten Referenzräumen
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: 4a7f3948e907b117fa2ea190fc6795642c49d624
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzräumen, die im WebXR-Set von APIs verfügbar sind, ist der **`bounded-floor` Referenzraum** etwas einzigartig. Er wird nicht nur durch eine einzigartige Unterklasse, [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), dargestellt, sondern ist auch der einzige, der Bewegungen nicht durch virtuelle Einschränkungen, sondern durch Beschränkungen der realen Welt begrenzt. Dieser Artikel untersucht begrenzte Referenzräume, wie sie durch `XRBoundedReferenceSpace` dargestellt werden, und beschreibt, was sie sind und wie sie verwendet werden.

Es gibt viele Verwendungsmöglichkeiten für begrenzte Referenzräume, einschließlich Projekten wie virtuellen Malstudios oder 3D-Konstruktions-, Modellierungs- oder Bildhauersystemen; Trainingssimulationen oder Lehrszenarien; Tanz- oder andere performancebasierte Spiele; oder die Vorschau von 3D-Objekten in der realen Welt mit Augmented Reality.

## Einführung

Ein begrenzter Referenzraum ist einer, der eine XR-Umgebung darstellt, in der sich der Benutzer physisch in der realen Welt bewegen kann, während er von der XR-Hardware verfolgt wird und seine Bewegungen dann in die Simulation übertragen werden. Die durch den begrenzten Referenzraum festgelegten Grenzen stellen die Ränder des sicher passierbaren, erfassten Raumes in der realen Umgebung des Benutzers dar, die für seine Bewegung in der Simulation zur Verfügung stehen.

### Anforderungen

Da ein begrenzter Referenzraum einen begrenzten Bereich festlegt, in dem sich der Benutzer bewegen kann, setzt er naturgemäß eine Grenze für die Größe der simulierten Umgebung. Es ist schwierig (und wahrscheinlich ziemlich verwirrend), eine virtuelle Welt zu schaffen, die größer ist als der dem Benutzer zur Verfügung stehende physische Raum, wenn Sie seine realen Bewegungen in die virtuelle Umgebung übertragen. Stellen Sie sich vor, wie unangenehm es sich anfühlen würde, wenn Sie bei jedem Schritt 100 Meter zurücklegen würden!

Die Anforderungen an einen begrenzten Referenzraum sind daher:

- XR-Hardware, die die Bewegung des Benutzers in der realen Welt verfolgen kann, wie ein kamerabasiertes System.
- Ein physischer Raum mit ausreichend Platz, um sich sicher zu bewegen.

### Grundlagen

Der Referenzraumtyp aller begrenzten Referenzräume ist `bounded-floor`. Dies ist der einzige derzeit verfügbare Typ eines begrenzten Referenzraums; in allen anderen müssen Sie die Grenzen selbst verwalten, wenn Sie welche benötigen.

Da `bounded-floor` ein bodengebundener Referenzraum ist, startet der Benutzer auf dem Boden des Raumes, was angesichts der realen Implikationen sinnvoll ist. Daher platziert der Ursprung des begrenzten Referenzraums immer die Ebene Y=0 auf Bodenhöhe. Die Grenze wird dann mit einem Array von 2D-Koordinaten definiert, die nur die X- und Z-Komponenten angeben, da Y immer 0 ist. Diese Punkte verlaufen im Uhrzeigersinn um den Raum.

Beachten Sie, dass, wenn die zugrunde liegende Plattform einen festen Ursprung und eine Grenze im Raummaßstab definiert, sie möglicherweise alle nicht initialisierten Werte anpasst, um diesen vordefinierten Informationen zu entsprechen; dies ist für Benutzer dieser Plattformen nicht unerwartet.

Der Raum innerhalb der Grenze ist dann der sichere Bewegungsbereich des Benutzers, in dem er verfolgt wird und seine Bewegungen in die virtuelle Welt repliziert werden. Obwohl das XR-System des Benutzers möglicherweise eine automatische Erkennung und Schutz vor dem Verlassen des sicheren Bereichs bietet, ist es immer eine gute Praxis, dies selbst zu handhaben, indem Sie Kollisionen zwischen der Position des Benutzers und der Grenze der Welt beobachten und Anleitungen geben, um zum Ursprungspunkt zurückzukehren oder zumindest im sicheren Bereich zu bleiben.

XR-Hardware, die keine inhärente Grenze definiert hat, unterstützt möglicherweise den begrenzten Referenzraum oder nicht. Wenn dies der Fall ist, hat sie wahrscheinlich ein System, das es dem Benutzer ermöglicht, die anzuwendenden Grenzen festzulegen oder auszuwählen, wenn ein begrenzter Raum verwendet werden soll. Es ist jedoch durchaus möglich, dass das Gerät es ablehnt, begrenzte Räume überhaupt zu unterstützen, daher sollten Sie darauf vorbereitet sein, auf einen anderen Referenzraumtyp zurückzugreifen.

## Grenzen verstehen

Wie bereits erwähnt, wird die Grenze als ein Array von Punkten definiert, die sich auf Bodenhöhe befinden und jeweils eine Ecke des Begrenzungsbereichs definieren und sich im Uhrzeigersinn um den Ursprung bewegen. Dies wird im folgenden Diagramm veranschaulicht.

![Diagramm, das zeigt, wie die Grenze eines begrenzten Raums definiert ist](boundedspace.svg)

Dieses Diagramm definiert die Grenzen eines Raums mit dem Ursprung in der Mitte, wie gefordert, und einem Satz von 12 Punkten, die die Eckpunkte des verfügbaren physischen Raums repräsentieren. Es gibt zwei ausgeschnittene Bereiche im Raum, die möglicherweise eine Couch, ein Sofa oder eine Bank hinter dem Benutzer und einen Stand oder Tisch repräsentieren, auf dem sich der Computer oder andere Hardware befindet. Wie dies andeutet, ist es nicht erforderlich, dass der sichere Bereich konvex ist, er kann beliebige Einkerbungen oder Vorsprünge haben, solange es eine zusammenhängende Form ist.

Beachten Sie, dass die Koordinaten des Ursprungs hier, (0, 0), darauf hinweisen, dass die Grenzen auf Bodenhöhe definiert sind und im Wesentlichen eine 2D-Form auf dem Boden bilden, wie ein unsichtbarer Zaun, der Haustiere davon abhält, vom Zuhause wegzulaufen. Die vollständigen Koordinaten hier wären (0, 0, 0).

Diese Grenze wird in der [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) durch die [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) beibehalten. Diese Eigenschaft enthält ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekten, von denen jedes einen der Punkte definiert, die die Grenze des Raumes bilden und sich im Uhrzeigersinn um den Raum bewegen. Jeder Eckpunkt im Array hat eine `y` Koordinate von 0, da die gesamte Grenze auf Bodenhöhe definiert ist und sich nach oben bis zur Decke oder unendlich erstreckt. `w` jedes Punktes ist ebenfalls immer 1.

Das Innere des begrenzten Bereichs wird immer als auf der _rechten Seite_ der Grenze liegend betrachtet. Durch das Auflisten der Punkte im Uhrzeigersinn wird die Grenze innerhalb der definierten Form platziert. Wenn die Punkte gegen den Uhrzeigersinn aufgeführt würden, würde dies darauf hindeuten, dass der sichere Bereich _außerhalb_ der Grenze liegt, wahrscheinlich mit unerwünschten Ergebnissen.

Sie sollten in Betracht ziehen, proaktive Überprüfungen für das Annähern des Benutzers an die Grenze vorzunehmen. Dies ist sowohl für ihre Sicherheit nützlich (falls die Grenze ein physisches Hindernis irgendeiner Art darstellt) als auch zur Vermeidung möglicher Bedingungen, bei denen die Genauigkeit in der Nähe der Grenzen verringert wird. Es ist auch nützlich, weil der Benutzer möglicherweise so in das Spiel oder eine andere Aktivität vertieft ist, dass er nicht merkt, dass er sich der Grenze nähert, und verwirrt oder gestresst sein könnte, wenn er den Trackingbereich verlässt (insbesondere, wenn dies dazu führt, dass er ein Spiel verliert).

Die einfachste Lösung besteht darin, jedes Grenzsegment so zu behandeln, als wäre es ein Objekt, auf das ein Hit-Test durchgeführt werden soll. Wenn sich der Benutzer der Grenze nähert, könnten Sie ihn warnen, indem Sie eine Nachricht anzeigen, einen Warnhinweis blinken, eine akustische Warnung abspielen oder ähnliches. Und wenn der Benutzer tatsächlich mit der Grenze kollidiert, lassen Sie ihn nicht weiter gehen.

## Erstellen eines begrenzten Referenzraums

Bevor Sie ein Projekt erstellen, das auf begrenzten Referenzräumen basiert, ist es wichtig, daran zu denken, dass nicht alle XR-Geräte in der Lage sind, diese zu erstellen. Begrenzte Referenzräume haben von Natur aus spezielle Hardwareanforderungen, da sie es dem Benutzer ermöglichen müssen, sich physisch im Raum zu bewegen, während ihre Bewegungen verfolgt werden. In diesem Abschnitt werden wir uns ansehen, wie man eine Sitzung sicher erstellt, die funktioniert, egal ob begrenzte Räume unterstützt werden oder nicht.

### Sicheres Erstellen eines bevorzugten begrenzten Raums

Bevor Sie tatsächlich versuchen, einen begrenzten Referenzraum zu erstellen, müssen Sie eine Sitzung erstellen, die diese unterstützt. Da nicht alle Hardware begrenzte Referenzräume unterstützt, sollten Sie sicherstellen, dass Sie begrenzte Referenzräume als Option und nicht als notwendiges Feature unterstützen, es sei denn, Sie haben besonderes Wissen über die Umgebung, in der Ihr Code ausgeführt wird. Sie können eine Sitzung erstellen, die einen `bounded-floor` Referenzraum unterstützt, falls verfügbar, indem Sie Code wie den folgenden verwenden:

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

Diese Funktion, die aufgerufen wird, wenn der Benutzer auf eine Schaltfläche klickt, um die XR-Erfahrung zu starten, funktioniert wie gewohnt und beendet sich sofort, wenn bereits eine Sitzung aktiv ist, und fordert dann im `immersive-vr` Modus eine neue Sitzung an. Die beim Anfordern der Sitzung angegebenen Optionen deuten darauf hin, dass die Sitzung mindestens mit dem `local-floor` Referenzraum kompatibel sein muss, es wäre jedoch schön, wenn auch der `bounded-floor` Raum unterstützt würde.

Sobald die Sitzung erstellt wurde, kann unsere `startSessionAnimation()` Funktion versuchen, einen `bounded-floor` Referenzraum zu schaffen, und falls dies fehlschlägt, kann sie auf die Anforderung eines `local-floor` Referenzraums zurückfallen (in dem wir dann die Grenzen selbst verwalten müssen).

Auf diese Weise wird unsere Sitzung unabhängig davon gestartet, ob die Plattform des Benutzers begrenzte Referenzräume bereitstellen kann oder nicht.

### Erstellen des Referenzraums

Die Unterstützung für `bounded-floor` anzufordern, wenn die [`XRSystem`](/de/docs/Web/API/XRSystem) Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen wird, reicht nicht aus, um einen begrenzten Raum zu erhalten. Sie müssen einen anfordern, wenn Sie auch [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen. Das bedeutet, dass Sie den Code ändern müssen, der `requestReferenceSpace()` aufruft, um einen begrenzten Referenzraum anzufordern. Sollte das fehlschlagen, weichen Sie auf Ihre Ersatzwahl aus, so wie hier:

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

Wenn Sie diesen Code mit dem in Beispielen für unbegrenzte Referenzräume verwendeten Code vergleichen, werden Sie feststellen, dass der größte Unterschied der Referenzraumtyp `bounded-floor` ist.

Der Code beginnt damit, zu versuchen, einen `bounded-floor` Referenzraum zu erstellen, aber falls das fehlschlägt, wird ein `local-floor` Raum angefordert. In beiden Fällen wird der neu erstellte Raum der Funktion `onRefSpaceCreated()` übergeben. Wenn keine der beiden Raumtypen erstellt werden kann, wird ein Fehler-Handler aufgerufen (`handleError()`).

In jedem Fall, sobald ein Referenzraum erstellt wurde, wird er an eine Funktion namens `onRefSpaceCreated()` übergeben, die den Prozess der Einrichtung des Raums für die Verwendung übernimmt.

Es ist jedoch wichtig zu beachten, dass ein `local-floor` Raum zwar einen bodenbezogenen Raum bietet und immer für immersive Sitzungen verfügbar ist, aber erhebliche Unterschiede zu `bounded-floor` aufweist. Daher müssen Sie darauf vorbereitet sein, diese Unterschiede zu handhaben. Aus diesem Grund speichert der obige Codeausschnitt den verwendeten Referenzraumtyp in der Variablen `spaceType`. Der offensichtlichste Unterschied besteht darin, dass `local-floor` Räume keine Grenzen bieten und hauptsächlich in Situationen verwendet werden, in denen der Benutzer während der gesamten Sitzung an einem Ort bleibt.

Wenn bei dem Versuch, einen `local-floor` Referenzraum zu erstellen, das XR-Gerät des Benutzers keine eingebaute Unterstützung für die Bestimmung der Bodenhöhe hat, wird die WebXR-Schicht dennoch einen `local-floor` Raum erstellen. Die Bodenhöhe wird jedoch simuliert, indem sie ausgewählt und emuliert wird und der Blick um einen festen Betrag nach oben verschoben wird, um sicherzustellen, dass die Inhalte der Szene an der richtigen Stelle gerendert werden.

Beachten Sie, dass standardmäßig die Position des Betrachters _unmittelbar_ über dem Boden platziert wird, wie eine Kamera, die auf dem Boden liegt. Wenn Sie die menschliche Perspektive auf die Szene simulieren möchten, sollten Sie den Blickpunkt wahrscheinlich um eine Entfernung nach oben verschieben, die der menschlichen Augenhöhe entspricht, indem Sie ihn mit einer geeigneten Transformationsmatrix versehen, die der [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) zur Verfügung gestellt wird.

Dies würde die Methode `onRefSpaceCreated()` aus dem obigen Snippet ändern zu:

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

In diesem Code, der nach der Erstellung des Referenzraums ausgeführt wird, erstellen wir eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Transformation darstellt, die den Blickpunkt um 1,5 Meter nach oben verschiebt. Dies entspricht der menschlichen Höhe, obwohl angenommen wird, dass wir das Koordinatensystem bereits so transformiert haben, dass der Wert jeder Koordinate nicht mehr auf -1 bis 1 beschränkt ist, während die Definition beibehalten wird, dass ein Wert von 1 einem Meter entspricht.

Die neue Transformation wird an `getOffsetReferenceSpace()` übergeben, um einen Referenzraum zu erhalten, der die Koordinaten zwischen dem Basiskoordinatensystem und dem des gerenderten Bildes abbildet. Der neue Referenzraum ersetzt den ursprünglichen. Schließlich wird durch Aufrufen der [`XRSession`](/de/docs/Web/API/XRSession) Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) mit dem Zeichnen begonnen.

## Siehe auch

- [WebXR Geräte-API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Orientierung und Beweglichkeit](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Unterstützung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
