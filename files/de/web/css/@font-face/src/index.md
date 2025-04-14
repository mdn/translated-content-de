---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}}-At-Regel spezifiziert die Ressource, die Font-Daten enthält. Sie ist erforderlich, damit die `@font-face`-Regel gültig ist.

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

  - : Gibt eine externe Referenz an, die aus einem {{cssxref("url_value", "&lt;url&gt;")}} besteht, gefolgt von optionalen Hinweisen mit den Komponentenwerten `format()` und `tech()`, die das Format und die Schriftarttechnologie der Ressource spezifizieren, auf die die URL verweist. Die Komponenten `format()` und `tech()` sind eine durch Kommata getrennte Liste von bekannten [Schriftformaten](#schriftformate) und Technologien. Wenn ein Benutzeragent die Schrifttechnologie oder -formate nicht unterstützt, überspringt er den Download der Ressourcen. Wenn keine Format- oder Technologiehinweise angegeben sind, wird die Schriftartressource immer heruntergeladen.

- `format()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf das Schriftformat gibt. Wenn der Wert nicht unterstützt wird oder ungültig ist, kann der Browser die Ressource möglicherweise nicht herunterladen, was Bandbreite spart. Wenn weggelassen, wird der Browser die Ressource herunterladen und dann das Format erkennen. Wenn eine Schriftquelle aus Gründen der Rückwärtskompatibilität, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) enthalten ist, eingeschlossen wird, schließen Sie das Format-String in Anführungszeichen ein. Mögliche Werte werden im Abschnitt [Schriftformate](#schriftformate) unten beschrieben.
- `tech()`
  - : Eine optionale Deklaration, die dem `url()`-Wert folgt und dem Benutzeragenten einen Hinweis auf die Schrifttechnologie gibt. Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Font-Technologien](#schrifttechnologien) beschrieben sind.
- `local(<font-face-name>)`

  - : Gibt den Schriftartnamen an, falls die Schriftart auf dem Gerät des Benutzers verfügbar ist. Das Einschließen des Schriftartnamens in Anführungszeichen ist optional.

    > [!NOTE]
    > Bei OpenType- und TrueType-Schriften wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollständigen Schriftartnamen in der Namenstabelle lokal verfügbarer Schriften abzugleichen. Welcher Name verwendet wird, variiert je nach Plattform und Schriftart, daher sollten Sie beide Namen einbeziehen, um sicherzustellen, dass sie plattformübergreifend korrekt übereinstimmen. Plattformsubstitutionen für einen gegebenen Schriftartnamen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Schriften können auf dem Gerät des Benutzers vorinstalliert worden sein oder vom Benutzer aktiv installiert worden sein.
    >
    > Während der Satz vorinstallierter Schriften wahrscheinlich für alle Benutzer eines bestimmten Geräts gleich ist, ist der Satz der vom Benutzer installierten Schriften dies nicht. Indem ein Webdienst den Satz der vom Benutzer installierten Schriften entdeckt, kann er ein {{Glossary("fingerprinting", "Fingerprint")}} des Geräts erstellen und damit die Benutzer im Web verfolgen.
    >
    > Um dies zu verhindern, können Benutzeragenten möglicherweise vom Benutzer installierte Schriften ignorieren, wenn sie `local()` verwenden.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder den Postscript-Namen einer lokal installierten Schriftartengesicht mit dem `local()`-Komponentenwert an, der ein einzelnes Schriftartengesicht innerhalb einer größeren Familie eindeutig identifiziert. Der Name kann optional in Anführungszeichen eingeschlossen werden. Der Schriftartname [ist nicht case-sensitiv](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) kann verwendet werden, um auf die lokal installierten Schriftdaten des Benutzers zuzugreifen — dies schließt höherstufige Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftdateien ein.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommata getrennte Liste externer Referenzen oder lokal installierter Schriftartennamen, wobei jede Ressource mithilfe von `url()` oder `local()` angegeben wird. Wenn eine Schriftart benötigt wird, durchläuft der {{Glossary("user_agent", "Benutzeragent")}} das Set der aufgelisteten Referenzen und verwendet den ersten, den er erfolgreich aktivieren kann. Schriften mit ungültigen Daten oder lokal nicht gefundene Schriftartengesichter werden ignoriert und der Benutzeragent lädt die nächste Schriftart in der Liste.

Wenn mehrere `src`-Deskriptoren festgelegt sind, wird nur die zuletzt deklarierte Regel angewendet, die in der Lage ist, eine Ressource zu laden. Wenn der letzte `src`-Deskriptor eine Ressource laden kann und keine `local()`-Schriftart enthält, kann der Browser externe Schriftdateien herunterladen und die lokale Version ignorieren, auch wenn eine auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig erachtet, werden ignoriert. Einige Browser ignorieren den gesamten Deskriptor, wenn ein einzelnes Element ungültig ist. Dies kann das Design von Fallbacks beeinflussen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

Wie bei anderen URLs in CSS kann die URL relativ sein. In diesem Fall wird sie relativ zum Ort des Stylesheets aufgelöst, das die `@font-face`-Regel enthält. Im Fall von SVG-Schriften zeigt die URL auf ein Element innerhalb eines Dokuments mit SVG-Schriftdefinitionen. Wenn die Elementreferenz weggelassen wird, wird eine Referenz auf die erste definierte Schrift angenommen. Ebenso laden Schriftcontainerformate, die mehr als eine Schriftart enthalten können, nur eine der Schriftarten für eine gegebene `@font-face`-Regel. Fragment-Bezeichner werden verwendet, um anzugeben, welche Schriftart geladen werden soll. Wenn einem Containerformat ein definiertes Fragment-Bezeichner-Schema fehlt, wird ein 1-basiertes Indexierungsschema (z.B. "font-collection#1" für die erste Schriftart, "font-collection#2" für die zweite Schriftart usw.) verwendet.

Wenn die Schriftdatei ein Container für mehrere Schriften ist, wird ein Fragment-Bezeichner eingeschlossen, um anzugeben, welche Teil-Schriftart verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont is the PostScript name of a font in the font file */
src: url(collection.otc#WhichFont);
/* WhichFont is the element id of a font in the SVG Font file */
src: url(fonts.svg#WhichFont);
```

### Schriftformate

Die folgende Tabelle zeigt die gültigen Schrift-Schlüsselwörter und ihre entsprechenden Schriftformate. Um zu prüfen, ob ein Schriftformat von einem Browser in CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-Regel.

| Schlüsselwort       | Schriftformat          | Häufige Erweiterungen |
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
> - `format(svg)` steht für [SVG-Schriften](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts) und `tech(color-SVG)` steht für [OpenType-Schriften mit SVG-Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG-Farbschriften genannt), die völlig unterschiedlich sind.
> - Die Werte `opentype` und `truetype` sind äquivalent, unabhängig davon, ob die Schriftdatei kubische Bézier-Kurven (in der CFF/CFF2-Tabelle) oder quadratische Bézier-Kurven (in der Glyph-Tabelle) verwendet.

Ältere, nicht normalisierte `format()`-Werte haben die folgende äquivalente Syntax; aus Gründen der Rückwärtskompatibilität als String in Anführungszeichen angegeben:

| Alte Syntax                     | Äquivalente Syntax                  |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Schrifttechnologien

Die folgende Tabelle zeigt gültige Werte für den `tech()`-Deskriptor und ihre entsprechenden Schrifttechnologien. Um zu prüfen, ob eine Schrifttechnologie von einem Browser in CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}}-At-Regel.

