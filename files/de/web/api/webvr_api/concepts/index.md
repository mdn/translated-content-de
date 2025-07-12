---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("WebVR API")}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde nur in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine geringe Anzahl von Geräten.

Dieser Artikel behandelt einige der Konzepte und Theorien hinter virtueller Realität (VR). Wenn Sie neu in diesem Bereich sind, ist es sinnvoll, sich mit diesen Themen vertraut zu machen, bevor Sie sich in den Code vertiefen.

## Die Geschichte der VR

Virtuelle Realität ist nichts Neues — das Konzept reicht weit zurück, über die Oculus Rift Kickstarter-Kampagne von 2012 hinaus. Menschen experimentieren seit Jahrzehnten damit.

1939 wurde das [View-Master-Gerät](https://en.wikipedia.org/wiki/View-Master) entwickelt, das es Menschen ermöglichte, 3D-Bilder zu sehen. Das Gerät zeigte Bilder, die auf Pappscheiben gespeichert waren und stereoskopische 3D-Paare von kleinen Farbfotografien enthielten. Nach Jahren der Entwicklung begann das Militär, sich für die Nutzung solcher Technologien zu interessieren, und 1961 entstand Projekt Headsight — dabei handelte es sich um einen Helm mit einem Videobildschirm und einem Kopf-Tracking-System.

In den folgenden Jahrzehnten wurden verschiedene Experimente durchgeführt, aber es war nicht mehr nur auf wissenschaftliche Labors und Schlachtfelder beschränkt. Schließlich übernahm die Popkultur, und Filmregisseure zeigten ihre Visionen der virtuellen Realität. Filme wie Tron (1982) und Matrix (1999) wurden geschaffen, in denen Menschen sich in eine völlig neue Cyberwelt transferieren konnten oder in einer gefangen waren, ohne es zu wissen und sie als reale Welt akzeptierten.

Die ersten VR-Spielversuche waren groß und teuer — 1991 entwickelte die Virtuality Group eine VR-fähige Arcade-Maschine mit Brille und portierte beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte 1993 auf der Consumer Electronics Show seine VR-Brille vor. Unternehmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt — wir mussten bis 2012 warten, um ein echtes Beispiel für ein erfolgreiches VR-Projekt zu sehen.

### VR in jüngerer Zeit

Was gibt es Neues? Virtual Reality Hardware muss hochpräzise, latenzarme Daten liefern, um ein akzeptables Benutzererlebnis zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsstark genug sein, um all diese Informationen zu verarbeiten. Erst kürzlich sind solche Genauigkeit und Leistung zu erschwinglichen Kosten verfügbar geworden, wenn überhaupt. Frühere VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie das [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte von Dollar erhältlich sind, und günstigere Lösungen verfügbar sind — wie Mobilgeräts-basierte Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Softwareseite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993)-Software entwickelt, die mit der VIVE und anderen Lösungen kompatibel ist und den Zugang zu Software wie einer brauchbaren VR-Benutzeroberfläche bietet.

Die Technologie selbst ist da, und die teureren Headsets werden im Laufe der Zeit nur günstiger werden, sodass mehr Menschen in Zukunft virtuelle Realität selbst erleben können.

### Eingabegeräte

Die Behandlung von Eingaben für virtuelle Realität-Anwendungen ist ein interessantes Thema — es ist eine völlig neue Erfahrung, für die dedizierte Benutzeroberflächen entworfen werden müssen. Es gibt derzeit verschiedene Ansätze von der klassischen Tastatur und Maus bis hin zu neuen wie Leap Motion und den VIVE-Controllern. Es ist eine Frage von Versuch und Irrtum, um herauszufinden, was in gegebenen Situationen funktioniert und welche Eingaben am besten zu Ihrem Spieltyp passen.

## VR-Hardware-Setup

Es gibt zwei Haupttypen von Setups, mobil oder computergebunden. Ihre Mindestausstattung ist wie folgt:

- Mobil: Ein Head-Mounted Display (HMD) wird mit einem Smartphone erstellt — das als VR-Display fungiert — montiert in einer VR-Halterung wie Google Cardboard, die die erforderlichen Linsen enthält, um eine stereoskopische Sicht dessen zu bieten, was auf dem mobilen Bildschirm projiziert wird.![Mobile basiertes VR-Setup](mobilebasedvrsetup.png)
- Computergebunden: Ein VR-Setup ist mit Ihrem Computer verbunden — dies besteht aus einem Head Mounted Display (HMD) mit einem hochauflösenden landeschaftsorientierten Bildschirm, auf dem die visuellen Darstellungen für das linke und rechte Auge angezeigt werden, einschließlich einer Linse für jedes Auge zur Förderung der Trennung der Szenen des linken und rechten Auges (stereoskopische Sicht). Das Setup beinhaltet auch einen separaten Positionssensor, der die Position/Ausrichtung/Geschwindigkeit/Beschleunigung Ihres Kopfes ermittelt und diese Informationen ständig an den Computer übermittelt. ![Computerbasierte VR-Setup](computerbasedvrsetup.png)

> [!NOTE]
> Computergebundene Systeme enthalten manchmal keinen Positionssensor, aber sie tun es normalerweise.

Andere Hardware, die die VR-Erfahrung ergänzt, umfasst:

- **Ein Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt, sodass sie zu einem interessanten Controller und Objekt in VR-Spielwelten wird. Der fortschrittlichste bis heute ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (verbunden mit dem Oculus Rift) funktioniert und auch an ein mobiles Gerät angeschlossen werden kann (letzteres befindet sich in einer experimentellen Phase).
- **Ein Gamepad**: Wir können ein Xbox-Controller oder ähnliches konfigurieren, um als Tastatur im Browser zu fungieren — dies bietet weitere Interaktionsmöglichkeiten mit einer VR-Webseite. Es gibt einige Gamepads, die mit einem mobilen Setup funktionieren, aber diese sind über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Augentracker (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen liest.
- **Ein Gesichtsausdruck-Tracker (experimentell)**: Forscher der University of Southern California und der Oculus-Abteilung von Facebook testen neue Methoden, um Gesichtsausdrücke zu verfolgen und sie auf einen virtuellen Charakter zu übertragen.
- **Ein komplexeres Positionssensorsystem**: Ein Beispiel hierfür ist das HTC VIVE, das zwei Positionssensoren umfasst, die in gegenüberliegenden Ecken eines Raums platziert werden, um diesen vollständig zu kartieren, sodass VR-Erlebnisse in Räumen von bis zu 5m x 5m genossen werden können.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie oben erwähnt, erfasst der Positionssensor Informationen über das HMD und gibt diese kontinuierlich aus, sodass Sie eine Szene entsprechend der Kopfbewegung, -drehung usw. kontinuierlich aktualisieren können. Aber was genau sind diese Informationen?

![Position und Orientierung VR-Setup](positionorientationvr.png)

Die ausgegebenen Informationen fallen in vier Kategorien:

1. Position — Die Position des HMD entlang dreier Achsen in einem 3D-Koordinatenraum. x ist links und rechts, y ist oben und unten, und z ist zu und von dem Positionssensor entfernt. In WebVR werden die x-, y- und z-Koordinaten durch das Array in [`VRPose.position`](/de/docs/Web/API/VRPose/position) dargestellt.
2. Orientierung — Die Drehung des HMD um drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Drehung um die x-Achse, yaw ist die Drehung um die y-Achse, und roll ist die Drehung um die z-Achse. In WebVR werden der Pitch, Yaw und Roll durch die ersten drei Elemente des Arrays in [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) dargestellt.
3. Geschwindigkeit — Es gibt zwei Arten von Geschwindigkeit, die in VR berücksichtigt werden müssen:
   - Linear — Die Geschwindigkeit entlang jeder der Achsen, auf denen sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) abgerufen werden.
   - Angular — Die Geschwindigkeit, mit der das HMD um jede der Achsen rotiert. Diese Informationen können mit [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) abgerufen werden.

4. Beschleunigung — Es gibt zwei Arten von Beschleunigung, die in VR berücksichtigt werden müssen:
   - Linear — Die Beschleunigung der Bewegung entlang jeder der Achsen, auf denen sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) abgerufen werden.
   - Angular — Die Beschleunigung der Rotation des HMD um jede der Achsen. Diese Informationen können mit [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) abgerufen werden.

