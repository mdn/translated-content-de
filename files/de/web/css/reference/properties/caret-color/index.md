---
title: "`caret-color` CSS property"
short-title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 00da2fc19d0c8c7cd2e91c78cf55e204cd94cf2b
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe des **Einfüge-Carets** fest, das manchmal auch als **Text-Eingabe-Cursor** bezeichnet wird. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, an der das nächste getippte Zeichen hinzugefügt oder das nächste zu löschende Zeichen entfernt wird.

Die `caret-color`-Eigenschaft kann auch als Teil der {{cssxref("caret")}} Shorthand-Eigenschaft gesetzt werden.

{{InteractiveExample("CSS Demo: caret-color")}}

```css interactive-example-choice
caret-color: red;
```

```css interactive-example-choice
caret-color: auto;
```

```css interactive-example-choice
caret-color: transparent;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>Enter text in the field to see the caret:</p>
    <p><input id="example-element" type="text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
}
```

## Syntax

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Global values */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Werte

- `auto`
  - : Löst sich im Allgemeinen zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) auf, der {{cssxref("color")}} des Textes, der geändert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Beschreibung

Ein Einfüge-Caret ist ein sichtbarer Indikator der Stelle innerhalb von bearbeitbarem Text — oder innerhalb eines Elements, das Texteingabe akzeptiert — an der Inhalte vom Benutzer eingefügt (oder gelöscht) werden. Das Caret ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen geschehen wird. Es blinkt normalerweise (flackert ein und aus), damit es besser auffällt. Das Caret erscheint nur, wenn das bearbeitbare Element den Fokus hat. Standardmäßig hat dieses Caret die Farbe des Textes. Die `caret-color`-Eigenschaft kann verwendet werden, um die Farbe dieses Carets auf etwas anderes als `currentColor` zu setzen oder ein gefärbtes Caret auf seinen Standard zurückzusetzen.

Der `auto`-Wert setzt das Einfüge-Caret auf `currentColor`, was der {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, wobei {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis verwenden jedoch alle Browser die aktuelle Farbe standardmäßig, und wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert setzen.

### Verständnis von Einfüge-Carets

Das Einfüge-Caret, und damit diese Eigenschaft, gilt nur für Text oder Elemente, die Texteingabe akzeptieren können. Das Caret erscheint in fokussierten Benutzeroberflächenelementen, in denen Benutzer Inhalte aktualisieren können, wie z.B. {{HTMLElement("input")}}-Elemente, die Freitexte akzeptieren, das {{HTMLElement("textarea")}}-Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Das Caret kann in `<input>`-Elementen des Typs `password`, `text`, `search`, `tel` und `email` erscheinen. Kein Caret existiert bei Datum-, `color`-, `hidden`-, `radio`- oder `checkbox`-Eingabetypen. Einige Browser zeigen ein Caret beim `number`-Eingabetyp an. Es ist in einigen Browsern möglich, ein Caret in Elementen erscheinen zu lassen, die normalerweise keinen Textinhalt haben — zum Beispiel durch das Setzen von [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) und hinzufügen des `contenteditable`-Attributs. Dies wird jedoch nicht empfohlen.

Ein Caret kann in einem bearbeitbaren Element oder seinen Nachfahren angezeigt werden, vorausgesetzt, die Bearbeitbarkeit ist nicht deaktiviert, zum Beispiel durch das Setzen des `contentEditable`-Attributs eines Nachfahrelements auf `false`. Wenn ein Element nicht bearbeitbar oder auswählbar ist, z.B. wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte das Caret nicht erscheinen.

### Caret versus Cursor

Es gibt mehrere Typen von Carets. Das Einfüge-Caret ist der einzige Typ, der von der `caret-color`-Eigenschaft beeinflusst wird.

Viele Browser haben ein **Navigations-Caret**, das ähnlich wie ein Einfüge-Caret funktioniert, sich aber in nicht bearbeitbarem Text bewegen lässt.

Das Mauszeigerbild, das für bestimmte Werte der {{cssxref("cursor")}}-Eigenschaft angezeigt wird (z.B. `auto` oder `text`), kann einem Caret ähneln, ist aber keines. Es ist ein Cursor.

### Animation von `auto`

Im Allgemeinen verwenden Benutzeragenten, wenn die `caret-color` auf `auto` gesetzt ist oder sich dazu standardmäßig verhält, `currentColor`, das animiert werden kann. `auto` ist jedoch standardmäßig kein animierbarer Wert: Beim Animieren oder Überblenden der `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete); die Farbe wechselt zu oder von der `currentColor`-Farbe in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer benutzerdefinierten Caret-Farbe

#### HTML

```html
<input value="This field uses a default caret." size="64" />
<input class="custom" value="I have a custom caret color!" size="64" />
<p contenteditable class="custom">
  This paragraph can be edited, and its caret has a custom color as well!
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: orange;
}

p.custom {
  caret-color: green;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-animation")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} Shorthand
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
