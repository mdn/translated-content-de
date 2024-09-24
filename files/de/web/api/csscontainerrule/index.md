---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }}

Die **`CSSContainerRule`** Schnittstelle repräsentiert eine einzelne CSS {{cssxref("@container")}} Regel.

Ein Objekt dieses Typs kann verwendet werden, um die Abfragebedingungen für das {{cssxref("@container")}} abzurufen, zusammen mit dem Containernamen, falls einer definiert ist. Beachten Sie, dass der Containername und die Abfrage zusammen den "Bedigungstext" bilden, der mit {{domxref("CSSConditionRule.conditionText")}} abgerufen werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, und {{domxref("CSSRule")}}._

- {{domxref("CSSContainerRule.containerName")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen eines {{cssxref("@container")}} repräsentiert, oder einen leeren String.
- {{domxref("CSSContainerRule.containerQuery")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Menge an Funktionen oder "Container-Bedingungen" repräsentiert, die ausgewertet werden, um festzustellen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, und {{domxref("CSSRule")}}._

## Beispiele

### Unbenannte Container-Regel

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Das CSS ist dasselbe wie im `@container` Beispiel [Stile basierend auf der Größe eines Containers festlegen](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

Der erste Teil des Codes erstellt einfach eine Liste, um die Eigenschaften der Container-Regel zu protokollieren, zusammen mit einer JavaScript `log()` Methode, um das Hinzufügen der Eigenschaften zu vereinfachen.

```html
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js
// Referenz zur Logliste speichern
const logList = document.querySelector("#log ul");
// Funktion zum Protokollieren von Daten aus der zugrunde liegenden Quelle
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
    <h2>Kartenüberschrift</h2>
    <p>Karteninhalt</p>
  </div>
</div>
```

Das CSS für das Beispiel wird unten gezeigt. Wie im entsprechenden {{cssxref("@container")}} Beispiel beschrieben, gibt das CSS für das Container-Element den Typ des Containers an. Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf die Karte an, wenn die Breite weniger als 650px beträgt.

```html
<style id="examplestyles">
  /* Ein Container-Kontext basierend auf der Inline-Größe */
  .post {
    container-type: inline-size;
  }

  /* Stile anwenden, wenn der Container schmaler als 650px ist */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

Der untenstehende Code holt das {{domxref("HTMLStyleElement")}}, das mit dem Beispiel über seine ID verknüpft ist, und verwendet dann seine `sheet` Eigenschaft, um das {{domxref("StyleSheet")}} zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge der hinzugefügten `cssRules`. Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` über den zweiten Eintrag mit Index "1" in den `cssRules` zugreifen. Schließlich protokollieren wir die Eigenschaften `containerName`, `containerQuery` und `conditionText` (vererbt).

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // Eine CSSContainerRule, die die Container-Regel darstellt.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> Die Stile für dieses Beispiel sind in einem Inline-HTML-`style` Element mit einer ID definiert, um es dem Code zu erleichtern, das richtige Stylesheet zu finden. Sie können auch die richtigen Stylesheets für jedes Beispiel aus dem Dokument finden, indem Sie gegen die Länge indizieren (z.B. `document.styleSheets[document.styleSheets.length-1]`), aber das macht es komplizierter, das richtige Stylesheet für jedes Beispiel herauszufinden.

Der Beispiel-Ausgang wird unten gezeigt. Der Log-Abschnitt listet den `containerName` auf, welcher ein leerer String ist, da kein Name definiert wurde. Die Strings `containerQuery` und `conditionText` werden ebenfalls protokolliert und haben denselben Wert, da kein Name definiert ist. Die Karte sollte den Hintergrund ändern, wenn die Breite der Seite durch 650px geht.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Benannte Container-Regel

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an. Das CSS ist dem im `@container` Beispiel [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Referenz zur Logliste speichern
const logList = document.querySelector("#log ul");
// Funktion zum Protokollieren von Daten aus der zugrunde liegenden Quelle
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

Zuerst definieren wir das HTML für eine `card` (`<div>`), die innerhalb eines `post` enthalten ist (das Beispiel zeigt den Protokollierungscode nicht, da dieser derselbe wie im vorherigen Beispiel ist).

```html
<div class="post">
  <div class="card">
    <h2>Kartenüberschrift</h2>
    <p>Karteninhalt</p>
  </div>
</div>
```

Wie im {{cssxref("@container")}} beschrieben, gibt das CSS für das Container-Element den Typ und möglicherweise auch einen Namen für den Container an. Die Karte hat eine Standard-Schriftgröße, die für das `@container` namens `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

```html
<style id="examplestyles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Standardüberschriftstile für den Kartentitel */
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

Der Code zum Abrufen des Stylesheets und der Regeln ist fast identisch mit dem vorherigen Beispiel. Der einzige Unterschied ist, dass wir in diesem Beispiel drei CSS-Regeln haben, sodass wir für die zugehörige `CSSContainerRule` den dritten Eintrag in den `cssRules` erhalten.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // Eine CSSContainerRule, die die Container-Regel darstellt.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

Der Beispiel-Ausgang wird unten gezeigt. Der Log-Abschnitt listet die Strings `containerName` und `containerQuery` auf. Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Strings. Der Titel im Kartenabschnitt sollte doppelt so groß werden, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Named container rule","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibweise Eigenschaften
- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
