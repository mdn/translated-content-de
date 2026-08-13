---
title: Verwendung von eingeschränkten Referenzräumen
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: b0c7bd01a20fba0ae693d8e009f0c8b839da8fa6
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzräumen, die in den WebXR APIs verfügbar sind, ist der **`bounded-floor` Referenzraum** etwas einzigartig. Er wird nicht nur durch eine einzigartige Unterklasse, [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), dargestellt, sondern ist auch der einzige, der die Bewegung nicht auf Basis virtueller Einschränkungen, sondern durch Beschränkungen der realen Welt einschränkt. Dieser Artikel untersucht eingeschränkte Referenzräume, wie sie durch `XRBoundedReferenceSpace` dargestellt werden, und beschreibt, was sie sind und wie sie verwendet werden.

Es gibt viele Anwendungsfälle für eingeschränkte Referenzräume, darunter Projekte wie virtuelle Maltudios oder 3D-Konstruktions-, Modellierungs- oder Bildhauersysteme; Schulungssimulationen oder Unterrichtsszenarien; Tanz- oder andere performancebasierte Spiele; oder die Vorschau von 3D-Objekten in der realen Welt durch erweiterte Realität.

## Einführung

Ein eingeschränkter Referenzraum ist einer, der eine XR-Umgebung darstellt, in der der Benutzer sich physisch in der realen Welt bewegen kann, während er von der XR-Hardware verfolgt wird, sodass seine Bewegungen in die Simulation überführt werden. Die durch den eingeschränkten Referenzraum festgelegten Grenzen stellen dann die Ränder des sicher begehbaren, verfolgten Raums in der realen Umgebung des Benutzers dar, die für ihre Bewegung in der Simulation verfügbar sind.

### Anforderungen

Da ein eingeschränkter Referenzraum ein begrenztes Gebiet festlegt, in dem sich der Benutzer bewegen kann, schränkt er naturgemäß ein, wie groß die simulierte Umgebung sein kann. Es ist schwierig (und wahrscheinlich ziemlich verwirrend), eine virtuelle Welt zu schaffen, die größer ist als der physisch verfügbare Raum des Benutzers, wenn Sie deren reale Bewegung in die virtuelle Umgebung übertragen. Man stelle sich vor, wie unangenehm es wäre, wenn man bei jedem Schritt 100 Meter zurücklegt!

Die Anforderungen für einen eingeschränkten Referenzraum sind daher:

- XR-Hardware, die die Bewegung des Benutzers in der realen Welt verfolgen kann, wie ein kamerabasiertes System.
- Ein physischer Raum mit genügend Spielraum, um sich sicher zu bewegen.

### Grundlagen

Der Referenzraumtyp aller eingeschränkten Referenzräume ist `bounded-floor`. Dies ist der einzige Typ von eingeschränkten Referenzräumen, der derzeit verfügbar ist; in allen anderen Fällen müssen Sie die Grenzen selbst verwalten.

Da `bounded-floor` ein bodengebundener Referenzraum ist, beginnt der Benutzer auf dem Boden des Raumes, was angesichts der realen Implikationen sinnvoll ist. Daher platziert der Ursprung des eingeschränkten Referenzraums immer die Y=0-Ebene auf Bodenhöhe. Die Grenze wird dann mit einem Array von 2D-Koordinaten definiert, wobei nur die X- und Z-Komponenten spezifiziert werden, da Y immer 0 ist. Diese Punkte verlaufen im Uhrzeigersinn um den Raum herum.

Beachten Sie, dass die zugrunde liegende Plattform einen festen raumgebundenen Ursprung und eine Grenze definieren kann und möglicherweise nicht initialisierte Werte an diese vordefinierten Informationen anpasst; dies ist für Benutzer dieser Plattformen nicht unerwartetes Verhalten.

