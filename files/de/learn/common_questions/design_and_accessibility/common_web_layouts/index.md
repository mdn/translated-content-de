---
title: Was enthalten gängige Web-Layouts?
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

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite und können sie in viele Richtungen lenken. Wenn Sie nicht viel Erfahrung haben, kann es etwas einschüchternd sein, mit einer leeren Seite zu beginnen. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln, um Ihnen zu helfen, Ihre Website zu gestalten.

Selbst jetzt, mit dem neuen Fokus auf mobile Webs, bestehen fast alle Mainstream-Webseiten aus diesen Teilen:

- Header
  - : Sichtbar am oberen Rand jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie z.B. Site-Name oder Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die einzigartig für die aktuelle Seite sind.
- Elemente an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die zwischen einem Teil der Seiten geteilt werden; 3) alternatives Navigationssystem. Tatsächlich alles, was nicht unbedingt vom Hauptinhalt der Seite benötigt wird.
- Footer
  - : Sichtbar am unteren Rand jeder Seite der Website. Wie der Header enthält er weniger prominente globale Informationen, wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren ziemlich verbreitet, aber sie können auf unterschiedliche Weise angeordnet werden. Hier sind einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel für ein 1-Spalten-Layout: Hauptinhalt oben und Nebenelemente darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Wird häufig für Tablets verwendet, da diese mittelgroße Bildschirme haben.

![Beispiel eines einfachen 2-Spalten-Layouts: Ein Nebenelement in der linken Spalte und Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines einfachen 2-Spalten-Layouts: Ein Nebenelement in der rechten Spalte und Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur geeignet für Desktops mit großen Bildschirmen. (Selbst viele Desktop-Nutzer bevorzugen es, Dinge in kleinen Fenstern anstatt im Vollbild zu betrachten.)

![Beispiel eines einfachen 3-Spalten-Layouts: Nebenelemente in der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Nebenelemente Seite an Seite links, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Nebenelemente Seite an Seite rechts, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der wahre Spaß beginnt, wenn Sie anfangen, sie alle zu mischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und Nebenelemente darunter Seite an Seite.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und Nebenelemente übereinander gestapelt in der rechten Spalte.](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: ein Nebenelement in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Nebenelement unter dem Hauptinhalt.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Reihe und ein Nebenelement rechts in der gleichen Reihe, ein zweites Nebenelement bedeckt die gesamte zweite Reihe.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind ziemlich frei, die Dinge so anzuordnen, wie Sie möchten. Sie werden vielleicht bemerken, dass, obwohl der Inhalt sich auf dem Bildschirm bewegen kann, wir immer den Header (1) oben und den Footer (2) unten halten. Auch der Hauptinhalt (A) ist am wichtigsten, also geben Sie ihm den meisten Platz.

Dies sind Faustregeln, auf die Sie sich stützen können. Natürlich gibt es komplexe Designs und Ausnahmen. In anderen Artikeln werden wir erörtern, wie man responsive Websites gestaltet (Seiten, die sich je nach Bildschirmgröße ändern) und Websites, deren Layouts zwischen den Seiten variieren. Im Moment ist es am besten, Ihr Layout auf Ihrer gesamten Website konsistent zu halten.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte, erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

Lassen Sie uns einige konkretere Beispiele von bekannten Websites studieren.

### Einspaltiges Layout

**[Invision-Anwendung](https://www.invisionapp.com/)**. Ein typisches einspaltiges Layout, das alle Informationen linear auf einer Seite darstellt.

![Beispiel eines 1-Spalten-Layouts im Einsatz](screenshot-product.jpg) ![1-Spalten-Layout mit Header, Hauptinhalt, einem Stapel von Nebenelementen und einem Footer](screenshot-product-overlay.jpg)

Ziemlich einfach. Denken Sie daran, viele Menschen werden Ihre Seite immer noch von Desktops aus durchsuchen, also machen Sie Ihren Inhalt dort ebenfalls verwendbar/lesbar.

### Zweispaltiges Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Nebeninformationen (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel eines 2-Spalten-Layouts für einen Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel sehen Sie das Bild (B1) direkt unter dem Header. Es ist mit dem Hauptinhalt verbunden, aber der Hauptinhalt ergibt auch ohne es Sinn, sodass Sie das Bild entweder als Hauptinhalt oder als Nebeninhalt betrachten könnten. Das spielt keine große Rolle. Wichtig ist, wenn Sie direkt unter dem Header etwas platzieren, sollte es entweder Hauptinhalt sein oder _direkt_ mit dem Hauptinhalt zusammenhängen.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein Dreispalten-Layout:

![Beispiel eines falschen 3-Spalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber tatsächlich schwebt der Nebenelement-Inhalt herum.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt herum. Erinnern Sie sich an das Wort "float" – es wird Ihnen etwas sagen, wenn Sie anfangen, über [CSS](/de/docs/Glossary/CSS) zu lernen.

Warum denken Sie, es ist ein Dreispalten-Layout? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie schaffen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das Raum für etwas Designkreativität lässt. Einfache Layouts sind leichter umzusetzen, aber geben Sie sich auch Raum, um Ihre Kreativität in diesem Bereich auszudrücken.

### Ein viel kniffligeres Layout

**Die Opéra de Paris**.

![Beispiel eines kniffligen Layouts.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Grundsätzlich ein Zweispalten-Layout, aber Sie werden viele Feinheiten bemerken, die das Layout visuell aufbrechen. Besonders der Header überlappt das Bild des Hauptinhalts. So wie die Kurve des Header-Menüs mit der Kurve am unteren Rand des Bildes übereinstimmt, wirken Header und Hauptinhalt wie eine Einheit, obwohl sie technisch völlig unterschiedlich sind. Das Opéra-Beispiel sieht komplexer aus als das MICA-Beispiel, ist aber tatsächlich leichter umzusetzen (gut, "leicht" ist ein relativer Begriff).

Wie Sie sehen, können Sie beeindruckende Websites auch mit nur einfachen Layouts gestalten. Schauen Sie sich Ihre eigenen bevorzugten Websites an und fragen Sie sich, wo sind der Header, der Footer, der Hauptinhalt und der Nebenelemente-Inhalt? Das wird Sie zu Ihrem eigenen Design inspirieren und Ihnen gute Hinweise geben, welche Designs funktionieren und welche nicht.
