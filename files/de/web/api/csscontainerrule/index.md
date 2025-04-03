---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("CSSOM") }}

Die **`CSSContainerRule`** Schnittstelle repräsentiert eine einzelne CSS {{cssxref("@container")}} Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für das {{cssxref("@container")}} zu erhalten, zusammen mit dem Containernamen, falls einer definiert ist. Beachten Sie, dass der Containername und die Abfrage zusammen den "Bedingungstext" definieren, der mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen eines {{cssxref("@container")}} repräsentiert, oder einen leeren String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Satz von Merkmalen oder "Containerbedingungen" darstellt, die ausgewertet werden, um zu bestimmen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Unbenannte Container-Regel

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Die CSS ist dieselbe wie im `@container` Beispiel [Stile einstellen basierend auf der Größe eines Containers](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste für die Protokollierung der Container-Regel-Eigenschaften, zusammen mit einer JavaScript-Methode `log()`, um das Hinzufügen der Eigenschaften zu vereinfachen.

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

Das CSS für das Beispiel wird unten gezeigt. Wie im entsprechenden {{cssxref("@container")}} Beispiel beschrieben, gibt das CSS für das Containerelement den Typ des Containers an. Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite weniger als 650px beträgt.

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

Der untenstehende Code erhält das mit dem Beispiel verbundene [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) über seine ID und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Anzahl der `cssRules`, die dem Sheet hinzugefügt wurden. Da wir das `@container` als die zweite Regel hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` über den zweiten Eintrag, mit Index "1", in den `cssRules` zugreifen. Zuletzt protokollieren wir die `containerName`, `containerQuery` und `conditionText` (geerbt) Eigenschaften.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem inline HTML `style`-Element mit einer ID definiert, um es dem Code zu erleichtern, das richtige Style-Sheet zu finden. Sie könnten das korrekte Style-Sheet für jedes Beispiel auch aus dem Dokument durch Indexierung gegen die Länge (z.B. `document.styleSheets[document.styleSheets.length-1]`) ermitteln, aber das macht das Ermitteln des richtigen Style-Sheets für jedes Beispiel komplizierter.

Die Beispielausgabe wird unten gezeigt. Der Protokollabschnitt listet den `containerName`, der ein leerer String ist, da kein Name definiert wurde. Die `containerQuery` und `conditionText` Strings werden ebenfalls protokolliert und haben denselben Wert, da kein Name definiert ist. Die Karte sollte den Hintergrund ändern, wenn die Breite der Seite durch 650px wechselt.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Container-Regel

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Die CSS ist sehr ähnlich wie im `@container` Beispiel [Erstellen von benannten Container-Kontexten](/de/docs/Web/CSS/@container#creating_named_container_contexts).

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

Wie in {{cssxref("@container")}} beschrieben, spezifiziert das CSS für das Containerelement den Typ des Containers und kann auch einen Namen für den Container angeben. Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

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

Der Code zum Abrufen des Style-Sheets und der Regeln ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied ist, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir den dritten Eintrag in den `cssRules` erhalten, um die zugehörige `CSSContainerRule` zu bekommen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Die Beispielausgabe wird unten gezeigt. Der Protokollabschnitt listet die `containerName` und `containerQuery` Strings auf. Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Strings. Der Titel in dem Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibereigenschaften
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
