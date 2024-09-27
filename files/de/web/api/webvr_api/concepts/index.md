---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, war in sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Dieser Artikel behandelt einige der Konzepte und die Theorie hinter der virtuellen Realität (VR). Wenn Sie neu in diesem Bereich sind, ist es lohnenswert, diese Themen zu verstehen, bevor Sie mit dem Programmieren beginnen.

## Die Geschichte der VR

Virtuelle Realität ist nichts Neues — das Konzept reicht weit über die Kickstarter-Kampagne des Oculus Rift von 2012 hinaus. Menschen experimentieren seit Jahrzehnten damit.

1939 wurde das [View-Master-Gerät](https://en.wikipedia.org/wiki/View-Master) entwickelt, das es Menschen ermöglichte, 3D-Bilder zu sehen. Das Gerät zeigte Bilder an, die auf Pappscheiben gespeichert waren, die stereoskopische 3D-Paare kleiner Farbfotografien enthielten. Nach Jahren der Entwicklung wurde das Militär auf diese Technologie aufmerksam, und 1961 entstand das Projekt Headsight — ein Helm mit einem Videobildschirm und einem Head-Tracking-System.

In den nächsten Jahrzehnten gab es verschiedene Experimente, aber es war nicht mehr auf wissenschaftliche Labore und Schlachtfelder beschränkt. Schließlich übernahm die Popkultur, und Filmregisseure zeigten ihre Visionen von virtueller Realität. Filme wie Tron (1982) und The Matrix (1999) wurden geschaffen, in denen Menschen sich in eine völlig neue Cyberwelt versetzen oder in eine gefangen sein konnten, ohne davon zu wissen, sie als reale Welt zu akzeptieren.

Die ersten VR-Gaming-Versuche waren groß und teuer — 1991 schuf die Virtuality Group eine VR-taugliche Arcade-Maschine mit Brille und portierte beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte 1993 auf der Consumer Electronics Show ihre VR-Brille vor. Unternehmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt — wir mussten bis 2012 warten, um ein echtes Beispiel für ein erfolgreiches VR-Projekt zu sehen.

### VR in der heutigen Zeit

Was ist neu? Virtual-Reality-Hardware muss hochpräzise, latenzarme Daten liefern, um ein akzeptables Benutzererlebnis zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsfähig genug sein, um all diese Informationen zu verarbeiten. Erst kürzlich ist solche Genauigkeit und Leistung zu erschwinglichen Kosten verfügbar geworden, wenn überhaupt. Frühe VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie das [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte von Dollar erhältlich sind, und billigere Lösungen sind verfügbar — mobilgerätebasierte Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Software-Seite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993)-Software entwickelt, die mit dem VIVE und anderen Lösungen kompatibel ist und Zugriff auf Software bietet, wie eine nutzbare VR-Benutzeroberfläche.

Die Technologie ist hier, und die teureren Headsets werden im Laufe der Zeit nur noch billiger, damit mehr Menschen zukünftig virtual reality selbst erleben können.

### Eingabegeräte

Die Handhabung der Eingabe für Virtual-Reality-Anwendungen ist ein interessantes Thema — es ist eine völlig neue Erfahrung, für die eigens Benutzeroberflächen entworfen werden müssen. Es gibt derzeit verschiedene Ansätze, von der klassischen Tastatur und Maus bis hin zu neuen Geräten wie Leap Motion und den VIVE-Controllern. Es ist eine Frage von Versuch und Irrtum, herauszufinden, was in bestimmten Situationen funktioniert und welche Eingaben am besten zu Ihrem Spieltyp passen.

## VR Hardware-Konfiguration

Es gibt zwei Haupttypen von Konfigurationen: mobil oder mit dem Computer verbunden. Ihre minimale Hardwareausstattung ist wie folgt:

- Mobil: Ein Head-Mounted-Display (HMD) wird mit einem Smartphone erstellt — das als VR-Display fungiert —, das in einer VR-Halterung wie Google Cardboard montiert ist, die die erforderlichen Linsen enthält, um die stereoskopische Darstellung dessen zu ermöglichen, was auf dem mobilen Bildschirm projiziert wird.![Mobile basierte VR-Konfiguration](mobilebasedvrsetup.png)
- Mit dem Computer verbunden: Eine VR-Konfiguration wird mit Ihrem Computer verbunden — dies besteht aus einem Head-Mounted-Display (HMD), das einen hochauflösenden, landschaftlich orientierten Bildschirm enthält, auf dem die visuellen Darstellungen für beide Augen angezeigt werden, und das auch eine Linse für jedes Auge enthält, um die Trennung der Szene für das linke und das rechte Auge (stereoskopische Sicht) zu fördern. Die Konfiguration beinhaltet auch einen separaten Positionssensor, der die Position/Ausrichtung/Geschwindigkeit/Beschleunigung Ihres Kopfes bestimmt und diese Informationen ständig an den Computer übergibt. ![Computer basierte VR-Konfiguration](computerbasedvrsetup.png)

> [!NOTE]
> Systeme, die mit dem Computer verbunden sind, beinhalten manchmal keinen Positionssensor, aber normalerweise ist einer vorhanden.

Andere Hardware, die die VR-Erfahrung ergänzt, beinhaltet:

- **Ein Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt und es ihr ermöglicht, ein interessanter Controller und ein Objekt in VR-Spielwelten zu werden. Der bisher fortschrittlichste Sensor ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (verbunden mit dem Oculus Rift) arbeitet und auch mit einem mobilen Gerät (letzteres befindet sich in einer experimentellen Phase) verbunden werden kann.
- **Ein Gamepad**: Wir können einen Xbox-Controller oder ähnliches so konfigurieren, dass er im Browser als Tastatur fungiert — dies bietet weitere Interaktionsmöglichkeiten mit einer VR-Webseite. Es gibt einige Gamepads, die mit einer mobilen Konfiguration funktionieren, aber diese sind über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Augenerkennungssensor (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen erkennt.
- **Ein Gesichtsausdruck-Tracker (experimentell)**: Forscher der University of Southern California und Facebooks Oculus-Abteilung testen neue Methoden zum Verfolgen von Gesichtsausdrücken und deren Übertragung auf einen virtuellen Charakter.
- **Ein komplexeres Systems von Positionssensoren**: Zum Beispiel verfügt das HTC VIVE über zwei Positionssensoren, die in gegenüberliegenden Ecken eines Raums platziert sind, ihn vollständig kartieren und VR-Erlebnisse in Räumen von bis zu 5m x 5m ermöglichen.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie bereits erwähnt, erfasst der Positionssensor Informationen über das HMD und gibt diese kontinuierlich aus, was eine ständige Aktualisierung einer Szene entsprechend der Kopfbewegung, -drehung usw. ermöglicht. Aber welche Informationen sind das genau?

![Position und Orientierung VR-Konfiguration](positionorientationvr.png)

Die ausgegebenen Informationen fallen in vier Kategorien:

1. Position — Die Position des HMD entlang der drei Achsen in einem 3D-Koordinatenraum. x ist links und rechts, y ist oben und unten, und z ist zu und von dem Positionierungssensor entfernt. In WebVR werden die x-, y- und z-Koordinaten durch das Array in [`VRPose.position`](/de/docs/Web/API/VRPose/position) dargestellt.
2. Orientierung — Die Drehung des HMD um drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Drehung um die x-Achse, Yaw ist die Drehung um die y-Achse und Roll ist die Drehung um die z-Achse. In WebVR werden Pitch, Yaw und Roll durch die ersten drei Elemente des Arrays in [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) dargestellt.
3. Geschwindigkeit — Es gibt zwei Arten von Geschwindigkeiten, die in VR berücksichtigt werden müssen:

   - Linear — Die Geschwindigkeit entlang jeder der Achsen, auf der sich das HMD bewegt. Diese Informationen sind über [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) zugänglich.
   - Angular — Die Geschwindigkeit, mit der sich das HMD um eine der Achsen dreht. Diese Informationen sind über [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) zugänglich.

4. Beschleunigung — Es gibt zwei Arten von Beschleunigung, die in VR berücksichtigt werden müssen:

   - Linear — Die Beschleunigung der Bewegung entlang jeder der Achsen, auf der sich das HMD bewegt. Diese Informationen sind über [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) zugänglich.
   - Angular — Die Beschleunigung der Drehung des HMD um eine der Achsen. Diese Informationen sind über [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) zugänglich.

## Blickfeld

Das Blickfeld (Field of View, FOV) ist der Bereich, den jedes der Augen des Benutzers vernünftigerweise sehen kann. Es nimmt grob die Form einer Pyramide an, die auf einer Seite liegt, mit dem Scheitelpunkt innerhalb des Kopfes des Benutzers und dem Rest der Pyramide, die vom Auge des Benutzers ausgeht. Jedes Auge hat sein eigenes FOV, eines überlappt leicht mit dem anderen.

![Eigenschaften in Bezug auf das Blickfeld](fovrelatedproperties.png)

Das FOV wird durch die folgenden Werte definiert:

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees): Die Anzahl der Grad nach oben, in der sich das Blickfeld erstreckt.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees): Die Anzahl der Grad nach rechts, in der sich das Blickfeld erstreckt.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees): Die Anzahl der Grad nach unten, in der sich das Blickfeld erstreckt.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees): Die Anzahl der Grad nach links, in der sich das Blickfeld erstreckt.
- zNear, definiert durch [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear): Die Entfernung von der Mitte des Kopfes des Benutzers bis zum Beginn des sichtbaren FOV.
- zFar, definiert durch [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar): Die Entfernung von der Mitte des Kopfes des Benutzers bis zum Ende des sichtbaren FOV.

