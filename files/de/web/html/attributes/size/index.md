---
title: "HTML-Attribut: size"
short-title: size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{HTMLSidebar}}

Das **`size`**-Attribut definiert die Breite des {{htmlelement('input')}}- und die Höhe des {{htmlelement('select')}}-Elements. Für ein `input`-Element bestimmt es die Anzahl der Zeichen, die der Benutzeragent dem Benutzer beim Bearbeiten des Wertes anzeigt. Für ein `select`-Element definiert es die Anzahl der Optionen, die dem Benutzer angezeigt werden sollen. Dies muss eine gültige, nicht-negative ganze Zahl größer als Null sein.

Wenn kein `size` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Eingabeelement keine deklarierte Größe, und das Formularelement wird die Standardbreite des Benutzeragents verwenden. Wenn CSS das Element mit Eigenschaften beeinflusst, die die Breite betreffen, hat CSS Vorrang.

Das `size`-Attribut hat keinen Einfluss auf die Einschränkungsvalidierung.

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

Durch das Hinzufügen von `size` zu einigen Eingabetypen kann die Breite des Eingabeelements gesteuert werden. Das Hinzufügen von size zu einem Select-Element ändert die Höhe und definiert, wie viele Optionen im geschlossenen Zustand sichtbar sind.

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
