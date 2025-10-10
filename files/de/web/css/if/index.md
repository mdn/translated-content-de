---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft basierend auf dem Ergebnis eines bedingten Tests festzulegen. Der Test kann auf einer [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

## Syntax

```css-nolint
/* Single <if-test> */
if(style(--scheme: dark): #eeeeee;)
if(media(print): black;)
if(media(width > 700px): 0 auto;)
if(supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);)

/* <if-test> with else */
if(style(--size: "2xl"): 1em; else: 0.25em;)
if(media(print): white; else: black;)
if(media(width < 700px): 0 auto; else: 20px auto)
if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
)
if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
)

/* Multiple <if-test>s */
if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
  else: none;
)

/* <if-test> within a shorthand */
3px yellow if(
  style(--color: green): dashed;
  style(--color: yellow): inset;
  else: solid;
)
```

### Parameter

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` ist eine `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer als wahr ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die als `true` ausgewertet wird, hat ihren zugehörigen `<value>` als Rückgabewert.
3. Wenn keine `<if-condition>` als `true` ausgewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertangabe verwendet wird, die einen Fallback hat, wie zum Beispiel eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

Zum Beispiel:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}} Elemente, je nachdem, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, greift der `else` Wert, und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt sein, und jedes `<if-condition> : <value>` Paar muss durch ein Semikolon getrennt sein. Das Semikolon ist für das letzte `<if-condition> : <value>` Paar optional.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) stehen. Falls doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht dies nicht die gesamte `if()` Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` oder kein `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion einfügen, und zwar an jeder Position. In den meisten Fällen wird jedoch ein einziges `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s als wahr ausgewertet wird.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren einfügen, werden die Bedingungen, die darauf folgen, nicht ausgewertet, da `else` immer als `true` bewertet wird. Das folgende `if()` gibt daher immer `none` zurück und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Beim Debuggen eines Wertes, der nicht wie erwartet funktioniert, könnte es sinnvoll sein, ein `else : <value>` an eine andere Position als das Ende der Werteliste zu setzen. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar ordnungsgemäß funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das zeigt, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nicht ausgewertet.

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    else: url("debug.png");
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

Beachten Sie, dass eine `if()` Funktion immer noch gültig ist, wenn sie nur ein `else : <value>` Paar oder gar nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt, und das `background-image` wird auf seinen Ausgangswert gesetzt. Es wäre besser, die `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt wird jede von ihnen im Detail betrachtet.

#### Stil-Abfragen