## Blickfeld

Das Blickfeld (Field of View, FOV) ist der Bereich, den jedes der Augen des Benutzers vernünftigerweise sehen kann. Es hat grob die Form einer Pyramide, die auf einer Seite liegt, mit der Spitze im Inneren des Kopfes des Benutzers und dem Rest der Pyramide, der vom Auge des Benutzers ausstrahlt. Jedes Auge hat sein eigenes Sichtfeld, das leicht überlappt.

![FOV-bezogene Eigenschaften](fovrelatedproperties.png)

Das FOV wird durch die folgenden Werte definiert:

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees): Die Anzahl der Grad, bis zu denen das Sichtfeld nach oben reicht.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees): Die Anzahl der Grad, bis zu denen das Sichtfeld nach rechts reicht.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees): Die Anzahl der Grad, bis zu denen das Sichtfeld nach unten reicht.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees): Die Anzahl der Grad, bis zu denen das Sichtfeld nach links reicht.
- zNear, definiert durch [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear): Die Entfernung von der Mitte des Kopfes des Benutzers bis zum Beginn des sichtbaren Sehfeldes.
- zFar, definiert durch [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar): Die Entfernung von der Mitte des Kopfes des Benutzers bis zum Ende des sichtbaren Sehfeldes.

