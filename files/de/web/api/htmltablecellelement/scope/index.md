---
title: "HTMLTableCellElement: scope-Eigenschaft"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ APIRef("HTML DOM") }}

Die **`scope`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) Interface gibt den Anwendungsbereich einer {{HTMLElement("th")}}-Zelle an.

Kopfzellen können mithilfe des `scope`-Attributs so konfiguriert werden, dass sie auf eine bestimmte Zeile oder Spalte angewendet werden oder auf die noch nicht zugeordneten Zellen innerhalb der aktuellen Zeilengruppe (das heißt, dasselbe Vorfahren-{{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Element). Wenn kein Wert für `scope` angegeben ist, wird die Kopfzeile nicht direkt mit Zellen auf diese Weise verknüpft. Erlaubte Werte für `scope` sind:

> [!NOTE]
> Diese Eigenschaft hat keine visuelle Wirkung in Browsern. Sie fügt semantische Informationen hinzu, die Hilfstechnologien wie Bildschirmlesegeräten helfen, die Tabelle auf kohärentere Weise darzustellen.

## Wert

Einer der folgenden Werte:

- `col`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Spalte (oder mehreren Spalten, wenn `colspan` ebenfalls verwendet wird), bis entweder das Ende der Spalte oder ein anderes `<th>` in der Spalte einen neuen Bereich festlegt.
- `colgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Spaltengruppe, die noch keinen Anwendungsbereich zugewiesen bekommen haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Spaltengruppe befindet.
- `row`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Zeile (oder mehreren Zeilen, wenn `rowspan` ebenfalls verwendet wird), bis entweder das Ende der Zeile oder ein anderes `<th>` in derselben Zeile einen neuen Bereich festlegt.
- `rowgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Zeilengruppe, die noch keinen Anwendungsbereich zugewiesen bekommen haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Zeilengruppe befindet.
- Der leere String (`""`)
  - : Die Kopfzelle hat keinen vordefinierten Anwendungsbereich; der User Agent wird den Anwendungsbereich basierend auf kontextuellen Hinweisen festlegen.

## Beispiele

Dieses Beispiel fügt allen `th`-Nummern des `thead` ein `scope`-Label hinzu.

### HTML

```html
<table>
  <caption>
    Tallest Dams
  </caption>
  <thead>
    <tr>
      <td></td>
      <th>Dam</th>
      <th>Country</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <th scope="row">Jinping-I Dam</th>
      <td>China</td>
      <td>305 m</td>
    </tr>
    <tr>
      <td>2.</td>
      <th scope="row">Nurek Dam</th>
      <td>Tajikistan</td>
      <td>300 m</td>
    </tr>
    <tr>
      <td>3.</td>
      <th scope="row">Lianghekou Dam</th>
      <td>China</td>
      <td>295 m</td>
    </tr>
    <tr>
      <td>4.</td>
      <th scope="row">Xiowan Dam</th>
      <td>China</td>
      <td>292 m</td>
    </tr>
    <tr>
      <td>5.</td>
      <th scope="row">Balhetan Dam</th>
      <td>China</td>
      <td>289 m</td>
    </tr>
    <tr>
      <td>6.</td>
      <th scope="row">Xiluodu Dam</th>
      <td>China</td>
      <td>285.5 m</td>
    </tr>
    <tr>
      <td>7.</td>
      <th scope="row">Grande-Dixence Dam</th>
      <td>Switzerland</td>
      <td>285 m</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const thElements = document.querySelectorAll("thead th");
thElements.forEach((th) => {
  th.scope = "col";
});
```

### Ergebnisse

{{EmbedLiveSample("Examples", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
