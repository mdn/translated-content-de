---
title: "HTML-Attribut: size"
short-title: size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`size`**-Attribut definiert die Breite des {{htmlelement('input')}}- und die Höhe des {{htmlelement('select')}}-Elements. Für ein `input`-Element definiert es die Anzahl der Zeichen, die der Benutzeragent dem Benutzer beim Bearbeiten des Wertes anzeigt. Für ein `select`-Element definiert es die Anzahl der Optionen, die dem Benutzer angezeigt werden sollen. Dies muss eine gültige nicht-negative ganze Zahl größer als Null sein.

Wenn keine `size`-Angabe gemacht wird oder ein ungültiger Wert angegeben ist, wird keine Größe für das Eingabefeld deklariert, und das Steuerelement des Formulars wird die standardmäßige Breite des Benutzeragents haben. Wenn CSS das Element auf eine Weise anvisiert, die die Breite beeinflusst, hat CSS Vorrang.

Das `size`-Attribut hat keinen Einfluss auf die Constraints-Validierung.

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## Beispiele

Durch das Hinzufügen von `size` zu einigen `input`-Typen kann die Breite des Eingabefeldes gesteuert werden. Das Hinzufügen von `size` zu einem `select` verändert die Höhe und bestimmt, wie viele Optionen im geschlossenen Zustand sichtbar sind.

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
