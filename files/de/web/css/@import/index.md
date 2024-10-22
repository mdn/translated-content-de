---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor jeder anderen at-rule (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

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
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen angeben, unter denen die CSS-Regeln aus der verlinkten URL angewendet werden sollen. Wenn der Browser keine dieser Queries unterstützt, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, wird das verlinkte Stylesheet möglicherweise nicht abgerufen und selbst wenn es auf anderem Weg heruntergeladen wird, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der in {{CSSxRef("@supports")}} beschriebenen, und dieses Thema kann als ausführlichere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stilkarten, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und schichtenerstellenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-Regel nach den Stilen deklariert wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppenregeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User-Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Bei Fehlen einer Media Query ist der Import nicht bedingt durch das verwendete Medium. Die Angabe von `all` für `list-of-media-queries` hat denselben Effekt.

Ebenso können User-Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur dann abzurufen, wenn ein bestimmtes Merkmalset (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen, während sie sanfte Rückfalle für ältere Browserversionen bieten. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie buchstäblich zum Zeitpunkt des Imports in das Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie man die _url_ als `<string>` und als `url()`-Funktion angibt.

### Importieren von CSS-Regeln abhängig von Media Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. Beispielsweise wird die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln abhängig von der Funktionsunterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln zeigen, wie man ein Layout importieren könnte, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importiert, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie beliebig viele Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie sie mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass, wenn Sie nur eine einzige Deklaration haben, diese nicht in zusätzliche Klammern eingeschlossen werden muss: dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Support-Bedingungen unter Verwendung der einfachen Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben und es wird auf `true` ausgewertet, wenn sie unterstützt werden und vom User-Agent ausgewertet werden können. Zum Beispiel zeigt der untenstehende Code ein `@import`, das bedingt von sowohl [child combinators](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importieren von CSS-Regeln in eine Kaskadenschicht

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenschicht namens `utilities` erstellt und sie wird Regeln aus dem importierten Stylesheet `theme` beinhalten.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel kaskadieren die Regeln in den `headings.css`- und `links.css`-Stylesheets innerhalb derselben Schicht wie die `audio[controls]`-Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten namenlosen Kaskadenschichten und das Importieren der verlinkten Regeln in jede einzeln. Eine Kaskadenschicht, die ohne Namen erklärt wird, ist eine namenlose Kaskadenschicht. Namenlose Kaskadenschichten werden beim Erstellen abgeschlossen: sie bieten keine Möglichkeit zur Neuordnung oder zum Hinzufügen von Styles und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
