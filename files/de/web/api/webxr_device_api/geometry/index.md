---
title: Geometrie und Referenzräume in WebXR
slug: Web/API/WebXR_Device_API/Geometry
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Auf einer grundlegenden Ebene wird das Rendern von Szenen für die [WebXR](/de/docs/Web/API/WebXR_Device_API)-Präsentation in entweder Augmented-Reality- oder Virtual-Reality-Kontexten unter Verwendung von [WebGL](/de/docs/Web/API/WebGL_API) durchgeführt, sodass die beiden APIs viele der gleichen Designsprachen teilen. Um jedoch die Möglichkeit zu bieten, Szenen in echtem 3D mit XR-Headsets und anderer solcher Ausrüstung zu präsentieren, hat WebXR zusätzliche Konzepte, die verstanden werden müssen.

In diesem Artikel stellen wir die Arten vor, in denen WebXR die Geometrie von WebGL erweitert und wie die Positionen und Ausrichtungen von Objekten—sowohl physisch als auch virtuell—in Beziehung zueinander beschrieben werden, indem Räume und insbesondere Referenzräume verwendet werden.

Der Artikel [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) baut auf den hier bereitgestellten Informationen auf, um zu erläutern, wie die physische Position und Orientierung des Kopfes des Benutzers sowie möglicherweise anderer Körperteile wie der Hände in die digitale Welt abgebildet werden und wie die relativen Positionen sowohl physischer als auch virtueller Objekte verfolgt werden, wenn sie sich bewegen, sodass die Szene korrekt gerendert und zusammengesetzt werden kann.

## Grundlagen der 3D-Geometrie

Während wir hier die erforderlichen mathematischen Operationen untersuchen, die verwendet werden, um die Positionen, Ausrichtungen und Bewegungen von Objekten im virtuellen Raum sowie die Notwendigkeit, den menschlichen Betrachter der Szene zu integrieren, zu berechnen, liegt eine gründliche Einführung in die Geometrie und die Verwendung von Matrizen und Vektoren zur Verwaltung von 3D-Darstellungen einer Szene weit außerhalb des Rahmens dessen, was in diesem Artikel erreicht werden kann. Sie können mehr über die einzelnen Operationen in [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) lernen.

### Einheiten

Bevor wir die Details der Geometrie des 3D-Raums, den WebXR verwendet, diskutieren, ist es zunächst hilfreich, die Maßeinheiten zu verstehen, die auf die 3D-Welt angewendet werden.

#### Längen und Distanzen

WebGL misst alle Distanzen und Längen in **Metern**. WebXR übernimmt diesen Standard sowie die Tatsache, dass die Welt ein Würfel ist, der zwei Meter breit, zwei Meter hoch und zwei Meter tief ist. Jede der drei Achsen hat einen Mindestwert von -1.0 und einen Höchstwert von 1.0, wobei das Zentrum des Würfels sich bei (0, 0, 0) befindet.

![Diagramm, das einen WebXR-Raum zeigt, dessen X-, Y- und Z-Koordinatenachsen jeweils einen Mindestwert von -1 und einen Höchstwert von 1 haben.](defaultspacedimensions.svg)

Dieser Raum von acht Kubikmetern umfasst das gesamte Universum für die Zwecke Ihres Codes. Alles, was Sie zeichnen, muss mit seinen Koordinaten so abgebildet werden, dass es in diesen Raum passt, entweder explizit in Ihrem Code oder indem Sie eine Transformation verwenden, um die Koordinaten aller Scheitelpunkte anzupassen. Der effizienteste Weg besteht natürlich darin, Ihre Objekte und Ihren Code so zu entwerfen, dass sie dasselbe Koordinatensystem verwenden wie WebGL.

Die WebGL-Koordinaten und -Längen werden beim Rendern automatisch auf die Größe des Viewports transformiert, in dem die Szene gerendert wird.

#### Winkel

