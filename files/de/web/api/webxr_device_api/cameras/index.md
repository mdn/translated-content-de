---
title: "Sichtpunkte und Betrachter: Simulation von Kameras in WebXR"
slug: Web/API/WebXR_Device_API/Cameras
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Das Erste und Wichtigste, das Sie verstehen müssen, wenn Sie den Code zur Verwaltung von Sichtpunkten und Kameras in Ihrer Anwendung betrachten, ist: _WebXR hat keine Kameras_. Es gibt kein magisches Objekt, das entweder von der [WebGL](/de/docs/Web/API/WebGL_API) oder der [WebXR](/de/docs/Web/API/WebXR_Device_API) API bereitgestellt wird, das den Betrachter darstellt, den Sie drehen und bewegen können, um automatisch zu ändern, was auf dem Bildschirm zu sehen ist. In diesem Leitfaden zeigen wir, wie Sie [WebGL](/de/docs/Web/API/WebGL_API) verwenden können, um Kamerabewegungen zu simulieren, ohne eine Kamera zu bewegen. Diese Techniken können in jedem WebGL- (oder WebXR-) Projekt verwendet werden.

Die Animation von 3D-Grafiken ist ein Bereich der Softwareentwicklung, der mehrere Disziplinen der Informatik, Mathematik, Kunst, Grafikdesign, Kinematik, Anatomie, Physiologie, Physik und Kinematografie zusammenbringt. Da wir keine echte Kamera haben, stellen wir uns eine vor und reproduzieren den _Effekt_ einer Kamera, ohne die Fähigkeit zu haben, den Benutzer durch die Szene zu bewegen.

Es gibt ein paar Artikel über die grundlegende Mathematik, Geometrie und andere Konzepte hinter WebGL und WebXR, die nützlich sein können, bevor oder während Sie diesen lesen, einschließlich:

- [Grundlagen der 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebGL Model-View-Projections](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Geometrie und Referenzflächen in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)

