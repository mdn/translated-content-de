---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für den {{cssxref("@font-face")}} At-Regel gibt die Ressource an, die die Schriftartdaten enthält. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

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

  - : Gibt einen externen Verweis bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}} an, gefolgt von optionalen Hinweisen unter Verwendung der `format()` und `tech()` Komponentenwerte, die das Format und die Schriftarttechnologie der durch die URL referenzierten Ressource angeben. Die `format()` und `tech()` Komponenten sind eine kommagetrennte Liste von Zeichenketten bekannter [Schriftformate](#schriftformate) und Technologien. Wird die Schrifttechnologie oder die Formate von einem Benutzeragenten nicht unterstützt, wird die Schriftressource nicht heruntergeladen. Werden keine Format- oder Technologiehinweise angegeben, wird die Schriftressource immer heruntergeladen.

- `format()`

  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Benutzeragenten einen Hinweis auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, kann der Browser die Ressource möglicherweise nicht herunterladen, was Bandbreite spart.
    Wird der Wert weggelassen, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Schriftquelle für Abwärtskompatibilität aufgenommen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie die Formatzeichenfolge in Anführungszeichen ein.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.

- `tech()`

  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Benutzeragenten einen Hinweis auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Schrifttechnologien](#schrifttechnologien) beschrieben sind.

- `local(<font-face-name>)`

  - : Gibt den Schriftartnamen an, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType und TrueType Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namensdatei der lokal verfügbaren Schriften abzugleichen. Welcher Name verwendet wird, variiert je nach Plattform und Schrift, daher sollten Sie beide Namen einschließen, um einen ordnungsgemäßen Abgleich über verschiedene Plattformen zu gewährleisten. Plattformsubstitutionen für einen gegebenen Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokale verfügbare Schriften wurden möglicherweise auf dem Gerät des Benutzers vorinstalliert oder aktiv vom Benutzer installiert.
    >
    > Während der Satz von vorinstallierten Schriften vermutlich für alle Benutzer eines bestimmten Geräts gleich ist, trifft dies auf die Menge der benutzerinstallierten Schriften nicht zu. Durch das Ermitteln der Menge benutzerinstallierter Schriften kann eine Seite daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, was der Seite hilft, Benutzer über das Web zu verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten benutzerinstallierte Schriften ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen einer lokal installierten Schrift mittels des `local()` Komponentenwerts an, der eine einzelne Schrift innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingeschlossen werden. Der Schriftname [ist nicht case-sensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen – dazu gehören höhere Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftartdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste von externen Referenzen oder lokal installierten Schriftartnamen, wobei jede Ressource unter Verwendung von `url()` oder `local()` angegeben wird. Wenn eine Schriftart benötigt wird, iteriert der {{Glossary("user_agent", "Benutzeragent")}} über die Liste der angegebenen Verweise und verwendet den ersten, den er erfolgreich aktivieren kann. Schriften mit ungültigen Daten oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert und der Benutzeragent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden. Wenn der letzte `src`-Deskriptor eine Ressource laden kann und keine `local()` Schrift enthält, kann der Browser externe Schriftartdateien herunterladen und die lokale Version ignorieren, auch wenn diese auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb der Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, auch wenn nur ein Element ungültig ist.
> Dies kann die Gestaltung von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zur Position des Stylesheets aufgelöst wird, das die `@font-face` Regel enthält. Im Fall von SVG-Schriften zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn die Elementreferenz weggelassen wird, wird auf die zuerst definierte Schrift Bezug genommen. In ähnlicher Weise laden Schriftcontainerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn ein Containerformat kein definiertes Fragment-Identifikator-Schema hat, wird ein 1-basierendes Indexierungsschema verwendet (z. B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragment-Identifikator enthalten, um die zu verwendende Teil-Schrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate. Um zu prüfen, ob ein Schriftformat innerhalb von CSS von einem Browser unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Schriftformat          | Übliche Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die vollständig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind äquivalent, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphtabelle) verwendet.

Ältere nicht-normalisierte `format()` Werte haben die folgenden äquivalenten Syntaxe; aus Gründen der Abwärtskompatibilität als Zeichenkette in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Schrifttechnologien. Um zu prüfen, ob eine Schrifttechnologie innerhalb von CSS von einem Browser unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farb-Bitmap-Datentabellen                                                                                            |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR Version 0 Tabelle                                                                  |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR Version 1 Tabelle                                                                  |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                       |
| `color-svg`         | SVG mehrfarbige Tabellen                                                                                             |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                  |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                      |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                  |
| `incremental`       | Inkrementelles Schriftladen                                                                                          |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen                   |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften, um die Schriftachse, das Gewicht, die Glyphe usw. zu steuern |

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

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftfamilie definiert werden. Die `font-family` heißt `MainText`. Die erste Schriftart ist eine reguläre Schrift, und die zweite ist eine fette Version derselben Schriftfamilie.

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

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftressourcen anzugeben. Eine Schrift, die `color-colrv1` Technologie und `opentype` Format verwendet, wird unter Nutzung der `tech()` und `format()` Werte spezifiziert. Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine `opentype` Nicht-Farbschrift wird als Fallback angegeben.

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

Browser sollten eine `@font-face` mit einem einzelnen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift aufzählt. Da der Browser die erste Ressource verwenden wird, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer bevorzugten Verwendung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor den Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (andernfalls würde immer die weniger eingeschränkte Version gewählt). Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der oben `tech()` nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und schlagen stattdessen den gesamten `src` Deskriptor fehl, wenn irgendein Wert ungültig ist. Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben. Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass am Ende unser normaler Deskriptor mit allen Elementen bleibt.

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

### Überprüfen, ob der Benutzeragent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie überprüft wird, ob der Benutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}} Regel unterstützt. Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1` Technologie unterstützt.

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
