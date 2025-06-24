---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR-API wurde durch die [WebXR-API](/de/docs/Web/API/WebXR_Device_API) ersetzt. Die WebVR-API wurde nie als Standard ratifiziert, in nur sehr wenigen Browsern standardmäßig implementiert und unterstützt nur eine geringe Anzahl von Geräten.

Dieser Artikel behandelt einige der Konzepte und Theorien hinter der virtuellen Realität (VR). Wenn Sie neu in diesem Bereich sind, lohnt es sich, diese Themen zu verstehen, bevor Sie mit dem Programmieren beginnen.

## Die Geschichte der VR

Virtuelle Realität ist nichts Neues — das Konzept reicht weit zurück, noch vor die Oculus Rift Kickstarter-Kampagne von 2012. Menschen experimentieren seit Jahrzehnten damit.

1939 wurde das [View-Master-Gerät](https://en.wikipedia.org/wiki/View-Master) entwickelt, das es Menschen ermöglicht, 3D-Bilder zu sehen. Das Gerät zeigte Bilder, die auf Kartonscheiben gespeichert waren und stereoskopische 3D-Paare von kleinen Farbfotografien enthielten. Nach Jahren der Entwicklung zeigte das Militär Interesse an dieser Technologie, und 1961 wurde das Projekt Headsight ins Leben gerufen — es beinhaltete einen Helm mit einem Videobildschirm und einem Kopfverfolgungssystem.

In den folgenden Jahrzehnten wurden verschiedene Experimente durchgeführt, jedoch nicht nur in wissenschaftlichen Labors und auf Schlachtfeldern. Schließlich übernahm die Popkultur, und Filmregisseure zeigten ihre Visionen von virtueller Realität. Filme wie Tron (1982) und The Matrix (1999) wurden geschaffen, in denen Menschen sich in eine völlig neue Cyberwelt versetzen oder in einer gefangen werden konnten, ohne es zu wissen, und sie als die reale Welt akzeptieren.

Die ersten VR-Gaming-Versuche waren groß und teuer — 1991 erstellte die Virtuality Group einen VR-fähigen Arcade-Automaten mit Brille und übertrug beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte 1993 auf der Consumer Electronics Show ihre VR-Brille vor. Firmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt — wir mussten bis 2012 warten, um ein echtes Beispiel für ein erfolgreiches VR-Projekt zu sehen.

### VR in jüngster Zeit

Was ist jetzt neu? VR-Hardware muss hochpräzise und latenzarme Daten liefern, um eine akzeptable Benutzererfahrung zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsstark genug sein, um all diese Informationen zu verarbeiten. Erst kürzlich war eine solche Genauigkeit und Leistung zu erschwinglichen Kosten verfügbar, wenn überhaupt. Frühe VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie das [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte von Dollar erhältlich sind, und billigere Lösungen sind verfügbar — auf mobilen Geräten basierende Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Softwareseite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993)-Software erstellt, die mit der VIVE und anderen Lösungen kompatibel ist und den Zugriff auf Software wie eine nutzbare VR-Benutzeroberfläche ermöglicht.

Die Technologie ist da, und die teureren Headsets werden mit der Zeit nur günstiger, sodass in Zukunft mehr Menschen virtuelle Realität selbst erleben können.

### Eingabegeräte

Die Handhabung von Eingaben für virtuelle Realität ist ein interessantes Thema — es ist eine völlig neue Erfahrung, für die spezielle Benutzeroberflächen entworfen werden müssen. Derzeit gibt es verschiedene Ansätze, von der klassischen Tastatur und Maus bis hin zu neuen wie Leap Motion und den VIVE-Controllern. Es ist eine Frage des Ausprobierens, um herauszufinden, was in bestimmten Situationen funktioniert und welche Eingaben am besten zu Ihrem Spieltyp passen.

## VR Hardware Setup

Es gibt zwei Haupttypen von Setups, mobil oder computerverbunden. Ihre Mindesthardwareanforderungen sind wie folgt:

- Mobil: Ein Head-Mounted Display (HMD) wird mit einem Smartphone erstellt — das als VR-Display fungiert — und in einem VR-Halter wie Google Cardboard montiert, der die erforderlichen Linsen enthält, um stereoskopisches Sehen von dem zu ermöglichen, was auf dem Mobilbildschirm projiziert wird.![Mobil basiertes VR-Setup](mobilebasedvrsetup.png)
- Computerverbunden: Ein VR-Setup ist an Ihren Computer angeschlossen — es besteht aus einem Head-Mounted Display (HMD), das einen hochauflösenden Bildschirm im Querformat enthält, auf den die visuellen Inhalte für das linke und rechte Auge angezeigt werden. Es enthält auch eine Linse für jedes Auge, um die Trennung der Szenen des linken und rechten Auges (stereoskopisches Sehen) zu fördern. Das Setup umfasst auch einen separaten Positionssensor, der die Position/Ausrichtung/Geschwindigkeit/Beschleunigung Ihres Kopfes ermittelt und diese Informationen ständig an den Computer weitergibt. ![Computerbasiertes VR-Setup](computerbasedvrsetup.png)

> [!NOTE]
> Computergestützte Systeme enthalten manchmal keinen Positionssensor, aber normalerweise schon.

Andere Hardware, die das VR-Erlebnis ergänzt, umfasst:

- **Einen Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt und diese zu einem interessanten Controller und einem Objekt in VR-Spielwelten macht. Der fortschrittlichste bis heute ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (angeschlossen an das Oculus Rift) funktioniert und auch mit einem mobilen Gerät verbunden werden kann (letzteres befindet sich in einer Experimentierphase).
- **Ein Gamepad**: Wir können einen XBox-Controller oder ähnliche so konfigurieren, dass sie im Browser wie eine Tastatur funktionieren — dies bietet weitere Interaktionsmöglichkeiten mit einer VR-Webseite. Es gibt einige Gamepads, die mit einem mobilen Setup funktionieren, aber diese werden über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Augensensor (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen liest.
- **Ein Tracker für Gesichtsausdrücke (experimentell)**: Forscher der University of Southern California und Facebooks Oculus-Abteilung testen neue Möglichkeiten, Gesichtsausdrücke zu verfolgen und auf einen virtuellen Charakter zu übertragen.
- **Ein komplexeres Positionssensorsystem**: Zum Beispiel verfügt das HTC VIVE über zwei Positionssensoren, die in gegenüberliegenden Ecken eines Raumes sitzen, diesen kartografieren und VR-Erlebnisse in Räumen von bis zu 5m x 5m ermöglichen.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie oben erwähnt, erkennt der Positionssensor Informationen über das HMD und gibt diese ständig aus, damit Sie eine Szene kontinuierlich nach Kopfbewegungen, Rotation usw. aktualisieren können. Aber welche Informationen genau sind das?

![Position und Orientierung VR-Setup](positionorientationvr.png)

Die Ausgabeinformation fällt in vier Kategorien:

1. Position — Die Position des HMD entlang der drei Achsen in einem 3D-Koordinatenraum. x ist nach links und rechts, y nach oben und unten und z auf den Positionssensor zu und von ihm weg. In WebVR werden die x-, y- und z-Koordinaten durch das Array in [`VRPose.position`](/de/docs/Web/API/VRPose/position) dargestellt.
2. Orientierung — Die Rotation des HMD um die drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Drehung um die x-Achse, Gier ist die Drehung um die y-Achse, und Roll ist die Drehung um die z-Achse. In WebVR werden Pitch, Gier und Roll durch die ersten drei Elemente des Arrays in [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) dargestellt.
3. Geschwindigkeit — In VR gibt es zwei Arten von Geschwindigkeit zu beachten:

   - Linear — Die Geschwindigkeit entlang einer der Achsen, auf der sich das HMD bewegt. Diese Information kann über [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) abgerufen werden.
   - Winkel — Die Geschwindigkeit, mit der sich das HMD um eine der Achsen dreht. Diese Information kann über [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) abgerufen werden.

4. Beschleunigung — In VR gibt es zwei Arten von Beschleunigung zu beachten:
   - Linear — Die Beschleunigung der Bewegung entlang einer der Achsen, auf der sich das HMD bewegt. Diese Information kann über [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) abgerufen werden.
   - Winkel — Die Beschleunigung der Rotation des HMD um eine der Achsen. Diese Information kann über [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) abgerufen werden.

## Sichtfeld

Das Sichtfeld (FOV) ist der Bereich, den jedes der Augen des Benutzers vernünftigerweise sehen kann. Es nimmt grob die Form einer umgelegten Pyramide an, mit dem Scheitelpunkt im Kopf des Benutzers und dem Rest der Pyramide, der vom Auge des Benutzers ausgeht. Jedes Auge hat sein eigenes Sichtfeld, das sich in einem Teil leicht überlappt.

![FOV-bezogene Eigenschaften](fovrelatedproperties.png)

Das Sichtfeld wird durch die folgenden Werte definiert:

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees): Der Gradbereich, in dem sich das Sichtfeld nach oben erstreckt.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees): Der Gradbereich, in dem sich das Sichtfeld nach rechts erstreckt.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees): Der Gradbereich, in dem sich das Sichtfeld nach unten erstreckt.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees): Der Gradbereich, in dem sich das Sichtfeld nach links erstreckt.
- zNear, definiert durch [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear): Der Abstand von der Mitte des Kopfes des Benutzers bis zum Beginn des sichtbaren Sichtfelds.
- zFar, definiert durch [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar): Der Abstand von der Mitte des Kopfes des Benutzers bis zum Ende des sichtbaren Sichtfelds.

