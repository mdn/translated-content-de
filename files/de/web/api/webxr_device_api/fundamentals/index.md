---
title: Grundlagen von WebXR
slug: Web/API/WebXR_Device_API/Fundamentals
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR, mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im Kern, bietet die Funktionalitäten, die nötig sind, um sowohl Augmented Reality (AR) als auch Virtual Reality (VR) ins Web zu bringen. Zusammen werden diese Technologien als **Mixed Reality (MR)** oder **Cross Reality (XR)** bezeichnet. Mixed Reality ist ein großes und komplexes Thema, mit viel zu lernen und vielen anderen APIs, die zusammengebracht werden müssen, um ein fesselndes Erlebnis für Benutzer zu schaffen.

Dieser Leitfaden bietet einen Überblick darüber, was WebXR ist und wie es funktioniert, sowie die grundlegende Basis, die notwendig ist, um die Entwicklung von Augmented- und Virtual-Reality-Erfahrungen für das Web zu beginnen.

## Was WebXR ist und nicht ist

WebXR ist eine API für Webinhalte und Apps, die verwendet werden, um mit Mixed-Reality-Hardware wie VR-Headsets und Brillen mit integrierten Augmented-Reality-Funktionen zu interagieren. Dazu gehört sowohl die Verwaltung des Prozesses der Darstellung der Ansichten, die zur Simulation des 3D-Erlebnisses benötigt werden, als auch die Fähigkeit, die Bewegung des Headsets (oder anderer Bewegungssensorgeräte) zu erfassen und die benötigten Daten bereitzustellen, um die dem Benutzer gezeigten Bilder zu aktualisieren.

WebXR unterstützt zudem die Annahme von Eingaben von Steuergeräten wie Handheld-VR-Controllern oder spezialisierten Mixed-Reality-Gamepads.

_WebXR ist keine Rendering-Technologie und bietet keine Funktionen zur Verwaltung von 3D-Daten oder deren Darstellung auf dem Bildschirm._ Dies ist ein wichtiger Punkt, den Sie sich merken sollten. Während WebXR das Timing, die Planung und die verschiedenen Blickwinkel verwaltet, die beim Zeichnen der Szene relevant sind, _weiß_ es nicht, wie Modelle geladen und verwaltet werden, oder wie sie gerendert und texturiert werden. Dieser Teil liegt ganz bei Ihnen. Glücklicherweise stehen WebGL und die verschiedenen darauf basierenden Frameworks und Bibliotheken zur Verfügung, um all dies erheblich zu erleichtern.

### Worin unterscheidet sich WebXR von WebVR?

WebVR wurde als experimentelle API betrachtet, um Spezifikationsautoren zu helfen, die besten Ansätze zur Erstellung einer Virtual-Reality-API im Web zu finden. Browserentwickler fügten WebVR-Unterstützung in Browser ein, was Webentwicklern Experimente ermöglichte. Es wurde jedoch schnell klar, dass es sinnvoller wäre, eine neue Spezifikation zu starten, um eine API für Virtual Reality im Web fertigzustellen, als zu versuchen, WebVR zu "reparieren".

Das führte zur Geburt von WebXR. Der grundlegende Unterschied ist, dass WebXR nicht nur Virtual Reality, sondern auch Augmented Reality unterstützt, welche virtuelle Objekte mit der Umgebung des Benutzers kombiniert.

