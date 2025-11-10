---
title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erlaubt es, verschiedene Werte für eine Eigenschaft festzulegen, abhängig vom Ergebnis eines bedingten Tests. Der Test kann auf einer [Stile-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder einer [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`en. Jeder `<if-branch>` besteht aus einer `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`

  - : Ein `<if-test>` oder das Schlüsselwort `else`.

    - `<if-test>`

      - : Eine [Stile-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer als wahr ausgewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet eine bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann innerhalb des Wertes einer beliebigen Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Die erste `<if-condition>`, die als `true` ausgewertet wird, gibt ihren zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` als `true` ausgewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültigen&gt;")}} zurück. Dies verhält sich ungültig oder als `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die einen Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir ein unterschiedliches {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht vorhanden ist oder auf einen anderen Wert gesetzt ist, greift der `else`-Wert und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>` Paar optional.

> [!WARNING]
> Es darf kein Leerzeichen zwischen dem `if` und der öffnenden Klammer (`(`) stehen. Falls doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder `<value>` ungültig ist, macht das die gesamte `if()` Funktion nicht ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` noch `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in beliebiger Position einfügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s als wahr ausgewertet wird.

Wenn Sie ein `else : <value>` Paar vor einem `<if-test> : <value>` Paar einfügen, werden die darauf folgenden Bedingungen nicht ausgewertet, da `else` immer als wahr bewertet wird. Das folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden niemals ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, in dem Sie ein `else : <value>` an eine andere Position als das Ende der Werteliste setzen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar richtig funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar repariert werden muss. Die letzten beiden `<if-test> : <value>` Paare werden ebenfalls nicht ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `gelb` gesetzt und das `background-image` auf seinen Initialwert. Sie wären besser dran, die `background-color` direkt auf `gelb` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Abfragearten. In diesem Abschnitt wird jede einzeln betrachtet.

#### Stile-Abfragen

Eine [Stile-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) `<if-test>` erlaubt es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und als Ergebnis einen Wert auf eine andere Eigenschaft anwenden. Wir haben schon früh mehrere Beispiele von Stile-Abfragen durchgegangen; lassen Sie uns ein weiteres Beispiel betrachten:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf demselben Element auf einen Wert von `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Die Verwendung von Stile-Abfragen in `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen — Sie können ein Element direkt basierend darauf anvisieren, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt festgelegte Stile auf einem übergeordneten Container-Element überprüfen zu müssen.

Sie können auch `and`, `or` oder `not` Logik innerhalb von Stile-Abfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage hat einige Vorteile — Sie können mit Stile-Abfragen nur einzelne Eigenschaftswerte auf einmal setzen, während `@container` Abfragen verwendet werden können, um bedingt ganze Regelsets anzuwenden. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

Beachten Sie, dass Containereigenschaften-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, nur CSS-benutzerdefinierte Eigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Eine [Media-Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media-Abfrage-Test als wahr zurückgegeben wird.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` auf Print-Medien zurück, während die `else` Klausel `#eeeeee` auf Nicht-Print-Medien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienfunktionen verwenden — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrageergebnis variieren müssen.

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@media")}} Konstruktion erforderlich. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

#### Feature-Abfragen

Eine [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser eine bestimmte Eigenschaft unterstützt.

Zum Beispiel gibt das folgende Beispiel einen {{cssxref("color_value/lch()")}}-Farbwert zurück, wenn `lch()`-Farben unterstützt werden, oder einen {{cssxref("color_value/rgb()")}}-Farbwert, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Selektor-Support-Abfragen funktionieren ebenfalls. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}}-Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

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

Feature-Abfragen sind in `if()` Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}} Konstruktion besser. Die beiden Ansätze ergänzen sich und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung wird nicht nahtlos herabgestuft; ein expliziter Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel geben wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die unterschiedliche `padding`-Werte festlegt, abhängig davon, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` eingestellt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else` Bedingung einzuschließen. In Browsern, die `if()` unterstützen, würde das `padding` auf `initial` gesetzt, falls kein `else`-Wert enthalten ist und `--size` nicht `"2xl"` ist.

