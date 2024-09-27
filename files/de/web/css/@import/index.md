---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
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

wo:

- _url_
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Ort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen angeben, unter denen die CSS-Regeln der verlinkten URL angewendet werden. Wenn der Browser keine dieser Abfragen unterstützt, lädt er die verlinkte Ressource nicht.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird.
- _supports-condition_
  - : Gibt an, welche Funktion(en) der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser nicht den Bedingungen der _supports-condition_ entspricht, kann es sein, dass er das verlinkte Stylesheet nicht abruft, und selbst wenn es auf anderem Weg heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der Funktion `layer()`, um externe Stylesheets (aus Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen kommen, außer {{CSSxRef("@charset")}}-Regeln und schichtenerstellenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

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

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit [User Agents](/de/docs/Glossary/user_agent) vermeiden können, Ressourcen für nicht unterstützte Medientypen abzurufen, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit von Media Queries ist der Import nicht medienabhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die Funktion `supports()` in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn ein bestimmter Funktionsumfang (nicht) unterstützt wird.
Dadurch können Autoren die Vorteile kürzlich eingeführter CSS-Funktionen nutzen und gleichzeitig anpassungsfähige Fallbacks für ältere Browserversionen bereitstellen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die Funktion `layer()` wird für diesen Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie an der Stelle des Imports buchstäblich in das Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln, abhängig von Media Queries

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So wird beispielsweise die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln, abhängig von Feature-Unterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die `@import`-Regeln oben veranschaulichen, wie Sie ein Layout importieren könnten, das ein Gitter verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importieren, das `display: flex` verwendet.
Während Sie nur eine `supports()`-Anweisung haben können, können Sie beliebig viele Funktionsüberprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Vorrangstellung zu definieren, wenn Sie sie mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass Sie, wenn Sie nur eine einzige Deklaration haben, diese nicht in zusätzliche Klammern einfügen müssen: Dies wird im ersten Beispiel oben gezeigt.

Die obigen Beispiele zeigen Support-Bedingungen mit einfacher Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt werden und im User-Agent ausgewertet werden können.
Zum Beispiel zeigt der folgende Code ein `@import`, das sowohl von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion abhängig ist:

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

Dies ist ein Beispiel für die Erstellung von zwei separaten, unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede einzeln. Eine ohne Namen deklarierte Kaskadenschicht ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden bei ihrer Erstellung abgeschlossen: Sie bieten keine Möglichkeit, Stile neu anzuordnen oder hinzuzufügen, und sie können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
