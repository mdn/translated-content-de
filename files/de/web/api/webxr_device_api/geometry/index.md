---
title: Geometrie und Referenzräume in WebXR
slug: Web/API/WebXR_Device_API/Geometry
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Auf einer grundlegenden Ebene wird die Darstellung von Szenen für [WebXR](/de/docs/Web/API/WebXR_Device_API) in Augmented Reality- oder Virtual Reality-Kontexten unter Verwendung von [WebGL](/de/docs/Web/API/WebGL_API) durchgeführt, sodass die beiden APIs einen Großteil derselben Designsprache teilen. Um jedoch die Möglichkeit zu bieten, Szenen in echtem 3D mit XR-Headsets und ähnlichem Equipment zu präsentieren, hat WebXR zusätzliche Konzepte, die verstanden werden müssen.

In diesem Artikel führen wir die Möglichkeiten ein, wie WebXR die Geometrie von WebGL erweitert, und wie die Positionen und Ausrichtungen von Objekten – sowohl physisch als auch virtuell – in Bezug zueinander beschrieben werden, indem Räume und insbesondere Referenzräume verwendet werden.

Der Artikel [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) baut auf den hier bereitgestellten Informationen auf, um zu erläutern, wie die physische Position und Ausrichtung des Kopfes des Benutzers sowie möglicherweise andere Körperteile wie die Hände in die digitale Welt übertragen werden, und wie die relativen Positionen sowohl physischer als auch virtueller Objekte verfolgt werden, während sie sich bewegen, damit die Szene korrekt gerendert und zusammengesetzt werden kann.

## Grundlagen der 3D-Geometrie

Während wir hier die erforderlichen mathematischen Operationen untersuchen, die verwendet werden, um die Positionen, Ausrichtungen und Bewegungen von Objekten im virtuellen Raum zu berechnen—zusätzlich zur Notwendigkeit, den menschlichen Betrachter der Szene einzubeziehen—geht eine gründliche Einführung in Geometrie und die Verwendung von Matrizen und Vektoren zur Verwaltung von 3D-Darstellungen einer Szene weit über den Umfang dessen hinaus, was in diesem Artikel erreicht werden kann. Mehr über die einzelnen Operationen erfahren Sie in [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web).

### Einheiten

Bevor wir die Details der Geometrie des 3D-Raums von WebXR diskutieren, ist es zunächst nützlich, die Maßeinheiten zu verstehen, die auf die 3D-Welt angewendet werden.

#### Längen und Distanzen

WebGL misst alle Distanzen und Längen in **Metern**. WebXR übernimmt diesen Standard sowie die Tatsache, dass die Welt ein Würfel mit einer Breite, Höhe und Tiefe von je zwei Metern ist. Jeder der drei Achsen hat einen minimalen Wert von -1,0 und einen maximalen Wert von 1,0, wobei sich das Zentrum des Würfels bei (0, 0, 0) befindet.

![Diagramm, das einen WebXR-Raum zeigt, dessen X-, Y- und Z-Koordinatenachsen jeweils einen minimalen Wert von -1 und einen maximalen Wert von 1 haben.](defaultspacedimensions.svg)

Dieser achtkubikmeter große Raum umfasst für die Zwecke Ihres Codes das gesamte Universum. Alles, was Sie zeichnen, muss auf diese Koordinaten angepasst werden, entweder explizit in Ihrem Code oder durch die Verwendung einer Transformation, um die Koordinaten aller Vertices anzupassen. Der effizienteste Weg ist natürlich, Ihre Objekte und Ihren Code so zu gestalten, dass sie dasselbe Koordinatensystem wie WebGL verwenden.

Die WebGL-Koordinaten und -Längen werden zur Renderzeit automatisch auf die Größe des Viewports transformiert, in dem die Szene gerendert wird.

#### Winkel

