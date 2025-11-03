---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`@import`** [CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stildeklarationen, sonst wird sie ignoriert.

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
  - : Ist eine durch Kommas getrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der in der verknüpften URL definierten CSS-Regeln spezifizieren. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verknüpfte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verknüpften Ressource importiert werden. Siehe [`layer()`](/de/docs/Web/CSS/@import/layer_function) für weitere Informationen.
- _supports-condition_
  - : Gibt die Funktion(en) an, die vom Browser unterstützt werden müssen, damit das Stylesheet importiert wird.
    Wenn der Browser die in der _supports-condition_ festgelegten Bedingungen nicht erfüllt, kann es sein, dass er das verknüpfte Stylesheet nicht abruft, und selbst wenn es auf anderem Weg heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (aus Frameworks, Widget-Stylesheets, Bibliotheken, etc.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und `@layer`-Erstellungsaussagen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import "my-imported-styles.css";
```

Da die `@import`-Regel nach den Stilen erklärt wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User-Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren durch Kommas getrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Ohne Media Query ist der Import nicht medienabhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User-Agents die Funktion `supports()` in einer `@import`-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionsmenge (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen, während sie gleichzeitig gütige Fallbacks für ältere Browserversionen bereitstellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verknüpften Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird dafür zusammen mit `@import` verwendet. Deklarationen in den Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie buchstäblich an der Stelle des Imports in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln unter Bedingungen von Media Queries

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So lädt z. B. die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät im Querformat.

### Importieren von CSS-Regeln unter Bedingungen der Feature-Unterstützung

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie man ein Layout importieren könnte, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importiert, das `display: flex` verwendet. Während man nur eine `supports()`-Anweisung haben kann, kann man beliebig viele Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Man muss jedoch Klammern verwenden, um die Reihenfolge zu definieren, wenn man diese mischt, z.B., `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass wenn man nur eine einzelne Deklaration hat, diese nicht in zusätzliche Klammern eingefasst werden muss: dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen mit grundlegender Deklarationssyntax. Man kann auch CSS-Funktionen in `supports()` angeben, und es wird `true` ergeben, wenn sie unterstützt und auf dem User-Agent ausgewertet werden können. Zum Beispiel zeigt der untenstehende Code ein `@import`, das davon abhängt, dass sowohl [Kind-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) als auch die `font-tech()`-Funktion:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt, und sie wird Regeln aus dem importierten Stylesheet `theme` enthalten.

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

Dies ist ein Beispiel für die Erstellung von zwei getrennten unbenannten Kaskadenschichten und das Importieren der verknüpften Regeln in jede einzeln. Eine Kaskadenschicht, die ohne Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden bei der Erstellung abgeschlossen: Sie bieten keine Mittel zur Neuordnung oder zum Hinzufügen von Stilen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
