---
title: "Bewertung: Barrierefreiheits-Troubleshooting"
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
      <td>Test des Basiswissens über Barrierefreiheitsgrundlagen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie sich die [ZIP-Datei herunterladen, die die Beispieldateien enthält](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip). Extrahieren Sie die Inhalte in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

Die fertige Bewertungswebsite sollte so aussehen:

![Screenshot der fertigen Bewertungswebsite mit gutem Farbkontrast. Das Suchfeld hat einen Platzhaltertext und einen Absende-Button, der mit 'Go' beschriftet ist, aber kein sichtbares Etikett.](assessment-site-finished.png)

Sie werden einige Unterschiede/Probleme in der Anzeige des Ausgangszustands der Bewertung bemerken — dies liegt hauptsächlich an den Unterschieden in der Markup-Struktur, die wiederum einige Styling-Probleme verursachen, da das CSS nicht richtig angewendet wird. Keine Sorge — Sie werden diese Probleme in den kommenden Abschnitten beheben!

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektbeschreibung

Für dieses Projekt erhalten Sie eine fiktive Natur-Website, die einen "faktischen" Artikel über Bären anzeigt. Wie es derzeit steht, hat sie eine Reihe von Barrierefreiheitsproblemen — Ihre Aufgabe ist es, die bestehende Website zu erkunden und sie bestmöglich zu reparieren, indem Sie die unten gestellten Fragen beantworten.

### Farbe

Der Text ist aufgrund des aktuellen Farbschemas schwer zu lesen. Können Sie einen Test des aktuellen Farbkontrasts (Text/Hintergrund) durchführen, die Ergebnisse des Tests berichten und ihn dann durch Ändern der zugewiesenen Farben beheben?

### Semantisches HTML

1. Der Inhalt ist immer noch nicht sehr zugänglich — berichten Sie, was passiert, wenn Sie versuchen, ihn mit einem Screenreader zu navigieren.
2. Können Sie den Artikeltag-Text aktualisieren, um ihn für Benutzer von Screenreadern leichter navigierbar zu machen?
3. Der Navigationsmenü-Teil der Seite (umgeben von `<div class="nav"></div>`) könnte zugänglicher gemacht werden, indem er in ein richtiges HTML-Semantikelement eingefügt wird. Zu welchem sollte er aktualisiert werden? Machen Sie das Update.

> [!NOTE]
> Sie müssen die CSS-Regel-Selektoren aktualisieren, die die Tags für die semantischen Überschriften auf ihre richtigen Äquivalente stilisieren. Sobald Sie Absatzelemente hinzufügen, wird das Styling besser aussehen.

### Die Bilder

Die Bilder sind derzeit für Benutzer von Screenreadern nicht zugänglich. Können Sie das beheben?

### Der Audioplayer

1. Der `<audio>`-Player ist für hörgeschädigte (taube) Menschen nicht zugänglich — können Sie eine Art zugängliche Alternative für diese Benutzer hinzufügen?
2. Der `<audio>`-Player ist nicht für Benutzer zugänglich, die ältere Browser verwenden, die HTML-Audio nicht unterstützen. Wie können Sie ihn ihnen dennoch zugänglich machen?

### Die Formulare

1. Das `<input>`-Element im Suchformular oben könnte mit einem Etikett versehen werden, aber wir wollen kein sichtbares Textelement hinzufügen, das das Design potenziell verderben könnte und von sehenden Benutzern nicht wirklich benötigt wird. Wie können Sie ein Etikett hinzufügen, das nur für Screenreader zugänglich ist?
2. Die beiden `<input>`-Elemente im Kommentarformular haben sichtbare Textelemente, sind aber nicht eindeutig mit ihren Etiketten verbunden — wie erreichen Sie das? Beachten Sie, dass Sie auch einige CSS-Regeln aktualisieren müssen.

### Die Steuerung zum Anzeigen/Verbergen von Kommentaren

Die Steuerung zum Anzeigen/Verbergen von Kommentaren ist derzeit nicht tastaturzugänglich. Können Sie sie tastaturzugänglich machen, sowohl in Bezug auf das Fokussieren mit der Tabulatortaste als auch auf das Aktivieren mit der Eingabetaste?

### Die Tabelle

Die Datentabelle ist derzeit nicht sehr zugänglich — es ist schwierig für Benutzer von Screenreadern, Datenzeilen und -spalten miteinander zu verknüpfen, und die Tabelle hat außerdem keine Art von Zusammenfassung, um klarzumachen, was sie zeigt. Können Sie Ihrer HTML einige Funktionen hinzufügen, um dieses Problem zu beheben?

### Weitere Überlegungen?

Können Sie zwei weitere Ideen für Verbesserungen auflisten, die die Website barrierefreier machen würden?

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}