Die Standardwerte für diese Eigenschaften variieren leicht je nach VR-Hardware, obwohl sie in der Regel bei etwa 53° oben und unten und 47° links und rechts liegen, mit zNear und zFar bei etwa 0,1 m bzw. 10.000 m.

> [!NOTE]
> Der Benutzer kann potenziell alles um sich herum sehen, was ein völlig neues Konzept für Apps und Spiele ist. Versuchen Sie, den Leuten einen Grund zu geben, um sich umzusehen und herauszufinden, was sich hinter ihnen befindet — lassen Sie sie nach Dingen suchen, die zu Beginn nicht sichtbar sind. Beschreiben Sie, was sich hinter ihrem Rücken befindet.

## Konzepte für VR-Apps

Dieser Abschnitt behandelt Konzepte, deren Sie sich bewusst sein sollten, wenn Sie VR-Apps entwickeln, die Sie wahrscheinlich bei der Entwicklung herkömmlicher Apps für Mobilgeräte oder Desktops nicht berücksichtigen mussten.

### Stereoskopisches Sehen

Stereoskopisches Sehen ist das normale Sehen von Menschen (und meistens Tieren) — die Wahrnehmung von zwei leicht unterschiedlichen Bildern (eines von jedem Auge) als ein einziges Bild. Dies führt zu Tiefenwahrnehmung, wodurch wir die Welt in herrlichem 3D sehen können. Um dies in VR-Apps zu rekonstruieren, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die von den linken und rechten Augen wahrgenommen werden, wenn der Benutzer das HMD trägt.

