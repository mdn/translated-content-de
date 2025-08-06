---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 7c98b5490c1c1a9e7b1cdf4d42cad5acc732d44f
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfüge-Carets** fest, das manchmal auch als **Texteingabecursor** bezeichnet wird. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, wo das nächste getippte Zeichen eingefügt oder das nächste gelöschte Zeichen entfernt wird.

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
  - : Löst sich im Allgemeinen zu [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) auf, der {{cssxref("color")}} des Textes, der modifiziert wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Beschreibung

Ein Einfüge-Caret ist ein sichtbares Zeichen der Position innerhalb von editierbarem Text – oder innerhalb eines Elements, das Texteingaben akzeptiert – an der der Benutzer Inhalt einfügen (oder löschen) wird. Das Caret ist typischerweise eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen stattfinden wird. Es blinkt in der Regel (flackert an und aus), um besser sichtbar zu sein. Das Caret erscheint nur, wenn das editierbare Element den Fokus hat. Standardmäßig hat dieses Caret die Farbe des Textes. Die `caret-color`-Eigenschaft kann verwendet werden, um die Farbe dieses Carets auf etwas anderes als die `currentColor` zu setzen oder um ein gefärbtes Caret auf seinen Standardwert zurückzusetzen.

Der `auto` Wert setzt das Einfüge-Caret auf `currentColor`, was die {{cssxref("color")}} des Textes ist, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt zu gewährleisten, wobei die {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigt werden. In der Praxis jedoch verwenden alle Browser die aktuelle Farbe standardmäßig, und wenn `caret-color` auf `auto` gesetzt ist. Sie können einen gültigen `<color>` Wert als Wert festlegen.

### Verständnis von Einfüge-Carets

Das Einfüge-Caret und damit diese Eigenschaft gelten nur für Text oder Elemente, die Texteingaben akzeptieren können. Das Caret erscheint in fokussierten Benutzeroberflächenelementen, in denen Benutzer Inhalte aktualisieren können, wie zum Beispiel {{HTMLElement("input")}} Elemente, die freien Text akzeptieren, das {{HTMLElement("textarea")}} Element und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt.

Das Caret kann in `<input>` Elementen der Typen `password`, `text`, `search`, `tel` und `email` erscheinen. Kein Caret existiert bei Datums-, `color`, `hidden`, `radio` oder `checkbox` Eingabetypen. Einige Browser zeigen ein Caret mit dem `number` Eingabetyp an. In einigen Browsern ist es möglich, ein Caret in Elementen erscheinen zu lassen, die nie Textinhalt haben – zum Beispiel, indem man [`appearance: none`](/de/docs/Web/CSS/appearance) setzt und das `contenteditable` Attribut hinzufügt. Dies wird jedoch nicht empfohlen.

Ein Caret kann in einem editierbaren Element oder dessen Nachkommen angezeigt werden, vorausgesetzt, die Editierbarkeit ist nicht deaktiviert, zum Beispiel, indem das `contentEditable` Attribut eines Nachkommens auf `false` gesetzt wird. Wenn ein Element nicht editierbar oder auswählbar ist, zum Beispiel wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte das Caret nicht erscheinen.

### Caret gegenüber Cursor

Es gibt mehrere Arten von Carets. Das Einfüge-Caret ist der einzige Typ, der von der `caret-color` Eigenschaft betroffen ist.

Viele Browser haben ein **Navigations-Caret**, das ähnlich wie ein Einfüge-Caret funktioniert, aber in nicht bearbeitbarem Text bewegt werden kann.

Das Maus-Cursor-Bild, das für bestimmte {{cssxref("cursor")}} Eigenschaftswerte angezeigt wird (zum Beispiel `auto` oder `text`), kann einem Caret ähneln, ist es aber nicht. Es ist ein Cursor.

### Animation von `auto`

Im Allgemeinen, wenn die `caret-color` auf oder standardmäßig `auto` ist, verwenden Benutzeragenten `currentColor`, das animierbar ist. `auto` ist jedoch kein animierbarer Wert: Bei der Animation oder dem Übergang der `caret-color` von `auto` zu einem beliebigen Farbwert findet keine Interpolation statt. Die Animation ist [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete); die Farbe wechselt von oder zu `currentColor` in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Caret-Farbe einstellen

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

- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
