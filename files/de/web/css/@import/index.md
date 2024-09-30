---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert sein, vor jeder anderen At-Regel (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stildeklarationen, da sie sonst ignoriert wird.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}} Typ, der den Ort der einzubindenden Ressource repräsentiert. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine durch Kommas getrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen zur Anwendung der CSS-Regeln aus der verlinkten URL spezifiziert. Unterstützt der Browser keine dieser Abfragen, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser die in der _supports-condition_ angegebenen Bedingungen nicht erfüllt, kann es sein, dass das verlinkte Stylesheet nicht abgerufen wird, und auch wenn es über einen anderen Weg heruntergeladen wird, wird es nicht geladen. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und das Thema kann als vollständigere Referenz genutzt werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regelarten kommen, außer {{CSSxRef("@charset")}}-Regeln und schichtenerstellenden [`@layer`](/de/docs/Web/CSS/@layer)-Anweisungen.

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

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Daher kann sie nicht innerhalb [bedingter Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit [User Agents](/de/docs/Glossary/user_agent) das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe geben kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL an. In Abwesenheit einer Media Query ist der Import nicht von den verwendeten Medien abhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ähnlich können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionalität (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen und dennoch sanfte Rückfälle für ältere Browserversionen zu bieten. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit dem Kaskadensystem, als ob sie an der Stelle des Imports wörtlich in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie das _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln, die von Media Queries abhängig sind

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das Stylesheet `landscape.css` nur auf einem Bildschirmgerät in Querformat laden.

### Importieren von CSS-Regeln abhängig von der Unterstützung von Funktionen

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren können, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Vorrangstellung zu definieren, wenn Sie sie mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern setzen müssen: Dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Support-Bedingungen mit einfacher Deklarationssyntax. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird zu `true` ausgewertet, wenn sie unterstützt werden und auf dem User-Agent ausgewertet werden können. Zum Beispiel zeigt der Code unten ein `@import`, das sowohl von [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch von der `font-tech()`-Funktion abhängig ist:

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

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verlinkten Regeln in jede einzeln. Eine ohne Namen deklarierte Kaskadenschicht ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden bei Erstellung finalisiert: Sie bieten keine Möglichkeit zur Neuanordnung oder Hinzufügung von Stilen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
