---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft je nach dem Ergebnis eines bedingten Tests festzulegen. Der Test kann auf einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine Liste von `<if-branch>` Einträgen, die durch Semikolons getrennt sind. Jeder `<if-branch>` ist eine `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die stets als wahr bewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantiert ungültiger Wert")}}.

## Beschreibung

Die CSS `if()` Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Wertes jeder Eigenschaft verwendet werden und kann null oder mehr mit Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die als `true` bewertet wird, gibt ihren zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` als `true` bewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert ungültigen&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die einen Fallback hat, wie beispielsweise eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}} Elementen, je nachdem, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, greift der `else` Wert, und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt sein, und jedes `<if-condition> : <value>` Paar muss mit einem Semikolon getrennt sein. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) stehen. Wenn doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht das nicht die gesamte `if()` Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare in einer `if()` Funktion an beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der mit Semikolons getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>` auf `true` bewertet wird.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren einfügen, werden die Bedingungen, die darauf folgen, nicht bewertet, da `else` immer als `true` bewertet wird. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie möglicherweise ein `else : <value>` an einer anderen Stelle als dem Ende der Werteliste einfügen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar ordnungsgemäß funktioniert. Wenn nicht, gibt das `else : <value>` Paar den Wert `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden wiederum nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Anfangswert gesetzt. Es wäre besser, die `background-color` direkt auf `yellow` zu setzen und das `background-image` auf `initial` oder `none`.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt werden diese jeweils im Detail erläutert.

#### Style-Abfragen

