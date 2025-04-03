---
title: WebVR-Konzepte
slug: Web/API/WebVR_API/Concepts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

> [!NOTE]
> Die WebVR API wurde durch die [WebXR API](/de/docs/Web/API/WebXR_Device_API) ersetzt. WebVR wurde nie als Standard ratifiziert, wurde in nur sehr wenigen Browsern implementiert und standardmäßig aktiviert und unterstützte eine kleine Anzahl von Geräten.

Dieser Artikel behandelt einige der grundlegenden Konzepte und Theorien hinter Virtual Reality (VR). Wenn Sie neu in diesem Bereich sind, ist es empfehlenswert, sich mit diesen Themen vertraut zu machen, bevor Sie mit dem Schreiben von Code beginnen.

## Die Geschichte von VR

Virtual Reality ist nichts Neues – das Konzept geht weit über die Oculus Rift Kickstarter-Kampagne von 2012 hinaus zurück. Menschen experimentieren seit Jahrzehnten damit.

Im Jahr 1939 wurde das [View-Master-Gerät](https://de.wikipedia.org/wiki/View-Master) entwickelt, das es den Menschen ermöglichte, 3D-Bilder zu sehen. Das Gerät zeigte Bilder, die auf Kartonscheiben gespeichert waren und stereoskopische 3D-Paare kleiner Farbfotografien enthielten. Nach Jahren der Entwicklung wurde das Militär auf diese Technologie aufmerksam, und 1961 entstand das Projekt Headsight – ein Helm mit einem Videobildschirm und einem Kopfverfolgungssystem.

In den nächsten Jahrzehnten wurden verschiedene Experimente durchgeführt, jedoch war VR nicht mehr nur auf wissenschaftliche Labore und Schlachtfelder beschränkt. Schließlich übernahm die Popkultur mit Filmregisseuren, die ihre Visionen von virtueller Realität zeigten. Filme wie Tron (1982) und Matrix (1999) wurden geschaffen, in denen Menschen in eine ganz neue Cyberwelt eintauchen oder in einer gefangen waren, ohne es zu wissen, sie als reale Welt akzeptierend.

Die ersten VR-Gaming-Versuche waren groß und teuer – 1991 entwickelte die Virtuality Group einen VR-fähigen Arcade-Automaten mit Schutzbrillen und portierte beliebte Titel wie Pac-Man in die virtuelle Realität. Sega stellte ihre VR-Brille auf der Consumer Electronics Show 1993 vor. Unternehmen experimentierten, aber der Markt und die Verbraucher waren nicht überzeugt – wir mussten bis 2012 warten, um ein wirklich erfolgreiches VR-Projekt zu erleben.

### VR in der jüngeren Vergangenheit

Was ist also neu? Die Hardware für Virtual Reality muss hochpräzise und latenzarme Daten liefern, um eine akzeptable Benutzererfahrung zu bieten; Computer, die VR-Anwendungen ausführen, müssen leistungsfähig genug sein, um all diese Informationen zu verarbeiten. Erst kürzlich sind solche Präzision und Leistung zu erschwinglichen Kosten verfügbar geworden, wenn überhaupt. Frühere VR-Prototypen kosteten Zehntausende von Dollar, während neuere Headsets wie die [HTC VIVE](https://www.vive.com/uk/) und [Meta Quest](https://www.meta.com/quest/quest-3/) für Hunderte von Dollar erhältlich sind, und günstigere Lösungen sind verfügbar – mobile Geräte-basierte Lösungen wie [Google Cardboard](https://arvr.google.com/cardboard/).

Auf der Software-Seite hat Valve die [SteamVR](https://store.steampowered.com/search/?category1=993) Software erstellt, die mit der VIVE und anderen Lösungen kompatibel ist und den Zugriff auf Software ermöglicht, wie eine nutzbare VR-Benutzeroberfläche.

Die Technologie selbst ist bereits vorhanden, und die teureren Headsets werden im Laufe der Zeit nur noch günstiger, sodass in Zukunft mehr Menschen Virtual Reality selbst erleben können.

### Eingabegeräte

Die Handhabung von Eingaben für Virtual-Reality-Anwendungen ist ein interessantes Thema – es ist eine völlig neue Erfahrung, für die dedizierte Benutzeroberflächen gestaltet werden müssen. Es gibt derzeit verschiedene Ansätze, von der klassischen Tastatur und Maus bis hin zu neuen Geräten wie Leap Motion und den VIVE-Controllern. Es ist eine Frage von Versuch und Irrtum, um herauszufinden, was in welchen Situationen funktioniert und welche Eingaben am besten zu Ihrem Spieltyp passen.

## VR-Hardware-Setup

Es gibt zwei Haupttypen von Setups: mobil oder computerverbunden. Ihre Mindesthardwarekonfigurationen sind wie folgt:

- Mobil: Ein Head-Mounted Display (HMD) wird mit einem Smartphone erstellt – das als VR-Display fungiert – montiert in einer VR-Halterung wie Google Cardboard, die die erforderlichen Linsen enthält, um das stereoskopische Sehen dessen zu ermöglichen, was auf dem mobilen Bildschirm projiziert wird.![Mobil-basiertes VR-Setup](mobilebasedvrsetup.png)
- Computerverbunden: Ein VR-Setup ist mit Ihrem Computer verbunden – es besteht aus einem Head-Mounted Display (HMD), das einen hochauflösenden bildschirm im Querformat enthält, auf den die Visualisierungen für beide Augen projiziert werden, und auch Linsen für jedes Auge enthält, um die Trennung der linken und rechten Augenszene (stereoskopisches Sehen) zu fördern. Das Setup umfasst auch einen separaten Positionssensor, der die Position/Orientierung/Geschwindigkeit/Beschleunigung Ihres Kopfes ermittelt und diese Informationen ständig an den Computer überträgt. ![Computerbasiertes VR-Setup](computerbasedvrsetup.png)

> [!NOTE]
> Computerverbundene Systeme enthalten manchmal keinen Positionssensor, allerdings normalerweise schon.

Weitere Hardware, die das VR-Erlebnis ergänzt, umfasst:

- **Ein Handerkennungssensor**: Ein Sensor, der die Position und Bewegung Ihrer Hand verfolgt und es ermöglicht, dass sie zu einem interessanten Controller und einem Objekt in VR-Spielwelten wird. Der fortschrittlichste Sensor bisher ist der [Leap Motion](https://www.ultraleap.com/), der mit dem Computer (verbunden mit dem Oculus Rift) und auch mit mobilen Geräten (letzteres ist in einer experimentellen Phase) betrieben werden kann.
- **Ein Gamepad**: Wir können einen XBox-Controller oder ähnliches konfigurieren, um im Browser als Tastatur zu fungieren – dies bietet weitere Möglichkeiten der Interaktion mit einer VR-Webseite. Es gibt einige Gamepads, die mit einem mobilen Setup funktionieren, aber sie sind über Bluetooth verbunden und funktionieren nicht mit WebVR.
- **Ein Blickerkennungssensor (experimentell)**: Das FOVE-Projekt ist das erste Headset, das subtile Augenbewegungen liest.
- **Ein Gesichtsausdruck-Tracker (experimentell)**: Forscher an der University of Southern California und Facebooks Oculus-Sparte testen neue Methoden zur Erkennung von Gesichtsausdrücken und deren Übertragung auf virtuelle Charaktere.
- **Ein komplexeres Positionssensorsystem**: Ein Beispiel hierfür ist das HTC VIVE, das zwei Positionssensoren besitzt, die in gegenüberliegenden Ecken eines Raums platziert werden, um diesen vollständig zu kartieren und VR-Erlebnisse in Räumen von bis zu 5m x 5m zu ermöglichen.

## Position und Orientierung, Geschwindigkeit und Beschleunigung

Wie oben erwähnt, stellt der Positionssensor Informationen im Zusammenhang mit dem HMD fest und gibt diese ständig aus, sodass Sie eine Szene kontinuierlich basierend auf Kopfbewegungen, Rotation usw. aktualisieren können. Aber was genau sind die Informationen?

![Position und Orientierungs-VR-Setup](positionorientationvr.png)

Die ausgegebenen Informationen fallen in vier Kategorien:

1. Position — Die Position des HMD entlang drei Achsen in einem 3D-Koordinatenraum. x ist links und rechts, y ist oben und unten und z ist in Richtung des Positionssensors und von ihm weg. In WebVR werden die x-, y- und z-Koordinaten durch das Array in [`VRPose.position`](/de/docs/Web/API/VRPose/position) repräsentiert.
2. Orientierung — Die Rotation des HMD um drei Achsen in einem 3D-Koordinatenraum. Pitch ist die Rotation um die x-Achse, Yaw ist die Rotation um die y-Achse und Roll ist die Rotation um die z-Achse. In WebVR werden Pitch, Yaw und Roll durch die ersten drei Elemente des Arrays in [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) repräsentiert.
3. Geschwindigkeit — In VR gibt es zwei Arten von Geschwindigkeit zu berücksichtigen:

   - Linear — Die Geschwindigkeit entlang einer der Achsen, auf der sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) abgerufen werden.
   - Angulär — Die Geschwindigkeit, mit der sich das HMD um eine der Achsen dreht. Diese Informationen können mit [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) abgerufen werden.

4. Beschleunigung — In VR gibt es zwei Arten von Beschleunigung zu berücksichtigen:

   - Linear — Die Beschleunigung der Fortbewegung entlang einer der Achsen, auf der sich das HMD bewegt. Diese Informationen können mit [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) abgerufen werden.
   - Angulär — Die Beschleunigung der Rotation des HMD um eine der Achsen. Diese Informationen können mit [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) abgerufen werden.

## Sichtfeld

Das Sichtfeld (FOV) ist der Bereich, den jedes der Augen des Benutzers vernünftigerweise sehen kann. Es nimmt grob die Form einer Pyramide an, die auf einer Seite liegt, mit dem Scheitelpunkt im Kopf des Benutzers, und dem Rest der Pyramide, der vom Auge des Benutzers ausgeht. Jedes Auge hat sein eigenes Sichtfeld, das sich leicht mit dem anderen überlappt.

![Mit dem Sichtfeld verwandte Eigenschaften](fovrelatedproperties.png)

Das Sichtfeld wird durch folgende Werte definiert:

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees): Die Anzahl der Grad nach oben, die das Sichtfeld erreicht.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees): Die Anzahl der Grad nach rechts, die das Sichtfeld erreicht.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees): Die Anzahl der Grad nach unten, die das Sichtfeld erreicht.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees): Die Anzahl der Grad nach links, die das Sichtfeld erreicht.
- zNear, definiert durch [`VRDisplay.depthNear`](/de/docs/Web/API/VRDisplay/depthNear): Die Entfernung von der Mitte des Kopfs des Benutzers bis zum Beginn des sichtbaren Sichtfelds.
- zFar, definiert durch [`VRDisplay.depthFar`](/de/docs/Web/API/VRDisplay/depthFar): Die Entfernung von der Mitte des Kopfs des Benutzers bis zum Ende des sichtbaren Sichtfelds.

