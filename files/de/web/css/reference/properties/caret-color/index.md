---
title: "`caret-color` CSS property"
short-title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe des **Einfüge-Carets** fest, der manchmal auch als **Texteingabe-Cursor** bezeichnet wird. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, an der das nächste getippte Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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
  - : Löst allgemein zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) auf, der {{cssxref("color")}} des Textes, der modifiziert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Beschreibung

Ein Einfüge-Caret ist ein sichtbarer Indikator für die Position innerhalb eines bearbeitbaren Textes oder innerhalb eines Elements, das Texteingaben akzeptiert, wo durch den Benutzer Inhalte eingefügt (oder gelöscht) werden. Das Caret ist in der Regel eine dünne vertikale Linie, die angibt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Es blinkt für gewöhnlich (flackert an und aus), um besser erkennbar zu sein. Das Caret erscheint nur, wenn das bearbeitbare Element den Fokus hat. Standardmäßig hat dieses Caret die gleiche Farbe wie der Text. Die Eigenschaft `caret-color` kann verwendet werden, um die Farbe dieses Carets auf etwas anderes als `currentColor` zu setzen oder um ein farbiges Caret auf seine Standardeinstellung zurückzusetzen.

Der Wert `auto` setzt das Einfüge-Caret auf `currentColor`, was der {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt zu gewährleisten, wobei {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe und wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert setzen.

### Verständnis der Einfüge-Carets

Das Einfüge-Caret und somit diese Eigenschaft gilt nur für Text oder Elemente, die Texteingaben akzeptieren können. Das Caret erscheint in fokussierten Benutzerschnittstellenelementen, in denen Benutzer Inhalte aktualisieren können, wie z.B. {{HTMLElement("input")}}-Elemente, die Freiformtext akzeptieren, das {{HTMLElement("textarea")}}-Element und Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

Das Caret kann in `<input>`-Elementen vom Typ `password`, `text`, `search`, `tel` und `email` erscheinen. Beim Datum, `color`, `hidden`, `radio` oder `checkbox` Eingabetypen existiert kein Caret. Einige Browser zeigen ein Caret beim `number` Eingabetyp. Es ist in einigen Browsern möglich, ein Caret in Elementen erscheinen zu lassen, die niemals Textinhalt haben — zum Beispiel durch Setzen von [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) und Hinzufügen des `contenteditable`-Attributes. Dies wird jedoch nicht empfohlen.

Ein Caret kann in einem bearbeitbaren Element oder dessen Nachfahren angezeigt werden, sofern die Bearbeitbarkeit nicht deaktiviert ist, beispielsweise indem das `contentEditable`-Attribut eines Nachfahrenelements auf `false` gesetzt wird. Wenn ein Element nicht bearbeitbar oder auswählbar ist, beispielsweise wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte das Caret nicht erscheinen.

### Caret versus Cursor

Es gibt mehrere Arten von Carets. Das Einfüge-Caret ist der einzige Typ, der von der Eigenschaft `caret-color` betroffen ist.

Viele Browser haben ein **Navigations-Caret**, das ähnlich wie ein Einfüge-Caret funktioniert, sich jedoch in nicht bearbeitbarem Text bewegen lässt.

Das Mauscursorbild, das für bestimmte {{cssxref("cursor")}}-Eigenschaftswerte (zum Beispiel `auto` oder `text`) angezeigt wird, kann einem Caret ähneln, ist es aber nicht. Es ist ein Cursor.

### Animationen von `auto`

Im Allgemeinen verwenden Benutzeragenten, wenn `caret-color` auf oder standardmäßig auf `auto` gesetzt ist, `currentColor`, welches animierbar ist. `auto` ist jedoch standardmäßig kein animierbarer Wert: Beim Animieren oder Übergang von `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete); die Farbe wechselt in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}} von oder zu der `currentColor` Farbe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer benutzerdefinierten Caret-Farbe

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
