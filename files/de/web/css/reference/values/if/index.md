---
title: "`if()` CSS-Funktion"
short-title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{SeeCompatTable}}

Die **`if()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es, unterschiedliche Werte für eine Eigenschaft festzulegen, abhängig vom Ergebnis eines bedingten Tests. Der Test kann auf einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), einer [Media-Anfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder einer [Feature-Anfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basieren.

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

Der Parameter ist eine durch Semikolon getrennte Liste von `<if-branch>`-es. Jedes `<if-branch>` besteht aus einem `<if-condition>`, gefolgt von einem Doppelpunkt und einem `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Ein `<if-test>` oder das `else`-Schlüsselwort.
    - `<if-test>`
      - : Eine [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Media-Anfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature-Anfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Ein Schlüsselwort, das ein `<if-condition>` darstellt, das immer als wahr bewertet wird.

- `<value>`
  - : Ein Eigenschaftswert.

### Rückgabewert

Ein Wert oder {{Glossary("guaranteed_invalid_value", "garantiert ungültiger Wert")}}.

## Beschreibung

Die CSS `if()`-Funktion bietet bedingte Logik für CSS-Eigenschaftswerte und funktioniert ähnlich wie JavaScripts [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisungen.

Die `if()`-Funktion kann im Wert jeder Eigenschaft verwendet werden und kann null oder mehr durch Semikolon getrennte `<if-condition>`s enthalten. Jedes `<if-condition>` ist entweder ein `<if-test> : <value>`-Paar oder ein `else : <value>`-Paar. Das Semikolon nach dem letzten `<if-condition>` ist optional.

Der Rückgabewert wird wie folgt berechnet:

1. Die `<if-condition>`-Ausdrücke werden in der Reihenfolge ausgewertet, in der sie in der Funktion erscheinen.
2. Das erste `<if-condition>`, das zu `true` ausgewertet wird, gibt seinen zugeordneten `<value>` zurück.
3. Wenn keine `<if-condition>` zu `true` ausgewertet wird, gibt die Funktion einen {{Glossary("guaranteed_invalid_value", "&lt;garantiert-ungültig&gt;")}} zurück. Dies verhält sich als ungültig oder `false`, wenn die `if()`-Funktion in einem Wertausdruck verwendet wird, der ein Fallback hat, wie eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) oder eine {{cssxref("anchor()")}}-Funktion.

Beispielsweise:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

In diesem Fall setzen wir ein anderes {{cssxref("linear-gradient()")}} als das {{cssxref("background-image")}} auf {{htmlelement("div")}}-Elementen, abhängig davon, ob eine `--scheme` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) auf `ice` oder `fire` gesetzt ist. Falls `--scheme` nicht existiert oder existiert und auf einen anderen Wert gesetzt ist, greift der `else`-Wert, und die `background-image`-Eigenschaft wird auf `none` gesetzt.

> [!NOTE]
> Jede Bedingung muss vom zugehörigen Wert durch einen Doppelpunkt getrennt werden, und jedes `<if-condition> : <value>`-Paar muss durch ein Semikolon getrennt werden. Das Semikolon ist für das letzte `<if-condition> : <value>`-Paar optional.

> [!WARNING]
> Es darf kein Leerzeichen zwischen `if` und der öffnenden Klammer (`(`) stehen. Andernfalls ist die gesamte Deklaration ungültig.

Wenn ein einzelnes `<if-condition>` oder `<value>` ungültig ist, macht es nicht die gesamte `if()`-Funktion ungültig; stattdessen geht der Parser zum nächsten `<if-condition> : <value>`-Paar über. Wenn keine `<if-condition>` oder `<value>` gültig ist, gibt die Funktion {{Glossary("guaranteed_invalid_value", "garantiert ungültig")}} zurück.

### Frequenz und Position von `else : <value>`-Paaren

Sie können mehrere `else : <value>`-Paare in einer `if()`-Funktion einfügen, in beliebiger Position. In den meisten Fällen wird jedoch ein einzelnes `else : <value>`-Paar am Ende der durch Semikolon getrennten Liste verwendet, um den Standardwert bereitzustellen, der immer zurückgegeben wird, wenn keiner der `<if-test>`s zu true ausgewertet wird.

