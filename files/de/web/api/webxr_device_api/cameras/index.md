---
title: "Ansichtspunkte und Betrachter: Kamera-Simulationen in WebXR"
slug: Web/API/WebXR_Device_API/Cameras
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Das Erste und Wichtigste, das Sie verstehen müssen, wenn Sie den Code zur Verwaltung von Blickwinkeln und Kameras in Ihrer Anwendung betrachten, ist Folgendes: _WebXR hat keine Kameras_. Es gibt kein magisches Objekt, das von der [WebGL](/de/docs/Web/API/WebGL_API)- oder der [WebXR](/de/docs/Web/API/WebXR_Device_API)-API bereitgestellt wird und den Betrachter darstellt, den Sie rotieren und bewegen können, um automatisch zu ändern, was auf dem Bildschirm zu sehen ist. In diesem Leitfaden zeigen wir, wie Sie [WebGL](/de/docs/Web/API/WebGL_API) verwenden können, um Kamerabewegungen zu simulieren, ohne eine bewegliche Kamera zu haben. Diese Techniken können in jedem WebGL- (oder WebXR-) Projekt verwendet werden.

Die Animation von 3D-Grafiken ist ein Bereich der Softwareentwicklung, der mehrere Disziplinen der Informatik, Mathematik, Kunst, Grafikdesign, Kinematik, Anatomie, Physiologie, Physik und Kinematografie vereint. Da wir keine echte Kamera haben, stellen wir uns eine vor und reproduzieren den _Effekt_ einer Kamera, ohne tatsächlich die Möglichkeit zu haben, den Benutzer durch die Szene zu bewegen.

Es gibt einige Artikel über die grundlegende Mathematik, Geometrie und andere Konzepte hinter WebGL und WebXR, die nützlich sein könnten, bevor oder während des Lesens dieses Artikels, einschließlich:

- [Erklärung der grundlegenden 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebGL Modellansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)

