---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`@import`**-[@Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) von [CSS](/de/docs/Web/CSS) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen @Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, da sie sonst ignoriert wird.

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
  - : Ist eine durch Kommas getrennte Liste von [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der in der verlinkten URL definierten CSS-Regeln spezifizieren. Wenn der Browser keine dieser Abfragen unterstützt, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Cascade-Ebene](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, wird er möglicherweise das verlinkte Stylesheet nicht abrufen, und selbst wenn es auf einem anderen Weg heruntergeladen wurde, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben ist, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und `@layer`-Aussagen, die Ebenen erstellen.

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

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-@Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren durch Kommas getrennte [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Ohne jede Medienabfrage ist der Import nicht medienabhängig. `all` für die `list-of-media-queries` anzugeben hat denselben Effekt.

Ebenso können User Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionsmenge (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, von kürzlich eingeführten CSS-Funktionen zu profitieren, während sie gleichzeitig für ältere Browserversionen geeignete Rückfalle bereitstellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Cascade-Ebene](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln von einer verlinkten Ressource importiert werden. Regeln können auch in eine vorhandene Cascade-Ebene importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Cascade, als ob sie wörtlich in das Stylesheet an der Importstelle geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben werden kann.

### Importieren von CSS-Regeln basierend auf Medienabfragen

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln basierend auf Funktionsunterstützung

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die `@import`-Regeln oben veranschaulichen, wie Sie ein Layout importieren könnten, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Präzedenz zu definieren, wenn Sie diese mixen, z.B., `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern einschließen müssen: Dies wird im ersten Beispiel oben gezeigt.

Die oben gezeigten Beispiele zeigen Unterstützungskonditionen unter Verwendung der grundlegenden Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird auf `true` ausgewertet, wenn sie unterstützt werden und auf dem User-Agent ausgewertet werden können. Zum Beispiel zeigt der folgende Code ein `@import`, das von [Child-Kombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) und der `font-tech()`-Funktion abhängig ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Cascade-Ebene

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Cascade-Ebene namens `utilities` erstellt und sie wird Regeln aus dem importierten Stylesheet `theme` enthalten.

```css
@import "headings.css" layer(default);
@import "links.css" layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel interagieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Ebene wie die `audio[controls]`-Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten namenlosen Cascade-Ebenen und das separate Importieren der verlinkten Regeln in jede. Eine ohne Namen deklarierte Cascade-Ebene ist eine namenlose Cascade-Ebene. Namenlose Cascade-Ebenen werden bei der Erstellung finalisiert: Sie bietet keine Möglichkeit zur Umpositionierung oder Hinzufügung von Styles und kann nicht von außerhalb referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS @-Regel Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
