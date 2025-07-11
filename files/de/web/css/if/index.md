---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: b3fdc103f6675aaae4419f5f61fc2f1d4782311e
---

{{CSSRef}}{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, je nach Ergebnis eines konditionalen Tests unterschiedliche Werte für eine Eigenschaft festzulegen. Der Test kann auf einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

## Syntax

```css-nolint
/* Single <if-test> */
if(style(--scheme: dark): #eee;)
if(media(print): #000;)
if(media(width > 700px): 0 auto;)
if(supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);)

/* <if-test> with else */
if(style(--size: 2xl): 1em; else: 0.25em;)
if(media(print): white; else: black;)
if(media(width < 700px): 0 auto; else: 20px auto)
if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
)
if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` ist eine `<if-condition>` gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer zu true ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Wertes einer beliebigen Eigenschaft verwendet werden und kann null oder mehr durch Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die zu `true` ausgewertet wird, gibt den zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` zu `true` ausgewertet wird, gibt die Funktion ein {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einem \Wertstatement verwendet wird, das einen Fallback hat, wie eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}} Elementen, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, wird der `else` Wert wirksam und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss durch ein Semikolon getrennt werden. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Es darf kein Leerzeichen zwischen dem `if` und der öffnenden Klammer (`(`) stehen. Wenn doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht das nicht die gesamte `if()` Funktion ungültig; stattdessen springt der Parser zum nächsten `<if-condition> : <value>` Paar. Wenn keine `<if-condition>` und kein `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion einfügen, an beliebigen Positionen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolons getrennten Liste verwendet, um den Standardwert anzugeben, der immer zurückgegeben wird, wenn keine der `<if-test>`s zu true ausgewertet wird.

Wenn Sie ein `else : <value>` Paar vor irgendwelchen `<if-test> : <value>` Paaren einfügen, werden die folgenden Bedingungen nicht ausgewertet, da `else` immer zu `true` ausgewertet wird. Das folgende `if()` gibt daher immer `none` zurück, und die zwei `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Position als dem Ende der Werteliste einfügen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar korrekt funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden wieder nicht ausgewertet.

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

Beachten Sie, dass eine `if()` Funktion auch dann noch gültig ist, wenn sie nur ein `else : <value>` Paar enthält oder gar nichts. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der Wert {{cssxref("background-color")}} immer auf `yellow` gesetzt und das `background-image` wird auf seinen Initialwert gesetzt. Sie wären besser dran, `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragearten. In diesem Abschnitt wird jede einzelne ausführlich behandelt.

#### Style-Abfragen

Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf ein Element gesetzt ist, und als Ergebnis einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben zuvor mehrere Beispiele für Style-Abfragen durchgearbeitet; werfen wir einen weiteren Blick auf ein Beispiel:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf einen Wert von `ice` auf demselben Element festgelegt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Style-Abfragen innerhalb von `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend auf der Frage, ob eine benutzerdefinierte Eigenschaft darauf festgelegt ist, anstatt festgelegte Stile an einem übergeordneten Containerelement überprüfen zu müssen.

Sie können auch die Logik `and`, `or` oder `not` innerhalb von Style-Abfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage hat einige Vorteile — Sie können nur einzelne Eigenschaftswerte auf einmal mit `if()` Style-Abfragen festlegen, während `@container` Abfragen verwendet werden können, um ganze Regelsets bedingt anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

Beachten Sie, dass Container-Style-Abfragen derzeit keine regulären CSS-Eigenschaften, sondern nur CSS-Benutzerdefinierte Eigenschaften unterstützen. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob ein Media-Abfrage-Test true zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel, das folgende `<if-test> : <value>` Paar gibt einen Wert von `white` auf Druckmedien zurück, während die `else` Klausel `#eee` auf Nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienfeatures verwenden — das folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtsfensterbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrage-Ergebnis variieren müssen.

Sie können auch die Logik `and`, `or` oder `not` innerhalb von Media-Abfragen verwenden. Zum Beispiel:

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

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Auch Selektorunterstützungsabfragen funktionieren. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch die Logik `and`, `or` oder `not` innerhalb von Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind innerhalb von `if()` Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist ein reguläres {{cssxref("@supports")}} Konstrukt besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung zerfällt nicht elegant; ein expliziter Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel liefern wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die verschiedene `padding` Werte festlegt, abhängig davon, ob die `--size: 2xl` benutzerdefinierte Eigenschaft festgelegt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else` Wert enthalten wäre und `--size` nicht gleich `2xl` wäre, würde das Padding auf `initial` gesetzt.

### Ganze und teilweise Werte

Eine `if()` Funktion kann als der Wert einer beliebigen CSS-Eigenschaft gesetzt werden, sie kann aber auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel, das folgende setzt eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzform-Eigenschaft, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);
```

Wir könnten jedoch die `if()` Funktion verwenden, um nur die {{cssxref("border-color")}} Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(77.7% 0 0)): lch(77.7% 0 0); else: #c0c0c0;
  );
