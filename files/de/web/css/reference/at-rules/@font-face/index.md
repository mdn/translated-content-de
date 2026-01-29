---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: 7d6315943bf1032e19c65bca591e28d2117e9bec
---

Die **`@font-face`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) definiert eine benutzerdefinierte Schriftart zur Anzeige von Text; die Schriftart kann entweder von einem entfernten Server oder von einer lokal auf dem Computer des Benutzers installierten Schriftart geladen werden.

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
  - : Definiert die Aufwärtsmetrik für die Schriftart.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Definiert die Abwärtsmetrik für die Schriftart.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und einsatzbereit ist.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Gibt einen Namen an, der als Schriftart-Wert für Schriftart-Eigenschaften verwendet wird. Ein `font-family`-Name ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Ein {{cssxref("font-stretch")}}-Wert. Akzeptiert zwei Werte zur Angabe eines Bereichs, der von einer Schriftart unterstützt wird, z.B. `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Ein {{cssxref("font-style")}}-Wert. Akzeptiert zwei Werte zur Angabe eines Bereichs, der von einer Schriftart unterstützt wird, z.B. `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Ein {{cssxref("font-weight")}}-Wert. Akzeptiert zwei Werte zur Angabe eines Bereichs, der von einer Schriftart unterstützt wird, z.B. `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ermöglicht die Kontrolle über erweiterte typografische Funktionen in OpenType-Schriftarten.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ermöglicht eine niedrige Kontrolle über OpenType- oder TrueType-Schriftvariationen, indem die vier Buchstaben umfassenden Achsennamen der zu variierenden Funktionen zusammen mit ihren Variationswerten angegeben werden.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Definiert die Zeilenlückenmetrik für die Schriftart.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Definiert einen Multiplikator für Glyphen-Umrisse und Metriken, die mit dieser Schriftart verknüpft sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.
- {{cssxref("@font-face/src", "src")}}
  - : Gibt Verweise auf Schriftressourcen einschließlich Hinweise zum Schriftformat und zur Technologie an. Ein `src` ist erforderlich, damit die `@font-face`-Regel gültig ist.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Der Bereich der Unicode-Zeichen, die aus der Schriftart verwendet werden sollen.

## Beschreibung

Es ist gängig, sowohl `url()` als auch `local()` zusammen zu verwenden, sodass die installierte Kopie der Schriftart des Benutzers verwendet wird, falls verfügbar, andernfalls wird eine Kopie der Schriftart heruntergeladen, wenn sie auf dem Gerät des Benutzers nicht gefunden wird.

Wenn die `local()`-Funktion bereitgestellt wird, um einen Schriftartnamen auf dem Gerät des Benutzers zu suchen, und der {{Glossary("user_agent", "Benutzer-Agent")}} einen Treffer findet, wird diese lokale Schriftart verwendet. Andernfalls wird die über die `url()`-Funktion angegebene Schriftressource heruntergeladen und verwendet.

Browser versuchen, Ressourcen in der Reihenfolge ihrer Listendeklaration zu laden, daher sollte `local()` normalerweise vor `url()` geschrieben werden. Beide Funktionen sind optional, sodass ein Regelblock, der nur ein oder mehrere `local()` ohne `url()` enthält, möglich ist.
Wenn spezifischere Schriftarten mit `format()` oder `tech()`-Werten gewünscht werden, sollten diese _vor_ Versionen aufgelistet werden, die diese Werte nicht haben, da sonst die weniger spezifische Variante zuerst ausprobiert und verwendet würde.

Für die Web-Bereitstellung ist es im Allgemeinen am besten, Schriftarten im WOFF2-Format zu dienen, da es Schriftarten effizienter komprimiert als ältere Formate wie WOFF oder OpenType und die Dateigröße reduziert und die Ladezeiten verbessert. WOFF2 wird auch gut in modernen Browsern unterstützt und ist für die meisten Websites eine sichere Standardwahl.

Indem Autoren ihre eigenen Schriftarten bereitstellen dürfen, ermöglicht `@font-face` das Designen von Inhalten, ohne auf die sogenannten "web-sicheren" Schriftarten (also solche, die so verbreitet sind, dass sie als auf universeller Ebene verfügbar gelten) beschränkt zu sein. Die Möglichkeit, den Namen einer lokal installierten Schriftart anzugeben und zu verwenden, ermöglicht es, die Schriftart über die Grundlagen hinaus anzupassen, ohne auf eine Internetverbindung angewiesen zu sein.

> [!NOTE]
> Strategien zur Bereitstellung von Schriftarten in älteren Browsern werden auf der Seite des [`src`-Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers) beschrieben.

Die `@font-face`-At-Regel kann nicht nur auf oberster Ebene eines CSS verwendet werden, sondern auch innerhalb jeder [CSS-Konditional-Gruppenregel](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors).

### MIME-Typen für Schriftarten

| Format                 | MIME-Typ     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Hinweise

- Web-Schriftarten unterliegen denselben Domain-Einschränkungen (Schriftdateien müssen auf derselben Domain wie die Seite, die sie verwendet, sein), es sei denn, [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS) werden verwendet, um diese Einschränkung zu lockern.
- `@font-face` kann nicht innerhalb eines CSS-Selectors deklariert werden. Zum Beispiel funktioniert das folgende nicht:

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

Dieses Beispiel spezifiziert eine herunterladbare Schriftart zur Verwendung und wendet sie auf den gesamten Textkörper des Dokuments an:

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

### Lokale Schriftalternativen spezifizieren

In diesem Beispiel wird die lokale Kopie des Benutzers von "Helvetica Neue Bold" verwendet; falls der Benutzer diese Schriftart nicht installiert hat (sowohl der vollständige Schriftname als auch der Postscript-Name werden versucht), wird stattdessen die herunterladbare Schriftart mit dem Namen "MgOpenModernaBold.woff2" verwendet:

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
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Schöne Schriftarten mit @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
