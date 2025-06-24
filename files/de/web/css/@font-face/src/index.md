---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor der {{cssxref("@font-face")}} At-Regel spezifiziert die Ressource, die Font-Daten enthält. Er ist erforderlich, damit die `@font-face` Regel gültig ist.

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

  - : Spezifiziert eine externe Referenz, bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}}, gefolgt von optionalen Hinweisen unter Verwendung der Komponentenwerte `format()` und `tech()`, die das Format und die Font-Technologie der Ressource angeben, auf die die URL verweist. Die Komponenten `format()` und `tech()` sind eine durch Kommas getrennte Liste von Zeichenfolgen bekannter [Schriftformate](#schriftformate) und Technologien. Unterstützt ein User-Agent nicht die Font-Technologie oder die Formate, überspringt er den Download der Font-Ressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf das Font-Format liefert.
    Wenn der Wert nicht unterstützt oder ungültig ist, kann der Browser die Ressource möglicherweise nicht herunterladen, wodurch Bandbreite gespart wird.
    Wenn weggelassen, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Schriftquelle aus Gründen der Abwärtskompatibilität eingeschlossen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, ist die Formatzeichenfolge in Anführungszeichen zu setzen.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf die Font-Technologie liefert.
    Der Wert für `tech()` kann eines der im Abschnitt [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`

  - : Gibt den Namen der Schriftart an, falls diese auf dem Gerät des Benutzers verfügbar ist.
    Die Einfassung des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namens-Tabelle lokal verfügbarer Schriftarten abzugleichen. Welcher Typ von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide dieser Namen einbeziehen, um eine korrekte Übereinstimmung über Plattformen hinweg zu gewährleisten. Plattformersetzungen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriftarten können auf dem Gerät des Benutzers vorinstalliert gewesen sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während die Menge vorinstallierter Schriftarten wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist die Menge der vom Benutzer installierten Schriftarten dies nicht. Durch das Erkennen der Menge der vom Benutzer installierten Schriftarten kann eine Seite daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} des Geräts erstellen, was der Webseite hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten Benutzer-fonts bei der Verwendung von `local()` ignorieren.

- `<font-face-name>`
  - : Spezifiziert den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftart mit der `local()` Komponentendeklaration, die eine einzelne Schriftart innerhalb einer größeren Familie eindeutig identifiziert. Der Name kann optional in Anführungszeichen gesetzt werden. Der Name der Schriftart [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen — sie umfasst höhere Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste externer Referenzen oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schrift benötigt wird, iteriert der {{Glossary("user_agent", "User-Agent")}} über die angegebenen Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert, und der User-Agent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()`-Schrift einschließt, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, auch wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte im Deskriptor, die der Browser als ungültig ansieht, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein einzelnes Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann das Design von Rückfallebenen beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein; in diesem Fall wird sie relativ zum Speicherort des Stylesheets aufgelöst, das die `@font-face` Regel enthält. Im Fall von SVG-Schriften verweist die URL auf ein Element in einem Dokument mit SVG-Schriftdefinitionen. Wenn der Elementverweis weggelassen wird, wird ein Verweis auf die zuerst definierte Schriftart impliziert. In ähnlicher Weise laden Schriftcontainerformate, die mehr als eine Schriftart enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragmentkennungen werden verwendet, um anzugeben, welche Schriftart geladen werden soll. Wenn ein Containerformat keine definierte Fragmentkennzeichnungs-Schema hat, wird ein 1-basiertes Indizierungsschema (z.B. "font-collection#1" für die erste Schriftart, "font-collection#2" für die zweite Schriftart, usw.) verwendet.

Wenn die Schriftdatei ein Container für mehrere Schriften ist, ist ein Fragmentbezeichner enthalten, um die zu verwendende Unterschrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und deren entsprechende Schriftformate.
Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Schriftformat          | Übliche Erweiterungen |
| ------------------- | ---------------------- | --------------------- |
| `collection`        | OpenType Collection    | .otc, .ttc            |
| `embedded-opentype` | Eingebettetes OpenType | .eot                  |
| `opentype`          | OpenType               | .otf, .ttf            |
| `svg`               | SVG-Schrift (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType               | .ttf                  |
| `woff`              | WOFF 1.0               | .woff                 |
| `woff2`             | WOFF 2.0               | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch als OpenType-SVG-Farbschriftarten bezeichnet), die vollständig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind äquivalent, unabhängig davon, ob die Schriftdatei kubische Bézier-Kurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bézier-Kurven (innerhalb der Glyphtabelle) verwendet.

Ältere nicht-normalisierte `format()` Werte haben die folgende äquivalente Syntax; bereitgestellt als eine in Anführungszeichen eingeschlossene Zeichenfolge für Abwärtskompatibilitätsgründe:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für das `tech()` Deskriptor und deren entsprechende Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                          |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farb-Bitmap-Daten-Tabellen                                                                                            |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR-Version 0-Tabelle                                                                   |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR-Version 1-Tabelle                                                                   |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                        |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                              |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                   |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat`, und `Sill` Tabellen                                      |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                   |
| `incremental`       | Inkrementelles Schriftladung                                                                                          |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schriftart auszuwählen                 |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, des Gewichts, der Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Festlegung von Schriftartenressourcen mit url() und local()

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftartfamilie definiert werden. Die `font-family` ist `MainText` genannt. Die erste Schriftart hat eine reguläre Schrift, und die zweite ist eine fette Version derselben Schriftartfamilie.

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

### Festlegung von Schriftartenressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftartenressourcen zu spezifizieren.
Eine Schrift unter Verwendung von `color-colrv1` Technologie und `opentype` Format wird durch die Werte von `tech()` und `format()` spezifiziert.
Eine Farbschrift wird aktiviert, wenn der User-Agent sie unterstützt, und ein `opentype` Non-Color wird als Fallback bereitgestellt.

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

### Festlegung von Rückfallebenen für ältere Browser

Browser sollten ein `@font-face` mit einem einzelnen `src` Deskriptor verwenden, der mögliche Quellen für die Schriftart auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für ihre Verwendung angeben sein.

Normalerweise bedeutet das, dass lokale Dateien vor entfernten Dateien und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (anderenfalls würde die weniger eingeschränkte Version immer ausgewählt).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der die oben angegebene `tech()` nicht unterstützt, sollte das erste Element ignorieren und die zweite Ressource laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und schlagen stattdessen den gesamten `src` Deskriptor fehl, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass wir am Ende unseren normalen Deskriptor mit allen Elementen haben.

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

### Überprüfung, ob der User-Agent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie überprüft werden kann, ob der User-Agent eine Schrifttechnologie mit Hilfe der {{cssxref("@supports")}} Regel unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der User-Agent die Technologie `color-COLRv1` unterstützt.

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
