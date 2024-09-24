---
title: Grundlagen von WebXR
slug: Web/API/WebXR_Device_API/Fundamentals
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR, mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im Zentrum, bietet die Funktionalität, die benötigt wird, um sowohl erweiterte als auch virtuelle Realität (AR und VR) ins Web zu bringen. Diese Technologien werden zusammen als **gemischte Realität (MR)** oder **erweiterte Realität (XR)** bezeichnet. Gemischte Realität ist ein großes und komplexes Thema, mit viel zu lernen und vielen anderen APIs, die zusammengeführt werden müssen, um eine fesselnde Erfahrung für Benutzer zu schaffen.

Dieser Leitfaden bietet einen Überblick darüber, was WebXR ist und wie es funktioniert, sowie die grundlegende Basis, die benötigt wird, um mit der Entwicklung von AR- und VR-Erfahrungen für das Web zu beginnen.

## Was WebXR ist und was nicht

WebXR ist eine API, die von Webinhalten und -anwendungen genutzt werden kann, um mit gemischter Realitätshardware, wie VR-Headsets und Brillen mit integrierten AR-Funktionen, zu interagieren. Dies beinhaltet sowohl die Verwaltung des Prozesses der Darstellung der Ansichten, die benötigt werden, um die 3D-Erfahrung zu simulieren, als auch die Fähigkeit, die Bewegung des Headsets (oder anderer bewegungssensitiver Geräte) zu erfassen und die benötigten Daten bereitzustellen, um die dem Benutzer gezeigten Bilder zu aktualisieren.

WebXR bietet zudem Unterstützung für Eingaben von Steuergeräten wie tragbare VR-Controller oder spezielle Mixed-Reality-Gamepads.

_WebXR ist keine Rendering-Technologie und bietet keine Funktionen zur Verwaltung von 3D-Daten oder zu deren Darstellung auf dem Bildschirm._ Dies ist ein wichtiger Fakt, den Sie im Hinterkopf behalten sollten. Während WebXR das Timing, die Planung und die verschiedenen Sichtpunkte verwaltet, die beim Zeichnen der Szene relevant sind, weiß es _nicht_, wie Modelle geladen und verwaltet werden oder wie diese gerendert und texturiert werden, und so weiter. Dieser Teil liegt vollständig bei Ihnen. Glücklicherweise sind WebGL und die verschiedenen auf WebGL basierenden Frameworks und Bibliotheken verfügbar, um all das wesentlich zu erleichtern.

### Wie unterscheidet sich WebXR von WebVR?

WebVR wurde als experimentelle API betrachtet, die den Spezifikationsautoren helfen sollte, die besten Ansätze zur Erstellung einer Virtual-Reality-API im Web zu ermitteln. Browser-Entwickler fügten WebVR-Unterstützung zu Browsern hinzu, um Webentwicklern Experimente zu ermöglichen. Es wurde jedoch bald klar, dass es sinnvoller wäre, eine neue Spezifikation zu beginnen, als zu versuchen, WebVR "zu reparieren", um eine API für virtuelle Realität im Web zu vollenden.

Das führte zur Entstehung von WebXR. Der grundlegende Unterschied besteht darin, dass WebXR nicht nur virtuelle Realität, sondern auch erweiterte Realität unterstützt, die virtuelle Objekte mit der Umgebung des Benutzers verbindet.

Ein weiterer wesentlicher Unterschied besteht darin, dass WebXR integrierte Unterstützung für die fortgeschrittenen [Eingabegeräte](/de/docs/Web/API/WebXR_Device_API/Inputs) bietet, die mit den meisten Mixed-Reality-Headsets verwendet werden, während WebVR auf die [Gamepad API](/de/docs/Web/API/Gamepad_API) für die Unterstützung der Controller zurückgriff. In WebXR werden die primären Auswahl- und Quetschaktionen direkt durch Ereignisse unterstützt, während andere Steuerungen über eine spezielle WebXR-spezifische Implementierung des {{domxref("Gamepad")}}-Objekts verfügbar sind.

## Grundlegende Konzepte