| Schlüsselwort       | Beschreibung                                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Daten-Tabellen                                                                                |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0-Tabelle                                                              |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1-Tabelle                                                              |
| `color-sbix`        | Standard-Bitmap-Grafik-Tabellen                                                                              |
| `color-svg`         | SVG-mehrfarbige Tabellen                                                                                     |
| `features-aat`      | TrueType `morx` und `kerx`-Tabellen                                                                          |
| `features-graphite` | Graphitfunktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`-Tabellen                                |
| `features-opentype` | OpenType `GSUB` und `GPOS`-Tabellen                                                                          |
| `incremental`       | Inkrementelles Schriftladeverfahren                                                                          |
| `palettes`          | Schriftpaletten mit Hilfe von `font-palette` zur Auswahl einer von vielen Farbpaletten in der Schrift        |
| `variations`        | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, Gewicht, Glyphen usw. |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Beispiele

### Angabe von Schriftressourcen mit url() und local()

Das folgende Beispiel zeigt, wie man zwei Schriftarten mit derselben Schriftfamilie definiert. Die `font-family` wird `MainText` genannt. Die erste Schriftart ist eine reguläre Schrift, und die zweite ist eine fettgedruckte Version derselben Schriftfamilie.

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

### Angabe von Schriftressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie die `tech()` und `format()` Werte genutzt werden, um Schriftressourcen zu spezifizieren. Eine Schrift mit `color-colrv1`-Technologie und `opentype`-Format wird unter Einsatz der `tech()` und `format()` Werte spezifiziert. Eine Farbschrift wird aktiviert, wenn der Benutzeragent sie unterstützt, und eine `opentype` Nicht-Farbschrift wird als Fallback bereitgestellt.

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

Browser sollten ein `@font-face` mit einem einzigen `src`-Deskriptor verwenden, der mögliche Quellen für die Schrift auflistet. Da der Browser die erste Ressource verwenden wird, die er laden kann, sollten Elemente in der Reihenfolge ihrer bevorzugten Nutzung spezifiziert werden.

Im Allgemeinen bedeutet dies, dass lokale Dateien vor entfernten Dateien und Ressourcen mit `format()` oder `tech()`-Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde die weniger eingeschränkte Version immer ausgewählt werden). Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` oben nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und scheitern stattdessen am gesamten `src`-Deskriptor, wenn ein Wert ungültig ist. Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src`-Deskriptoren als Fallbacks spezifizieren. Beachten Sie, dass mehrere `src`-Deskriptoren in umgekehrter Reihenfolge getestet werden, daher haben wir am Ende unseren normalen Deskriptor mit allen Elementen.

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

Das folgende Beispiel zeigt, wie überprüft wird, ob der Benutzeragent eine Schrifttechnologie mit der {{cssxref("@supports")}}-Regel unterstützt. Der CSS-Block innerhalb von `@supports` wird angewendet, wenn der Benutzeragent die `color-COLRv1`-Technologie unterstützt.

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
