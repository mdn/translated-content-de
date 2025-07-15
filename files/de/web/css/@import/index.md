---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln von anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Ort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommaseparierte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die medienabhängige Bedingungen für die Anwendung der CSS-Regeln in der verknüpften URL angeben. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verknüpfte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenebene](/de/docs/Web/CSS/@layer), in die die Inhalte der verknüpften Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, kann es sein, dass er das verknüpfte Stylesheet nicht abruft, und selbst wenn es auf anderem Weg heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen zur Erstellung von Ebenen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import` At-Regel nach den Stilen deklariert wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommaseparierte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit einer Media Query ist der Import nicht bedingt von den verwendeten Medien. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn ein bestimmtes Funktionspaket (oder nicht) unterstützt wird.
Dies ermöglicht es Autoren, neu eingeführte CSS-Funktionen zu nutzen und gleichzeitig sanfte Fallbacks für ältere Browserversionen bereitzustellen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel mithilfe von JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenebene](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln von einer verknüpften Ressource importiert werden. Regeln können auch in eine vorhandene Kaskadenebene importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird mit `@import` für diesen Zweck verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie wörtlich an der Stelle des Imports in das Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()`-Funktion spezifiziert.

### Importieren von CSS-Regeln unter Bedingungen von Media Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So wird beispielsweise die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln unter Bedingungen der Funktionsunterstützung

```css
@import url("grid.css") supports(display: grid) screen and (width <= 400px);
@import url("flex.css") supports((not (display: grid)) and (display: flex))
  screen and (width <= 400px);
```

Die obigen `@import`-Regeln illustrieren, wie Sie ein Layout importieren könnten, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet.
Obwohl man nur eine `supports()`-Anweisung haben kann, kann man eine beliebige Anzahl von Funktionsüberprüfungen mit `not`, `and` und `or` kombinieren. Allerdings müssen Sie Klammern verwenden, um die Vorrangordnung zu definieren, wenn Sie sie mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass, wenn Sie nur eine einzelne Deklaration haben, Sie sie nicht in zusätzliche Klammern einschließen müssen: dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen unter Verwendung der Syntax für einfache Deklarationen.
Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt werden und auf dem User Agent ausgewertet werden können.
Zum Beispiel zeigt der folgende Code ein `@import`, das bedingt sowohl von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenebene

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenebene namens `utilities` erstellt und sie wird Regeln aus dem importierten Stylesheet `theme` enthalten.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Ebene wie die `audio[controls]`-Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für das Erstellen von zwei separaten unbenannten Kaskadenebenen und das Importieren der verknüpften Regeln in jede einzeln. Eine Kaskadenebene, die ohne einen Namen deklariert wird, ist eine unbenannte Kaskadenebene. Unbenannte Kaskadenebenen werden bei der Erstellung endgültig: sie bieten keine Möglichkeit, Stile neu anzuordnen oder hinzuzufügen, und sie können von außen nicht referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [Modul "CSS Kaskadierung und Vererbung"](/de/docs/Web/CSS/CSS_cascade)
- [Funktionen der At-Regeln in CSS](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
