---
title: "Herausforderung: Barrierefreiheit Fehlerbehebung"
short-title: "Herausforderung: A11y-Debugging"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In der Herausforderung für dieses Modul präsentieren wir Ihnen eine einfache Website mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie das [ZIP, das die Beispieldateien enthält](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip), herunterladen. Entpacken Sie den Inhalt in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Naturseite präsentiert, die einen „faktischen“ Artikel über Bären zeigt. In ihrem aktuellen Zustand weist sie eine Reihe von Barrierefreiheitsproblemen auf. Ihre Aufgabe ist es, die bestehende Seite zu erkunden und die Probleme bestmöglich zu beheben, indem Sie die unten stehenden Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer zu lesen. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Ergebnisse des Tests berichten und dann beheben, indem Sie die zugewiesenen Farben ändern?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich – berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext so aktualisieren, dass er für Screenreader-Nutzer leichter zu navigieren ist?
3. Der Navigationsmenü-Teil der Seite (eingefasst in `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein richtiges HTML-Semantikelement gesetzt wird. In welches sollte es aktualisiert werden? Führen Sie die Aktualisierung durch.

> [!NOTE]
> Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags für die semantischen Überschriften stilisieren. Sobald Sie Absatzelemente hinzufügen, werden Sie feststellen, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Nutzer nicht zugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist für hörgeschädigte (taube) Menschen nicht zugänglich – können Sie irgendeine Art von zugänglicher Alternative für diese Nutzer hinzufügen?
2. Der `<audio>`-Player ist für diejenigen nicht zugänglich, die ältere Browser verwenden, die HTML-Audio nicht unterstützen. Wie können Sie es ihnen ermöglichen, dennoch auf das Audio zuzugreifen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte ein Label gebrauchen, aber wir möchten kein sichtbares Textlabel hinzufügen, das potenziell das Design stören würde und von sehenden Nutzern nicht wirklich benötigt wird. Wie können Sie ein Label hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarformular haben sichtbare Textlabels, sind aber nicht eindeutig mit ihren Labels verknüpft – wie erreichen Sie dies? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Kontrolle zum Anzeigen/Verstecken von Kommentaren

Die Schaltfläche zum Anzeigen/Verstecken von Kommentaren ist derzeit nicht tastaturzugänglich. Können Sie sie tastaturzugänglich machen, sowohl in Bezug auf das Fokussieren mit der Tabulator-Taste als auch das Aktivieren mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich – es ist schwierig für Screenreader-Nutzer, Datenreihen und -spalten miteinander zu verknüpfen, und die Tabelle hat auch keine Art von Zusammenfassung, um klar zu machen, was sie zeigt. Können Sie einige Funktionen zu Ihrem HTML hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

## Beispiel

Die fertiggestellte Herausforderungsseite sollte in etwa so aussehen:

![Screenshot der fertigen Herausforderungsseite mit gutem Farbkontrast. Die Such-Eingabe hat Platzhaltertext und einen Absende-Button, der „go“ lautet, aber kein sichtbares Label.](assessment-site-finished.png)

<details>
<summary>Hier klicken für die Lösung</summary>

Sehen Sie sich unser [fertiges Beispielcode](https://github.com/mdn/learning-area/tree/main/accessibility/assessment-finished) an.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
