---
title: "@import"
slug: Web/CSS/Reference/At-rules/@import
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@import`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren.
Eine `@import`-Regel _muss_ am Anfang des Stylesheets definiert werden, vor allen anderen At-Regeln (außer [@charset](/de/docs/Web/CSS/Reference/At-rules/@charset) und [@layer](/de/docs/Web/CSS/Reference/At-rules/@layer)) und Stil-Deklarationen, sonst wird sie ignoriert.

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
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Speicherort der zu importierenden Ressource repräsentiert. Die URL kann absolut oder relativ sein.
- _list-of-media-queries_
  - : Ist eine kommagetrennte Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), die die medienabhängigen Bedingungen für die Anwendung der im verknüpften URL definierten CSS-Regeln angeben. Wenn der Browser keine dieser Abfragen unterstützt, wird die verknüpfte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer), in die die Inhalte der verknüpften Ressource importiert werden. Weitere Informationen finden Sie unter [`layer()`](/de/docs/Web/CSS/Reference/At-rules/@import/layer_function).
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird.
    Wenn der Browser nicht die in der _supports-condition_ angegebenen Bedingungen erfüllt, kann es sein, dass er das verknüpfte Stylesheet nicht abruft, und selbst wenn es auf einem anderen Weg heruntergeladen wird, wird es nicht geladen.
    Die Syntax von `supports()` ist fast identisch mit der in {{CSSxRef("@supports")}} beschriebenen und dieses Thema kann als umfassendere Referenz herangezogen werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, außer {{CSSxRef("@charset")}}-Regeln und ebenerstellenden {{cssxref("@layer")}}-Anweisungen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import "my-imported-styles.css";
```

Da die `@import`-At-Regel nach den Stilen erklärt wird, ist sie ungültig und wird daher ignoriert.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/Guides/Syntax/Introduction#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/Guides/Conditional_rules#at-rules_and_descriptors) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} das Abrufen von Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen festlegen. Diese bedingten Importe spezifizieren kommagetrennte [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) nach der URL. Fehlt eine Media Query, ist der Import nicht vom verwendeten Medium abhängig. Die Angabe von `all` für die `list-of-media-queries` hat den gleichen Effekt.

Ebenso können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur dann abzurufen, wenn ein bestimmter Funktionsumfang (oder nicht) unterstützt wird.
Dies ermöglicht es Autoren, von kürzlich eingeführten CSS-Funktionen zu profitieren und gleichzeitig anmutige Rückfalllösungen für ältere Browserversionen bereitzustellen.
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript mit [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) zu erstellen, indem Regeln aus einer verknüpften Ressource importiert werden. Regeln können auch in eine bestehende Kaskadenebene importiert werden. Das `layer`-Schlüsselwort oder die `layer()`-Funktion wird mit `@import` zu diesem Zweck verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Kaskade, als ob sie wörtlich an der Stelle des Imports in das Stylesheet geschrieben worden wären.

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Regeln importieren

```css
@import "custom.css";
@import url("chrome://communicator/skin/communicator.css");
```

Die beiden Beispiele oben zeigen, wie der _url_ als `<string>` und als `url()`-Funktion spezifiziert werden kann.

### CSS-Regeln importieren, abhängig von Media Queries

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Die `@import`-Regeln in den obigen Beispielen zeigen medienabhängige Bedingungen, die wahr sein müssen, bevor die verknüpften CSS-Regeln angewendet werden. So wird zum Beispiel die letzte `@import`-Regel das `landscape.css`-Stylesheet nur auf einem Bildschirmgerät im Querformat laden.

### CSS-Regeln importieren, abhängig von der Unterstützung von Funktionen

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Die `@import`-Regeln oben veranschaulichen, wie Sie ein Layout importieren können, das ein Raster verwendet, wenn `display: grid` unterstützt wird, und ansonsten CSS importieren, das `display: flex` verwendet.
Obwohl Sie nur eine `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Vorrangigkeit festzulegen, wenn Sie sie mischen, z. B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` ist gültig.
Beachten Sie, dass Sie, wenn Sie nur eine einzige Deklaration haben, diese nicht in zusätzliche Klammern einfügen müssen: Dies wird im ersten Beispiel oben gezeigt.

Die Beispiele oben zeigen Support-Bedingungen unter Verwendung der grundlegenden Deklarationssyntax.
Sie können auch CSS-Funktionen in `supports()` angeben, und sie wird `true` ergeben, wenn sie unterstützt und im User-Agent ausgewertet werden können.
Zum Beispiel zeigt der folgende Code ein `@import`, das abhängig von sowohl [Kind-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion ist:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### CSS-Regeln in eine Kaskadenebene importieren

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Kaskadenebene namens `utilities` erstellt und sie wird die Regeln aus dem importierten Stylesheet `theme` enthalten.

```css
@import "headings.css" layer(default);
@import "links.css" layer(default);

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

Dies ist ein Beispiel für die Erstellung von zwei separaten unbenannten Kaskadenebenen und das Importieren der verknüpften Regeln in jede einzeln. Eine ohne Namen erklärte Kaskadenebene ist eine unbenannte Kaskadenebene. Unbenannte Kaskadenebenen werden bei der Erstellung abgeschlossen: Sie bieten keine Möglichkeit zur Neuordnung oder zum Hinzufügen von Stilen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und -Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