Die Standardwerte für diese Eigenschaften variieren je nach VR-Hardware leicht, obwohl sie in der Regel etwa 53° nach oben und unten und 47° nach links und rechts betragen, wobei zNear bei etwa 0,1m und zFar bei etwa 10000m liegen.

> [!NOTE]
> Der Benutzer kann potenziell alles um sich herum sehen, was ein völlig neues Konzept für Apps und Spiele ist. Versuchen Sie, den Menschen einen Grund zu geben, sich umzusehen und zu sehen, was hinter ihnen ist — lassen Sie sie nach Dingen greifen, die nicht von Anfang an sichtbar sind. Beschreiben Sie, was sich hinter ihrem Rücken befindet.

## Konzepte für VR-Apps

Dieser Abschnitt behandelt Konzepte, die bei der Entwicklung von VR-Anwendungen zu beachten sind und die Sie wahrscheinlich vorher nicht bei der Entwicklung von regulären Anwendungen für Mobilgeräte oder Desktop berücksichtigt haben.

### Stereoskopisches Sehen

Stereoskopisches Sehen ist die normale Sichtweise von Menschen und (den meisten) Tieren — die Wahrnehmung von zwei leicht unterschiedlichen Bildern (eines von jedem Auge) als einzelnes Bild. Dies führt zu Tiefenwahrnehmung und hilft uns, die Welt in herrlichem 3D zu sehen. Um dies in VR-Apps nachzubilden, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die von den linken und rechten Augen aufgenommen werden, wenn der Benutzer das HMD trägt.

![So erstellen Sie stereoskopische 3D-Bilder](createstereoscopicimages.png)

### Kopfverfolgung

Die primäre Technologie, die verwendet wird, um das Gefühl zu erzeugen, in einer 360º-Szene präsent zu sein, dank des Gyroskops, des Beschleunigungsmessers und des Magnetometers (Kompass), die im HMD enthalten sind.
Es hat primäre Relevanz, weil es unsere Augen glauben lässt, dass wir vor einem kugelförmigen Bildschirm stehen, und den Benutzern realistische Immersion in das App-Canvas bietet.

### Augenbelastung

Ein Begriff, der häufig in VR verwendet wird, da er ein großes Hindernis bei der Verwendung eines HMD ist — wir täuschen das Auge ständig mit dem, was wir im App-Canvas zeigen, was dazu führt, dass die Augen viel mehr arbeiten, als sie normalerweise würden, sodass die Verwendung von VR-Apps über einen längeren Zeitraum zu Augenbelastung führen kann.

