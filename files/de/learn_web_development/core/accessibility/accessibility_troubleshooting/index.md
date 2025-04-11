---
title: "Herausforderung: Barrierefreiheit-Fehlerbehebung"
short-title: "Herausforderung: A11y Debugging"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In der Herausforderung dieses Moduls präsentieren wir Ihnen eine einfache Website mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie die [ZIP-Datei mit den enthaltenen Beispieldateien](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip) herunterladen. Entpacken Sie den Inhalt in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Beispielseite sollte so aussehen:

![Screenshot der fertigen Beispielseite mit gutem Farbkontrast. Das Suchfeld hat einen Platzhaltertext und einen Abschicken-Button mit der Aufschrift "go", aber kein sichtbares Etikett.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme bei der Darstellung des Ausgangszustands der Herausforderung bemerken — dies liegt hauptsächlich an den Unterschieden im Markup, die wiederum einige Stilprobleme verursachen, da das CSS nicht korrekt angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektbrief

Für dieses Projekt wird Ihnen eine fiktive Naturseite präsentiert, die einen "faktischen" Artikel über Bären zeigt. So wie es jetzt steht, hat es mehrere Barrierefreiheitsprobleme — Ihre Aufgabe ist es, die bestehende Seite zu erkunden und sie so gut wie möglich zu reparieren, indem Sie die unten gestellten Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer lesbar. Können Sie einen Test des derzeitigen Farbkontrasts (Text/Hintergrund) durchführen, die Testergebnisse berichten und es dann beheben, indem Sie die zugewiesenen Farben ändern?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext aktualisieren, um ihn für Screenreader-Nutzer leichter navigierbar zu machen?
3. Das Navigationselement der Seite (umgeben von `<div class="nav"></div>`) könnte zugänglicher gestaltet werden, indem es in ein geeignetes semantisches HTML-Element gesetzt wird. Zu welchem ​​Element sollte es aktualisiert werden? Machen Sie das Update.

> [!NOTE]
> Sie müssen die CSS-Regel-Selektoren, die die Tags gestalten, auf ihre richtigen Entsprechungen für die semantischen Überschriften aktualisieren. Sobald Sie Paragraph-Elemente hinzufügen, werden Sie sehen, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Nutzer unzugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist nicht zugänglich für Menschen mit Hörbehinderungen — können Sie eine Art zugängliche Alternative für diese Benutzer hinzufügen?
2. Der `<audio>`-Player ist für diejenigen, die ältere Browser verwenden, die HTML-Audio nicht unterstützen, nicht zugänglich. Wie können Sie ihnen dennoch den Zugang zum Audio ermöglichen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte ein Etikett gebrauchen, aber wir möchten kein sichtbares Textelement hinzufügen, das das Design möglicherweise beeinträchtigen würde und das von sehenden Benutzern nicht wirklich benötigt wird. Wie können Sie ein Etikett hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarformular haben sichtbare Textelemente, sind jedoch nicht eindeutig mit ihren Etiketten verknüpft — wie erreichen Sie dies? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Steuerung zum Ein-/Ausblenden von Kommentaren

Der Button zur Steuerung des Ein-/Ausblendens von Kommentaren ist derzeit nicht über die Tastatur zugänglich. Können Sie ihn tastaturzugänglich machen, sowohl in Bezug auf die Fokussierung über die Tabulator-Taste als auch auf die Aktivierung über die Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist für Screenreader-Nutzer schwierig, Datenzeilen und -spalten miteinander in Verbindung zu bringen, und die Tabelle hat auch keine Art von Zusammenfassung, die klar macht, was sie zeigt. Können Sie einige Funktionen zu Ihrem HTML hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
