---
title: CSS-At-Rule-Deskriptor `src`
short-title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Der [CSS](/de/docs/Web/CSS)-Deskriptor **`src`** für die At-Regel {{cssxref("@font-face")}} gibt die Ressource an, die Schriftdaten enthält. Er ist erforderlich, damit die Regel `@font-face` gültig ist.

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
src: url("path/to/font.woff2") format("woff2");

/* Multiple resources */
src:
  url("path/to/font.woff") format("woff"),
  url("path/to/font.woff2") format("woff2");

/* Multiple resources with font format and technologies */
src:
  url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1),
  url("trickster-outline.woff2") format("woff2");
```

### Werte

- `url()`
  - : Gibt eine externe Referenz an, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mithilfe der Komponentenwerte `format()` und `tech()`, die das Format und die Schrifttechnologie der durch die URL referenzierten Ressource angeben. Die Komponenten `format()` und `tech()` sind durch Kommata getrennte Listen von Zeichenketten bekannter [Schriftformate](#schriftformate) und Technologien. Wenn ein User-Agent die Schrifttechnologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Schriftressource. Wenn keine Hinweise zu Format oder Technologie bereitgestellt werden, wird die Schriftressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die auf den Wert `url()` folgt und dem User-Agent einen Hinweis zum Schriftformat gibt.
    Wenn der Wert nicht unterstützt wird oder ungültig ist, lädt der Browser die Ressource möglicherweise nicht herunter, was potenziell Bandbreite spart.
    Wenn sie weggelassen wird, lädt der Browser die Ressource herunter und erkennt anschließend das Format.
    Wenn eine Schriftquelle zur Abwärtskompatibilität eingeschlossen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, schließen Sie die Formatzeichenkette in Anführungszeichen ein.
    Mögliche Werte werden im folgenden Abschnitt [Schriftformate](#schriftformate) beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die auf den Wert `url()` folgt und dem User-Agent einen Hinweis zur Schrifttechnologie gibt.
    Der Wert für `tech()` kann eines der in [Schrifttechnologien](#schrifttechnologien) beschriebenen Schlüsselwörter sein.
- `local(<font-face-name>)`
  - : Gibt den Schriftnamen an, falls die Schrift auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Schriftnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftnamen in der Namenstabelle lokal verfügbarer Schriften abzugleichen. Welcher Namenstyp verwendet wird, unterscheidet sich je nach Plattform und Schrift. Sie sollten daher beide Namen einschließen, um einen korrekten Abgleich plattformübergreifend sicherzustellen. Plattformspezifische Ersetzungen für einen bestimmten Schriftnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät des Benutzers vorinstalliert worden sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während die Menge vorinstallierter Schriften wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, gilt dies nicht für die Menge benutzerinstallierter Schriften. Durch das Ermitteln der Menge benutzerinstallierter Schriften kann eine Website daher einen {{Glossary("fingerprinting", "Fingerabdruck")}} für das Gerät erstellen, der ihr hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents benutzerinstallierte Schriften bei der Verwendung von `local()` ignorieren.

- `<font-face-name>`
  - : Gibt mithilfe des Komponentenwerts `local()` den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftart an, der eine einzelne Schriftart innerhalb einer größeren Schriftfamilie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingeschlossen werden. Beim Namen der Schriftart [wird die Groß- und Kleinschreibung nicht beachtet](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen — dies umfasst übergeordnete Details wie Namen, Stile und Familien sowie die Rohbytes der zugrunde liegenden Schriftdateien.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommata getrennte Liste externer Referenzen oder lokal installierter Schriftartnamen, wobei jede Ressource mit `url()` oder `local()` angegeben wird.
Wenn eine Schrift benötigt wird, durchläuft der {{Glossary("user_agent", "User-Agent")}} die aufgeführten Referenzen und verwendet die erste, die er erfolgreich aktivieren kann.
Schriften mit ungültigen Daten oder lokal nicht gefundene Schriftarten werden ignoriert, und der User-Agent lädt die nächste Schrift in der Liste.

Wenn mehrere `src`-Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die eine Ressource laden kann.
Wenn der letzte `src`-Deskriptor eine Ressource laden kann und keine `local()`-Schrift enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, selbst wenn sie auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig betrachtet, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein einzelnes Element ungültig ist.
> Dies kann die Gestaltung von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein; in diesem Fall wird sie relativ zum Speicherort des Stylesheets aufgelöst, das die Regel `@font-face` enthält. Im Fall von SVG-Schriften verweist die URL auf ein Element innerhalb eines Dokuments, das SVG-Schriftdefinitionen enthält. Wenn die Elementreferenz weggelassen wird, wird eine Referenz auf die erste definierte Schrift impliziert. Ebenso laden Schriftcontainerformate, die mehr als eine Schrift enthalten können, für eine bestimmte Regel `@font-face` nur eine der Schriften. Fragment-IDs werden verwendet, um anzugeben, welche Schrift geladen werden soll. Wenn einem Containerformat ein definiertes Schema für Fragment-IDs fehlt, wird ein 1-basierendes Indexierungsschema verwendet (z. B. „font-collection#1“ für die erste Schrift, „font-collection#2“ für die zweite Schrift usw.).

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird eine Fragment-ID eingeschlossen, um die zu verwendende Unterschrift anzugeben, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url("collection.otc#WhichFont");
/* WhichFont is the element id of a font in the SVG Font file */
src: url("fonts.svg#WhichFont");
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schlüsselwörter für Schriften und die entsprechenden Schriftformate.
Um innerhalb von CSS zu prüfen, ob ein Schriftformat von einem Browser unterstützt wird, verwenden Sie die Regel {{cssxref("@supports", "@supports")}}.

| Schlüsselwort       | Schriftformat       | Häufige Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbenschriften genannt), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind gleichwertig, unabhängig davon, ob die Schriftdatei kubische Bézierkurven (innerhalb der CFF/CFF2-Tabelle) oder quadratische Bézierkurven (innerhalb der Glyphtabelle) verwendet.

Ältere, nicht normalisierte `format()`-Werte haben die folgende gleichwertige Syntax; sie werden aus Gründen der Abwärtskompatibilität als in Anführungszeichen eingeschlossene Zeichenkette bereitgestellt:

| Alte Syntax                     | Gleichwertige Syntax                |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den Deskriptor `tech()` und die entsprechenden Schrifttechnologien.
Um innerhalb von CSS zu prüfen, ob eine Schrifttechnologie von einem Browser unterstützt wird, verwenden Sie die At-Regel {{cssxref("@supports", "@supports")}}.

| Schlüsselwort       | Beschreibung                                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Tabellen für Farbbitmapdaten                                                                                 |
| `color-colrv0`      | Mehrfarbige Glyphen über eine COLR-Version-0-Tabelle                                                         |
| `color-colrv1`      | Mehrfarbige Glyphen über eine COLR-Version-1-Tabelle                                                         |
| `color-sbix`        | Standardtabellen für Bitmapgrafiken                                                                          |
| `color-svg`         | Mehrfarbige SVG-Tabellen                                                                                     |
| `features-aat`      | TrueType-Tabellen `morx` und `kerx`                                                                          |
| `features-graphite` | Graphite-Funktionen, nämlich die Tabellen `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`                          |
| `features-opentype` | OpenType-Tabellen `GSUB` und `GPOS`                                                                          |
| `incremental`       | Inkrementelles Laden von Schriften                                                                           |
| `palettes`          | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen           |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, -stärke, Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Schriftressourcen mit url() und local() angeben

Das folgende Beispiel zeigt, wie zwei Schriftarten mit derselben Schriftfamilie definiert werden. Die `font-family` heißt `MainText`. Die erste Schriftart ist eine normale Schrift, die zweite eine fette Version derselben Schriftfamilie.

```css
/* Defining a regular font face */
@font-face {
  font-family: "MainText";
  src:
    local("Futura-Medium"),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.woff2") format("woff2");
}

