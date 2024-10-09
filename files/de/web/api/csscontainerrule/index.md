---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("CSSOM") }}

Das **`CSSContainerRule`**-Interface repräsentiert eine einzelne CSS {{cssxref("@container")}}-Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für das {{cssxref("@container")}} sowie den Containernamen, falls einer definiert ist, abzurufen. Beachten Sie, dass der Containername und die Abfrage zusammen den "Bedingungstext" definieren, der mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen eines {{cssxref("@container")}} darstellt, oder einen leeren String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Menge der Funktionen oder "Containerbedingungen" darstellt, die ausgewertet werden, um zu bestimmen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Ungenannte Container-Regel

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Der CSS-Code ist derselbe wie im `@container`-Beispiel [Festlegen von Stilen basierend auf der Größe eines Containers](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste zum Protokollieren der Containereigenschaften zusammen mit einer JavaScript-`log()`-Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

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

Dann definieren wir das HTML für eine `card` (`<div>`), die in einem `post` enthalten ist.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Der CSS-Code für das Beispiel wird unten angezeigt. Wie im entsprechenden {{cssxref("@container")}}-Beispiel beschrieben, legt das CSS für das Containerelement den Typ des Containers fest. Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite kleiner als 650px ist.

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

Der untenstehende Code ruft das mit dem Beispiel verknüpfte [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) anhand seiner ID ab und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Stylesheet hinzugefügt wurden. Da wir das `@container` als zweite Regel hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, Index "1", in den `cssRules` zugreifen. Schließlich protokollieren wir die Eigenschaften `containerName`, `containerQuery` und `conditionText` (geerbt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem Inline-HTML-`style`-Element mit einer ID definiert, um es dem Code zu erleichtern, das korrekte Stylesheet zu finden. Sie könnten auch die korrekten Stylesheets für jedes Beispiel aus dem Dokument durch Indizierung gegen die Länge auffinden (z.B. `document.styleSheets[document.styleSheets.length-1]`), aber das macht es komplizierter, das korrekte Stylesheet für jedes Beispiel zu ermitteln.

Das Beispielergebnis wird unten angezeigt. Der Protokollabschnitt listet den `containerName` auf, der ein leerer String ist, da kein Name definiert wurde. Die Strings `containerQuery` und `conditionText` werden ebenfalls protokolliert und haben denselben Wert, da kein Name definiert ist. Die Karte sollte den Hintergrund wechseln, während die Breite der Seite die 650px-Marke überschreitet.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Container-Regel

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Der CSS-Code ist dem im `@container`-Beispiel [Erstellen benannter Containerkontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

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

Zuerst definieren wir das HTML für eine `card` (`<div>`) innerhalb eines `post` (das Beispiel zeigt den Protokollierungscode nicht, da dieser derselbe ist wie im vorherigen Beispiel).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Wie im {{cssxref("@container")}} beschrieben, gibt das CSS für das Containerelement den Typ des Containers an und kann auch einen Namen für den Container festlegen. Die Karte hat eine Standardschriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

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

  @container sidebar (min-width: 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

Der Code zum Abrufen des Stylesheets und der Regeln ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied besteht darin, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir für die zugehörige `CSSContainerRule` den dritten Eintrag in den `cssRules` abrufen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Das Beispielergebnis wird unten angezeigt. Der Protokollabschnitt listet die Strings `containerName` und `containerQuery` auf. Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Strings. Der Titel im Kartenabschnitt sollte doppelt so groß werden, wenn die Breite der Seite 700px überschreitet.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}} und {{cssxref("container")}} Kurzschreibweise
- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
