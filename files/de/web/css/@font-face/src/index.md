---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel gibt die Ressource an, die die Schriftart-Daten enthält. Er ist erforderlich, damit die Regel `@font-face` gültig ist.

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

  - : Gibt einen externen Verweis an, der aus einem {{cssxref("&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen unter Verwendung der `format()`- und `tech()`-Komponentenwerte, die das Format und die Schrifttechnologie der durch die URL referenzierten Ressource angeben. Die `format()`- und `tech()`-Komponenten sind eine durch Kommas getrennte Liste von Zeichenfolgen bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein Benutzeragent die Schrifttechnologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was Bandbreite sparen kann.
    Wenn er weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine ältere Schriftquelle aus Kompatibilitätsgründen eingeschlossen ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie den Format-String in Anführungszeichen ein.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der im Abschnitt [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`

  - : Gibt den Schriftartnamen an, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType und TrueType-Schriften wird `<font-face-name>` entweder verwendet, um den Postscript-Namen oder den vollständigen Schriftartnamen in der Namens-Tabelle lokal verfügbarer Schriften abzugleichen. Welche Art von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen einschließen, um ein korrektes Matching über alle Plattformen hinweg zu gewährleisten. Plattformsubstitutionen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften könnten vorinstalliert auf dem Gerät des Benutzers sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während der Satz an vorinstallierten Schriften bei allen Benutzern eines bestimmten Geräts wahrscheinlich gleich ist, ist der Satz an benutzerinstallierten Schriften dies nicht. Durch das Finden des benutzerinstallierten Schriftsatzes kann eine Website daher einen [Fingerprint](/de/docs/Glossary/fingerprinting) des Geräts erstellen, was der Website hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten die benutzerinstallierten Schriften bei der Verwendung von `local()` ignorieren.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen eines lokal installierten Schriftbilds unter Verwendung des `local()`-Komponentenwerts an, der ein einzelnes Schriftbild innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingeschlossen werden. Der Schriftbildname [ist nicht case-sensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen — dies schließt höherstufige Details wie Namen, Stile und Familien sowie die rohen Bytes der zugrunde liegenden Schriftdateien ein.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste von externen Verweisen oder lokal installierten Schriftbildnamen, wobei jede Ressource unter Verwendung von `url()` oder `local()` angegeben wird.
Wenn eine Schrift benötigt wird, iteriert der [Benutzeragent](/de/docs/Glossary/user_agent) über die Liste der referenzierten Schriftarten und verwendet die erste, die er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder nicht gefundene lokale Schriftbilder werden ignoriert und der Benutzeragent lädt die nächste in der Liste.

Wenn mehrere `src`-Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src`-Deskriptor eine Ressource laden kann und kein `local()`-Schriftbild enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser für ungültig hält, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein einziger Wert ungültig ist, selbst wenn nur ein Wert ungültig ist.
> Dies könnte das Design von Fallbacks beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets mit der `@font-face`-Regel aufgelöst wird. Im Fall von SVG-Schriften verweist die URL auf ein Element in einem Dokument, das SVG-Schriftdefinitionen enthält. Wenn der Elementverweis fehlt, wird eine Referenz auf die zuerst definierte Schrift impliziert. Ähnlich laden Schriftcontainerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face`-Regel. Fragmentidentifikatoren werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn ein Containerformat kein definiertes Fragmentidentifikator-Schema hat, wird ein einfaches, auf 1 basierendes Indexierungsschema (z. B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.) verwendet.

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragmentidentifikator hinzugefügt, um das Unter-Schriftbild anzugeben, das verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate.
Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Schriftformat          | Gängige Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorial/SVG_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bézier-Kurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bézier-Kurven (innerhalb der Glyphtabelle) verwendet.

Ältere nicht normalisierte `format()`-Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität in Anführungszeichen eingeschlossen:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()`-Deskriptor und deren entsprechende Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Atregel.

| Schlüsselwort       | Beschreibung                                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farb-Bitmap-Datentabellen                                                                                    |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0-Tabelle                                                              |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1-Tabelle                                                              |
| `color-sbix`        | Standard Bitmap-Grafiktabellen                                                                               |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                     |
| `features-aat`      | TrueType `morx`- und `kerx`-Tabellen                                                                         |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`-Tabellen                              |
| `features-opentype` | OpenType `GSUB`- und `GPOS`-Tabellen                                                                         |
| `incremental`       | Inkrementelles Schriftladen                                                                                  |
| `palettes`          | Schriftpaletten mit `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen               |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung von Schriftachse, Gewicht, Glyphen usw. |

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

Das folgende Beispiel zeigt, wie zwei Schriftbilder mit derselben Schriftfamilie definiert werden. Die `font-family` wird `MainText` genannt. Das erste Schriftbild hat eine normale Schrift, und das zweite ist eine fette Version derselben Schriftfamilie.

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

Das folgende Beispiel zeigt, wie die `tech()`- und `format()`-Werte verwendet werden, um Schriftressourcen anzugeben. Eine Schrift mit der `color-colrv1`-Technologie und dem `opentype`-Format wird unter Verwendung der `tech()`- und `format()`-Werte angegeben. Eine Farbenschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine nicht-farbige `opentype` wird als Fallback bereitgestellt.

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

### Fallbacks für ältere Browser spezifizieren

Browser sollten eine `@font-face` mit einem einzigen `src`-Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet. Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für deren Nutzung angegeben werden.

Im Allgemeinen bedeutet das, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()`- oder `tech()`-Beschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde immer die weniger eingeschränkte Version ausgewählt werden).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und schlagen stattdessen bei einem ungültigen Wert den gesamten `src`-Deskriptor fehl.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Deskriptoren als Fallback angeben.
Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge versucht werden, so dass am Ende unser normaler Deskriptor mit allen Elementen steht.

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

Das folgende Beispiel zeigt, wie überprüft wird, ob der Benutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}}-Regel unterstützt. Der Block von CSS innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1`-Technologie unterstützt.

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