Die Standardwerte für diese Eigenschaften unterscheiden sich je nach VR-Hardware leicht, tendieren jedoch dazu, bei etwa 53° nach oben und unten sowie 47° nach links und rechts zu liegen, wobei zNear und zFar bei rund 0,1m bzw. 10000m liegen.

> [!NOTE]
> Der Benutzer kann potenziell um sich herum alles sehen, was ein völlig neues Konzept für Apps und Spiele darstellt. Versuchen Sie, den Menschen einen Grund zu geben, sich umzusehen und zu entdecken, was sich hinter ihnen befindet – lassen Sie sie Dinge finden und erreichen, die zu Beginn nicht sichtbar sind. Beschreiben Sie, was sich hinter ihrem Rücken verbirgt.

## Konzepte für VR-Apps

Dieser Abschnitt bespricht Konzepte, die beim Entwickeln von VR-Apps beachtet werden müssen und die Sie wahrscheinlich nicht berücksichtigen mussten, wenn Sie zuvor normale Apps für mobile oder Desktop-Geräte entwickelt haben.

### Stereoskopisches Sehen

Stereoskopisches Sehen ist das normale Sehen von Menschen und (den meisten) Tieren – die Wahrnehmung von zwei leicht unterschiedlichen Bildern (eines von jedem Auge) als einzelnes Bild. Dies führt zu Tiefenwahrnehmung, die uns hilft, die Welt in herrlichem 3D zu sehen. Um dies in VR-Apps nachzubilden, müssen Sie zwei sehr leicht unterschiedliche Ansichten nebeneinander rendern, die von den linken und rechten Augen aufgenommen werden, wenn der Benutzer das HMD verwendet.

