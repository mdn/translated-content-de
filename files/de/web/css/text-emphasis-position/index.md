---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-emphasis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wo Hervorhebungszeichen gezeichnet werden. Ähnlich wie bei Ruby-Text wird die Zeilenhöhe vergrößert, wenn nicht genügend Platz für Hervorhebungszeichen vorhanden ist.

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
  - : Zeichnet Zeichen über dem Text im horizontalen Schreibmodus.
- `under`
  - : Zeichnet Zeichen unter dem Text im horizontalen Schreibmodus.
- `right`
  - : Zeichnet Zeichen rechts vom Text im vertikalen Schreibmodus.
- `left`
  - : Zeichnet Zeichen links vom Text im vertikalen Schreibmodus.

## Beschreibung

Die bevorzugte Position von Hervorhebungszeichen hängt von der Sprache ab. In Japanisch zum Beispiel ist die bevorzugte Position `over right`. In Chinesisch hingegen ist die bevorzugte Position `under right`. Die informative Tabelle unten fasst die bevorzugten Hervorhebungszeichenpositionen für Chinesisch, Mongolisch und Japanisch zusammen:

<table>
  <caption>
    Bevorzugte Position von Hervorhebungszeichen und Ruby
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
          alt="Hervorhebungszeichen erscheinen über jedem hervorgehobenen Zeichen in horizontalem japanischen Text."
          src="text-emphasis-ja.png"
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt), die über einem Fragment eines japanischen Textes angewendet wird"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Hervorhebungszeichen erscheinen rechts von jedem hervorgehobenen Zeichen in vertikalem japanischem Text."
          src="text-emphasis-v.gif"
          title="Hervorhebung, die rechts von einem Fragment eines japanischen Textes angewendet wird"
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
          alt="Hervorhebungszeichen erscheinen unter jedem hervorgehobenen Zeichen in horizontalem vereinfachtem Chinesisch."
          src="text-emphasis-zh.gif"
          title="Hervorhebung (zur Verdeutlichung in Blau dargestellt), die unter einem Fragment eines chinesischen Textes angewendet wird"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die `text-emphasis-position` kann nicht mit der {{cssxref("text-emphasis")}} Kurzform-Eigenschaft gesetzt und daher auch nicht zurückgesetzt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby gegenüber Hervorhebungszeichen bevorzugen

Einige Editoren ziehen es vor, Hervorhebungszeichen zu verstecken, wenn sie mit Ruby kollidieren. In HTML kann dies mit der folgenden Stilregel erfolgen:

```css
ruby {
  text-emphasis: none;
}
```

### Hervorhebungszeichen gegenüber Ruby bevorzugen

Andere Editoren ziehen es vor, Ruby zu verstecken, wenn sie mit Hervorhebungszeichen kollidieren. In HTML kann dies mit dem folgenden Muster erfolgen:

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

- Die Langform-Eigenschaften {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} und die entsprechende Kurzform-Eigenschaft {{cssxref("text-emphasis")}}.