/* Defining a different bold font face for the same family */
@font-face {
  font-family: "MainText";
  src:
    local("Gill Sans Bold") /* full font name */,
    local("GillSans-Bold") /* postscript name */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.woff2") format("woff2"),
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

### Schriftressourcen mit Werten von tech() und format() angeben

Das folgende Beispiel zeigt, wie die Werte `tech()` und `format()` verwendet werden, um Schriftressourcen anzugeben.
Eine Schrift mit der Technologie `color-colrv1` und dem Format `opentype` wird mithilfe der Werte `tech()` und `format()` angegeben.
Eine Farbschrift wird aktiviert, wenn der User-Agent sie unterstützt, und eine nicht farbige `opentype`-Schrift wird als Fallback bereitgestellt.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1),
    url("trickster-outline.woff2") format("woff2");
}

/* Using the font face */
p {
  font-family: "Trickster", fantasy;
}
```

### Fallbacks für ältere Browser angeben

Browser sollten ein `@font-face` mit einem einzelnen `src`-Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten Elemente in der Reihenfolge Ihrer bevorzugten Verwendung angegeben werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor Remote-Dateien erscheinen sollten und dass Ressourcen mit Einschränkungen durch `format()` oder `tech()` vor Ressourcen erscheinen sollten, die keine solchen Einschränkungen haben (andernfalls würde immer die weniger eingeschränkte Version ausgewählt).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental),
    url("MgOpenModernaBold.woff2") format("woff2");
}
```

Ein Browser, der `tech()` oben nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser [ignorieren ungültige Elemente](#browser-kompatibilität) noch nicht, sondern lassen stattdessen den gesamten `src`-Deskriptor fehlschlagen, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge versucht werden, sodass am Ende unser normaler Deskriptor mit allen Elementen steht.

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.woff2") format("woff2");
  src: url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.woff2") format("woff2") tech(incremental),
    url("MgOpenModernaBold.woff2") format("woff2");
}
```

### Prüfen, ob der User-Agent eine Schrift unterstützt

Das folgende Beispiel zeigt, wie Sie mit der Regel {{cssxref("@supports")}} prüfen können, ob der User-Agent eine Schrifttechnologie unterstützt.
Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der User-Agent die Technologie `color-COLRv1` unterstützt.

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.woff2") format("woff2") tech(color-COLRv1);
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
