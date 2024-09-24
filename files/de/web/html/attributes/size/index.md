---
title: "HTML-Attribut: size"
short-title: size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`size`**-Attribut definiert die Breite des {{htmlelement('input')}} und die Höhe des {{htmlelement('select')}}-Elements. Für ein `input`-Element legt es die Anzahl der Zeichen fest, die der Benutzeragent dem Benutzer beim Bearbeiten des Wertes anzeigt. Für ein `select`-Element definiert es die Anzahl der Optionen, die dem Benutzer angezeigt werden sollen. Dies muss eine gültige, nicht-negative Ganzzahl größer als null sein.

Wenn keine `size` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Eingabeelement keine erklärte Größe, und das Formularelement hat die Standardbreite des Benutzeragens. Wenn CSS das Element mit Eigenschaften anspricht, die die Breite beeinflussen, hat CSS Vorrang.

Das `size`-Attribut hat keinen Einfluss auf die Überprüfung von Eingabebeschränkungen.

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## Beispiele

Durch das Hinzufügen von `size` zu einigen Eingabetypen kann die Breite der Eingabe gesteuert werden. Das Hinzufügen von Size zu einem Select-Element verändert die Höhe und definiert, wie viele Optionen im geschlossenen Zustand sichtbar sind.

```html
<label for="fruit">Geben Sie eine Frucht ein</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Geben Sie ein Gemüse ein</label>
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
