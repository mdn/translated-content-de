---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}}-Regel spezifiziert die Ressource, die Font-Daten enthält. Er ist erforderlich, damit die `@font-face`-Regel gültig ist.

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
  - : Gibt einen externen Verweis an, der aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mithilfe der `format()`- und `tech()`-Komponentenwerte, die das Format und die Font-Technologie der von der URL referenzierten Ressource angeben. Die `format()`- und `tech()`-Komponenten sind eine durch Kommas getrennte Liste von Zeichenfolgen bekannter [Font-Formate](#font-formate) und Technologien. Wenn ein Benutzeragent die Font-Technologie oder -Formate nicht unterstützt, wird das Herunterladen der Font-Ressource übersprungen. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf das Font-Format gibt.
    Wenn der Wert nicht unterstützt wird oder ungültig ist, wird die Ressource möglicherweise nicht heruntergeladen, was Bandbreite sparen kann.
    Wenn er weggelassen wird, wird die Ressource heruntergeladen und das Format wird dann erkannt.
    Wenn eine Font-Quelle für die Rückwärtskompatibilität enthalten ist, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie die Formatzeichenfolge in Anführungszeichen ein.
    Mögliche Werte sind im Abschnitt [Font-Formate](#font-formate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf die Font-Technologie gibt.
    Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Font-Technologien](#font-technologien) beschrieben sind.
- `local(<font-face-name>)`
  - : Gibt den Font-Namen an, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist.
    Das Einbeziehen des Font-Namens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Namen der Schriftart in der Namens-Tabelle lokaler Schriften abzugleichen. Welcher Typ von Name verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide dieser Namen angeben, um eine ordnungsgemäße Übereinstimmung über Plattformen hinweg zu gewährleisten. Plattformsubstitutionen für einen bestimmten Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Auf dem Gerät des Benutzers lokal verfügbare Schriftarten wurden möglicherweise vorinstalliert oder aktiv vom Benutzer installiert.
    >
    > Während der Satz vorinstallierter Schriftarten für alle Benutzer eines bestimmten Geräts wahrscheinlich derselbe ist, ist der Satz von Benutzer-installierten Schriftarten dies nicht. Durch das Erkennen des Satzes von Benutzer-installierten Schriftarten kann eine Website daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, was der Website hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten Benutzer-installierte Schriftarten ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen einer lokal installierten Schriftart mit dem `local()`-Komponentenwert an, der eine einzelne Schriftart innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingeschlossen werden. Der Schriftarten-Gesichtsname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dies umfasst Details höherer Ebene wie Namen, Stile und Familien sowie die rohen Bytes der zugrunde liegenden Schriftartdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommata getrennte Liste externer Verweise oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schriftart benötigt wird, durchläuft der {{Glossary("user_agent", "Benutzeragent")}} die Liste der angegebenen Verweise und verwendet den ersten, den er erfolgreich aktivieren kann.
Schriftarten, die ungültige Daten enthalten, oder lokale Schriftarten, die nicht gefunden werden, werden ignoriert, und der Benutzeragent lädt die nächste Schriftart in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schriftart enthält, kann der Browser externe Schriftartdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig ansieht, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann das Design von Fallbacks beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Standort des Stylesheets aufgelöst wird, das die `@font-face` Regel enthält. Im Fall von SVG-Schriftarten zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn der Elementverweis ausgelassen wird, wird auf die zuerst definierte Schriftart verwiesen. Ähnlich laden Schriftartcontainern-Formate, die mehr als eine Schriftart enthalten können, nur eine der Schriftarten für eine gegebene `@font-face` Regel. Fragment-IDs werden verwendet, um anzuzeigen, welche Schriftart geladen werden soll. Falls einem Containerformat ein definierter Fragmentbezeichner-Schema fehlt, wird ein 1-basiertes Indexierungsschema verwendet (z. B. "font-collection#1" für die erste Schriftart, "font-collection#2" für die zweite Schriftart, usw.).

Wenn die Schriftartdatei ein Container für mehrere Schriftarten ist, wird ein Fragmentbezeichner eingefügt, um die Unter-Schriftart anzugeben, die verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Font-Formate

Die folgende Tabelle zeigt die gültigen Schriftart-Schlüsselwörter und ihre entsprechenden Schriftartformate.
Um zu überprüfen, ob ein Schriftartformat in einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Schriftartformat       | Übliche Erweiterungen |
| ------------------- | ---------------------- | --------------------- |
| `collection`        | OpenType-Sammlung      | .otc, .ttc            |
| `embedded-opentype` | Eingebettetes OpenType | .eot                  |
| `opentype`          | OpenType               | .otf, .ttf            |
| `svg`               | SVG-Schrift (veraltet) | .svg, .svgz           |
| `truetype`          | TrueType               | .ttf                  |
| `woff`              | WOFF 1.0               | .woff                 |
| `woff2`             | WOFF 2.0               | .woff2                |

> [!NOTE]
>
> - `format(svg)` steht für [SVG fonts](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType fonts with SVG table](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die völlig unterschiedlich sind.
> - Die `opentype`- und `truetype`-Werte sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bézier-Kurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bézier-Kurven (innerhalb der Glyphentabelle) verwendet.

Ältere nicht-normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als Zeichenfolge in Anführungszeichen angegeben:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Font-Technologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Schriftarttechnologien.
Um zu überprüfen, ob eine Schriftarttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                                |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                               |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR-Version 0 Tabelle                                                                         |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR-Version 1 Tabelle                                                                         |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                              |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                                    |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                         |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                             |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                         |
| `incremental`       | Inkrementelles Laden von Schriftarten                                                                                       |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schriftart auszuwählen                       |
| `variations`        | Schriftarten-Variationen in TrueType und OpenType-Schriften, um die Schriftachsen, das Gewicht, die Glyphen usw. zu steuern |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie zwei Schriftarten-Faces mit derselben Schriftfamilie definiert werden. Die `font-family` heißt `MainText`. Das erste Schriftarten-Face hat eine reguläre Schriftart, und das zweite ist eine fette Version derselben Schriftfamilie.

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

### Schriftressourcen mithilfe von tech() und format() angeben

Das folgende Beispiel zeigt, wie die `tech()`- und `format()`-Werte verwendet werden, um Schriftressourcen anzugeben. Eine Schriftart mit der `color-colrv1` Technologie und dem `opentype` Format wird unter Verwendung der `tech()` und `format()` Werte angegeben. Eine Farb-Schriftart wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine nicht-farbige `opentype` wird als Fallback bereitgestellt.

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

Browser sollten eine `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schriftart auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten die Elemente in der Reihenfolge ihrer Verwendungsvorliebe angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde die weniger eingeschränkte Version immer ausgewählt werden).
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

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität), und stattdessen schlägt der gesamte `src` Deskriptor fehl, wenn ein Wert ungültig ist.
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

### Überprüfen, ob der Benutzeragent eine Schriftart unterstützt

Das folgende Beispiel zeigt, wie überprüft werden kann, ob der Benutzeragent eine Schriftart-Technologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der Block von CSS innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1` Technologie unterstützt.

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
