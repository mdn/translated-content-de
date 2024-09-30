---
title: HTML mit CSS stylen lernen
slug: Learn/CSS
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Cascading Style Sheets — oder [CSS](/de/docs/Glossary/CSS) — sind die erste Technologie, die Sie nach [HTML](/de/docs/Glossary/HTML) lernen sollten. Während HTML verwendet wird, um die Struktur und Semantik Ihres Inhalts zu definieren, wird CSS verwendet, um den Inhalt zu gestalten und zu layouten. Zum Beispiel können Sie mit CSS die Schriftart, die Farbe, die Größe und den Abstand Ihres Inhalts ändern, ihn in mehrere Spalten aufteilen oder Animationen und andere dekorative Merkmale hinzufügen.

## Voraussetzungen

Sie sollten die Grundlagen von HTML lernen, bevor Sie CSS versuchen. Wir empfehlen, dass Sie zunächst unser Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durcharbeiten.

Sobald Sie die Grundlagen von HTML verstanden haben, empfehlen wir, HTML und CSS gleichzeitig weiter zu lernen und zwischen beiden Themen hin und her zu wechseln. Dies liegt daran, dass HTML viel interessanter und unterhaltsamer wird, wenn Sie CSS anwenden, und Sie CSS nicht lernen können, ohne HTML zu kennen.

Bevor Sie mit diesem Thema beginnen, sollten Sie auch mit der Nutzung von Computern und dem passiven Umgang mit dem Web vertraut sein (d. h. es betrachten, den Inhalt konsumieren). Sie sollten eine grundlegende Arbeitsumgebung eingerichtet haben, wie im Artikel [Grundlegende Software installieren](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, und wissen, wie man Dateien erstellt und verwaltet, wie im Artikel [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) detailliert beschrieben — beides Teile unseres vollständigen Einsteiger-Moduls [Einstieg ins Web](/de/docs/Learn/Getting_started_with_the_web).

Es wird auch empfohlen, dass Sie den [Einstieg ins Web](/de/docs/Learn/Getting_started_with_the_web) durcharbeiten, bevor Sie mit diesem Thema fortfahren, insbesondere wenn Sie völlig neu in der Webentwicklung sind. Allerdings wird vieles, was im Artikel [CSS-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) behandelt wird, auch in unserem Modul [CSS: Erste Schritte](/de/docs/Learn/CSS/First_steps) behandelt, allerdings viel detaillierter.

## Module

Dieses Thema enthält die folgenden Module in einer empfohlenen Reihenfolge, in der Sie sie durcharbeiten sollten. Sie sollten mit dem ersten beginnen.

- [CSS: Erste Schritte](/de/docs/Learn/CSS/First_steps)

  - : CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet einen sanften Einstieg auf Ihrem Weg zur CSS-Meisterschaft mit den Grundlagen, wie es funktioniert, wie die Syntax aussieht und wie Sie es beginnen können, um HTML zu stylen.

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)

  - : Dieses Modul baut dort weiter, wo [CSS: Erste Schritte](/de/docs/Learn/CSS/First_steps) aufgehört hat — jetzt, da Sie mit der Sprache und ihrer Syntax vertraut sind und einige grundlegende Erfahrungen mit der Verwendung gemacht haben, ist es Zeit, etwas tiefer einzutauchen. In diesem Modul betrachten wir die Kaskade und Vererbung, alle verfügbaren Selektortypen, Einheiten, Größenbestimmung, Hintergrund- und Rahmenstile, Debugging und vieles mehr.

    Das Ziel hier ist es, Ihnen ein Toolkit an die Hand zu geben, um kompetentes CSS zu schreiben und Ihnen das notwendige theoretische Wissen zu vermitteln, bevor Sie zu spezifischen Disziplinen wie [Textstyling](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

- [CSS-Text stylen](/de/docs/Learn/CSS/Styling_text)

  - : Nachdem die Grundlagen der CSS-Sprache behandelt sind, ist das nächste CSS-Thema, auf das Sie sich konzentrieren sollten, das Stylen von Text — eine der häufigsten Dinge, die Sie mit CSS tun werden. Hier betrachten wir die Grundlagen des Textstylings, einschließlich Einstellung der Schriftart, Fettung, Kursivschrift, Linien- und Zeichenabständen, Schlagschatten und anderer Textmerkmale. Wir schließen das Modul ab, indem wir uns ansehen, wie Sie benutzerdefinierte Schriftarten auf Ihre Seite anwenden und Listen und Links stylen können.

- [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)
  - : An diesem Punkt haben wir bereits die CSS-Grundlagen, wie man Text stylt und wie man die Boxen stylt und manipuliert, in denen Ihr Inhalt sitzt, behandelt. Jetzt ist es an der Zeit zu betrachten, wie Sie Ihre Boxen in Bezug auf das Ansichtsfenster und zueinander an der richtigen Stelle platzieren. Wir haben die notwendigen Voraussetzungen behandelt, damit wir jetzt tief in das CSS-Layout eintauchen können, indem wir uns verschiedene Anzeigeeinstellungen, moderne Layout-Tools wie flexbox, CSS grid und Positionierung sowie einige der älteren Techniken ansehen, die Sie möglicherweise immer noch wissen möchten.

## Häufige CSS-Probleme lösen

[Verwenden Sie CSS, um häufige Probleme zu lösen](/de/docs/Learn/CSS/Howto) bietet Links zu Inhaltsabschnitten, die erklären, wie Sie CSS verwenden, um sehr häufige Probleme bei der Erstellung einer Webseite zu lösen.

Von Anfang an werden Sie hauptsächlich Farben auf HTML-Elemente und deren Hintergründe anwenden; die Größe, Form und Position der Elemente ändern; und Rahmen auf Elementen hinzufügen und definieren. Aber es gibt nicht viel, was Sie nicht tun können, wenn Sie ein solides Verständnis selbst der Grundlagen von CSS haben. Eines der besten Dinge am Lernen von CSS ist, dass Sie, sobald Sie die Grundlagen kennen, normalerweise ein ziemlich gutes Gefühl dafür haben, was möglich ist und was nicht, selbst wenn Sie noch nicht wissen, wie es geht!

## "CSS ist seltsam"

CSS funktioniert ein wenig anders als die meisten Programmiersprachen und Design-Tools, die Sie kennenlernen werden. Warum funktioniert es so, wie es funktioniert? Im folgenden Video gibt Miriam Suzanne eine nützliche Erklärung, warum CSS so funktioniert, wie es funktioniert, und warum es sich so entwickelt hat:

{{EmbedYouTube("aHUtMbJw8iA")}}

## Siehe auch

- [CSS auf MDN](/de/docs/Web/CSS)
  - : Der Haupteinstiegspunkt für CSS-Dokumentation auf MDN, wo Sie detaillierte Referenzdokumentation für alle Funktionen der CSS-Sprache finden. Möchten Sie alle Werte wissen, die eine Eigenschaft annehmen kann? Dies ist ein guter Ort, um nachzuschlagen.
