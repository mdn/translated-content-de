---
title: "HTMLTableCellElement: scope-Eigenschaft"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

Die **`scope`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces gibt den Geltungsbereich einer {{HTMLElement("th")}}-Zelle an.

Kopfzellen können mithilfe des `scope`-Attributs so konfiguriert werden, dass sie für eine bestimmte Zeile oder Spalte gelten oder für die noch nicht erfassten Zellen innerhalb der aktuellen Zeilengruppe (d. h. dasselbe übergeordnete {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Element). Wenn kein Wert für `scope` angegeben wird, ist der Kopf nicht direkt mit Zellen in dieser Weise verbunden. Zulässige Werte für `scope` sind:

> [!NOTE]
> Diese Eigenschaft hat keine visuelle Wirkung in Browsern. Sie fügt semantische Informationen hinzu, um unterstützende Technologien wie Bildschirmleser dabei zu helfen, die Tabelle auf verständlichere Weise darzustellen.

## Wert

Einer der folgenden Werte:

- `col`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Spalte (oder Spalten, wenn `colspan` ebenfalls verwendet wird), bis entweder das Ende der Spalte erreicht ist oder ein weiteres `<th>` in der Spalte einen neuen Geltungsbereich festlegt.
- `colgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Spaltengruppe, die noch keinen angewendeten Bereich haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Spaltengruppe befindet.
- `row`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Zeile (oder Reihen, wenn `rowspan` ebenfalls verwendet wird), bis entweder das Ende der Zeile erreicht ist oder ein weiteres `<th>` in derselben Zeile einen neuen Geltungsbereich festlegt.
- `rowgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Zeilengruppe, die noch keinen angewendeten Bereich haben. Dieser Wert ist nur erlaubt, wenn sich die Zelle in einer Zeilengruppe befindet.
- Der leere String (`""`)
  - : Die Kopfzelle hat keinen vordefinierten Bereich; der Benutzeragent wird den Bereich basierend auf kontextuellen Hinweisen festlegen.

## Beispiele

Dieses Beispiel fügt allen Zellenummern der ersten Zeile des `tbody` eine Beschriftung hinzu.

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
