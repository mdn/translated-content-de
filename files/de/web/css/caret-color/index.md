---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 49f90b9c810e5167fecf6ad652afb03075072db7
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfügemarkers** fest, manchmal auch als **Texteingabecursor** bezeichnet. Dies ist der sichtbare Marker, der an der Einfügestelle angezeigt wird, wo das nächste eingegebene Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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
  - : Wird im Allgemeinen auf [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) aufgelöst, die {{cssxref("color")}} des zu ändernden Textes.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Einfügemarkers.

## Beschreibung

Ein Einfügemarker ist ein sichtbarer Indikator für die Stelle innerhalb eines bearbeitbaren Textes — oder innerhalb eines Elements, das Texteingaben akzeptiert —, an der Inhalte von den Nutzern eingefügt (oder gelöscht) werden. Der Marker ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Er blinkt normalerweise (schaltet sich an und aus), damit er besser sichtbar ist. Der Marker erscheint nur, wenn das bearbeitbare Element im Fokus ist. Standardmäßig ist dieser Marker die Farbe des Textes. Die `caret-color` Eigenschaft kann verwendet werden, um die Farbe dieses Markers auf etwas anderes als die `currentColor` zu setzen oder um einen farbigen Marker wieder auf seine Standardfarbe zurückzusetzen.

Der `auto` Wert setzt den Einfügemarker auf `currentColor`, die {{cssxref("color")}} des Textes, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zu dem umgebenden Inhalt zu gewährleisten, wobei sie die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigen. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, auch wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert setzen.

### Verständnis von Einfügemarkern

Der Einfügemarker und damit diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Marker erscheint in fokussierten Benutzeroberflächenelementen, in denen Nutzer Inhalte aktualisieren können, wie z.B. {{HTMLElement("input")}} Elemente, die freie Texteingabe akzeptieren, das {{HTMLElement("textarea")}} Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt.

Der Marker kann in `<input>` Elementen vom Typ `password`, `text`, `search`, `tel` und `email` erscheinen. Es existiert kein Marker bei Datum, `color`, `hidden`, `radio` oder `checkbox` Eingabetypen. Einige Browser zeigen einen Marker beim `number` Eingabetyp an. Es ist in einigen Browsern möglich, einen Marker in Elementen erscheinen zu lassen, die normalerweise keinen Textinhalt haben — beispielsweise durch Setzen von [`appearance: none`](/de/docs/Web/CSS/appearance) und Hinzufügen des `contenteditable` Attributs. Dies wird jedoch nicht empfohlen.

Ein Marker kann in einem bearbeitbaren Element oder dessen Nachkommen angezeigt werden, vorausgesetzt, die Bearbeitbarkeit ist nicht deaktiviert, beispielsweise durch Setzen des `contentEditable` Attributs eines Nachkommenelements auf `false`. Wenn ein Element nicht bearbeitbar oder auswählbar ist, z. B. wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Marker nicht erscheinen.

### Einfügemarker versus Cursor

Es gibt verschiedene Arten von Markern. Der Einfügemarker ist der einzige Typ, der von der `caret-color` Eigenschaft betroffen ist.

Viele Browser haben einen **Navigationsmarker**, der ähnlich wie ein Einfügemarker funktioniert, jedoch in nicht bearbeitbarem Text bewegt werden kann.

Das Mauszeigerbild, das für bestimmte {{cssxref("cursor")}} Eigenschaftswerte (z.B. `auto` oder `text`) angezeigt wird, kann einem Marker ähneln, ist jedoch keiner. Es handelt sich um einen Cursor.

### Animation von `auto`

Generell verwenden Benutzeragenten, wenn die `caret-color` auf `auto` gesetzt ist oder standardmäßig `currentColor`, was animierbar ist. `auto` ist jedoch kein animierbarer Wert: Beim Animieren oder Übergang der `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete); die Farbe wechselt von oder zu der `currentColor` Farbe in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benutzerdefinierten Markerfarbe

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
