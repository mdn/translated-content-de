---
title: CSS-Deskriptor `src` für At-Regeln
short-title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Der **`src`**-Deskriptor von [CSS](/de/docs/Web/CSS) für die At-Regel {{cssxref("@font-face")}} gibt die Ressource an, die die Schriftdaten enthält. Er ist erforderlich, damit die `@font-face`-Regel gültig ist.

## Syntax

```css
/* <url> values */
src: url("https://example.com/path/to/font.woff"); /* Absolute URL */
src: url("path/to/font.woff"); /* Relative URL */
src: url("path/to/svgFont.svg#example"); /* Fragment identifying font */

/* <font-face-name> values */
src: local(font); /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font"); /* Quoted name */
src: local("some font"); /* Quoted name containing a space */

/* <tech(<font-tech>)> values */
src: url("path/to/fontCOLRv1.otf") tech(color-COLRv1);
src: url("path/to/fontCOLR-svg.otf") tech(color-SVG);

/* <format(<font-format>)> values */
src: url("path/to/font.woff") format("woff");
src: url("path/to/font.woff2") format("woff2");

/* Multiple resources */
src:
  url("path/to/font.woff") format("woff"),
  url("path/to/font.woff2") format("woff2");

/* Multiple resources with font format and technologies */
src:
  url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1),
  url("trickster-outline.woff2") format("woff2");
```

### Werte