Wenn Sie ein `else : <value>`-Paar vor allen `<if-test> : <value>`-Paaren einfügen, werden die darauf folgenden Bedingungen nicht ausgewertet, da `else` immer als true ausgewertet wird. Das folgende `if()` gibt daher immer `none` zurück, und die beiden `<if-test> : <value>`-Paare werden nie ausgewertet:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Das Debuggen eines Wertes, der sich nicht erwartungsgemäß verhält, ist ein Fall, in dem Sie ein `else : <value>` an einer anderen Stelle als am Ende der Werteliste platzieren möchten. In folgendem Beispiel versuchen wir herauszufinden, ob das erste `<if-test> : <value>`-Paar ordnungsgemäß funktioniert. Wenn nicht, gibt das `else : <value>`-Paar einen Wert von `url("debug.png")` zurück, um ein Bild anzuzeigen, das darauf hinweist, dass das erste `<if-test> : <value>`-Paar repariert werden muss. Die letzten beiden `<if-test> : <value>`-Paare werden wieder nicht ausgewertet.

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

Beachten Sie, dass eine `if()`-Funktion immer noch gültig ist, wenn sie nur ein `else : <value>`-Paar oder gar nichts enthält. Die folgenden Eigenschaftswerte sind beide gültig:

```css
background-color: if(else: yellow);
background-image: if();
```

Diese Funktionen sind nicht nützlich. Sie wurden aufgenommen, um ihre Gültigkeit zu demonstrieren. In diesem Fall wird der {{cssxref("background-color")}}-Wert immer auf `yellow` gesetzt und das `background-image` auf seinen Initialwert. Sie würden besser daran tun, den `background-color` direkt auf `yellow` zu setzen und das `background-image` auf `initial` oder `none`.

### Arten von if-Tests

Ein `<if-test>` akzeptiert eine von drei Abfragetypen. In diesem Abschnitt wird jeder im Detail betrachtet.

#### Stilabfragen

Ein `<if-test>` in einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) ermöglicht es zu überprüfen, ob ein bestimmter Eigenschaftswert auf einem Element gesetzt ist und daraufhin einen Wert auf eine andere Eigenschaft anzuwenden. Wir haben einige Beispiele für Stilanfragen bereits vorher durchgearbeitet; sehen wir uns ein weiteres Beispiel an:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Wenn die benutzerdefinierte Eigenschaft `--scheme` auf `ice` für dasselbe Element gesetzt ist, wird der angegebene `linear-gradient()`-Wert zurückgegeben. Ist dies nicht der Fall, wird `none` zurückgegeben.

Die Verwendung von Stilanfragen innerhalb von `if()`-Anweisungen hat gegenüber {{cssxref("@container")}}-Abfragen einen Vorteil — Sie können ein Element direkt mit Stilen ansprechen, basierend darauf, ob eine benutzerdefinierte Eigenschaft darauf gesetzt ist, anstatt festgelegte Stile auf einem Container-Elternelement überprüfen zu müssen.

Sie können auch `und`, `oder`, oder `nicht`-Logik innerhalb von Stilanfragen verwenden. Zum Beispiel:

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

Eine `@container`-Abfrage hat einige Vorteile — Sie können jeweils nur Einzelwerte mit `if()`-Stilanfragen setzen, während `@container`-Abfragen verwendet werden können, um konditionell ganze Regelsätze anzuwenden. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

Beachten Sie, dass Container-Stilanfragen derzeit keine regulären CSS-Eigenschaften unterstützen, nur benutzerdefinierte CSS-Eigenschaften. Zum Beispiel funktioniert das Folgende nicht:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media-Anfragen

Ein `<if-test>` in einer [Media-Anfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) kann verwendet werden, um einen Wert für eine Eigenschaft abhängig davon festzulegen, ob eine Media-Anfrage zutrifft.

