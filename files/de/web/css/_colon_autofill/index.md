---
title: :autofill
slug: Web/CSS/:autofill
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die **`:autofill`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) greift, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch ausgefüllt wurde. Die Klasse greift nicht mehr, wenn der Benutzer das Feld bearbeitet.

{{InteractiveExample("CSS Demo: :autofill", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px solid darkorange;
}
```

```html interactive-example
<form>
  <p>Click on the text box and choose any option suggested by your browser.</p>

  <label for="name">Name</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" autocomplete="email" />

  <label for="country">Country</label>
  <input id="country" name="country" type="text" autocomplete="country-name" />
</form>
```

> [!NOTE]
> Die Benutzeragenten-Stylesheets vieler Browser verwenden `!important` in ihren `:-webkit-autofill`-Style-Deklarationen, wodurch sie von Webseiten nicht ohne JavaScript-Hacks überschrieben werden können. Zum Beispiel verwendet Chrome das Folgende in seinem internen Stylesheet:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> Das bedeutet, dass Sie {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} in Ihren eigenen Regeln nicht setzen können.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `:autofill`-Pseudoklasse, um den Rand eines Textfeldes zu ändern, das vom Browser automatisch ausgefüllt wurde.
Um zu vermeiden, eine [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list) zu erstellen, werden sowohl `:-webkit-autofill` als auch `:autofill` mit einer nachsichtigen Selektorliste mit {{cssxref(":is()")}} gematcht.

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chromium Issue 46543: Der gelbe Hintergrund von automatisch ausgefüllten Eingabefeldern kann nicht deaktiviert werden](https://crbug.com/46543)
- [WebKit Fehler 66032: Erlaubt es Website-Autoren, die Farben von automatisch ausgefüllten Feldern zu überschreiben](https://webkit.org/b/66032)
- [Mozilla Fehler 740979: Implementierung der `:-moz-autofill`-Pseudoklasse auf Eingabefeldern mit automatisch ausgefüllten Werten](https://bugzil.la/740979)
- [User Interface Module Level 4: mehr Selektoren](https://wiki.csswg.org/spec/css4-ui#more-selectors)
