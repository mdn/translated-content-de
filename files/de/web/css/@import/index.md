---
title: "@import"
slug: Web/CSS/@import
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@import`**-[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Stilregeln aus anderen gültigen Stylesheets zu importieren. 
Eine `@import`-Regel _muss_ zu Beginn des Stylesheets definiert werden, vor allen anderen At-Regeln (mit Ausnahme von [@charset](/de/docs/Web/CSS/@charset) und [@layer](/de/docs/Web/CSS/@layer)) und Stil-Deklarationen. Andernfalls wird sie ignoriert.

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

Dabei gilt:

- _url_
  - : Ist ein {{CSSxRef("string")}} oder ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ, der den Speicherort der zu importierenden Ressource darstellt. Die URL kann absolut oder relativ angegeben werden.
- _list-of-media-queries_
  - : Ist eine durch Kommata getrennte Liste von [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die medienabhängige Bedingungen angibt, unter denen die CSS-Regeln der verlinkten URL angewendet werden. Unterstützt der Browser keine dieser Bedingungen, wird die verlinkte Ressource nicht geladen.
- _layer-name_
  - : Ist der Name einer [Cascade Layer](/de/docs/Web/CSS/@layer), in die der Inhalt der verlinkten Ressource importiert wird.
- _supports-condition_
  - : Gibt die Funktion(en) an, die der Browser unterstützen muss, damit das Stylesheet importiert wird. 
    Falls der Browser nicht den in der _supports-condition_ festgelegten Bedingungen entspricht, wird das verlinkte Stylesheet möglicherweise nicht abgerufen und selbst wenn es durch andere Wege heruntergeladen wird, nicht geladen.
    Die Syntax von `supports()` ist nahezu identisch mit der in {{CSSxRef("@supports")}} beschriebenen und kann als umfassendere Referenz genutzt werden.

Verwenden Sie `@import` zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren.

## Beschreibung

Importierte Regeln müssen vor allen anderen Regeltypen stehen, mit Ausnahme von {{CSSxRef("@charset")}}-Regeln und layererstellenden [`@layer`](/de/docs/Web/CSS/@layer)-Deklarationen.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

Da die `@import`-At-Regel nach den Stilen deklariert wurde, ist sie ungültig und wird daher ignoriert.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

Die `@import`-Regel ist keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements). Daher kann sie nicht innerhalb von [bedingten Gruppen-At-Regeln](/de/docs/Web/CSS/CSS_conditional_rules#at-rules) verwendet werden.

Damit {{Glossary("user_agent", "User Agents")}} Ressourcen für nicht unterstützte Medientypen vermeiden können, können Autoren medienabhängige Importbedingungen angeben. Diese bedingten Importe definieren durch Kommata getrennte [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) nach der URL. Fehlt eine Media-Query, ist der Import nicht an ein bestimmtes Medium gebunden. Das Spezifizieren von `all` für die `list-of-media-queries` hat denselben Effekt.

Ebenso können User Agents die `supports()`-Funktion in einer `@import`-At-Regel verwenden, um Ressourcen nur abzurufen, wenn eine bestimmte Funktionalität unterstützt wird oder nicht.
So können Autoren neue CSS-Funktionalitäten nutzen und gleichzeitig ältere Browser-Versionen durch sinnvolle Fallbacks unterstützen. 
Beachten Sie, dass die Bedingungen in der `supports()`-Funktion einer `@import`-At-Regel in JavaScript über [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) abgerufen werden können.

Die `@import`-Regel kann auch verwendet werden, um eine [Cascade Layer](/de/docs/Web/CSS/@layer) zu erstellen, indem Regeln aus einer verlinkten Ressource importiert werden. Regeln können auch in eine bestehende Cascade Layer importiert werden. Das Schlüsselwort `layer` oder die Funktion `layer()` wird hierfür mit `@import` verwendet. Deklarationen in Stilregeln aus importierten Stylesheets interagieren mit der Schichtung, als wären sie wörtlich an der Importstelle in das Stylesheet geschrieben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Regeln importieren

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Die beiden obigen Beispiele zeigen, wie die _url_ als `<string>` und als `url()`-Funktion angegeben werden kann.

### CSS-Regeln abhängig von Media-Queries importieren

```css
@import url("fine-print.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Die in den obigen Beispielen angeführten `@import`-Regeln zeigen medienabhängige Bedingungen, die erfüllt sein müssen, bevor die verlinkten CSS-Regeln angewendet werden. So wird z. B. das letzte `@import` die `landscape.css`-Stylesheet-Datei nur auf einem Bildschirmgerät im Querformat laden.

### CSS-Regeln abhängig von der Funktionsunterstützung importieren

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports((not (display: grid)) and (display: flex))
  screen and (max-width: 400px);
```

Die oben gezeigten `@import`-Regeln verdeutlichen, wie Sie ein Layout importieren können, das `display: grid` verwendet, wenn dieses unterstützt wird, und andernfalls CSS importieren, das `display: flex` verwendet.
Obwohl Sie nur eine einzelne `supports()`-Anweisung haben können, können Sie eine beliebige Anzahl von Funktionsüberprüfungen mit `not`, `and` und `or` kombinieren. Sie müssen jedoch Klammern verwenden, um die Reihenfolge zu definieren, wenn Sie diese kombinieren, z. B. ist `supports((..) or (..) and not (..))` ungültig, aber `supports((..) or ((..) and (not (..))))` gültig.
Beachten Sie, dass Sie, wenn Sie nur eine einzelne Deklaration haben, diese nicht in zusätzliche Klammern einschließen müssen: Dies wird im ersten obigen Beispiel gezeigt.

Die obigen Beispiele zeigen Unterstützungsbedingungen unter Verwendung der grundlegenden Deklarationssyntax. 
Sie können auch CSS-Funktionen in `supports()` angeben, und diese wird zu `true` ausgewertet, wenn sie unterstützt werden und im User Agent ausgewertet werden können. 
Zum Beispiel zeigt der folgende Code eine `@import`, die von sowohl [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) (`selector()`) als auch der `font-tech()`-Funktion abhängig ist:

```css
@import url("whatever.css")
supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### CSS-Regeln in eine Cascade Layer importieren

```css
@import "theme.css" layer(utilities);
```

Im obigen Beispiel wird eine Cascade Layer namens `utilities` erstellt, die die Regeln aus dem importierten Stylesheet `theme` enthalten wird.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Im obigen Beispiel wirken die Regeln in den Stylesheets `headings.css` und `links.css` innerhalb derselben Layer wie die Regel `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Dies ist ein Beispiel für das Erstellen von zwei separaten unbenannten Cascade Layers und das getrennte Importieren der verlinkten Regeln in jede von ihnen. Eine Cascade Layer, die ohne Namen deklariert wird, ist eine unbenannte Cascade Layer. Unbenannte Cascade Layers werden beim Erstellen abgeschlossen: Sie bieten keine Möglichkeit zur Neuanordnung oder zum Hinzufügen von Stilen und können nicht von außen referenziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