Sie können Media-Typen verwenden. Zum Beispiel gibt das folgende `<if-test> : <value>`-Paar auf Druckmedien einen Wert von `white` zurück, während die `else`-Klausel auf Nicht-Druckmedien einen Wert von `#eeeeee` zurückgibt.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Sie können auch Media-Features verwenden — das folgende Beispiel gibt einen Wert von `0 auto` zurück, wenn die aktuelle Viewport-Breite kleiner als `700px` ist, oder `20px auto`, wenn dies nicht der Fall ist:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Dies ist wirklich nützlich, wenn Sie einen einzelnen Eigenschaftswert basierend auf dem Ergebnis einer Media-Anfrage variieren müssen.

Sie können auch `und`, `oder`, oder `nicht`-Logik innerhalb von Media-Anfragen verwenden. Zum Beispiel:

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

Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Media-Anfrage setzen möchten, benötigen Sie eine reguläre {{cssxref("@media")}}-Konstruktion. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

#### Feature-Anfragen

Ein `<if-test>` in einer [Feature-Anfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) kann verwendet werden, um einen Wert für eine Eigenschaft abhängig davon festzulegen, ob der Browser einen bestimmten Eigenschaftswert unterstützt.

Zum Beispiel gibt das folgende Beispiel eine {{cssxref("color_value/lch()")}}-Farbe zurück, wenn `lch()`-Farben unterstützt werden, oder eine {{cssxref("color_value/rgb()")}}-Farbe, wenn nicht:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Abfragen zur Selektoren-Unterstützung funktionieren ebenfalls. Das folgende Beispiel gibt einen Wert von `1em` zurück, wenn der Browser die {{cssxref(":buffering")}}-Pseudoklasse unterstützt, oder `initial`, wenn nicht:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Sie können auch `und`, `oder`, oder `nicht`-Logik innerhalb von Feature-Anfragen verwenden. Zum Beispiel:

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

Feature-Anfragen sind wirklich nützlich in `if()`-Anweisungen, wenn Sie einen einzelnen Eigenschaftswert basierend auf der Unterstützung eines bestimmten Wertes oder einer separaten Eigenschaft variieren müssen. Wenn Sie mehrere Deklarationen oder Regeln basierend auf einer Feature-Anfrage setzen möchten, ist eine reguläre {{cssxref("@supports")}}-Konstruktion besser. Die beiden Ansätze sind komplementär und haben unterschiedliche Verwendungen.

### Bereitstellung von Fallback-Werten

Die `if()`-Anweisung verschlechtert sich nicht allmählich; es muss ein explizites Fallback für nicht unterstützende Browser bereitgestellt werden.

Zum Beispiel stellen wir in diesem Fall einen statischen {{cssxref("padding")}}-Wert für Browser bereit, die `if()` nicht unterstützen. Browser, die `if()` unterstützen, überschreiben die erste Deklaration mit der zweiten, die verschiedene Auffüllwerte je nachdem setzt, ob die benutzerdefinierte Eigenschaft `--size: "2xl"` gesetzt ist oder nicht.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> Denken Sie daran, die `else`-Bedingung einzuschließen. In `if()`-unterstützenden Browsern, wenn kein `else`-Wert enthalten wäre und `--size` nicht gleich `"2xl"` wäre, würde das Padding auf `initial` gesetzt werden.

### Ganze und partielle Werte

Eine `if()`-Funktion kann als Wert jeder CSS-Eigenschaft gesetzt werden, sie kann jedoch auch verwendet werden, um Teile von Eigenschaftswerten zu bestimmen. Zum Beispiel setzt das folgende Beispiel einen anderen {{cssxref("border-color")}} innerhalb einer {{cssxref("border")}}-Kurzform-Eigenschaft, abhängig davon, ob {{cssxref("color_value/lch()")}}-Farben unterstützt werden:

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

### Verschachtelung von if()-Funktionen

Da eine `if()`-Funktion den Platz von ganzen Eigenschaftswerten oder einzelnen Komponenten einnehmen kann, ist es möglich, `if()`-Funktionen innerhalb anderer `if()`-Funktionen zu verschachteln und innerhalb anderer Funktionen wie {{cssxref("calc()")}}.