### Ganze und teilweise Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft gesetzt werden, kann jedoch auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende Beispiel eine andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzschrift-Eigenschaft, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Wir könnten jedoch die `if()` Funktion verwenden, um nur die {{cssxref("border-color")}}-Komponente zu bestimmen:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Verschachteln von if() Funktionen

Da eine `if()` Funktion den Platz ganzer Eigenschaftswerte oder einzelner Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel benutzen wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert basierend auf verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen wahr ist).

Die beiden `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (bestimmt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienabfrage), und einen dunklen Farbwert sonst.

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

Im nächsten Beispiel setzen wir die Eigenschaft `width` gleich einer `calc()` Funktion, die `50px` von einem Prozent der Breite des übergeordneten Elements abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Falls ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` auswertet. Falls nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` auswertet.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Nutzung von `if()`

In diesem Beispiel zeigen wir die grundlegende Nutzung jeder der drei `<if-test>` Arten.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei {{htmlelement("article")}}-Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in ihrem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut festgelegt ist — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>`-Element, legen es mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) an und setzen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>`-Elementen. Dann verwenden wir eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument sich im Querformat befindet, oder `column`, wenn es im Hochformat ist. Dies legt die `article`-Elemente nebeneinander auf breiten Bildschirmen an und von oben nach unten auf schmalen Bildschirmen.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements und setzen dessen {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, jedoch nur, wenn `--show-apple: true` gesetzt ist (wir haben dies früher mit einem inline {{htmlelement("style")}} in unserem HTML getan). Dies erreichen wir, indem wir eine `if()` Funktion mit einer [Stile-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>` verwenden:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst. Wir verwenden ein Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder ein hexadezimales Äquivalent, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie die bedingten Stylings der ersten beiden `if()` Abfragen, indem Sie das gerenderte Demo mit den Werkzeugen Ihres Browsers modifizieren:

- Entfernen Sie das `style`-Attribut des `<section>` Elements und beachten Sie, dass die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des einbettenden `<iframe>` auf `1200px`. Dies ändert die Orientierung von Querformat zu Hochformat. Beachten Sie, wie sich das Layout entsprechend ändert.

### Kontrolle eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie beginnen können, Spaß mit CSS `if()` Funktionen zu haben. Unter anderem verwenden wir `if()` Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, was es uns ermöglicht, das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} ein, das eine {{htmlelement("select")}}-Drop-Down enthält, das es ermöglicht, ein Farbschema auszuwählen.

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

Unser JavaScript fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es, indem wir `auto` {{cssxref("margin")}} Werte verwenden. Wir verwenden jedoch eine `if()` Funktion mit einer Medienabfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb des `margin` Kurzschrifts auf `0` zu setzen, wenn die Anzeigebreite weniger als `700px` beträgt, und auf `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen etwas Rand am oberen Rand des Inhalts erhalten, dieser aber auf schmalen Bildschirmen entfernt wird, wo es ein bisschen seltsam aussieht.

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

Wir setzen dann die `--scheme` benutzerdefinierte Eigenschaft so, dass sie dem `class` Namen des `<article>` Elements entspricht. Der Klassename wird von unserem JavaScript gesetzt, wenn ein neuer Wert im `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Elementwertes wird im nächsten CSS-Block sichtbar.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wahre Leistungsfähigkeit von CSS `if()` Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf unterschiedliche Farbwerte zu setzen, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft. Wir verwenden dann die `--color1` und `--color2` Werte in unserem `<article>` Element's {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften, und unserem `<aside>` Element's `color` und `background-color` Eigenschaften.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit verschiedenen Werten, die über `if()` Funktionen gesetzt werden.

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

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn das Ansichtsfenster breiter als `700px` ist, und `3rem` anderenfalls. Dies bedeutet, dass sich die Schriftgröße dynamisch mit Änderungen der Ansichtsfensterbreite auf breiteren Bildschirmen aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
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

Dieses Demo wird wie folgt gerendert:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbschema-Werte auszuwählen, um die Wirkung auf das Aussehen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container Stile-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Werte- und Einheit-Modul](/de/docs/Web/CSS/Guides/Values_and_units)