Winkel werden in **[Radiant] <https://de.wikipedia.org/wiki/Radiant) angegeben. Um Grad in Radianten umzurechnen, multiplizieren Sie den Wert in Grad mit `π/180`. Der folgende Code-Schnipsel zeigt zwei einfache Funktionen, `degreesToRadians()` und `radiansToDegrees()`, die zwischen den beiden Einheiten zur Messung von Winkeln hin- und herrechnen.

```js
const RADIANS_PER_DEGREE = Math.PI / 180.0;

let degreesToRadians = (deg) => deg * RADIANS_PER_DEGREE;
let radiansToDegrees = (rad) => rad / RADIANS_PER_DEGREE;
```

#### Zeiten und Dauern

> [!NOTE]
> Aus Sicherheitsgründen führt `DOMHighResTimeStamp` normalerweise eine kleine Ungenauigkeit in die Uhr ein, um zu verhindern, dass sie für [Fingerprinting](/de/docs/Glossary/Fingerprinting) und zeitbasierte Angriffe verwendet wird.

Alle Zeiten und Dauern in WebXR werden mithilfe des Typs {{domxref("DOMHighResTimeStamp")}} gemessen, der ein doppelt genaues Gleitkommawert ist, der die Zeit in Millisekunden relativ zur Startzeit angibt. Da der Wert eine Gleitkommazahl ist, kann er, abhängig von der Plattform und der Hardware, unter Umständen besser als Millisekundengenauigkeit erreichen.

Zeit wird hauptsächlich verwendet, um die Zeit zu bestimmen, die seit dem vorherigen Animationsframe der Szene vergangen ist. Daher ist die Zeit normalerweise mit der Bildwiederholrate des Displays synchronisiert, oder einem Bruchteil davon, falls die Frame-Rate aus Leistungsgründen eingeschränkt werden muss. Dies bedeutet, dass die Zeit normalerweise in Intervallen von 1/60 Sekunde springt, bei einer Annahme von 60 FPS. Dies ergibt also, dass jeder Frame idealerweise 16.6667 Millisekunden auseinander gerendert wird.

### Geometrieoperationen mit Matrizen

Wir bieten einen [Leitfaden zur Matrizenmathematik in Bezug auf 3D-Geometrie](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web), einschließlich der Verwendung von Matrizen für die drei primären Umwandlungen, die beim Rendern von 3D-Szenen durchgeführt werden müssen:

