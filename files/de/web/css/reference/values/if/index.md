---
title: CSS-Funktion `if()`
short-title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Mit der **CSS-**[**Funktion**](/de/docs/Web/CSS/Reference/Values/Functions) **`if()`** können für eine Eigenschaft unterschiedliche Werte festgelegt werden, abhängig vom Ergebnis einer Bedingungsprüfung. Die Prüfung kann auf einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), einer [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) oder einer [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`-Ausdrücken. Jeder `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort für eine `<if-condition>`, deren Auswertung immer `true` ergibt.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "guaranteed-invalid")}}.

## Beschreibung

Die CSS-Funktion `if()` ermöglicht bedingte Logik in CSS-Eigenschaftswerten und funktioniert ähnlich wie [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen in JavaScript.

Die Funktion `if()` kann im Wert jeder Eigenschaft verwendet werden und null oder mehr durch Semikolons getrennte `<if-condition>`-Ausdrücke enthalten. Jede `<if-condition>` ist entweder ein Paar aus `<if-test> : <value>` oder aus `else : <value>`. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt ermittelt:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion stehen.
2. Für die erste `<if-condition>`, deren Auswertung `true` ergibt, wird der zugehörige `<value>` zurückgegeben.
3. Ergibt keine `<if-condition>` den Wert `true`, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;guaranteed-invalid&gt:")}} zurück. Dieser verhält sich wie ein ungültiger Wert oder wie `false`, wenn die Funktion `if()` in einem Wertausdruck mit einem Fallback verwendet wird, etwa in einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder einer {{cssxref("anchor()")}}-Funktion.

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

In diesem Fall legen wir für {{htmlelement("div")}}-Elemente unterschiedliche {{cssxref("linear-gradient()")}}-Werte als {{cssxref("background-image")}} fest, je nachdem, ob die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--scheme` auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder auf einen anderen Wert gesetzt ist, greift der `else`-Wert und die Eigenschaft `background-image` wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt sein. Jedes Paar aus `<if-condition> : <value>` muss durch ein Semikolon vom nächsten getrennt sein. Beim letzten Paar aus `<if-condition> : <value>` ist das Semikolon optional.

> [!WARNING]
> Zwischen `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen stehen. Andernfalls ist die gesamte Deklaration ungültig.

Ist eine einzelne `<if-condition>` oder ein einzelner `<value>` ungültig, wird dadurch nicht die gesamte Funktion `if()` ungültig. Stattdessen fährt der Parser mit dem nächsten Paar aus `<if-condition> : <value>` fort. Ist weder eine `<if-condition>` noch ein `<value>` gültig, gibt die Funktion {{Glossary("guaranteed_invalid_value", "guaranteed-invalid")}} zurück.

### Häufigkeit und Position von Paaren aus `else : <value>`

Sie können mehrere Paare aus `else : <value>` an beliebiger Stelle innerhalb einer `if()`-Funktion verwenden. Meistens wird jedoch ein einzelnes Paar aus `else : <value>` am Ende der durch Semikolons getrennten Liste eingesetzt. Es liefert den Standardwert, der zurückgegeben wird, wenn keiner der `<if-test>`-Ausdrücke `true` ergibt.

Wenn Sie ein Paar aus `else : <value>` vor den Paaren aus `<if-test> : <value>` einfügen, werden die nachfolgenden Bedingungen nicht ausgewertet, da `else` immer `true` ergibt. Das folgende `if()` gibt daher immer `none` zurück; die beiden Paare aus `<if-test> : <value>` werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Beim Debuggen eines Werts, der sich nicht wie erwartet verhält, kann es sinnvoll sein, `else : <value>` an einer anderen Stelle als am Ende der Werteliste zu platzieren. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste Paar aus `<if-test> : <value>` korrekt funktioniert. Falls nicht, gibt das Paar aus `else : <value>` den Wert `url("debug.png")` zurück. Dadurch wird ein Bild angezeigt, das darauf hinweist, dass das erste Paar aus `<if-test> : <value>` korrigiert werden muss. Die letzten beiden Paare aus `<if-test> : <value>` werden auch hier nie ausgewertet.

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

Eine `if()`-Funktion ist auch dann gültig, wenn sie nur ein Paar aus `else : <value>` oder überhaupt keinen Inhalt enthält. Die folgenden beiden Eigenschaftswerte sind gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie dienen lediglich dazu, ihre Gültigkeit zu veranschaulichen. In diesem Fall wird der Wert von {{cssxref("background-color")}} immer auf `yellow` und `background-image` auf seinen Anfangswert gesetzt. Sinnvoller wäre es, `background-color` direkt auf `yellow` und `background-image` auf `initial` oder `none` zu setzen.

### Arten von `<if-test>`-Ausdrücken

Ein `<if-test>` akzeptiert einen von drei Query-Typen. In diesem Abschnitt werden sie einzeln erläutert.

#### Style-Queries

Mit einem `<if-test>` in Form einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) können Sie prüfen, ob für ein Element ein bestimmter Eigenschaftswert festgelegt ist, und daraufhin einen Wert auf eine andere Eigenschaft anwenden. Wir haben bereits mehrere Beispiele für Style-Queries betrachtet. Sehen wir uns ein weiteres an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` für dasselbe Element auf `ice` gesetzt ist, wird der angegebene Wert `linear-gradient()` zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Style-Queries innerhalb von `if()`-Anweisungen hat gegenüber {{cssxref("@container")}}-Queries einen Vorteil: Sie können ein Element direkt anhand einer darauf gesetzten benutzerdefinierten Eigenschaft mit Styles versehen, statt die festgelegten Styles eines übergeordneten Container-Elements prüfen zu müssen.

Innerhalb von Style-Queries können Sie außerdem die logischen Operatoren `and`, `or` und `not` verwenden. Zum Beispiel:

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

Eine `@container`-Query hat allerdings auch Vorteile: Mit `if()`-Style-Queries können Sie jeweils nur einzelne Eigenschaftswerte festlegen, während Sie mit `@container`-Queries ganze Regelsätze bedingt anwenden können. Die beiden Ansätze ergänzen sich und eignen sich für unterschiedliche Zwecke.

Beachten Sie, dass Container-Style-Queries derzeit keine gewöhnlichen CSS-Eigenschaften unterstützen, sondern nur benutzerdefinierte CSS-Eigenschaften. Folgendes funktioniert beispielsweise nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Queries

Ein `<if-test>` in Form einer [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using) kann verwendet werden, um abhängig vom Ergebnis der Media-Query-Prüfung einen Eigenschaftswert festzulegen.

Sie können Medientypen verwenden. Das folgende Paar aus `<if-test> : <value>` gibt beispielsweise für Printmedien den Wert `white` zurück. Für andere Medien sorgt die `else`-Klausel dafür, dass `#eeeeee` zurückgegeben wird.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden: Das folgende Beispiel gibt `0 auto` zurück, wenn die aktuelle Breite des Viewports weniger als `700px` beträgt, und andernfalls `20px auto`:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Das ist besonders nützlich, wenn Sie einen einzelnen Eigenschaftswert abhängig vom Ergebnis einer Media-Query ändern müssen.

