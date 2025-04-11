---
title: "Herausforderung: Grundlegendes CSS-Verständnis"
short-title: "Herausforderung: Visitenkarte"
slug: Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Diese Herausforderung bietet eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Gamer-Karte/Profil in sozialen Medien.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Besorgen Sie sich die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) und speichern Sie sie in einem neuen Verzeichnis auf Ihrem lokalen Computer. Wenn Sie Ihr eigenes Bild verwenden und Ihren eigenen Namen einfügen möchten, können Sie das gerne tun – achten Sie nur darauf, dass das Bild quadratisch ist.
- Holen Sie sich die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) – diese enthält eine Reihe von Rohselektoren und Regelsets, die Sie studieren und kombinieren müssen, um einen Teil dieser Herausforderung zu beantworten.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben einige rohe HTML und ein Bild zur Verfügung gestellt bekommen und müssen das notwendige CSS schreiben, um dies in eine schicke kleine Online-Visitenkarte zu stylen, die vielleicht auch als Gamer-Karte oder Profil in sozialen Medien dienen kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

- Erstellen Sie zunächst eine neue Datei im gleichen Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas wirklich Einfallsreiches wie `style.css`.
- Verknüpfen Sie Ihr CSS mit Ihrer HTML-Datei über ein `<link>`-Element.
- Die ersten beiden Regelsets in der CSS-Ressourcendatei gehören Ihnen, KOSTENLOS! Nachdem Sie Ihre Freude über Ihr Glück ausgelebt haben, kopieren und fügen Sie sie oben in Ihre neue CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS ordnungsgemäß auf Ihr HTML angewendet wurde.
- Fügen Sie über den beiden Regeln einen CSS-Kommentar mit einem Text ein, der anzeigt, dass dies eine Reihe allgemeiner Stile für die gesamte Seite sind. "Allgemeine Seitenstile" wäre geeignet. Fügen Sie auch drei weitere Kommentare am Ende der CSS-Datei ein, um Stile anzugeben, die speziell für die Einrichtung des Kartencontainers, für den Header und den Footer sowie für die Hauptinhalte der Visitenkarte sind. Von jetzt an sollten nachfolgende Stile, die dem Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Beachtung der Selektoren und Regelsets, die in der CSS-Ressourcendatei bereitgestellt wurden:

- Als Nächstes möchten wir, dass Sie sich die vier Selektoren ansehen und die Spezifität für jeden berechnen. Schreiben Sie diese an einem Ort auf, wo sie später gefunden werden können, beispielsweise in einem Kommentar oben in Ihrem CSS.
- Jetzt ist es Zeit, den richtigen Selektor auf den richtigen Regelsatz anzuwenden! Sie haben vier Paare von Selektor und Regelsatz in Ihren CSS-Ressourcen zum Zuordnen. Tun Sie dies jetzt und fügen Sie sie Ihrem CSS hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine solide Hintergrundfarbe, einen Rahmen und einen `border-radius` (abgerundete Ecken!) sowie andere Dinge geben.
  - Dem Header einen Hintergrundverlauf geben, der von dunkler zu heller verläuft, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundverlauf geben, der von heller zu dunkler verläuft, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Das Bild nach rechts [floaten](/de/docs/Learn_web_development/Core/CSS_layout/Floats), sodass es an der rechten Seite der Hauptinhalte der Visitenkarte klebt, und ihm eine `max-height` von 100% geben (ein cleverer Trick, der dafür sorgt, dass es wächst/schrumpft, um die gleiche Höhe wie sein Elterncontainer beizubehalten, unabhängig davon, welche Höhe es annimmt.)

- Vorsicht! In den bereitgestellten Regelsets gibt es zwei Fehler. Verwenden Sie jede Ihnen bekannte Technik, um diese aufzuspüren und zu beheben, bevor Sie fortfahren.

Neue Regelsets, die Sie schreiben müssen:

- Schreiben Sie ein Regelset, das auf sowohl den Kartenheader als auch den Kartenfooter abzielt und ihnen beide eine berechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltshöhe von 30px und einer Polsterung von 10px auf allen Seiten). Aber drücken Sie es in `em`s aus.
- Der Standardmargen, der durch den Browser auf die `<h2>`- und `<p>`-Elemente angewendet wird, wird unser Design stören, daher schreiben Sie eine Regel, die alle diese Elemente anvisiert und deren Margin auf 0 setzt.
- Um zu verhindern, dass das Bild aus dem Hauptinhalt der Visitenkarte (dem `<article>`-Element) herausfließt, müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, jedoch ausgedrückt in `em`s. Geben Sie ihm auch eine Hintergrundfarbe in halbtransparentem Schwarz, was zu einem etwas dunkleren Farbton führt, der die Hintergrundfarbe Rot ein wenig zum Durchscheinen bringt.
- Schreiben Sie ein Regelset, das dem `<h2>` eine effektive Schriftgröße von 20px gibt (jedoch ausgedrückt in `em`s) und eine geeignete Zeilenhöhe, um es in der Mitte des Headers-Inhaltskastens zu platzieren. Erinnern Sie sich von früher, dass die Inhaltshöhe 30px sein sollte – das gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Schreiben Sie ein Regelset, das dem `<p>` innerhalb des Footers eine effektive Schriftgröße von 15px (jedoch ausgedrückt in `em`s) und eine geeignete Zeilenhöhe gibt, um es in der Mitte des Footer-Inhaltskastens zu platzieren. Erinnern Sie sich von früher, dass die Inhaltshöhe 30px sein sollte – das gibt Ihnen alle Zahlen, die Sie zur Berechnung der Zeilenhöhe benötigen.
- Als letzten kleinen Schliff, geben Sie dem Absatz innerhalb des `<article>` einen geeigneten Polsterungswert, sodass sein linker Rand mit dem `<h2>` und dem Footer-Absatz ausgerichtet ist, und setzen Sie seine Farbe, um sie ziemlich hell zu machen, damit sie leicht zu lesen ist.

> [!NOTE]
> Beachten Sie, dass das zweite Regelset `font-size: 10px;` auf das `<html>`-Element setzt – dies bedeutet, dass für alle Nachfahren von `<html>`, ein em 10px statt der Standard-16px entspricht. (Dies ist natürlich vorausgesetzt, dass die betreffenden Nachfahren keine Vorfahren zwischen ihnen und `<html>` in der Hierarchie sitzen haben, die eine andere `font-size` auf sie gesetzt haben. Dies könnte die Werte beeinflussen, die Sie benötigen, obwohl dies in diesem einfachen Beispiel kein Problem ist.)

Andere Dinge, die Sie bedenken sollten:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration in jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in allen Ihren Regeln einschließen, sodass diese Regeln nicht mit der Gestaltung anderer Elemente interferieren, falls die Visitenkarte auf einer Seite mit vielen anderen Inhalten platziert wird.

## Hinweise und Tipps

- Sie brauchen das HTML nicht in irgendeiner Weise zu bearbeiten, außer um Ihr CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen herauszufinden, welchen `em`-Wert Sie benötigen, um eine bestimmte Pixellänge darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzelelement (`<html>`) hat und womit es multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren em-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Ein Blick auf die fertige Visitenkarte, zeigt einen roten Header und Footer, und ein dunkleres mittleres Panel, das die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
