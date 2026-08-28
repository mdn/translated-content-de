---
title: Verwendung von begrenzten Referenzräumen
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzräumen, die in der WebXR-API-Sammlung verfügbar sind, ist der **`bounded-floor` Referenzraum** etwas einzigartig. Er wird nicht nur durch eine einzigartige Unterklasse, [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), repräsentiert, sondern ist auch der einzige, der die Bewegung nicht durch virtuelle Einschränkungen, sondern durch Beschränkungen der realen Welt limitiert. Dieser Artikel untersucht begrenzte Referenzräume, wie sie durch `XRBoundedReferenceSpace` dargestellt werden, und beschreibt, was sie sind und wie sie verwendet werden.

Es gibt viele Anwendungen für begrenzte Referenzräume, einschließlich Projekten wie virtuellen Malstudios oder 3D-Konstruktions-, Modellierungs- oder Bildhauersystemen; Trainingssimulationen oder Unterrichtsszenarien; Tanz- oder andere auf Performance basierende Spiele; oder die Vorschau von 3D-Objekten in der realen Welt mithilfe von Augmented Reality.

## Einführung

Ein begrenzter Referenzraum ist einer, der eine XR-Umgebung darstellt, in der der Benutzer sich physisch in der realen Welt bewegen kann, während er vom XR-Hardware-Set verfolgt wird, und seine Bewegungen dann in die Simulation übertragen werden. Die Grenzen, die durch den begrenzten Referenzraum festgelegt werden, stellen dann die Ränder des sicheren, begehbaren, verfolgten Raums in der realen Umgebung des Benutzers dar, der für seine Bewegung in der Simulation verfügbar ist.

### Anforderungen

Weil ein begrenzter Referenzraum einen begrenzten Bereich festlegt, in dem sich der Benutzer bewegen kann, beschränkt er logisch, wie groß die simulierte Umgebung sein kann. Es ist schwierig (und wahrscheinlich ziemlich verwirrend), eine virtuelle Welt zu erschaffen, die größer ist als der physische Raum, der dem Benutzer zur Verfügung steht, wenn Sie seine Bewegungen in der realen Welt in die virtuelle Umgebung übertragen. Stellen Sie sich vor, wie unangenehm es wäre, wenn man jedes Mal 100 Meter bewegte, wenn man einen Schritt macht!

Die Anforderungen für einen begrenzten Referenzraum sind dann:

- XR-Hardware, die die Bewegung des Benutzers in der realen Welt verfolgen kann, wie ein kamerabasiertes System.
- Ein physischer Raum mit genügend Platz, um sich sicher zu bewegen.

### Grundlagen

Der Referenzraumtyp aller begrenzten Referenzräume ist `bounded-floor`. Dies ist der derzeit einzige verfügbare Typ von begrenztem Referenzraum; bei allen anderen müssen Sie die Grenzen selbst verwalten, wenn Sie sie benötigen.

Weil `bounded-floor` ein bodenbezogener Referenzraum ist, beginnt der Benutzer auf dem Boden des Raumes, was angesichts der realen Auswirkungen sonst sinnvoll ist. Daher befindet sich der Ursprung des begrenzten Referenzraums immer auf der Y=0-Ebene auf Bodenhöhe. Die Grenze wird dann unter Verwendung eines Arrays von 2D-Koordinaten definiert, das nur die X- und Z-Komponenten angibt, da Y immer 0 ist. Diese Punkte verlaufen im Uhrzeigersinn um den Raum herum.

Beachten Sie, dass, wenn die zugrunde liegende Plattform einen festen Raumskalierungsursprung und eine Grenze definiert, sie möglicherweise nicht initialisierte Werte so initialisiert, dass sie diese vordefinierten Informationen widerspiegeln; dies ist für Benutzer dieser Plattformen kein unerwartetes Verhalten.

