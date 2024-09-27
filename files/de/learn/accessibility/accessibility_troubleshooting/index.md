---
title: "Bewertung: Barrierefreiheits-Fehlerbehebung"
slug: Learn/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{LearnSidebar}}{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

In dieser Bewertung für das Modul präsentieren wir Ihnen eine einfache Site mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript sowie Kenntnisse der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegendes Wissen über die Grundlagen der Barrierefreiheit testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um diese Bewertung zu starten, sollten Sie die [ZIP-Datei mit den Beispieldateien](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip) herunterladen. Entpacken Sie den Inhalt in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Bewertungsseite sollte wie folgt aussehen:

![Screenshot der fertigen Bewertungsseite mit gutem Farbkontrast. Das Suchfeld hat Platzhaltertext und einen Absenden-Button mit der Aufschrift "go", aber kein sichtbares Label.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme bei der Anzeige des Anfangszustands der Bewertung bemerken – dies liegt hauptsächlich an den Unterschieden im Markup, die wiederum einige Stilprobleme verursachen, da das CSS nicht ordnungsgemäß angewendet wird. Keine Sorge – Sie werden diese Probleme in den folgenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Naturseite mit einem "faktischen" Artikel über Bären präsentiert. Derzeit weist diese eine Reihe von Barrierefreiheitsproblemen auf – Ihre Aufgabe besteht darin, die bestehende Seite zu erkunden und die Probleme bestmöglich zu beheben, indem Sie die unten gestellten Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer zu lesen. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Testergebnisse berichten und es dann durch Änderung der zugewiesenen Farben beheben?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich – berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext so aktualisieren, dass Screenreader-Nutzer ihn leichter navigieren können?
3. Der Navigationsmenü-Teil der Site (eingebunden in `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein geeignetes HTML-Semantikelement eingefügt wird. In welches soll er aktualisiert werden? Führen Sie das Update durch.

> [!NOTE]
> Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags formatieren, auf ihre richtigen Äquivalente für die semantischen Überschriften. Sobald Sie Absatzelemente hinzufügen, werden Sie bemerken, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Nutzer nicht zugänglich. Können Sie das beheben?

### Der Audio-Player

1. Der `<audio>`-Player ist für gehörlose Menschen nicht zugänglich – können Sie für diese Nutzer eine Art zugänglichere Alternative hinzufügen?
2. Der `<audio>`-Player ist für Nutzer älterer Browser, die HTML-Audio nicht unterstützen, nicht zugänglich. Wie können Sie ihnen dennoch den Zugriff auf das Audio ermöglichen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte ein Label verwenden, aber wir möchten kein sichtbares Textlabel hinzufügen, das das Design möglicherweise beeinträchtigt und von sehenden Nutzern nicht wirklich benötigt wird. Wie können Sie ein Label hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarfeld haben sichtbare Textlabels, sind aber nicht eindeutig mit ihren Labels verknüpft – wie erreichen Sie das? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Steuerung zum Anzeigen/Verbergen von Kommentaren

Die Schaltfläche zur Steuerung des Anzeigens/Verbergens von Kommentaren ist derzeit nicht per Tastatur zugänglich. Können Sie sie so gestalten, dass sie per Tastatur zugänglich ist, sowohl hinsichtlich der Fokussierung mit der Tabulatortaste als auch der Aktivierung mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich – es ist für Screenreader-Nutzer schwierig, Datenzeilen und -spalten miteinander zu verknüpfen, und die Tabelle hat auch keine Art Zusammenfassung, die klar macht, was sie zeigt. Können Sie einige Funktionen zu Ihrem HTML hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen zur Verbesserung auflisten, die die Website zugänglicher machen würden?

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}
