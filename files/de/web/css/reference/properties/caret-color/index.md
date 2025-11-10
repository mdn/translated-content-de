---
title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Texteingabe-Cursors**, manchmal auch als **Cursor für die Eingabemarke** bezeichnet, fest. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, an der das nächste eingegebene Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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

  - : Wird im Allgemeinen auf [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) aufgelöst, die {{cssxref("color")}} des Textes, der geändert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Cursors.

## Beschreibung

Ein Texteingabe-Cursor ist ein sichtbarer Indikator der Stelle innerhalb eines bearbeitbaren Textes — oder innerhalb eines Elements, das Texteingaben akzeptiert —, an der Inhalt eingefügt (oder gelöscht) wird. Der Cursor ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Er blinkt in der Regel, um auffälliger zu sein. Der Cursor erscheint nur, wenn das bearbeitbare Element den Fokus hat. Standardmäßig hat dieser Cursor die Farbe des Textes. Die Eigenschaft `caret-color` kann verwendet werden, um die Farbe dieses Cursors auf etwas anderes als die `currentColor` zu setzen oder einen farbigen Cursor auf die Standardeinstellung zurückzusetzen.

Der Wert `auto` setzt den Texteingabe-Cursor auf `currentColor`, was die {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, wobei {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert festlegen.

### Verständnis der Texteingabe-Cursors

Der Texteingabe-Cursor und daher diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Cursor erscheint in fokussierten Benutzerschnittstellenelementen, in denen Benutzer Inhalte aktualisieren können, wie beispielsweise {{HTMLElement("input")}}-Elemente, die freien Text akzeptieren, das {{HTMLElement("textarea")}}-Element und Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

Der Cursor kann in `<input>`-Elementen vom Typ `password`, `text`, `search`, `tel` und `email` erscheinen. Bei Datum, `color`, `hidden`, `radio` oder `checkbox` Eingabetypen existiert kein Cursor. Einige Browser zeigen einen Cursor mit dem `number` Eingabetyp an. Es ist in manchen Browsern möglich, ein Cursor in Elementen erscheinen zu lassen, die niemals Textinhalt haben – zum Beispiel durch Setzen von [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) und Hinzufügen des Attributs `contenteditable`. Dies wird jedoch nicht empfohlen.

Ein Cursor kann in einem bearbeitbaren Element oder dessen Nachkommen angezeigt werden, vorausgesetzt, die Bearbeitbarkeit ist nicht deaktiviert, beispielsweise durch Setzen des `contentEditable`-Attributs eines Nachkommenelements auf `false`. Wenn ein Element nicht bearbeitbar oder auswählbar ist, beispielsweise wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Cursor nicht erscheinen.

### Cursor versus Mauszeiger

Es gibt mehrere Arten von Cursorn. Der Texteingabe-Cursor ist der einzige Typ, der von der Eigenschaft `caret-color` beeinflusst wird.

Viele Browser haben einen **Navigationscursor**, der ähnlich wie ein Texteingabe-Cursor funktioniert, aber in nicht bearbeitbarem Text verschoben werden kann.

Das Mauszeigerbild, das für bestimmte {{cssxref("cursor")}} Eigenschaftswerte gezeigt wird (zum Beispiel `auto` oder `text`), kann einem Cursor ähneln, ist es aber nicht. Es ist ein Mauszeiger.

### Animation von `auto`

Im Allgemeinen verwenden Benutzeragenten bei `caret-color`, wenn es auf `auto` gesetzt ist, `currentColor`, das animierbar ist. Jedoch ist `auto` kein standardmäßig animierbarer Wert: Bei der Animation oder dem Übergang der `caret-color` von `auto` auf jeden Farbwert findet keine Interpolation statt. Die Animation ist [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete); die Farbe wechselt zur oder von der `currentColor`-Farbe im Mittelpunkt der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer benutzerdefinierten Cursorfarbe

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
- {{cssxref("caret")}} shorthand
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