Um diesen unerwünschten Effekt zu minimieren, müssen wir:

- Vermeiden Sie, sich auf unterschiedliche Tiefen zu konzentrieren (z. B. vermeiden Sie die Verwendung vieler Partikel mit unterschiedlichen Tiefen).
- Vermeiden Sie Augenkonvergenz (z. B., wenn Sie ein Objekt haben, das sich auf die Kamera zubewegt, werden Ihre Augen folgen und sich darauf zusammenziehen).
- Verwenden Sie dunklere Hintergründe mit gedämpfteren Farben, wo möglich; ein heller Bildschirm macht die Augen müder.
- Vermeiden Sie schnelle Helligkeitsänderungen.
- Vermeiden Sie es, dem Benutzer große Mengen Text zum Lesen zu präsentieren. Sie sollten auch vorsichtig mit der Entfernung zwischen den Augen/Kamera und dem Text zum Lesen sein. 0,5m ist unbequem, während bei mehr als 2m der Stereo-Effekt beginnt zu bröckeln, daher ist etwas dazwischen ratsam.
- Seien Sie vorsichtig mit der Entfernung zwischen Objekten und der Kamera im Allgemeinen. Oculus empfiehlt 0,75m als minimale Fokusentfernung.
- Verwenden Sie einen Zeiger, wenn der Benutzer mit einem Objekt in der Szene interagieren muss — dies hilft ihm, es korrekt mit weniger Aufwand anzusteuern.

Im Allgemeinen wird der Weg des geringsten visuellen Aufwands dem Benutzer ein weniger ermüdendes Erlebnis bieten.

### Bewegungsübelkeit

Wenn Entwickler nicht größte Sorgfalt walten lassen, können VR-Apps tatsächlich dazu führen, dass sich ihre Benutzer krank fühlen. Dieser Effekt wird erzeugt, wenn die vom Auge empfangenen Reize nicht das sind, was der Körper zu empfangen erwartet.

Um zu vermeiden, bei unseren Nutzern Bewegungsübelkeit auszulösen (oder zumindest die Auswirkungen zu minimieren), müssen wir:

