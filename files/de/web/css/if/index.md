---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: e322b20a502858021048d9878abf39e2d0e90a7b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Setzen unterschiedlicher Werte für eine Eigenschaft basierend auf dem Ergebnis eines bedingten Tests. Der Test kann auf einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das für eine `<if-condition>` steht, die immer als wahr bewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if ... else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden ausgewertet, in der Reihenfolge, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die als `true` bewertet wird, gibt den zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` als `true` bewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültigen&gt;")}} Wert zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die einen Fallback hat, wie eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}} Elemente, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, greift der `else` Wert, und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugeordneten Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss durch ein Semikolon getrennt sein. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) stehen. Wenn doch eins da ist, ist die gesamte Deklaration ungültig.

Wenn ein einzelnes `<if-condition>` oder `<value>` ungültig ist, macht dies nicht die gesamte `if()` Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn kein `<if-condition>` noch `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in beliebiger Position einschließen. In den meisten Fällen wird jedoch ein einziges `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s als wahr bewertet wird.

Wenn Sie ein `else : <value>` Paar vor jedem `<if-test> : <value>` Paar einschließen, werden die folgenden Bedingungen nicht ausgewertet, da `else` immer als `true` bewertet wird. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Position als dem Ende der Werteliste platzieren möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar ordnungsgemäß funktioniert. Wenn es nicht der Fall ist, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden eingefügt, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt und das `background-image` auf seinen Anfangswert. Es wäre besser, die `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Typen von Abfragen. Dieser Abschnitt betrachtet jede im Detail.

#### Stilabfragen

Ein `<if-test>` bei einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und entsprechend einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben bereits mehrere Stilabfragen früher durchgearbeitet; schauen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf demselben Element auf einen Wert von `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Stilabfragen in `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend darauf, ob auf ihm eine benutzerdefinierte Eigenschaft gesetzt ist, anstatt gesetzte Stile auf einem Container-Elternelement überprüfen zu müssen.

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

Eine `@container` Abfrage hat jedoch einige Vorteile — Sie können nur einzelne Eigenschaftswerte auf einmal mit `if()` Stilabfragen festlegen, während `@container` Abfragen verwendet werden können, um ganze Sets von Regeln bedingt anzuwenden. Die zwei Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

Beachten Sie, dass Contain-Stilabfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-benutzerdefinierte Eigenschaften. Zum Beispiel, das Folgende wird nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Medienabfragen

Ein `<if-test>` in einer [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) kann verwendet werden, um einen Wert für eine Eigenschaft zu setzen, je nachdem, ob ein Medienabfrage-Test `true` zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Druckmedien zurück, während die `else` Klausel `#eee` auf Nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medieneigenschaften verwenden — das Folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtweite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Medienabfrage-Ergebnis variieren müssen.

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Medienabfrage einstellen möchten, ist eine reguläre {{cssxref("@media")}} Struktur erforderlich. Die beiden Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

#### Funktionsabfragen

Ein `<if-test>` in einer [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft zu setzen, je nachdem, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das Folgende eine {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Auch Abfragen zur Selektor-Unterstützung funktionieren. Das Folgende wird einen Wert von `1em` zurückgeben, wenn der Browser die {{cssxref(":buffering")}} Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or` oder `not` Logik innerhalb von Funktionsabfragen verwenden. Zum Beispiel:

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

Funktionale Abfragen sind wirklich nützlich innerhalb von `if()` Anweisungen, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln auf Grundlage einer Funktionsabfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}} Struktur besser. Die beiden Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung baut nicht automatisch zurück; es muss ein explizites Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel, in diesem Fall geben wir einen statischen {{cssxref("padding")}} Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte festlegt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--size: 2xl` gesetzt ist.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else` Wert enthalten wäre und `--size` nicht gleich `2xl` wäre, würde das Padding auf `initial` gesetzt werden.

### Ganze und teilweise Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft eingestellt werden, aber sie kann auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel wird das Folgende eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzschreibweise festlegen, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

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

Da eine `if()` Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel, in dieser Deklaration verwenden wir `if()`, um eine `color` Eigenschaft abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert abhängig davon zurückgibt, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen zutrifft).

Die zwei `<value>`s sind ebenfalls `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (ermittelt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage), und einen dunklen Farbwert ansonsten.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements subtrahiert. Der Prozentsatz wird durch eine `if()` Funktion repräsentiert, welche prüft, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Wenn ja, ist der Prozentsatz `70%`, sodass die äußere Funktion sich zu `calc(70% - 50px)` auflöst. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion sich zu `calc(50% - 50px)` auflöst.

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

In diesem Beispiel zeigen wir die grundlegende Nutzung jeder der drei `<if-test>` Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei darin enthaltenen {{htmlelement("article")}} Elementen, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt ist — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert zu setzen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS richten wir zuerst das `<section>` Element mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) aus und legen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen fest. Dann verwenden wir eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument sich in der Landschaftsorientierung befindet, oder auf `column`, wenn es sich in der Hochformatausrichtung befindet. Dies legt die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen.

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

Dann zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (wir haben dies zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einem [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst. Wir verwenden ein `<if-test>` mit einer Funktionsabfrage, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder auf ein äquivalentes Hex, wenn nicht.

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

Beachten Sie, wie die Stilisierung angewandt wird. Testen Sie die bedingte Stilisierung für die ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch änder sich die Ausrichtung von Landschaft zu Hochformat. Beachten Sie, wie sich das Layout infolgedessen ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()` Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um bedingt die Werte einiger benutzerdefinierter Eigenschaften zu setzen und es uns zu ermöglichen, das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit einigen Inhalten darin — einer obersten Überschrift, ein paar {{htmlelement("p")}} Elementen und einem {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Dropdown ein, das die Auswahl eines Farbschemas ermöglicht.

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

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mithilfe von `auto` {{cssxref("margin")}} Werten. Allerdings verwenden wir eine `if()` Funktion mit einem Medienabfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente in der `margin` Kurzschreibweise auf `0` zu setzen, wenn die Ansichtsbreite schmaler als `700px` ist, und auf `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen ein wenig Abstand oben haben, welcher auf schmalen Bildschirmen entfernt wird, wo er ein bisschen komisch aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme` passend zum `class` Namen des `<article>` Elements. Die Klasse wird durch unser JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Eigenschaftswerts wird im nächsten CSS-Block deutlicher.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir sehen die wirkliche Kraft von CSS `if()` Funktionen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf verschiedene Farbwerte zu setzen, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft. Dann verwenden wir die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften des `<article>` Elements und den `color` und `background-color` Eigenschaften des `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit verschiedenen Werten, die durch `if()` Funktionen gesetzt werden.

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

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn die Ansichtsbreite breiter als `700px` ist, und auf `3rem` ansonsten. Dies bedeutet, dass sich die Schriftgröße bei Änderungen der Ansichtsbreite dynamisch auf breiteren Bildschirmen aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
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

Dieses Demo rendert wie folgt:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbschema-Werte auszuwählen, um die Wirkung auf das Aussehen und Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Werte- und Einheitenmodul](/de/docs/Web/CSS/CSS_Values_and_Units)