![Wie man stereoskopische 3D-Bilder erstellt](createstereoscopicimages.png)

### Kopfverfolgung

Die primäre Technologie, die verwendet wird, um ein Gefühl der Präsenz in einer 360º-Szene zu schaffen, dank des Gyroskops, Beschleunigungsmessers und Magnetometers (Kompass) im HMD. Sie hat eine primäre Bedeutung, da sie unsere Augen glauben lässt, dass wir vor einem kugelförmigen Bildschirm stehen und Benutzern realistische Immersion in der App-Leinwand bietet.

### Augenbelastung

Ein Begriff, der in VR häufig verwendet wird, weil er als großes Handicap bei der Verwendung eines HMD gilt — wir täuschen das Auge ständig mit dem, was wir in der App-Leinwand zeigen, und dies führt dazu, dass die Augen viel mehr Arbeit leisten, als sie normalerweise tun würden, sodass die Verwendung von VR-Apps über längere Zeiträume zu Augenbelastung führen kann.

Um diesen unerwünschten Effekt zu minimieren, müssen wir:

- Vermeiden, auf unterschiedlichen Tiefen zu fokussieren (z.B. vermeiden Sie viele Partikel mit unterschiedlichen Tiefen).
- Augen-Konvergenz vermeiden (z.B. wenn Sie ein Objekt haben, das sich auf die Kamera zubewegt, werden Ihre Augen ihm folgen und sich darauf konzentrieren).
- Dunklere Hintergründe mit gedämpfteren Farben verwenden, wo möglich; ein heller Bildschirm macht die Augen müder.
- Schnell ändernde Helligkeit vermeiden.
- Vermeiden, dem Benutzer große Mengen an Text zum Lesen zu präsentieren. Sie sollten auch vorsichtig mit der Distanz zwischen den Augen/Kamera und dem zu lesenden Text sein. 0,5 m ist unangenehm, während ab mehr als 2 m der Stereo-Effekt zu zerbrechen beginnt, daher wird etwas dazwischen empfohlen.
- Vorsicht walten lassen bei der Entfernung zwischen Objekten und der Kamera im Allgemeinen. Oculus empfiehlt eine Mindestdistanz von 0,75 m zum Fokussieren.
- Einen Zeiger verwenden, wenn der Benutzer mit einem Objekt in der Szene interagieren muss — das wird ihm helfen, korrekt darauf zu deuten mit weniger Anstrengung.