Innerhalb von Media-Queries können Sie außerdem die logischen Operatoren `and`, `or` und `not` verwenden. Zum Beispiel:

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

Wenn Sie anhand einer Media-Query mehrere Deklarationen oder Regeln festlegen möchten, benötigen Sie eine reguläre {{cssxref("@media")}}-Konstruktion. Die beiden Ansätze ergänzen sich und eignen sich für unterschiedliche Zwecke.

#### Feature-Queries

Ein `<if-test>` in Form einer [Feature-Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) kann verwendet werden, um einen Eigenschaftswert abhängig davon festzulegen, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Das folgende Beispiel gibt eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, und andernfalls eine {{cssxref("color_value/rgb()")}}-Farbe:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Queries zur Selektorunterstützung funktionieren ebenfalls. Das folgende Beispiel gibt `1em` zurück, wenn der Browser die Pseudoklasse {{cssxref(":buffering")}} unterstützt, und andernfalls `initial`:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Innerhalb von Feature-Queries können Sie außerdem die logischen Operatoren `and`, `or` und `not` verwenden. Zum Beispiel:

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

Feature-Queries innerhalb von `if()`-Anweisungen sind besonders nützlich, wenn Sie einen einzelnen Eigenschaftswert abhängig von der Unterstützung für einen bestimmten Wert oder eine andere Eigenschaft ändern müssen. Wenn Sie anhand einer Feature-Query mehrere Deklarationen oder Regeln festlegen möchten, eignet sich eine reguläre {{cssxref("@supports")}}-Konstruktion besser. Die beiden Ansätze ergänzen sich und eignen sich für unterschiedliche Zwecke.

