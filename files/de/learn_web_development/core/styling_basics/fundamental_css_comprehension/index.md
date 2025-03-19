---
title: "Herausforderung: Grundlegendes Verständnis von CSS"
short-title: "Herausforderung: Visitenkarte"
slug: Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Diese Herausforderung bietet eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design — eine Visitenkarte / Gamer-Karte / Social-Media-Profil — zu erstellen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie:

- Die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) abrufen und in einem neuen Verzeichnis auf Ihrem lokalen Computer speichern. Wenn Sie Ihre eigene Bilddatei verwenden und Ihren eigenen Namen einfügen möchten, können Sie dies gerne tun — achten Sie nur darauf, dass das Bild quadratisch ist.
- Die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) abrufen — diese enthält eine Reihe von Roh-Selektoren und Regelmengen, die Sie studieren und kombinieren müssen, um einen Teil dieser Herausforderung zu beantworten.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren ausfüllen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Sollten Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektauftrag

Sie haben einige Roh-HTMLs und ein Bild erhalten und müssen das notwendige CSS schreiben, um dieses in eine schicke kleine Online-Visitenkarte zu stylen, die vielleicht auch als Gamer-Karte oder Social-Media-Profil verwendet werden kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

- Erstellen Sie zunächst eine neue Datei im selben Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas sehr einfallsreich wie `style.css`.
- Verbinden Sie Ihr CSS mit Ihrer HTML-Datei über ein `<link>`-Element.
- Die ersten beiden Regelmengen in der CSS-Ressourcendatei gehören Ihnen, KOSTENLOS! Nachdem Sie sich über Ihr Glück gefreut haben, kopieren Sie diese und fügen Sie sie an den Anfang Ihrer neuen CSS-Datei ein. Verwenden Sie sie als Test, um sicherzustellen, dass Ihr CSS korrekt auf Ihr HTML angewendet wird.
- Fügen Sie über den beiden Regeln einen CSS-Kommentar mit etwas Text ein, der darauf hinweist, dass es sich um eine Sammlung von allgemeinen Stilen für die gesamte Seite handelt. „Allgemeine Seitenstile“ wäre geeignet. Fügen Sie auch drei weitere Kommentare am Ende der CSS-Datei hinzu, um Stile anzugeben, die sich speziell auf die Einrichtung des Kartencontainers, auf Stile beziehen, die speziell auf den Header und Footer bezogen sind, und auf Stile, die spezifisch für die Hauptinhalte der Visitenkarte sind. Ab sofort sollten alle weiteren Stile, die dem Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Umgang mit den in der CSS-Ressourcendatei bereitgestellten Selektoren und Regelmengen:

- Als Nächstes möchten wir, dass Sie sich die vier Selektoren ansehen und die Spezifität für jeden berechnen. Schreiben Sie diese irgendwo auf, wo sie später gefunden werden können, zum Beispiel in einem Kommentar am Anfang Ihrer CSS.
- Nun ist es an der Zeit, den richtigen Selektor auf die richtige Regelmenge anzuwenden! Sie haben vier Paare von Selektor und Regelmenge, die in Ihren CSS-Ressourcen übereinstimmen. Machen Sie dies jetzt und fügen Sie sie zu Ihrer CSS-Datei hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine einfarbige Hintergrundfarbe, einen Rahmen und eine Border-Radius (abgerundete Ecken!) und andere Dinge geben.
  - Dem Header einen Hintergrundverlauf geben, der von dunkler nach heller geht, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundverlauf geben, der von heller nach dunkler geht, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Das Bild [float](/de/docs/Learn_web_development/Core/CSS_layout/Floats) nach rechts setzen, damit es an der rechten Seite der Hauptinhalte der Visitenkarte haftet, und eine max-height von 100% geben (ein cleverer Trick, der sicherstellt, dass es wächst / schrumpft, um gleichermaßen hoch zu bleiben wie der übergeordnete Container, unabhängig davon, welche Höhe dieser erreicht.)

