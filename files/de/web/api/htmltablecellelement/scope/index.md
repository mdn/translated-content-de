---
title: "HTMLTableCellElement: scope-Eigenschaft"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

Die **`scope`**-Eigenschaft der {{domxref("HTMLTableCellElement")}}-Schnittstelle gibt den Anwendungsbereich einer {{HTMLElement("th")}}-Zelle an.

Kopfzellen können mit dem `scope`-Attribut so konfiguriert werden, dass sie auf eine bestimmte Zeile oder Spalte oder auf die noch nicht zugewiesenen Zellen innerhalb der aktuellen Zeilengruppe (das heißt, dasselbe übergeordnete {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Element) angewendet werden. Wenn kein Wert für `scope` angegeben ist, wird die Kopfzelle nicht direkt mit Zellen in dieser Weise verknüpft. Erlaubte Werte für `scope` sind:

> [!NOTE]
> Diese Eigenschaft hat keine visuelle Wirkung in Browsern. Sie fügt semantische Informationen hinzu, um unterstützenden Technologien wie Bildschirmlesern zu helfen, die Tabelle auf eine kohärentere Weise zu präsentieren.

## Wert

Einer der folgenden Werte:

- `col`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Spalte (oder Spalten, wenn auch `colspan` verwendet wird), bis entweder das Ende der Spalte erreicht ist oder eine andere `<th>` in der Spalte einen neuen Anwendungsbereich festlegt.
- `colgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Spaltengruppe, die noch keinen Anwendungsbereich haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Spaltengruppe befindet.
- `row`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Zeile (oder Zeilen, wenn auch `rowspan` verwendet wird), bis entweder das Ende der Zeile erreicht ist oder eine andere `<th>` in derselben Zeile einen neuen Anwendungsbereich festlegt.
- `rowgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Zeilengruppe, die noch keinen Anwendungsbereich haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Zeilengruppe befindet.
- Der leere String (`""`)
  - : Die Kopfzelle hat keinen vordefinierten Anwendungsbereich; der Benutzeragent wird den Anwendungsbereich anhand kontextueller Hinweise festlegen.

## Beispiele

Dieses Beispiel fügt eine Beschriftung für alle Zellnummern der ersten Zeile des `tbody` hinzu.

### HTML

```html
<table>
  <caption>
    Tallest Dams
  </caption>
  <tr>
    <td></td>
    <th scope="col">Dam</th>
    <th scope="col">Country</th>
    <th scope="col">Height</th>
  </tr>
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
</table>
```

### Ergebnisse

{{EmbedLiveSample("Examples", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
