---
title: Was enthalten gängige Weblayouts?
slug: Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Wenn Sie Seiten für Ihre Website entwerfen, ist es hilfreich, eine Vorstellung von den gängigsten Layouts zu haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Stellen Sie sicher, dass Sie sich bereits darüber Gedanken gemacht haben,
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

Es gibt einen Grund, warum wir über Webdesign sprechen. Sie beginnen mit einer leeren Seite, und es gibt so viele Richtungen, die Sie einschlagen können. Und wenn Sie nicht viel Erfahrung haben, kann ein leeres Blatt etwas beängstigend sein. Wir verfügen über mehr als 25 Jahre Erfahrung und geben Ihnen einige gängige Faustregeln an die Hand, um Ihnen bei der Gestaltung Ihrer Website zu helfen.

Selbst jetzt, mit dem neuen Fokus auf das mobile Web, bestehen fast alle Mainstream-Webseiten aus diesen Teilen:

- Header
  - : Sichtbar oben auf jeder Seite der Website. Enthält Informationen, die für alle Seiten relevant sind (wie den Namen der Website oder das Logo) und ein benutzerfreundliches Navigationssystem.
- Hauptinhalt
  - : Der größte Bereich, der Inhalte enthält, die einzigartig für die aktuelle Seite sind.
- Elemente an der Seite
  - : 1) Informationen, die den Hauptinhalt ergänzen; 2) Informationen, die von einer Teilmenge von Seiten geteilt werden; 3) alternatives Navigationssystem. Tatsächlich alles, was nicht unbedingt vom Hauptinhalt der Seite benötigt wird.
- Footer
  - : Sichtbar unten auf jeder Seite der Website. Enthält wie der Header weniger prominente globale Informationen wie rechtliche Hinweise oder Kontaktinformationen.

Diese Elemente sind in allen Formfaktoren recht häufig, aber sie können unterschiedlich angeordnet werden. Hier einige Beispiele (**1** stellt den Header dar, **2** den Footer; **A** den Hauptinhalt; **B1, B2** Dinge an der Seite):

**1-Spalten-Layout**. Besonders wichtig für mobile Browser, um den kleinen Bildschirm nicht zu überladen.

![Beispiel eines 1-Spalten-Layouts: Hauptinhalt oben und darunter gestapelte Aside-Inhalte.](1-col-layout.png)

**2-Spalten-Layout**. Häufig bei Tablets verwendet, da sie mittelgroße Bildschirme haben.

![Beispiel eines einfachen 2-Spalten-Layouts: Ein Aside in der linken Spalte, Hauptinhalt in der rechten Spalte.](2-col-layout-right.png) ![Beispiel eines einfachen 2-Spalten-Layouts: Ein Aside in der rechten Spalte, Hauptinhalt in der linken Spalte.](2-col-layout-left.png)

**3-Spalten-Layouts**. Nur für Desktops mit großen Bildschirmen geeignet. (Viele Desktop-Nutzer bevorzugen es sogar, Dinge in kleinen Fenstern anstelle von Vollbild anzuzeigen.)

![Beispiel eines einfachen 3-Spalten-Layouts: Aside auf der linken und rechten Spalte, Hauptinhalt in der mittleren Spalte.](3-col-layout.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Asides nebeneinander auf der linken Seite, Hauptinhalt in der rechten Spalte.](3-col-layout-alt.png) ![Ein weiteres Beispiel eines 3-Spalten-Layouts: Asides nebeneinander auf der rechten Seite, Hauptinhalt in der linken Spalte.](3-col-layout-alt2.png)

Der eigentliche Spaß beginnt, wenn Sie alle miteinander vermischen:

![Beispiel eines gemischten Layouts: Hauptinhalt oben und Asides nebeneinander darunter.](1-col-layout-alt.png) ![Beispiel eines gemischten Layouts: Hauptinhalt in der linken Spalte und Asides, die oben aufeinander in der rechten Spalte gestapelt sind.](2-col-layout-left-alt.png) ![Beispiel eines gemischten Layouts: Ein Aside in der linken Spalte und Hauptinhalt in der rechten Spalte mit einem Aside unter dem Hauptinhalt.](2-col-layout-mix.png) ![Beispiel eines gemischten Layouts: Hauptinhalt links in der ersten Zeile und ein Aside in der gleichen Zeile rechts davon, ein zweites Aside bedeckt die gesamte zweite Zeile.](2-col-layout-mix-alt.png)…

Dies sind nur Beispiele und Sie sind frei, die Dinge so anzuordnen, wie Sie möchten. Sie werden bemerken, dass, obwohl der Inhalt auf dem Bildschirm verschoben werden kann, wir den Header (1) immer oben und den Footer (2) unten beibehalten. Auch der Hauptinhalt (A) ist am wichtigsten, daher geben Sie ihm den meisten Raum.