Die Standardwerte für diese Eigenschaften variieren leicht je nach VR-Hardware, obwohl sie im Allgemeinen etwa 53° nach oben und unten und 47° nach links und rechts betragen, wobei zNear und zFar bei etwa 0,1m und 10000m liegen.

> [!NOTE]
> Der Benutzer kann potenziell alles um sich herum sehen, was ein völlig neues Konzept für Apps und Spiele ist. Versuchen Sie, den Leuten einen Grund zu geben, sich umzublicken und zu sehen, was hinter ihnen ist — lassen Sie sie nach Dingen greifen und finden, die zu Beginn nicht sichtbar sind. Beschreiben Sie, was hinter ihrem Rücken liegt.

## Konzepte für VR-Apps

In diesem Abschnitt werden Konzepte behandelt, derer Sie sich beim Entwickeln von VR-Apps bewusst sein sollten, die Sie wahrscheinlich noch nicht berücksichtigen mussten, als Sie reguläre Apps für Mobilgeräte oder Desktops entwickelten.

### Stereoskopisches Sehen

Stereoskopisches Sehen ist das normale Sehen von Menschen und (meistens) Tieren — die Wahrnehmung zweier leicht unterschiedlicher Bilder (eines von jedem Auge) als ein einziges Bild. Dies führt zu einer Tiefenwahrnehmung, die uns hilft, die Welt in herrlichem 3D zu sehen. Um dies in VR-Apps nachzubilden, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die von den linken und rechten Augen aufgenommen werden, wenn der Benutzer das HMD verwendet.

