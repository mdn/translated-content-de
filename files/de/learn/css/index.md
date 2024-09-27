---
title: HTML mit CSS gestalten lernen
slug: Learn/CSS
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Cascading Style Sheets — oder [CSS](/de/docs/Glossary/CSS) — ist die erste Technologie, die Sie nach [HTML](/de/docs/Glossary/HTML) erlernen sollten. Während HTML verwendet wird, um die Struktur und Semantik Ihres Inhalts zu definieren, wird CSS verwendet, um ihn zu gestalten und anzuordnen. Zum Beispiel können Sie mit CSS die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts ändern, ihn in mehrere Spalten aufteilen oder Animationen und andere dekorative Funktionen hinzufügen.

## Voraussetzungen

Sie sollten die Grundlagen von HTML erlernen, bevor Sie sich an CSS versuchen. Wir empfehlen, zuerst unser Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durchzuarbeiten.

Sobald Sie die Grundlagen von HTML verstanden haben, empfehlen wir, HTML und CSS gleichzeitig weiter zu erlernen und zwischen den beiden Themen zu wechseln. Dies liegt daran, dass HTML weitaus interessanter und viel mehr Spaß macht, wenn Sie CSS anwenden, und Sie können CSS nicht ohne Kenntnisse in HTML erlernen.

Vor Beginn dieses Themas sollten Sie auch mit der Verwendung von Computern und der passiven Nutzung des Webs (d.h. einfaches Anschauen und Konsumieren der Inhalte) vertraut sein. Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben, wie im Abschnitt [Installation grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) erläutert, und verstehen, wie Dateien erstellt und verwaltet werden, wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) erklärt — beides Teile unseres Moduls [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) für absolute Anfänger.

Es wird auch empfohlen, das Modul [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) zu durchlaufen, bevor Sie mit diesem Thema fortfahren, insbesondere wenn Sie neu in der Webentwicklung sind. Vieles, was im Artikel [CSS-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) behandelt wird, ist auch in unserem Modul [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) abgedeckt, jedoch in wesentlich detaillierterer Form.

## Module

Dieses Thema enthält die folgenden Module in einer empfohlenen Reihenfolge zur Bearbeitung. Sie sollten mit dem ersten beginnen.

- [CSS erste Schritte](/de/docs/Learn/CSS/First_steps)

  - : CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und anzuordnen — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet einen sanften Einstieg in Ihren Weg zur CSS-Meisterschaft mit den Grundlagen, wie es funktioniert, wie die Syntax aussieht und wie Sie es verwenden können, um Gestaltung zu HTML hinzuzufügen.

- [CSS Bausteine](/de/docs/Learn/CSS/Building_blocks)

  - : Dieses Modul setzt dort an, wo [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) aufgehört hat — jetzt, da Sie mit der Sprache und ihrer Syntax vertraut sind und einige grundlegende Erfahrungen mit der Verwendung gesammelt haben, ist es Zeit, etwas tiefer zu gehen. Dieses Modul befasst sich mit dem Kaskaden- und Vererbungskonzept, allen verfügbaren Selektorenarten, Einheiten, Größenbestimmung, Gestaltung von Hintergründen und Rändern, Debugging und vielem mehr.

    Das Ziel ist hier, Ihnen ein Toolkit zum kompetenten Schreiben von CSS bereitzustellen und alle wesentlichen Theorien zu verstehen, bevor es weitergeht zu spezifischeren Disziplinen wie [Textgestaltung](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout).

- [CSS Textgestaltung](/de/docs/Learn/CSS/Styling_text)

  - : Mit den Grundlagen der CSS-Sprache, die abgedeckt wurden, konzentriert sich das nächste CSS-Thema auf die Textgestaltung — eines der häufigsten Dinge, die Sie mit CSS tun werden. Hier betrachten wir die Grundlagen der Textgestaltung, einschließlich Schriftart, Fettdruck, Kursivschrift, Zeilen- und Buchstabenabstand, Schlagschatten und andere Texteigenschaften. Wir schließen das Modul ab, indem wir uns der Anwendung benutzerdefinierter Schriftarten auf Ihre Seite und der Gestaltung von Listen und Links widmen.

- [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)
  - : An diesem Punkt haben wir bereits die CSS-Grundlagen, wie man Text gestaltet und wie man die Boxen, in denen Ihr Inhalt sitzt, gestaltet und manipuliert. Jetzt ist es an der Zeit zu lernen, wie man Ihre Boxen an den richtigen Platz im Verhältnis zum Ansichtsfenster und zueinander platziert. Wir haben die notwendigen Voraussetzungen abgedeckt, damit wir nun tief in das CSS-Layout eintauchen können, verschiedene Anzeigeeinstellungen, moderne Layout-Tools wie Flexbox, CSS-Grid und Positionierung sowie einige der älteren Techniken, die Sie möglicherweise noch kennen möchten.

## Häufige CSS-Probleme lösen

[CSS verwenden, um häufige Probleme zu lösen](/de/docs/Learn/CSS/Howto) bietet Links zu Inhalten, die erklären, wie man CSS verwendet, um sehr häufige Probleme bei der Erstellung einer Webseite zu lösen.

Von Anfang an werden Sie hauptsächlich Farben auf HTML-Elemente und deren Hintergründe anwenden; die Größe, Form und Position von Elementen ändern; und Rahmen auf Elemente hinzufügen und definieren. Aber es gibt nicht viel, was Sie nicht tun können, sobald Sie ein solides Verständnis der Grundlagen von CSS haben. Eines der besten Dinge beim Erlernen von CSS ist, dass Sie, sobald Sie die Grundlagen kennen, normalerweise ein gutes Gefühl dafür haben, was möglich ist und was nicht, auch wenn Sie noch nicht wissen, wie man es macht!

## "CSS ist seltsam"

CSS funktioniert etwas anders als die meisten Programmiersprachen und Design-Tools, auf die Sie stoßen werden. Warum funktioniert es so, wie es funktioniert? Im folgenden Video gibt Miriam Suzanne eine nützliche Erklärung dafür, warum CSS funktioniert, wie es funktioniert und warum es sich so entwickelt hat:

{{EmbedYouTube("aHUtMbJw8iA")}}

## Siehe auch

- [CSS auf MDN](/de/docs/Web/CSS)
  - : Der Haupteinstiegspunkt für CSS-Dokumentation auf MDN, wo Sie ausführliche Referenzdokumentation zu allen Funktionen der CSS-Sprache finden. Möchten Sie wissen, welche Werte eine Eigenschaft annehmen kann? Dies ist ein guter Ort, um danach zu suchen.
