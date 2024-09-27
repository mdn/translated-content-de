---
title: Grundlegendes CSS-Verständnis
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

Sie haben in diesem Modul viel gelernt, daher muss es sich gut anfühlen, das Ende erreicht zu haben! Der letzte Schritt, bevor Sie weitermachen, besteht darin, die Bewertung für das Modul zu versuchen – dies umfasst eine Reihe verwandter Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Gamer-Karte/Social-Media-Profil.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis der grundlegenden CSS-Theorie, Syntax und Mechanik zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Holen Sie sich die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) und speichern Sie diese in einem neuen Verzeichnis auf Ihrem lokalen Computer. Wenn Sie Ihre eigene Bilddatei verwenden und Ihren eigenen Namen einfügen möchten, können Sie dies gerne tun – stellen Sie nur sicher, dass das Bild quadratisch ist.
- Holen Sie sich die [CSS-Ressourcentextdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) – diese enthält eine Reihe roher Selektoren und Regel-Sets, die Sie studieren und kombinieren müssen, um einen Teil dieser Bewertung zu beantworten.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfüllen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurden einige rohe HTML und ein Bild bereitgestellt und Sie müssen das notwendige CSS schreiben, um dies in eine schicke kleine Online-Visitenkarte zu stylen, die vielleicht auch als Gamer-Karte oder Social-Media-Profil dient. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

- Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas wirklich Einfallsreiches wie `style.css`.
- Verknüpfen Sie Ihr CSS über ein `<link>`-Element mit Ihrer HTML-Datei.
- Die ersten beiden Regel-Sets in der CSS-Ressourcendatei gehören Ihnen, KOSTENLOS! Nachdem Sie Ihre gute Fortune gefeiert haben, kopieren und fügen Sie sie oben in Ihre neue CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS korrekt auf Ihr HTML angewendet wird.
- Fügen Sie über den beiden Regeln einen CSS-Kommentar mit etwas Text hinzu, um anzugeben, dass dies eine Reihe allgemeiner Stile für die gesamte Seite ist. "Allgemeine Seitenstile" wäre ausreichend. Fügen Sie auch drei weitere Kommentare am unteren Rand der CSS-Datei hinzu, um Stile anzugeben, die spezifisch für die Einrichtung des Kartoncontainers sind, Stile, die spezifisch für den Header und Footer sind, und Stile, die spezifisch für die Hauptinhalte der Visitenkarte sind. Ab jetzt sollten (alle) nachfolgenden Stile, die zum Stylesheet hinzugefügt werden, an einem passenden Ort organisiert werden.

Beachtung der Selektoren und Regel-Sets in der CSS-Ressourcendatei:

- Als nächstes möchten wir, dass Sie die vier Selektoren betrachten und die Spezifität für jeden berechnen. Schreiben Sie diese an einen Ort, an dem sie später gefunden werden können, wie zum Beispiel in einem Kommentar am Anfang Ihrer CSS.
- Jetzt ist es an der Zeit, den richtigen Selektor auf das richtige Regel-Set anzuwenden! Sie haben vier Paare aus Selektor und Regel-Set, die in Ihren CSS-Ressourcen übereinstimmen müssen. Machen Sie dies jetzt und fügen Sie sie zu Ihrer CSS-Datei hinzu. Sie müssen:

  - Dem Hauptkartoncontainer eine feste Breite/Höhe, eine feste Hintergrundfarbe, einen Rand und einen Randradius (abgerundete Ecken!), unter anderem, geben.
  - Dem Header einen Hintergrundverlauf geben, der von dunkler zu heller geht, plus abgerundete Ecken, die mit den abgerundeten Ecken auf dem Hauptkartoncontainer übereinstimmen.
  - Dem Footer einen Hintergrundverlauf geben, der von heller zu dunkler geht, plus abgerundete Ecken, die mit den abgerundeten Ecken auf dem Hauptkartoncontainer übereinstimmen.
  - [Float](/de/docs/Learn/CSS/CSS_layout/Floats) das Bild nach rechts, so dass es auf der rechten Seite der Hauptinhalte der Visitenkarte haftet, und geben Sie ihm eine Maximalhöhe von 100% (ein cleverer Trick, der sicherstellt, dass es wächst/schrumpft, um die gleiche Höhe wie der übergeordnete Container zu behalten, unabhängig davon, welche Höhe er annimmt.)

