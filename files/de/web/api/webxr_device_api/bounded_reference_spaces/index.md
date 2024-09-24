---
title: Verwendung von eingeschränkten Referenzbereichen
slug: Web/API/WebXR_Device_API/Bounded_reference_spaces
l10n:
  sourceCommit: 4a7f3948e907b117fa2ea190fc6795642c49d624
---

{{DefaultAPISidebar("WebXR Device API")}}

Unter den verschiedenen Referenzbereichen, die in der WebXR-API-Sammlung verfügbar sind, ist der **`bounded-floor` Referenzbereich** etwas einzigartig. Er wird nicht nur durch eine einzigartige Unterklasse, {{domxref("XRBoundedReferenceSpace")}}, dargestellt, sondern ist auch der einzige, der Bewegungen nicht durch virtuelle Einschränkungen, sondern durch die vom realen Raum auferlegten Limitierungen beschränkt. Dieser Artikel untersucht eingeschränkte Referenzbereiche, wie sie durch `XRBoundedReferenceSpace` dargestellt werden, beschreibt, was sie sind und wie sie verwendet werden.

Es gibt viele Anwendungsfälle für eingeschränkte Referenzbereiche, einschließlich Projekte wie virtuelle Malstudios oder 3D-Konstruktion, Modellierungs- oder Bildhauersysteme; Training Simulationen oder Unterrichtsszenarien; Tanz- oder andere auf Auftritten basierende Spiele; oder die Vorschau von 3D-Objekten in der realen Welt mit erweiterter Realität.

## Einführung

Ein eingeschränkter Referenzbereich ist ein XR-Umfeld, in dem sich der Benutzer physisch in der realen Welt bewegen und vom XR-Hardware verfolgt werden kann, wobei seine Bewegungen dann in die Simulation übertragen werden. Die vom eingeschränkten Referenzbereich festgelegten Grenzen stellen somit die Ränder des sicher passierbaren, verfolgten Bereichs in der realen Umgebung des Benutzers dar, die für seine Bewegung in der Simulation zur Verfügung stehen.

### Anforderungen

Da ein eingeschränkter Referenzbereich einen begrenzten Bereich festlegt, in dem sich der Benutzer bewegen kann, wird damit automatisch eine Grenze festgelegt, wie groß das simulierte Umfeld sein kann. Es ist schwierig (und wahrscheinlich ziemlich verwirrend), eine virtuelle Welt zu erstellen, die größer ist als der physisch dem Benutzer zur Verfügung stehende Raum, wenn Sie dessen reale Bewegungen in die virtuelle Umgebung abbilden. Stellen Sie sich vor, wie unangenehm es sich anfühlen würde, wenn Sie bei jedem Schritt 100 Meter vorwärts gehen würden!

Die Anforderungen für einen eingeschränkten Referenzbereich sind also:

- XR-Hardware, die die Bewegung des Benutzers in der realen Welt verfolgen kann, wie z.B. ein kamerabasiertes System.
- Ein physischer Raum mit genügend Platz, um sich sicher bewegen zu können.

### Grundlagen

Der Referenzbereichstyp aller eingeschränkten Referenzräume ist `bounded-floor`. Dies ist der einzige derzeit verfügbare Typ von eingeschränktem Referenzraum; in allen anderen Fällen müssen Sie die Begrenzungen selbst verwalten, wenn Sie welche benötigen.

Da `bounded-floor` ein bodengebundener Referenzbereich ist, beginnt der Benutzer auf dem Boden des Bereichs, was angesichts der realen Implikationen sinnvoll ist. Daher platziert der Ursprung des eingeschränkten Referenzbereichs immer die Y=0-Ebene auf Bodenhöhe. Die Grenze wird dann mit einem Array von 2D-Koordinaten definiert, das nur die X- und Z-Komponenten angibt, da Y immer 0 ist. Diese Punkte gehen im Uhrzeigersinn durch den Raum.

Beachten Sie, dass, wenn die zugrunde liegende Plattform einen festen Raumskalierungs-Ursprung und eine Grenze definiert, sie alle nicht initialisierten Werte so initialisieren kann, dass sie diesen vorgegebenen Informationen entsprechen; dieses Verhalten ist für Benutzer dieser Plattformen nicht unerwartet.