Eine [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` ermöglicht es Ihnen, zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und daraufhin einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben früher mehrere Stilabfrage-Beispiele behandelt, sehen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf einem Element auf den Wert `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Die Verwendung von Stilabfragen innerhalb von `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen – Sie können ein Element direkt mit Stilen ansprechen, basierend darauf, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt festgelegte Stile auf einem Container-Elternelement überprüfen zu müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Stilabfragen verwenden. Zum Beispiel:

```css-nolint
background-color: if(
  style((--scheme: dark) or (--scheme: very-dark)): black;
);

background-color: if(
  style((--scheme: dark) and (--contrast: hi)): black;
);

background-color: if(
  not style(--scheme: light): black;
);
```

Eine `@container` Abfrage hat einige Vorteile – Sie können mit `if()` Stilabfragen jeweils nur Einzelwerte festlegen, während `@container` Abfragen verwendet werden können, um bedingt ganze Regelsets anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

Beachten Sie, dass Container-Stilabfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur benutzerdefinierte CSS-Eigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob eine Media-Abfrage wahr zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Druckmedien zurück, während der `else` Knoten `#eeeeee` auf nicht-druckenden Medien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden – die folgenden geben einen Wert von `0 auto` zurück, wenn die aktuelle Viewport-Breite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrageergebnis variieren müssen.

Sie können auch `and`, `or`, oder `not` Logik innerhalb von Media-Abfragen verwenden. Zum Beispiel:

```css-nolint
border-color: if(
  media((width > 700px) and (width < 1000px)): blue;
);

border-color: if(
  media((width < 500px) or (orientation: landscape)): blue;
);

background-color: if(
  not media(width < 500px): blue;
  else: red
);
```

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, wird ein reguläres {{cssxref("@media")}} Konstrukt benötigt. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

#### Feature-Abfragen

Eine [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende einen {{cssxref("color_value/lch()")}} Farbwert zurück, wenn `lch()` Farben unterstützt werden, oder einen {{cssxref("color_value/rgb()")}} Farbwert, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Auch Selektorunterstützungsanfragen funktionieren. Das folgende gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or`, oder `not` Logik innerhalb von Feature-Abfragen verwenden. Zum Beispiel:

```css-nolint
margin-top: if(
  supports((selector(:buffering)) and (color: blue)): 1em;
);

margin-top: if(
  supports((selector(:buffering)) or (color: not-a-color)): 1em;
);

margin-top: if(
  supports(not selector(:buffering)): 1em;
);
```

Feature-Abfragen sind innerhalb von `if()` Anweisungen sehr nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist ein reguläres {{cssxref("@supports")}} Konstrukt besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung fällt in nicht unterstützenden Browsern nicht elegant zurück; ein expliziter Fallback muss bereitgestellt werden.

Zum Beispiel wird in diesem Fall ein statischer {{cssxref("padding")}} Wert für Browser bereitgestellt, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Paddingwerte festlegt, je nachdem, ob die `--size: "2xl"` benutzerdefinierte Eigenschaft gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else` Wert enthalten ist und `--size` nicht gleich `"2xl"` ist, würde das Padding auf `initial` gesetzt.

### Ganze und partielle Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft festgelegt werden, sie kann aber auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzhand-Eigenschaft fest, je nachdem, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten die `if()` Funktion jedoch nur verwenden, um die {{cssxref("border-color")}} Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachtelte if() Funktionen

Da eine `if()` Funktion anstelle vollständiger Eigenschaftswerte oder einzelner Komponenten verwendet werden kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert basierend auf verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen als wahr zurückgibt).

Jedoch sind die beiden `<value>`s auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage), und einen dunklen Farbwert sonst.

```css-nolint
color: if(
  style(--scheme: ice):
    if(
      media(prefers-color-scheme: dark): #caf0f8;
      else: #03045e;
    );
  style(--scheme: fire):
    if(
      media(prefers-color-scheme: dark): #ffc971;
      else: #621708;
    );
  else: black
);
```

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` aufgelöst wird.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()` Nutzung

In diesem Beispiel zeigen wir die grundlegende Verwendung jeder der drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei darin enthaltenen {{htmlelement("article")}} Elementen, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt wurde — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS richten wir zuerst das `<section>` Element mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ein und setzen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen. Wir verwenden dann eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat vorliegt, oder auf `column`, wenn es im Hochformat vorliegt. Dies ordnet die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen an.

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}

h2 {
  text-align: center;
}

