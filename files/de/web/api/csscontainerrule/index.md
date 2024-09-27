---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }}

Die **`CSSContainerRule`** Schnittstelle repräsentiert eine einzelne CSS {{cssxref("@container")}} Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Bedingungen der Abfrage für den {{cssxref("@container")}} zu erhalten, zusammen mit dem Containernamen, falls einer definiert ist.
Beachten Sie, dass der Containername und die Abfrage gemeinsam den "Bedingungstext" definieren, der mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abgerufen werden kann.

{{InheritanceDiagram}}

## Eigenschaften von Instanzen

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen eines {{cssxref("@container")}} repräsentiert, oder einen leeren String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Menge der Merkmale oder "Containerbedingungen" repräsentiert, die ausgewertet werden, um festzustellen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Methoden von Instanzen

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Unbenannte Containerregel

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Die CSS ist die gleiche wie im `@container` Beispiel [Setting styles based on a container's size](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste zum Loggen der Containereigenschaften zusammen mit einer JavaScript-`log()` Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

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

Die CSS für das Beispiel wird unten gezeigt.
Wie im entsprechenden {{cssxref("@container")}} Beispiel beschrieben, legt die CSS für das Containerelement den Typ des Containers fest.
Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite weniger als 650px beträgt.

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

Der untenstehende Code ruft das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab, das mit dem Beispiel unter Verwendung seiner ID verbunden ist, und nutzt dann dessen `sheet` Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Blatt hinzugefügt wurden.
Da wir die `@container` als zweite Regel hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, mit dem Index "1", in den `cssRules` abrufen.
Zuletzt loggen wir die `containerName`, `containerQuery` und `conditionText` (geerbt) Eigenschaften.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem Inline-HTML-`style` Element mit einer ID definiert, um es dem Code zu erleichtern, das korrekte Blatt zu finden.
> Sie könnten das korrekte Blatt für jedes Beispiel auch ermitteln, indem Sie gegen die Länge indizieren (z. B. `document.styleSheets[document.styleSheets.length-1]`), aber das macht es komplizierter, für jedes Beispiel das richtige Blatt zu bestimmen.

Die Beispielausgabe ist unten gezeigt.
Der Protokollabschnitt listet den `containerName` auf, der ein leerer String ist, da kein Name definiert wurde.
Auch die `containerQuery` und `conditionText` Zeichenfolgen werden protokolliert und haben denselben Wert, da kein Name definiert ist.
Die Karte sollte den Hintergrund ändern, während die Breite der Seite durch 650px geht.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Containerregel

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Die CSS ist sehr ähnlich zu der im `@container` Beispiel [Creating named container contexts](/de/docs/Web/CSS/@container#creating_named_container_contexts).

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

Zuerst definieren wir das HTML für eine `card` (`<div>`), die in einem `post` enthalten ist (das Beispiel zeigt den Log-Code nicht, da dieser im vorherigen Beispiel der gleiche ist).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Wie im {{cssxref("@container")}} beschrieben, spezifiziert die CSS für das Containerelement den Containertyp und kann auch einen Namen für den Container angeben.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

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
Der einzige Unterschied ist, dass wir in diesem Beispiel drei CSS-Regeln haben. Um die zugehörige `CSSContainerRule` zu erhalten, lesen wir den dritten Eintrag in den `cssRules`.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Die Beispielausgabe ist unten gezeigt.
Der Protokollabschnitt listet die `containerName` und `containerQuery` Zeichenfolgen auf.
Auch der `conditionText` wird protokolliert und zeigt die Kombination dieser beiden Zeichenfolgen.
Der Titel in der Kartensektion sollte sich verdoppeln, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibweise
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
