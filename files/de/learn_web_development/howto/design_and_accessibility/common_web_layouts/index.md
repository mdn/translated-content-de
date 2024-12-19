---
title: Was enthalten gängige Weblayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Wenn Sie Seiten für Ihre Website entwerfen, ist es gut, eine Vorstellung von den gebräuchlichsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Stellen Sie sicher, dass Sie bereits darüber nachgedacht haben,
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >was Sie mit Ihrem Webprojekt erreichen möchten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wo Sie Dinge auf Ihren Webseiten platzieren und wie Sie sie dort platzieren.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite und können viele Richtungen einschlagen. Und wenn Sie nicht viel Erfahrung haben, könnte der Start mit einer leeren Seite etwas beängstigend sein. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige allgemeine Faustregeln, um Ihnen bei der Gestaltung Ihrer Website zu helfen.

Auch jetzt, mit dem neuen Fokus auf Mobilgeräte, werden fast alle Mainstream-Webseiten aus diesen Teilen gebaut:

- Header
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie der Name oder das Logo der Website) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die einzigartig für die aktuelle Seite sind.
- Dinge an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die auf einer Teilmenge von Seiten geteilt werden; 3) alternatives Navigationssystem. Tatsächlich alles, was nicht unbedingt für den Hauptinhalt der Seite erforderlich ist.
- Footer
  - : Sichtbar unten auf jeder Seite der Website. Wie der Header enthält er weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren ziemlich häufig, aber sie können unterschiedlich angeordnet sein. Hier sind einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel eines 1-Spalten-Layouts: Hauptinhalt oben und Nebenelemente darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Wird häufig verwendet, um Tablets anzusprechen, da diese mittelgroße Bildschirme haben.

![Beispiel eines einfachen 2-Spalten-Layouts: Ein Nebenelement in der linken Spalte, und Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines einfachen 2-Spalten-Layouts: Ein Nebenelement in der rechten Spalte, und Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur geeignet für Desktops mit großen Bildschirmen. (Selbst viele Desktop-Nutzer ziehen es vor, Dinge in kleinen Fenstern statt im Vollbildmodus anzusehen.)

![Beispiel eines einfachen 3-Spalten-Layouts: Nebenelemente links und rechts, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Nebenelemente nebeneinander auf der linken Seite, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Nebenelemente nebeneinander auf der rechten Seite, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie anfangen, sie alle miteinander zu mischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und Nebenelemente darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und Nebenelemente stapeln sich übereinander in der rechten Spalte.](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: Ein Nebenelement in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Nebenelement darunter.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Zeile und ein Nebenelement rechts in derselben Zeile, ein zweites Nebenelement überdeckt die gesamte zweite Zeile.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind ziemlich frei, Dinge so anzuordnen, wie Sie möchten. Sie werden vielleicht feststellen, dass der Inhalt sich zwar auf dem Bildschirm bewegen kann, wir aber immer den Header (1) oben und den Footer (2) unten halten. Außerdem ist der Hauptinhalt (A) am wichtigsten, also geben Sie ihm den meisten Platz.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Es gibt komplexe Designs und Ausnahmen, natürlich. In anderen Artikeln werden wir besprechen, wie man responsive Websites (Websites, die sich je nach Bildschirmgröße ändern) und Websites, deren Layouts von Seite zu Seite variieren, entwirft. Vorerst ist es am besten, das Layout auf Ihrer gesamten Website konsistent zu halten.

## Aktives Lernen

_Es gibt noch kein aktives Lernen verfügbar. [Bitte ziehen Sie in Betracht, beizutragen](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefer eintauchen

Lassen Sie uns einige konkretere Beispiele von bekannten Websites untersuchen.

### Ein-Spalten-Layout

**[Invision-Anwendung](https://www.invisionapp.com/)**. Ein typisches Ein-Spalten-Layout, das alle Informationen linear auf einer Seite bietet.

![Beispiel eines Ein-Spalten-Layouts in freier Wildbahn](screenshot-product.jpg) ![Ein-Spalten-Layout mit Header, Hauptinhalt, einem Stapel von Nebenelementen und einem Footer.](screenshot-product-overlay.jpg)

Ganz unkompliziert. Denken Sie einfach daran, dass viele Leute Ihre Website immer noch von Desktops aus betreiben werden. Machen Sie Ihren Inhalt also auch dort nutzbar/lesbar.

### Zwei-Spalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für die Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Werbeanzeigen).

![Beispiel eines 2-Spalten-Layouts für einen Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel schauen Sie sich das Bild (B1) direkt unter dem Header an. Es steht in Zusammenhang mit dem Hauptinhalt, aber der Hauptinhalt macht auch ohne Sinn, sodass Sie das Bild entweder als Hauptinhalt oder als Nebenelement betrachten könnten. Das ist letztendlich egal. Wichtig ist, wenn Sie etwas direkt unterhalb des Headers platzieren, sollte es entweder Hauptinhalt oder _direkt verwandt_ mit dem Hauptinhalt sein.

### Achtung, Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel eines falschen 3-Spalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber tatsächlich schweben die Nebenelemente umher.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt. Denken Sie an das Wort "float", es wird Ihnen einleuchten, wenn Sie anfangen, {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, es ist ein Drei-Spalten-Layout? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie schaffen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das etwas Kreativität im Design unterstützt. Einfache Layouts sind einfacher umzusetzen, aber erlauben Sie sich, in diesem Bereich Kreativität auszudrücken.

### Ein viel kniffligeres Layout

**Die Oper von Paris**.

![Ein Beispiel eines kniffligen Layouts.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Grundsätzlich ein Zwei-Spalten-Layout, aber Sie werden viele Tweaks hier und da bemerken, die das Layout optisch aufbrechen. Besonders der Header überlappt das Bild des Hauptinhalts. Die Art, wie die Kurve des Menüs im Header mit der Kurve am unteren Rand des Bildes zusammenläuft, lässt den Header und den Hauptinhalt wie eine Einheit aussehen, obwohl sie technisch komplett verschieden sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, aber es ist tatsächlich einfacher umzusetzen (nun, "einfach" _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Websites auch mit nur grundlegenden Layouts erstellen. Schauen Sie sich Ihre eigenen Lieblingswebsites an und fragen Sie sich, wo ist der Header, der Footer, der Hauptinhalt und der Seiteninhalt? Das wird Sie bei Ihrem eigenen Design inspirieren und Ihnen gute Hinweise darauf geben, welche Designs funktionieren und welche nicht.