![Anleitung zur Erstellung stereoskopischer 3D-Bilder](createstereoscopicimages.png)

### Kopfverfolgung

Die primäre Technologie, die verwendet wird, um Sie das Gefühl geben, in einer 360º-Szene anwesend zu sein, dank des im HMD enthaltenen Gyroskops, des Beschleunigungsmessers und des Magnetometers (Kompass).
Sie hat primäre Relevanz, da sie unsere Augen glauben lässt, dass wir vor einem kugelförmigen Bildschirm stehen, wodurch der Benutzer realistisch in die App-Leinwand eintaucht.

### Augenbelastung

Ein häufig verwendeter Begriff in VR, da es sich um ein großes Handicap bei der Verwendung eines HMD handelt – wir täuschen das Auge ständig mit dem, was wir auf der App-Leinwand zeigen, und dies führt dazu, dass die Augen viel mehr arbeiten als sonst, so dass die Verwendung von VR-Apps für längere Zeit zu Augenbelastung führen kann.

Um diesen unerwünschten Effekt zu minimieren, müssen wir:

- Vermeiden, auf unterschiedlichen Tiefen zu fokussieren (zum Beispiel sollten viele Partikel in unterschiedlichen Tiefen vermieden werden).
- Augenabgleich vermeiden (zum Beispiel, wenn ein Objekt auf die Kamera zukommt, werden Ihre Augen folgen und darauf abgleichen).
- Wo möglich, dunklere Hintergründe mit gedeckteren Farben verwenden; ein heller Bildschirm wird die Augen ermüden.
- Schnelle Helligkeitsänderungen vermeiden.
- Dem Benutzer keine großen Textmengen zum Lesen präsentieren. Sie sollten auch vorsichtig mit dem Abstand zwischen den Augen/der Kamera und dem zu lesenden Text umgehen. 0,5m ist unbequem, während der Stereo-Effekt bei mehr als 2m langsam zusammenbrechen kann, daher ist ein Abstand dazwischen empfehlenswert.
- Vorsichtig mit dem allgemeinen Abstand zwischen Objekten und der Kamera sein. Oculus empfiehlt 0,75m als Mindestkomfortabstand.
- Einen Zeiger verwenden, wenn der Benutzer mit einem Objekt in der Szene interagieren muss — dies wird ihm helfen, korrekt auf es zu zeigen, mit weniger Aufwand.

