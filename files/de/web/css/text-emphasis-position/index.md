---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie bei Rubyschrift wird die Zeilenhöhe erhöht, wenn nicht genug Platz für Hervorhebungszeichen vorhanden ist.

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

## Syntax

```css
/* Initial value */
text-emphasis-position: over right;

/* Keywords value */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Global values */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Werte

- `over`
  - : Zeichnet Markierungen über dem Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Markierungen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Markierungen rechts des Textes im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Markierungen links des Textes im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. Im Japanischen ist die bevorzugte Position beispielsweise `over right`. Im Chinesischen hingegen ist die bevorzugte Position `under right`. Die nachfolgende informative Tabelle fasst die bevorzugten Positionen von Hervorhebungszeichen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position von Hervorhebungszeichen und Rubyschrift
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
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen im horizontalen japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (in Blau zur Verdeutlichung) oberhalb eines japanischen Textfragments angewendet"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen im vertikalen japanischen Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung rechts von einem japanischen Textfragment angewendet"
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
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen im horizontalen vereinfachten chinesischen Text."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (in Blau zur Verdeutlichung) unterhalb eines chinesischen Textfragments angewendet"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht gesetzt und daher auch nicht zurückgesetzt werden, indem die {{cssxref("text-emphasis")}} Kurzform-Eigenschaft verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bevorzugung von Rubyschrift über Hervorhebungszeichen

Einige Editoren ziehen es vor, Hervorhebungszeichen zu verbergen, wenn sie mit Rubyschrift kollidieren. In HTML kann dies mit der folgenden Stilregel erreicht werden:

```css
ruby {
  text-emphasis: none;
}
```

### Bevorzugung von Hervorhebungszeichen über Rubyschrift

Andere Editoren ziehen es vor, Rubyschrift zu verbergen, wenn sie mit Hervorhebungszeichen kollidieren. In HTML kann dies mit folgendem Muster erreicht werden:

```css
em {
  text-emphasis: dot; /* Set text-emphasis for <em> elements */
}

em rt {
  display: none; /* Hide ruby inside <em> elements */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Langform-Eigenschaften {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, und die entsprechende Kurzform-Eigenschaft {{cssxref("text-emphasis")}}.
