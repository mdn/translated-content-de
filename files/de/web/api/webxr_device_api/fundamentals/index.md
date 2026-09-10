---
title: Grundlagen von WebXR
slug: Web/API/WebXR_Device_API/Fundamentals
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR stellt, mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) als Kernstück, die Funktionalität bereit, die erforderlich ist, um sowohl Augmented Reality als auch Virtual Reality (AR und VR) ins Web zu bringen. Gemeinsam werden diese Technologien als **Mixed Reality (MR)** oder **Cross Reality (XR)** bezeichnet. Mixed Reality ist ein umfangreiches und komplexes Thema, bei dem es viel zu lernen und zahlreiche weitere APIs zusammenzuführen gibt, um eine ansprechende Erfahrung für Benutzer zu schaffen.

Dieser Leitfaden bietet einen Überblick darüber, was WebXR ist und wie es funktioniert, sowie die grundlegenden Voraussetzungen, die benötigt werden, um mit der Entwicklung von Augmented- und Virtual-Reality-Erfahrungen für das Web zu beginnen.

## Was WebXR ist und was nicht

WebXR ist eine API, die Webinhalte und Apps verwenden können, um mit Mixed-Reality-Hardware wie VR-Headsets und Brillen mit integrierten Augmented-Reality-Funktionen zu interagieren. Dazu gehören sowohl die Verwaltung des Renderns der Ansichten, die zur Simulation der 3D-Erfahrung erforderlich sind, als auch die Fähigkeit, die Bewegung des Headsets (oder anderer bewegungserfassender Geräte) zu erkennen und die erforderlichen Daten bereitzustellen, um die dem Benutzer angezeigten Bilder zu aktualisieren.

WebXR unterstützt außerdem die Annahme von Eingaben von Steuergeräten wie handgehaltenen VR-Controllern oder speziellen Mixed-Reality-Gamepads.

_WebXR ist keine Rendering-Technologie und bietet keine Funktionen zum Verwalten von 3D-Daten oder zum Rendern dieser Daten auf dem Display._ Dies ist eine wichtige Tatsache, die Sie beachten sollten. Während WebXR das Timing, die Planung und die verschiedenen beim Zeichnen der Szene relevanten Blickpunkte verwaltet, weiß es _nicht_, wie Modelle geladen und verwaltet werden oder wie sie gerendert und texturiert werden usw. Dieser Teil liegt vollständig bei Ihnen. Glücklicherweise stehen WebGL sowie die verschiedenen auf WebGL basierenden Frameworks und Bibliotheken zur Verfügung, die den Umgang mit all dem erheblich erleichtern.

### Wie unterscheidet sich WebXR von WebVR?

WebVR wurde als experimentelle API betrachtet, die Spezifikationsautoren dabei helfen sollte, die besten Ansätze für die Erstellung einer Virtual-Reality-API im Web zu bestimmen. Browser-Implementierer fügten Browsern Unterstützung für WebVR hinzu, sodass Webentwickler experimentieren konnten. Bald wurde jedoch klar, dass es sinnvoller wäre, eine neue Spezifikation zu beginnen, als zu versuchen, WebVR zu „reparieren“, um eine API für Virtual Reality im Web fertigzustellen.

Dies führte zur Entstehung von WebXR. Der grundlegende Unterschied besteht darin, dass WebXR nicht nur Virtual Reality, sondern auch Augmented Reality unterstützt, bei der virtuelle Objekte mit der realen Umgebung des Benutzers kombiniert werden.

Ein weiterer wesentlicher Unterschied besteht darin, dass WebXR integrierte Unterstützung für die fortschrittlichen [Eingabecontroller](/de/docs/Web/API/WebXR_Device_API/Inputs) bietet, die mit den meisten Mixed-Reality-Headsets verwendet werden, während WebVR für die Unterstützung der Controller auf die [Gamepad API](/de/docs/Web/API/Gamepad_API) angewiesen war. In WebXR werden die primären Select- und Squeeze-Aktionen direkt mithilfe von Events unterstützt, während andere Steuerelemente über eine spezielle WebXR-spezifische Implementierung des Objekts [`Gamepad`](/de/docs/Web/API/Gamepad) verfügbar sind.