Winkel werden in **[Bogenmaß](https://de.wikipedia.org/wiki/Bogenmaß)** angegeben. Um Grad in Bogenmaß zu konvertieren, multiplizieren Sie den Wert in Grad mit `π/180`. Der folgende Code-Schnipsel zeigt zwei einfache Funktionen, `degreesToRadians()` und `radiansToDegrees()`, die zwischen den beiden Einheiten zur Winkelmessung hin- und herkonvertieren.

```js
const RADIANS_PER_DEGREE = Math.PI / 180.0;

let degreesToRadians = (deg) => deg * RADIANS_PER_DEGREE;
let radiansToDegrees = (rad) => rad / RADIANS_PER_DEGREE;
```

#### Zeiten und Dauern

> [!NOTE]
> Aus Sicherheitsgründen führt `DOMHighResTimeStamp` normalerweise eine kleine Ungenauigkeit in die Uhr ein, um zu verhindern, dass sie für [Fingerabdruckerkennung](/de/docs/Glossary/Fingerprinting) und zeitbasierte Angriffe verwendet wird.

Alle Zeiten und Dauern in WebXR werden mit dem Typ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gemessen, der einen Gleitkommawert mit doppelter Genauigkeit angibt, der die Zeit in Millisekunden relativ zur Beginnzeit spezifiziert. Da der Wert eine Gleitkommazahl ist, kann er je nach Plattform und Hardware besser als auf Millisekundenebene genau sein.

Zeit wird hauptsächlich verwendet, um die Zeit zu bestimmen, die seit dem Zeichnen des vorherigen Animationsframes der Szene vergangen ist. Als solche ist die Zeit typischerweise mit der Bildwiederholrate des Displays oder einem Bruchteil davon in Einklang, wenn die Framerate aufgrund von Leistungsproblemen eingeschränkt werden muss. Dies bedeutet, dass die Zeit normalerweise in 1/60–Sekunden-Schritten fortschreitet, wenn eine Bildwiederholrate von 60 FPS angenommen wird. Nach der Berechnung bedeutet dies, dass jeder Frame idealerweise in Abständen von 16,6667 Millisekunden gerendert wird.

### Geometrieoperationen mit Matrizen

Wir bieten einen [Leitfaden zur Matrizentheorie in Bezug auf 3D-Geometrie](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) an, einschließlich der Verwendung von Matrizen für die drei Haupttransformationen, die beim Rendern von 3D-Szenen durchgeführt werden müssen:

- **[Translation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#translation_matrix)** ist die Verwendung einer Matrix, um die Position eines Punktes durch den virtuellen Raum zu verschieben. Diese Bewegung kann entlang einer oder mehrerer Achsen des Objekts erfolgen.
- **[Rotation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#rotation_matrix)** ist die Anwendung einer Matrix, die einen Punkt um den Ursprung des Koordinatensystems des Objekts dreht.
- **[Skalierung](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#scale_matrix)** ist die Verwendung einer Matrix, um die Größe eines Objekts zu verändern.

Beachten Sie, dass eine Transformation, wenn sie auf einen Punkt angewendet wird, auch auf eine _Sammlung_ von Punkten angewendet werden kann. Da ein Objekt durch eine Anzahl von Polygonen dargestellt wird, die aus mehreren Punkten im Raum bestehen, wird dieselbe Transformation auf jedes Punkt, das das Objekt ausmacht, das gesamte Objekt betreffen. Transformationen können auch auf Vektoren angewendet werden, da Vektoren durch einen Koordinatenwert beschrieben werden, um die Richtung und Größe des Vektors zu definieren.

## Über die Ursprünge von Räumen

Eine vollständige XR-erweiterte Szene – ob virtuell oder erweitert – ist ein Zusammenspiel von einem bis potenziell Dutzenden von Bezugsrahmen. Jedes Objekt innerhalb der Szene, das direkt Positions- und Ausrichtungsdaten mit dem WebXR-System austauschen muss, muss in der Lage sein, diese Informationen auf eine Weise zu melden, die von anderen Objekten innerhalb der Szene verstanden und adaptiert werden kann.

In Augmented Reality (AR) ist dies aufgrund der Notwendigkeit, virtuelle Objekte in die reale Welt einzubringen, nicht nur um sie korrekt zu platzieren, sondern auch um sicherzustellen, dass sie nicht zu wandern scheinen, wenn sich die Perspektive des Nutzers verschiebt. In Virtual Reality (VR) geht es darum, ein Raumgefühl zu schaffen, in dem die Bewegungen des Nutzers präzise von den auf dem virtuellen Display dargestellten Bildern nachgeahmt werden, um Diskrepanzen und Trennungen zu vermeiden, die Unbehagen oder Schlimmeres verursachen könnten.

Es geht also darum, ein Raumgefühl zu schaffen. Aus der Perspektive eines XR-Entwicklers ist das Designen der Bühne der Teil, der Ihren Nutzern am meisten bedeutet. Wie ein Architekt oder ein Szeniker haben Sie die Macht, Stimmungen und Erfahrungen durch eine physische Umgebung zu schaffen. Wie Sie diesen Raum strukturieren, hängt sowohl von der Art und Weise, wie Benutzer interagieren und ihn erkunden können, ab als auch von dieser beeinflusst.

> [!NOTE]
> Ein Raum wird typischerweise Vordergrund-, Mittel- und Hintergrundelemente haben. Die richtige Balance kann eine einzigartige Präsenz schaffen und Ihren Nutzer leiten. Der Vordergrund umfasst Objekte und Schnittstellen, mit denen Sie direkt interagieren können. Der mittlere Abstand umfasst Objekte, mit denen Sie in gewissem Maße interagieren können oder die Sie annähern können, um sie genauer zu untersuchen und engagiert zu verwenden. Der Hintergrund hingegen ist normalerweise großteils oder völlig nicht interaktiv, zumindest bis und sofern der Nutzer sich ihm nähern kann und ihn in den Bereich des mittleren oder Vordergrundes bringt.

In WebXR wird das grundlegende Konzept eines **Raumes**—also eines Koordinatenraums, in dem eine Szene stattfindet—durch eine Instanz von [`XRSpace`](/de/docs/Web/API/XRSpace) dargestellt. Der Raum wird verwendet, um Feststellungen über die relativen Positionen und Bewegungen von Objekten und anderen Entitäten (wie Lichtquellen und Kameras) innerhalb der Umgebung des Nutzers zu treffen.

Wie zuvor erwähnt, besteht jeder gegebene 3D-Punkt aus drei Komponenten, die jeweils die Distanz vom Zentrum des Raums entlang einer der drei Achsen angeben.

Dies ist der **natives Ursprung** des Raums, der einem bestimmten physischen Ort in der Umgebung des Nutzers entspricht. Jeder Raum hat seinen eigenen nativen Ursprung, der vom Trackingsystem des XR-Geräts verfolgt wird. Dies kann sich vom **effektiven Ursprung** unterscheiden, der der Ursprungspunkt des lokalen Koordinatensystems des Raumes ist.

Die Ausrichtung des Koordinatensystems kann im folgenden Diagramm gesehen werden:

![Diagramm, das das von WebGL und WebXR verwendete Koordinatensystem zeigt.](webgl_coordinates.svg)

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), genannt **Ursprungsverzerrung**, wird verwendet, um Punkte vom eigenen effektiven Koordinatensystem des Raumes in das native Koordinatensystem des XR-Geräts zu transformieren. Die Ursprungsverzerrung ist anfänglich eine Identitätstransformation, da die beiden Ursprünge typischerweise aneinander ausgerichtet sind, wenn der Raum zuerst erstellt wird. Im Laufe der Zeit kann sich die Ursprungsverzerrung jedoch ändern, um Anpassungen aufgrund der Ansammlung von Anpassungsänderungen auszugleichen.

Die Position eines Punktes im Raum relativ zum Ursprung wird durch Bestimmen seiner Entfernung entlang jeder der drei räumlichen Achsen im obigen Diagramm bestimmt. Der Ursprung des Raumes ist der Punkt (0, 0, 0), im Zentrum des Raumes und an der Nullposition entlang jeder Achse. Insbesondere unter den anfänglichen Startbedingungen bei der Standardausrichtung des Betrachters im Raum:

- Die **x-Achse** erstreckt sich horizontal von links nach rechts vom Ursprung weg, wobei der _x_-Koordinate von +1,0 am rechten Rand der Welt liegt. Negative Werte von _x_ erstrecken sich nach links vom Ursprung, erreichen einen Wert von -1,0 am linken Rand des Raums.
- Die **y-Achse** ist positiv, erstreckt sich nach oben vom Ursprung zum oberen Rand des Bildschirms und erreicht +1,0 am oberen Rand des Weltgefühls. Werte von _y_ kleiner als 0 befinden sich unter dem Ursprung, erstrecken sich zum unteren Rand des Bildschirms und erreichen -1,0 am unteren Rand des Weltgefühls.
- Die **z-Achse** erstreckt sich vom Ursprung nach außen vom Bildschirm und erreicht +1,0 am nächstgelegenen Punkt zum Nutzer in dieser Richtung. Negative Werte von _z_ erstrecken sich weiter weg vom Nutzer in den Bildschirm hinein, wobei der am weitesten entfernte Punkt der Welt ein _z_ von -1,0 aufweist.

Jedes Objekt ist auf einfachster Ebene eine Reihe von Polygonen, die durch Punkte im 3D-Raum definiert und durch eine Verzerrungstransformation verschoben werden, die angibt, wie das Objekt bewegt und gedreht werden soll, um es an der gewünschten Position im Raum zu platzieren. Wenn die Verzerrungstransformation eine Identitätsmatrix ist, befindet sich das Objekt am Ursprungspunkt.

Um für das räumliche Tracking und die Szenengeometrie nützlich zu sein, müssen Sie jedoch in der Lage sein, die vom XR-Gerät wahrgenommene Position mit dem Koordinatensystem des Raums zu korrelieren. Hier kommen die Referenzräume ins Spiel.

## Referenzräume

Aufgrund der Vielfalt der verfügbaren XR-Hardware in vielen verschiedenen Formfaktoren von vielen Entwicklern, ist es unpraktisch und nicht skalierbar, von Entwicklern zu erwarten, dass sie direkt mit der verwendeten Tracking-Technologie kommunizieren. Stattdessen ist die [WebXR-Device-API](/de/docs/Web/API/WebXR_Device_API) so konzipiert, dass Entwickler die Erfahrungen ihrer Nutzer planen und einen geeigneten Referenzraum anfordern, der am besten diese Bedürfnisse darstellt. Dies geschieht, indem der [User-Agent](/de/docs/Glossary/user_agent) um einen **[`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)** gebeten wird, der diesen Anforderungen entspricht.

Ein `XRReferenceSpace`-Objekt dient als Mittel, um ein Koordinatensystem-Referenzrahmen auf ein anderes anzupassen. Stellen Sie sich vor, Sie tragen ein Headset, und die virtuelle Welt um Sie herum hat ein Koordinatensystem, in dem Ihre Position (0, 0, 0) ist – das heißt, Sie sind im Mittelpunkt von allem. Fühlt sich das nicht ermächtigend an? Vorwärts, direkt vor Ihrem Headset, liegt die -Z-Achse, mit +Z hinter Ihnen. X ist positiv zu Ihrer Rechten und negativ zu Ihrer Linken. Y ist negativ, wenn Sie nach unten gehen, und positiv, wenn Sie nach oben gehen. Dies zeigt die Position des Headsets im Raum zum Start Ihrer Nutzung des XR-Systems, wobei der Ursprung (0, 0, 0) im Wesentlichen auf der Brücke Ihrer Nase positioniert ist. Dieser Raum ist der **Welt-Raum**.

Betrachten Sie nun den XR-Controller, den Sie in Ihrer linken Hand haben. Er hat die Möglichkeit, Bewegungen und seine Ausrichtung zu melden, aber er weiß nichts über die Position des Headsets oder, was noch wichtiger ist, über sein Koordinatensystem. Doch der Controller benötigt dennoch eine Möglichkeit, seine Position an Ihre Anwendung zu melden. Daher hat er sein eigenes Koordinatensystem. Dies ist ein Referenzraum, der Ihrer Anwendung bereitgestellt wird, wenn Eingabeereignisse auftreten. Dieser Referenzraum weiß intern, wie die Koordinaten des Controllers auf die Koordinaten des Headsets abgebildet werden, sodass WebXR die Koordinaten für Sie übersetzen kann.

Sobald erstellt, garantiert ein `XRReferenceSpace` eine gewisse Unterstützung für Bewegungs- und Ausrichtungsverfolgung und bietet einen Mechanismus zum Erhalten einer [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), von der Sie eine Matrix erhalten können, die die Position und Blickrichtung des Raumes relativ zum Welt-Raum darstellt, wenn der Raum einen Betrachter wie das Headset des Benutzers, das Headset eines Beobachters oder eine virtuelle Kamera repräsentiert.

All dies ist die Verantwortung des Browsers sicherzustellen, um konsistentes Verhalten unabhängig von der Leistungsfähigkeit der zugrundeliegenden Referenzräume zu bieten. Egal wie leistungsstark oder einfach das einzelne XR-Gerät ist, Code, der mit WebXR geschrieben wurde, wird dennoch funktionieren, innerhalb der Einschränkungen der verfügbaren Hardware.

Unabhängig von der Art des verwendeten Referenzraums ist der Typ [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder ein Typ, der von `XRReferenceSpace` abgeleitet ist. Die derzeit verfügbaren Referenzraumtypen sind unten aufgeführt.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), ähnlich dem `local`-Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorher festgelegten Grenze zu bewegen, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Spurraum, dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Nutzer wird nicht erwartet, sich viel über seine Ausgangsposition hinaus zu bewegen, und das Tracking ist dafür optimiert. Für Geräte mit einer Verfolgung von sechs Freiheitsgraden (6DoF) versucht der `local`-Referenzraum, den Ursprung stabil gegenüber der Umgebung zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), ähnlich dem `local`-Typ, außer dass die Ausgangsposition an einem sicheren Ort für den Betrachter steht, wobei der Wert der y-Achse auf 0 auf Fußhöhe ist. Wenn diese Ebene nicht bekannt ist, wird der [User-Agent](/de/docs/Glossary/user_agent) die Bodenhöhe schätzen. Wenn die geschätzte Bodenhöhe nicht null ist, wird erwartet, dass der Browser sie auf eine Weise abrundet, die es ermöglicht, die [Fingerabdruckerkennung](/de/docs/Glossary/Fingerprinting) zu vermeiden (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Spurraum, der dem Nutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise auf extrem lange Distanzen von ihrem Ursprungsort. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist auf Stabilität um die aktuelle Position des Nutzers optimiert, sodass der native Ursprung erforderlich ist, um dies zu ermöglichen.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Spurraum, dessen nativer Ursprung die Position und Ausrichtung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession) unterstützt, sowohl immersiv als auch inline, obwohl es am nützlichsten für Inline-Sitzungen ist. Es ist besonders nützlich, wenn die Entfernung zwischen dem Betrachter und einer Eingabe bestimmt wird, oder wenn mit Versatzräumen gearbeitet wird. Ansonsten wird typischerweise einer der anderen Referenzraum-Typen häufiger verwendet.

Der Rest dieses Leitfadens untersucht, wie man den richtigen Referenzraum für den Bedarf Ihrer Anwendung auswählt.

## Definition räumlicher Beziehungen mit Referenzräumen

Es gibt eine Reihe von gebräuchlichen Möglichkeiten, die Positionen und Ausrichtungen von Objekten relativ zu ihrer Umgebung zu referenzieren, sowie um die Umgebung selbst zu beschränken. Zu diesem Zweck definiert WebXR eine Reihe von Standardräumen, die **Referenzräume** genannt werden, von denen jeder eine andere Technik zur Korrelation des Referenzrahmenkoordinatensystems seines lokalen Raums mit dem Koordinatensystem des Raumes, in dem er sich befindet, unterstützt.

Unabhängig davon, welcher Referenzraumtyp verwendet wird, können Sie jedoch dieselben Funktionen verwenden, um Koordinaten von einem Raum zum übergeordneten Raum zu konvertieren.

### Auswahl des Referenzraumtyps

Gleich zu Beginn, lassen Sie uns den einfachsten Schritt im Prozess der Entscheidung über den zu verwendenden Referenztyp feststellen: Die Referenzräume, die Sie am ehesten verwenden, sind `local`, `local-floor`, `unbounded` oder `bounded-floor`.

#### Boden-Niveau Referenzräume

Die Referenzraumtypen mit `-floor` in ihren Namen funktionieren genau wie die entsprechenden Non-Floor Räume, mit der Ausnahme, dass sie versuchen, automatisch sicherzustellen, dass der Betrachter an einem sicheren Ort auf oder nahe, aber immer über Bodenniveau, positioniert ist. Dies ist die Ebene, bei der die `y`-Koordinate stets 0 ist, es sei denn, ein anderer Boden wird festgelegt. Diese Raumtypen sind nicht geeignet, wenn die Räume unebene Böden haben oder Böden, deren Höhe über das Bodenniveau variiert, da sie nicht unterstützen, dass die vertikale Position des Avatars sich ändert.

#### Die primären Referenzraumtypen

Der `viewer` Referenzraum entspricht der Position des Betrachters im Raum; er wird durch die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurückgegeben, die durch die [`XRFrame`](/de/docs/Web/API/XRFrame) Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) zurückgegeben wird. Er wird ansonsten nicht typischerweise direkt verwendet. Die einzige wirkliche Ausnahme ist, dass Sie den `viewer` Referenzraum verwenden werden, wenn die XR-Szene inline im Webinhalt angezeigt wird.

Der `local` Referenzraum wird typischerweise verwendet, um eine relativ kleine Fläche, wie ein einzelnes Zimmer, zu beschreiben. Er ist nicht nur jederzeit verfügbar, wenn ein immersiver Sitzungs-Modus (`immersive-vr` oder `immersive-ar`) verwendet wird, sondern ist immer unter den optionalen Merkmalen enthalten, wenn eine neue Sitzung angefordert wird; somit unterstützt jede durch [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellte Sitzung den `local` Referenzraumtyp.

Um einen großen Bereich zu repräsentieren – möglicherweise mehrere Räume oder darüber hinaus – können Sie den `unbounded` Referenzraumtyp verwenden, der keine Einschränkungen für die Bewegung des Nutzers spezifiziert. Wenn Sie verhindern möchten, dass der Nutzer in bestimmte Bereiche zieht, müssen Sie dies selbst handhaben.

Der `bounded-floor` Referenzraumtyp hat keinen entsprechenden Typ, der nicht bodengebunden ist. Wenn die XR-Hardware des Nutzers es ihm erlaubt, sich in ihrem realen Raum zu bewegen, und Sie können dies tun, könnte es nützlich sein, einen `bounded-floor` Referenzraum zu verwenden, der es Ihnen ermöglicht, die Grenzen des Bereichs, in dem der Durchgang erlaubt und sicher ist, zu definieren. Siehe den Artikel [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces), um mehr über die Verwendung von begrenzten Referenzräumen zu erfahren.

Durch die Verwendung eines Referenzraums zur Beschreibung der Position und Ausrichtung von Objekten, ist WebXR in der Lage, die Form der Daten, die Sie zur Beschreibung dieser Dinge verwenden, unabhängig von der zugrunde liegenden XR-Hardware zu standardisieren. Die Konfiguration des Referenzraums kann Ihnen dann die Ansichtsmatrizen und Objektposen bereitstellen, die notwendig sind, um den Inhalt des Raumes korrekt darzustellen.

### Einrichtung des Referenzraums

Der oberste Raum—der durch den Aufruf der Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) von [`XRSession`](/de/docs/Web/API/XRSession) erhaltene—beschreibt das Koordinatensystem, das für den allgemeinen Welt-Raum verwendet wird. Alles ist fundamental an dieses Koordinatensystem gebunden, welches die Beziehung zwischen der Position der Ausrüstung des Nutzers und der virtuellen Welt darstellt.

Während Sie WebXR für alles von der Anmerkung der Welt über die Wiedergabe von 360°-Videos bis hin zu wissenschaftlichen Simulationen oder virtuellen Realitätstrainingseinrichtungen oder anderen denkbaren Anwendungen verwenden können, nehmen wir als typisches WebXR-Anwendungsbeispiel ein 3D-Videospiel. Betrachten Sie das Modell eines Spiel-Avatars, das in der Welt des Spiels steht. Sie positionieren diesen Avatar relativ zum Welt-Raum, unter Verwendung des durch den Referenzraum der Welt definierten Koordinatensystems.

Um den Spieler auf eine neue Position zu verschieben, könnten Sie alle seine Koordinaten neu schreiben oder manuell eine Transformation jedes Mal anwenden, wenn er sich bewegt, aber es gibt einen einfacheren Weg dank der Referenzräume und ihrer Fähigkeit, relativ zu einander erstellt zu werden. Erstellen Sie ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt, das die neue Position und Ausrichtung des Spiel-Avatars darstellt, und erstellen Sie dann einen neuen Referenzraum, um die Perspektive des Avatars an der neuen Position mithilfe der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) darzustellen. Dies ist besonders nützlich, wenn Unterstützung für die Verwendung von Nicht-XR-Geräten wie Tastaturen oder Mäusen zur Bewegung des Avatars durch die Welt implementiert wird.

{{EmbedYouTube("nVSlQkSSQeQ")}}

Mit dem neu erstellten Referenzraum kann der Avatar an den gleichen Koordinaten bleiben und dennoch in der Welt erscheinen, als ob er sich an seinem neuen Standort befindet (und die Welt aus der Perspektive seines neuen Standorts sieht). Für einen detaillierteren Blick auf die Verwendung von Referenzräumen zur Verwaltung der Perspektive des Spielers, siehe den Artikel.

Im Fall unseres Spiel-Avatar-Beispiels ist es selten, dass ein Avatar (oder ein anderes sich bewegendes Lebewesen oder Fahrzeug) ein einfacher Blob ist, der sich durch die Welt bewegt. Sie haben normalerweise zusätzliche Form, sowie innere Bewegungen, wie sich bewegende Beine, Arme, die schwingen, wenn sie gehen, ein Kopf, der sich dreht oder schwankt, Waffen, die sich bewegen, und so weiter. Erwecken Sie diese zum Leben, indem Sie Standard-WebGL-Techniken und eine Positionierungs-Matrix oder [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) verwenden, um die Objekte relativ zum effektiven Ursprung in die korrekte Position zu verschieben.

### Geräteeinschränkungen zu Referenzräumen

Einige XR-Geräte können eine bestimmte Erfahrung nicht unterstützen, trotz der Bemühungen der API, alle fehlenden Fähigkeiten auszugleichen. Zum Beispiel gibt es keine Möglichkeit, ein einfaches Headset wie ein GearVR-Gerät in einer Anwendung, die die Unterstützung zum Zulassen des realen Bewegens des Benutzers zur Umgebung erforderlich macht, funktionieren zu lassen.

Um progressive Verbesserung zu unterstützen und damit die Verfügbarkeit Ihrer Anwendung oder Website zu erweitern, sollten Sie einen Referenzraum wählen, der die geringste Menge an Funktionalität bietet, die benötigt wird, oder einen Rückfallmechanismus bereitzustellen, der fehlgeschlagene Versuche, Referenzräume zu erhalten, erkennt und erneut mit einer weniger leistungsstarken Alternative versucht.

Die Kompatibilitätsprobleme, die auftreten können, könnten so grundsätzlich sein, wie die Unfähigkeit, `immersive-ar`-Modus (erweiterte Realitätssitzungen) auf einem nur VR-Headset zu unterstützen, oder die Anforderungen an eine oder mehrere erforderliche Optionen, die nicht erfüllt werden können, wenn versucht wird, die XR-Sitzung zu erstellen.

XR-Sitzungen werden mittels der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellt. Eines seiner optionalen Parameter ist ein Objekt, das Sie verwenden können, um Anforderungen und/oder optionale Funktionen, die die Sitzung (idealerweise) unterstützen soll, anzugeben. Derzeit sind nur die Optionen für Zeichenfolgen, die die Standard-Referenzräume identifizieren, unterstützt. Mit ihnen können Sie, bevor Ihr Code ausgeführt wird, sicherstellen, dass Sie Zugriff auf eine WebXR-Sitzung haben, die den von Ihnen benötigten oder bevorzugten Referenzraumtyp unterstützen kann.

> [!NOTE]
> Zu diesem Zeitpunkt ist der zu verwendende oder zu bevorzugende Referenzraum die einzige verfügbare Option beim Erstellen einer [`XRSession`](/de/docs/Web/API/XRSession). In Zukunft ist es wahrscheinlich, dass mehr Optionen verfügbar werden.

## Positionierung und Ausrichtung von Objekten

Alle räumlichen Informationen (Position, Ausrichtung und Bewegung), die zwischen Ihrer Anwendung und der WebXR-API ausgetauscht werden, sind relativ zu einem bestimmten Raum zum Zeitpunkt des Renderns des Frames ausgedrückt. Jede weitere Positionierung und Ausrichtung wird zwischen Ihnen und WebGL ausgetauscht, obwohl Sie den Ursprungsverzerrung aus dem Referenzraum verwenden, um die Objekte korrekt in der 3D-Welt zu positionieren.

Wenn es an der Zeit ist, einen Animationsframe zu rendern, wird die Callback-Funktion, die angegeben wurde, als Sie die Methode [`XRSession`](/de/docs/Web/API/XRSession) des WebXR-Sitzungsobjekts [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen haben, ausgeführt. Der Callback erhält als einen seiner Parameter einen Zeitstempel, der die Zeit anzeigt, zu der der Frame stattfindet, und sollte alle Rendering-Vorgänge für den entsprechenden Animationsframe ausführen.

Da der Callback wiederholt mit steigenden Zeitwerten aufgerufen wird, generiert der Callback eine Sequenz von Frames, die mithilfe der XR-Hardware präsentiert werden, und zeigt damit eine 3D-Szene für den Nutzer.

Mehr über den Animationsprozess erfahren Sie im Artikel [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering).

Für ein Beispiel und eine detailliertere, Code-basierte Erklärung, wie man Objekte in virtuellem Raum positioniert, ausrichtet und bewegt, siehe den Artikel [Bewegung, Ausrichtung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebGL: 2D und 3D Rendering für das Web](/de/docs/Web/API/WebGL_API)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
