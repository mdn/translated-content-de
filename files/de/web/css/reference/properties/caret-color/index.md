---
title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe des **Einfüge-Cursors**, der manchmal auch als **Text-Eingabe-Cursor** bezeichnet wird. Dies ist der sichtbare Marker, der an der Einfügestelle erscheint, wo das nächste getippte Zeichen hinzugefügt oder das nächste gelöschte Zeichen entfernt wird.

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
  - : Wird im Allgemeinen auf [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) aufgelöst, die {{cssxref("color")}} des Textes, der bearbeitet wird.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Einfüge-Cursors.

## Beschreibung

Ein Einfüge-Cursor ist ein sichtbarer Indikator für die Stelle innerhalb eines editierbaren Textes - oder innerhalb eines Elements, das Texteingaben akzeptiert - an der Inhalte vom Benutzer eingefügt (oder gelöscht) werden. Der Cursor ist in der Regel eine dünne vertikale Linie, die anzeigt, wo das Hinzufügen oder Löschen von Zeichen erfolgt. Er blinkt typischerweise, um besser sichtbar zu sein. Der Cursor erscheint nur, wenn das editierbare Element den Fokus hat. Standardmäßig hat dieser Cursor die Farbe des Textes. Die `caret-color` Eigenschaft kann verwendet werden, um die Farbe dieses Cursors auf eine andere als die `currentColor` zu setzen oder um einen eingefärbten Cursor auf seinen Standard zurückzusetzen.

Der `auto` Wert setzt den Einfüge-Cursor auf `currentColor`, das ist die {{cssxref("color")}} des Textes, der hinzugefügt oder gelöscht wird. Benutzeragenten können eine andere Farbe wählen, um eine gute Sichtbarkeit und einen guten Kontrast mit dem umgebenden Inhalt sicherzustellen, indem sie Faktoren wie {{cssxref("color")}}, {{cssxref("background-color")}}, Schatten und andere Faktoren berücksichtigen. In der Praxis verwenden jedoch alle Browser standardmäßig die aktuelle Farbe, auch wenn `caret-color` auf `auto` gesetzt ist. Sie können jeden gültigen `<color>` als Wert setzen.

### Verständnis von Einfüge-Cursorn

Der Einfüge-Cursor und damit diese Eigenschaft gilt nur für Text oder Elemente, die Texteingaben akzeptieren können. Der Cursor erscheint in fokussierten Benutzeroberflächenelementen, in denen Benutzer Inhalte aktualisieren können, wie zum Beispiel in {{HTMLElement("input")}}-Elementen, die freie Texteingabe akzeptieren, dem {{HTMLElement("textarea")}}-Element und Elementen mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Der Cursor kann in `<input>`-Elementen vom Typ `password`, `text`, `search`, `tel` und `email` erscheinen. Kein Cursor existiert bei Datums-, `color`-, `hidden`-, `radio`- oder `checkbox`-Eingabetypen. Einige Browser zeigen einen Cursor mit dem `number` Eingabetyp. In einigen Browsern ist es möglich, einen Cursor in Elementen, die niemals Textinhalt haben, erscheinen zu lassen - zum Beispiel durch Setzen von [`appearance: none`](/de/docs/Web/CSS/Reference/Properties/appearance) und Hinzufügen des `contenteditable` Attributs. Dies wird jedoch nicht empfohlen.

Ein Cursor kann in einem editierbaren Element oder dessen Nachkommen angezeigt werden, vorausgesetzt, die Editierbarkeit ist nicht deaktiviert, z.B. durch Setzen des `contentEditable` Attributs eines nachgeordneten Elements auf `false`. Wenn ein Element nicht bearbeitbar oder auswählbar ist, z.B. wenn {{cssxref("user-select")}} auf `none` gesetzt ist, sollte der Cursor nicht erscheinen.

### Cursor versus Zeiger

Es gibt verschiedene Arten von Cursorn. Der Einfüge-Cursor ist der einzige Typ, der von der `caret-color` Eigenschaft betroffen ist.

Viele Browser haben einen **Navigations-Cursor**, der ähnlich wie ein Einfüge-Cursor funktioniert, sich aber in nicht bearbeitbarem Text bewegen kann.

Das Mauszeigerbild, das für bestimmte {{cssxref("cursor")}} Eigenschaftswerte angezeigt wird (z.B. `auto` oder `text`), mag einem Cursor ähneln, ist es aber nicht. Es ist ein Zeiger.

### Animation von `auto`

Im Allgemeinen, wenn die `caret-color` auf `auto` gesetzt ist oder standardmäßig auf `currentColor` gesetzt wird, verwenden Benutzeragenten `currentColor`, was animierbar ist. `Auto` ist jedoch standardmäßig kein animierbarer Wert: Bei Animationen oder Übergängen von `caret-color` von `auto` zu einem beliebigen Farbwert erfolgt keine Interpolation. Die Animation ist [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete); die Farbe wechselt von oder zu der `currentColor` Farbe in der Mitte der {{cssxref("animation-duration")}} oder {{cssxref("transition-duration")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen benutzerdefinierten Cursor-Farbe setzen

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
- {{cssxref("caret")}} Verkürzung
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS {{cssxref("&lt;color&gt;")}} Datentyp
- {{HTMLElement("input")}} Element
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
