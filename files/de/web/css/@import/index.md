---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Rules (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen, andernfalls wird sie ignoriert.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Ort der zu importierenden Ressource repräsentiert. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen für die Anwendung der in der verknüpften URL definierten CSS-Regeln angeben. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verknüpfte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenebene](/de/docs/Web/CSS/@layer), in die die Inhalte der verknüpften Ressource importiert werden.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser nicht den in der _supports-condition_ angegebenen Bedingungen entspricht, kann es sein, dass er das verknüpfte Stylesheet nicht abruft und auch wenn es über einen anderen Pfad heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (aus Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regelarten stehen, außer {{CSSxRef("@charset")}} Regeln und [@layer](/de/docs/Web/CSS/@layer) Anweisungen zur Erstellung von Ebenen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-Regel nach den Stilen deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Daher kann sie nicht innerhalb von [at-rules bedingter Gruppen](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit einer Media Query ist der Import nicht bedingt von den verwendeten Medien. Die Angabe von `all` für `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-Regel verwenden, um Ressourcen nur abzurufen, wenn ein bestimmter Funktionssatz (oder nicht) unterstützt wird. Dadurch können Autoren neu eingeführte CSS-Funktionen nutzen, während sie gleichzeitig elegante Fallbacks für ältere Browserversionen bereitstellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) erhalten werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenebene](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verknüpften Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenebene importiert werden. Das `layer` Schlüsselwort oder die `layer()` Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie wörtlich an der Stelle des Imports in das Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben werden kann.

### Importieren von CSS-Regeln bedingt durch Media Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. Zum Beispiel wird die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln bedingt durch Funktionsunterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie man ein Layout importieren könnte, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importiert, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Priorität zu definieren, wenn Sie diese mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass, wenn Sie nur eine einzelne Deklaration haben, Sie diese nicht in zusätzliche Klammern einschließen müssen: dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen unter Verwendung grundlegender Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt werden und im User-Agent ausgewertet werden können. Zum Beispiel zeigt der folgende Code ein `@import`, das sowohl auf [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch auf die `font-tech()` Funktion bedingt ist:

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

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Ebene wie die `audio[controls]` Regel.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenebenen und den Import der verknüpften Regeln in jede separat. Eine ohne Namen deklarierte Kaskadenebene ist eine unbenannte Kaskadenebene. Unbenannte Kaskadenebenen werden beim Erstellen finalisiert: sie bieten keine Möglichkeit zum Umordnen oder Hinzufügen von Stilen und können nicht von außerhalb referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [Modul für CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) module
