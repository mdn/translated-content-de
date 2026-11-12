---
title: CSS-Funktion `if()`
short-title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{SeeCompatTable}}

Mit der **[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) `if()`** können für eine Eigenschaft abhängig vom Ergebnis einer bedingten Prüfung unterschiedliche Werte festgelegt werden. Die Prüfung kann auf einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), einer [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) oder einer [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`-Einträgen. Jeder `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort für eine `<if-condition>`, die immer als wahr ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "guaranteed-invalid")}}.

## Beschreibung

Die CSS-Funktion `if()` ermöglicht bedingte Logik in CSS-Eigenschaftswerten und funktioniert ähnlich wie [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen in JavaScript.

Die Funktion `if()` kann innerhalb des Werts jeder Eigenschaft verwendet werden und null oder mehr durch Semikolons getrennte `<if-condition>`-Einträge enthalten. Jede `<if-condition>` ist entweder ein Paar aus `<if-test> : <value>` oder ein Paar aus `else : <value>`. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt ermittelt:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion stehen.
2. Der zugehörige `<value>` der ersten `<if-condition>`, die als `true` ausgewertet wird, wird zurückgegeben.
3. Wird keine `<if-condition>` als `true` ausgewertet, gibt die Funktion {{Glossary("guaranteed_invalid_value", "&lt;guaranteed-invalid&gt:")}} zurück. Dies wird als ungültig oder als `false` behandelt, wenn die Funktion `if()` in einer Wertangabe mit einem Fallback verwendet wird, etwa bei einer [Custom Property](/de/docs/Web/CSS/Reference/Properties/--*) oder einer {{cssxref("anchor()")}}-Funktion.

Beispiel:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

In diesem Fall legen wir für {{htmlelement("div")}}-Elemente je nach Wert der [Custom Property](/de/docs/Web/CSS/Reference/Properties/--*) `--scheme` einen anderen {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} fest: entweder für `ice` oder für `fire`. Wenn `--scheme` nicht existiert oder einen anderen Wert hat, greift der `else`-Wert und die Eigenschaft `background-image` wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt sein. Jedes Paar aus `<if-condition> : <value>` muss durch ein Semikolon vom nächsten getrennt sein. Beim letzten Paar ist das Semikolon optional.

> [!WARNING]
> Zwischen `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen stehen. Andernfalls ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein einzelner `<value>` ungültig ist, wird dadurch nicht die gesamte Funktion `if()` ungültig. Stattdessen geht der Parser zum nächsten Paar aus `<if-condition> : <value>` über. Ist weder eine `<if-condition>` noch ein `<value>` gültig, gibt die Funktion {{Glossary("guaranteed_invalid_value", "guaranteed-invalid")}} zurück.

### Anzahl und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare an beliebiger Stelle in eine `if()`-Funktion aufnehmen. Meist wird jedoch ein einzelnes `else : <value>`-Paar am Ende der durch Semikolons getrennten Liste verwendet. Es liefert den Standardwert, wenn keiner der `<if-test>`-Einträge als wahr ausgewertet wird.

Wenn Sie ein `else : <value>`-Paar vor den `<if-test> : <value>`-Paaren einfügen, werden die nachfolgenden Bedingungen nicht ausgewertet, da `else` immer als `true` ausgewertet wird. Die folgende `if()`-Funktion gibt daher immer `none` zurück; die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Beim Debuggen eines Werts, der sich nicht wie erwartet verhält, kann es sinnvoll sein, ein `else : <value>`-Paar an einer anderen Stelle als am Ende der Werteliste zu platzieren. Im folgenden Beispiel prüfen wir, ob das erste `<if-test> : <value>`-Paar richtig funktioniert. Falls nicht, gibt das `else : <value>`-Paar `url("debug.png")` zurück. Damit wird ein Bild angezeigt, das darauf hinweist, dass das erste Paar korrigiert werden muss. Die letzten beiden `<if-test> : <value>`-Paare werden auch hier nie ausgewertet.

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

Eine `if()`-Funktion ist auch dann gültig, wenn sie nur ein `else : <value>`-Paar oder gar keinen Inhalt enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich; sie dienen lediglich dazu, ihre Gültigkeit zu zeigen. In diesem Fall wird {{cssxref("background-color")}} immer auf `yellow` und `background-image` auf seinen Initialwert gesetzt. Sinnvoller wäre es, `background-color` direkt auf `yellow` und `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-Tests

Ein `<if-test>` akzeptiert einen von drei Query-Typen. In diesem Abschnitt werden sie einzeln erläutert.

#### Style-Queries

Mit einem `<if-test>` als [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) können Sie prüfen, ob für ein Element ein bestimmter Eigenschaftswert festgelegt ist, und davon abhängig einen Wert auf eine andere Eigenschaft anwenden. Nachdem wir bereits mehrere Beispiele für Style-Queries betrachtet haben, sehen wir uns ein weiteres an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die Custom Property `--scheme` auf demselben Element den Wert `ice` hat, wird der angegebene Wert `linear-gradient()` zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Style-Queries innerhalb von `if()`-Anweisungen hat gegenüber {{cssxref("@container")}}-Queries einen Vorteil: Sie können die Stile eines Elements direkt davon abhängig machen, ob auf ihm eine Custom Property gesetzt ist. Sie müssen dafür nicht die festgelegten Stile eines übergeordneten Container-Elements prüfen.

Innerhalb von Style-Queries können Sie auch die logischen Operatoren `and`, `or` und `not` verwenden. Beispiel:

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

Eine `@container`-Query bietet allerdings ebenfalls Vorteile: Mit Style-Queries in `if()` können Sie jeweils nur einzelne Eigenschaftswerte festlegen, während sich mit `@container`-Queries ganze Regelsätze bedingt anwenden lassen. Die beiden Ansätze ergänzen sich und haben unterschiedliche Einsatzbereiche.

Beachten Sie, dass Container-Style-Queries derzeit nur CSS Custom Properties unterstützen, keine regulären CSS-Eigenschaften. Folgendes funktioniert beispielsweise nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Queries

Mit einem `<if-test>` als [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) können Sie einen Eigenschaftswert davon abhängig machen, ob eine Media-Query als wahr ausgewertet wird.

Sie können Medientypen verwenden. Das folgende `<if-test> : <value>`-Paar gibt beispielsweise für Printmedien `white` zurück. Durch die `else`-Klausel wird für andere Medien `#eeeeee` zurückgegeben.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden. Das folgende Beispiel gibt `0 auto` zurück, wenn die aktuelle Breite des Viewports weniger als `700px` beträgt, und andernfalls `20px auto`:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Das ist besonders nützlich, wenn Sie einen einzelnen Eigenschaftswert abhängig vom Ergebnis einer Media-Query ändern müssen.

Innerhalb von Media-Queries können Sie auch die logischen Operatoren `and`, `or` und `not` verwenden. Beispiel:

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

Wenn Sie anhand einer Media-Query mehrere Deklarationen oder Regeln festlegen möchten, benötigen Sie eine reguläre {{cssxref("@media")}}-Konstruktion. Die beiden Ansätze ergänzen sich und haben unterschiedliche Einsatzbereiche.

#### Feature-Queries

Mit einem `<if-test>` als [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) können Sie einen Eigenschaftswert davon abhängig machen, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Das folgende Beispiel gibt eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, und andernfalls eine {{cssxref("color_value/rgb()")}}-Farbe:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Auch Queries zur Selektorunterstützung funktionieren. Das folgende Beispiel gibt `1em` zurück, wenn der Browser die Pseudoklasse {{cssxref(":buffering")}} unterstützt, und andernfalls `initial`:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Innerhalb von Feature-Queries können Sie auch die logischen Operatoren `and`, `or` und `not` verwenden. Beispiel:

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

Feature-Queries innerhalb von `if()`-Anweisungen sind besonders nützlich, wenn Sie einen einzelnen Eigenschaftswert davon abhängig machen möchten, ob ein bestimmter Wert oder eine andere Eigenschaft unterstützt wird. Wenn Sie anhand einer Feature-Query mehrere Deklarationen oder Regeln festlegen möchten, ist eine reguläre {{cssxref("@supports")}}-Konstruktion besser geeignet. Die beiden Ansätze ergänzen sich und haben unterschiedliche Einsatzbereiche.

### Fallback-Werte bereitstellen

Eine `if()`-Anweisung bietet keinen automatischen Fallback; für Browser ohne Unterstützung muss ausdrücklich einer bereitgestellt werden.

Im folgenden Beispiel legen wir für Browser, die `if()` nicht unterstützen, einen festen {{cssxref("padding")}}-Wert fest. Browser mit `if()`-Unterstützung überschreiben die erste Deklaration mit der zweiten. Diese legt unterschiedliche Padding-Werte fest, je nachdem, ob die Custom Property `--size: "2xl"` gesetzt ist.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung anzugeben. In Browsern mit `if()`-Unterstützung würde `padding` auf `initial` gesetzt, wenn kein `else`-Wert angegeben wäre und `--size` nicht `"2xl"` entspräche.

### Ganze Werte und Teilwerte

Eine `if()`-Funktion kann als Wert jeder CSS-Eigenschaft verwendet werden. Sie kann aber auch einzelne Bestandteile eines Eigenschaftswerts bestimmen. Das folgende Beispiel legt innerhalb der Kurzschreibweise {{cssxref("border")}} einen anderen Wert für {{cssxref("border-color")}} fest, je nachdem, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten die `if()`-Funktion jedoch auch nur für die Komponente {{cssxref("border-color")}} verwenden:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### `if()`-Funktionen verschachteln

Da eine `if()`-Funktion sowohl vollständige Eigenschaftswerte als auch einzelne Bestandteile ersetzen kann, lässt sie sich in anderen `if()`-Funktionen und in Funktionen wie {{cssxref("calc()")}} verschachteln.

In der folgenden Deklaration verwenden wir `if()`, um den Wert der Eigenschaft `color` abhängig von mehreren Bedingungen festzulegen. Eine äußere `if()`-Funktion gibt einen bestimmten Wert zurück, je nachdem, ob die Custom Property `--scheme` auf `ice` oder `fire` gesetzt ist. Wenn keine der Bedingungen wahr ist, wird über `else` der Wert `black` zurückgegeben.

Die beiden `<value>`-Einträge sind allerdings ebenfalls `if()`-Funktionen. Diese inneren Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt. Das wird mit der Media-Query [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) ermittelt. Andernfalls geben sie einen dunklen Farbwert zurück.

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

Im nächsten Beispiel setzen wir die Eigenschaft `width` auf eine `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des übergeordneten Elements abzieht. Der Prozentsatz wird durch eine `if()`-Funktion bestimmt, die prüft, ob die Custom Property `--scheme: wide` gesetzt ist. Ist dies der Fall, beträgt der Prozentsatz `70%`, sodass die äußere Funktion `calc(70% - 50px)` ergibt. Andernfalls beträgt er `50%` und die äußere Funktion ergibt `calc(50% - 50px)`.

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

Dieses Beispiel zeigt die grundlegende Verwendung der drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei {{htmlelement("article")}}-Elementen, die jeweils eine `<h2>`-[Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Für `<section>` ist im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eine Custom Property festgelegt: `--show-apple:true`. Damit legen wir später bedingt einen Eigenschaftswert fest.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS wählen wir zunächst das `<section>`-Element aus, ordnen es mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) an und legen mit {{cssxref("gap")}} einen Abstand zwischen den beiden untergeordneten `<article>`-Elementen fest. Anschließend verwenden wir eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)-Media-Query als `<if-test>`. Dadurch erhält die Eigenschaft {{cssxref("flex-direction")}} den Wert `row`, wenn das Dokument im Querformat angezeigt wird, und `column`, wenn es im Hochformat angezeigt wird. So stehen die `article`-Elemente auf breiten Bildschirmen nebeneinander und auf schmalen Bildschirmen untereinander.

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

Als Nächstes wählen wir das Pseudoelement {{cssxref("::before")}} des `<h2>`-Elements aus. Seine Eigenschaft {{cssxref("content")}} erhält ein Apfel-Emoji, allerdings nur, wenn `--show-apple: true` gesetzt ist. Das haben wir zuvor im HTML mit einem Inline-{{htmlelement("style")}} festgelegt. Dazu verwenden wir eine `if()`-Funktion mit einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#style_queries_for_custom_properties) als `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich wählen wir das `<h2>`-Element selbst aus. Mit einer Feature-Query als `<if-test>` prüfen wir, ob der Browser `lch()`-Farben unterstützt. Ist dies der Fall, setzen wir die Eigenschaft {{cssxref("color")}} auf eine `lch()`-Farbe, andernfalls auf einen entsprechenden Hexwert.

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

Beachten Sie, wie die Stile angewendet werden. Testen Sie die bedingte Gestaltung der ersten beiden `if()`-Queries, indem Sie die dargestellte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das Attribut `style` des `<section>`-Elements. Die Apfel-Emojis werden dann nicht mehr angezeigt.
- Ändern Sie das Attribut `height` des einbettenden `<iframe>` auf `1200px`. Dadurch wechselt die Ausrichtung vom Quer- zum Hochformat. Beachten Sie, wie sich das Layout dadurch ändert.

### Ein Farbschema mit `if()` steuern

Diese Demo zeigt, welche Möglichkeiten CSS-Funktionen vom Typ `if()` bieten. Unter anderem verwenden wir sie, um die Werte einiger Custom Properties bedingt festzulegen und so das gesamte Farbschema zu steuern.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit Inhalt: eine Überschrift der obersten Ebene, einige {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}-Element. Außerdem enthält es ein {{htmlelement("form")}} mit einem {{htmlelement("select")}}-Dropdown zur Auswahl eines Farbschemas.

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

#### CSS

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit dem Wert `auto` für {{cssxref("margin")}}. Mit einer `if()`-Funktion und einer Media-Query als `<if-test>` setzen wir die Komponente {{cssxref("margin-top")}} innerhalb der `margin`-Kurzschreibweise auf `0`, wenn der Viewport weniger als `700px` breit ist, und andernfalls auf `20px`. Auf breiten Bildschirmen entsteht so ein kleiner Abstand oberhalb des Inhalts. Auf schmalen Bildschirmen entfällt er, weil er dort unpassend wirkt.

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

Anschließend setzen wir die Custom Property `--scheme` entsprechend dem `class`-Namen des `<article>`-Elements. Unsere JavaScript-Anwendung legt diese Klasse fest, wenn im `<select>`-Element ein neuer Wert ausgewählt wird. Im nächsten CSS-Block sehen Sie, welche Bedeutung der Wert der Custom Property hat.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Das Potenzial von CSS-Funktionen vom Typ `if()` zeigt sich besonders in Kombination mit Custom Properties. Hier setzen wir die Custom Properties `--color1` und `--color2` mit `if()`-Funktionen auf unterschiedliche Farbwerte, abhängig vom Wert der Custom Property `--scheme`. Anschließend verwenden wir `--color1` und `--color2` für die Eigenschaften {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} des `<article>`-Elements sowie für `color` und `background-color` des `<aside>`-Elements.

Damit steuern wir das gesamte Farbschema über Custom Properties, deren unterschiedliche Werte durch `if()`-Funktionen festgelegt werden.

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

Schließlich verwenden wir `if()`-Funktionen noch an zwei weiteren Stellen:

- Wir setzen {{cssxref("font-size")}} für das `<h1>`-Element auf `calc(3rem + 2vw)`, wenn der Viewport breiter als `700px` ist, und andernfalls auf `3rem`. Dadurch passt sich die Schriftgröße auf breiten Bildschirmen dynamisch an Änderungen der Viewport-Breite an, bleibt auf schmalen Bildschirmen aber gleich.
- Wir legen abhängig vom Wert der Custom Property `--scheme` ein passendes Emoji als {{cssxref("content")}} des Pseudoelements {{cssxref("::before")}} des `<h1>`-Elements fest.

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

#### JavaScript

Unser JavaScript fügt dem `<select>`-Element einen Event-Listener für das Ereignis [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Wenn ein neuer Wert ausgewählt wird, setzt das Skript das Attribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) des `<article>`-Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

#### Ergebnis

Die Demo wird wie folgt dargestellt:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Wählen Sie verschiedene Farbschemata aus, um zu sehen, wie sich das Erscheinungsbild verändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Style-Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Modul für Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