Dies sind Faustregeln, auf die Sie zurückgreifen können. Natürlich gibt es komplexe Designs und Ausnahmen. In anderen Artikeln werden wir besprechen, wie man responsive Seiten entwirft (Seiten, die sich je nach Bildschirmgröße ändern) und Seiten, deren Layouts zwischen den Seiten variieren. Vorerst ist es am besten, Ihr Layout auf Ihrer gesamten Website konsistent zu halten.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Tiefergehendes Lernen

Studieren wir einige konkretere Beispiele von bekannten Websites.

### Einspalten-Layout

Ein typisches Einspalten-Layout, das alle Informationen linear auf einer Seite bereitstellt.

![Beispiel eines 1-Spalten-Layouts in freier Wildbahn](screenshot-product.jpg) ![1-Spalten-Layout mit Header, Hauptinhalt, einer Reihe von Aside-Inhalten und einem Footer](screenshot-product-overlay.jpg)

Ziemlich einfach. Denken Sie einfach daran, viele Leute werden Ihre Seite immer noch von Desktops aus durchsuchen, daher sollte Ihr Inhalt auch dort benutzbar/lesbar sein.

### Zweispalten-Layout

Blogs haben normalerweise zwei Spalten, eine breite für den Hauptinhalt und eine schmale für Dinge an der Seite (wie Widgets, sekundäre Navigationsebenen und Anzeigen).

![Beispiel eines 2-Spalten-Layouts für ein Blog](screenshot-blog.jpg) ![Ein 2-Spalten-Layout mit dem Hauptinhalt in der linken Spalte](screenshot-blog-overlay.jpg)

In diesem Beispiel, schauen Sie sich das Bild (B1) direkt unter dem Header an. Es ist mit dem Hauptinhalt verbunden, aber der Hauptinhalt macht auch ohne ihn Sinn, also könnten Sie das Bild entweder als Hauptinhalt oder als Seiteninhalt betrachten. Es spielt nicht wirklich eine Rolle. Was wichtig ist: Wenn Sie etwas direkt unter den Header setzen, sollte es entweder der Hauptinhalt sein oder _direkt mit_ dem Hauptinhalt in Zusammenhang stehen.

### Es ist eine Falle

**[MICA](https://www.mica.edu/about-mica/)**. Dies ist etwas kniffliger. Es sieht aus wie ein Drei-Spalten-Layout:

![Beispiel eines falschen 3-Spalten-Layouts](screenshot-education.jpg) ![Es sieht aus wie ein 3-Spalten-Layout, aber eigentlich schwebt der Aside-Inhalt umher.](screenshot-education-overlay.jpg)

Aber das ist es nicht! B1 und B2 schweben um den Hauptinhalt. Denken Sie an das Wort "schweben" – es wird Ihnen bekannt vorkommen, wenn Sie anfangen, {{Glossary("CSS", "CSS")}} zu lernen.

Warum würden Sie denken, dass es ein Drei-Spalten-Layout ist? Weil das Bild oben rechts eine L-Form hat, weil B1 wie eine Spalte aussieht, die den verschobenen Hauptinhalt unterstützt, und weil das "M" und "I" des MICA-Logos eine vertikale Kraftlinie erzeugen.

Dies ist ein gutes Beispiel für ein klassisches Layout, das etwas gestalterische Kreativität unterstützt. Einfache Layouts sind einfacher zu implementieren, aber lassen Ihnen Spielraum, um in diesem Bereich Kreativität auszudrücken.

### Ein viel kniffligeres Layout

**Die Oper von Paris**.

![Ein Beispiel eines kniffligen Layouts.](screenshot-opera.jpg) ![Dies ist ein 2-Spalten-Layout, aber der Header überlappt den Hauptinhalt.](screenshot-opera-overlay.jpg)

Im Grunde ein Zwei-Spalten-Layout, aber Sie werden viele Feinheiten bemerken, die visuell die Anordnung aufbrechen. Insbesondere überlappt der Header das Bild des Hauptinhalts. Die Art, wie die Kurve des Menüs im Header mit der Kurve unten im Bild verbunden ist, lässt den Header und den Hauptinhalt wie eine Einheit erscheinen, obwohl sie technisch völlig unterschiedlich sind. Das Beispiel der Oper sieht komplexer aus als das MICA-Beispiel, ist aber tatsächlich leichter zu implementieren (gut, "leicht" _ist_ ein relativer Begriff).

Wie Sie sehen, können Sie atemberaubende Websites auch mit nur grundlegenden Layouts gestalten. Werfen Sie einen Blick auf Ihre eigenen Lieblingswebsites und fragen Sie sich, wo der Header, der Footer, der Hauptinhalt und der Seiteninhalt sind? Das wird Sie für Ihr eigenes Design inspirieren und Ihnen gute Hinweise geben, welche Designs funktionieren und welche nicht.
