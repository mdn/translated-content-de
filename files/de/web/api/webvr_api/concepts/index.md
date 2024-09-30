---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, in wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte nur eine kleine Anzahl von Geräten.

Dieser Artikel behandelt einige der Konzepte und Theorien hinter der virtuellen Realität (VR). Wenn Sie neu in diesem Bereich sind, ist es sinnvoll, sich mit diesen Themen vertraut zu machen, bevor Sie mit dem Codieren beginnen.

## Die Geschichte der VR

Virtuelle Realität ist nichts Neues — das Konzept geht weit über die Oculus Rift Kickstarter-Kampagne von 2012 hinaus. Menschen experimentieren schon seit Jahrzehnten damit.

1939 wurde das [View-Master-Gerät](https://en.wikipedia.org/wiki/View-Master) entwickelt, das es Menschen ermöglichte, 3D-Bilder zu sehen. Das Gerät zeigte Bilder, die auf Pappscheiben gespeichert waren und stereoskopische 3D-Paare kleiner Farbfotografien enthielten. Nach Jahren der Entwicklung zeigte das Militär Interesse an der Nutzung dieser Technologie, und 1961 wurde das Projekt Headsight ins Leben gerufen — dieses beinhaltete einen Helm mit einem Videoschirm und einem Kopfverfolgungssystem.

Im Laufe der nächsten Jahrzehnte wurden verschiedene Experimente durchgeführt, aber es beschränkte sich nicht mehr nur auf Labore und Schlachtfelder. Schließlich übernahm die Popkultur, indem Filmregisseure ihre Visionen der virtuellen Realität zeigten. Filme wie Tron (1982) und The Matrix (1999) wurden geschaffen, in denen Menschen sich in eine ganz neue Cyber-Welt versetzen konnten oder in einer gefangen waren, ohne es zu wissen und sie als die reale Welt akzeptierten.

Die ersten VR-Spieleversuche waren groß und teuer — 1991 entwickelte die Virtuality Group einen VR-fähigen Spielhallautomaten mit Brille und portierte beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte ihre VR-Brille auf der Consumer Electronics Show 1993 vor. Unternehmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt — wir mussten bis 2012 warten, um ein echtes Beispiel eines erfolgreichen VR-Projekts zu sehen.

### VR in der heutigen Zeit

Was ist also neu? VR-Hardware muss hochpräzise, latenzarme Daten liefern, um eine akzeptable Benutzererfahrung zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsstark genug sein, um all diese Informationen zu verarbeiten. Erst vor kurzem wurde solche Genauigkeit und Leistung zu einem erschwinglichen Preis verfügbar, wenn überhaupt. Frühe VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie das [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte Dollar erhältlich sind, und günstigere Lösungen sind verfügbar — gerätebasierte Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Softwareseite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993) Software entwickelt, die mit der VIVE und anderen Lösungen kompatibel ist und den Zugriff auf Software wie eine benutzerfreundliche VR-Oberfläche ermöglicht.

Die Technologie selbst ist vorhanden, und die teureren Headsets werden mit der Zeit nur noch günstiger, sodass in Zukunft mehr Menschen virtuelle Realität selbst erleben können.

### Eingabegeräte

Die Handhabung von Eingaben für virtuelle Realität ist ein interessantes Thema — es ist eine völlig neue Erfahrung, für die spezielle Benutzeroberflächen entworfen werden müssen. Es gibt verschiedene Ansätze, von klassischen Tastatur und Maus bis zu neueren wie Leap Motion und den VIVE-Controllern. Es ist ein Prozess des Ausprobierens, um herauszufinden, was in bestimmten Situationen funktioniert und welche Eingaben am besten zu Ihrem Spieltyp passen.

## VR-Hardware-Setup

Es gibt zwei Haupttypen von Setups: mobil oder computerverbunden. Ihre minimalen Hardware-Anforderungen sind wie folgt:

- Mobil: Ein Kopfmontiertes Display (HMD) wird unter Verwendung eines Smartphones erstellt — das als VR-Display dient — montiert in einer VR-Halterung wie Google Cardboard, die die erforderlichen Linsen enthält, um eine stereoskopische Sicht auf das zu bieten, was auf dem mobilen Bildschirm projiziert wird.![Mobilbasiertes VR-Setup](mobilebasedvrsetup.png)
- Computerverbunden: Ein VR-Setup ist mit Ihrem Computer verbunden — dies besteht aus einem Kopfmontierten Display (HMD) mit einem hochauflösenden, landschaftsorientierten Bildschirm, auf dem die Visualisierungen für das linke und rechte Auge angezeigt werden, sowie einer Linse für jedes Auge, um die Trennung der Szenen des linken und rechten Auges (stereoskopische Sicht) zu fördern. Das Setup enthält auch einen separaten Positionssensor, der die Position/Orientierung/Geschwindigkeit/Beschleunigung Ihres Kopfes bestimmt und diese Informationen ständig an den Computer weitergibt. ![Computerbasiertes VR-Setup](computerbasedvrsetup.png)

> [!NOTE]
> Computerverbundene Systeme enthalten manchmal keinen Positionssensor, aber in der Regel schon.

Andere Hardware, die die VR-Erfahrung ergänzt, umfasst:

- **Einen Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt, wodurch diese zu einem interessanten Controller und einem Objekt in VR-Spielwelten werden kann. Der fortschrittlichste Sensor bis dato ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (verbunden mit dem Oculus Rift) und auch mit einem mobilen Gerät arbeiten kann (letzteres befindet sich in einer Testphase).
- **Ein Gamepad**: Wir können einen XBox-Controller oder ähnliches so konfigurieren, dass er wie eine Tastatur im Browser funktioniert — dies bietet weitere Interaktionsmöglichkeiten mit einer VR-Webseite. Es gibt einige Gamepads, die mit einem mobilen Setup arbeiten, aber diese sind über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Eye-Tracking-Sensor (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen liest.
- **Ein Gesichtsbewegungstracker (experimentell)**: Forscher der University of Southern California und der Oculus-Abteilung von Facebook haben neue Wege getestet, Gesichtsausdrücke zu verfolgen und auf eine virtuelle Figur zu übertragen.
- **Ein komplexeres Positionserkennungssystem**: Beispielsweise verfügt das HTC VIVE über zwei Positionssensoren, die in gegenüberliegenden Ecken eines Raumes sitzen, alles abbilden und so VR-Erlebnisse in Räumen von bis zu 5m x 5m ermöglichen.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie oben erwähnt, erkennt der Positionssensor Informationen über das HMD und gibt diese ständig aus, wodurch Sie eine Szene kontinuierlich basierend auf Kopfbewegungen, Rotation usw. aktualisieren können. Aber was genau sind die Informationen?

![Position und Orientierung VR-Setup](positionorientationvr.png)

Die ausgegebenen Informationen fallen in vier Kategorien:

1. Position — Die Position des HMD entlang der drei Achsen in einem 3D-Koordinatenraum. x ist links und rechts, y ist oben und unten, und z ist hin- und her zum Positionssensor. In WebVR werden die x-, y- und z-Koordinaten durch das Array in [`VRPose.position`](/de/docs/Web/API/VRPose/position) dargestellt.
2. Orientierung — Die Rotation des HMD um die drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Rotation um die x-Achse, yaw ist die Rotation um die y-Achse, und roll ist die Rotation um die z-Achse. In WebVR werden Pitch, Yaw und Roll durch die ersten drei Elemente des Arrays in [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) dargestellt.
3. Geschwindigkeit — Es gibt zwei Arten von Geschwindigkeit in VR zu beachten:

   - Lineare — Die Geschwindigkeit entlang einer der Achsen, auf denen sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) abgerufen werden.
   - Winkelgeschwindigkeit — Die Geschwindigkeit, mit der das HMD um eine der Achsen rotiert. Diese Informationen können mit [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) abgerufen werden.

4. Beschleunigung — Es gibt zwei Arten von Beschleunigung in VR zu beachten:

   - Lineare — Die Reisebeschleunigung entlang einer der Achsen, auf denen sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) abgerufen werden.
   - Winkelbeschleunigung — Die Beschleunigung der Rotation des HMD um eine der Achsen. Diese Informationen können mit [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) abgerufen werden.