Der Raum innerhalb der Grenze ist dann der sichere Bewegungsbereich des Benutzers, innerhalb dessen er verfolgt wird und seine Bewegungen in die virtuelle Welt übertragen werden. Obwohl das XR-System des Benutzers automatisierte Erkennung und Schutz gegen das Verlassen des sicheren Bereichs bieten kann, ist es immer eine gute Praxis, dies selbst zu handhaben, Kollisionen zwischen der Position des Benutzers und der Grenze der Welt zu überwachen und Anleitungen zu bieten, um zum Ursprungspunkt zurückzukehren oder zumindest im sicheren Bereich zu bleiben.

XR-Hardware, die keine inhärente Begrenzung definiert hat, unterstützt möglicherweise den eingeschränkten Referenzraum oder auch nicht. Wenn sie dies tut, verfügt sie wahrscheinlich über ein System, das dem Benutzer ermöglicht, die zu verwendenden Grenzen festzulegen oder auszuwählen, wenn ein eingeschränkter Raum genutzt werden soll. Es ist jedoch durchaus möglich, dass das Gerät es ablehnt, eingeschränkte Räume überhaupt zu unterstützen, sodass Sie darauf vorbereitet sein sollten, auf einen anderen Referenzraumtyp zurückzufallen.

## Verständnis der Grenzen

Wie bereits erwähnt, wird die Grenze als ein Array von Punkten auf Bodenhöhe definiert, wobei jeder Punkt eine Ecke des Grenzbereichs darstellt, die den Ursprung im Uhrzeigersinn umgeben. Dies wird im folgenden Diagramm veranschaulicht.

![Diagramm, das zeigt, wie die Grenze eines eingeschränkten Raums definiert ist](boundedspace.svg)

Dieses Diagramm definiert die Grenzen eines Raums mit dem Ursprung in der Mitte und einem Satz von 12 Punkten, die die Eckpunkte des verfügbaren physischen Raums darstellen. Es gibt zwei ausgeschnittene Bereiche im Raum, möglicherweise repräsentierend ein Sofa, eine Couch oder eine Bank hinter dem Benutzer und einen Stand oder Tisch, auf dem der Computer oder andere Hardware platziert sind. Dies deutet darauf hin, dass der sichere Bereich nicht konvex sein muss, sondern beliebig viele Einbuchtungen oder Ausstülpungen aufweisen kann, solange er eine zusammenhängende Form darstellt.

Beachten Sie, dass die Koordinaten des Ursprungs hier, (0, 0), darauf hinweisen, dass die Grenzen auf Bodenhöhe definiert sind und im Wesentlichen eine 2D-Form auf dem Boden darstellen, wie ein unsichtbarer Zaun, der Haustiere daran hindert, von zu Hause wegzulaufen. Die vollständigen Koordinaten hier wären (0, 0, 0).

