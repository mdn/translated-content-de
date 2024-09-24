---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. Die WebVR API wurde nie als Standard ratifiziert, in nur wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Dieser Artikel behandelt einige der Konzepte und die Theorie hinter virtueller Realität (VR). Wenn Sie neu in diesem Bereich sind, ist es lohnenswert, diese Themen zu verstehen, bevor Sie sich in den Code vertiefen.

## Die Geschichte der VR

Virtuelle Realität ist nichts Neues — das Konzept reicht viel weiter zurück als die Oculus Rift Kickstarter-Kampagne von 2012. Menschen experimentieren seit Jahrzehnten damit.

Im Jahr 1939 wurde das [View-Master-Gerät](https://en.wikipedia.org/wiki/View-Master) entwickelt, das es Menschen ermöglichte, 3D-Bilder zu sehen. Das Gerät zeigte Bilder, die auf Kartonscheiben gespeichert waren und stereoskopische 3D-Paare kleiner Farbfotos enthielten. Nach Jahren der Entwicklung wurde das Militär auf diese Technologie aufmerksam, und 1961 wurde das Projekt Headsight geboren — es beinhaltete einen Helm mit einem Videobildschirm und ein Kopfverfolgungssystem.

In den folgenden Jahrzehnten wurden verschiedene Experimente durchgeführt, aber diese beschränkten sich nicht mehr auf wissenschaftliche Labore und Schlachtfelder. Schließlich übernahm die Popkultur mit Filmregisseuren, die ihre Visionen der virtuellen Realität zeigten. Filme wie Tron (1982) und The Matrix (1999) wurden geschaffen, in denen Menschen sich in eine völlig neue Cyberwelt versetzen oder in einer gefangen sein konnten, ohne es zu wissen, und sie als reale Welt akzeptierten.

Die ersten Versuche mit VR-Spielen waren groß und teuer — 1991 schuf die Virtuality Group einen VR-fähigen Arcade-Automaten mit Brillen und portierte beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte 1993 auf der Consumer Electronics Show seine VR-Brille vor. Unternehmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt — wir mussten bis 2012 warten, um ein echtes Beispiel für ein erfolgreiches VR-Projekt zu sehen.

### VR in der heutigen Zeit

Was gibt es Neues? VR-Hardware muss hochpräzise, latenzarme Daten liefern, um eine akzeptable Benutzererfahrung zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsfähig genug sein, um all diese Informationen zu verarbeiten. Erst kürzlich waren solche Genauigkeit und Leistung zu erschwinglichen Kosten verfügbar, wenn überhaupt. Frühe VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie die [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte von Dollar erhältlich sind, und günstigere Lösungen sind verfügbar — mobilgerätebasierte Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Softwareseite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993) Software geschaffen, die mit der VIVE und anderen Lösungen kompatibel ist und den Zugang zu Software bietet, wie z.B. eine nutzbare VR-Benutzeroberfläche.

Die Technologie selbst ist vorhanden, und die teureren Headsets werden mit der Zeit nur noch günstiger, sodass mehr Menschen in der Zukunft virtuelle Realität selbst erleben können.

### Eingabegeräte

Der Umgang mit Eingaben für VR-Anwendungen ist ein interessantes Thema — es ist eine völlig neue Erfahrung, für die speziell gestaltete Benutzeroberflächen erforderlich sind. Es gibt derzeit verschiedene Ansätze, vom klassischen Keyboard und Maus bis zu neuen wie Leap Motion und den VIVE-Controllern. Es ist eine Frage von Versuch und Irrtum, um herauszufinden, was in bestimmten Situationen funktioniert und welche Eingaben am besten für Ihren Spieltyp geeignet sind.

## VR-Hardware-Setup

Es gibt zwei Haupttypen von Setups, mobil oder computerverbunden. Ihre minimalen Hardware-Setups sind wie folgt:

- Mobil: Ein Head-Mounted Display (HMD) wird mit einem Smartphone erstellt — das als VR-Display dient —, das in einem VR-Gestell wie Google Cardboard angebracht ist, das die erforderlichen Linsen enthält, um stereoskopische Vision dessen zu bieten, was auf dem mobilen Bildschirm projiziert wird.![Mobil basiertes VR-Setup](mobilebasedvrsetup.png)
- Computerverbunden: Ein VR-Setup ist mit Ihrem Computer verbunden — es besteht aus einem Head-Mounted Display (HMD) mit einem hochauflösenden, querformatigen Bildschirm, auf dem die Visuals für das linke und rechte Auge angezeigt werden und der auch eine Linse für jedes Auge enthält, um die Trennung der Szenen für das linke und rechte Auge zu fördern (stereoskopische Vision). Das Setup umfasst auch einen separaten Positionssensor, der die Position/Ausrichtung/Geschwindigkeit/Beschleunigung Ihres Kopfes ermittelt und diese Informationen ständig an den Computer weiterleitet. ![Computerbasiertes VR-Setup](computerbasedvrsetup.png)

> [!NOTE]
> Computerverbundene Systeme enthalten manchmal keinen Positionssensor, aber in der Regel tun sie es.

Weitere Hardware, die die VR-Erfahrung ergänzt, umfasst:

- **Ein Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt, sodass sie zu einem interessanten Controller wird und ein Objekt in VR-Spielwelten. Der fortschrittlichste bisher ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (verbunden mit dem Oculus Rift) arbeitet und auch mit einem mobilen Gerät verbunden werden kann (letzteres befindet sich in einer experimentellen Phase).
- **Ein Gamepad**: Wir können einen XBox-Controller oder ähnliches konfigurieren, um als Tastatur im Browser zu funktionieren — dies bietet weitere Möglichkeiten der Interaktion mit einer VR-Webseite. Einige Gamepads funktionieren mit einem mobilen Setup, aber diese sind über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Blickverfolgungssensor (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen liest.
- **Ein Gesichtsbewegungstracker (experimentell)**: Forscher der Universität Südkalifornien und Facebooks Oculus-Abteilung haben neue Möglichkeiten getestet, wie man Gesichtsausdrücke verfolgt und auf einen virtuellen Charakter überträgt.
- **Ein komplexeres Positionalsensorsystem**: Ein Beispiel ist die HTC VIVE, die zwei Positionssensoren aufweist, die in gegenüberliegenden Ecken eines Raums sitzen, alles kartographieren und es ermöglichen, VR-Erlebnisse in Räumen von bis zu 5m x 5m zu genießen.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie oben erwähnt, erkennt der Positionssensor Informationen bezüglich des HMD und gibt diese ständig aus, sodass Sie eine Szene ständig basierend auf Kopfbewegungen, Rotation usw. aktualisieren können. Aber was genau sind die Informationen?

![Positions- und Orientierungssetup für VR](positionorientationvr.png)

Die Ausgabedaten fallen in vier Kategorien:

1. Position — Die Position des HMD entlang dreier Achsen in einem 3D-Koordinatenraum. x ist nach links und rechts, y ist nach oben und unten und z ist in Richtung und weg vom Positionssensor. In WebVR werden die x-, y- und z-Koordinaten durch das Array in {{domxref("VRPose.position")}} dargestellt.
2. Orientierung — Die Rotation des HMD um drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Rotation um die x-Achse, Gier (yaw) ist die Rotation um die y-Achse und Roll ist die Rotation um die z-Achse. In WebVR werden die Pitch-, Gier- und Roll-Darstellungen durch die ersten drei Elemente des Arrays in {{domxref("VRPose.orientation")}} dargestellt.
3. Geschwindigkeit — Es gibt zwei Arten von Geschwindigkeit, die in VR zu berücksichtigen sind:

   - Linear — Die Geschwindigkeit entlang einer der Achsen, die das HMD bewegt. Diese Informationen können über {{domxref("VRPose.linearVelocity")}} abgerufen werden.
   - Winkel — Die Geschwindigkeit, mit der sich das HMD um eine der Achsen dreht. Diese Informationen können über {{domxref("VRPose.angularVelocity")}} abgerufen werden.

4. Beschleunigung — Es gibt zwei Arten von Beschleunigung, die in VR zu berücksichtigen sind:

   - Linear — Die Beschleunigung entlang einer der Achsen, auf der sich das HMD bewegt. Diese Informationen können über {{domxref("VRPose.linearAcceleration")}} abgerufen werden.
   - Winkel — Die Beschleunigung der Rotation des HMD um eine der Achsen. Diese Informationen können über {{domxref("VRPose.angularAcceleration")}} abgerufen werden.

## Sichtfeld

Das Sichtfeld (FOV) ist der Bereich, den jedes der Augen des Benutzers vernünftigerweise sehen kann. Es nimmt ungefähr die Form einer Pyramide an, die auf einer Seite liegt, mit dem Apex im Inneren des Kopfes des Benutzers und dem Rest der Pyramide, die vom Auge des Benutzers ausgeht. Jedes Auge hat sein eigenes Sichtfeld, das leicht mit dem des anderen überlappt.

![FOV bezogene Eigenschaften](fovrelatedproperties.png)

Das Sichtfeld wird durch die folgenden Werte definiert:

- {{domxref("VRFieldOfView.upDegrees")}}: Die Anzahl der Grad nach oben, wie weit das Sichtfeld reicht.
- {{domxref("VRFieldOfView.rightDegrees")}}: Die Anzahl der Grad nach rechts, wie weit das Sichtfeld reicht.
- {{domxref("VRFieldOfView.downDegrees")}}: Die Anzahl der Grad nach unten, wie weit das Sichtfeld reicht.
- {{domxref("VRFieldOfView.leftDegrees")}}: Die Anzahl der Grad nach links, wie weit das Sichtfeld reicht.
- zNear, definiert durch {{domxref("VRDisplay.depthNear")}}: Der Abstand von der Mitte des Kopfes des Benutzers bis zum Beginn des sichtbaren Sichtfelds.
- zFar, definiert durch {{domxref("VRDisplay.depthFar")}}: Der Abstand von der Mitte des Kopfes des Benutzers bis zum Ende des sichtbaren Sichtfelds.

Die Standardwerte für diese Eigenschaften variieren je nach VR-Hardware leicht, obwohl sie in der Regel etwa 53° nach oben und unten und 47° nach links und rechts betragen, wobei zNear und zFar bei etwa 0,1m bzw. 10000m liegen.

> [!NOTE]
> Der Benutzer kann potenziell ganz um sich herum sehen, was ein völlig neues Konzept für Apps und Spiele ist. Versuchen Sie, den Menschen einen Grund zu geben, sich umzusehen und zu entdecken, was sich hinter ihnen befindet - lassen Sie sie Dinge finden, die zu Beginn nicht sichtbar sind.

## Konzepte für VR-Apps

Dieser Abschnitt behandelt Konzepte, die beim Entwickeln von VR-Apps berücksichtigt werden müssen und die Sie wahrscheinlich nicht vorher beachten mussten, als Sie reguläre Apps für mobile Geräte oder Desktops entwickelt haben.

### Stereoskopische Vision

Stereoskopische Vision ist das normale Sehvermögen, das Menschen und (die meisten) Tiere haben — die Wahrnehmung von zwei leicht unterschiedlichen Bildern (eines von jedem Auge) als ein einziges Bild. Dies führt zu einer Tiefenwahrnehmung und hilft uns, die Welt in herrlichem 3D zu sehen. Um dies in VR-Apps nachzubilden, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die während der Nutzung des HMD vom linken und rechten Auge aufgenommen werden.

![Wie man stereoskopische 3D-Bilder erstellt](createstereoscopicimages.png)

### Kopfverfolgung

Die primäre Technologie, die das Gefühl erzeugt, in einer 360º-Szene präsent zu sein, dank des im HMD enthaltenen Gyroskops, Beschleunigungsmessers und Magnetometers (Kompass). Es hat primäre Relevanz, da es unsere Augen glauben lässt, wir seien vor einem kugelförmigen Bildschirm, was den Nutzern eine realistische Eintauchen in das App-Rahmen ermöglicht.

### Augenbelastung

Ein Begriff, der häufig in VR verwendet wird, da er ein großes Handicap bei der Verwendung eines HMD darstellt — wir täuschen ständig das Auge mit dem, was wir im App-Rahmen zeigen, und dies führt dazu, dass die Augen viel mehr Arbeit verrichten, als sie normalerweise tun würden, sodass die Verwendung von VR-Apps über einen längeren Zeitraum zu Augenbelastung führen kann.

Um diese unerwünschte Wirkung zu minimieren, müssen wir:

- Vermeiden Sie den Fokus auf verschiedene Tiefenebenen (z. B. vermeiden Sie die Verwendung von vielen Partikeln mit unterschiedlichen Tiefen).
- Vermeiden Sie Augen-Konvergenz (z. B. wenn Sie ein Objekt haben, das sich der Kamera nähert, werden Ihre Augen ihm folgen und sich auf es fokussieren).
- Verwenden Sie dunklere Hintergründe mit gedämpften Farben, wann immer möglich; ein heller Bildschirm wird die Augen mehr ermüden.
- Vermeiden Sie schnelle Helligkeitsänderungen.
- Präsentieren Sie dem Benutzer keine großen Textmengen zum Lesen. Achten Sie auch auf den Abstand zwischen den Augen/Kamera und dem zu lesenden Text. 0,5 m ist unangenehm, während bei mehr als 2 m der Stereo-Effekt zu zerbrechen beginnt, daher wird ein Abstand dazwischen empfohlen.
- Seien Sie vorsichtig mit dem Abstand zwischen Objekten und der Kamera im Allgemeinen. Oculus empfiehlt einen Mindestabstand von 0,75 m zum Fokussieren.
- Verwenden Sie einen Zeiger, wenn der Benutzer mit einem Objekt in der Szene interagieren muss — dies wird ihm helfen, darauf korrekt mit weniger Aufwand zu zeigen.

Im Allgemeinen wird der Weg des geringsten visuellen Aufwands dem Benutzer ein weniger ermüdendes Erlebnis bieten.

### Bewegungskrankheit

Wenn Entwickler nicht äußerste Vorsicht walten lassen, können VR-Apps tatsächlich ihren Nutzern Übelkeit verursachen. Dieser Effekt tritt auf, wenn die Reize, die ihre Augen empfangen, nicht dem entsprechen, was der Körper erwartet.

Um bei unseren Nutzern Bewegungskrankheit zu vermeiden (oder zumindest die Auswirkungen zu minimieren), müssen wir:

- Immer Kopfverfolgung aufrechterhalten (dies ist das Wichtigste von allem, vor allem, wenn es mitten im Erlebnis passiert).
- Verwenden Sie konstante Geschwindigkeiten; vermeiden Sie Beschleunigungen oder Verzögerungen in Kamerabewegungen (verwenden Sie lineare Beschleunigung und vermeiden Sie, so weit es geht, Erleichterungen).
- Halten Sie die Bildrate hoch (weniger als 30fps ist unangenehm).
- Vermeiden Sie scharfe und/oder unerwartete Kameradrehungen.
- Fügen Sie feste Bezugspunkte für feste Objekte hinzu (ansonsten wird der Benutzer glauben, dass er sich bewegt).
- Verwenden Sie nicht die postprozessualen Effekte "Schärfentiefe" oder "Bewegungsunschärfe", da Sie nicht wissen, wo die Augen fokussieren werden.
- Vermeiden Sie Helligkeitsänderungen (verwenden Sie niedrigfrequente Texturen oder Nebeleffekte, um sanfte Lichtübergänge zu erzeugen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Teilen des Körpers auslösen.

### Latenz

Latenz ist die Zeit zwischen der physikalischen Kopfbewegung und der Aktualisierung des visuellen Displays auf dem Bildschirm eines HMD, das die Augen des Benutzers erreicht. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen wahrnehmen — wir müssen die Latenz unter 20 Millisekunden halten, damit sie unmerklich bleibt (zum Beispiel hat ein 60-Hz-Monitor eine Reaktionszeit von 16 ms).

Das Oculus Rift-Headset hat eine Latenz von 20 ms oder weniger, aber bei mobilgerätebasierten Setups hängt es stark von der Rechenleistung des Smartphones und anderen Fähigkeiten ab.

### Bildrate (Frames per Second / FPS)

Basierend auf der Wikipedia-Definition ist die Bildrate die Frequenz, mit der ein Bildgebungsgerät einzigartige aufeinanderfolgende Bilder erzeugt, sogenannte Frames. Eine Rate von 60fps ist eine akzeptable Rate für eine flüssige Benutzererfahrung, aber je nach Leistung der Maschine, auf der die App ausgeführt wird, oder der Komplexität des Inhalts, den Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30fps wird allgemein als ruckelig und den Nutzer störend angesehen.

Eine der schwierigsten Aufgaben besteht darin, einen konstanten und hohen Bildratenwert aufrechtzuerhalten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu gestalten. Es ist vorzuziehen, eine anständige Bildrate zu haben, die nicht ständig oder plötzlich wechselt; dazu müssen Sie so wenig notwendige Objekte wie möglich in die Szene bewegen und (im Fall von WebGL) versuchen, Zeichnungsanfragen zu reduzieren.

### Pupillenabstand (Interpupillary Distance, IPD)

Basierend auf der Wikipedia-Definition ist IPD der Abstand zwischen den Mittelpunkten der Pupillen der beiden Augen. IPD ist entscheidend für das Design von Binokular-Sichtsystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Sichtsystems positioniert werden müssen.

Der Pupillenabstand (IPD) kann in WebVR unter Verwendung von {{domxref("VREyeParameters.offset")}} berechnet werden, die gleich der Hälfte des IPD ist.

Dieser Wert wird vom HMD zurückgegeben und sein Wert kann bei etwa 60 bis 70 mm liegen; bei einigen HMDs wie dem Oculus Rift kann der eigene IPD eingestellt werden. Normalerweise ändern wir diesen Wert nicht, aber Sie können damit spielen, um die Größe der gesamten Szene zu ändern. Zum Beispiel, wenn Ihr IPD auf 6000 mm eingestellt ist, würde der Benutzer die Szene wie ein Riese betrachten, der auf eine liliputanische Welt blickt.

### Freiheitsgrade (Degrees of Freedom, DoF)

DoF bezieht sich auf die Bewegung eines starren Körpers im Raum. Bei der Erstellung von Akronymen für diesen Begriff gibt es keine einheitliche Regel — wir können Referenzen zu 3DoF im Kontext von Sensoren finden, die nur die rotatorische Kopfverfolgung erkennen, und 6DoF, wenn ein Eingang es uns ermöglicht, Position und Orientierung gleichzeitig zu steuern. Manchmal finden wir sogar 9DoF-Referenzen, wenn die Hardware drei Sensoren wie Gyroskop, Beschleunigungsmesser und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF-Werte geben tatsächlich eine Verfolgung mit 6 Freiheitsgraden zurück.

Der Freiheitsgrad hängt direkt mit der Verfolgung der Kopfbewegung des Benutzers zusammen.

### Fokusbereich (Cone of Focus)

Obwohl unser Sichtfeld viel größer ist (etwa 180º), müssen wir uns bewusst sein, dass wir nur in einem kleinen Teil dieses Sichtfelds Symbole wahrnehmen (die mittleren 60º) oder Text lesen können (die mittleren 10º). Wenn wir keinen Blickverfolgungssensor haben, gehen wir davon aus, dass die Mitte des Bildschirms der Bereich ist, auf den der Benutzer seine Augen fokussiert.

Diese Einschränkung ist wichtig, wenn es darum geht, zu entscheiden, wo visuelle Eindrücke auf dem App-Rahmen platziert werden sollen — zu weit in Richtung Rand des Fokusbereichs kann viel schneller zur Augenbelastung führen.

### 3D-Positionsaudio

3D-Positionsaudio bezieht sich auf eine Gruppe von Effekten, die Audio manipulieren, um zu simulieren, wie es sich in einem dreidimensionalen Raum anhören würde.

Dies steht in direktem Zusammenhang mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API), die es uns ermöglicht, Geräusche auf Objekten zu platzieren, die wir auf dem Rahmen haben, oder Audio je nach dem Teil der Szene zu starten, zu dem der Benutzer unterwegs ist oder den er betrachtet.