_Ed. Hinweis: Die meisten in diesem Artikel verwendeten Diagramme zur Darstellung der Kamerabewegung bei Standardbewegungen stammen aus [einem Artikel auf der FilmmakerIQ-Website](https://web.archive.org/web/20170525025459/https://filmmakeriq.com/2016/09/the-importance-and-not-so-importance-of-film-terminology/); nämlich aus [diesem Bild](https://filmmakeriq.com/wp-content/uploads/2016/09/Pan-Tilt.png), das im gesamten Web zu finden ist. Wir nehmen aufgrund ihrer häufigen Wiederverwendung an, dass sie unter einer permissiven Lizenz zur Verfügung stehen, der Besitz nicht sicher ist. Wir hoffen, dass sie frei nutzbar sind; falls nicht, und Sie der Inhaber sind, lassen Sie es uns bitte wissen und wir werden neue Diagramme finden oder erstellen. Oder wenn Sie damit einverstanden sind, dass wir die Bilder weiter verwenden, lassen Sie es uns bitte wissen, damit wir Ihnen angemessen Anerkennung zollen können!_

## Kameras und relative Bewegung

Wenn ein klassischer Live-Action-Film gedreht wird, befinden sich die Schauspieler auf einem Filmset und bewegen sich darüber, während sie auftreten, wobei eine oder mehrere Kameras ihre Bewegungen beobachten. Die Kameras können fest installiert sein, aber auch so eingerichtet werden, dass sie sich ebenfalls bewegen, den Bewegungen der Darsteller folgen, hinein- und herausfahren, um emotionale Wirkung zu erzielen und so weiter.

### Virtuelle Kameras

In WebGL (und in Erweiterung in WebXR) gibt es kein Objekt für eine Kamera, das wir bewegen und drehen können, also müssen wir einen Weg finden, diese Bewegungen zu simulieren. Da es keine Kamera gibt, müssen wir einen Weg finden, es vorzutäuschen. Glücklicherweise haben uns Physiker wie Galileo, Newton, Lorentz und Einstein das **[Relativitätsprinzip](https://de.wikipedia.org/wiki/Relativit%C3%A4tsprinzip)** gegeben, das besagt, dass die Gesetze der Physik in jedem Bezugssystem die gleiche Form haben. Das heißt, egal wo Sie stehen, die physikalischen Gesetze wirken auf die gleiche Weise.

Erweitert bedeutet das, wenn Sie und eine andere Person auf einem leeren, soliden Stein-Ackerfeld stehen und Sie sich drei Meter auf die andere Person zubewegen, sieht das Ergebnis _gleich aus_, als hätte sich die andere Person drei Meter auf Sie zu bewegt. Es gibt keine Möglichkeit für einen von Ihnen beiden, den Unterschied zu sehen. Ein Dritter kann den Unterschied feststellen, aber Sie beide können es nicht. Wenn Sie eine Kamera sind, können Sie das gleiche visuelle Ergebnis sowohl dadurch erzielen, dass Sie die Kamera bewegen, _oder indem Sie alles um die Kamera herum bewegen_.

Und das ist unsere Lösung. Da wir die Kamera nicht bewegen können, bewegen wir die Welt um sie herum. Unser Renderer muss wissen, wo wir uns vorstellen, dass die Kamera ist, und dann die Position jedes sichtbaren Objekts ändern, um diese Position und Orientierung zu simulieren. Daher wird der Begriff **Kamera** in der WebGL- und WebXR-Programmierung verwendet, um sich auf ein Objekt zu beziehen, das die Position und Blickrichtung eines hypothetischen Betrachters der Szene beschreibt, unabhängig davon, ob sich ein tatsächliches Objekt im 3D-Raum befindet oder nicht.

### Perspektiven

Da die Kamera ein virtuelles Objekt ist, das anstelle eines physischen Objekts in der virtuellen Welt die Position und Blickrichtung des Betrachters darstellt, ist es nützlich, über die Arten von Situationen nachzudenken, die den Einsatz einer Kamera erfordern. Spielsituationen werden separat aufgeführt, da sie oft ein spezieller Fall sind, der sich auf das Spielen bezieht, aber jede dieser Perspektiven könnte auf jede 3D-Grafikszenen zutreffen.

#### Verallgemeinerte Kameras

Im Allgemeinen können virtuelle Kameras in physische Objekte innerhalb der Szene integriert sein oder auch nicht. Tatsächlich sind außerhalb des Bereichs von 3D-Gaming die Chancen viel größer, dass die Kamera nicht mit einem Objekt korrespondiert, das überhaupt in der Szene erscheint. Einige Beispiele, wie 3D-Kameras verwendet werden:

- Beim Rendern von Animationen – sei es für das Filmemachen oder für die Verwendung im Kontext einer Präsentation oder eines Spiels – wird die virtuelle Kamera genauso verwendet wie eine Filmkamera der realen Welt. So weit wie möglich werden [standardisierte filmtechnische Techniken](#simulation_klassischer_kinematografie) verwendet, da der Betrachter wahrscheinlich mit Filmen aufgewachsen ist, die diese Techniken verwenden, und unbewusste Erwartungen hat, dass ein Film oder eine Animation diesen Methoden folgt. Abweichungen davon können den Betrachter aus dem Moment herausziehen.
- In Geschäftsanwendungen wird die 3D-Kamera verwendet, um die scheinbare Größe und Perspektive beim Rendern von Dingen wie Diagrammen und Grafiken festzulegen.
- In Kartenanwendungen kann die Kamera entweder direkt über der Szene platziert werden oder verschiedene Winkel verwenden, um eine Perspektive zu zeigen. Für 3D-GPS-Lösungen wird die Kamera so positioniert, dass sie den Bereich um den Benutzer zeigt, wobei der größte Teil der Anzeige den Bereich vor dem Bewegungspfad des Benutzers anzeigt.
- Bei der Verwendung von WebGL zur Beschleunigung des Zeichnens von 2D-Grafiken wird die Kamera in der Regel direkt über der Mitte der Szene platziert, wobei Entfernung und Sichtfeld so eingestellt sind, dass die gesamte Szene angezeigt werden kann.
- Bei der Beschleunigung von Rastergrafiken würde der Renderer das 2D-Bild in den Speicherpuffer einer WebGL-Textur zeichnen und dann die Textur neu zeichnen, um den Bildschirm zu aktualisieren. Dies verwendet die Textur im Wesentlichen als Rückpuffer für die Durchführung von [Mehrfachpufferung](https://de.wikipedia.org/wiki/Mehrfachpufferung) in Ihrer 2D-Grafikanwendung.

#### Kameras im Gaming

Es gibt viele Arten von Spielen, und so gibt es mehrere Möglichkeiten, wie Kameras in Spielen verwendet werden können. Einige häufige Situationen sind:

- In einem Ego-Shooter-Spiel befindet sich die Kamera im Kopf des Avatars des Spielers und zeigt in die gleiche Richtung wie die Augen des Avatars. Auf diese Weise ist das auf dem Bildschirm oder im Headset des Spielers präsentierte Bild das, was sein Avatar sehen würde.
- In einigen Third-Person-Spielen befindet sich die Kamera in kurzer Entfernung hinter dem Avatar oder Fahrzeug des Spielers und zeigt diesen von hinten, während sie sich durch die Spielwelt bewegen. Dies wird in vielen Multiplayer-Online-Rollenspielen, bestimmten Schießspielen und so weiter verwendet. Beliebte Beispiele sind _World of Warcraft_, _Tomb Raider_ und _Fortnite_. Diese Kategorie umfasst auch Spiele, bei denen die Kamera direkt über der Schulter des Spielers platziert ist.
- Einige 3D-Spiele bieten die Möglichkeit, Ihren Standpunkt zu ändern, beispielsweise um aus den verschiedenen Fenstern eines Flugzeugs in einem Flugsimulator zu schauen oder um die Ansichten aller Überwachungskameras innerhalb der Spielebene zu sehen (ein häufiges Merkmal von Spionage- und Schleichspielen). Diese Fähigkeit wird auch von Spielen verwendet, die Waffen mit Zielfernrohren bieten, bei denen die Ansicht nicht mehr ganz von der Kopfposition abhängt.
- 3D-Spiele können auch die Möglichkeit bieten, dass Nicht-Spieler das Geschehen beobachten, sei es, indem ein unsichtbarer Avatar positioniert wird oder indem eine feste virtuelle Kamera ausgewählt wird, von der aus beobachtet wird.
- In fortschrittlichen 3D-Spielen _könnte_ ein Kamera- oder kameraähnliches Objekt verwendet werden, um zu bestimmen, was eine Nicht-Spieler-Figur sehen kann, wobei auf die gleiche Rendering- und Physik-Engine zurückgegriffen wird, die von Spielerfiguren für Nicht-Spieler-Figuren verwendet wird.
- In Einzelbildschirm-2D-Spielen ist die Kamera nicht direkt mit dem Spieler oder einem anderen Charakter im Spiel verbunden, sondern entweder fest über oder neben dem Spielbereich oder folgt der Aktion, wenn sich diese in einer scrollenden Spielwelt bewegt. Beispielsweise findet ein klassisches Arcade-Spiel wie _Pac-Man_ auf einer festen Spielkarte statt, sodass die Kamera in der festgelegten Entfernung über der Karte fest bleibt und immer nach unten auf die Spielwelt zeigt.
- In einem Side-Scrolling- oder Top-Scrolling-Spiel wie _Super Mario Bros._ bewegt sich die Kamera nach links und rechts (oder auf und ab oder beides), um sicherzustellen, dass die Aktion sichtbar bleibt, auch wenn die Spielebene viel größer ist als das Ansichtsfenster.

### Positionierung der Kamera

Da es in WebGL oder WebXR keine standardmäßigen Kameraobjekte gibt, müssen wir die Kamera selbst simulieren. Bevor wir dies tun können und bevor wir dann die Bewegung der Kamera simulieren können, werfen wir tatsächlich einen Blick auf die virtuelle Kamera und wie sie sich auf der grundlegendsten Ebene bewegen _kann_. Wie in allen Dingen kann die **Position** eines Objekts im Raum – selbst wenn dieser Raum virtuell ist – mit drei Zahlen dargestellt werden, die seine Position relativ zum Ursprung angeben, dessen Position als (0, 0, 0) definiert ist.

Ein weiterer Aspekt der räumlichen Beziehung eines Objekts zum Ursprung im Raum bleibt noch zu betrachten: **Perspektive**. Perspektive, richtig auf die Objekte in einer Szene angewendet, kann eine Szene, die ansonsten flach wie ein typischer 2D-Bildschirm aussehen würde, als ob sie wirklich 3D wäre, erscheinen lassen. Es gibt mehrere Arten von Perspektiven; diese werden in dem Artikel [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) definiert und ihre Mathematik erklärt. Wichtig ist, dass die Wirkung der Perspektive auf einen Vektor durch Hinzufügen einer vierten Komponente zu dem Vektor dargestellt werden kann: der Perspektivkomponente, genannt `w`.

Der Wert von `w` wird angewendet, indem jede der anderen drei Komponenten durch ihn geteilt wird, um die endgültige Position oder den Vektor zu erhalten; das heißt, für eine Koordinate, die als (`x`, `y`, `z`, `w`) gegeben ist, liegt der Punkt im 3D-Raum tatsächlich bei (`x`/`w`, `y`/`w`, `z`/`w`, 1) oder (`x`/`w`, `y`/`w`, `z`/`w`). Wenn Sie keine Perspektive verwenden, ist `w` immer 1. In dieser Situation sind die vollständigen Koordinaten für ein Objekt, das sich bei (1, 0, 3) befindet, (1, 0, 3, 1).

Aber die Örtlichkeit ist nicht genug, um ein Objekt im 3D-Raum zu beschreiben, denn der Zustand eines Objekts im Raum hängt nicht nur von seiner Örtlichkeit ab, sondern auch von seiner Rotation oder Blickrichtung, allgemein bekannt als seine **Orientierung**. Die Orientierung kann mit einem 3D-Vektor dargestellt werden, der in der Regel normalisiert wird, sodass seine Länge 1,0 beträgt. Wenn beispielsweise das Objekt auf ein Objekt blickt, das sich bei (3, 1, -2) befindet – das heißt drei Meter nach rechts, einen Meter nach oben und zwei Meter von dem Ursprungspunkt entfernt – ergibt sich das Ergebnis:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies kann auch als ein Array dargestellt werden:

```js
let directionVector = [3, 1, -2];
```

Für die Zwecke der Durchführung von Operationen, die sowohl die Koordinaten als auch den Blickrichtungsvektor betreffen, muss der Vektor die `w`-Komponente beinhalten. Der Wert von `w` ist für Vektoren immer 0, sodass der oben erwähnte Vektor auch mit `[3, 1, -2, 0]` dargestellt werden kann oder:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>-</mo><mn>2</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} 3 \\ 1 \\ -2 \\ 0 \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

WebXR normalisiert automatisch Vektoren auf eine Länge von 1 Meter; es kann jedoch sinnvoll sein, dies selbst zu tun, aus verschiedenen Gründen, wie zum Beispiel, um die Leistung der Berechnungen zu verbessern, indem die Normalisierung nicht wiederholt durchgeführt werden muss.

Sobald Sie die Matrix bestimmt haben, die die Kombination von Bewegungen darstellt, die Sie die Kamera ausführen lassen möchten, müssen Sie sie umkehren, da Sie die Kamera nicht bewegen. Da Sie tatsächlich alles _außer_ der Kamera bewegen, nehmen Sie das Inverse der Transformationsmatrix, um eine inverse Transformationsmatrix zu erhalten. Diese inverse Matrix kann dann auf die Objekte in der Welt angewendet werden, um deren Positionen und Orientierungen zu ändern, um die gewünschte Kameraposition zu simulieren.

Deshalb beinhaltet das {{domxref("XRRigidTransform")}}-Objekt, das von WebXR zur Darstellung von Transformationen verwendet wird, eine {{domxref("XRRigidTransform.inverse", "inverse")}}-Eigenschaft. Die `inverse`-Eigenschaft ist ein weiteres `XRRigidTransform`-Objekt, das das Inverse der übergeordneten Transformation ist. Da die {{domxref("XRView")}}, die die Ansicht darstellt, eine {{domxref("XRView.transform", "transform")}}-Eigenschaft, die ein `XRRigidTransform` bereitstellt, das die Kameraansicht bereitstellt, können Sie die Modellansichtsmatrix erhalten – die Transformationsmatrix, die benötigt wird, um die Welt zu bewegen, um die gewünschte Kameraposition zu simulieren – wie folgt:

```js
let viewMatrix = view.transform.inverse.matrix;
```

Wenn die von Ihnen verwendete Bibliothek ein `XRRigidTransform`-Objekt direkt akzeptiert, können Sie stattdessen `view.transform.inverse` verwenden, anstatt nur das Array zu extrahieren, das die Ansichts-Matrix darstellt.

### Zusammensetzen mehrerer Transformationen

Wenn Ihre Kamera gleichzeitig mehrere Transformationen ausführen muss, wie etwa gleichzeitig zoomen und schwenken, können Sie die Transformationsmatrizen miteinander multiplizieren, um sie zu einer einzelnen Matrix zu kombinieren, die beide Änderungen gleichzeitig anwendet. Siehe [Multiplying two matrices](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web#multiplying_two_matrices) im Artikel [Matrixmath für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web) für eine klare, aber lesbare Funktion, die dies tut, oder verwenden Sie Ihre bevorzugte Matrix-Mathematik-Bibliothek wie [glMatrix](https://glmatrix.net/), um die Arbeit zu erledigen.

Es ist entscheidend zu beachten, dass im Gegensatz zur typischen Arithmetik, bei der Multiplikation kommutativ ist (das heißt, Sie erhalten die gleiche Antwort, egal ob Sie von links nach rechts oder von rechts nach links multiplizieren), Matrixmultiplikation _ist nicht kommutativ!_ Dies liegt daran, dass jede Transformation die Position des Objekts und möglicherweise das Koordinatensystem selbst beeinflusst, was die Ergebnisse der nächsten ausgeführten Operation dramatisch verändern kann. Sie müssen also darauf achten, in welcher Reihenfolge Sie Ihre Transformationen anwenden, wenn Sie Ihre zusammengesetzte Transformation aufbauen (oder Transformationen direkt in Reihenfolge anwenden).

### Anwenden der Transformation

Um die Transformation anzuwenden, multiplizieren Sie den Punkt oder Vektor mit der Transformation oder Kombination von Transformationen.

Dies war ein sehr schneller Überblick über die Konzepte der Position in Bezug auf physische Lage, Orientierung oder Blickrichtung und Perspektive. Für mehr Details zu diesem Thema sehen Sie die Artikel [Geometrie und Referenzflächen](/de/docs/Web/API/WebXR_Device_API/Geometry), [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), und [Matrixmath für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web).

## Simulation klassischer Kinematografie

Kinematografie ist die Kunst des Entwerfens, Planens und Ausführens von Kamerabewegungen, um die gewünschte Optik und das gewünschte Gefühl für eine Szene in Animation oder Film zu erzeugen. Es gibt eine Anzahl von Begriffen, die hilfreich zu verstehen sind, insbesondere rund um Kamerabewegungen, da diese Begriffe verwendet werden, um gestaltete Sichtpunktveränderungen mit der virtuellen Kamera zu beschreiben. Es ist auch völlig möglich, mehr als eine dieser Bewegungen gleichzeitig auszuführen; zum Beispiel können Sie die Kamera schwenken und gleichzeitig auf die Szene zoomen.

Denken Sie daran, dass die meisten Kamerabewegungen relativ zum Referenzraum der Kamera beschrieben werden.

Das Format für das Speichern von Matrizen ist in der Regel als flaches Array in spaltenmajor-Format; das heißt, die Werte aus der Matrix werden beginnend mit der oberen linken Ecke und sich _nach unten_ bis zur Unterseite bewegend geschrieben, dann sich eine Zeile nach rechts verschiebend und wiederholen, bis alle Werte im Array sind.

So sieht eine Matrix aus, die so aussieht:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd><mtd><msub><mi>a</mi><mn>5</mn></msub></mtd><mtd><msub><mi>a</mi><mn>9</mn></msub></mtd><mtd><msub><mi>a</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd><mtd><msub><mi>a</mi><mn>6</mn></msub></mtd><mtd><msub><mi>a</mi><mn>10</mn></msub></mtd><mtd><msub><mi>a</mi><mn>14</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>3</mn></msub></mtd><mtd><msub><mi>a</mi><mn>7</mn></msub></mtd><mtd><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd><msub><mi>a</mi><mn>15</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>4</mn></msub></mtd><mtd><msub><mi>a</mi><mn>8</mn></msub></mtd><mtd><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd><msub><mi>a</mi><mn>16</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} a_{1} & a_{5} & a_{9} & a_{13} \\ a_{2} & a_{6} & a_{10} & a_{14} \\ a_{3} & a_{7} & a_{11} & a_{15} \\ a_{4} & a_{8} & a_{12} & a_{16} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Wird in Array-Form wie folgt dargestellt:

```js-nolint
let matrixArray = [
  a1, a2, a3, a4,
  a5, a6, a7, a8,
  a9, a10, a11, a12,
  a13, a14, a15, a16,
];
```

In diesem Array enthält die linkeste Spalte die Einträge `a1`, `a2`, `a3`, und `a4`. Die oberste Zeile enthält die Einträge `a1`, `a5`, `a9`, und `a13`.

Beachten Sie, dass die meisten WebGL- und WebXR-Programmierung unter Verwendung von Drittanbieter-Bibliotheken durchgeführt wird, die die grundlegende Funktionalität von WebGL erweitern, indem sie Routinen hinzufügen, die es wesentlich einfacher machen, nicht nur Kernmatrix und andere Operationen durchzuführen, sondern oft auch diese standardmäßigen filmtechnischen Techniken zu simulieren. Sie sollten ernsthaft in Betracht ziehen, eine davon anstelle von direkter Verwendung von WebGL zu verwenden. Dieser Leitfaden verwendet direkt WebGL, da es nützlich ist, ein gewisses Verständnis dafür zu haben, was unter der Haube passiert und um bei der Entwicklung von Bibliotheken zu helfen oder zur Code-Optimierung.

> [!NOTE]
> Auch wenn wir Begriffe wie "die Kamera bewegen" verwenden, bewegen wir tatsächlich die gesamte Welt um die Kamera. Dies wirkt sich auf die Funktionsweise bestimmter Werte aus, welche im Folgenden hervorgehoben werden.

### Zoomen

Unter den bekanntesten Kameraeffekten ist das **Zoom**. Zoomen wird in einer physischen Kamera durchgeführt, indem die Brennweite des Objektivs geändert wird; dies ist der Abstand zwischen dem Zentrum des Objektivs und den Lichtsensoren der Kamera. Somit umfasst das Zoomen tatsächlich keine Bewegung der Kamera. Stattdessen ändert ein Zoom das Vergrößerungsverhältnis der Kamera im Laufe der Zeit, um den Fokusbereich näher oder weiter entfernt vom Betrachter erscheinen zu lassen, ohne die Kamera physisch zu bewegen. Eine langsame Bewegung kann ein Gefühl von Bewegung, Leichtigkeit oder Fokus in eine Szene bringen, während ein schneller Zoom ein Gefühl von Angst, Überraschung oder Anspannung erzeugen kann.

Da ein Zoom die Position der Kamera nicht bewegt, ist der resultierende Effekt unnatürlich. Das menschliche Auge hat keine Zoomlinse. Wir machen Dinge kleiner oder größer, indem wir uns von ihnen entfernen oder ihnen nähern. In der Kinematografie wird das als [Doll-Fahrt](#dollying_moving_in_or_out) bezeichnet.

Es gibt zwei Techniken in der 3D-Grafik, die ähnliche, aber nicht identische Ergebnisse erzeugen können, und deren Methoden in verschiedenen Situationen leichter anzuwenden sind.

#### Zoomen durch Anpassen des Sichtfelds

Sie können etwas Ähnliches wie ein echtes "Zoom" tun, indem Sie das **Sichtfeld** (**FOV**) der Kamera ändern. Das Sichtfeld ist ein Winkel, der die Länge des Bogens im gesamten sichtbaren Bereich um die Kamera definiert, der einmal sichtbar sein sollte. Dies ist ein Effekt der Brennweite in einer physischen Kamera, daher ist das Ändern des FOV eine brauchbare Alternative, da es keine echte Kamera gibt.

Erinnern Sie sich, dass der Umfang eines Kreises 2π⋅r Radiant (360°) beträgt; dies ist somit das theoretische maximale FOV. Realistisch betrachtet sehen Menschen jedoch nicht annähernd so viel, sondern Viewing-Geräte wie Monitore und VR-Brillen neigen dazu, das Sichtfeld sogar noch weiter zu reduzieren. Menschliche Augen haben typischerweise ein horizontales Sichtfeld von etwa 135° (ungefähr 2,356 Radiant) und ein vertikales Sichtfeld von etwa 180° (π oder ungefähr 3,142 Radiant).

Durch Verkleinern des Sichtfelds der Kamera wird der Bogen reduziert, der im Ansichtsfenster dargestellt werden soll, wodurch dieser Inhalt beim Rendern auf das Betrachten vergrößert wird. Es gibt Unterschiede zwischen diesem und einem optischen Zoomeffekt, aber das Ergebnis ist im Allgemeinen nahe genug, um die Aufgabe zu erfüllen.

Die folgende Funktion gibt eine Projektions-Perspektiv-Matrix zurück, die den angegebenen Sichtfeld-Winkel sowie die angegebenen Abständen der nahen und fernen Clipping-Flächen integriert:

```js
function createPerspectiveMatrix(viewport, fovDegrees, nearClip, farClip) {
  const fovRadians = fovDegrees * (Math.PI / 180.0);
  const aspectRatio = viewport.width / viewport.height;

  const transform = mat4.create();
  mat4.perspective(transform, fovRadians, aspectRatio, nearClip, farClip);
  return transform;
}
```

Nachdem der FOV-Winkel `fovDegrees` von Grad zu Radiant umgewandelt und das Seitenverhältnis des {{domxref("XRViewport")}} bestimmt wurde, das im `viewport`-Parameter angegeben ist, verwendet diese Funktion die [glMatrix](https://glmatrix.net/)-Bibliothek, um die Funktion [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective) zum Berechnen der Perspektiv-Matrix.

Die Perspektiv-Matrix kapselt das Sichtfeld (technisch ist dies das _vertikale_ Sichtfeld), das Seitenverhältnis und die nahen und fernen Clipping-Flächen innerhalb der 4x4-Matrix `transform`, die dann dem Aufrufer zurückgegeben wird.

Die nahe Clipping-Fläche ist die Entfernung in Metern zu einer Fläche parallel zur Displayfläche, näher als welche nichts gezeichnet wird. Alle Scheitelpunkte, die auf derselben Seite dieser Fläche wie die Kamera liegen, werden nicht gezeichnet. Im Gegensatz dazu ist die ferne Clipping-Fläche die Entfernung in Metern zu einer Fläche, jenseits derer keine Scheitelpunkte gezeichnet werden.

Um mit einem Skalierungsfaktor oder Prozentsatz zu zoomen, können Sie 1x (100% der Normalgröße) auf den größten Wert des FOV abbilden, den Sie zulassen (was zum sichtbarsten Inhalt führt), dann Ihre maximale Vergrößerung auf den maximalen Wert des unterstützten FOV kartieren und die entsprechenden Werte dazwischen abbilden.

Wenn Sie jeden Frame's Rendering-Durchlauf durch Berechnung der Perspektiv-Matrix starten, können Sie dann in diese Matrix alle anderen Transformationen multiplizieren, die Sie anwenden müssen, um die gewünschte Geometrie des Frames zu erzeugen. Zum Beispiel:

```js
const transform = createPerspectiveMatrix(viewport, 130, 1, 100);
const translateVec = vec3.fromValues(
  -trackDistance,
  -craneDistance,
  pushDistance,
);
mat4.translate(transform, transform, translateVec);
```

Dies beginnt mit der Perspektiv-Matrix, die ein vertikales Sichtfeld von 130° darstellt, und wendet dann eine Übersetzung an, die die Kamera auf eine Weise bewegt, die [Lauf](#track), [Kran](#crane), und [Druck](#push)-Bewegungen umfasst.

#### Skalierungstransformationen

Im Gegensatz zu einem echten "Zoom" besteht **Skalierung** darin, jeden der `x`-, `y`- und `z`-Koordinatenwerte in einer Position oder einem Scheitelpunkt mit einem Skalierungsfaktor für diese Achse zu multiplizieren. Diese müssen für jede Achse nicht notwendigerweise identisch sein, obwohl das ähnlichste Resultat zu einem Zoom-Effekt durch Verwenden des gleichen Werts für jede erzielt werden kann. Dies müsste bei jedem Scheitelpunkt in der Szene angewandt werden – idealerweise im Scheitelpunkt-Shader.

Wenn Sie um einen Faktor 2 nach oben skalieren möchten, müssen Sie jede Komponente mit 2.0 multiplizieren. Um um denselben Betrag herunterzuskaliert, multiplizieren Sie sie mit -2.0. In Matrixbegriffen wird dies mit einer Transformationsmatrix mit eingerechneter Skalierung durchgeführt, wie folgt:

```js-nolint
let scaleTransform = [
  Sx, 0, 0, 0,
  0, Sy, 0, 0,
  0, 0, Sz, 0,
  0, 0, 0, 1
];
```

Diese Matrix stellt eine Transformation dar, die vergrößert oder verkleinert wird, um einen Faktor angezeigt durch `(Sx, Sy, Sz)`, wobei `Sx` der Skalierungsfaktor entlang der X-Achse, `Sy` der Skalierungsfaktor entlang der Y-Achse, und `Sz` der Faktor für die Z-Achse ist. Wenn einer dieser Werte von den anderen abweicht, wird das Ergebnis eine Streckung oder Kontraktion sein, die in einigen Dimensionen im Vergleich zu anderen unterschiedlich ist.

Wenn der gleiche Skalierungsfaktor in jeder Richtung angewendet werden soll, können Sie eine einfache Funktion erstellen, um für Sie die Skalierungstransformationsmatrix zu generieren:

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

Oder durch Skalierung entlang jeder Achse mit dem gleichen Faktor mittels der oben gezeigten `createScalingMatrix()`-Funktion:

```js
let myVector = [2, 1, -3];
vec4.transformMat4(myVector, myVector, createScalingMatrix(2.0));
```

### Schwenken (seitliches Verdrehen)

**Schwenken** oder **seitliches Verdrehen** ist die Drehung der Kamera von links nach rechts oder von rechts nach links, mit festem Standfuß an Ort und Stelle. Die Position der Kamera im Raum bleibt unverändert, nur die Richtung, in die sie schaut. Und diese Richtung ändert sich nicht außer horizontal. Schwenken ist großartig, um eine Einstellung zu etablieren oder ein Gefühl von Umfang in einem weiten Raum oder auf einem weiten Objekt zu vermitteln. Oder einfach nur, um nach links und rechts zu schauen, ähnlich wie bei der Simulation des Spielers, der seinen Kopf in einem immersiven oder VR-Szenario dreht.

![Ein Diagramm, das zeigt, wie eine Kamera nach links oder rechts schwenkt](camera-pan.png)

Um dies zu tun, müssen wir um die Y-Achse rotieren, um die links- und rechts-Drehung der Kamera zu simulieren. Verwenden Sie die zuvor verwendete [glMatrix](https://glmatrix.net/) Bibliothek, dies kann mit der `rotateY()`-Methode in der `mat4`-Klasse durchgeführt werden, die eine standardmäßige 4x4-Matrix darstellt. Um die durch die Matrix `viewMatrix` definierte Ansicht um `panAngle` Radiant zu drehen:

```js
mat4.rotateY(viewMatrix, viewMatrix, panAngle);
```

Wenn `panAngle` positiv ist, schwenkt diese Transformation die Kamera nach rechts; ein negativer Wert für `panAngle` schwenkt die Kamera nach links.

### Neigen (Auf- oder Abwärtsneigung)

Beim **Neigen** oder **Auf- oder Abwärtsneigung** der Kamera halten Sie sie in Raum an denselben Koordinaten fixiert, während Sie die vertikale Blickrichtung ändern, ohne die horizontale Sichtweise überhaupt zu ändern. Sie passt die Richtung, in der sie auf- und abwärts zeigt. Neigen eignet sich hervorragend, um den Umfang eines hohen Objekts oder einer Szene, wie etwa eines Waldes oder eines Berges, einzufangen, ist aber auch eine beliebte Möglichkeit, um einen Charakter oder Ort von Bedeutung einzuführen, oder um Ehrfurcht zu inspirieren. Natürlich ist sie auch nützlich, um Unterstützung für einen Spieler zu implementieren, der nach oben und unten schaut.

![Ein Diagramm, das zeigt, wie eine Kamera auf- und abwärts neigt](camera-tilt.png)

Somit kann das Neigen der Kamera durchgeführt werden, indem die Kamera um die X-Achse gedreht wird, damit sie auf- und abwärts schwenkt. Dies kann durch die entsprechende Methode in Ihrer Matrix-Mathematik-Bibliothek durchgeführt werden, wie etwa die `rotateX()`-Methode in glMatrix's `mat4`-Klasse:

```js
mat4.rotateX(viewMatrix, viewMatrix, angle);
```

Positive Winkelwerte für `angle` werden die Kamera nach unten neigen, während negative Werte für `angle` die Kamera nach oben neigen.

### Doll-Fahrt (Vorwärts- oder Rückwärtsbewegung)

Ein **Dolly**-Schuss ist, wenn die gesamte Kamera vorwärts und rückwärts bewegt wird. Im klassischen Filmemachen wird dies typischerweise mit der Kamera auf einer Schiene oder auf einem sich bewegenden Fahrzeug montiert durchgeführt. Die resultierende Bewegung kann eindrucksvoll glatte Effekte erzeugen, insbesondere wenn sie sich synchron mit der Person oder dem Objekt bewegen, das der Fokus Ihres Schusses ist.

![Ein Diagramm, das zeigt, wie sich eine Kamera für einen Dolly-Schuss bewegt](camera-dolly.png)

Während ein Dolly-Schuss und ein Zoom sich ähneln sollten, tun sie es nicht. Die Tatsache, dass Zoomen die Brennweite der Kamera verändert, bedeutet, dass sich die räumlichen Beziehungen zwischen dem Ziel und seiner Umgebung nicht ändern, auch wenn das Ziel im Rahmen größer oder kleiner wird. Auf der anderen Seite repliziert ein Dolly-Schuss durch tatsächliche Bewegung der Kamera das Gefühl physischer Bewegung, indem er die Beziehungen von Objekten in der Szene verschiebt, wie Sie erwarten würden, während Sie sich an ihnen vorbeibewegen, während Sie auf das Ziel des Schusses zugehen oder davon weggehen.

Um eine Dolly-Operation auszuführen, übertragen Sie die Kameraansicht vorwärts und rückwärts entlang der Z-Achse:

```js
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Hier ist `[0, 0, dollyDistance]` ein Vektor, wobei `dollyDistance` die Entfernung ist, die die Kamera gedrückt werden soll. Da dies durch Bewegen der gesamten Welt um die Kamera funktioniert, was hier tatsächlich passiert, ist, dass sich die gesamte Welt um `dollyDistance` Meter entlang der Z-Achse relativ zur Kamera bewegt. Wenn `dollyDistance` positiv ist, bewegt sich die Welt um diesen Betrag auf den Benutzer zu, was dazu führt, dass die Kamera der Szene näher kommt. Im Gegenteil, negative Werte von `dollyDistance` bewegen die Welt vom Benutzer weg, wodurch die Kamera scheinbar vom Ziel zurückweicht.

### Trucking (Bewegung nach links oder rechts)

**Trucking** unter Verwendung einer physischen Kamera verwendet die gleiche Art von Rigging wie dollying, aber anstatt die Kamera vorwärts und rückwärts zu bewegen, bewegt sie sich von links nach rechts oder umgekehrt. Die Kamera rotiert überhaupt nicht, so dass der Fokus des Schusses langsam vom Bildschirm gleitet. Dies kann Konzentration, das Vergehen von Zeit oder Nachdenken suggerieren, wenn versucht wird, Emotionen in einer Szene zu etablieren. Es wird auch häufig in sogenannten "Walk-and-Talk"-Szenen verwendet, wobei die Kamera neben den Charakteren durch die Szene gleitet, während sie sich unterhalten.

![Ein Diagramm, das zeigt, wie eine Kamera nach links und rechts bewegt wird](camera-truck.png)

Um die Kamera nach links und rechts zu bewegen, übertragen Sie die Ansichtsmatrix entlang der X-Achse in die entgegengesetzte Richtung der gewünschten Kamerabewegung:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
```

Beachten Sie den Vektor `[-truckDistance, 0, 0]`. Dies kompensiert dafür, dass die Truck-Operation durch Bewegen der Welt und nicht der Kamera funktioniert. Indem die gesamte Welt in die entgegengesetzte Richtung von der durch `truckDistance` angegebenen Richtung bewegt wird erreichen wir den Effekt, dass sich die Kamera in die erwartete Richtung bewegt. Auf diese Weise werden positive Werte von `truckDistance` die Kamera nach rechts bewegen (indem sie die Welt nach links bewegt) und negative Werte von `truckDistance` werden die Kamera nach links bewegen, indem sie die Welt nach rechts bewegt.

### Pedestalkamerabewegung (Auf- oder Abwärtsbewegung)

Ein **Pedestal**-Schuss ist, der die Kamera horizontal relativ zum Boden fixiert hält, aber gerade nach oben oder unten bewegt. Stellen Sie sich die Kamera auf einem Podium (oder einer Stange) vor, die größer oder kleiner wird. Dies ist nützlich, wenn man ein Objekt verfolgt, das größer oder kleiner wird, oder aufsteht, weil es sich setzt oder sich in einem Stuhl aufrichtet, oder sich einfach direkt auf- und abwärts bewegt.

![Ein Diagramm, das zeigt, wie eine Kamera durch eine Podestbewegung auf- und abwärts bewegt wird](camera-pedestal.png)

Dies ist ähnlich wie bei einem **Kran**-Schuss, der das Bewegen einer an einem Kran befestigten Kamera nach oben und unten beinhaltet. Um eine Podest- oder Kranbewegung auszuführen, übertragen Sie den Blick entlang der Y-Achse in entgegengesetzter Richtung zu der Richtung, in der Sie die Kamera bewegen möchten:

```js
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
```

Durch Negieren des Werts von `pedestalDistance` kompensieren wir dafür, dass wir tatsächlich die Welt bewegen, nicht die Kamera. Auf diese Weise werden positive Werte von `pedestalDistance` die Kamera nach oben bewegen, während negative Werte die Kamera nach unten bewegen.

### Cantar (Links- und Rechtsrollen)

**Cant** (oder **Rolle**) ist eine Drehung der Kamera um ihre Rollachse; das bedeutet, die Kamera bleibt im Raum fixiert und bleibt auf den gleichen Punkt gerichtet, wird aber so gedreht, dass die Oberseite der Kamera in eine andere Richtung zeigt.

![Ein Diagramm, das zeigt, wie eine Kamera nach links und rechts rollt](camera-roll.png)

Sie können dies visualisieren, indem Sie Ihren Arm vor sich strecken mit Ihrer Hand offen, Palme nach unten. Stellen Sie sich vor, dass Ihre Hand die Kamera ist und der Handrücken die Oberseite der Kamera darstellt. Drehen Sie nun Ihre Hand, sodass die "Kamera" kopfüber ist. Sie haben gerade Ihre Hand um die Rollachse gedreht. In der Kinematografie kann die Cant zum Simulieren verschiedener Arten von instabilen Bewegungen wie Wellen oder Turbulenzen verwendet werden, kann aber auch für dramatische Effekte verwendet werden.

Um dies um die Z-Achse unter Verwendung von glMatrix zu erreichen:

```js
mat4.rotateZ(viewMatrix, viewMatrix, cantAngle);
```

## Kombination mehrerer Bewegungen

Sie können mehrere Bewegungen auf einmal durchführen, wie zum Beispiel gleichzeitig zu zoomen und zu schwenken oder gleichzeitig zu neigen und zu rollen.

### Übersetzungen entlang mehrerer Achsen

Das Übersetzen entlang mehrerer Achsen ist ziemlich einfach. Bisher haben wir unsere Übersetzungen so ausgeführt:

```js
mat4.translate(viewMatrix, viewMatrix, [-truckDistance, 0, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, -pedestalDistance, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, 0, dollyDistance]);
```

Die offensichtliche Lösung hier ist. Da die Übersetzung als Vektor ausgedrückt wird, der den Abstand angibt, der entlang jeder Achse bewegt werden soll, können wir sie so kombinieren:

```js
mat4.translate(viewMatrix, viewMatrix, [
  -truckDistance,
  -pedestalDistance,
  dollyDistance,
]);
```

Dies wird den Ursprung der Matrix `viewMatrix` um den angegebenen Betrag entlang jeder Achse verschieben.

### Drehungen um mehrere Achsen

Sie können auch Drehungen um mehrere Achsen in eine einzelne Drehung um eine Quaternion zusammenfassen, die eine gemeinsame Achse für die Drehungen darstellt. Um die Drehungen separat auszuführen, verwenden Sie [Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles) (separate Winkel um jede Achse), um Neigungen, Schwenkungen und Rollen so anzuwenden:

```js
mat4.rotateX(viewMatrix, viewMatrix, pitchAngle);
mat4.rotateY(viewMatrix, viewMatrix, yawAngle);
mat4.rotateZ(viewMatrix, viewMatrix, rollAngle);
```

Stattdessen können Sie ein {{Glossary("quaternion")}} erstellen, das eine kombinierte Rotationsachse aus den Euler-Winkeln darstellt, und die Matrix dann über Rotation basierend auf der Multiplikation drehen, wie folgt:

```js
const axisQuat = quat.create();
const rotateMatrix = mat4.create();
quat.fromEuler(axisQuat, pitchAngle, yawAngle, rollAngle);
mat4.fromQuat(rotateMatrix, axisQuat);
mat4.multiply(viewMatrix, viewMatrix, rotateMatrix);
```

Dies konvertiert die Euler-Winkel für Neigung, Schwenkung und Rollung in ein Quaternion, das alle drei Drehungen repräsentiert. Dies wird dann in eine Rotations-Transformations-Matrix umgewandelt; und schließlich wird die Ansichts-Matrix mit dem Rotations-Transform multipliziert, um die Drehungen zu vervollständigen.

## Darstellung von 3D mit WebXR

WebXR geht einen Schritt weiter als 3D-Grafiken, indem es sie durch spezielle visuelle Hardware, wie Schutzbrillen oder Headsets, präsentiert, um 3D-Grafiken zu erzeugen, die scheinbar tatsächlich in drei Dimensionen existieren, möglicherweise im Kontext der realen Welt (im Fall von Augmented Reality).

Um Tiefe zu erfassen, ist es notwendig, zwei Perspektiven auf die Szene zu haben. Indem Sie die beiden Ansichten vergleichen, ist es möglich, die Tiefe von Objekten zu erkennen und, in der Erweiterung, den Abstand zwischen dem Betrachter und den gesehenen Objekten. Aus diesem Grund haben wir zwei Augen, die leicht voneinander entfernt sind. Sie können sich daran erinnern, indem Sie abwechselnd ein Auge schließen. Beachten Sie, wie Ihr linkes Auge die linke Seite Ihrer Nase sehen kann, aber nicht die rechte, während Ihr rechtes Auge die rechte Seite Ihrer Nase sehen kann, aber nicht die linke. Dies ist nur einer von vielen Unterschieden, die zwischen dem bestehen, was jedes Ihrer Augen sieht.

Unser Gehirn erhält zwei Datenmengen über Lichtstärken und Wellenlängen in unserem Sichtfeldbereich – jeweils eine aus jedem Auge. Das Gehirn verwendet diese Daten, um die Szene in unserem Bewusstsein zu konstruieren, indem es die geringfügigen Unterschiede zwischen den beiden Perspektiven nutzt, um Tiefe und Entfernung zu ermitteln.

### Darstellung der Szene

Ein XR - eine Abkürzung, die sowohl Virtual Reality (VR) als auch Augmented Reality (AR) abdeckt – Headset zeigt uns 3D-Bilder, indem es zwei Ansichten der Szene zeichnet, die leicht voneinander versetzt sind, genau wie die Ansichten, die unsere beiden Augen erhalten. Diese Ansichten werden dann separat jedem Auge zugeführt, um ihnen die Daten zu geben, die unser Gehirn benötigt, um ein 3D-Bild in unserem Bewusstsein zu konstruieren.

Dazu fordert WebXR Ihren Renderer auf, die Szene zweimal für jeden Videorahmen darzustellen – einmal für jedes Auge. Die beiden Ansichten werden in denselben Framebuffer gerendert, eine auf der linken und eine auf der rechten Seite. Das XR-Gerät verwendet dann Bildschirme und Linsen, um die linke Hälfte des produzierten Bildes unserem linken Auge und die rechte Hälfte unserem rechten Auge zu zeigen.

Betrachten Sie beispielsweise ein Gerät, das einen 2560x1440-Pixel-Framebuffer verwendet. Das Aufteilen in zwei Teile – die Hälfte für jedes Auge – führt dazu, dass die Ansicht jedes Auges bei einer Auflösung von 1280x1440 Pixeln gezeichnet wird. So sieht das konzeptionell aus:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den beiden Augenperspektiven aufgeteilt wird](twoviewsoneframebuffer.svg)

Ihr Code teilt der WebXR-Engine mit, dass Sie den nächsten Animationsrahmen bereitstellen möchten, indem Sie die {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} aufrufen und eine Rückruffunktion angeben, die einen Animationsrahmen rendert. Wenn der Browser Sie braucht, um die Szene darzustellen, ruft er den Rückruf auf und bietet die aktuellen Zeit- und ein {{domxref("XRFrame")}}, das die zum Rendern des richtigen Rahmens erforderlichen Daten umfasst, als Eingabeparameter.

Diese Informationen umfassen die {{domxref("XRViewerPose")}}, die die Position und Blickrichtung des Betrachters in der Szene beschreibt, sowie eine Liste von {{domxref("XRView")}}-Objekten, die jeweils eine Perspektive auf die Szene darstellen. In den aktuellen WebXR-Implementierungen wird es nie mehr als zwei Einträge in dieser Liste geben: einen, der die Position und Blickrichtung des linken Auges beschreibt, und einen, der das gleiche für das rechte Auge tut. Sie können erkennen, welches Auge eine bestimmte `XRView` darstellt, indem Sie den Wert ihrer {{domxref("XRView.eye", "eye")}}-Eigenschaft überprüfen, die ein Zeichenkette ist, deren Wert `left` oder `right` ist (ein dritter möglicher Wert, `none`, theoretisch verwendet werden kann, um einen anderen Sichtpunkt darzustellen, aber Unterstützung hierfür ist in der aktuellen API nicht ganz verfügbar).

### Beispiel für einen Rahmencallback

Ein ziemlich grundlegender (aber typischer) Rückruf zum Rendern von Frames könnte so aussehen:

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

Der Rückruf beginnt mit dem Aufrufen einer benutzerdefinierten Funktion, `applyPositionOffsets()`, die einen Referenzraum übernimmt und seiner Transformationsmatrix alle Änderungen unterzieht, die vorgenommen werden müssen, um Dinge wie Benutzereingaben von nicht von WebXR kontrollierten Geräten, wie etwa Tastatur und Maus, zu berücksichtigen. Der angepasste {{domxref("XRReferenceSpace")}}, der von dieser Funktion zurückgegeben wird, wird dann in die {{domxref("XRFrame")}}-Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} übergeben, um die {{domxref("XRViewerPose")}} zu erhalten, die die Position und Blickrichtung des Betrachters darstellt.

Als nächstes stellen wir sicher, dass wir den nächsten Videorahmen zur Darstellung anfordern, indem wir erneut `requestAnimationFrame()` aufrufen, so dass wir uns später nicht darum kümmern müssen.

Nun ist es an der Zeit, die Szene zu rendern. Wenn wir tatsächlich eine Pose erfolgreich erhalten haben, holen wir uns die {{domxref("XRWebGLLayer")}}, die wir für das Rendern verwenden müssen, aus der {{domxref("XRSession.renderState", "renderState")}}-Eigenschaft des Sitzungsobjekts `baseLayer` des Sitzungsobjekts. Dies binden wir an das `gl.FRAMEBUFFER`-Ziel von WebGL mit der {{domxref("WebGLRenderingContext")}}-Methode {{domxref("WebGLRenderingContext.bindFrameBuffer", "gl.bindFrameBuffer()")}}.

Dann leeren wir den Framebuffer, um sicherzustellen, dass wir mit einem bekannten Zustand beginnen, da unser Renderer nicht jedes Pixel berühren wird. Wir setzen die Klarfarbe auf undurchsichtiges Schwarz mit {{domxref("WebGLRenderingContext.clearColor", "gl.clearColor()")}} und den Wert zum Leeren des Tiefenpuffers auf 1,0, indem wir die {{domxref("WebGLRenderingContext")}}-Methode {{domxref("WebGLRenderingContext.clearDepth", "gl.clearDepth()")}} aufrufen. Danach rufen wir die {{domxref("WebGLRenderingContext")}}-Methode {{domxref("WebGLRenderingContext.clear", "gl.clear()")}} auf, die den Framebuffer (da wir `gl.COLOR_BUFFER_BIT` in die Maskenparameter einschließen) und den Tiefenpuffer (da wir `gl.DEPTH_BUFFER_BIT` einschließen) leert.

Dann bestimmen wir durch den Vergleich der gewünschten Renderzeit des Rahmens mit der Zeit, zu der der letzte Frame gezeichnet wurde, wie viel Zeit seit dem vorherigen Frame vergangen ist. Da dieser Wert in Millisekunden angegeben ist, wandeln wir ihn in Sekunden um, indem wir mit 0,001 multiplizieren (oder durch 1000 dividieren).

Nun durchlaufen wir die Ansichten der Pose, wie sie im `XRViewerPose`-Array, `views`, gefunden wurden. Für jede Ansicht bitten wir die `XRWebGLLayer` um das entsprechende Ansichtsfenster, das verwendet werden soll, und konfigurieren das WebGL-Ansichtsfenster so, dass es mit der Position und Größeninformationen in das `viewport`-Parameter in die `gl.viewport()`-Methode passt. Dadurch wird das Rendern so eingeschränkt, dass wir nur in den Teil des Framebuffers zeichnen können, der das Bild enthält, das vom Auge mit der in {{domxref("XRView.eye", "view.eye")}} angegebenen Eigenschaft gesehen wird.

Mit den so festgelegten Einschränkungen und allem anderen, was wir benötigen, bereit, rufen wir eine benutzerdefinierte Funktion, `myRenderScene()`, auf, um tatsächlich die Berechnungen und das WebGL-Rendering durchzuführen, damit der Frame gerendert wird. Hierbei übergeben wir den WebGL-Kontext, `gl`, die {{domxref("XRView")}} `view`, ein `sceneData`-Objekt (das Dinge wie die Scheitel- und Fragmentshader, Scheitelpunktlisten, Texturen und so weiter enthält) und `deltaTime`, das angibt, wie viel Zeit seit dem vorherigen Frame vergangen ist, so dass wir wissen, wie weit wir die Animation fortschreiten lassen müssen.

Wenn die Funktion zurückkehrt, enthält der WebGL-Framebuffer, der von WebXR verwendet wird, nun zwei Kopien der Szene, die jeweils die Hälfte des Rahmens einnehmen: eine für das linke Auge und eine für das rechte Auge. Dies findet seinen Weg durch die XR-Software und Treiber in das Headset, wo jede Hälfte dem jeweiligen Auge gezeigt wird.

## Siehe auch

- [Geometrie und Referenzflächen](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Matrixmath für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
