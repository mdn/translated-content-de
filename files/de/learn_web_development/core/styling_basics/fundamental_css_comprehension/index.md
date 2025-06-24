---
title: "Herausforderung: Grundlegendes Verständnis von CSS"
short-title: "Herausforderung: Visitenkarte"
slug: Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}

Diese Herausforderung bietet eine Reihe verwandter Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Gamer-Karte/Social-Media-Profil.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Die [HTML-Datei für die Übung](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html) und die [zugehörige Bilddatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) abrufen und in einem neuen Verzeichnis auf Ihrem lokalen Computer speichern. Wenn Sie Ihr eigenes Bild verwenden und Ihren eigenen Namen einfügen möchten, können Sie dies gerne tun — stellen Sie nur sicher, dass das Bild quadratisch ist.
- Die [CSS-Ressourcen-Textdatei](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) abrufen — diese enthält eine Reihe von Rohselektoren und Regelsets, die Sie studieren und kombinieren müssen, um einen Teil dieser Herausforderung zu beantworten.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen und [diese URL](https://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) verwenden, um das `<img>`-Element auf die Bilddatei zu verweisen.

> [!NOTE]
> Wenn Sie steckenbleiben, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML und ein Bild zur Verfügung gestellt, und Sie müssen das notwendige CSS schreiben, um daraus eine schicke kleine Online-Visitenkarte zu gestalten, die möglicherweise auch als Gamer-Karte oder Social-Media-Profil genutzt werden kann. Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegendes Setup:

- Erstellen Sie zunächst eine neue Datei im selben Verzeichnis wie Ihre HTML- und Bilddateien. Nennen Sie sie etwas wirklich Einfallsreiches wie `style.css`.
- Verbinden Sie Ihr CSS mit Ihrer HTML-Datei über ein `<link>`-Element.
- Die ersten beiden Regelsets in der CSS-Ressourcendatei sind - völlig kostenlos - für Sie! Kopieren und fügen Sie sie freudig in Ihre neue CSS-Datei ein. Verwenden Sie sie, um sicherzustellen, dass Ihr CSS korrekt auf Ihr HTML angewendet wird.
- Fügen Sie über den beiden Regeln einen CSS-Kommentar mit etwas Text hinzu, der darauf hinweist, dass dies ein Satz allgemeiner Stile für die gesamte Seite ist. "Allgemeine Seitenstile" wäre passend. Fügen Sie auch drei weitere Kommentare am Ende der CSS-Datei hinzu, um Stile anzugeben, die spezifisch für die Einrichtung des Kartencontainers, spezifisch für den Header und Footer und spezifisch für den Hauptinhalt der Visitenkarte sind. Von nun an sollten nachfolgende Stile, die zum Stylesheet hinzugefügt werden, an einem geeigneten Ort organisiert werden.

Berücksichtigung der Selektoren und Regelsets in der CSS-Ressourcendatei:

- Als Nächstes möchten wir, dass Sie sich die vier Selektoren ansehen und die Spezifität für jeden berechnen. Schreiben Sie sie irgendwo auf, wo sie später gefunden werden können, z. B. in einem Kommentar am Anfang Ihres CSS.
- Jetzt ist es Zeit, den richtigen Selektor auf das richtige Regelset anzuwenden! Sie haben vier Paare von Selektor und Regelset, die Sie in Ihren CSS-Ressourcen zusammenfügen müssen. Tun Sie dies jetzt und fügen Sie sie Ihrem CSS hinzu. Sie müssen:

  - Dem Hauptkartencontainer eine feste Breite/Höhe, eine einfarbige Hintergrundfarbe, einen Rand und eine Rand-Radius (abgerundete Ecken!) und andere Dinge geben.
  - Dem Header einen Hintergrundgradienten geben, der von dunkler zu heller geht, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - Dem Footer einen Hintergrundgradienten geben, der von heller zu dunkler geht, plus abgerundete Ecken, die zu den abgerundeten Ecken des Hauptkartencontainers passen.
  - [Float](/de/docs/Learn_web_development/Core/CSS_layout/Floats) das Bild nach rechts, so dass es sich an die rechte Seite des Hauptinhaltes der Visitenkarte schmiegt, und geben Sie ihm eine maximale Höhe von 100% (ein cleverer Trick, der sicherstellt, dass es wächst/schrumpft, um die gleiche Höhe wie sein übergeordnetes Element beizubehalten, unabhängig davon, welche Höhe es annimmt).

- Vorsicht! In den bereitgestellten Regelsets gibt es zwei Fehler. Verfolgen Sie diese mit einer beliebigen Technik, die Sie kennen, und beheben Sie sie, bevor Sie weitermachen.

Neue Regelsets, die Sie schreiben müssen:

- Schreiben Sie ein Regelset, das sowohl den Kartenheader als auch den Footer anspricht und ihnen beiden eine errechnete Gesamthöhe von 50px gibt (einschließlich einer Inhaltshöhe von 30px und einem Padding von 10px auf allen Seiten). Aber drücken Sie es in `em`s aus.
- Der Standardabstand, der von den Browsern auf die `<h2>`- und `<p>`-Elemente angewendet wird, beeinträchtigt unser Design, daher schreiben Sie eine Regel, die all diese Elemente anspricht und ihren Abstand auf 0 setzt.
- Um zu verhindern, dass das Bild aus dem Hauptinhalt der Visitenkarte herausragt (das `<article>`-Element), müssen wir ihm eine spezifische Höhe geben. Setzen Sie die Höhe des `<article>` auf 120px, aber ausgedrückt in `em`s. Geben Sie ihm auch eine Hintergrundfarbe aus halbdurchsichtigem Schwarz, was zu einem etwas dunkleren Farbton führt, durch den der Hintergrundrotton ein wenig durchscheinen kann.
- Schreiben Sie ein Regelset, das dem `<h2>` eine effektive Schriftgröße von 20px gibt (aber ausgedrückt in `em`s) und eine angemessene Zeilenhöhe, um es in der Mitte des Inhaltselementes des Headers zu platzieren. Denken Sie daran, dass die Inhaltshöhe 30px betragen soll — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Schreiben Sie ein Regelset, das dem `<p>` im Footer eine effektive Schriftgröße von 15px gibt (aber ausgedrückt in `em`s) und eine angemessene Zeilenhöhe, um es in der Mitte des Inhaltselementes des Footers zu platzieren. Denken Sie daran, dass die Inhaltshöhe 30px betragen soll — dies gibt Ihnen alle Zahlen, die Sie benötigen, um die Zeilenhöhe zu berechnen.
- Als letzten kleinen Touch geben Sie dem Paragraphen im `<article>` einen geeigneten Padding-Wert, sodass seine linke Kante mit dem `<h2>` und dem Absatz im Footer ausgerichtet ist, und setzen Sie seine Farbe so, dass sie relativ hell ist, um ein leichtes Lesen zu ermöglichen.

> [!NOTE]
> Beachten Sie, dass das zweite Regelset `font-size: 10px;` auf das `<html>`-Element setzt — dies bedeutet, dass für alle Nachkommen von `<html>` ein em 10px anstelle von 16px entspricht, wie es standardmäßig der Fall ist. (Dies ist natürlich der Fall, vorausgesetzt, die fraglichen Nachkommen haben keine Vorfahren dazwischen, die eine andere `font-size` auf sie setzen. Dies könnte die benötigten Werte beeinflussen, obwohl dies in diesem einfachen Beispiel kein Problem darstellt.)

Andere Überlegungen:

- Sie erhalten Bonuspunkte, wenn Sie Ihr CSS für maximale Lesbarkeit schreiben, mit einer separaten Deklaration in jeder Zeile.
- Sie sollten `.card` am Anfang der Selektorkette in all Ihren Regeln einfügen, damit diese Regeln nicht den Stil anderer Elemente beeinträchtigen, wenn die Visitenkarte auf einer Seite mit einer Menge anderer Inhalte platziert würde.

## Hinweise und Tipps

- Sie müssen den HTML-Code in keiner Weise verändern, außer um das CSS auf Ihr HTML anzuwenden.
- Wenn Sie versuchen herauszufinden, welchen `em`-Wert Sie benötigen, um eine bestimmte Pixel-Länge darzustellen, denken Sie darüber nach, welche Basis-Schriftgröße das Root-Element (`<html>`) hat und mit welchem Wert sie multipliziert werden muss, um den gewünschten Wert zu erreichen. Das gibt Ihnen Ihren `em`-Wert, zumindest in einem einfachen Fall wie diesem.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen sollte:

![Eine Ansicht der fertigen Visitenkarte, zeigt einen roten Header und Footer sowie einen dunkleren Mittelteil mit den Hauptdetails und dem Bild.](business-card.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Styling_basics")}}
