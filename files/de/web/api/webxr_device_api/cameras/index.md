---
title: "Blickpunkte und Betrachter: Kameras in WebXR simulieren"
slug: Web/API/WebXR_Device_API/Cameras
l10n:
  sourceCommit: d9b48f268f04264e420388135f53db136e5d9272
---

{{DefaultAPISidebar("WebXR Device API")}}

Das Erste und Wichtigste, das Sie verstehen müssen, wenn Sie Code zur Verwaltung von Blickpunkten und Kameras in Ihrer Anwendung betrachten, ist Folgendes: _WebXR hat keine Kameras_. Weder die [WebGL](/de/docs/Web/API/WebGL_API)- noch die [WebXR](/de/docs/Web/API/WebXR_Device_API)-API stellt ein magisches Objekt bereit, das den Betrachter repräsentiert und das Sie drehen und bewegen können, um automatisch zu ändern, was auf dem Bildschirm zu sehen ist. In diesem Leitfaden zeigen wir, wie Sie [WebGL](/de/docs/Web/API/WebGL_API) verwenden, um Kamerabewegungen zu simulieren, ohne eine Kamera zum Bewegen zu haben. Diese Techniken können in jedem WebGL- (oder WebXR-)Projekt verwendet werden.

Die Animation von 3D-Grafiken ist ein Bereich der Softwareentwicklung, der mehrere Disziplinen der Informatik, Mathematik, Kunst, des Grafikdesigns, der Kinematik, Anatomie, Physiologie, Physik und Kinematografie zusammenführt. Da wir keine echte Kamera haben, stellen wir uns eine vor und erzeugen den _Effekt_ einer Kamera, ohne die Fähigkeit zu haben, den Benutzer tatsächlich durch die Szene zu bewegen.

Es gibt einige Artikel über die grundlegende Mathematik, Geometrie und andere Konzepte hinter WebGL und WebXR, die vor oder während der Lektüre dieses Artikels hilfreich sein können, darunter:

- [Grundlegende 3D-Theorie erklärt](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebGL-Modellansichtsprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)

