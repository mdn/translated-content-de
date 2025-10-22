---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Die **`@import`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stildeklarationen, da sie sonst ignoriert wird.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Speicherort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine durch Kommas separierte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienspezifischen Bedingungen für die Anwendung der CSS-Regeln in der verlinkten URL angeben. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird. Siehe [`layer()`](/de/docs/Web/CSS/@import/layer_function) für weitere Informationen.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser die im _supports-condition_ angegebenen Bedingungen nicht erfüllt, kann es sein, dass er das verlinkte Stylesheet nicht abruft und selbst wenn es auf anderem Wege heruntergeladen wird, es nicht geladen wird.
    Die Syntax von `supports()` ist fast identisch mit der in {{CSSxRef("@supports")}} beschriebenen, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und schichterzeugenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import "my-imported-styles.css";
```

Da die `@import`-Regel nach den Stilen deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [geschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [Bedingungsgruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienspezifische Importbedingungen angeben. Diese bedingten Importe spezifizieren kommaseparierte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Ohne eine Media Query ist der Import nicht bedingt durch das verwendete Medium. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um nur Ressourcen zu laden, wenn ein bestimmter Funktionssatz unterstützt wird (oder nicht).
Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen und gleichzeitig ansprechende Fallbacks für ältere Browserversionen bereitzustellen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) ermittelt werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie buchstäblich an der Importstelle in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()`-Funktion angibt.

### Importieren von CSS-Regeln, bedingt durch Media Queries

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienspezifische Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das `landscape.css` Stylesheet nur auf einem Bildschirmgerät in Querformat laden.

### Importieren von CSS-Regeln, bedingt durch Funktionsunterstützung

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und alternativ CSS importieren, das `display: flex` verwendet.
Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität beim Mischen zu definieren, z. B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, wenn Sie nur eine einzelne Deklaration haben, müssen Sie sie nicht in zusätzliche Klammern setzen: Dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen mit einfacher Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` angeben, und es wird `true` ergeben, wenn sie unterstützt werden und auf dem User-Agent ausgewertet werden können.
Zum Beispiel zeigt der folgende Code ein `@import`, das sowohl von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion abhängig ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt und sie wird Regeln aus dem importierten Stylesheet `theme` enthalten.

```css
@import "headings.css" layer(default);
@import "links.css" layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die `audio[controls]`-Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für das Erstellen zweier separater unbenannter Kaskadenschichten und das Importieren der verlinkten Regeln jeweils einzeln. Eine Kaskadenschicht ohne Namen ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten sind finalisiert, sobald sie erstellt sind: Sie bieten keine Möglichkeit, Stile neu zu ordnen oder hinzuzufügen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