![Wie man stereoskopische 3D-Bilder erstellt](createstereoscopicimages.png)

### Head-Tracking

Die primäre Technologie, die Ihnen das Gefühl gibt, in einer 360º-Szene präsent zu sein, dank des in das HMD integrierten Gyroskops, Accelerometers und Magnetometers (Kompass). Dies hat primäre Bedeutung, da es unsere Augen glauben lässt, wir stünden vor einem kugelförmigen Bildschirm und gibt den Benutzern eine realistische Immersion in die App-Oberfläche.

### Augenbelastung

Ein Begriff, der häufig in Bezug auf VR verwendet wird, weil er eine Hauptschwierigkeit bei der Verwendung eines HMD darstellt — wir täuschen ständig das Auge mit dem, was wir auf der App-Oberfläche zeigen, und das führt dazu, dass die Augen viel mehr arbeiten, als sie normalerweise würden, sodass die Verwendung von VR-Apps über einen längeren Zeitraum zu einer Augenbelastung führen kann.

Um diesen unerwünschten Effekt zu minimieren, müssen wir:

- Vermeiden Sie es, auf verschiedene Tiefen zu fokussieren (z. B. vermeiden Sie die Verwendung vieler Partikel mit unterschiedlichen Tiefen).
- Vermeiden Sie Augen-Konvergenz (z. B. wenn Sie ein Objekt haben, das auf die Kamera zukommt, werden Ihre Augen folgen und sich darauf konzentrieren).
- Verwenden Sie, wo möglich, dunklere Hintergründe mit gedämpfteren Farben; ein heller Bildschirm ermüdet die Augen mehr.
- Vermeiden Sie schnelle Helligkeitsänderungen.
- Vermeiden Sie die Präsentation großer Mengen Text zum Lesen. Sie sollten auch auf den Abstand zwischen den Augen/Kamera und dem zu lesenden Text achten. 0,5m ist unangenehm, während die Stereo-Wirkung bei mehr als 2m beginnt, zusammenzubrechen, daher ist eine Entfernung dazwischen ratsam.
- Seien Sie vorsichtig mit dem Abstand zwischen Objekten und der Kamera im Allgemeinen. Oculus empfiehlt 0,75m als minimalen Fokussierungsabstand.
- Verwenden Sie einen Zeiger, wenn der Benutzer mit einem Objekt in der Szene interagieren muss — das hilft ihm, es mit weniger Aufwand korrekt zu lokalisieren.