Im Allgemeinen wird der Weg des geringsten visuellen Aufwands dem Benutzer ein weniger ermüdendes Erlebnis bieten.

### Bewegungskrankheit

Wenn Entwickler nicht mit äußerster Sorgfalt vorgehen, können VR-Apps tatsächlich dazu führen, dass Benutzer sich krank fühlen. Dieser Effekt tritt auf, wenn die Reize, die die Augen erhalten, nicht das sind, was der Körper erwartet.

Um Bewegungskrankheit bei unseren Benutzern zu vermeiden (oder die Effekte zumindest zu minimieren), müssen wir:

- Immer die Kopfverfolgung beibehalten (dies ist das Wichtigste, besonders wenn es mitten im Erlebnis auftritt).
- Konstante Geschwindigkeit verwenden; Kamera-Bewegungen mit Beschleunigung oder Abbremsung vermeiden (lineare Beschleunigung verwenden, und Vermeidung von Easing, wenn möglich).
- Die Bildrate hoch halten (unter 30fps ist unangenehm).
- Scharfe und/oder unerwartete Kameradrehungen vermeiden.
- Feste Bezugspunkte für feste Objekte hinzufügen (ansonsten glaubt der Benutzer, dass er sich bewegt).
- Keine Tiefenschärfe oder Bewegungsunschärfe in der Nachbearbeitung verwenden, da nicht klar ist, wohin die Augen fokussieren werden.
- Helligkeitsänderungen vermeiden (niedrigfrequente Texturen oder Nebeleffekte verwenden, um sanfte Lichtübergänge zu erzeugen).

Insgesamt sollten Ihre Augen keine Signale an das Gehirn senden, die Reflexaktionen in anderen Teilen des Körpers verursachen.

### Latenz

Latenz ist die Zeit zwischen der physischen Kopfbewegung und der Anzeige des aktualisierten visuellen Bildes auf dem Bildschirm eines HMD. Dies ist einer der kritischsten Faktoren, um ein realistisches Erlebnis zu bieten. Menschen können sehr kleine Verzögerungen wahrnehmen — wir müssen die Latenz unter 20 Millisekunden halten, damit sie unmerklich sind (zum Beispiel hat ein 60Hz-Monitor eine Reaktionszeit von 16 ms).

Das Oculus Rift-Headset hat eine Latenz von 20 ms oder weniger, aber bei Setups, die auf mobilen Geräten basieren, hängt dies stark von der CPU-Leistung und anderen Fähigkeiten des Smartphones ab.

