---
title: if()
slug: Web/CSS/if
l10n:
  sourceCommit: d8a5165fd3c3b35ea9d07a914459e8d468f62276
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, für eine Eigenschaft verschiedene Werte festzulegen, abhängig vom Ergebnis eines Bedingungstests. Der Test kann auf einer [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder einer [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) basieren.

## Syntax

```css-nolint
/* Single <if-test> */
if(style(--scheme: dark): #eee;)
if(media(print): #000;)
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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`-Elementen. Jedes `<if-branch>` besteht aus einer `<if-condition>` gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das Schlüsselwort `else`.
    - `<if-test>`
      - : Eine [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das eine `<if-condition>` darstellt, die immer auf wahr auswertet.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}}.

## Beschreibung

Die CSS `if()` Funktion bietet eine bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScript [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()` Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jede `<if-condition>` ist entweder ein Paar aus `<if-test> : <value>` oder ein Paar aus `else : <value>`. Das Semikolon nach der letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion auftreten.
2. Die erste `<if-condition>`, die auf `true` auswertet, gibt den zugeordneten `<value>` zurück.
3. Wenn keine `<if-condition>` auf `true` auswertet, gibt die Funktion ein {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt:")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()` Funktion in einer Wertedeklaration verwendet wird, die einen Fallback hat, wie eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) oder eine {{cssxref("anchor()")}} Funktion.

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

In diesem Fall setzen wir einen anderen {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}} Elemente, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) auf `ice` oder `fire` gesetzt ist. Wenn `--scheme` nicht existiert oder auf einen anderen Wert gesetzt ist, kommt der `else` Wert zum Einsatz und die `background-image` Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss mit einem Doppelpunkt von ihrem zugehörigen Wert getrennt werden und jedes `<if-condition> : <value>` Paar muss mit einem Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>` Paar optional.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) vorhanden sein. Ist dies der Fall, ist die gesamte Deklaration ungültig.

Wenn ein einzelnes `<if-condition>` oder `<value>` ungültig ist, macht es die gesamte `if()` Funktion nicht ungültig; stattdessen geht der Parser zur nächsten `<if-condition> : <value>` Paarung weiter. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Häufigkeit und Position von `else : <value>` Paaren

Sie können mehrere `else : <value>` Paare innerhalb einer `if()` Funktion in jeder Position hinzufügen. In den meisten Fällen wird jedoch ein einzelnes `else : <value>` Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keine der `<if-test>`s auf wahr auswertet.

Wenn Sie ein `else : <value>` Paar vor allen `<if-test> : <value>` Paaren einfügen, werden die Bedingungen, die darauf folgen, nicht ausgewertet, da `else` immer auf `true` auswertet. Die folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>` Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht wie erwartet verhält, ist ein Fall, in dem Sie möglicherweise ein `else : <value>` an einer anderen Position als dem Ende der Wertereihe setzen möchten. Im folgenden Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>` Paar richtig funktioniert. Wenn nicht, gibt das `else : <value>` Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>` Paar behoben werden muss. Die letzten beiden `<if-test> : <value>` Paare werden erneut nie ausgewertet.

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

Bitte beachten Sie, dass eine `if()` Funktion immer noch gültig ist, wenn sie nur ein `else : <value>` Paar oder gar nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}} Wert immer auf `yellow` gesetzt, und das `background-image` wird auf seinen Anfangswert gesetzt. Es wäre besser, die `background-color` direkt auf `yellow` zu setzen und das `background-image` auf `initial` oder `none`.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt betrachten wir jeden einzelnen im Detail.

#### Stil-Abfragen

