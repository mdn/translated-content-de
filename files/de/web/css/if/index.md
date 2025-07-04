---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Festlegen verschiedener Werte für eine Eigenschaft, abhängig vom Ergebnis einer Bedingungsprüfung. Der Test kann auf einer [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Anfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Anfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`es. Jedes `<if-branch>` ist eine `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das `else` Schlüsselwort.
    - `<if-test>`
      - : Eine [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Anfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Anfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer als wahr bewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet eine bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen.

Die `if()` Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>` Ausdrücke werden in der Reihenfolge, in der sie in der Funktion erscheinen, ausgewertet.
2. Die erste `<if-condition>`, die als `true` bewertet wird, liefert ihren zugehörigen `<value>` zurück.
3. Wenn keine `<if-condition>` als `true` bewertet wird, gibt die Funktion ein {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertanweisung verwendet wird, die ein Fallback hat, wie z.B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir einen anderen {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, je nachdem, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder es existiert und auf einen anderen Wert gesetzt ist, kommt der `else`-Wert ins Spiel und die Eigenschaft `background-image` wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt von ihrem zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>` Paar muss durch ein Semikolon getrennt werden. Das Semikolon ist optional für das letzte `<if-condition> : <value>` Paar.

> [!WARNING]
> Zwischen dem `if` und der öffnenden Klammer (`(`) darf kein Leerzeichen sein. Wenn doch, wird die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder `<value>` ungültig ist, macht dies nicht die gesamte `if()` Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>` Paar über. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert-ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion einfügen, in beliebiger Position. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s als wahr bewertet wird.

Wenn Sie ein `else : <value>` Paar vor einem `<if-test> : <value>` Paar einfügen, werden die Bedingungen, die darauf folgen, nicht ausgewertet, da `else` immer als `true` bewertet wird. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Position als am Ende der Werteliste platzieren möchten. Im folgenden Beispiel wollen wir herausfinden, ob das erste `<if-test> : <value>` Paar richtig funktioniert. Wenn dies nicht der Fall ist, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar behoben werden muss. Die letzten beiden `<if-test> : <value>` Paare werden wiederum nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt und das `background-image` wird auf seinen Initialwert gesetzt. Es wäre besser, den `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Anfragearten. Dieser Abschnitt betrachtet jede im Detail.

#### Stil-Abfragen

Ein [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` ermöglicht es Ihnen zu überprüfen, ob ein bestimmter Eigenschaftswert auf ein Element angewendet ist, und als Ergebnis einen Wert für eine andere Eigenschaft anzuwenden. Zuvor haben wir bereits einige Stil-Abfragen-Beispiele durchgegangen; schauen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf dem gleichen Element auf `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Andernfalls wird `none` zurückgegeben.

Die Verwendung von Stil-Abfragen in `if()`-Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}}-Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend darauf, ob eine benutzerdefinierte Eigenschaft an ihm gesetzt ist, anstatt gesetzte Stile auf einem übergeordneten Container-Element überprüfen zu müssen.

Sie können auch `and`, `or` oder `not` Logik in Stil-Abfragen verwenden. Zum Beispiel:

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

Eine `@container`-Abfrage hat einige Vorteile — Sie können nur einzelne Eigenschaftswerte auf einmal mit `if()`-Stil-Abfragen setzen, während `@container`-Abfragen verwendet werden können, um ganze Regelgruppen bedingt anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

Beachten Sie, dass Container-Stil-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-Benutzerdefinierte Eigenschaften. Zum Beispiel funktioniert das folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Media-Abfrage-Test wahr zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar einen Wert von `white` in Printmedien zurück, während die `else`-Klausel `#eee` in Nicht-Printmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewport-Breite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Media-Abfrage-Ergebnis variieren müssen.

Sie können auch `and`, `or` oder `not` Logik in Media-Abfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln auf Grundlage einer Media-Abfrage festlegen möchten, ist ein regulärer {{cssxref("@media")}}-Konstrukt erforderlich. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

#### Feature-Abfragen

Eine [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende ein {{cssxref("color_value/lch()")}} Farbe zurück, wenn `lch()` Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}} Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Selektor-Unterstützungsabfragen funktionieren auch. Das folgende wird `1em` zurückgeben, wenn der Browser die {{cssxref(":buffering")}} Pseudo-Klasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or` oder `not` Logik in Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind wirklich nützlich in `if()`-Anweisungen, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln auf Grundlage einer Feature-Abfrage festlegen möchten, ist ein regulärer {{cssxref("@supports")}}-Konstrukt besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

### Bereitstellung von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht elegant; ein expliziter Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel bieten wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die verschiedene Padding-Werte festlegt, abhängig davon, ob die `--size: 2xl` benutzerdefinierte Eigenschaft gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung einzuschließen. In `if()`-Unterstützungsbrowsern würde das Padding, wenn kein `else`-Wert eingeschlossen ist und `--size` nicht gleich `2xl` ist, auf `initial` gesetzt.

### Ganze und teilweise Werte

Eine `if()`-Funktion kann als der Wert jeder CSS-Eigenschaft eingestellt werden, aber sie kann auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel wird im Folgenden ein andere {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzeigentum-Eigenschaft gesetzt, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

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

Da eine `if()` Funktion den Platz von gesamten Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color`-Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die `--scheme` benutzerdefinierte Eigenschaft auf `ice` oder `fire` (mit einem `else`-Wert von `black` zurückgegeben wird, wenn keine der Bedingungen als wahr bewertet wird) gesetzt ist.

