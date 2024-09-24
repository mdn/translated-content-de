---
title: "MouseEvent: layerY-Eigenschaft"
short-title: layerY
slug: Web/API/MouseEvent/layerY
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}{{Non-standard_Header}}

Die **`MouseEvent.layerY`** schreibgeschützte Eigenschaft gibt die vertikale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.

Diese Eigenschaft berücksichtigt das Scrollen der Seite und gibt einen Wert relativ zum gesamten Dokument zurück, es sei denn, das Ereignis tritt in einem positionierten Element auf, in welchem der zurückgegebene Wert relativ zur oberen linken Ecke des positionierten Elements ist.

## Wert

Ein ganzzahliger Wert in Pixeln für die y-Koordinate des Mauszeigers, wenn das Mausereignis ausgelöst wird.

## Beispiele

```html
<html lang="en">
  <head>
    <title>pageX\pageY & layerX\layerY example</title>

    <script>
      function showCoords(evt) {
        const form = document.forms.form_coords;
        const parent_id = evt.target.parentNode.id;
        form.parentId.value = parent_id;
        form.pageXCoords.value = evt.pageX;
        form.pageYCoords.value = evt.pageY;
        form.layerXCoords.value = evt.layerX;
        form.layerYCoords.value = evt.layerY;
      }
    </script>

    <style>
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
    </style>
  </head>

  <body onmousedown="showCoords(event)">
    <p>Um die Mauskoordinaten anzuzeigen, klicken Sie bitte irgendwo auf die Seite.</p>

    <div id="d1">
      <span>
        Dies ist ein nicht positioniertes div, daher werden beim Klicken darauf layerX/layerY-Werte
        fast identisch mit pageX/PageY-Werten zurückgegeben.
      </span>
    </div>

    <div id="d2">
      <span>
        Dies ist ein positioniertes div, daher werden beim Klicken darauf layerX/layerY-Werte
        zurückgegeben, die relativ zur oberen linken Ecke dieses positionierten Elements sind.
        Beachten Sie, dass die pageX/pageY-Eigenschaften weiterhin die absolute Position im
        Dokument einschließlich des Scrollens der Seite zurückgeben.
      </span>

      <span>
        Scrollen Sie mehr auf der Seite! Dies ist ein positioniertes div, daher werden beim Klicken darauf 
        layerX/layerY-Werte zurückgegeben, die relativ zur oberen linken Ecke dieses positionierten Elements sind. 
        Beachten Sie, dass die pageX/pageY-Eigenschaften weiterhin die absolute Position im Dokument 
        einschließlich des Scrollens der Seite zurückgeben.
      </span>
    </div>

    <div id="d3">
      <form name="form_coords" id="form1">
        <label for="parentId">Parent Element id: </label>
        <input type="text" name="parentId" size="7" /><br />
        <label for="pageXCoords">pageX: </label>
        <input type="text" name="pageXCoords" size="7" />
        <label for="pageYCoords">pageY: </label>
        <input type="text" name="pageYCoords" size="7" /><br />
        <label for="layerXCoords">layerX: </label>
        <input type="text" name="layerXCoords" size="7" />
        <label for="layerYCoords">layerY: </label>
        <input type="text" name="layerYCoords" size="7" />
      </form>
    </div>
  </body>
</html>
```

## Spezifikationen

_Diese Eigenschaft ist Teil keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}
