---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`@import`**-[CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Rules (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stildeklarationen, da sie sonst ignoriert wird.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Ort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der in der verknüpften URL definierten CSS-Regeln spezifizieren. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verknüpfte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verknüpften Ressource importiert werden. Siehe [`layer()`](/de/docs/Web/CSS/@import/layer_function) für weitere Informationen.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, um das Stylesheet zu importieren. Wenn der Browser nicht den im _supports-condition_ spezifizierten Bedingungen entspricht, wird das verknüpfte Stylesheet möglicherweise nicht abgerufen, und selbst wenn es auf einem anderen Weg heruntergeladen wird, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz dienen.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und layer-erstellende [`@layer`](/de/docs/Web/CSS/@layer) Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-At-Regel nach den Stilen deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [Bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User-Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit einer Media Query ist der Import nicht medienabhängig. Das Spezifizieren von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User-Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur abzurufen, wenn eine bestimmte Funktionsmenge (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen, während Rückfallebenen für ältere Browserversionen bereitgestellt werden. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verknüpften Ressource importiert werden. Regeln können auch in eine bereits vorhandene Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird dafür zusammen mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als wären sie wortwörtlich an der Stelle des Imports in das Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln, die von Media Queries abhängen

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln, die von der Feature-Unterstützung abhängen

```css
@import url("grid.css") supports(display: grid) screen and (max-width: 400px);
@import url("flex.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die `@import`-Regeln oben verdeutlichen, wie Sie eventuell ein Layout importieren, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet. Obwohl Sie nur eine `supports()`-Anweisung haben können, können Sie beliebige Anzahl von Feature-Überprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie sie mischen, z.B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass wenn Sie nur eine einzelne Deklaration haben, Sie sie nicht in zusätzliche Klammern einschließen müssen: dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen unter Verwendung von grundlegender Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird `true` ergeben, wenn sie unterstützt werden und im User-Agent ausgewertet werden können. Zum Beispiel zeigt der untenstehende Code ein `@import`, das sowohl von [Child-Kombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion abhängt:

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

Dies ist ein Beispiel für das Erstellen von zwei separaten unbenannten Kaskadenschichten und das Importieren der verknüpften Regeln in jede einzeln. Eine Kaskadenschicht, die ohne einen Namen deklariert wird, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten sind beim Erzeugen finalisiert: sie bieten keine Möglichkeit zum Umordnen oder Hinzufügen von Stilen und können von außen nicht referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
