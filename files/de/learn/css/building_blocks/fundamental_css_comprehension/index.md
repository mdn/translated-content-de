---
title: Grundlegendes Verständnis von CSS
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

Sie haben in diesem Modul viel gelernt, und es muss sich gut anfühlen, das Ende erreicht zu haben! Der letzte Schritt, bevor Sie weitermachen, ist die Durchführung der Bewertung für das Modul — dies umfasst eine Reihe von zusammenhängenden Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Gamer-Karte/Social-Media-Profil.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie dieses Assessment versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis grundlegender CSS-Theorie, Syntax und Mechanismen zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) abrufen und in einem neuen Verzeichnis auf Ihrem lokalen Computer speichern. Wenn Sie Ihr eigenes Bild verwenden und Ihren eigenen Namen einfügen möchten, können Sie dies gerne tun — stellen Sie nur sicher, dass das Bild quadratisch ist.
- Die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) abrufen — diese enthält eine Reihe von Rohselektoren und Regelsets, die Sie studieren und kombinieren müssen, um einen Teil dieser Bewertung zu beantworten.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren einfüllen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Sie haben einige rohe HTML-Daten und ein Bild erhalten und müssen das erforderliche CSS schreiben, um dies in eine schicke kleine Online-Visitenkarte zu stylen, die möglicherweise als Gamer-Karte oder Social-Media-Profil fungieren kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

- Erstellen Sie zuerst eine neue Datei im selben Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas wirklich Fantasievolles wie `style.css`.
- Verknüpfen Sie Ihr CSS über ein `<link>`-Element mit Ihrer HTML-Datei.
- Die ersten beiden Regelsets in der CSS-Ressourcendatei sind kostenlos für Sie! Nachdem Sie Ihr Glück ausgiebig gefeiert haben, kopieren Sie sie und fügen Sie sie oben in Ihre neue CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS korrekt auf Ihr HTML angewendet wird.
- Über den beiden Regeln fügen Sie einen CSS-Kommentar mit etwas Text ein, der angibt, dass dies ein Satz allgemeiner Stile für die gesamte Seite ist. "Allgemeine Seitenstile" würde ausreichen. Fügen Sie außerdem drei weitere Kommentare am unteren Ende der CSS-Datei hinzu, um Stile anzugeben, die spezifisch für die Einrichtung des Kartencontainers, spezifisch für den Header und Footer sowie spezifisch für den Hauptinhalt der Visitenkarte sind. Ab jetzt sollten alle weiteren Stile, die zum Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Umgang mit den Selektoren und Regelsets, die in der CSS-Ressourcendatei bereitgestellt werden:

- Als Nächstes möchten wir, dass Sie die Spezifität für jeden der vier Selektoren berechnen. Schreiben Sie diese an einem Ort auf, an dem sie später gefunden werden können, z. B. in einem Kommentar am Anfang Ihrer CSS-Datei.
- Jetzt ist es an der Zeit, den richtigen Selektor auf das richtige Regelset anzuwenden! Sie haben vier Paare von Selektoren und Regelsets, die in Ihren CSS-Ressourcen zuzuordnen sind. Machen Sie das nun und fügen Sie sie zu Ihrer CSS-Datei hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine solide Hintergrundfarbe, einen Rahmen und eine abgerundete Ecke (Ecken abrunden!) sowie andere Eigenschaften geben.
  - Dem Header einen Hintergrundverlauf geben, der von dunkler zu heller geht, plus abgerundete Ecken, die zu den abgerundeten Ecken passen, die auf dem Hauptkartencontainer festgelegt sind.
  - Dem Footer einen Hintergrundverlauf geben, der von heller zu dunkler geht, plus abgerundete Ecken, die zu den abgerundeten Ecken passen, die auf dem Hauptkartencontainer festgelegt sind.
  - Das Bild nach rechts [float](/de/docs/Learn/CSS/CSS_layout/Floats) lassen, sodass es an der rechten Seite des Hauptinhalts der Visitenkarte haftet, und ihm eine maximale Höhe von 100% geben (ein cleverer Trick, der sicherstellt, dass es mitwächst/schrumpft, um dieselbe Höhe wie der übergeordnete Container zu behalten, unabhängig davon, welche Höhe es erreicht).

