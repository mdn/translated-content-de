---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir uns damit beschäftigt, wie man die Boxen, in denen sich Ihre Inhalte befinden, stylen und manipulieren kann. Jetzt ist es an der Zeit, zu lernen, wie Sie Ihre Boxen richtig in Bezug zueinander und zum Browser-Viewport anordnen. Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Tools und dem Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion rekapituliert einige der CSS-Layout-Funktionen, die wir bereits in früheren Modulen behandelt haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es behandelt auch ausführlich das Konzept des normalen Flusses.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich zum Floaten von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Tools für die Erstellung mehrspaltiger Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid ist sie nun zu ihrem ursprünglichen Zweck zurückgekehrt, wie in diesem Artikel erklärt wird.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Mit Positionierung können Sie Elemente aus dem normalen Dokumentenfluss herausnehmen und sie anders verhalten lassen, zum Beispiel übereinander schweben oder immer an derselben Stelle im Browser-Viewport bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Anwendung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine ein-dimensionale Layout-Methode zum Anordnen von Elementen in Reihen oder Spalten. Elemente passen sich an, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : CSS-Grid-Layout ist ein zwei-dimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Erscheinen vielfältiger Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: eine Reihe von Praktiken, die es Webseiten ermöglichen, ihr Layout und Aussehen an unterschiedliche Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise, wie wir für das multi-device Web entwerfen, verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : **CSS Media Queries** bieten Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen angegebenen Regeln entspricht. Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax kennen und verwenden sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gestaltet werden kann.
- [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Eine Herausforderung, um Ihr Wissen über verschiedene Layout-Methoden zu testen, indem Sie eine Webseite gestalten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten sie als ambitionierte Ziele betrachten, die Sie nach optionalem Studium der Hauptartikel der Hauptartikel studieren können.

- [Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspaltige Layout-Spezifikation bietet Ihnen eine Methode, Inhalte in Spalten anzuordnen, wie Sie sie in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion verwenden können.
- [Veraltete Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr gebräuchliches Feature in CSS-Layouts, und bevor es CSS-Grid-Layout gab, wurden sie häufig mit Floats oder anderen Layout-Funktionen implementiert. Sie stellen sich Ihr Layout als eine festgelegte Anzahl von Spalten vor (z.B. 4, 6 oder 12) und passen Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Nutzer umfassen, die entweder ältere Browser verwenden oder Browser, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo kontinuierlich neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, weil verschiedene Browser dazu neigen, die Implementierung unterschiedlicher Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken verwenden können, um sicherzustellen, dass Ihre Website für Nutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [Praktische Beispiele zur Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige reale Beispiele erstellt, um zu veranschaulichen, welche Dinge Sie mit der Positionierung tun können.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, die Sie in Ihren Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