- Achtung! In den bereitgestellten Regel-Sets sind zwei Fehler. Verwenden Sie eine beliebige Technik, die Sie kennen, um diese aufzuspüren und zu beheben, bevor Sie fortfahren.

Neue Regel-Sets, die Sie schreiben müssen:

- Schreiben Sie ein Regel-Set, das sowohl den Header als auch den Footer der Karte anspricht und ihnen eine berechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltshöhe von 30px und einem Polster von 10px auf allen Seiten). Aber drücken Sie es in `em`s aus.
- Der vom Browser auf die `<h2>` und `<p>`-Elemente angewendete Standardrand wird unser Design beeinträchtigen, also schreiben Sie eine Regel, die alle diese Elemente anspricht und ihren Rand auf 0 setzt.
- Um zu verhindern, dass das Bild aus den Hauptinhalten der Visitenkarte (dem `<article>`-Element) herausragt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, aber drücken Sie sie in `em`s aus. Geben Sie ihm auch eine Hintergrundfarbe aus halbtransparentem Schwarz, was zu einem etwas dunkleren Farbton führt, der die Hintergrundrotfarbe auch etwas durchscheinen lässt.
- Schreiben Sie ein Regel-Set, das dem `<h2>` eine effektive Schriftgröße von 20px gibt (aber in `em`s ausgedrückt) und eine angemessene Zeilenhöhe, um es im Zentrum des Inhaltskastens des Headers zu platzieren. Erinnern Sie sich daran, dass die Inhaltsboxhöhe 30px betragen soll – das gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Schreiben Sie ein Regel-Set, das dem `<p>` im Footer eine effektive Schriftgröße von 15px gibt (aber in `em`s ausgedrückt) und eine angemessene Zeilenhöhe, um es im Zentrum des Inhaltskastens des Footers zu platzieren. Erinnern Sie sich daran, dass die Inhaltsboxhöhe 30px betragen soll – das gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Als letzten kleinen Touch geben sie dem Absatz innerhalb des `<article>` einen geeigneten Polstertwert, so dass sein linker Rand mit dem `<h2>` und dem Footer-Absatz übereinstimmt, und setzen sie seine Farbe so, dass sie relativ hell ist, damit sie einfach zu lesen ist.

> [!NOTE]
> Beachten Sie, dass das zweite Regel-Set `font-size: 10px;` auf dem `<html>`-Element setzt – dies bedeutet, dass für alle Nachkommen von `<html>`, ein em 10px statt 16px beträgt, wie es standardmäßig der Fall ist. (Dies ist natürlich, vorausgesetzt, die betreffenden Nachkommen haben keine Vorfahren, die zwischen ihnen und `<html>` in der Hierarchie sitzen und eine andere `font-size` auf sie gesetzt haben. Dies könnte die benötigten Werte beeinflussen, obwohl dies in diesem einfachen Beispiel kein Problem darstellt.)

Weitere Überlegungen:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration auf jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in all Ihren Regeln einschließen, damit diese Regeln nicht mit der Gestaltung anderer Elemente interferieren, wenn die Visitenkarte auf einer Seite mit einer Menge anderem Inhalt platziert wird.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen, den `em`-Wert herauszufinden, den Sie benötigen, um eine bestimmte Pixellänge darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzelelement (`<html>`) hat, und was es multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren em-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Eine Ansicht der fertigen Visitenkarte, mit einem roten Header und Footer, und einem dunkleren Mittelteil, der die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