- **[Translation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#translation_matrix)** ist die Verwendung einer Matrix, um die Position eines Punkts durch den virtuellen Raum zu verschieben. Diese Bewegung kann entlang einer der Objektachsen oder einer Kombination davon erfolgen.
- **[Rotation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#rotation_matrix)** ist die Anwendung einer Matrix, die einen Punkt um den Ursprung des Koordinatensystems des Objekts dreht.
- **[Scaling](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#scale_matrix)** ist die Verwendung einer Matrix, um die Größe eines Objekts zu verändern.

Beachten Sie, dass, wenn wir sagen, dass eine Transformation auf einen Punkt angewendet wird, dieser auch auf eine _Sammlung_ von Punkten angewendet werden kann. Da ein Objekt durch eine Anzahl von Polygonen dargestellt wird, die durch eine Anzahl von Punkten im Raum gebildet werden, kann die gleiche Transformation, die auf jeden Punkt angewendet wird, der das Objekt ausmacht, auch auf das gesamte Objekt insgesamt angewendet werden. Transformationen können auch auf Vektoren angewendet werden, da Vektoren durch einen Koordinatenwert beschrieben werden, der die Richtung und den Betrag des Vektors definiert.

## Über die Ursprünge von Räumen

Eine vollständige XR-erweiterte Szene—ob virtuell oder augmentiert—ist eine Zusammensetzung von einem bis potenziell Dutzenden von Bezugsrahmen. Jedes Objekt innerhalb der Szene, das direkt Positions- und Ausrichtungsdaten mit dem WebXR-System austauschen muss, muss in der Lage sein, diese Informationen auf eine Weise zu melden, die verständlich ist und bei Bedarf angepasst werden kann, um von anderen Objekten innerhalb der Szene verständlich zu sein.

In Augmented Reality (AR) ist dies aufgrund der Notwendigkeit, virtuelle Objekte in die reale Welt einzufügen, nicht nur richtig zu platzieren, sondern auch sicherzustellen, dass sie nicht scheinbar von selbst umherwandern, wenn sich der Blickwinkel des Benutzers ändert. In virtueller Realität (VR) geht es darum, ein Gefühl des Raums zu schaffen, in dem die Bewegungen des Benutzers präzise mit den auf dem virtuellen Display angezeigten Bildern übereinstimmen, um Unstimmigkeiten und Diskrepanzen zu vermeiden, die Unbehagen oder Schlimmeres verursachen könnten.

Es dreht sich also alles um das Schaffen eines Raumgefühls. Aus der Sicht eines XR-Entwicklers ist das Entwerfen der Bühne der Teil, der Ihren Benutzern am meisten bedeutet. Wie ein Architekt oder Bühnenbildner haben Sie die Möglichkeit, Stimmungen und Erfahrungen durch eine physische Umgebung zu schaffen. Wie Sie diesen Raum gestalten, hängt von und beeinflusst, wie Benutzer damit interagieren und ihn erkunden können.

> [!NOTE]
> Ein Raum hat typischerweise Elemente im Vordergrund, Mittelgrund und Hintergrund. Das richtige Gleichgewicht kann eine einzigartige Präsenz erschaffen und Ihre Benutzer leiten. Der Vordergrund umfasst Objekte und Schnittstellen, mit denen Sie direkt interagieren können. Der Mittelgrund umfasst Objekte, mit denen Sie in gewissem Maße interagieren können, oder die Sie näher betrachten und untersuchen können. Der Hintergrund hingegen ist in der Regel weitgehend oder vollständig nicht interaktiv, es sei denn, der Benutzer ist in der Lage, sich ihm zu nähern, indem er ihn in den Mittelgrund oder Vordergrundbereich bringt.

In WebXR wird das grundlegende Konzept eines **Raumes**—als einem Koordinatenraum, in dem eine Szene stattfindet—durch eine Instanz von {{domxref("XRSpace")}} dargestellt. Der Raum wird verwendet, um relative Positionen und Bewegungen von Objekten und anderen Entitäten (wie Lichtquellen und Kameras) innerhalb der Umgebung des Benutzers zu ermitteln.

Wie bereits erwähnt besteht ein gegebener 3D-Punkt aus drei Komponenten, die jeweils die Entfernung vom Zentrum des Raums entlang einer der drei Achsen identifizieren.

Dies ist der **native Ursprung** des Raums, der einem bestimmten physischen Ort in der Umgebung des Benutzers entspricht. Jeder Raum hat seinen eigenen nativen Ursprung, der vom Trackingsystem des XR-Geräts verfolgt wird. Dies kann sich vom **effektiven Ursprung** unterscheiden, dem Ursprungspunkt des lokalen Koordinatensystems des Raumes.

Die Direktionalität des Koordinatensystems kann im folgenden Diagramm gesehen werden:

![Diagramm, das das von WebGL und WebXR verwendete Koordinatensystem zeigt.](webgl_coordinates.svg)

Ein {{domxref("XRRigidTransform")}}, genannt der **Ursprungsausgleich**, wird verwendet, um Punkte vom effektiven Koordinatensystem des Raumes in das native Koordinatensystem des XR-Geräts zu transformieren. Der Ursprungsausgleich ist anfangs eine Identitätstransformation, da typischerweise die beiden Ursprünge ausgerichtet sind, wenn der Raum erstmals erstellt wird. Im Laufe der Zeit kann sich der Ursprungsausgleich ändern, um aufgelaufene Abstimmungsschiefe auszugleichen.

Die Position eines Punktes im Raum relativ zum Ursprung wird bestimmt, indem seine Entfernung entlang jeder der drei räumlichen Achsen im obigen Diagramm ermittelt wird. Der Ursprung des Raums ist der Punkt (0, 0, 0), im Zentrum des Raums und an der Nullposition entlang jeder Achse. Konkret unter den anfänglichen Startbedingungen mit der Standardorientierung des Betrachters im Raum:

- Die **x-Achse** erstreckt sich horizontal von links nach rechts vom Ursprung weg, wobei die _x_-Koordinate von +1,0 sich am rechten Rand der Welt befindet. Negative Werte von _x_ erstrecken sich vom Ursprung nach links und erreichen einen Wert von -1,0 am linken Rand des Raumes.
- Die **y-Achse** ist nach oben vom Ursprung aus zur Oberseite des Bildschirms positiv, wobei sie +1,0 an der Spitze des Welt-Raumes erreicht. Werte von _y_, die kleiner als 0 sind, befinden sich unterhalb des Ursprungs und erstrecken sich zur Unterseite des Bildschirms und erreichen -1,0 am unteren Rand des Welt-Raumes.
- Die **z-Achse** erstreckt sich vom Ursprung aus vom Bildschirm heraus und erreicht +1,0 am nächstgelegenen Punkt zum Benutzer in dieser Richtung. Negative Werte von _z_ erstrecken sich vom Benutzer weiter in den Bildschirm hinein, wobei der am weitesten entfernte Punkt in der Welt einen _z_-Wert von -1,0 hat.

Jedes Objekt ist auf die einfachste Weise eine Sammlung von Polygonen, die durch Punkte im 3D-Raum definiert sind und eine Offset-Transformation, die angibt, wie das Objekt bewegt und gedreht werden soll, um es an den gewünschten Punkt im Raum zu positionieren. Wenn die Offset-Transformation eine Einheitsmatrix ist, befindet sich das Objekt am Ursprungspunkt.

Um jedoch für die räumliche Verfolgung und Szenengeometrie nützlich zu sein, müssen Sie die wahrgenommene Position des XR-Geräts mit dem Koordinatensystem des Raums korrelieren. Hier kommen Referenzräume ins Spiel.

## Referenzräume

Aufgrund der Vielfalt der verfügbaren XR-Hardware in einer Vielzahl von Formfaktoren von vielen Entwicklern ist es unpraktisch und nicht skalierbar, von Entwicklern zu erwarten, direkt mit der verwendeten Tracking-Technologie zu kommunizieren. Stattdessen ist die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) so gestaltet, dass Entwickler die Erlebnisse ihrer Benutzer planen und einen geeigneten Referenzraum anfordern, der diese Anforderungen am besten repräsentiert. Dies geschieht, indem der {{Glossary("user agent")}} nach einem **{{domxref("XRReferenceSpace")}}** gefragt wird, der den Anforderungen entspricht.

Ein `XRReferenceSpace`-Objekt fungiert als Mittel, um einen Koordinatensystem-Referenzrahmen auf einen anderen abzustimmen. Nachdem Sie ein Headset aufgesetzt haben, betrachten Sie die virtuelle Welt um Sie herum als ein Koordinatensystem, in dem Ihre Position (0, 0, 0) ist—das heißt, Sie befinden sich im Zentrum von allem. Fühlt sich das nicht mächtig an? Vorne, direkt vor Ihrem Headset, liegt die -Z-Achse, mit +Z hinter Ihnen. X ist rechts positiv und links negativ. Y ist negativ, wenn Sie nach unten gehen und positiv, wenn Sie aufwärts gehen. Dies zeigt die Position des Headsets im Raum zu Beginn Ihrer Nutzung des XR-Systems an, wobei der Ursprung (0, 0, 0) im Grunde auf der Brücke Ihrer Nase positioniert ist. Dieser Raum ist der **Weltraum**.

Betrachten Sie als Nächstes den XR-Controller, den Sie in Ihrer linken Hand haben. Er kann Bewegung und Orientierung melden, kennt jedoch nichts von der Position des Headsets oder, noch wichtiger, dessen Koordinatensystem. Aber der Controller benötigt trotzdem eine Möglichkeit, seine Position an Ihre App zu melden. Er hat also sein eigenes Koordinatensystem. Dies ist ein Referenzraum, der Ihrer App zur Verfügung gestellt wird, wenn Eingabeereignisse auftreten. Dieser Referenzraum weiß intern, wie die Koordinaten des Controllers auf die des Headsets abgebildet werden, sodass WebXR die Koordinaten für Sie hin und her übersetzen kann.

Sobald erstellt, garantiert ein `XRReferenceSpace` ein bestimmtes Maß an Unterstützung für Bewegungs- und Orientierungstracking und bietet einen Mechanismus zum Abrufen einer {{domxref("XRViewerPose")}}, aus der Sie eine Matrix erhalten können, die die Position und Blickrichtung des Raumes relativ zum Weltraum darstellt, falls der Raum einen Betrachter wie das Headset des Benutzers, das Headset eines Beobachters oder eine virtuelle Kamera repräsentiert.

All dies ist die Verantwortung des Browsers, für ein konsistentes Verhalten zu sorgen, unabhängig davon, wie leistungsfähig die einzelnen zugrunde liegenden Referenzräume sind. Unabhängig davon, wie leistungsstark oder einfach das individuelle XR-Gerät ist, funktioniert der mit WebXR geschriebene Code dennoch, innerhalb der Einschränkungen der verfügbaren Hardware.

Unabhängig davon, welche Art von Referenzraum Sie wählen, ist sein Typ {{domxref("XRReferenceSpace")}} oder ein Typ, der von `XRReferenceSpace` abgeleitet ist. Die derzeit verfügbaren Referenzraumtypen sind unten aufgeführt.

- `bounded-floor`
  - : Ein {{domxref("XRBoundedReferenceSpace")}} ähnlich dem Typ `local`, außer dass der Benutzer nicht erwartet wird, sich über eine vorbestimmte Grenze hinaus zu bewegen, die durch die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} im zurückgegebenen Objekt gegeben ist.
- `local`
  - : Ein {{domxref("XRReferenceSpace")}}-Tracking-Raum, dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Benutzer wird nicht erwartet, sich über seine Startposition hinaus zu bewegen, und das Tracking ist für diesen Anwendungsfall optimiert. Bei Geräten mit sechs Freiheitsgraden (6DoF)-Tracking versucht der `local`-Referenzraum, den Ursprung stabil relativ zur Umgebung zu halten.
- `local-floor`
  - : Ein {{domxref("XRReferenceSpace")}} ähnlich dem Typ `local`, außer dass die Startposition an einen sicheren Ort für den Betrachter gesetzt wird, an dem der Wert der y-Achse bei Bodenhöhe 0 ist. Wenn diese Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user agent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe nicht null ist, wird der Browser erwartet, sie so zu runden, dass Fingerprinting vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein {{domxref("XRReferenceSpace")}}-Tracking-Raum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem weite Distanzen von seinem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass sich der native Ursprung nach Bedarf verschieben kann, um diesem Bedürfnis gerecht zu werden.
- `viewer`
  - : Ein {{domxref("XRReferenceSpace")}}-Tracking-Raum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von {{domxref("XRSession")}} unterstützt, sowohl immersiv als auch inline, obwohl es am nützlichsten für inline-Sitzungen ist. Es ist besonders nützlich, um die Entfernung zwischen dem Betrachter und einer Eingabe zu bestimmen oder bei der Arbeit mit versetzten Räumen. Ansonsten wird typischerweise eine der anderen Referenzraumtypen öfter verwendet.

Der Rest dieses Leitfadens untersucht, wie Sie den richtigen Referenzraum für die Bedürfnisse Ihrer App auswählen.

## Definieren von räumlichen Beziehungen mit Referenzräumen

Es gibt eine Anzahl von gebräuchlichen Methoden, um die Positionen und Ausrichtungen von Objekten relativ zu ihrer Umgebung zu referenzieren sowie die Umgebung selbst einzuschränken. Zu diesem Zweck definiert WebXR eine Reihe von Standardräumen, den sogenannten **Referenzräumen**, von denen jeder eine andere Technik zur Korrelation seines lokalen Raum-Referenzrahmen-Koordinatensystems mit dem Koordinatensystem des Raumes, in dem er existiert, unterstützt.

Unabhängig davon, welche Art von Referenzraum verwendet wird, können Sie dieselben Funktionen verwenden, um Koordinaten vom Raum in den übergeordneten Raum zu konvertieren.

### Auswahl des Referenzraumtyps

Zunächst einmal lassen Sie uns den einfachsten Schritt im Prozess der Entscheidung, welchen Referenztyp zu verwenden betonen: die Referenzräume, die Sie am wahrscheinlichsten verwenden werden, sind `local`, `local-floor`, `unbounded`, oder `bounded-floor`.

#### Bodenlevel-Referenzräume

Die Referenzraumtypen mit `-floor` in ihren Namen funktionieren genau wie die entsprechenden Nicht-Bodenräume, außer dass sie versuchen, automatisch sicherzustellen, dass der Betrachter an oder nahe am (aber immer über dem) Bodenniveau positioniert ist. Dies ist die Ebene, bei der die `y`-Koordinate immer 0 ist, es sei denn, ein Boden wird anderweitig festgestellt. Diese Raumtypen sind _nicht_ tragfähig, wenn die Räume unebene Böden oder Böden haben, deren Höhe über dem Bodenniveau variiert, da sie die vertikale Position des Avatars nicht ändern unterstützen.

#### Die primären Referenzraumtypen

Der `viewer`-Referenzraum entspricht der Position des Betrachters im Raum; er wird durch die von der {{domxref("XRFrame")}}-Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} zurückgegebene {{domxref("XRViewerPose")}} verwendet. Er wird normalerweise nicht direkt anderweitig verwendet. Die einzige echte Ausnahme besteht darin, dass Sie wahrscheinlich den `viewer`-Referenzraum verwenden, wenn Sie die XR-Szene inline innerhalb von Web-Inhalten ausführen.