Ein [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` ermöglicht es Ihnen zu testen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist, und infolgedessen einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben bereits einige Beispiele für Stil-Abfragen durchgearbeitet; schauen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die `--scheme` benutzerdefinierte Eigenschaft auf dem gleichen Element auf einen Wert von `ice` gesetzt ist, wird der bereitgestellte `linear-gradient()` Wert zurückgegeben. Wenn nicht, wird `none` zurückgegeben.

Die Verwendung von Stil-Abfragen innerhalb von `if()` Anweisungen hat einen Vorteil gegenüber {{cssxref("@container")}} Abfragen – Sie können ein Element direkt mit Stilen ansprechen, basierend darauf, ob eine benutzerdefinierte Eigenschaft auf ihm gesetzt ist, anstatt gesetzte Stile auf einem übergeordneten Containerelement zu überprüfen.

Sie können auch `and`, `or`, oder `not` Logik innerhalb von Stil-Abfragen verwenden. Zum Beispiel:

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

Eine `@container` Abfrage hat einige Vorteile – Sie können mit `if()` Stil-Abfragen nur einzelne Eigenschaftswerte gleichzeitig festlegen, während `@container` Abfragen verwendet werden können, um bedingt ganze Regelsätze anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungsmöglichkeiten.

Beachten Sie, dass Container-Stil-Abfragen derzeit keine regulären CSS-Eigenschaften unterstützen, sondern nur CSS-Benutzerdefinierte Eigenschaften. Zum Beispiel wird das folgende nicht funktionieren:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Abfragen

Ein [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob ein Medienabfragetest wahr zurückgibt.

Sie können Medientypen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>` Paar auf Druckmedien einen Wert von `white` zurück, während die `else` Klausel `#eee` auf Nicht-Druckmedien zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

Sie können auch Medienmerkmale verwenden — das folgende gibt einen Wert von `0 auto` zurück, wenn die aktuelle Ansichtsfensterbreite weniger als `700px` beträgt, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf einem Medienabfrageergebnis variieren müssen.

Sie können auch `and`, `or`, oder `not` Logik innerhalb von Medienabfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Medienabfrage festlegen möchten, wird eine reguläre {{cssxref("@media")}} Struktur benötigt. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungsmöglichkeiten.

#### Feature-Abfragen

Ein [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` kann verwendet werden, um einen Wert für eine Eigenschaft festzulegen, abhängig davon, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende einen {{cssxref("color_value/lch()")}} Farbwert zurück, wenn `lch()` Farben unterstützt werden, oder einen {{cssxref("color_value/rgb()")}} Farbwert, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192 192 192);
)
```

Auch Selektorunterstützungs-Abfragen funktionieren. Folgendes gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}} Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `and`, `or`, oder `not` Logik innerhalb von Feature-Abfragen verwenden. Zum Beispiel:

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

Feature-Abfragen sind innerhalb von `if()` Anweisungen wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung für einen bestimmten Wert oder eine separate Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Abfrage festlegen möchten, ist eine reguläre {{cssxref("@supports")}} Strukturerklärung besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungsmöglichkeiten.

### Bereitstellung von Fallback-Werten

Die `if()` Anweisung verschlechtert sich nicht anstandslos; ein expliziter Fallback muss für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel geben wir in diesem Fall einen statischen {{cssxref("padding")}} Wert für Browser an, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die je nach dem, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` gesetzt ist, unterschiedliche Padding-Werte festlegt.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die Bedingung `else` einzuschließen. In Browsern, die `if()` unterstützen, würde ohne einen `else` Wert, sollte `--size` nicht gleich `"2xl"` sein, das Padding auf `initial` gesetzt werden.

### Ganze und partielle Werte

Eine `if()` Funktion kann als Wert jeder CSS-Eigenschaft gesetzt werden, sie kann aber auch Teile von Eigenschaftswerten bestimmen. Zum Beispiel wird der folgende verschiedene {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}} Kurzform-Eigenschaft gesetzt, abhängig davon, ob {{cssxref("color_value/lch()")}} Farben unterstützt werden:

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

Da eine `if()` Funktion die Stelle von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()` Funktionen innerhalb anderer `if()` Funktionen und innerhalb anderer Funktionen wie {{cssxref("calc()")}} zu verschachteln.

Zum Beispiel verwenden wir in dieser Deklaration `if()`, um einen `color` Eigenschaftswert abhängig von verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()` Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else` Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen wahr ist).

Die beiden `<value>`s sind jedoch auch `if()` Funktionen. Diese inneren `if()` Funktionen geben einen helleren Farbwert zurück, wenn der Nutzer ein dunkles Farbschema bevorzugt (bestimmt durch die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage), und einen dunkleren Farbwert sonst.

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

