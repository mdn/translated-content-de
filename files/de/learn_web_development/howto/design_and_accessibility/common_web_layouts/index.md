---
title: Was beinhalten gängige Weblayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Beim Entwerfen von Seiten für Ihre Website ist es gut, eine Vorstellung von den gängigsten Layouts zu haben.

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
        Lernen Sie, wo Sie Elemente auf Ihren Webseiten platzieren und wie Sie sie dort platzieren.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite und können diese in viele verschiedene Richtungen entwickeln. Und wenn Sie nicht viel Erfahrung haben, könnte der Anfang mit einer leeren Seite ein wenig beängstigend sein. Wir verfügen über mehr als 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln, die Ihnen bei der Gestaltung Ihrer Website helfen.

Auch jetzt, mit dem neuen Fokus auf das mobile Web, werden fast alle gängigen Webseiten aus diesen Teilen aufgebaut:

- Header (Kopfzeile)
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie der Name der Seite oder das Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die für die aktuelle Seite einzigartig sind.
- Elemente an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die unter einem Teil der Seiten geteilt werden; 3) Alternatives Navigationssystem. Tatsächlich alles, was nicht zwingend für den Hauptinhalt der Seite erforderlich ist.
- Footer (Fußzeile)
  - : Sichtbar unten auf jeder Seite der Website. Wie der Header enthält sie weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren ziemlich häufig, sie können jedoch auf unterschiedliche Weise angeordnet werden. Hier sind einige Beispiele (**1** steht für Header, **2** für Footer; **A** für Hauptinhalt; **B1, B2** für Dinge an der Seite):

**Einspaltiges Layout**. Besonders wichtig für mobile Browser, damit der kleine Bildschirm nicht überladen wird.

![Beispiel für ein einspaltiges Layout: Hauptinhalt oben und Seiteninhalte darunter gestapelt.](1-col-layout.png)

**Zweispaltiges Layout**. Wird häufig für Tablets verwendet, da sie mittelgroße Bildschirme haben.

![Beispiel für ein Grundlayout mit zwei Spalten: Ein seitlicher Inhalt in der linken Spalte und der Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel für ein Grundlayout mit zwei Spalten: Ein seitlicher Inhalt in der rechten Spalte und der Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**Dreispaltige Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Sogar viele Desktop-Nutzer ziehen es vor, Dinge in kleinen Fenstern anstatt im Vollbildmodus anzusehen.)

