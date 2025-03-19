---
title: "Herausforderung: Barrierefreiheit Fehlerbehebung"
short-title: "Herausforderung: A11y-Fehlerbehebung"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In dieser Herausforderung für dieses Modul präsentieren wir Ihnen eine einfache Website mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie das [ZIP, das die Dateien enthält, die das Beispiel ausmachen](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip), herunterladen. Entpacken Sie den Inhalt in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Beispielseite sollte wie folgt aussehen:

![Screenshot der fertigen Beispielseite mit gutem Farbkontrast. Das Suchfeld hat einen Platzhaltertext und einen Sende-Button, der "go" liest, aber kein sichtbares Label hat.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme mit der Anzeige des Ausgangszustands der Herausforderung sehen — dies liegt hauptsächlich an den Unterschieden im Markup, was wiederum einige Styling-Probleme verursacht, da das CSS nicht richtig angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Natursite präsentiert, die einen "faktischen" Artikel über Bären anzeigt. Derzeit weist sie eine Reihe von Barrierefreiheitsproblemen auf — Ihre Aufgabe besteht darin, die bestehende Site zu untersuchen und diese nach bestem Wissen zu beheben, indem Sie die unten stehenden Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer zu lesen. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Testergebnisse berichten und dann beheben, indem Sie die zugewiesenen Farben ändern?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr barrierefrei — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext aktualisieren, um es für Screenreader-Benutzer einfacher zu machen, ihn zu navigieren?
3. Der Navigationsteil der Site (eingewickelt in `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein richtiges HTML-Semantikelement gesetzt wird. Welches sollte es aktualisiert werden? Nehmen Sie die Aktualisierung vor.

> [!NOTE]
> Sie müssen die CSS-Regel-Selektoren aktualisieren, die die Tags zu ihren geeigneten Entsprechungen für die semantischen Überschriften gestalten. Sobald Sie Absatz-Elemente hinzufügen, werden Sie bemerken, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Benutzer nicht zugänglich. Können Sie dies beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist für Hörgeschädigte (taube) Menschen nicht zugänglich — können Sie eine Art von zugänglicher Alternative für diese Benutzer hinzufügen?
2. Der `<audio>`-Player ist nicht für Benutzer zugänglich, die ältere Browser verwenden, die HTML-Audio nicht unterstützen. Wie können Sie es ihnen ermöglichen, trotzdem auf das Audio zuzugreifen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte ein Label vertragen, aber wir möchten kein sichtbares Textlabel hinzufügen, das potenziell das Design stören würde und von sehenden Benutzern nicht wirklich benötigt wird. Wie können Sie ein Label hinzufügen, das nur für Screenreader zugänglich ist?
2. Die zwei `<input>`-Elemente im Kommentierungsformular haben sichtbare Textlabels, sind jedoch nicht eindeutig mit ihren Labels verknüpft — wie erreichen Sie dies? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Show/Hide-Kommentalsteuerung

Die Show/Hide-Kommentalsteuerungsschaltfläche ist derzeit nicht tastaturzugänglich. Können Sie sie tastaturzugänglich machen, sowohl in Bezug auf das Fokussieren mit der Tabulatortaste als auch auf das Aktivieren mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist schwierig für Screenreader-Benutzer, Datenreihen und -spalten miteinander zu verbinden, und die Tabelle hat auch keine Art von Zusammenfassung, um klarzumachen, was sie zeigt. Können Sie einige Funktionen zu Ihrem HTML hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
