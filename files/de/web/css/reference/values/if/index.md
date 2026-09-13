---
title: "`if()` CSS-Funktion"
short-title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft je nach Ergebnis eines bedingten Tests festzulegen. Der Test kann auf einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder einer [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`-Elementen. Jedes `<if-branch>` besteht aus einer `<if-condition>` gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer als wahr evaluiert wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantiert ungültiger Wert")}}.

## Beschreibung

Die CSS-Funktion `if()` bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript-[`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen.

Die `if()`-Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>`-Paar oder ein `else : <value>`-Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die zu `true` evaluiert wird, gibt ihren zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` zu `true` evaluiert wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()`-Funktion in einem Wertausdruck verwendet wird, der einen Fallback hat, wie etwa eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}}-Funktion.

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

In diesem Fall setzen wir einen unterschiedlichen {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, je nachdem ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Existiert `--scheme` nicht oder es ist auf einen anderen Wert gesetzt, greift der `else`-Wert und die `background-image`-Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt sein, und jedes `<if-condition> : <value>`-Paar muss mit einem Semikolon getrennt sein. Das Semikolon ist optional für das letzte `<if-condition> : <value>`-Paar.

> [!WARNING]
> Zwischen dem `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen sein. Ist eines vorhanden, ist die gesamte Deklaration ungültig.

Wenn ein einzelnes `<if-condition>` oder `<value>` ungültig ist, macht dies nicht die gesamte `if()`-Funktion ungültig; stattdessen wechselt der Parser zum nächsten `<if-condition> : <value>`-Paar. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare innerhalb einer `if()`-Funktion einfügen, an beliebiger Position. Allerdings wird meistens ein einziges `else : <value>`-Paar am Ende der durch Semikolons getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s zu true evaluiert.

Wenn Sie ein `else : <value>`-Paar vor allen `<if-test> : <value>`-Paaren einfügen, werden die nachfolgenden Bedingungen nicht ausgewertet, da `else` immer zu `true` evaluiert. Die folgende `if()`-Funktion gibt daher immer `none` zurück und die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie möglicherweise ein `else : <value>` an einer anderen Position als dem Ende der Wertliste platzieren möchten. Im folgenden Beispiel versuchen wir festzustellen, ob das erste `<if-test> : <value>`-Paar richtig funktioniert. Wenn nicht, gibt das `else : <value>`-Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das anzeigt, dass das erste `<if-test> : <value>`-Paar behoben werden muss. Die letzten beiden `<if-test> : <value>`-Paare werden erneut nie ausgewertet.

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

Beachten Sie, dass eine `if()`-Funktion immer noch gültig ist, wenn sie nur ein `else : <value>`-Paar enthält oder gar nichts. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der `background-color`-Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Anfangswert gesetzt. Es wäre besser, den `background-color` direkt auf `yellow`, und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. Dieser Abschnitt beleuchtet jede im Detail.

#### Stilanfragen

Ein `<if-test>` mit einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und als Ergebnis einen Wert auf eine andere Eigenschaft anzuwenden. Wir sind bereits einige Beispiele für Stilanfragen durchgegangen; schauen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf demselben Element auf `ice` gesetzt ist, wird der angegebene `linear-gradient()`-Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Der Einsatz von Stilanfragen innerhalb von `if()`-Anweisungen bietet einen Vorteil gegenüber {{cssxref("@container")}}-Anfragen — Sie können ein Element direkt mit Stilen ansprechen, basierend darauf, ob eine benutzerdefinierte Eigenschaft auf ihm gesetzt ist, anstatt gesetzte Stile auf einem übergeordneten Container-Element überprüfen zu müssen.

Sie können auch `and`, `or` oder `not`-Logik innerhalb von Stilanfragen verwenden. Zum Beispiel:

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

Eine `@container`-Anfrage hat einige Vorteile — Sie können mit `if()`-Stilanfragen nur einzelne Eigenschaftswerte gleichzeitig festlegen, während `@container`-Anfragen verwendet werden können, um ganze Regelsets bedingt anzuwenden. Die beiden Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

Beachten Sie, dass Container-Stilanfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur benutzerdefinierte CSS-Eigenschaften. Zum Beispiel wird Folgendes nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Medienanfragen

Ein `<if-test>` mit einer [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob ein Medienabfrage-Test true zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>`-Paar auf Printmedien einen Wert von `white` zurück, während die `else`-Klausel bewirkt, dass `#eeeeee` auf Nicht-Printmedien zurückgegeben wird.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale nutzen — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtsfensterbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist sehr nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf dem Ergebnis einer Medienabfrage ändern müssen.

Sie können auch `and`, `or` oder `not`-Logik innerhalb von Medienanfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Medienabfrage festlegen möchten, ist eine reguläre {{cssxref("@media")}}-Konstruktion erforderlich. Die beiden Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

#### Feature-Anfragen

Ein `<if-test>` mit einer [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}}-Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Selektor-Support-Abfragen funktionieren auch. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}}-Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or` oder `not`-Logik innerhalb von Feature-Anfragen verwenden. Zum Beispiel:

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

Feature-Anfragen sind innerhalb von `if()`-Anweisungen sehr nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer einzigen Feature-Anfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}}-Konstruktion besser. Die beiden Ansätze ergänzen sich und haben unterschiedliche Anwendungen.

### Bereitstellen von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht anmutig; es muss ein expliziter Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel haben wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser bereitgestellt, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte festlegt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung einzuschließen. In `if()`-unterstützenden Browsern würde das Padding auf `initial` gesetzt werden, wenn kein `else`-Wert enthalten wäre und `--size` nicht gleich `"2xl"` ist.

### Ganze und partielle Werte

Eine `if()`-Funktion kann als Wert einer beliebigen CSS-Eigenschaft festgelegt werden, kann aber auch zur Bestimmung von Teilen von Eigenschaftswerten verwendet werden. Zum Beispiel setzt das folgende Beispiel eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}}-Kurzform, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Jedoch könnte man die `if()`-Funktion verwenden, um nur die {{cssxref("border-color")}}-Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachteln von `if()`-Funktionen

Da eine `if()`-Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()`-Funktionen innerhalb anderer `if()`-Funktionen zu verschachteln und innerhalb anderer Funktionen wie {{cssxref("calc()")}}.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color`-Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()`-Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen true zurückgibt).