Der Raum innerhalb der Grenze ist dann der sichere Bewegungsbereich des Benutzers, in dem er verfolgt wird und seine Bewegungen in die virtuelle Welt repliziert werden. Obwohl das XR-System des Benutzers möglicherweise eine automatische Erkennung und Schutz gegen das Verlassen des sicheren Bereichs bietet, ist es immer eine gute Praxis, dies selbst zu handhaben, indem man Kollisionen zwischen der Position des Benutzers und der Grenze der Welt überwacht und Anleitungen gibt, um zum Ursprungspunkt zurückzukehren oder zumindest im sicheren Bereich zu bleiben.

XR-Hardware, die keine inhärente Grenze definiert hat, kann den begrenzten Referenzraum unterstützen oder auch nicht. Wenn dies der Fall ist, hat sie wahrscheinlich ein System, mit dem der Benutzer die anzuwendenden Grenzen spezifizieren oder auswählen kann, wenn ein begrenzter Raum verwendet werden soll. Es ist jedoch durchaus möglich, dass das Gerät die Unterstützung begrenzter Räume vollständig ablehnt, daher sollten Sie darauf vorbereitet sein, auf einen anderen Referenzraumtyp zurückzugreifen.

## Grenzen verstehen

Wie zuvor erwähnt, wird die Grenze als ein Array von Punkten auf Bodenhöhe definiert, die jede Ecke des Grenzbereichs definieren und sich im Uhrzeigersinn um den Ursprung drehen. Dies ist im folgenden Diagramm veranschaulicht.

![Diagramm, das zeigt, wie die Grenze eines begrenzten Raums definiert wird](boundedspace.svg)

Dieses Diagramm definiert die Grenzen eines Raumes mit dem Ursprung in der Mitte, wie erforderlich, und einer Reihe von 12 Punkten, die die Eckpunkte des verfügbaren physischen Raums darstellen. Es gibt zwei ausgestanzte Bereiche im Raum, die möglicherweise ein Sofa, eine Couch oder eine Bank hinter dem Benutzer und einen Ständer oder Tisch darstellen, auf dem der Computer oder andere Hardware platziert ist. Wie dies andeutet, muss der sichere Bereich nicht konvex sein, darf jedoch beliebig viele Einbuchtungen oder Vorsprünge haben, solange er eine zusammenhängende Form bildet.

Beachten Sie, dass die Koordinaten des Ursprungs hier, (0, 0), darauf hinweisen, dass die Grenzen auf Bodenhöhe definiert sind und im Grunde eine 2D-Form auf dem Boden darstellen, wie ein unsichtbarer Zaun, der verwendet wird, um zu verhindern, dass Haustiere von zu Hause wegkommen. Die vollständigen Koordinaten hier wären (0, 0, 0).

Diese Grenze wird im [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) in der [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) verwaltet. Diese Eigenschaft enthält ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekten, von denen jedes einen der Punkte definiert, die die Grenze des Raumes ausmachen, und im Uhrzeigersinn um den Raum herum verlaufen. Jeder Scheitelpunkt im Array hat eine `y`-Koordinate von 0, da die gesamte Grenze auf Bodenhöhe definiert ist und sich nach oben zur Decke oder unbegrenzt erstreckt. Jedem Punkt entspricht immer ein `w`-Wert von 1.

Das Innere des begrenzten Bereichs wird immer als rechte Seite der Grenze betrachtet. Indem man die Punkte im Uhrzeigersinn auflistet, wird die Grenze innerhalb der definierten Form platziert. Werden die Punkte in umgekehrter Richtung aufgelistet, würde dies andeuten, dass sich der sichere Bereich außerhalb der Grenze befindet, vermutlich mit unerwünschten Ergebnissen.

