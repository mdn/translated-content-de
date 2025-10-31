---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft festzulegen, abhängig vom Ergebnis eines bedingten Tests. Der Test kann auf einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`s. Jedes `<if-branch>` ist ein `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer wahr ist.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder ein {{Glossary("guaranteed_invalid_value", "garantiert ungültiger Wert")}}.

## Beschreibung

Die CSS-`if()`-Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript-Statements vom Typ [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else).

Die `if()`-Funktion kann innerhalb des Werts jeder Eigenschaft verwendet werden und kann null oder mehr `<if-condition>`s, die durch Semikolon getrennt sind, enthalten. Jede `<if-condition>` ist entweder ein `<if-test> : <value>` Paar oder ein `else : <value>` Paar. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird folgendermaßen berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge, in der sie in der Funktion erscheinen, ausgewertet.
2. Die erste `<if-condition>`, die zu `true` evaluiert wird, hat ihren zugeordneten `<value>`, der zurückgegeben wird.
3. Wenn keine `<if-condition>` zu `true` evaluiert wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert ungültigen&gt;")}} zurück. Dies verhält sich wie ein ungültiger oder `false` Wert, wenn die `if()`-Funktion in einer Wert-Deklaration verwendet wird, die einen Fallback hat, wie z. B. eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}}-Funktion.

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

In diesem Fall setzen wir einen anderen {{cssxref("linear-gradient()")}} als {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert, oder es existiert und auf einen anderen Wert gesetzt ist, kommt der `else` Wert ins Spiel, und die `background-image`-Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss durch einen Doppelpunkt vom zugehörigen Wert getrennt werden, und jedes `<if-condition> : <value>`-Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>`-Paar optional.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) sein. Wenn doch, ist die gesamte Deklaration ungültig.

Wenn eine einzelne `<if-condition>` oder ein `<value>` ungültig ist, macht das nicht die gesamte `if()`-Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>`-Paar über. Wenn keine `<if-condition>` oder kein `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare in einer `if()`-Funktion einschließen, an beliebigen Positionen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>`-Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s zu true evaluiert.

Wenn Sie ein `else : <value>`-Paar vor irgendwelchen `<if-test> : <value>`-Paaren einfügen, werden die nachfolgenden Bedingungen nicht ausgewertet, da `else` immer zu `true` evaluiert wird. Das folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Ein Wert, der nicht wie erwartet funktioniert, zu debuggen, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Position als am Ende der Wertliste setzen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>`-Paar ordnungsgemäß funktioniert. Wenn nicht, gibt das `else : <value>`-Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>`-Paar angepasst werden muss. Die letzten beiden `<if-test> : <value>`-Paare werden erneut nie ausgewertet.

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

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}}-Wert immer auf `yellow` gesetzt und das `background-image` auf seinen Anfangswert. Es wäre besser, den `background-color` direkt auf `yellow` und das `background-image` auf `initial` oder `none` zu setzen.

### Arten von if-tests

Ein `<if-test>` akzeptiert eine von drei Abfragearten. Dieser Abschnitt betrachtet jede einzeln im Detail.

#### Style-Abfragen

Ein `<if-test>` in einer [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) ermöglicht es, zu prüfen, ob ein bestimmter Eigenschaftswert an einem Element gesetzt ist, und einen Wert für eine andere Eigenschaft als Ergebnis zuzuweisen. Wir haben bereits mehrere Beispiele für Style-Abfragen durchgesprochen; lassen Sie uns ein weiteres Beispiel betrachten:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf demselben Element auf einen Wert von `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()`-Wert zurückgegeben. Wenn nicht, dann wird `none` zurückgegeben.

Die Verwendung von Style-Abfragen innerhalb von `if()`-Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}}-Abfragen — Sie können ein Element direkt mit Stilen anvisieren, basierend darauf, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt gesetzte Stile auf einem übergeordneten Container-Element überprüfen zu müssen.

Sie können auch logische Operatoren wie `and`, `or` oder `not` innerhalb von Style-Abfragen verwenden. Zum Beispiel:

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

Eine `@container`-Abfrage hat einige Vorteile — Sie können nur einzelne Eigenschaftswerte gleichzeitig mit `if()`-Style-Abfragen setzen, während `@container`-Abfragen verwendet werden können, um bedingt ganze Regelsätze anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

Beachten Sie, dass Container-Style-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-Benutzerdefinierte Eigenschaften. Zum Beispiel wird das Folgende nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Ein `<if-test>` in einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob ein Media-Query-Test zu true auswertet.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>`-Paar einen Wert von `white` auf Print-Medien zurück, während die `else`-Klausel `#eeeeee` auf Nicht-Print-Medien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtsfensterbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf dem Ergebnis einer Media-Abfrage variieren müssen.

Sie können auch logische Operatoren wie `and`, `or` oder `not` innerhalb von Media-Abfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Abfrage festlegen möchten, ist ein regulärer {{cssxref("@media")}}-Konstruktor erforderlich. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

#### Feature-Abfragen

Ein `<if-test>` in einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, je nachdem, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}}-Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Abfrageabfrage für Selektoren funktionieren ebenfalls. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die Pseudo-Klasse {{cssxref(":buffering")}} unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch logische Operatoren wie `and`, `or` oder `not` innerhalb von Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind in `if()`-Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert variieren müssen, basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist ein regulärer {{cssxref("@supports")}}-Konstruktor besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungszwecke.

### Bereitstellung von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht anmutig; ein expliziter Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel geben wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, werden die erste Deklaration mit der zweiten überschreiben, die unterschiedliche padding-Werte festlegt, abhängig davon, ob die `--size: "2xl"`-Benutzereigenschaft gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung anzugeben. In `if()`-unterstützenden Browsern, wenn kein `else`-Wert enthalten wäre und `--size` nicht gleich `"2xl"` wäre, würde das Padding auf `initial` gesetzt.