Der Bereich innerhalb der Grenze ist dann der sichere Bewegungsbereich des Benutzers, innerhalb dessen er verfolgt wird und seine Bewegungen in die virtuelle Welt übertragen werden. Auch wenn das XR-System des Benutzers automatische Erkennung und Schutz gegen das Verlassen des sicheren Bereichs bieten kann, ist es immer gute Praxis, dies selbst zu handhaben, indem Sie Kollisionen zwischen der Benutzerposition und der Grenze der Welt überwachen und Anleitungen geben, um den Nutzer zurück zum Ursprungspunkt oder zumindest im sicheren Bereich zu halten.

XR-Hardware, die keine inhärente Grenze definiert hat, kann möglicherweise nicht den eingeschränkten Referenzbereich unterstützen. Wenn doch, hat sie wahrscheinlich ein System, mit dem der Benutzer die anzuwendenden Grenzen angeben oder auswählen kann, falls ein eingeschränkter Bereich verwendet werden soll. Es ist jedoch durchaus möglich, dass das Gerät die Unterstützung von eingeschränkten Bereichen vollständig ablehnt, daher sollten Sie darauf vorbereitet sein, auf einen anderen Referenzbereichstyp zurückzufallen.

## Verständnis der Grenzen

Wie bereits erwähnt, wird die Grenze als ein Array von Punkten auf Bodenhöhe definiert, die jeweils eine Ecke des Begrenzungsbereichs darstellen und im Uhrzeigersinn um den Ursprung verlaufen. Dies wird im folgenden Diagramm veranschaulicht.

![Diagramm, das zeigt, wie die Grenze eines eingeschränkten Raumes definiert ist](boundedspace.svg)

Dieses Diagramm definiert die Grenzen eines Raumes mit dem Ursprung in der Mitte, wie erforderlich, und einem Satz von 12 Punkten, die die Ecken des verfügbaren physischen Raumes darstellen. Es gibt zwei ausgesparte Bereiche im Raum, möglicherweise stellt einer ein Sofa oder eine Bank hinter dem Benutzer dar und eines einen Stand oder Tisch, auf dem der Computer oder andere Hardware stehen. Dies deutet darauf hin, dass der sichere Bereich nicht konvex sein muss, sondern beliebig viele Einbuchtungen oder Auskragungen besitzen kann, solange er eine zusammenhängende Form ist.

Beachten Sie, dass die Koordinaten des Ursprungs hier (0, 0) die Tatsache anzeigen, dass die Grenzen auf Bodenhöhe definiert sind und im Grunde eine 2D-Form auf dem Boden darstellen, ähnlich einem unsichtbaren Zaun, der verwendet wird, um Haustiere daran zu hindern, von zu Hause wegzulaufen. Die vollständigen Koordinaten hier wären (0, 0, 0).

Diese Grenze wird in der {{domxref("XRBoundedReferenceSpace")}} im {{domxref("XRBoundedReferenceSpace")}}-Eigenschaft {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} beibehalten. Diese Eigenschaft enthält ein Array von {{domxref("DOMPointReadOnly")}}-Objekten, die jeweils einen der Punkte definieren, die die Umrandung des Raumes bilden und im Uhrzeigersinn herum angeordnet sind. Jeder Scheitelpunkt im Array hat eine `y`-Koordinate von 0, da die gesamte Grenze auf Bodenhöhe definiert ist und sich nach oben bis zur Decke oder unbegrenzt erstreckt. Auch jeder Punkt hat immer ein `w` von 1.

Das Innere des begrenzten Bereichs wird immer als die _rechte Seite_ der Grenze betrachtet. Durch das Auflisten der Punkte im Uhrzeigersinn wird die Grenze innerhalb der definierten Form platziert. Wenn die Punkte gegen den Uhrzeigersinn aufgelistet wären, würde dies darauf hindeuten, dass der sichere Bereich _außerhalb_ der Grenze liegt, was wahrscheinlich zu unerwünschten Ergebnissen führen würde.

