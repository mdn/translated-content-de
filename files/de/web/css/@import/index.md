---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Regeln (außer [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stildefinitionen, da sie sonst ignoriert wird.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Ort der zu importierenden Ressource angibt. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die die medienabhängigen Bedingungen zum Anwenden der in der verlinkten URL definierten CSS-Regeln spezifizieren. Wenn der Browser keine dieser Abfragen unterstützt, wird die verknüpfte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenschicht](/de/docs/Web/CSS/@layer), in die die Inhalte der verknüpften Ressource importiert werden.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. Wenn der Browser nicht den in der _supports-condition_ angegebenen Bedingungen entspricht, wird er das verknüpfte Stylesheet möglicherweise nicht abrufen und wird es selbst bei einem anderen Downloadpfad nicht laden. Die Syntax von `supports()` ist fast identisch mit der, die in {{CSSxRef("@supports")}} beschrieben wird, und dieses Thema kann als umfassendere Referenz verwendet werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und Schichtenerstellungs-[@layer-](/de/docs/Web/CSS/@layer) Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-At-Regel nach den Styles deklariert ist, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [Verschachtelte Anweisung](/de/docs/Web/CSS/Syntax#nested_statements). Deshalb kann sie nicht innerhalb von [Konditionellen Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "Benutzeragenten")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. In Abwesenheit von Media Queries ist der Import nicht medienabhängig. Die Angabe von `all` für die `list-of-media-queries` hat denselben Effekt.

Ebenso können Benutzeragenten die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn eine bestimmte Funktionalität (oder nicht) unterstützt wird. Dies ermöglicht es Autoren, kürzlich eingeführte CSS-Funktionen zu nutzen und gleichzeitig anpassungsfähige Alternativen für ältere Browserversionen bereitzustellen. Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenschicht importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird zu diesem Zweck mit `@import` verwendet. Erklärungen in Stilregeln aus importierten Stylesheets interagieren mit dem Kaskadensystem, als ob sie wörtlich an der Stelle des Imports im Stylesheet geschrieben wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Importieren von CSS-Regeln

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben wird.

### Importieren von CSS-Regeln abhängig von Media Queries

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die wahr sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. Zum Beispiel wird die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### Importieren von CSS-Regeln abhängig von der Funktionsunterstützung

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die obigen `@import`-Regeln veranschaulichen, wie Sie ein Layout importieren könnten, das ein Grid verwendet, wenn `display: grid` unterstützt wird, und andernfalls CSS importiert, das `display: flex` verwendet. Während Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Präzedenz zu definieren, wenn Sie diese mischen, z.B. `supports((..) or (..) and not (..))` ist ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig. Beachten Sie, dass, wenn Sie nur eine einzige Deklaration haben, Sie diese nicht in zusätzliche Klammern einwickeln müssen: Dies ist im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungskonditionen, die eine grundlegende Deklarationssyntax verwenden. Sie können auch CSS-Funktionen in `supports()` angeben, und es wird `true` zurückgegeben, wenn sie unterstützt werden und im Benutzeragenten ausgewertet werden können. Das folgende Codebeispiel zeigt ein `@import`, das bedingt auf den [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) und der `font-tech()`-Funktion basiert:

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

Im obigen Beispiel kaskadieren die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Schicht wie die Regel `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenschichten und das Importieren der verknüpften Regeln in jede davon separat. Eine ohne Namen deklarierte Kaskadenschicht ist eine unbenannte Kaskadenschicht. Unbenannte Kaskadenschichten werden beim Erstellen finalisiert: Sie bieten keine Möglichkeit zur Neuordnung oder Hinzufügung von Styles und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
