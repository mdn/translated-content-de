---
title: "Herausforderung: Barrierefreiheits-Fehlerbehebung"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In der Herausforderung für dieses Modul präsentieren wir Ihnen eine einfache Seite mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie die [ZIP-Datei mit den Dateien, die das Beispiel ausmachen, herunterladen](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip). Entpacken Sie den Inhalt in ein neues Verzeichnis irgendwo auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Herausforderungsseite sollte so aussehen:

![Screenshot der fertigen Herausforderungsseite mit gutem Farbkontrast. Das Suchfeld hat Platzhaltertext und eine Absenden-Schaltfläche, die "go" anzeigt, aber kein sichtbares Label.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme mit der Anzeige des Ausgangszustands der Herausforderung sehen — dies liegt hauptsächlich an den Unterschieden im Markup, was wiederum einige Stilprobleme verursacht, da das CSS nicht richtig angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Naturseite präsentiert, die einen "faktischen" Artikel über Bären anzeigt. Wie es derzeit steht, hat es eine Reihe von Barrierefreiheitsproblemen — Ihre Aufgabe ist es, die bestehende Seite zu erkunden und diese so gut wie möglich zu beheben, indem Sie die unten gestellten Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer lesbar. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Ergebnisse des Tests berichten und es dann beheben, indem Sie die zugewiesenen Farben ändern?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext aktualisieren, um es den Benutzern von Screenreadern zu erleichtern, zu navigieren?
3. Der Navigationsmenüteil der Seite (eingewickelt in `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein angemessenes semantisches HTML-Element gesetzt wird. Welches sollte es aktualisiert werden? Machen Sie die Aktualisierung.

> [!NOTE]
> Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags zu ihren richtigen Äquivalenten für die semantischen Überschriften gestalten. Sobald Sie Absatzelemente hinzufügen, werden Sie bemerken, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Benutzer von Screenreadern nicht zugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist für hörgeschädigte (taube) Menschen nicht zugänglich — können Sie eine Art von zugänglicher Alternative für diese Benutzer hinzufügen?
2. Der `<audio>`-Player ist für diejenigen nicht zugänglich, die ältere Browser verwenden, die HTML-Audio nicht unterstützen. Wie können Sie es ihnen dennoch ermöglichen, auf das Audio zuzugreifen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte ein Label gebrauchen, aber wir möchten kein sichtbares Textlabel hinzufügen, das möglicherweise das Design beeinträchtigen würde und von sehenden Benutzern nicht wirklich benötigt wird. Wie können Sie ein Label hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarsformular haben sichtbare Textlabels, sind aber nicht eindeutig mit ihren Labels verbunden — wie erreichen Sie das? Beachten Sie, dass Sie auch einige der CSS-Regel aktualisieren müssen.

### Die Steuerung für Kommentare ein-/ausblenden

Die Taste für Kommentare ein-/ausblenden ist derzeit nicht tastaturzugänglich. Können Sie sie tastaturzugänglich machen, sowohl im Hinblick auf das Fokussieren mit der Tabulatortaste als auch auf das Aktivieren mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist schwierig für Screenreader-Benutzer, Datenzeilen und -spalten miteinander zu verknüpfen, und die Tabelle hat auch keine Art von Zusammenfassung, um deutlich zu machen, was sie zeigt. Können Sie einige Funktionen zu Ihrem HTML hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
