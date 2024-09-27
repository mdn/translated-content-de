---
title: url()
slug: Web/CSS/url_function
l10n:
  sourceCommit: b6f6c10c9c3a73e8a1f1c7bc643b44b2521cb234
---

{{CSSRef}}

Die **`url()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um eine Datei einzubinden. Der Parameter kann eine absolute URL, eine relative URL, eine Blob-URL oder eine Daten-URL sein. Die **`url()`**-Funktion kann als Parameter einer anderen CSS-Funktion übergeben werden, wie z. B. der {{cssxref("attr")}}-Funktion. Abhängig von der Eigenschaft, für die sie ein Wert ist, kann die gesuchte Ressource ein Bild, eine Schriftart oder ein Stylesheet sein. Die funktionale Notation `url()` ist der Wert für den `<url>`-Datentyp.

> [!NOTE]
> Es gibt einen Unterschied zwischen einem [URI](/de/docs/Glossary/URI) und einer [URL](/de/docs/Glossary/URL). Ein URI identifiziert eine Ressource. Eine URL ist ein Typ von URI und beschreibt den _Standort_ einer Ressource. Ein URI kann entweder eine URL oder ein Name ([URN](/de/docs/Glossary/URN)) einer Ressource sein.
>
> In CSS Level 1 beschrieb die funktionale Notation `url()` nur echte URLs. In CSS Level 2 wurde die Definition von `url()` erweitert, um jeden URI zu beschreiben, sei es eine URL oder ein URN. Verwirrenderweise bedeutete dies, dass `url()` verwendet werden konnte, um einen `<uri>`-CSS-Datentyp zu erstellen. Diese Änderung war nicht nur umständlich, sondern diskutabel unnötig, da URNs in tatsächlichem CSS fast nie verwendet werden. Um die Verwirrung zu lindern, kehrte CSS Level 3 zur engeren, ursprünglichen Definition zurück. Jetzt bezeichnet `url()` nur noch echte `<url>`s.

Relative URLs, falls verwendet, beziehen sich auf die URL des Stylesheets (nicht auf die URL der Webseite).

Die **`url()`**-Funktion kann als Wert für
{{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}},
[src](/de/docs/Web/CSS/@font-face/src) als Teil eines [`@font-face`](/de/docs/Web/CSS/@font-face) Blocks, und [@counter-style/`symbol`](/de/docs/Web/CSS/@counter-style/symbols) verwendet werden.

## Syntax

### Werte

- `<string>`

  - : Ein String, der eine URL oder die ID einer SVG-Form angeben kann.

    - url

      - : Eine URL, die eine relative oder absolute Adresse oder ein Zeiger auf die einzubindende Webressource ist, oder eine Daten-URL, optional in einfachen oder doppelten Anführungszeichen. Anführungszeichen sind erforderlich, wenn die URL Klammern, Leerzeichen oder Anführungszeichen enthält, es sei denn, diese Zeichen werden umgangen oder die Adresse enthält Steuerzeichen oberhalb von 0x7e. Doppelte Anführungszeichen dürfen nicht innerhalb doppelter Anführungszeichen vorkommen und einfache Anführungszeichen nicht innerhalb einfacher Anführungszeichen, es sei denn, sie werden umgangen. Die folgenden sind alle gültig und gleichwertig:

        Wenn Sie sich entscheiden, die URL ohne Anführungszeichen zu schreiben, verwenden Sie einen Backslash (`\`) vor allen Klammern, Leerzeichen, einfachen Anführungszeichen (`'`) und doppelten Anführungszeichen (`"`), die Teil der URL sind.

    - path
      - : Referenziert die ID einer [SVG-Form](/de/docs/Web/SVG/Tutorial/Basic_Shapes) oder eines [SVG-Filters](/de/docs/Web/SVG/Element/filter).

- `<url-modifier>`
  - : In Zukunft könnte die `url()`-Funktion die Angabe eines Modifikators, eines Bezeichners oder einer funktionalen Notation unterstützen, die die Bedeutung des URL-Strings ändert. Dies wird jedoch derzeit nicht unterstützt und ist in der Spezifikation nicht vollständig definiert.

### Formale Syntax

## Beispiele

### Als Wert der Hintergrund-Eigenschaft

{{EmbedLiveSample("As the background property value", "100%", "200")}}

### Für das Setzen eines Bildes als Listen-Aufzählungszeichen

{{EmbedLiveSample("For setting an image as a list bullet", "100%", "200")}}

### Verwendung in der Inhalts-Eigenschaft

#### HTML

#### CSS

#### Ergebnis

{{EmbedLiveSample("Usage_in_the_content_property", "100%", "110")}}

### Verwendung einer Daten-URL

#### CSS

{{EmbedLiveSample("Using_a_data_URL", "100%", 100)}}

### Verwendung in Filtern

Wenn eine URL als Pfad für einen Filter verwendet wird, muss die URL eines der folgenden sein:

1. Der Pfad zu einer SVG-Datei mit angehängter ID des Filters.
2. die ID des Filters, wenn das SVG bereits auf der Seite existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
