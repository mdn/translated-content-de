---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel gibt die Ressource mit den Font-Daten an. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

## Syntax

```css
/* <url> values */
src: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */
src: url(path/to/font.woff); /* Relative URL */
src: url("path/to/font.woff"); /* Quoted URL */
src: url(path/to/svgFont.svg#example); /* Fragment identifying font */

/* <font-face-name> values */
src: local(font); /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font"); /* Quoted name */
src: local("some font"); /* Quoted name containing a space */

/* <tech(<font-tech>)> values */
src: url(path/to/fontCOLRv1.otf) tech(color-COLRv1);
src: url(path/to/fontCOLR-svg.otf) tech(color-SVG);

/* <format(<font-format>)> values */
src: url(path/to/font.woff) format("woff");
src: url(path/to/font.otf) format("opentype");

/* Multiple resources */
src:
  url(path/to/font.woff) format("woff"),
  url(path/to/font.otf) format("opentype");

/* Multiple resources with font format and technologies */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### Werte

- `url()`

  - : Gibt einen externen Verweis an, bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}}, gefolgt von optionalen Hinweisen, die die `format()` und `tech()` Komponentenwerte verwenden. Diese geben das Format und die Schrifttechnologie der durch die URL referenzierten Ressource an. Die `format()` und `tech()` Komponenten sind eine kommagetrennte Liste von Zeichenfolgen bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein User-Agent die Schrifttechnologie oder -formate nicht unterstützt, wird die Schriftressource nicht heruntergeladen. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den User-Agent über das Schriftformat gibt.
    Wenn der Wert nicht unterstützt wird oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was Bandbreite sparen kann.
    Wenn er weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn Sie eine Schriftquelle für die Abwärtskompatibilität enthalten, die nicht in der Liste der [definierten Stichwörter](#formale_syntax) enthalten ist, schließen Sie die Formatzeichenfolge in Anführungszeichen ein.
    Mögliche Werte sind in der unten stehenden Sektion [Schriftformate](#schriftformate) beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den User-Agent auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der in [Schrifttechnologien](#schrifttechnologien) beschriebenen Stichwörter sein.
- `local(<font-face-name>)`

  - : Gibt den Schriftartnamen an, wenn die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Die Schriftartnamen in Anführungszeichen einzuschließen, ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namensdatenbank der lokal verfügbaren Schriften zuzuordnen. Welcher Typ von Namen verwendet wird, variiert je nach Plattform und Schriftart. Sie sollten daher beide dieser Namen einbeziehen, um eine korrekte Zuordnung auf allen Plattformen sicherzustellen. Plattformersetzungen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriftarten wurden möglicherweise auf dem Gerät des Benutzers vorinstalliert oder aktiv vom Benutzer installiert.
    >
    > Während der Satz vorinstallierter Schriftarten wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist der Satz vom Benutzer installierter Schriftarten dies nicht. Durch das Erkennen des Satzes vom Benutzer installierter Schriftarten kann eine Website daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} des Geräts erstellen, was der Website hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents Benutzer-Schriftarten ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen oder Postscript-Namen einer lokal installierten Schriftart mit dem `local()` Komponentenwert an, der eine einzelne Schriftart innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftartname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dies umfasst höherwertige Details wie Namen, Stile und Familien sowie die rohen Bytes der zugrundeliegenden Schriftsatzdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste von externen Referenzen oder lokal installierten Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schriftart benötigt wird, iteriert der {{Glossary("user_agent", "User-Agent")}} über den Satz der aufgelisteten Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriftarten mit ungültigen Daten oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert, und der User-Agent lädt die nächste Schriftart in der Liste.

Wenn mehrere `src` Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schriftart enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, auch wenn auf dem Gerät eine verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig ansieht, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein einzelnes Element ungültig ist.
> Dies kann das Design von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in diesem Fall wird sie relativ zum Speicherort des Stylesheets gelöst, das die `@font-face` Regel enthält. Im Fall von SVG-Schriften weist die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdefinitionen. Wenn der Elementverweis weggelassen wird, wird ein Verweis auf die erste definierte Schriftart angenommen. Ähnlich laden Schriftcontainerformate, die mehr als eine Schriftart enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragmentkennungen werden verwendet, um anzugeben, welche Schriftart geladen werden soll. Wenn ein Containerformat kein definiertes Fragmentkennungsschema hat, wird ein auf 1 basierendes Nummerierungsschema (z.B. "font-collection#1" für die erste Schriftart, "font-collection#2" für die zweite Schriftart usw.) verwendet.

Wenn die Schriftdatei ein Container für mehrere Schriftarten ist, wird eine Fragmentkennung eingefügt, um die Unter-Schriftart anzugeben, die verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schriftstichwörter und die entsprechenden Schriftformate.
Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Stichwort           | Schriftformat          | Übliche Erweiterungen |
| ------------------- | ---------------------- | --------------------- |
| `collection`        | OpenType Collection    | .otc, .ttc            |
| `embedded-opentype` | Embedded OpenType      | .eot                  |
| `opentype`          | OpenType               | .otf, .ttf            |
| `svg`               | SVG-Schrift (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType               | .ttf                  |
| `woff`              | WOFF 1.0               | .woff                 |
| `woff2`             | WOFF 2.0               | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG fonts](/de/docs/Web/SVG/Tutorial/SVG_fonts), und `tech(color-SVG)` steht für [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG Farbenschriften genannt), die völlig verschieden sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2 Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphe Tabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgende gleichwertige Syntax; diese wird zu Kompatibilitätsgründen als Zeichenkette in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Gleichwertige Syntax                |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und die entsprechenden Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Stichwort           | Beschreibung                                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbbitmap-Datenbanken                                                                                       |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR Version 0 Tabelle                                                              |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR Version 1 Tabelle                                                              |
| `color-sbix`        | Standard-Bitmap-Grafikbanken                                                                                 |
| `color-svg`         | SVG mehrfarbige Tabellen                                                                                     |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                          |
| `features-graphite` | Graphit-Merkmale, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                 |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                          |
| `incremental`       | Inkrementelles Schriftartenladen                                                                             |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen           |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, -dicke, Glyphen, etc. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
<url> [ format( <font-format> ) ]? [ tech( <font-tech># ) ]?  |
local( <family-name> )

<font-format> = [ <string> | collection | embedded-opentype | opentype | svg | truetype | woff | woff2 ]

<font-tech> = [ <font-features-tech> | <color-font-tech> | variations | palettes | incremental-patch | incremental-range | incremental-auto ]

<font-features-tech> = [ features-opentype | features-aat | features-graphite ]

<color-font-tech> = [ color-COLRv0 | color-COLRv1 | color-SVG | color-sbix | color-CBDT ]
```

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie man zwei Schriftartgesichter mit derselben Schriftfamilie definiert. Die `font-family` ist `MainText` genannt. Das erste Schriftartgesicht hat eine normale Schrift, und das zweite eine fette Version derselben Schriftfamilie.

