---
title: "@import"
slug: Web/CSS/Reference/At-rules/@import
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@import`**-[@Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) in [CSS](/de/docs/Web/CSS) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen Regel (außer [@charset](/de/docs/Web/CSS/Reference/At-rules/@charset) und [@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)) und Stil-Deklarationen, da sie sonst ignoriert wird.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Ort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine durch Kommas getrennte Liste von [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), die die medienabhängigen Bedingungen für die Anwendung der in der verlinkten URL definierten CSS-Regeln festlegen. Sollte der Browser keine dieser Abfragen unterstützen, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), in die die Inhalte der verlinkten Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, kann er das verlinkte Stylesheet nicht abrufen, und selbst wenn es über einen anderen Weg heruntergeladen wird, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben ist. Dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer {{CSSxRef("@charset")}}-Regeln und Schichterstellungs-[@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import "my-imported-styles.css";
```

Da die `@import`-Regel nach den Stilen deklariert wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Guides/Syntax/Introduction#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-@Regeln](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Imports geben durch Komma getrennte [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) nach der URL an. Fehlt eine Media-Query, ist der Import nicht abhängig von dem verwendeten Medium. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ebenso können User Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur dann abzurufen, wenn ein bestimmtes Funktionsset (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen und gleichzeitig sanfte Fallbacks für ältere Browserversionen bereitzustellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) ermittelt werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu erstellen, indem Regeln aus einer verknüpften Ressource importiert werden. Regeln können auch in eine vorhandene Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird dazu mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als wären sie unmittelbar an der Stelle des Imports im Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie das _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln, abhängig von Media-Queries

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So wird beispielsweise die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln, abhängig von Funktionsunterstützung

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die obigen `@import`-Regeln zeigen, wie Sie ein Layout importieren, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie beliebig viele Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Rangfolge zu definieren, wenn Sie sie mischen, z. B. ist `supports((..) or (..) and not (..))` ungültig, jedoch `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass, wenn Sie nur eine einzelne Deklaration haben, Sie sie nicht in zusätzliche Klammern setzen müssen: Dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen unter Verwendung der grundlegenden Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt und im User-Agent ausgewertet werden können. Zum Beispiel zeigt der unten stehende Code eine `@import`, die sowohl von [Kindkombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion abhängig ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt, die Regeln aus dem importierten Stylesheet `theme` enthält.

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

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verknüpften Regeln in jede einzeln. Eine Kaskadenschicht, die ohne Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten sind abgeschlossen, wenn sie erstellt werden: Sie bieten keine Möglichkeit zur Neuanordnung oder Hinzufügung von Stilen und können nicht von außerhalb referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [Modul: CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-@Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
