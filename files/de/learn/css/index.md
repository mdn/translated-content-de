---
title: Lernen Sie, HTML mit CSS zu stylen
slug: Learn/CSS
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Cascading Style Sheets — oder {{glossary("CSS")}} — ist die erste Technologie, die Sie nach {{glossary("HTML")}} erlernen sollten. Während HTML verwendet wird, um die Struktur und Semantik Ihres Inhalts zu definieren, wird CSS verwendet, um ihn zu stylen und zu layouten. Zum Beispiel können Sie CSS verwenden, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Features hinzuzufügen.

## Voraussetzungen

Sie sollten die Grundlagen von HTML lernen, bevor Sie sich mit CSS beschäftigen. Wir empfehlen, dass Sie zuerst unser Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durchlaufen.

Sobald Sie die Grundlagen von HTML verstanden haben, empfehlen wir, dass Sie HTML und CSS gleichzeitig weiter lernen, indem Sie zwischen den beiden Themen hin und her wechseln. Dies liegt daran, dass HTML viel interessanter und viel unterhaltsamer zu lernen ist, wenn Sie CSS anwenden. Und Sie können CSS nicht lernen, ohne HTML zu kennen.

Bevor Sie mit diesem Thema beginnen, sollten Sie auch mit der Nutzung von Computern und der passiven Nutzung des Webs (d. h. nur ansehen und den Inhalt konsumieren) vertraut sein. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben, wie im Modul [Installation grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, und wissen, wie man Dateien erstellt und verwaltet, wie im Modul [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) beschrieben — beides Teile unseres Einsteiger-Moduls [Einführung in das Web](/de/docs/Learn/Getting_started_with_the_web).

Es wird außerdem empfohlen, dass Sie das Modul [Einführung in das Web](/de/docs/Learn/Getting_started_with_the_web) bearbeiten, bevor Sie mit diesem Thema fortfahren, insbesondere wenn Sie absolut neu in der Webentwicklung sind. Vieles, was in seinem Artikel [CSS-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) behandelt wird, ist auch in unserem Modul [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) enthalten, wenn auch detaillierter.

## Module

Dieses Thema enthält die folgenden Module, in einer vorgeschlagenen Reihenfolge, um sie durchzuarbeiten. Sie sollten mit dem ersten Modul beginnen.

- [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps)

  - : CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu stylen und zu layouten — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Features hinzuzufügen. Dieses Modul bietet einen sanften Einstieg auf dem Weg zur CSS-Meisterschaft mit den Grundlagen der Funktionsweise, wie die Syntax aussieht und wie Sie anfangen können, es zu verwenden, um HTML zu stylen.

- [Bausteine von CSS](/de/docs/Learn/CSS/Building_blocks)

  - : Dieses Modul setzt dort an, wo [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) aufgehört hat — jetzt haben Sie sich mit der Sprache und ihrer Syntax vertraut gemacht und haben einige grundlegende Erfahrungen gesammelt. Es ist an der Zeit, tiefer einzutauchen. Dieses Modul befasst sich mit der Kaskade und Vererbung, allen verfügbaren Selektortypen, Einheiten, Größenänderung, Styling von Hintergründen und Rahmen, Debugging und vielem mehr.

    Das Ziel hier ist es, Ihnen ein Werkzeugkasten zum Schreiben kompetenten CSS zur Verfügung zu stellen und Ihnen alle wesentlichen Theorien zu vermitteln, bevor Sie zu spezifischeren Disziplinen wie [Textstyling](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

- [CSS-Textstyling](/de/docs/Learn/CSS/Styling_text)

  - : Mit den Grundlagen der CSS-Sprache im Gepäck ist das nächste CSS-Thema, auf das Sie sich konzentrieren sollten, das Styling von Text — eine der häufigsten Aufgaben, die Sie mit CSS erledigen werden. Hier betrachten wir die Grundlagen des Textstylings, einschließlich der Einstellung von Schriftarten, Fettdruck, Kursivschrift, Zeilen- und Buchstabenabständen, Schlagschatten und anderen Texteigenschaften. Wir schließen das Modul ab, indem wir uns mit der Anwendung von benutzerdefinierten Schriftarten auf Ihre Seite und dem Styling von Listen und Links beschäftigen.

- [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)
  - : An diesem Punkt haben wir uns bereits mit den Grundlagen von CSS befasst, wie man Text stylt und wie man die Boxen stylt und manipuliert, in denen Ihre Inhalte enthalten sind. Jetzt ist es an der Zeit zu lernen, wie man Ihre Boxen im richtigen Verhältnis zum Ansichtsfenster und zueinander platziert. Wir haben die notwendigen Voraussetzungen besprochen, sodass wir nun tief in das CSS-Layout eintauchen können, indem wir uns verschiedene Anzeigeeinstellungen, moderne Layout-Tools wie Flexbox, CSS-Grid und Positionierung sowie einige ältere Techniken ansehen, die Sie möglicherweise noch kennen sollten.

## Lösung häufiger CSS-Probleme

[Verwenden Sie CSS, um häufige Probleme zu lösen](/de/docs/Learn/CSS/Howto) bietet Links zu Inhalten, die erklären, wie CSS verwendet wird, um sehr häufige Probleme bei der Erstellung einer Webseite zu lösen.

Von Anfang an werden Sie hauptsächlich Farben auf HTML-Elemente und deren Hintergründe anwenden; die Größe, Form und Position von Elementen ändern; und Ränder auf Elementen hinzufügen und definieren. Aber es gibt nicht viel, was Sie nicht tun können, wenn Sie ein solides Verständnis selbst der Grundlagen von CSS haben. Eines der besten Dinge am Lernen von CSS ist, dass Sie, sobald Sie die Grundlagen kennen, normalerweise ein ziemlich gutes Gefühl dafür haben, was getan werden kann und was nicht, selbst wenn Sie nicht wissen, wie es noch gemacht wird!

## "CSS ist seltsam"

CSS funktioniert etwas anders als die meisten Programmiersprachen und Designwerkzeuge, auf die Sie stoßen werden. Warum funktioniert es so, wie es funktioniert? Im folgenden Video gibt Miriam Suzanne eine hilfreiche Erklärung, warum CSS so funktioniert, wie es funktioniert, und warum es sich so entwickelt hat, wie es ist:

{{EmbedYouTube("aHUtMbJw8iA")}}

## Siehe auch

- [CSS auf MDN](/de/docs/Web/CSS)
  - : Der Haupteinstiegspunkt für CSS-Dokumentation auf MDN, wo Sie detaillierte Referenzdokumentationen für alle Funktionen der CSS-Sprache finden. Möchten Sie alle Werte wissen, die eine Eigenschaft annehmen kann? Dies ist ein guter Ort, um danach zu suchen.