```

### Verschachtelung von if() Funktionen

Weil eine `if()` Funktion den Platz von ganzen Eigenschaftswerten oder individuellen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen true zurückgibt).

Die zwei `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage), und einen dunklen Farbwert ansonsten.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements subtrahiert. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion sich zu `calc(70% - 50px)` auflöst. Wenn nicht, beträgt der Prozentsatz `50%`, sodass sich die äußere Funktion zu `calc(50% - 50px)` auflöst.

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

In diesem Beispiel zeigen wir die grundlegende Nutzung jeder der drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die innerhalb seines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs gesetzt wurde — `--show-apple:true` —, die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS richten wir zuerst das `<section>` Element mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ein und setzen ein {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen. Dann verwenden wir eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Media-Abfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat ist, oder auf `column`, wenn es im Hochformat ist. Dies positioniert die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen.

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
    media(orientation:landscape): row;
    else: column;
  )
}
```

Als Nächstes zielen wir auf das {{cssxref("::before")}} Pseudoelement des `<h2>` Elements ab und setzen dessen {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Schließlich richten wir das `<h2>` Element selbst ein. Wir verwenden eine Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder auf ein hexadezimales Äquivalent, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()` Abfragen, indem Sie die gerenderte Demo mit den Dev-Tools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des eingebetteten `<iframe>` auf `1200px`. Dies ändert die Ausrichtung von Querformat zu Hochformat. Beachten Sie, wie sich das Layout entsprechend ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie anfangen können, wirklich Spaß mit CSS `if()` Funktionen zu haben. Unter anderem verwenden wir `if()` Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, was es uns ermöglicht, das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit etwas Inhalt darin — eine Titelüberschrift, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Drop-down hinzu, das es ermöglicht, ein Farbschema auszuwählen.

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

Unser JavaScript fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener zu dem `<select>` Element hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Allerdings verwenden wir eine `if()` Funktion mit einem Media-Abfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb des `margin` Kurzform-Attributs auf `0` zu setzen, wenn die Ansichtsfensterbreite weniger als `700px` beträgt, und auf `20px`, wenn es breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen etwas Rand oben am Inhalt haben, aber dieser auf schmalen Bildschirmen entfernt wird, wo es etwas seltsam aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme` auf den Namen der `class` des `<article>` Elements. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Elementwerts wird in dem nächsten CSS-Block deutlich.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die eigentliche Stärke von CSS `if()` Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` auf verschiedene Farbwerte zu setzen, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft. Dann verwenden wir die Werte `--color1` und `--color2` in den {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften des `<article>` Elements und in den `color` und `background-color` Eigenschaften des `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die durch `if()` Funktionen festgelegt werden.

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

Schließlich verwenden wir `if()` Funktionen an einigen weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn das Ansichtsfenster breiter als `700px` ist, und auf `3rem`, wenn es schmaler ist. Dies bedeutet, dass sich die Schriftgröße bei Änderungen der Ansichtsfensterbreite auf breiteren Bildschirmen dynamisch aktualisiert, aber auf schmaleren Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudoklasse unseres `<h1>` Elements, abhängig vom Wert der benutzerdefinierten Eigenschaft `--scheme`.

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

Diese Demo wird wie folgt gerendert:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbschema-Werte auszuwählen, um die Wirkung auf das Aussehen und Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Werte- und Einheitenmodul](/de/docs/Web/CSS/CSS_Values_and_Units)