Im nächsten Beispiel setzen wir die `width` Eigenschaft gleich einer `calc()` Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()` Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Wenn ja, ist der Prozentsatz `70%`, also löst sich die äußere Funktion zu `calc(70% - 50px)` auf. Wenn nicht, ist der Prozentsatz `50%`, sodass sich die äußere Funktion zu `calc(50% - 50px)` auflöst.

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

In diesem Beispiel zeigen wir die grundlegende Verwendung jedes der drei Arten von `<if-test>`.

#### HTML

Unser HTML hat ein {{htmlelement("section")}} Element mit zwei {{htmlelement("article")}} Elementen darin, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>` hat eine benutzerdefinierte Eigenschaft in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut gesetzt — `--show-apple:true` — die wir später verwenden, um bedingt einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>` Element ab, gestalten es mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und setzen einen {{cssxref("gap")}} zwischen den beiden Kind `<article>` Elementen. Wir verwenden dann eine `if()` Funktion mit einer [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienabfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}} Eigenschaft auf `row` zu setzen, wenn das Dokument sich in der Landschaftsausrichtung befindet, oder `column`, wenn es sich im Hochformat befindet. Dies ordnet die `article` Elemente nebeneinander auf breiten Bildschirmen und von oben nach unten auf schmalen Bildschirmen an.

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

Als nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>` Elements ab und setzen seine {{cssxref("content")}} Eigenschaft auf ein Apfel-Emoji, aber nur, wenn `--show-apple: true` gesetzt ist (wir haben das früher mit einem Inline- {{htmlelement("style")}} in unserem HTML gemacht). Wir erreichen dies mit einer `if()` Funktion und einer [Stil-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>` Element selbst. Wir verwenden ein Feature-Abfrage `<if-test>`, um zu testen, ob der Browser `lch()` Farben unterstützt, und setzen die {{cssxref("color")}} Eigenschaft auf eine `lch()` Farbe, wenn sie unterstützt wird, oder ein hexadezimales Äquivalent, wenn nicht.

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

Beachten Sie, wie die Gestaltung angewendet wird. Testen Sie das Konditionierungsstyling der ersten zwei `if()` Abfragen, indem Sie das gerenderte Demo mit den Entwicklertools Ihres Browsers modifizieren:

- Entfernen Sie das `style` Attribut des `<section>` Elements und beachten Sie, wie die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height` Attribut des einbettenden `<iframe>` auf `1200px`. Dies ändert die Orientierung von Landschaft zu Hochformat. Beachten Sie, wie sich das Layout infolgedessen ändert.

### Steuerung eines Farbschemas mit `if()`

Diese Demo zeigt, wie Sie mit CSS `if()` Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()` Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, was uns ermöglicht, das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}} Element mit etwas Inhalt darin — eine Überschrift der obersten Ebene, ein paar {{htmlelement("p")}} Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem Dropdown-Menü ein, das eine Auswahl eines Farbschemas ermöglicht.

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

Unser JavaScript fügt dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener hinzu. Wenn ein neuer Wert ausgewählt wird, setzt unser Skript das `<article>` Element's [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut auf diesen Wert.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In unserem CSS geben wir dem `<body>` Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto` {{cssxref("margin")}} Werten. Wir verwenden jedoch eine `if()` Funktion mit einem Medienabfrage `<if-test>`, um die {{cssxref("margin-top")}} Komponente innerhalb der `margin` Kurzform auf `0` zu setzen, wenn die Ansichtsfensterbreite kleiner als `700px` ist, und `20px`, wenn sie breiter ist. Dies bedeutet, dass auf großen Bildschirmen etwas Abstand oben an dem Inhalt besteht, dieser jedoch auf schmalen Bildschirmen entfernt wird, wo er komisch aussieht.

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

Wir setzen dann die `--scheme` benutzerdefinierte Eigenschaft, um dem `class` Namen des `<article>` Elements zu entsprechen. Die Klasse wird von unserem JavaScript eingestellt, wenn ein neuer Wert im `<select>` Element gewählt wird. Sie werden die Bedeutung des benutzerdefinierten Elementwertes im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir erkennen die wirkliche Stärke von CSS `if()` Funktionen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()` Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften auf unterschiedliche Farbwerte zu setzen, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft. Wir verwenden dann die `--color1` und `--color2` Werte in unserer `<article>` Element's {{cssxref("color")}}, {{cssxref("border")}}, und {{cssxref("background-image")}} Eigenschaften und den \\`color\\` und \\`background-color\\` Eigenschaften des \\`<aside>\\` Elements.

Wir kontrollieren unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die durch `if()` Funktionen gesetzt werden.

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

- Wir setzen die {{cssxref("font-size")}} unseres `<h1>` Elements auf `calc(3rem + 2vw)`, wenn das Ansichtsfenster breiter als `700px` ist, und auf `3rem` sonst. Dies bedeutet, dass sich die Schriftgröße dynamisch mit Änderungen der Ansichtsfensterbreite auf größeren Bildschirmen aktualisiert, sich aber auf kleineren Bildschirmen gleich bleibt.
- Wir setzen ein geeignetes Emoji als {{cssxref("content")}} der {{cssxref("::before")}} Pseudoklasse unseres `<h1>` Elements, abhängig vom Wert der `--scheme` benutzerdefinierten Eigenschaft.

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

Diese Demo rendert wie folgt:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Versuchen Sie, verschiedene Farbschemata auszuwählen, um den Effekt auf das Erscheinungsbild zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Werte und Einheiten Modul](/de/docs/Web/CSS/CSS_Values_and_Units)
