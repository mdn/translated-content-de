---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}}-Regel spezifiziert die Ressource, die die Fontdaten enthält. Es ist erforderlich, damit die `@font-face`-Regel gültig ist.

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

  - : Gibt eine externe Referenz an, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mit den `format()`- und `tech()`-Komponentenwerten, die das Format und die Schrifttechnologie der Ressource angeben, die durch die URL referenziert wird. Die `format()`- und `tech()`-Komponenten sind eine durch Kommas getrennte Liste von bekannten [Schriftformaten](#schriftformate) und Technologien. Wenn ein Benutzeragent die Schrifttechnologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, kann der Browser die Ressource nicht herunterladen, was möglicherweise Bandbreite spart.
    Wird es weggelassen, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn Sie eine Schriftquelle für die Abwärtskompatibilität einschließen, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie die Formatzeichenkette in Anführungszeichen ein.
    Mögliche Werte werden im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der in [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`

  - : Gibt den Schriftartnamen an, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriftarten wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namens-Tabelle lokal verfügbarer Schriftarten abzugleichen. Welche Art von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide dieser Namen einschließen, um ein korrektes Matching auf allen Plattformen zu gewährleisten. Plattformersetzungen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriftarten können entweder vorinstalliert auf dem Gerät des Benutzers sein oder aktiv von ihm installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriftarten wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist die Menge der benutzerinstallierten Schriftarten nicht gleich. Indem die Menge der benutzerinstallierten Schriftarten entdeckt wird, kann eine Seite daher einen {{Glossary("fingerprinting", "Fingerprint")}} für das Gerät erstellen, was der Seite hilft, Benutzer im Web zu verfolgen.
    >
    > Zur Vermeidung dieses Problems können Benutzeragenten benutzerinstallierte Schriftarten ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftart mit dem `local()`-Komponentenwert an, die ein einzelnes Schriftbild innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftzugname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dies umfasst höhere Details wie Namen, Stile und Familien sowie die rohen Bytes der zugrunde liegenden Schriftartdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste von externen Referenzen oder lokal installierten Schriftbildnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schriftart benötigt wird, durchläuft der {{Glossary("user_agent", "Benutzeragent")}} die Liste der angegebenen Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriftarten mit ungültigen Daten oder lokal nicht gefundene Schriftbilder werden ignoriert und der Benutzeragent lädt die nächste Schrift in der Liste.

Wenn mehrere `src`-Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src`-Deskriptor eine Ressource laden kann und keine `local()`-Schrift enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, auch wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den ganzen Deskriptor, wenn nur ein Element ungültig ist.
> Dies kann das Design von Fallbacks beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Standort des Stylesheets mit der `@font-face` Regel aufgelöst wird. Im Falle von SVG-Schriftarten zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn die Elementreferenz weggelassen wird, wird ein Verweis auf die zuerst definierte Schrift impliziert. In ähnlicher Weise laden Schrifttypencontainerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragmentidentifikatoren werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn einem Containerformat ein definiertes Fragmentidentifikator-Schema fehlt, wird ein einfach 1-basiertes Indexierungsschema (z.B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.) verwendet.

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragmentidentifikator hinzugefügt, um das zu verwendende Unter-Schriftbild anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate.
Um zu prüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Schriftformat       | Übliche Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorial/SVG_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbenschriften genannt), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphtabelle) verwendet.

Ältere nicht normalisierte `format()`-Werte haben folgende äquivalente Syntax; aus Gründen der Abwärtskompatibilität als Zeichenkette in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()`-Deskriptor und deren entsprechende Schrifttechnologien.
Um zu prüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Beschreibung                                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Datentabellen                                                                                   |
| `color-colrv0`      | Mehrfarbige Glyphe über die COLR-Version 0 Tabelle                                                             |
| `color-colrv1`      | Mehrfarbige Glyphe über die COLR-Version 1 Tabelle                                                             |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                 |
| `color-svg`         | SVG-mehrfarbige Tabellenauswertungen                                                                           |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                            |
| `features-graphite` | Graphite-Funktionalitäten, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                          |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                            |
| `incremental`       | Inkrementelles Schriftladung                                                                                   |
| `palettes`          | Schriftpaletten über `font-palette`, um eine von vielen Paletten im Schriftstück zu wählen                     |
| `variations`        | Schriftvariationen in TrueType und OpenType Schriftarten, um die Schriftachse, Gewicht, Glyphe usw. zu steuern |

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

### Angabe von Schriftsressourcen mit url() und local()

Das folgende Beispiel zeigt, wie man zwei Schriftbilder mit derselben Schriftfamilie definiert. Die `font-family` wird `MainText` genannt. Das erste Schriftbild ist eine reguläre Schrift und das zweite eine fette Version derselben Schriftfamilie.

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

### Angabe von Schriftsressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie die `tech()`- und `format()`-Werte zur Angabe von Schriftsressourcen verwendet werden.
Eine Schrift, die die `color-colrv1`-Technologie und das `opentype`-Format verwendet, wird durch die `tech()`- und `format()`-Werte spezifiziert.
Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine `opentype`-Nichtfarbe wird als Fallback bereitgestellt.

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

### Angabe von Fallbacks für ältere Browser

Browser sollten eine `@font-face`-Regel mit einem einzigen `src`-Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für deren Verwendung angegeben werden.

Generell bedeutet das, dass lokale Dateien vor entfernten Dateien erscheinen sollten und dass Ressourcen mit `format()`- oder `tech()`-Einschränkungen vor Ressourcen erscheinen sollten, die keine haben (ansonsten würde die weniger einschränkende Version immer ausgewählt werden).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der das `tech()` oben nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und schlagen stattdessen die ganze `src`-Regel fehl, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Deskriptoren als Fallbacks festlegen.
Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge versucht werden, so dass wir am Ende unseren normalen Deskriptor mit allen Elementen haben.

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

### Überprüfung, ob der Benutzeragent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie Sie überprüfen, ob der Benutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}}-Regel unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1`-Technologie unterstützt.

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