### Fallback-Werte bereitstellen

Die `if()`-Anweisung bietet keinen automatischen Fallback für Browser ohne Unterstützung. Für diese Browser muss ausdrücklich ein Fallback bereitgestellt werden.

Im folgenden Beispiel geben wir einen festen {{cssxref("padding")}}-Wert für Browser an, die `if()` nicht unterstützen. Browser mit `if()`-Unterstützung überschreiben die erste Deklaration mit der zweiten. Diese legt unterschiedliche Padding-Werte fest, je nachdem, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` gesetzt ist.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung anzugeben. In Browsern mit `if()`-Unterstützung würde der Padding-Wert auf `initial` gesetzt, wenn kein `else`-Wert angegeben wäre und `--size` nicht gleich `"2xl"` wäre.

### Ganze Werte und Teilwerte

Eine `if()`-Funktion kann als Wert einer beliebigen CSS-Eigenschaft verwendet werden. Sie kann aber auch Teile von Eigenschaftswerten bestimmen. Das folgende Beispiel legt innerhalb der Kurzschreibweise {{cssxref("border")}} einen anderen {{cssxref("border-color")}}-Wert fest, je nachdem, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten die Funktion `if()` jedoch auch verwenden, um nur die Komponente {{cssxref("border-color")}} zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### `if()`-Funktionen verschachteln

Da eine `if()`-Funktion sowohl ganze Eigenschaftswerte als auch einzelne Komponenten ersetzen kann, lassen sich `if()`-Funktionen ineinander und in andere Funktionen wie {{cssxref("calc()")}} verschachteln.

In der folgenden Deklaration verwenden wir beispielsweise `if()`, um abhängig von verschiedenen Bedingungen einen Wert für die Eigenschaft `color` festzulegen. Die äußere `if()`-Funktion gibt einen bestimmten Wert zurück, je nachdem, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist. Wenn keine der beiden Bedingungen `true` ergibt, wird der `else`-Wert `black` zurückgegeben.

Die beiden `<value>`-Ausdrücke sind allerdings ebenfalls `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt – ermittelt über die Media-Query [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) – und andernfalls einen dunklen Farbwert.

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

Im nächsten Beispiel setzen wir die Eigenschaft `width` auf das Ergebnis einer `calc()`-Funktion, die `50px` von einem prozentualen Anteil der Breite des übergeordneten Elements abzieht. Der Prozentsatz wird durch eine `if()`-Funktion bestimmt, die prüft, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Falls ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion `calc(70% - 50px)` ergibt. Andernfalls beträgt er `50%`, sodass die äußere Funktion `calc(50% - 50px)` ergibt.

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

In diesem Beispiel zeigen wir die grundlegende Verwendung aller drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei {{htmlelement("article")}}-Elementen, die jeweils eine `<h2>`-[Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Für das `<section>`-Element ist im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eine benutzerdefinierte Eigenschaft festgelegt: `--show-apple:true`. Damit legen wir später bedingt einen Eigenschaftswert fest.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS wählen wir zunächst das `<section>`-Element aus, gestalten sein Layout mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und legen mit {{cssxref("gap")}} einen Abstand zwischen den beiden untergeordneten `<article>`-Elementen fest. Anschließend verwenden wir eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)-Media-Query als `<if-test>`. Damit setzen wir die Eigenschaft {{cssxref("flex-direction")}} auf `row`, wenn das Dokument im Querformat angezeigt wird, und auf `column`, wenn es im Hochformat angezeigt wird. So stehen die `article`-Elemente auf breiten Bildschirmen nebeneinander und auf schmalen Bildschirmen untereinander.

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

