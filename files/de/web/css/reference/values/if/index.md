---
title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es, je nach Ergebnis eines Bedingungstests unterschiedliche Werte für eine Eigenschaft festzulegen. Der Test kann auf einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolons getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer zu wahr evaluiert.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantierter ungültiger Wert")}}.

## Beschreibung

Die CSS `if()` Funktion bietet eine bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Werts einer beliebigen Eigenschaft verwendet werden und kann null oder mehr durch Semikolons getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Das erste `<if-condition>`, das zu `true` evaluiert wird, hat seinen zugehörigen `<value>` zurückgegeben.
3. Wenn keine `<if-condition>` zu `true` evaluiert, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;:")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein unterschiedliches {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}} Elementen, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, kommt der `else` Wert ins Spiel und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Es darf kein Leerzeichen zwischen dem `if` und der öffnenden Klammer (`(`) stehen. Andernfalls ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder `<value>` ungültig ist, macht das nicht die gesamte `if()` Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolons getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s zu wahr evaluiert wird.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren einfügen, werden die Bedingungen, die darauf folgen, nicht ausgewertet, da `else` immer zu `true` evaluiert wird. Die folgende `if()` Funktion gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Ein Debugging eines Werts, der nicht wie erwartet funktioniert, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Stelle als am Ende der Werteliste verwenden möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar korrekt funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `gelb` gesetzt und das `background-image` wird auf seinen Anfangswert gesetzt. Es wäre besser, die `background-color` direkt auf `gelb` zu setzen und das `background-image` auf `initial` oder `none`.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt wird jeder dieser Typen im Detail betrachtet.

#### Stilabfragen

Ein `<if-test>` für eine [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und als Ergebnis einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben zuvor mehrere Stilabfrage-Beispiele durchlaufen; sehen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf den Wert `ice` auf demselben Element gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Die Verwendung von Stilabfragen in `if()` Anweisungen bietet einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend darauf, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt Stile auf einem Container-Elternelement überprüfen zu müssen.

Sie können auch `und`, `oder` oder `nicht` Logik in Stilabfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage hat einige Vorteile — Sie können nur einzelne Eigenschaftswerte auf einmal mit `if()` Stilabfragen festlegen, während `@container` Abfragen verwendet werden können, um ganze Regelsätze bedingt anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

Beachten Sie, dass Containerstilabfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-Benutzereigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Ein `<if-test>` für eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media-Abfragetest true zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Druckmedien zurück, während die `else` Bedingung `#eeeeee` auf nicht-druckenden Medien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtsfensterbreite weniger als `700px` beträgt oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrageergebnis variieren müssen.

Sie können auch `und`, `oder` oder `nicht` Logik in Media-Abfragen verwenden. Zum Beispiel:

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

Ein `<if-test>` für eine [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Unterstützungsabfragen für Selektoren funktionieren auch. Folgendes Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `und`, `oder` oder `nicht` Logik in Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind in `if()` Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer einzigen Feature-Abfrage festlegen möchten, ist ein reguläres {{cssxref("@supports")}} Konstrukt besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung wird nicht gracefully degradieren; ein explizites Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel bieten wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche Padding-Werte festlegt, je nachdem, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else` Wert eingeschlossen und `--size` nicht gleich `"2xl"` war, würde das Padding auf `initial` gesetzt.

### Ganze und teilweise Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft festgelegt werden, aber sie kann auch benutzt werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel, das Folgende setzt eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzschreibweise abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten jedoch die `if()` Funktion verwenden, um nur die {{cssxref("border-color")}} Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachtelung von `if()` Funktionen

Da eine `if()` Funktion den Platz ganzer Eigenschaftswerte oder einzelner Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen true zurückgibt).

Die beiden `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt mittels der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media-Abfrage), und einen dunklen Farbwert andernfalls.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft auf eine `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternteils abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` aufgelöst wird.

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

In diesem Beispiel werden wir die grundlegende Verwendung jeder der drei Arten von `<if-test>` zeigen.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt ist — `--show-apple:true` — das wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>` Element ab, legen es mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) aus und setzen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>` Elementen. Dann verwenden wir `if()` mit einer Media-Abfrage `<if-test>` zu setzen, den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row`, wenn das Dokument im Landschaftsmodus ist, oder `column`, wenn es im Porträtsmodus ist. Dies stellt die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen dar.

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

Als nächstes zielen wir auf das `<h2>` Element's {{cssxref("::before")}} Pseudo-Element ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apple-Emoji, aber nur wenn `–show-apple: true` gesetzt ist (wir haben dies zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies durch die Verwendung einer `if()` Funktion mit einer [Stilabfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst. Wir verwenden eine Feature-Abfrage `<if-test>` um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft zu einer `lch()` Farbe, wenn ja, oder zu einem hexadezimalen Äquivalent, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apple-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des eingebetteten `<iframe>` auf `1200px`. Dies ändert die Ausrichtung von Landschaft auf Porträt. Beachten Sie, wie sich das Layout dadurch ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()` Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um bedingt die Werte einiger benutzerdefinierter Eigenschaften einzustellen, wodurch wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Außerdem fügen wir ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Dropdown hinzu, das es ermöglicht, ein Farbschema auszuwählen.

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

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript die [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Eigenschaft des `<article>` Elements, um diesen Wert gleichzusetzen.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Allerdings verwenden wir eine `if()` Funktion mit einer Media-Abfrage `<if-test>` um die {{cssxref("margin-top")}} Komponente innerhalb der `margin` Kurzschreibweise auf `0` zu setzen, wenn die Breite des Ansichtsfensters weniger als `700px` beträgt, und `20px` wenn sie breiter ist. Das bedeutet, dass wir auf großen Bildschirmen ein wenig Rand oben haben, aber auf schmalen wird dieser Rand entfernt, wo er ein wenig seltsam aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme`, um dem Klassenname des `<article>` Elements zu entsprechen. Diese Klasse wird von unserem JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Elementwerts sehen Sie im nächsten CSS-Block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wahre Macht von `if()` Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` auf verschiedene Farbwerte zu setzen, abhängig vom Wert der `--scheme` Eigenschaft. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} Eigenschaften des `<article>` Elements, sowie in den `color` und `background-color` Eigenschaften des `<aside>` Elements.

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

Schließlich verwenden wir `if()` Funktionen in ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn das Ansichtsfenster breiter als `700px`, und auf `3rem` ansonsten. Dies bedeutet, dass sich die Schriftgröße dynamisch mit Änderungen der Fensterbreite auf breiten Bildschirmen anpasst, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudoklasse unseres `<h1>` Elements, abhängig vom Wert der benutzerdefinierten `--scheme` Eigenschaft.

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

Versuchen Sie, verschiedene Werte für das Farbschema auszuwählen, um den Effekt auf das Aussehen und das Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Containerstilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Werte- und Einheitenmodul](/de/docs/Web/CSS/CSS_values_and_units)