Die beiden `<value>`s sind jedoch auch `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Nutzer ein dunkles Farbschema bevorzugt (bestimmt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage) und einen dunklen Farbwert, wenn nicht.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die `--scheme: wide` benutzerdefinierte Eigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion zu `calc(70% - 50px)` aufgelöst wird. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion zu `calc(50% - 50px)` aufgelöst wird.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `if()` Verwendung

In diesem Beispiel werden wir die grundlegende Verwendung jedes der drei `<if-test>` Typen demonstrieren.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft, die in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt ist — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>` Element ab, gestalten es mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und setzen einen {{cssxref("gap")}} zwischen den beiden Kind-`<article>` Elementen. Wir verwenden dann eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Media-Abfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat ist, oder `column`, wenn es im Hochformat ist. Dies ordnet die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen an.

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

Als Nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem Inline-{{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion mit einer [Stilanfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst ab. Wir verwenden ein Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn ja, oder auf ein Hex-Äquivalent, wenn nicht.

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

Beachten Sie, wie die Gestaltung angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()`-Abfragen, indem Sie das gerenderte Demo mit den Entwicklerwerkzeugen Ihres Browsers ändern:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des eingebetteten `<iframe>` auf `1200px`. Dadurch ändert sich die Ausrichtung von Quer- auf Hochformat. Beachten Sie, wie sich das Layout als Ergebnis ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()` Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um bedingt die Werte einiger benutzerdefinierter Eigenschaften festzulegen, sodass wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit einigen Inhalten darin — eine Hauptüberschrift, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}} Einblendmenü hinzu, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener auf das `<select>` Element hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut des `<article>` Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Wir verwenden jedoch eine `if()` Funktion mit einem Media-Abfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb der `margin` Kurzschrift auf `0` zu setzen, wenn die Viewport-Breite weniger als `700px` beträgt, und `20px`, wenn sie breiter ist. Dies bedeutet, dass wir auf breiten Bildschirmen einen kleinen Abstand am oberen Rand des Inhalts haben, der auf schmalen Bildschirmen, wo er etwas merkwürdig aussieht, entfernt wird.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme`, um mit dem Klassennamen des `<article>` Elements übereinzustimmen. Die Klasse wird durch unser JavaScript gesetzt, wenn ein neuer Wert in unserem `<select>` Element ausgewählt wird. Die Bedeutung des benutzerdefinierten Elementwerts wird im nächsten CSS-Block deutlich.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wahre Leistungsfähigkeit von CSS `if()` Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` auf verschiedene Farbwerte abhängig vom Wert der benutzerdefinierten Eigenschaft `--scheme` zu setzen. Wir verwenden dann die `--color1` und `--color2` Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} Eigenschaften unseres `<article>` Elements und den `color` und `background-color` Eigenschaften unseres `<aside>` Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die über `if()` Funktionen gesetzt werden.

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

- Wir setzen unsere {{cssxref("font-size")}} des `<h1>` Elements auf `calc(3rem + 2vw)`, wenn die Viewport-Breite größer als `700px` ist, und `3rem` ansonsten. Dies bedeutet, dass sich die Schriftgröße dynamisch mit Änderungen der Viewport-Breite auf breiten Bildschirmen aktualisiert, aber auf schmalen Bildschirmen gleich bleibt.
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

Dieses Demo wird wie folgt gerendert:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbwerte auszuwählen, um den Effekt auf das Aussehen und das Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container to Style Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Values and Units Module](/de/docs/Web/CSS/CSS_Values_and_Units)
