---
title: "Herausforderung: Barrierefreiheitstroubleshooting"
short-title: "Herausforderung: A11y-Debugging"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In der Herausforderung für dieses Modul präsentieren wir Ihnen eine einfache Website mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie sich das [ZIP mit den Dateien, die das Beispiel umfassen](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip), herunterladen. Entpacken Sie die Inhalte in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

Die fertiggestellte Herausforderungssite sollte so aussehen:

![Screenshot der fertigen Herausforderungssite mit gutem Farbkontrast. Das Sucheingabefeld hat Platzhaltertext und einen Senden-Button mit der Beschriftung "go", jedoch kein sichtbares Label.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme mit der Darstellung des Startzustands der Herausforderung bemerken — dies liegt hauptsächlich an den Unterschieden im Markup, die wiederum einige Stylingprobleme verursachen, da das CSS nicht richtig angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektauftrag

Für dieses Projekt wird Ihnen eine fiktive Natur-Website präsentiert, die einen "faktischen" Artikel über Bären anzeigt. Derzeit weist sie eine Reihe von Barrierefreiheitsproblemen auf — Ihre Aufgabe ist es, die bestehende Website zu erkunden und sie so gut wie möglich zu verbessern, indem Sie die unten gestellten Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer lesbar. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Ergebnisse des Tests berichten und dann das Problem beheben, indem Sie die zugewiesenen Farben ändern?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr barrierefrei — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext aktualisieren, um es Screenreader-Nutzern leichter zu machen, ihn zu navigieren?
3. Der Navigationsmenüteil der Site (in `<div class="nav"></div>` eingerahmt) könnte zugänglicher gemacht werden, indem er in ein geeignetes HTML-Semantikelement umgewandelt wird. Zu welchem sollte er aktualisiert werden? Nehmen Sie das Update vor.

> [!NOTE]
> Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags für die semantischen Überschriften entsprechend gestalten. Sobald Sie Absatzelemente hinzufügen, wird das Styling besser aussehen.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Nutzer unzugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>` Player ist für hörbeeinträchtigte (taube) Personen nicht zugänglich — können Sie eine Art von zugänglicher Alternative für diese Nutzer hinzufügen?
2. Der `<audio>` Player ist für diejenigen, die ältere Browser verwenden, die HTML-Audio nicht unterstützen, nicht zugänglich. Wie können Sie ihnen dennoch den Zugang zum Audio ermöglichen?

### Die Formulare

1. Das `<input>` Element im Suchformular oben könnte mit einem Label versehen werden, aber wir möchten kein sichtbares Textlabel hinzufügen, das potenziell das Design verderben könnte und von sehenden Nutzern nicht wirklich benötigt wird. Wie können Sie ein Label hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>` Elemente im Kommentarformular haben sichtbare Textlabels, sind aber nicht eindeutig mit ihren Labels verknüpft — wie erreichen Sie das? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Steuerung zum Ein-/Ausblenden von Kommentaren

Der Button zur Steuerung des Ein-/Ausblendens von Kommentaren ist derzeit nicht mit der Tastatur zugänglich. Können Sie ihn so zugänglich machen, dass er sowohl mit der Tab-Taste fokussiert als auch mit der Eingabetaste aktiviert werden kann?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist schwer für Screenreader-Nutzer, Datenreihen und -spalten miteinander in Verbindung zu bringen, und die Tabelle hat auch keine Art von Zusammenfassung, die erklärt, was sie zeigt. Können Sie Ihrem HTML einige Funktionen hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
