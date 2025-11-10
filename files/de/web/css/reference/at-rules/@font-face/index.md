---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) spezifiziert eine benutzerdefinierte Schriftart, mit der Text angezeigt werden soll; die Schrift kann entweder von einem Remote-Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Aufstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abstiegsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und bereit zur Verwendung ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Spezifiziert einen Namen, der als Schriftartwert für Schriftarteigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte, um einen Bereich anzugeben, der von einer Schriftart unterstützt wird, z. B. `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriften.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht die Low-Level-Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vierstelligen Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenabstandsmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriften, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Referenzen zu Schriftressourcen an, einschließlich Hinweisen zum Schriftformat und zur Technologie. Ein `src` ist erforderlich, damit die `@font-face` Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Codepunkte, die aus der Schrift verwendet werden sollen.

## Beschreibung

Es ist üblich, `url()` und `local()` zusammen zu verwenden, sodass die auf dem Gerät des Benutzers installierte Kopie der Schrift verwendet wird, wenn verfügbar, und ansonsten wird eine Kopie der Schrift heruntergeladen, wenn sie auf dem Benutzergerät nicht gefunden wird.

Wenn die `local()`-Funktion bereitgestellt wird, die einen Schriftartnamen angibt, der auf dem Gerät des Benutzers gesucht werden soll, und wenn der {{Glossary("user_agent", "User-Agent")}} eine Übereinstimmung findet, wird diese lokale Schriftart verwendet. Andernfalls wird die Schriftressource, die über die `url()`-Funktion angegeben ist, heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur eine oder mehrere `local()` ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriften mit `format()`- oder `tech()`-Werten gewünscht sind, sollten diese _vor_ Varianten ohne diese Werte aufgelistet werden, da sonst die weniger spezifische Variante zuerst ausprobiert und verwendet wird.

Indem Autoren ihre eigene Schriftarten bereitstellen können, ermöglicht `@font-face` das Design von Inhalten, ohne auf die sogenannten „web-sicheren“ Schriften (d.h. die Schriften, die so häufig sind, dass sie als allgemein verfügbar angesehen werden) beschränkt zu sein. Die Möglichkeit, den Namen einer lokal installierten Schrift anzugeben, die gesucht und verwendet werden soll, ermöglicht es, die Schrift über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Fallback-Strategien zum Laden von Schriften in älteren Browsern werden auf der [`src`-Deskriptorseite](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face` At-Regel kann nicht nur auf oberster Ebene eines CSS, sondern auch innerhalb einer beliebigen [CSS-Bedingungsgruppen-At-Regel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

### Schrift-MIME-Typen

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Anmerkungen

- Webfonts unterliegen derselben Domain-Beschränkung (Schriftdateien müssen sich auf derselben Domain befinden wie die Seite, die sie verwendet), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) werden verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel wird Folgendes nicht funktionieren:

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

### Eine herunterladbare Schriftart spezifizieren

Dieses Beispiel gibt eine herunterladbare Schriftart an, die verwendet werden soll, und wendet sie auf den gesamten Body des Dokuments an:

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

### Lokale Schriftalternativen angeben

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; wenn der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden versucht), wird stattdessen die herunterladbare Schrift "MgOpenModernaBold.ttf" verwendet:

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

- [Über WOFF](/de/docs/Web/CSS/Guides/Fonts/WOFF)
- [FontSquirrel @font-face-Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriften mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