### Ganze und partielle Werte

Eine `if()`-Funktion kann als Wert einer beliebigen CSS-Eigenschaft gesetzt werden, sie kann aber auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende einen anderen {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}}-Kurzschrifteigenschaft, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

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

### Verschachtelte if()-Funktionen

Da eine `if()`-Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()`-Funktionen innerhalb anderer `if()`-Funktionen zu verschachteln und innerhalb anderer Funktionen wie {{cssxref("calc()")}}.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color`-Eigenschaftswert je nach verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()`-Funktion, die einen bestimmten Wert zurückgibt, abhängig davon, ob die `--scheme`-Benutzereigenschaft auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen zutrifft).

Die beiden `<value>`-Werte sind jedoch auch `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (ermittelt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage), und einen dunklen Farbwert andernfalls.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des übergeordneten Elements subtrahiert. Der Prozentsatz wird durch eine `if()`-Funktion dargestellt, die testet, ob die `--scheme: wide`-Benutzereigenschaft gesetzt ist. Wenn ja, beträgt der Prozentsatz `70%`, sodass die äußere Funktion auf `calc(70% - 50px)` aufgelöst wird. Wenn nicht, beträgt der Prozentsatz `50%`, sodass die äußere Funktion auf `calc(50% - 50px)` aufgelöst wird.

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

In diesem Beispiel zeigen wir die grundlegende Verwendung jeder der drei `<if-test>`-Arten.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei {{htmlelement("article")}}-Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Die `<section>` hat eine benutzerdefinierte Eigenschaft, die darin innerhalb ihres [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs gesetzt ist — `--show-apple:true` — die wir später verwenden, um den Eigenschaftswert bedingt zu setzen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zunächst auf das `<section>`-Element, legen es mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) aus und setzen ein {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>`-Elementen. Wir verwenden dann eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation)-Media-Abfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}}-Eigenschaft auf `row` einzustellen, wenn das Dokument im Querformat ist, oder `column`, wenn es im Hochformat ist. Dies legt die `article`-Elemente nebeneinander auf breiten Bildschirmen und oben nach unten auf schmalen Bildschirmen aus.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>`-Elements und setzen seine {{cssxref("content")}}-Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem inline {{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()`-Funktion und einem [Style-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Zuletzt zielen wir auf das `<h2>`-Element selbst. Wir verwenden eine `<if-test>`-Abfrage, um zu testen, ob der Browser `lch()`-Farben unterstützt und setzen die {{cssxref("color")}}-Eigenschaft auf eine `lch()`-Farbe, wenn dies der Fall ist, oder eine hex-Äquivalent, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()`-Abfragen, indem Sie das gerenderte Demo mit den Entwicklungswerkzeugen Ihres Browsers ändern:

- Entfernen Sie das `style`-Attribut des `<section>`-Elements und beachten Sie, wie die Apfel-Emojis nicht mehr angezeigt werden.
- Ändern Sie das `height`-Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch wird die Ausrichtung von Quer- auf Hochformat geändert. Beachten Sie, wie sich das Layout als Ergebnis ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie beginnen können, mit CSS-`if()`-Funktionen richtig Spaß zu haben. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt einzustellen, sodass wir das gesamte Farbschema steuern können!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir fügen außerdem ein {{htmlelement("form")}} hinzu, das ein {{htmlelement("select")}}-Dropdown enthält, das die Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut des `<article>`-Elements auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}}-Werten. Wir verwenden jedoch eine `if()`-Funktion mit einer `<if-test>`-Media-Abfrage, um die {{cssxref("margin-top")}}-Komponente innerhalb der margin-Kurzschrift auf `0` zu setzen, wenn die Ansichtsfensterbreite weniger als `700px` ist, und `20px`, wenn es breiter ist. Das bedeutet, dass auf breiten Bildschirmen ein wenig Rand oben am Inhalt vorhanden ist, der auf schmalen Bildschirmen, wo es etwas seltsam aussieht, entfernt wird.

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

Wir setzen dann die benutzerdefinierte Eigenschaft `--scheme` so, dass sie mit dem Klassenname des `<article>`-Elements übereinstimmt. Die Klasse wird durch unser JavaScript gesetzt, wenn ein neuer Wert im `<select>`-Element ausgewählt wird. Sie werden die Bedeutung der benutzerdefinierten Elementwerte im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die wahre Macht von CSS-`if()`-Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um unsere benutzerdefinierten Eigenschaften `--color1` und `--color2` zu unterschiedlichen Farbwerten einzustellen, abhängig vom Wert der `--scheme`-Benutzereigenschaft. Wir verwenden dann die `--color1` und `--color2`-Werte in den {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}}-Eigenschaften unseres `<article>`-Elements sowie den `color` und `background-color`-Eigenschaften unseres `<aside>`-Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die durch `if()`-Funktionen festgelegt werden.

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

Zuletzt verwenden wir `if()`-Funktionen an ein paar weiteren Stellen:

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>`-Elements auf `calc(3rem + 2vw)`, wenn die Ansichtsfensterbreite mehr als `700px` beträgt, und auf `3rem` ansonsten. Dies bedeutet, dass die Schriftgröße auf breiteren Bildschirmen dynamisch mit Änderungen der Ansichtsfensterbreite aktualisiert wird, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} von unserem `<h1>`-Element's {{cssxref("::before")}} Pseudo-Klasse, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft.

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

Versuchen Sie, verschiedene Farbschemawerte auszuwählen, um die Auswirkung auf das Aussehen und Gefühl zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Werte und -Einheiten-Modul](/de/docs/Web/CSS/CSS_values_and_units)
