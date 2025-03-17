---
title: Beleuchtung einer WebXR-Umgebung
slug: Web/API/WebXR_Device_API/Lighting
l10n:
  sourceCommit: 80d4cfb4515b339111e175dbeb8d2b91fd3ee1a0
---

{{DefaultAPISidebar("WebXR Device API")}}

Da die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) auf andere Technologien - nämlich [WebGL](/de/docs/Web/API/WebGL_API) und darauf basierende Frameworks - angewiesen ist, um die gesamte Szenendarstellung, Texturierung und Beleuchtung durchzuführen, gelten für WebXR-Umgebungen oder -Szenen die gleichen allgemeinen Beleuchtungskonzepte wie für jede andere durch WebGL generierte Anzeige.

Es gibt jedoch Aspekte und Details, die bei der Erstellung Ihres Beleuchtungscodes beachtet werden müssen, insbesondere für Anwendungen der erweiterten Realität (AR). Dieser Leitfaden behandelt diese Themen. Und obwohl dieser Artikel kurze Erinnerungen daran bietet, wie Beleuchtung im Allgemeinen funktioniert, handelt es sich keineswegs um ein Tutorial zur Beleuchtung oder um einen Leitfaden zur Erstellung einer korrekt ausgeleuchteten 3D-Szene.

## Rückblick: Lichtsimulation in 3D

Auch wenn dieser Artikel kein umfassender Leitfaden zur Beleuchtung einer 3D-Szene ist, ist es nützlich, kurz daran zu erinnern, wie Beleuchtung im Allgemeinen funktioniert. Grundsätzlich umfasst die Simulation von Beleuchtung in einer virtuellen Szene die Berechnung, wie viel Licht von jeder Lichtquelle, nach der Interaktion mit und der Reflektion von jedem Objekt in der Szene, auf das Auge trifft.

### Reflektion des Lichts

**Abbildung: Ein Diagramm, das zeigt, wie der Reflektionswinkel dem Einfallswinkel entspricht.**
![Ein Diagramm, das zeigt, wie der Reflektionswinkel dem Einfallswinkel entspricht.](law-of-reflection.svg)

