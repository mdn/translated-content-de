---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: d248d3fea7878283144f630070dc821d58c87744
---

{{CSSRef}}{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erlaubt es, je nach Ergebnis eines bedingten Tests unterschiedliche Werte für eine Eigenschaft festzulegen. Der Test kann auf einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature Query](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` ist ein `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature Query](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das ein `<if-condition>` darstellt, das immer als wahr ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS-`if()`-Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie die JavaScript-[`if ... else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen.

Die `if()`-Funktion kann innerhalb des Werts einer beliebigen Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jedes `<if-condition>` ist entweder ein `<if-test> : <value>`-Paar oder ein `else : <value>`-Paar. Das Semikolon nach dem letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Der erste `<if-condition>`, der als `true` ausgewertet wird, hat seinen zugeordneten `<value>` zurückgegeben.
3. Wenn kein `<if-condition>` als `true` ausgewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert ungültig&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()`-Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}}-Funktion.

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

In diesem Fall setzen wir auf {{htmlelement("div")}}-Elementen ein anderes {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}}, abhängig davon, ob eine `--scheme`- [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Falls `--scheme` nicht existiert oder auf einen anderen Wert gesetzt ist, greift der `else`-Wert und die `background-image`-Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt sein, und jedes `<if-condition> : <value>`-Paar muss durch ein Semikolon getrennt sein. Das Semikolon ist für das letzte `<if-condition> : <value>`-Paar optional.

> [!WARNING]
> Zwischen dem `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen stehen. Ist dies der Fall, ist die gesamte Deklaration ungültig.

Wenn ein einzelnes `<if-condition>` oder `<value>` ungültig ist, macht dies nicht die gesamte `if()`-Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>`-Paar über. Wenn kein `<if-condition>` noch `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare innerhalb einer `if()`-Funktion einfügen, in beliebiger Position. In den meisten Fällen wird jedoch ein einzelnes `else : <value>`-Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s zu wahr ausgewertet wird.

Wenn Sie ein `else : <value>`-Paar vor allen `<if-test> : <value>`-Paaren einfügen, werden die Bedingungen, die darauf folgen, nicht ausgewertet, da `else` immer zu `true` ausgewertet wird. Die folgende `if()` gibt daher immer `none` zurück und die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, in dem Sie möglicherweise ein `else : <value>` an einer anderen Position als am Ende der Werteliste einfügen möchten. Im folgenden Beispiel versuchen wir festzustellen, ob das erste `<if-test> : <value>`-Paar richtig funktioniert. Falls nicht, gibt das `else : <value>`-Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>`-Paar repariert werden muss. Die letzten zwei `<if-test> : <value>`-Paare werden erneut nie ausgewertet.

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

Beachten Sie, dass eine `if()`-Funktion auch dann gültig ist, wenn sie nur ein `else : <value>`-Paar oder überhaupt nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}}-Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Standardwert gesetzt. Es wäre besser, `background-color` direkt auf `yellow` zu setzen und `background-image` auf `initial` oder `none`.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt wird jeder detailliert betrachtet.

#### Stilabfragen

Ein `<if-test>` einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es, zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und einen Wert auf eine andere Eigenschaft als Ergebnis anzuwenden. Wir haben bereits mehrere Beispiele für Stilabfragen durchgearbeitet; hier ist ein weiteres Beispiel:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` mit einem Wert von `ice` auf demselben Element gesetzt ist, wird der angegebene `linear-gradient()`-Wert zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Stilabfragen innerhalb von `if()`-Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}}-Abfragen — Sie können ein Element basierend darauf direkt mit Stilen versehen, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt die festgelegten Stile auf einem übergeordneten Containerelement zu überprüfen.

Sie können auch `und`, `oder` oder `nicht`-Logik innerhalb von Stilabfragen verwenden. Zum Beispiel:

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

Eine `@container`-Abfrage hat einige Vorteile — mit `if()`-Stilabfragen können Sie jeweils nur einzelne Eigenschaftswerte festlegen, während `@container`-Abfragen verwendet werden können, um ganze Regelsets bedingt anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

Beachten Sie, dass containergestützte Stilabfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur benutzerdefinierte CSS-Eigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media Queries

Ein `<if-test>` einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media Query-Test `true` zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>`-Paar einen Wert von `white` auf Druckmedien zurück, während die `else`-Klausel `#eee` auf Nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienmerkmale verwenden — das Folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewport-Breite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media Query-Ergebnis variieren müssen.

Sie können auch `und`, `oder` oder `nicht`-Logik innerhalb von Media Queries verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media Query festlegen möchten, wird ein regulärer {{cssxref("@media")}}-Konstrukt benötigt. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

#### Feature Queries

Ein `<if-test>` einer [Feature Query](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das Folgende eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}}-Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Auch Abfragen zur Selektorunterstützung funktionieren. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}}-Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `und`, `oder` oder `nicht`-Logik innerhalb von Feature Queries verwenden. Zum Beispiel:

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

Feature Queries sind innerhalb von `if()`-Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature Query festlegen möchten, ist ein regulärer {{cssxref("@supports")}}-Konstrukt besser geeignet. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht ohne Weiteres; für nicht unterstützende Browser muss ein expliziter Fallback bereitgestellt werden.

