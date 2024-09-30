---
title: Grundlagen von WebXR
slug: Web/API/WebXR_Device_API/Fundamentals
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR, mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im Kern, bietet die benötigte Funktionalität, um sowohl erweiterte als auch virtuelle Realität (AR und VR) ins Web zu bringen. Zusammen werden diese Technologien als **Mixed Reality (MR)** oder **Cross Reality (XR)** bezeichnet. Mixed Reality ist ein großes und komplexes Thema, bei dem es viel zu lernen gibt und viele andere APIs integriert werden müssen, um den Nutzern ein fesselndes Erlebnis zu bieten.

Dieser Leitfaden bietet einen Überblick darüber, was WebXR ist und wie es funktioniert, sowie die grundlegende Basis, die notwendig ist, um mit der Entwicklung von Augmented und Virtual Reality-Erlebnissen für das Web zu beginnen.

## Was WebXR ist und nicht ist

WebXR ist eine API für Webinhalte und -anwendungen, um eine Schnittstelle zu Mixed-Reality-Hardware wie VR-Headsets und Brillen mit integrierten Augmented-Reality-Funktionen zu nutzen. Dies umfasst sowohl die Verwaltung des Prozesses zur Darstellung der Ansichten, die benötigt werden, um das 3D-Erlebnis zu simulieren, als auch die Fähigkeit, die Bewegung des Headsets (oder anderer bewegungserkennender Ausrüstung) zu erfassen und die erforderlichen Daten bereitzustellen, um die dem Benutzer angezeigten Bilder zu aktualisieren.

WebXR bietet auch Unterstützung für die Annahme von Eingaben von Steuergeräten wie Hand-VR-Controllern oder speziellen Mixed-Reality-Gamepads.

_WebXR ist keine Rendertechnologie und bietet keine Funktionen zum Verwalten oder Rendern von 3D-Daten auf dem Display._ Dies ist eine wichtige Tatsache, die man im Hinterkopf behalten sollte. Während WebXR das Timing, die Planung und die verschiedenen Standpunkte, die beim Zeichnen der Szene relevant sind, verwaltet, weiß es nicht, wie man Modelle lädt und verwaltet, noch wie man sie rendert und texturiert, und so weiter. Dieser Teil liegt ganz bei Ihnen. Glücklicherweise stehen WebGL und die verschiedenen auf WebGL basierenden Frameworks und Bibliotheken zur Verfügung, um all das wesentlich zu erleichtern.

### Wie unterscheidet sich WebXR von WebVR?

WebVR wurde als experimentelle API angesehen, die Entwicklern half, die besten Ansätze zur Erstellung einer Virtual-Reality-API im Web zu ermitteln. Browser-Implementatoren fügten WebVR-Unterstützung zu Browsern hinzu, was es Webentwicklern ermöglichte, zu experimentieren. Aber bald wurde klar, dass es sinnvoller wäre, eine neue Spezifikation zu beginnen, als zu versuchen, WebVR zu "reparieren", um eine API für virtuelle Realität im Web fertigzustellen.

Das führte zur Entstehung von WebXR. Der grundlegende Unterschied ist, dass WebXR nicht nur virtuelle Realität, sondern auch erweiterte Realität unterstützt, die virtuelle Objekte mit der Umgebung des Benutzers verbindet.