## Sichtfeld

Das Sichtfeld (Field of View, FOV) ist der Bereich, den jedes Auge des Nutzers vernünftigerweise sehen kann. Es nimmt in etwa die Form einer auf der Seite liegenden Pyramide an, mit der Spitze im Kopf des Nutzers und dem Rest der Pyramide, die vom Auge des Nutzers ausgeht. Jedes Auge hat sein eigenes FOV, wobei sich die beiden leicht überlappen.

![FOV-bezogene Eigenschaften](fovrelatedproperties.png)

Das FOV wird durch die folgenden Werte definiert:

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees): Die Anzahl der Grad, in die sich das Sichtfeld nach oben erstreckt.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees): Die Anzahl der Grad, in die sich das Sichtfeld nach rechts erstreckt.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees): Die Anzahl der Grad, in die sich das Sichtfeld nach unten erstreckt.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees): Die Anzahl der Grad, in die sich das Sichtfeld nach links erstreckt.
- zNear, definiert durch [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear): Die Entfernung von der Mitte des Kopfes des Nutzers zum Beginn des sichtbaren FOV.
- zFar, definiert durch [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar): Die Entfernung von der Mitte des Kopfes des Nutzers zum Ende des sichtbaren FOV.

Die Standardwerte für diese Eigenschaften variieren leicht je nach VR-Hardware, obwohl sie in der Regel etwa 53° nach oben und unten und 47° nach links und rechts betragen, wobei zNear und zFar etwa 0,1m bzw. 10000m sind.

