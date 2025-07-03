---
title: "Herausforderung: Grundlegendes CSS-Verständnis"
short-title: "Herausforderung: Visitenkarte"
slug: Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Diese Herausforderung stellt Ihnen eine Reihe verwandter Übungen zur Verfügung, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Spielkarte/Social-Media-Profil.

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie:

- Gehen Sie und holen Sie sich die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) und speichern Sie diese in einem neuen Verzeichnis auf Ihrem lokalen Computer. Wenn Sie Ihr eigenes Bild verwenden und Ihren eigenen Namen einfügen möchten, sind Sie herzlich willkommen – stellen Sie nur sicher, dass das Bild quadratisch ist.
- Holen Sie sich die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) – diese enthält eine Reihe von rohen Selektoren und Regelsets, die Sie studieren und kombinieren müssen, um einen Teil dieser Herausforderung zu beantworten.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren ausfüllen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurden einige rohe HTML und ein Bild zur Verfügung gestellt, und Sie müssen das notwendige CSS schreiben, um dies in eine schicke kleine Online-Visitenkarte zu gestalten, die vielleicht auch als Spielkarte oder Social-Media-Profil dienen kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegendes Setup:

- Erstellen Sie zunächst eine neue Datei im gleichen Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas sehr Einfallsreiches, wie `style.css`.
- Verknüpfen Sie Ihr CSS mit Ihrer HTML-Datei über ein `<link>`-Element.
- Die ersten beiden Regelsets in der CSS-Ressourcendatei gehören Ihnen, KOSTENLOS! Nachdem Sie Ihre gute Fortune gefeiert haben, kopieren und fügen Sie sie an den Anfang Ihrer neuen CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS ordnungsgemäß auf Ihr HTML angewendet wird.
- Über den beiden Regeln fügen Sie einen CSS-Kommentar mit etwas Text ein, um anzugeben, dass dies eine Reihe allgemeiner Stile für die gesamte Seite ist. "Allgemeine Seitenstile" würde ausreichen. Fügen Sie unten in der CSS-Datei drei weitere Kommentare ein, die Stile spezifisch für das Setup des Kartencontainers, Stile spezifisch für den Header und Footer und Stile spezifisch für die Hauptinhalte der Visitenkarte angeben. Von nun an sollten nachfolgende Stile, die dem Stylesheet hinzugefügt werden, an einem passenden Ort organisiert werden.

Umgang mit den in der CSS-Ressourcendatei bereitgestellten Selektoren und Regelsets:

- Als nächstes möchten wir, dass Sie sich die vier Selektoren ansehen und die Spezifität für jeden berechnen. Schreiben Sie diese irgendwo auf, wo sie später gefunden werden können, z.B. in einem Kommentar oben in Ihrem CSS.
- Jetzt ist es an der Zeit, den richtigen Selektor auf das richtige Regelset anzuwenden! In Ihren CSS-Ressourcen finden Sie vier Paare aus Selektor und Regelset, die Sie zuordnen müssen. Machen Sie dies jetzt und fügen Sie sie Ihrer CSS-Datei hinzu. Sie müssen:
  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine solide Hintergrundfarbe, Rand und abgerundete Ecken geben, unter anderem.
  - Dem Header einen Hintergrundverlauf von dunkler zu heller geben und abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundverlauf von heller zu dunkler geben und abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Das Bild nach rechts [floaten](/de/docs/Learn_web_development/Core/CSS_layout/Floats), sodass es an der rechten Seite der Hauptinhalte der Visitenkarte klebt, und ihm eine maximale Höhe von 100% geben (ein cleverer Trick, der sicherstellt, dass es wächst/schrumpft, um die gleiche Höhe wie sein Elterncontainer beizubehalten, unabhängig davon, welche Höhe dieser hat).

- Achtung! In den bereitgestellten Regelsets gibt es zwei Fehler. Verwenden Sie jede Technik, die Sie kennen, um diese zu finden und zu beheben, bevor Sie fortfahren.

Neue Regelsets, die Sie schreiben müssen:

- Schreiben Sie ein Regelset, das sowohl den Kartenheader als auch den Kartenfooter anspricht und beiden eine berechnete Gesamtgröße von 50px gibt (einschließlich einer Inhaltsgröße von 30px und 10px Padding auf allen Seiten.) Aber drücken Sie es in `em`s aus.
- Der Standard-Rand, der durch den Browser auf die `<h2>`- und `<p>`-Elemente angewendet wird, wird unser Design stören, also schreiben Sie eine Regel, die alle diese Elemente anspricht und ihren Rand auf 0 setzt.
- Um zu verhindern, dass das Bild aus den Hauptinhalten der Visitenkarte (dem `<article>`-Element) herausspritzt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, aber in `em`s ausgedrückt. Geben Sie ihm ebenfalls eine Hintergrundfarbe von halbschwarztransparenter Schwarze, was zu einem leicht dunkleren Farbton führt, der die Hintergrundfarbe Rot ein bisschen durchscheinen lässt.
- Schreiben Sie ein Regelset, das dem `<h2>` eine effektive Schriftgröße von 20px (aber in `em`s ausgedrückt) und eine passende Zeilenhöhe gibt, um es in der Mitte des Inhaltskastens des Headers zu platzieren. Beachten Sie von früher, dass die Höhe des Inhaltskastens 30px sein sollte — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Schreiben Sie ein Regelset, das dem `<p>` innerhalb des Footers eine effektive Schriftgröße von 15px (aber in `em`s ausgedrückt) und eine passende Zeilenhöhe gibt, um es in der Mitte des Inhaltskastens des Footers zu platzieren. Beachten Sie von früher, dass die Höhe des Inhaltskastens 30px sein sollte — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Als letzten kleinen Touch geben Sie dem Absatz innerhalb des `<article>` einen passenden Padding-Wert, sodass seine linke Kante mit dem `<h2>` und dem Footer-Absatz in einer Linie steht, und setzen Sie seine Farbe relativ hell, sodass er leicht lesbar ist.

> [!NOTE]
> Denken Sie daran, dass das zweite Regelset `font-size: 10px;` auf dem `<html>`-Element setzt — das bedeutet, dass für alle Nachkommen von `<html>` ein em gleich 10px statt 16px ist, wie es standardmäßig der Fall ist. (Das gilt natürlich, vorausgesetzt, die betreffenden Nachkommen haben keine Vorfahren, die zwischen ihnen und `<html>` in der Hierarchie sitzen und eine andere `font-size` auf ihnen gesetzt haben. Dies könnte die Werte beeinflussen, die Sie benötigen, obwohl dies in diesem einfachen Beispiel kein Problem darstellt.)

Weitere Überlegungen:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS so schreiben, dass es maximal lesbar ist, mit einer separaten Deklaration in jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in all Ihren Regeln einfügen, sodass diese Regeln nicht mit der Stilgebung anderer Elemente interferieren, falls die Visitenkarte auf einer Seite mit einer Menge anderer Inhalte platziert wird.

## Hinweise und Tipps

- Sie müssen das HTML nicht auf irgendeine Weise bearbeiten, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen herauszufinden, welchen `em`-Wert Sie benötigen, um eine bestimmte Pixellänge zu repräsentieren, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzel- (`<html>`) Element hat, und mit welchem Faktor es multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren em-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Das folgende Bildschirmfoto zeigt ein Beispiel dafür, wie das fertige Design aussehen sollte:

![Ein Blick auf die fertige Visitenkarte, mit einem rotierenden Header und Footer und einem dunkleren mittleren Bereich, der die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
