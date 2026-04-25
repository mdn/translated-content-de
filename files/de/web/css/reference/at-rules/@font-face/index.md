---
title: "`@font-face` CSS at-rule"
short-title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) legt eine benutzerdefinierte Schriftart fest, mit der Text angezeigt wird; die Schriftart kann entweder von einem externen Server oder einer lokal installierten Schriftart auf dem Computer des Benutzers geladen werden.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff2") format("woff2");
}
```

### Deskriptoren

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Definiert die Anstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und bereit zur Verwendung ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftartwert für Schriftarteigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Kontrolle über OpenType- oder TrueType-Schriftartenvariationen, indem die vier Buchstaben-Achsnamen der variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Referenzen zu Schriftartressourcen an, einschließlich Hinweise auf das Schriftartformat und die Technologie. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codierungspunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, falls verfügbar, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()`-Funktion angeboten wird und einen Schriftartnamen angibt, der auf dem Benutzergerät gesucht werden soll, und der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die über die `url()`-Funktion angegebene Schriftartressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Auflistung zu laden, daher sollte normalerweise `local()` vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur `local()` ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Versionen ohne diese Werte aufgelistet werden, da die weniger spezifische Variante sonst zuerst ausprobiert und verwendet würde.

Für die Webbereitstellung ist es im Allgemeinen am besten, Schriftarten im WOFF2-Format bereitzustellen, da es Schriftarten effizienter komprimiert als ältere Formate wie WOFF oder OpenType, wodurch die Dateigröße reduziert und die Ladezeiten verbessert werden. WOFF2 wird auch von modernen Browsern gut unterstützt, was es zu einer sicheren Standardwahl für die meisten Websites macht.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` das Entwerfen von Inhalten ohne Beschränkung auf die sogenannten "websicheren" Schriftarten (das sind die Schriftarten, die so häufig sind, dass sie als universell verfügbar angesehen werden). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, die gesucht und verwendet werden soll, ermöglicht es, die Schriftart über die Grundfunktionen hinaus anzupassen und dabei zu ermöglichen, dies ohne Internetverbindung zu tun.

> [!NOTE]
> Strategien zum Laden von Schriftarten in älteren Browsern werden auf der [`src`-Deskriptionsseite](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf oberster Ebene von CSS, sondern auch innerhalb einer beliebigen [CSS conditional-group At-Regel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

### Schriftarten-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Web-Schriftarten unterliegen derselben Domänenbeschränkung (Schriftartdateien müssen sich in derselben Domäne wie die sie verwendende Seite befinden), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) werden verwendet, um diese Beschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Beispielsweise funktioniert das folgende nicht:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.woff2");
      font-weight: bold;
    }
  }
  ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren einer herunterladbaren Schriftart

Dieses Beispiel gibt eine herunterladbare Schriftart an, die auf den gesamten Körper des Dokuments angewendet wird:

```html live-sample___web-font-example
<body>
  This is Bitstream Vera Serif Bold.
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### Spezifizieren von lokalen Schriftartalternativen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftartname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schriftart "MgOpenModernaBold.woff2" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Über WOFF](/de/docs/Web/CSS/Guides/Fonts/WOFF)
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