Bevor wir ins Detail gehen, lassen Sie uns einige grundlegende Konzepte betrachten, die Sie kennen müssen, bevor Sie lernen, wie man XR-Code entwickelt.

### Blickfeld

Der Begriff **Blickfeld** (**Field of View**, **FOV**) gilt für jede visuelle Technologie, von alten Filmkameras bis hin zu modernen digitalen Videokameras, einschließlich der Kameras in Computern und Mobilgeräten.

![Diagramm, das das binokulare Sehen zeigt.](binocular-vision.svg)

#### Was ist das Blickfeld?

Das Blickfeld ist das Ausmaß, in dem Sie die Umgebung sehen können. Die Breite des Blickfelds, angegeben in Grad oder Bogenmaß, wird als der Winkel gemessen, der den Bogen von der äußersten linken Kante Ihres Blickfelds zur äußersten rechten Kante definiert.

Ein menschliches Auge kann ein Blickfeld von etwa 135° erfassen. Bei zwei gesunden Augen resultiert das gesamte Blickfeld in einem Bereich von etwa 200° bis 220° Breite. Warum ist das Blickfeld mit zwei Augen breiter, aber nicht doppelt so breit wie das Blickfeld eines einzelnen Auges? Dies liegt daran, dass sich die Blickfelder der beiden Augen stark überlappen. Diese Überlappung gibt uns die Tiefenwahrnehmung, die etwa 115° breit ist. Außerhalb des Überlappungsbereichs fällt unser Sehen auf monocular zurück.

Die hier gezeigte Zeichnung veranschaulicht das Konzept des Blickfelds: der blaue Keil für das linke Auge, der rote Keil für das rechte Auge. Der hellbraune überlappende Bereich ist der Bereich, in dem der Betrachter binokulares Sehen hat und Tiefe wahrnehmen kann. Wenn Sie genau hinschauen, werden Sie sehen, dass jedes Auge den Würfel leicht unterschiedlich sieht und die kombinierte Ansicht die beiden zu einer 3D-Form mischt.

