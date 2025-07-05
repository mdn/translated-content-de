---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} Regel spezifiziert die Ressource, die Font-Daten enthält. Es ist erforderlich, dass die `@font-face` Regel gültig ist.

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
  - : Gibt eine externe Referenz bestehend aus einem {{cssxref("url_value", "&lt;url&gt;")}} an, gefolgt von optionalen Hinweisen mithilfe der `format()` und `tech()` Komponentenwerte, die das Format und die Schrifttechnologie der durch die URL referenzierten Ressource spezifizieren. Die `format()` und `tech()` Komponenten sind eine kommagetrennte Liste von Zeichenketten bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein User-Agent die Schrifttechnologie oder -formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den User-Agent auf das Schriftformat gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was Bandbreite sparen kann.
    Falls weggelassen, wird der Browser die Ressource herunterladen und dann das Format erkennen.
    Wenn eine Schriftquelle aus Gründen der Rückwärtskompatibilität enthalten wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) ist, schließen Sie den Formatstring in Anführungszeichen ein.
    Mögliche Werte werden im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()` Wert folgt und einen Hinweis für den User-Agent auf die Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der in [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`
  - : Gibt den Schriftnamen an, sollte die Schrift auf dem Gerät des Benutzers verfügbar sein.
    Das Einrahmen des Schriftnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftnamen in der Namens-Tabelle lokal verfügbarer Schriften zuzuordnen. Welcher Typ von Namen verwendet wird, variiert je nach Plattform und Schrift, daher sollten Sie beide dieser Namen einschließen, um eine korrekte Zuordnung über Plattformen hinweg sicherzustellen. Plattformsubstitutionen für einen gegebenen Schriftnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät des Benutzers vorinstalliert worden sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während die Menge der vorinstallierten Schriften wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist die Menge der von Benutzern installierten Schriften nicht. Durch das Ermitteln der Menge der von Benutzern installierten Schriften kann eine Seite daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen und dadurch die Nachverfolgung von Benutzern im Web unterstützen.
    >
    > Um dies zu verhindern, können User-Agenten beim Verwenden von `local()` die von Benutzern installierten Schriften ignorieren.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen einer lokal installierten Schrift mithilfe des `local()` Komponentenwerts an, der eine einzelne Schrift innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen gesetzt werden. Der Schriftgesichtsname [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Lokale Font-Zugriffs-API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Font-Daten des Benutzers zuzugreifen — dies schließt höherwertigere Details wie Namen, Stile und Familien ein sowie die Rohbytes der zugrunde liegenden Font-Dateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, kommagetrennte Liste externer Referenzen oder lokal installierten Schriftgesichtsnamen, wobei jede Ressource mithilfe von `url()` oder `local()` angegeben wird.
Wenn eine Schrift benötigt wird, durchläuft der {{Glossary("user_agent", "Benutzeragent")}} die Reihe der aufgelisteten Referenzen und verwendet die zuerst erfolgreich aktivierte.
Schriften mit ungültigen Daten oder lokal nicht gefundene Schriftgesichter werden ignoriert, und der Benutzeragent lädt die nächste Schrift in der Liste.

Wenn mehrere `src` Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keine `local()` Schrift enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann sich auf das Design von Fallbacks auswirken.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Speicherort des Stylesheets aufgelöst wird, das die `@font-face` Regel enthält. Im Falle von SVG-Schriften zeigt die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn die Elementreferenz weggelassen wird, ist eine Referenz auf die zuerst definierte Schrift impliziert. Ähnlich laden Schriftcontainerformate, die mehr als eine Schrift enthalten können, nur eine der Schriften für eine gegebene `@font-face` Regel. Fragmentbezeichner werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn einem Containerformat ein definiertes Fragmentbezeichnerschema fehlt, wird ein 1-basiertes Indexierungsschema verwendet (z.B. "font-collection#1" für die erste Schrift, "font-collection#2" für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragmentbezeichner eingefügt, um die zu verwendende Teil-Schrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und deren entsprechenden Schriftformate.
Um zu überprüfen, ob ein Schriftformat von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Schriftformat          | Gängige Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bezierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bezierkurven (innerhalb der Glyphen-Tabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als Zeichenkette in Anführungszeichen bereitgestellt:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Schrifttechnologien.
Um zu überprüfen, ob eine Schrifttechnologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Beschreibung                                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                   |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0-Tabelle                                                                 |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1-Tabelle                                                                 |
| `color-sbix`        | Standard-Bitmap-Grafiktabellen                                                                                  |
| `color-svg`         | SVG-Mehrfarbtabellen                                                                                            |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                                             |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                 |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                                             |
| `incremental`       | Inkrementelles Schriftladen                                                                                     |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen              |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, Gewichtung, Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mittels url() und local() angeben

Das folgende Beispiel zeigt, wie zwei Schriftgesichter mit derselben Schriftfamilie definiert werden. Die `font-family` wird `MainText` genannt. Das erste Schriftgesicht hat eine reguläre Schrift, und das zweite ist eine fettgedruckte Version derselben Schriftfamilie.

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

### Schriftressourcen mittels tech() und format() Werten angeben

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte verwendet werden, um Schriftressourcen anzugeben.
Eine Schrift, die `color-colrv1` Technologie und `opentype` Format verwendet, wird mit den `tech()` und `format()` Werten spezifiziert.
Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und ein `opentype` Nicht-Farbfont wird als Fallback bereitgestellt.

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

Browser sollten eine `@font-face` Regel mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwenden wird, die er laden kann, sollten die Elemente in der Reihenfolge Ihrer Präferenz für ihre Verwendung spezifiziert werden.

Generell bedeutet dies, dass lokale Dateien vor entfernten Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (andernfalls würde immer die weniger eingeschränkte Version ausgewählt).
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

### Überprüfen, ob der Benutzeragent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie Sie überprüfen können, ob der Benutzeragent eine Schrifttechnologie mithilfe der {{cssxref("@supports")}} Regel unterstützt.
Der Block von CSS innerhalb `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1` Technologie unterstützt.

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

{{Spezifikationen}}

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
