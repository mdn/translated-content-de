---
title: "DataTransfer: types-Eigenschaft"
short-title: types
slug: Web/API/DataTransfer/types
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte Eigenschaft **`DataTransfer.types`** gibt die verfügbaren Typen zurück, die in den [`items`](/de/docs/Web/API/DataTransfer/items) vorhanden sind.

## Wert

Ein Array der Datenformate. Jedes Format ist ein String, der im Allgemeinen ein MIME-Typ wie `text/plain` oder `text/html` ist. Wenn der Ziehvorgang keine Daten enthalten hat, ist diese Liste leer. Wenn irgendwelche Dateien im Ziehvorgang enthalten sind, wird einer der Typen die Zeichenkette `Files` sein.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Eigenschaften `types` und [`items`](/de/docs/Web/API/DataTransfer/items).

```html
<!doctype html>
<html lang="en">
  <title>Examples of DataTransfer.{types,items} properties</title>
  <meta content="width=device-width" />
  <style>
    div {
      margin: 0em;
      padding: 2em;
    }
    #target {
      border: 1px solid black;
    }
  </style>
  <script>
    function dragstart_handler(ev) {
      console.log("dragStart: target.id = " + ev.target.id);

      // Add this element's id to the drag payload so the drop handler will
      // know which element to add to its tree
      ev.dataTransfer.setData("text/plain", ev.target.id);
      ev.dataTransfer.effectAllowed = "move";
    }

    function drop_handler(ev) {
      console.log("drop: target.id = " + ev.target.id);
      ev.preventDefault();

      // Get the id of the target and add the moved element to the target's DOM
      const data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));

      // Print each format type
      for (let i = 0; i < ev.dataTransfer.types.length; i++) {
        console.log(`… types[${i}] = ${ev.dataTransfer.types[i]}`);
      }

      // Print each item's "kind" and "type"
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        console.log(
          `… items[${i}].kind = ${ev.dataTransfer.items[i].kind}; type = ${ev.dataTransfer.items[i].type}`,
        );
      }
    }

    function dragover_handler(ev) {
      console.log("dragOver");
      ev.preventDefault();
      // Set the dropEffect to move
      ev.dataTransfer.dropEffect = "move";
    }
  </script>
  <body>
    <h1>
      Examples of <code>DataTransfer</code>.{<code>types</code>,
      <code>items</code>} properties
    </h1>
    <ul>
      <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">
        Drag Item 1 to the Drop Zone
      </li>
      <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">
        Drag Item 2 to the Drop Zone
      </li>
    </ul>
    <div
      id="target"
      ondrop="drop_handler(event);"
      ondragover="dragover_handler(event);">
      Drop Zone
    </div>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
