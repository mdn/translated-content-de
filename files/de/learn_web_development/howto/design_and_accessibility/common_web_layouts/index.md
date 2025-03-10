---
title: Was enthalten gängige Webseitenlayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Wenn Sie Seiten für Ihre Website entwerfen, ist es gut, eine Vorstellung von den gängigsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Stellen Sie sicher, dass Sie bereits darüber nachgedacht haben,
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >was Sie mit Ihrem Webprojekt erreichen möchten</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wo Sie Elemente auf Ihren Webseiten platzieren können und wie Sie sie dorthin bringen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite, und Sie können viele Richtungen einschlagen. Wenn Sie nicht viel Erfahrung haben, könnte der Start mit einer leeren Seite ein wenig beängstigend sein. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln, um Ihnen beim Design Ihrer Website zu helfen.

Selbst mit dem neuen Fokus auf mobiles Web werden fast alle Mainstream-Webseiten aus diesen Teilen aufgebaut:

- Header
  - : Sichtbar am oberen Rand jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie den Namen der Seite oder das Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der einzigartige Inhalte für die aktuelle Seite enthält.
- Dinge an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die zwischen einer Untergruppe von Seiten geteilt werden; 3) alternatives Navigationssystem. In der Tat alles, was nicht unbedingt vom Hauptinhalt der Seite benötigt wird.
- Footer
  - : Sichtbar am unteren Rand jeder Seite der Website. Enthält, wie der Header, weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren ziemlich häufig, aber sie können unterschiedlich angeordnet werden. Hier sind einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel für ein 1-Spalten-Layout: Hauptinhalt oben und Nebenelemente darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Oft verwendet, um Tablets anzusprechen, da sie mittelgroße Bildschirme haben.

![Beispiel für ein einfaches 2-Spalten-Layout: Ein Nebenelement in der linken Spalte, Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel für ein einfaches 2-Spalten-Layout: Ein Nebenelement in der rechten Spalte, Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Sogar viele Desktop-Nutzer ziehen es vor, Dinge in kleinen Fenstern statt im Vollbildmodus anzusehen.)

![Beispiel für ein einfaches 3-Spalten-Layout: Nebenelemente in der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Nebenelemente nebeneinander auf der linken Seite, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Nebenelemente nebeneinander auf der rechten Seite, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der echte Spaß beginnt, wenn Sie alles miteinander mischen:

![Beispiel für gemischtes Layout: Hauptinhalt oben und Nebenelemente darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt in der linken Spalte und Nebenelemente übereinander in der rechten Spalte gestapelt](2-col-layout-left-alt.png) ![Beispiel für ein gemischtes Layout: ein Nebenelement in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Nebenelement unterhalb des Hauptinhalts.](2-col-layout-mix.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt links in der ersten Reihe und ein Nebenelement rechts in derselben Reihe, ein zweites Nebenelement deckt die gesamte zweite Reihe ab.](2-col-layout-mix-alt.png)...

Dies sind nur Beispiele, und Sie sind ziemlich frei, die Dinge so anzuordnen, wie Sie möchten. Sie werden feststellen, dass, während der Inhalt auf dem Bildschirm bewegt werden kann, wir den Header (1) immer oben und den Footer (2) unten halten. Auch der Hauptinhalt (A) ist der wichtigste, also geben Sie ihm den größten Raum.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Natürlich gibt es komplexe Designs und Ausnahmen. In anderen Artikeln werden wir darüber sprechen, wie man responsive Seiten gestaltet (Seiten, die sich je nach Bildschirmgröße ändern) und Seiten, deren Layouts zwischen den Seiten variieren. Vorerst ist es am besten, Ihr Layout auf Ihrer gesamten Website konsistent zu halten.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte überlegen Sie, beizutragen](/de/docs/MDN/Community/Getting_started)._

## Tiefergehende Einblicke

Lassen Sie uns einige konkrete Beispiele von bekannten Websites genauer untersuchen.

### Ein-Spalten-Layout

Ein typisches Ein-Spalten-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel für ein 1-Spalten-Layout in freier Wildbahn](screenshot-product.jpg) ![1-Spalten-Layout mit Header, Hauptinhalt, einem Stapel von Nebenelementen und einem Footer](screenshot-product-overlay.jpg)

Ziemlich unkompliziert. Denken Sie daran, viele Menschen werden Ihre Website immer noch von Desktops aus durchsuchen, also machen Sie Ihren Inhalt dort ebenfalls benutzbar/lesbar.

### Zwei-Spalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine dünne für Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Werbung).

![Beispiel für ein 2-Spalten-Layout für einen Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel sehen Sie sich das Bild (B1) direkt unter dem Header an. Es steht in Bezug zum Hauptinhalt, macht aber auch ohne ihn Sinn, sodass Sie das Bild entweder als Hauptinhalt oder als Seiteninhalt betrachten könnten. Dies spielt keine große Rolle. Was wichtig ist, ist, dass, wenn Sie etwas direkt unter den Header setzen, es entweder Hauptinhalt ist oder _direkt mit dem Hauptinhalt_ zusammenhängen sollte.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Das ist etwas kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel für ein scheinbares 3-Spalten-Layout](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber tatsächlich schwebt der Seiteninhalt umher.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt herum. Erinnern Sie sich an das Wort "float" – es wird Ihnen vertraut vorkommen, wenn Sie anfangen, über {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, dass es ein Drei-Spalten-Layout ist? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie erzeugen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das etwas Designkreativität unterstützt. Einfache Layouts sind leichter umzusetzen, aber lassen Sie sich Raum, um Ihre Kreativität in diesem Bereich auszudrücken.

### Ein viel kniffligeres Layout

**Die Opera de Paris**.

![Ein Beispiel für ein kniffliges Layout.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Grundsätzlich ein Zwei-Spalten-Layout, aber Sie werden viele Anpassungen hier und dort bemerken, die das Layout visuell aufbrechen. Besonders der Header überlappt das Bild des Hauptinhalts. Die Art, wie die Kurve des Menüs im Header mit der Kurve am unteren Rand des Bildes übereinstimmt, lässt den Header und den Hauptinhalt wie eine Einheit aussehen, auch wenn sie technisch völlig unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, ist aber eigentlich einfacher umzusetzen (gut, "einfach" _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Webseiten selbst mit einfachen Layouts gestalten. Schauen Sie sich Ihre eigenen Lieblingswebsites an und fragen Sie sich: Wo ist der Header, der Footer, der Hauptinhalt und der Seiteninhalt? Das wird Sie zu Ihrem eigenen Design inspirieren und Ihnen gute Hinweise geben, welche Designs funktionieren und welche nicht.
