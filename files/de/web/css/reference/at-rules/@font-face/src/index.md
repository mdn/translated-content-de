---
title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`src`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} Regel gibt die Ressource an, die die Font-Daten enthält. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

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
  - : Gibt einen externen Verweis bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}} an, gefolgt von optionalen Hinweisen mit den Komponentenwerten `format()` und `tech()`, die das Format und die Schrifttyptechnologie der durch den URL referenzierten Ressource angeben. Die `format()` und `tech()` Komponenten sind eine kommagetrennte Liste von Zeichenfolgen bekannter [Fontformate](#fontformate) und Technologien. Wenn ein User Agent die Schrifttyptechnologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Fontressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User Agent einen Hinweis auf das Schrifttypformat gibt. Wenn der Wert nicht unterstützt oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was Bandbreite sparen kann. Wenn er weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format. Wenn eine Schriftquelle zur Rückwärtskompatibilität beinhaltet wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) ist, schließen Sie das Format-String in Anführungszeichen ein. Mögliche Werte sind im Abschnitt [Fontformate](#fontformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User Agent einen Hinweis auf die Schrifttyptechnologie gibt. Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Schrifttyptechnologien](#schrifttyptechnologien) beschrieben sind.
- `local(<font-face-name>)`
  - : Gibt den Schriftartnamen an, wenn die Schriftart auf dem Gerät des Benutzers verfügbar ist. Das Einrahmen des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namens-Tabelle der lokal verfügbaren Schriften abzugleichen. Welche Art von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen einschließen, um eine ordnungsgemäße Übereinstimmung über alle Plattformen hinweg zu gewährleisten. Plattformersetzungen für einen gegebenen Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können entweder vorinstalliert auf dem Gerät des Nutzers sein oder aktiv vom Nutzer installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriften für alle Benutzer eines bestimmten Geräts wahrscheinlich gleich ist, ist die Menge der vom Benutzer installierten Schriften unterschiedlich. Durch das Erkennen der vom Benutzer installierten Schriften kann eine Webseite daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, um die Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User Agents benutzerinstallierte Schriften ignorieren, wenn sie `local()` verwenden.

- `<font-face-name>`
  - : Gibt den vollständigen oder den Postscript-Namen einer lokal installierten Schriftart an, indem der `local()` Komponentenwert verwendet wird, der ein einzelnes Schriftbild innerhalb einer größeren Familie eindeutig identifiziert. Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftbildname [ist nicht groß und kleinbuchstabenempfindlich](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftsatzdaten des Benutzers zuzugreifen — dies umfasst höherstufige Details wie Namen, Styles und Familien sowie die Rohdaten der zugrundeliegenden Schriftdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste externer Verweise oder lokal installierter Schriftbildnamen, wobei jede Ressource mittels `url()` oder `local()` angegeben wird. Wenn eine Schriftart benötigt wird, durchläuft der {{Glossary("user_agent", "Benutzer-Agent")}} das Set an aufgelisteten Referenzen und nutzt die erste, die erfolgreich aktiviert werden kann. Schriften mit ungültigen Daten oder lokal nicht gefundene Schriftbilder werden ignoriert und der Benutzer-Agent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewendet, die eine Ressource laden kann. Wenn der letzte `src` Deskriptor eine Ressource laden kann und kein `local()` Schriftbild enthält, kann der Browser externe Schriftsatzdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig ansieht, werden ignoriert. Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist. Dies kann das Design von Fallbacks beeinflussen. Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets aufgelöst wird, das die `@font-face` Regel enthält. Im Fall von SVG-Schriften verweist die URL auf ein Element innerhalb eines Dokuments mit SVG-Schrifttypdefinitionen. Wenn der Elementverweis weggelassen wird, ist ein Verweis auf die zuerst definierte Schrift impliziert. Similarly, container formats that can contain more than one font load only one of the fonts for a given `@font-face` rule. Fragment identifiers are used to indicate which font to load. If a container format lacks a defined fragment identifier scheme, a 1-based indexing scheme (e.g., "font-collection#1" for the first font, "font-collection#2" for the second font, etc.) is used.

Wenn die Schriftdatei ein Container für mehrere Schriftarten ist, wird ein Fragmentbezeichner hinzugefügt, um die zu verwendende Teil-Schriftart anzugeben, wie im folgenden Beispiel gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Fontformate

Die folgende Tabelle zeigt die gültigen Schriftart-Schlüsselwörter und ihre entsprechenden Schriftformate. Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Schriftformat          | Übliche Erweiterungen |
| ------------------- | ---------------------- | --------------------- |
| `collection`        | OpenType Sammlung      | .otc, .ttc            |
| `embedded-opentype` | Eingebettetes OpenType | .eot                  |
| `opentype`          | OpenType               | .otf, .ttf            |
| `svg`               | SVG Schrift (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType               | .ttf                  |
| `woff`              | WOFF 1.0               | .woff                 |
| `woff2`             | WOFF 2.0               | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG fonts](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG Farbschriftarten genannt), die vollständig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2 Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphentabelle) verwendet.

Ältere, nicht normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als Zeichenfolge in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttyptechnologien

Die folgende Tabelle zeigt die gültigen Werte für den `tech()` Deskriptor und ihre entsprechenden Schrifttyptechnologien. Um zu überprüfen, ob eine Schrifttyptechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} at-rule.

