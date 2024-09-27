---
title: "Ansichten und Betrachter: Simulation von Kameras in WebXR"
slug: Web/API/WebXR_Device_API/Cameras
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Das Erste und Wichtigste, das Sie verstehen sollten, wenn es um die Verwaltung der Sichtweise und Kameras in Ihrer Anwendung geht, ist dies: _WebXR hat keine Kameras_. Es gibt kein magisches Objekt, das von der [WebGL](/de/docs/Web/API/WebGL_API) oder [WebXR](/de/docs/Web/API/WebXR_Device_API) API bereitgestellt wird, das den Betrachter repräsentiert, den Sie drehen und bewegen können, um automatisch zu ändern, was auf dem Bildschirm zu sehen ist. In diesem Leitfaden zeigen wir, wie Sie [WebGL](/de/docs/Web/API/WebGL_API) verwenden können, um Kamerabewegungen zu simulieren, ohne eine Kamera bewegen zu müssen. Diese Techniken können in jedem WebGL- (oder WebXR-) Projekt verwendet werden.

Die Animation von 3D-Grafiken ist ein Softwareentwicklungsbereich, der mehrere Disziplinen der Informatik, Mathematik, Kunst, Grafikdesign, Kinematik, Anatomie, Physiologie, Physik und Kinematographie zusammenbringt. Da wir keine echte Kamera haben, stellen wir uns eine vor, indem wir den _Effekt_ einer Kamera nachahmen, ohne tatsächlich die Möglichkeit zu haben, den Benutzer in der Szene zu bewegen.

Es gibt einige Artikel über die grundlegende Mathematik, Geometrie und andere Konzepte hinter WebGL und WebXR, die nützlich zu lesen sein können, bevor oder während Sie diesen Artikel lesen, darunter:

- [Grundlegende 3D-Theorie erklären](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)