- Achtung! Es gibt zwei Fehler in den bereitgestellten Regelsets. Verwenden Sie eine beliebige Technik, die Sie beherrschen, um diese zu finden und zu beheben, bevor Sie weitermachen.

Neue Regelsets, die Sie schreiben müssen:

- Schreiben Sie ein Regelset, das sowohl den Kartenheader als auch den Kartenfooter anvisiert und ihnen beiden eine berechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltshöhe von 30px und einem Padding von 10px auf allen Seiten). Der Wert sollte jedoch in `em` ausgedrückt werden.
- Der Standardabstand (`margin`), der von dem Browser auf die `<h2>`- und `<p>`-Elemente angewendet wird, wird unser Design stören, also schreiben Sie eine Regel, die alle diese Elemente anspricht und ihre `margin` auf 0 setzt.
- Um zu verhindern, dass das Bild aus dem Hauptinhalt der Visitenkarte (dem `<article>`-Element) herausragt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>`-Elements auf 120px, jedoch in `em` ausgedrückt. Geben Sie ihm auch eine Hintergrundfarbe von halbtransparentem Schwarz, was zu einem leicht dunkleren Farbton führt, der die Hintergrundfarbe Rot ein wenig durchscheinen lässt.
- Schreiben Sie ein Regelset, das dem `<h2>` eine effektive Schriftgröße von 20px gibt (aber in `em` ausgedrückt) und eine geeignete Zeilenhöhe, um es im Zentrum des Inhaltskastens des Headers zu platzieren. Erinnern Sie sich daran, dass die Höhe des Inhaltskastens 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Schreiben Sie ein Regelset, das dem `<p>` im Footer eine effektive Schriftgröße von 15px gibt (aber in `em` ausgedrückt) und eine geeignete Zeilenhöhe, um es im Zentrum des Inhaltskastens des Footers zu platzieren. Erinnern Sie sich daran, dass die Höhe des Inhaltskastens 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Als letzten kleinen Touch geben Sie dem Absatz im `<article>` einen geeigneten Paddingwert, sodass seine linke Kante mit dem `<h2>` und dem Footer-Absatz übereinstimmt, und setzen Sie seine Farbe auf einen ziemlich hellen Farbton, damit er leicht zu lesen ist.

> [!NOTE]
> Denken Sie daran, dass das zweite Regelset `font-size: 10px;` auf dem `<html>`-Element setzt — das bedeutet, dass ein `em` für Nachkommen von `<html>` 10px entspricht statt der standardmäßigen 16px. (Dies ist natürlich vorausgesetzt, die betreffenden Nachkommen haben keine Vorfahren, die zwischen ihnen und `<html>` in der Hierarchie sitzen und eine andere `font-size` auf ihnen gesetzt haben. Dies könnte die benötigten Werte beeinflussen, obwohl dies in diesem einfachen Beispiel kein Problem ist.)

Andere Überlegungen:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration in jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in all Ihren Regeln hinzufügen, damit diese Regeln das Styling anderer Elemente nicht beeinflussen würden, wenn die Visitenkarte in eine Seite mit einer Menge anderen Inhalts eingefügt werden würde.

## Hinweise und Tipps

- Sie müssen den HTML-Code in keiner Weise bearbeiten, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen, den `em`-Wert zu ermitteln, den Sie benötigen, um eine bestimmte Pixelgröße darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzelelement (`<html>`) hat und mit welchem Wert sie multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren em-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Ein Beispiel der fertigen Visitenkarte mit einem roten Header und Footer und einem dunkleren mittleren Panel, das die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