```css
/* Defining a regular font face */
@font-face {
  font-family: MainText;
  src:
    local(Futura-Medium),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* Defining a different bold font face for the same family */
@font-face {
  font-family: MainText;
  src:
    local(Gill Sans Bold) /* full font name */,
    local(GillSans-Bold) /* postscript name */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.otf") format("opentype"),
    url("GillSansBold.svg#MyFontBold"); /* Referencing an SVG font fragment by id */
  font-weight: bold;
}

/* Using the regular font face */
p {
  font-family: MainText;
}

/* Font-family is inherited, but bold fonts are used */
p.bold {
  font-weight: bold;
}
```

### Schriftressourcen mit tech() und format() Werten angeben

Das folgende Beispiel zeigt, wie man die `tech()` und `format()` Werte verwendet, um Schriftressourcen anzugeben.
Eine Schrift mit `color-colrv1` Technologie und `opentype` Format wird mit den `tech()` und `format()` Werten spezifiziert.
Eine Farbenschrift wird aktiviert, wenn der User-Agent sie unterstützt, und ein `opentype` ohne Farbe wird als Fallback bereitgestellt.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* Using the font face */
p {
  font-family: "Trickster";
}
```

### Fallbacks für ältere Browser angeben

Browser sollten eine `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Einträge in der Reihenfolge Ihrer Präferenz für ihre Verwendung angegeben werden.

Das bedeutet im Allgemeinen, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die solche Einschränkungen nicht haben (ansonsten würde immer die weniger eingeschränkte Version ausgewählt).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` oben nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren [ungültige Elemente](#browser-kompatibilität) noch nicht und scheitern stattdessen an der gesamten `src` Deskriptor, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass wir am Ende unseren normalen Deskriptor mit allen Elementen haben.

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.otf") format(opentype);
  src: url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

### Überprüfung, ob der User-Agent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie man überprüft, ob der User-Agent eine Schrifttechnologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der CSS -Block innerhalb `@supports` wird angewendet, wenn der User-Agent die `color-COLRv1` Technologie unterstützt.

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1);
  }

  .colored_text {
    font-family: "Trickster";
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face", "@font-face")}}
- {{cssxref("@supports", "@supports")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
