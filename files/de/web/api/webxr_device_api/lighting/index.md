---
title: Beleuchtung einer WebXR-Umgebung
slug: Web/API/WebXR_Device_API/Lighting
l10n:
  sourceCommit: 80d4cfb4515b339111e175dbeb8d2b91fd3ee1a0
---

{{DefaultAPISidebar("WebXR Device API")}}

Da die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) auf andere Technologien—nämlich [WebGL](/de/docs/Web/API/WebGL_API) und darauf basierende Frameworks—zurückgreift, um alle Grafiken, Texturen und Beleuchtungen einer Szene auszuführen, gelten dieselben allgemeinen Beleuchtungskonzepte für WebXR-Umgebungen oder -Szenen wie für jede andere von WebGL erzeugte Anzeige.

Es gibt jedoch Aspekte und Details, die Sie bei der Erstellung Ihres Beleuchtungscodes beachten sollten, insbesondere für Anwendungen der erweiterten Realität (AR). Dieser Leitfaden behandelt diese Themen. Und obwohl dieser Artikel kurze Erinnerungen daran bietet, wie Beleuchtung im Allgemeinen funktioniert, ist er keineswegs ein Tutorial zur Beleuchtung oder ein Leitfaden zur Erstellung einer richtig beleuchteten 3D-Szene.

## Rückblick: Simulation der Beleuchtung in 3D

Auch wenn dieser Artikel kein umfassender Leitfaden für die Beleuchtung einer 3D-Szene ist, ist es hilfreich, eine kurze Erinnerung daran zu geben, wie Beleuchtung im Allgemeinen funktioniert. Grundsätzlich erfordert die Simulation von Beleuchtung in einer virtuellen Szene die Berechnung, wie viel Licht von jeder Lichtquelle das Auge erreicht, nachdem es mit jedem Objekt in der Szene interagiert hat und davon reflektiert wurde.

### Reflexion von Licht

**Abbildung: Ein Diagramm zeigt, wie der Reflexionswinkel dem Einfallswinkel entspricht.**
![Ein Diagramm zeigt, wie der Reflexionswinkel dem Einfallswinkel entspricht.](law-of-reflection.svg)

