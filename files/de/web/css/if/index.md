---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft basierend auf dem Ergebnis eines bedingten Tests festzulegen. Der Test kann auf einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine mit Semikolon getrennte Liste von `<if-branch>`-Elementen. Jedes `<if-branch>` besteht aus einer `<if-condition>` gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer wahr ist.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantiert ungültiger")}} Wert.

## Beschreibung

Die CSS `if()`-Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert in ähnlicher Weise wie die JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()`-Funktion kann innerhalb des Wertes jeder Eigenschaft verwendet werden und kann null oder mehr mit Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>`-Paar oder ein `else : <value>`-Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die zu `true` ausgewertet wird, gibt ihren zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` zu `true` ausgewertet wird, gibt die Funktion eine {{Glossary("guaranteed_invalid_value", "&lt;garantiert ungültige&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()`-Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}}-Funktion.

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

In diesem Fall setzen wir einen anderen {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, je nachdem, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder es existiert und auf einen anderen Wert gesetzt ist, greift der `else`-Wert, und die `background-image`-Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>`-Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>`-Paar optional.

> [!WARNING]
> Es darf sich kein Leerzeichen zwischen dem `if` und der öffnenden Klammer (`(`) befinden. Wenn doch, ist die gesamte Deklaration ungültig.

Wenn eine einzige `<if-condition>` oder `<value>` ungültig ist, macht dies nicht die gesamte `if()`-Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>`-Paar über. Wenn keine `<if-condition>` noch `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare innerhalb einer `if()`-Funktion in beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>`-Paar am Ende der mit Semikolon getrennten Liste verwendet, um den Standardwert zu liefern, der immer zurückgegeben wird, wenn keiner der `<if-test>`s zu true auswertet.

Wenn Sie ein `else : <value>`-Paar vor allen `<if-test> : <value>`-Paaren einfügen, werden die folgenden Bedingungen nicht ausgewertet, da `else` immer zu `true` auswertet. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Stelle als am Ende der Wertliste positionieren möchten. Im folgenden Beispiel versuchen wir festzustellen, ob das erste `<if-test> : <value>`-Paar richtig funktioniert. Wenn nicht, gibt das `else : <value>`-Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das anzeigt, dass das erste `<if-test> : <value>`-Paar repariert werden muss. Die letzten beiden `<if-test> : <value>`-Paare werden wieder nie ausgewertet.

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

Beachten Sie, dass eine `if()`-Funktion weiterhin gültig ist, wenn sie nur ein `else : <value>`-Paar oder überhaupt nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der Wert von {{cssxref("background-color")}} immer auf `yellow` gesetzt und das `background-image` auf seinen Anfangswert zurückgesetzt. Es wäre besser, die `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Typen von if-Tests

Ein `<if-test>` akzeptiert einen von drei Abfragetypen. In diesem Abschnitt werden sie im Detail betrachtet.

#### Stilabfragen

Ein `<if-test>` einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und infolgedessen einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben zuvor mehrere Beispiele für Stilabfragen durchlaufen; sehen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme`-benutzerdefinierte Eigenschaft auf demselben Element auf einen Wert von `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()`-Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Der Vorteil der Verwendung von Stilabfragen innerhalb von `if()`-Anweisungen gegenüber {{cssxref("@container")}}-Abfragen ist, dass Sie ein Element direkt mit Stilen ansprechen können, basierend darauf, ob eine benutzerdefinierte Eigenschaft auf ihm gesetzt ist, anstatt die gesetzten Stile auf einem übergeordneten Containerelement überprüfen zu müssen.

Sie können auch Logik wie `and`, `or` oder `not` innerhalb von Stilabfragen verwenden. Zum Beispiel:

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

Eine `@container`-Abfrage hat einige Vorteile — Sie können mit `if()`-Stilabfragen jeweils nur einzelne Eigenschaftswerte setzen, während `@container`-Abfragen verwendet werden können, um ganze Regelsätze bedingt anzuwenden. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

Beachten Sie, dass Container-Stilabfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur benutzerdefinierte CSS-Eigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Medienabfragen

Ein [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Test der Medienabfrage zu true auswertet.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>`-Paar auf Printmedien einen Wert von `white` zurück, während im `else`-Teil `#eeeeee` auf nicht-Printmedien zurückgegeben wird.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienfeatures verwenden — im folgenden Beispiel wird ein Wert von `0 auto` zurückgegeben, wenn die aktuelle Viewport-Breite kleiner als `700px` ist, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Medienabfrage-Ergebnis variieren müssen.

Sie können auch Logik wie `and`, `or` oder `not` innerhalb von Medienabfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Medienabfrage festlegen möchten, ist eine reguläre {{cssxref("@media")}}-Konstruktion erforderlich. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

#### Funktionsabfragen

Ein [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser eine bestimmte Eigenschaft unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}}-Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Auch Abfragen zur Selektorunterstützung funktionieren. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}}-Pseudoklasse unterstützt, oder `initial` wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch Logik wie `and`, `or` oder `not` innerhalb von Funktionsabfragen verwenden. Zum Beispiel:

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

