---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Das **`CSSContainerRule`**-Interface repräsentiert eine einzelne CSS-{{cssxref("@container")}}-Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für das {{cssxref("@container")}} zu erhalten, zusammen mit dem Containernamen, falls einer definiert ist. Beachten Sie, dass der Containername und die Abfrage zusammen den "condition text" definieren, der mithilfe von [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen eines {{cssxref("@container")}} darstellt, oder einen leeren String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Menge der Merkmale oder "container conditions" darstellt, die ausgewertet werden, um festzustellen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Ungenannte Containerregel

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist dasselbe wie im `@container`-Beispiel [Stile basierend auf der Größe eines Containers setzen](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste zur Protokollierung der Containereigenschaften, zusammen mit einer JavaScript-`log()`-Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

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

Dann definieren wir das HTML für eine `card` (`<div>`) innerhalb eines `post`.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Beispiel wird unten gezeigt.
Wie im entsprechenden {{cssxref("@container")}}-Beispiel beschrieben, gibt das CSS für das Containerelement den Typ des Containers an.
Die {{cssxref("@container")}}-Regel legt dann eine neue Breite, Schriftgröße und Hintergrundfarbe für die Karte fest, wenn die Breite weniger als 650px beträgt.

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

Der unten stehende Code erhält das mit dem Beispiel verknüpfte [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) über seine ID und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Blatt hinzugefügt wurden.
Da wir das `@container` als zweite Regel hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, mit dem Index "1", in den `cssRules` zugreifen.
Zuletzt protokollieren wir die Eigenschaften `containerName`, `containerQuery` und `conditionText` (geerbt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem Inline-HTML-`style`-Element mit einer ID definiert, um es dem Code zu erleichtern, das richtige Blatt zu finden.
> Sie könnten auch die richtigen Blätter für jedes Beispiel aus dem Dokument finden, indem Sie den Index gegen die Länge verwenden (z.B. `document.styleSheets[document.styleSheets.length-1]`), aber das macht es komplizierter, das richtige Blatt für jedes Beispiel zu ermitteln.

Die Beispielausgabe wird unten gezeigt.
Der Protokollierungsabschnitt listet den `containerName` auf, der ein leerer String ist, da kein Name definiert wurde.
Die `containerQuery`- und `conditionText`-Strings werden ebenfalls protokolliert und haben denselben Wert, da kein Name definiert ist.
Die Karte sollte den Hintergrund ändern, während die Breite der Seite 650px überschreitet.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Containerregel

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist dem im `@container`-Beispiel [Erstellen benannter Containerkontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

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

Zuerst definieren wir das HTML für eine `card` (`<div>`) innerhalb eines `post` (das Beispiel zeigt den Protokollierungscode nicht, da dieser derselbe wie im vorherigen Beispiel ist).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Wie in {{cssxref("@container")}} beschrieben, gibt das CSS für das Containerelement den Typ des Containers an und kann auch einen Namen für den Container angeben.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

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

Der Code zum Erhalten des Stilblatts und der Regeln ist fast identisch mit dem vorherigen Beispiel.
Der einzige Unterschied besteht darin, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir, um die zugehörige `CSSContainerRule` zu erhalten, den dritten Eintrag in den `cssRules` abrufen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Die Beispielausgabe wird unten gezeigt.
Der Protokollierungsabschnitt listet die `containerName`- und `containerQuery`-Strings auf.
Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Strings.
Der Titel im Kartenabschnitt sollte doppelt so groß werden, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibweise-Eigenschaften
- [CSS-Einschließungsmodul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
