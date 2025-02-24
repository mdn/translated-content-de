---
title: "HTML-Attribut: size"
short-title: size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`size`**-Attribut definiert die Breite des {{htmlelement('input')}}-Elements und die Höhe des {{htmlelement('select')}}-Elements. Bei einem `input`-Element gibt es die Anzahl der Zeichen an, die der Benutzeragent dem Benutzer beim Bearbeiten des Wertes anzeigt. Bei einem `select`-Element definiert es die Anzahl der Optionen, die dem Benutzer angezeigt werden sollen. Dies muss eine gültige nichtnegative ganze Zahl größer als Null sein.

Wenn keine `size` angegeben ist oder ein ungültiger Wert spezifiziert wird, hat das Eingabefeld keine deklarierte Größe, und das Formularelement wird mit der Standardbreite basierend auf dem Benutzeragenten angezeigt. Wenn CSS das Element mit Eigenschaften betrifft, die die Breite beeinflussen, hat CSS Vorrang.

Das `size`-Attribut hat keinen Einfluss auf die Beschränkungsvalidierung.

{{InteractiveExample("HTML Demo: size", "tabbed-standard")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" size="10" />

<label for="lastName">Last Name:</label>
<input id="lastName" name="lastName" type="text" size="20" />

<label for="fruit">Favourite fruit:</label>
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

Durch das Hinzufügen von `size` bei einigen Eingabetypen kann die Breite des Eingabefelds kontrolliert werden. Das Hinzufügen von size bei einem Select ändert die Höhe und definiert, wie viele Optionen im geschlossenen Zustand sichtbar sind.

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

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)