_Hinweis der Redaktion: Die meisten Diagramme in diesem Artikel, die zeigen, wie sich die Kamera bei Standardbewegungen bewegt, stammen aus [einem Artikel auf der FilmmakerIQ-Website](https://web.archive.org/web/20170525025459/https://filmmakeriq.com/2016/09/the-importance-and-not-so-importance-of-film-terminology/); genauer gesagt aus [diesem Bild](https://filmmakeriq.com/wp-content/uploads/2016/09/Pan-Tilt.png), das überall im Web zu finden ist. Aufgrund ihrer häufigen Wiederverwendung nehmen wir an, dass sie unter einer freizügigen Lizenz verfügbar sind; die Eigentumsverhältnisse sind nicht sicher. Wir hoffen, dass sie frei verwendbar sind; falls nicht und Sie der Eigentümer sind, teilen Sie uns dies bitte mit, und wir werden neue Diagramme finden oder erstellen. Oder teilen Sie uns bitte mit, falls Sie mit der weiteren Verwendung der Bilder einverstanden sind, damit wir Sie korrekt nennen können!_

## Kameras und relative Bewegung

Wenn ein klassischer Realfilm gedreht wird, befinden sich die Schauspieler auf einem Set und bewegen sich während ihrer Darstellung darauf, während eine oder mehrere Kameras ihre Bewegungen verfolgen. Die Kameras können fest positioniert sein, aber sie können auch so eingerichtet werden, dass sie sich ebenfalls bewegen, um die Bewegung der Darsteller zu verfolgen, sich vor- und zurückzubewegen, um emotionale Wirkung zu erzielen, und so weiter.

### Virtuelle Kameras

In WebGL (und damit auch in WebXR) gibt es kein Kameraobjekt, das wir bewegen und drehen können, daher müssen wir einen Weg finden, diese Bewegungen vorzutäuschen. Da es keine Kamera gibt, müssen wir einen Weg finden, dies zu simulieren. Glücklicherweise haben uns Physiker wie Galileo, Newton, Lorentz und Einstein das **[Relativitätsprinzip](https://en.wikipedia.org/wiki/Principle_of_relativity)** gegeben, das besagt, dass die Gesetze der Physik in jedem Bezugssystem dieselbe Form haben. Das heißt: Unabhängig davon, wo Sie stehen, funktionieren die Gesetze der Physik auf dieselbe Weise.

Wenn Sie und eine andere Person in einem leeren Feld aus massivem Stein stehen, auf dem bis zum Horizont nichts anderes sichtbar ist, und Sie sich drei Meter auf die andere Person zubewegen, sieht das Ergebnis _gleich aus_, als hätte sich die andere Person drei Meter auf Sie zubewegt. Keiner von Ihnen kann den Unterschied erkennen. Eine dritte Partei kann den Unterschied feststellen, Sie beide jedoch nicht. Wenn Sie eine Kamera sind, können Sie dasselbe visuelle Ergebnis sowohl durch das Bewegen der Kamera _als auch durch das Bewegen von allem um die Kamera herum_ erzielen.

Und das ist unsere Lösung. Da wir die Kamera nicht bewegen können, bewegen wir die Welt um sie herum. Unser Renderer muss wissen, wo sich die vorgestellte Kamera befindet, und dann die Position jedes sichtbaren Objekts verändern, um diese Position und Ausrichtung zu simulieren. Daher wird der Begriff **Kamera** in der WebGL- und WebXR-Programmierung verwendet, um ein Objekt zu bezeichnen, das die Position und Blickrichtung eines hypothetischen Betrachters der Szene beschreibt, unabhängig davon, ob ein tatsächliches Objekt im 3D-Raum vorhanden ist oder nicht.

### Blickpunkte

Da die Kamera ein virtuelles Objekt ist, das nicht zwingend ein physisches Objekt in der virtuellen Welt repräsentiert, sondern die Position und Blickrichtung eines Betrachters, ist es nützlich, über die Arten von Situationen nachzudenken, die den Einsatz einer Kamera erfordern. Spielspezifische Situationen werden getrennt aufgeführt, da sie häufig einen speziellen Fall für Spiele darstellen; jede dieser Perspektiven kann jedoch auf jede 3D-Grafikszene zutreffen.

#### Verallgemeinerte Kameras

Im Allgemeinen können virtuelle Kameras in physische Objekte innerhalb der Szene integriert sein oder nicht. Tatsächlich ist es außerhalb des Bereichs von 3D-Spielen viel wahrscheinlicher, dass die Kamera überhaupt keinem in der Szene sichtbaren Objekt entspricht. Einige Beispiele für die Verwendung von 3D-Kameras:

- Beim Rendern von Animationen – sei es für Filme oder zur Verwendung im Kontext einer Präsentation oder eines Spiels – wird die virtuelle Kamera genau wie eine reale Filmkamera verwendet. Soweit möglich werden [standardmäßige kinematografische Techniken](#klassische_kinematografie_simulieren) verwendet, da der Betrachter wahrscheinlich mit Filmen aufgewachsen ist, die diese Techniken einsetzen, und unbewusste Erwartungen daran hat, dass ein Film oder eine Animation diesen Methoden folgt. Abweichungen davon können den Betrachter aus dem Moment reißen.
- In Geschäftsanwendungen wird die 3D-Kamera verwendet, um die scheinbare Größe und Perspektive beim Rendern von Dingen wie Diagrammen und Grafiken festzulegen.
- In Kartenanwendungen kann die Kamera entweder direkt über der Szene platziert werden oder verschiedene Winkel verwenden, um eine Perspektive darzustellen. Bei 3D-GPS-Lösungen wird die Kamera so positioniert, dass der Bereich um den Benutzer angezeigt wird, wobei der Großteil der Anzeige den Bereich vor der Bewegungsrichtung des Benutzers zeigt.
- Bei Verwendung von WebGL zur Beschleunigung des Zeichnens von 2D-Grafiken wird die Kamera typischerweise direkt über der Mitte der Szene platziert, wobei Abstand und Sichtfeld so eingestellt werden, dass die gesamte Szene dargestellt werden kann.
- Bei der Beschleunigung von Bitmap-Grafiken würde der Renderer das 2D-Bild in den Puffer einer WebGL-Textur zeichnen und anschließend die Textur erneut zeichnen, um den Bildschirm zu aktualisieren. Dies verwendet die Textur im Wesentlichen als Backbuffer für [mehrfaches Puffern](https://en.wikipedia.org/wiki/Multiple_buffering) in Ihrer 2D-Grafikanwendung.

#### Kameras in Spielen

Es gibt viele Arten von Spielen und daher mehrere Möglichkeiten, Kameras in Spielen zu verwenden. Einige häufige Situationen sind:

- In einem Ego-Spiel befindet sich die Kamera im Kopf des Avatars des Spielers und blickt in dieselbe Richtung wie die Augen des Avatars. Auf diese Weise entspricht die auf dem Bildschirm oder Headset des Spielers dargestellte Ansicht dem, was sein Avatar sehen würde.
- In einigen Third-Person-Spielen befindet sich die Kamera in geringem Abstand hinter dem Avatar oder Fahrzeug des Spielers und zeigt diesen von hinten, während er sich durch die Spielwelt bewegt. Dies wird in vielen Online-Mehrspieler-Rollenspielen, bestimmten Shooter-Spielen und so weiter verwendet. Bekannte Beispiele sind _World of Warcraft_, _Tomb Raider_ und _Fortnite_. Zu dieser Kategorie gehören auch Spiele, bei denen die Kamera knapp über der Schulter des Spielers platziert wird.
- Manche 3D-Spiele bieten die Möglichkeit, den Blickpunkt zu ändern, beispielsweise um aus verschiedenen Fenstern eines Flugzeugs in einem Flugsimulator zu schauen oder die Ansichten aller Sicherheitskameras innerhalb des Spiellevels zu sehen (eine häufige Funktion von Spionage- und Schleichspielen). Diese Fähigkeit wird auch von Spielen verwendet, die Waffen mit Zielfernrohren anbieten, bei denen die Ansicht nicht mehr auf dieselbe Weise auf der Kopfposition basiert.
- 3D-Spiele können auch die Möglichkeit bieten, dass Nichtspieler die Aktion beobachten, entweder durch Positionierung einer Art unsichtbaren Avatars oder durch Auswahl einer festen virtuellen Kamera, von der aus zugesehen wird.
- In fortgeschrittenen 3D-Spielen _könnte_ eine Kamera oder ein kameraähnliches Objekt verwendet werden, um zu bestimmen, was ein Nichtspielercharakter sehen kann, wobei für Nichtspielercharaktere dieselbe Rendering- und Physik-Engine verwendet wird wie für Spielercharaktere.
- In 2D-Spielen mit einem einzelnen Bildschirm ist die Kamera nicht direkt mit dem Spieler oder einer anderen Figur im Spiel verbunden, sondern entweder über oder neben dem Spielbereich fest positioniert oder folgt der Handlung, während diese sich durch eine scrollende Spielwelt bewegt. Ein klassisches Arcade-Spiel wie _Pac-Man_ findet beispielsweise auf einer festen Spielkarte statt, sodass die Kamera in einem festgelegten Abstand über der Karte bleibt und immer direkt auf die Spielwelt hinabzeigt.
- In einem seitlich oder vertikal scrollenden Spiel wie _Super Mario Bros._ bewegt sich die Kamera nach links und rechts (oder nach oben und unten oder in beide Richtungen), damit die Handlung sichtbar bleibt, obwohl das Spiellevel viel größer als der Viewport ist.

### Positionierung der Kamera

Da es in WebGL oder WebXR keine standardmäßigen Kameraobjekte gibt, müssen wir die Kamera selbst simulieren. Bevor wir dies tun können und bevor wir anschließend die Bewegung der Kamera simulieren können, betrachten wir zunächst die virtuelle Kamera und wie sie sich auf der grundlegendsten Ebene _bewegen kann_. Wie bei allen Dingen kann die **Position** eines Objekts im Raum – selbst wenn dieser Raum virtuell ist – durch drei Zahlen dargestellt werden, die seine Position relativ zum Ursprung angeben, dessen Position als (0, 0, 0) definiert ist.

Es gibt einen weiteren Aspekt der räumlichen Beziehung eines Objekts zum Ursprung im Raum, der berücksichtigt werden muss: die **Perspektive**. Richtig auf die Objekte in einer Szene angewendet, kann Perspektive eine Szene, die sonst so flach wie ein typischer 2D-Bildschirm aussehen würde, so hervorheben, als wäre sie wirklich 3D. Es gibt mehrere Arten von Perspektive; diese werden im Artikel [WebGL-Modellansichtsprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) definiert und mathematisch erläutert. Wichtig ist, dass die Wirkung der Perspektive auf einen Vektor durch Hinzufügen einer vierten Komponente zum Vektor dargestellt werden kann: der Perspektivkomponente namens `w`.

Der Wert von `w` wird angewendet, indem jede der anderen drei Komponenten durch ihn geteilt wird, um die endgültige Position oder den endgültigen Vektor zu erhalten; das heißt, für eine Koordinate (`x`, `y`, `z`, `w`) ist der Punkt im 3D-Raum tatsächlich (`x`/`w`, `y`/`w`, `z`/`w`, 1) oder (`x`/`w`, `y`/`w`, `z`/`w`). Wenn Sie keine Perspektive verwenden, ist `w` immer 1. In dieser Situation lauten die vollständigen Koordinaten für ein Objekt an der Position (1, 0, 3): (1, 0, 3, 1).

Die Position reicht jedoch nicht aus, um ein Objekt im 3D-Raum zu beschreiben, da der Zustand eines Objekts im Raum nicht nur seine Position betrifft, sondern auch seine Rotation beziehungsweise Blickrichtung, die auch als **Orientierung** bezeichnet wird. Die Orientierung kann mit einem 3D-Vektor dargestellt werden, der typischerweise normalisiert wird, sodass seine Länge 1,0 beträgt. Wenn das Objekt beispielsweise auf ein Objekt an der Position (3, 1, -2) blickt – also drei Meter rechts, einen Meter oben und zwei Meter vom Ursprung entfernt –, ergibt sich:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies kann auch als Array dargestellt werden:

```js
let directionVector = [3, 1, -2];
```

Für Operationen, die sowohl die Koordinaten als auch den Blickrichtungsvektor einbeziehen, muss der Vektor die Komponente `w` enthalten. Der Wert von `w` ist für Vektoren immer 0, daher kann der zuvor genannte Vektor auch durch `[3, 1, -2, 0]` oder Folgendes dargestellt werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \\ 0 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

WebXR normalisiert Vektoren automatisch auf eine Länge von 1 Meter. Aus verschiedenen Gründen kann es jedoch sinnvoll sein, dies selbst zu tun, etwa um die Leistung von Berechnungen zu verbessern, indem die Normalisierung nicht wiederholt durchgeführt werden muss.

Sobald Sie die Matrix bestimmt haben, die die Kombination der Bewegungen darstellt, welche die Kamera ausführen soll, müssen Sie sie umkehren, da Sie die Kamera nicht bewegen. Da Sie tatsächlich alles _außer_ der Kamera bewegen, nehmen Sie die Inverse der Transformationsmatrix, um eine inverse Transformationsmatrix zu erhalten. Diese inverse Matrix kann dann auf die Objekte in der Welt angewendet werden, um deren Positionen und Orientierungen zu verändern und die gewünschte Kameraposition zu simulieren.

Deshalb enthält das [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das WebXR zur Darstellung von Transformationen verwendet, eine [`inverse`](/de/docs/Web/API/XRRigidTransform/inverse)-Eigenschaft. Die Eigenschaft `inverse` ist ein weiteres `XRRigidTransform`-Objekt, das die Inverse der übergeordneten Transformation darstellt. Da das die Ansicht repräsentierende [`XRView`](/de/docs/Web/API/XRView)-Objekt eine [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft hat, die ein `XRRigidTransform` mit der Kameraansicht ist, können Sie die Modellansichtsmatrix – die Transformationsmatrix, die benötigt wird, um die Welt zur Simulation der gewünschten Kameraposition zu bewegen – folgendermaßen abrufen:

```js
let viewMatrix = view.transform.inverse.matrix;
```

Wenn die von Ihnen verwendete Bibliothek direkt ein `XRRigidTransform`-Objekt akzeptiert, können Sie stattdessen `view.transform.inverse` abrufen, anstatt nur das Array herauszuziehen, das die Ansichtsmatrix repräsentiert.

### Mehrere Transformationen zusammensetzen

Wenn Ihre Kamera mehrere Transformationen gleichzeitig ausführen muss, etwa gleichzeitig zoomen und schwenken, können Sie die Transformationsmatrizen miteinander multiplizieren, um sie zu einer einzelnen Matrix zusammenzusetzen, die beide Änderungen gleichzeitig anwendet. Im Abschnitt [Zwei Matrizen multiplizieren](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#multiplying_two_matrices) des Artikels [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) finden Sie eine klare, aber gut lesbare Funktion hierfür. Alternativ können Sie Ihre bevorzugte Matrixmathematikbibliothek wie [glMatrix](https://glmatrix.net/) verwenden.

Es ist entscheidend, sich daran zu erinnern, dass im Gegensatz zur gewöhnlichen Arithmetik, bei der die Multiplikation kommutativ ist (das heißt, Sie erhalten dasselbe Ergebnis, unabhängig davon, ob Sie von links nach rechts oder von rechts nach links multiplizieren), die Matrixmultiplikation _nicht kommutativ ist!_ Dies liegt daran, dass jede Transformation die Position des Objekts und möglicherweise sogar das Koordinatensystem selbst beeinflusst, was die Ergebnisse der nächsten ausgeführten Operation drastisch verändern kann. Sie müssen daher beim Erstellen Ihrer zusammengesetzten Transformation (oder beim direkten sequenziellen Anwenden von Transformationen) auf die Reihenfolge achten, in der Sie Ihre Transformationen anwenden.

### Die Transformation anwenden

Um die Transformation anzuwenden, multiplizieren Sie den Punkt oder Vektor mit der Transformation oder der Zusammensetzung von Transformationen.

Dies war ein sehr kurzer Überblick über die Konzepte der Position hinsichtlich physischer Lage, Orientierung oder Blickrichtung und Perspektive. Weitere Details zu diesem Thema finden Sie in den Artikeln [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry), [WebGL-Modellansichtsprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) und [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web).

## Klassische Kinematografie simulieren

Kinematografie ist die Kunst, Kamerabewegungen zu entwerfen, zu planen und auszuführen, um für eine Szene in einer Animation oder einem Film das gewünschte Erscheinungsbild und die gewünschte Emotion zu erzeugen. Es gibt eine Reihe hilfreicher Begriffe, hauptsächlich rund um Kamerabewegungen, da diese Begriffe verwendet werden, um gestaltete Blickpunktänderungen mit der virtuellen Kamera zu beschreiben. Es ist auch durchaus möglich, mehr als eine dieser Bewegungen gleichzeitig auszuführen; beispielsweise können Sie die Kamera schwenken und gleichzeitig in die Szene hineinzoomen.

Beachten Sie, dass die meisten Kamerabewegungen relativ zum Referenzraum der Kamera beschrieben werden.

Das Format zum Speichern von Matrizen ist üblicherweise ein flaches Array in spaltenweiser Reihenfolge; das heißt, die Werte aus der Matrix werden beginnend in der oberen linken Ecke geschrieben und dann _nach unten_ bis zum Ende, bevor zur nächsten Spalte rechts gewechselt und der Vorgang wiederholt wird, bis alle Werte im Array enthalten sind.

Eine Matrix, die so aussieht:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd><mtd><msub><mi>a</mi><mn>5</mn></msub></mtd><mtd><msub><mi>a</mi><mn>9</mn></msub></mtd><mtd><msub><mi>a</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd><mtd><msub><mi>a</mi><mn>6</mn></msub></mtd><mtd><msub><mi>a</mi><mn>10</mn></msub></mtd><mtd><msub><mi>a</mi><mn>14</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>3</mn></msub></mtd><mtd><msub><mi>a</mi><mn>7</mn></msub></mtd><mtd><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd><msub><mi>a</mi><mn>15</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>4</mn></msub></mtd><mtd><msub><mi>a</mi><mn>8</mn></msub></mtd><mtd><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd><msub><mi>a</mi><mn>16</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} a_{1} & a_{5} & a_{9} & a_{13} \\ a_{2} & a_{6} & a_{10} & a_{14} \\ a_{3} & a_{7} & a_{11} & a_{15} \\ a_{4} & a_{8} & a_{12} & a_{16} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

wird in Arrayform so dargestellt:

```js-nolint
let matrixArray = [
  a1, a2, a3, a4,
  a5, a6, a7, a8,
  a9, a10, a11, a12,
  a13, a14, a15, a16,
];
```

In diesem Array enthält die äußerste linke Spalte die Einträge `a1`, `a2`, `a3` und `a4`. Die oberste Zeile enthält die Einträge `a1`, `a5`, `a9` und `a13`.

Beachten Sie, dass die meisten WebGL- und WebXR-Programme Drittanbieterbibliotheken verwenden, die die grundlegende Funktionalität von WebGL erweitern, indem sie Routinen hinzufügen, welche nicht nur grundlegende Matrix- und andere Operationen erheblich vereinfachen, sondern häufig auch die Simulation dieser standardmäßigen kinematografischen Techniken. Sie sollten ernsthaft erwägen, eine solche Bibliothek zu verwenden, statt WebGL direkt einzusetzen. Dieser Leitfaden verwendet WebGL direkt, da es hilfreich ist, bis zu einem gewissen Grad zu verstehen, was hinter den Kulissen geschieht, und weil dies bei der Entwicklung von Bibliotheken oder bei der Optimierung von Code helfen kann.

> [!NOTE]
> Obwohl wir Ausdrücke wie „die Kamera bewegen“ verwenden, bewegen wir in Wirklichkeit die gesamte Welt um die Kamera herum. Dies beeinflusst die Funktionsweise bestimmter Werte, was im Folgenden jeweils angemerkt wird.

### Zoomen

Zu den bekanntesten Kameraeffekten gehört der **Zoom**. Bei einer physischen Kamera wird gezoomt, indem die Brennweite des Objektivs geändert wird; dies ist der Abstand zwischen der Mitte des Objektivs selbst und den Lichtsensoren der Kamera. Zoomen beinhaltet daher überhaupt keine Bewegung der Kamera. Stattdessen verändert eine Zoomaufnahme die Vergrößerung der Kamera im Laufe der Zeit, damit der Fokusbereich dem Betrachter näher oder weiter entfernt erscheint, ohne die Kamera tatsächlich physisch zu bewegen. Eine langsame Bewegung kann einer Szene ein Gefühl von Bewegung, Leichtigkeit oder Fokus verleihen, während ein schneller Zoom ein Gefühl von Angst, Überraschung oder Spannung erzeugen kann.

Da ein Zoom die Position der Kamera nicht verändert, ist der resultierende Effekt unnatürlich. Das menschliche Auge besitzt kein Zoomobjektiv. Wir machen Dinge kleiner oder größer, indem wir uns von ihnen weg oder auf sie zu bewegen. In der Kinematografie wird dies als [Dolly-Aufnahme](#dollying_moving_in_or_out) bezeichnet.

Es gibt in der 3D-Grafik zwei Techniken, die ähnliche, wenn auch nicht identische Ergebnisse erzeugen können und deren Methoden sich in unterschiedlichen Situationen leichter anwenden lassen.

#### Zoomen durch Anpassen des Sichtfelds

Sie können etwas erzeugen, das einem echten „Zoom“ ähnlicher ist, indem Sie das **Sichtfeld** (**FOV**) der Kamera ändern. Das Sichtfeld ist ein Winkel, der die Länge des Bogens im gesamten sichtbaren Bereich um die Kamera herum definiert, der gleichzeitig sichtbar sein soll. Bei einer physischen Kamera ist dies eine Wirkung der Brennweite; da es keine echte Kamera gibt, ist die Änderung des FOV ein brauchbarer Ersatz.

Denken Sie daran, dass der Umfang eines Kreises 2π⋅r Radiant (360°) beträgt; daher ist dies das theoretisch maximale FOV. Realistisch gesehen sehen Menschen jedoch nicht annähernd so viel, und Anzeigegeräte wie Monitore und VR-Brillen verringern das Sichtfeld tendenziell noch weiter. Menschliche Augen haben typischerweise ein horizontales Sichtfeld von etwa 135° (ungefähr 2,356 Radiant) und ein vertikales FOV von etwa 180° (π oder ungefähr 3,142 Radiant).

Wenn Sie das FOV der Kamera verkleinern, wird der Bogen verringert, der in den Viewport aufgenommen wird, wodurch dieser Inhalt beim Rendern in der Ansicht vergrößert wird. Es gibt Unterschiede zwischen diesem Effekt und einem optischen Zoom, aber das Ergebnis ist im Allgemeinen ausreichend ähnlich, um die Aufgabe zu erfüllen.

Die folgende Funktion gibt eine perspektivische Projektionsmatrix zurück, die den angegebenen Sichtfeldwinkel sowie die angegebenen Abstände der nahen und fernen Clipping-Ebene integriert:

```js
function createPerspectiveMatrix(viewport, fovDegrees, nearClip, farClip) {
  const fovRadians = fovDegrees * (Math.PI / 180.0);
  const aspectRatio = viewport.width / viewport.height;

  const transform = mat4.create();
  mat4.perspective(transform, fovRadians, aspectRatio, nearClip, farClip);
  return transform;
}
```

Nachdem der FOV-Winkel `fovDegrees` von Grad in Radiant umgerechnet und das Seitenverhältnis des durch den Parameter `viewport` angegebenen [`XRViewport`](/de/docs/Web/API/XRViewport) berechnet wurde, verwendet diese Funktion die Funktion [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective) der Bibliothek [glMatrix](https://glmatrix.net/), um die Perspektivmatrix zu berechnen.

Die Perspektivmatrix kapselt das Sichtfeld (technisch gesehen das _vertikale_ Sichtfeld), das Seitenverhältnis sowie die nahen und fernen Clipping-Ebenen in der 4x4-Matrix `transform`, die anschließend an den Aufrufer zurückgegeben wird.

Die nahe Clipping-Ebene ist der Abstand in Metern zu einer Ebene parallel zur Anzeigeoberfläche, näher als der nichts gezeichnet wird. Alle Vertices, die auf derselben Seite dieser Ebene wie die Kamera liegen, werden nicht gezeichnet. Umgekehrt ist die ferne Clipping-Ebene der Abstand in Metern zu einer Ebene, hinter der keine Vertices gezeichnet werden.

Um mit einem Skalierungsfaktor oder Prozentsatz zu zoomen, können Sie 1x (100 % der normalen Größe) dem größten FOV-Wert zuordnen, den Sie zulassen (wodurch der meiste Inhalt sichtbar wird), und dann Ihre maximale Vergrößerung dem kleinsten FOV-Wert zuordnen, den Sie unterstützen, mit entsprechenden Werten dazwischen.

Wenn Sie jeden Rendering-Durchlauf eines Frames mit der Berechnung der Perspektivmatrix beginnen, können Sie anschließend alle anderen Transformationen in diese Matrix multiplizieren, die für die gewünschte Geometrie des Frames angewendet werden müssen. Beispiel:

```js
const transform = createPerspectiveMatrix(viewport, 130, 1, 100);
const translateVec = vec3.fromValues(
  -trackDistance,
  -craneDistance,
  pushDistance,
);
mat4.translate(transform, transform, translateVec);
```

Dies beginnt mit der Perspektivmatrix, die ein vertikales Sichtfeld von 130° darstellt, und wendet anschließend eine Translation an, die die Kamera so bewegt, dass [Truck-](#trucking_moving_left_or_right), [Kran-](#pedestaling_moving_up_or_down) und [Dolly-](#dollying_moving_in_or_out)-Bewegungen einbezogen werden.

#### Skalierungstransformationen

Im Gegensatz zu einem echten „Zoom“ beinhaltet **Skalierung** die Multiplikation jedes `x`-, `y`- und `z`-Koordinatenwerts einer Position oder eines Vertex mit einem Skalierungsfaktor für diese Achse. Diese müssen nicht unbedingt für jede Achse identisch sein, obwohl das Ergebnis, das einem Zoomeffekt am nächsten kommt, denselben Wert für alle Achsen verwenden würde. Dies müsste auf jeden Vertex der Szene angewendet werden – idealerweise im Vertex-Shader.

Wenn Sie um den Faktor 2 vergrößern möchten, müssen Sie jede Komponente mit 2,0 multiplizieren. Um um denselben Betrag zu verkleinern, multiplizieren Sie sie mit -2,0. In Matrixform wird dies mit einer Transformationsmatrix ausgeführt, in die die Skalierung einbezogen ist, etwa so:

```js-nolint
let scaleTransform = [
  Sx, 0, 0, 0,
  0, Sy, 0, 0,
  0, 0, Sz, 0,
  0, 0, 0, 1
];
```

Diese Matrix stellt eine Transformation dar, die um einen durch `(Sx, Sy, Sz)` angegebenen Faktor vergrößert oder verkleinert, wobei `Sx` den Skalierungsfaktor entlang der X-Achse, `Sy` den Skalierungsfaktor entlang der Y-Achse und `Sz` den Faktor für die Z-Achse angibt. Wenn einer dieser Werte von den anderen abweicht, führt das zu einer Streckung oder Stauchung, die in einigen Dimensionen anders ist als in anderen.

Wenn derselbe Skalierungsfaktor in jede Richtung angewendet werden soll, können Sie eine einfache Funktion erstellen, um die Skalierungstransformationsmatrix für Sie zu erzeugen:

```js-nolint
function createScalingMatrix(f) {
  return [f, 0, 0, 0, 0, f, 0, 0, 0, 0, f, 0, 0, 0, 0, 1];
}
```

Mit der Transformationsmatrix wenden wir die Transformation `scaleTransform` auf den Vektor (oder Vertex) `myVector` an:

```js-nolint
let myVector = [2, 1, -3];
let scaleTransform = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1];
vec4.transformMat4(myVector, myVector, scaleTransform);
```

Oder mit Skalierung entlang jeder Achse um denselben Faktor unter Verwendung der oben gezeigten Funktion `createScalingMatrix()`:

```js
let myVector = [2, 1, -3];
vec4.transformMat4(myVector, myVector, createScalingMatrix(2.0));
```

### Schwenken (Gieren nach links oder rechts)

**Schwenken** oder **Gieren** ist die Drehung der Kamera von links nach rechts oder von rechts nach links, während ihre Basis ansonsten fest positioniert bleibt. Die Position der Kamera im Raum ändert sich nicht, nur die Richtung, in die sie blickt. Und diese Richtung ändert sich ausschließlich horizontal. Schwenken eignet sich hervorragend, um einen Schauplatz zu etablieren oder in einem weiten Raum oder bei einem großen Objekt ein Gefühl für die Dimensionen zu vermitteln. Oder einfach nur, um nach links und rechts zu schauen, etwa zur Simulation des Kopfdrehens eines Spielers in einem immersiven oder VR-Szenario.

![Ein Diagramm, das eine nach links oder rechts schwenkende Kamera zeigt](camera-pan.png)

Dazu müssen wir uns um die Y-Achse drehen, um die Links-rechts-Drehung der Kamera zu simulieren. Mit der zuvor verwendeten Bibliothek [glMatrix](https://glmatrix.net/) kann dies mithilfe der Methode `rotateY()` der Klasse `mat4` erfolgen, welche eine standardmäßige 4x4-Matrix repräsentiert. Um den durch die Matrix `viewMatrix` definierten Blickpunkt um `panAngle` Radiant zu drehen:

```js
mat4.rotateY(viewMatrix, viewMatrix, panAngle);
```

Wenn `panAngle` positiv ist, schwenkt diese Transformation die Kamera nach rechts; ein negativer Wert für `panAngle` schwenkt nach links.

### Neigen (Nicken nach oben oder unten)

Wenn Sie die Kamera **neigen** oder **nicken**, bleibt sie an denselben Koordinaten im Raum fixiert, während Sie die Richtung, in die sie vertikal blickt, ändern, ohne den horizontalen Anteil ihrer Blickrichtung zu verändern. Dies passt die Richtung an, in die sie nach oben und unten zeigt. Neigen eignet sich gut, um die Größe eines hohen Objekts oder einer hohen Szene wie eines Waldes oder Berges einzufangen, ist aber auch eine beliebte Methode, eine wichtige oder Ehrfurcht erweckende Figur oder einen solchen Ort einzuführen. Natürlich ist es auch nützlich, um die Unterstützung dafür zu implementieren, dass ein Spieler nach oben und unten blickt.

![Ein Diagramm, das eine nach oben und unten geneigte Kamera zeigt](camera-tilt.png)

Das Neigen der Kamera kann daher durch Drehung der Kamera um die X-Achse erreicht werden, sodass sie schwenkt, um nach oben und unten zu blicken. Dies kann mithilfe der geeigneten Methode Ihrer Matrixmathematikbibliothek erfolgen, beispielsweise der Methode `rotateX()` in der Klasse `mat4` von glMatrix:

```js
mat4.rotateX(viewMatrix, viewMatrix, angle);
```

Positive Werte für `angle` neigen die Kamera nach unten, während negative Werte von `angle` sie nach oben neigen.

### Dolly (Vor- oder zurückbewegen)

Eine **Dolly**-Aufnahme ist eine Aufnahme, bei der die gesamte Kamera vor- und zurückbewegt wird. Im klassischen Film wird dies typischerweise mit einer auf Schienen oder einem fahrenden Fahrzeug montierten Kamera umgesetzt. Die resultierende Bewegung kann beeindruckend glatte Effekte erzeugen, insbesondere wenn sie sich zusammen mit der Person oder dem Objekt bewegt, die beziehungsweise das im Fokus Ihrer Aufnahme steht.

![Ein Diagramm, das zeigt, wie sich eine Kamera für eine Dolly-Aufnahme bewegt](camera-dolly.png)

Auch wenn eine Dolly-Aufnahme und ein Zoom ungefähr gleich aussehen müssten, tun sie das nicht. Die Tatsache, dass Zoomen die Brennweite der Kamera verändert, bedeutet, dass sich die räumliche Beziehung zwischen dem Ziel und seiner Umgebung nicht ändert, selbst wenn das Ziel im Bild größer oder kleiner wird. Eine Dolly-Aufnahme hingegen bildet durch die tatsächliche Bewegung der Kamera das Gefühl physischer Bewegung nach und bewirkt, dass sich die Beziehungen der Objekte in der Szene erwartungsgemäß verschieben, während Sie an ihnen vorbeigehen und sich auf das Ziel der Aufnahme zu oder von ihm weg bewegen.

Um eine Dolly-Operation auszuführen, verschieben Sie die Kameraansicht entlang der Z-Achse vor und zurück:

```js
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Hier ist `[0, 0, dollyDistance]` ein Vektor, wobei `dollyDistance` die Distanz angibt, um welche die Kamera bewegt werden soll. Da dies durch die Bewegung der gesamten Welt um die Kamera herum funktioniert, bewegt sich hier tatsächlich die gesamte Welt relativ zur Kamera um `dollyDistance` Meter entlang der Z-Achse. Wenn `dollyDistance` positiv ist, bewegt sich die Welt um diesen Betrag auf den Benutzer zu, wodurch die Kamera näher an der Szene erscheint. Umgekehrt bewegen negative Werte von `dollyDistance` die Welt vom Benutzer weg, wodurch sich die Kamera scheinbar vom Ziel zurückbewegt.

### Trucking (Bewegung nach links oder rechts)

**Trucking** mit einer physischen Kamera verwendet dieselbe Art von Aufhängung wie eine Dolly-Bewegung, aber statt die Kamera vor und zurück zu bewegen, wird sie von links nach rechts oder umgekehrt bewegt. Die Kamera dreht sich überhaupt nicht, sodass der Fokus der Aufnahme langsam aus dem Bildschirm gleitet. Dies kann Konzentration, Zeitablauf oder Kontemplation vermitteln, wenn in einer Szene Emotionen etabliert werden sollen. Es wird auch häufig in „Walk-and-Talk“-Szenen verwendet, bei denen die Kamera neben den Figuren gleitet, während sie durch die Szene gehen.

![Ein Diagramm, das zeigt, wie eine Kamera nach links und rechts fährt](camera-truck.png)

Um die Kamera nach links und rechts zu bewegen, verschieben Sie die Ansichtsmatrix entlang der X-Achse in die entgegengesetzte Richtung der gewünschten Kamerabewegung:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
```

Beachten Sie den Vektor `[-truckDistance, 0, 0]`. Dieser kompensiert die Tatsache, dass die Trucking-Operation durch das Bewegen der Welt und nicht der Kamera funktioniert. Indem wir die gesamte Welt in die entgegengesetzte Richtung der durch `truckDistance` angegebenen Richtung bewegen, erzielen wir den Effekt, die Kamera in die erwartete Richtung zu bewegen. Auf diese Weise bewegen positive Werte von `truckDistance` die Kamera nach rechts (indem die Welt nach links bewegt wird), und negative Werte von `truckDistance` bewegen die Kamera nach links, indem die Welt nach rechts bewegt wird.

### Pedestal (Bewegung nach oben oder unten)

Eine **Pedestal**-Aufnahme hält die Kamera horizontal relativ zum Boden fest, bewegt sie aber direkt nach oben oder unten. Stellen Sie sich die Kamera auf einem Sockel (oder Mast) vor, der höher oder niedriger wird. Dies ist nützlich, um ein Subjekt zu verfolgen, das größer oder kleiner wird, aufsteht oder sich auf einen Stuhl setzt oder sich gerade nach oben und unten bewegt.

![Ein Diagramm, das eine mit einer Pedestal-Bewegung nach oben und unten bewegte Kamera zeigt](camera-pedestal.png)

Dies ähnelt einer **Kran**-Aufnahme, bei der eine an einem Kran befestigte Kamera nach oben und unten bewegt wird. Um eine Pedestal- oder Kranbewegung auszuführen, verschieben Sie die Ansicht entlang der Y-Achse in die entgegengesetzte Richtung der Richtung, in die Sie die Kamera bewegen möchten:

```js
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
```

Durch Negieren des Werts von `pedestalDistance` kompensieren wir die Tatsache, dass wir tatsächlich die Welt und nicht die Kamera bewegen. Positive Werte von `pedestalDistance` bewegen die Kamera also nach oben, während negative Werte sie nach unten bewegen.

### Kippen (Rollen nach links und rechts)

**Kippen** (oder **Rollen**) ist eine Drehung der Kamera um ihre Rollachse; das heißt, die Kamera bleibt im Raum fixiert und weiterhin auf denselben Ort gerichtet, dreht sich jedoch so, dass die Oberseite der Kamera in eine andere Richtung zeigt.

![Ein Diagramm, das eine nach links und rechts rollende Kamera zeigt](camera-roll.png)

Sie können sich dies vorstellen, indem Sie Ihren Arm mit geöffneter Handfläche nach unten vor sich ausstrecken. Stellen Sie sich vor, Ihre Hand sei die Kamera und der Handrücken repräsentiere die Oberseite der Kamera. Drehen Sie nun Ihre Hand so, dass die „Kamera“ auf dem Kopf steht. Sie haben Ihre Hand gerade um die Rollachse gekippt. In der Kinematografie kann Kippen verwendet werden, um verschiedene Arten unruhiger Bewegung wie Wellen oder Turbulenzen zu simulieren, aber auch für dramatische Effekte.

Um diese Rotation um die Z-Achse mit glMatrix auszuführen:

```js
mat4.rotateZ(viewMatrix, viewMatrix, cantAngle);
```

## Bewegungen kombinieren

Sie können mehrere Bewegungen gleichzeitig ausführen, etwa beim Schwenken zoomen oder gleichzeitig neigen und kippen.

### Entlang mehrerer Achsen verschieben

Das Verschieben entlang mehrerer Achsen ist recht einfach. Zuvor haben wir unsere Translationen so ausgeführt:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Die Lösung ist offensichtlich. Da die Translation als Vektor ausgedrückt wird, der die Distanz für die Bewegung entlang jeder Achse angibt, können wir sie so kombinieren:

```js
mat4.translate(viewMatrix, viewMatrix, [
  -truckDistance,
  -pedestalDistance,
  dollyDistance,
]);
```

Dies verschiebt den Ursprung der Matrix `viewMatrix` um den angegebenen Betrag entlang jeder Achse.

### Um mehrere Achsen drehen

Sie können auch Rotationen um mehrere Achsen zu einer einzelnen Rotation um ein Quaternion kombinieren, das eine gemeinsame Achse für die Rotationen repräsentiert. Um die Rotationen getrennt auszuführen, verwenden Sie [Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles) (getrennte Winkel um jede Achse), um Pitch, Yaw und Roll folgendermaßen anzuwenden:

```js
mat4.rotateX(viewMatrix, viewMatrix, pitchAngle);
mat4.rotateY(viewMatrix, viewMatrix, yawAngle);
mat4.rotateZ(viewMatrix, viewMatrix, rollAngle);
```

Stattdessen können Sie aus den Euler-Winkeln ein {{Glossary("quaternion", "Quaternion")}} konstruieren, das eine kombinierte Rotationsachse repräsentiert, und die Matrix anschließend durch Multiplikation drehen:

```js
const axisQuat = quat.create();
const rotateMatrix = mat4.create();
quat.fromEuler(axisQuat, pitchAngle, yawAngle, rollAngle);
mat4.fromQuat(rotateMatrix, axisQuat);
mat4.multiply(viewMatrix, viewMatrix, rotateMatrix);
```

Dadurch werden die Euler-Winkel für Pitch, Yaw und Roll in ein Quaternion umgewandelt, das alle drei Rotationen repräsentiert. Dieses wird anschließend in eine Rotationstransformationsmatrix umgewandelt; schließlich wird die Ansichtsmatrix mit der Rotationstransformation multipliziert, um die Rotationen abzuschließen.

## 3D mit WebXR darstellen

WebXR führt 3D-Grafiken einen Schritt weiter, indem es ermöglicht, sie mit spezieller visueller Hardware wie Brillen oder Headsets darzustellen, um 3D-Grafiken zu erzeugen, die scheinbar tatsächlich in drei Dimensionen existieren, möglicherweise im Kontext der realen Welt (bei Augmented Reality).

Um Tiefe wahrzunehmen, sind zwei Perspektiven auf die Szene erforderlich. Durch den Vergleich der beiden Ansichten ist es möglich, die Tiefe von Objekten und damit den Abstand zwischen dem Betrachter und den gesehenen Objekten zu erkennen. Deshalb haben wir zwei leicht voneinander entfernte Augen. Sie können sich daran erinnern, indem Sie abwechselnd jeweils ein Auge schließen. Beachten Sie, dass Ihr linkes Auge die linke Seite Ihrer Nase sehen kann, nicht aber die rechte, während Ihr rechtes Auge die rechte Seite Ihrer Nase sieht, nicht aber die linke. Dies ist nur einer von vielen Unterschieden zwischen dem, was jedes Ihrer Augen sieht.

Unser Gehirn erhält zwei Sätze von Daten über Lichtstärken und Wellenlängen in unserem gesamten Sichtfeld – einen von jedem Auge. Das Gehirn verwendet diese Daten, um die Szene in unserem Geist zu konstruieren, und nutzt die geringfügigen Unterschiede zwischen den beiden Perspektiven, um Tiefe und Entfernung zu bestimmen.

### Die Szene rendern

Ein XR-Headset – wobei XR als Kurzform sowohl Virtual Reality (VR) als auch Augmented Reality (AR) umfasst – präsentiert uns 3D-Bilder, indem es zwei Ansichten der Szene zeichnet, die leicht gegeneinander verschoben sind, genau wie die Ansichten unserer beiden Augen. Diese Ansichten werden dann getrennt an jedes Auge ausgegeben, damit sie die Daten erfassen können, die unser Gehirn benötigt, um in unserem Geist ein 3D-Bild zu konstruieren.

Dazu fordert WebXR Ihren Renderer auf, die Szene für jeden Videoframe zweimal zu zeichnen – einmal für jedes Auge. Die beiden Ansichten werden in denselben Framebuffer gerendert, eine links und eine rechts. Das XR-Gerät verwendet dann Bildschirme und Linsen, um die linke Hälfte des erzeugten Bildes unserem linken Auge und die rechte Hälfte unserem rechten Auge zu präsentieren.

Betrachten Sie beispielsweise ein Gerät, das einen Framebuffer mit 2560x1440 Pixeln verwendet. Wird dieser in zwei Teile geteilt – eine Hälfte für jedes Auge –, wird die Ansicht jedes Auges mit einer Auflösung von 1280x1440 Pixeln gezeichnet. Konzeptionell sieht das so aus:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Blickpunkten zweier Augen aufgeteilt wird](twoviewsoneframebuffer.svg)

Ihr Code teilt der WebXR-Engine mit, dass Sie den nächsten Animationsframe bereitstellen möchten, indem er die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) aufruft und eine Callback-Funktion bereitstellt, die einen Animationsframe rendert. Wenn der Browser die Szene rendern muss, ruft er den Callback auf und übergibt als Eingabeparameter die aktuelle Zeit und einen [`XRFrame`](/de/docs/Web/API/XRFrame), der die zum Rendern des korrekten Frames erforderlichen Daten kapselt.

Diese Informationen umfassen die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), welche die Position und Blickrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView)-Objekten, von denen jedes eine Perspektive auf die Szene repräsentiert. In aktuellen WebXR-Implementierungen enthält diese Liste nie mehr als zwei Einträge: einen, der Position und Blickwinkel des linken Auges beschreibt, und einen weiteren, der dasselbe für das rechte Auge tut. Sie können feststellen, welches Auge ein bestimmtes `XRView` repräsentiert, indem Sie den Wert seiner [`eye`](/de/docs/Web/API/XRView/eye)-Eigenschaft prüfen. Dies ist ein String mit dem Wert `left` oder `right` (ein dritter möglicher Wert, `none`, könnte theoretisch verwendet werden, um einen weiteren Blickpunkt zu repräsentieren, aber die Unterstützung dafür ist in der aktuellen API nicht vollständig verfügbar).

### Beispiel eines Frame-Callbacks

Ein recht grundlegender (aber typischer) Callback zum Rendern von Frames könnte so aussehen:

```js
function myAnimationFrameCallback(time, frame) {
  const adjustedRefSpace = applyPositionOffsets(xrReferenceSpace);
  const pose = frame.getViewerPose(adjustedRefSpace);

  animationFrameRequestID = frame.session.requestAnimationFrame(
    myAnimationFrameCallback,
  );

  if (pose) {
    const glLayer = frame.session.renderState.baseLayer;
    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
    CheckGLError("Binding the framebuffer");

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    CheckGLError("Clearing the framebuffer");

    const deltaTime = (time - lastFrameTime) * 0.001;
    lastFrameTime = time;

    for (const view of pose.views) {
      const viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      CheckGLError(`Setting viewport for eye: ${view.eye}`);

      myRenderScene(gl, view, sceneData, deltaTime);
    }
  }
}
```

Der Callback beginnt mit dem Aufruf einer benutzerdefinierten Funktion, `applyPositionOffsets()`, die einen Referenzraum übernimmt und auf dessen Transformationsmatrix alle Änderungen anwendet, die berücksichtigt werden müssen, etwa Benutzereingaben von Geräten, die nicht von WebXR gesteuert werden, wie Tastatur und Maus. Der von dieser Funktion zurückgegebene angepasste [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) wird dann an die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) abzurufen, welche die Position und den Blickwinkel des Betrachters repräsentiert.

Als Nächstes reihen wir durch erneuten Aufruf von `requestAnimationFrame()` die Anforderung zum Rendern des nächsten Videoframes ein, sodass wir uns später nicht darum kümmern müssen.

Nun ist es Zeit, die Szene zu rendern. Wenn wir erfolgreich eine Pose erhalten haben, rufen wir die zum Rendern benötigte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) aus der Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) des [`renderState`](/de/docs/Web/API/XRSession/renderState)-Objekts der Sitzung ab. Wir binden diese mithilfe der Methode [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) an das Ziel `gl.FRAMEBUFFER` von WebGL.

Anschließend leeren wir den Framebuffer, um sicherzustellen, dass wir mit einem bekannten Zustand beginnen, da unser Renderer nicht jedes Pixel berühren wird. Wir setzen die Löschfarbe mit [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf deckendes Schwarz und den Wert zum Leeren des Tiefenpuffers durch Aufruf der Methode [`gl.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) auf 1,0. Dann rufen wir die Methode [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) auf, welche den Framebuffer leert (da wir `gl.COLOR_BUFFER_BIT` in den Maskenparameter aufnehmen) und den Tiefenpuffer (weil wir `gl.DEPTH_BUFFER_BIT` aufnehmen).

Anschließend bestimmen wir, wie viel Zeit seit dem Rendern des vorherigen Frames vergangen ist, indem wir die gewünschte Renderzeit des Frames mit der Zeit vergleichen, zu der der letzte Frame gezeichnet wurde. Da dieser Wert in Millisekunden angegeben ist, rechnen wir ihn durch Multiplikation mit 0,001 (oder Division durch 1000) in Sekunden um.

Nun durchlaufen wir die Ansichten der Pose, die sich im [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Array [`views`](/de/docs/Web/API/XRViewerPose/views) befinden. Für jede Ansicht fragen wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nach dem passenden zu verwendenden Viewport und konfigurieren den WebGL-Viewport passend, indem wir die Positions- und Größeninformationen an [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben. Dies beschränkt das Rendering so, dass wir nur in den Teil des Framebuffers zeichnen können, der das Bild repräsentiert, das vom durch [`view.eye`](/de/docs/Web/API/XRView/eye) identifizierten Auge gesehen wird.

Mit den so festgelegten Einschränkungen und allem anderen, was wir benötigen, rufen wir eine benutzerdefinierte Funktion, `myRenderScene()`, auf, um tatsächlich die Berechnungen und das WebGL-Rendering zum Rendern des Frames durchzuführen. In diesem Fall übergeben wir den WebGL-Kontext `gl`, das [`XRView`](/de/docs/Web/API/XRView) `view`, ein Objekt `sceneData` (das beispielsweise Vertex- und Fragment-Shader, Vertex-Listen, Texturen usw. enthält) sowie `deltaTime`, das angibt, wie viel Zeit seit dem vorherigen Frame vergangen ist, damit wir wissen, um wie weit die Animation fortgeschritten werden muss.

Wenn diese Funktion zurückkehrt, enthält der von WebXR verwendete WebGL-Framebuffer nun zwei Kopien der Szene, die jeweils die Hälfte des Frames einnehmen: eine für das linke Auge und eine für das rechte Auge. Dies gelangt über die XR-Software und Treiber zum Headset, wo jede Hälfte dem entsprechenden Auge angezeigt wird.

## Siehe auch

- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [WebGL-Modellansichtsprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