Der `local`-Referenzraum wird typischerweise verwendet, um einen relativ kleinen Bereich zu beschreiben, wie zum Beispiel einen einzigen Raum. Er ist nicht nur immer verfügbar, wenn eine immersive Sitzungsmodus (`immersive-vr` oder `immersive-ar`) verwendet wird, sondern ist immer unter den optionalen Funktionen beim Anfordern einer neuen Sitzung enthalten; daher unterstützt jede von {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}} erstellte Sitzung den `local`-Referenzraumtyp.

Um einen großen Bereich darzustellen—potenziell über mehrere Räume hinaus—können Sie den `unbounded`-Referenzraumtyp verwenden, der keine Einschränkungen bezüglich der Bewegung des Betrachters enthält. Wenn Sie verhindern wollen, dass der Benutzer in bestimmte Bereiche geht, müssen Sie dies selbst handhaben.

Der `bounded-floor`-Referenzraumtyp hat keinen entsprechenden Typ, der nicht bodengebunden ist. Wenn die XR-Hardware des Benutzers es ihnen erlaubt, sich im realen Raum zu bewegen, und es Ihnen möglich ist, könnte es nützlich sein, einen `bounded-floor`-Referenzraum zu verwenden, der es Ihnen erlaubt, speziell die Grenzen des Bereichs zu definieren, in dem Bewegung erlaubt und sicher ist. Siehe den Artikel [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces), um mehr über die Verwendung begrenzter Referenzräume zu lernen.

