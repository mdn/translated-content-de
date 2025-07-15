---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel gibt die Ressource an, die die Schriftdaten enthält. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

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
  - : Gibt einen externen Verweis an, der aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mit den `format()` und `tech()` Komponentenwerten, die das Format und die Schrifttechnologie der durch die URL referenzierten Ressource spezifizieren. Die `format()`- und `tech()`-Komponenten sind eine durch Kommas getrennte Liste von Strings bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein Benutzeragent die Schrifttechnologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den Benutzeragenten auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter und spart so Bandbreite.
    Wenn sie weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Schriftquelle aus Gründen der Abwärtskompatibilität enthalten ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, übergeben Sie den Format-String in Anführungszeichen.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den Benutzeragenten auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der im Abschnitt [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`
  - : Gibt an, dass der Schriftname verwendet werden soll, falls die Schrift auf dem Gerät des Benutzers verfügbar ist.
    Das Einfassen des Schriftnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftnamen in der Namensliste lokal verfügbarer Schriften abzugleichen. Welche Art von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen angeben, um ein korrektes Matching zwischen Plattformen zu gewährleisten. Plattformsubstitutionen für einen bestimmten Schriftnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät des Benutzers vorinstalliert worden sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während der Satz vorinstallierter Schriften für alle Benutzer eines bestimmten Geräts wahrscheinlich gleich ist, ist der Satz benutzerinstallierter Schriften dies nicht. Indem Sie den Satz benutzerinstallierter Schriften entdecken, kann eine Website möglicherweise einen {{Glossary("fingerprinting", "Identitätsnachweis")}} für das Gerät erstellen, um Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten benutzerinstallierte Schriften ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftart mit dem `local()`-Komponentenwert an, der eine einzelne Schriftart innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftartname [ist nicht groß-/kleinschreibungssensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen - das schließt höhere Details wie Namen, Stile und Familien sowie die Rohbytes der darunterliegenden Schriftdateien ein.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste externer Verweise oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schriftart benötigt wird, iteriert der {{Glossary("user_agent", "Benutzeragent")}} über die Liste der aufgeführten Verweise und aktiviert den ersten, den er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder lokal nicht gefundenen Schriftarten werden ignoriert und der Benutzeragent lädt die nächste Schriftart in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die eine Ressource laden kann.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schriftart enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann die Gestaltung von Fallbacks beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets gelöst wird, das die `@font-face` Regel enthält. Im Falle von SVG-Schriften verweist die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdefinitionen. Wenn der Elementverweis weggelassen wird, wird eine Referenz auf die erste definierte Schrift angenommen. Ähnlich laden Schriftcontainerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn einem Containerformat ein definiertes Fragment-Identifikatorschema fehlt, wird ein 1-basiertes Index-Schema verwendet (z.B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragment-Identifier eingeschlossen, um die Unter-Schrift anzugeben, die verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate.
Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

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
> - `format(svg)` steht für [SVG fonts](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch genannt OpenType-SVG Farb-Schriften), die völlig unterschiedlich sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezier-Kurven (innerhalb der CFF/CFF2 Tabelle) oder quadratische Bezier-Kurven (innerhalb der Glyphentabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Abwärtskompatibilität als String in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Ähnliche Syntax                     |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                        |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0 Tabelle                                                                      |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1 Tabelle                                                                      |
| `color-sbix`        | Standard-Bitmap-Grafik-Tabellen                                                                                      |
| `color-svg`         | SVG Mehrfarbige Tabellen                                                                                             |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                  |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                      |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                  |
| `incremental`       | Inkrementelles Schriftladen                                                                                          |
| `palettes`          | Schriftpaletten mit `font-palette` zur Auswahl einer von vielen Farbpaletten in der Schrift                          |
| `variations`        | Schriftvariationen in TrueType und OpenType Schriften zur Steuerung der Schriftachse, des Gewichts, der Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftfamilie definiert werden. Die `font-family` heißt `MainText`. Die erste Schriftart hat eine normale Schrift, und die zweite ist eine fette Version derselben Schriftfamilie.

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
  font-family: MainText, sans-serif;
}

/* Font-family is inherited, but bold fonts are used */
p.bold {
  font-weight: bold;
}
```

### Schriftressourcen mit tech() und format() Werten angeben

Das folgende Beispiel zeigt, wie man die `tech()` und `format()` Werte verwendet, um Schriftressourcen anzugeben.
Eine Schrift, die `color-colrv1` Technologie und `opentype` Format verwendet, wird durch die `tech()` und `format()` Werte spezifiziert.
Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und ein `opentype` Nicht-Farbformat wird als Fallback bereitgestellt.

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

### Fallbacks für ältere Browser angeben

Browser sollten eine `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten Elemente in der Reihenfolge Ihrer Präferenz für ihre Nutzung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde immer die weniger eingeschränkte Version ausgewählt).
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

Einige Browser [ignorieren ungültige Elemente](#browser-kompatibilität) noch nicht und fehlschlagen stattdessen den gesamten `src` Deskriptor, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass am Ende unser normaler Deskriptor mit allen Elementen steht.

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

### Überprüfen, ob der Benutzeragent eine Schriftart unterstützt

Das folgende Beispiel zeigt, wie überprüft wird, ob der Benutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1` Technologie unterstützt.

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
