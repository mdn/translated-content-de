---
title: "`@import` CSS at-rule"
short-title: "@import"
slug: Web/CSS/Reference/At-rules/@import
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@import`**-[CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/Reference/At-rules/@charset) und [@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)) und Stildeklarationen, sonst wird sie ignoriert.

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
  - : Ist eine durch Kommas getrennte Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), die mediaabhängige Bedingungen für die Anwendung der in der verlinkten URL definierten CSS-Regeln spezifiziert. Wenn der Browser keine dieser Abfragen unterstützt, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), in die die Inhalte der verlinkten Ressource importiert werden. Siehe [`layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function) für mehr Informationen.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser nicht den in der _supports-condition_ angegebenen Bedingungen entspricht, kann es das verlinkte Stylesheet nicht abrufen und wird es, selbst wenn es über einen anderen Weg heruntergeladen wurde, nicht laden. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben ist, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer bei {{CSSxRef("@charset")}}-Regeln und schichtenerstellenden {{cssxref("@layer")}}-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import "my-imported-styles.css";
```

Da die `@import`-At-Regel nach den Stilen deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [geschachtelte Anweisung](/de/docs/Web/CSS/Guides/Syntax/Introduction#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren mediaabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren durch Kommas getrennte [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) nach der URL. In Abwesenheit einer Media Query ist der Import nicht vom verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionsmenge unterstützt wird (oder nicht).
Dies ermöglicht es den Autoren, von kürzlich eingeführten CSS-Funktionen zu profitieren, während sie gleichzeitig reibungslose Fallbacks für ältere Browserversionen bieten.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mittels [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als wären sie buchstäblich an der Stelle der Importierung in das Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/communicator.css");
```

Die beiden obigen Beispiele zeigen, wie Sie die _url_ als `<string>` und als `url()`-Funktion angeben können.

### Importieren von CSS-Regeln, die von Media Queries abhängen

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen mediaabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. Zum Beispiel wird die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln, die von Feature-Support abhängen

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren könnten, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importiert, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Feature-Prüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie sie mischen, z.B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern einschließen müssen: Dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Support-Bedingungen mit grundlegender Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt werden und auf dem User-Agent ausgewertet werden können. Zum Beispiel zeigt der folgende Code ein `@import`, das von sowohl [Nachkommenkombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion abhängig ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

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

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die Regel `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede dieser Schichten. Eine Kaskadenschicht, die ohne Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden beim Erstellen abgeschlossen: Sie bieten keine Möglichkeit zum Umordnen oder Hinzufügen von Stilen und sie können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