Durch die Verwendung eines Referenzraums zur Beschreibung der Position und Ausrichtung von Objekten ist WebXR in der Lage, die Form der Daten, die Sie zur Beschreibung dieser Dinge verwenden, zu standardisieren, unabhängig von der zugrunde liegenden XR-Hardware. Die Konfiguration des Referenzraums kann Ihnen dann die Anzeigematrizen und Objektposen liefern, die benötigt werden, um den Inhalt des Raumes korrekt zu rendern.

### Etablieren des Referenzraums

Der oberste Raum—der, der durch den Aufruf der {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} erhalten wird—beschreibt das Koordinatensystem, das für den Gesamtweltraum verwendet wird. Alles ist grundsätzlich an dieses Koordinatensystem gebunden, das die Beziehung zwischen der Position der Ausrüstung des Benutzers und der virtuellen Welt repräsentiert.

Während Sie WebXR für alles verwenden können, von der Ergänzung der Welt mit Anmerkungen über 360°-Video-Wiedergabe bis hin zu wissenschaftlichen Simulationen zu virtuellen Realitätsschulungssystemen oder allem, was Sie sich vorstellen können, verwenden Sie als Beispiel eine 3D Videospiel, das eine typische WebXR-Anwendung darstellt. Betrachten Sie das Modell eines Avatar-Spielers, der im Raum der Spielwelt steht. Sie positionieren diesen Avatar relativ zum Welt-Raum unter Verwendung des durch den Weltraumsreferenzraum definierten Koordinatensystems.