In der Regel definieren und verwalten Anwendungen nur das horizontale Blickfeld. Weitere Details finden Sie unter [Die Optik von 3D](/de/docs/Web/API/WebXR_Device_API/Rendering#the_optics_of_3d).

#### Blickfeld und Geräte für gemischte Realität

Um ein weites genuges Blickfeld zu erreichen, das die Augen des Benutzers dazu bringt, zu glauben, dass die virtuelle Welt sie vollständig umgibt, muss das Blickfeld zumindest die Breite des binokularen Sehenbereichs erreichen. Grundlegende Headsets beginnen normalerweise bei etwa 90° oder so, während die besten Headsets in der Regel ein Blickfeld von etwa 150° haben. Da das Blickfeld eine Frage der Größe der Linsen und ihres Abstands zu den Augen des Benutzers ist, gibt es Einschränkungen, wie breit das Blickfeld werden kann, ohne Linsen in die Augäpfel des Benutzers einzubauen.

Ein weites Blickfeld kann das Eintauchen des Benutzers erheblich verbessern. Das Erhöhen des Blickfelds kann jedoch auch das Gewicht und die Kosten des Headsets erhöhen.

### Freiheitsgrade

Der Begriff **Freiheitsgrade** gibt an, wie viel Bewegungsfreiheit der Benutzer innerhalb der virtuellen Welt hat. Dies hängt direkt damit zusammen, wie viele Arten von Bewegungen die WebXR-Hardwarekonfiguration erkennen und in die virtuelle Szene übertragen kann.

**Abbildung: Diagramm, das die Bewegungen zeigt, die mit einer Hardware mit 3 Freiheitsgraden möglich sind: Gieren, Rollen und Neigen.**
![Diagramm, das die Bewegungen zeigt, die mit einer Hardware mit 3 Freiheitsgraden möglich sind: Gieren, Rollen und Neigen.](3-degrees-of-freedom-min.svg)

#### Freiheit der Rotationsbewegung

Die ersten drei Freiheitsgrade sind **rotational**. Die Rotationsfreiheitsgrade sind:

- Neigen: nach oben und unten schauen
- Gieren: nach links und rechts schauen
- Rollen: nach links und rechts kippen

In all diesen Fällen bleibt der Betrachter am selben Ort im Raum, während er auf einer oder mehreren der drei Achsen schwenkt, um die Blickrichtung zu ändern. Ein System mit zwei Freiheitsgraden kann erkennen, wenn der Benutzer nach links und rechts oder nach oben und unten schaut, aber keine andere Art von Bewegung melden.

Ein typisches Basismodell-Headset bietet drei Freiheitsgrade und erkennt Rotation um alle drei Achsen. Dies wird oft mit der Abkürzung **3DoF** bezeichnet.

#### Freiheit der Translationsbewegung

Die anderen drei Freiheitsgrade sind translational und bieten die Fähigkeit, die Bewegung durch den Raum zu erfassen: vorwärts und rückwärts, links und rechts, auf und ab. Die Unterstützung aller sechs Freiheitsgrade wird als **6DoF** bezeichnet.

![Diagramm, das die Rotation um jede der drei Achsen in einem WebXR-Setting zeigt](xr-translation-headset.png)

Einige fortschrittlichere Headsets bieten zumindest minimalen Support für die Erkennung von Translationsbewegungen, aber um wesentlichere Bewegungen durch den Raum zu erfassen, sind in der Regel externe Sensoren erforderlich, wie Kameras (entweder mit sichtbarem Licht oder Infrarot).

### WebXR-Sitzungsmodi

WebXR bietet Unterstützung für sowohl Augmented Reality (AR) als auch Virtual Reality (VR) Sitzungen, wobei die gleiche API verwendet wird. Welche Art von Sitzung Sie erstellen möchten, wird beim Erstellen der Sitzung angegeben. Dies erfolgt durch Angabe des entsprechenden Sitzungsmodus-Strings für die Art der Sitzung, die Sie erstellen möchten.

#### Virtuelle Realität

In einer VR-Umgebung wird das gesamte Bild von Ihrer App oder Website digital erstellt, von Vordergrundobjekten bis zum Hintergrund oder Skybox. Ihr Zeichen-Code muss jedes Pixel jeder Ansicht während jedes Frames neu zeichnen, um zu verhindern, dass Artefakte zurückbleiben. Einige Plattformen stellen Ihnen zuvor gelöschte Frames zur Verfügung, während andere die Leistung optimieren können, indem sie keine Framebuffer löschen, um zu vermeiden, dass jeder Pixel zweimal pro Frame berührt wird.

Es gibt zwei VR-Sitzungsmodi in WebXR: **inline** und **immersiv**. Der erste, angegeben durch den Sitzungsmodus-String `inline`, präsentiert die gerenderte Szene im Kontext eines Dokuments im Webbrowser und erfordert keine spezielle XR-Hardware zur Betrachtung. Der immersive Sitzungsmodus wird mit dem Sitzungsmodus `immersive-vr` angegeben. Dieser Sitzungsmodus erfordert ein XR-Gerät wie ein Headset und ersetzt die gesamte Welt mit der gerenderten Szene, die auf den Displays vor jedem der Augen des Benutzers angezeigt wird.

#### Erweiterte Realität

In der erweiterten Realität (AR) sieht der Benutzer die von Ihnen gerenderten Bilder, die über der physischen, realen Umgebung, die ihn umgibt, präsentiert werden. Da AR immer ein immersives Erlebnis ist, bei dem die Szene die gesamte Umgebung um den Benutzer darstellt (statt in einem Kasten auf einem Bildschirm eingeschlossen zu sein), ist der einzige AR-Sitzungsmodus `immersive-ar`.

Es gibt zwei grundlegende Typen von AR-Geräten:

- Geräte, die Kameras verwenden, um die Welt vor dem Benutzer zu erfassen, die WebXR-Inhalte auf diesem Bild zu rendern und das Bild auf einem Bildschirm anzuzeigen. Zu diesen Geräten gehören Telefone, die die resultierende Szene auf dem Bildschirm des Geräts in einer 2D-Darstellung zeigen, sowie Brillen, die ein Paar Kameras verwenden, eine für jedes Auge, um die Szene in Stereo zu erfassen, um die Tiefe beizubehalten, wobei die WebXR-Szene dann für jedes Auge mit dem Bildhintergrund dieses Auges dargestellt wird.
- Geräte, die transparente Gläser verwenden, um dem Benutzer zu ermöglichen, die Welt zu sehen, während das gerenderte Bild über der Szene überlagert wird. Der Benutzer betrachtet also direkt die reale Welt anstelle einer Reihe von digitalen Fotos derselben.

Beide Gerätetypen sollten auch in der Lage sein, VR-Sitzungen darzustellen. WebXR interessiert sich im Allgemeinen nicht dafür, welcher Gerätetyp verwendet wird, und der Rendering-Prozess ist fast genau derselbe wie bei VR, außer dass Sie den Hintergrund oder Skybox nicht löschen, bevor Sie jeden Frame rendern.

## Arten von WebXR-Hardware

Die einfachste XR-Darstellung beinhaltet das Rendern der Szene direkt auf dem Bildschirm des Benutzers, entweder im Kontext eines Webdokuments oder im Vollbildmodus. Dies ist am häufigsten, wenn der Benutzer entweder kein dediziertes XR-Gerät hat oder wenn der Benutzer die AR-oder VR-App auf einem Telefon oder einem anderen tragbaren Gerät betrachtet.

Einfachere und günstigere XR-Geräte verwenden typischerweise einen integrierten Computer oder verbinden sich mit einem Smartphone, wobei im Wesentlichen die mobile CPU und GPU verwendet werden, um Apps auszuführen, Bilder zu rendern und diese dem Benutzer anzuzeigen. Leistungsstärkere Lösungen verlagern die Anwendungs-Ausführung und Grafikverarbeitung typischerweise auf ein externes Gerät wie einen Desktop-Computer und sind entweder mittels eines Kabels an den Computer angeschlossen oder verwenden ein drahtloses Netzwerk, um die anzuzeigenden Bilder an den Benutzer zu übertragen.

### Headsets

Die meisten immersiven VR-Erfahrungen finden mit einer Brille oder einem Headset irgendeiner Art statt. Ein VR-Headset wird am Kopf getragen, mit einem Riemen, der hinter dem Kopf verläuft, um es an Ort und Stelle zu halten, und ein oder zwei Displays, deren Bildschirme durch Linsen auf die Augen fokussiert werden. Indem jedem Auge ein leicht unterschiedliches Bild präsentiert wird, entsteht die Illusion von Tiefe, die dem Benutzer eine simulierte 3D-Erfahrung gibt.

![Zeichnung eines Standard-VR-Headsets](publicdomain-virtual_reality_headset.svg)

Die überwiegende Mehrheit der Headsets verwendet ein einziges Display, dessen Frame in zwei Hälften unterteilt ist, wobei jede Hälfte auf das entsprechende Auge fokussiert wird. Wenn beispielsweise ein Headset einen 2560x1440 Bildschirm verwendet, wobei die linke Hälfte für das linke Auge und die rechte Hälfte für das rechte Auge verwendet wird, wird der Framebuffer wie folgt verwendet:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Standpunkten beider Augen aufgeteilt wird](twoviewsoneframebuffer.svg)