- `url()`
  - : Gibt eine externe Referenz an, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht. Darauf können optionale Hinweise mit den Komponentenwerten `format()` und `tech()` folgen, die das Format und die Schrifttechnologie der referenzierten Ressource angeben. Die `format()`- und `tech()`-Komponenten enthalten eine durch Kommas getrennte Liste von Zeichenfolgen für bekannte [Schriftformate](#schriftformate) und -technologien. Wenn ein User Agent die Schrifttechnologie oder die Formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Werden keine Format- oder Technologiehinweise angegeben, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Angabe nach dem `url()`-Wert, die dem User Agent einen Hinweis auf das Schriftformat gibt.
    Wird der Wert nicht unterstützt oder ist er ungültig, lädt der Browser die Ressource möglicherweise nicht herunter und spart dadurch Bandbreite.
    Wird `format()` weggelassen, lädt der Browser die Ressource herunter und erkennt anschließend das Format.
    Wenn Sie aus Gründen der Abwärtskompatibilität eine Schriftquelle einbinden, deren Format nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) steht, setzen Sie die Formatzeichenfolge in Anführungszeichen.
    Mögliche Werte werden unten im Abschnitt [Schriftformate](#schriftformate) beschrieben.
- `tech()`
  - : Eine optionale Angabe nach dem `url()`-Wert, die dem User Agent einen Hinweis auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der unter [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`
  - : Gibt den Namen der Schrift an, sofern diese auf dem Gerät der nutzenden Person verfügbar ist.
    Der Schriftname kann optional in Anführungszeichen gesetzt werden.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den PostScript-Namen oder den vollständigen Schriftnamen in der Namenstabelle lokal verfügbarer Schriften abzugleichen. Welcher Namenstyp verwendet wird, hängt von der Plattform und der Schrift ab. Geben Sie daher beide Namen an, um einen korrekten Abgleich auf verschiedenen Plattformen sicherzustellen. Plattformspezifische Ersetzungen für einen bestimmten Schriftnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät der nutzenden Person vorinstalliert oder von ihr selbst installiert worden sein.
    >
    > Während die vorinstallierten Schriften bei allen Nutzenden eines bestimmten Geräts wahrscheinlich gleich sind, gilt das nicht für selbst installierte Schriften. Indem eine Website die selbst installierten Schriften ermittelt, kann sie daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} des Geräts erstellen und Nutzende damit über verschiedene Websites hinweg verfolgen.
    >
    > Um dies zu verhindern, können User Agents selbst installierte Schriften bei der Verwendung von `local()` ignorieren.

- `<font-face-name>`
  - : Gibt über den Komponentenwert `local()` den vollständigen Namen oder den PostScript-Namen eines lokal installierten Schriftschnitts an. Dieser Name identifiziert einen einzelnen Schriftschnitt innerhalb einer größeren Schriftfamilie eindeutig.
    Der Name kann optional in Anführungszeichen gesetzt werden. Beim Namen des Schriftschnitts [wird nicht zwischen Groß- und Kleinschreibung unterschieden](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Mit der [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) können Sie auf lokal installierte Schriftdaten zugreifen. Dazu gehören übergeordnete Angaben wie Namen, Stile und Schriftfamilien sowie die Rohdaten der zugrunde liegenden Schriftdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste externer Referenzen oder Namen lokal installierter Schriftschnitte. Jede Ressource wird mit `url()` oder `local()` angegeben.
Wenn eine Schrift benötigt wird, durchläuft der {{Glossary("user_agent", "User Agent")}} die aufgeführten Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder nicht gefundene lokale Schriftschnitte werden ignoriert, und der User Agent lädt die nächste Schrift in der Liste.

Wenn mehrere `src`-Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die eine Ressource laden kann.
Wenn der letzte `src`-Deskriptor eine Ressource laden kann und keine `local()`-Schrift enthält, lädt der Browser möglicherweise externe Schriftdateien herunter und ignoriert die lokale Version, selbst wenn sie auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Eintrag ungültig ist.
> Dies kann die Gestaltung von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein. In diesem Fall wird sie relativ zum Speicherort des Stylesheets aufgelöst, das die `@font-face`-Regel enthält. Bei SVG-Schriften verweist die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdefinitionen. Wird die Elementreferenz weggelassen, gilt dies als Referenz auf die erste definierte Schrift. Ebenso wird bei Schrift-Containerformaten, die mehr als eine Schrift enthalten können, für eine bestimmte `@font-face`-Regel nur eine der Schriften geladen. Fragmentbezeichner geben an, welche Schrift geladen werden soll. Wenn für ein Containerformat kein Fragmentbezeichnerschema definiert ist, wird ein bei 1 beginnendes Indexschema verwendet (z. B. „font-collection#1“ für die erste Schrift, „font-collection#2“ für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, gibt ein Fragmentbezeichner an, welche der enthaltenen Schriften verwendet werden soll:

```css
@font-face {
  font-family: "WhichFont";
  /* WhichFont is the PostScript name of a font in the font file */
  src: url("collection.otc#WhichFont");
}
@font-face {
  font-family: "WhichFont-svg";
  /* WhichFont is the element id of a font in the SVG Font file */
  src: url("fonts.svg#WhichFont");
}
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schlüsselwörter für Schriftformate und die entsprechenden Formate.
Um innerhalb von CSS zu prüfen, ob ein Browser ein Schriftformat unterstützt, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Schriftformat       | Übliche Dateiendungen |
| ------------------- | ------------------- | --------------------- |
| `collection`        | OpenType Collection | .otc, .ttc            |
| `embedded-opentype` | Embedded OpenType   | .eot                  |
| `opentype`          | OpenType            | .otf, .ttf            |
| `svg`               | SVG Font (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType            | .ttf                  |
| `woff`              | WOFF 1.0            | .woff                 |
| `woff2`             | WOFF 2.0            | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), während `tech(color-SVG)` für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) steht (auch OpenType-SVG-Farbschriften genannt). Dabei handelt es sich um völlig unterschiedliche Dinge.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bézierkurven (in der CFF/CFF2-Tabelle) oder quadratische Bézierkurven (in der Glyphentabelle) verwendet.

Ältere, nicht normalisierte `format()`-Werte haben die folgende gleichwertige Syntax. Aus Gründen der Abwärtskompatibilität werden sie als Zeichenfolgen in Anführungszeichen angegeben:

| Alte Syntax                     | Gleichwertige Syntax                |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()`-Deskriptor und die entsprechenden Schrifttechnologien.
Um innerhalb von CSS zu prüfen, ob ein Browser eine Schrifttechnologie unterstützt, verwenden Sie die At-Regel {{cssxref("@supports", "@supports")}}.

| Schlüsselwort       | Beschreibung                                                                                                  |
| :------------------ | :------------------------------------------------------------------------------------------------------------ |
| `color-cbdt`        | Tabellen mit Farbbitmapdaten                                                                                  |
| `color-colrv0`      | Mehrfarbige Glyphen über eine COLR-Tabelle der Version 0                                                      |
| `color-colrv1`      | Mehrfarbige Glyphen über eine COLR-Tabelle der Version 1                                                      |
| `color-sbix`        | Tabellen mit Standard-Bitmapgrafiken                                                                          |
| `color-svg`         | Mehrfarbige SVG-Tabellen                                                                                      |
| `features-aat`      | TrueType-Tabellen `morx` und `kerx`                                                                           |
| `features-graphite` | Graphite-Funktionen, nämlich die Tabellen `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`                           |
| `features-opentype` | OpenType-Tabellen `GSUB` und `GPOS`                                                                           |
| `incremental`       | Inkrementelles Laden von Schriften                                                                            |
| `palettes`          | Schriftpaletten, bei denen mit `font-palette` eine von mehreren Farbpaletten der Schrift ausgewählt wird      |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung von Schriftachsen, Gewicht, Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie Sie zwei Schriftschnitte derselben Schriftfamilie definieren. Die `font-family` heißt `MainText`. Der erste Schriftschnitt ist regulär, der zweite ist eine fette Variante derselben Schriftfamilie.

```css
/* Defining a regular font face */
@font-face {
  font-family: "MainText";
  src:
    local("Futura-Medium"),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.woff2") format("woff2");
}

/* Defining a different bold font face for the same family */
@font-face {
  font-family: "MainText";
  src:
    local("Gill Sans Bold") /* full font name */,
    local("GillSans-Bold") /* postscript name */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.woff2") format("woff2"),
    url("GillSansBold.svg#MyFontBold"); /* Referencing an SVG font fragment by id */
  font-weight: bold;
}

/* Using the regular font face */
p {
  font-family: "MainText", sans-serif;
}

/* Font-family is inherited, but bold fonts are used */
p.bold {
  font-weight: bold;
}
```

### Schriftressourcen mit tech()- und format()-Werten angeben

Das folgende Beispiel zeigt, wie Sie mit den Werten `tech()` und `format()` Schriftressourcen angeben.
Eine Schrift mit der Technologie `color-colrv1` und dem Format `opentype` wird mithilfe von `tech()` und `format()` angegeben.
Wenn der User Agent sie unterstützt, wird die Farbschrift aktiviert. Als Fallback wird eine `opentype`-Schrift ohne Farben bereitgestellt.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1),
    url("trickster-outline.woff2") format("woff2");
}

/* Using the font face */
p {
  font-family: "Trickster", fantasy;
}
```

### Fallbacks für ältere Browser angeben

Browser sollten eine `@font-face`-Regel mit einem einzigen `src`-Deskriptor verwenden, der die möglichen Schriftquellen auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Einträge in der Reihenfolge Ihrer bevorzugten Verwendung stehen.

Im Allgemeinen bedeutet das, dass lokale Dateien vor entfernten Dateien stehen sollten und Ressourcen mit `format()`- oder `tech()`-Einschränkungen vor Ressourcen ohne solche Einschränkungen. Andernfalls würde immer die weniger eingeschränkte Version ausgewählt.
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental),
    url("MgOpenModernaBold.woff2") format("woff2");
}
```

Ein Browser, der `tech()` im obigen Beispiel nicht unterstützt, sollte den ersten Eintrag ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser [ignorieren ungültige Einträge](#browser-kompatibilität) noch nicht. Stattdessen verwerfen sie den gesamten `src`-Deskriptor, wenn ein Wert ungültig ist.
Wenn Sie solche Browser unterstützen möchten, können Sie mehrere `src`-Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge ausprobiert werden. Daher steht unser regulärer Deskriptor mit allen Einträgen am Ende.

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.woff2") format("woff2");
  src: url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental),
    url("MgOpenModernaBold.woff2") format("woff2");
}
```

### Prüfen, ob der User Agent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie Sie mit der Regel {{cssxref("@supports")}} prüfen, ob der User Agent eine Schrifttechnologie unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der User Agent die Technologie `color-COLRv1` unterstützt.

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1);
  }

  .colored_text {
    font-family: "Trickster", fantasy;
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
