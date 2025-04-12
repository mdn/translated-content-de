---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [Schlüsselregel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen Schlüsselregeln (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

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
  - : Ist eine kommagetrennte Liste von [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der in der verlinkten URL definierten CSS-Regeln angeben. Wenn der Browser keine dieser Queries unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verlinkten Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/@import/layer_function).
- _supports-condition_
  - : Gibt an, welche Funktion(en) der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser den in der _supports-condition_ angegebenen Bedingungen nicht entspricht, ruft er das verlinkte Stylesheet möglicherweise nicht ab, und selbst wenn es durch einen anderen Pfad heruntergeladen wird, lädt er es nicht.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer {{CSSxRef("@charset")}}-Regeln und layer-erzeugenden [`@layer`](/de/docs/Web/CSS/@layer)-Statements.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-Schlüsselregel nach den Styles deklariert wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [Bedingungsgruppen-Schlüsselregeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "Benutzeragenten")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Ermangelung einer Media-Query ist der Import nicht vom verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat den gleichen Effekt.

Ebenso können Benutzeragenten die Funktion `supports()` in einer `@import`-Schlüsselregel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Menge von Funktionen unterstützt wird (oder nicht unterstützt wird). Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen, während sie elegante Fallbacks für ältere Browserversionen bieten. Beachten Sie, dass die Bedingungen in der Funktion `supports()` einer `@import`-Schlüsselregel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine vorhandene Kaskadenschicht importiert werden. Das Schlüsselwort `layer` oder die Funktion `layer()` wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie an der Importstelle wörtlich in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie der _url_ als `<string>` und als `url()`-Funktion angegeben werden kann.

### Importieren von CSS-Regeln, abhängig von Media-Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln, abhängig von Funktionsunterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie jede Anzahl von Funktionsüberprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie diese kombinieren, z.B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern eingeschlossen werden muss: Dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen unter Verwendung der grundlegenden Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird als `true` ausgewertet, wenn sie unterstützt werden und auf dem Benutzeragenten ausgewertet werden können. Zum Beispiel zeigt der folgende Code ein `@import`, das von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) und der `font-tech()`-Funktion abhängig ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt und sie wird Regeln aus dem importierten Stylesheet `theme` enthalten.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

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

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede einzeln. Eine Kaskadenschicht, die ohne Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten sind beim Erstellen abgeschlossen: Sie bieten keine Möglichkeit, Styles neu anzuordnen oder hinzuzufügen, und sie können von außen nicht referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Schlüsselregel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