Die beiden `<value>`s sind jedoch auch `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer dunkel bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienabfrage), und einen dunklen Farbwert ansonsten.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements subtrahiert. Der Prozentsatz wird durch eine `if()`-Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Falls ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Falls nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` aufgelöst wird.

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

In diesem Beispiel zeigen wir die grundlegende Verwendung jeder der drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei {{htmlelement("article")}}-Elementen darin, die `<h2>`-[Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut gesetzt ist — `--show-apple:true` — die wir später zur bedingten Festlegung eines Eigenschaftswerts verwenden.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS richten wir zuerst das `<section>`-Element mit dem [Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) ein und setzen einen {{cssxref("gap")}} zwischen den beiden Kindelementen `<article>`. Dann verwenden wir eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}}-Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat ist, oder `column`, wenn es im Hochformat ist. Dies ordnet die `article`-Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen an.

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

Als Nächstes zielen wir auf das {{cssxref("::before")}}-Pseudo-Element des `<h2>`-Elements ab, setzen seine {{cssxref("content")}}-Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Dies erreichen wir mit einer `if()`-Funktion und einem [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#style_queries_for_custom_properties)-`<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>`-Element selbst ab. Wir verwenden eine Feature-Abfrage-`<if-test>`, um zu prüfen, ob der Browser `lch()`-Farben unterstützt, und setzen die {{cssxref("color")}}-Eigenschaft auf eine `lch()`-Farbe, wenn ja, oder ein gleichwertiges Hex, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()`-Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style`-Attribut des `<section>`-Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height`-Attribut des einbettenden `<iframe>`s auf `1200px`. Dadurch ändert sich die Orientierung von quer zu hoch. Beachten Sie, wie sich das Layout dadurch ändert.

### Farbsteuerung mit `if()`

Diese Demo zeigt, wie Sie mit CSS-`if()`-Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, sodass wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir schließen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}}-Dropdown ein, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut des `<article>`-Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto`-{{cssxref("margin")}}-Werten. Allerdings verwenden wir eine `if()`-Funktion mit einer Medienabfrage-`<if-test>`, um die {{cssxref("margin-top")}}-Komponente innerhalb der `margin`-Kurzform auf `0` zu setzen, wenn die Ansichtsfensterbreite weniger als `700px` beträgt, und auf `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen ein bisschen Abstand oben am Inhalt bekommen, aber dieser auf schmalen Bildschirmen entfernt wird, wo er etwas merkwürdig aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme`, damit sie dem `class`-Namen des `<article>`-Elements entspricht. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>`-Element ausgewählt wird. Sie werden die Bedeutung des benutzerdefinierten Elementwerts im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Die wahre Power von CSS-`if()`-Funktionen zeigt sich, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` mit verschiedenen Farbwerten zu setzen, abhängig vom Wert der Eigenschaft `--scheme`. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} Eigenschaften unseres `<article>`-Elements und der `color` und `background-color` Eigenschaften unseres `<aside>`-Elements.

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

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>`-Elements so, dass sie `calc(3rem + 2vw)` beträgt, wenn die Ansichtsfensterbreite größer als `700px` ist, und `3rem` ansonsten. Dies bedeutet, dass sich die Schriftgröße auf breiten Bildschirmen dynamisch mit der Änderung der Ansichtsfensterbreite anpasst, auf schmalen Bildschirmen jedoch gleich bleibt.
- Wir setzen ein passendes Emoji als {{cssxref("content")}} der {{cssxref("::before")}}-Pseudoklasse unseres `<h1>`-Elements, abhängig vom Wert der Eigenschaft `--scheme`.

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

Diese Demo rendert sich wie folgt:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbwerte auszuwählen, um die Wirkung auf das Aussehen und Verhalten zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilanfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Medienanfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Werte und -Einheiten-Modul](/de/docs/Web/CSS/Guides/Values_and_units)
