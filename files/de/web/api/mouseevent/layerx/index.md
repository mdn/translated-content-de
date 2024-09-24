---
title: "MouseEvent: layerX-Eigenschaft"
short-title: layerX
slug: Web/API/MouseEvent/layerX
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}{{Non-standard_Header}}

Die schreibgeschützte **`MouseEvent.layerX`**-Eigenschaft gibt die horizontale Koordinate des Ereignisses relativ zur aktuellen Ebene zurück.

Diese Eigenschaft berücksichtigt das Scrollen der Seite und gibt einen Wert relativ zum gesamten Dokument zurück, es sei denn, das Ereignis tritt innerhalb eines positionierten Elements auf; in diesem Fall ist der zurückgegebene Wert relativ zur oberen linken Ecke des positionierten Elements.

## Wert

Ein ganzzahliger Wert in Pixeln für die x-Koordinate des Mauszeigers, wenn das Mausereignis ausgelöst wurde.

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
        Dies ist ein nicht positioniertes div, sodass ein Klick darauf fast die gleichen layerX/layerY-Werte wie pageX/PageY zurückgibt.
      </span>
    </div>

    <div id="d2">
      <span>
        Dies ist ein positioniertes div, sodass ein Klick darauf layerX/layerY-Werte zurückgibt, die relativ zur oberen linken Ecke dieses positionierten Elements sind.
        Beachten Sie, dass die pageX\pageY-Eigenschaften weiterhin die absolute Position im Dokument, einschließlich des Scrollens der Seite, zurückgeben.
      </span>

      <span>
        Scrollen Sie die Seite weiter! Dies ist ein positioniertes div, sodass ein Klick darauf layerX/layerY-Werte zurückgibt, die relativ zur oberen linken Ecke dieses positionierten Elements sind. Beachten Sie, dass die pageX\pageY-Eigenschaften weiterhin die absolute Position im Dokument, einschließlich des Scrollens der Seite, zurückgeben.
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
  </body>
</html>
```

## Spezifikationen

_Diese Eigenschaft ist Teil keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}