## Grundlegende Konzepte

Bevor wir zu sehr ins Detail gehen, betrachten wir einige grundlegende Konzepte, die Sie kennen müssen, bevor Sie lernen, XR-Code zu entwickeln.

### Sichtfeld

Der Begriff **Sichtfeld** (**FOV**) gilt für jede visuelle Technologie, von alten Filmkameras bis zu modernen digitalen Videokameras, einschließlich der Kameras in Computern und Mobilgeräten.

![Diagramm zur Darstellung des binokularen Sehens.](binocular-vision.svg)

#### Was ist das Sichtfeld?

Das Sichtfeld beschreibt den Bereich, in dem Sie Ihre Umgebung sehen können. Die Breite des Sichtfelds, die entweder in Grad oder Radiant angegeben wird, wird als der Winkel gemessen, der den Bogen vom äußersten linken Rand Ihres Sichtfelds bis zum äußersten rechten Rand definiert.

Ein menschliches Auge kann ein FOV von etwa 135° erfassen. Wenn eine Person zwei gesunde Augen hat, beträgt das gesamte Sichtfeld etwa 200° bis 220°. Warum ist das FOV mit zwei Augen breiter, aber nicht doppelt so groß wie das FOV eines einzelnen Auges? Dies liegt daran, dass sich die FOVs beider Augen stark überlappen. Diese Überlappung ermöglicht unsere Tiefenwahrnehmung, die etwa 115° breit ist. Außerhalb des Überlappungsbereichs ist unser Sehen monokular.

Die hier gezeigte Zeichnung veranschaulicht das Konzept des FOV: ein blauer Keil für das linke Auge, ein roter Keil für das rechte Auge. Der hellbraune Überlappungsbereich ist der Bereich, in dem der Betrachter binokular sieht und Tiefe wahrnehmen kann. Bei genauer Betrachtung sehen Sie, dass jedes Auge den Würfel etwas anders sieht und die kombinierte Ansicht beide zu einer 3D-Form verschmilzt.

