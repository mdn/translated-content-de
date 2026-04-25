---
title: "`size` HTML-Attribut"
short-title: size
slug: Web/HTML/Reference/Attributes/size
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`size`**-Attribut definiert die Breite des {{htmlelement('input')}}- und die Höhe des {{htmlelement('select')}}-Elements. Für ein `input`-Element definiert es die Anzahl der Zeichen, die der Benutzeragent dem Benutzer beim Bearbeiten des Wertes anzeigt. Für ein `select`-Element definiert es die Anzahl der Optionen, die dem Benutzer angezeigt werden sollen. Dies muss eine gültige positive ganze Zahl größer als null sein.

Wenn keine `size` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Eingabeelement keine deklarierte Größe, und das Steuerfeld im Formular wird basierend auf dem Benutzeragenten mit der Standardbreite angezeigt. Wenn CSS auf das Element mit Eigenschaften angewendet wird, die die Breite beeinflussen, hat CSS Vorrang.

Das `size`-Attribut hat keinen Einfluss auf die Validierung von Einschränkungen.

{{InteractiveExample("HTML Demo: size", "tabbed-standard")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" size="10" />

<label for="lastName">Last Name:</label>
<input id="lastName" name="lastName" type="text" size="20" />

<label for="fruit">Favorite fruit:</label>
<select id="fruit" name="fruit" size="2">
  <option>Orange</option>
  <option>Banana</option>
  <option>Apple</option>
</select>
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Beispiele

Durch Hinzufügen von `size` zu einigen Eingabetypen kann die Breite des Eingabefelds gesteuert werden. Durch Hinzufügen von `size` zu einem select-Element wird die Höhe geändert, wodurch definiert wird, wie viele Optionen im geschlossenen Zustand sichtbar sind.

```html
<label for="fruit">Enter a fruit</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Enter a vegetable</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>banana</option>
  <option>cherry</option>
  <option>strawberry</option>
  <option>durian</option>
  <option>blueberry</option>
</select>

<select name="vegetables" size="5">
  <option>carrot</option>
  <option>cucumber</option>
  <option>cauliflower</option>
  <option>celery</option>
  <option>collard greens</option>
</select>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
