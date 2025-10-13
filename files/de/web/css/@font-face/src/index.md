---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der Descriptor **`src`** für die [CSS](/de/docs/Web/CSS) Anweisung {{cssxref("@font-face")}} spezifiziert die Ressource, die Font-Daten enthält. Es ist erforderlich, damit die `@font-face` Regel gültig ist.

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
  - : Spezifiziert eine externe Referenz, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mit den Komponentenwerten `format()` und `tech()`, die das Format und die Schrifttechnologie der durch die URL referenzierten Ressource spezifizieren. Die Komponenten `format()` und `tech()` sind eine kommagetrennte Liste von Strings bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein Nutzeragent die Schrifttechnologie oder -formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Nutzeragenten einen Hinweis auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt wird oder ungültig ist, kann der Browser die Ressource möglicherweise nicht herunterladen und somit Bandbreite sparen.
    Wenn er weggelassen wird, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Schriftquelle für die Rückwärtskompatibilität einbezogen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie den Formatstring in Anführungszeichen ein.
    Mögliche Werte sind im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und dem Nutzeragenten einen Hinweis auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Schrifttechnologien](#schrifttechnologien) beschrieben sind.
- `local(<font-face-name>)`
  - : Gibt an, dass der Schriftname verwendet werden soll, wenn die Schrift auf dem Gerät des Benutzers verfügbar ist.
    Der Einschluss des Schriftnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftnamen in der Namens-Tabelle lokal verfügbarer Schriften abzugleichen. Welche Art von Namen verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen einbeziehen, um eine ordnungsgemäße Übereinstimmung über Plattformen hinweg zu gewährleisten. Plattformsubstitutionen für einen bestimmten Schriftnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften könnten auf dem Gerät des Benutzers vorinstalliert oder vom Benutzer aktiv installiert worden sein.
    >
    > Während die Anzahl der vorinstallierten Schriften wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist die Anzahl der vom Benutzer installierten Schriften dies nicht. Durch das Entdecken der vom Benutzer installierten Schriften kann eine Seite also einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, was der Seite hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können Nutzeragenten die vom Benutzer installierten Schriften ignorieren, wenn sie `local()` verwenden.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftart mit dem `local()` Komponentenwert an, der einen einzelnen Schriftschnitt innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftschnittname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann genutzt werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen — dies umfasst höherstufige Details wie Namen, Stile und Familien sowie die Rohdaten der zugrundeliegenden Schriftdateien.

## Beschreibung

Der Wert dieses Descriptors ist eine priorisierte, kommagetrennte Liste externer Referenzen oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` spezifiziert wird.
Wenn eine Schriftart benötigt wird, iteriert der {{Glossary("user_agent", "Nutzeragent")}} über die im Satz von Referenzen gelisteten, beginnend mit der ersten, die er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder nicht gefundene lokale Schriften werden ignoriert, und der Nutzeragent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewandt, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schrift enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies könnte das Design von Fallbacks beeinflussen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in diesem Fall wird sie relativ zur Position des Stylesheets aufgelöst, das die `@font-face` Regel enthält. Im Fall von SVG-Schriften verweist die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn der Elternelement-Verweis weggelassen wird, wird eine Referenz zur ersten definierten Schrift impliziert. Ebenso laden Schriftcontainerformate, die mehr als eine Schriftart enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragment-Identifikatoren werden verwendet, um anzuzeigen, welche Schriftart geladen werden soll. Wenn ein Containerformat kein definiertes Fragment-Identifikatorschema besitzt, wird ein 1-basiertes Indexsystem verwendet (z. B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift, usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragment-Identifikator eingeschlossen, um die Subschrift anzugeben, die verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate.
Um zu überprüfen, ob ein Schriftformat in einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbenschriften genannt), die völlig unterschiedlich sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezier-Kurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezier-Kurven (innerhalb der Glyphtabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als String in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie in einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                          |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                         |
| `color-colrv0`      | Mehrfarbige Glyphen über die COLR-Version 0 Tabelle                                                                   |
| `color-colrv1`      | Mehrfarbige Glyphen über die COLR-Version 1 Tabelle                                                                   |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                        |
| `color-svg`         | SVG-Mehrfarbtabellen                                                                                                  |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                                   |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat`, und `Sill` Tabellen                                      |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                                   |
| `incremental`       | Inkrementelles Schriftladen                                                                                           |
| `palettes`          | Schriftpaletten durch `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen                      |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften, um die Schriftachse, das Gewicht, die Glyphen usw. zu steuern |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie zwei Schriftschnitte mit derselben Schriftfamilie definiert werden. Die `font-family` ist `MainText` genannt. Der erste Schriftschnitt hat eine normale Schriftart, und der zweite ist eine fette Version derselben Schriftfamilie.

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

### Schriftressourcen mit tech() und format() Werten angeben

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftressourcen zu spezifizieren.
Eine Schrift, die die `color-colrv1` Technologie und das `opentype` Format verwendet, wird mit den `tech()` und `format()` Werten spezifiziert.
Eine Farbenschrift wird aktiviert, wenn der Nutzeragent sie unterstützt, und ein `opentype` Nicht-Farbenschrift wird als Fallback bereitgestellt.

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
Da der Browser die erste Ressource verwenden wird, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für ihre Verwendung angegeben werden.

Das bedeutet im Allgemeinen, dass lokale Dateien vor entfernten Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen stehen sollten, die keine haben (anderenfalls würde immer die weniger eingeschränkte Version ausgewählt werden).
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

Einige Browser ignorieren noch keine [ungültigen Items](#browser-kompatibilität), und stattdessen scheitert der gesamte `src` Deskriptor, wenn ein Wert ungültig ist.
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

### Überprüfen, ob der Nutzeragent eine Schriftart unterstützt

Das folgende Beispiel zeigt, wie überprüft werden kann, ob der Nutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewandt, wenn der Nutzeragent die `color-COLRv1` Technologie unterstützt.

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