Zum Beispiel geben wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die verschiedene Padding-Werte festlegt, je nachdem, ob die benutzerdefinierte Eigenschaft `--size: 2xl` gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung einzuschließen. In `if()`-unterstützenden Browsern wird das Padding auf `initial` gesetzt, wenn kein `else`-Wert enthalten ist und `--size` nicht `2xl` entspricht.

### Ganze und teilweise Werte

Eine `if()`-Funktion kann als Wert einer beliebigen CSS-Eigenschaft festgelegt werden, kann jedoch auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Das folgende Beispiel setzt eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}}-Kurzschreibweise, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);
```

Wir könnten jedoch die `if()`-Funktion benutzen, um nur die {{cssxref("border-color")}}-Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(77.7% 0 0)): lch(77.7% 0 0); else: #c0c0c0;
  );
```

### Verschachtelung von if()-Funktionen

Da eine `if()`-Funktion als Platzhalter für ganze Eigenschaftswerte oder einzelne Komponenten dienen kann, ist es möglich, `if()`-Funktionen in andere `if()`-Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

In diesem Beispiel verwenden wir `if()`, um einen `color`-Eigenschaftswert abhängig von verschiedenen Bedingungen zu setzen. Wir haben eine äußere `if()`-Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen wahr ist).

Die beiden `<value>`s sind ebenfalls `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media Query) und einen dunklen Farbwert sonst.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()`-Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Ist dies nicht der Fall, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` wird.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `if()`

In diesem Beispiel zeigen wir die grundlegende Verwendung jeder der drei `<if-test>`-Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei darin enthaltenen {{htmlelement("article")}}-Elementen, die `<h2>`-[Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>`-Element hat eine benutzerdefinierte Eigenschaft in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut gesetzt — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert zu setzen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>`-Element ab, legen es mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) an und setzen einen {{cssxref("gap")}} zwischen die beiden Kind-`<article>`-Elemente. Dann verwenden wir eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation)-Media Query `<if-test>`, um den Wert der {{cssxref("flex-direction")}}-Eigenschaft auf `row` zu setzen, wenn das Dokument sich im Querformat befindet, oder `column`, wenn es im Hochformat ist. Dies legt die `article`-Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen an.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudoelement des `<h2>`-Elements ab und setzen seine {{cssxref("content")}}-Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (wir haben dies zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()`-Funktion mit einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>`-Element selbst ab. Wir verwenden ein Feature Query `<if-test>`, um zu testen, ob der Browser `lch()`-Farben unterstützt, und setzen die {{cssxref("color")}}-Eigenschaft auf eine `lch()`-Farbe, wenn ja, oder ein äquivalentes Hex-Format, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie die bedingte Formatierung für die ersten beiden `if()`-Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style`-Attribut des `<section>`-Elements und beachten Sie, wie die Apfel-Emojis nicht mehr angezeigt werden.
- Ändern Sie das `height`-Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch wird die Orientierung von Querformat auf Hochformat geändert. Beachten Sie, wie sich das Layout dadurch ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS-`if()`-Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()`-Funktionen, um Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, sodass wir das gesamte Farbschema kontrollieren können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}}-Element mit einem {{htmlelement("select")}}-Dropdown hinzu, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut des `<article>`-Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto`-{{cssxref("margin")}}-Werten. Allerdings verwenden wir eine `if()`-Funktion mit einem Media Query `<if-test>`, um die {{cssxref("margin-top")}}-Komponente innerhalb der `margin`-Kurzschreibweise auf `0` zu setzen, wenn die Viewport-Breite weniger als `700px` beträgt, und auf `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen ein wenig Rand oben am Inhalt haben, aber dieser wird auf schmalen Bildschirmen entfernt, wo er etwas seltsam aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme` so, dass sie dem Klassennamen des `<article>`-Elements entspricht. Die Klasse wird durch unser JavaScript gesetzt, wenn ein neuer Wert im `<select>`-Element ausgewählt wird. Sie werden die Bedeutung dieses benutzerdefinierten Elementwerts im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wirkliche Stärke von CSS-`if()`-Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` auf verschiedene Farbwerte zu setzen, abhängig vom Wert der `--scheme`-Eigenschaft. Dann verwenden wir die Werte von `--color1` und `--color2` in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}}-Eigenschaften des `<article>`-Elements sowie in den `color` und `background-color`-Eigenschaften des `<aside>`-Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die über `if()`-Funktionen gesetzt werden.

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

Schließlich verwenden wir `if()`-Funktionen an ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>`-Elements auf `calc(3rem + 2vw)`, wenn die Viewport-Breite mehr als `700px` beträgt, und auf `3rem` ansonsten. Dies bedeutet, dass sich die Schriftgröße dynamisch mit Änderungen der Viewport-Breite auf breiten Bildschirmen aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}}-Pseudoklasse unseres `<h1>`-Elements, abhängig vom Wert der `--scheme`-Eigenschaft.

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

Versuchen Sie, verschiedene Farbschemawerte auszuwählen, um die Wirkung auf das Aussehen und das Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Wert- und Einheitenmodul](/de/docs/Web/CSS/CSS_Values_and_Units)
