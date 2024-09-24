---
title: Beleuchtung einer WebXR-Umgebung
slug: Web/API/WebXR_Device_API/Lighting
l10n:
  sourceCommit: 80d4cfb4515b339111e175dbeb8d2b91fd3ee1a0
---

{{DefaultAPISidebar("WebXR Device API")}}

Da die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) auf andere Technologien angewiesen ist, nämlich [WebGL](/de/docs/Web/API/WebGL_API) und darauf basierende Frameworks, um alle Render-, Textur- und Beleuchtungsvorgänge einer Szene durchzuführen, gelten die gleichen allgemeinen Beleuchtungskonzepte für WebXR-Umgebungen oder -Szenen wie bei jeder anderen durch WebGL generierten Anzeige.

Es gibt jedoch Probleme und Details, die beim Erstellen Ihres Beleuchtungscodes zu beachten sind, insbesondere für Anwendungen der erweiterten Realität (AR). Dieser Leitfaden behandelt diese Themen. Und obwohl dieser Artikel kurze Erinnerungen daran gibt, wie Beleuchtung im Allgemeinen funktioniert, ist er keineswegs ein Tutorial zur Beleuchtung oder ein Leitfaden dafür, wie man eine korrekt beleuchtete 3D-Szene erstellt.

## Rückblick: Simulation von Beleuchtung in 3D

Auch wenn dieser Artikel kein umfassender Leitfaden zur Beleuchtung einer 3D-Szene ist, ist es nützlich, eine kurze Erinnerung daran zu geben, wie Beleuchtung im Allgemeinen funktioniert. Grundsätzlich umfasst die Simulation der Beleuchtung in einer virtuellen Szene die Berechnung der Lichtmenge von jeder Lichtquelle, die nach der Interaktion mit und der Reflexion von jedem Objekt in der Szene beim Auge empfangen wird.

### Reflexion von Licht

**Abbildung: Ein Diagramm, das zeigt, wie der Reflexionswinkel dem Einfallswinkel entspricht.**
![Ein Diagramm, das zeigt, wie der Reflexionswinkel dem Einfallswinkel entspricht.](law-of-reflection.svg)