> [!NOTE]
> Der Nutzer kann möglicherweise alles um sich herum sehen, was ein völlig neues Konzept für Apps und Spiele darstellt. Versuchen Sie, den Menschen einen Grund zu geben, sich umzusehen und zu entdecken, was hinter ihnen ist — lassen Sie sie nach Dingen greifen, die zu Beginn noch nicht sichtbar sind. Beschreiben Sie, was sich hinter ihnen befindet.

## Konzepte für VR-Apps

In diesem Abschnitt werden Konzepte behandelt, die bei der Entwicklung von VR-Apps zu berücksichtigen sind, mit denen Sie sich wahrscheinlich bisher noch nicht auseinandersetzen mussten, wenn Sie herkömmliche Apps für mobile Geräte oder Desktops entwickelt haben.

### Stereoskopische Sicht

Stereoskopische Sicht ist die normale Sichtweise, die Menschen und (die meisten) Tiere haben — die Wahrnehmung von zwei leicht unterschiedlichen Bildern (eines pro Auge) als ein einzelnes Bild. Dies führt zur Tiefenwahrnehmung und hilft uns, die Welt in herrlichem 3D zu sehen. Um dies in VR-Apps nachzustellen, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die von den linken und rechten Augen wahrgenommen werden, wenn der Benutzer das HMD verwendet.

![Wie man stereoskopische 3D-Bilder erstellt](createstereoscopicimages.png)

### Kopfverfolgung

Die primäre Technologie, die es Ihnen ermöglicht, sich in einer 360º-Szene präsent zu fühlen, dank des Gyroskops, Beschleunigungsmessers und Magnetometers (Kompass) im HMD.
Sie hat eine herausragende Bedeutung, da sie unsere Augen glauben lässt, dass wir uns vor einem kugelförmigen Bildschirm befinden, und den Nutzern realistische Immersion innerhalb des App-Leinwands bietet.

### Augenbelastung

Ein häufig verwendeter Begriff in der VR, da es ein großes Handicap bei der Verwendung eines HMD ist — wir täuschen das Auge ständig mit dem, was wir auf der App-Leinwand zeigen, und dies führt dazu, dass die Augen viel mehr arbeiten als gewöhnlich, sodass die Verwendung von VR-Apps über einen längeren Zeitraum zu Augenbelastung führen kann.

