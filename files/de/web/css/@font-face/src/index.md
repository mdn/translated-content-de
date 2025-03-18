---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel gibt die Ressource an, die Font-Daten enthält. Es ist erforderlich, damit die `@font-face`-Regel gültig ist.

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

  - : Spezifiziert eine externe Referenz, bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}}, gefolgt von optionalen Hinweisen unter Verwendung der `format()` und `tech()` Komponentenwerte, die das Format und die Font-Technologie der durch die URL referenzierten Ressource spezifizieren. Die `format()` und `tech()` Komponenten sind eine durch Kommas getrennte Liste von Strings bekannter [Fontformate](#fontformate) und Technologien. Wenn ein Benutzeragent die Font-Technologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Font-Ressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Benutzeragent einen Hinweis auf das Fontformat gibt.
    Wird der Wert nicht unterstützt oder ist ungültig, kann der Browser die Ressource nicht herunterladen und somit Bandbreite sparen.
    Wenn weggelassen, wird die Ressource heruntergeladen und dann das Format erkannt.
    Wenn eine Font-Quelle für die Rückwärtskompatibilität enthalten ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, umschließen Sie den Formatstring in Anführungszeichen.
    Mögliche Werte werden im Abschnitt [Fontformate](#fontformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Benutzeragent einen Hinweis auf die Font-Technologie gibt.
    Der Wert für `tech()` kann eines der im Abschnitt [Fonttechnologien](#fonttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`

  - : Gibt an, dass der Font-Name verwendet werden soll, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Font-Namens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Font-Namen in der Name-Tabelle lokal verfügbarer Schriften zuzuordnen. Welcher Name verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide dieser Namen angeben, um eine korrekte Zuordnung über Plattformen hinweg sicherzustellen. Plattformsubstitutionen für einen gegebenen Font-Namen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Fonts können auf dem Gerät des Benutzers vorinstalliert worden sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriftarten vermutlich bei allen Benutzern eines bestimmten Geräts gleich ist, ist die Menge der vom Benutzer installierten Schriftarten nicht gleich. Durch das Ermitteln der vom Benutzer installierten Schriftarten kann eine Website somit einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, was die Verfolgung der Benutzer im Web erleichtert.
    >
    > Um dies zu verhindern, können Benutzeragenten bei der Verwendung von `local()` Benutzerinstallierte Fonts ignorieren.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen einer lokal installierten Schriftart mit dem `local()` Komponentenwert an, der eine einzelne Schrift innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Font-Daten des Benutzers zuzugreifen - dies schließt höhere Details wie Namen, Stile und Familien ebenso ein wie die Rohdaten der zugrunde liegenden Font-Dateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste externer Referenzen oder lokal installierter Font-Namen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schriftart benötigt wird, iteriert der {{Glossary("user_agent", "Benutzeragent")}} über die Liste der angegebenen Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriften, die ungültige Daten enthalten, oder lokale Font-Namen, die nicht gefunden werden, werden ignoriert und der Benutzeragent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die zuletzt erklärte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schrift enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein einzelner Punkt ungültig ist, selbst wenn nur ein Punkt ungültig ist.
> Dies kann das Design von Fallback-Lösungen beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in diesem Fall wird sie relativ zur Position des das `@font-face` enthaltenden Stylesheets aufgelöst. Im Fall von SVG-Schriften zeigt die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdefinitionen. Wenn die Elementreferenz weggelassen wird, wird auf die erste definierte Schrift verwiesen. Ebenso laden Font-Containerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face`-Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn ein Containerformat kein definiertes Fragment-Identifier-Schema hat, wird ein 1-basiertes Indexierungsschema verwendet (z.B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragment-Identifier enthalten, um die zu verwendende Unterschrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Fontformate

Die folgende Tabelle zeigt die gültigen Font-Schlüsselwörter und deren entsprechende Fontformate.
Um zu überprüfen, ob ein Fontformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Keyword             | Fontformat             | Übliche Erweiterungen |
| ------------------- | ---------------------- | --------------------- |
| `collection`        | OpenType-Kollektion    | .otc, .ttc            |
| `embedded-opentype` | Eingebettetes OpenType | .eot                  |
| `opentype`          | OpenType               | .otf, .ttf            |
| `svg`               | SVG-Schrift (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType               | .ttf                  |
| `woff`              | WOFF 1.0               | .woff                 |
| `woff2`             | WOFF 2.0               | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg), auch OpenType-SVG-Farbenschriften genannt, die völlig unterschiedlich sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, egal ob die Schriftdatei kubische Bézier-Kurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bézier-Kurven (innerhalb der Glyph-Tabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als String in Anführungszeichen angegeben:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Fonttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und die entsprechenden Font-Technologien.
Um zu überprüfen, ob eine Font-Technologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Keyword             | Beschreibung                                                                                                       |
| :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farb-Bitmap-Datentabellen                                                                                          |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR Version 0 Tabelle                                                                |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR Version 1 Tabelle                                                                |
| `color-sbix`        | Standard-Bitmap-Grafik-Tabellen                                                                                    |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                           |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                |
| `features-graphite` | Graphite-Features, nämlich `Silf`, `Glat`, `Gloc`, `Feat`, und `Sill` Tabellen                                     |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                |
| `incremental`       | Inkrementelles Font-Laden                                                                                          |
| `palettes`          | Font-Paletten mittels `font-palette`, um eine der vielen Farbpaletten in der Schrift auszuwählen                   |
| `variations`        | Schriftvariationen in TrueType und OpenType Schriften zur Steuerung der Schriftsachsen, Gewichtungen, Glyphen usw. |

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

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftfamilie definiert werden. Die `font-family` wird `MainText` genannt. Die erste Schriftart hat eine reguläre Schrift, und die zweite ist eine fette Version derselben Schriftfamilie.

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

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftressourcen anzugeben.
Eine Schrift, die `color-colrv1` Technologie und `opentype` Format verwendet, wird mit den `tech()` und `format()` Werten spezifiziert.
Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine non-color `opentype` wird als Fallback bereitgestellt.

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

Browser sollten einen `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwenden wird, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für deren Nutzung angegeben werden.

In der Regel bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()`-Einschränkungen vor Ressourcen auftauchen sollten, die keine haben (sonst würde die weniger eingeschränkte Version immer ausgewählt werden).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` nicht unterstützt, sollte den ersten Punkt ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch keine [ungültigen Elemente](#browser-kompatibilität) und schlagen stattdessen den gesamten `src` Deskriptor fehl, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge ausprobiert werden, also haben wir am Ende unseren normalen Deskriptor mit allen Elementen.

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

### Prüfen, ob der Benutzeragent eine Schriftart unterstützt

Das folgende Beispiel zeigt, wie Sie überprüfen können, ob der Benutzeragent eine Font-Technologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der Block von CSS innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1` Technologie unterstützt.

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
