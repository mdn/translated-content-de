---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`src`** [CSS](/de/docs/Web/CSS)-Deskriptor für die {{cssxref("@font-face")}}-At-Regel gibt die Ressource an, die die Font-Daten enthält. Es ist erforderlich, damit die `@font-face`-Regel gültig ist.

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
  - : Gibt eine externe Referenz an, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mit den Komponentenwerten `format()` und `tech()`, die das Format und die Font-Technologie der durch die URL referenzierten Ressource spezifizieren. Die Komponenten `format()` und `tech()` sind eine durch Kommas getrennte Liste von Zeichenfolgen bekannter [Font-Formate](#font-formate) und Technologien. Wenn ein User-Agent die Font-Technologie oder -Formate nicht unterstützt, überspringt er das Herunterladen der Font-Ressource. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem Wert `url()` folgt und dem User-Agent einen Hinweis auf das Font-Format gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was potenziell Bandbreite spart.
    Wenn er weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Font-Quelle aus Gründen der Rückwärtskompatibilität einbezogen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, muss der Format-String in Anführungszeichen gesetzt werden.
    Mögliche Werte sind im Abschnitt [Font-Formate](#font-formate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem Wert `url()` folgt und dem User-Agent einen Hinweis auf die Font-Technologie gibt.
    Der Wert für `tech()` kann eines der in [Font-Technologien](#font-technologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`
  - : Gibt den Font-Namen an, sollte der Font auf dem Gerät des Benutzers verfügbar sein.
    Das Einrahmen des Font-Namens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namenstabelle lokal verfügbarer Schriftarten abzugleichen. Welcher Name verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen einbeziehen, um eine ordnungsgemäße Übereinstimmung über Plattformen hinweg sicherzustellen. Plattformsubstitutionen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften könnten bereits auf dem Gerät des Benutzers vorinstalliert oder vom Benutzer aktiv installiert worden sein.
    >
    > Während der Satz vorinstallierter Schriften für alle Benutzer eines bestimmten Geräts wahrscheinlich gleich ist, ist der Satz benutzerinstallierter Schriften es nicht. Indem eine Website den Satz benutzerinstallierter Schriften entdeckt, kann sie daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} des Geräts erstellen, um die Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents benutzerinstallierte Schriften ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen eines lokal installierten Font-Face mit dem `local()`-Komponentenwert an, der ein einzelnes Font-Face innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Font-Face-Name [ist nicht case-sensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Font-Daten des Benutzers zuzugreifen – dies umfasst höhere Detailebenen wie Namen, Stile und Familien sowie die Rohbytes der zugrundeliegenden Font-Dateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste externer Referenzen oder lokal installierter Font-Face-Namen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn ein Font benötigt wird, iteriert der {{Glossary("user_agent", "User Agent")}} über die Menge der aufgeführten Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Fonts, die ungültige Daten enthalten oder lokale Font-Faces, die nicht gefunden werden, werden ignoriert und der User-Agent lädt den nächsten Font in der Liste.

Wenn mehrere `src`-Deskriptoren festgelegt sind, wird nur die letzte deklarierte Regel angewendet, die eine Ressource laden kann.
Wenn die letzte `src`-Deskription eine Ressource laden kann und keinen `local()`-Font enthält, kann der Browser externe Font-Dateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser für ungültig hält, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann das Design von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets aufgelöst wird, das die `@font-face`-Regel enthält. Im Fall von SVG-Fonts zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Font-Definitionen enthält. Wenn die Elementreferenz weggelassen wird, ist eine Referenz auf den zuerst definierten Font impliziert. Ebenso laden Font-Containerformate, die mehr als einen Font enthalten können, nur einen der Fonts für eine gegebene `@font-face`-Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welcher Font geladen werden soll. Wenn einem Containerformat eine definierte Fragment-Identifier-Schema fehlt, wird ein auf 1 basierendes Indexschemata verwendet (z.B. "font-collection#1" für den ersten Font, "font-collection#2" für den zweiten Font, usw.).

Wenn die Font-Datei ein Container für mehrere Fonts ist, wird ein Fragment-Identifikator eingeschlossen, um den Unter-Font anzugeben, der verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Font-Formate

Die folgende Tabelle zeigt die gültigen Font-Schlüsselwörter und die entsprechenden Font-Formate.
Um zu überprüfen, ob ein Font-Format von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Font-Format         | Häufige Erweiterungen |
| ------------------- | ------------------- | --------------------- |
| `collection`        | OpenType-Sammlung   | .otc, .ttc            |
| `embedded-opentype` | Embedded OpenType   | .eot                  |
| `opentype`          | OpenType            | .otf, .ttf            |
| `svg`               | SVG-Font (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType            | .ttf                  |
| `woff`              | WOFF 1.0            | .woff                 |
| `woff2`             | WOFF 2.0            | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG Fonts](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts) und `tech(color-SVG)` steht für [OpenType-Fonts mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch als OpenType-SVG-Farbschriften bezeichnet), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Font-Datei kubische Bezierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezierkurven (innerhalb der Glyph-Tabelle) verwendet.

Ältere nicht-normalisierte `format()`-Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als in Anführungszeichen gesetzte Zeichenfolge angegeben:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Font-Technologien

Die folgende Tabelle zeigt die gültigen Werte für den `tech()`-Deskriptor und die entsprechenden Font-Technologien.
Um zu überprüfen, ob eine Font-Technologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Datentabellen                                                                                   |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR-Tabelle Version 0                                                            |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR-Tabelle Version 1                                                            |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                 |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                       |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                            |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                            |
| `incremental`       | Inkrementelles Font-Loading                                                                                    |
| `palettes`          | Font-Paletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen               |
| `variations`        | Font-Variationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachsen, Gewichtung, Glyphen etc. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Festlegen von Font-Ressourcen mit url() und local()

Das folgende Beispiel zeigt, wie zwei Font-Faces mit derselben Schriftfamilie definiert werden. Die `font-family` wird `MainText` genannt. Das erste Font-Face hat eine reguläre Schriftart, und das zweite ist eine fette Version derselben Schriftfamilie.

```css
/* Defining a regular font face */
@font-face {
  font-family: MainText;
  src:
    local("Futura-Medium"),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* Defining a different bold font face for the same family */
@font-face {
  font-family: MainText;
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
  font-family: MainText, sans-serif;
}

/* Font-family is inherited, but bold fonts are used */
p.bold {
  font-weight: bold;
}
```

### Festlegen von Font-Ressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte zur Angabe von Font-Ressourcen verwendet werden.
Ein Font, der die `color-colrv1` Technologie und das `opentype` Format verwendet, wird durch die `tech()` und `format()` Werte spezifiziert.
Ein Farbfont wird aktiviert, wenn der User-Agent ihn unterstützt, und ein nicht-farbiger `opentype` wird als Fallback bereitgestellt.

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

Browser sollten ein `@font-face` mit einem einzelnen `src`-Deskriptor verwenden, der mögliche Quellen für den Font auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten Elemente in der Reihenfolge Ihrer Präferenz für ihre Verwendung angegeben werden.

Im Allgemeinen bedeutet das, dass lokale Dateien vor Remote-Dateien erscheinen sollten und Ressourcen mit `format()` oder `tech()` Einschränkungen vor solchen ohne erscheinen sollten (ansonsten wird die weniger eingeschränkte Version immer ausgewählt).
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

Einige Browser [ignorieren ungültige Elemente](#browser-kompatibilität) noch nicht und schlagen stattdessen den gesamten `src`-Deskriptor fehl, falls ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Deskriptoren als Fallbacks angeben.
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

### Überprüfen, ob der User-Agent einen Font unterstützt

Das folgende Beispiel zeigt, wie überprüft wird, ob der User-Agent eine Font-Technologie mit der {{cssxref("@supports")}}-Regel unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der User-Agent die `color-COLRv1`-Technologie unterstützt.

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
