---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}

Die **`CSSContainerRule`** Schnittstelle repräsentiert eine einzelne CSS {{cssxref("@container")}} Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für das {{cssxref("@container")}} sowie den Containernamen zu erhalten, falls einer definiert ist. Beachten Sie, dass der Containername und die Abfrage zusammen den "Bedingungstext" definieren, der mithilfe von [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Namen eines {{cssxref("@container")}} repräsentiert, oder eine leere Zeichenkette.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Menge der Merkmale oder "Containerbedingungen" repräsentiert, die ausgewertet werden, um zu bestimmen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Unbenannte Container-Regel

Das untenstehende Beispiel definiert eine unbenannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist dasselbe wie im `@container` Beispiel [Festlegen von Stilen basierend auf der Größe eines Containers](/de/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste, um die Container-Regel-Eigenschaften zu protokollieren, zusammen mit einer JavaScript `log()`-Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

```html
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js
// Store reference to log list
const logList = document.querySelector("#log ul");
// Function to log data from underlying source
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

Dann definieren wir das HTML für eine `card` (`<div>`), die sich innerhalb eines `post` befindet.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Beispiel wird unten gezeigt. Wie in dem entsprechenden {{cssxref("@container")}} Beispiel beschrieben, gibt das CSS für das Containerelement den Typ des Containers an. Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite weniger als 650px beträgt.

```html
<style id="example-styles">
  /* A container context based on inline size */
  .post {
    container-type: inline-size;
  }

  /* Apply styles if the container is narrower than 650px */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

Der untenstehende Code holt das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das dem Beispiel zugeordnet ist, mittels seiner ID und nutzt dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Sheet hinzugefügt wurden. Da wir das `@container` als zweite Regel hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, Index "1", in den `cssRules` zugreifen. Zuletzt protokollieren wir die `containerName`, `containerQuery` und `conditionText` (geerbt) Eigenschaften.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel werden in einem Inline-HTML `style` Element mit einer ID definiert, um es dem Code leicht zu machen, das richtige Sheet zu finden. Sie könnten die richtigen Sheets für jedes Beispiel auch durch Indizieren gegen die Länge lokalisieren (z.B. `document.styleSheets[document.styleSheets.length-1]`, aber das macht die Bestimmung des richtigen Sheets für jedes Beispiel komplizierter).

Das Beispiel-Ausgabe wird unten gezeigt. Der Protokollierungsabschnitt listet den `containerName` auf, der eine leere Zeichenkette ist, da kein Name definiert wurde. Die `containerQuery` und `conditionText`-Zeichenketten werden ebenfalls protokolliert und haben denselben Wert, weil kein Name definiert ist. Die Karte sollte die Hintergrundfarbe ändern, während die Breite der Seite durch 650px übergeht.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Container-Regel

Das untenstehende Beispiel definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`. Das CSS ist dem in dem `@container` Beispiel [Erstellen von benannten Container-Kontexten](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts) sehr ähnlich.

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Store reference to log list
const logList = document.querySelector("#log ul");
// Function to log data from underlying source
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

Zuerst definieren wir das HTML für eine `card` (`<div>`), die sich innerhalb eines `post` befindet (das Beispiel zeigt den Protokollierungscode nicht, da dieser derselbe wie im vorherigen Beispiel ist).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Wie in {{cssxref("@container")}} beschrieben, gibt das CSS für das Containerelement den Typ des Containers an und kann auch einen Namen für den Container angeben. Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

```html
<style id="example-styles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Default heading styles for the card title */
  .card h2 {
    font-size: 1em;
  }

  @container sidebar (width >= 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

Der Code zum Abrufen des Sheets und der Regeln ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir, um die zugehörige `CSSContainerRule` zu erhalten, den dritten Eintrag in den `cssRules` verwenden.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Das Beispiel-Ausgabe wird unten gezeigt. Der Protokollierungsabschnitt listet die `containerName` und `containerQuery` Zeichenketten auf. Die `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Zeichenketten. Der Titel im Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzform-Eigenschaften
- [CSS-Eindämmungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