Funktionsabfragen sind in `if()`-Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Funktionsabfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}}-Konstruktion besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht auf anmutige Weise; ein explizites Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel stellen wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser bereit, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte festlegt, je nachdem, ob die `--size: "2xl"` benutzerdefinierte Eigenschaft gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung einzuschließen. In Browsern, die `if()` unterstützen, wird `initial` für das Padding gesetzt, wenn kein `else`-Wert enthalten ist und `--size` nicht gleich `"2xl"` ist.

### Ganze und teilweise Werte

Eine `if()`-Funktion kann als Wert jeder CSS-Eigenschaft gesetzt werden, aber sie kann auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende Beispiel eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}}-Kurzformat-Eigenschaft, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten jedoch die `if()`-Funktion verwenden, um nur die {{cssxref("border-color")}}-Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachtelung von if() Funktionen

Da eine `if()`-Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()`-Funktionen innerhalb anderer `if()`-Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color`-Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()`-Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen zu true auswertet).

Die zwei `<value>`s sind jedoch ebenfalls `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage), und einen dunklen Farbwert andernfalls.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des übergeordneten Elements subtrahiert. Der Prozentwert wird durch eine `if()`-Funktion dargestellt, die prüft, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` aufgelöst wird.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()`-Verwendung

In diesem Beispiel zeigen wir die grundlegende Verwendung der drei `<if-test>`-Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei darin enthaltenen {{htmlelement("article")}}-Elementen, die `<h2>`-[Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft inside seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut gesetzt — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>`-Element ab, indem wir es mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) layouten und ein {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>`-Elementen setzen. Wir verwenden dann eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}}-Eigenschaft auf `row` zu setzen, wenn das Dokument sich im Querformat befindet, oder auf `column`, wenn es im Hochformat ist. Dies layoutet die `article`-Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>`-Elements ab und setzen die {{cssxref("content")}}-Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (wir haben dies zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML getan). Wir erreichen dies durch eine `if()`-Funktion mit einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Zum Schluss zielen wir auf das `<h2>`-Element selbst. Wir verwenden eine Funktionsabfrage `<if-test>`, um zu testen, ob der Browser `lch()`-Farben unterstützt, und setzen die {{cssxref("color")}}-Eigenschaft auf eine `lch()`-Farbe, wenn ja, oder auf ein gleichwertiges Hex, wenn nicht.

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

Beachten Sie, wie die Gestaltung angewendet wird. Testen Sie die bedingte Gestaltung für die ersten beiden `if()`-Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style`-Attribut des `<section>`-Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height`-Attribut des einbettenden `<iframe>` auf `1200px`. Dies ändert die Orientierung von Querformat auf Hochformat. Beachten Sie, wie sich das Layout als Ergebnis ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()`-Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen und so das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Überschrift, einige {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}}-Dropdown ein, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut des `<article>`-Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto`-{{cssxref("margin")}}-Werten. Wir verwenden jedoch eine `if()`-Funktion mit einer Medienabfrage `<if-test>`, um die {{cssxref("margin-top")}}-Komponente innerhalb der `margin`-Kurzformat-Eigenschaft auf `0` zu setzen, wenn die Viewport-Breite kleiner als `700px` ist, und `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen ein wenig Rand oben am Inhalt haben, der jedoch auf schmalen Bildschirmen entfernt wird, wo er seltsam aussieht.

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

Dann setzen wir die `--scheme`-benutzerdefinierte Eigenschaft so, dass sie mit dem Klassennamen des `<article>`-Elements übereinstimmt. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert im `<select>`-Element ausgewählt wird. Sie sehen die Bedeutung des benutzerdefinierten Elementwerts im nächsten CSS-Block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Die wahre Stärke der CSS-`if()`-Funktionen zeigt sich, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um unsere `--color1` und `--color2`-benutzerdefinierten Eigenschaften auf unterschiedliche Farbwerte zu setzen, abhängig vom Wert der `--scheme`-benutzerdefinierten Eigenschaft. Dann verwenden wir die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}}-Eigenschaften des `<article>`-Elements und in den `color` und `background-color`-Eigenschaften des `<aside>`-Elements.

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

Zum Schluss verwenden wir `if()`-Funktionen an ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} des `<h1>`-Elements auf `calc(3rem + 2vw)`, wenn der Viewport breiter als `700px` ist, und auf `3rem` andernfalls. Das bedeutet, dass die Schriftgröße auf breiten Bildschirmen dynamisch mit Änderungen der Viewport-Breite aktualisiert wird, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein passendes Emoji als {{cssxref("content")}} der {{cssxref("::before")}}-Pseudo-Klasse unseres `<h1>`-Elements, abhängig vom Wert der `--scheme`-benutzerdefinierten Eigenschaft.

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

Versuchen Sie, unterschiedliche Farbschemata auszuwählen, um die Auswirkung auf das Erscheinungsbild zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Values- und -Units-Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