Diese Grenze wird im [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) in der [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Eigenschaft [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) aufrechterhalten. Diese Eigenschaft enthält ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, von denen jedes einen der Punkte definiert, die die Grenze des Raums bilden, im Uhrzeigersinn um den Raum herum. Jeder Scheitelpunkt im Array hat eine `y`-Koordinate von 0, da die gesamte Grenze auf Bodenhöhe definiert ist und sich nach oben bis zur Decke oder unbegrenzt erstreckt. Außerdem ist `w` für jeden Punkt immer 1.

Das Innere des begrenzten Bereichs wird immer als die _rechte Seite_ der Grenze angesehen. Indem die Punkte in Uhrzeigersinn aufgeführt werden, wird die Grenze innerhalb der definierten Form platziert. Wenn die Punkte gegen den Uhrzeigersinn aufgeführt werden, würde dies darauf hindeuten, dass der sichere Bereich _außerhalb_ der Grenze liegt, was wahrscheinlich unerwünschte Ergebnisse zur Folge hätte.

Es sollte überlegt werden, proaktive Überprüfungen des Herannahens des Benutzers an die Grenze aufzunehmen. Dies ist sowohl für seine Sicherheit nützlich (falls die Grenze ein physisches Hindernis irgendeiner Art darstellt) als auch um mögliche Bedingungen zu vermeiden, bei denen die Genauigkeit in der Nähe der Grenzen reduziert wird. Es ist auch nützlich, weil der Nutzer möglicherweise so stark in das Spiel oder eine andere Aktivität vertieft ist, dass er nicht merkt, dass er sich der Grenze nähert und verwirrt oder verunsichert werden könnte, wenn er das Verfolgungsgebiet verlässt (insbesondere wenn dies dazu führt, dass er ein Spiel verliert).

Die einfachste Lösung besteht darin, jedes Grenzsegment so zu behandeln, als wäre es ein Objekt, gegen das getestet werden muss. Wenn sich der Benutzer der Grenze nähert, kann eine Warnung angezeigt werden, indem eine Nachricht angezeigt, ein Warnindikator aufleuchtet, ein akustisches Warnsignal abgespielt oder Ähnliches gemacht wird. Und wenn der Benutzer tatsächlich mit der Grenze kollidiert, sollte er nicht darüber hinaus fortfahren dürfen.

## Erstellung eines eingeschränkten Referenzraums

Bevor ein Projekt erstellt wird, das auf eingeschränkte Referenzräume angewiesen ist, muss bedacht werden, dass nicht alle XR-Geräte in der Lage sind, solche zu erstellen. Aufgrund ihrer Natur haben eingeschränkte Referenzräume spezielle Hardwareanforderungen, da sie es dem Benutzer ermöglichen müssen, sich physisch im Raum zu bewegen, während ihre Bewegungen verfolgt werden. In diesem Abschnitt betrachten wir, wie man sicher eine Sitzung erstellt, die funktioniert, unabhängig davon, ob eingeschränkte Räume unterstützt werden oder nicht.

### Sicheres Erstellen eines eingeschränkten bevorzugten Raums

Bevor tatsächlich versucht wird, einen eingeschränkten Referenzraum zu erstellen, muss eine Sitzung erstellt werden, die diese unterstützt. Da nicht alle Hardware eingeschränkte Referenzräume unterstützt, sollte sicherstellt werden, dass die Unterstützung eingeschränkter Referenzräume als Option und nicht als erforderliches Merkmal vorgesehen wird, es sei denn, es gibt spezielles Wissen über die Umgebung, in der Ihr Code ausgeführt wird. Eine Sitzung kann erstellt werden, die einen `bounded-floor` Referenzraum unterstützt, falls verfügbar, mit einem Code wie dem folgenden:

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

Diese Funktion, die aufgerufen wird, wenn der Benutzer auf einen Knopf klickt, um die XR-Erfahrung zu starten, funktioniert wie gewohnt, wobei sie sofort beendet wird, wenn bereits eine Sitzung aktiv ist, und dann eine neue Sitzung im `immersive-vr` Modus anfordert. Die beim Anfordern der Sitzung angegebenen Optionen geben an, dass die Sitzung zumindest mit dem `local-floor` Referenzraum kompatibel sein muss, es aber wünschenswert wäre, wenn der `bounded-floor` Raum ebenfalls unterstützt würde.

Sobald die Sitzung erstellt wurde, kann unsere Funktion `startSessionAnimation()` versuchen, einen `bounded-floor` Referenzraum zu etablieren, und falls dies nicht gelingt, kann sie dann versuchen, stattdessen einen `local-floor` Referenzraum anzufordern (in dem wir die Grenzen selbst verwalten müssen).

Auf diese Weise wird unsere Sitzung unabhängig davon gestartet, ob die Plattform des Nutzers eingeschränkte Referenzräume bereitstellen kann oder nicht.

### Erstellen des Referenzraums

Das Anfordern der Unterstützung für `bounded-floor` beim Aufruf der [`XRSystem`](/de/docs/Web/API/XRSystem)-Methode [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) reicht nicht aus, um einen begrenzten Raum zu erhalten. Es muss auch angefordert werden, wenn Sie [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) aufrufen. Das bedeutet, dass der Code, der `requestReferenceSpace()` aufruft, geändert werden muss, um einen eingeschränkten Referenzraum zu beantragen, und wenn das fehlschlägt, um auf die Sicherungsoption zurückzufallen, wie hier:

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

Wenn Sie diesen Code mit dem in Beispielen für unbegrenzte Referenzräume verwendeten Code vergleichen, bestätigen Sie, dass der größte Unterschied der Referenzraumtyp `bounded-floor` ist.

Der Code beginnt damit, einen `bounded-floor` Referenzraum anzufordern, aber wenn das fehlschlägt, fordert er einen `local-floor` Raum an. In beiden Fällen wird bei erfolgreicher Erreichung eines Referenzraums der neue Raum an die Funktion `onRefSpaceCreated()` übergeben. Wenn keine der beiden Raumtypen erstellt werden kann, wird eine Fehlerbehandlungsroutine (`handleError()`) aufgerufen.

In beiden Fällen, sobald ein Referenzraum erstellt wurde, wird er an eine Funktion namens `onRefSpaceCreated()` übergeben, die den Prozess des Einrichtens des Raums zur Nutzung übernimmt.

Es ist jedoch wichtig, zu bedenken, dass während ein `local-floor` Raum einen bodenrelativen Raum bietet und für immersive Sitzungen immer verfügbar ist, er auch erhebliche Unterschiede zu `bounded-floor` aufweist. Deshalb zeichnet der obige Codeausschnitt den verwendeten Referenzraum im Variable `spaceType` auf. Der offensichtlichste Unterschied ist, dass `local-floor` Räume keine Grenzen bieten und hauptsächlich in Situationen genutzt werden sollen, in denen der Benutzer für die Dauer der Sitzung an einem Ort bleibt.

Wenn beim Versuch, einen `local-floor` Raum zu erstellen, das XR-Gerät des Benutzers keine eingebaute Unterstützung zur Bestimmung der Bodenniveau hat, erstellt die WebXR Ebene dennoch einen `local-floor` Raum. Das Bodenniveau wird jedoch simuliert, indem das Bodenniveau ausgewählt und emuliert und das Bild um einen festen Betrag nach oben verschoben wird, um sicherzustellen, dass die Inhalte der Szenerie an der richtigen Stelle gerendert werden.

Beachten Sie, dass standardmäßig die Position des Betrachters _unmittelbar_ über dem Boden platziert wird, wie eine Kamera, die auf dem Boden liegt. Wenn Sie eine menschliche Perspektive auf die Szene simulieren möchten, sollten Sie den Blickpunkt um eine Distanz anheben, die der menschlichen Augenhöhe entspricht, indem Sie eine entsprechende Transformationsmatrix an die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) der [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) übergeben.

Dies würde die `onRefSpaceCreated()` Methode aus dem obigen Codeausschnitt in folgendes ändern:

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

In diesem Code, der ausgeführt wird, nachdem der Referenzraum erstellt wurde, erstellen wir eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die die Transformation darstellt, die den Blickpunkt um 1,5 Meter anhebt. Dies entspricht ungefähr der menschlichen Höhe, obwohl davon ausgegangen wird, dass das Koordinatensystem bereits so transformiert wurde, dass der Wert jeder Koordinate nicht mehr auf -1 bis 1 beschränkt ist, während die Definition beibehalten wird, dass ein Wert von 1 einem Meter entspricht).

Die neue Transformation wird an `getOffsetReferenceSpace()` übergeben, um einen Referenzraum zu erhalten, der die Koordinaten zwischen dem Basiskoordinatensystem und dem des gerenderten Bildes abbildet. Der neue Referenzraum ersetzt den ursprünglichen. Schließlich beginnt das Zeichnen durch einen Aufruf der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
