---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, da sie sonst ignoriert wird.

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
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der im verlinkten URL definierten CSS-Regeln angeben. Wenn der Browser keine dieser Abfragen unterstützt, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verlinkten Ressource importiert werden.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser nicht den in der _supports-condition_ festgelegten Bedingungen entspricht, kann es sein, dass er das verlinkte Stylesheet nicht abruft, und selbst wenn es auf anderem Wege heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als eine ausführlichere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, mit Ausnahme von {{CSSxRef("@charset")}}-Regeln und schichtenerzeugenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import` At-Regel nach den Stilen deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [geschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Wenn keine Media Query vorhanden ist, ist der Import nicht von dem verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur abzurufen, wenn ein bestimmter Funktionssatz (oder nicht) unterstützt wird.
Dies ermöglicht es Autoren, die neu eingeführten CSS-Funktionen zu nutzen, während sie sich gleichzeitig an ältere Browser-Versionen anpassen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) ermittelt werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine vorhandene Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird bei `@import` zu diesem Zweck verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als wären sie buchstäblich an der Stelle des Imports im Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()`-Funktion spezifiziert.

### Importieren von CSS-Regeln bedingt durch Media Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird beispielsweise die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln bedingt durch Unterstützung von Funktionen

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS, das `display: flex` verwendet.
Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Reihenfolge festzulegen, wenn Sie sie mischen, z. B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern setzen müssen, wie im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen mit einer grundlegenden Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` spezifizieren, und diese werden als `true` ausgewertet, wenn sie unterstützt werden und auf dem User-Agent ausgewertet werden können.
Zum Beispiel zeigt der untenstehende Code ein `@import`, das sowohl von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion abhängig ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt, die Regeln aus dem importierten Stylesheet `theme` enthält.

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

Dies ist ein Beispiel für das Erstellen von zwei separaten Namenlose Kaskadenschichten und das Importieren der verlinkten Regeln in jede davon separat. Eine ohne Namen deklarierte Kaskadenschicht ist eine namenlose Kaskadenschicht. Namenlose Kaskadenschichten werden bei ihrer Erstellung finalisiert: Sie bieten keine Möglichkeit zum Umstrukturieren oder Hinzufügen von Stilen, und sie können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