Um den Spieler an eine neue Position zu bewegen, könnten Sie alle seine Koordinaten umschreiben oder jedes Mal eine Transformation manuell anwenden, wenn er sich bewegt, aber es gibt einen einfacheren Weg, dank der Referenzräume und ihrer Fähigkeit, relativ zueinander erstellt zu werden. Erstellen Sie ein {{domxref("XRRigidTransform")}}-Objekt, das die neue Position und die neue Ausrichtung des Spieleravatars darstellt, und dann erstellen Sie einen neuen Referenzraum, um den Blickwinkel des Avatars an der neuen Position unter Verwendung der {{domxref("XRReferenceSpace")}}-Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} zu repräsentieren. Dies ist besonders nützlich, wenn Sie Unterstützung für die Verwendung von Nicht-XR-Geräten wie Tastaturen oder Mäusen implementieren, um den Avatar des Spielers durch die Welt zu bewegen.

{{EmbedYouTube("nVSlQkSSQeQ")}}

Mit dem neu erstellten Referenzraum kann der Avatar an denselben Koordinaten bleiben und dennoch in der Welt an (und die Welt aus der Perspektive) seiner neuen Position gesehen werden. Für einen detaillierteren Blick darauf, wie Referenzräume verwendet werden, um den Blickwinkel des Spielers zu verwalten, sehen Sie sich den Artikel