Ein weiterer entscheidender Unterschied ist, dass WebXR integrierte Unterstützung für die fortschrittlichen [Eingabegeräte](/de/docs/Web/API/WebXR_Device_API/Inputs) bietet, die mit den meisten Mixed-Reality-Headsets verwendet werden, während sich WebVR auf die [Gamepad API](/de/docs/Web/API/Gamepad_API) stützte, um die Controller zu unterstützen. In WebXR werden die primären Selektions- und Quetschaktionen direkt mithilfe von Ereignissen unterstützt, während andere Steuerungen über eine spezielle WebXR-spezifische Implementierung des [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekts verfügbar sind.

## Grundlegende Konzepte

Bevor wir zu sehr ins Detail gehen, betrachten wir einige grundlegende Konzepte, die Sie kennen müssen, bevor Sie lernen, wie man XR-Code entwickelt.

### Sichtfeld

Der Begriff **Sichtfeld** (**FOV**) gilt für jede visuelle Technologie, von alten Filmkameras bis hin zu modernen digitalen Videokameras, einschließlich der Kameras in Computern und mobilen Geräten.

![Diagramm, das binokulares Sehen zeigt.](binocular-vision.svg)

#### Was ist das Sichtfeld?

Das Sichtfeld ist der Bereich, in dem Sie die Umgebung sehen können. Die Breite des Sichtfelds, angegeben in Grad oder Radianten, wird als Winkel gemessen, der den Bogen vom äußersten linken Rand Ihres Sichtfelds bis zum äußersten rechten Rand definiert.

Ein menschliches Auge kann ein FOV von etwa 135° wahrnehmen. Angenommen, eine Person hat zwei gesunde Augen, beträgt das gesamte Sichtfeld etwa 200° bis 220° Breite. Warum ist das FOV bei zwei Augen breiter, aber nicht doppelt so groß wie das FOV eines einzelnen Auges? Es liegt daran, dass sich die FOVs der beiden Augen stark überlappen. Diese Überlappung verleiht uns die Tiefenwahrnehmung, die etwa 115° breit ist. Außerhalb des Überlappungsbereichs fällt unser Sehsinn auf ein Monokular zurück.

Die hier gezeigte Zeichnung veranschaulicht das Konzept des FOV: blaue Keil für das linke Auge, rote Keil für das rechte Auge. Der hellbraune Überlappungsbereich ist der Bereich, in dem der Betrachter binokulares Sehen hat und Tiefe wahrnehmen kann. Wenn Sie genau hinsehen, werden Sie feststellen, dass jedes Auge den Würfel leicht unterschiedlich sieht und die kombinierte Ansicht die beiden zu einer 3D-Form verschmilzt.

In der Regel definieren und verwalten Anwendungen nur das horizontale FOV. Für weitere Details siehe [Die Optik von 3D](/de/docs/Web/API/WebXR_Device_API/Rendering#the_optics_of_3d).

#### Sichtfeld und Mixed-Reality-Geräte

Um ein ausreichend breites Sichtfeld zu erreichen, das die Augen des Benutzers dazu bringt, zu glauben, dass die virtuelle Welt sie vollständig umgibt, muss das FOV zumindest die Breite des Bereichs der binokularen Sicht erreichen. Basische Headsets beginnen in der Regel bei etwa 90°, während die besten Headsets ein Sichtfeld von rund 150° aufweisen. Da das FOV eine Frage der Größe der Linsen und ihrer Nähe zu den Augen des Benutzers ist, gibt es Einschränkungen, wie weit das FOV gehen kann, ohne Linsen in die Augen des Benutzers einzusetzen.

Ein breites FOV kann das Eintauchen des Benutzers erheblich verbessern. Das Erhöhen des FOV kann jedoch auch das Gewicht und die Kosten des Headsets erhöhen.

### Freiheitsgrade

Der Begriff **Freiheitsgrade** gibt an, wie viel Bewegungsfreiheit der Benutzer innerhalb der virtuellen Welt hat. Dies steht in direktem Zusammenhang mit der Anzahl der Bewegungsarten, die die WebXR-Hardwarekonfiguration erkennen und in der virtuellen Szene reproduzieren kann.

**Abbildung: Diagramm, das die mit 3 Freiheitsgraden möglichen Bewegungen zeigt: Gieren, Rollen und Neigen.**
![Diagramm, das die mit 3 Freiheitsgraden möglichen Bewegungen zeigt: Gieren, Rollen und Neigen.](3-degrees-of-freedom-min.svg)

#### Freiheit der Rotationsbewegung

Die ersten drei Freiheitsgrade sind **rotational**. Die Rotationsfreiheitsgrade sind:

- Pitch: nach oben und unten schauen
- Yaw: nach links und rechts schauen
- Roll: links und rechts neigen

In allen diesen Fällen bleibt der Betrachter am selben Ort im Raum und dreht sich auf einer oder mehreren der drei Achsen, um die Richtung zu ändern, in die er schaut. Ein System mit zwei Freiheitsgraden kann erkennen, wenn der Benutzer nach links und rechts oder nach oben und unten schaut, kann jedoch keine andere Bewegungsart melden.

Ein typisches Basis-Headset bietet drei Freiheitsgrade, die Rotationen um alle drei Achsen erkennen. Dies wird oft als **3DoF** abgekürzt.

#### Freiheit der translationalen Bewegung

Die anderen drei Freiheitsgrade sind translational und bieten die Fähigkeit, Bewegungen durch den Raum zu erfassen: vorwärts und rückwärts, links und rechts, nach oben und unten. Unterstützung für alle sechs Freiheitsgrade wird als **6DoF** bezeichnet.

![Diagramm, das Rotation um jede der drei Achsen in einer WebXR-Umgebung zeigt](xr-translation-headset.png)

Einige fortschrittlichere Headsets bieten zumindest minimale Unterstützung für die Erfassung translatorialer Bewegung, aber um substanzielle Bewegungen im Raum zu erfassen, sind in der Regel externe Sensoren erforderlich, wie Kameras (entweder mit sichtbarem Licht oder Infrarot).

### WebXR-Sitzungsmodi

WebXR bietet Unterstützung für sowohl Augmented Reality (AR) als auch Virtual Reality (VR) Sitzungen, unter Verwendung derselben API. Welche Art von Sitzung Sie erstellen möchten, wird bei der Erstellung der Sitzung angegeben. Dies geschieht durch Angabe des entsprechenden Sitzungsmodustrings für die Art der Sitzung, die Sie erstellen möchten.

#### Virtuelle Realität

In einer VR-Umgebung wird das gesamte Bild digital von Ihrer App oder Website erstellt, von Vordergrundobjekten bis zum Hintergrund oder Himmel. Ihr Frame-Zeichnungscode muss jedes Pixel jeder Ansicht während jedes Frames neu zeichnen, um zu vermeiden, dass möglicherweise Artefakte zurückbleiben. Einige Plattformen stellen Ihnen möglicherweise zuvor gelöschte Frames zur Verfügung, während andere die Leistung optimieren, indem sie die Framebuffer nicht löschen, um zu vermeiden, dass jedes Pixel zweimal pro Frame berührt werden muss.

Es gibt zwei VR-Sitzungsmodi in WebXR: **inline** und **immersive**. Der erstere, durch den Sitzungsmodustring `inline` spezifiziert, präsentiert die gerenderte Szene innerhalb des Kontexts eines Dokuments in einem Webbrowser und erfordert keine spezielle XR-Hardware zum Betrachten. Der immersive Sitzungsmodus wird mit dem Sitzungsmodus `immersive-vr` angegeben. Dieser Sitzungsmodus erfordert ein XR-Gerät wie ein Headset und ersetzt die gesamte Welt durch die gerenderte Szene unter Verwendung der für jedes Auge des Benutzers angezeigten Displays.

#### Erweiterte Realität

In der erweiterten Realität (AR) sieht der Benutzer die von Ihnen gerenderten Bilder über die physische, reale Umgebung um sie herum gelegt. Da AR immer ein immersives Erlebnis ist, bei dem die Szene die ganze Welt um den Benutzer umfasst (anstatt in einer Box auf einem Bildschirm eingeschlossen zu sein), ist der einzige AR-Sitzungsmodus `immersive-ar`.

Es gibt zwei grundlegende Arten von AR-Geräten:

- Geräte, die Kameras verwenden, um die Welt vor dem Benutzer zu erfassen, das WebXR-Inhaltbild über dieses Bild rendern und das Bild auf einem Bildschirm anzeigen. Diese Geräte umfassen Telefone, die die resultierende Szene in einer 2D-Darstellung auf dem Bildschirm des Geräts anzeigen, sowie Brillen, die ein Kamerapaar verwenden, eines für jedes Auge, um die Szene in Stereo zu erfassen, um die Tiefe der Welt zu erhalten, wobei die WebXR-Szene dann für jedes Auge mit dem erfassten Hintergrund dieses Auges gerendert wird.
- Geräte, die transparente Brillen verwenden, um dem Benutzer diese Welt sehen zu lassen, während das gerenderte Bild auf die Szene überlagert wird. Der Benutzer sieht also direkt die reale Welt anstelle einer Reihe von digitalen Fotos davon.

Beide Gerätetypen sollten auch in der Lage sein, VR-Sitzungen zu präsentieren. WebXR interessiert sich in der Regel nicht dafür, welche Art von Gerät Sie verwenden, und der Renderprozess ist fast identisch mit dem für VR, abgesehen davon, dass Sie den Hintergrund oder den Himmel nicht löschen, bevor Sie jedes Frame rendern.

## Arten von WebXR-Hardware

Die einfachste XR-Darstellung beinhaltet das Rendern der Szene direkt auf den Bildschirm des Benutzers, entweder im Kontext eines Webdokuments oder im Vollbildmodus. Dies ist am häufigsten, wenn der Benutzer entweder kein dediziertes XR-Gerät hat oder die AR- oder VR-App auf einem Telefon oder einem anderen Handgerät betrachtet.

Einfachere und preisgünstigere XR-Geräte verwenden in der Regel einen integrierten Computer oder verbinden sich mit einem Smartphone, wobei im Wesentlichen die mobile CPU und GPU zum Ausführen von Apps, Rendern von Bildern und Anzeigen an den Benutzer genutzt werden. Leistungsstärkere Lösungen lagern in der Regel die Ausführung von Anwendungen und die Grafikverarbeitung an ein externes Gerät wie einen Desktop-Computer aus und sind entweder über ein Kabel an den Computer angeschlossen oder nutzen ein drahtloses Netzwerk, um die Bilder zu empfangen, die an den Benutzer angezeigt werden sollen.

### Headsets

Die meisten immersiven VR-Erfahrungen erfolgen mit Schutzbrillen oder einem Headset irgendeiner Art. Ein VR-Headset wird auf dem Kopf getragen, mit einem Riemen, der hinter dem Kopf verläuft, um es an Ort und Stelle zu befestigen, und einem oder mehreren Displays, deren Bildschirme mit Linsen auf die Augen fokussiert werden. Durch das Präsentieren eines leicht unterschiedlichen Bildes für jedes Auge wird die Illusion von Tiefe erzeugt, die dem Benutzer eine simulierte 3D-Erfahrung bietet.

![Zeichnung eines Standard-VR-Headsets](publicdomain-virtual_reality_headset.svg)

Die überwiegende Mehrheit der Headsets verwendet ein einzelnes Display, dessen Rahmen in zwei Hälften geteilt ist, wobei eine Hälfte dem linken Auge und die andere Hälfte dem rechten Auge fokussiert wird. Beispielsweise, wenn ein Headset einen 2560x1440-Bildschirm verwendet, wobei die linke Hälfte für die Ansicht des linken Auges und die rechte Hälfte für die des rechten Auges genutzt wird, wird der Framebuffer wie folgt genutzt:

![Diagramm, das zeigt, wie ein Framebuffer zwischen den Ansichten von zwei Augen aufgeteilt ist](twoviewsoneframebuffer.svg)

Die einfachsten Headsets haben keine integrierten Sensoren und fokussieren jede Hälfte des Bildschirms in das entsprechende Auge. Ein weit verbreitetes Beispiel dafür ist [Google Cardboard](https://arvr.google.com/cardboard/), eine Art Headset, die ursprünglich von Google entwickelt wurde und kostengünstig mit Karton oder anderen preiswerten Materialien hergestellt werden kann. Diese Geräte funktionieren oft, indem Sie Ihr Telefon in das Headset einrasten, sodass sein Bildschirm und der an Bord befindliche Grafikprozessor verwendet werden können, um die XR-Szene zu rendern und anzuzeigen.

Fortschrittlichere Headsets haben integrierte Displays und sind am Kopf befestigt, entweder mit einem elastischen Band oder einem Band mit Klettverschluss. Diese Headsets können integrierte Lautsprecher und Mikrofon sowie Anschlüsse zum Anbringen externer Geräte enthalten. Darüber hinaus können diese Headsets verschiedene Sensoren zur Erkennung von Bewegungen haben, wenn sich das Headset im Raum bewegt. Die Arten und Anzahl der Sensoren bestimmen, wie viele [Freiheitsgrade](#freiheitsgrade) der Benutzer hat.

### Schutzbrillen und Brillen

XR-Schutzbrillen ähneln Headsets, da sie Grafikdarstellungsflächen vor den Augen platzieren, um die Ansichten einer Szene zu rendern, die die Tiefe der simulierten Szene imitieren.

Der Unterschied besteht darin, dass die Schutzbrillen die reale Welt durchlassen, das gerenderte Bild über die physische Umwelt des Benutzers legen, ohne diese digital wiederzugeben, wie es mit einem vollständigen Headset erforderlich wäre. Stattdessen ist die Anzeigeoberfläche transparent und unterscheidet sich, wenn nichts angezeigt wird, im Wesentlichen nicht von normalen Brillen. Wenn Objekte gezeichnet werden, werden sie auf die Linsen der Schutzbrillen gezeichnet, wodurch der physische Hintergrund teilweise oder vollständig blockiert wird.

### CAVEs

Ein **Cave Automated Virtual Environment** (**CAVE**) ist eine immersive VR-Umgebung, in der die Szene auf die Wände projiziert oder anderweitig angezeigt wird (eventuell auch auf die Decke bzw. den Boden), wodurch der Benutzer vollständig mit der Simulation umgeben wird und eine intensiveres Eintauchen in die Szene ermöglicht wird. Der Benutzer trägt 3D-Brillen, die sowohl den 3D-Effekt dem projizierten Bild hinzufügen, als auch dem System eine Möglichkeit bieten, Vordergrundobjekte in die Welt zu rendern.

Die Aktivitäten des Benutzers können mithilfe von Bewegungssensoren überwacht werden, die vom Benutzer getragen oder gehalten werden, oder, zunehmend häufiger, durch Infrarotkameras, die die Bewegungen des Benutzers erkennen. Lautsprecher, die rund um die Kammer platziert sind, bieten ein immersives Klangerlebnis.

Diese sind bei Alltagsnutzern nicht sehr verbreitet; sie werden meist entweder zu Experimentierzwecken, für Demonstrationen oder von größeren Organisationen verwendet. Ein Nachteil besteht darin, dass die CAVE nichts simulieren kann, das näher ist als die Wand.

## Wichtige Gesundheit- und Sicherheits-Hinweise

Da die gesamte Erstellung einer virtuellen 3D-Welt im Wesentlichen ein Trick ist, der sich die Erkenntnisse über die Erfassung von Licht durch die Augen und die Interpretation der gesammelten Daten durch das Gehirn zunutze macht, ist es wichtig zu bedenken, dass Software-Designer und -Entwickler eine noch größere Verantwortung haben als üblich, um sicherzustellen, dass die Ergebnisse korrekt sind.

### Virtual-Reality-Übelkeit

**[Virtual-Reality-Übelkeit](https://en.wikipedia.org/wiki/Virtual_reality_sickness)** ist eine Erkrankung, bei der eine Person, die virtuelle Realität erlebt, Unwohlsein, Desorientierung oder sogar schwere Übelkeit während und manchmal noch eine kurze Zeit nach dem Erlebnis empfindet.

Es gibt eine Reihe von Theorien darüber, was genau virtuelle Realität bei einigen Menschen das Unwohlsein oder die Übelkeit verursacht, wobei die meisten auf der Idee beruhen, dass selbst subtile Unterschiede zwischen dem, was das Gehirn denkt, dass geschehen sollte, und dem, was gesehen wird, diese Symptome verursachen können.

Defekte, Fehlstellungen oder Verzerrungen können die Augen und das Gehirn verwirren, was in unterschiedlichen Fällen von schmerzenden Augen oder Kopfschmerzen bis hin zu Schwindel, Benommenheit oder potenziell schwerer Übelkeit führen kann. Es ist auch wichtig, auf alles aufmerksam zu sein, das möglicherweise das Potenzial hat, Anfälle auszulösen, insbesondere angesichts der allumfassenden Natur eines Headsets; der Benutzer kann möglicherweise nicht schnell von den von Ihnen präsentierten Bildern wegsehen, wenn sie Unbehagen verursachen.

### Physische Risiken

Ein weiteres potenzielles Problem mit immersiver virtueller Realität ist, dass der Benutzer physische Hindernisse treffen könnte, wenn er sich durch den Raum bewegt, während er ein Headset trägt. Es ist wichtig, Hinweise zu geben, um seine Bewegung einzuschränken, es sei denn, sie befinden sich in einer sicheren Umgebung, z. B. indem Sie einen Raum simulieren, der als sicher innerhalb ihrer physischen Umgebung bekannt ist.

Falls das Headset des Benutzers an ein Gerät gekoppelt ist, ist es sinnvoll, zu versuchen, sicherzustellen, dass der Benutzer nicht dazu verleitet wird, sich so zu bewegen, dass er am Headset-Kabel zieht oder reißt, was nicht nur zu Verletzungen führen könnte, sondern auch erheblichen Schaden an dem Headset oder Gerät des Benutzers (ob es sich um ein Telefon oder einen Computer handelt) verursachen könnte.

Wenn Sie Inhalte haben, die für Benutzer risikobehaftet sein könnten, sollten Sie eine Warnmeldung bereitstellen. Ebenso ist es ratsam, die Benutzer an das Sitzen zu erinnern, wenn möglich, und vorsichtig zu sein, wenn sie sich während des Tragens eines Headsets durch die Umgebung bewegen, wenn das Erlebnis vollständig immersive virtuelle Realität ist. Vorsicht ist immer besser als Nachsicht!

## Die Rolle von Frameworks

Da 3D-Grafik—und insbesondere die Mixed Reality—eine Menge komplexer Mathematik, Datenmanagement und anderer komplizierter Aufgaben beinhaltet, ist es unwahrscheinlich, dass Sie WebGL direkt nutzen, um Ihre Szene zu rendern. Stattdessen werden Sie wahrscheinlich den Großteil Ihrer Arbeit mithilfe eines der Frameworks oder Bibliotheken ausführen, die auf WebGL aufgebaut sind, um es benutzerfreundlicher zu machen.

Ein besonderer Vorteil der Nutzung eines Frameworks statt der direkten Nutzung der WebGL-API ist, dass Bibliotheken in der Regel virtuelle Kamerafunktionalitäten implementieren. OpenGL (und somit WebGL in der Verlängerung) bietet keine direkte Kameradarstellung; eine Bibliothek, die eine solche simuliert, kann Ihre Arbeit sehr erleichtern, insbesondere beim Erstellen von Code, der freie Bewegung durch Ihre virtuelle Welt ermöglicht.

Da das [WebGL](/de/docs/Web/API/WebGL_API) für das Rendering der 3D-Welt in die WebXR-Sitzung verwendet wird, sollten Sie zuerst mit dem allgemeinen Gebrauch von WebGL und mit den Grundlagen der 3D-Grafik im Allgemeinen vertraut sein.

### Allgemeine 3D-Frameworks

Diese Frameworks eignen sich gut für allgemeine Programmierung sowie für die Spieleentwicklung, wenn Sie die Logik selbst durchführen möchten. Sie sind darauf ausgelegt, 3D-Szenen zu erstellen und zu animieren, unabhängig vom Kontext.

- [A-Frame](https://aframe.io/) (speziell für die Erstellung von WebXR-basierten Apps entwickelt)
- [Babylon.js](https://www.babylonjs.com/)
- [Three.js](https://threejs.org/)

### Spiele-Toolkits

Die Spiele-Toolkits sind für Spieleentwickler entwickelt und beinhalten häufig spielspezifische Funktionen wie Physikmodelle, Eingabesteuerungssysteme, Asset-Management, 3D-Sound-Wiedergabe und dergleichen.

- [PlayCanvas](https://playcanvas.com/)

## Nächste Schritte

Mit diesen grundlegenden Fakten in der Hand sind Sie bereit, die nächsten Schritte in die Welt der Mixed Reality zu unternehmen. Die folgenden Artikel können helfen.

- [WebXR-Anwendungslebenszyklus](/de/docs/Web/API/WebXR_Device_API/Lifecycle)
- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
