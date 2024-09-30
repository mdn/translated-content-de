---
title: Grundlegendes CSS-Verständnis
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

Sie haben in diesem Modul viel gelernt, also muss es sich gut anfühlen, das Ende erreicht zu haben! Der letzte Schritt, bevor Sie weitermachen, besteht darin, die Bewertung für das Modul zu versuchen — dies umfasst eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Spielerkarte/Social-Media-Profil.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um das Verständnis grundlegender CSS-Theorie, -Syntax und -Mechanik zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Holen Sie sich die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) und speichern Sie sie in einem neuen Verzeichnis auf Ihrem lokalen Computer. Wenn Sie Ihre eigene Bilddatei verwenden und Ihren eigenen Namen einfügen möchten, sind Sie dazu herzlich eingeladen — stellen Sie nur sicher, dass das Bild quadratisch ist.
- Holen Sie sich die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) — diese enthält eine Reihe von Rohselektoren und Regelgruppen, die Sie studieren und kombinieren müssen, um einen Teil dieser Bewertung zu beantworten.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurde ein bisschen HTML und ein Bild zur Verfügung gestellt, und Sie müssen das notwendige CSS schreiben, um dies in eine schicke kleine Online-Visitenkarte zu stylen, die möglicherweise auch als Spielerkarte oder Social-Media-Profil dienen kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundaufbau:

- Erstellen Sie zuerst eine neue Datei im gleichen Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas sehr Einfallsreiches wie `style.css`.
- Verknüpfen Sie Ihr CSS über ein `<link>`-Element mit Ihrer HTML-Datei.
- Die ersten beiden Regelgruppen in der CSS-Ressourcendatei gehören Ihnen, KOSTENLOS! Nachdem Sie sich über Ihr Glück gefreut haben, kopieren Sie sie und fügen Sie sie oben in Ihrer neuen CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS richtig auf Ihr HTML angewendet wird.
- Fügen Sie über den beiden Regeln einen CSS-Kommentar mit ein wenig Text hinzu, um anzuzeigen, dass dies ein Satz allgemeiner Stile für die gesamte Seite ist. "Allgemeine Seitenstile" würde genügen. Fügen Sie auch drei weitere Kommentare am Ende der CSS-Datei hinzu, um Stile anzugeben, die spezifisch für das Setup des Kartencontainers, spezifisch für den Header und Footer sowie spezifisch für den Hauptinhalt der Visitenkarte sind. Von nun an sollten nachfolgende Stile, die zum Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Umgang mit den Selektoren und Regelgruppen, die in der CSS-Ressourcendatei bereitgestellt werden:

- Als nächstes möchten wir, dass Sie die vier Selektoren ansehen und die Spezifität für jeden einzelnen berechnen. Schreiben Sie diese an einem Ort auf, an dem sie später gefunden werden können, z. B. in einem Kommentar oben in Ihrem CSS.
- Jetzt ist es an der Zeit, den richtigen Selektor auf die richtige Regelgruppe anzuwenden! Sie haben vier Paare von Selektor und Regelgruppe, die Sie in Ihren CSS-Ressourcen zuordnen müssen. Tun Sie dies jetzt und fügen Sie sie zu Ihrer CSS-Datei hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine solide Hintergrundfarbe, einen Rahmen und einen Randradius (abgerundete Ecken!) sowie andere Dinge geben.
  - Dem Header einen Hintergrundverlauf von dunkler zu heller geben, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundverlauf von heller zu dunkler geben, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Das Bild [floaten](/de/docs/Learn/CSS/CSS_layout/Floats), damit es an der rechten Seite des Hauptinhalts der Visitenkarte haftet, und ihm eine maximale Höhe von 100 % geben (ein cleverer Trick, der sicherstellt, dass es wächst/schrumpft, um die gleiche Höhe wie das übergeordnete Container zu behalten, unabhängig davon, welche Höhe es erreicht.)

- Vorsicht! Es gibt zwei Fehler in den bereitgestellten Regelgruppen. Verwenden Sie jede Technik, die Sie kennen, um diese zu finden und zu beheben, bevor Sie weitermachen.

Neue Regelgruppen, die Sie schreiben müssen:

- Schreiben Sie eine Regelgruppe, die sowohl den Kartenheader als auch den Kartenfooter anspricht und beiden eine berechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltshöhe von 30px und einem Abstand von 10px auf allen Seiten). Aber drücken Sie es in `em`s aus.
- Der Standardabstand, der vom Browser auf die `<h2>`- und `<p>`-Elemente angewendet wird, wird bei unserem Design stören. Schreiben Sie also eine Regel, die auf all diese Elemente abzielt und deren Abstand auf 0 setzt.
- Um zu verhindern, dass das Bild aus dem Hauptinhalt der Visitenkarte (dem `<article>`-Element) herausragt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, aber ausgedrückt in `em`s. Geben Sie ihm außerdem eine Hintergrundfarbe aus halbtransparentem Schwarz, was zu einem etwas dunkleren Farbton führt, der auch die Hintergrundfarbe Rot etwas durchscheinen lässt.
- Schreiben Sie eine Regelgruppe, die dem `<h2>` eine effektive Schriftgröße von 20px gibt (aber ausgedrückt in `em`s) und eine geeignete Zeilenhöhe, um es in der Mitte des Header-Inhalt-Kastens zu platzieren. Denken Sie daran, dass die Inhalt-Kastenhöhe 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Schreiben Sie eine Regelgruppe, die dem `<p>` im Footer eine effektive Schriftgröße von 15px gibt (aber ausgedrückt in `em`s) und eine geeignete Zeilenhöhe, um es in der Mitte des Footer-Inhalt-Kastens zu platzieren. Denken Sie daran, dass die Inhalt-Kastenhöhe 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Als letzten kleinen Touch geben Sie dem Absatz im `<article>` einen geeigneten Innenabstandswert, sodass seine linke Kante mit dem `<h2>` und dem Footer-Absatz übereinstimmt, und setzen Sie seine Farbe so, dass sie ziemlich hell ist, um leicht lesbar zu sein.

> [!NOTE]
> Bedenken Sie, dass die zweite Regelgruppe die Schriftgröße auf `font-size: 10px;` für das `<html>`-Element setzt — das bedeutet, dass für alle Nachkommen von `<html>` ein `em` 10px anstelle von 16px entspricht, wie es standardmäßig der Fall ist. (Vorausgesetzt natürlich, dass die betreffenden Nachkommen keine Vorfahren zwischen ihnen und `<html>` in der Hierarchie haben, die eine andere Schriftgröße auf sie gesetzt haben. Dies könnte die benötigten Werte beeinflussen, obwohl in diesem einfachen Beispiel dies kein Problem darstellt.)

Weitere Überlegungen:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration in jeder Zeile.
- Sie sollten `.card` am Anfang der Selektor-Kette in all Ihren Regeln verwenden, sodass diese Regeln nicht mit der Formatierung anderer Elemente interferieren, falls die Visitenkarte auf einer Seite mit einer Menge anderem Inhalt platziert werden sollte.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das CSS auf Ihre HTML anzuwenden.
- Wenn Sie versuchen, den `em`-Wert zu ermitteln, den Sie benötigen, um eine bestimmte Pixel-Länge darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzelelement (`<html>`) hat und mit was es multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren `em`-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Eine Ansicht der fertigen Visitenkarte zeigt einen roten Header und Footer sowie ein dunkleres mittleres Panel, das die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
