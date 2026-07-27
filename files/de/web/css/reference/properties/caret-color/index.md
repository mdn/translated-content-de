---
title: "`caret-color` CSS property"
short-title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfüge-Carets** fest, manchmal auch als **Text-Eingabecursor** bezeichnet. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, wo das nächste eingegebene Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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

Diese Eigenschaft wird als ein `<color>`-Wert oder das Schlüsselwort `auto` angegeben.

- `auto`
  - : Löst sich im Allgemeinen zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) auf, also der {{cssxref("color")}} des Textes, der verändert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Beschreibung

Ein Einfüge-Caret ist ein sichtbarer Indikator der Stelle im bearbeitbaren Text — oder innerhalb eines Elements, das Texteingaben akzeptiert — an der der Benutzer Inhalt einfügen (oder löschen) wird. Der Caret ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgen wird. Er blinkt allgemein (blitzt auf und ab), damit er besser sichtbar ist. Der Caret erscheint nur, wenn das bearbeitbare Element den Fokus hat. Standardmäßig hat dieser Caret die Farbe des Textes. Die `caret-color`-Eigenschaft kann verwendet werden, um die Farbe dieses Carets auf eine andere Farbe als die `currentColor` einzustellen oder um einen farbigen Caret auf seine Standardeinstellung zurückzusetzen.

Der `auto`-Wert setzt das Einfüge-Caret auf `currentColor`, was der {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, indem sie die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigen. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, und wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert festlegen.

### Einfüge-Carets verstehen

Das Einfüge-Caret und damit diese Eigenschaft gilt nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Caret erscheint in fokussierten Benutzerschnittstellenelementen, in denen Benutzer Inhalte aktualisieren können, wie z.B. {{HTMLElement("input")}}-Elemente, die Freiform-Text akzeptieren, das {{HTMLElement("textarea")}}-Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Das Caret kann in `<input>`-Elementen der Typen `password`, `text`, `search`, `tel` und `email` erscheinen. Es gibt kein Caret in den Eingabetypen Datum, `color`, `hidden`, `radio` oder `checkbox`. Einige Browser zeigen ein Caret mit dem Eingabetyp `number` an. In einigen Browsern ist es möglich, ein Caret in Elementen erscheinen zu lassen, die nie Textinhalt haben — zum Beispiel, indem man [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) setzt und das `contenteditable`-Attribut hinzufügt. Dies wird jedoch nicht empfohlen.

Ein Caret kann in einem bearbeitbaren Element oder seinen Nachkommen angezeigt werden, vorausgesetzt, die Bearbeitbarkeit ist nicht deaktiviert, zum Beispiel indem das `contentEditable`-Attribut eines nachrangigen Elements auf `false` gesetzt wird. Wenn ein Element nicht bearbeitbar oder auswählbar ist, zum Beispiel wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Caret nicht erscheinen.

### Caret versus Cursor

Es gibt mehrere Arten von Carets. Das Einfüge-Caret ist der einzige Typ, der von der `caret-color`-Eigenschaft beeinflusst wird.

Viele Browser verfügen über ein **Navigations-Caret**, das ähnlich wie ein Einfüge-Caret funktioniert, sich jedoch in nicht bearbeitbarem Text bewegen lässt.

Das Mauszeigerbild, das bei bestimmten {{cssxref("cursor")}} Eigenschaftswerten angezeigt wird (zum Beispiel `auto` oder `text`), kann einem Caret ähneln, ist aber keines. Es handelt sich um einen Cursor.

### Animationen von `auto`

Im Allgemeinen, wenn die `caret-color` auf `auto` gesetzt ist oder standardmäßig `auto` ist, verwenden Benutzeragenten `currentColor`, das animierbar ist. `Auto` ist jedoch standardmäßig kein animierbarer Wert: Beim Animieren oder Überblenden der `caret-color` von `auto` auf einen beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete); die Farbe wechselt vom oder zum `currentColor` in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

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
- {{cssxref("caret")}} Kurzschreibweise
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