Die einfachsten Headsets haben keine integrierten Sensoren und fokussieren jede Hälfte des Bildschirms in das entsprechende Auge. Ein häufig genanntes Beispiel dafür ist [Google Cardboard](https://arvr.google.com/cardboard/), eine Art von Headset, das erstmals von Google entwickelt wurde und leicht aus Karton oder anderen kostengünstigen Materialien hergestellt werden kann. Diese Geräte arbeiten oft, indem Ihr Telefon in das Headset geschnappt wird, so dass dessen Bildschirm und Bordgrafikprozessor verwendet werden können, um die XR-Szene zu rendern und anzuzeigen.

Fortschrittlichere Headsets haben integrierte Displays und werden mit einem elastischen Riemen oder einem Riemen mit Klettverschluss am Kopf befestigt. Diese Headsets können integrierte Lautsprecher und Mikrofone sowie Anschlüsse für externe Geräte aufweisen. Darüber hinaus können diese Headsets verschiedene Sensoren zum Erkennen von Bewegungen des Headsets im Raum beinhalten. Die Arten und Anzahl der Sensoren bestimmen, wie viele [Freiheitsgrade](#freiheitsgrade) der Benutzer hat.

### Brillen

XR-Brillen ähneln Headsets insofern, als dass sie Grafikanzeigeflächen vor den Augen platzieren, um die benötigten Ansichten einer Szene zu rendern und die Tiefe der simulierten Szene zu simulieren.

Der Unterschied besteht darin, dass die Brillen die reale Welt durchlassen und das gerenderte Bild über die physische Umgebung des Benutzers hinweg projizieren. Dies geschieht, ohne die Welt digital nachzubilden, wie es bei einem vollwertigen Headset erforderlich wäre. Stattdessen ist die Anzeigefläche transparent und beim Nicht-Anzeigen von Bildern im Wesentlichen identisch mit einer normalen Brille. Wenn Objekte gezeichnet werden, werden sie auf die Linsen der Brille gezeichnet, entweder teilweise oder vollständig die physische Umgebung verdeckend.

### CAVEs

Eine **Cave Automated Virtual Environment** (**CAVE**) ist eine immersive VR-Umgebung, in der die Szene auf die Wände (sowie möglicherweise die Decke und/oder den Boden) projiziert oder auf andere Weise angezeigt wird, wodurch der Benutzer vollständig mit der Simulation umgeben und in die Szene eingetaucht wird. Der Benutzer trägt 3D-Brillen, die sowohl den 3D-Effekt zum projizierten Bild hinzufügen als auch ein Mittel bieten, um den Vordergrundobjekten der Szene eine visuelle Perspektive zu geben.

Die Aktivität des Benutzers kann durch am Körper getragene oder gehaltene Bewegungssensoren überwacht werden, oder, zunehmend häufiger, mittels Infrarotkameras, die die Bewegungen des Benutzers erkennen. Lautsprecher, die um die Kammer herum positioniert sind, sorgen für immersiven Klang.

Diese sind unter Alltagsnutzern nicht üblich; sie werden meist entweder experimentell, zu Demonstrationszwecken oder von größeren Organisationen genutzt. Ein Nachteil besteht darin, dass die CAVE nichts simulieren kann, was näher ist als die Wand.

## Wichtige Gesundheits- und Sicherheitserinnerungen

Da der gesamte Akt des Erschaffens einer virtuellen 3D-Welt im Wesentlichen ein Trick ist, der unsere Kenntnis darüber ausnutzt, wie Augen Licht sammeln und wie das Gehirn die gesammelten Daten interpretiert, ist es wichtig zu beachten, dass Software-Designer und -Entwickler eine Verantwortung haben, noch sorgfältiger als üblich sicherzustellen, dass die Ergebnisse korrekt sind.

### Virtual Reality Krankheit

**[Virtual Reality Krankheit](https://en.wikipedia.org/wiki/Virtual_reality_sickness)** ist eine Bedingung, in der eine Person, die virtuelle Realität erlebt, Unwohlsein, Desorientierung oder sogar ernsthafte Übelkeit während und manchmal für kurze Zeit nach der Erfahrung verspürt.

Es gibt eine Reihe von Theorien darüber, was genau in der virtuellen Realität dazu führt, dass manche Menschen sich unwohl oder krank fühlen, von denen die meisten die Idee fokussieren, dass selbst subtile Unterschiede zwischen dem, was das Gehirn denkt, dass passieren sollte, und dem, was gesehen wird, diese Symptome verursachen können.

Defekte, Fehlstellungen oder Verzerrungen können die Augen und das Gehirn verwirren und zu allem führen, von schmerzenden Augen oder Kopfschmerzen bis zu in einigen Fällen Schwindel, Benommenheit oder potenziell starker Übelkeit. Es ist auch wichtig, auf alles aufmerksam zu sein, was Sie anzeigen, was das Potenzial hat, Anfälle auszulösen, angesichts der allumfassenden Natur eines Headsets; der Benutzer kann möglicherweise nicht schnell von den von Ihnen präsentierten Bildern wegschauen, wenn diese Unbehagen bereiten.

### Physische Risiken

Ein weiteres potenzielles Problem mit immersiver virtueller Realität ist, dass Benutzer mit physischen Hindernissen kollidieren, wenn sie sich bewegen, während sie ein Headset tragen. Es ist wichtig, Hinweise bereitzustellen, um ihre Bewegung einzuschränken, wie z.B. durch das Simulieren eines Raumes, der in ihrer physischen Umgebung sicher ist.

Wenn das Headset des Benutzers an ein Gerät angeschlossen ist, ist es eine gute Idee sicherzustellen, dass der Benutzer nicht in Versuchung gerät, in einer Weise zu bewegen, die das Headset-Kabel zieht oder reißt, was nicht nur Verletzungen verursachen, sondern auch erheblichen Schaden am Headset oder Gerät des Benutzers (sei es ein Telefon oder ein Computer) verursachen könnte.

Wenn Ihre Inhalte ein Risiko für Benutzer darstellen könnten, sollten Sie eine Warnmeldung bereitstellen. Ebenso ist es ratsam, Benutzer daran zu erinnern, möglichst sitzend zu bleiben und bei Bewegungen mit einem Headset im vollständig immersiven virtuellen Realitätserlebnis vorsichtig zu sein. Es ist immer besser, auf Nummer sicher zu gehen!

## Die Rolle von Frameworks

Da 3D-Grafiken – und gemischte Realität im Besonderen – viele oft komplexe Mathematik, Datenmanagement und andere komplexe Aufgaben beinhalten, ist es unwahrscheinlich, dass Sie direkt WebGL verwenden, um Ihre Szene in den meisten Fällen zu rendern. Stattdessen werden Sie wahrscheinlich den Großteil Ihrer Arbeit mit einem der Frameworks oder Bibliotheken erledigen, die auf WebGL basieren, da diese die Nutzung bequemer machen.

Ein besonderer Vorteil der Nutzung eines Frameworks anstelle der direkten Nutzung der WebGL-API ist, dass Bibliotheken dazu neigen, virtuelle Kamerafunktionalität zu implementieren. OpenGL (und somit auch in gewissem Maße WebGL) bietet von sich aus keine Kameraperspektive, aber die Nutzung einer Bibliothek, die eine solche auf Ihre Rechnung simuliert, kann Ihre Arbeit erheblich erleichtern, insbesondere wenn Sie Code erstellen, der freie Bewegung durch Ihre virtuelle Welt ermöglicht.

Da [WebGL](/de/docs/Web/API/WebGL_API) zum Rendern der 3D-Welt in die WebXR-Sitzung verwendet wird, sollten Sie sich zuerst mit der allgemeinen Nutzung von WebGL und den Grundlagen von 3D-Grafiken vertraut machen.

### Allgemeine 3D-Frameworks

Diese Frameworks sind sowohl für allgemeine Programmierung als auch für die Spieleentwicklung geeignet, wenn Sie die Logik selbst entwickeln möchten. Sie sind für das Erstellen und Animieren von 3D-Szenen unabhängig vom Kontext gedacht.

- [A-Frame](https://aframe.io/) (speziell für die Erstellung von WebXR-basierten Apps entwickelt)
- [Babylon.js](https://www.babylonjs.com/)
- [Three.js](https://threejs.org/)

### Spiel-Toolkits

Die Spiel-Toolkits sind für Spieleentwickler konzipiert und beinhalten oft spiele-spezifische Funktionen wie Physikmodelle, Eingabekontrollsysteme, Asset-Management, 3D-Soundwiedergabe und Ähnliches.

- [PlayCanvas](https://playcanvas.com/)

## Nächste Schritte

Mit diesen grundlegenden Fakten ausgestattet, sind Sie bereit, die nächsten Schritte in die Welt der gemischten Realität zu unternehmen. Die folgenden Artikel können Ihnen dabei helfen.

- [WebXR-Anwendungslebenszyklus](/de/docs/Web/API/WebXR_Device_API/Lifecycle)
- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
