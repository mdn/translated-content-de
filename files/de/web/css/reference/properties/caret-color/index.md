---
title: "`caret-color` CSS property"
short-title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe des **Eingabe-Carets** fest. Dieses wird manchmal auch als **Text-Eingabe-Cursor** bezeichnet. Es handelt sich um den sichtbaren Marker, der an der Einfügestelle erscheint, an der das nächste eingegebene Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

Die `caret-color`-Eigenschaft kann auch als Teil der {{cssxref("caret")}} Kurzschreibweise festgelegt werden.

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

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben:

- `auto`
  - : Löst sich im Allgemeinen zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) auf, der {{cssxref("color")}} des Textes, der geändert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Beschreibung

Ein Eingabe-Caret ist ein sichtbarer Indikator der Stelle innerhalb eines editierbaren Textes – oder innerhalb eines Elements, das Texteingaben akzeptiert – an der Inhalte von Benutzern eingefügt (oder gelöscht) werden. Das Caret ist in der Regel eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Es blinkt in der Regel, damit es auffälliger ist. Das Caret erscheint nur, wenn das editierbare Element den Fokus hat. Standardmäßig ist dieses Caret in der Farbe des Textes. Die `caret-color`-Eigenschaft kann verwendet werden, um die Farbe dieses Carets auf eine andere als `currentColor` zu setzen oder um ein farbiges Caret auf seinen Standard zurückzusetzen.

Der `auto`-Wert setzt das Eingabe-Caret auf `currentColor`, was die {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt zu gewährleisten, wobei die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert festlegen.

### Verständnis von Eingabe-Carets

Das Eingabe-Caret und daher diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Das Caret erscheint in fokussierten Benutzeroberflächenelementen, in denen Benutzer Inhalte aktualisieren können, wie zum Beispiel {{HTMLElement("input")}}-Elementen, die Freitexte akzeptieren, dem {{HTMLElement("textarea")}}-Element und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt haben.

Das Caret kann in `<input>`-Elementen der Typen `password`, `text`, `search`, `tel` und `email` erscheinen. Kein Caret existiert bei den Eingabetypen `date`, `color`, `hidden`, `radio` oder `checkbox`. Einige Browser zeigen ein Caret beim Eingabetyp `number` an. In manchen Browsern ist es möglich, ein Caret in Elementen erscheinen zu lassen, die normalerweise keinen Textinhalt haben – zum Beispiel, indem Sie [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) setzen und das `contenteditable`-Attribut hinzufügen. Dies wird jedoch nicht empfohlen.

Ein Caret kann in einem editierbaren Element oder dessen Nachkommen angezeigt werden, sofern die Editierbarkeit nicht deaktiviert ist, zum Beispiel indem das `contentEditable`-Attribut eines Nachkommenelements auf `false` gesetzt wird. Wenn ein Element nicht editierbar oder auswählbar ist, zum Beispiel wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte das Caret nicht erscheinen.

### Caret versus Cursor

Es gibt mehrere Arten von Carets. Das Eingabe-Caret ist der einzige Typ, der von der `caret-color`-Eigenschaft beeinflusst wird.

Viele Browser haben ein **Navigations-Caret**, das ähnlich wie ein Eingabe-Caret funktioniert, sich jedoch in nicht editierbarem Text bewegen lässt.

Das Mauszeiger-Bild, das für bestimmte {{cssxref("cursor")}}-Eigenschaftswerte angezeigt wird (zum Beispiel `auto` oder `text`), kann einem Caret ähneln, ist jedoch keines. Es handelt sich um einen Cursor.

### Animation von `auto`

Im Allgemeinen verwenden Benutzeragenten, wenn die `caret-color` auf oder standardmäßig `auto` ist, `currentColor`, was animierbar ist. `auto` ist jedoch kein standardmäßig animierbarer Wert: bei der Animation oder dem Übergang der `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete); die Farbe wechselt vom oder zum `currentColor`-Farbwert zur Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benutzerdefinierten Caret-Farbe

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
- {{cssxref("caret")}} Kurzschreibweise
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
