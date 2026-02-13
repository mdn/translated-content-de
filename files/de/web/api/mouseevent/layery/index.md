---
title: "MouseEvent: layerY-Eigenschaft"
short-title: layerY
slug: Web/API/MouseEvent/layerY
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}{{Non-standard_Header}}

Die schreibgeschützte **`MouseEvent.layerY`**-Eigenschaft gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.

Diese Eigenschaft berücksichtigt das Scrollen der Seite und gibt einen Wert relativ zum gesamten Dokument zurück, es sei denn, das Ereignis tritt innerhalb eines positionierten Elements auf, in welchem Fall der zurückgegebene Wert relativ zur oberen linken Ecke des positionierten Elements ist.

## Wert

Ein Ganzzahlwert in Pixeln für die y-Koordinate des Mauszeigers, wenn das Mausereignis ausgelöst wurde.

## Beispiele

```html
<p>To display the mouse coordinates please click anywhere on the page.</p>

<div id="d1">
  <span>
    This is an un-positioned div so clicking it will return layerX/layerY values
    almost the same as pageX/PageY values.
  </span>
</div>

<div id="d2">
  <span>
    This is a positioned div so clicking it will return layerX/layerY values
    that are relative to the top-left corner of this positioned element. Note
    the pageX\pageY properties still return the absolute position in the
    document, including page scrolling.
  </span>

  <span>
    Make the page scroll more! This is a positioned div so clicking it will
    return layerX/layerY values that are relative to the top-left corner of this
    positioned element. Note the pageX\pageY properties still return the
    absolute position in the document, including page scrolling.
  </span>
</div>

<div id="d3">
  <form name="form_coords" id="form1">
    Parent Element id: <input type="text" name="parentId" size="7" /><br />
    pageX: <input type="text" name="pageXCoords" size="7" /> pageY:
    <input type="text" name="pageYCoords" size="7" /><br />
    layerX: <input type="text" name="layerXCoords" size="7" /> layerY:
    <input type="text" name="layerYCoords" size="7" />
  </form>
</div>
```

```css
#d1 {
  border: solid blue 1px;
  padding: 20px;
}

#d2 {
  position: absolute;
  top: 180px;
  left: 80%;
  right: auto;
  width: 40%;
  border: solid blue 1px;
  padding: 20px;
}

#d3 {
  position: absolute;
  top: 240px;
  left: 20%;
  width: 50%;
  border: solid blue 1px;
  padding: 10px;
}
```

```js
function showCoords(evt) {
  const form = document.forms.form_coords;
  const parentId = evt.target.parentNode.id;
  form.parentId.value = parentId;
  form.pageXCoords.value = evt.pageX;
  form.pageYCoords.value = evt.pageY;
  form.layerXCoords.value = evt.layerX;
  form.layerYCoords.value = evt.layerY;
}

window.addEventListener("mousedown", showCoords);
```

## Spezifikationen

_Diese Eigenschaft ist Teil keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}