Im Fall unseres Spiel-Avatar-Beispiels ist es selten, dass ein Avatar (oder ein anderes sich bewegendes Lebewesen oder Fahrzeug) ein einfacher Punkt ist, der sich in der Welt bewegt. Sie haben normalerweise zusätzlich Form sowie interne Bewegung, wie sich bewegende Beine, Arme, die beim Gehen schwingen, ein Kopf, der sich dreht oder wackelt, Waffen, die sich bewegen usw. Bringen Sie diese mit Standard-WebGL-Techniken und einer Positionierungsmatrix oder {{domxref("XRRigidTransform")}}, um die Objekte zur richtigen Position relativ zum effektiven Ursprung zu verschieben, zum Leben.

### Gerätebeschränkungen auf Referenzräume

Einige XR-Geräte können nicht dazu gebracht werden, ein gegebenes Erlebnis zu unterstützen, trotz der Bemühungen der API, alle fehlenden Fähigkeiten zu kompensieren. Beispielsweise gibt es keine Möglichkeit, ein einfaches Headset wie ein GearVR-Gerät dazu zu bringen, in einer App zu funktionieren, die Unterstützung für das Gehen des Benutzers in der Umgebung erfordert, indem ihre realen Bewegungen verfolgt werden.

Um progressive Verbesserung zu unterstützen—und somit die Verfügbarkeit Ihrer App oder Website zu erweitern—sollten Sie einen Referenzraum wählen, der die geringstmögliche Funktionalität bietet, oder einen Fallback-Mechanismus bereitstellen, der gescheiterte Versuche erkennt, Referenzräume zu erhalten, und es erneut mit einer weniger leistungsfähigen Alternative versucht.