_Ed. Hinweis: Die meisten Diagramme, die in diesem Artikel verwendet werden, um zu zeigen, wie die Kamera sich bewegt, während sie Standardbewegungen ausführt, wurden aus [einem Artikel auf der FilmmakerIQ-Website](https://web.archive.org/web/20170525025459/https://filmmakeriq.com/2016/09/the-importance-and-not-so-importance-of-film-terminology/) entnommen; namentlich aus [diesem Bild](https://filmmakeriq.com/wp-content/uploads/2016/09/Pan-Tilt.png), das überall im Web zu finden ist. Wir nehmen an, dass sie aufgrund ihrer häufigen Wiederverwendung unter einer freizügigen Lizenz verfügbar sind, die Eigentümerschaft ist nicht sicher. Wir hoffen, dass es frei nutzbar ist; wenn nicht, und Sie der Eigentümer sind, lassen Sie es uns bitte wissen, und wir werden neue Diagramme finden oder erstellen. Oder, wenn Sie damit einverstanden sind, dass wir die Bilder weiter verwenden, lassen Sie es uns bitte wissen, damit wir Sie angemessen würdigen können!_

## Kameras und relative Bewegung

Wenn ein klassischer Live-Action-Film gedreht wird, sind die Schauspieler auf einem Set und bewegen sich, während sie spielen, mit einer oder mehreren Kameras, die ihre Bewegungen beobachten. Die Kameras können an einem festen Ort stehen, aber sie können auch so eingerichtet sein, dass sie sich ebenfalls bewegen, um die Bewegung der Darsteller zu verfolgen, ein- und auszufahren, um emotionale Wirkung zu erzielen und dergleichen.

### Virtuelle Kameras

In WebGL (und in der Folge auch in WebXR) gibt es kein Kameraobjekt, das wir bewegen und drehen können, also müssen wir einen Weg finden, diese Bewegungen vorzutäuschen. Da es keine Kamera gibt, müssen wir einen Weg finden, sie zu simulieren. Zum Glück haben Physiker wie Galileo, Newton, Lorentz und Einstein uns das **[Relativitätsprinzip](https://en.wikipedia.org/wiki/Principle_of_relativity)** gegeben, das besagt, dass die Gesetze der Physik in jedem Bezugssystem die gleiche Form haben. Das heißt, egal wo Sie stehen, die Gesetze der Physik funktionieren auf die gleiche Weise.

Im übertragenen Sinne sieht es dasselbe aus, wenn Sie und eine andere Person in einem leeren Feld aus festem Stein stehen und nichts anderes sichtbar ist, soweit das Auge reicht, und Sie sich drei Meter in Richtung der anderen Person bewegen, wie wenn die andere Person sich drei Meter in Ihre Richtung bewegt hätte. Es gibt keine Möglichkeit für eine von Ihnen beiden, den Unterschied zu sehen. Eine dritte Partei kann den Unterschied feststellen, aber Sie beide nicht. Wenn Sie eine Kamera sind, können Sie das gleiche visuelle Ergebnis erzielen, entweder indem Sie die Kamera bewegen oder indem Sie alles um die Kamera herum bewegen.

Und das ist unsere Lösung. Da wir die Kamera nicht bewegen können, bewegen wir die Welt um sie herum. Unser Renderer muss wissen, wo wir uns die Kamera vorstellen, und dann die Position jedes sichtbaren Objekts ändern, um diese Position und Ausrichtung zu simulieren. So wird statt eines tatsächlichen Kameraobjekts der Begriff **Kamera** in der WebGL- und WebXR-Programmierung verwendet, um ein Objekt zu bezeichnen, das die Position und Blickrichtung eines hypothetischen Betrachters der Szene beschreibt, unabhängig davon, ob ein tatsächliches Objekt im 3D-Raum vorhanden ist oder nicht.

### Perspektivenwechsel

Da die Kamera ein virtuelles Objekt ist, das, anstatt notwendigerweise ein physisches Objekt in der virtuellen Welt darzustellen, die Position und Blickrichtung des Betrachters repräsentiert, ist es nützlich, über die Arten von Situationen nachzudenken, die den Einsatz einer Kamera erfordern. Spielsituationen werden separat aufgeführt, da sie oft ein spezieller Fall sind, der für Spiele spezifisch ist, aber jede dieser Perspektiven könnte auf jede 3D-Grafikszene angewendet werden.

#### Allgemeine Kameras

Im Allgemeinen können virtuelle Kameras physische Objekte innerhalb der Szene enthalten oder auch nicht. Tatsächlich ist außerhalb des Rahmens von 3D-Spielen die Wahrscheinlichkeit weitaus höher, dass die Kamera überhaupt nicht mit einem Objekt in der Szene übereinstimmt. Einige Beispiele dafür, wie 3D-Kameras verwendet werden:

- Beim Rendern von Animationen—sei es für Filmemachen oder im Kontext einer Präsentation oder eines Spiels—wird die virtuelle Kamera wie eine echte Filmkamera verwendet. Soweit wie möglich werden [Standardverfahren der Kinematographie](#simulieren_von_klassischen_kinematographien) verwendet, da der Betrachter wahrscheinlich mit Filmen, die diese Techniken nutzen, aufgewachsen ist und unbewusste Erwartungen hat, dass ein Film oder Animation diesen Methoden folgt. Abweichungen davon können den Betrachter aus dem Moment herausziehen.
- In Geschäftsanwendungen wird die 3D-Kamera verwendet, um die scheinbare Größe und Perspektive festzulegen, wenn Dinge wie Grafiken und Diagramme gerendert werden.
- In Kartenanwendungen kann die Kamera entweder direkt über der Szene platziert oder verschiedene Winkel zur Darstellung der Perspektive verwendet werden. Für 3D-GPS-Lösungen wird die Kamera so positioniert, dass sie den Bereich um den Benutzer herum zeigt, wobei der größte Teil der Anzeige den Bereich vor dem Pfad der Benutzerbewegung zeigt.
- Beim Beschleunigen von 2D-Grafikzeichnungen mit WebGL wird die Kamera in der Regel direkt über der Mitte der Szene platziert, mit einem Abstand und Sichtfeld, das es ermöglicht, die gesamte Szene darzustellen.
- Beim Beschleunigen von Bitmap-Grafiken zeichnet der Renderer das 2D-Bild in einen WebGL-Texturpuffer und zeichnet dann die Textur, um den Bildschirm zu aktualisieren. Dies nutzt im Wesentlichen die Textur als Backbuffer zur Durchführung von [Mehrfachpufferungen](https://en.wikipedia.org/wiki/Multiple_buffering) in Ihrer 2D-Grafikanwendung.

#### Kameras beim Spielen

Es gibt viele Arten von Spielen, und als solches gibt es mehrere Möglichkeiten, wie Kameras in Spielen verwendet werden könnten. Einige gängige Situationen sind:

- In einem Ego-Shooter-Spiel befindet sich die Kamera im Kopf des Avatars des Spielers und sieht in dieselbe Richtung wie die Augen des Avatars. Auf diese Weise wird die Sicht auf dem Bildschirm oder Headset des Spielers so dargestellt, wie es der Avatar sehen würde.
- In einigen Third-Person-Spielen befindet sich die Kamera in einem kurzen Abstand hinter dem Avatar oder dem Fahrzeug des Spielers und zeigt sie von hinten, während sie sich durch die Spielwelt bewegen. Dies wird in vielen Multiplayer-Online-Rollenspielen, bestimmten Schießspielen und dergleichen verwendet. Beliebte Beispiele sind _World of Warcraft_, _Tomb Raider_ und _Fortnite_. Diese Kategorie umfasst auch Spiele, bei denen die Kamera direkt über der Schulter des Spielers platziert wird.
- Einige 3D-Spiele bieten die Möglichkeit, den Blickwinkel zu ändern, z. B. um aus den verschiedenen Fenstern eines Flugzeugs in einem Flugsimulator zu schauen oder um die Ansichten von allen Sicherheitskameras innerhalb des Spielniveaus zu sehen (ein übliches Merkmal von Spionage- und Schleichspielen). Diese Möglichkeit wird auch von Spielen genutzt, die Waffen mit Zielfernrohren anbieten, bei denen die Sichtweise nicht mehr genau auf der Kopfposition basiert.
- 3D-Spiele könnten auch die Möglichkeit bieten, dass Nicht-Spieler das Geschehen beobachten, entweder indem sie eine unsichtbare Art von Avatar positionieren oder indem sie eine feste virtuelle Kamera wählen, von der aus sie zuschauen.
- In fortgeschrittenen 3D-Spielen könnte eine Kamera oder ein kameraähnliches Objekt verwendet werden, um zu bestimmen, was ein nicht spielbarer Charakter sehen kann, wobei dieselbe Rendering- und Physik-Engine verwendet wird, die auch für Spielercharaktere verwendet wird.
- In Einzelbildschirm-2D-Spielen ist die Kamera nicht direkt dem Spieler oder einem anderen Charakter im Spiel zugeordnet, sondern entweder über oder neben dem Spielbereich fixiert oder folgt der Aktion, während die Aktion sich um eine scrollende Spielewelt bewegt. Beispielsweise findet ein klassisches Arcade-Spiel wie _Pac-Man_ auf einer festen Spielkarte statt, sodass die Kamera in einem festen Abstand über der Karte fixiert bleibt und immer direkt auf die Spielwelt blickt.
- In einem Side-Scrolling- oder Top-Scrolling-Spiel wie _Super Mario Bros._ bewegt sich die Kamera nach links und rechts (oder auf und ab oder beides), um sicherzustellen, dass die Aktion sichtbar bleibt, obwohl das Spielniveau viel größer als der Blickbereich ist.

### Positionierung der Kamera

Da es in WebGL oder WebXR keine Standardkameraobjekte gibt, müssen wir die Kamera selbst simulieren. Bevor wir dies tun und bevor wir dann die Bewegung der Kamera simulieren können, lassen Sie uns tatsächlich einen Blick auf die virtuelle Kamera und die Art und Weise, wie sie sich auf der grundlegendsten Ebene bewegen _kann_, werfen. Wie bei allen Dingen kann die **Position** eines Objekts im Raum — selbst wenn dieser Raum virtuell ist — mit drei Zahlen dargestellt werden, die seine Position relativ zum Ursprung angeben, dessen Position definiert ist als (0, 0, 0).

Ein weiterer Aspekt der räumlichen Beziehung eines Objekts zum Ursprung im Raum ist noch zu betrachten: **Perspektive**. Perspektive kann, richtig auf die Objekte in einer Szene angewendet, eine Szene, die sonst so flach wie ein typischer 2D-Bildschirm aussehen würde, dazu bringen, sich hervorzuheben, als ob sie wirklich 3D wäre. Es gibt mehrere Arten von Perspektiven; diese werden definiert und ihre Mathematik im Artikel [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) erklärt. Wichtig ist, dass der Effekt der Perspektive auf einen Vektor dargestellt werden kann, indem dem Vektor eine vierte Komponente hinzugefügt wird: die Perspektivkomponente, genannt `w`.

Der Wert von `w` wird angewendet, indem jede der anderen drei Komponenten durch ihn dividiert wird, um die endgültige Position oder den endgültigen Vektor zu erhalten; das heißt, für eine Angabe der Koordinate als (`x`, `y`, `z`, `w`), ist der Punkt im 3D-Raum tatsächlich (`x`/`w`, `y`/`w`, `z`/`w`, 1) oder (`x`/`w`, `y`/`w`, `z`/`w`). Wenn Sie keine Perspektive verwenden, ist `w` immer 1. In dieser Situation sind die vollständigen Koordinaten für ein Objekt, das sich an der Position (1, 0, 3) befindet, (1, 0, 3, 1).

Aber die Lage allein reicht nicht aus, um ein Objekt im 3D-Raum zu beschreiben, denn der Zustand eines Objekts im Raum betrifft nicht nur seine Position, sondern auch seine Rotation oder Blickrichtung, auch bekannt als seine **Ausrichtung**. Die Ausrichtung kann mithilfe eines 3D-Vektors dargestellt werden, der normalerweise normalisiert wird, sodass seine Länge 1,0 beträgt. Wenn das Objekt zum Beispiel auf ein Objekt blickt, das sich an (3, 1, -2) befindet—das heißt, drei Meter nach rechts, einen Meter nach oben und zwei Meter von der Ursprungsposition entfernt—, ergibt sich daraus:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies kann auch als Array dargestellt werden:

```js
let directionVector = [3, 1, -2];
```

Für die Durchführung von Operationen, die sowohl die Koordinaten als auch den Blickrichtung-Vektor betreffen, muss der Vektor die `w`-Komponente enthalten. Der Wert von `w` ist bei Vektoren immer 0, sodass der oben genannte Vektor auch als `[3, 1, -2, 0]` oder:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \\ 0 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

WebXR normalisiert Vektoren automatisch so, dass sie eine Länge von 1 Meter haben; es kann jedoch Sinn machen, es selbst zu tun, um beispielsweise die Leistung von Berechnungen zu verbessern, indem die Normalisierung nicht wiederholt durchgeführt werden muss.

Sobald Sie die Matrix bestimmt haben, die die Kombination der Bewegungen darstellt, die Sie die Kamera durchführen lassen möchten, müssen Sie sie invertieren, weil Sie die Kamera nicht wirklich bewegen. Da Sie alles außer der Kamera bewegen, nehmen Sie die Umkehrung der Transformationsmatrix, um eine inverse Transformationsmatrix zu erhalten. Diese inverse Matrix kann dann auf die Objekte in der Welt angewendet werden, um ihre Positionen und Ausrichtungen zu verändern, um die gewünschte Kameraposition zu simulieren.

Deshalb enthält das Objekt [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das von WebXR zur Darstellung von Transformationen verwendet wird, eine [`inverse`](/de/docs/Web/API/XRRigidTransform/inverse)-Eigenschaft. Die `inverse`-Eigenschaft ist ein weiteres `XRRigidTransform`-Objekt, das die Umkehrung der elterlichen Transformation darstellt. Da das [`XRView`](/de/docs/Web/API/XRView), das die Ansicht darstellt, eine [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft besitzt, die ein `XRRigidTransform` ist, das die Kameraansicht bereitstellt, können Sie die Modellansichtsmatrix—die Transformationsmatrix, die benötigt wird, um die Welt zu bewegen, um die gewünschte Kameraposition zu simulieren—wie folgt erhalten:

```js
let viewMatrix = view.transform.inverse.matrix;
```

Wenn die von Ihnen verwendete Bibliothek ein `XRRigidTransform`-Objekt direkt akzeptiert, können Sie stattdessen `view.transform.inverse` erhalten, anstatt nur das Array herauszuziehen, das die Ansichts-Matrix darstellt.

### Komponieren mehrerer Transformationen

Wenn Ihre Kamera gleichzeitig mehrere Transformationen durchführen muss, wie etwa das Zoomen und Schwenken gleichzeitig, können Sie die Transformationsmatrizen miteinander multiplizieren, um sie in eine einzige Matrix zu kombinieren, die beide Änderungen gleichzeitig anwendet. Unter [Multiplikation zweier Matrizen](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#multiplying_two_matrices) im Artikel [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) finden Sie eine klare, aber lesbare Funktion, die dies tut, oder Sie verwenden Ihre bevorzugte Matrixmathematik-Bibliothek wie [glMatrix](https://glmatrix.net/), um die Arbeit zu erledigen.

Es ist entscheidend, daran zu denken, dass im Gegensatz zur typischen Arithmetik, bei der Multiplikation kommutativ ist (d. h., man erhält das gleiche Ergebnis, egal ob man von links nach rechts oder umgekehrt multipliziert), die Matrizenmultiplikation _ist nicht kommutativ!_ Dies liegt daran, dass jede Transformation die Position des Objekts und möglicherweise das Koordinatensystem selbst beeinflusst, was die Ergebnisse der nächsten durchgeführten Operation dramatisch verändern kann. Daher müssen Sie beim Aufbauen Ihrer zusammengesetzten Transformation (oder beim direkten Anwenden von Transformationen in einer bestimmten Reihenfolge) sorgfältig darauf achten, in welcher Reihenfolge Sie Ihre Transformationen anwenden.

### Anwenden der Transformation

Um die Transformation anzuwenden, multiplizieren Sie den Punkt oder Vektor mit der Transformation oder der Zusammensetzung von Transformationen.

Dies war ein sehr schneller Überblick über die Konzepte der Position im physischen Raum, der Ausrichtung oder Blickrichtung und der Perspektive. Weitere Details zu diesem Thema finden Sie in den Artikeln [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry), [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) und [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web).

## Klassische Kinematographie simulieren

Kinematographie ist die Kunst des Entwurfs, der Planung und der Durchführung von Kamerabewegungen, um das gewünschte Erscheinungsbild und die gewünschte Emotion für eine Szene in Animationen oder Filmen zu erzeugen. Es gibt eine Reihe von Begriffen, die hilfreich zu verstehen sind, hauptsächlich im Bereich der Kamerabewegung, da diese Begriffe verwendet werden, um gestaltete Perspektivenwechsel mit der virtuellen Kamera zu beschreiben. Es ist auch durchaus möglich, mehr als eine dieser Bewegungen gleichzeitig auszuführen; zum Beispiel können Sie die Kamera schwenken, während Sie gleichzeitig in die Szene hineinzoomen.

Denken Sie daran, dass die Mehrheit der Kamerabewegungen relativ zum Verweisraum der Kamera beschrieben wird.

Das Format zum Speichern von Matrizen ist im Allgemeinen als ein flaches Array im Spalten-Major-Ordnung; das heißt, die Werte der Matrix werden beginnend bei der oberen linken Ecke geschrieben und bewegen sich _nach unten_ bis zum unteren Bereich, dann bewegen sich nach rechts um eine Reihe und wiederholen sich, bis alle Werte im Array enthalten sind.

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

In diesem Array enthält die linkeste Spalte die Einträge `a1`, `a2`, `a3` und `a4`. Die obere Zeile enthält die Einträge `a1`, `a5`, `a9` und `a13`.

Denken Sie daran, dass die meisten WebGL- und WebXR-Programme mit Drittanbieterbibliotheken geschrieben werden, die auf der grundlegenden Funktionalität von WebGL aufbauen, indem sie Routinen hinzufügen, die es viel einfacher machen, nicht nur Kernmatrix- und andere Operationen durchzuführen, sondern oft auch diese Standardverfahren der Kinematographie zu simulieren. Sie sollten ernsthaft in Erwägung ziehen, eine zu verwenden, anstatt WebGL direkt zu verwenden. Dieser Leitfaden verwendet WebGL direkt, da es nützlich ist, zu verstehen, was unter der Haube vor sich geht, und zur Unterstützung bei der Entwicklung von Bibliotheken oder um Ihnen zu helfen, den Code zu optimieren.

> [!NOTE]
> Auch wenn wir Sätze wie "die Kamera bewegen" verwenden, bewegen wir in Wirklichkeit die gesamte Welt um die Kamera. Dies beeinflusst, wie bestimmte Werte funktionieren, was im Folgenden angemerkt wird.

### Zoom

Unter den bekanntesten Kameraeffekten ist der **Zoom**. Zoomen wird in einer physischen Kamera durchgeführt, indem die Brennweite der Linse geändert wird; dies ist der Abstand zwischen der Mitte der Linse selbst und den Lichtsensoren der Kamera. Deshalb erfordert Zoomen eigentlich nicht, dass die Kamera überhaupt bewegt wird. Stattdessen ändert ein Zoom die Vergrößerung der Kamera im Laufe der Zeit, um den Fokusbereich näher oder weiter vom Betrachter entfernt erscheinen zu lassen, ohne die Kamera physisch zu bewegen. Eine langsame Bewegung kann einer Szene ein Gefühl von Bewegung, Leichtigkeit oder Fokus verleihen, während ein schneller Zoom ein Gefühl von Angst, Überraschung oder Spannung erzeugen kann.

Da ein Zoom nicht die Position der Kamera bewegt, ist der entstehende Effekt unnatürlich. Das menschliche Auge hat keine Zoomlinse. Wir machen Dinge kleiner oder größer, indem wir uns von ihnen weg- oder auf sie zu bewegen. In der Kinematografie wird dies als [Dolly-Shot](#dollying_moving_in_or_out) bezeichnet.

Es gibt zwei Techniken in 3D-Grafiken, die ähnliche, wenn auch nicht identische Ergebnisse erzeugen können, und deren Methoden sich leichter in verschiedenen Situationen anwenden lassen.

#### Zoomen durch Anpassung des Sichtfelds

Sie können etwas tun, das eher einem echten "Zoom" ähnelt, indem Sie das **Sichtfeld** (**FOV**, Field of View) der Kamera ändern. Das Sichtfeld ist ein Winkel, der die Länge des Bogens auf dem gesamten sichtbaren Bereich um die Kamera herum definiert, der auf einmal sichtbar sein soll. Dies ist ein Effekt der Brennweite in einer physischen Kamera, daher ist das Ändern des FOV eine passable Alternative, da es keine echte Kamera gibt.

Denken Sie daran, dass der Umfang eines Kreises 2π⋅r Radiant (360°) ist; dies ist daher das theoretische maximale FOV. Realistisch betrachtet sehen Menschen nie so viel, und Geräte wie Monitore und VR-Brillen reduzieren das Sichtfeld in der Regel noch weiter. Menschliche Augen haben typischerweise ein horizontales Sichtfeld von etwa 135° (ca. 2.356 Radiant) und ein vertikales FOV von etwa 180° (π oder ca. 3.142 Radiant).

Wenn Sie das FOV der Kamera kleiner machen, reduziert sich der Bogen, der im Sichtfeld enthalten sein wird, und diese Inhalte werden im dargestellten Bild vergrößert. Es gibt Unterschiede zwischen diesem und einem optischen Zoom-Effekt, aber das Ergebnis ist allgemein nah genug, um die Aufgabe zu erfüllen.

Die folgende Funktion gibt eine Projektionsperspektivmatrix zurück, die den angegebenen Sichtfeldwinkel sowie die angegebenen Nah- und Fern-Clipping-Plane-Abstände integriert:

```js
function createPerspectiveMatrix(viewport, fovDegrees, nearClip, farClip) {
  const fovRadians = fovDegrees * (Math.PI / 180.0);
  const aspectRatio = viewport.width / viewport.height;

  const transform = mat4.create();
  mat4.perspective(transform, fovRadians, aspectRatio, nearClip, farClip);
  return transform;
}
```

Nach der Umrechnung des FOV-Winkels `fovDegrees` von Grad in Radiant und der Berechnung des Seitenverhältnisses des vom `viewport`-Parameter angegebenen [`XRViewport`](/de/docs/Web/API/XRViewport) verwendet diese Funktion die [glMatrix](https://glmatrix.net/)-Bibliothek und deren [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective)-Funktion, um die Perspektivmatrix zu berechnen.

Die Perspektivmatrix umfasst das Sichtfeld (technisch gesehen ist dies das _vertikale_ Sichtfeld), das Seitenverhältnis und die Nah- und Fern-Clipping-Ebenen innerhalb der 4x4-Matrix `transform`, die dann an den Aufrufer zurückgegeben wird.

Die nahe Clipping-Ebene ist der Abstand in Metern zu einer zur Anzeigefläche parallelen Ebene, näher als nichts gezeichnet wird. Alle Eckpunkte, die sich auf derselben Seite dieser Ebene befinden wie die Kamera, werden nicht gezeichnet. Im Gegensatz dazu ist die ferne Clipping-Ebene der Abstand in Metern zu einer Ebene, über die hinaus keine Eckpunkte gezeichnet werden.

Um mit einem Skalierungsfaktor oder Prozentsatz zu zoomen, können Sie 1x (100 % der normalen Größe) auf den größtmöglichen FOV zuordnen, den Sie zulassen (was dazu führt, dass der meiste Inhalt sichtbar ist), dann Ihre maximale Vergrößerung auf den größten FOV-Wert, den Sie unterstützen, und entsprechende Werte dazwischen zuordnen.

Wenn Sie bei jedem Rendering-Pass eines Frames die Perspektivmatrix berechnen, können Sie in diese Matrix alle anderen Transformationen multiplizieren, die Sie anwenden müssen, damit die gewünschte Geometrie des Frames erreicht wird. Zum Beispiel:

```js
const transform = createPerspectiveMatrix(viewport, 130, 1, 100);
const translateVec = vec3.fromValues(
  -trackDistance,
  -craneDistance,
  pushDistance,
);
mat4.translate(transform, transform, translateVec);
```

Dies beginnt mit der Perspektivmatrix, die ein vertikales Sichtfeld von 130° darstellt, und wendet dann eine Translation an, die eine Bewegung der Kamera umfasst, einschließlich [Schwenken](#track), [Krane](#crane) und [Drücken](#push).

#### Skalierungstransformationen

Im Gegensatz zu einem echten "Zoom" beinhaltet das **Skalieren** das Multiplizieren jedes der `x`-, `y`- und `z`-Koordinatenwerte in einer Position oder einem Scheitelpunkt mit einem Skalierungsfaktor für diese Achse. Diese müssen nicht unbedingt für jede Achse identisch sein, obwohl das Ergebnis am ehesten einem Zoomeffekt entspricht, wenn der gleiche Wert für jede Achse verwendet wird. Dies müsste auf jeden Scheitelpunkt in der Szene angewendet werden—idealerweise im Vertex-Shader.

Wenn Sie mit einem Faktor von 2 vergrößern wollen, müssen Sie jede Komponente mit 2,0 multiplizieren. Um im gleichen Maße zu verkleinern, multiplizieren Sie sie mit -2,0. Ausdrücken in Matrizen erfolgt dies mit einer Transformationsmatrix, in der die Skalierung enthalten ist, wie folgt:

```js-nolint
let scaleTransform = [
  Sx, 0, 0, 0,
  0, Sy, 0, 0,
  0, 0, Sz, 0,
  0, 0, 0, 1
];
```

Diese Matrix stellt eine Transformation dar, die um einen Faktor skaliert wird, der durch `(Sx, Sy, Sz)` angegeben ist, wobei `Sx` den Skalierungsfaktor entlang der X-Achse angibt, `Sy` den Skalierungsfaktor entlang der Y-Achse und `Sz` den Faktor für die Z-Achse. Wenn irgendeine dieser Werte von den anderen abweicht, wird das Ergebnis eine Streckung oder Kontraktion sein, die sich in einigen Dimensionen von anderen unterscheidet.

Wenn der gleiche Skalierungsfaktor in jede Richtung angewendet werden soll, können Sie eine einfache Funktion erstellen, die die Skalierungstransformationsmatrix für Sie generiert:

```js-nolint
function createScalingMatrix(f) {
  return [f, 0, 0, 0, 0, f, 0, 0, 0, 0, f, 0, 0, 0, 0, 1];
}
```

Mit der Transformationsmatrix in der Hand wenden wir die Transformation `scaleTransform` auf den Vektor (oder Scheitelpunkt) `myVector` an:

```js-nolint
let myVector = [2, 1, -3];
let scaleTransform = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1];
vec4.transformMat4(myVector, myVector, scaleTransform);
```

Oder, indem wir mit der `createScalingMatrix()`-Funktion, die oben gezeigt wurde, entlang jeder Achse um denselben Faktor skalieren:

```js
let myVector = [2, 1, -3];
vec4.transformMat4(myVector, myVector, createScalingMatrix(2.0));
```

### Schwenken (Yawing nach links oder rechts)

**Schwenken** oder **Gieren** ist die Rotation der Kamera von links nach rechts oder umgekehrt, wobei ihr Boden ansonsten an einem festen Ort gehalten wird. Die Position der Kamera im Raum ändert sich nicht, nur die Richtung, in die sie schaut. Und diese Richtung ändert sich nur horizontal. Schwenken eignet sich hervorragend, um eine Umgebung zu etablieren oder ein Gefühl von Umfang in einem weiten Raum oder auf einem großen Objekt zu schaffen. Oder einfach, um nach links und rechts zu sehen, z. B. das Drehen des Kopfes des Spielers in einer immersiven oder VR-Situation zu simulieren.

![Ein Diagramm, das eine Kamera zeigt, die nach links oder rechts schwenkt](camera-pan.png)

Um dies zu tun, müssen wir um die Y-Achse rotieren, um das Links- und Rechts-Rotieren der Kamera zu simulieren. Mit der [glMatrix](https://glmatrix.net/)-Bibliothek, die wir zuvor verwendet haben, kann dies mit der `rotateY()`-Methode der `mat4`-Klasse, die eine Standard-4x4-Matrix darstellt, durchgeführt werden. Um die Blickrichtung, die durch die Matrix `viewMatrix` definiert ist, um `panAngle` Radiant zu rotieren:

```js
mat4.rotateY(viewMatrix, viewMatrix, panAngle);
```

Wenn `panAngle` positiv ist, veranlasst diese Transformation die Kamera, nach rechts zu schwenken; ein negativer Wert für `panAngle` wird nach links schwenken.

### Neigen (Pitching nach oben oder unten)

Wenn Sie die Kamera **neigen** oder **pitchen**, behalten Sie sie im Raum an den gleichen Koordinaten fixiert, während Sie die Richtung ändern, in die sie vertikal schaut, ohne den horizontalen Teil ihrer Ausrichtung zu verändern. Es passt die Richtung an, in die sie nach oben und unten zeigt. Das Neigen ist gut, um den Umfang eines hohen Objekts oder einer Szene wie eines Waldes oder eines Berges zu erfassen, ist aber auch eine beliebte Methode, um eine Figur oder einen Ort von Bedeutung oder der Ehrfurcht einflößt, einzuführen. Es ist auch natürlich nützlich für die Implementierung der Unterstützung für einen Spieler, der nach oben und unten schaut.

![Ein Diagramm, das zeigt, wie eine Kamera nach oben und unten schwenkt](camera-tilt.png)

So kann das Neigen der Kamera ausgeführt werden, indem die Kamera um die X-Achse rotiert wird, sodass sie schwenkt, um nach oben und unten zu schauen. Das kann mit der entsprechenden Methode in Ihrer Matrixmathematik-Bibliothek durchgeführt werden, wie der `rotateX()`-Methode in glMatrixs `mat4`-Klasse:

```js
mat4.rotateX(viewMatrix, viewMatrix, angle);
```

Positive Werte für `angle` neigen die Kamera nach unten, während negative Werte von `angle` nach oben neigen.

### Fahren (Bewegen nach vorne oder hinten)

Eine **Dolly-Aufnahme** ist eine, bei der die gesamte Kamera vorwärts und rückwärts bewegt wird. In klassischen Filmen wird dies typischerweise mit der Kamera gemacht, die auf einem Schienenfahrzeug oder einem fahrenden Vehikel montiert ist. Die resultierende Bewegung kann beeindruckend glatte Effekte erzeugen, insbesondere wenn sie zusammen mit der Person oder dem Objekt, das der Fokus Ihrer Aufnahme ist, bewegt wird.

![Ein Diagramm, das zeigt, wie sich eine Kamera für eine Dolly-Aufnahme bewegt](camera-dolly.png)

Obwohl eine Dolly-Aufnahme und ein Zoom etwa gleich aussehen sollten, tun sie dies nicht. Die Tatsache, dass das Zoomen die Brennweite der Kamera ändert, bedeutet, dass die räumliche Beziehung zwischen dem Ziel und seiner Umgebung sich nicht ändert, auch wenn das Ziel auf dem Bild größer oder kleiner wird. Andererseits repliziert eine Dolly-Aufnahme, indem die Kamera tatsächlich bewegt wird, das Gefühl von physischer Bewegung, wodurch die Beziehungen der Objekte in der Szene sich so verschieben, wie Sie es erwarten, wenn Sie an ihnen vorbeigehen, während Sie auf das Ziel der Aufnahme zu oder von ihm weg bewegen.

Um eine Dolly-Operation durchzuführen, bewegen Sie die Kameraansicht vor und zurück entlang der Z-Achse:

```js
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Hier ist `[0, 0, dollyDistance]` ein Vektor, bei dem `dollyDistance` der Abstand ist, um die Kamera zu schwenken. Da dies dadurch funktioniert, dass die gesamte Welt um die Kamera herum bewegt wird, bewegt sich in Wirklichkeit die gesamte Welt entlang der Z-Achse um `dollyDistance` Meter relativ zur Kamera. Wenn `dollyDistance` positiv ist, bewegt sich die Welt um diesen Betrag zum Benutzer, was dazu führt, dass die Kamera näher an die Szene heranreicht. Im Gegensatz dazu verschieben negative Werte von `dollyDistance` die Welt vom Benutzer weg, was die Kamera anscheinend rückwärts vom Ziel zurück bewegen lässt.

### Fahren (Bewegen nach links oder rechts)

**Tracken** mithilfe einer physikalischen Kamera verwendet dieselbe Art von Ausrüstung wie beim Dollying, jedoch anstelle der Vorwärts- und Rückwärtsbewegung wird die Kamera von links nach rechts oder umgekehrt bewegt. Die Kamera dreht sich überhaupt nicht, sodass der Fokus der Aufnahme langsam aus dem Bildschirm gleitet. Dies kann Konzentration, Zeitvergehen oder Nachdenken suggerieren, wenn versucht wird, Emotionen in einer Szene zu vermitteln. Es wird auch häufig in "Geh-und-Reden"-Szenen verwendet, in denen die Kamera parallel zu den Charakteren durch die Szene gleitet, während sie bewegt wird.

![Ein Diagramm, das zeigt, wie eine Kamera links und rechts fährt](camera-truck.png)

Um die Kamera nach links und rechts zu bewegen, bewegen Sie die View-Matrix entlang der X-Achse in die entgegengesetzte Richtung zur gewünschten Kamerabewegung:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
```

Beachten Sie den Vektor `[-truckDistance, 0, 0]`. Dieser kompensiert den Umstand, dass der Trackvorgang dadurch funktioniert, dass die Welt anstatt der Kamera bewegt wird. Indem wir die gesamte Welt in die entgegengesetzte Richtung, die durch `truckDistance` angegeben wird, bewegen, erzielen wir den Effekt, die Kamera in die erwartete Richtung zu bewegen. Auf diese Weise bewegen positive Werte von `truckDistance` die Kamera nach rechts (indem die Welt nach links bewegt wird) und negative Werte von `truckDistance` bewegen die Kamera nach links, indem die Welt nach rechts bewegt wird.

### Pedestal bewegen (Vertikales Bewegen)

Eine **Pedestal-Aufnahme** ist eine, bei der die Kamera horizontal relativ zum Boden fixiert wird, aber gerade auf und ab bewegt wird. Stellen Sie sich eine Kamera auf einem Podest (oder einer Stange) vor, die größer oder kleiner wird. Dies ist nützlich, wenn man ein Subjekt verfolgen möchte, das größer oder kleiner wird, oder aufsteht oder sich aus einem Stuhl setzt, oder direkt auf und ab bewegt.

![Ein Diagramm, das zeigt, wie eine Kamera mit einem Pedestal-Schuss auf und ab bewegt wird](camera-pedestal.png)

Dies ist ähnlich wie ein **Kran**-Schuss, der das Bewegen einer an einem Kran befestigten Kamera nach oben und unten beinhaltet. Um eine Pedestal- oder Kranbewegung durchzuführen, bewegen Sie die Ansicht entlang der Y-Achse in die entgegengesetzte Richtung zur Richtung, in die Sie die Kamera bewegen möchten:

```js
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
```

Durch das Negieren des Wertes von `pedestalDistance` kompensieren wir die Tatsache, dass wir tatsächlich die Welt anstatt der Kamera bewegen. Positive Werte von `pedestalDistance` werden die Kamera nach oben bewegen, während negative Werte nach unten bewegen.

### Rollen (Kippen nach links und rechts)

**Cantieren** (oder **Rollen**) ist eine Drehung der Kamera um ihre Rollachse; das heißt, die Kamera bleibt im Raum fixiert, und bleibt auf demselben Standort gerichtet, rollt aber herum, sodass die Oberseite der Kamera in eine andere Richtung zeigt.

![Ein Diagramm, das zeigt, wie eine Kamera nach links und rechts rollt](camera-roll.png)

Sie können sich das veranschaulichen, indem Sie Ihren Arm vor sich halten, mit der Hand offen, die Handfläche nach unten. Stellen Sie sich vor, dass Ihre Hand die Kamera ist und der Handrücken die Oberseite der Kamera darstellt. Jetzt drehen Sie Ihre Hand so, dass die "Kamera" kopfüber ist. Sie haben gerade Ihre Hand um die Rollachse gerollt. In der Kinematografie kann Roll verwendet werden, um verschiedene Arten von unruhiger Bewegung wie Wellen oder Turbulenzen zu simulieren, kann aber auch zu dramatischen Effekten verwendet werden.

Um diese Drehung um die Z-Achse mit glMatrix zu vollziehen:

```js
mat4.rotateZ(viewMatrix, viewMatrix, cantAngle);
```

## Kombination von Bewegungen

Sie können mehrere Bewegungen gleichzeitig ausführen, wie beispielsweise zoomen und schwenken oder neigen und rollen gleichzeitig.

### Translationen entlang mehrerer Achsen

Das Übersetzen entlang mehrerer Achsen ist ziemlich einfach. Zuvor haben wir unsere Übersetzungen so durchgeführt:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Die Lösung ist offensichtlich. Da die Translation als ein Vektor ausgedrückt wird, der den Abstand angibt, um den jede Achse bewegt werden soll, können wir sie so kombinieren:

```js
mat4.translate(viewMatrix, viewMatrix, [
  -truckDistance,
  -pedestalDistance,
  dollyDistance,
]);
```

Dies verschiebt den Ursprung der Matrix `viewMatrix` um den angegebenen Betrag entlang jeder Achse.

### Drehen um mehrere Achsen

Sie können auch Drehungen um mehrere Achsen in eine einzige Drehung um ein Quaternion kombinieren, das eine kombinierte Achse für die Drehungen darstellt. Um die Drehungen separat durchzuführen, verwenden Sie [Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles) (separate Winkel um jede Achse), um Neigung, Gier und Roll so anzuwenden:

```js
mat4.rotateX(viewMatrix, viewMatrix, pitchAngle);
mat4.rotateY(viewMatrix, viewMatrix, yawAngle);
mat4.rotateZ(viewMatrix, viewMatrix, rollAngle);
```

Sie können stattdessen ein [Quaternion](/de/docs/Glossary/quaternion) konstruieren, das eine kombinierte Drehachse aus den Euler-Winkeln darstellt, und dann die Matrix unter Verwendung der Multiplikation rotieren, wie folgt:

```js
const axisQuat = quat.create();
const rotateMatrix = mat4.create();
quat.fromEuler(axisQuat, pitchAngle, yawAngle, rollAngle);
mat4.fromQuat(rotateMatrix, axisQuat);
mat4.multiply(viewMatrix, viewMatrix, rotateMatrix);
```

Dies konvertiert die Euler-Winkel für Neigung, Gier und Roll in ein Quaternion, das alle drei Rotation darstellt. Dieses wird dann in eine Rotations-Transformationsmatrix umgewandelt; schließlich wird die View-Matrix mit der Rotations-Transformation multipliziert, um die Rotationen abzuschließen.

## Darstellung von 3D mit WebXR

WebXR geht einen Schritt weiter und ermöglicht es, 3D-Grafiken mithilfe spezieller visueller Hardware wie Brillen oder einem Headset zu präsentieren, um 3D-Grafiken zu erstellen, die tatsächlich in drei Dimensionen zu existieren scheinen, möglicherweise im Kontext der realen Welt (im Falle von Augmented Reality).

Um Tiefe wahrzunehmen, ist es notwendig, zwei Perspektiven auf die Szene zu haben. Indem die beiden Ansichten verglichen werden, ist es möglich, die Tiefe von Objekten zu erkennen und darüber hinaus den Abstand zwischen dem Betrachter und den Objekten, die gesehen werden. Darum haben wir zwei Augen, die leicht auseinander stehen. Sie können sich daran erinnern, indem Sie abwechselnd ein Auge schließen und öffnen. Beachten Sie, wie Ihr linkes Auge die linke Seite Ihrer Nase sehen kann, aber nicht die rechte, während Ihr rechtes Auge die rechte Seite Ihrer Nase sehen kann, aber nicht die linke. Das ist nur einer der vielen Unterschiede, die zwischen dem, was jedes Ihrer Augen sieht, bestehen.

Unser Gehirn erhält zwei Datenmengen über Lichtpegel und Wellenlängen im gesamten Sichtfeld - eine aus jedem Auge. Das Gehirn verwendet diese Daten, um die Szene in unseren Köpfen zu konstruieren, wobei es die leichten Unterschiede zwischen den beiden Perspektiven verwendet, um Tiefe und Entfernung zu erkennen.

### Rendering der Szene

Ein XR-Headset—Abkürzung, die sowohl virtuelle Realität (VR) als auch erweiterte Realität (AR) umfasst—präsentiert uns 3D-Bilder, indem es zwei Ansichten der Szene zeichnet, etwas versetzt voneinander, genau wie die Ansichten, die unsere beiden Augen erhalten. Diese Ansichten werden dann separat jedem Auge zugeführt, um es ihnen zu ermöglichen, die Daten zu sammeln, die unser Gehirn benötigt, um ein 3D-Bild in unseren Köpfen zu konstruieren.

Dafür verlangt WebXR von Ihrem Renderer, die Szene für jeden Videorahmen zweimal zu zeichnen—einmal für jedes Auge. Die beiden Ansichten werden in dasselbe Framebuffer gezeichnet, wobei eine auf der linken und eine auf der rechten Seite. Das XR-Gerät verwendet dann Bildschirme und Linsen, um die linke Hälfte des erzeugten Bildes unserem linken Auge und die rechte Hälfte unserem rechten Auge zu präsentieren.

Betrachten Sie beispielsweise ein Gerät, das einen 2560x1440 Pixel Framebuffer verwendet. Das Teilen dieses in zwei Teile—einen für jedes Auge—führt dazu, dass die Ansicht jedes Auges mit einer Auflösung von 1280x1440 Pixel gezeichnet wird. Hier ist, wie das konzeptionell aussieht:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Ansichten zweier Augen aufgeteilt wird](twoviewsoneframebuffer.svg)

Ihr Code teilt der WebXR-Engine mit, dass Sie das nächste Animationsrahmen bereitstellen möchten, indem Sie die [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufrufen und eine Callback-Funktion bereitstellen, die einen Animationsrahmen rendert. Wenn der Browser Sie zum Rendern der Szene benötigt, ruft er den Callback auf und stellt als Eingabeparameter die aktuelle Zeit und ein [`XRFrame`](/de/docs/Web/API/XRFrame), das die Daten enthält, die benötigt werden, um den korrekten Rahmen zu rendern.

Diese Informationen umfassen die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die die Position und Blickrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView)-Objekten, von denen jedes eine Perspektive auf die Szene darstellt. In derzeitigen WebXR-Implementierungen wird es nie mehr als zwei Einträge in dieser Liste geben: einen, der die Position und den Blickwinkel des linken Auges beschreibt, und einen, der dasselbe für das rechte Auge tut. Sie können feststellen, welches Auge ein gegebenes `XRView` darstellt, indem Sie den Wert seiner [`eye`](/de/docs/Web/API/XRView/eye)-Eigenschaft überprüfen, der eine Zeichenkette ist, deren Wert `left` oder `right` ist (ein dritter möglicher Wert, `none`, könnte theoretisch verwendet werden, um einen anderen Blickwinkel zu repräsentieren, aber die Unterstützung dafür ist im derzeitigen API nicht vollständig verfügbar).

### Beispiel-Frame-Callback

Ein ziemlich einfacher (aber typischer) Rückruf für das Rendern von Frames könnte folgendermaßen aussehen:

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

Der Rückruf beginnt mit dem Aufrufen einer benutzerdefinierten Funktion, `applyPositionOffsets()`, die einen Referenzraum nimmt und auf ihre Transformationsmatrix alle Änderungen anwendet, die vorgenommen werden müssen, um Dinge wie Benutzereingaben von Geräten, die nicht von WebXR gesteuert werden, wie die Tastatur und Maus, zu berücksichtigen. Der angepasste [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), der von dieser Funktion zurückgegeben wird, wird dann in die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die die Position und den Blickwinkel des Betrachters darstellt.

Als Nächstes beauftragen wir uns mit dem Rendern des nächsten Videoframes, sodass wir uns später keine Sorgen machen müssen, indem wir `requestAnimationFrame()` erneut aufrufen.

Nun ist es an der Zeit, die Szene zu rendern. Wenn wir erfolgreich eine Pose erhalten haben, holen wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die wir zum Rendern benötigen, vom `baseLayer`-Eigenschaft des [`renderState`](/de/docs/Web/API/XRSession/renderState)-Objekts der Sitzung. Wir binden dies an das `gl.FRAMEBUFFER`-Ziel von WebGL, indem wir die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Methode [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) aufrufen.

Dann löschen wir das Framebuffer, um sicherzustellen, dass wir mit einem bekannten Zustand beginnen, da unser Renderer nicht alle Pixel berühren wird. Wir setzen die Löschfarbe auf undurchsichtiges Schwarz mit [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) und den Wert zum Löschen des Tiefenpuffers auf 1,0, indem wir die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Methode [`gl.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) aufrufen. Dann rufen wir die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext/clear)-Methode [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) auf, die das Framebuffer löscht (da wir `gl.COLOR_BUFFER_BIT` im Maskenparameter einschließen) und den Tiefenpuffer (da wir `gl.DEPTH_BUFFER_BIT` einschließen).

Dann bestimmen wir, wie viel Zeit seit dem vorherigen Frame vergangen ist, indem wir die gewünschte Renderzeit des Frames mit der Zeit vergleichen, zu der das letzte Frame gezeichnet wurde. Da dieser Wert in Millisekunden angegeben ist, konvertieren wir ihn in Sekunden, indem wir mit 0.001 multiplizieren (oder durch 1000 teilen).

Jetzt schleifen wir über die Ansichten der Pose, wie sie im [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Array [`views`](/de/docs/Web/API/XRViewerPose/views) gefunden werden. Für jede Ansicht fragen wir die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nach dem geeigneten Ansichtsfenster, konfigurieren das WebGL-Ansichtsfenster, um mit den Positions- und Größeninformationen übereinzustimmen, indem wir sie an [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben. Dies schränkt das Rendern so ein, dass wir nur in den Teil des Framebuffers zeichnen können, der das vom Auge identifizierte Bild repräsentiert, das durch [`view.eye`](/de/docs/Web/API/XRView/eye) gesehen wird.

Mit den so festgelegten Einschränkungen und allem, was wir benötigen, bereit, rufen wir eine benutzerdefinierte Funktion `myRenderScene()` auf, um tatsächlich die Berechnungen und das WebGL-Rendering durchzuführen, um das Bild zu rendern. In diesem Fall übergeben wir den WebGL-Kontext `gl`, die `view` des [`XRView`](/de/docs/Web/API/XRView), ein `sceneData`-Objekt (das Dinge wie den Vertex- und Fragment-Shader, Scheitelpunktlisten, Texturen usw. enthält) und `deltaTime`, das angibt, wie viel Zeit seit dem vorherigen Frame vergangen ist, damit wir wissen, wie weit die Animation voranschreiten soll.

Wenn diese Funktion zurückkehrt, hat die von WebXR verwendete WebGL-Framebuffer nun zwei Kopien der Szene, die jeweils die Hälfte des Frames ausfüllen: eine für das linke Auge und eine für das rechte Auge. Dies geht durch die XR-Software und Treiber in das Headset, wo jeder Hälfte das entsprechende Augenzugezeigt wird.

## Siehe auch

- [Geometrie und Referenzräume](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Ausrichtung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
