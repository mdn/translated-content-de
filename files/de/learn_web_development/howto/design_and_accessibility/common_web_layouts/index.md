---
title: Was beinhalten häufige Weblayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Beim Entwerfen von Seiten für Ihre Website ist es gut, eine Vorstellung von den häufigsten Layouts zu haben.

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
        Lernen Sie, wo Sie Dinge auf Ihren Webseiten platzieren können und wie Sie sie dort platzieren.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite, und Sie können sie in viele Richtungen entwickeln. Ohne viel Erfahrung könnte der Start mit einer leeren Seite ein wenig einschüchternd sein. Wir haben über 25 Jahre Erfahrung und geben Ihnen einige allgemeine Daumenregeln, um Ihnen beim Design Ihrer Seite zu helfen.

Auch jetzt, mit dem neuen Fokus auf mobiles Web, sind fast alle gängigen Webseiten aus diesen Teilen gebaut:

- Header
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie z.B. den Namen oder das Logo der Website) und ein leicht zu bedienendes Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalt enthält, der einzigartig für die aktuelle Seite ist.
- Informationen an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die von einer Untergruppe von Seiten geteilt werden; 3) alternatives Navigationssystem. Alles, was nicht unbedingt erforderlich ist, um den Hauptinhalt der Seite darzustellen.
- Footer
  - : Sichtbar am unteren Rand jeder Seite der Website. Enthält, ähnlich wie der Header, weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren ziemlich häufig, können jedoch auf unterschiedliche Weise angeordnet werden. Hier sind einige Beispiele (**1** repräsentiert den Header, **2** den Footer; **A** den Hauptinhalt; **B1, B2** Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel eines 1-Spalten-Layouts: Hauptinhalt oben und Seiteninhalte darunter gestapelt.](1-col-layout.png)

**2-Spalten-Layout**. Oft verwendet für Tablets, da sie Bildschirme mittlerer Größe haben.

![Beispiel eines einfachen 2-Spalten-Layouts: Ein Seiteninhalt in der linken Spalte und der Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines einfachen 2-Spalten-Layouts: Ein Seiteninhalt in der rechten Spalte und der Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Selbst viele Desktop-Nutzer bevorzugen es, Dinge in kleinen Fenstern anstatt im Vollbildmodus zu betrachten.)

![Beispiel eines einfachen 3-Spalten-Layouts: Seiteninhalt links und rechts, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Seiteninhalt nebeneinander links, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel für ein 3-Spalten-Layout: Seiteninhalt nebeneinander rechts, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie beginnen, diese alle miteinander zu mischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und Seiteninhalte darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und gestapelte Seiteninhalte in der rechten Spalte.](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: Ein Seiteninhalt in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Seiteninhalt unter dem Hauptinhalt.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Reihe und ein Seiteninhalt rechts in derselben Reihe, ein zweiter Seiteninhalt deckt die gesamte zweite Reihe ab.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele, und Sie sind völlig frei, die Dinge so anzuordnen, wie Sie möchten. Sie werden bemerken, dass, während der Inhalt sich auf dem Bildschirm bewegen kann, wir immer den Header (1) oben und den Footer (2) unten beibehalten. Außerdem ist der Hauptinhalt (A) am wichtigsten, geben Sie ihm daher den meisten Platz.

Dies sind Daumenregeln, auf die Sie zurückgreifen können. Es gibt natürlich komplexe Designs und Ausnahmen. In anderen Artikeln werden wir besprechen, wie man responsive Seiten (Seiten, die sich je nach Bildschirmgröße ändern) und Seiten entwirft, deren Layouts zwischen den Seiten variieren. Für den Moment ist es am besten, Ihr Layout konsistent auf Ihrer gesamten Website zu halten.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefergehende Betrachtung

Lassen Sie uns einige konkretere Beispiele studieren, die von bekannten Websites stammen.

### Ein-Spalten-Layout

**[Invision Application](https://www.invisionapp.com/)**. Ein typisches Ein-Spalten-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel eines 1-Spalten-Layouts in freier Wildbahn](screenshot-product.jpg) ![1-Spalten-Layout mit Header, Hauptinhalt, einem Stapel von Seiteninhalten und einem Footer](screenshot-product-overlay.jpg)

Ganz einfach. Denken Sie daran, dass viele Leute Ihre Seite trotzdem von Desktops aus durchsuchen werden, machen Sie also Ihren Inhalt dort benutzbar und lesbar.

### Zwei-Spalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für die Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel eines 2-Spalten-Layouts für ein Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel sehen Sie das Bild (B1) direkt unter dem Header. Es ist mit dem Hauptinhalt verbunden, aber der Hauptinhalt ist ohne es sinnvoll, sodass Sie das Bild entweder als Hauptinhalt oder als Seiteninhalt betrachten könnten. Es spielt keine große Rolle. Was wichtig ist, ist, wenn Sie etwas direkt unter den Header setzen, sollte es entweder Hauptinhalt oder _direkt mit dem Hauptinhalt verbunden_ sein.

### Eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Das ist etwas kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel eines falschen 3-Spalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber in Wirklichkeit schweben die Seiteninhalte umher.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt herum. Denken Sie an das Wort "float"--es wird Ihnen ein Begriff sein, wenn Sie beginnen, etwas über {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, dass es ein Drei-Spalten-Layout ist? Weil das Bild oben rechts L-förmig ist, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt stützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie bilden.

Das ist ein gutes Beispiel für ein klassisches Layout, das ein wenig Gestaltungsfreiheit zulässt. Einfache Layouts sind einfacher zu implementieren, aber lassen Sie sich in diesem Bereich Raum, um Ihre Kreativität auszudrücken.

### Ein viel kniffligeres Layout

**Die Opera de Paris**.

![Ein Beispiel für ein kniffliges Layout.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Im Grunde ein Zwei-Spalten-Layout, aber Sie werden viele Änderungen hier und da bemerken, die das Layout visuell aufbrechen. Insbesondere überlappt der Header das Bild des Hauptinhalts. Die Art und Weise, wie die Kurve des Header-Menüs mit der Kurve am unteren Rand des Bildes verbunden ist, lässt den Header und den Hauptinhalt wie ein Ganzes aussehen, auch wenn sie technisch völlig unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, ist aber tatsächlich leichter zu implementieren (gut, "leicht" _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Websites selbst mit einfachen Layouts anfertigen. Schauen Sie sich Ihre eigenen Lieblingswebsites an und fragen Sie sich, wo ist der Header, der Footer, der Hauptinhalt und der Seiteninhalt? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise darauf geben, welche Designs funktionieren und welche nicht.
