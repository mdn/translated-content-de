---
title: Geometrie und Referenzräume im WebXR
slug: Web/API/WebXR_Device_API/Geometry
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Auf einer grundlegenden Ebene wird das Rendern von Szenen für die Präsentation in [WebXR](/de/docs/Web/API/WebXR_Device_API) in entweder Augmented Reality oder Virtual Reality Kontexten mit [WebGL](/de/docs/Web/API/WebGL_API) durchgeführt, sodass beide APIs viel von derselben Entwurfssprache teilen. Um jedoch die Möglichkeit zu bieten, Szenen in echtem 3D mit XR-Headsets und anderer Ausrüstung darzustellen, hat WebXR zusätzliche Konzepte, die verstanden werden müssen.

In diesem Artikel stellen wir die Möglichkeiten vor, in denen WebXR die Geometrie von WebGL erweitert und wie die Positionen und Ausrichtungen von Objekten - sowohl physisch als auch virtuell - in Bezug zueinander beschrieben werden, indem Räume und insbesondere Referenzräume verwendet werden.

Der Artikel [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) baut auf den hier bereitgestellten Informationen auf, um abzudecken, wie die physische Position und Ausrichtung des Kopfes des Benutzers sowie möglicherweise anderer Teile ihres Körpers, wie der Hände, in die digitale Welt abgebildet werden und wie die relativen Positionen sowohl physischer als auch virtueller Objekte verfolgt werden, während sie sich bewegen, damit die Szene ordnungsgemäß gerendert und zusammengesetzt werden kann.

## Grundlagen der 3D-Geometrie

Während wir hier die erforderlichen mathematischen Operationen untersuchen werden, die verwendet werden, um die Positionen, Ausrichtungen und Bewegungen von Objekten in virtuellem Raum zu berechnen - plus die Notwendigkeit, den menschlichen Betrachter der Szene in die Mischung zu integrieren - geht eine gründliche Einführung in die Geometrie und die Verwendung von Matrizen und Vektoren zur Verwaltung von 3D-Darstellungen einer Szene weit über den Umfang dessen hinaus, was in diesem Artikel erreicht werden kann. Sie können mehr über die einzelnen Operationen in [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) erfahren.

### Einheiten

Bevor wir die Details der Geometrie des 3D-Raums, der von WebXR verwendet wird, besprechen, ist es zunächst nützlich, die Maßeinheiten zu verstehen, die auf die 3D-Welt angewendet werden.

#### Längen und Abstände

WebGL misst alle Distanzen und Längen in **Metern**. WebXR übernimmt diesen Standard sowie die Tatsache, dass die Welt ein zwei Meter breiter, zwei Meter hoher und zwei Meter tiefer Würfel ist. Jede der drei Achsen hat einen Mindestwert von -1,0 und einen Höchstwert von 1,0, wobei sich das Zentrum des Würfels bei (0, 0, 0) befindet.

![Diagramm, das einen WebXR-Raum zeigt, dessen X-, Y- und Z-Koordinatenachsen jeweils einen Mindestwert von -1 und einen Höchstwert von 1 haben.](defaultspacedimensions.svg)

Dieser acht Kubikmeter große Raum umfasst das gesamte Universum für die Zwecke Ihres Codes. Alles, was Sie zeichnen, muss so abgebildet werden, dass es in diesen Raum passt, entweder explizit in Ihrem Code oder durch die Verwendung einer Transformation, um die Koordinaten aller Scheitelpunkte anzupassen. Der effizienteste Weg ist natürlich, Ihre Objekte und Ihren Code so zu gestalten, dass sie dasselbe Koordinatensystem verwenden wie WebGL.

Die WebGL-Koordinaten und Längen werden beim Rendern automatisch auf die Größe des Viewports transformiert, in dem die Szene gerendert wird.

#### Winkel

