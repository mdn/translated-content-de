---
title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfügemarkierers** fest, der manchmal auch als **Text-Eingabecursor** bezeichnet wird. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, wo das nächste eingegebene Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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
  - : Löst sich allgemein auf [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) auf, die {{cssxref("color")}} des zu ändernden Textes.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Einfügemarkierers.

## Beschreibung

Ein Einfügemarkierer ist ein sichtbares Zeichen für die Stelle innerhalb eines editierbaren Textes – oder innerhalb eines Elements, das Texteingaben akzeptiert – an der der Benutzer Inhalte einfügen (oder löschen) wird. Der Markierer ist typischerweise ein dünner vertikaler Strich, der anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Er blinkt generell (schaltet sich ein und aus), damit er auffälliger ist. Der Markierer erscheint nur, wenn das editierbare Element fokussiert ist. Standardmäßig hat dieser Markierer die Farbe des Textes. Die `caret-color` Eigenschaft kann verwendet werden, um die Farbe dieses Markierers auf etwas anderes als `currentColor` zu setzen oder einen gefärbten Markierer auf seinen Standard zurückzusetzen.

Der `auto` Wert setzt den Einfügemarkierer auf `currentColor`, was die {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt sicherzustellen, wobei die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, sowohl bei gesetztem `caret-color` als auch bei `auto`. Sie können jeden gültigen `<color>` als Wert festlegen.

### Verständnis der Einfügemarkierer

Der Einfügemarkierer und daher diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Markierer erscheint in fokussierten Benutzerschnittstellen-Elementen, in denen Benutzer Inhalte aktualisieren können, wie z.B. {{HTMLElement("input")}} Elemente, die Freitext akzeptieren, das {{HTMLElement("textarea")}} Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Der Markierer kann in `<input>` Elementen der Typen `password`, `text`, `search`, `tel` und `email` erscheinen. Bei den Eingabetypen Datum, `color`, `hidden`, `radio` oder `checkbox` existiert kein Markierer. Einige Browser zeigen bei Eingabefeldern des Typs `number` einen Markierer an. Es ist in einigen Browsern möglich, einen Markierer in Elementen erscheinen zu lassen, die nie Textinhalt haben – z.B. durch Setzen von [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) und Hinzufügen des `contenteditable` Attributs. Dies wird jedoch nicht empfohlen.

Ein Markierer kann in einem editierbaren Element oder dessen Nachkommen angezeigt werden, vorausgesetzt die Editierbarkeit ist nicht deaktiviert, z.B. durch Setzen des `contentEditable` Attributs eines nachfolgenden Elements auf `false`. Wenn ein Element nicht editierbar oder auswählbar ist, z.B. wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Markierer nicht erscheinen.

### Markierer versus Cursor

Es gibt mehrere Arten von Markierern. Der Einfügemarkierer ist die einzige Art, die von der `caret-color` Eigenschaft betroffen ist.

Viele Browser besitzen einen **Navigationsmarkierer**, der ähnlich wie ein Einfügemarkierer funktioniert, sich aber in nicht editierbarem Text bewegt.

Das Mauscursor-Bild, das für bestimmte {{cssxref("cursor")}} Eigenschaftswerte angezeigt wird (z. B. `auto` oder `text`), kann einem Markierer ähneln, ist es jedoch nicht. Es handelt sich um einen Cursor.

### Animation von `auto`

Generell verwenden Benutzeragenten `currentColor`, wenn `caret-color` auf oder standardmäßig auf `auto` gesetzt wird, welches animierbar ist. Allerdings ist `auto` nicht standardmäßig ein animierbarer Wert: Bei der Animation oder dem Übergang von `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete); die Farbe wechselt bei der Hälfte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}} von oder zu der `currentColor` Farbe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfügemarkierer-Farbe anpassen

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
