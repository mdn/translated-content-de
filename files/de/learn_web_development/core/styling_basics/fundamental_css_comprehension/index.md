---
title: "Herausforderung: Grundlegendes CSS-Verständnis"
slug: Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Diese Herausforderung bietet eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Spielerkarte/Social-Media-Profil.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie:

- Holen Sie sich die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [dazugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) und speichern Sie sie in einem neuen Verzeichnis auf Ihrem lokalen Computer. Wenn Sie Ihr eigenes Bild verwenden und Ihren eigenen Namen einfügen möchten, können Sie dies tun — achten Sie nur darauf, dass das Bild quadratisch ist.
- Laden Sie die [CSS-Ressourcen Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) herunter — diese enthält eine Reihe von Rohselektoren und Regelsets, die Sie studieren und kombinieren müssen, um einen Teil dieser Herausforderung zu beantworten.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten den HTML-Code einfügen und das CSS in einen dieser Online-Editoren übernehmen und diese [URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML und ein Bild bereitgestellt, und Sie müssen das notwendige CSS schreiben, um daraus eine schicke kleine Online-Visitenkarte zu erstellen, die vielleicht auch als Spielerkarte oder Social-Media-Profil genutzt werden kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

- Erstellen Sie zunächst eine neue Datei im selben Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas wirklich Einfallsreiches wie `style.css`.
- Verknüpfen Sie Ihr CSS mit Ihrer HTML-Datei über ein `<link>`-Element.
- Die ersten beiden Regelsets in der CSS-Ressourcendatei gehören Ihnen KOSTENLOS! Nachdem Sie Ihr Glück fertig gefeiert haben, kopieren Sie sie und fügen Sie sie oben in Ihre neue CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS richtig auf Ihr HTML angewendet wird.
- Über den beiden Regeln fügen Sie einen CSS-Kommentar mit etwas Text ein, der anzeigt, dass dies eine Reihe von allgemeinen Stilen für die gesamte Seite ist. „Allgemeine Seitenstile“ wäre ausreichend. Fügen Sie auch am unteren Rand der CSS-Datei drei weitere Kommentare hinzu, um Stile anzugeben, die spezifisch für die Einrichtung des Kartencontainers, des Headers und Footers sowie der Hauptinhalte der Visitenkarte sind. Ab jetzt sollten nachfolgende Stile, die zum Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Umgang mit den Selektoren und Regelsets aus der CSS-Ressourcendatei:

- Als nächstes möchten wir, dass Sie sich die vier Selektoren ansehen und die Spezifität für jeden berechnen. Schreiben Sie diese irgendwo auf, wo sie später gefunden werden können, z. B. in einem Kommentar am Anfang Ihres CSS.
- Jetzt ist es an der Zeit, den richtigen Selektor auf das richtige Regelset anzuwenden! Sie haben vier Paare von Selektor und Regelset, die Sie in Ihren CSS-Ressourcen zuordnen müssen. Machen Sie das jetzt und fügen Sie sie zu Ihrer CSS-Datei hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine einfarbige Hintergrundfarbe, einen Rahmen und einen Rahmenradius (abgerundete Ecken!) sowie andere Dinge geben.
  - Dem Header einen Hintergrundverlauf geben, der von dunkler nach heller geht, sowie abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundverlauf geben, der von heller nach dunkler geht, sowie abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Das Bild [floaten](/de/docs/Learn_web_development/Core/CSS_layout/Floats), sodass es an der rechten Seite des Hauptinhalts der Visitenkarte haftet, und ihm eine maximale Höhe von 100% geben (ein cleverer Trick, der sicherstellt, dass es wächst/schrumpft, um die gleiche Höhe wie sein übergeordnetes Element zu behalten, unabhängig davon, welche Höhe es erreicht.)

- Achtung! Es gibt zwei Fehler in den bereitgestellten Regelsets. Verwenden Sie jede Technik, die Sie kennen, um diese zu finden und zu beheben, bevor Sie fortfahren.

Neue Regelsets, die Sie schreiben müssen:

- Schreiben Sie ein Regelset, das sowohl den Kartenheader als auch den Kartenfooter anspricht und ihnen beiden eine berechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltsgröße von 30px und eines Abstands von 10px auf allen Seiten). Drücken Sie es aber in `em` aus.
- Der Standardabstand, der vom Browser auf die `<h2>`- und `<p>`-Elemente angewendet wird, wird unser Design beeinträchtigen, also schreiben Sie eine Regel, die alle diese Elemente anspricht und ihren Abstand auf 0 setzt.
- Um zu verhindern, dass das Bild aus dem Hauptinhalt der Visitenkarte (dem `<article>`-Element) herausragt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, jedoch in `em` ausgedrückt. Geben Sie ihm auch eine Hintergrundfarbe von halbtransparentem Schwarz, was zu einem etwas dunkleren Farbton führt, der das Hintergrund-Rot auch ein wenig durchscheinen lässt.
- Schreiben Sie ein Regelset, das das `<h2>`-Element mit einer effektiven Schriftgröße von 20px (aber in `em` ausgedrückt) und einer geeigneten Zeilenhöhe versieht, um es in der Mitte des Inhaltsblocks des Headers zu platzieren. Erinnern Sie sich daran, dass die Inhaltsgröße des Headers 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Schreiben Sie ein Regelset, das dem `<p>`-Element im Footer eine effektive Schriftgröße von 15px (aber in `em` ausgedrückt) und eine geeignete Zeilenhöhe gibt, um es in der Mitte des Inhaltsblocks des Footers zu platzieren. Erinnern Sie sich daran, dass die Inhaltsgröße des Footers 30px betragen sollte — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Als kleines letztes Detail geben Sie dem Absatz im `<article>` einen passenden Innenabstand, sodass seine linke Kante mit dem `<h2>` und dem Footer-Absatz übereinstimmt, und setzen Sie seine Farbe auf einen ziemlich hellen Ton, damit er gut lesbar ist.

> [!NOTE]
> Bedenken Sie, dass das zweite Regelset `font-size: 10px;` auf dem `<html>`-Element setzt — das bedeutet, dass für alle Nachkommen von `<html>` ein `em` 10px entspricht, statt standardmäßig 16px. (Dies gilt natürlich, sofern die betreffenden Nachkommen keine Vorfahren zwischen sich und `<html>` in der Hierarchie haben, bei denen eine andere `font-size` eingestellt ist. Dies könnte die benötigten Werte beeinflussen, obwohl dies in diesem einfachen Beispiel kein Problem darstellt.)

Andere Dinge, über die man nachdenken sollte:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration auf jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in allen Ihren Regeln einfügen, damit diese Regeln nicht mit der Formatierung anderer Elemente in Konflikt geraten, falls die Visitenkarte auf einer Seite mit vielen anderen Inhalten platziert wird.

## Hinweise und Tipps

- Sie müssen den HTML-Code in keiner Weise bearbeiten, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen, den `em`-Wert zu ermitteln, den Sie benötigen, um eine bestimmte Pixel-Länge darzustellen, denken Sie darüber nach, welche Grundschriftgröße das Root-Element (`<html>`) hat und mit welchem Faktor es multipliziert werden muss, um den gewünschten Wert zu erreichen. Dadurch erhalten Sie Ihren `em`-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Eine Ansicht der fertigen Visitenkarte, die einen roten Header und Footer sowie ein dunkleres mittleres Panel mit den Hauptdetails und einem Bild zeigt.](business-card.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