Sie sollten in Betracht ziehen, proaktive Überprüfungen einzubauen, um den Benutzer bei Annäherung an die Grenze zu informieren. Dies ist nützlich sowohl für deren Sicherheit (falls die Grenze ein physisches Hindernis jeglicher Art darstellt) als auch, um mögliche Bedingungen zu vermeiden, in denen die Genauigkeit in der Nähe der Grenzen reduziert ist. Es ist auch nützlich, da der Benutzer möglicherweise in das Spiel oder eine andere Aktivität vertieft ist, nicht bemerkt, dass er sich der Grenze nähert, und verwirrt oder verängstigt werden könnte, wenn er den Verfolgungsbereich verlässt (besonders wenn dies dazu führt, dass er ein Spiel verliert).

Die einfachste Lösung ist es, jeden Grenzabschnitt so zu behandeln, als wäre er ein Objekt, gegen das getestet werden kann. Wenn der Benutzer sich der Grenze nähert, könnten Sie ihn warnen, indem Sie eine Nachricht anzeigen, einen Warnindikator aufblinken lassen, eine Audio-Warnung abspielen oder Ähnliches. Und wenn der Benutzer tatsächlich mit der Grenze kollidiert, lassen Sie ihn nicht darüber hinausgehen.

## Erstellen eines eingeschränkten Referenzbereichs

Bevor Sie ein Projekt erstellen, das auf eingeschränkten Referenzbereichen beruht, ist es wichtig sich daran zu erinnern, dass nicht alle XR-Geräte in der Lage sind, sie zu erstellen. Aufgrund ihrer Natur haben eingeschränkte Referenzräume spezielle Hardwareanforderungen, da sie es dem Benutzer ermöglichen müssen, sich physisch im Raum zu bewegen, während ihre Bewegungen verfolgt werden. In diesem Abschnitt schauen wir uns an, wie man eine Sitzung sicher erstellen kann, die funktioniert, unabhängig davon, ob eingeschränkte Bereiche unterstützt werden oder nicht.

### Sicheres Erstellen eines bevorzugt eingeschränkten Bereichs

Bevor Sie überhaupt versuchen, einen eingeschränkten Referenzbereich zu erstellen, müssen Sie eine Sitzung erstellen, die diese unterstützt. Da nicht alle Hardware eingeschränkte Referenzbereiche unterstützt, sollten Sie sicherstellen, dass eingeschränkte Referenzbereiche als Option unterstützt werden, und nicht als notwendiges Feature, es sei denn, Sie haben spezielles Wissen über die Umgebung, in der Ihr Code ausgeführt wird. Sie können eine Sitzung erstellen, die einen `bounded-floor` Referenzbereich unterstützt, falls verfügbar, indem Sie einen Code wie den folgenden verwenden:

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

Diese Funktion, die aufgerufen wird, wenn der Benutzer auf eine Schaltfläche klickt, um die XR-Erfahrung zu starten, arbeitet wie gewohnt, beendet sich sofort, wenn bereits eine Sitzung vorhanden ist, und fordert dann eine neue Sitzung im Modus `immersive-vr` an. Die beim Anfordern der Sitzung angegebenen Optionen geben an, dass die Sitzung mindestens mit dem `local-floor` Referenzbereich kompatibel sein muss, es wäre jedoch schön, wenn der `bounded-floor` Bereich ebenfalls unterstützt werden könnte.

Sobald die Sitzung erstellt wurde, kann unsere `startSessionAnimation()`-Funktion versuchen, einen `bounded-floor`-Referenzbereich zu etablieren, und wenn dies nicht gelingt, kann sie stattdessen auf einen `local-floor`-Referenzbereich zurückgreifen (in dem wir die Grenzen dann selbst verwalten müssen).

Auf diese Weise wird unsere Sitzung unabhängig davon starten, ob die Plattform des Benutzers in der Lage ist, eingeschränkte Referenzbereiche bereitzustellen oder nicht.

### Erstellen des Referenzbereichs