Um diesen unerwünschten Effekt zu minimieren, sollten wir:

- Vermeiden Sie fokussieren auf verschiedene Tiefen (z. B. vermeiden Sie die Verwendung vieler Partikel mit unterschiedlichen Tiefen).
- Vermeiden Sie Augen-Konvergenz (z. B. wenn Sie ein Objekt haben, das sich auf die Kamera zu bewegt, werden Ihre Augen es verfolgen und darauf konvergieren).
- Verwenden Sie dunklere Hintergründe mit gedämpfteren Farben, wo möglich; ein heller Bildschirm wird die Augen schneller ermüden.
- Vermeiden Sie schnelle Helligkeitswechsel.
- Vermeiden Sie es, dem Nutzer große Textmengen zum Lesen zu präsentieren. Sie sollten auch vorsichtig mit dem Abstand zwischen den Augen/Kamera und dem zu lesenden Text sein. 0,5 m sind unbequem, während bei mehr als 2 m der Stereoeffekt zu zerfallen beginnt, also wird ein Abstand dazwischen empfohlen.
- Seien Sie vorsichtig mit dem Abstand zwischen Objekten und der Kamera im Allgemeinen. Oculus empfiehlt 0,75 m als Mindestabstand für den Fokus.
- Verwenden Sie einen Zeiger, wenn der Nutzer mit einem Objekt in der Szene interagieren muss — dies wird ihm helfen, es mit weniger Aufwand korrekt anzuvisieren.

Im Allgemeinen bietet der Weg des geringsten visuellen Aufwands dem Nutzer eine weniger anstrengende Erfahrung.

### Bewegungskrankheit

Wenn Entwickler nicht äußerste Vorsicht walten lassen, können VR-Apps tatsächlich dazu führen, dass sich Nutzer krank fühlen. Dieser Effekt wird erzeugt, wenn die Reize, die die Augen empfangen, nicht dem entsprechen, was der Körper erwartet.

Um Bewegungskrankheit bei unseren Nutzern zu vermeiden (oder zumindest die Auswirkungen zu minimieren), sollten wir:

