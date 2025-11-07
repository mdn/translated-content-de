---
title: "@import"
slug: Web/CSS/Reference/At-rules/@import
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Regeln (außer [@charset](/de/docs/Web/CSS/Reference/At-rules/@charset) und [@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)) und Stil-Deklarationen, andernfalls wird sie ignoriert.

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
  - : Eine {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Speicherort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Eine durch Kommas getrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen festlegen, unter denen die im verlinkten URL definierten CSS-Regeln angewendet werden. Wenn der Browser keine dieser Queries unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Der Name einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), in die der Inhalt der verlinkten Ressource importiert wird. Siehe [`layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function) für weitere Informationen.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. 
    Wenn der Browser diese Bedingungen in der _supports-condition_ nicht erfüllt, ruft er das verlinkte Stylesheet möglicherweise nicht ab, und selbst wenn es durch einen anderen Pfad heruntergeladen wird, wird es nicht geladen. 
    Die Syntax von `supports()` ist fast identisch mit der in {{CSSxRef("@supports")}} beschriebenen, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken, usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer {{CSSxRef("@charset")}}-Regeln und schichtbildenden [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer)-Anweisungen.

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

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren durch Kommas getrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Fehlen Media Queries, ist der Import nicht von dem verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ebenso können User Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur abzurufen, wenn eine bestimmte Feature-Sammlung unterstützt wird (oder nicht).
Dies ermöglicht es den Autoren, neu eingeführte CSS-Features zu nutzen und gleichzeitig für ältere Browserversionen angemessene Alternativen bereitzustellen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript über [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird für diesen Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie buchstäblich an der Stelle des Imports in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()`-Funktion spezifiziert.

### Importieren von CSS-Regeln basierend auf Media Queries

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. Zum Beispiel wird die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln basierend auf Feature-Unterstützung

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet.
Obwohl Sie nur eine `supports()`-Anweisung haben können, können Sie beliebig viele Feature-Checks mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Präzedenz zu definieren, wenn Sie sie mischen, z.B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass, wenn Sie nur eine einzige Deklaration haben, Sie sie nicht in zusätzliche Klammern setzen müssen: Dies wird im ersten obigen Beispiel gezeigt.

Die oben gezeigten Beispiele verwenden Unterstützungskonditionen mit einfacher Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` angeben, und es wird als `true` ausgewertet, wenn sie unterstützt werden und im User-Agent ausgewertet werden können.
Zum Beispiel zeigt der folgende Code eine `@import`, die von sowohl [Kindkombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion abhängig ist:

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

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die Regel `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede einzeln. Eine Kaskadenschicht, die ohne Namen deklariert ist, ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden beim Erstellen abgeschlossen: Sie bieten keine Möglichkeit, Stile neu anzuordnen oder hinzuzufügen und können von außen nicht referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