Die Anforderung der Unterstützung für `bounded-floor` beim Aufruf der {{domxref("XRSystem")}} Methode {{domxref("XRSystem.requestSession", "requestSession()")}} ist nicht ausreichend, um einen eingeschränkten Bereich zu erhalten. Sie müssen beim Aufruf von {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} ebenfalls einen solchen anfordern. Das bedeutet, dass Sie den Code, der `requestReferenceSpace()` aufruft, ändern müssen, um einen eingeschränkten Referenzbereich anzufordern und dann bei einem Misserfolg auf Ihre Ersatzwahl zurückzugreifen, wie folgt:

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

  // Matrizen jetzt einrichten, einen sekundären Referenzbereich erstellen, um die Pose des Betrachters zu transformieren, usw.

  xrSession.requestAnimationFrame(onDrawFrame);
}
```

Wenn Sie diesen Code mit dem in Beispielen mit unbeschränkten Referenzbereichen verwendeten Code vergleichen, werden Sie feststellen, dass der größte Unterschied tatsächlich der Referenzbereichstyp `bounded-floor` ist.

Der Code beginnt damit, zu versuchen, einen `bounded-floor`-Referenzbereich zu erhalten, aber wenn dies fehlschlägt, wird ein `local-floor`-Bereich angefordert. In beiden Fällen wird der neue Raum bei Erfolg in die Funktion `onRefSpaceCreated()` übergeben. Wenn kein Typ erstellt werden kann, wird ein Fehlerbehandler aufgerufen (`handleError()`).

Sobald ein Referenzbereich erstellt wurde, wird er in die Funktion `onRefSpaceCreated()` übergeben, die den Prozess der Einrichtung des Bereichs zur Nutzung übernimmt.

Es ist jedoch wichtig zu beachten, dass, während ein `local-floor`-Bereich einen bodenbezogenen Raum bietet und für immersive Sitzungen immer verfügbar ist, er auch erhebliche Unterschiede zu `bounded-floor` hat, daher müssen Sie bereit sein, diese Unterschiede zu handhaben. Aus diesem Grund zeichnet der obige Codeausschnitt den verwendeten Referenzbereich in der Variable `spaceType` auf. Der offensichtlichste Unterschied ist, dass `local-floor`-Bereiche keine Grenzen bieten und hauptsächlich in Situationen verwendet werden sollen, in denen der Benutzer während der gesamten Sitzung an einem Ort bleibt.

Wenn bei dem Versuch, einen `local-floor`-Referenzbereich zu erstellen, das XR-Gerät des Benutzers keine integrierte Unterstützung zur Bestimmung der Bodenhöhe hat, wird die WebXR-Schicht dennoch einen `local-floor`-Bereich erstellen. Die Bodenhöhe wird jedoch simuliert, indem die Bodenhöhe ausgewählt und emuliert wird und die Sicht um einen festen Betrag nach oben verschoben wird, um sicherzustellen, dass die Inhalte der Szene korrekt gerendert werden.

Denken Sie daran, dass standardmäßig die Position des Betrachters _unmittelbar_ über dem Boden platziert ist, wie eine Kamera, die auf dem Boden liegt. Wenn Sie den menschlichen Blickwinkel auf die Szene simulieren möchten, müssen Sie den Standpunkt wahrscheinlich um eine Distanz nach oben bewegen, die dem menschlichen Augenmaß ähnelt, indem Sie eine entsprechende Transformationsmatrix an die {{domxref("XRReferenceSpace")}}-Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} übergeben.

Dies würde die Methode `onRefSpaceCreated()` aus dem obigen Ausschnitt ändern zu:

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

In diesem Code, der nach der Erstellung des Referenzbereichs ausgeführt wird, erstellen wir einen {{domxref("XRRigidTransform")}}, der die Transformation darstellt, die den Standpunkt um 1,5 Meter nach oben bewegen wird. Dies nähert die menschliche Höhe an, obwohl es davon ausgeht, dass wir das Koordinatensystem zuvor transformiert haben, sodass der Wert jeder Koordinate nicht mehr auf -1 bis 1 begrenzt ist, während die Definition beibehalten wird, dass ein Wert von 1 einen Meter darstellt.

Die neue Transformation wird in `getOffsetReferenceSpace()` übergeben, um einen Referenzbereich zu erhalten, der die Koordinaten zwischen dem Basiskoordinatensystem und dem des gerenderten Bildes abbildet. Der neue Referenzraum ersetzt den originalen. Schließlich beginnt das Zeichnen durch Aufruf der {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Geometrie und Referenzbereiche](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Bewegung, Orientierung und Motion](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Unterstützung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