Im Allgemeinen bietet der Weg des geringsten visuellen Aufwands dem Benutzer ein weniger ermüdendes Erlebnis.

### Bewegungskrankheit

Wenn Entwickler nicht äußerst sorgfältig sind, können VR-Apps tatsächlich dazu führen, dass sich ihre Benutzer krank fühlen. Dieser Effekt tritt auf, wenn die Reize, die die Augen empfangen, nicht dem entsprechen, was der Körper erwartet zu empfangen.

Um zu vermeiden, dass unseren Benutzern Bewegungskrankheit verursacht wird (oder zumindest die Effekte zu minimieren), müssen wir:

- Immer Kopfverfolgung beibehalten (das ist das Wichtigste von allem, besonders wenn es mitten im Erlebnis auftritt).
- Konstante Geschwindigkeit verwenden; Beschleunigung oder Verlangsamung von Kamerabewegungen vermeiden (Lineare Beschleunigung verwenden und, wenn möglich, Easing vermeiden).
- Die Bildrate hochhalten (weniger als 30 fps ist unangenehm).
- Scharfe und/oder unerwartete Kamerarotationen vermeiden.
- Feste Bezugspunkte für fixe Objekte hinzufügen (andernfalls glaubt der Benutzer, dass er in Bewegung ist).
- Keine Tiefenschärfe oder Bewegungsunschärfe-Nachbearbeitungseffekte verwenden, da Sie nicht wissen, wo sich die Augen fokussieren werden.
- Helligkeitsänderungen vermeiden (niedrigfrequente Texturen oder Nebeleffekte verwenden, um sanfte Lichtübergänge zu schaffen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Körperteilen verursachen.

### Verzögerung

Die Verzögerung ist die Zeit zwischen der physischen Kopfbewegung und dem visuellen Display, das die Augen des Benutzers von einem HMD-Bildschirm aktualisiert erreichen. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen wahrnehmen — wir müssen die Verzögerung unter 20 Millisekunden halten, wenn sie unmerklich sein sollen (zum Beispiel hat ein 60Hz-Monitor eine Reaktionszeit von 16 ms).

Das Oculus Rift-Headset hat eine Verzögerung von 20 ms oder weniger, aber bei setups mit mobilen Geräten wird es stark von der CPU-Leistung des Smartphones und anderen Fähigkeiten abhängen.

### Bildrate (Bilder pro Sekunde / FPS)

Basierend auf der Definition von Wikipedia ist die Bildrate die Frequenz, mit der ein Bildgebungsgerät einzigartige aufeinanderfolgende Bilder, genannt Frames, erzeugt. Eine Rate von 60 fps ist eine akzeptable Rate für eine flüssige Benutzererfahrung, aber je nach Leistung der Maschine, auf der die App läuft, oder der Komplexität der Inhalte, die Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30 fps wird allgemein als ruckelig und für den Benutzer störend angesehen.

Eine der schwierigsten Aufgaben besteht darin, eine konstante und hohe Bildrate zu halten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu machen. Es ist vorzuziehen, eine anständige Bildrate zu haben, die nicht konstant oder plötzlich wechselt; dafür müssen Sie so wenige notwendige Objekte wie möglich in die Szene bewegen und (im Fall von WebGL) versuchen, Zeichnungsaufrufe zu reduzieren.

### Interpupillarabstand (IPD)

Basierend auf der Wikipedia-Definition ist der IPD der Abstand zwischen den Zentren der Pupillen der beiden Augen. IPD ist entscheidend für das Design von binokularen Betrachtungssystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Betrachtungssystems positioniert werden müssen.

Der Interpupillarabstand (IPD) kann in WebVR mit [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) berechnet werden, was gleich der Hälfte des IPD ist.

Dieser Wert wird vom HMD zurückgegeben, und sein Wert kann um die 60 bis 70 mm liegen; im Fall einiger HMDs wie der Oculus Rift können Sie Ihren eigenen IPD setzen. Normalerweise ändern wir diesen Wert nicht, aber Sie können damit spielen, um den Maßstab der gesamten Szene zu ändern. Wenn Ihr IPD zum Beispiel auf 6000 mm eingestellt ist, würde der Benutzer die Szene wie ein Riese betrachten, der auf eine liliputanische Welt schaut.

### Freiheitsgrade (DoF)

DoF bezieht sich auf die Bewegung eines starren Körpers im Raum. Es gibt keine Einheitlichkeit bei der Erstellung von Akronymen für diesen Begriff — wir finden Referenzen auf 3DoF im Zusammenhang mit Sensoren, die nur die Rotation der Kopfverfolgung erfassen, und 6DoF, wenn ein Eingabegerät es uns erlaubt, Position und Orientierung gleichzeitig zu kontrollieren. Wir finden sogar manchmal Referenzen auf 9DoF, wenn die Hardware drei Sensoren wie Gyroskop, Beschleunigungsmesser und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF-Werte werden tatsächlich eine 6 Freiheitsgrade-Verfolgung zurückgeben.

DoF ist direkt mit der Verfolgung der Kopfbewegungen des Benutzers verbunden.

### Fokusbereich

Obwohl unser Sichtfeld viel größer ist (ungefähr 180º), müssen wir beachten, dass nur in einem kleinen Teil dieses Sichtfelds Symbole wahrgenommen werden können (die mittleren 60º) oder Text gelesen werden kann (die mittleren 10º). Wenn Sie keinen Augensensor haben, gehen wir davon aus, dass die Mitte des Bildschirms der Bereich ist, auf den sich die Benutzeraugen konzentrieren.

Diese Einschränkung ist wichtig zu beachten, wenn entschieden wird, wo visuelle Elemente auf der App-Leinwand platziert werden sollen — zu weit an den Rand des Fokusbereichs kann viel schneller zur Augenbelastung führen.

### 3D-Positional Audio

3D-Positional Audio bezieht sich auf eine Gruppe von Effekten, die Audio manipulieren, um zu simulieren, wie es in einem dreidimensionalen Raum klingen würde.

Dies steht in direktem Zusammenhang mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API), die es uns ermöglicht, Geräusche auf Objekten zu platzieren, die wir auf der Leinwand haben, oder Audio abzuspielen, abhängig von dem Teil der Szene, zu dem der Benutzer reist oder den er ansieht.
