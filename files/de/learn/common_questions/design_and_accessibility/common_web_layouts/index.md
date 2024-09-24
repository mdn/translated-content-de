---
title: Was enthalten gängige Weblayouts?
slug: Learn/Common_questions/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Beim Entwerfen von Seiten für Ihre Website ist es gut, eine Vorstellung von den gängigsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Stellen Sie sicher, dass Sie bereits darüber nachgedacht haben,
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding"
          >was Sie mit Ihrem Webprojekt erreichen möchten</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wo und wie Sie Dinge auf Ihren Webseiten platzieren.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite und können in viele Richtungen gehen. Und wenn Sie nicht viel Erfahrung haben, könnte ein leeres Blatt am Anfang ein wenig beängstigend sein. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln, um Ihnen bei der Gestaltung Ihrer Seite zu helfen.

Selbst jetzt, mit dem neuen Fokus auf mobile Websites, bestehen fast alle Mainstream-Webseiten aus diesen Teilen:

- Header
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie Website-Name oder Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die einzigartig für die aktuelle Seite sind.
- Element auf der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die zwischen einer Teilmenge von Seiten geteilt werden; 3) alternatives Navigationssystem. Im Grunde: alles, was nicht unbedingt durch den Hauptinhalt der Seite erforderlich ist.
- Footer
  - : Sichtbar unten auf jeder Seite der Website. Wie der Header enthält es weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren recht üblich, aber sie können auf unterschiedliche Weise angeordnet werden. Hier sind einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge auf der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel eines 1-Spalten-Layouts: Hauptinhalt oben und seitliche Inhalte darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Wird oft für Tablets verwendet, da diese mittelgroße Bildschirme haben.

![Beispiel eines einfachen 2-Spalten-Layouts: Ein Seitenelement in der linken Spalte und Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines einfachen 2-Spalten-Layouts: Ein Seitenelement in der rechten Spalte und Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Selbst viele Desktop-Nutzer ziehen es vor, Sachen in kleinen Fenstern anstatt im Vollbildmodus anzusehen.)

![Beispiel eines einfachen 3-Spalten-Layouts: Seitenelemente in der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Seitenelemente nebeneinander in der linken Spalte, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Seitenelemente nebeneinander in der rechten Spalte, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der echte Spaß beginnt, wenn Sie all dies miteinander vermischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und seitliche Inhalte darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und seitliche Inhalte übereinander gestapelt in der rechten Spalte](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: ein Seitenelement in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Seitenelement unterhalb des Hauptinhalts.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Reihe und ein Seitenelement rechts in derselben Reihe, ein zweites Seitenelement, das die gesamte zweite Reihe abdeckt.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind frei, die Dinge so anzuordnen, wie Sie es möchten. Sie werden bemerken, dass, während der Inhalt sich auf dem Bildschirm bewegen kann, wir den Header (1) immer oben und den Footer (2) unten halten. Außerdem ist der Hauptinhalt (A) am wichtigsten, daher sollte ihm der meiste Platz eingeräumt werden.

Dies sind Faustregeln, die Sie anwenden können. Natürlich gibt es komplexe Designs und Ausnahmen. In anderen Artikeln werden wir darüber sprechen, wie Sie responsive Seiten entwerfen (Seiten, die sich je nach Bildschirmgröße ändern) und deren Layouts zwischen den Seiten variieren. Im Moment ist es am besten, Ihr Layout auf Ihrer gesamten Seite konsistent zu halten.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefende Informationen

Lassen Sie uns einige konkretere Beispiele von bekannten Websites untersuchen.

### Einsäulen-Layout

**[Invision Anwendung](https://www.invisionapp.com/)**. Ein typisches Einsäulen-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel eines Einsäulen-Layouts in freier Wildbahn](screenshot-product.jpg) ![Einsäulen-Layout mit Header, Hauptinhalt, einem Stapel von Seitenelementen und einem Footer](screenshot-product-overlay.jpg)

Ziemlich unkompliziert. Denken Sie daran, viele Leute werden Ihre Seite trotzdem von Desktops aus durchsuchen, also machen Sie Ihren Inhalt auch dort nutzbar/lesbar.

### Zweispalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Dinge auf der Seite (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel eines Zweispalten-Layouts für einen Blog](screenshot-blog.jpg) ![Ein Zweispalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel sehen Sie das Bild (B1) direkt unterhalb des Headers. Es ist mit dem Hauptinhalt verbunden, aber der Hauptinhalt ergibt auch ohne es Sinn, sodass Sie das Bild entweder als Hauptinhalt oder als Seitenelement betrachten könnten. Es spielt eigentlich keine Rolle. Was wichtig ist, ist, wenn Sie etwas direkt unter dem Header platzieren, sollte es entweder Hauptinhalt oder _direkt mit dem Hauptinhalt verwandt_ sein.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein Dreispalten-Layout:

![Beispiel eines falschen Dreispalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein Dreispalten-Layout, aber tatsächlich schwebt der Seiteninhalt herum.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt herum. Denken Sie an das Wort "float" - es wird Ihnen bekannt vorkommen, wenn Sie anfangen, über {{Glossary("CSS")}} zu lernen.

Warum könnte man denken, dass es sich um ein Dreispalten-Layout handelt? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt unterstützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie erzeugen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das etwas Gestaltungskreativität unterstützt. Einfache Layouts sind einfacher umzusetzen, aber lassen Sie sich Raum, um Ihre Kreativität in diesem Bereich auszudrücken.

### Ein viel kniffligeres Layout

**Die Opéra de Paris**.

![Ein Beispiel eines kniffligen Layouts.](screenshot-opera.jpg) ![Dies ist ein Zweispalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Im Grunde ein Zweispalten-Layout, aber Sie werden viele Feinabstimmungen bemerken, die das Layout visuell aufbrechen. Insbesondere überlappt der Header das Bild des Hauptinhalts. Die Art und Weise, wie die Kurve des Header-Menüs mit der Kurve am unteren Rand des Bildes verbunden ist, lässt den Header und den Hauptinhalt wie eine Einheit wirken, obwohl sie technisch völlig unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, aber es ist tatsächlich einfacher zu implementieren (gut, "einfach" _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Websites auch mit einfachen Layouts erstellen. Schauen Sie sich Ihre eigenen Lieblingswebsites an und fragen Sie sich, wo der Header, der Footer, der Hauptinhalt und der Seiteninhalt sind? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise geben, welche Designs funktionieren und welche nicht.