- Vorsicht! Es gibt zwei Fehler in den bereitgestellten Regelmengen. Verwenden Sie eine beliebige Technik, die Sie kennen, um diese zu finden und zu beheben, bevor Sie fortfahren.

Neue Regelmengen, die Sie schreiben müssen:

- Schreiben Sie eine Regelmenge, die sowohl die Kartenüberschrift als auch den Kartenfußbereich anspricht und ihnen beide eine berechnete Gesamthöhe von 50 px gibt (einschließlich einer Inhaltsgröße von 30 px und einer Polsterung von 10 px an allen Seiten). Drücken Sie es jedoch in `em`s aus.
- Der Standardrand, der von Browsern auf die `<h2>`- und `<p>`-Elemente angewendet wird, stört unser Design, daher schreiben Sie eine Regel, die alle diese Elemente anspricht und ihren Rand auf 0 setzt.
- Um zu verhindern, dass das Bild aus den Hauptinhalten der Visitenkarte (dem `<article>`-Element) herausläuft, müssen wir ihm eine bestimmte Höhe geben. Stellen Sie die Höhe des `<article>` auf 120 px ein, jedoch in `em`s ausgedrückt. Geben Sie ihm auch eine Hintergrundfarbe von halbtransparentem Schwarz, was in einem etwas dunkleren Farbton resultiert, der es der Hintergrundfarbe Rot ermöglicht, auch durchzuscheinen.
- Schreiben Sie eine Regelmenge, die dem `<h2>` eine effektive Schriftgröße von 20 px (aber in `em`s ausgedrückt) gibt und eine passende Zeilenhöhe, um es in der Mitte des Inhaltskastens des Headers zu platzieren. Erinnern Sie sich daran, dass die Höhe des Inhaltskastens 30 px sein sollte – dies gibt Ihnen alle notwendigen Zahlen, um die Zeilenhöhe zu berechnen.
- Schreiben Sie eine Regelmenge, die dem `<p>` im Footer eine effektive Schriftgröße von 15 px (aber in `em`s ausgedrückt) gibt und eine passende Zeilenhöhe, um es in der Mitte des Inhaltskastens des Footers zu platzieren. Erinnern Sie sich daran, dass die Höhe des Inhaltskastens 30 px sein sollte – dies gibt Ihnen alle notwendigen Zahlen, um die Zeilenhöhe zu berechnen.
- Als kleinen Touch geben Sie dem Absatz im `<article>` einen passenden Wert für die Polsterung, sodass seine linke Kante mit dem `<h2>` und dem Footer-Absatz ausgerichtet ist, und setzen dessen Farbe so, dass sie ziemlich hell ist, damit sie leicht lesbar ist.

> [!NOTE]
> Bedenken Sie, dass die zweite Regelmenge `font-size: 10px;` auf das `<html>`-Element setzt — dies bedeutet, dass für Nachkommen von `<html>` ein `em` 10px entspricht, anstatt wie standardmäßig 16px. (Dies gilt natürlich, sofern die betreffenden Nachkommen keine Vorfahren haben, die zwischen ihnen und `<html>` in der Hierarchie sitzen und eine andere `font-size` auf sie gesetzt haben. Dies könnte die benötigten Werte beeinflussen, obwohl in diesem einfachen Beispiel dies kein Problem darstellt.)

Andere Dinge zu beachten:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration pro Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in all Ihren Regeln einbeziehen, damit diese Regeln nicht die Stile anderer Elemente beeinflussen, wenn die Visitenkarte auf einer Seite mit vielen anderen Inhalten platziert würde.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen, den `em`-Wert herauszufinden, den Sie benötigen, um eine bestimmte Pixellänge darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Wurzel- (`<html>`) Element hat und mit was es multipliziert werden muss, um den gewünschten Wert zu erhalten. Das gibt Ihnen Ihren em-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Ein Blick auf die fertige Visitenkarte, mit einem roten Header und Footer und einem dunkleren mittleren Bereich, der die Hauptdetails und das Bild enthält.](business-card.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