- Kopfverfolgung immer beibehalten (dies ist das Wichtigste, insbesondere wenn es mitten im Erlebnis auftritt).
- Verwenden Sie konstante Geschwindigkeit; vermeiden Sie Beschleunigung oder Verzögerung von Kamerabewegungen (verwenden Sie lineare Beschleunigung, und vermeiden Sie Easing, wenn Sie können).
- Halten Sie die Bildrate hoch (weniger als 30fps ist unangenehm).
- Vermeiden Sie scharfe und/oder unerwartete Kameradrehungen.
- Fügen Sie feste Bezugspunkte für stationäre Objekte hinzu (ansonsten glaubt der Benutzer, dass er sich bewegt).
- Verwenden Sie keine Tiefenschärfe- oder Bewegungsunschärfe-Nachbearbeitung, da Sie nicht wissen, wo sich die Augen fokussieren werden.
- Vermeiden Sie Helligkeitsänderungen (verwenden Sie niedrigfrequente Texturen oder Nebeleffekte, um sanfte Lichtübergänge zu schaffen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Körperteilen hervorrufen.

### Latenz

Latenz ist die Zeit zwischen der physikalischen Kopfbewegung und der Aktualisierung des visuellen Displays, das die Augen des Benutzers vom Bildschirm eines HMD wahrnimmt. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen erkennen — wir müssen die Latenz unter 20 Millisekunden halten, wenn sie unmerklich sein sollen (zum Beispiel hat ein 60Hz-Monitor eine Reaktion von 16 ms).

Das Oculus Rift Headset hat eine Latenz von 20 ms oder weniger, aber bei auf Mobilgeräten basierten Setups hängt es stark von der CPU-Leistung des Smartphones und anderen Fähigkeiten ab.

### Bildrate (Frames per Second / FPS)

Basierend auf der Definition in Wikipedia ist die Bildrate die Frequenz, mit der ein Aufnahmegerät einzigartige aufeinanderfolgende Bilder, sogenannte Frames, erzeugt. Eine Rate von 60fps ist eine akzeptable Rate für ein reibungsloses Benutzererlebnis, aber je nach Leistung der Maschine, auf der die App läuft, oder der Komplexität der Inhalte, die Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30fps wird im Allgemeinen als ruckelig und störend für den Benutzer angesehen.

Eine der schwierigsten Aufgaben ist es, einen konstanten und hohen Bildratenwert aufrechtzuerhalten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu gestalten. Es ist vorzuziehen, eine anständige Bildrate zu haben, die konstant oder plötzlich nicht verändert wird; dafür müssen Sie so wenig wie möglich notwendige Objekte in die Szene bewegen und (im Fall von WebGL) versuchen, die Zeichnungsaufrufe zu reduzieren.

### Pupillendistanz (IPD)

Basierend auf der Definition in Wikipedia ist die Pupillendistanz (IPD) der Abstand zwischen den Mittelpunkten der Pupillen der beiden Augen. IPD ist entscheidend für die Konstruktion von binokularen Anzeigesystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Anzeigesystems positioniert werden müssen.

Die Pupillendistanz (IPD) kann in WebVR mit [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) berechnet werden, welches gleich der Hälfte des IPD ist.

Dieser Wert wird durch das HMD zurückgegeben und sein Wert kann etwa 60 bis 70 mm betragen; im Fall einiger HMDs wie dem von Oculus Rift können Sie Ihr eigenes IPD einstellen. Normalerweise ändern wir diesen Wert nicht, aber Sie können damit spielen, um den Maßstab der gesamten Szene zu ändern. Wenn Ihr IPD beispielsweise auf 6000 mm eingestellt ist, würde der Benutzer die Szene wie ein Riese betrachten, der auf eine Lilliputaner-Welt schaut.

### Freiheitsgrade (DoF)

DoF bezieht sich auf die Bewegung eines starren Körpers im Raum. Es gibt keine Einheitlichkeit bei der Erstellung von Akronymen für diesen Begriff — wir finden Verweise auf 3DoF im Zusammenhang mit Sensoren, die nur die Kopfdrehung erfassen, und 6DoF, wenn eine Eingabe es uns ermöglicht, Position und Orientierung gleichzeitig zu steuern. Wir finden sogar manchmal 9DoF-Verweise, wenn die Hardware drei Sensoren wie Gyroskop, Beschleunigungsmesser und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF-Werte tatsächlich eine 6-Grad-of-Freedom-Verfolgung zurückgeben.

DoF ist direkt mit der Verfolgung der Kopfbewegung des Benutzers verbunden.

### Fokus-Kegel

Obwohl unser Sichtfeld viel größer ist (ungefähr 180º), müssen wir feststellen, dass nur in einem kleinen Teil dieses Sichtfeldes Symbole wahrgenommen werden können (die mittleren 60º) oder Text gelesen werden kann (die mittleren 10º). Wenn Sie keinen Augentracker haben, gehen wir davon aus, dass sich im Zentrum des Bildschirms der Punkt befindet, auf den der Benutzer seine Augen fokussiert.

Diese Einschränkung ist wichtig zu beachten, wenn Sie entscheiden, wo Sie visuelle Elemente im App-Canvas platzieren — zu weit am Rande des Fokus-Kegels kann viel schneller zu Augenbelastung führen.

### 3D-Positions-Audio

3D-Positions-Audio bezieht sich auf eine Gruppe von Effekten, die Audio manipulieren, um zu simulieren, wie es in einem dreidimensionalen Raum klingen würde.

Dies steht in direktem Zusammenhang mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API), die uns ermöglicht, Klänge an Objekten im Canvas zu platzieren oder Audio je nach Teil der Szene zu starten, in die der Benutzer reist oder auf die er schaut.
