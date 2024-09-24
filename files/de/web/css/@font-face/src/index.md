---
title: src
slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Der **`src`** CSS-Deskriptor für die {{cssxref("@font-face")}} at-rule gibt die Ressource an, die Fontdaten enthält. Es ist erforderlich, damit die `@font-face` Regel gültig ist.

## Syntax

```css
/* <url> Werte */
src: url(https://somewebsite.com/path/to/font.woff); /* Absoluter URL */
src: url(path/to/font.woff); /* Relativer URL */
src: url("path/to/font.woff"); /* Zitierter URL */
src: url(path/to/svgFont.svg#example); /* Fragment, das den Font identifiziert */

/* <font-face-name> Werte */
src: local(font); /* Unzitierter Name */
src: local(some font); /* Name mit Leerzeichen */
src: local("font"); /* Zitierter Name */
src: local("some font"); /* Zitierter Name mit Leerzeichen */

/* <tech(<font-tech>)> Werte */
src: url(path/to/fontCOLRv1.otf) tech(color-COLRv1);
src: url(path/to/fontCOLR-svg.otf) tech(color-SVG);

/* <format(<font-format>)> Werte */
src: url(path/to/font.woff) format("woff");
src: url(path/to/font.otf) format("opentype");

/* Mehrere Ressourcen */
src:
  url(path/to/font.woff) format("woff"),
  url(path/to/font.otf) format("opentype");

/* Mehrere Ressourcen mit Font-Format und Technologien */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### Werte

- `url()`

  - : Gibt einen externen Verweis bestehend aus einem {{cssxref("&lt;url&gt;")}} an, gefolgt von optionalen Hinweisen mittels der `format()` und `tech()` Komponentenwerte, die das Format und die Font-Technologie der durch die URL referenzierten Ressource spezifizieren. Die `format()` und `tech()` Komponenten sind eine durch Kommas getrennte Liste von Strings bekannter [Font-Formate](#font-formate) und Technologien. Wenn ein User-Agent die Font-Technologie oder Formate nicht unterstützt, überspringt er das Herunterladen der Font-Ressource. Wenn keine Format- oder Technologiehinweise angegeben werden, wird die Font-Ressource immer heruntergeladen.

- `format()`
  - : Eine optionale Angabe, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf das Font-Format gibt.
    Wenn der Wert nicht unterstützt oder ungültig ist, kann der Browser die Ressource nicht herunterladen, was potenziell Bandbreite spart.
    Wenn weggelassen, lädt der Browser die Ressource herunter und erkennt dann das Format.
    Wenn eine Font-Quelle für Rückwärtskompatibilität eingeschlossen wird, die nicht in der Liste der [definierten Schlüsselwörter](#formale_syntax) ist, schließen Sie die Format-String in Anführungszeichen ein.
    Mögliche Werte sind im Abschnitt [Font-Formate](#font-formate) unten beschrieben.

- `tech()`
  - : Eine optionale Angabe, die dem `url()` Wert folgt und dem User-Agent einen Hinweis auf die Font-Technologie gibt.
    Der Wert für `tech()` kann eines der Schlüsselwörter sein, die in [Font-Technologien](#font-technologien) beschrieben sind.

- `local(<font-face-name>)`

  - : Gibt den Font-Namen an, falls der Font auf dem Gerät des Benutzers verfügbar ist.
    Das Einschließen des Font-Namens in Anführungszeichen ist optional.

    > [!NOTE]
    > Für OpenType und TrueType Fonts wird `<font-face-name>` verwendet, um entweder den Postscript-Namen oder den vollen Font-Namen in der Namens-Tabelle lokal verfügbarer Fonts abzugleichen. Welcher Typ von Namen verwendet wird, variiert je nach Plattform und Font, daher sollten Sie beide Namen einfügen, um eine korrekte Übereinstimmung über Plattformen sicherzustellen. Plattformsubstitutionen für einen gegebenen Font-Namen dürfen nicht verwendet werden.

    > [!NOTE]
    > Lokal verfügbare Fonts können auf dem Gerät des Benutzers vorinstalliert worden sein oder aktiv vom Benutzer installiert worden sein.
    >
    > Während die Menge der vorinstallierten Fonts bei allen Benutzern eines bestimmten Geräts wahrscheinlich gleich ist, ist die Menge der benutzerinstallierten Fonts nicht gleich. Durch das Erkennen der Menge der benutzerinstallierten Fonts kann eine Website daher einen {{glossary("fingerprinting", "Fingerprint")}} des Geräts erstellen, was der Website hilft, Benutzer im Web zu verfolgen.
    >
    > Um dies zu verhindern, können User-Agents benutzerinstallierte Fonts ignorieren, wenn `local()` verwendet wird.

- `<font-face-name>`
  - : Gibt den vollständigen Namen oder Postscript-Namen eines lokal installierten Font-Faces mithilfe des `local()` Komponentenwerts an, der ein einzelnes Font-Face innerhalb einer größeren Familie eindeutig identifiziert.
    Der Name kann optional in Anführungszeichen eingeschlossen werden. Der Font-Face-Name [ist nicht case-sensitive](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> Die {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} kann verwendet werden, um auf die lokal installierten Font-Daten des Benutzers zuzugreifen — dies schließt höherstufige Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Font-Dateien ein.

## Beschreibung

Der Wert dieses Deskriptors ist eine priorisierte, durch Kommas getrennte Liste von externen Referenzen oder lokal installierten Font-Face-Namen, wobei jede Ressource mit `url()` oder `local()` spezifiziert wird.
Wenn ein Font benötigt wird, iteriert der {{glossary("User-Agent")}} über die Liste der Referenzen, beginnend mit der ersten, die er erfolgreich aktivieren kann.
Fonts mit ungültigen Daten oder nicht gefundenen lokalen Font-Faces werden ignoriert und der User-Agent lädt den nächsten Font in der Liste.

Wenn mehrere `src` Deskriptoren gesetzt sind, wird nur die zuletzt deklarierte Regel angewendet, die eine Ressource laden kann.
Wenn der letzte `src` Deskriptor eine Ressource laden kann und keinen `local()` Font enthält, kann der Browser externe Font-Dateien herunterladen und die lokale Version ignorieren, selbst wenn diese auf dem Gerät verfügbar ist.

> [!NOTE]
> Werte innerhalb von Deskriptoren, die der Browser als ungültig ansieht, werden ignoriert.
> Einige Browser ignorieren den gesamten Deskriptor, wenn ein Element ungültig ist, selbst wenn nur ein Element ungültig ist.
> Dies kann das Design von Fallbacks beeinflussen.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Wie bei anderen URLs in CSS kann die URL relativ sein, in welchem Fall sie relativ zum Standort des Stylesheets mit der `@font-face` Regel aufgelöst wird. Im Fall von SVG Fonts verweist die URL auf ein Element innerhalb eines Dokuments mit SVG Font-Definitionen. Wenn der Elementverweis weggelassen wird, wird ein Verweis auf den ersten definierten Font angenommen. Ebenso laden Font-Container-Formate, die mehr als einen Font enthalten können, nur einen der Fonts für eine gegebene `@font-face` Regel. Fragment-Identifikatoren werden verwendet, um anzugeben, welcher Font geladen werden soll. Wenn ein Container-Format kein definiertes Fragment-Identifikator-Schema hat, wird ein einfaches Indexierungsschema (beginnend bei 1) verwendet (z. B. "font-collection#1" für den ersten Font, "font-collection#2" für den zweiten Font usw.).

Wenn die Font-Datei ein Container für mehrere Fonts ist, wird ein Fragment-Identifikator hinzugefügt, um den Unter-Font anzugeben, der verwendet werden soll, wie unten gezeigt:

```css
/* WhichFont ist der PostScript Name eines Fonts in der Font-Datei */
src: url(collection.otc#WhichFont);
/* WhichFont ist die Element-ID eines Fonts in der SVG Font-Datei */
src: url(fonts.svg#WhichFont);
```

### Font-Formate

Die folgende Tabelle zeigt die gültigen Font-Schlüsselwörter und ihre entsprechenden Font-Formate.
Um zu prüfen, ob ein Font-Format von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie die {{cssxref("@supports", "@supports")}} Regel.

| Schlüsselwort       | Font-Format           | Übliche Erweiterungen |
| ------------------- | --------------------- | ---------------------- |
| `collection`        | OpenType Collection   | .otc, .ttc             |
| `embedded-opentype` | Eingebettetes OpenType | .eot                   |
| `opentype`          | OpenType              | .otf, .ttf             |
| `svg`               | SVG Font (veraltet)   | .svg, .svgz            |
| `truetype`          | TrueType              | .ttf                   |
| `woff`              | WOFF 1.0              | .woff                  |
| `woff2`             | WOFF 2.0              | .woff2                 |

> [!NOTE]
>
> - `format(svg)` steht für [SVG Fonts](/de/docs/Web/SVG/Tutorial/SVG_fonts), und `tech(color-SVG)` steht für [OpenType Fonts mit SVG Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (auch OpenType-SVG Farbschriften genannt), die völlig unterschiedlich sind.
> - Die `opentype` und `truetype` Werte sind gleichwertig, unabhängig davon, ob die Font-Datei kubische Bézierkurven (innerhalb der CFF/CFF2 Tabelle) oder quadratische Bézierkurven (innerhalb der Glyphentabelle) verwendet.

Ältere nicht normalisierte `format()` Werte haben die folgenden gleichwertigen Syntaxe; aus Gründen der Rückwärtskompatibilität als String in Anführungszeichen bereitgestellt:

| Alte Syntax                   | Entsprechende Syntax              |
| ----------------------------- | --------------------------------- |
| `format("woff2-variations")`  | `format(woff2) tech(variations)`  |
| `format("woff-variations")`   | `format(woff) tech(variations)`   |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Font-Technologien

Die folgende Tabelle zeigt gültige Werte für den `tech()` Deskriptor und ihre entsprechenden Font-Technologien.
Um zu prüfen, ob eine Font-Technologie von einem Browser innerhalb von CSS unterstützt wird, verwenden Sie das {{cssxref("@supports", "@supports")}} at-rule.

| Schlüsselwort       | Beschreibung                                                                              |
| :------------------ | :----------------------------------------------------------------------------------------- |
| `color-cbdt`        | Farbige Bitmap-Datentabellen                                                               |
| `color-colrv0`      | Mehrfarbige Glyphen über COLR-Version 0 Tabelle                                            |
| `color-colrv1`      | Mehrfarbige Glyphen über COLR-Version 1 Tabelle                                            |
| `color-sbix`        | Standardische Bitmap-Grafiktabellen                                                        |
| `color-svg`         | Mehrfarbige SVG-Tabellen                                                                   |
| `features-aat`      | TrueType `morx` und `kerx` Tabellen                                                        |
| `features-graphite` | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen           |
| `features-opentype` | OpenType `GSUB` und `GPOS` Tabellen                                                        |
| `incremental`       | Inkrementelles Font-Loading                                                                |
| `palettes`          | Font-Paletten durch `font-palette` zur Auswahl einer von vielen Farbpaletten im Font      |
| `variations`        | Font-Variationen in TrueType und OpenType Fonts zur Steuerung der Font-Achse, des Gewichts, der Glyphen usw. |

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

### Spezifizieren von Font-Ressourcen mit url() und local()

Das unten stehende Beispiel zeigt, wie man zwei Font-Faces mit derselben Font-Familie definiert. Die `font-family` heißt `MainText`. Das erste Font-Face ist eine reguläre Schrift, und das zweite ist eine fettgedruckte Version der gleichen Font-Familie.

```css
/* Definition eines regulären Font-Faces */
@font-face {
  font-family: MainText;
  src:
    local(Futura-Medium),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* Definition eines anderen fettgedruckten Font-Faces für dieselbe Familie */
@font-face {
  font-family: MainText;
  src:
    local(Gill Sans Bold) /* voller Font-Name */,
    local(GillSans-Bold) /* Postscript-Name */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.otf") format("opentype"),
    url("GillSansBold.svg#MyFontBold"); /* Verweis auf ein SVG-Font-Fragment mittels ID */
  font-weight: bold;
}

/* Verwendung des regulären Font-Faces */
p {
  font-family: MainText;
}

/* Font-Familie wird vererbt, aber fette Schriften werden benutzt */
p.bold {
  font-weight: bold;
}
```

### Spezifizieren von Font-Ressourcen mit tech() und format() Werten

Das folgende Beispiel zeigt, wie man die `tech()` und `format()` Werte benutzt, um Font-Ressourcen zu spezifizieren.
Ein Font, der `color-colrv1` Technologie und `opentype` Format verwendet, wird mit den `tech()` und `format()` Werten spezifiziert.
Ein Farbfont wird aktiviert, wenn der User-Agent ihn unterstützt, und ein `opentype` Nicht-Farbfont wird als Fallback bereitgestellt.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* Verwendung des Font-Faces */
p {
  font-family: "Trickster";
}
```

### Spezifizieren von Fallbacks für ältere Browser

Browser sollten eine `@font-face` mit einem einzigen `src` Deskriptor verwenden, der mögliche Quellen für den Font auflistet.
Da der Browser die erste Ressource verwendet, die er laden kann, sollten Elemente in der Reihenfolge ihrer bevorzugten Verwendung angegeben werden.

In der Regel bedeutet dies, dass lokale Dateien vor entfernten Dateien erscheinen sollten und dass Ressourcen mit `format()` oder `tech()` Einschränkungen vor Ressourcen erscheinen sollten, die diese nicht haben (ansonsten würde die weniger eingeschränkte Version immer ausgewählt werden).
Zum Beispiel:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Ein Browser, der `tech()` im obigen Beispiel nicht unterstützt, sollte das erste Element ignorieren und versuchen, die zweite Ressource zu laden.

Einige Browser ignorieren noch nicht [ungültige Elemente](#browser-kompatibilität) und scheitern stattdessen an der gesamten `src` Descriptor, wenn ein Wert ungültig ist.
Wenn Sie mit diesen Browsern arbeiten, können Sie mehrere `src` Deskriptoren als Fallbacks angeben.
Beachten Sie, dass mehrere `src` Deskriptoren in umgekehrter Reihenfolge getestet werden, sodass wir am Ende unsere normale Deskriptor mit allen Elementen haben.

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

### Prüfen, ob der User Agent einen Font unterstützt

Das folgende Beispiel zeigt, wie man prüft, ob der User Agent eine Font-Technologie mit der {{cssxref("@supports")}} Regel unterstützt.
Der CSS Block innerhalb von `@supports` wird angewendet, wenn der User Agent die `color-COLRv1` Technologie unterstützt.

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