Jedes Objekt, das wir sehen, sehen wir, weil das Objekt entweder Licht emittiert oder reflektiert (oder beides). Das einfallende Lichtstrahl—der **Einfallsstrahl**—trifft in einem Winkel ein, der als **Einfallswinkel** bekannt ist. Der Einfallswinkel, Θᵢ, ist der Winkel zwischen dem Einfallsstrahl und dem [Normalenvektor](https://en.wikipedia.org/wiki/Normal_vector) der Oberfläche.

Für raue Oberflächen wird das Licht gleichmäßig in alle Richtungen reflektiert. Glänzende, spiegelartige Oberflächen reflektieren jedoch das meiste Licht in eine Richtung, deren **Reflexionswinkel**, Θᵣ, dem Einfallswinkel entspricht, jedoch auf der gegenüberliegenden Seite des Normalenvektors. Der **reflektierte Strahl** verläuft dann in diesem Winkel vom Normalen ab. Dies ist das **[Gesetz der Reflexion](https://en.wikipedia.org/wiki/Law_of_reflection)**. Dies ist die Grundlage für vieles, was in der Schattierung einer Szene involviert ist und spielt eine Rolle in Bezug darauf, wie verschiedene Lichtquellenarten sich verhalten.

Natürlich kann die Farbe des reflektierten Lichtstrahls in Intensität und/oder Farbton aufgrund der Interaktion des Lichts mit der Oberfläche verändert werden, jedoch bleibt der Winkel immer gleich.

### Komponenten einer Lichtquelle

Eine Lichtquelle hat drei Hauptkomponenten; jede Komponente ist im Wesentlichen eine Art Licht.

Es gibt drei Arten von Licht, die die Farbe und Helligkeit von Objekten und deren Pixeln beeinflussen können, wie sie auf dem Bildschirm oder Headset des Betrachters angezeigt werden.

#### Umgebungslicht

**Umgebungslicht** ist Licht, das nicht von einer definierten Quelle stammt, sondern einfach im Raum vorhanden ist. Dieses Licht erreicht jede Oberfläche in der Szene mit derselben Intensität aus jeder Richtung und wird dann gleichmäßig in alle Richtungen reflektiert. Dadurch wirkt sich der Effekt, den das Umgebungslicht bewirkt, gleichmäßig auf die gesamte Szene aus.

**Abbildung: Eine Kugel mit nur Umgebungsbeleuchtung. Beachten Sie das völlige Fehlen von Schattierungen zur Anzeige der Tiefe der Kugel.**
![Eine Kugel, die nur Umgebungsbeleuchtung hat. Beachten Sie das völlige Fehlen von Schattierungen zur Anzeige der Tiefe der Kugel.](sphere-ambient-light-only.jpg)

Der Effekt des Umgebungslichts wird berechnet, indem die Intensität der Lichtquelle mit der Reflexion der Oberfläche an der Position des Pixels multipliziert wird. Die Farbe und Intensität jedes Pixels in der Szene wird genau auf dieselbe Weise beeinflusst, unabhängig davon, wo es in der Szene ist oder in welche Richtung es zeigt. Umgebungslicht ist häufig vorhanden, um zu verhindern, dass schattierte Bereiche zu dunkel werden, obwohl es die gesamte Szene beeinflusst; die Menge an Umgebungslicht in einer Szene sollte jedoch sehr gering sein.

Da das Springen und Streuen von Licht in Echtzeit aufwendig zu berechnen sein kann, insbesondere wenn mehrere Lichtquellen beteiligt sind, ist es üblich, Umgebungslicht zu verwenden, um das gestreute Licht zu simulieren, das durch alle anderen Lichtquellen in der Szene verursacht wird, anstatt tatsächlich den wahren Effekt des Lichtstreuens zu berechnen. Es muss darauf geachtet werden, das Umgebungslicht so anzupassen, dass es wirklich den Effekt der Beleuchtung der Szene darstellt.

Umgebungslicht kann auch verwendet werden, um eine Farbtonung auf eine Szene anzuwenden; zum Beispiel in einem Spiel, in dem der Spieler eine spezielle gelb getönte Brille trägt, können Sie ein gelbes Umgebungslicht hinzufügen.

#### Diffuses Licht

**Diffuses Licht** ist Licht, das gleichmäßig und in eine Richtung von oder auf eine Oberfläche emittiert oder reflektiert wird. Dies ist das meiste Licht, das wir normalerweise sehen. Diffuses Licht kommt aus einer bestimmten Position oder Richtung und wirft Schatten. Aufgrund seiner Richtung sind die Flächen eines Objekts, die sich einer diffusen Lichtquelle zuwenden, heller als die anderen Flächen.

**Abbildung: Der fünftgrößte Mond des Saturn, Tethys, im Sonnenlicht, das von unten links kommt.**
![Der fünftgrößte Mond des Saturn, Tethys, ist hauptsächlich von der Sonne beleuchtet, mit etwas Licht, das von Saturn reflektiert wird. Dies ist diffuse Beleuchtung.](tethys.jpg)

Da die Intensität des diffusen Lichts vom [Einfallswinkel](https://en.wikipedia.org/wiki/Angle_of_incidence) (dem Winkel zwischen dem Vektor, der die Richtung darstellt, aus der das Licht die Oberfläche erreicht, und dem Normalenvektor der Oberfläche oder dem zur Oberfläche senkrechten Vektor) abhängt, variiert die Intensität oder Helligkeit des von einem Objekt reflektierten Lichts abhängig von der Ausrichtung der Oberfläche relativ zur Lichtquelle.

#### Spiegelndes Licht

**Spiegelndes Licht** ist das Licht, das die Glanzlichter auf reflektierenden Objekten bildet, wie Edelsteinen, Augen, glänzenden Tassen und Tellern und dergleichen. Spiegelnde Lichter erscheinen normalerweise als helle Flecken oder Quadrate auf einer Oberfläche an dem Punkt, an dem eine Lichtquelle die Oberfläche am direktesten trifft.

**Abbildung: Ein Foto, das von NASAs Cassini-Raumsonde aufgenommen wurde und die spekularen Reflexionen von Licht von einem See flüssigen Methans auf der Oberfläche des Saturnmonds Titan zeigt.**
![Ein Foto, das von NASAs Cassini-Raumsonde aufgenommen wurde und die spekularen Reflexionen von Licht von einem See flüssigen Methans auf der Oberfläche des Saturnmonds Titan zeigt.](specularlight-titan.jpg)

Jede Lichtquelle wird durch eine Kombination aus Umgebungs-, Diffus- und/oder Spiegellicht repräsentiert. Das WebGL-Shader-Programm nimmt die Farbe, Richtung, Helligkeit und andere Faktoren jeder Lichtquelle und berechnet die endgültige Farbe jedes Pixels.

### Arten von Lichtquellen

Es gibt vier grundlegende Arten von Lichtquellen. Jede beinhaltet eine Quelle von virtuellem Licht, deren Abstand vom zu zeichnenden Objekt und die Richtung der Lichtwellen bewirken, dass die Lichtquelle spezifische Eigenschaften annimmt. In den meisten Fällen kann jede reale Lichtquelle mithilfe einer oder mehrerer dieser Lichtquellenarten simuliert werden.

#### Umgebungslampen

Eine **Umgebungslampe** ist eine Lichtquelle, die das Niveau und die Farbe des Umgebungslichts in einer Szene beschreibt. Obwohl es mehr als eine dieser Lampen in einer Szene geben kann, können Sie die Leistung wahrscheinlich leicht verbessern, indem Sie diese selbst zu einer kombinieren, da jede ohnehin immer jeden Pixel gleichmäßig beeinflusst.

Umgebungslampen entsprechen normalerweise keinem Objekt innerhalb der Szene und haben auch keine realen Entsprechungen.

#### Direktionale Lichtquellen

Eine **direktionale Lichtquelle** ist eine Lichtquelle, die aus einer bestimmten Richtung kommt, aber nicht von einer bestimmten Quelle, sodass ihre emittierten Lichtstrahlen parallel zueinander sind. Darüber hinaus ändert sich die Intensität des Lichts nicht über die Entfernung. Dies bedeutet, dass Schatten, die von direktionalen Lichtern geworfen werden, sehr scharf sind, mit einem im Wesentlichen sofortigen Übergang zwischen beleuchtet und beschattet.

**Abbildung: Die Erde und der Mond sind beide von der Sonne halbbeleuchtet durch das Sonnenlicht, das ein direktionales Licht ist.**
![Ein von der Galileo-Raumsonde aus etwa 6,3 Millionen Kilometern Entfernung aufgenommenes Foto, mit Erde und Mond, die beide von der Sonne halbbeleuchtet sind.](earthandmoon.jpg)

Das häufigste Beispiel für ein direktionales Licht ist die Sonne. Während die Sonne in Wirklichkeit ein einzelnes (großes) Objekt ist, ist sie sehr weit entfernt, sodass die Lichtstrahlen von ihr im Wesentlichen parallel sind. Obwohl das Sonnenlicht tatsächlich mit zunehmender Entfernung an Intensität abnimmt, ist die Änderungsrate sehr gering und nur über weite Entfernungen wahrnehmbar, sodass die Rate der Intensitätsänderung des Sonnenlichts für die Darstellung einer 3D-Szene typischerweise keine Rolle spielt.

#### Punktlichtquellen

Eine **Punktlichtquelle** ist eine Lichtquelle, die an einem bestimmten Ort positioniert ist und gleichmäßig in alle Richtungen abstrahlt. Glühbirnen, Kerzen und Ähnliches sind Beispiele für Punktlichtquellen. Je näher ein Objekt an einer Punktlichtquelle ist, desto heller ist das Licht, das es auf das Objekt projiziert. Die Geschwindigkeit, mit der die Helligkeit eines Punktlichts abnimmt, wird als **Abschwächung** bezeichnet und ist in WebGL und anderen Beleuchtungssystemen eine konfigurierbare Funktion der Lichtquelle.

Zwischen dem Gesetz der Reflexion und der Tatsache, dass die Helligkeit der Lichtstrahlen mit der Entfernung abnimmt, neigt das von einer Punktquelle emittierte und reflektierte Licht dazu, am hellsten am nächstgelegenen Punkt zur Lichtquelle zu sein und dunkler, je weiter es entfernt ist. Selbst wenn die Oberfläche flach ist, ist der nächste Punkt zur Lichtquelle das Zentrum, wobei die Strahlen immer länger werden, wenn sich der Winkel vom Normalen verändert.

#### Scheinwerferquellen

Eine **Scheinwerferquelle** (oder **Spotlight**) ist eine Lichtquelle, die sich an einer bestimmten Position befindet und einen Lichtkegel in Richtung ihres Ausrichtungsvektors abstrahlt. Ein Tapering-Rate-Parameter definiert, wie schnell die Helligkeit des Lichts an den Rändern des Lichtkegels abfällt. Und wie bei Punktlichtern steuert ein Abschwächungsparameter, wie das Licht über die Entfernung verblasst.

**Abbildung: Ein Foto eines Scheinwerfers, der nachts auf eine Stuckwand scheint.**
![Ein Foto eines Scheinwerfers, der nachts auf eine Stuckwand scheint.](spotlight-on-stucco.jpg)

Am Rand des Lichtkegels hat das Licht keinen Einfluss mehr auf die Oberfläche.

#### Rechenaufwand bei der Beleuchtung

Um sichtbar zu sein, muss eine Szene irgendeine Art von Beleuchtung enthalten, daher haben alle oder fast alle Szenen mindestens eine Lichtquelle und können möglicherweise eine Vielzahl davon haben. Jede Lichtquelle erhöht den Berechnungsaufwand erheblich, der zur Bestimmung der endgültigen Farbe und Helligkeit jedes angezeigten Pixels erforderlich ist. Die Schattierung für jede dieser Lichtquellenarten auszuführen ist rechnerisch aufwendiger als die vorhergehende; das heißt, Umgebungslicht ist am wenigsten kostspielig anzuwenden, gefolgt von direktionalen Lichtquellen, Punktlichtern und schließlich Scheinwerfern.

Zusätzlich wird die Beleuchtung umso aufwändiger, je genauer sie gestaltet ist. Erhöhte Schattendetails, volumetrisches Licht (das heißt, Beleuchtung, die Sie in der Luft sehen können, wie Sonnenstrahlen oder die Strahlen von Suchscheinwerfern im Himmel) und andere Beleuchtungseffekte können Ihrer Szene Realismus und Schönheit verleihen, aber es muss darauf geachtet werden, dass die Szene die GPU nicht überfordert.

### Berechnung der Farbe eines beleuchteten Pixels

Obwohl einige Grafikbibliotheken Unterstützung für Lichtquellenobjekte beinhalten und automatisch Beleuchtungseffekte berechnen und anwenden, tut WebGL dies nicht. Glücklicherweise ist es nicht allzu schwierig, Beleuchtung in Ihren eigenen Vertex- und Fragment-Shadern anzuwenden.

Für jedes Polygon in der Szene bestimmt das **Vertex-Shader**-Programm die Farben der Scheitelpunkte, und dann erzeugt der **Fragment-Shader** jedes Pixel im Polygon, indem er das entsprechende Texel aus der zugewiesenen Textur, einen beliebigen Farbton oder Effekt und andere visuelle Daten kombiniert. Zu diesem Zeitpunkt wird die Beleuchtung der Szene in Betracht gezogen und je nach Pixel angewendet, bevor das Pixel in den Framebuffer gespeichert wird.

Die Farbe jedes Pixels in der endgültigen, gerenderten Szene wird unter Verwendung einiger komplexer Mathematik berechnet, die Dinge wie folgende berücksichtigt:

- Die Farbe des **Texturelements** (das Pixel innerhalb der Textur, das auf das Objekt abgebildet wird; auch bekannt als **Texel**), das dem Bildschirmpixel entspricht, basierend auf der Objektgeometrie, der Betrachterposition und Ausrichtung relativ zu jedem Polygon und so weiter.
- Die Betrachterposition und Entfernung.
- Das Oberflächenmaterial und die Reflexion.
- Die Konkavität oder Konvexität der Oberfläche an der Zielposition.
- Die Position, Farbe, Richtung und Helligkeit jeder Lichtquelle in der Szene.
- Die Farbe und Helligkeit eines Umgebungslichts in der Szene; dies ist Licht, das gleichmäßig in der Szene angewendet wird, ohne Quelle und somit keine Schatten oder Helligkeitsvariationen.
- Der Effekt von Licht, das von anderen Oberflächen innerhalb der Szene reflektiert wird; die Farbe, Richtung und Helligkeit des reflektierten Lichts beeinflussen die Farbe der Pixel, die das Licht berührt.

Weitere Informationen darüber, wie Beleuchtung in WebGL durchgeführt wird, finden Sie im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL).

## Beleuchtungsprobleme für Mixed-Reality-Inhalte

Neben den üblichen Herausforderungen, mit denen Sie bei der Beleuchtung einer Szene konfrontiert sind, bringt der Einsatz von VR oder AR zusätzliche Problemfelder beim Schreiben Ihrer Shader mit sich. In diesem Abschnitt stellen wir einige grundlegende Leitlinien für die Beleuchtung in der Mixed Reality vor, die Sie beim Erstellen, Rendern und Ausleuchten Ihrer Szene berücksichtigen sollten. Obwohl einige dieser Punkte auch in anderen 3D-Einstellungen nützlich sind, sind die meisten speziell für Virtual Reality und in einigen Fällen noch mehr für Augmented Reality.

Da Ihre Szene dazu gedacht ist, eine Umgebung darzustellen, in der eine Person oder ihr Avatar existieren kann, sollten Sie versuchen, ein gewisses Maß an Konsistenz und Realismus in Bezug auf die Positionierung und Präsentation Ihrer Lichtquellen zu erreichen. Natürlich gibt es Ausnahmen von dieser Richtlinie, zum Beispiel wenn Ihre Szene ein außerweltliches oder fremdartiges Setting darstellt oder wenn Ihr Ziel darin besteht, einen beunruhigenden visuellen Effekt zu erzeugen.

### Realismus in der Platzierung von Lichtquellen

Wenn möglich, sollten Sie versuchen, Ihre virtuellen Lichtquellen mit tatsächlich existierenden Objekten zu korrelieren. Wenn Sie einen virtuellen Raum haben, der eine Deckenbeleuchtung benötigt, platzieren Sie ein Modell einer Deckenlampe an der Position Ihrer Lichtquelle. Es gibt Ausnahmen, wie zum Beispiel das Umgebungslicht, das eine Grundbeleuchtung in Ihre Umgebung einfügt, und die Sonne, die eine gerichtete Lichtquelle ist (das heißt, eine Lichtquelle, bei der jeder Lichtstrahl parallel ist und irgendwo im Himmel beginnt und irgendwo in Ihrer Szene endet).

Versuchen Sie, Lichtquellen an realistischen Orten zu platzieren, die dem beabsichtigten Setting und der Stimmung entsprechen. Eine Szene, die wie eine natürlich beleuchtete, reale Umgebung wirken soll, hat keine Studiobeleuchtung. Sie hat Sonnenlicht, möglicherweise Licht, das von Objekten oder Wasser innerhalb der Szene reflektiert wird, und so weiter, aber keine Lampen, die auf die Gesichter von Objekten oder Personen in der Szene gerichtet sind.

### Realismus in der Spielerinteraktion mit Licht

Wenn sich Ihre Lichtquelle innerhalb der Szene befindet, sollten Sie wahrscheinlich sicherstellen, dass der Avatar des Betrachters die Lichtquelle nicht physisch durchdringen kann. Die Ergebnisse könnten seltsam sein.

Wenn der Avatar des Betrachters eine physische Form haben soll, sollte er ein Modell haben, selbst wenn der Betrachter ihn nie sehen kann, damit der Avatar korrekt mit dem Licht interagiert. Minimal bedeutet dies, dass der Avatar einen angemessenen Schatten werfen sollte; je nach Faktoren wie der Sichtbarkeit des Avatars und den Materialien, Texturen und anderen Attributen seines Modells—einschließlich insbesondere seiner Reflektivität—kann der Avatar auch Licht reflektieren und möglicherweise die Färbung des von ihm reflektierten Lichts beeinflussen.

### Realismus in der erweiterten Realität

Die erweiterte Realität bringt eine zusätzliche Komplexitätsebene in die Beleuchtung Ihrer Objekte, da Ihre virtuellen Objekte in einer physischen Welt existieren müssen, die ihre eigenen Lichtquellen hat. Daher sollten Sie versuchen, Ihre Beleuchtung so weit wie möglich an die Lichtquellen der realen Welt anzupassen. Dies wird mit einer Technik erreicht, die als [Lichtschätzung](#lichtschätzung) bekannt ist.

Umgekehrt sollten Sie versuchen zu vermeiden, dass virtuelle Objekte selbst Lichtquellen sind, es sei denn, Sie sind bereit, Code zu erstellen, der diese Beleuchtung auf die reale Welt überträgt. Das Licht auf reale Objekte zu projizieren ist im Wesentlichen das Gegenteil des Schattens werfens. Es kann getan werden, ist aber nicht so weit verbreitet implementiert.

## Lichtschätzung

**Lichtschätzung** ist eine Technik, die von Plattformen für erweiterte Realität verwendet wird, um zu versuchen, die Beleuchtung der virtuellen Objekte in der Szene an die Beleuchtung der realen Umgebung des Betrachters anzupassen. Dies beinhaltet die Sammlung von Daten, die von verschiedenen Sensoren (einschließlich des Beschleunigungsmessers und Kompasses, falls vorhanden) stammen können, von Kameras und möglicherweise anderen. Weitere Daten werden mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) gesammelt, und dann werden all diese Daten durch Algorithmen und maschinelle Lernmaschinen verarbeitet, um die geschätzten Beleuchtungsinformationen zu erzeugen.

Derzeit bietet WebXR keine Unterstützung für Lichtschätzung. Allerdings wird eine [Spezifikation derzeit entwickelt](https://github.com/immersive-web/lighting-estimation) unter der Schirmherrschaft des W3C. Sie können alles über die vorgeschlagene API und eine erhebliche Menge über das Konzept der Lichtschätzung im [Erklärungsdokument](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md) lesen, das im GitHub-Repository der Spezifikation enthalten ist.

Im Wesentlichen sammelt die Lichtschätzung Informationen über die Lichtquellen und die Form und Orientierung der Objekte in der Szene sowie Informationen über die Materialien, aus denen sie bestehen, und liefert dann Daten, die Sie verwenden können, um virtuelle Lichtquellen zu erstellen, die die Beleuchtung der realen Welt annähernd nachbilden.

Die Details, wie die Lichtschätzung funktioniert, insbesondere im Kontext der vorgeschlagenen API, sind momentan nicht der Schwerpunkt. Sobald die API stabilisiert ist, werden wir diese Dokumentation mit den Details aktualisieren.

## Sicherheits- und Datenschutzbedenken

Es gibt eine Reihe von potenziellen Sicherheitsproblemen, die mit der Sammlung all dieser Daten zur Erzeugung und Anwendung von Beleuchtung auf Ihre virtuellen Objekte mit Hilfe von realen Daten verbunden sind.

Natürlich machen viele AR-Anwendungen ziemlich klar, wo sich der Benutzer befindet. Wenn der Benutzer eine App namens _Tour durch den Louvre_ betreibt, besteht eine sehr gute Chance, dass sich der Benutzer im [Musée du Louvre](https://www.louvre.fr/en) in Paris, Frankreich, befindet. Aber Browser sind verpflichtet, eine Reihe von Schritten zu unternehmen, um es schwierig zu machen, den Benutzer ohne seine Zustimmung physisch zu lokalisieren.

### Ambient Light Sensor API

Die Sammlung von Lichtdaten mit der [Ambient Light Sensor API](/de/docs/Web/API/AmbientLightSensor) birgt verschiedene potenzielle Datenschutzprobleme.

- Lichtinformationen können dem Web Informationen über die Umgebung des Benutzers und seine Nutzungsmuster des Geräts preisgeben. Diese Informationen können verwendet werden, um die Benutzerprofilierung und Verhaltensanalysedaten zu verbessern.
- Wenn zwei oder mehr Geräte auf Inhalte zugreifen, die dasselbe Drittanbieter-Skript verwenden, kann dieses Skript verwendet werden, um Lichtinformationen und deren zeitliche Veränderungen zu korrelieren, um zu versuchen, eine räumliche Beziehung zwischen den Geräten zu bestimmen; dies könnte theoretisch darauf hinweisen, dass die Geräte sich im selben allgemeinen Bereich befinden, zum Beispiel.

### Wie Browser diese Probleme mildern

Um diese Risiken zu mindern, sind Browser durch die WebXR Lighting Estimation API-Spezifikation verpflichtet, Lichtinformationen zu liefern, die ein wenig von den tatsächlichen Werten abweichen. Es gibt viele Möglichkeiten, dies zu tun.

#### Präzision der Kugelflächenfunktionen

Browser können das Risiko des [Fingerabdrucks](/de/docs/Glossary/Fingerprinting) verringern, indem sie die Präzision der [Kugelflächenfunktionen](https://en.wikipedia.org/wiki/Spherical_harmonics) reduzieren. Bei der Echtzeitrenderung—wie sie bei jeder virtuellen oder erweiterten Realität-Anwendung der Fall ist—wird die [Beleuchtung mit Kugelflächenfunktionen](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting) verwendet, um den Prozess der Erzeugung hochrealistischer Schatten und Schattierungen zu vereinfachen und zu beschleunigen. Indem die Genauigkeit dieser Funktionen verändert wird, macht der Browser die Daten weniger konsistent und, was noch wichtiger ist, macht die von zwei Computern erzeugten Daten unterschiedlich, selbst im selben Setting.

#### Entkopplung der Ausrichtung von der Beleuchtung

In einer AR-Anwendung, die Geolokalisierung verwendet, um Ausrichtungs- und möglicherweise Positionsinformationen zu bestimmen, ist es eine weitere Möglichkeit für Browser, Benutzer vor Fingerabdrucksangriffen zu schützen, indem vermieden wird, dass diese Informationen direkt mit dem Zustand der Beleuchtung korrelieren. Durch die Sicherstellung, dass die Kompassrichtung und die Lichtorientierung nicht auf jedem Gerät identisch sind, das sich in der Nähe oder behauptet in der Nähe des Standorts des Benutzers zu befinden, wird die Fähigkeit, Benutzer basierend auf dem Zustand der Beleuchtung um sie herum zu finden, entfernt.

Wenn der Browser Details über eine sehr helle, gerichtete Lichtquelle bereitstellt, repräsentiert diese Quelle wahrscheinlich die Sonne. Die Richtung dieser hellen Lichtquelle in Kombination mit der Tageszeit kann verwendet werden, um den geografischen Standort des Benutzers zu bestimmen, ohne die Geolocation API zu nutzen. Indem sichergestellt wird, dass die Koordinaten der AR-Szene nicht mit den Kompasskoordinaten übereinstimmen und durch die Reduzierung der Präzision des Sonnenlichtwinkels, kann der Standort nicht mehr genau mit dieser Technik geschätzt werden.

#### Zeitliche und räumliche Filterung

Betrachten Sie einen Angriff, bei dem ein automatisches Beleuchtungssystem in einem Gebäude verwendet wird, um die Lichter schnell in einem bekannten Muster ein- und auszuschalten. Ohne geeignete Vorsichtsmaßnahmen könnten die Beleuchtungsschätzungsdaten verwendet werden, um dieses Muster zu erkennen und zu bestimmen, dass sich ein Benutzer an einem bestimmten Ort befindet. Dies könnte aus der Ferne geschehen oder von einem Angreifer durchgeführt werden, der sich im selben Raum befindet, aber feststellen möchte, ob die andere Person ebenfalls im selben Raum ist.

Ein weiteres Szenario, in dem die Beleuchtungsschätzung verwendet werden kann, um Informationen über den Benutzer ohne Erlaubnis zu erhalten: Wenn der Lichtsensor nah genug am Display des Benutzers ist, um durch das Display verursachte Beleuchtungsänderungen zu erkennen, könnte ein Algorithmus verwendet werden, um festzustellen, ob der Benutzer ein bestimmtes Video ansieht—oder sogar potenziell zu identifizieren, welches von mehreren Videos der Benutzer ansieht.

Die Lighting Estimation API-Spezifikation verlangt von allen [Benutzeragenten](/de/docs/Glossary/user_agent), zeitliche und räumliche Filterung durchzuführen, um die Daten in einer Weise zu verfälschen, die ihren Nutzen für das Auffinden des Benutzers oder das Durchführen von [Seitenkanalangriffen](https://en.wikipedia.org/wiki/Side-channel_attack) verringert.

## Siehe auch

- [WebXR Lighting Estimation API Erklärer](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md)
- [WebXR Lighting Estimation API Level 1 Spezifikation](https://github.com/immersive-web/lighting-estimation)
- [Verwendung von Shadern zur Farbanwendung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)