In diesem Beispiel verwenden wir `if()`, um einen `color`-Eigenschaftswert je nach verschiedenen Bedingungen festzulegen. Wir haben eine äußere `if()`-Funktion, die einen bestimmten Wert zurückgibt, je nachdem, ob die benutzerdefinierte Eigenschaft `--scheme` auf `ice` oder `fire` gesetzt ist (mit einem `else`-Wert von `black`, der zurückgegeben wird, wenn keine der Bedingungen true ergibt).

Aber die beiden `<value>`s sind ebenfalls `if()`-Funktionen. Diese inneren `if()`-Funktionen geben einen hellen Farbwert zurück, wenn der Benutzer ein dunkles Farbschema bevorzugt (ermittelt mit der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media-Anfrage) und ansonsten einen dunklen Farbwert.

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

Im nächsten Beispiel setzen wir die `width`-Eigenschaft gleich einer `calc()`-Funktion, die `50px` von einem Prozentsatz der Breite des Elternelements abzieht. Der Prozentsatz wird durch eine `if()`-Funktion dargestellt, die testet, ob die benutzerdefinierte Eigenschaft `--scheme: wide` gesetzt ist. Ist dies der Fall, beträgt der Prozentsatz `70%`, sodass sich die äußere Funktion zu `calc(70% - 50px)` auflöst. Ist dies nicht der Fall, beträgt der Prozentsatz `50%`, sodass sich die äußere Funktion zu `calc(50% - 50px)` auflöst.

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

In diesem Beispiel zeigen wir die grundlegende Verwendung jedes der drei Arten von `<if-test>`.

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit zwei darin enthaltenen {{htmlelement("article")}}-Elementen, die `<h2>` [Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) enthalten. Das `<section>`-Element hat eine benutzerdefinierte Eigenschaft in seinem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut gesetzt — `--show-apple:true` — das wir später verwenden, um konditionell einen Eigenschaftswert festzulegen.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In unserem CSS zielen wir zuerst auf das `<section>`-Element ab, legen es mit [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) an und setzen einen {{cssxref("gap")}} zwischen den beiden untergeordneten `<article>`-Elementen. Dann verwenden wir eine `if()`-Funktion mit einer [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) Media-Anfrage `<if-test>`, um den Wert der {{cssxref("flex-direction")}}-Eigenschaft auf `row` zu setzen, wenn das Dokument im Querformat ist, oder auf `column`, wenn es im Hochformat ist. Dies ordnet die `article`-Elemente nebeneinander auf breiten Bildschirmen an, und von oben nach unten auf schmalen Bildschirmen.

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

