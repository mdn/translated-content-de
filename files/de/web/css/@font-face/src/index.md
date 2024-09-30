---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel spezifiziert die Ressource, die die Font-Daten enthält. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

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

  - : Spezifiziert eine externe Referenz, die aus einem {{cssxref("&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mithilfe der `format()` und `tech()` Komponentenwerte, die das Format und die Font-Technologie der Ressource angeben, auf die die URL verweist. Die `format()` und `tech()` Komponenten sind eine durch Komma getrennte Liste von Zeichenfolgen bekannter [Font-Formate](#font-formate) und Technologien. Wenn ein User-Agent die Font-Technologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Font-Ressource. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf das Font-Format gibt. Wenn der Wert nicht unterstützt oder ungültig ist, kann der Browser die Ressource nicht herunterladen, wodurch möglicherweise Bandbreite gespart wird. Wenn weggelassen, lädt der Browser die Ressource herunter und erkennt dann das Format. Wenn eine Font-Quelle für die Rückwärtskompatibilität enthalten ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) steht, schließen Sie die Format-Zeichenfolge in Anführungszeichen ein. Mögliche Werte sind im Abschnitt [Font-Formate](#font-formate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf die Font-Technologie gibt. Der Wert für `tech()` kann eines der in [Font-Technologien](#font-technologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`

  - : Gibt den Fontnamen an, wenn die Schriftart auf dem Gerät des Benutzers verfügbar ist. Das Einschließen des Fontnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftnamen in der Namens-Tabelle der lokal verfügbaren Schriften abzugleichen. Welcher Typ von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen angeben, um eine ordnungsgemäße Zuordnung auf allen Plattformen sicherzustellen. Plattformersetzungen für einen bestimmten Fontnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Fonts könnten vorinstalliert auf dem Gerät des Benutzers gewesen sein oder aktiv vom Benutzer installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriftarten wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist die Menge der benutzerinstallierten Schriftarten dies nicht. Durch das Entdecken der Menge der vom Benutzer installierten Schriftarten kann eine Website deshalb einen [Fingerabdruck](/de/docs/Glossary/fingerprinting) für das Gerät erstellen und so die Website dabei unterstützen, Benutzer im gesamten Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents benutzerinstallierte Schriftarten ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen einer lokal installierten Schriftart mit dem `local()` Komponentenwert an, der eine einzelne Schrift innerhalb einer größeren Familie eindeutig identifiziert. Der Name kann optional in Anführungszeichen gesetzt werden. Der Font-Name [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dies umfasst höhere Details wie Namen, Stile und Familien sowie die Rohdaten der zugrundeliegenden Font-Dateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste externer Referenzen oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird. Wenn eine Schriftart benötigt wird, iteriert der [User-Agent](/de/docs/Glossary/user_agent) über die aufgelisteten Referenzen und verwendet die erste, die er erfolgreich aktivieren kann. Fonts mit ungültigen Daten oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert, und der User-Agent lädt die nächste Schriftart in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die letzte deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden. Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schriftart einschließt, kann der Browser externe Font-Dateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte in Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert. Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist. Dies kann sich auf die Gestaltung von Fallbacks auswirken. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets, das die `@font-face` Regel enthält, aufgelöst wird. Im Fall von SVG-Schriften weist die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdarstellungen hin. Wenn die Elementreferenz weggelassen wird, wird implizit auf die erste definierte Schriftart verwiesen. Ebenso laden Font-Containerformate, die mehr als eine Schriftart enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragmentbezeichner werden verwendet, um anzugeben, welche Schriftart geladen werden soll. Wenn ein Containerformat kein definiertes Fragmentbezeichnerschema hat, wird ein einfaches Indexierungsschema basierend auf "1" (z.B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.) verwendet.

Wenn die Font-Datei ein Container für mehrere Schriften ist, wird ein Fragmentbezeichner hinzugefügt, um die zu verwendende Teil-Schrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Font-Formate

Die folgende Tabelle zeigt die gültigen Font-Schlüsselwörter und deren entsprechende Font-Formate. Um zu überprüfen, ob ein Font-Format von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort         | Font-Format         | Gängige Erweiterungen |
| --------------------- | ------------------- | --------------------- |
| `collection`          | OpenType Collection | .otc, .ttc            |
| `embedded-opentype`   | Embedded OpenType   | .eot                  |
| `opentype`            | OpenType            | .otf, .ttf            |
| `svg`                 | SVG Font (veraltet) | .svg, .svgz           |
| `truetype`            | TrueType            | .ttf                  |
| `woff`                | WOFF 1.0            | .woff                 |
| `woff2`               | WOFF 2.0            | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG Fonts](/de/docs/Web/SVG/Tutorial/SVG_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die völlig unterschiedlich sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, unabhängig davon, ob die Font-Datei kubische Bézierkurven (innerhalb einer CFF/CFF2-Tabelle) oder quadratische Bézierkurven (innerhalb der Glyphe-Tabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität wird sie als Zeichenfolge in Anführungszeichen bereitgestellt:

| Alte Syntax                   | Äquivalente Syntax                 |
| ----------------------------- | ---------------------------------- |
| `format("woff2-variations")`  | `format(woff2) tech(variations)`   |
| `format("woff-variations")`   | `format(woff) tech(variations)`    |
| `format("opentype-variations")`| `format(opentype) tech(variations)`|
| `format("truetype-variations")`| `format(truetype) tech(variations)`|

### Font-Technologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und deren entsprechende Font-Technologien. Um zu überprüfen, ob eine Font-Technologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort         | Beschreibung                                                                                   |
| :-------------------- | :--------------------------------------------------------------------------------------------- |
| `color-cbdt`          | Farbbilddatentabellen                                                                          |
| `color-colrv0`        | Mehrfarbige Glyphen über die COLR Version 0 Tabelle                                            |
| `color-colrv1`        | Mehrfarbige Glyphen über die COLR Version 1 Tabelle                                            |
| `color-sbix`          | Standardgrafiktabellen                                                                         |
| `color-svg`           | SVG mehrfarbige Tabellen                                                                       |
| `features-aat`        | TrueType `morx` und `kerx` Tabellen                                                            |
| `features-graphite`   | Graphite Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                |
| `features-opentype`   | OpenType `GSUB` und `GPOS` Tabellen                                                            |
| `incremental`         | Inkrementelles Schriftladen                                                                     |
| `palettes`            | Schriftpaletten durch `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen|
| `variations`          | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, Gewicht, Glyphen usw.|

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

### Schriftenressourcen mit url() und local() angeben

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

Das nächste Beispiel zeigt, wie die `tech()` und `format()` Werte zur Angabe von Schriftressourcen genutzt werden. Eine Schrift mit `color-colrv1` Technologie und `opentype` Format wird mithilfe der `tech()` und `format()` Werte angegeben. Eine Farb-Schrift wird aktiviert, wenn der User-Agent diese unterstützt, und ein `opentype` Nicht-Farb Schrift wird als Fallback bereitgestellt.

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

Browser sollten eine `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet. Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für deren Nutzung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen ohne sie erscheinen sollten (andernfalls würde immer die weniger eingeschränkte Version ausgewählt). Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` oben nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser [ignorieren ungültige Elemente](#browser-kompatibilität) noch nicht und brechen den gesamten `src` Deskriptor ab, wenn ein Wert ungültig ist. Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben. Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, so dass wir am Ende unseren normalen Deskriptor mit allen Elementen haben.

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

Das folgende Beispiel zeigt, wie überprüft werden kann, ob der User-Agent eine Schrifttechnologie mit der {{cssxref("@supports")}} Regel unterstützt. Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der User-Agent die `color-COLRv1` Technologie unterstützt.

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
