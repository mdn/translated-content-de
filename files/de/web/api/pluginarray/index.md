---
title: PluginArray
slug: Web/API/PluginArray
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Das `PluginArray`-Interface wird verwendet, um eine Liste von {{DOMxRef("Plugin")}}-Objekten zu speichern, die die verfügbaren [Plugins](/de/docs/Mozilla/Add-ons/Plugins) beschreiben; es wird von der {{DOMxRef("Navigator.plugins", "navigator.plugins")}}-Eigenschaft zurückgegeben. Das `PluginArray` ist kein JavaScript-Array, besitzt jedoch die `length`-Eigenschaft und unterstützt den Zugriff auf einzelne Elemente mittels Klammernotation (`plugins[2]`) sowie über die Methoden `item(index)` und `namedItem("name")`.

> [!NOTE]
> Eigene Eigenschaften von `PluginArray`-Objekten sind in den neuesten Browserversionen nicht mehr aufzählbar.

## Instanzeigenschaften

- {{DOMxRef("PluginArray.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die Anzahl der Plugins im Array.

## Instanzmethoden

- {{DOMxRef("PluginArray.item")}} {{Deprecated_Inline}}
  - : Gibt das {{DOMxRef("Plugin")}} am angegebenen Index im Array zurück.
- {{DOMxRef("PluginArray.namedItem")}} {{Deprecated_Inline}}
  - : Gibt das {{DOMxRef("Plugin")}} mit dem angegebenen Namen zurück.
- {{DOMxRef("PluginArray.refresh")}} {{Deprecated_Inline}}
  - : Aktualisiert alle Plugins auf der aktuellen Seite und lädt optional Dokumente neu.

## Beispiele

Die folgende Beispiel-Funktion gibt die Version des Shockwave Flash Plugins zurück.

```js
const pluginsLength = navigator.plugins.length;

document.body.innerHTML =
  `${pluginsLength} Plugin(s)<br>` +
  `<table id="pluginTable"><thead>` +
  `<tr><th>Name</th><th>Filename</th><th>description</th><th>version</th></tr>` +
  `</thead><tbody></tbody></table>`;

const table = document.getElementById("pluginTable");

for (let i = 0; i < pluginsLength; i++) {
  let newRow = table.insertRow();
  newRow.insertCell().textContent = navigator.plugins[i].name;
  newRow.insertCell().textContent = navigator.plugins[i].filename;
  newRow.insertCell().textContent = navigator.plugins[i].description;
  newRow.insertCell().textContent = navigator.plugins[i].version ?? "";
}
```

Das folgende Beispiel zeigt Informationen über das installierte(n) Plugin(s) an.

```js
const pluginsLength = navigator.plugins.length;

document.write(
  `${pluginsLength.toString()} Plugin(s)<br>` +
    `Name | Filename | description<br>`,
);

for (let i = 0; i < pluginsLength; i++) {
  document.write(
    `${navigator.plugins[i].name} | ${navigator.plugins[i].filename} | ${navigator.plugins[i].description} | ${navigator.plugins[i].version}<br>`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Zusätzlich zur Auflistung jedes Plugins als Pseudo-Array mithilfe von nullbasierten numerischen Eigenschaften bietet Firefox auf dem PluginArray-Objekt Eigenschaften, die direkt der Pluginname sind.