Die Kompatibilitätsprobleme, die auftreten können, können so grundlegend sein wie die Unfähigkeit, den `immersive-ar`-Modus (Augmented Reality-Sitzungen) auf einem reinen VR-Headset zu unterstützen, oder können eine Anforderung für eine oder mehrere erforderliche Optionen beinhalten, die nicht erfüllt werden können, wenn versucht wird, die XR-Sitzung zu erstellen.

XR-Sitzungen werden mit der {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}}-Methode erstellt. Einer ihrer optionalen Parameter ist ein Objekt, mit dem Sie erforderliche und/oder optionale Funktionen festlegen können, die die Sitzung bieten muss (oder idealerweise bieten sollte). Derzeit sind die einzigen unterstützten Optionen Zeichenfolgen, die die standardmäßig festgelegten Referenzräume identifizieren. Mit diesen können Sie sicherstellen, dass Sie vor dem Ausführen Ihres Codes Zugriff auf eine WebXR-Sitzung haben, die den von Ihnen gewünschten oder bevorzugten Referenzraumtyp unterstützen kann.

> [!NOTE]
> Derzeit ist der Referenzraum, der verwendet oder bevorzugt werden soll, die einzige Option beim Erstellen einer {{domxref("XRSession")}}. In der Zukunft ist es wahrscheinlich, dass mehr Optionen verfügbar werden.

## Positionierung und Ausrichtung von Objekten

Alle räumlichen (Position, Orientierung und Bewegung) Informationen, die zwischen Ihrer App und der WebXR-API ausgetauscht werden, werden in Bezug auf einen bestimmten Raum zum Zeitpunkt des Renderns des Frames ausgedrückt. Jegliche weitere Positionierungs- und Orientierungsverwaltung liegt zwischen Ihnen und WebGL, obwohl Sie die Ursprungskompensation aus dem Referenzraum verwenden, um die Objekte korrekt in der 3D-Welt zu positionieren.

Wenn es an der Zeit ist, einen Animationsframe zu rendern, wird die Callback-Funktion aufgerufen, die Sie angegeben haben, als Sie die {{domxref("XRSession")}}-Objektmethode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} der WebXR-Sitzung aufgerufen haben. Der Callback erhält als einen seiner Parameter einen Zeitstempel, der die Zeit anzeigt, zu der der Frame stattfindet, und sollte alle Renderingvorgänge für den entsprechenden Animationsframe durchführen.

Da der Callback wiederholt mit zunehmenden Zeitwerten aufgerufen wird, erzeugt der Callback eine Abfolge von Frames, die mit der XR-Hardware angezeigt werden und dadurch eine 3D-Szene für den Benutzer zeigen.

Sie können mehr über den Animationsprozess im Artikel [Rendern und der WebXR Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering) erfahren.

Für ein Beispiel und eine detailliertere, Code-Ebene-Erklärung, wie Objekte im virtuellen Raum positioniert, ausgerichtet und bewegt werden, siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebGL: 2D und 3D-Rendern für das Web](/de/docs/Web/API/WebGL_API)
- [Matrixmath für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
