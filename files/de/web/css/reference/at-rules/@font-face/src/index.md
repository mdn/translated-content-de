---
title: "`src` CSS-Attributdescriptor"
short-title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`src`**-Descriptor für die {{cssxref("@font-face")}}-Regel im [CSS](/de/docs/Web/CSS) spezifiziert die Ressource, die Font-Daten enthält. Er ist erforderlich, damit die `@font-face`-Regel gültig ist.

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
src: url("path/to/font.otf") format("opentype");

/* Multiple resources */
src:
  url("path/to/font.woff") format("woff"),
  url("path/to/font.otf") format("opentype");

/* Multiple resources with font format and technologies */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### Werte

- `url()`
  - : Spezifiziert einen externen Verweis bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}}, gefolgt von optionalen Hinweisen mit den Komponentenwerten `format()` und `tech()`, die das Format und die Font-Technologie der Ressource definieren, auf die die URL verweist. Die Komponenten `format()` und `tech()` sind eine durch Kommas getrennte Liste von Strings bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein User-Agent die Font-Technologie oder -Formate nicht unterstützt, wird die Schriftressource übersprungen. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Schriftressource stets heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem User-Agent einen Hinweis auf das Font-Format gibt.
    Wenn der Wert nicht unterstützt wird oder ungültig ist, kann es sein, dass der Browser die Ressource nicht herunterlädt und so Bandbreite spart.
    Wird dieser Wert ausgelassen, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Falls eine Schriftquelle aus Gründen der Abwärtskompatibilität enthalten ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) steht, sollte der Format-String in Anführungszeichen eingeschlossen werden.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem User-Agent einen Hinweis auf die Font-Technologie gibt.
    Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Schrifttechnologien](#schrifttechnologien) beschrieben sind.
- `local(<font-face-name>)`
  - : Spezifiziert den Font-Namen, falls der Font auf dem Gerät des Nutzers verfügbar ist.
    Das Einfassen des Font-Namens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Font-Namen in der Namens-Tabelle lokaler Fonts abzugleichen. Welcher Typ von Name verwendet wird, variiert je nach Plattform und Schriftart. Daher sollten Sie beide Namen angeben, um ein korrektes Matching plattformübergreifend sicherzustellen. Ersatznamen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät des Nutzers vorinstalliert oder von diesem aktiv installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriften wahrscheinlich bei allen Nutzern eines bestimmten Gerätes gleich ist, ist die Menge der von Nutzern installierten Schriften nicht dieselbe. Durch die Ermittlung der von Nutzern installierten Schriften kann eine Seite daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, um den Nutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents beim Einsatz von `local()` benutzerinstallierte Schriften ignorieren.

- `<font-face-name>`
  - : Spezifiziert den vollständigen Namen oder Postscript-Namen eines lokal installierten Font-Face unter Verwendung des `local()`-Komponentenwertes, der ein einzelnes Font-Face innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingefasst werden. Der Font-Face-Name [ist nicht case-sensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Font-Daten des Nutzers zuzugreifen — dies schließt sowohl höherwertige Details wie Namen, Stile und Familien als auch die Rohdaten der zugrundeliegenden Font-Dateien ein.

## Beschreibung

Der Wert dieses Descriptors ist eine priorisierte, kommagetrennte Liste externer Verweise oder Namen von lokal installierten Schriftarten, wobei jede Ressource mittels `url()` oder `local()` spezifiziert wird.
Wenn ein Font benötigt wird, iteriert der {{Glossary("user_agent", "User-Agent")}} über die aufgelisteten Referenzen und verwendet die erste, die erfolgreich aktiviert werden kann.
Fonts mit ungültigen Daten oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert, und der User-Agent lädt den nächsten Font in der Liste.

Wenn mehrere `src`-Descriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src`-Descriptor eine Ressource laden kann und keine `local()`-Schriftart enthält, kann der Browser externe Font-Dateien herunterladen und die lokale Version ignorieren, auch wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Descriptor, wenn ein einzelnes Element ungültig ist, was sich negativ auf die Gestaltung von Fallbacks auswirken kann.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zu dem Ort, an dem sich das Stylesheet mit der `@font-face`-Regel befindet, aufgelöst wird. Im Fall von SVG-Schriften zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wird die Elementreferenz weggelassen, wird eine Referenz auf die zuerst definierte Schrift impliziert. Ähnlich laden Schriftcontainer-Formate, die mehr als eine Schriftart enthalten können, nur eine der Schriften für eine gegebene `@font-face`-Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welche Schriftart geladen werden soll. Wenn ein Containerformat kein definiertes Fragment-Identifikatorschema hat, wird ein indexbasiertes Schema (z. B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.) verwendet.

Wenn die Schriftartdatei ein Container für mehrere Schriften ist, wird ein Fragment-Identifikator hinzugefügt, um die zu verwendende Unterschriftart anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und deren entsprechende Schriftformate.
Um zu überprüfen, ob ein Schriftformat innerhalb von CSS von einem Browser unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Schriftformat       | Häufige Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch als OpenType-SVG-Farbschriften bekannt), die komplett unterschiedlich sind.
> - Die `opentype`- und `truetype`-Werte sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphentabelle) verwendet.

Ältere nicht-normalisierte `format()`-Werte haben die folgende gleichwertige Syntax; aus Gründen der Abwärtskompatibilität als in Anführungszeichen eingeschlossener String bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()`-Descriptor und deren entsprechende Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie innerhalb von CSS von einem Browser unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Beschreibung                                                                                                      |
| :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                     |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Tabelle Version 0                                                                   |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Tabelle Version 1                                                                   |
| `color-sbix`        | Standard-Bitmap-Grafik-Tabellen                                                                                   |
| `color-svg`         | SVG-Mehrfarben-Tabellen                                                                                           |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                               |
| `features-graphite` | Graphite-Features, namentlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                  |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                               |
| `incremental`       | Inkrementelles Schriftladen                                                                                       |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine der vielen Farbpaletten der Schrift auszuwählen                   |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften, um die Schriftachse, das Gewicht, Glyphen usw. zu steuern |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() spezifizieren

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftfamilie definiert werden. Die `font-family` ist benannt `MainText`. Die erste Schriftart hat eine reguläre Schrift, und die zweite ist eine fette Version derselben Schriftfamilie.

```css
/* Defining a regular font face */
@font-face {
  font-family: "MainText";
  src:
    local("Futura-Medium"),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* Defining a different bold font face for the same family */
@font-face {
  font-family: "MainText";
  src:
    local("Gill Sans Bold") /* full font name */,
    local("GillSans-Bold") /* postscript name */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.otf") format("opentype"),
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

### Schriftressourcen mit tech() und format()-Werten spezifizieren

Das folgende Beispiel zeigt, wie die `tech()`- und `format()`-Werte verwendet werden, um Schriftressourcen anzugeben.
Eine Schrift unter Verwendung der Technologie `color-colrv1` und des Formats `opentype` wird mithilfe der `tech()`- und `format()`-Werte spezifiziert.
Eine Farbschrift wird aktiviert, wenn der User-Agent sie unterstützt, und ein `opentype`-Nicht-Farbformat wird als Fallback bereitgestellt.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* Using the font face */
p {
  font-family: "Trickster", fantasy;
}
```

### Fallbacks für ältere Browser spezifizieren

Browser sollten eine `@font-face`-Regel mit einem einzigen `src`-Descriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für ihre Verwendung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()`- oder `tech()`-Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde immer die weniger eingeschränkte Version ausgewählt werden).
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

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität), und scheitern stattdessen an dem gesamten `src`-Descriptor, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Descriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass wir am Ende unseren normalen Deskriptor mit allen Elementen haben.

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

### Überprüfen, ob der User-Agent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie überprüft wird, ob der User-Agent eine Schrifttechnologie mit der {{cssxref("@supports")}}-Regel unterstützt.
Der Block von CSS innerhalb von `@supports` wird angewendet, wenn der User-Agent die Technologie `color-COLRv1` unterstützt.

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1);
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
