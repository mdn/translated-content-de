---
title: PluginArray
slug: Web/API/PluginArray
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Das `PluginArray`-Interface wird verwendet, um eine Liste von [`Plugin`](/de/docs/Web/API/Plugin)-Objekten zu speichern, die die verfügbaren [Plugins](/de/docs/Mozilla/Add-ons/Plugins) beschreiben. Es wird durch die [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins)-Eigenschaft zurückgegeben. Das `PluginArray` ist kein JavaScript-Array, es hat jedoch die `length`-Eigenschaft und unterstützt den Zugriff auf einzelne Elemente mittels Klammernotation (`plugins[2]`) sowie über die Methoden `item(index)` und `namedItem("name")`.

> [!NOTE]
> Eigene Eigenschaften von `PluginArray`-Objekten sind in den neuesten Browserversionen nicht mehr aufzählbar.

## Instanz-Eigenschaften

- [`PluginArray.length`](/de/docs/Web/API/PluginArray/length) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die Anzahl der Plugins im Array.

## Instanz-Methoden

- [`PluginArray.item`](/de/docs/Web/API/PluginArray/item) {{Deprecated_Inline}}
  - : Gibt das [`Plugin`](/de/docs/Web/API/Plugin) am angegebenen Index im Array zurück.
- [`PluginArray.namedItem`](/de/docs/Web/API/PluginArray/namedItem) {{Deprecated_Inline}}
  - : Gibt das [`Plugin`](/de/docs/Web/API/Plugin) mit dem angegebenen Namen zurück.
- [`PluginArray.refresh`](/de/docs/Web/API/PluginArray/refresh) {{Deprecated_Inline}}
  - : Aktualisiert alle Plugins auf der aktuellen Seite, optional mit Neuladen der Dokumente.

## Beispiele

Die folgende Beispiel-Funktion gibt die Version des Shockwave Flash-Plugins zurück.

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

Das folgende Beispiel zeigt Informationen über das/die installierte(n) Plugin(s) an.

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

Zusätzlich zur Auflistung jedes Plugins als Pseudo-Array mit nullbasierten numerischen Eigenschaften stellt Firefox Eigenschaften zur Verfügung, die der Pluginname direkt am PluginArray-Objekt sind.
