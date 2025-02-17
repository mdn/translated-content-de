---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert eine benutzerdefinierte Schriftart, mit der Text dargestellt wird. Die Schriftart kann entweder von einem Remote-Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Legt fest, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Wert für die Schriftpropperties verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, z. B. `font-stretch: 50% 200%;`.
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`.
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich zu spezifizieren, der von einer Schriftart unterstützt wird, z. B. `font-weight: 100 400;`.
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Steuerung über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die Low-Level-Steuerung von OpenType- oder TrueType-Schriftvariationen durch Angabe der vierstelligen Achsennamen und ihrer entsprechenden Variationswerte.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Line-Gap-Metrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphen-Umrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten bei derselben Schriftgröße.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen an, einschließlich Hinweise auf das Schriftformat und die Technologie. Eine `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich von Unicode-Codepunkten, die von der Schriftart verwendet werden sollen.

## Beschreibung

Es ist üblich, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die lokal installierte Kopie der Schriftart des Benutzers verwendet wird, falls diese verfügbar ist, und andernfalls eine Kopie der Schriftart heruntergeladen wird.

Wenn die `local()`-Funktion bereitgestellt wird, die einen Schriftnamen angibt, der auf dem Gerät des Benutzers gesucht wird, und der {{Glossary("user_agent", "User Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die mit der `url()`-Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden. Daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur eine oder mehrere `local()`-Angaben ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht enthalten, da andernfalls die weniger spezifische Variante zuerst getestet und verwendet würde.

Durch die Möglichkeit, eigene Schriftarten bereitzustellen, ermöglicht `@font-face` die Gestaltung von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten beschränkt zu sein (d. h. die Schriftarten, die so häufig sind, dass sie als universell verfügbar gelten). Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben, die verwendet werden soll, bietet die Möglichkeit, die Schriftart über die Grundlagen hinaus anzupassen, ohne dabei auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Strategien zum Laden von Schriftarten in älteren Browsern werden auf der Seite zum [`src`-Deskriptor](/de/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die At-Regel `@font-face` kann nicht nur auf oberster Ebene von CSS, sondern auch innerhalb jeder [CSS Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

### MIME-Typen für Schriftarten

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriftarten unterliegen denselben Domain-Beschränkungen (Schriftdateien müssen sich auf derselben Domain wie die Seite befinden, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS) werden verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selektors deklariert werden. Zum Beispiel funktioniert Folgendes nicht:

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

### Spezifikation einer herunterladbaren Schriftart

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Körper des Dokuments an:

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

### Spezifikation lokaler Schriftersatzoptionen

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet. Wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden versucht), wird stattdessen die herunterladbare Schriftart namens "MgOpenModernaBold.ttf" verwendet:

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
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
