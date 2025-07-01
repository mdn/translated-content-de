---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **`@import`**-Regel in [CSS](/de/docs/Web/CSS), eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), dient dazu, Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Regeln (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, andernfalls wird sie ignoriert.

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
  - : Ist eine durch Kommas getrennte Liste von [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen zum Anwenden der in der verlinkten URL definierten CSS-Regeln festlegen. Unterstützt der Browser keine dieser Anfragen, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verlinkten Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser die in der _supports-condition_ festgelegten Bedingungen nicht erfüllt, wird das verlinkte Stylesheet möglicherweise nicht abgerufen, und selbst wenn es über einen anderen Pfad heruntergeladen wird, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer` Schlüsselwort oder der `layer()` Funktion, um externe Stylesheets (wie von Frameworks, Widget-Stilblättern, Bibliotheken etc.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und Schichtenerstellenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-Regel nach den Stilen erklärt wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Um zu vermeiden, dass Benutzeragenten Ressourcen für nicht unterstützte Medientypen abrufen, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit einer Media Query ist der Import nicht von dem verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat den gleichen Effekt.

Ebenso können Benutzeragenten die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionsmenge unterstützt wird (oder nicht). Dies ermöglicht es Autoren, neu eingeführte CSS-Funktionen zu nutzen und gleichzeitig für ältere Browser-Versionen angemessene Fallbacks bereitzustellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer` Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie buchstäblich an der Stelle des Imports in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()` Funktion angibt.

### Importieren von CSS-Regeln, abhängig von Media-Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die wahr sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln basierend auf Funktionsunterstützung

```css
@import url("grid.css") supports(display: grid) screen and (width <= 400px);
@import url("flex.css") supports((not (display: grid)) and (display: flex))
  screen and (width <= 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importieren, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie beliebig viele Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Allerdings müssen Sie Parenthesen verwenden, um die Vorrangordnung zu definieren, wenn Sie sie mischen, z. B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern eingeschlossen werden muss: dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen unter Verwendung der grundlegenden Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und sie wird zu `true` ausgewertet, wenn sie unterstützt werden und von dem Benutzeragenten ausgewertet werden können. Zum Beispiel zeigt der Code unten eine `@import`, die von beiden [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) und der `font-tech()` Funktion abhängig ist:

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

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die `audio[controls]` Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede separat. Eine Kaskadenschicht, die ohne einen Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden bei der Erstellung abgeschlossen: sie bieten keine Möglichkeit zur Umordnung oder zum Hinzufügen von Stilen und können nicht von außerhalb referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS At-Regelfunktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