| Schlüsselwort       | Beschreibung                                                                                                     |
| :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farb-Bitmap-Datentabellen                                                                                        |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0 Tabelle                                                                  |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1 Tabelle                                                                  |
| `color-sbix`        | Standard Bitmap Grafiktabellen                                                                                   |
| `color-svg`         | SVG mehrfarbige Tabellen                                                                                         |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                              |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                  |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                              |
| `incremental`       | Inkrementelles Schriftsatzladen                                                                                  |
| `palettes`          | Schriftpaletten durch `font-palette`, um eine von vielen Farbpaletten in der Schriftart auszuwählen              |
| `variations`        | Größenvariationen in TrueType und OpenType Schriften, um die Schriftexachse, Gewichtung, Glyphen usw. zu steuern |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Festlegen von Schriftsatzressourcen mithilfe von url() und local()

Das folgende Beispiel zeigt, wie zwei Schriftsatzbilder mit demselben Schriftsatznamen definiert werden. Der `font-family` ist als `MainText` benannt. Das erste Schriftsatzbild hat einen normalen Schriftzug, und das zweite ist eine fette Version desselben Schriftsatzes.

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

### Festlegen von Schriftsatzressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftsatzressourcen anzugeben. Eine Schriftsatzressource, die `color-colrv1` Technologie und `opentype` Format verwendet, wird mithilfe der `tech()` und `format()` Werte angegeben. Eine Farbschrift wird aktiviert, wenn der Benutzer-Agent diese unterstützt, und ein `opentype` nicht-Farbsatz wird als Fallback bereitgestellt.

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

### Festlegen von Fallbacks für ältere Browser

Browser sollten eine `@font-face` mit einem einzelnen `src` Deskriptor verwenden, der mögliche Quellen für den Schriftsatz angibt. Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Items in der Reihenfolge ihrer bevorzugten Verwendung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die keine haben (andernfalls würde die weniger eingeschränkte Version immer ausgewählt werden).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` oben nicht unterstützt, sollte das erste Item ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Items](#browser-kompatibilität) und schlagen stattdessen beim gesamten `src` Deskriptor fehl, wenn irgendein Wert ungültig ist. Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben. Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass am Ende unser normaler Deskriptor mit allen Items steht.

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

### Überprüfen, ob der Benutzer-Agent eine Schriftart unterstützt

Das folgende Beispiel zeigt, wie überprüft wird, ob der Benutzer-Agent eine Schrifttyptechnologie mithilfe der {{cssxref("@supports")}} Regel unterstützt. Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der Benutzer-Agent die `color-COLRv1` Technologie unterstützt.

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
