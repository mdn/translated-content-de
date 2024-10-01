---
title: Was enthalten allgemeine Weblayouts?
slug: Learn/Common_questions/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Wenn Sie Seiten für Ihre Website entwerfen, ist es gut, eine Vorstellung von den gebräuchlichsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Stellen Sie sicher, dass Sie bereits darüber nachgedacht haben,
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding"
          >was Sie mit Ihrem Webprojekt erreichen wollen</a
        >.
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

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite und können sie in viele Richtungen führen. Und wenn Sie nicht viel Erfahrung haben, könnte es etwas beängstigend sein, mit einer leeren Seite zu beginnen. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige allgemeine Faustregeln, die Ihnen helfen, Ihre Site zu gestalten.

Auch jetzt, mit dem neuen Fokus auf mobile Webs, werden fast alle Mainstream-Webseiten aus diesen Teilen gebaut:

- Header
  - : Sichtbar oben auf jeder Seite der Site. Enthält Informationen, die für alle Seiten relevant sind (wie Site-Name oder Logo) sowie ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die einzigartig für die aktuelle Seite sind.
- Dinge an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die unter einer Teilmenge von Seiten geteilt werden; 3) alternatives Navigationssystem. Tatsächlich alles, was nicht unbedingt vom Hauptinhalt der Seite benötigt wird.
- Footer
  - : Sichtbar am unteren Rand jeder Seite der Site. Ähnlich wie der Header enthält er weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren recht verbreitet, können jedoch auf unterschiedliche Weise angeordnet werden. Hier sind einige Beispiele (**1** repräsentiert Header, **2** Footer; **A** Hauptinhalt; **B1, B2** Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel eines 1-Spalten-Layouts: Hauptinhalt oben und Nebenelemente darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Häufig verwendet für Tablets, da sie mittelgroße Bildschirme haben.

![Beispiel eines grundlegenden 2-Spalten-Layouts: Ein Nebenelement in der linken Spalte und der Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines grundlegenden 2-Spalten-Layouts: Ein Nebenelement in der rechten Spalte und der Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur geeignet für Desktops mit großen Bildschirmen. (Auch viele Desktop-Nutzer ziehen es vor, Dinge in kleinen Fenstern statt im Vollbildmodus anzuzeigen.)

![Beispiel eines grundlegenden 3-Spalten-Layouts: Nebenelemente in der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Nebenelemente nebeneinander auf der linken Seite, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Nebenelemente nebeneinander auf der rechten Seite, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie alle zusammen mischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und Nebenelemente unten nebeneinander.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und Nebenelemente gestapelt aufeinander in der rechten Spalte.](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: ein Nebenelement in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Nebenelement unter dem Hauptinhalt.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Reihe und ein Nebenelement rechts derselben Reihe, ein zweites Nebenelement deckt die gesamte zweite Reihe ab.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind ziemlich frei, Dinge nach Belieben anzuordnen. Sie werden feststellen, dass, obwohl der Inhalt auf dem Bildschirm bewegt werden kann, der Header (1) immer oben und der Footer (2) immer unten bleibt. Auch der Hauptinhalt (A) ist am wichtigsten, also geben Sie ihm den meisten Platz.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Es gibt natürlich komplexe Designs und Ausnahmen. In anderen Artikeln werden wir darüber sprechen, wie man responsive Seiten (Seiten, die sich je nach Bildschirmgröße ändern) gestaltet und Websites, deren Layouts zwischen den Seiten variieren. Im Moment ist es am besten, das Layout auf Ihrer gesamten Website konsistent zu halten.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefer gehende Betrachtung

Lassen Sie uns einige konkretere Beispiele betrachten, die von bekannten Websites stammen.

### Ein-Spalten-Layout

**[Invision Anwendung](https://www.invisionapp.com/)**. Ein typisches Ein-Spalten-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel eines 1-Spalten-Layouts in freier Wildbahn](screenshot-product.jpg) ![1-Spalten-Layout mit Header, Hauptinhalt, einer Reihe von Nebenelementen und einem Footer](screenshot-product-overlay.jpg)

Sehr geradlinig. Denken Sie daran, dass viele Menschen Ihre Seite weiterhin von Desktops aus durchsuchen werden, also machen Sie Ihre Inhalte auch dort nutzbar/lesbar.

### Zwei-Spalten-Layout

Blogs haben in der Regel zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel eines 2-Spalten-Layouts für einen Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel werfen Sie einen Blick auf das Bild (B1) direkt unter dem Header. Es ist in Bezug auf den Hauptinhalt, aber der Hauptinhalt macht auch ohne Sinn, sodass Sie das Bild entweder als Haupt- oder Seiteninhalt betrachten könnten. Es spielt eigentlich keine Rolle. Was jedoch zählt, ist, wenn Sie etwas direkt unter dem Header platzieren, sollte es entweder Hauptinhalt oder _direkt im Zusammenhang_ mit dem Hauptinhalt sein.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Das ist ein bisschen kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel eines falschen 3-Spalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber eigentlich schwebt der Nebeneinhalt herum.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt herum. Denken Sie an das Wort "float" – es wird bei Ihnen klingeln, wenn Sie anfangen, über {{Glossary("CSS", "CSS")}} zu lernen.

Warum sollte man denken, es sei ein Drei-Spalten-Layout? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und das "I" des MICA-Logos eine vertikale Kraftlinie erzeugen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das einige gestalterische Kreativität unterstützt. Einfache Layouts sind einfacher zu implementieren, aber erlauben Sie sich Raum, in diesem Bereich Ihre Kreativität auszudrücken.

### Ein viel kniffligeres Layout

**Die Opéra de Paris**.

![Ein Beispiel eines kniffligen Layouts.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Im Grunde ein Zwei-Spalten-Layout, aber Sie werden viele Anpassungen hier und da bemerken, die das Layout visuell aufbrechen. Besonders der Header überlappt das Bild des Hauptinhalts. Die Art und Weise, wie die Kurve des Header-Menüs mit der Kurve am unteren Rand des Bildes übereinstimmt, lässt Header und Hauptinhalt wie ein Element erscheinen, obwohl sie technisch völlig unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, ist aber eigentlich einfacher zu implementieren (alles klar, „einfach“ _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Websites sogar mit nur grundlegenden Layouts erstellen. Werfen Sie einen Blick auf Ihre eigenen Lieblingswebsites und fragen Sie sich, wo der Header, der Footer, der Hauptinhalt und der Nebeneinhalt sind? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise geben, welche Designs funktionieren und welche nicht.
