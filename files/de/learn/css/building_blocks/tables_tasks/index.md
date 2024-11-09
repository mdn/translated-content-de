---
title: "Testen Sie Ihr Können: Tabellen"
slug: Learn/CSS/Building_blocks/Tables_tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Das Ziel dieses Tests ist es zu prüfen, ob Sie verstehen, wie man [HTML-Tabellen in CSS gestaltet](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe

In der Lektion über das [Gestalten von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) haben wir eine Tabelle auf recht grelle Weise gestaltet. In dieser Aufgabe werden wir dieselbe Tabelle gestalten, jedoch unter Anwendung einiger guter Praktiken für das Tabellendesign, wie sie im externen Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben sind.

Unsere fertige Tabelle wird wie das untenstehende Bild aussehen. Es gibt verschiedene Möglichkeiten, dies zu erreichen, aber wir schlagen vor, dass Sie ähnliche Muster wie in der Anleitung verwenden, um Folgendes zu tun:

- Fügen Sie den Tabellenüberschriften und -daten ein Padding von `0.3em` hinzu und richten Sie diese oben in ihren Zellen aus.
- Richten Sie Überschriften und Daten für Spalten, die Zahlen enthalten, rechts aus.
- Richten Sie Überschriften und Daten für Spalten, die Text enthalten, links aus.
- Richten Sie die Überschrift des Tabellenfußes rechts aus.
- Richten Sie die Daten des Tabellenfußes links aus.
- Fügen Sie oben und unten eine 1px breite, solide Grenze mit der Hex-Farbe `#999` zur Tabelle hinzu.
- Fügen Sie eine 1px breite, solide obere Grenze mit der Hex-Farbe `#999` zum Fuß hinzu.
- Entfernen Sie den Standardabstand zwischen den Tabellenelementgrenzen, um das erwartete Ergebnis zu erzielen.
- Streifen Sie jede ungerade Zeile der Haupttabelle mit der Hex-Farbe `#eee`.

![Eine Tabelle mit gestreiften Zeilen.](mdn-table-bands.png)

**Bonusfrage:** Was können Sie tun, um das Tabellenlayout etwas vorhersehbarer zu machen? Überlegen Sie, wie Tabellenspalten standardmäßig dimensioniert werden und wie wir dieses Verhalten ändern können, um die Spalten entsprechend der Breite ihrer Überschriften zu dimensionieren.

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___table
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If the kids are united</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2" scope="row">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

```css hidden live-sample___table
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
  font-size: 80%;
}
```

```css live-sample___table
/* Add styles here */
```

{{EmbedLiveSample("table", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das Folgende ist ein Beispiel dafür, wie das Endergebnis erreicht werden könnte, indem ähnliche Techniken wie in der Lektion verwendet werden. Es gibt jedoch mehrere Möglichkeiten, die völlig korrekt wären, vielleicht etwas ausführlicher.

```css
table {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  border-collapse: collapse;
}

th,
td {
  vertical-align: top;
  padding: 0.3em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: #eee;
}

tfoot {
  border-top: 1px solid #999;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

Für die Bonusfrage können Sie das Tabellenlayout vorhersehbarer machen, indem Sie {{cssxref("table-layout")}} mit einem Wert von [`fixed`](/de/docs/Web/CSS/table-layout#fixed) und einer expliziten `width` hinzufügen:

```css
table {
  table-layout: fixed;
  width: 100%;
}
```

</details>

## Siehe auch

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
- [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables) auf alistapart.com (2017)
