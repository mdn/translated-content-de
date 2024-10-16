---
title: "HTMLTableCellElement: scope property"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`scope`**-Eigenschaft der [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Schnittstelle gibt den Geltungsbereich einer {{HTMLElement("th")}}-Zelle an.

Kopfzellen können mit dem `scope`-Attribut so konfiguriert werden, dass sie auf eine bestimmte Zeile oder Spalte angewendet werden oder auf die noch nicht zugewiesenen Zellen innerhalb der aktuellen Zeilengruppe (das heißt, dasselbe übergeordnete {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}-Element). Wenn kein Wert für `scope` angegeben ist, wird die Kopfzeile nicht direkt mit den Zellen in dieser Weise verknüpft. Erlaubte Werte für `scope` sind:

> [!NOTE]
> Diese Eigenschaft hat keinen visuellen Effekt in Browsern. Sie fügt semantische Informationen hinzu, die unterstützenden Technologien wie Bildschirmlesegeräten helfen, die Tabelle auf eine kohärentere Weise darzustellen.

## Wert

Einer der folgenden Werte:

- `col`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Spalte (oder Spalten, wenn `colspan` ebenfalls verwendet wird), bis entweder das Ende der Spalte erreicht ist oder eine andere `<th>`-Zelle in der Spalte einen neuen Geltungsbereich festlegt.
- `colgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Spaltengruppe, die noch keinen Geltungsbereich haben. Dieser Wert ist nur zulässig, wenn sich die Zelle in einer Spaltengruppe befindet.
- `row`
  - : Die Kopfzelle gilt für die folgenden Zellen in derselben Zeile (oder Zeilen, wenn `rowspan` ebenfalls verwendet wird), bis entweder das Ende der Zeile erreicht ist oder eine andere `<th>`-Zelle in derselben Zeile einen neuen Geltungsbereich festlegt.
- `rowgroup`
  - : Die Kopfzelle gilt für alle Zellen in der aktuellen Zeilengruppe, die noch keinen Geltungsbereich haben. Dieser Wert ist nur zulässig, wenn sich die Zelle in einer Zeilengruppe befindet.
- Der leere String (`""`)
  - : Die Kopfzelle hat keinen vordefinierten Geltungsbereich; der Nutzeragent wird den Geltungsbereich basierend auf kontextuellen Hinweisen festlegen.

## Beispiele

Dieses Beispiel fügt ein Label zu allen Zellnummern der ersten Zeile des `tbody` hinzu.

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