Jedes Objekt, das wir sehen, sehen wir, weil das Objekt entweder Licht emittiert oder reflektiert (oder beides). Der einfallende Lichtstrahl - der **Einfallsstrahl** - trifft in einem Winkel ein, der als **Einfallswinkel** bekannt ist. Der Einfallswinkel, Θᵢ, ist der Winkel zwischen dem Einfallsstrahl und dem [Normalenvektor](https://en.wikipedia.org/wiki/Normal_vector) der Oberfläche.

Für raue Oberflächen wird Licht gleichmäßig in alle Richtungen reflektiert. Glatte, spiegelartige Oberflächen hingegen reflektieren das meiste Licht in eine Richtung, deren **Reflektionswinkel**, Θᵣ, gleich dem Einfallswinkel ist, jedoch auf der gegenüberliegenden Seite des Normalenvektors. Der **reflektierte Strahl** verlässt dann die Oberfläche in diesem Winkel weg vom Normalen. Dies ist das **[Reflexionsgesetz](https://en.wikipedia.org/wiki/Law_of_reflection)**. Diese Grundlage ist für vieles, was beim Shading einer Szene beteiligt ist, von Bedeutung und kommt ins Spiel, wie sich verschiedene Arten von Lichtquellen verhalten.

Der Farbton des reflektierten Lichtstrahls kann natürlich in Intensität und/oder Farbton verändert werden, aufgrund der Lichtinteraktion mit der Oberfläche, aber der Winkel bleibt immer gleich.

### Komponenten einer Lichtquelle

Eine Lichtquelle besteht aus drei Hauptkomponenten; jede Komponente ist im Wesentlichen eine Art von Licht.

Es gibt drei Arten von Licht, die die Farbe und Helligkeit der Objekte und ihrer Pixel beeinflussen können, wie sie auf dem Bildschirm des Betrachters oder des Headsets angezeigt werden.

#### Umgebungslicht

**Umgebungslicht** ist Licht, das nicht von einer definierten Quelle kommt, sondern im gesamten Szenario vorhanden ist. Dieses Licht erreicht jede Oberfläche in der Szene mit der gleichen Intensität aus jeder Richtung und wird dann gleichmäßig in alle Richtungen reflektiert. Daraus ergibt sich, dass der Effekt, der durch Umgebungslicht angewendet wird, in der gesamten Szene gleichermaßen wirkt.

**Abbildung: Eine Kugel, die nur Umgebungslicht hat. Beachten Sie das völlige Fehlen von Schattierungen, die die Tiefe der Kugel anzeigen.**
![Eine Kugel, die nur Umgebungsbeleuchtung hat. Beachten Sie das völlige Fehlen von Schattierungen, die die Tiefe der Kugel anzeigen.](sphere-ambient-light-only.jpg)

Der Effekt des Umgebungslichts wird berechnet, indem die Intensität der Lichtquelle mit der Reflektanz der Oberfläche an der Position des Pixels multipliziert wird. Die Farbe und Intensität jedes Pixels in der Szene wird auf genau die gleiche Weise beeinflusst, unabhängig davon, wo es sich in der Szene befindet oder in welche Richtung es zeigt. Umgebungslicht ist häufig vorhanden, um zu verhindern, dass Schattenbereiche zu dunkel werden, obwohl es die gesamte Szene beeinträchtigt; allerdings sollte die Menge an Umgebungslicht in einer Szene sehr gering sein.

Da das Abprallen und Streuen von Licht in Echtzeit teuer zu berechnen sein kann, insbesondere wenn mehrere Lichtquellen beteiligt sind, ist es üblich, Umgebungsbeleuchtung zu verwenden, um das gestreute Licht zu simulieren, das von allen anderen Lichtquellen in der Szene verursacht wird, anstatt tatsächlich die wahre Wirkung des Lichtstreus zu berechnen. Dabei muss jedoch darauf geachtet werden, das Umgebungslicht so zu gestalten, dass es dem tatsächlichen Effekt der Beleuchtung der Szene entspricht.

Umgebungslicht kann auch verwendet werden, um eine Farbtönung auf eine Szene anzuwenden; zum Beispiel in einem Spiel, in dem der Spieler eine spezielle gelb getönte Brille trägt, kann man ein gelbes Umgebungslicht hinzufügen.

#### Diffuses Licht

**Diffuses Licht** ist Licht, das gleichmäßig und richtungsabhängig von einer Oberfläche emittiert oder reflektiert wird. Dies ist der Großteil des Lichts, das wir normalerweise sehen. Diffuses Licht kommt aus einer bestimmten Position oder Richtung und wirft Schatten. Aufgrund seiner Richtungseigenschaften sind die Seiten eines Objekts, die einer diffusen Lichtquelle zugewandt sind, heller als die anderen Seiten.

**Abbildung: Der fünftgrößte Saturnmond, Tethys, in Sonnenlicht getaucht, von links unten kommend.**
![Der fünftgrößte Saturnmond, Tethys, wird hauptsächlich von der Sonne beleuchtet, mit etwas von Saturn reflektiertem Licht. Dies ist diffuse Beleuchtung.](tethys.jpg)

Da die Intensität des diffus reflektierten Lichts vom [Einfallswinkel](https://en.wikipedia.org/wiki/Angle_of_incidence) (dem Winkel zwischen dem Vektor, der die Richtung, aus der das Licht auf die Oberfläche trifft, darstellt, und dem Normalenvektor der Oberfläche) abhängt, variiert die Intensität oder Helligkeit des Lichts, das von einem Objekt reflektiert wird, je nach Ausrichtung der Oberfläche in Bezug auf die Lichtquelle.

#### Spekulares Licht

**Spekulares Licht** ist das Licht, das die Glanzlichter auf reflektierenden Objekten ausmacht, wie Edelsteine, Augen, glänzende Tassen und Teller und dergleichen. Spekulare Lichter erscheinen tendenziell als helle Punkte oder Quadrate auf einer Oberfläche an der Stelle, an der eine Lichtquelle die Oberfläche am direktesten trifft.

**Abbildung: Ein von NASAs Cassini-Raumsonde aufgenommenes Foto, das die spekulare Reflektion von Licht von einem See aus flüssigem Methan auf der Oberfläche des Saturnmondes Titan zeigt.**
![Ein von NASAs Cassini-Raumsonde aufgenommenes Foto, das die spekulare Reflektion von Licht von einem See aus flüssigem Methan auf der Oberfläche des Saturnmondes Titan zeigt.](specularlight-titan.jpg)

Jede Lichtquelle wird durch eine Kombination aus Umgebungs-, diffusen und/oder spekularen Licht dargestellt. Das WebGL-Shader-Programm nimmt die Farbe, Richtungsabhängigkeit, Helligkeit und andere Faktoren jeder Lichtquelle auf und berechnet die endgültige Farbe jedes Pixels.

### Arten von Lichtquellen

Es gibt vier grundlegende Typen von Lichtquellen. Jede von ihnen umfasst eine Quelle virtuellen Lichts, deren Entfernung vom gezeichneten Objekt und die Richtungsabhängigkeit der Lichtwellen dazu führen, dass die Lichtquelle bestimmte Eigenschaften annimmt. Die meisten realen Lichtquellen können mithilfe einer oder mehrerer dieser Lichtquellentypen simuliert werden.

#### Umgebungslichtquellen

Eine **Umgebungslichtquelle** ist eine Lichtquelle, die das Niveau und die Farbe des Umgebungslichts in einer Szene beschreibt. Während es mehr als eine davon in einer Szene geben kann, können Sie die Leistung möglicherweise geringfügig verbessern, indem Sie diese selbst zu einer zusammenfassen, da jede ohnehin immer jeden Pixel gleichmäßig beeinflusst.

Umgebungslichtquellen entsprechen im Allgemeinen keinem Objekt innerhalb der Szene und haben auch keine realen Entsprechungen.

#### Direktionale Lichtquellen

Eine **direktionale Lichtquelle** ist eine Lichtquelle, die aus einer bestimmten Richtung kommt, jedoch nicht von einer bestimmten Quelle, sodass ihre ausgestrahlten Lichtstrahlen parallel zueinander sind. Außerdem ändert sich die Intensität des Lichts nicht mit der Entfernung. Das bedeutet, dass von gerichteten Lichtern geworfene Schatten sehr scharf sind, mit einem praktisch sofortigen Übergang zwischen beleuchteten und schattierten Bereichen.

**Abbildung: Erde und Mond beide halb vom Sonnenlicht beleuchtet.**
![Ein Foto, aufgenommen von der Raumsonde Galileo aus etwa 6,3 Millionen Kilometern Entfernung, mit Erde und Mond beide halb von der Sonne beleuchtet.](earthandmoon.jpg)

Das häufigste Beispiel für eine gerichtete Lichtquelle ist die Sonne. Obwohl die Sonne in Wirklichkeit ein einzelnes (großes) Objekt ist, ist sie sehr weit entfernt, so dass die Lichtstrahlen, die von ihr ausgehen, im Wesentlichen parallel sind. Während Sonnenlicht tatsächlich mit der Entfernung in der Intensität abnimmt, ist die Änderungsrate sehr gering und wird nur über große Entfernungen bemerkt, daher spielt die Rate der Intensitätsänderung des Sonnenlichts in der Regel keine Rolle für die Darstellung einer 3D-Szene.

#### Punktlichtquellen

Eine **Punktlichtquelle** ist eine Lichtquelle, die sich an einem bestimmten Ort befindet und gleichmäßig in jede Richtung abstrahlt. Glühbirnen, Kerzen und dergleichen sind Beispiele für Punktlichtquellen. Je näher ein Objekt an einer Punktlichtquelle ist, desto heller wird das Licht, das es auf dieses Objekt wirft. Die Rate, mit der die Helligkeit eines Punktlichtes abnimmt, wird als **Abschwächung** bezeichnet und ist ein konfigurierbares Merkmal der Lichtquelle in WebGL und anderen Beleuchtungssystemen.

Zwischen dem Reflexionsgesetz und der Tatsache, dass die Helligkeit der Lichtstrahlen mit der Entfernung abnimmt, neigt das von einer Punktquelle emittierte und reflektierte Licht dazu, am hellsten am nächsten Punkt zur Lichtquelle und dunkler zu sein, je weiter es entfernt ist. Selbst wenn die Oberfläche flach ist, ist der nächste Punkt zur Lichtquelle das Zentrum, wobei die Strahlen mit zunehmendem Winkel vom Normalen immer länger werden.

#### Scheinwerferlichtquellen

Eine **Scheinwerferlichtquelle** (oder **Spotlight**) ist eine Lichtquelle, die sich an einem bestimmten Ort befindet und einen Lichtkegel in Richtung ihres Orientierungsektors abgibt. Ein Verjüngungsratenparameter definiert, wie schnell die Helligkeit des Lichts an den Rändern des Lichtkegels abnimmt, und, wie bei Punktlichtern, steuert ein Abschwächungsparameter, wie das Licht mit der Entfernung nachlässt.

**Abbildung: Foto eines Scheinwerfers, der nachts auf eine Stuckwand leuchtet.**
![Foto eines Scheinwerfers, der nachts auf eine Stuckwand leuchtet.](spotlight-on-stucco.jpg)

Am Rand des Lichtkegels hört das Licht auf, die Oberfläche überhaupt zu beeinflussen.

#### Rechenkosten der Beleuchtung

Um sichtbar zu sein, muss eine Szene irgendeine Art von Beleuchtung enthalten, sodass alle oder fast alle Szenen mindestens eine Lichtquelle und möglicherweise viele von ihnen haben werden. Jede Lichtquelle erhöht erheblich die Menge der Berechnungen, die erforderlich sind, um die endgültige Farbe und Helligkeit jedes angezeigten Pixels zu bestimmen. Die Berechnung des Schattenwurfs für jeden dieser Lichtquellentypen ist rechenintensiver als die vorhergehende; daher ist Umgebungslicht am wenigsten aufwendig anzuwenden, gefolgt von gerichteten Lichtquellen, Punktlichtern und schließlich Scheinwerfern.

Darüber hinaus gilt: Je genauer die Beleuchtung gestaltet ist, desto rechenintensiver wird sie. Erhöhte Schattendetails, volumetrisches Licht (d.h. Beleuchtung, die in der Luft gesehen werden kann, wie Sonnenstrahlen oder die Strahlen von Scheinwerfern am Himmel) und andere Beleuchtungseffekte können Ihrer Szene Realismus und Schönheit verleihen, es muss jedoch darauf geachtet werden, dass die Szene die GPU nicht überlastet.

### Berechnung der Farbe eines beleuchteten Pixels

Obwohl einige Grafikbibliotheken Unterstützung für Lichtquellenobjekte bieten und automatisch Beleuchtungseffekte für Sie berechnen und anwenden, tut WebGL dies nicht. Zum Glück ist es nicht allzu schwierig, Beleuchtung in Ihren eigenen Vertex- und Fragment-Shadern anzuwenden.

Für jedes Polygon in der Szene bestimmt das **Vertex-Shader-Programm** die Farben der Scheitelpunkte, und dann generiert der **Fragment-Shader** jedes Pixel im Polygon, indem er das entsprechende Texel aus der zugewiesenen Textur, jegliche Farbtönung oder -effekte und andere visuelle Daten kombiniert. Zu diesem Zeitpunkt wird die Beleuchtung der Szene in Betracht gezogen und gegebenenfalls auf das Pixel angewendet, bevor das Pixel in den Framebuffer gespeichert wird.

Die Farbe jedes Pixels in der endgültigen, gerenderten Szene wird unter Verwendung komplexer Mathematik berechnet, die Faktoren wie:

- Die Farbe des **Textelements** (das Pixel innerhalb der Textur, das auf das Objekt abgebildet wurde; auch bekannt als **Texel**), das dem Bildschirmpixel entspricht, gegeben die Objektgeometrie, die Position und Ausrichtung des Betrachters relativ zu jedem Polygon usw.
- Die Position und Entfernung des Betrachters.
- Das Oberflächenmaterial und die Reflektivität.
- Die Konkavität oder Konvexität der Oberfläche an der Zielposition.
- Die Position, Farbe, Richtungsabhängigkeit und Helligkeit jeder Lichtquelle in der Szene.
- Die Farbe und Helligkeit jeglichen Umgebungslichts in der Szene; das ist Licht, das gleichmäßig in der gesamten Szene angewendet wird, ohne Quelle und daher ohne Schatten oder Helligkeitsvariazen.
- Die Wirkung von Licht, das von anderen Oberflächen innerhalb der Szene reflektiert wird; die Farbe, Richtungsabhängigkeit und Helligkeit von reflektiertem Licht wirken sich auf die Farbe der vom Licht berührten Pixel aus.

Sie können mehr darüber erfahren, wie Beleuchtung in WebGL durchgeführt wird, im Artikel [Lighting in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL).

## Beleuchtungsprobleme für Mixed Reality-Inhalte

Zusätzlich zu den üblichen Problemen, die beim Beleuchten einer Szene zu berücksichtigen sind, fügt die VR- oder AR-Anwendung zusätzliche Aspekte hinzu, die beim Programmieren Ihrer Shader zu beachten sind. In diesem Abschnitt geben wir einige grundlegende Leitlinien zur Beleuchtung von Mixed Reality, die Sie beim Konstruieren, Rendern und Beleuchten Ihrer Szene berücksichtigen sollten. Während einige dieser Punkte auch in anderen 3D-Umgebungen nützlich sind, sind die meisten spezifisch für virtuelle Realität und in einigen Fällen sogar noch mehr für erweiterte Realität.

Da Ihre Szene eine Umgebung darstellen soll, in der eine Person oder ihr Avatar existieren kann, sollten Sie versuchen, ein gewisses Maß an Konsistenz und Realismus hinsichtlich der Positionierung und Darstellung Ihrer Lichtquellen zu erreichen. Natürlich gibt es Ausnahmen von diesem Leitfaden, wie zum Beispiel, wenn Ihre Szene eine außerirdische oder fremdartige Umgebung repräsentiert oder wenn Ihr Ziel darin besteht, einen beunruhigenden visuellen Effekt zu erzeugen.

### Realismus in der Platzierung von Lichtquellen

Wenn möglich, sollten Sie versuchen, Ihre virtuellen Lichtquellen mit Objekten zu korrespondieren, die tatsächlich existieren. Wenn Sie einen virtuellen Raum haben, der eine Deckenbeleuchtung benötigt, platzieren Sie ein Modell einer Deckenlampe an der Position Ihrer Lichtquelle. Es gibt Ausnahmen, wie das Umgebungslicht, das eine Grundmenge an Beleuchtung für Ihre Umgebung hinzufügt, und die Sonne, die eine gerichtete Lichtquelle ist (d.h. eine Lichtquelle, bei der jeder Lichtstrahl parallel ist, aus einer Richtung im Himmel kommend und irgendwo innerhalb Ihrer Szene endend).

Versuchen Sie, Lichtquellen an realistischen Orten für die Umgebung und die Stimmung, die Sie erzeugen möchten, zu platzieren. Eine Szene, die wie eine natürlich beleuchtete, realistische Umgebung wirken soll, hat keine Studiobeleuchtung. Sie hat Sonnenlicht, möglicherweise Licht, das von Objekten oder Wasser innerhalb der Szene reflektiert wird und so weiter, aber keine Lampen, die auf die Gesichter von Objekten oder Personen in der Szene gerichtet sind.

### Realismus in der Interaktion der Spieler mit Licht

Wenn sich Ihre Lichtquelle innerhalb der Szene befindet, sollten Sie wahrscheinlich sicherstellen, dass der Avatar des Betrachters die Lichtquelle nicht physisch durchqueren kann. Das Ergebnis könnte seltsam sein.

Wenn der Avatar des Betrachters eine physische Form haben soll, sollte er ein Modell haben, selbst wenn der Betrachter es nie sehen kann, damit das Licht korrekt mit dem Avatar interagiert. Dies bedeutet minimal, dass der Avatar einen angemessenen Schatten werfen sollte; je nach Faktoren wie der Sichtbarkeit des Avatars und den Materialien, Texturen und anderen Eigenschaften des Modells, einschließlich insbesondere der Reflektivität, müsste der Avatar möglicherweise auch Licht reflektieren und eventuell die Farbgebung des von ihm reflektierten Lichts beeinflussen.

### Realismus in der erweiterten Realität

Erweiterte Realität bringt eine zusätzliche Komplexitätsebene in die Beleuchtung Ihrer Objekte, da Ihre virtuellen Objekte in einer physischen Welt existieren müssen, die ihre eigenen Lichtquellen hat. Daher sollten Sie versuchen, Ihre Beleuchtung so weit wie möglich an die Lichtquellen der realen Welt anzupassen. Dies wird durch eine Technik namens [Beleuchtungsschätzung](#beleuchtungsschätzung) durchgeführt.

Umgekehrt sollten Sie versuchen, virtuelle Objekte zu vermeiden, die selbst Lichtquellen sind, es sei denn, Sie sind bereit, Code zu erstellen, der dieses Licht auf die reale Umgebung werfen kann. Licht auf reale Objekte zu werfen ist im Wesentlichen das Gegenteil von Schatten zu werfen. Es kann getan werden, ist jedoch nicht so weit verbreitet implementiert.

## Beleuchtungsschätzung

**Beleuchtungsschätzung** ist eine Technik, die von Plattformen der erweiterten Realität verwendet wird, um zu versuchen, die Beleuchtung der virtuellen Objekte in der Szene an die Beleuchtung der realen Umgebung um den Betrachter herum anzupassen. Dies beinhaltet die Sammlung von Daten, die von verschiedenen Sensoren (einschließlich des Beschleunigungsmessers und Kompasses, falls verfügbar), Kameras und potenziell anderen Quellen stammen können. Weitere Daten werden mithilfe der [Geolocation API](/de/docs/Web/API/Geolocation_API) gesammelt, und dann werden all diese Daten durch Algorithmen und maschinelle Lernsysteme geleitet, um die geschätzten Beleuchtungsinformationen zu generieren.

Derzeit bietet WebXR keine Unterstützung für die Beleuchtungsschätzung. Es wird jedoch derzeit eine [Spezifikation entworfen](https://github.com/immersive-web/lighting-estimation) unter der Leitung des W3C. Sie können alles über die vorgeschlagene API und eine Menge über das Konzept der Beleuchtungsschätzung im [Erklärungsdokument](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md) lernen, das im GitHub-Repository der Spezifikation enthalten ist.

Im Wesentlichen sammelt die Beleuchtungsschätzung diese Informationen über die Lichtquellen und die Form und Orientierung der Objekte in der Szene, zusammen mit Informationen über die Materialien, aus denen sie bestehen, und liefert dann Daten, die Sie verwenden können, um virtuelle Lichtquellenobjekte zu erstellen, die die Beleuchtung der realen Welt ungefähr nachahmen.

Die Einzelheiten zur Funktionsweise der Beleuchtungsschätzung, insbesondere im Kontext der vorgeschlagenen API, sind im Moment nicht von Bedeutung. Sobald die API stabilisiert ist, werden wir diese Dokumentation mit den Details aktualisieren.

## Sicherheits- und Datenschutzbedenken

Es gibt eine Reihe potenzieller Sicherheitsprobleme, die mit der Sammlung all dieser Daten zu Erzeugung und Anwendung von Beleuchtung auf Ihre virtuellen Objekte mithilfe realer Daten verbunden sind.

Natürlich machen viele AR-Anwendungen recht klar, wo sich der Benutzer befindet. Wenn der Benutzer eine App namens _Touring the Louvre_ ausführt, besteht eine sehr hohe Wahrscheinlichkeit, dass sich der Benutzer im [Musée du Louvre](https://www.louvre.fr/en) in Paris, Frankreich, aufhält. Aber Browser müssen eine Reihe von Schritten unternehmen, um es schwierig zu machen, den Benutzer physisch zu lokalisieren, ohne seine Zustimmung.

### Ambient Light Sensor API

Die Sammlung von Lichtdaten mithilfe der [Ambient Light Sensor API](/de/docs/Web/API/AmbientLightSensor) führt zu verschiedenen potenziellen Datenschutzproblemen.

- Beleuchtungsinformationen können dem Netz Informationen über die Umgebung des Benutzers und die Nutzungsmuster des Geräts preisgeben. Solche Informationen können verwendet werden, um die Benutzerprofilierung und Verhaltensanalyse zu verbessern.
- Wenn zwei oder mehr Geräte auf Inhalte zugreifen, die dasselbe Drittanbieterskript verwenden, kann dieses Skript verwendet werden, um Beleuchtungsinformationen und deren zeitliche Änderungen zu korrelieren, um eine räumliche Beziehung zwischen den Geräten abzuleiten; dies könnte theoretisch darauf hinweisen, dass sich die Geräte in derselben allgemeinen Umgebung befinden.

### Wie Browser diese Probleme mildern

Um diese Risiken zu verringern, sind Browser gemäß der WebXR Beleuchtungsschätzungs-API-Spezifikation verpflichtet, Beleuchtungsinformationen zu melden, die etwas von den tatsächlichen Werten abweichen. Es gibt viele Möglichkeiten, wie dies getan werden könnte.

#### Präzision der Sphärischen Harmonischen

Browser können das Risiko der {{Glossary("Fingerprinting", "Fingerabdruckerstellung")}} mindern, indem sie die Präzision der [sphärischen Harmonischen](https://en.wikipedia.org/wiki/Spherical_harmonics) verringern. Bei der Echtzeit-Renderung - wie sie in jeder virtuellen oder erweiterten Realität Anwendung der Fall ist - wird [sphärische harmonische Beleuchtung](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting) verwendet, um den Prozess der Erzeugung hoch realistischen Schatten und Schattierungen zu vereinfachen und zu beschleunigen. Indem die Genauigkeit dieser Funktionen verändert wird, macht der Browser die Daten weniger konsistent und, was noch wichtiger ist, macht die Daten, die von zwei Computern in denselben Einstellungen erzeugt wurden, unterschiedlich.

#### Entkopplung von Orientierung und Beleuchtung

In einer AR-Anwendung, die Geolokalisierung verwendet, um Informationen zur Orientierung und möglicherweise zur Position zu bestimmen, ist es eine weitere Möglichkeit der Browser, das direkte Korrelieren dieser Informationen mit dem Zustand der Beleuchtung zu vermeiden, um Benutzer vor Fingerprinting-Angriffen zu schützen. Indem sichergestellt wird, dass die Kompassrichtung und die Lichtrichtung nicht auf jedem Gerät identisch sind, das sich in der Nähe (oder vorgibt in der Nähe zu sein) des Standorts des Benutzers befindet, wird die Möglichkeit, Benutzer basierend auf den Lichtverhältnissen zu finden, entfernt.

Wenn der Browser Details über eine sehr helle, gerichtete Lichtquelle liefert, repräsentiert diese Quelle wahrscheinlich die Sonne. Die Richtungsabhängigkeit dieser hellen Lichtquelle kombiniert mit der Tageszeit kann verwendet werden, um den geografischen Standort des Benutzers zu bestimmen, ohne die Geolocation API zu verwenden. Durch die Gewährleistung, dass die Koordinaten der AR-Szene nicht mit Kompasskoordinaten übereinstimmen, und durch die Reduzierung der Präzision des Sonnenlichtwinkels kann der Standort nicht mehr genau mit dieser Technik geschätzt werden.

#### Zeitliche und räumliche Filterung

Betrachten Sie einen Angriff, bei dem das automatisierte Beleuchtungssystem eines Gebäudes die Lichter schnell in einem bekannten Muster ein- und ausschaltet. Ohne geeignete Vorsichtsmaßnahmen könnten die Lichtschätzungsdaten verwendet werden, um dieses Muster zu erkennen und somit festzustellen, dass sich ein Benutzer an einem bestimmten Ort befindet. Dies könnte aus der Ferne geschehen oder von einem Angreifer durchgeführt werden, der sich im selben Raum befindet, aber feststellen will, ob die andere Person ebenfalls im selben Raum ist.

Ein weiteres Szenario, in dem die Lichtschätzung verwendet werden kann, um Informationen über den Benutzer ohne Erlaubnis zu erhalten: Wenn der Lichtsensor nahe genug am Display des Benutzers ist, um Beleuchtungsänderungen zu erkennen, die durch die Inhalte des Displays verursacht werden, könnte ein Algorithmus verwendet werden, um festzustellen, ob der Benutzer ein bestimmtes Video ansieht - oder sogar potenziell zu identifizieren, welches von mehreren Videos der Benutzer sich ansieht.

Die Spezifikation der Beleuchtungsschätzungs-API fordert, dass alle {{Glossary("user_agent", "Benutzeragenten")}} eine zeitliche und räumliche Filterung durchführen, um die Daten in einer Weise zu verfälschen, die ihre Nützlichkeit zur Bestimmung des Standorts des Benutzers oder zur Durchführung von [Seitenkanalangriffen](https://en.wikipedia.org/wiki/Side-channel_attack) verringert.

## Siehe auch

- [WebXR Lighting Estimation API Erklärer](https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md)
- [WebXR Lighting Estimation API Level 1 Spezifikation](https://github.com/immersive-web/lighting-estimation)
- [Verwendung von Shadern zur Farbgebung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)
