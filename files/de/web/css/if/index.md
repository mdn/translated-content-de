---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft abhängig vom Ergebnis eines Bedingungstests festzulegen. Der Test kann auf einer [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

## Syntax

```css-nolint
/* Single <if-test> */
if(style(--scheme: dark): #eee;)
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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`-Elementen. Jedes `<if-branch>` ist eine `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer zu `true` ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftenwert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet bedingte Logik für CSS-Eigenschaftenwerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Werts jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach dem letzten `<if-condition>` ist optional.

Der Rückgabewert wird folgendermaßen berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge, in der sie in der Funktion erscheinen, ausgewertet.
2. Die erste `<if-condition>`, die zu `true` ausgewertet wird, hat ihren zugehörigen `<value>` zurückgegeben.
3. Wenn keine `<if-condition>` zu `true` ausgewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;")}} zurück. Dieser verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}} Elemente, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder es existiert und auf einen anderen Wert gesetzt ist, kommt der `else`-Wert ins Spiel, und die Eigenschaft `background-image` wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>` Paar optional.

> [!WARNING]
> Zwischen dem `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen sein. Wenn doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht dies nicht die gesamte `if()` Funktion ungültig; stattdessen fährt der Parser mit dem nächsten `<if-condition> : <value>` Paar fort. Wenn keine `<if-condition>` noch `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s zu `true` ausgewertet wird.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren einfügen, werden die darauf folgenden Bedingungen nicht ausgewertet, da `else` immer zu `true` ausgewertet wird. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Werts, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie vielleicht ein `else : <value>` an einer anderen Position als am Ende der Wertliste platzieren möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar ordnungsgemäß funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nie ausgewertet.

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

Beachten Sie, dass eine `if()` Funktion weiterhin gültig ist, wenn sie nur ein `else : <value>` Paar oder gar nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Ausgangswert gesetzt. Es wäre besser, die `background-color` direkt auf `yellow` zu setzen und das `background-image` auf `initial` oder `none`.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragearten. Dieser Abschnitt betrachtet jede im Detail.

#### Stilanfragen

Ein [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und einen Wert für eine andere Eigenschaft entsprechend anzuwenden. Wir haben bereits mehrere Stilanfrage-Beispiele behandelt; schauen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf dem gleichen Element auf einen Wert von `ice` gesetzt ist, wird der angegebene `linear-gradient()` Wert zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Stilanfragen in `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt mit Stilen ansprechen, basierend darauf, ob auf ihm eine benutzerdefinierte Eigenschaft gesetzt ist, anstatt festgelegte Stile auf einem Container-Elternelement überprüfen zu müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Stilanfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage hat einige Vorteile — Sie können nur einzelne Eigenschaftswerte auf einmal mit `if()` Stilanfragen setzen, während `@container` Abfragen verwendet werden können, um ganze Regelmengen bedingt anzuwenden. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

Beachten Sie, dass Container-Stilanfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-Benutzerdefinierte Eigenschaften. Zum Beispiel funktioniert das folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media-Abfragetest `true` zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Druckmedien zurück, während die `else` Klausel dazu führt, dass `#eee` auf Nicht-Druckmedien zurückgegeben wird.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewportbreite kleiner als `700px` ist, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist sehr nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrageergebnis variieren müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Medienabfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, wird eine reguläre {{cssxref("@media")}} Konstruktion benötigt. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

#### Feature-Abfragen

Eine [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende eine {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Selector-Support-Abfragen funktionieren ebenfalls. Das folgende gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

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

Feature-Abfragen sind sehr nützlich innerhalb von `if()` Anweisungen, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}} Konstruktion besser. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung fällt nicht zurück; es muss ein expliziter Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel stellen wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser bereit, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte setzt, abhängig davon, ob die `--size: "2xl"` benutzerdefinierte Eigenschaft gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else` Wert eingeschlossen wäre und `--size` nicht gleich `"2xl"` wäre, würde das Padding auf `initial` gesetzt.

### Ganze und partielle Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft gesetzt werden, kann aber auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzschreibweise, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten jedoch die `if()` Funktion verwenden, um die {{cssxref("border-color")}} Komponente nur zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachteln von if() Funktionen

Da eine `if()` Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen sowie innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()` um einen `color` Wert je nach verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen `true` zurückgibt).

Die beiden `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage), und einen dunklen Farbwert andernfalls.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements subtrahiert. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, also löst die äußere Funktion zu `calc(70% - 50px)` auf. Wenn nicht, beträgt der Prozentsatz `50%`, also löst die äußere Funktion zu `calc(50% - 50px)` auf.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()` Verwendung

In diesem Beispiel zeigen wir die grundlegende Verwendung jeder der drei `<if-test>` Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt — `--show-apple:true` — die wir später verwenden, um einen Eigenschaftswert bedingt festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS richten wir zunächst das `<section>` Element mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ein und setzen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen. Dann verwenden wir eine `if()` Funktion mit einem [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienabfrage-`<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument sich im Querformat befindet, oder auf `column`, wenn es sich im Hochformat befindet. Dadurch werden die `article` Elemente nebeneinander auf breiten Bildschirmen und übereinander auf schmalen Bildschirmen angezeigt.

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

Dann zielen wir auf die {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (wir haben dies zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einem [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst ab. Wir verwenden ein Feature-Abfrage `<if-test>` um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder ein äquivalentes Hex, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Devtools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des eingebetteten `<iframe>` auf `1200px`. Dies wird die Ausrichtung von Querformat zu Hochformat ändern. Beachten Sie, wie sich das Layout entsprechend anpasst.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()`-Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen und damit das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit etwas Inhalt darin — einer Überschrift der obersten Ebene, ein paar {{htmlelement("p")}} Elementen und ein {{htmlelement("aside")}}. Wir beinhalten auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Drop-down, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements gleich diesem Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Wir verwenden jedoch eine `if()` Funktion mit einem Medienabfrage `<if-test>` um die {{cssxref("margin-top")}} Komponente innerhalb des `margin` Kurzschreibers auf `0` zu setzen, wenn die Viewportbreite weniger als `700px` beträgt, und `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen etwas Rand oben am Inhalt haben, dieser jedoch auf schmalen Bildschirmen entfernt wird, wo er etwas seltsam aussieht.

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

Dann setzen wir die `--scheme` benutzerdefinierte Eigenschaft so, dass sie dem `class` Namen des `<article>` Elements entspricht. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Sie werden die Bedeutung des benutzerdefinierten Elementwerts im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Die wahre Stärke der CSS `if()` Funktionen sehen wir, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf verschiedene Farbwerte festzulegen, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften unseres `<article>` Elements und in den `color` und `background-color` Eigenschaften unseres `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit verschiedenen Werten, die durch `if()` Funktionen festgelegt werden.

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

Schließlich verwenden wir `if()` Funktionen an ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements so, dass sie `calc(3rem + 2vw)` ist, wenn die Viewportbreite größer als `700px` ist, und `3rem` andernfalls. Das bedeutet, dass sich die Schriftgröße auf breiten Bildschirmen dynamisch mit Änderungen der Viewportbreite aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} unserer {{cssxref("::before")}} Pseudo-Klasse des `<h1>` Elements, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft.

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

Versuchen Sie, verschiedene Farbschemata auszuwählen, um die Auswirkung auf das Aussehen und Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilanfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Values- und Units-Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
