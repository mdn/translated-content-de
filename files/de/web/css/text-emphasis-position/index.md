---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Wie bei Ruby-Text wird die Zeilenhöhe erhöht, wenn nicht genug Platz für Hervorhebungszeichen vorhanden ist.

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

## Syntax

```css
/* Initialwert */
text-emphasis-position: over right;

/* Schlüsselwortwerte */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Globale Werte */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Werte

- `over`
  - : Zeichnet Zeichen über dem Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Zeichen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Zeichen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Zeichen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist beispielsweise die bevorzugte Position `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die folgende informative Tabelle fasst die bevorzugten Hervorhebungszeichenpositionen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Hervorhebungszeichen- und Ruby-Position
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Sprache</th>
      <th colspan="2" scope="col">Bevorzugte Position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontal</th>
      <th>Vertikal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanisch</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="Hervorhebungszeichen erscheinen über jedem betonten Zeichen im horizontalen japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Verdeutlichung in blau angezeigt) über einem Fragment japanischen Textes angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem betonten Zeichen im vertikalen japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem Fragment japanischen Textes angewendet"
        />
      </td>
    </tr>
    <tr>
      <td>Koreanisch</td>
    </tr>
    <tr>
      <td>Mongolisch</td>
    </tr>
    <tr>
      <td>Chinesisch</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="Hervorhebungszeichen erscheinen unter jedem betonten Zeichen im horizontalen vereinfachten chinesischen Text."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Verdeutlichung in blau angezeigt) unter einem Fragment chinesischen Textes angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht eingestellt und daher auch nicht zurückgesetzt werden, indem die {{cssxref("text-emphasis")}} Kurzform-Eigenschaft verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bevorzugung von Ruby über Hervorhebungszeichen

Einige Editoren ziehen es vor, Hervorhebungszeichen zu verbergen, wenn sie mit Ruby kollidieren. In HTML kann dies mit der folgenden Stilregel erreicht werden:

```css
ruby {
  text-emphasis: none;
}
```

### Bevorzugung von Hervorhebungszeichen über Ruby

Andere Editoren ziehen es vor, Ruby zu verbergen, wenn sie mit Hervorhebungszeichen kollidieren. In HTML kann dies mit dem folgenden Muster erreicht werden:

```css
em {
  text-emphasis: dot; /* Text-Empathie für <em>-Elemente festlegen */
}

em rt {
  display: none; /* Ruby innerhalb von <em>-Elementen verbergen */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Langform-Eigenschaften {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, und die entsprechende Kurzform-Eigenschaft {{cssxref("text-emphasis")}}.