Im Allgemeinen definieren und verwalten Anwendungen nur das horizontale FOV. Weitere Informationen finden Sie unter [Die Optik von 3D](/de/docs/Web/API/WebXR_Device_API/Rendering#the_optics_of_3d).

#### Sichtfeld und Mixed-Reality-Geräte

Um ein ausreichend breites Sichtfeld zu erreichen, sodass die Augen des Benutzers glauben, die virtuelle Welt umgebe sie vollständig, muss das FOV zumindest annähernd die Breite des binokularen Sehbereichs erreichen. Einfache Headsets beginnen typischerweise bei etwa 90°, während die besten Headsets im Allgemeinen ein Sichtfeld von rund 150° haben. Da das FOV von der Größe der Linsen und davon abhängt, wie nah sie an den Augen des Benutzers liegen, gibt es Einschränkungen dafür, wie breit das FOV werden kann, ohne Linsen in die Augäpfel des Benutzers einzusetzen.

Ein breites FOV kann das Gefühl des Eintauchens des Benutzers erheblich verbessern. Die Vergrößerung des FOV kann jedoch auch das Gewicht und die Kosten des Headsets erhöhen.

### Freiheitsgrade

Der Begriff **Freiheitsgrade** gibt an, wie viel Bewegungsfreiheit der Benutzer innerhalb der virtuellen Welt hat. Dies hängt direkt damit zusammen, wie viele Bewegungsarten die WebXR-Hardwarekonfiguration erkennen und in die virtuelle Szene übertragen kann.

**Abbildung: Diagramm mit den Bewegungen, die mit Hardware mit 3 Freiheitsgraden möglich sind: Yaw, Roll und Pitch.**
![Diagramm mit den Bewegungen, die mit Hardware mit 3 Freiheitsgraden möglich sind: Yaw, Roll und Pitch.](3-degrees-of-freedom-min.svg)

#### Freiheit der Drehbewegung

Die ersten drei Freiheitsgrade sind **rotational**. Die rotationalen Freiheitsgrade sind:

- Pitch: nach oben und unten schauen
- Yaw: nach links und rechts schauen
- Roll: nach links und rechts neigen

In all diesen Fällen bleibt der Betrachter am selben Ort im Raum, während er sich um eine oder mehrere der drei Achsen dreht, um die Blickrichtung zu ändern. Ein System mit zwei Freiheitsgraden kann erkennen, wenn der Benutzer nach links und rechts oder nach oben und unten schaut, kann jedoch keine andere Art von Bewegung melden.

Ein typisches Basis-Headset bietet drei Freiheitsgrade und erkennt Drehungen um alle drei Achsen. Dies wird häufig mit der Kurzform **3DoF** bezeichnet.

#### Freiheit der Translationsbewegung

Die anderen drei Freiheitsgrade sind translational und ermöglichen es, Bewegungen durch den Raum zu erkennen: vorwärts und rückwärts, links und rechts, oben und unten. Die Unterstützung aller sechs Freiheitsgrade wird als **6DoF** bezeichnet.

![Diagramm zur Darstellung der Drehung um jede der drei Achsen in einer WebXR-Umgebung](xr-translation-headset.png)

Einige fortschrittlichere Headsets bieten zumindest minimale Unterstützung für die Erkennung von Translationsbewegungen. Um jedoch umfangreichere Bewegungen durch den Raum zu erfassen, sind normalerweise externe Sensoren wie Kameras erforderlich, die entweder sichtbares Licht oder Infrarot verwenden.

### WebXR-Sitzungsmodi

WebXR unterstützt sowohl Augmented-Reality-(AR)- als auch Virtual-Reality-(VR)-Sitzungen und verwendet dafür dieselbe API. Welchen Sitzungstyp Sie erstellen möchten, wird beim Erstellen der Sitzung angegeben. Dies geschieht durch die Angabe des passenden Sitzungsmodus-Strings für die Art der Sitzung, die Sie erstellen möchten.

#### Virtual Reality

In einer VR-Umgebung wird das gesamte Bild digital von Ihrer App oder Website erstellt, von Vordergrundobjekten bis hin zum Hintergrund oder Skybox. Ihr Code zum Zeichnen der Frames muss während jedes Frames jedes Pixel jeder Ansicht neu zeichnen, um mögliche zurückbleibende Artefakte zu vermeiden. Einige Plattformen stellen Ihnen möglicherweise zuvor geleerte Frames bereit, während andere die Leistung optimieren können, indem sie die Framebuffer nicht löschen, um nicht jedes Pixel zweimal pro Frame bearbeiten zu müssen.

In WebXR sind zwei VR-Sitzungsmodi verfügbar: **inline** und **immersive**. Ersterer wird durch den Sitzungsmodus-String `inline` angegeben, stellt die gerenderte Szene im Kontext eines Dokuments in einem Webbrowser dar und erfordert keine spezielle XR-Hardware zur Anzeige. Der immersive Sitzungsmodus wird durch den Sitzungsmodus `immersive-vr` angegeben. Dieser Sitzungsmodus erfordert ein XR-Gerät wie ein Headset und ersetzt die gesamte Welt durch die gerenderte Szene, wobei die für jedes Auge des Benutzers angezeigten Displays verwendet werden.

#### Augmented Reality

Bei Augmented Reality (AR) sieht der Benutzer die von Ihnen gerenderten Bilder über der physischen realen Umgebung um ihn herum. Da AR immer eine immersive Erfahrung ist, bei der die Szene die gesamte Welt um den Benutzer herum umfasst, statt in einem Bereich auf einem Bildschirm eingeschlossen zu sein, ist der einzige AR-Sitzungsmodus `immersive-ar`.

Es gibt zwei grundlegende Arten von AR-Geräten:

- Geräte, die Kameras verwenden, um die Welt vor dem Benutzer aufzunehmen, den WebXR-Inhalt über diesem Bild zu rendern und das Bild dann auf einem Bildschirm anzuzeigen. Zu diesen Geräten gehören Telefone, die die resultierende Szene als 2D-Darstellung auf dem Bildschirm des Geräts anzeigen, sowie Brillen, die ein Kamerapaar – eine für jedes Auge – verwenden, um die Szene stereoskopisch aufzunehmen und so die Tiefe der Welt beizubehalten. Die WebXR-Szene wird dann für jedes Auge mit dem aufgenommenen Hintergrund dieses Auges gerendert.
- Geräte, die transparente Brillen verwenden, damit der Benutzer die Welt sehen kann, während das gerenderte Bild über die Szene gelegt wird. Der Benutzer betrachtet damit direkt die reale Welt statt einer Reihe digitaler Fotos davon.

Beide Gerätetypen sollten auch VR-Sitzungen darstellen können. WebXR berücksichtigt im Allgemeinen nicht, welchen Gerätetyp Sie verwenden, und der Rendering-Prozess ist nahezu identisch mit dem für VR, außer dass Sie den Hintergrund oder die Skybox nicht vor dem Rendern jedes Frames löschen.

## Arten von WebXR-Hardware

Die einfachste XR-Darstellung besteht darin, die Szene direkt auf den Bildschirm des Benutzers zu rendern, entweder im Kontext eines Webdokuments oder im Vollbildmodus. Dies ist am häufigsten der Fall, wenn der Benutzer entweder kein dediziertes XR-Gerät besitzt oder die AR- oder VR-App auf einem Telefon oder einem anderen Handgerät betrachtet.

Einfachere und preisgünstigere XR-Geräte verwenden typischerweise einen integrierten Computer oder verbinden sich mit einem Smartphone und nutzen im Wesentlichen die mobile CPU und GPU, um Apps auszuführen, Bilder zu rendern und sie dem Benutzer anzuzeigen. Leistungsstärkere Lösungen lagern die Ausführung der Anwendung und die Grafikverarbeitung typischerweise an ein externes Gerät wie einen Desktopcomputer aus und sind entweder über ein Kabel mit dem Computer verbunden oder verwenden ein drahtloses Netzwerk, um die dem Benutzer anzuzeigenden Bilder zu empfangen.

### Headsets

Die meisten immersiven VR-Erfahrungen finden mithilfe einer Brille oder eines Headsets statt. Ein VR-Headset wird auf dem Kopf getragen und mit einem hinter dem Kopf verlaufenden Band befestigt. Es besitzt ein oder zwei Displays, deren Bildschirme mithilfe von Linsen auf die Augen fokussiert werden. Durch die Darstellung eines leicht unterschiedlichen Bildes für jedes Auge entsteht die Illusion von Tiefe, die dem Benutzer eine simulierte 3D-Erfahrung vermittelt.

![Zeichnung eines Standard-VR-Headsets](publicdomain-virtual_reality_headset.svg)

Die überwiegende Mehrheit der Headsets verwendet ein einzelnes Display, dessen Frame in zwei Hälften geteilt ist, wobei eine Hälfte auf jedes Auge des Benutzers fokussiert wird. Wenn ein Headset beispielsweise einen Bildschirm mit 2560x1440 verwendet, bei dem die linke Hälfte für die Ansicht des linken Auges und die rechte Hälfte für die Ansicht des rechten Auges verwendet wird, wird der Framebuffer folgendermaßen genutzt:

![Diagramm zur Darstellung, wie ein Framebuffer zwischen den Blickpunkten zweier Augen aufgeteilt wird](twoviewsoneframebuffer.svg)

Die einfachsten Headsets besitzen keine integrierten Sensoren und fokussieren jede Bildschirmhälfte in das entsprechende Auge. Ein häufiges Beispiel hierfür ist [Google Cardboard](https://arvr.google.com/cardboard/), eine ursprünglich von Google entwickelte Art von Headset, die kostengünstig aus Pappe oder anderen preiswerten Materialien hergestellt werden kann. Diese Geräte funktionieren häufig, indem Sie Ihr Telefon in das Headset einsetzen, sodass dessen Bildschirm und integrierter Grafikprozessor zum Rendern und Anzeigen der XR-Szene verwendet werden können.

Fortschrittlichere Headsets haben integrierte Displays und werden mithilfe eines elastischen Bands, eines Riemens oder eines Riemens mit Klettverschluss am Kopf befestigt. Diese Headsets können integrierte Lautsprecher und ein Mikrofon und/oder Anschlüsse zum Befestigen externer Geräte umfassen. Darüber hinaus können diese Headsets verschiedene Sensoren besitzen, um zu erkennen, wenn sich das Headset durch den Raum bewegt. Die Arten und die Anzahl der enthaltenen Sensoren bestimmen, wie viele [Freiheitsgrade](#freiheitsgrade) der Benutzer hat.

### Schutzbrillen und Brillen

XR-Schutzbrillen ähneln Headsets insofern, als Grafik-Anzeigeflächen vor den Augen platziert werden, um die Ansichten einer Szene zu rendern, die zur Simulation der Tiefe der simulierten Szene erforderlich sind.

Der Unterschied besteht darin, dass die Schutzbrillen die reale Welt durchlassen und das gerenderte Bild über die physische Umgebung des Benutzers legen. Dies geschieht ohne die Welt digital zu reproduzieren, wie es bei einem vollständigen Headset erforderlich wäre. Stattdessen ist die Anzeigefläche transparent und entspricht, wenn nichts angezeigt wird, im Wesentlichen einer normalen Brille. Wenn Objekte gezeichnet werden, werden sie auf die Linsen der Schutzbrille gezeichnet und blockieren die physische Umgebung entweder teilweise oder vollständig davor, durch den verdeckten Bereich der Linse gesehen zu werden.

### CAVEs

Eine **Cave Automated Virtual Environment** (**CAVE**) ist eine immersive VR-Umgebung, in der die Szene auf die Wände projiziert oder anderweitig dort angezeigt wird, möglicherweise auch an der Decke und/oder auf dem Boden. Dadurch wird der Benutzer vollständig von der Simulation umgeben und kann in die Szene eintauchen. Der Benutzer trägt eine 3D-Brille, die sowohl den 3D-Effekt zum projizierten Bild hinzufügt als auch dem System ermöglicht, Vordergrundobjekte in die Welt zu rendern.

Die Aktivität des Benutzers kann mithilfe von Bewegungssensoren überwacht werden, die der Benutzer trägt oder hält, oder – zunehmend häufiger – mithilfe von Infrarotkameras, die die Bewegungen des Benutzers erkennen. Im Raum platzierte Lautsprecher sorgen zudem für immersiven Klang.

Diese Systeme sind unter alltäglichen Benutzern nicht verbreitet; sie sind meist experimentell, werden für Demonstrationszwecke verwendet oder von größeren Organisationen eingesetzt. Ein Nachteil besteht darin, dass die CAVE nichts simulieren kann, das näher als die Wand liegt.

## Wichtige Hinweise zu Gesundheit und Sicherheit

Da der gesamte Vorgang des Erschaffens einer virtuellen 3D-Welt im Wesentlichen ein Trick ist, der unser Verständnis davon ausnutzt, wie Augen Licht sammeln und wie das Gehirn die gesammelten Daten interpretiert, ist es wichtig zu bedenken, dass Softwaredesigner und -entwickler deshalb die Verantwortung haben, noch sorgfältiger als üblich sicherzustellen, dass die Ergebnisse korrekt sind.

### Virtual-Reality-Krankheit

**[Virtual-Reality-Krankheit](https://en.wikipedia.org/wiki/Virtual_reality_sickness)** ist ein Zustand, bei dem eine Person während und manchmal für kurze Zeit nach einer Virtual-Reality-Erfahrung Unbehagen, Orientierungslosigkeit oder sogar starke Übelkeit verspürt.

Es gibt verschiedene Theorien darüber, was genau an Virtual Reality bei manchen Menschen Unwohlsein oder Übelkeit verursacht. Die meisten konzentrieren sich auf die Idee, dass selbst subtile Unterschiede zwischen dem, was das Gehirn erwartet, und dem, was gesehen wird, diese Symptome verursachen können.

Fehler, Fehlstellungen oder Verzerrungen können die Augen und das Gehirn verwirren und von schmerzenden Augen oder Kopfschmerzen bis hin zu Schwindel, Benommenheit oder potenziell starker Übelkeit führen. Es ist außerdem wichtig, auf alle möglicherweise angezeigten Inhalte zu achten, die aufgrund der allumfassenden Natur eines Headsets Anfälle auslösen könnten; der Benutzer kann möglicherweise nicht schnell von den von Ihnen präsentierten Bildern wegsehen, wenn diese Unbehagen verursachen.

### Physische Risiken

Ein weiteres potenzielles Problem bei immersiver Virtual Reality besteht darin, dass der Benutzer mit physischen Hindernissen kollidiert, wenn er sich beim Tragen eines Headsets in seinem Raum bewegt. Sofern er sich nicht in einer sicheren Umgebung befindet, ist es wichtig, Hinweise bereitzustellen, die seine Bewegung einschränken, etwa durch die Simulation eines Bereichs, der innerhalb seiner physischen Umgebung bekanntermaßen sicher ist.

Wenn das Headset des Benutzers über ein Kabel mit einem Gerät verbunden ist, sollten Sie möglichst sicherstellen, dass der Benutzer nicht dazu aufgefordert oder verleitet wird, sich so zu bewegen, dass er am Headset-Kabel zieht oder daran reißt. Dies könnte nicht nur Verletzungen verursachen, sondern auch erhebliche Schäden am Headset oder Gerät des Benutzers verursachen, unabhängig davon, ob es sich um ein Telefon oder einen Computer handelt.

Wenn Sie Inhalte haben, die für Benutzer ein Risiko darstellen könnten, sollten Sie eine Warnmeldung bereitstellen. Ebenso lohnt es sich, Benutzer daran zu erinnern, nach Möglichkeit sitzen zu bleiben und sich beim Tragen eines Headsets vorsichtig zu bewegen, wenn die Erfahrung vollständig immersive Virtual Reality ist. Vorsicht ist immer besser als Nachsicht!

## Die Rolle von Frameworks

Da 3D-Grafik – und insbesondere Mixed Reality – viel oft komplizierte Mathematik, Datenverwaltung und andere komplexe Aufgaben umfasst, ist es unwahrscheinlich, dass Sie in den meisten Fällen WebGL direkt zum Rendern Ihrer Szene verwenden. Stattdessen werden Sie wahrscheinlich den Großteil Ihrer Arbeit mithilfe eines der Frameworks oder einer der Bibliotheken erledigen, die auf WebGL aufbauen und dessen Verwendung komfortabler machen.

Ein besonderer Vorteil der Verwendung eines Frameworks statt der direkten Verwendung der WebGL API besteht darin, dass Bibliotheken in der Regel virtuelle Kamerafunktionalität implementieren. OpenGL – und damit auch WebGL – bietet nicht direkt eine Kameransicht. Die Verwendung einer Bibliothek, die diese für Sie simuliert, kann Ihre Arbeit erheblich erleichtern, insbesondere beim Erstellen von Code, der freie Bewegung durch Ihre virtuelle Welt ermöglicht.

Da [WebGL](/de/docs/Web/API/WebGL_API) zum Rendern der 3D-Welt in die WebXR-Sitzung verwendet wird, sollten Sie zunächst mit der allgemeinen Verwendung von WebGL und den Grundlagen der 3D-Grafik im Allgemeinen vertraut sein.

### Allgemeine 3D-Frameworks

Diese Frameworks eignen sich für allgemeine Programmierung ebenso wie für die Spieleentwicklung, wenn Sie die Logik selbst implementieren möchten. Sie sind zum Erstellen und Animieren von 3D-Szenen unabhängig vom Kontext konzipiert.

- [A-Frame](https://aframe.io/) (speziell für die Erstellung von WebXR-basierten Apps entwickelt)
- [Babylon.js](https://www.babylonjs.com/)
- [Three.js](https://threejs.org/)

### Spiele-Toolkits

Die Spiele-Toolkits sind für Spieleentwickler konzipiert und enthalten häufig spielspezifische Funktionen wie Physikmodelle, Eingabesteuerungssysteme, Asset-Verwaltung, 3D-Soundwiedergabe und Ähnliches.

- [PlayCanvas](https://playcanvas.com/)

## Nächste Schritte

Mit diesen grundlegenden Informationen sind Sie bereit, die nächsten Schritte in die Welt der Mixed Reality zu unternehmen. Die folgenden Artikel können helfen.

- [Lebenszyklus einer WebXR-Anwendung](/de/docs/Web/API/WebXR_Device_API/Lifecycle)
- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Bewegung, Ausrichtung und Motion: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