- Immer Kopfverfolgung beibehalten (dies ist der wichtigste Punkt, insbesondere wenn es in der Mitte der Erfahrung auftritt).
- Verwendung von konstanter Geschwindigkeit; vermeiden Sie Beschleunigungen oder Verzögerungen von Kamerabewegungen (verwenden Sie lineare Beschleunigung und vermeiden Sie, wo möglich, "Easing").
- Halten Sie die Bildrate hoch (weniger als 30 fps ist unbequem).
- Vermeiden Sie scharfe und/oder unerwartete Kameradrehungen.
- Fügen Sie feste Bezugspunkte für fixe Objekte hinzu (ansonsten wird der Nutzer glauben, dass er sich bewegt).
- Verwenden Sie kein Tiefenschärfe- oder Bewegungsunschärfe-Nachbearbeitung, weil Sie nicht wissen, wo die Augen fokussieren werden.
- Vermeiden Sie Helligkeitsänderungen (verwenden Sie Texturen niedriger Frequenz oder Nebeleffekte, um nahtlose Lichtübergänge zu erzeugen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Körperteilen auslösen.

### Latenz

Latenz ist die Zeit zwischen der physischen Kopfbewegung und der Aktualisierung des visuellen Displays auf den Augen des Nutzers vom Bildschirm eines HMD. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen wahrnehmen — wir müssen die Latenz unter 20 Millisekunden halten, damit sie unmerklich sind (zum Beispiel hat ein 60Hz-Monitor eine Reaktionszeit von 16 ms).

Das Oculus Rift-Headset hat eine Latenz von 20 ms oder weniger, aber bei gerätebasierten Setups hängt es stark von der CPU-Leistung des Smartphones und anderen Fähigkeiten ab.

### Bildrate (Bilder pro Sekunde / FPS)

Basierend auf der Definition von Wikipedia ist Bildrate die Frequenz, mit der ein Bildgeräte aufeinanderfolgende Einzelbilder, genannt Bilder, produziert. Eine Rate von 60 fps ist eine akzeptable Rate für eine flüssige Benutzererfahrung, aber je nach Leistung der Maschine, auf der die App ausgeführt wird, oder der Komplexität der Inhalte, die Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30 fps wird allgemein als ruckelig empfunden und ist für den Nutzer störend.

Eine der schwierigsten Aufgaben ist es, einen konstanten und hohen Bildratenwert beizubehalten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu gestalten. Es ist besser, eine anständige Bildrate zu haben, die sich nicht ständig oder abrupt ändert; hierfür müssen Sie so wenige notwendige Objekte wie möglich in die Szene bewegen und (im Fall von WebGL) versuchen, Draw-Calls zu reduzieren.

### Pupillendistanz (IPD)

Basierend auf der Wikipedia-Definition ist IPD der Abstand zwischen den Zentren der Pupillen der beiden Augen. IPD ist entscheidend für die Konstruktion von binokularen Betrachtungssystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Betrachtungssystems positioniert werden müssen.

Die Pupillendistanz (IPD) kann in WebVR mit [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) berechnet werden, was der Hälfte der IPD entspricht.

Dieser Wert wird vom HMD zurückgegeben und kann etwa 60 bis 70 mm betragen; im Fall einiger HMDs wie dem Oculus Rift können Sie Ihre eigene IPD einstellen. Normalerweise ändern wir diesen Wert nicht, aber Sie können damit spielen, um den Maßstab der gesamten Szene zu ändern. Wenn Ihre IPD beispielsweise auf 6000 mm eingestellt ist, würde der Benutzer die Szene wie ein Riese betrachten, der eine Lilliputaner-Welt ansieht.

### Freiheitsgrade (DoF)

Die Freiheitsgrade (Degrees of Freedom, DoF) beziehen sich auf die Bewegung eines starren Körpers im Raum. Es gibt keine Einheitlichkeit bei der Erstellung von Akronymen für diesen Begriff — wir finden Referenzen zu 3DoF im Kontext von Sensoren, die nur die Rotationskopfverfolgung erkennen, und 6DoF, wenn ein Input es uns erlaubt, Position und Orientierung gleichzeitig zu steuern. Wir finden sogar manchmal 9DoF-Referenzen, wenn die Hardware drei Sensoren wie Gyroskop, Beschleunigungsmesser und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF-Werte liefern tatsächlich eine 6-Grad-of-Freedom-Tracking.

DoF ist direkt mit der Verfolgung der Kopfbewegung des Nutzers verbunden.

### Fokuskonus

Obwohl unser Sichtfeld viel größer ist (ungefähr 180º), müssen wir uns bewusst sein, dass Sie nur in einem kleinen Teil dieses Feldes Symbole wahrnehmen (die mittleren 60º) oder Texte lesen können (die mittleren 10º). Wenn Sie keinen Eye-Tracking-Sensor haben, nehmen wir an, dass sich der Mittelpunkt des Bildschirms dort befindet, wo der Nutzer seine Augen fokussiert.

Diese Einschränkung ist wichtig zu beachten, wenn man entscheidet, wo man visuelle Elemente auf der App-Leinwand platzieren sollte — zu weit am Rand des Fokuskonus kann viel schneller zu Augenbelastung führen.

### 3D-Positionsaudio

3D-Positionsaudio bezieht sich auf eine Gruppe von Effekten, die Audio manipulieren, um zu simulieren, wie es in einem dreidimensionalen Raum klingen würde.

Dies hängt direkt mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) zusammen, die es uns ermöglicht, Klänge auf Objekten zu platzieren, die wir auf der Leinwand haben, oder Audio zu starten, abhängig vom Teil der Szene, zu der der Nutzer unterwegs ist oder den er betrachtet.