Im Allgemeinen wird die Benutzerschaft einem weniger anstrengenden Erlebnis folgen, wenn der visuelle Aufwand reduziert wird.

### Reisekrankheit

Wenn Entwickler nicht äußerste Vorsicht walten lassen, können VR-Apps tatsächlich dazu führen, dass sich ihre Benutzer krank fühlen. Dieser Effekt wird hervorgerufen, wenn die von den Augen empfangenen Reize nicht dem entsprechen, was der Körper erwartet zu empfangen.

Um die Reisekrankheit bei unseren Benutzern zu vermeiden (oder die Auswirkungen zumindest zu minimieren), müssen wir:

- Stets Head-Tracking aufrechterhalten (dies ist das Wichtigste von allem, insbesondere, wenn es mitten im Erlebnis verloren geht).
- Verwenden Sie konstante Geschwindigkeit; vermeiden Sie Beschleunigungs- oder Bremsbewegungen der Kamera (verwenden Sie lineare Beschleunigung, und vermeiden Sie, soweit möglich, die Verwendung von Easing).
- Halten Sie die Bildfrequenz hoch (weniger als 30fps ist unangenehm).
- Vermeiden Sie scharfe und/oder unerwartete Kameradrehungen.
- Fügen Sie feste Bezugspunkte für unveränderliche Objekte hinzu (andernfalls glaubt der Benutzer, sich zu bewegen).
- Verwenden Sie keine Tiefenschärfe oder Bewegungsunschärfe als Nachbearbeitung, weil Sie nicht wissen, wo die Augen fokussiert werden.
- Vermeiden Sie Helligkeitsänderungen (verwenden Sie niedrigfrequente Texturen oder Nebeleffekte, um sanfte Lichtübergänge zu schaffen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Teilen des Körpers verursachen.

### Latenz

Latenz ist die Zeit zwischen der physischen Kopfbewegung und der aktualisierten visuellen Anzeige auf dem Bildschirm eines HMD, die in die Augen des Benutzers gelangt. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen wahrnehmen — wir müssen die Latenz unter 20 Millisekunden halten, damit sie nicht wahrnehmbar ist (zum Beispiel hat ein 60Hz-Monitor eine Reaktionszeit von 16 ms).

Das Oculus Rift-Headset hat eine Latenz von 20 ms oder weniger, aber bei auf mobilen Geräten basierenden Setups hängt dies stark von der Rechenleistung des Smartphones und anderen Fähigkeiten ab.

### Bildfrequenz (Bilder pro Sekunde / FPS)

Basierend auf der Wikipedia-Definition ist die Bildfrequenz die Häufigkeit, mit der ein Bildgebungsgerät einzigartige aufeinanderfolgende Bilder, sogenannte Frames, produziert. Eine Rate von 60fps ist für ein reibungsloses Benutzererlebnis akzeptabel, aber abhängig von der Leistung des Geräts, auf dem die App läuft, oder der Komplexität der Inhalte, die Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30fps wird im Allgemeinen als ruckelig angesehen und ist für den Benutzer lästig.

Eine der schwierigsten Aufgaben ist es, eine konstante und hohe Bildfrequenz zu halten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu machen. Es ist vorzuziehen, eine anständige Bildfrequenz zu haben, die sich nicht ständig oder plötzlich ändert; dafür müssen Sie so wenige notwendige Objekte wie möglich in die Szene bewegen und (im Falle von WebGL) versuchen, die Anzahl der Zeichnungsaufrufe zu reduzieren.

### Pupillendistanz (IPD)

Basierend auf der Wikipedia-Definition ist die Pupillendistanz der Abstand zwischen den Mittelpunkten der Pupillen der beiden Augen. IPD ist entscheidend für das Design von binokularen Betrachtungssystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Betrachtungssystems positioniert werden müssen.

Die Pupillendistanz (IPD) kann in WebVR mit [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) berechnet werden, was der Hälfte der IPD entspricht.

Dieser Wert wird vom HMD zurückgegeben und sein Wert kann bei etwa 60 bis 70 mm liegen; im Fall einiger HMDs wie Oculus Rift können Sie Ihre eigene IPD einstellen. Normalerweise ändern wir diesen Wert nicht, aber Sie können damit spielen, um den Maßstab der gesamten Szene zu ändern. Wenn Ihre IPD beispielsweise auf 6000 mm eingestellt ist, würde der Benutzer die Szene wie ein Riese in einer Welt der Liliputaner betrachten.

### Freiheitsgrade (DoF)

DoF bezieht sich auf die Bewegung eines starren Körpers im Raum. Es gibt keine Einheitlichkeit bei der Erstellung von Akronymen für diesen Begriff — wir finden Referenzen zu 3DoF im Kontext von Sensoren, die nur die Drehbewegung des Kopfes erfassen, und 6DoF, wenn ein Input es uns ermöglicht, Position und Orientierung gleichzeitig zu kontrollieren. Wir finden sogar manchmal Referenzen zu 9DoF, wenn die Hardware drei Sensoren wie Gyroskop, Accelerometer und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF-Werte liefern tatsächlich ein 6 Freiheitsgrade-Tracking.

DoF steht in direktem Zusammenhang mit dem Tracking der Kopfbewegung des Benutzers.

### Kegel des Fokus

Obwohl unser Sichtfeld viel größer ist (ungefähr 180º), müssen wir darauf achten, dass wir nur in einem kleinen Teil dieses Sichtfelds Symbole erkennen (die mittleren 60º) oder Text lesen können (die mittleren 10º). Wenn Sie keinen Augenerkennungssensor haben, nehmen wir an, dass sich der Fokus der Augen des Benutzers auf den Bildschirmmittelpunkt richtet.

Diese Einschränkung ist wichtig zu berücksichtigen, wenn Sie entscheiden, wo Sie visuelle Elemente auf der App-Oberfläche platzieren — zu weit am Rand des Fokus-Kegels kann wesentlich schneller zu einer Augenbelastung führen.

### 3D-Positional-Audio

3D-Positional-Audio bezieht sich auf eine Gruppe von Effekten, die Audio manipulieren, um zu simulieren, wie es in einem dreidimensionalen Raum klingen würde.

Dies steht in direktem Zusammenhang mit dem [Web Audio API](/de/docs/Web/API/Web_Audio_API), die es uns ermöglicht, Sounds auf Objekten, die wir auf der Oberfläche haben, zu platzieren oder Audio abhängig von dem Bereich der Szene auszulösen, auf den sich der Benutzer hin bewegt oder schaut.