Als Nächstes wählen wir das Pseudoelement {{cssxref("::before")}} des `<h2>`-Elements aus und setzen seine Eigenschaft {{cssxref("content")}} auf ein Apfel-Emoji – allerdings nur, wenn `--show-apple: true` gesetzt ist. Das haben wir zuvor in unserem HTML über ein Inline-{{htmlelement("style")}}-Element getan. Dazu verwenden wir eine `if()`-Funktion mit einer [Style-Query](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#style_queries_for_custom_properties) als `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich wählen wir das `<h2>`-Element selbst aus. Mit einer Feature-Query als `<if-test>` prüfen wir, ob der Browser `lch()`-Farben unterstützt. Falls ja, setzen wir die Eigenschaft {{cssxref("color")}} auf eine `lch()`-Farbe, andernfalls auf einen entsprechenden Hexadezimalwert.

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

Beachten Sie, wie die Styles angewendet werden. Testen Sie die bedingten Styles der ersten beiden `if()`-Queries, indem Sie die gerenderte Demo mit den Entwicklertools Ihres Browsers verändern:

- Entfernen Sie das Attribut `style` des `<section>`-Elements. Beachten Sie, dass die Apfel-Emojis nicht mehr angezeigt werden.
- Ändern Sie das Attribut `height` des einbettenden `<iframe>` auf `1200px`. Dadurch wechselt die Ausrichtung vom Querformat ins Hochformat. Beachten Sie, wie sich das Layout entsprechend ändert.

### Ein Farbschema mit `if()` steuern

Diese Demo zeigt, welche Möglichkeiten CSS-Funktionen vom Typ `if()` bieten. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen. So können wir das gesamte Farbschema steuern.

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit verschiedenen Inhalten: einer Überschrift erster Ebene, einigen {{htmlelement("p")}}-Elementen und einem {{htmlelement("aside")}}-Element. Außerdem fügen wir ein {{htmlelement("form")}}-Element mit einer {{htmlelement("select")}}-Dropdown-Liste hinzu, über die sich ein Farbschema auswählen lässt.

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

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit dem Wert `auto` für {{cssxref("margin")}}. Innerhalb der Kurzschreibweise `margin` verwenden wir jedoch eine `if()`-Funktion mit einer Media-Query als `<if-test>`, um die Komponente {{cssxref("margin-top")}} auf `0` zu setzen, wenn der Viewport schmaler als `700px` ist, und andernfalls auf `20px`. Dadurch erhalten wir auf breiten Bildschirmen etwas Abstand oberhalb des Inhalts. Auf schmalen Bildschirmen entfällt dieser Abstand, weil er dort etwas unpassend wirkt.

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

Anschließend setzen wir die benutzerdefinierte Eigenschaft `--scheme` auf den Klassennamen des `<article>`-Elements. Unsere JavaScript-Anwendung setzt die Klasse, wenn im `<select>`-Element ein neuer Wert ausgewählt wird. Welche Rolle der Wert der benutzerdefinierten Eigenschaft spielt, sehen Sie im nächsten CSS-Block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Die Möglichkeiten von CSS-Funktionen vom Typ `if()` werden besonders deutlich, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um den benutzerdefinierten Eigenschaften `--color1` und `--color2` abhängig vom Wert von `--scheme` unterschiedliche Farbwerte zuzuweisen. Anschließend verwenden wir `--color1` und `--color2` für die Eigenschaften {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} unseres `<article>`-Elements sowie für `color` und `background-color` unseres `<aside>`-Elements.

Wir steuern somit unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, deren Werte mithilfe von `if()`-Funktionen festgelegt werden.

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

Schließlich verwenden wir `if()`-Funktionen an zwei weiteren Stellen:

- Wir setzen {{cssxref("font-size")}} für unser `<h1>`-Element auf `calc(3rem + 2vw)`, wenn der Viewport breiter als `700px` ist, und andernfalls auf `3rem`. Dadurch passt sich die Schriftgröße auf breiten Bildschirmen dynamisch an Änderungen der Viewport-Breite an, bleibt auf schmalen Bildschirmen jedoch gleich.
- Wir legen abhängig vom Wert der benutzerdefinierten Eigenschaft `--scheme` ein passendes Emoji als {{cssxref("content")}} für das Pseudoelement {{cssxref("::before")}} unseres `<h1>`-Elements fest.

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

Unser JavaScript fügt dem `<select>`-Element einen Event-Listener für [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das Attribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) des `<article>`-Elements auf diesen Wert.

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