Als Nächstes zielen wir auf das {{cssxref("::before")}} Pseudo-Element des `<h2>`-Elements ab und setzen dessen {{cssxref("content")}}-Eigenschaft auf ein Emoji eines Apfels, aber nur, wenn `--show-apple: true` gesetzt ist (das haben wir zuvor mit einem Inline-{{htmlelement("style")}}-Element in unserem HTML getan). Dies erreichen wir mit einer `if()`-Funktion mit einer [Stilanfrage](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Schließlich zielen wir auf das `<h2>`-Element selbst ab. Wir verwenden eine Feature-Anfrage `<if-test>`, um zu testen, ob der Browser `lch()`-Farben unterstützt, und setzen die {{cssxref("color")}}-Eigenschaft auf eine `lch()`-Farbe, wenn dies der Fall ist, oder auf ein hexequivalentes, wenn nicht.

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

Beachten Sie, wie das Styling angewendet wird. Testen Sie das bedingte Styling für die ersten beiden `if()`-Anfragen, indem Sie das gerenderte Demo mit den Entwickler-Tools Ihres Browsers ändern:

- Entfernen Sie das `style`-Attribut des `<section>`-Elements und stellen Sie fest, dass die Apfel-Emojis nicht mehr gerendert werden.
- Ändern Sie das `height`-Attribut des einbettenden `<iframe>` auf `1200px`. Dadurch wird die Ausrichtung von Querformat zu Hochformat gewechselt. Beachten Sie, wie sich das Layout dadurch ändert.

### Steuerung eines Farbschemas mit `if()`

Dieses Demo zeigt, wie Sie mit CSS `if()`-Funktionen richtig Spaß haben können. Unter anderem verwenden wir `if()`-Funktionen, um die Werte einiger benutzerdefinierter Eigenschaften bedingt festzulegen, was es uns ermöglicht, das gesamte Farbschema zu steuern!

#### HTML

Unser HTML enthält ein {{htmlelement("article")}}-Element mit etwas Inhalt darin — eine Hauptüberschrift, ein paar {{htmlelement("p")}}-Elemente und ein {{htmlelement("aside")}}. Wir fügen auch ein {{htmlelement("form")}} mit einem {{htmlelement("select")}}-Dropdown ein, das es ermöglicht, ein Farbschema auszuwählen.

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

In unserem CSS geben wir dem `<body>`-Element eine {{cssxref("max-width")}} von `700px` und zentrieren es mit `auto`-{{cssxref("margin")}}-Werten. Allerdings verwenden wir eine `if()`-Funktion mit einer Media-Anfrage `<if-test>`, um die {{cssxref("margin-top")}}-Komponente innerhalb der `margin`-Kurzform auf `0` zu setzen, wenn das Viewport breiter als `700px` ist, und `20px` zu verwenden, wenn es schmaler ist. Dies bedeutet, dass wir auf breiten Bildschirmen ein wenig Rand oben im Inhalt haben, aber dieser wird auf schmalen Bildschirmen entfernt, wo es ein wenig seltsam aussieht.

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

Dann setzen wir die benutzerdefinierte Eigenschaft `--scheme` auf den Klassennamen des `<article>`-Elements. Die Klasse wird von unserem JavaScript festgelegt, wenn ein neuer Wert im `<select>`-Element ausgewählt wird. Sie werden die Bedeutung des Werts der benutzerdefinierten Eigenschaft im nächsten CSS-Block sehen.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Wir können die echte Stärke der CSS `if()`-Funktionen sehen, wenn wir sie mit benutzerdefinierten Eigenschaften kombinieren. Hier verwenden wir `if()`-Funktionen, um unsere `--color1` und `--color2` benutzerdefinierten Eigenschaften je nach dem Wert der benutzerdefinierten Eigenschaft `--scheme` auf verschiedene Farbwerte zu setzen. Wir verwenden dann die Werte `--color1` und `--color2` in den Eigenschaften {{cssxref("color")}}, {{cssxref("border")}} und {{cssxref("background-image")}} unseres `<article>`-Elements sowie in den Eigenschaften `color` und `background-color` unseres `<aside>`-Elements.

Wir steuern unser gesamtes Farbschema über benutzerdefinierte Eigenschaften, mit unterschiedlichen Werten, die über `if()`-Funktionen festgelegt werden.

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

- Wir setzen die {{cssxref("font-size")}} des `<h1>`-Elements auf `calc(3rem + 2vw)`, wenn das Viewport breiter ist als `700px`, und auf `3rem`, wenn es schmaler ist. Dies bedeutet, dass sich die Schriftgröße auf breiten Bildschirmen dynamisch bei Änderungen der Viewport-Breite anpasst, aber auf schmalen Bildschirmen gleich bleibt.
- Wir setzen ein geeignets Emoji als {{cssxref("content")}} der {{cssxref("::before")}}-Pseudo-Klasse unseres `<h1>`-Elements, abhängig vom Wert der benutzerdefinierten `--scheme`-Eigenschaft.

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

Versuchen Sie, unterschiedliche Farbwert aus dem Dropdown auszuwählen, um die Auswirkungen auf das Erscheinungsbild zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Stilanfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)
- [Media-Anfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Feature-Anfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Werte- und -Einheiten-Modul](/de/docs/Web/CSS/Guides/Values_and_units)
