---
title: "Bewertung: Barrierefreiheit-Fehlerbehebung"
slug: Learn/Accessibility/Accessibility_troubleshooting
l10n:
  sourceCommit: 2641feaef1da7478c4f5d464aba813ca1009e2c9
---

{{LearnSidebar}}{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

In der Bewertung für dieses Modul präsentieren wir Ihnen eine einfache Website mit einer Reihe von Barrierefreiheitsproblemen, die Sie diagnostizieren und beheben müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        JavaScript, sowie ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Testen von Grundkenntnissen der Grundlagen der Barrierefreiheit.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie sich das [ZIP mit den Dateien, die das Beispiel umfassen](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip) herunterladen. Entpacken Sie die Inhalte in ein neues Verzeichnis irgendwo auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Bewertungsseite sollte folgendermaßen aussehen:

![Screenshot der fertigen Bewertungsseite mit gutem Farbkontrast. Das Sucheingabefeld hat Platzhaltertext und eine Senden-Schaltfläche, die "go" liest, aber keine sichtbare Beschriftung.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme mit der Anzeige des Ausgangszustands der Bewertung feststellen — dies liegt hauptsächlich an den Unterschieden im Markup, die wiederum einige Stilprobleme verursachen, da das CSS nicht richtig angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) melden.

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Natursite präsentiert, die einen "faktischen" Artikel über Bären anzeigt. Wie sie derzeit steht, weist sie eine Reihe von Barrierefreiheitsproblemen auf — Ihre Aufgabe ist es, die bestehende Website zu erkunden und zu beheben, so gut Sie können, indem Sie die unten gegebenen Fragen beantworten.

### Farben

Der Text ist aufgrund des aktuellen Farbschemas schwer zu lesen. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Ergebnisse des Tests berichten und es dann durch Änderung der zugewiesenen Farben beheben?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltext aktualisieren, um ihn für Screenreader-Benutzer einfacher navigierbar zu machen?
3. Der Navigationsmenüteil der Seite (eingewickelt in `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein korrektes HTML-Semantikelement eingefügt wird. In welches sollte es aktualisiert werden? Machen Sie das Update.

> [!NOTE]
> Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags auf ihre richtigen Äquivalente für die semantischen Überschriften stylen. Sobald Sie Absatzelemente hinzufügen, werden Sie feststellen, dass das Styling besser aussieht.

### Die Bilder

Die Bilder sind derzeit für Screenreader-Benutzer nicht zugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist für hörgeschädigte (taube) Menschen nicht zugänglich — können Sie eine Art zugängliche Alternative für diese Benutzer hinzufügen?
2. Der `<audio>`-Player ist für Benutzer älterer Browser, die HTML-Audio nicht unterstützen, nicht zugänglich. Wie können Sie ihnen dennoch den Zugriff auf das Audio ermöglichen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte eine Beschriftung vertragen, aber wir möchten kein sichtbares Textlabel hinzufügen, das das Design potenziell stören würde und von sehenden Benutzern nicht wirklich benötigt wird. Wie können Sie eine Beschriftung hinzufügen, die nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarformular haben sichtbare Textlabels, sind jedoch nicht eindeutig mit ihren Labels verknüpft—wie erreichen Sie dies? Beachten Sie, dass Sie auch einige der CSS-Regeln aktualisieren müssen.

### Die Steuerung "Kommentar anzeigen/ausblenden"

Die Schaltfläche "Kommentar anzeigen/ausblenden" ist derzeit nicht über die Tastatur zugänglich. Können Sie sie tastaturzugänglich machen, sowohl in Bezug auf das Fokussieren mit der Tabulatortaste als auch auf das Aktivieren mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist schwierig für Screenreader-Benutzer, Datenzeilen und -spalten miteinander zu verknüpfen, und die Tabelle hat auch keine Art Zusammenfassung, um klarzustellen, was sie zeigt. Können Sie Ihrer HTML einige Funktionen hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website zugänglicher machen würden?

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}