Ein `<if-test>` mit [Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und als Ergebnis einen Wert für eine andere Eigenschaft anzuwenden. Wir haben mehrere Beispiele für Style-Abfragen bereits durchgesprochen; sehen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf denselben Element auf den Wert `ice` gesetzt ist, wird der angegebene `linear-gradient()` Wert zurückgegeben. Anderenfalls wird `none` zurückgegeben.

Der Einsatz von Style-Abfragen in `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend darauf, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt Stile auf einem Container-Elternelement überprüfen zu müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Style-Abfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage bietet einige Vorteile — Sie können nur einzelne Eigenschaftswerte gleichzeitig mit `if()` Style-Abfragen festlegen, während `@container` Abfragen verwendet werden können, um ganze Regelsets bedingt anzuwenden. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungszwecke.

Beachten Sie, dass Container-Style-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS benutzerdefinierte Eigenschaften. Zum Beispiel wird das folgende nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Ein `<if-test>` mit [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) kann verwendet werden, um einen Wert für eine Eigenschaft basierend darauf festzulegen, ob ein Media-Abfrage-Test als wahr zurückgegeben wird.

Sie können Medientypen verwenden. Das folgende `<if-test> : <value>` Paar gibt beispielsweise einen Wert von `white` auf Druckmedien zurück, während die `else` Klausel `#eeeeee` auf nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden – das folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewportbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Das ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrage-Ergebnis variieren müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Media-Abfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@media")}} Konstruktion erforderlich. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungszwecke.

#### Feature-Abfragen

Ein `<if-test>` mit [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft basierend darauf festzulegen, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende einen {{cssxref("color_value/lch()")}} Farbwert zurück, wenn `lch()` Farben unterstützt werden, oder einen {{cssxref("color_value/rgb()")}} Farbwert, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Auch Selektor-Unterstützungsabfragen funktionieren. Das folgende gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or` oder `not` Logik innerhalb von Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind in `if()` Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}} Konstruktion besser. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungszwecke.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung fällt nicht anmutig zurück; es muss ein expliziter Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel geben wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die je nach der `--size: "2xl"` benutzerdefinierten Eigenschaft unterschiedliche Padding-Werte festlegt.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()` unterstützenden Browsern wäre das Padding, wenn kein `else` Wert enthalten wäre und `--size` nicht `"2xl"` beträgt, auf `initial` gesetzt.

### Ganze und partielle Werte

Eine `if()` Funktion kann als Wert einer beliebigen CSS-Eigenschaft festgelegt werden, sie kann jedoch auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Beispielsweise wird in folgendem die {{cssxref("border-color")}} Standartfarbe innerhalb einer {{cssxref("border")}} Kurznotation festgelegt, je nachdem, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Allerdings könnten wir die `if()` Funktion auch verwenden, um nur die {{cssxref("border-color")}} Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachteln von if() Funktionen

Da eine `if()` Funktion den Platz ganzer Eigenschaftswerte oder einzelner Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und in anderen Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen als wahr zurückgegeben wird).

Allerdings sind die beiden `<value>`s auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Nutzer ein dunkles Farbschema bevorzugt (bestimmt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage), und einen dunklen Farbwert ansonsten.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Elternelement-Breite abzieht. Der Prozentsatz wird durch eine `if()` Funktion repräsentiert, die überprüft, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Falls ja, beträgt der Prozentsatz `70%`, sodass sich die äußere Funktion zu `calc(70% - 50px)` auflöst. Wenn nicht, beträgt der Prozentsatz `50%`, sodass sich die äußere Funktion zu `calc(50% - 50px)` auflöst.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formal syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()` Nutzung

In diesem Beispiel zeigen wir die grundlegende Nutzung jedes der drei `<if-test>` Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die darin im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt ist — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>` Element, layouten es mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und setzen eine {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen. Wir verwenden dann eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Media-Abfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument sich in Landschaftsorientierung befindet, oder `column`, wenn es sich in Hochformat befindet. Dies legt die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen fest.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudoelement des `<h2>` Elements ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir bereits mit einem Inline-{{htmlelement("style")}} in unserem HTML getan). Wir erreichen das, indem wir eine `if()` Funktion mit einem [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>` verwenden:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst. Wir verwenden eine Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder ein äquivalentes Hex, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()` Abfragen, indem Sie die gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr angezeigt werden.
- Ändern Sie das `height` Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch ändert sich die Ausrichtung von Landschaft zu Hochformat. Beachten Sie, wie sich das Layout als Ergebnis ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()` Funktionen wirklich Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um bedingt die Werte einiger benutzerdefinierter Eigenschaften festzulegen, sodass wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit etwas Inhalt darin — eine Top-Level-Überschrift, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} ein, das ein {{htmlelement("select")}} Dropdown zum Auswählen eines Farbschemas enthält.

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

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Wir verwenden jedoch eine `if()` Funktion mit einer Media-Abfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb der `margin` Kurznotation auf `0` zu setzen, wenn die Viewport-Breite weniger als `700px` beträgt, und auf `20px`, wenn sie breiter ist. Das bedeutet, dass wir auf breiten Bildschirmen ein wenig Abstand am oberen Rand des Inhalts haben, dieser jedoch auf schmalen Bildschirmen entfernt wird, wo er ein wenig seltsam aussieht.

```css hidden live-sample___color-scheme
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
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

Wir setzen dann die `--scheme` benutzerdefinierte Eigenschaft, um mit dem Namen der `class` des `<article>` Elements übereinzustimmen. Die Klasse wird von unserem JavaScript festgelegt, wenn in unserem `<select>` Element ein neuer Wert ausgewählt wird. In dem nächsten CSS-Block wird die Bedeutung des benutzerdefinierten Elementwertes deutlich.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir sehen die wahre Leistungsfähigkeit von CSS `if()` Funktionen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf verschiedene Farbwerte je nach dem Wert der `--scheme` benutzerdefinierten Eigenschaft zu setzen. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften des `<article>` Elements und den `color` und `background-color` Eigenschaften des `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, wobei unterschiedliche Werte über `if()` Funktionen festgelegt werden.

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

Schließlich verwenden wir `if()` Funktionen in ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} des `<h1>` Elements auf `calc(3rem + 2vw)`, wenn der Viewport breiter als `700px` ist, und auf `3rem` ansonsten. Das bedeutet, dass sich die Schriftgröße auf breiten Bildschirmen dynamisch mit Änderungen der Viewport-Breite aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein passendes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudoklasse unseres `<h1>` Elements, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft.

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

Versuchen Sie, verschiedene Farbschemata auszuwählen, um den Effekt auf das Aussehen und Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Werte- und Einheitenmodul](/de/docs/Web/CSS/CSS_values_and_units)
