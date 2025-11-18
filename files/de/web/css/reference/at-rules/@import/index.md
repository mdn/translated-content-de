---
title: "@import"
slug: Web/CSS/Reference/At-rules/@import
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um Stilregeln von anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/Reference/At-rules/@charset) und [@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

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

wobei:

- _url_
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Speicherort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommaseparierte Liste von [media queries](/de/docs/Web/CSS/Guides/Media_queries/Using), die die medienabhängigen Bedingungen zum Anwenden der in der verlinkten URL definierten CSS-Regeln festlegen. Wenn der Browser keine dieser Anfragen unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), in die die Inhalte der verlinkten Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser nicht den in der _supports-condition_ angegebenen Bedingungen entspricht, wird das verlinkte Stylesheet möglicherweise nicht abgerufen und selbst wenn es auf anderem Wege heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der in {{CSSxRef("@supports")}} beschriebenen, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer {{CSSxRef("@charset")}} Regeln und Schicht erstellende [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) Anweisungen.

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

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Guides/Syntax/Introduction#nested_statements). Daher kann sie nicht innerhalb von [Bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

Sodass {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren komma-getrennte [media queries](/de/docs/Web/CSS/Guides/Media_queries/Using) nach der URL. Wenn keine Media Query vorhanden ist, ist der Import nicht vom verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ebenso können User Agents die `supports()` Funktion in einer `@import` At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Merkmalsmenge (oder nicht) unterstützt wird.
Dies ermöglicht es den Autoren, die Vorteile neuer CSS-Funktionen zu nutzen, während gleichzeitig sanfte Fallbacks für ältere Browserversionen bereitgestellt werden.
Beachten Sie, dass die Bedingungen in der `supports()` Funktion einer `@import` At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das Schlüsselwort `layer` oder die Funktion `layer()` wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie wörtlich an der Stelle des Imports in das Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Regeln importieren

```css
@import "custom.css";
@import url("chrome://communicator/skin/communicator.css");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als Funktion `url()` angibt.

### CSS-Regeln bedingt auf Media Queries importieren

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das `landscape.css` Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### CSS-Regeln bedingt auf Funktionsunterstützung importieren

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die `@import`-Regeln oben veranschaulichen, wie Sie ein Layout importieren könnten, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importiert, das `display: flex` verwendet.
Während Sie nur eine `supports()`-Anweisung haben können, können Sie jede Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Präzedenz festzulegen, wenn Sie sie mischen, z.B., `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass, wenn Sie nur eine einzelne Deklaration haben, Sie sie nicht in zusätzliche Klammern einfügen müssen: Dies wird im ersten obigen Beispiel gezeigt.

Die oben gezeigten Beispiele verwenden Unterstützungskonditionen mit grundlegender Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` angeben, und sie wird zu `true` auswerten, wenn sie unterstützt und vom User-Agent ausgewertet werden können.
Das folgende Beispiel zeigt ein `@import`, das von [Kind Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) und der `font-tech()` Funktion abhängig ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### CSS-Regeln in eine Kaskadenschicht importieren

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht mit dem Namen `utilities` erstellt, die Regeln aus dem importierten Stylesheet `theme` enthalten wird.

```css
@import "headings.css" layer(default);
@import "links.css" layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel folgen die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die `audio[controls]`-Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das separate Importieren der verlinkten Regeln in jede von ihnen. Eine Kaskadenschicht ohne Namen ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden bei der Erstellung abgeschlossen: Sie bieten keine Möglichkeit zum Umordnen oder Hinzufügen von Stilen und können von außen nicht referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
