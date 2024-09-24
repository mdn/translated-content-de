---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 0febb0315dbb36565f8badbbaa653434df3483d1
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel muss oben im Stylesheet definiert werden, vor allen anderen At-Regeln (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

## Syntax

```css
@import url;
@import url layer;
@import url layer(layer-name);
@import url layer(layer-name) supports(supports-condition);
@import url layer(layer-name) supports(supports-condition) list-of-media-queries;
@import url layer(layer-name) list-of-media-queries;
@import url supports(supports-condition);
@import url supports(supports-condition) list-of-media-queries;
@import url list-of-media-queries;
```

wo:

- _url_
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Ort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine durch Kommata getrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der CSS-Regeln im verlinkten URL spezifizieren. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verlinkten Ressource importiert werden.
- _supports-condition_
  - : Kennzeichnet die Funktion(en), die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, kann es sein, dass er das verlinkte Stylesheet nicht abruft, und selbst wenn es auf anderem Wege heruntergeladen wurde, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der im {{CSSxRef("@supports")}} beschriebenen, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und Layer-erstellende [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* mehr Stile */
@import url("my-imported-styles.css");
```

Da die `@import`-Regel nach den Stilen deklariert wurde, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* mehr Stile */
```

Die `@import`-Regel ist keine [geschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Sie kann daher nicht innerhalb von [Bedingungsgruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{glossary("user agent", "Benutzeragenten")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, dürfen Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe geben durch Kommas getrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL an. Fehlt eine Media Query, erfolgt der Import nicht abhängig vom verwendeten Medium. Die Angabe von `all` für die `list-of-media-queries` hat den gleichen Effekt.

Ähnlich können Benutzeragenten die Funktion `supports()` in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionsgruppe unterstützt wird (oder nicht).
Dies ermöglicht es Autoren, neu eingeführte CSS-Funktionen zu nutzen, während einfache Fallbacks für ältere Browserversionen bereitgestellt werden.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel mit JavaScript unter Verwendung von {{domxref("CSSImportRule.supportsText")}} abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das Schlüsselwort `layer` oder die Funktion `layer()` wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als wären sie buchstäblich an der Importstelle im Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie der _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln bedingt durch Media Queries

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die zutreffen müssen, bevor die verlinkten CSS-Regeln angewendet werden. Zum Beispiel wird die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln bedingt durch Funktionsunterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren könnten, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS, das `display: flex` verwendet.
Während Sie nur eine `supports()`-Anweisung haben können, können Sie jede Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie diese mischen, z.B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern einschließen müssen: Dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen, die die einfache Deklarationssyntax verwenden.
Sie können auch CSS-Funktionen in `supports()` angeben, und es wird auf `true` ausgewertet, wenn sie unterstützt werden und im Benutzeragent ausgewertet werden können.
Zum Beispiel zeigt der untenstehende Code eine `@import`, die von sowohl [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion abhängig ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt, die Regeln aus dem importierten Stylesheet `theme` enthält.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die Regel `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für das Erstellen von zwei separaten unbenannten Kaskadenschichten und das separate Importieren der verlinkten Regeln in jede einzelne. Eine Kaskadenschicht, die ohne Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten sind finalisiert, wenn sie erstellt werden: Sie bieten keine Möglichkeit zur Umordnung oder Hinzufügung von Stilen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