![Beispiel für ein Grundlayout mit drei Spalten: Seitliche Inhalte links und rechts, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel für ein dreispaltiges Layout: Seitliche Inhalte nebeneinander links, Hauptinhalt rechts.](3-col-layout-alt.png) ![Ein weiteres Beispiel für ein dreispaltiges Layout: Seitliche Inhalte nebeneinander rechts, Hauptinhalt links.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie beginnen, diese alle zusammen zu mischen:

![Beispiel für ein gemischtes Layout: Hauptinhalt oben und Seiteninhalte darunter nebeneinander.](1-col-layout-alt.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt in der linken Spalte und seiteninhalte übereinander in der rechten Spalte gestapelt.](2-col-layout-left-alt.png) ![Beispiel für ein gemischtes Layout: Ein seitlicher Inhalt in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem seitlichen Inhalt unter dem Hauptinhalt.](2-col-layout-mix.png) ![Beispiel für ein gemischtes Layout: Hauptinhalt links in der ersten Reihe und ein seitlicher Inhalt rechts in derselben Reihe, ein zweiter seitlicher Inhalt, der die gesamte zweite Reihe bedeckt.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind frei, die Dinge so anzuordnen, wie Sie möchten. Sie werden feststellen, dass, obwohl sich der Inhalt auf dem Bildschirm bewegen kann, der Header (1) immer oben und der Footer (2) immer unten bleibt. Auch der Hauptinhalt (A) ist am wichtigsten, daher geben Sie ihm den meisten Platz.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Es gibt komplexe Designs und Ausnahmen, natürlich. In anderen Artikeln werden wir darüber sprechen, wie man responsive Websites (Websites, die sich abhängig von der Bildschirmgröße ändern) und Websites gestaltet, deren Layouts sich zwischen den Seiten unterscheiden. Für jetzt ist es am besten, Ihr Layout auf Ihrer gesamten Website konsistent zu halten.

## Vertiefung

Lassen Sie uns einige konkretere Beispiele von bekannten Websites untersuchen.

### Einspaltiges Layout

Ein typisches einspaltiges Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel für ein einspaltiges Layout in freier Wildbahn](screenshot-product.jpg) ![Einspaltiges Layout mit Header, Hauptinhalt, einem Stapel seitlicher Inhalte und einer Fußzeile](screenshot-product-overlay.jpg)

Ziemlich einfach. Denken Sie daran, dass viele Leute Ihre Site immer noch von Desktops aus durchsuchen werden. Gestalten Sie Ihren Inhalt also auch dort benutzbar/lesbar.

### Zwei-Spalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Inhalte an der Seite (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel für ein zweispaltiges Layout für ein Blog](screenshot-blog.jpg) ![Ein zweispaltiges Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel werfen Sie einen Blick auf das Bild (B1) direkt unter dem Header. Es bezieht sich auf den Hauptinhalt, aber der Hauptinhalt ist auch ohne es verständlich, daher könnte man das Bild entweder als Hauptinhalt oder als Seiteninhalt betrachten. Es spielt eigentlich keine Rolle. Wichtig ist nur, dass, wenn Sie etwas direkt unter den Header setzen, es entweder Hauptinhalt oder _direkt mit dem Hauptinhalt verknüpft_ sein sollte.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein dreispaltiges Layout:

![Beispiel für ein falsches dreispaltiges Layout](screenshot-education.jpg) ![Es sieht aussieht wie ein dreispaltiges Layout, aber eigentlich schweben die Seiteninhalte herum.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt. Denken Sie an das Wort "float" — es wird Ihnen bekannt vorkommen, wenn Sie beginnen, {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, dass es ein dreispaltiges Layout ist? Weil das Bild oben rechts L-förmig ist, weil B1 aussieht wie eine Spalte, die den verschobenen Hauptinhalt unterstützt, und weil das „M“ und „I“ des MICA-Logos eine vertikale Kraftlinie erzeugen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das etwas Design-Kreativität unterstützt. Einfache Layouts sind einfacher zu implementieren, aber erlauben Sie sich Raum, in diesem Bereich Ihre Kreativität auszudrücken.

### Ein viel kniffligeres Layout

**Die Opera de Paris**.

![Ein Beispiel für ein kniffliges Layout.](screenshot-opera.jpg) ![Dies ist ein zweispaltiges Layout, aber der Header überlagert den Hauptinhalt.](screenshot-opera-overlay.jpg)

Im Grunde ein zweispaltiges Layout, aber Sie werden viele Anpassungen hier und da bemerken, die das Layout visuell aufbrechen. Besonders der Header überlagert das Bild des Hauptinhalts. Die Art und Weise, wie sich die Kurve des Menüs des Headers mit der Kurve am unteren Rand des Bildes verbindet, lassen den Header und den Hauptinhalt wie ein Ding aussehen, obwohl sie technisch komplett unterschiedlich sind. Das Opera-Beispiel sieht komplexer aus als das MICA-Beispiel, ist aber tatsächlich einfacher zu implementieren (na gut, "einfach" _ist_ ein relatives Konzept).

Wie Sie sehen, können Sie beeindruckende Websites auch mit einfachen Layouts erstellen. Werfen Sie einen Blick auf Ihre eigenen Lieblingswebsites und fragen Sie sich, wo der Header, der Footer, der Hauptinhalt und die Seiteninhalte sind? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise darauf geben, welche Designs funktionieren und welche nicht.