Jedes Objekt, das wir sehen, sehen wir, weil das Objekt entweder Licht emittiert oder reflektiert (oder beides). Der einfallende Lichtstrahl – der **Einfallsstrahl** – trifft in einem Winkel ein, der als **Einfallswinkel** bekannt ist. Der Einfallswinkel, Θᵢ, ist der Winkel zwischen dem Einfallsstrahl und dem [Normalenvektor](https://en.wikipedia.org/wiki/Normal_vector) der Oberfläche.

Bei rauen Oberflächen wird Licht gleichmäßig in alle Richtungen reflektiert. Glassige, spiegelähnliche Oberflächen reflektieren jedoch den größten Teil des Lichts in eine Richtung, deren **Reflexionswinkel**, Θᵣ, dem Einfallswinkel entspricht, jedoch auf der gegenüberliegenden Seite des Normalenvektors liegt. Der **reflektierte Strahl** verlässt dann die Fläche in diesem Winkel vom Normalen ab. Dies ist das **[Reflexionsgesetz](https://en.wikipedia.org/wiki/Law_of_reflection)**. Es bildet die Grundlage für vieles, was bei der Schattierung einer Szene eine Rolle spielt, und kommt ins Spiel, wie sich verschiedene Lichtquellen verhalten.

Die Farbe des reflektierten Lichtstrahls kann natürlich in Intensität und/oder Farbton verändert werden, da das Licht mit der Oberfläche interagiert, aber der Winkel bleibt immer gleich.

### Komponenten einer Lichtquelle

Eine Lichtquelle hat drei Hauptkomponenten; jede Komponente ist im Wesentlichen eine Art von Licht.

Es gibt drei Arten von Licht, die die Farbe und Helligkeit von Objekten und ihren Pixeln beeinflussen können, wie sie auf dem Bildschirm oder der Brille des Betrachters angezeigt werden.

#### Umgebungslicht

**Umgebungslicht** ist Licht, das nicht aus einer definierten Quelle stammt, sondern einfach in der gesamten Szene vorhanden ist. Dieses Licht erreicht jede Oberfläche in der Szene mit der gleichen Intensität aus jeder Richtung und wird dann in alle Richtungen gleichmäßig reflektiert. Infolgedessen ist der Effekt, der durch Umgebungslicht angewendet wird, universell homogen über die gesamte Szene.

**Abbildung: Eine Kugel mit nur Umgebungslicht. Beachten Sie das völlige Fehlen jeglicher Schattierungen, die die Tiefe der Kugel anzeigen.**
![Eine Kugel, die nur Umgebungslicht hat. Beachten Sie das völlige Fehlen jeglicher Schattierungen, die die Tiefe der Kugel anzeigen.](sphere-ambient-light-only.jpg)

Der Effekt von Umgebungslicht wird berechnet, indem die Intensität der Lichtquelle mit der Reflektion der Oberfläche an der Position des Pixels multipliziert wird. Die Farbe und Intensität jedes Pixels in der Szene wird genau auf die gleiche Weise beeinflusst, unabhängig davon, wo es sich in der Szene befindet oder in welche Richtung es zeigt. Umgebungslicht ist häufig vorhanden, um zu verhindern, dass schattierte Bereiche zu dunkel werden, obwohl es die gesamte Szene beeinflusst; dennoch sollte die Menge an Umgebungslicht in einer Szene sehr gering sein.

Da das Springen und Streuen von Licht in Echtzeit teuer zu berechnen sein kann, insbesondere wenn mehrere Lichtquellen beteiligt sind, ist es üblich, Umgebungslicht zu verwenden, um das gestreute Licht, das durch alle anderen Lichtquellen in der Szene verursacht wird, zu simulieren, anstatt tatsächlich den wahren Effekt der Lichtstreuung zu berechnen. Es muss jedoch darauf geachtet werden, dass versucht wird, das Umgebungslicht an das anzupassen, was wirklich der Effekt der Beleuchtung der Szene wäre, wenn dies getan wird.

Umgebungslicht kann auch verwendet werden, um einem Raum einen Farbton zu verleihen; zum Beispiel kann in einem Spiel, in dem der Spieler ein spezielles Paar gelb getönter Brillen hat, ein gelbes Umgebungslicht hinzugefügt werden.

#### Diffuses Licht

**Diffuses Licht** ist Licht, das gleichmäßig und gerichtet von oder von einer Oberfläche reflektiert wird. Dies ist der Hauptanteil des Lichts, den wir normalerweise sehen. Diffuses Licht stammt aus einer bestimmten Position oder Richtung und wirft Schatten. Aufgrund seiner Direktheit sind die Flächen eines Objekts, die einer diffusen Lichtquelle zugewandt sind, heller als die anderen Flächen.

**Abbildung: Der fünftgrößte Mond des Saturn, Tethys, in Sonnenlicht gebadet, das von links unten kommt.**
![Der fünftgrößte Mond des Saturn, Tethys, wird hauptsächlich von der Sonne beleuchtet, mit etwas Licht, das von Saturn reflektiert wird. Dies ist diffuse Beleuchtung.](tethys.jpg)

Da die Intensität des diffusen Lichts von dem [Einfallswinkel](https://en.wikipedia.org/wiki/Angle_of_incidence) abhängt (dem Winkel zwischen dem Vektor, der die Richtung darstellt, aus der das Licht die Oberfläche erreicht, und dem Normalenvektor der Oberfläche oder dem Vektor senkrecht zur Oberfläche), variiert die Intensität oder Helligkeit des von einem Objekt reflektierten Lichts je nach Ausrichtung der Oberfläche relativ zur Lichtquelle.

#### Spiegelndes Licht

**Spiegelndes Licht** ist das Licht, das die Glanzlichter auf reflektierenden Objekten wie Edelsteinen, Augen, glänzenden Tassen und Tellern bildet. Spiegelnde Lichter erscheinen in der Regel als helle Flecken oder Quadrate auf einer Oberfläche an der Stelle, an der eine Lichtquelle die Oberfläche am direktesten trifft.

**Abbildung: Ein von der NASA-Raumsonde Cassini aufgenommenes Foto, das die spiegelnde Reflexion von Licht von einem See aus flüssigem Methan auf der Oberfläche des Saturnmonds Titan zeigt.**
![Ein von der NASA-Raumsonde Cassini aufgenommenes Foto, das die spiegelnde Reflexion von Licht von einem See aus flüssigem Methan auf der Oberfläche des Saturnmonds Titan zeigt.](specularlight-titan.jpg)

Jede Lichtquelle wird durch eine Kombination aus Umgebungslicht, diffusem und/oder spiegelndem Licht dargestellt. Das WebGL-Shader-Programm nimmt die Farbe, Direktheit, Helligkeit und andere Faktoren für jede Lichtquelle und berechnet die endgültige Farbe jedes Pixels.

### Typen von Lichtquellen

Es gibt vier grundlegende Arten von Lichtquellen. Jede davon beinhaltet eine Quelle virtuellen Lichts, deren Abstand vom gezeichneten Objekt und die Direktheit der Lichtstrahlen dazu führen, dass die Lichtquelle spezifische Eigenschaften annimmt. Für die meisten realen Lichtquellen kann eine dieser Lichtquellentypen oder eine Kombination dieser Typen simuliert werden.

#### Umgebungslichtquellen

Eine **Umgebungslichtquelle** ist eine Lichtquelle, die das Niveau und die Farbe des Umgebungslichts in einer Szene beschreibt. Während es in einer Szene mehrere davon geben kann, können Sie wahrscheinlich die Leistung leicht verbessern, indem Sie sie selbst in eine kombinieren, da jede ohnehin jeden Pixel gleichmäßig beeinflussen wird.

Umgebungslichtquellen entsprechen in der Regel keinem Objekt innerhalb der Szene und haben auch keine realen Entsprechungen.

#### Direktionale Lichtquellen

Eine **direktionale Lichtquelle** ist eine Lichtquelle, die aus einer bestimmten Richtung kommt, aber nicht aus einer spezifischen Quelle, sodass ihre emittierten Lichtstrahlen parallel zueinander sind. Darüber hinaus ändert sich die Intensität des Lichts nicht über die Distanz. Dies bedeutet, dass die von Richtungslampen geworfenen Schatten sehr scharf sind, mit einem im Wesentlichen sofortigen Übergang zwischen beleuchtet und beschattet.

**Abbildung: Erde und Mond, beide vom Sonnenlicht halb erleuchtet.**
![Ein von der Raumsonde Galileo aus etwa 6,3 Millionen Kilometern Entfernung aufgenommenes Foto, bei dem Erde und Mond beide vom Sonnenlicht halb erleuchtet werden.](earthandmoon.jpg)

Das häufigste Beispiel für eine direkte Lichtquelle ist die Sonne. Während die Sonne in Wirklichkeit ein einzelnes (großes) Objekt ist, ist sie sehr weit entfernt, sodass die von ihr kommenden Lichtstrahlen im Wesentlichen parallel sind. Während Sonnenlicht tatsächlich in seiner Intensität mit der Entfernung abnimmt, ist die Änderungsrate sehr gering und wird nur über große Entfernungen wahrgenommen. Daher spielt die Änderungsrate der Sonnenlichtintensität normalerweise keine Rolle beim Rendern einer 3D-Szene.

#### Punktlichtquellen

Eine **Punktlichtquelle** ist eine Lichtquelle an einem bestimmten Ort, die gleichmäßig in alle Richtungen strahlt. Glühbirnen, Kerzen und dergleichen sind Beispiele für Punktlichtquellen. Je näher ein Objekt an der Punktlichtquelle ist, desto heller ist das Licht, das es auf dieses Objekt wirft. Die Rate, mit der die Helligkeit eines Punktlichts abnimmt, wird als **Dämpfung** bezeichnet und ist eine konfigurierbare Eigenschaft der Lichtquelle in WebGL und anderen Beleuchtungssystemen.

Zwischen dem Reflexionsgesetz und der Tatsache, dass die Helligkeit der Lichtstrahlen mit der Entfernung abnimmt, ist das von einer Punktquelle emittierte und reflektierte Licht am hellsten an dem nächstgelegenen Punkt zur Lichtquelle und dimmer, je weiter es entfernt ist. Selbst wenn die Oberfläche flach ist, ist der der Lichtquelle am nächsten liegende Punkt das Zentrum, wobei die Strahlen immer länger werden, wenn sich der Winkel von der Normale ändert.

#### Scheinwerferlichtquellen

Eine **Scheinwerferlichtquelle** (oder **Spotlight**) ist eine Lichtquelle, die an einer bestimmten Position liegt und einen Lichtkonus in Richtung ihres Ausrichtungsvektors emittiert. Ein Verjüngungsratenparameter definiert, wie schnell die Helligkeit des Lichts an den Rändern des Lichtkonus abnimmt, und, wie bei Punktlichtern, steuert ein Dämpfungsparameter, wie das Licht über die Entfernung abklingt.

**Abbildung: Foto eines Scheinwerfers, der nachts auf eine Stuckwand scheint.**
![Foto eines Scheinwerfers, der nachts auf eine Stuckwand scheint.](spotlight-on-stucco.jpg)

Am Rand des Lichtkonus hat das Licht keinerlei Einfluss mehr auf die Oberfläche.

#### Rechenkosten der Beleuchtung

Um sichtbar zu sein, muss eine Szene irgendeine Art von Beleuchtung enthalten, sodass alle oder nahezu alle Szenen mindestens eine Lichtquelle und möglicherweise eine Vielzahl davon haben werden. Jede Lichtquelle erhöht erheblich die Menge der Berechnungen, die erforderlich sind, um die endgültige Farbe und Helligkeit jedes angezeigten Pixels zu bestimmen. Das Anwenden der Schattierung für jeden dieser Lichtquellentypen ist rechnerisch anspruchsvoller als der vorherige; das heißt, Umgebungslicht ist am wenigsten kostspielig, gefolgt von direkten Lichtquellen, Punktlichtern und schließlich Scheinwerfern.

Darüber hinaus wird die Beleuchtung umso rechenintensiver, je genauer sie gestaltet ist. Erhöhte Schattendetails, volumetrisches Licht (das heißt, Beleuchtung, die in der Luft sichtbar ist, wie Sonnenstrahlen oder die Strahlen von Scheinwerfern am Himmel) und andere Lichteffekte können Ihrer Szene Realismus und Schönheit verleihen, jedoch muss Vorsicht walten, um sicherzustellen, dass die Szene die GPU nicht überfordert.

### Berechnung der Farbe eines beleuchteten Pixels

Obwohl einige Grafikbibliotheken Unterstützung für Lichtquellenobjekte bieten und Beleuchtungseffekte automatisch für Sie berechnen und anwenden, tut WebGL das nicht. Zum Glück ist es nicht allzu schwer, Beleuchtung in Ihren eigenen Vertex- und Fragment-Shadern anzuwenden.

Für jedes Polygon in der Szene bestimmt das **Vertex-Shader**-Programm die Farben der Scheitelpunkte, und dann erzeugt der **Fragment-Shader** jedes Pixel im Polygon, indem es das entsprechende Texel aus der zugewiesenen Textur, jede Farbtonung oder Wirkung und andere visuelle Daten kombiniert. Zu diesem Zeitpunkt wird die Beleuchtung der Szene berücksichtigt und gegebenenfalls auf das Pixel angewendet, bevor das Pixel in den Frame-Buffer gespeichert wird.

Die Farbe jedes Pixels in der endgültigen, gerenderten Szene wird mithilfe einiger komplexer Mathematik berechnet, die Dinge wie einbezieht:

- Die Farbe des **Textelelements** (das Pixel innerhalb der auf das Objekt abgebildeten Textur; auch bekannt als **Texel**), das dem Bildschirmpixel entspricht, angesichts der Objektgeometrie, der Betrachterposition und -orientierung relativ zu jedem Polygon und so weiter.
- Die Betrachterposition und Entfernung.
- Das Oberflächenmaterial und seine Reflektionsfähigkeit.
- Die Konkavität oder Konvexität der Oberfläche an der Zielposition.
- Die Position, Farbe, Direktheit und Helligkeit jeder Lichtquelle in der Szene.
- Die Farbe und Helligkeit eines Umgebungslichts in der Szene; dies ist Licht, das gleichmäßig in der Szene angewendet wird, ohne Quell- und damit ohne Schatten oder Helligkeitsvariation.
- Die Auswirkung von Licht, das von anderen Oberflächen innerhalb der Szene reflektiert wird; die Farbe, Direktheit und Helligkeit reflektierten Lichts beeinflussen die Farbe der von ihm berührten Pixel.

Mehr darüber, wie Sie Beleuchtung in WebGL ausführen können, erfahren Sie im Artikel [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL).

## Beleuchtungsprobleme für Mixed-Reality-Inhalte

Zusätzlich zu den üblichen Problemen, mit denen Sie beim Beleuchtung einer Szene zu kämpfen haben, fügt der VR- oder AR-Anwendungsfall beim Schreiben Ihrer Shader zusätzliche Bereiche der Besorgnis hinzu. In diesem Abschnitt stellen wir einige grundlegende Beleuchtungsrichtlinien für gemischte Realität vor, die Sie beim Erstellen, Rendern und Beleuchten Ihrer Szene berücksichtigen sollten. Während einige von ihnen auch in jeder anderen 3D-Umgebung nützlich sind, sind die meisten spezifisch für virtuelle Realität und in manchen Fällen noch mehr für erweiterte Realität.

Da Ihre Szene die Umgebung darstellen soll, in der sich eine Person oder ihr Avatar befinden kann, sollten Sie versuchen, ein gewisses Maß an Konsistenz und Realismus bei der Positionierung und Darstellung Ihrer Lichtquellen zu erreichen. Offensichtlich gibt es Ausnahmen von dieser Richtlinie, beispielsweise wenn Ihre Szene ein übernatürliches oder fremdes Setting darstellt oder wenn Sie versuchen, einen verstörenden visuellen Effekt zu erzeugen.

### Realismus bei der Platzierung von Lichtquellen

Wenn möglich, sollten Sie versuchen, Ihre virtuellen Lichtquellen mit Objekten zu korrelieren, die tatsächlich existieren. Wenn Sie einen virtuellen Raum haben, der eine Deckenbeleuchtung benötigt, stellen Sie ein Modell einer Deckenlampe an der Position Ihrer Lichtquelle auf. Es gibt Ausnahmen, wie z.B. das Umgebungslicht, das eine Grundbeleuchtung für Ihre Umgebung hinzufügt, und die Sonne, die eine direkte Lichtquelle ist (das heißt, eine Lichtquelle, bei der jeder Lichtstrahl parallel ist, von irgendwo am Himmel kommt und irgendwo in Ihrer Szene endet).

Versuchen Sie, Lichtquellen an realistischen Orten für das Setting und die Stimmung, die Sie erzeugen möchten, zu platzieren. Eine Szene, die sich wie eine natürlich beleuchtete, realistische Umgebung anfühlen soll, hat keine Studioleuchten. Sie hat Sonnenlicht, möglicherweise Licht, das von Objekten oder Wasser innerhalb der Szene reflektiert wird, und so weiter, aber keine Lampen, die auf die Gesichter von Objekten oder Personen in der Szene gerichtet sind.

### Realismus bei Spielerinteraktionen mit Licht

Wenn sich Ihre Lichtquelle innerhalb der Szene befindet, sollten Sie wahrscheinlich sicherstellen, dass der Avatar des Betrachters die Lichtquelle nicht physisch überschneiden kann. Die Ergebnisse könnten seltsam sein.

Wenn der Avatar des Betrachters eine physische Form haben soll, sollte er ein Modell haben, selbst wenn der Betrachter es nie sehen kann, damit das Licht korrekt mit dem Avatar interagiert. Minimales bedeutet das, dass der Avatar einen geeigneten Schatten werfen sollte; jedoch, abhängig von Faktoren wie ob der Avatar gesehen werden kann und die Materialien, Texturierungen und andere Attribute seines Modells – insbesondere, seine Reflektionsfähigkeit – könnte der Avatar auch Licht reflektieren müssen, sowie möglicherweise die Färbung des von ihm reflektierten Lichts beeinflussen.

### Realismus in erweiterter Realität

Erweiterte Realität führt eine zusätzliche Ebene von Komplexität bei der Beleuchtung Ihrer Objekte ein, da Ihre virtuellen Objekte in einer physischen Welt existieren müssen, die ihre eigenen Lichtquellen hat. Daher sollten Sie versuchen, Ihre Beleuchtung so weit wie möglich an die realen Lichtquellen anzupassen. Dies geschieht mit einer Technik, die als [Beleuchtungsschätzung](#beleuchtungsschätzung) bekannt ist.

Umgekehrt sollten Sie vermeiden, virtuelle Objekte zu haben, die selbst Lichtquellen sind, es sei denn, Sie sind bereit, Code zu erstellen, der dieses Licht auf die reale Welt wirft. Licht auf reale Objekte zu werfen ist im Wesentlichen das Gegenteil davon, Schatten zu werfen. Es kann getan werden, ist jedoch nicht so weit verbreitet implementiert.

## Beleuchtungsschätzung

**Beleuchtungsschätzung** ist eine Technik, die von Plattformen der erweiterten Realität verwendet wird, um zu versuchen, die Beleuchtung der virtuellen Objekte in der Szene an die Beleuchtung der realen Welt um den Betrachter herum anzupassen. Dies umfasst die Sammlung von Daten, die von verschiedenen Sensoren stammen können (einschließlich des Beschleunigungsmessers und des Kompasses, wenn verfügbar), von Kameras und möglicherweise anderen. Weitere Daten werden mit der [Geolocation-API](/de/docs/Web/API/Geolocation_API) gesammelt, und dann werden all diese Daten durch Algorithmen und maschinelle Lernmaschinen geleitet, um die geschätzten Beleuchtungsinformationen zu generieren.

Derzeit bietet WebXR keine Unterstützung für Beleuchtungsschätzung. Eine [Spezifikation wird derzeit ausgearbeitet](https://github.com/immersive-web/lighting-estimation) unter der Schirmherrschaft des W3C. Sie können alles über die vorgeschlagene API erfahren und eine beträchtliche Menge über das Konzept der Beleuchtungsschätzung im [Erklärungsdokument](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md), das im GitHub-Repository der Spezifikation enthalten ist.

Im Wesentlichen sammelt die Beleuchtungsschätzung diese Informationen über die Lichtquellen und die Form und Orientierung der Objekte in der Szene sowie Informationen über die Materialien, aus denen sie bestehen, und liefert Daten zurück, die Sie verwenden können, um virtuelle Lichtquellenobjekte zu erstellen, die ungefähr die Beleuchtung der realen Welt widerspiegeln.

Die Einzelheiten darüber, wie Beleuchtungsschätzung funktioniert, insbesondere im Zusammenhang mit der vorgeschlagenen API, sind derzeit außerhalb des Geltungsbereichs. Sobald die API stabil ist, werden wir diese Dokumentation mit den Details aktualisieren.

## Sicherheits- und Datenschutzbedenken

Es gibt eine Reihe potenzieller Sicherheitsprobleme, die mit der Sammlung all dieser Daten verbunden sind, um Beleuchtung auf Ihre virtuellen Objekte mithilfe von echten Weltdaten anzuwenden.

Natürlich machen viele AR-Anwendungen ziemlich deutlich, wo sich der Benutzer befindet. Wenn der Benutzer eine App namens _Touring the Louvre_ ausführt, besteht eine sehr hohe Wahrscheinlichkeit, dass der Benutzer sich im [Musée du Louvre](https://www.louvre.fr/en) in Paris, Frankreich, befindet. Aber Browser sind verpflichtet, eine Reihe von Schritten zu unternehmen, um es schwer zu machen, den Benutzer ohne deren Zustimmung physisch zu lokalisieren.

### Ambient Light Sensor API

Die Sammlung von Lichtdaten mit der [Ambient Light Sensor API](/de/docs/Web/API/AmbientLightSensor) birgt verschiedene potenzielle Datenschutzprobleme.

- Lichtinformationen können dem Web Informationen über die Umgebung des Benutzers und die Nutzungsmuster des Geräts preisgeben. Solche Informationen können verwendet werden, um Benutzerprofilierungs- und Verhaltensanalysedaten zu verbessern.
- Wenn zwei oder mehr Geräte auf Inhalte zugreifen, die dasselbe Drittanbieterskript verwenden, kann dieses Skript verwendet werden, um Lichtinformationen und deren Änderungen über die Zeit zu korrelieren, um zu versuchen, eine räumliche Beziehung zwischen den Geräten zu bestimmen; dies könnte theoretisch darauf hinweisen, dass die Geräte sich in derselben allgemeinen Gegend befinden, beispielsweise.

### Wie Browser diese Probleme mildern

Um diese Risiken zu mildern, sind Browser gemäß der WebXR Lighting Estimation API-Spezifikation verpflichtet, Lichtinformationen zu melden, die etwas von den tatsächlichen Werten abweichen. Es gibt viele Möglichkeiten, wie dies getan werden könnte.

#### Präzision von Kugelharmonischen

Browser können das Risiko des [Fingerabdrucks](https://en.wikipedia.org/wiki/Fingerabdruck) mindern, indem sie die Präzision von [Kugelharmonischen](https://en.wikipedia.org/wiki/Spherical_harmonics) reduzieren. Bei der Durchführung von Echtzeit-Rendering – wie es bei jeder virtuellen oder erweiterten Realität der Fall ist – wird [Kugelharmonische Beleuchtung](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting) verwendet, um den Prozess der Erzeugung hochrealistischer Schatten und Schattierungen zu vereinfachen und zu beschleunigen. Durch das Ändern der Genauigkeit dieser Funktionen macht der Browser die Daten weniger konsistent und, was wichtig ist, die von zwei Computern generierten Daten unterscheiden sich, selbst im selben Setting.

#### Trennung der Orientierung von Beleuchtung

In einer AR-Anwendung, die Geolocation verwendet, um Orientierung und möglicherweise Positionsinformationen zu bestimmen, ist es eine weitere Möglichkeit, wie Browser Benutzer vor Fingerabdruckangriffen schützen können, indem sie vermeiden, dass diese Informationen direkt mit dem Zustand der Beleuchtung korrelieren. Indem sichergestellt wird, dass die Kompassrichtung und die Lichtdirektionalität nicht identisch auf jedem Gerät sind, das sich in der Nähe (oder behauptet, sich in der Nähe) des Standorts des Benutzers befindet, wird die Fähigkeit entfernt, Benutzer basierend auf dem Zustand der umgebenden Beleuchtung zu finden.

Wenn der Browser Details über eine sehr helle, gerichtete Lichtquelle liefert, stellt diese Quelle wahrscheinlich die Sonne dar. Die Direktheit dieser hellen Lichtquelle in Kombination mit der Tageszeit kann ohne die Beteiligung der Geolocation-API verwendet werden, um den geografischen Standort des Benutzers zu bestimmen. Indem sichergestellt wird, dass die Koordinaten der AR-Szene nicht mit den Kompasskoordinaten übereinstimmen, und indem die Präzision des Sonnenlichtwinkels reduziert wird, kann der Standort mit dieser Technik nicht mehr genau geschätzt werden.

#### Zeitliche und räumliche Filterung

Betrachten Sie einen Angriff, bei dem ein automatisches Beleuchtungssystem eines Gebäudes verwendet wird, um die Lichter schnell in einem bekannten Muster ein- und auszuschalten. Ohne geeignete Vorkehrungen könnten die Beleuchtungsschätzungsdaten verwendet werden, um dieses Muster zu erkennen und damit zu bestimmen, dass ein Benutzer sich an einem bestimmten Standort befindet. Dies könnte aus der Ferne durchgeführt werden, oder es könnte von einem Angreifer, der sich im selben Raum befindet, durchgeführt werden, der bestimmen möchte, ob sich die andere Person ebenfalls im selben Raum befindet.

Ein weiteres Szenario, in dem Beleuchtungsschätzung verwendet werden kann, um Informationen über den Benutzer ohne Erlaubnis zu erhalten: Wenn sich der Lichtsensor nahe genug am Display des Benutzers befindet, um Beleuchtungsänderungen zu erkennen, die durch den Inhalt des Displays verursacht werden, könnte ein Algorithmus verwendet werden, um zu bestimmen, ob der Benutzer ein bestimmtes Video ansieht – oder sogar potenziell zu identifizieren, welches von mehreren Videos der Benutzer sieht.

Die Beleuchtungsschätzungs-API-Spezifikation schreibt vor, dass alle {{Glossary("user agent", "User-Agents")}} eine zeitliche und räumliche Filterung durchführen, um die Daten in einer Weise zu verfälschen, die ihre Nützlichkeit zum Auffinden des Benutzers oder zur Durchführung von [Seitenkanalangriffen](https://en.wikipedia.org/wiki/Side-channel_attack) reduziert.

## Siehe auch

- [WebXR Lighting Estimation API explainer](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md)
- [WebXR Lighting Estimation API Level 1 Spezifikation](https://github.com/immersive-web/lighting-estimation)
- [Anwenden von Farben in WebGL mit Shadern](/de/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)
