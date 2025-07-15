---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, verschiedene Werte für eine Eigenschaft abhängig vom Ergebnis eines konditionalen Tests festzulegen. Der Test kann auf einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`-Teilen. Jeder `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer als wahr bewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantiert ungültiger Wert")}}.

## Beschreibung

Die CSS `if()` Funktion bietet konditionale Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Werts einer beliebigen Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die als wahr bewertet wird, hat ihren zugehörigen `<value>`, der zurückgegeben wird.
3. Wenn keine `<if-condition>` als wahr bewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert ungültigen Wert&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}} Elemente, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, tritt der `else` Wert in Kraft, und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem assoziierten Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss durch ein Semikolon getrennt werden. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) geben. Wenn es eines gibt, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht dies die gesamte `if()` Funktion nicht ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` noch `<value>` gültig ist, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s als wahr bewertet wird.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren hinzufügen, werden die danach folgenden Bedingungen nicht ausgewertet, da `else` immer als wahr bewertet wird. Das folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, bei dem Sie eventuell ein `else : <value>` an einer anderen Position als am Ende der Werteliste setzen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar richtig funktioniert. Falls nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das anzeigt, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Initialwert gesetzt. Es wäre besser, die `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. Dieser Abschnitt betrachtet jede detailliert.

#### Style-Abfragen

Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` erlaubt es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und als Ergebnis einen anderen Eigenschaftswert zuzuweisen. Wir haben zuvor mehrere Beispiele für Style-Abfragen durchgenommen; lassen Sie uns ein weiteres Beispiel betrachten:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf demselben Element auf den Wert `ice` gesetzt ist, wird der angegebene `linear-gradient()` Wert zurückgegeben. Ist dies nicht der Fall, wird `none` zurückgegeben.

Die Verwendung von Style-Abfragen innerhalb von `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}}-Abfragen — Sie können ein Element direkt mit Styles anvisieren, basierend darauf, ob eine benutzerdefinierte Eigenschaft auf ihm gesetzt ist, anstatt die gesetzten Styles auf einem Container-Element des Elternteils überprüfen zu müssen.

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

Eine `@container`-Abfrage hat auch einige Vorteile — Sie können jeweils nur einen einzelnen Eigenschaftswert mit `if()` Style-Abfragen festlegen, während `@container`-Abfragen verwendet werden können, um bedingt ganze Regelsätze anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

Beachten Sie, dass Container-Style-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, nur CSS-benutzerdefinierte Eigenschaften. Zum Beispiel wird folgendes nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Ein [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media-Abfrage-Test wahr ist.

Sie können Medientypen verwenden. Zum Beispiel wird das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Druckmedien zurückgeben, während die `else` Klausel `#eee` auf nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewport-breite kleiner als `700px` ist, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrage-Ergebnis variieren müssen.

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, ist ein reguläres {{cssxref("@media")}} Konstrukt erforderlich. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

#### Feature-Abfragen

Eine [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192 192 192);
)
```

Abfrageunterstützungen funktionieren ebenfalls. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

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

Feature-Abfragen sind wirklich nützlich innerhalb von `if()` Anweisungen, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist ein reguläres {{cssxref("@supports")}} Konstrukt besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung unterstützt kein automatisches Degradieren; es muss ein expliziter Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel bieten wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte festlegt, je nachdem, ob die benutzerdefinierte Eigenschaft `--size: 2xl` gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern würde, wenn kein `else` Wert eingeschlossen wäre und `--size` nicht `2xl` wäre, das Padding auf `initial` gesetzt werden.

### Ganze und teilweise Werte

Eine `if()` Funktion kann als Wert einer beliebigen CSS-Eigenschaft gesetzt werden, sie kann aber auch benutzt werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel wird im Folgenden eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzschreibweise festgelegt, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

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

### Verschachteln von if() Funktionen

Da eine `if()` Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

In diesem Beispiel verwenden wir `if()`, um einen `color` Eigenschaftswert abhängig von verschiedenen Bedingungen zu setzen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen wahr ist).

Die beiden `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage) und einen dunklen Farbwert andernfalls.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die prüft, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion sich in `calc(70% - 50px)` auflöst. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion sich in `calc(50% - 50px)` auflöst.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formal Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()` Nutzung

In diesem Beispiel zeigen wir die Grundnutzung jeder der drei `<if-test>` Typen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>` Element ab, legen es mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) aus und setzen einen {{cssxref("gap")}} zwischen den beiden Kinder `<article>` Elementen. Wir verwenden eine `if()` Funktion mit einem [`orientation`](/de/docs/Web/CSS/@media/orientation) Media-Abfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat ist, oder `column`, wenn es im Hochformat ist. Dies legt die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen aus.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ab, um seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji zu setzen, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir vorher mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einem [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Zuletzt zielen wir auf das `<h2>` Element selbst ab. Wir verwenden ein Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, falls ja, oder ein hex-Äquivalent, falls nicht.

```css-nolint live-sample___basic
h2 {
  color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### Resultat

{{EmbedLiveSample("basic", "100%", "240")}}

Beachten Sie, wie das Styling angewendet wird. Überprüfen Sie das konditionale Styling für die ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Devtools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und stellen Sie fest, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des Einbett-`<iframe>` auf `1200px`. Dadurch ändert sich die Orientierung von Querformat auf Hochformat. Beachten Sie, wie sich das Layout verändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()` Funktionen wirklich Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, sodass wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit einigem Inhalt darin — eine Hauptüberschrift, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Dropdown ein, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das `class` Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Allerdings verwenden wir eine `if()` Funktion mit einem Media-Abfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb der `margin` Kurzschreibweise auf `0` zu setzen, wenn die Viewport-breite kleiner als `700px` ist, und `20px`, wenn sie breiter ist. Das bedeutet, dass wir auf breiten Bildschirmen etwas Rand oben am Inhalt haben, dieser jedoch auf schmalen Bildschirmen entfernt wird, wo er etwas seltsam aussieht.

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

Dann setzen wir die `--scheme` benutzerdefinierte Eigenschaft so, dass sie mit dem Klassennamen des `<article>` Elements übereinstimmt. Die Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Elementwerts sehen Sie im nächsten CSS-Block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir erkennen die wahre Leistungsfähigkeit der CSS `if()` Funktionen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf verschiedene Farbwerte einzustellen, je nachdem, welchen Wert `--scheme` hat. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} Eigenschaften des `<article>` Elements, sowie in den `color` und `background-color` Eigenschaften des `<aside>` Elements.

Wir steuern unser ganzes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die über `if()` Funktionen festgelegt werden.

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

Zu guter Letzt verwenden wir `if()` Funktionen an einigen weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)` wenn das Viewport breiter als `700px` ist, und `3rem` sonst. Dies bedeutet, dass die Schriftgröße sich dynamisch mit Änderungen der Viewport-breite aktualisiert, auf breiteren Bildschirmen, bleibt jedoch auf schmalen Bildschirmen gleich.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudo-Klasse unseres `<h1>` Elements, je nach Wert der `--scheme` benutzerdefinierten Eigenschaft.

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

#### Resultat

Dieses Demo rendert sich wie folgt:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbsc Schemawerte auszuwählen, um die Wirkung auf das Aussehen und das Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
