---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert eine benutzerdefinierte Schriftart zur Anzeige von Text; diese Schriftart kann entweder von einem entfernten Server oder einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

## Syntax

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
}
```

### Deskriptoren

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Definiert die Ascent-Metrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Descent-Metrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und verwendbar ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Wert für Schriftart-Eigenschaften verwendet wird. Ein `font-family` Name ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}} Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, beispielsweise `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}} Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, beispielsweise `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}} Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, beispielsweise `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung über erweiterte typografische Features in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die niedrigstufige Steuerung über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstaben umfassenden Achsnamen der zu variierenden Features zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphen-Konturen und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert das Harmonisieren der Designs verschiedener Schriftarten bei derselben Schriftgröße.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Referenzen zu Schriftressourcen inklusive Hinweisen zum Schriftformat und zur Technologie an. Ein `src` ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, damit die auf dem Benutzergerät installierte Kopie der Schriftart verwendet wird, sofern verfügbar. Andernfalls wird eine Kopie der Schriftart heruntergeladen, wenn sie auf dem Gerät des Benutzers nicht gefunden wird.

Wenn die `local()` Funktion bereitgestellt wird, um einen Schriftartnamen anzugeben, nach dem auf dem Benutzergerät gesucht werden soll, und der {{Glossary("user_agent", "User-Agent")}} findet eine Übereinstimmung, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()` Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen Ressourcen in der Reihenfolge ihrer Listenangaben zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock möglich ist, der nur ein oder mehrere `local()` ohne `url()` enthält.
Wenn spezifischere Schriftarten mit `format()` oder `tech()` Werten gewünscht sind, sollten diese _vor_ Versionen ohne diese Werte aufgelistet werden, da sonst die weniger spezifischen Varianten zuerst ausprobiert und verwendet würden.

Indem Autoren ihre eigenen Schriftarten bereitstellen können, ermöglicht `@font-face` das Erstellen von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (das sind die Schriftarten, die so häufig sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, die gesucht und verwendet werden soll, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen und gleichzeitig ohne Internetverbindung auskommen zu können.

> [!NOTE]
> Fallback-Strategien zum Laden von Schriftarten in älteren Browsern sind auf der [`src` Deskriptor-Seite](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf der obersten Ebene eines CSS, sondern auch innerhalb jeder [CSS bedingten Gruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

### Schrift-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriftarten unterliegen der gleichen Domänen-Einschränkung (Schriftdateien müssen auf derselben Domäne wie die Seite sein, die sie verwendet), es sei denn, es werden [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird das folgende nicht funktionieren:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren einer herunterladbaren Schrift

Dieses Beispiel spezifiziert eine herunterladbare Schrift zur Verwendung und wendet sie auf den gesamten Text des Dokuments an:

```html live-sample___web-font-example
<body>
  This is Bitstream Vera Serif Bold.
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### Spezifizieren von lokalen Schriftalternativen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schrift nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden ausprobiert), wird stattdessen die herunterladbare Schrift namens "MgOpenModernaBold.ttf" verwendet:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Über WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF)
- [FontSquirrel @font-face Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
