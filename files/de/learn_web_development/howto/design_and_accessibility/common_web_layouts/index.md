---
title: Was enthalten gängige Weblayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Beim Entwerfen von Seiten für Ihre Website ist es gut, eine Vorstellung von den gängigsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vergewissern Sie sich, dass Sie bereits darüber nachgedacht haben,
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding"
          >was Sie mit Ihrem Webprojekt erreichen möchten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo Sie Elemente auf Ihren Webseiten platzieren und wie Sie sie dort platzieren.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir von Webdesign sprechen. Sie beginnen mit einer leeren Seite und können in viele Richtungen gehen. Und wenn Sie nicht viel Erfahrung haben, kann eine leere Seite am Anfang etwas beängstigend sein. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln, die Ihnen beim Entwerfen Ihrer Website helfen.

Auch jetzt mit dem neuen Fokus auf das mobile Web werden fast alle Mainstream-Webseiten aus diesen Teilen gebaut:

- Header
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie Website-Name oder Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die für die aktuelle Seite einzigartig sind.
- Dinge an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die zwischen einem Teil der Seiten geteilt werden; 3) alternatives Navigationssystem. Im Grunde alles, was für den Hauptinhalt der Seite nicht absolut erforderlich ist.
- Footer
  - : Sichtbar unten auf jeder Seite der Website. Wie der Header, enthält weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren sehr häufig, aber sie können unterschiedlich angeordnet werden. Hier einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, um den kleinen Bildschirm nicht mit zu viel Inhalt zu überladen.

![Beispiel für ein 1-Spalten-Layout: Hauptinhalt oben und marginale Inhalte darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Häufig für Tablets verwendet, da sie mittelgroße Bildschirme haben.

![Beispiel für ein einfaches 2-Spalten-Layout: Ein marginales Element in der linken Spalte und der Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel für ein einfaches 2-Spalten-Layout: Ein marginales Element in der rechten Spalte und der Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Viele Desktop-Benutzer ziehen es dennoch vor, Dinge in kleinen Fenstern anzuzeigen, anstatt im Vollbildmodus.)

![Beispiel für ein einfaches 3-Spalten-Layout: Marginaler Inhalt in der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Marginaler Inhalt nebeneinander auf der linken Seite, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Marginaler Inhalt nebeneinander auf der rechten Seite, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie alle zusammen mischen:

![Beispiel für ein gemischtes Layout: Hauptinhalt oben und marginale Inhalte darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt in der linken Spalte und marginale Inhalte übereinander gestapelt in der rechten Spalte](2-col-layout-left-alt.png) ![Beispiel für ein gemischtes Layout: Ein marginaler Inhalt in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem marginalen Inhalt unterhalb des Hauptinhalts.](2-col-layout-mix.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt links in der ersten Zeile und ein marginaler Inhalt rechts in derselben Zeile, ein zweiter marginaler Inhalt, der die gesamte zweite Zeile bedeckt.](2-col-layout-mix-alt.png) …

Dies sind nur Beispiele, und Sie können die Elemente nach Belieben anordnen. Sie werden feststellen, dass, obwohl der Inhalt auf dem Bildschirm bewegt werden kann, der Header (1) immer oben und der Footer (2) unten bleibt. Auch der Hauptinhalt (A) ist am wichtigsten, daher geben Sie ihm den meisten Platz.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Natürlich gibt es komplexe Designs und Ausnahmen. In anderen Artikeln werden wir besprechen, wie man responsive Seiten entwirft (Seiten, die sich je nach Bildschirmgröße ändern) und Seiten, deren Layouts zwischen den Seiten variieren. Im Moment ist es am besten, Ihr Layout über die gesamte Website konsistent zu halten.

## Aktives Lernen

_Es steht derzeit kein aktives Lernen zur Verfügung. [Bitte erwägen Sie einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Tiefergehende Einblicke

Lassen Sie uns einige konkretere Beispiele von bekannten Websites untersuchen.

### Ein-Spalten-Layout

**[Invision-Anwendung](https://www.invisionapp.com/)**. Ein typisches Ein-Spalten-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel eines Ein-Spalten-Layouts in freier Wildbahn](screenshot-product.jpg) ![Ein-Spalten-Layout mit Header, Hauptinhalt, einem Stapel von marginalen Inhalten und einem Footer](screenshot-product-overlay.jpg)

Ganz einfach. Denken Sie daran, dass viele Menschen Ihre Website dennoch von Desktops aus durchsuchen werden, machen Sie also Ihre Inhalte dort nutzbar/lesbar.

### Zwei-Spalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Werbung).

![Beispiel für ein 2-Spalten-Layout für einen Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel schauen Sie sich das Bild (B1) direkt unter dem Header an. Es steht in Bezug zum Hauptinhalt, aber der Hauptinhalt macht auch ohne Sinn, sodass Sie das Bild entweder als Hauptinhalt oder als Randinhalt betrachten könnten. Das spielt keine wirkliche Rolle. Was jedoch wichtig ist, wenn Sie direkt unter dem Header etwas platzieren, sollte es entweder Hauptinhalt oder _direkt mit dem Hauptinhalt_ verwandt sein.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel für ein falsches 3-Spalten-Layout](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber tatsächlich schweben die Randinhalte herum.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt. Denken Sie an das Wort "float" - es wird Ihnen ein Begriff sein, wenn Sie anfangen, über {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, dass es sich um ein Drei-Spalten-Layout handelt? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und das "I" des MICA-Logos eine vertikale Kraftlinie bilden.

Dies ist ein gutes Beispiel für ein klassisches Layout, das einige gestalterische Kreativität unterstützt. Einfache Layouts sind einfacher zu implementieren, aber lassen Sie sich Raum für kreative Ausdrucksmöglichkeiten in diesem Bereich.

### Ein viel kniffligeres Layout

**Die Opera de Paris**.

![Ein Beispiel für ein kniffliges Layout.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, jedoch überlappt der Header den Hauptinhalt.](screenshot-opera-overlay.jpg)

Grundsätzlich ein Zwei-Spalten-Layout, aber Sie werden viele kleine Anpassungen bemerken, die das Layout visuell aufbrechen. Insbesondere überlappt der Header das Bild des Hauptinhalts. Die Art und Weise, wie die Kurve des Menüs im Header mit der Kurve am unteren Rand des Bildes verbunden ist, lässt den Header und den Hauptinhalt wie eine Einheit aussehen, obwohl sie technisch völlig unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, ist tatsächlich aber leichter zu implementieren (na gut, "leicht" ist ein relativer Begriff).

Wie Sie sehen, können Sie mit nur grundlegenden Layouts atemberaubende Websites erstellen. Schauen Sie sich Ihre eigenen Lieblingswebsites an und fragen Sie sich, wo ist der Header, der Footer, der Hauptinhalt und der Randinhalt? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise darauf geben, welche Designs funktionieren und welche nicht.
