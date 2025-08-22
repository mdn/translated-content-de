---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 7a146b52b4ba03be98075668d50490872c78fd12
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe des **Einfügemarkers**, manchmal auch **Texteingabecursor** genannt. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, wo das nächste eingegebene Zeichen hinzugefügt oder das nächste zu löschende Zeichen entfernt wird.

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
  - : Wird im Allgemeinen zu [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) aufgelöst, der {{cssxref("color")}} des Textes, der bearbeitet wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Cursors.

## Beschreibung

Ein Einfügemarker ist ein sichtbarer Indikator für die Stelle innerhalb von bearbeitbarem Text — oder innerhalb eines Elements, das Texteingaben akzeptiert —, an der Inhalt vom Benutzer eingefügt (oder gelöscht) wird. Der Marker ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Er blinkt generell (erscheint und verschwindet), sodass er auffälliger ist. Der Marker erscheint nur, wenn das bearbeitbare Element den Fokus hat. Standardmäßig hat dieser Marker die Farbe des Textes. Die Eigenschaft `caret-color` kann verwendet werden, um die Farbe dieses Markers auf etwas anderes als den `currentColor` zu setzen oder um einen farbigen Marker auf seine Standardeinstellung zurückzusetzen.

Der Wert `auto` setzt den Einfügemarker auf `currentColor`, das ist die {{cssxref("color")}} des Textes, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, wobei Faktoren wie die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere berücksichtigt werden. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, auch wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>`-Wert setzen.

### Verständnis von Einfügemarkern

Der Einfügemarker und somit diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Marker erscheint in fokussierten Benutzerschnittstellenelementen, in denen Benutzer Inhalte aktualisieren können, wie {{HTMLElement("input")}}-Elemente, die freien Text akzeptieren, das {{HTMLElement("textarea")}}-Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Der Marker kann in `<input>`-Elementen des Typs `password`, `text`, `search`, `tel` und `email` erscheinen. Bei Datums-, `color`-, `hidden`-, `radio`- oder `checkbox`-Eingabetypen existiert kein Marker. Einige Browser zeigen einen Marker mit dem Eingabetyp `number` an. Es ist in einigen Browsern möglich, einen Marker in Elementen erscheinen zu lassen, die niemals Textinhalte haben — zum Beispiel indem [`appearance: none`](/de/docs/Web/CSS/appearance) gesetzt und das `contenteditable`-Attribut hinzugefügt wird. Dies wird jedoch nicht empfohlen.

Ein Marker kann in einem bearbeitbaren Element oder dessen Nachkommen angezeigt werden, sofern die Bearbeitbarkeit nicht deaktiviert ist, zum Beispiel indem das `contentEditable`-Attribut eines Nachkommenelements auf `false` gesetzt wird. Wenn ein Element nicht bearbeitbar oder auswählbar ist, zum Beispiel wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Marker nicht erscheinen.

### Marker versus Cursor

Es gibt verschiedene Arten von Markern. Der Einfügemarker ist der einzige Typ, der von der `caret-color` Eigenschaft betroffen ist.

Viele Browser haben einen **Navigationsmarker**, der ähnlich wie ein Einfügemarker funktioniert, jedoch in nicht bearbeitbarem Text verschoben werden kann.

Das Mauszeigerbild, das für bestimmte Werte der {{cssxref("cursor")}} Eigenschaft angezeigt wird (zum Beispiel `auto` oder `text`), kann einem Marker ähneln, ist es aber nicht. Es handelt sich um einen Cursor.

### Animation von `auto`

Im Allgemeinen verwenden Benutzeragenten `currentColor`, wenn `caret-color` auf `auto` gesetzt ist oder dies der Standardwert ist, der animierbar ist. `auto` ist jedoch kein animierbarer Wert standardmäßig: Beim Animieren oder Übergehen der `caret-color` von `auto` zu einem beliebigen Farbwert findet keine Interpolation statt. Die Animation ist [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete); die Farbe wechselt von oder zu `currentColor` in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung einer benutzerdefinierten Markierungsfarbe

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

- {{cssxref("caret-animation")}}
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
