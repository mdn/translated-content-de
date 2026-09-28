---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ APIRef("CSSOM") }}

Die Schnittstelle **`CSSContainerRule`** repräsentiert eine einzelne CSS-Regel {{cssxref("@container")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von den übergeordneten Schnittstellen [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) {{ReadOnlyInline}}
  - : Gibt ein Array von Objekten zurück, die jeweils eine Container-Bedingung in einer {{cssxref("@container")}}-Regel angeben.
    Die Objekte haben eine String-Eigenschaft `name` und eine String-Eigenschaft `query`. Beide können ein leerer String sein, wenn sie nicht definiert sind.
    `name` bezeichnet den Namen eines Containers und `query` die Menge der Feature-Tests, die erfüllt sein müssen, damit die jeweilige Bedingung zutrifft.
- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der Container-Bedingung einer {{cssxref("@container")}}-Regel angibt, wenn nur eine Bedingung vorhanden ist.
    Wenn mehrere Container-Bedingungen vorhanden sind oder die einzige Bedingung keinen Namen angibt, ist der Wert ein leerer String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Container-Abfrage für die Container-Bedingung einer {{cssxref("@container")}}-Regel angibt, wenn nur eine Bedingung vorhanden ist.
    Er repräsentiert eine Menge von Feature-Tests, die alle erfüllt sein müssen, damit die Bedingung zutrifft.
    Wenn mehrere Container-Bedingungen vorhanden sind oder die einzige Bedingung keine Abfrage angibt, ist der Wert ein leerer String.

## Instanzmethoden

_Keine eigenen Methoden; erbt Methoden von den übergeordneten Schnittstellen [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beschreibung

Ein `CSSContainerRule`-Objekt repräsentiert eine {{cssxref("@container")}}-Regel.

Eine `@container`-Regel definiert eine oder mehrere durch Kommas getrennte _Container-Bedingungen_.
Jede Container-Bedingung besteht aus einem „Namen“ und/oder einer „Abfrage“. Der Name bezeichnet den Container, für den die Bedingung gilt, und die Abfrage legt einen oder mehrere logisch verknüpfte Feature-Tests für die Eigenschaften eines Containers fest.
Wenn mindestens eine der Container-Bedingungen auf einen Container zutrifft, werden die angegebenen Stile angewendet.

> [!NOTE]
> Die Unterstützung für mehrere Container-Bedingungen ist in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) durch den Eintrag `conditions` gekennzeichnet (frühere Versionen der Spezifikation erlaubten nur eine einzelne Container-Bedingung).
> Dies wirkt sich darauf aus, wie `CSSContainerRule` und `@container` verwendet werden.

Ein konstruiertes Beispiel mit drei Bedingungen ist unten dargestellt.
Die Regel trifft auf einen Container namens `main-content` zu, wenn seine Breite zwischen `600px` und `800px` liegt, auf jeden Container mit einer Höhe von mehr als `800px` oder auf jeden Container namens `other-content`.

```css
@container main-content (width > 600px) and (width < 800px), (height > 800px), other-content {
  /* Apply styles */
}
```

In Browsern, die dies unterstützen, repräsentiert die Eigenschaft `CSSContainerRule.conditions` eine `@container`-Regel als Array von Objekten, die jeweils eine einzelne Container-Bedingung definieren.
Die Objekte haben die Eigenschaften `name` und `query`, die jeweils ein leerer String (`""`) sein können.
Die Eigenschaft `conditions` für das obige `@container`-Beispiel sähe so aus:

```js
[
  { name: "main-content", query: "(width > 600px) and (width < 800px)" },
  { name: "", query: "(height > 800px)" },
  { name: "other-content", query: "" },
];
```

Die Eigenschaften `containerName` und `containerQuery` wurden eingeführt, bevor Container-Regeln mit mehreren Container-Bedingungen unterstützt wurden.
Bei einer Container-Regel mit _einer einzelnen Container-Bedingung_ enthalten sie den Namen und die Abfrage dieser Bedingung (entsprechend den Eigenschaften `name` und `query` des Objekts im Array `conditions`).
Bei einer Container-Regel mit mehreren Bedingungen sind beide auf einen leeren String gesetzt.

Beachten Sie, dass Browser ohne Unterstützung für die Eigenschaft `conditions` nur Container-Regeln mit einer einzelnen Container-Bedingung zulassen.
Eine `@container`-Regel mit mehreren Container-Bedingungen wird nicht geparst, und es wird kein entsprechendes `CSSContainerRule`-Objekt erstellt.

Den Text der gesamten Bedingung können Sie auch über [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abrufen.

## Beispiele

### Unterstützung von Features prüfen

Die Prüfung auf unterstützte Features kann aufwendig sein, da Sie Fälle berücksichtigen müssen, in denen `CSSContainerRule` oder `CSSContainerRule.conditions` nicht unterstützt werden. Hinzu kommt der Sonderfall, dass `conditions` nicht unterstützt wird, in der CSS-Regel aber mehrere Container-Bedingungen angegeben sind.

Der folgende Code zeigt, wie Sie dabei vorgehen können. Er setzt voraus, dass Sie bereits `containerRule` erhalten haben: eine `CSSContainerRule`-Instanz, die einer im CSS der Seite definierten {{cssxref("@container")}}-Regel entspricht. Das nächste Beispiel zeigt, wie Sie `containerRule` abrufen können.

```js
if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created — @container with multiple conditions may not be parsed.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

Beachten Sie, dass wir, sofern vorhanden, die Informationen aus `CSSContainerRule.conditions` gegenüber `containerName` und `containerQuery` bevorzugen.

### Container-Bedingung ohne Namen

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einer einzelnen Container-Bedingung ohne Namen und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an.
Das CSS entspricht dem `@container`-Beispiel [Stile anhand der Größe eines Containers festlegen](/de/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

Der Code zur Protokollierung der Ergebnisse ist hier nicht besonders relevant und wurde daher ausgeblendet.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### HTML

Zunächst definieren wir das HTML für eine `card` innerhalb eines `post`.
Diese werden durch zwei ineinander verschachtelte {{htmlelement("div")}}-Elemente repräsentiert.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Das CSS für das Beispiel ist unten dargestellt.
Zuerst legt es {{cssxref("container-type")}} für das Container-Element (`post`) fest.
Anschließend weist die `@container`-Regel der Karte eine neue `width`, `background-color` und `font-size` zu, wenn die Breite weniger als `650px` beträgt.

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

> [!NOTE]
> Die Stile in diesen Beispielen sind in einem eingebetteten HTML-Element {{htmlelement("style")}} mit einer `id` definiert, damit der Code das richtige Stylesheet leicht finden kann.
> Sie könnten das richtige Stylesheet für jedes Beispiel auch anhand der Anzahl der im Dokument enthaltenen Stylesheets ermitteln, also über `length` der Eigenschaft `styleSheets` (beispielsweise `document.styleSheets[document.styleSheets.length-1]`). Dadurch wird es jedoch schwieriger, für jedes Beispiel das richtige Stylesheet zu bestimmen.

#### JavaScript

Der folgende Code ruft über die `id` das zum Beispiel gehörende [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab und verwendet dann dessen Eigenschaft `sheet`, um das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zu erhalten.
Aus dem `CSSStyleSheet` erhalten wir die Menge der dem Stylesheet hinzugefügten `cssRules`.
Da wir `@container` oben als zweite Regel hinzugefügt haben, können wir über den zweiten Eintrag mit dem Index „1“ in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
```

Als Nächstes verwenden wir den Code zur Prüfung der Feature-Unterstützung aus dem vorherigen Beispiel, um die gewünschten Informationen zu ermitteln und zu protokollieren.

```js
if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Ergebnisse

Die Ausgabe des Beispiels ist unten dargestellt.
Sie führt die Bedingung entweder über die Eigenschaft `conditions` auf, wenn diese unterstützt wird, oder andernfalls über `containerName`/`containerQuery`.

{{EmbedLiveSample("Unnamed container condition","100%","300px")}}

Beachten Sie, dass sich die `background-color` der Karte ändern sollte, wenn die Container-Breite kleiner oder größer als `650px` wird.

### Benannte Container-Bedingung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einem Namen und einer Abfrage und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an.

Das CSS ähnelt stark dem `@container`-Beispiel [Benannte Container-Kontexte erstellen](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).
Das HTML sowie den Code zur Protokollierung und zur Prüfung der Feature-Unterstützung haben wir ausgeblendet, da sie dem vorherigen Beispiel entsprechen.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

In diesem Beispiel werden sowohl ein Container-Name, `sidebar`, als auch der Container-Typ festgelegt.
Die Karte hat eine Standardschriftgröße. Sie wird überschrieben, wenn sich die Karte innerhalb eines `@container` namens `sidebar` befindet und dessen Breite mindestens `700px` beträgt.

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

```js hidden
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.

if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Ergebnisse

Die Ausgabe des Beispiels ist unten dargestellt.
Sie führt die Bedingung entweder über die Eigenschaft `conditions` auf, wenn diese unterstützt wird, oder andernfalls über `containerName`/`containerQuery`.
Auch `conditionText` wird protokolliert und zeigt die Kombination dieser beiden Strings.

{{EmbedLiveSample("Named container condition","100%","300px")}}

Der Text im `<div>` der Karte sollte sich verdoppeln, sobald die Seitenbreite `700px` erreicht, und wieder halbieren, wenn sie unter `700px` fällt.

### Mehrere Container-Bedingungen

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit mehreren Container-Bedingungen und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an.

Das HTML sowie den Code zur Protokollierung und zur Prüfung der Feature-Unterstützung haben wir ausgeblendet, da sie dem vorherigen Beispiel entsprechen.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Die `@container`-Deklaration definiert hier zwei Container-Bedingungen. Sie trifft auf einen Container zu, wenn eine der beiden Bedingungen erfüllt ist.

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

  @container sidebar (width <= 600px), (aspect-ratio > 1/1) {
    .card {
      font-size: 2em;
      background-color: lightblue;
    }
  }
</style>
```

```js hidden
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.

if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created — @container with multiple conditions may not be parsed.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Ergebnisse

Die Ausgabe des Beispiels ist unten dargestellt.
Browser, die die Eigenschaft `conditions` unterstützen, zeigen beide Bedingungen an.
Browser ohne diese Unterstützung protokollieren einen Hinweis, dass mehrere Bedingungen nicht geparst werden können.

{{EmbedLiveSample("Multiple container conditions","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaften {{cssxref("container-name")}}, {{cssxref("container-type")}} und die Kurzschreibweise {{cssxref("container")}}
- [CSS-Modul für Containment](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Container-Größen- und Stilabfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