Ein weiterer wesentlicher Unterschied ist, dass WebXR integrierte Unterstützung für die fortschrittlichen [Eingabegeräte](/de/docs/Web/API/WebXR_Device_API/Inputs) bietet, die mit den meisten Mixed-Reality-Headsets verwendet werden, während WebVR auf die [Gamepad API](/de/docs/Web/API/Gamepad_API) für die Controller-Unterstützung angewiesen war. In WebXR werden die primären Select- und Squeeze-Aktionen direkt mittels Ereignissen unterstützt, während andere Steuerungen über eine spezielle, WebXR-spezifische Implementierung des [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekts verfügbar sind.

## Grundkonzepte

Bevor wir ins Detail gehen, betrachten wir einige grundlegende Konzepte, die Sie kennen müssen, bevor Sie lernen, wie man XR-Code entwickelt.

### Sichtfeld

Der Begriff **Sichtfeld** (**FOV**) gilt für jede visuelle Technologie, von alten Filmkameras bis hin zu modernen digitalen Videokameras, einschließlich der Kameras in Computern und mobilen Geräten.

![Diagramm das das binokulare Sehen zeigt.](binocular-vision.svg)

#### Was ist Sichtfeld?

Das Sichtfeld ist der Umfang, in dem Sie die Umgebung sehen können. Die Breite des Sichtfelds, angegeben in Grad oder Radialen, wird als Winkel gemessen, der den Bogen von der äußersten linken Kante Ihres Sichtfelds zur äußersten rechten Kante definiert.

Ein menschliches Auge kann ein FOV von etwa 135° abdecken. Bei Annahme von zwei gesunden Augen beträgt das gesamte Sichtfeld rund 200° bis 220° in der Breite. Warum ist das FOV mit zwei Augen breiter, aber nicht doppelt so groß wie das eines einzelnen Auges? Das liegt daran, dass sich die FOVs der beiden Augen stark überlappen. Diese Überlappung gibt uns das Tiefenempfinden, das etwa 115° breit ist. Außerhalb des Überlappungsbereiches greift unser Sehvermögen auf monokulare Wahrnehmung zurück.

Die dargestellte Zeichnung veranschaulicht das Konzept des FOV: Blaues Keilsegment für das linke Auge, rotes Keilsegment für das rechte Auge. Der hellbraune Überlappungsbereich ist der Bereich, in dem der Betrachter binokulares Sehen hat und Tiefenwahrnehmung ermöglicht wird. Wenn Sie genau hinsehen, werden Sie feststellen, dass jedes Auge den Würfel leicht unterschiedlich sieht, und die kombinierte Sicht die beiden zu einer 3D-Form zusammenführt.

In der Regel definieren und verwalten Anwendungen nur das horizontale FOV. Weitere Details finden Sie in [Die Optik von 3D](/de/docs/Web/API/WebXR_Device_API/Rendering#the_optics_of_3d).

#### Sichtfeld und Mixed-Reality-Geräte

Um ein ausreichend breites Sichtfeld zu erreichen, welches die Augen des Benutzers so täuscht, dass sie glauben, die virtuelle Welt umgibt sie vollständig, sollte das FOV zumindest die Breite des Bereichs des binokularen Sehens erreichen. Basissheadsets beginnen typischerweise bei etwa 90° oder so, während die besten Headsets in der Regel ein Sichtfeld von etwa 150° haben. Da das FOV von der Größe der Linsen und ihrem Abstand zu den Augen des Benutzers abhängt, gibt es Beschränkungen dafür, wie breit das FOV sein kann, ohne Linsen in den Augäpfeln des Benutzers zu installieren.

Ein breites FOV kann erheblich das Gefühl der Immersion des Benutzers verbessern. Allerdings kann das Erhöhen des FOV auch das Gewicht und die Kosten des Headsets erhöhen.

### Freiheitsgrade

Der Begriff **Freiheitsgrade** gibt an, wie viel Bewegungsfreiheit der Benutzer innerhalb der virtuellen Welt hat. Dies hängt direkt davon ab, wie viele Bewegungsarten die WebXR-Hardwarekonfiguration erkennen und in die virtuelle Szene umsetzen kann.

**Abbildung: Diagramm, das die Bewegungen zeigt, die mit 3 Freiheitsgrad-Hardware möglich sind: Gieren, Rollen und Nicken.**
![Diagramm, das die Bewegungen zeigt, die mit 3 Freiheitsgrad-Hardware möglich sind: Gieren, Rollen, und Nicken.](3-degrees-of-freedom-min.svg)

#### Freiheit der Rotationsbewegung

Die ersten drei Freiheitsgrade sind **rotational**. Die Rotationsfreiheitsgrade sind:

- Nicken: nach oben und unten schauen
- Gieren: nach links und rechts schauen
- Rollen: nach links und rechts kippen

In all diesen Fällen bleibt der Betrachter im selben Raumort, während er auf einer oder mehreren der drei Achsen dreht, um die Blickrichtung zu ändern. Ein System mit zwei Freiheitsgraden kann erkennen, wenn der Benutzer nach links und rechts oder nach oben und unten schaut, aber keine andere Bewegungsart melden.

Ein typisches Basissheadset bietet drei Freiheitsgrade, das Erkennen von Drehbewegungen um alle drei Achsen. Dies wird oftmals als **3DoF** abgekürzt.

#### Freiheit der translatorischen Bewegung

Die anderen drei Freiheitsgrade sind translatorisch und ermöglichen die Erfassung der Bewegung im Raum: vorwärts und rückwärts, links und rechts, oben und unten. Unterstützung für alle sechs Freiheitsgrade wird als **6DoF** bezeichnet.

![Diagramm, das die Rotation um jede der drei Achsen in einer WebXR-Umgebung zeigt](xr-translation-headset.png)

Einige fortgeschrittenere Headsets bieten mindestens minimale Unterstützung für die Erkennung translationaler Bewegungen, aber um größere Bewegungen im Raum aufzufangen, sind in der Regel externe Sensoren erforderlich, wie z.B. Kameras (entweder sichtbares Licht oder Infrarot verwendend).

### WebXR-Sitzungsmodi

WebXR bietet Unterstützung für sowohl Augmented Reality (AR)- als auch Virtual Reality (VR)-Sitzungen, wobei die gleiche API genutzt wird. Welche Art von Sitzung Sie erstellen möchten, wird beim Erstellen der Sitzung angegeben. Dies geschieht, indem die entsprechende Sitzungsmodus-Zeichenfolge für die Art des Sitzungsmodus angegeben wird, den Sie erstellen möchten.

#### Virtuelle Realität

In einer VR-Umgebung wird das gesamte Bild digital von Ihrer App oder Website erstellt, von Objekten im Vordergrund bis hin zu Hintergründen oder Skyboxen. Ihr Bildzeichencode muss jedes Pixel in jeder Ansicht während jedes Rahmens neu zeichnen, um das Potenzial von Überbleibseln zu vermeiden. Einige Plattformen könnten Ihnen zuvor bereinigte Rahmen bereitstellen, während andere möglicherweise die Leistung optimieren, indem sie die Framebuffer nicht löschen, um zu vermeiden, dass jedes Pixel zweimal pro Frame berührt werden muss.

Es gibt zwei VR-Sitzungsmodi in WebXR: **inline** und **immersive**. Der erstere, angegeben durch den Sitzungsmodus-String `inline`, präsentiert die gerenderte Szene innerhalb des Kontextes eines Dokuments in einem Webbrowser, und erfordert keine spezielle XR-Hardware zur Ansicht. Der immersive Sitzungsmodus wird mittels Sitzungsmodus `immersive-vr` angezeigt. Dieser Sitzungsmodus erfordert ein XR-Gerät wie ein Headset und ersetzt die gesamte Welt mit der gerenderten Szene mittels der für jedes Auge des Benutzers angezeigten Displays.

#### Erweiterte Realität

In der erweiterten Realität (AR) sieht der Benutzer die von Ihnen gerenderten Bilder über der physischen, realen Umgebung um ihn herum. Da AR immer ein immersives Erlebnis ist, bei dem die Szene die gesamte Welt um den Benutzer herum darstellt und nicht in einer Box auf einem Bildschirm eingeschlossen ist, ist der einzige AR-Sitzungsmodus `immersive-ar`.

Es gibt zwei grundlegende Arten von AR-Geräten:

- Geräte, die Kameras verwenden, um die Welt vor dem Benutzer zu erfassen, um das WebXR-Inhalte über diesem Bild darzustellen, und das Bild dann auf einem Bildschirm anzeigen. Diese Geräte umfassen Telefone, die die resultierende Szene auf dem Bildschirm des Geräts in einer 2D-Präsentation zeigen, sowie Brillen, die ein Paar Kameras verwenden, eine für jedes Auge, um die Szene in Stereo zu erfassen, um die Tiefe der Welt zu behalten. Die WebXR-Szene wird dann für jedes Auge mit dem erfassten Hintergrund dieses Auges gerendert.
- Geräte, die durchsichtige Gläser verwenden, um dem Benutzer das Sehen der Welt zu ermöglichen, während das gerenderte Bild über der Szene angezeigt wird. Der Benutzer sieht also direkt die reale Welt anstatt einer Reihe von digitalen Fotos davon.

Beide Gerätetypen sollten auch in der Lage sein, VR-Sitzungen darzustellen. WebXR kümmert sich im Allgemeinen nicht darum, welchen Gerätetyp Sie verwenden, und der Rendering-Prozess ist fast genau derselbe wie für VR, außer dass Sie den Hintergrund oder die Skybox vor jedem Frame nicht löschen.

## Arten von WebXR-Hardware

Die einfachste XR-Präsentation umfasst das Rendern der Szene direkt auf den Bildschirm des Benutzers, entweder im Kontext eines Webdokuments oder im Vollbildmodus. Dies ist am gebräuchlichsten, wenn der Benutzer entweder kein dediziertes XR-Gerät hat oder wenn der Benutzer die AR- oder VR-App auf einem Telefon oder einem anderen Handgerät betrachtet.

Einfachere und preisgünstigere XR-Geräte verwenden in der Regel einen integrierten Computer oder verbinden sich mit einem Smartphone, um im Wesentlichen die mobile CPU und GPU zu nutzen, um Apps auszuführen, Bilder zu rendern und diese dem Benutzer anzuzeigen. Leistungsstärkere Lösungen überlassen häufig die Anwendungsausführung und die Grafikverarbeitung einem externen Gerät, wie einem Desktop-Computer, und sind entweder mit dem Computer über ein Kabel verbunden oder verwenden ein drahtloses Netzwerk, um die darzustellenden Bilder zu empfangen.

### Headsets

Die meisten immersiven VR-Erlebnisse finden mit Brillen oder einem Headset statt. Ein VR-Headset wird auf dem Kopf getragen, mit einem Band, das hinter dem Kopf verläuft, um es an Ort und Stelle zu halten, und einem oder zwei Displays, deren Bildschirme mit Linsen auf die Augen fokussiert werden. Indem jedem Auge ein leicht anderes Bild präsentiert wird, entsteht die Illusion von Tiefe, die dem Benutzer ein simuliertes 3D-Erlebnis bietet.

![Zeichnung eines standardmäßigen VR-Headsets](publicdomain-virtual_reality_headset.svg)

Die überwiegende Mehrheit der Headsets verwendet ein einzelnes Display, dessen Rahmen halbiert wird, wobei jede Hälfte auf das entsprechende Auge fokussiert wird. Zum Beispiel wird, wenn ein Headset einen 2560x1440-Bildschirm verwendet, die linke Hälfte für die Sicht des linken Auges und die rechte Hälfte für die Sicht des rechten Auges genutzt:

![Diagramm, das zeigt, wie ein Framebuffer zwischen zwei Augenansichten aufgeteilt wird](twoviewsoneframebuffer.svg)

Die einfachsten Headsets haben keine integrierten Sensoren und fokussieren jede Hälfte des Bildschirms auf das entsprechende Auge. Ein häufiges Beispiel hierfür ist [Google Cardboard](https://arvr.google.com/cardboard/), eine Art von Headset, das erstmals von Google entwickelt wurde und kostengünstig aus Pappe oder anderen billigen Materialien hergestellt werden kann. Diese Geräte funktionieren oft durch das Einklinken Ihres Telefons in das Headset, so dass dessen Bildschirm und bordeigener Grafikprozessor verwendet werden können, um die XR-Szene darzustellen und anzuzeigen.

Fortschrittlichere Headsets haben integrierte Displays und werden mit einem elastischen Band oder einem Band mit Klettverschluss am Kopf befestigt. Diese Headsets können integrierte Lautsprecher und Mikrofone haben und/oder Anschlüsse zum Anschließen externer Geräte. Darüber hinaus können diese Headsets verschiedene Sensoren enthalten, um zu erkennen, wann das Headset sich durch den Raum bewegt. Die Art und Anzahl der enthaltenen Sensoren bestimmt, wie viele [Freiheitsgrade](#freiheitsgrade) der Benutzer hat.

### Schutzbrillen und Brillen

XR-Schutzbrillen ähneln Headsets insofern, als dass sie Grafikanzeigen vor den Augen platzieren, um die Ansichten einer Szene zu rendern, die für die Simulation der Tiefe der simulierten Szene benötigt werden.

Der Unterschied besteht darin, dass die Schutzbrillen die reale Welt durchlassen und das gerenderte Bild über der physischen Umgebung des Benutzers überlagern. Dies geschieht ohne die digitale Reproduktion der Welt, wie es mit einem vollständigen Headset erforderlich wäre. Stattdessen ist die Anzeigeoberfläche transparent und, wenn nichts angezeigt wird, im Wesentlichen nicht von normalen Brillen zu unterscheiden. Wenn Objekte gezeichnet werden, werden sie auf die Linsen der Schutzbrillen gezeichnet und blockieren teilweise oder vollständig die physische Umgebung durch den verdeckten Teil der Linse.

### CAVEs

Eine **Cave Automated Virtual Environment** (**CAVE**) ist eine immersive VR-Umgebung, in der die Szene auf die Wände projiziert oder anderweitig angezeigt wird (sowie möglicherweise auf die Decke und/oder den Boden), so dass der Benutzer vollständig von der Simulation umgeben ist und in die Szene eintauchen kann. Der Benutzer trägt 3D-Brillen, die sowohl den 3D-Effekt zum projizierten Bild hinzufügen, als auch ein Mittel bieten, um das System zu ermöglichen, Vordergrundobjekte in die Welt zu rendern.

Die Aktivität des Benutzers kann mithilfe von Bewegungssensoren überwacht werden, die vom Benutzer getragen oder gehalten werden, oder, immer häufiger, mithilfe von Infrarotkameras, die die Bewegungen des Benutzers erkennen. Lautsprecher, die um den Raum angeordnet sind, bieten immersiven Ton.

Diese sind bei alltäglichen Nutzern nicht verbreitet; sie sind meist entweder experimentell, zu Demonstrationszwecken oder werden von größeren Organisationen genutzt. Eine Einschränkung ist, dass die CAVE nichts näher als die Wand simulieren kann.

## Wichtige Gesundheits- und Sicherheitserinnerungen

Da der gesamte Akt, eine virtuelle 3D-Welt zu erschaffen, im Wesentlichen ein Trick ist, der unsere Erkenntnisse darüber nutzt, wie Augen Licht sammeln und wie das Gehirn die gesammelten Daten interpretiert, ist es wichtig zu bedenken, dass Software-Designer und -Entwickler eine besondere Verantwortung haben, sicherzustellen, dass die Ergebnisse korrekt sind.

### Virtual-Reality-Krankheit

**[Virtual-Reality-Krankheit](https://de.wikipedia.org/wiki/Virtual-Reality-Krankheit)** ist eine Bedingung, bei der eine Person, die virtuelle Realität erlebt, Unbehagen, Orientierungslosigkeit oder sogar ernste Übelkeit während und manchmal für kurze Zeit nach der Erfahrung fühlt.

Es gibt mehrere Theorien darüber, was genau an der virtuellen Realität bei manchen Menschen Unbehagen oder Übelkeit verursacht, von denen sich die meisten auf die Idee konzentrieren, dass selbst subtile Unterschiede zwischen dem, was das Gehirn denkt, was geschehen sollte, und dem, was gesehen wird, diese Symptome hervorrufen können.

Defekte, Fehlanpassungen oder Verzerrungen können die Augen und das Gehirn verwirren, was von schmerzenenden Augen oder Kopfschmerzen bis hin zu Schwindel, Schwindelgefühl oder möglicherweise schwerer Übelkeit führen kann. Es ist auch wichtig, auf alles, was Sie anzeigen, zu achten, das potenziell epileptische Anfälle auslösen könnte, da der Benutzer durch die umfassende Natur eines Headsets möglicherweise nicht schnell wegsehen kann, wenn die Bilder, die Sie präsentieren, Unbehagen verursachen.

### Physische Risiken

Ein weiteres potenzielles Problem bei immersiver virtueller Realität ist, dass der Benutzer mit physischen Hindernissen kollidiert, wenn er sich in seinem Raum bewegt, während er ein Headset trägt. Es ist wichtig, in einem sicheren Umfeld, Hinweise zur Einschränkung ihrer Bewegung bereitzustellen, wie zum Beispiel durch die Simulation eines Raumes, der dafür bekannt ist, sicher innerhalb ihrer physischen Umgebung zu sein.

Wenn das Headset des Benutzers mit einem Gerät verbunden ist, ist es eine gute Idee, zu versuchen, sicherzustellen, dass der Benutzer nicht dazu angeregt oder verführt wird, sich so zu bewegen, dass das Headset-Kabel gezogen oder gezerrt wird, was nicht nur Verletzungen verursachen könnte, sondern auch erhebliche Schäden am Headset oder Gerät des Benutzers verursachen könnte (ob es ein Telefon oder ein Computer ist).

Wenn Sie Inhalte haben, die für Benutzer potenziell von Risiko sind, sollten Sie eine Warnmeldung bereitstellen. Ebenso ist es wichtig, die Benutzer darauf hinzuweisen, wenn möglich, in einer sitzenden Position zu bleiben und vorsichtig zu sein, wenn sie sich im vollumfassenden immersiven virtuellen Erlebnis bewegen, während sie ein Headset tragen. Vorsicht ist immer besser als Nachsicht!

## Die Rolle von Frameworks

Da 3D-Grafiken – und insbesondere Mixed Reality – eine Menge meist komplizierter Mathematik, Datenverwaltung und anderer komplexer Aufgaben erfordern, ist es unwahrscheinlich, dass Sie direkt WebGL verwenden, um Ihre Szene in den meisten Fällen zu rendern. Stattdessen werden Sie wahrscheinlich den Großteil Ihrer Arbeit unter Verwendung eines der Frameworks oder Bibliotheken übernehmen, die auf WebGL aufbauen, um es bequemer zu machen.

Ein besonderer Vorteil eines Frameworks anstelle der direkten Nutzung der WebGL-API besteht darin, dass Bibliotheken in der Regel die Funktionalitäten virtueller Kameras implementieren. OpenGL (und somit WebGL als Erweiterung) bietet direkt keine Kamerasicht, die Verwendung einer Bibliothek, die eine für Sie simuliert, kann Ihre Arbeit erheblich erleichtern, insbesondere beim Erstellen von Code, der eine freie Bewegung durch Ihre virtuelle Welt erlaubt.

Da [WebGL](/de/docs/Web/API/WebGL_API) für das Rendering der 3D-Welt in der WebXR-Sitzung verwendet wird, sollten Sie zuerst mit WebGLs allgemeiner Nutzung vertraut sein sowie mit den Grundlagen der 3D-Grafiken im Allgemeinen.

### Allgemeine 3D-Frameworks

Diese Frameworks sind gut für allgemeine Programmierung, sowie für die Spielentwicklung, wenn Sie die Logik selbst entwickeln möchten. Sie sind für die Erstellung und Animation von 3D-Szenen unabhängig vom Kontext konzipiert.

- [A-Frame](https://aframe.io/) (speziell für die Erstellung von WebXR-basierten Apps konzipiert)
- [Babylon.js](https://www.babylonjs.com/)
- [Three.js](https://threejs.org/)

### Spiel-Toolkits

Die Spiel-Toolkits sind für Spieleentwickler konzipiert und beinhalten oft spielespezifische Features wie Physikmodelle, Eingabesteuerungen, Asset-Management, 3D-Soundwiedergabe und dergleichen.

- [PlayCanvas](https://playcanvas.com/)

## Nächste Schritte

Mit diesen grundlegenden Fakten in der Hand sind Sie bereit, die nächsten Schritte in die Welt der Mixed Reality zu machen. Die folgenden Artikel können helfen.

- [Lebenszyklus einer WebXR-Anwendung](/de/docs/Web/API/WebXR_Device_API/Lifecycle)
- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