_Ed. Anmerkung: Die meisten in diesem Artikel verwendeten Diagramme, um zu zeigen, wie die Kamera sich bei Standardbewegungen bewegt, stammen aus [einem Artikel auf der FilmmakerIQ-Website](https://web.archive.org/web/20170525025459/https://filmmakeriq.com/2016/09/the-importance-and-not-so-importance-of-film-terminology/); namentlich, aus [diesem Bild](https://filmmakeriq.com/wp-content/uploads/2016/09/Pan-Tilt.png), das im gesamten Web zu finden ist. Wir gehen davon aus, dass sie aufgrund ihrer häufigen Wiederverwendung unter einer freizügigen Lizenz verfügbar sind, die Eigentumsverhältnisse sind unklar. Wir hoffen, dass sie freizügig nutzbar sind; falls nicht, und Sie der Eigentümer sind, lassen Sie es uns bitte wissen, und wir werden neue Diagramme finden oder erstellen. Oder, wenn Sie einverstanden sind, dass wir die Bilder weiter verwenden, lassen Sie es uns bitte wissen, damit wir Sie ordnungsgemäß würdigen können!_

## Kameras und relative Bewegung

Wenn ein klassischer Live-Action-Film gedreht wird, befinden sich die Schauspieler in einem Set und bewegen sich darin, während sie spielen, wobei eine oder mehrere Kameras ihre Bewegungen beobachten. Die Kameras können fest positioniert sein, aber sie können auch so eingerichtet sein, dass sie sich bewegen, um die Bewegungen der Darsteller zu verfolgen, emotionalen Impact zu erzielen und so weiter.

### Virtuelle Kameras

In WebGL (und im weiteren Sinne in WebXR) gibt es kein Kameraobjekt, das wir bewegen und drehen können, daher müssen wir einen Weg finden, diese Bewegungen vorzutäuschen. Da es keine Kamera gibt, müssen wir einen Weg finden, sie zu imitieren. Zum Glück haben uns Physiker wie Galileo, Newton, Lorentz und Einstein das **[Relativitätsprinzip](https://en.wikipedia.org/wiki/Principle_of_relativity)** gegeben, das besagt, dass die Naturgesetze in jedem Bezugssystem die gleiche Form haben. Das bedeutet, egal wo Sie stehen, die Naturgesetze funktionieren auf die gleiche Weise.

Im erweiterten Sinne, wenn Sie und eine andere Person in einem leeren Feld aus massivem Stein stehen, ohne dass irgendetwas anderes in Sichtweite ist, sieht es gleich aus, wenn Sie sich drei Meter auf die andere Person zubewegen, wie wenn die andere Person sich drei Meter auf Sie zubewegt. Es gibt keinen sichtbaren Unterschied für Sie beide. Ein Dritter kann den Unterschied sehen, aber Sie beide nicht. Wenn Sie eine Kamera sind, können Sie das gleiche visuelle Ergebnis sowohl durch das Bewegen der Kamera _oder durch das Bewegen von allem um die Kamera herum_ erzielen.

Und das ist unsere Lösung. Da wir die Kamera nicht bewegen können, bewegen wir die Welt um sie herum. Unser Renderer muss wissen, wo wir die Kamera vermuten, und dann die Position jedes sichtbaren Objekts ändern, um diese Position und Orientierung zu simulieren. Daher wird statt eines echten Kameraobjekts der Begriff **Kamera** in WebGL und WebXR-Programmierung verwendet, um ein Objekt zu beschreiben, das die Position und Blickrichtung eines hypothetischen Betrachters der Szene beschreibt, unabhängig davon, ob tatsächlich ein Objekt im 3D-Raum vorhanden ist oder nicht.

### Blickpunkte

Da die Kamera ein virtuelles Objekt ist, das nicht zwangsläufig ein physisches Objekt in der virtuellen Welt darstellt, sondern die Position und Blickrichtung eines Betrachters repräsentiert, ist es nützlich, über die Arten von Situationen nachzudenken, die den Einsatz einer Kamera erfordern. Spielsituationen werden separat aufgelistet, da sie häufig ein besonderer Fall speziell für Spiele sind, aber jede dieser Perspektiven kann auf jede 3D-Grafikszene angewendet werden.

#### Generalisierte Kameras

Im Allgemeinen können virtuelle Kameras in physische Objekte innerhalb der Szene integriert sein oder auch nicht. Tatsächlich ist außerhalb des Bereichs von 3D-Spielen die Wahrscheinlichkeit viel größer, dass die Kamera keinem Objekt entspricht, das überhaupt in der Szene erscheint. Einige Beispiele für die Verwendung von 3D-Kameras sind:

- Beim Rendern von Animationen - sei es für das Filmemachen oder für die Verwendung im Kontext einer Präsentation oder eines Spiels - wird die virtuelle Kamera genauso verwendet wie eine echte Filmkamera. Soweit wie möglich werden [Standard-Kinematografietechniken](#simulation_der_klassischen_kinematografie) verwendet, da der Betrachter wahrscheinlich mit Filmen aufgewachsen ist, die diese Techniken nutzen, und unterbewusst erwartet, dass ein Film oder eine Animation diesen Methoden folgt. Abweichungen davon können den Betrachter aus dem Moment herausreißen.
- In Geschäftsanwendungen wird die 3D-Kamera verwendet, um die scheinbare Größe und Perspektive beim Rendern von Dingen wie Grafiken und Diagrammen festzulegen.
- In Kartenanwendungen kann die Kamera entweder direkt über der Szene platziert sein oder verschiedene Winkel verwenden, um Perspektiven zu zeigen. Für 3D-GPS-Lösungen wird die Kamera so positioniert, dass sie den Bereich um den Benutzer herum zeigt, wobei der Großteil der Anzeige den Bereich vor dem Bewegungsweg des Benutzers zeigt.
- Bei der Verwendung von WebGL zur Beschleunigung des Zeichnens von 2D-Grafiken wird die Kamera in der Regel direkt über dem Zentrum der Szene platziert, wobei die Entfernung und das Sichtfeld so eingestellt sind, dass die gesamte Szene dargestellt werden kann.
- Beim Beschleunigen von Bitmapping-Grafiken würde der Renderer das 2D-Bild in den Puffer eines WebGL-Texturs speichern und dann die Textur neu zeichnen, um den Bildschirm zu aktualisieren. Dies nutzt im Wesentlichen die Textur als Backpuffer zur Durchführung von [mehrfacher Pufferung](https://en.wikipedia.org/wiki/Multiple_buffering) in Ihrer 2D-Grafikanwendung.

#### Kameras im Gaming

Es gibt viele Arten von Spielen und daher mehrere Möglichkeiten, wie Kameras in Spielen eingesetzt werden können. Einige typische Situationen sind:

- In einem Ego-Shooter-Spiel befindet sich die Kamera innerhalb des Kopfes des Spieleravatars und schaut in dieselbe Richtung wie die Augen des Avatars. Auf diese Weise wird auf dem Bildschirm oder Headset des Spielers das angezeigt, was der Avatar sehen würde.
- In einigen Third-Person-Spielen befindet sich die Kamera in einem kurzen Abstand hinter dem Avatar oder Fahrzeug des Spielers und zeigt sie von hinten, während sie sich durch die Spielwelt bewegen. Dies wird in vielen Online-Rollenspielen, bestimmten Shooter-Spielen und so weiter verwendet. Populäre Beispiele sind _World of Warcraft_, _Tomb Raider_ und _Fortnite_. Diese Kategorie umfasst auch Spiele, in denen die Kamera direkt über der Schulter des Spielers platziert ist.
- Einige 3D-Spiele bieten die Möglichkeit, die Perspektive zu ändern, z. B. um aus verschiedenen Fenstern eines Flugzeugs in einem Flugsimulator zu schauen oder um die Ansichten von allen Sicherheitskameras innerhalb des Spielniveaus zu sehen (eine häufige Funktion von Spionage- und Stealth-Spielen). Diese Fähigkeit wird auch von Spielen mit Waffen mit Zielfernrohren genutzt, bei denen das Sichtfeld nicht mehr ganz auf der Kopfposition basiert.
- 3D-Spiele könnten auch die Möglichkeit bieten, dass Nicht-Spieler die Aktion beobachten, entweder durch die Positionierung eines unsichtbaren Avatars oder durch die Auswahl einer festen virtuellen Kamera zum Anschauen.
- In fortgeschrittenen 3D-Spielen _könnte_ ein Kamera- oder kameraähnliches Objekt verwendet werden, um zu bestimmen, was ein Nicht-Spieler-Charakter sehen kann, und dabei auf die gleichen Render- und Physik-Engines wie Spielercharaktere zuzugreifen.
- In Einzelbildschirm-2D-Spielen wird die Kamera nicht direkt mit dem Spieler oder einem anderen Charakter im Spiel verbunden, sondern bleibt entweder über oder neben dem Spielbereich fixiert oder folgt der Aktion, wenn sie sich durch eine scrollende Spielwelt bewegt. In einem klassischen Arcade-Spiel wie _Pac-Man_ spielt sich das Geschehen auf einer festen Spielfläche ab, sodass die Kamera in einem festen Abstand über der Karte bleibt und immer direkt auf die Spielfläche zeigt.
- In einem seitlich oder von oben scrollenden Spiel wie _Super Mario Bros._ bewegt sich die Kamera nach links und rechts (oder oben und unten oder in beide Richtungen), um sicherzustellen, dass die Aktion sichtbar bleibt, selbst wenn das Spielniveau viel größer als das Ansichtsfenster ist.

### Positionierung der Kamera

Da es in WebGL oder WebXR keine Standard-Kameraobjekte gibt, müssen wir die Kamera selbst simulieren. Bevor wir dies tun und bevor wir dann die Bewegung der Kamera simulieren können, werfen wir tatsächlich einen Blick auf die virtuelle Kamera und darauf, wie sie sich auf der grundlegendsten Ebene bewegen _kann_. Wie bei allem kann die **Position** eines Objekts im Raum - auch wenn dieser Raum virtuell ist - mit drei Zahlen dargestellt werden, die seine Position relativ zum Ursprung angeben, dessen Position als (0, 0, 0) definiert wird.

Ein weiterer Aspekt der räumlichen Beziehung eines Objekts zum Ursprung im Raum, den es zu berücksichtigen gilt, ist die **Perspektive**. Richtig auf die Objekte in einer Szene angewandt, kann die Perspektive eine Szene, die sonst so flach wie ein typischer 2D-Bildschirm aussehen würde, wirklich so erscheinen lassen, als wäre sie wirklich dreidimensional. Es gibt mehrere Arten von Perspektiven; diese sind definiert und ihre Mathematik wird im Artikel [WebGL Modellansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) erklärt. Wichtig ist, dass der Effekt der Perspektive auf einen Vektor dargestellt werden kann, indem eine vierte Komponente zum Vektor hinzugefügt wird: die Perspektivkomponente, genannt `w`.

Der `w`-Wert wird angewendet, indem jeder der anderen drei Komponenten durch ihn dividiert wird, um die endgültige Position oder den Vektor zu erhalten; das heißt, für eine Koordinate angegeben als (`x`, `y`, `z`, `w`) ist der Punkt im 3D-Raum tatsächlich (`x`/`w`, `y`/`w`, `z`/`w`, 1) oder (`x`/`w`, `y`/`w`, `z`/`w`). Wenn Sie keine Perspektive verwenden, ist `w` immer 1. In dieser Situation sind die vollständigen Koordinaten für ein an (1, 0, 3) gelegenes Objekt (1, 0, 3, 1).

Aber die Lagebeschreibung allein reicht nicht aus, um ein Objekt im 3D-Raum zu beschreiben, da der Zustand eines Objekts im Raum nicht nur von seiner Lage, sondern auch von seiner Rotation oder Blickrichtung, also seiner **Orientierung**, abhängt. Die Orientierung kann mit einem 3D-Vektor dargestellt werden, der normalerweise normalisiert wird, sodass seine Länge 1,0 beträgt. Zum Beispiel, wenn das Objekt einem an (3, 1, -2) gelegenen Objekt zugewandt ist - d. h. drei Meter nach rechts, ein Meter nach oben und zwei Meter vom Ursprung entfernt - ist das Ergebnis:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies kann auch als ein Array dargestellt werden:

```js
let directionVector = [3, 1, -2];
```

Für die Durchführung von Operationen, die sowohl die Koordinaten als auch den Blickrichtungsvektor betreffen, muss der Vektor die `w`-Komponente beinhalten. Der Wert von `w` ist für Vektoren immer 0, sodass der erwähnte Vektor auch mit `[3, 1, -2, 0]` oder:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \\ 0 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

WebXR normalisiert Vektoren automatisch so, dass sie eine Länge von 1 Meter haben; Sie könnten jedoch feststellen, dass es für verschiedene Gründe Sinn macht, dies selbst zu tun, z.B. um die Leistung der Berechnungen zu verbessern, indem man die Normalisierung nicht wiederholt durchführt.

Sobald Sie die Matrix bestimmt haben, die die Kombination von Bewegungen darstellt, die Sie mit der Kamera durchführen möchten, müssen Sie sie umkehren, weil Sie die Kamera nicht bewegen. Da Sie tatsächlich alles _außer_ der Kamera bewegen, nehmen Sie die Inverse der Transformationsmatrix, um eine inverse Transformationsmatrix zu erhalten. Diese inverse Matrix kann dann auf die Objekte in der Welt angewendet werden, um deren Positionen und Orientierungen zu ändern, um die gewünschte Kameraposition zu simulieren.

Deshalb enthält das [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das von WebXR zur Darstellung von Transformationen verwendet wird, eine [`inverse`](/de/docs/Web/API/XRRigidTransform/inverse)-Eigenschaft. Die `inverse`-Eigenschaft ist ein weiteres `XRRigidTransform`-Objekt, das die Inverse der übergeordneten Transformation ist. Da das [`XRView`](/de/docs/Web/API/XRView), das die Ansicht darstellt, eine [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft hat, die ein `XRRigidTransform` zur Bereitstellung der Kamerasicht ist, können Sie die Model-View-Matrix erhalten, die Transformationsmatrix, die benötigt wird, um die Welt zu bewegen, um die gewünschte Kameraposition zu simulieren, so:

```js
let viewMatrix = view.transform.inverse.matrix;
```

Wenn die von Ihnen verwendete Bibliothek ein `XRRigidTransform`-Objekt direkt akzeptiert, können Sie stattdessen `view.transform.inverse` abrufen, anstatt nur das Array der Darstellungsansichtsmatrix herauszuholen.

### Zusammensetzen mehrerer Transformationen

Wenn Ihre Kamera mehrere Transformationen gleichzeitig ausführen muss, wie z. B. das gleichzeitige Zoomen und Schwenken, können Sie die Transformationsmatrizen multiplizieren, um sie zu einer einzigen Matrix zu kombinieren, die beide Änderungen gleichzeitig anwendet. Siehe [Multiplizieren zweier Matrizen](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#multiplying_two_matrices) im Artikel [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) für eine klare, aber für Menschen lesbare Funktion, die dies tun kann, oder verwenden Sie Ihre bevorzugte Matrix-Mathematik-Bibliothek wie [glMatrix](https://glmatrix.net/), um die Arbeit zu erledigen.

Es ist entscheidend zu beachten, dass im Gegensatz zu typischer Arithmetik, bei der Multiplikation kommutativ ist (d. h., Sie erhalten das gleiche Ergebnis, unabhängig davon, ob Sie von links nach rechts oder von rechts nach links multiplizieren), Matrixmultiplikation _nicht kommutativ ist!_ Dies liegt daran, dass jede Transformation die Position des Objekts und möglicherweise das gesamte Koordinatensystem selbst beeinflusst, was die Ergebnisse der nächsten durchgeführten Operation dramatisch verändern kann. Daher müssen Sie vorsichtig mit der Reihenfolge sein, in der Sie Ihre Transformationen anwenden, wenn Sie Ihre zusammengesetzte Transformation aufbauen (oder Transformationen direkt in Folge anwenden).

### Anwenden der Transformation

Um die Transformation anzuwenden, multiplizieren Sie den Punkt oder Vektor mit der Transformations- oder zusammengesetzten Transformation.

Dies war eine sehr kurze Übersicht über die Konzepte der Position in Bezug auf den physischen Standort, die Orientierung oder Blickrichtung und die Perspektive. Für weitere Details zu diesem Thema lesen Sie die Artikel [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry), [WebGL Modellansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) und [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web).

## Simulation der klassischen Kinematografie

Kinematografie ist die Kunst, Kamerabewegungen zu entwerfen, zu planen und auszuführen, um das gewünschte Aussehen und die gewünschte Emotion für eine Szene in Animation oder Film zu schaffen. Es gibt eine Reihe von Begriffen, die es zu verstehen gilt, hauptsächlich im Zusammenhang mit Kamerabewegungen, da diese Begriffe verwendet werden, um gestaltete Blickwinkelveränderungen mit der virtuellen Kamera zu beschreiben. Es ist auch durchaus möglich, mehr als eine dieser Bewegungen gleichzeitig auszuführen; zum Beispiel können Sie die Kamera schwenken, während Sie gleichzeitig in die Szene hineinzoomen.

Denken Sie daran, dass die Mehrheit der Kamerabewegungen relativ zum Referenzraum der Kamera beschrieben wird.

Das Format zum Speichern von Matrizen ist im Allgemeinen als flaches Array in Spalten-Major-Ordnung; das heißt, die Werte der Matrix werden beginnend mit der oberen linken Ecke geschrieben und bewegen sich _nach unten_ bis zur unteren, dann nach rechts zur nächsten Spalte und wiederholen sich, bis alle Werte im Array sind.

Daher sieht eine Matrix, die so aussieht:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd><mtd><msub><mi>a</mi><mn>5</mn></msub></mtd><mtd><msub><mi>a</mi><mn>9</mn></msub></mtd><mtd><msub><mi>a</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd><mtd><msub><mi>a</mi><mn>6</mn></msub></mtd><mtd><msub><mi>a</mi><mn>10</mn></msub></mtd><mtd><msub><mi>a</mi><mn>14</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>3</mn></msub></mtd><mtd><msub><mi>a</mi><mn>7</mn></msub></mtd><mtd><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd><msub><mi>a</mi><mn>15</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>4</mn></msub></mtd><mtd><msub><mi>a</mi><mn>8</mn></msub></mtd><mtd><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd><msub><mi>a</mi><mn>16</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} a_{1} & a_{5} & a_{9} & a_{13} \\ a_{2} & a_{6} & a_{10} & a_{14} \\ a_{3} & a_{7} & a_{11} & a_{15} \\ a_{4} & a_{8} & a_{12} & a_{16} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

In Array-Form so dargestellt:

```js-nolint
let matrixArray = [
  a1, a2, a3, a4,
  a5, a6, a7, a8,
  a9, a10, a11, a12,
  a13, a14, a15, a16,
];
```

In diesem Array enthält die linksspalte die Einträge `a1`, `a2`, `a3` und `a4`. Die oberste Reihe enthält die Einträge `a1`, `a5`, `a9` und `a13`.

Beachten Sie, dass die meisten WebGL- und WebXR-Programmierungen unter Verwendung von Drittanbieterbibliotheken durchgeführt werden, die die Grundfunktionalität von WebGL erweitern, indem sie Routinen hinzufügen, die es wesentlich erleichtern, nicht nur Kernmatrix- und andere Operationen durchzuführen, sondern oft auch diese standardisierten kinematografischen Techniken zu simulieren. Sie sollten ernsthaft in Erwägung ziehen, eine davon zu verwenden, anstatt direkt WebGL zu verwenden. Dieser Leitfaden verwendet WebGL direkt, da es nützlich ist, zumindest teilweise zu verstehen, was unter der Haube passiert, und um bei der Entwicklung von Bibliotheken zu helfen oder Ihrem Code zu einer höheren Effizienz zu verhelfen.

> [!NOTE]
> Auch wenn wir Ausdrücke wie "verschieben Sie die Kamera" verwenden, verschieben wir tatsächlich die gesamte Welt um die Kamera herum. Dies beeinflusst, wie bestimmte Werte funktionieren, worauf unten hingewiesen wird, wenn es relevant ist.

### Zoomen

Einer der bekanntesten Kameraeffekte ist das **Zoomen**. Zoomen wird bei einer physischen Kamera durch das Ändern der Brennweite des Objektivs durchgeführt; dies ist der Abstand zwischen der Mitte des Objektivs selbst und den Lichtsensoren der Kamera. Das Zoomen beinhaltet daher keine Bewegung der Kamera. Stattdessen verändert ein Zoom-Shot die Vergrößerung der Kamera im Laufe der Zeit, um den Fokusbereich näher oder weiter entfernt erscheinen zu lassen, ohne die Kamera physisch zu bewegen. Eine langsame Bewegung kann einer Szene eine Bewegung, Leichtigkeit oder Konzentration verleihen, während ein schneller Zoom ein Gefühl von Angst, Überraschung oder Spannung erzeugen kann.

Da ein Zoom nicht die Position der Kamera bewegt, ist der resultierende Effekt unnatürlich. Das menschliche Auge hat kein Zoomobjektiv. Wir machen Dinge kleiner oder größer, indem wir uns von ihnen entfernen oder auf sie zugehen. In der Kinematografie nennt man das eine [Dolly-Aufnahme](#dollying_moving_in_or_out).

Es gibt zwei Techniken in der 3D-Grafik, die ähnliche, jedoch nicht identische Ergebnisse erzielen können und deren Methoden sich je nach Situation leichter anwenden lassen.

#### Zoomen durch Anpassen des Sichtfeldes

Sie können etwas tun, das eher einem echten "Zoom" ähnelt, indem Sie das **Sichtfeld** (**FOV**) der Kamera verändern. Das Sichtfeld ist ein Winkel, der die Länge des Bogens auf dem gesamten sichtbaren Bereich um die Kamera definiert, der auf einmal sichtbar sein sollte. Dies ist ein Effekt der Brennweite in einer physischen Kamera, daher ist das Ändern des FOV ein akzeptabler Ersatz, da keine echte Kamera vorhanden ist.

Erinnern Sie sich daran, dass der Umfang eines Kreises 2π⋅r Radianten (360°) beträgt; dies ist daher das theoretische maximale FOV. Realistisch gesehen sehen Menschen nicht nur in etwa in diesem Umfang, sondern Anzeigegeräte wie Monitore und VR-Brillen neigen dazu, das Sichtfeld noch weiter zu reduzieren. Menschliche Augen haben typischerweise ein horizontales Sichtfeld von etwa 135° (ungefähr 2,356 Radianten) und ein vertikales Sichtfeld von etwa 180° (π oder etwa 3,142 Radianten).

Wenn das Sichtfeld der Kamera kleiner wird, reduziert sich der Bogen, der im Ansichtsbereich enthalten wird, was den Inhalt beim Rendern vergrößert erscheinen lässt. Es gibt Unterschiede zwischen diesem und einem optischen Zoom-Effekt, aber das Ergebnis ist im Allgemeinen nah genug, um die Aufgabe zu erfüllen.

Die folgende Funktion gibt eine Projektionsperspektivmatrix zurück, die den angegebenen Sichtfeldwinkel sowie die angegebenen Abstände von der nahen und fernen Clippingebene integriert:

```js
function createPerspectiveMatrix(viewport, fovDegrees, nearClip, farClip) {
  const fovRadians = fovDegrees * (Math.PI / 180.0);
  const aspectRatio = viewport.width / viewport.height;

  const transform = mat4.create();
  mat4.perspective(transform, fovRadians, aspectRatio, nearClip, farClip);
  return transform;
}
```

Nach der Umwandlung des FOV-Winkels, `fovDegrees`, von Grad in Radfiguren und der Berechnung des Seitenverhältnisses des angegebenen [`XRViewport`](/de/docs/Web/API/XRViewport) durch den Parameter `viewport` verwendet diese Funktion die [glMatrix](https://glmatrix.net/) Bibliotheksfunktion [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective), um die Perspektivmatrix zu berechnen.

Die Perspektivmatrix umfasst das Sichtfeld (technisch handelt es sich hierbei um das _vertikale_ Sichfeld), das Seitenverhältnis sowie die Abstände der nahen und fernen Clippingebene innerhalb der 4x4-Matrix `transform`, die dann an den Anrufer zurückgegeben wird.

Die nahe Clipping-Ebene ist der Abstand in Metern zu einer Ebene parallel zur Anzeigefläche, innerhalb dessen nichts gezeichnet wird. Alle Scheitelpunkte, die auf derselben Seite dieser Ebene wie die Kamera liegen, werden nicht angezeigt. Umgekehrt ist die ferne Clipping-Ebene der Abstand in Metern zu einer Ebene, jenseits derer keine Scheitelpunkte angezeigt werden.

Um mit einem Skalierungsfaktor oder Prozentsatz zu zoomen, können Sie 1x (100% der normalen Größe) auf den größten von Ihnen zulässigen FOV-Wert abbilden (was zu einem am meisten sichtbaren Inhalt führt), dann Ihre maximale Vergrößerung auf den maximalen von Ihnen unterstützten FOV-Wert abbilden und entsprechende Werte dazwischen abbilden.

Wenn Sie mit jedem Frame-Durchgang das Perspektivmatrix berechnen, können Sie in diese Matrix alle anderen Transformationen multiplizieren, die Sie anwenden müssen, um die gewünschte Geometrie des Frames zu reduzieren. Zum Beispiel:

```js
const transform = createPerspectiveMatrix(viewport, 130, 1, 100);
const translateVec = vec3.fromValues(
  -trackDistance,
  -craneDistance,
  pushDistance,
);
mat4.translate(transform, transform, translateVec);
```

Dies beginnt mit der Perspektivmatrix, die ein vertikales Sichtfeld von 130° darstellt, und wendet dann eine Übersetzung an, die die Kamera auf eine Weise bewegt, die Bewegungen wie [tracking](#track), [crane](#crane) und [push](#push) die Bewegungen umfasst.

#### Skalierungstransformationen

Im Gegensatz zu einem echten "Zoom" beinhaltet **Skalierung** das Multiplizieren eines jedes der `x`, `y` und `z` Koordinatenwerte in einer Position oder einem Scheitelpunkt mit einem Skalierungsfaktor für diese Achse. Diese müssen nicht unbedingt identisch für jede Achse sein, obwohl das am nächsten liegende Ergebnis, das Sie zu einem Zoom-Effekt erzielen können, darin bestünde, denselben Wert für jede Achse zu verwenden. Dies müsste auf jeden Scheitelpunkt in der Szene angewendet werden - idealerweise im Vertex-Shader.

Wenn Sie um den Faktor 2 skalieren möchten, müssen Sie jede Komponente mit 2,0 multiplizieren. Um um denselben Betrag zu verkleinern, multiplizieren Sie sie mit -2,0. In Matrizenbegriffen wird dies mit einer Transformationsmatrix mit eingehender Skalierung durchgeführt, wie folgt:

```js-nolint
let scaleTransform = [
  Sx, 0, 0, 0,
  0, Sy, 0, 0,
  0, 0, Sz, 0,
  0, 0, 0, 1
];
```

Diese Matrix stellt eine Transformation dar, die durch einen Faktor `(Sx, Sy, Sz)` skaliert wird, wobei `Sx` den Skalierungsfaktor entlang der X-Achse, `Sy` den Skalierungsfaktor entlang der Y-Achse und `Sz` den Faktor entlang der Z-Achse angibt. Wenn sich einer dieser Werte von den anderen unterscheidet, werden das Strecken oder die Kontraktion in einigen Dimensionen im Vergleich zu anderen anders auftreten.

Wenn derselbe Skalierungsfaktor in jede Richtung angewendet werden soll, können Sie eine einfache Funktion erstellen, um die Skalierungsmatrix für Sie zu erzeugen:

```js-nolint
function createScalingMatrix(f) {
  return [f, 0, 0, 0, 0, f, 0, 0, 0, 0, f, 0, 0, 0, 0, 1];
}
```

Mit der Transformationsmatrix in der Hand wenden wir die Transformation `scaleTransform` auf den Vektor (oder Vertex) `myVector` an:

```js-nolint
let myVector = [2, 1, -3];
let scaleTransform = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1];
vec4.transformMat4(myVector, myVector, scaleTransform);
```

Oder indem Sie entlang jeder Achse mit demselben Faktor den `createScalingMatrix()` Funktion oben verwenden:

```js
let myVector = [2, 1, -3];
vec4.transformMat4(myVector, myVector, createScalingMatrix(2.0));
```

### Schwenken (Yawing nach links oder rechts)

**Schwenken** oder **Yaw** ist die Drehung der Kamera von links nach rechts oder umgekehrt, wobei ihre Basis ansonsten fest an Ort und Stelle belassen wird. Die Position der Kamera im Raum ändert sich nicht, nur die Richtung, in die sie schaut. Und diese Richtung ändert sich nur horizontal. Schwenken ist großartig, um eine Umgebung zu etablieren oder ein Gefühl von Weite in einem großen Raum oder auf einem großen Objekt zu vermitteln. Oder einfach, um nach links und rechts zu schauen, wie beim Simulation des Drehens des Kopfes in einer immersiven oder VR-Szene.

![Ein Diagramm, das eine Kamera zeigt, die nach links oder rechts schwenkt](camera-pan.png)

Um dies zu erreichen, müssen wir uns um die Y-Achse drehen, um die linke und rechte Drehung der Kamera zu simulieren. Unter Verwendung der zuvor verwendeten [glMatrix](https://glmatrix.net/) Bibliothek kann dies mit der `rotateY()`-Methode auf der `mat4`-Klasse durchgeführt werden, die eine Standard-4x4-Matrix darstellt. Um den mit `viewMatrix` definierten Sichtpunkt um `panAngle` Radianten zu drehen:

```js
mat4.rotateY(viewMatrix, viewMatrix, panAngle);
```

Wenn `panAngle` positiv ist, schwenkt diese Transformation die Kamera nach rechts; ein negativer Wert für `panAngle` schwenkt nach links.

### Kippen (Pitching nach oben oder unten)

Beim **Kippen** oder **Neigen** der Kamera – bleiben Sie an derselben Stelle fixiert, ändern jedoch die Richtung, in die sie vertikal zeigt, ohne den horizontalen Teil ihrer Blickrichtung überhaupt zu verändern. Es passt die Richtung an, in die es nach oben und unten zeigt. Kippen ist gut geeignet, um die Größe eines hohen Objekts oder einer Szene zu erfassen, wie etwa eines Waldes oder eines Berges, es ist jedoch auch eine beliebte Möglichkeit, einen Charakter oder einen wichtigen Schauplatz vorzustellen, der Ehrfurcht inspiriert. Es ist natürlich auch nützlich, um die Unterstützung für einen Spieler zu implementieren, der nach oben und unten schaut.

![Ein Diagramm, das eine Kamera zeigt, die nach oben und unten kippt](camera-tilt.png)

Daher kann das Neigen der Kamera erreicht werden, indem die Kamera um die X-Achse gedreht wird, sodass sie sich dreht, um nach oben und unten zu schauen. Dies kann unter Verwendung der entsprechenden Methode in Ihrer Matrix-Mathematik-Bibliothek erreicht werden, z. B. der `rotateX()`-Methode in glMatrix's `mat4` Klasse:

```js
mat4.rotateX(viewMatrix, viewMatrix, angle);
```

Positive Werte für `angle` neigen die Kamera nach unten, während negative Werte von `angle` die Kamera nach oben neigen.

### Dollying (Bewegen nach innen oder außen)

Eine **Dolly**-Aufnahme ist eine, bei der die gesamte Kamera vorwärts und rückwärts bewegt wird. Im klassischen Filmemachen wird dies typischerweise mit der Kamera auf einer Schiene oder einem beweglichen Fahrzeug gemacht. Die resultierende Bewegung kann beeindruckend sanfte Effekte erzeugen, besonders wenn sie zusammen mit der Person oder dem Objekt, das der Fokus Ihrer Aufnahme ist, bewegt.

![Ein Diagramm, das zeigt, wie eine Kamera für eine Dolly-Aufnahme bewegt wird](camera-dolly.png)

Eine Dolly-Aufnahme und ein Zoom scheinen ungefähr gleich aussehen sollen, aber dem ist nicht so. Die Tatsache, dass das Zoomen die Brennweite der Kamera verändert, bedeutet, dass sich die räumlichen Beziehungen zwischen dem Zielobjekt und seinem Umfeld nicht ändern, selbst wenn das Zielobjekt im Bild größer oder kleiner wird. Andererseits repliziert eine Dolly-Aufnahme, indem sie tatsächlich die Kamera bewegt, das Gefühl der physischen Bewegung und führt dazu, dass sich die Beziehungen von Objekten in der Szene verschieben, wie Sie es erwarten würden, während Sie an ihnen vorbei gehen auf das Ziel der Aufnahme zu oder weg von ihm.

Um eine Dolly-Operation durchzuführen, übersetzen Sie die Kamerasicht entlang der Z-Achse vorwärts und rückwärts:

```js
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Hier ist `[0, 0, dollyDistance]` eine Vektor, in dem `dollyDistance` der Abstand ist, um die Kamera zu bewegen. Da dies damit arbeitet, die gesamte Welt um die Kamera zu bewegen, was hier wirklich geschieht, bewegt sich die gesamte Welt relativ zur Kamera entlang der Z-Achse um `dollyDistance` Meter. Wenn `dollyDistance` positiv ist, bewegt sich die Welt um diesen Betrag auf den Benutzer zu, was dazu führt, dass die Kamera näher zur Szene sitzt. Umgekehrt bewegen negative Werte von `dollyDistance` die Welt vom Benutzer weg und lassen die Kamera rückwärts von dem Ziel erscheinen.

### Trucking (Bewegen nach links oder rechts)

**Trucking** mit einer physischen Kamera verwendet dieselbe Art von Vorrichtung wie bei einer Dolly-, bewegt die Kamera aber von links nach rechts oder umgekehrt, anstatt sie vorwärts und rückwärts zu bewegen. Die Kamera wird überhaupt nicht gedreht, sodass der Fokus der Aufnahme langsam aus dem Bildschirm gleitet. Dies kann Konzentration, Zeitempfinden oder Nachdenklichkeit suggerieren, wenn versucht wird, Emotionen in einer Szene auszudrücken. Oft völlig häufig in "Walk-and-Talk"-Szenen, in denen die Kamera neben den Charakteren durch die Szene gleitet, genutzt.

![Ein Diagramm, das zeigt, wie eine Kamera von links nach rechts bewegt wird](camera-truck.png)

Um die Kamera nach links und rechts zu bewegen, übersetzen Sie die Ansichts-Matrix entlang der X-Achse in die entgegengesetzte Richtung der gewünschten Kamerabewegung:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
```

Beachten Sie den Vektor `[-truckDistance, 0, 0]`. Dies kompensiert dafür, dass der Truck-Vorgang durch die Bewegung der Welt anstelle der Kamera funktioniert. Indem wir die gesamte Welt in die entgegengesetzte Richtung von der durch `truckDistance` angegebenen Richtung bewegen, erreichen wir den Effekt, die Kamera in die erwartete Richtung zu bewegen. In dieser Weise, werden die positiven Werte von `truckDistance` die Kamera nach rechts bewegen (indem sie die Welt nach links verschieben), während negative Werte von `truckDistance` die Kamera nach links bewegen werden, indem sie die Welt nach rechts verschieben.

### Pedestaling (Bewegen nach oben oder unten)

Ein **Pedestal**-Shot ist einer, bei dem die Kamera horizontal relativ zum Boden fixiert bleibt, sich jedoch gerade nach oben oder unten bewegt. Stellen Sie sich die Kamera auf einem Sockel (oder einer Stange) vor, die höher oder niedriger wird. Dies ist nützlich, um einem Probanden zu folgen, der größer oder kleiner wird, steht oder sitzt von einem Stuhl, oder sich gerade auf und ab bewegt.

![Ein Diagramm, das zeigt, wie sich eine Kamera nach oben und unten bewegt mit einer Pedestalmotion](camera-pedestal.png)

Dies ist ähnlich wie bei einem **Crane (Kran) **-Shot, der die Bewegung einer Kamera beinhalten kann, die an einem Kran auf- und abbeweglich angebracht ist. Um eine Pedestal- oder Kranbewegung durchzuführen, übersetzen Sie die Ansicht entlang der Y-Achse in die entgegengesetzte Richtung der gewünschten Kamerabewegung:

```js
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
```

Indem wir den Wert von `pedestalDistance` negativ setzen, kompensieren wir dafür, dass wir tatsächlich die Welt bewegen anstelle der Kamera. So bewegen positive Werte von `pedestalDistance` die Kamera nach oben, während negative Werte sie nach unten bewegen.

### Kippen (Rollend nach links und rechts)

**Cant** (oder **rolling**) ist eine Drehung der Kamera um ihre Rollachse; das heißt, die Kamera bleibt im Raum fixiert und bleibt auf den gleichen Ort gerichtet, dreht sich jedoch um, so dass die Oberseite der Kamera einen anderen Orientierung aufzeigt.

![Ein Diagramm, das zeigt, wie sich eine Kamera von links nach rechts rollt](camera-roll.png)

Sie können sich das veranschaulichen, indem Sie Ihren Arm vor sich ausstrecken, mit einer offenen Hand, die nach unten zeigt. Stellen Sie sich vor, dass Ihre Hand die Kamera ist und der Handrücken die Oberseite der Kamera darstellt. Drehen Sie nun Ihre Hand, dass die "Kamera" vollständig überkopf ist. Sie haben gerade Ihre Hand um die Rollachse gekantet. In der Kinematografie kann Cant verwendet werden, um verschiedene Arten von unruhigen Bewegungen wie Wellen oder Turbulenzen zu simulieren, aber kann auch aus dramatischen Gründen verwendet werden.

Um diese Rotation um die Z-Achse mit glMatrix durchzuführen:

```js
mat4.rotateZ(viewMatrix, viewMatrix, cantAngle);
```

## Kombination von Bewegungen

Sie können mehrere Bewegungen gleichzeitig ausführen, z.B. bei gleichzeitigeren Zoomen und Schwenken oder Kippen und Rollen.

### Übersetzung entlang mehrerer Achsen

Die Übersetzung entlang mehrerer Achsen ist ziemlich einfach. Vorher haben wir unsere Übersetzungen so durchgeführt:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Die Lösung hier ist offensichtlich. Da die Übersetzung als Vektor ausgedrückt wird, der die Entfernung zum Verschieben entlang jeder Achse bietet, können wir sie kombinieren wie folgt:

```js
mat4.translate(viewMatrix, viewMatrix, [
  -truckDistance,
  -pedestalDistance,
  dollyDistance,
]);
```

Dies wird den Ursprung der Matrix `viewMatrix` um die angegebene Menge entlang jeder Achse verschieben.

### Drehen um mehrere Achsen

Sie können auch Drehungen um mehrere Achsen in eine einzige Drehung um ein Quaternion kombinieren, das eine gemeinsame Achse für die Drehungen darstellt. Um die Drehungen separat auszuführen, verwenden Sie [Eulersche Winkel](https://en.wikipedia.org/wiki/Euler_angles) (separate Winkel um jede Achse), um Neigung, Schwenken und Rollen zu wie folgt auszuführen:

```js
mat4.rotateX(viewMatrix, viewMatrix, pitchAngle);
mat4.rotateY(viewMatrix, viewMatrix, yawAngle);
mat4.rotateZ(viewMatrix, viewMatrix, rollAngle);
```

Sie können stattdessen ein [Quaternion](/de/docs/Glossary/quaternion) konstruieren, das eine kombinierte Rotationsachse aus den Eulerschen Winkeln darstellt und dann die Matrix mit Multiplikation drehen, wie folgt:

```js
const axisQuat = quat.create();
const rotateMatrix = mat4.create();
quat.fromEuler(axisQuat, pitchAngle, yawAngle, rollAngle);
mat4.fromQuat(rotateMatrix, axisQuat);
mat4.multiply(viewMatrix, viewMatrix, rotateMatrix);
```

Dies konvertiert die Eulerschen Winkel für Neigung, Schwenken und Rollen in eine Quaternion, die alle drei Rotationen repräsentiert. Dies wird dann in eine Rotations-Transformmatrix umgewandelt; dann wird schließlich die Ansichts-Matrix mit der Rotations-Transform multipliziert, um die Drehungen zu vervollständigen.

## Darstellung von 3D mit WebXR

WebXR geht einen Schritt weiter, indem es ermöglicht, 3D-Grafiken mit speziellen visuell Hardware wie Brillen oder einem Headset zu präsentieren, um 3D-Grafiken zu erstellen, die tatsächlich erscheinen, als würden sie in drei Dimensionen existieren, möglicherweise im Kontext der realen Welt (im Falle von Augmented Reality).

Um Tiefe wahrzunehmen, ist es notwendig, zwei Perspektiven auf die Szene zu haben. Durch den Vergleich der beiden Ansichten ist es möglich, die Tiefe von Objekten zu erkennen und in Erweiterung die Entfernung zwischen Betrachter und Objekten, die gesehen werden. Deshalb haben wir zwei Augen, die leicht voneinander entfernt sind. Sie können sich daran erinnern, indem Sie ein Auge zur Zeit schließen und zwischen den beiden Augen wechseln. Beachten Sie, wie Ihr linkes Auge die linke Seite Ihrer Nase sehen kann, aber nicht die rechte, während Ihr rechtes Auge die rechte Seite Ihrer Nase sehen kann, aber nicht die linke. Das ist nur eine von vielen Unterschieden, die zwischen dem bestehen, was jedes Ihrer Augen sieht.

Unser Gehirn empfängt zwei Datensätze über Lichtpegel und -wellenlängen in unserem Sichtfeld - eines von jedem Auge. Das Gehirn nutzt diese Daten, um die Szene in unseren Köpfen zu konstruieren und nutzt die leichten Unterschiede zwischen den beiden Perspektiven, um Tiefe und Entfernung zu bestimmen.

### Rendern der Szene

Ein XR - eine Abkürzung, die sowohl virtuelle Realität (VR) als auch erweiterte Realität (AR) umfasst - das Headset zeigt uns 3D-Bilder, indem es zwei Ansichten der Szene zeichnet, die leicht gegeneinander versetzt sind, so wie die Ansichten, die von unseren beiden Augen erhalten werden. Diese Ansichten werden dann getrennt jedem Auge zugeführt, um ihnen die Daten zu geben, die unser Gehirn benötigt, um ein 3D-Bild in unserem Kopf zu konstruieren.

Um dies zu tun, fordert WebXR Ihren Renderer auf, die Szene zweimal für jedes Frame des Videos zu zeichnen—einmal für jedes Auge. Die beiden Ansichten werden in dasselbe Framebuffer gezeichnet, eine auf der linken und eine auf der rechten Seite. Das XR-Gerät verwendet dann Bildschirme und Linsen, um die linke Hälfte des produzierten Bildes auf unser linkes Auge und die rechte Hälfte auf unser rechtes Auge zu präsentieren.

Betrachten Sie zum Beispiel ein Gerät, das ein 2560x1440 Pixel-Framebuffer verwendet. Dies in zwei Hälften zu teilen—eine Hälfte für jedes Auge—resultiert darin, dass die Ansicht für jedes Auge mit einer Auflösung von 1280x1440 Pixel gezeichnet wird. So sieht das konzeptuell aus:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Blickrichtungen beider Augen aufgeteilt wird](twoviewsoneframebuffer.svg)

Ihr Code teilt der WebXR-Engine mit, dass Sie das nächste Animationsbild bereitstellen möchten, indem Sie die Methode [`XRSession`](/de/docs/Web/API/XRSession) [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufrufen und eine Rückruffunktion bereitstellen, die einen Animationsrahmen rendert. Wenn der Browser von Ihnen die Anzeige des Bildes benötigt, ruft er den Rückruf auf und übergibt als Eingabeparameter die aktuelle Zeit und einen [`XRFrame`](/de/docs/Web/API/XRFrame), der die Daten enthält, die zum Rendern des korrekten Bildes erforderlich sind.

Diese Informationen umfassen die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die die Position und Blickrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView)-Objekten, von denen jedes eine Perspektive auf die Szene darstellt. In aktuellen WebXR-Implementierungen wird in dieser Liste niemals mehr als zwei Einträge sein: einer für die Position und den Betrachtungswinkel des linken Auges und ein anderer für das rechte Auge. Sie können erkennen, welches Auge durch ein bestimmtes `XRView` vertreten ist, indem Sie den Wert seiner [`eye`](/de/docs/Web/API/XRView/eye)-Eigenschaft überprüfen, der entweder `left` oder `right` ist (ein dritter möglicher Wert, `none`, könnte theoretisch verwendet werden, um eine andere Perspektive darzustellen, aber Unterstützung dafür ist nicht vollständig in der aktuellen API verfügbar).

### Beispiel eines Frame-Rückrufs

Ein ziemlich einfaches (aber typisches) Rückruf für das Rendern von Frames könnte so aussehen:

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

Der Rückruf beginnt, indem er eine benutzerdefinierte Funktion, `applyPositionOffsets()`, aufruft, die einen Referenzraum nimmt und an seiner Transformationsmatrix alle notwendigen Änderungen vornimmt, um externe Benutzereingaben, wie Tastatur und Maus, zu berücksichtigen. Der angepasste [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), der von dieser Funktion zurückgegeben wird, wird dann an die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) übergeben, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) darzustellen, die die Position und den Betrachtungswinkel des Betrachters darstellt.

Als Nächstes gehen wir direkt weiter und stellen unsere Anfrage, das nächste Bild des Videos zu rendern, damit wir uns später nicht mehr darum kümmern müssen, indem wir `requestAnimationFrame()` erneut aufrufen.

Nun ist es Zeit, die Szene zu rendern. Wenn wir erfolgreich eine Pose erhalten haben, holen wir uns die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die wir für das Rendern brauchen, aus der `session.renderState.baseLayer` des [`renderState`](/de/docs/Web/API/XRSession/renderState) Objekts. Wir verbinden diese mit dem `gl.FRAMEBUFFER` Ziel durch den Aufruf der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Methode [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer).

Dann leeren wir den Framebuffer, um sicherzustellen, dass wir mit einem bekannten Zustand starten, da unser Renderer nicht jeden Pixel berühren wird. Wir setzen die klare Farbe auf undurchsichtiges Schwarz mit [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) und den Wert zum Leeren des Tiefenpuffers auf 1.0, indem wir die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Methode [`gl.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) aufrufen. Dann rufen wir die Methode [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) auf, welche den Framebuffer klärt (da wir `gl.COLOR_BUFFER_BIT` im Maskenparameter einschließen) und den Tiefenpuffer (weil wir `gl.DEPTH_BUFFER_BIT` einschließen).

Dann bestimmen wir, wie viel Zeit seit dem letzten gerenderten Frame vergangen ist, in dem wir die gewünschte darstellende Zeit des Frames mit der Zeit vergleichen, zu der der letzte Frame gezeichnet wurde. Da dieser Wert in Millisekunden ist, konvertieren wir ihn in Sekunden, indem wir ihn mit 0.001 (oder indem wir durch 1000 teilen) multiplizieren.

Nun durchlaufen wir die Ansichten der Pose, wie sie im Array [`views`](/de/docs/Web/API/XRViewerPose/views) der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) anzutreffen sind. Für jede Ansicht fragen wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nach dem entsprechenden Ansichtsfenster zur Nutzung, konfigurieren das WebGL-Ansichtsfenster so, dass es mit Übereinstimmung durch das Übergeben der Position und Größeninformation an [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übereinstimmen. Dies beschränkt das Rendern so, dass wir nur in den Teil des Framebuffers zeichnen können, das das Bild darstellt, das für das von [`view.eye`](/de/docs/Web/API/XRView/eye) identifizierte Auge gesehen wird.

Mit diesen festgesetzten Einschränkungen und allem anderen, was wir benötigen, bereit, rufen wir eine benutzerdefinierte Funktion `myRenderScene()` auf, um die Berechnungen und das WebGL-Rendering zum Rendern des Bildes zu Durchführung. In diesem Fall übergeben wir den WebGL-Kontext `gl`, die [`XRView`](/de/docs/Web/API/XRView) `view`, ein `sceneData`-Objekt (das Dinge wie die Vertex- und Fragment-Shader, Vertex-Listen, Texturen und so weiter enthält), und `deltaTime`, was anzeigt, wie viel Zeit seit dem letzten Bild vergangen ist, sodass wir wissen, wie weit wir die Animation vorantreiben müssen.

Wenn diese Funktion zurückkehrt, befindet sich im WebGL-Framebuffer, die von WebXR verwendet wird, jetzt zwei Kopien des Szenenbildes, jede nimmt die Hälfte des Frames ein: eine für das linke Auge, und eine für das rechte Auge. Dies geht durch die XR-Software und Treiber in das Headset über, wo jede Hälfte dem entsprechenden Auge angezeigt wird.

## Siehe auch

- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [WebGL Modellansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Motion: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