Es sollte erwogen werden, proaktiv Prüfkriterien einzuschließen, um dem Benutzer nahe zu sein, wenn er sich der Grenze nähert. Dies ist sowohl für seine Sicherheit nützlich (falls die Grenze ein physisches Hindernis jeglicher Art darstellt) als auch, um mögliche Bedingungen zu vermeiden, bei denen die Genauigkeit in der Nähe der Grenzen verringert wird. Es ist auch nützlich, weil der Benutzer möglicherweise in das Spiel oder eine andere Aktivität vertieft ist, nicht merkt, dass er sich der Grenze nähert, und verwirrt oder besorgt sein könnte, wenn er aus dem Verfolgungsbereich austritt (besonders wenn dadurch das Spiel verloren geht).

Die einfachste Lösung besteht darin, jedes Grenzsegment so zu behandeln, als wäre es ein Objekt, mit dem ein Kollusionstest durchgeführt werden kann. Wenn der Benutzer der Grenze nahekommt, könnten Sie ihn warnen, indem Sie eine Nachricht anzeigen, einen Warnindikator blinken lassen, einen akustischen Alarm abspielen oder ähnliches. Und wenn der Benutzer tatsächlich mit der Grenze kollidiert, lassen Sie ihn nicht weitergehen.

## Erstellen eines begrenzten Referenzraums

Bevor Sie ein Projekt erstellen, das auf begrenzten Referenzräumen beruht, ist es wichtig zu beachten, dass nicht alle XR-Geräte in der Lage sind, sie zu erstellen. Aufgrund ihrer Natur erfordern begrenzte Referenzräume spezielle Hardwareanforderungen, da sie es dem Benutzer ermöglichen müssen, sich physisch im Raum zu bewegen, während seine Bewegungen verfolgt werden. In diesem Abschnitt werden wir uns anschauen, wie man sicher eine Sitzung erstellt, die unabhängig davon funktioniert, ob begrenzte Räume unterstützt werden oder nicht.

### Sicheres Erstellen eines bevorzugten begrenzten Raums

Bevor Sie tatsächlich versuchen, einen begrenzten Referenzraum zu erstellen, müssen Sie eine Sitzung erstellen, die sie unterstützt. Da nicht alle Hardware begrenzte Referenzräume unterstützt, sollten Sie sicherstellen, dass begrenzte Referenzräume als Option und nicht als erforderliches Merkmal unterstützt werden, es sei denn, Sie haben spezielles Wissen über die Umgebung, in der Ihr Code ausgeführt wird. Sie können eine Sitzung erstellen, die einen `bounded-floor` Referenzraum unterstützt, wenn er verfügbar ist, indem Sie einen Code wie den folgenden verwenden:

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

Diese Funktion, die aufgerufen wird, wenn der Benutzer auf einen Button klickt, um das XR-Erlebnis zu starten, funktioniert wie gewohnt und wird sofort beendet, wenn bereits eine Sitzung vorhanden ist. Dann wird eine neue Sitzung im `immersive-vr`-Modus angefordert. Die beim Anfordern der Sitzung angegebenen Optionen geben an, dass die Sitzung mindestens kompatibel mit dem `local-floor`-Referenzraum sein muss, es jedoch wünschenswert wäre, wenn der `bounded-floor`-Raum ebenfalls unterstützt würde.

Sobald die Sitzung erstellt wurde, kann unsere `startSessionAnimation()`-Funktion versuchen, einen `bounded-floor`-Referenzraum zu etablieren. Falls dies fehlschlägt, können wir dann zurückgreifen, um einen `local-floor`-Referenzraum zu beantragen (in dem wir die Grenzen selbst verwalten müssen).

Auf diese Weise startet unsere Sitzung, unabhängig davon, ob die Plattform des Benutzers in der Lage ist, begrenzte Referenzräume bereitzustellen oder nicht.

### Erstellen des Referenzraums