article {
  background-color: cyan;
  border: 3px solid gray;
  flex: 1;
}
```

```css-nolint live-sample___basic
section {
  display: flex;
  gap: 16px;
  flex-direction: if(
    media(orientation: landscape): row;
    else: column;
  )
}
```

Als nächstes richten wir das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ein und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einer [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich richten wir das `<h2>` Element selbst ein. Wir verwenden ein Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder eine hexadezimale Äquivalente, wenn nicht.

```css-nolint live-sample___basic
h2 {
  color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### Ergebnis

{{EmbedLiveSample("basic", "100%", "240")}}

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch ändert sich die Ausrichtung von Querformat auf Hochformat. Beachten Sie, wie sich das Layout entsprechend ändert.

### Steuerung eines Farbschemas mit `if()`

In diesem Demo zeigen wir, wie Sie mit CSS `if()` Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, wodurch wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit einigen Inhalten darin — eine oberste Überschrift, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir haben auch ein {{htmlelement("form")}} eingefügt, das ein {{htmlelement("select")}} Drop-down enthält, welches ermöglicht, ein Farbschema auszuwählen.

```html-nolint live-sample___color-scheme
<article>
  <h1>Main heading</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit.
    Quisque faucibus ex sapien vitae pellentesque sem placerat.
    In id cursus mi pretium tellus duis convallis.
  </p>
  <aside>
    <h2>An aside</h2>
    <p>
      Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
      fringilla lacus nec metus bibendum egestas.
    </p>
  </aside>
  <p>
    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
    hendrerit semper vel class aptent taciti sociosqu. Ad litora
    torquent per conubia nostra inceptos himenaeos.
  </p>
</article>
<form>
  <label for="scheme">Choose color scheme:</label>
  <select id="scheme">
    <option value="">Default</option>
    <option value="ice">Ice</option>
    <option value="fire">Fire</option>
  </select>
</form>
```

### JavaScript

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Wir verwenden jedoch eine `if()` Funktion mit einem Medienabfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb des `margin` Kurzbefehls auf `0` zu setzen, wenn die Viewport-Breite kleiner als `700px` ist, und auf `20px`, wenn sie größer ist. Das bedeutet, dass wir auf breiten Bildschirmen oben etwas Rand haben, aber dieser wird auf schmalen Bildschirmen entfernt, wo es etwas seltsam aussieht.

```css hidden live-sample___color-scheme
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

form {
  padding-left: 20px;
  margin-top: 20px;
}

article h2 {
  margin: 0;
  font-size: 1.8rem;
}
```

```css-nolint live-sample___color-scheme
body {
  max-width: 700px;
  margin: if(
    media(width < 700px): 0;
    else: 20px;
  ) auto 0;
}
```

Dann setzen wir die `--scheme` benutzerdefinierte Eigenschaft, um den Klassenamen des `<article>` Elements zu entsprechen. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert im `<select>` Element ausgewählt wird. Sie werden die Bedeutung des benutzerdefinierten Elementwertes im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wahre Kraft von CSS `if()` Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf verschiedene Farbwerte je nach Wert der `--scheme` benutzerdefinierten Eigenschaft zu setzen. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften unseres `<article>` Elements, und in den `color` und `background-color` Eigenschaften unseres `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften mit unterschiedlichen Werten, die über `if()` Funktionen festgelegt werden.

```css-nolint live-sample___color-scheme
article {
  padding: 20px;
  --color1: if(
    style(--scheme: ice): #03045e;
    style(--scheme: fire): #621708;
    else: black;
  );
  --color2: if(
    style(--scheme: ice): #caf0f8;
    style(--scheme: fire): #ffc971;
    else: white;
  );

  color: var(--color1);
  border: 3px solid var(--color1);
  background-image: linear-gradient(
    to left,
    var(--color2),
    white,
    var(--color2)
  );
}

aside {
  color: var(--color2);
  background-color: var(--color1);
  padding: 20px;
}
```

Schließlich verwenden wir `if()` Funktionen noch in einigen weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn der Viewport breiter als `700px` ist, und auf `3rem` ansonsten. Das bedeutet, dass sich die Schriftgröße auf breiten Bildschirmen dynamisch mit Änderungen der Viewport-Breite aktualisiert, aber auf schmalen Bildschirmen unverändert bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudo-Klasse unseres `<h1>` Elements, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft.

```css-nolint live-sample___color-scheme
h1 {
  margin: 0;
  font-size: if(
    media(width > 700px): calc(3rem + 2vw);
    else: 3rem;
  );
}

h1::before {
  content: if(
    style(--scheme: ice): "❄️ ";
    style(--scheme: fire): "🔥 ";
    else: "";
  );
}
```

#### Ergebnis

Dieses Demo wird wie folgt gerendert:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbschemawerte auszuwählen, um die Auswirkungen auf das Aussehen und Verhalten zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_values_and_units)
