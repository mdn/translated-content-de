---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }}

Die **`CSSContainerRule`**-Schnittstelle repräsentiert eine einzelne CSS-{{cssxref("@container")}}-Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für den {{cssxref("@container")}} zu erhalten, zusammen mit dem Container-Namen, sofern einer definiert ist. Beachten Sie, dass der Container-Name und die Abfrage zusammen den "Bedingungstext" definieren, der mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) erhalten werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Namen eines {{cssxref("@container")}} darstellt, oder eine leere Zeichenkette.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Menge an Merkmalen oder "Container-Bedingungen" repräsentiert, die ausgewertet werden, um festzustellen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Unbenannte Container-Regel

Das untenstehende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist dasselbe wie im `@container`-Beispiel [Stile basierend auf der Größe eines Containers festlegen](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste zum Protokollieren der Eigenschaften der Container-Regel sowie eine JavaScript-`log()`-Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

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

Dann definieren wir das HTML für eine `card` (`<div>`), die innerhalb eines `post` enthalten ist.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Beispiel wird unten gezeigt.
Wie im entsprechenden {{cssxref("@container")}}-Beispiel beschrieben, spezifiziert das CSS für das Containerelement den Typ des Containers.
Der {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite kleiner als 650px ist.

```html
<style id="examplestyles">
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

Der untenstehende Code ruft das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab, das dem Beispiel unter Verwendung seiner ID zugeordnet ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) abzurufen.
Aus dem `StyleSheet` erhalten wir die Menge der zum Blatt hinzugefügten `cssRules`.
Da wir den `@container` als zweite Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den zweiten Eintrag mit Index "1" in den `cssRules` verwenden.
Zuletzt protokollieren wir die `containerName`, `containerQuery` und `conditionText` (vererbt) Eigenschaften.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem HTML-`style`-Element mit einer ID definiert, um es dem Code zu erleichtern, das richtige Blatt zu finden.
> Sie könnten auch die richtigen Blätter für jedes Beispiel im Dokument lokalisieren, indem Sie gegen die Länge indizieren (z.B. `document.styleSheets[document.styleSheets.length-1]`, aber das macht es komplizierter, das richtige Blatt für jedes Beispiel zu bestimmen).

Das Beispielausgabe wird unten gezeigt.
Der Protokollabschnitt listet den `containerName` auf, der eine leere Zeichenkette ist, da kein Name definiert wurde.
Die `containerQuery` und `conditionText`-Zeichenketten werden ebenfalls protokolliert und haben den gleichen Wert, da kein Name definiert ist.
Die Karte sollte den Hintergrund ändern, während die Breite der Seite durch 650px wechselt.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Container-Regel

Das untenstehende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist dem im `@container`-Beispiel [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

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

Zuerst definieren wir das HTML für eine `card` (`<div>`), die in einem `post` enthalten ist (das Beispiel zeigt den Protokollierungscode nicht, da dieser dem im vorherigen Beispiel entspricht).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Wie in {{cssxref("@container")}} beschrieben, spezifiziert das CSS für das Containerelement den Typ des Containers und kann auch einen Namen für den Container angeben.
Die Karte hat eine Standardschriftgröße, die für den `@container` namens `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

```html
<style id="examplestyles">
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

Der Code zum Abrufen des Blattes und der Regeln ist fast identisch mit dem vorherigen Beispiel.
Der einzige Unterschied besteht darin, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir die zugehörige `CSSContainerRule` durch den dritten Eintrag in den `cssRules` erhalten.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Das Beispielausgabe wird unten gezeigt.
Der Protokollabschnitt listet die `containerName` und `containerQuery` Zeichenketten auf.
Das `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Zeichenketten.
Der Titel im Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite über 700px liegt.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibweise-Eigenschaften
- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