Winkel werden mit **[Radianten](https://de.wikipedia.org/wiki/Bogenmaß)** angegeben. Um Grad in Radianten umzurechnen, multiplizieren Sie den Wert in Grad mit `π/180`. Der folgende Codeausschnitt zeigt zwei einfache Funktionen, `degreesToRadians()` und `radiansToDegrees()`, die zwischen den beiden Maßeinheiten für Winkel hin und her konvertieren.

```js
const RADIANS_PER_DEGREE = Math.PI / 180.0;

let degreesToRadians = (deg) => deg * RADIANS_PER_DEGREE;
let radiansToDegrees = (rad) => rad / RADIANS_PER_DEGREE;
```

#### Zeiten und Dauern

> [!NOTE]
> Aus Sicherheitsgründen führt `DOMHighResTimeStamp` normalerweise eine
> kleine Ungenauigkeit in die Uhr ein, um zu verhindern, dass sie für {{Glossary("Fingerprinting", "Fingerprinting")}} und zeitbasierte
> Angriffe verwendet wird.

Alle Zeiten und Dauern in WebXR werden mit dem Typ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gemessen, einem doppelt-präzisen Gleitkommawert, der die Zeit in Millisekunden relativ zur Startzeit angibt. Da der Wert ein Gleitkommawert ist, kann er möglicherweise weitaus genauer als im Millisekundenbereich sein, abhängig von der Plattform und der Hardware.

Zeit wird hauptsächlich verwendet, um die verstrichene Zeit seit dem vorherigen Animationsframe der Szene zu bestimmen. Daher ist die Zeit typischerweise mit der Bildwiederholrate des Displays oder einem Bruchteil davon synchronisiert, wenn die Framerate aufgrund von Leistungsproblemen eingeschränkt werden muss. Das bedeutet, dass die Zeit normalerweise in Abständen von 1/60 Sekunde schrittweise ansteigt, vorausgesetzt, es gibt eine Bildwiederholrate von 60 FPS. Rechnet man dies um, ergibt sich, dass jeder Frame idealerweise 16,6667 Millisekunden auseinanderliegt.

### Geometrieoperationen mit Matrizen

Wir bieten einen [Leitfaden zu Matrixmathematik in Bezug auf 3D-Geometrie](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) an, inklusive der Verwendung von Matrizen für die drei primären Transformationen, die beim Rendern von 3D-Szenen durchgeführt werden müssen:

- **[Translation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#translation_matrix)** ist die Verwendung einer Matrix, um die Position eines Punktes im virtuellen Raum zu verschieben. Diese Bewegung kann entlang einer beliebigen Achse des Objekts oder einer Kombination davon erfolgen.
- **[Rotation](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#rotation_matrix)** ist die Anwendung einer Matrix, die einen Punkt um den Ursprung des Koordinatensystems des Objekts dreht.
- **[Skalierung](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#scale_matrix)** ist die Verwendung einer Matrix, um die Größe eines Objekts zu ändern.

Beachten Sie, dass, wenn wir sagen, dass eine Transformation auf einen Punkt angewendet wird, sie auch auf eine _Sammlung_ von Punkten angewendet werden kann. Da ein Objekt durch eine Anzahl von Polygonen repräsentiert wird, die aus einer Anzahl von Punkten im Raum bestehen, wird die Anwendung derselben Transformation auf jeden Punkt, der das Objekt bildet, diese Transformation auf das gesamte Objekt anwenden. Transformationen können auch auf Vektoren angewendet werden, da Vektoren mit einem Koordinatenwert beschrieben werden, der die Richtung und Größe des Vektors definiert.

## Über die Ursprünge von Räumen

Eine vollständige XR-erweiterte Szene – ob virtuell oder augmentiert – ist ein Zusammenspiel von möglicherweise einem bis hin zu Dutzenden von Bezugspunkten. Jedes Objekt in der Szene, das direkt Positions- und Ausrichtungsdaten mit dem WebXR-System austauschen muss, muss in der Lage sein, diese Informationen in einer Weise zu berichten, die verstanden und nach Bedarf angepasst werden kann, um von anderen Objekten in der Szene nachvollzogen werden zu können.

Im Augmented Reality (AR) ist dies wegen der Notwendigkeit, virtuelle Objekte in die reale Welt einzufügen, nicht nur korrekt zu platzieren, sondern auch sicherzustellen, dass sie nicht bei jeder Änderung der Nutzerperspektive unabhängig herumschwimmen. In der Virtual Reality (VR) geht es darum, ein Gefühl für Raum zu schaffen, in dem die Bewegungen des Nutzers präzise mit den auf dem virtuellen Display präsentierten Bildern übereinstimmen, um Diskrepanzen und Unterbrechungen zu vermeiden, die Unbehagen oder Schlimmeres verursachen können.

Daher dreht sich alles darum, ein Raumgefühl zu schaffen. Aus der Perspektive eines XR-Entwicklers ist die Gestaltung der Bühne der Teil, der Ihren Nutzern am meisten bedeutet. Wie ein Architekt oder Szenenbildner haben Sie die Macht, Stimmungen und Erfahrungen durch eine physische Umgebung zu schaffen. Wie Sie diesen Raum strukturieren, hängt sowohl davon ab als auch beeinflusst, wie Nutzer mit ihm interagieren und ihn erkunden können.

> [!NOTE]
> Ein Raum wird typischerweise Vordergrund-, Mittelstrecken- und Hintergrundelemente aufweisen. Das richtige Gleichgewicht kann eine einzigartige Präsenz schaffen und Ihren Benutzer führen. Der Vordergrund enthält Objekte und Schnittstellen, mit denen Sie direkt interagieren können. Die Mittelstrecke enthält Objekte, mit denen Sie teilweise interagieren oder die Sie ansprechen können, um sich näher mit ihnen zu beschäftigen. Der Hintergrund hingegen ist in der Regel weitgehend oder vollständig nicht interaktiv, es sei denn, der Benutzer kann sich ihm nähern und ihn in den Bereich der Mittelstrecke oder des Vordergrunds bringen.

In WebXR wird das grundlegende Konzept eines **Raumes** – also eines Koordinatenraums, in dem eine Szene stattfindet – durch eine Instanz von [`XRSpace`](/de/docs/Web/API/XRSpace) repräsentiert. Der Raum wird verwendet, um Bestimmungen über die relativen Positionen und Bewegungen von Objekten und anderen Entitäten (wie Lichtquellen und Kameras) in der Umgebung des Nutzers zu treffen.

Wie bereits erwähnt, besteht jeder gegebene 3D-Punkt aus drei Komponenten, die jeweils die Entfernung vom Zentrum des Raumes entlang einer der drei Achsen angeben.

Dies ist der **native Ursprung** des Raumes, der einer bestimmten physischen Position in der Umgebung des Nutzers entspricht. Jeder Raum hat seinen eigenen nativen Ursprung, der vom Tracking-System des XR-Geräts verfolgt wird. Dies kann anders sein als der **effektive Ursprung**, der der Ausgangspunkt für das lokale Koordinatensystem des Raumes ist.

Die Richtung des Koordinatensystems ist im folgenden Diagramm zu sehen:

![Diagramm, das das von WebGL und WebXR verwendete Koordinatensystem zeigt.](webgl_coordinates.svg)

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der als **Ursprungsoffset** bezeichnet wird, wird verwendet, um Punkte vom effektiven Koordinatensystem des Raumes in das native Koordinatensystem des XR-Geräts zu transformieren. Der Ursprungsoffset ist zunächst eine Identitätstransformation, da typischerweise die beiden Ursprünge ausgerichtet sind, wenn der Raum erstmalig eingerichtet wird. Wenn sich jedoch mit der Zeit Veränderungen in der Ausrichtung ansammeln, kann sich der Ursprungsoffset ändern, um dies auszugleichen.

Die Position eines Punktes im Raum relativ zum Ursprung wird durch die Bestimmung seiner Entfernung entlang jeder der drei räumlichen Achsen im obigen Diagramm angegeben. Der Ursprung des Raumes ist der Punkt (0, 0, 0), im Zentrum des Raumes und an der Nullposition jeder Achse. Genauer gesagt, unter den anfänglichen Startbedingungen mit der Standardausrichtung des Betrachters im Raum:

- Die **x-Achse** erstreckt sich horizontal von links nach rechts ausgehend vom Ursprung, wobei die _x_-Koordinate von +1,0 sich am rechten Rand der Welt befindet. Negative _x_-Werte erstrecken sich nach links from Ursprung, erreichen einen Wert von -1,0 am linken Rand des Raumes.
- Die **y-Achse** ist positiv in der Aufwärtsrichtung vom Ursprung zum oberen Rand des Bildschirms, und erreicht +1,0 an der Oberseite des Weltraums. Werte von _y_ kleiner als 0 befinden sich unterhalb des Ursprungs, sie erstrecken sich nach unten zum Bildschirm und erreichen -1,0 am unteren Rand des Weltraums.
- Die **z-Achse** erstreckt sich ausgehend vom Ursprung nach außen vom Bildschirm, erreicht +1,0 an dem der Benutzer am nächsten gelegenen Punkt in dieser Richtung. Negative _z_-Werte erstrecken sich weiter in den Bildschirm hinein vom Benutzer, wobei der am weitesten entfernte Punkt der Welt einen _z_-Wert von -1,0 aufweist.

Jedes Objekt ist, auf einfachster Ebene, eine Sammlung von Polygonen, die durch Punkte im 3D-Raum und eine Offset-Transformation definiert sind, die angibt, wie das Objekt verschoben und gedreht werden muss, um es an der gewünschten Position im Raum zu platzieren. Wenn die Offset-Transformation eine Identitätsmatrix ist, befindet sich das Objekt am Ursprungsort.

Um für räumliches Tracking und Szenengeometrie nützlich zu sein, müssen Sie jedoch in der Lage sein, die wahrgenommene Position des XR-Geräts mit dem Koordinatensystem des Raumes zu korrelieren. Hier kommen die Referenzräume ins Spiel.

## Referenzräume

Aufgrund der Vielfalt der verfügbaren XR-Hardware, die in einer großen Auswahl an Formfaktoren von vielen Entwicklern erhältlich ist, ist es unpraktisch und nicht skalierbar, von Entwicklern zu erwarten, dass sie direkt mit der verwendeten Tracking-Technologie kommunizieren. Stattdessen ist die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) darauf ausgelegt, dass Entwickler die Erlebnisse ihrer Nutzer planen und einen geeigneten Referenzraum anfordern, der diese Bedürfnisse am besten repräsentiert. Dies wird getan, indem der {{Glossary("user_agent", "User-Agent")}} um einen **[`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)** gebeten wird, der diesen Bedürfnissen entspricht.

Ein `XRReferenceSpace`-Objekt dient als Mittel, um einen Bezugrahmen eines Koordinatensystems in ein anderes zu adaptieren. Nachdem Sie ein Headset aufgesetzt haben, erwägen Sie die virtuelle Welt um Sie herum als ein Koordinatensystem, in dem Ihre Position (0, 0, 0) ist - das heißt, Sie sind das Zentrum von allem. Fühlt sich das nicht ermächtigend an? Vorwärts, direkt vor Ihrem Headset, ist die -Z-Achse, mit +Z hinter Ihnen. X ist positiv zu Ihrer Rechten und negativ zu Ihrer Linken. Y ist negativ, wenn Sie nach unten gehen und positiv, wenn Sie nach oben gehen. Dies gibt die Position des Headsets im Raum beim Start Ihrer Nutzung des XR-Systems an, wobei der Ursprung (0, 0, 0) grundsätzlich an der Brücke Ihrer Nase positioniert ist. Dieser Raum ist der **Weltraum**.

Betrachten Sie anschließend den XR-Controller, den Sie in Ihrer linken Hand halten. Er kann Bewegungen und seine Ausrichtung melden, aber er weiß nichts über die Position des Headsets oder, was noch entscheidender ist, sein Koordinatensystem. Der Controller muss jedoch dennoch eine Möglichkeit haben, seine Position an Ihre App zu melden. Daher verfügt er über ein eigenes Koordinatensystem. Dies ist ein Referenzraum, der Ihrer App bereitgestellt wird, wenn Eingabereignisse auftreten. Dieser Referenzraum weiß intern, wie man die Koordinaten des Controllers auf die des Headsets abbildet, sodass WebXR die Koordinaten für Sie hin und her übersetzen kann.

Einmal erstellt, garantiert ein `XRReferenceSpace` ein bestimmtes Maß an Unterstützung für Bewegungs- und Orientierungstracking und bietet einen Mechanismus zum Ermitteln einer [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), aus der Sie eine Matrix erhalten können, die die Position und Blickrichtung des Raumes relativ zum Weltraum darstellt, wenn der Raum einen Betrachter wie das Headset des Nutzers, das Headset eines Beobachters oder eine virtuelle Kamera darstellt.

All dies liegt in der Verantwortung des Browsers, der ein konsistentes Verhalten bietet, unabhängig davon, wie fähig die einzelnen zugrunde liegenden Referenzräume sind. Ungeachtet dessen, wie leistungsfähig oder einfach das jeweilige XR-Gerät ist, wird der mit WebXR geschriebene Code immer noch funktionieren, innerhalb der Einschränkungen der verfügbaren Hardware.

Unabhängig von der Art des Referenzraums, die Sie wählen, ist sein Typ [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder ein abgeleiteter Typ von `XRReferenceSpace`. Die derzeit verfügbaren Referenzraumtypen werden unten gezeigt.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ähnlich dem `local` Typ, mit der Ausnahme, dass der Benutzer außerhalb einer festgelegten Grenze, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird, nicht erwartet wird, sich zu bewegen.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Verfolgungsraum, dessen nativer Ursprung sich in der Nähe der Position des Betrachters beim Erstellen der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich Benutzer viel oder überhaupt über ihre Startposition hinaus bewegen, und das Tracking ist für diesen Anwendungsfall optimiert. Bei Geräten mit sechs Freiheitsgraden (6DoF) versucht der `local`-Referenzraum, den Ursprung stabil zur Umgebung zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ähnlich dem `local` Typ, mit der Ausnahme, dass die Startposition in einer sicheren Position für den Betrachter zum Stehen platziert wird, wobei der Wert der y-Achse auf 0 auf Bodenebene ist. Wenn diese Bodenebene nicht bekannt ist, schätzt der {{Glossary("user_agent", "User-Agent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe von null abweicht, wird erwartet, dass der Browser sie dahin rundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu vermeiden (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Verfolgungsraum, der dem Benutzer völlige Bewegungsfreiheit erlaubt, möglicherweise über extrem weite Distanzen vom Ursprungspunkt aus. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist auf Stabilität um die aktuelle Position des Nutzers optimiert, sodass sich der native Ursprung entsprechend verschieben kann, um dieses Bedürfnis zu erfüllen.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Verfolgungsraum, dessen nativer Ursprung die Position und Ausrichtung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession), sowohl immersiv als auch inline, unterstützt, obwohl es am nützlichsten für Inline-Sitzungen ist. Es ist besonders nützlich, um den Abstand zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Offsets-Räumen. Ansonsten wird typischerweise eine der anderen Typen von Referenzräumen häufiger verwendet werden.

Der Rest dieser Anleitung erkundet, wie Sie den richtigen Referenzraum für die Bedürfnisse Ihrer App auswählen.

## Definieren räumlicher Beziehungen mit Referenzräumen

Es gibt eine Reihe von gebräuchlichen Wegen, um die Positionen und Ausrichtungen von Objekten relativ zu ihrer Umgebung zu referenzieren sowie die Umgebung selbst einzugrenzen. Zu diesem Zweck definiert WebXR einen Satz von Standardräumen, sogenannte **Referenzräume**, die jeweils eine unterschiedliche Technik zur Korrelation des lokalen Raumbezugsrahmen-Koordinatensystems mit dem Koordinatensystem des Raumes, in dem er sich befindet, unterstützen.

Unabhängig davon, welcher Typ von Referenzraum verwendet wird, können Sie mit denselben Funktionen Koordinaten von Raum zu Elternraum konvertieren.

### Auswählen des Referenzraumtyps

Gleich zu Beginn wollen wir den einfachsten Schritt des Prozesses bei der Entscheidung, welchen Referenztyp zu verwenden ist, nennen: Die am wahrscheinlichsten verwendeten Referenzräume sind `local`, `local-floor`, `unbounded` oder `bounded-floor`.

#### Fußbodenniveau-Referenzräume

Die Referenzraumtypen mit `-floor` in ihren Namen funktionieren genauso wie die entsprechenden Nicht-Floor-Räume, außer dass sie versuchen, den Betrachter automatisch an einer sicheren Position auf oder nahe (aber immer über) Bodenniveau zu platzieren. Dies ist die Ebene, bei der die `y`-Koordinate immer 0 ist, es sei denn, anders wird ein Wert für die Bodenebene festgelegt. Diese Raumtypen sind _nicht_ geeignet, wenn die Räume unregelmäßige Böden haben oder Böden, deren Höhe über dem Bodenniveau variiert, da sie nicht die Möglichkeit des Avatars unterstützen, seine vertikale Position zu ändern.

#### Die primären Referenzraumtypen

Der `viewer`-Referenzraum entspricht der Position des Betrachters im Raum; er wird von der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurückgegeben, die von der [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übermittelt wird. Er wird in der Regel nicht direkt verwendet. Die einzige echte Ausnahme ist, dass Sie den `viewer`-Referenzraum wahrscheinlich verwenden, wenn Sie die XR-Szene inline innerhalb von Web-Inhalten ausführen.

Der `local`-Referenzraum wird typischerweise verwendet, um einen relativ kleinen Bereich, wie einen einzelnen Raum, zu beschreiben. Es ist nicht nur immer verfügbar, wenn ein immersiver Sitzungsmodus (`immersive-vr` oder `immersive-ar`) verwendet wird, sondern ist auch immer unter den optionalen Features enthalten, wenn eine neue Sitzung angefordert wird; daher unterstützt jede Sitzung, die von [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellt wird, den `local`-Referenzraumtyp.

Um einen großen Bereich – möglicherweise mit mehreren Räumen oder darüber hinaus – darzustellen, können Sie den `unbounded`-Referenzraumtyp verwenden, der keine Einschränkungen für die Bewegungen des Betrachters festlegt. Wenn Sie verhindern möchten, dass der Benutzer in bestimmte Bereiche geht, müssen Sie dies selbst handhaben.

Der `bounded-floor`-Referenzraumtyp hat kein entsprechendes Pendant, das nicht an den Boden gebunden ist. Wenn die XR-Hardware des Nutzers es ihnen ermöglicht, sich in ihrem echten Raum zu bewegen, und Sie dazu in der Lage sind, kann es nützlich sein, einen `bounded-floor`-Referenzraum zu verwenden, mit dem Sie die Grenzen des Bereichs, in dem Bewegung erlaubt und sicher ist, speziell definieren können. Sehen Sie sich den Artikel [Verwendung von gebundenen Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) an, um mehr über die Verwendung von gebundenen Referenzräumen zu erfahren.

Durch die Verwendung eines Referenzraums zur Beschreibung der Position und Ausrichtung von Objekten ist WebXR in der Lage, die Form der Daten, die Sie verwenden, um diese Dinge zu beschreiben, unabhängig von der zugrunde liegenden XR-Hardware zu standardisieren. Die Konfiguration des Referenzraums kann Ihnen dann die Ansichts- und Objektmatrizen bereitstellen, die erforderlich sind, um die Inhalte des Raumes korrekt zu rendern.

### Festlegen des Referenzraums

Der oberste Raum – derjenige, der durch Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) erhalten wird – beschreibt das Koordinatensystem, das für den gesamten Weltraum verwendet wird. Alles ist fundamental an dieses Koordinatensystem gebunden, das die Beziehung zwischen der Position der Ausrüstung des Benutzers und der virtuellen Welt repräsentiert.

Während Sie WebXR für alles verwenden können, von der Ergänzung der Welt mit Anmerkungen bis hin zur 360°-Videowiedergabe, wissenschaftlichen Simulationen, virtuellen Realitätstrainingssystemen oder allem, was Sie sich vorstellen können, nehmen wir ein 3D-Videospiel als Beispiel für eine typische WebXR-Anwendung. Betrachten Sie das Modell eines Spieler-Avatars, der im Raums der Spielwelt steht. Sie positionieren diesen Avatar relativ zum Weltraum, indem Sie das durch den Referenzraum der Welt definierte Koordinatensystem verwenden.

Um den Spieler an eine neue Position zu bewegen, könnten Sie alle seine Koordinaten umschreiben oder bei jeder Bewegung manuell eine Transformation anwenden, aber es gibt einen einfacheren Weg, dank der Referenzräume und ihrer Fähigkeit, relativ zueinander erstellt zu werden. Erstellen Sie ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die neue Position und Ausrichtung des Spieler-Avatars darstellt, und erstellen Sie dann einen neuen Referenzraum, um die Sichtweise des Avatars an der neuen Position zu repräsentieren, indem Sie die [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) verwenden. Dies ist besonders nützlich, wenn Sie die Unterstützung für die Verwendung von Nicht-XR-Geräten wie Tastaturen oder Mäuse implementieren, um den Avatar des Spielers durch den Raum zu bewegen.

{{EmbedYouTube("nVSlQkSSQeQ")}}

Mit dem neu erstellten Referenzraum kann der Avatar auf den gleichen Koordinaten bleiben und trotzdem in der Welt erscheinen, als würde er sich an seiner neuen Position befinden und die Welt aus der Perspektive seiner neuen Lage sehen. Für einen detaillierteren Blick darauf, wie Referenzräume verwendet werden, um die Sichtweise des Spielers zu verwalten, siehe den Artikel.

Im Falle unseres Spielavatar-Beispiels ist es selten, dass ein Avatar (oder ein anderes sich bewegendes Wesen oder Maschine) ein einfacher Blob ist, der im Weltraum herumrutscht. Sie haben normalerweise eine zusätzliche Form sowie interne Bewegungen, wie gehende Beine, sich schwingende Arme beim Gehen, ein Kopf, der sich dreht oder wippt, Waffen, die sich bewegen, und so weiter. Beleben Sie diese mit Standard-WebGL-Techniken und einer Positionierungs-Matrix oder einem [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), um die Objekte an der richtigen Position relativ zum effektiven Ursprung zu verschieben.

### Geräteeinschränkungen bei Referenzräumen

Einige XR-Geräte können nicht dazu gebracht werden, ein gegebenes Erlebnis zu unterstützen, trotz der Bemühungen der API, um fehlende Fähigkeiten auszugleichen. Zum Beispiel gibt es keine Möglichkeit, ein einfaches Headset wie ein GearVR-Gerät dazu zu bringen, in einer App zu funktionieren, die Unterstützung dafür benötigt, dass der Benutzer sich durch Verfolgung ihrer Bewegungen in der realen Welt im Raum bewegt.

Um progressive Verbesserung zu unterstützen – und damit die Verfügbarkeit Ihrer App oder Website zu erweitern – sollten Sie einen Referenzraum auswählen, der die geringste Menge an erforderlicher Funktionalität bietet, oder einen Fallback-Mechanismus bereitstellen, der gescheiterte Versuche erkennt, Referenzräume zu erhalten, und es erneut mit einer weniger leistungsfähigen Alternative versucht.

Die auftretenden Kompatibilitätsprobleme können so grundlegend sein wie die Unfähigkeit, den `immersive-ar`-Modus (Augmented Reality-Sitzungen) auf einem reinen VR-Headset zu unterstützen, oder eine Anforderung für eine oder mehrere erforderliche Optionen umfassen, die nicht erfüllt werden können, wenn versucht wird, die XR-Sitzung zu erstellen.

XR-Sitzungen werden mit der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellt. Einer ihrer optionalen Parameter ist ein Objekt, mit dem Sie erforderliche und/oder optionale Funktionen angeben können, die die Sitzung unterstützen muss (oder idealerweise unterstützen sollte). Derzeit sind die einzigen unterstützten Optionen Zeichenfolgen, die die standardmäßigen Referenzräume identifizieren. Mit diesen können Sie sicherstellen, bevor Ihr Code überhaupt ausgeführt wird, dass Sie Zugriff auf eine WebXR-Sitzung haben, die den von Ihnen benötigten oder bevorzugten Referenzraumtyp unterstützen kann.

> [!NOTE]
> Zu diesem Zeitpunkt ist der zu verwendende oder bevorzugende Referenzraum die einzige Option, die beim Erstellen einer [`XRSession`](/de/docs/Web/API/XRSession) verfügbar ist. Es ist wahrscheinlich, dass in Zukunft mehr Optionen zur Verfügung stehen werden.

## Positionieren und Ausrichten von Objekten

Alle räumlichen (Positions-, Orientierungs- und Bewegungs-) Informationen, die zwischen Ihrer App und der WebXR-API ausgetauscht werden, werden in Bezug auf einen bestimmten Raum zu dem Zeitpunkt, an dem der Frame gerendert wird, ausgedrückt. Jede weitere Positions- und Orientierungsverwaltung liegt bei Ihnen und WebGL, auch wenn Sie den Ursprungsoffset aus dem Referenzraum verwenden, um die Objekte korrekt in der 3D-Welt zu positionieren.

Wenn es an der Zeit ist, einen Animationsframe zu rendern, wird die Rückruffunktion ausgeführt, die angegeben wurde, als Sie die [`XRSession`](/de/docs/Web/API/XRSession)-Objektmethode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen haben. Die Rückruffunktion erhält als einen ihrer Parameter einen Zeitstempel, der die Zeit angibt, zu der der Frame stattfindet, und sollte alle Renderings für den entsprechenden Animationsframe durchführen.

Während die Rückruffunktion wiederholt mit steigenden Zeitwerten aufgerufen wird, generiert die Rückruffunktion eine Sequenz von Frames, die mit der XR-Hardware präsentiert werden, wobei sie so dem Benutzer eine 3D-Szene zeigen.

Sie können mehr über den Animationsprozess im Artikel [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering) erfahren.

Für ein Beispiel und eine detailliertere Erklärung auf Code-Ebene, wie man Objekte im virtuellen Raum positioniert, ausrichtet und bewegt, siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [WebGL: 2D und 3D-Darstellung für das Web](/de/docs/Web/API/WebGL_API)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