Das Anfordern der Unterstützung für `bounded-floor`, wenn die [`XRSystem`](/de/docs/Web/API/XRSystem) Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) aufgerufen wird, reicht nicht aus, um einen begrenzten Raum zu erhalten. Sie müssen auch darum bitten, wenn Sie [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen. Das bedeutet, dass Sie den Code ändern müssen, der `requestReferenceSpace()` aufruft, um einen begrenzten Referenzraum anzufordern, und falls dies fehlschlägt, auf Ihre Ersatzwahl zurückgreifen, etwa so:

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

Wenn Sie diesen Code mit dem in Beispielen verwendeten Code für unbegrenzte Referenzräume vergleichen, stellen Sie fest, dass tatsächlich der größte Unterschied der Referenzraumtyp `bounded-floor` ist.

Der Code beginnt damit, zu versuchen, einen `bounded-floor`-Referenzraum zu erhalten, versucht dann, falls dies fehlschlägt, einen `local-floor`-Raum zu erhalten. In beiden Fällen wird der neu erstellte Raum in die Funktion `onRefSpaceCreated()` übergeben, falls ein Referenzraum erfolgreich erstellt wird. Falls keiner der Raumtypen erstellt werden kann, wird ein Fehlerhandler aufgerufen (`handleError()`).

In jedem Fall, sobald ein Referenzraum erstellt wurde, wird er an eine Funktion namens `onRefSpaceCreated()` übergeben, die die Einrichtung des Raumes für die Verwendung übernimmt.

Es ist jedoch wichtig zu beachten, dass während ein `local-floor`-Raum einen bodenrelativen Raum bietet und immer für immersive Sitzungen verfügbar ist, er auch signifikante Unterschiede zum `bounded-floor` hat, daher müssen Sie darauf vorbereitet sein, diese Unterschiede zu handhaben. Aus diesem Grund zeichnet der obige Code-Schnipsel den verwendeten Referenzraum in der Variablen `spaceType` auf. Der offensichtlichste Unterschied ist, dass `local-floor`-Räume keine Grenzen bieten und hauptsächlich in Situationen gedacht sind, in denen der Benutzer während der gesamten Dauer der Sitzung an einem Ort bleibt.

Wenn beim Versuch, einen `local-floor`-Referenzraum zu erstellen, das XR-Gerät des Benutzers keine eingebaute Unterstützung zur Bestimmung der Bodenhöhe hat, wird die WebXR-Ebene dennoch einen `local-floor`-Raum erstellen. Der Bodenpegel wird jedoch simuliert, indem er ausgewählt und emuliert wird und die Ansicht um einen festen Betrag nach oben verschoben wird, um sicherzustellen, dass der Inhalt der Szene an der richtigen Stelle gerendert wird.

Beachten Sie, dass standardmäßig die Position des Betrachters _sofort_ über dem Boden platziert wird, wie eine auf dem Boden liegende Kamera. Wenn Sie die Perspektive eines Menschen auf die Szene simulieren möchten, möchten Sie wahrscheinlich den Blickpunkt um eine Distanz nach oben verschieben, die Menschenaugenhöhe annähernd darstellt, indem Sie sie transformieren, indem Sie eine geeignete Transformationsmatrix an die [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) übergeben.

Dies würde die `onRefSpaceCreated()`-Methode aus dem obigen Code-Schnipsel ändern zu:

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

In diesem Code, der nach der Erstellung des Referenzraums ausgeführt wird, erstellen wir eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Transformation darstellt, die den Blickpunkt um 1,5 Meter nach oben verschieben wird. Dies approximiert die menschliche Höhe, obwohl es annimmt, dass wir das Koordinatensystem zuvor so transformiert haben, dass der Wert jeder Koordinate nicht mehr auf -1 bis 1 beschränkt ist, während die Definition beibehält, dass ein Wert von 1 einen Meter darstellt.

Die neue Transformation wird in `getOffsetReferenceSpace()` übergeben, um einen Referenzraum zu erhalten, der die Koordinaten zwischen dem Basiskoordinatensystem und dem des gerenderten Bildes abbildet. Der neue Referenzraum ersetzt den ursprünglichen. Schließlich beginnt die Zeichnung durch den Aufruf der [`XRSession`](/de/docs/Web/API/XRSession) Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
