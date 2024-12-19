---
title: "Testen Sie Ihre Fähigkeiten: Tabellen"
slug: Learn_web_development/Core/Styling_basics/Tables_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [HTML-Tabellen mit CSS gestaltet](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

> [!NOTE]
> Klicken Sie auf **"Play"** in den unten stehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe

In der Lektion über [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables) haben wir eine Tabelle auf ziemlich grelle Weise gestaltet. In dieser Aufgabe werden wir dieselbe Tabelle gestalten, aber unter Verwendung einiger guter Praktiken für Tabellendesign, wie im externen Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

Unsere fertige Tabelle wird wie das Bild unten aussehen. Es gibt mehrere Möglichkeiten, dies zu erreichen, aber wir schlagen vor, dass Sie ähnliche Muster wie im Tutorial verwenden, um die folgenden Dinge zu tun:

- Fügen Sie den Tabellenüberschriften und Daten einen Abstand von `0.3em` hinzu und richten Sie sie oben in ihren Zellen aus.
- Richten Sie die Überschriften und Daten für Spalten, die Zahlen enthalten, rechts aus.
- Richten Sie die Überschriften und Daten für Spalten, die Text enthalten, links aus.
- Richten Sie die Überschrift des Tabellenfußes rechts aus.
- Richten Sie die Daten des Tabellenfußes links aus.
- Fügen Sie der Tabelle eine obere und untere feste Grenze von 1px mit der Hex-Farbe `#999` hinzu.
- Fügen Sie dem Fuß eine obere feste Grenze von 1px mit der Hex-Farbe `#999` hinzu.
- Entfernen Sie den Standardabstand zwischen den Tabellenrand-Elementen, um das erwartete Ergebnis zu erzielen.
- Streifen Sie jede ungerade Zeile der Haupttabelle mit der Hex-Farbe `#eee`.

![Eine Tabelle mit gestreiften Zeilen.](mdn-table-bands.png)

**Bonusfrage:** Was können Sie tun, um das Verhalten der Tabellenlayouts etwas vorhersehbarer zu gestalten? Denken Sie daran, wie Tabellenspalten standardmäßig in der Größe angepasst werden und wie wir dieses Verhalten ändern können, um die Spalten entsprechend der Breite ihrer Überschriften anzupassen.

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

Das Folgende ist ein Beispiel dafür, wie das Endergebnis erreicht werden könnte, unter Verwendung ähnlicher Techniken wie in der Lektion. Allerdings gibt es mehrere Möglichkeiten, die korrekt wären, vielleicht etwas ausführlicher.

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

Bei der Bonusfrage können Sie das Tabellen-Layout vorhersehbarer gestalten, indem Sie {{cssxref("table-layout")}} mit einem Wert von [`fixed`](/de/docs/Web/CSS/table-layout#fixed) und einer expliziten `width` hinzufügen:

```css
table {
  table-layout: fixed;
  width: 100%;
}
```

</details>

## Siehe auch

- [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
- [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables) auf alistapart.com (2017)