### Bildrate (Frames per second / FPS)

Basierend auf der Wikipedia-Definition ist die Bildrate die Frequenz, mit der ein Bildgebungsgerät einzigartige aufeinanderfolgende Bilder, sogenannte Frames, produziert. Eine Rate von 60fps ist eine akzeptable Rate für ein flüssiges Benutzererlebnis, aber je nach Performance der Maschine, auf der die App läuft, oder der Komplexität der Inhalte, die Sie zeigen möchten, kann sie drastisch sinken. Weniger als 30fps wird allgemein als ruckelig und störend für den Benutzer angesehen.

Eine der schwierigsten Aufgaben ist es, einen konstanten und hohen Bildfrequenzwert aufrechtzuerhalten, daher müssen wir unseren Code optimieren, um ihn so effizient wie möglich zu machen. Es ist vorzuziehen, eine anständige Bildrate zu haben, die sich nicht ständig oder plötzlich ändert; dafür müssen Sie so wenige notwendige Objekte wie möglich in die Szene bewegen lassen und (im Falle von WebGL) versuchen, Draw Calls zu reduzieren.

### Interpupillarabstand (IPD)

Basierend auf der Wikipedia-Definition ist der Interpupillarabstand (IPD) der Abstand zwischen den Mittelpunkten der Pupillen der beiden Augen. IPD ist entscheidend für das Design von binokularen Betrachtungssystemen, bei denen beide Augenpupillen innerhalb der Austrittspupillen des Betrachtungssystems positioniert sein müssen.

Der Interpupillarabstand (IPD) kann in WebVR unter Verwendung von [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) berechnet werden, was gleich der Hälfte des IPD ist.

Dieser Wert wird vom HMD zurückgegeben und sein Wert kann etwa zwischen 60 und 70 mm liegen; im Falle einiger HMDs, wie zum Beispiel des Oculus Rift, können Sie Ihren eigenen IPD einstellen. Normalerweise ändern wir diesen Wert nicht, aber Sie können mit ihm experimentieren, um die Skalierung der gesamten Szene zu ändern. Beispielsweise würde der Benutzer bei einem auf 6000 mm eingestellten IPD die Szene wie ein Riese betrachten, der eine winzige Welt beobachtet.

### Freiheitsgrade (Degrees of Freedom, DoF)

DoF bezieht sich auf die Bewegung eines starren Körpers im Raum. Es gibt keine Einheitlichkeit bei der Erstellung von Akronymen für diesen Begriff – wir finden Referenzen zu 3DoF im Kontext von Sensoren, die nur Rotationserkennung bieten, und 6DoF, wenn eine Eingabe gleichzeitig Positions- und Orientationskontrolle ermöglicht. Manchmal finden wir sogar 9DoF Referenzen, wenn die Hardware drei Sensoren wie Gyroskop, Beschleunigungsmesser und Magnetometer enthält, aber die Ergebnisse der 3 x 3DoF Werte werden tatsächlich eine 6 Grad der Freiheit Tracking zurückgeben.

DoF steht in direktem Zusammenhang mit der Verfolgung der Kopfbewegung des Benutzers.

### Fokus-Kegel

Obwohl unser Sichtfeld viel größer ist (ungefähr 180º), müssen wir uns darüber im Klaren sein, dass wir nur in einem kleinen Teil dieses Bereichs Symbole wahrnehmen (die mittleren 60º) oder Text lesen können (die mittleren 10º). Wenn Sie keinen Blickverfolgungssensor haben, wird angenommen, dass der Benutzer seine Augen auf die Mitte des Bildschirms konzentriert.

Diese Einschränkung ist wichtig zu beachten, wenn Sie entscheiden, wo Sie visuelle Elemente auf der App-Leinwand platzieren – zu weit am Rand des Fokus-Kegels kann viel schneller zu Augenbelastung führen.

### 3D-Positionales Audio

3D-Positionales Audio bezieht sich auf eine Gruppe von Effekten, die Audio so manipulieren, dass es simuliert, wie es in einem dreidimensionalen Raum klingen würde.

Dies steht in direktem Zusammenhang mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API), die es uns ermöglicht, Töne auf Objekte zu platzieren, die wir auf der Leinwand haben, oder Audio abhängig davon auszulösen, in welchem Teil der Szene der Benutzer sich bewegt oder worauf er schaut.
