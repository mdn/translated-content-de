---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{ APIRef("CSSOM") }}

Das **`CSSContainerRule`**-Interface repräsentiert eine einzelne CSS {{cssxref("@container")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, von denen jedes eine Container-Bedingung in einer {{cssxref("@container")}}-Regel angibt.
    Die Objekte haben eine `name`-Eigenschaft und eine `query`-Eigenschaft, von denen jede der leere String sein kann, wenn sie nicht definiert ist.
    Der `name` repräsentiert den Namen eines Containers, und die `query` repräsentiert die Menge der Feature-Tests, die wahr sein müssen, damit die bestimmte Bedingung gilt.
- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der Container-Bedingung eines {{cssxref("@container")}} darstellt, wenn es nur eine Bedingung gibt.
    Wenn es mehrere Container-Bedingungen gibt oder wenn es nur eine Bedingung gibt, die keinen Namen angibt, ist dies der leere String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Container-Abfrage für die Container-Bedingung eines {{cssxref("@container")}} darstellt, wenn es nur eine Bedingung gibt.
    Dies repräsentiert eine Menge von Feature-Tests, die alle wahr sein müssen, damit die Bedingung gilt.
    Wenn es mehrere Container-Bedingungen gibt oder wenn es nur eine Bedingung gibt, die keine Abfrage angibt, ist dies der leere String.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beschreibung

Ein `CSSContainerRule`-Objekt repräsentiert eine {{cssxref("@container")}}-Regel.

Eine `@container`-Regel definiert eine oder mehrere durch Kommas getrennte _Container-Bedingungen_.
Jede Container-Bedingung besteht aus einem "Namen" und/oder einer "Abfrage", wobei der "Name" den Namen des Containers angibt, auf den die Bedingung angewendet wird, und die "Abfrage" eine oder mehrere logisch kombinierte Feature-Überprüfungen auf den Eigenschaften eines Containers spezifiziert.
Wenn eine der Container-Bedingungen mit einem Container übereinstimmt, werden die angegebenen Stile angewendet.

> [!NOTE]
> Unterstützung für mehrere Container-Bedingungen wird durch den `conditions`-Schlüssel in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) angezeigt (frühere Spezifikationen erlaubten nur eine einzelne Container-Bedingung).
> Dies wirkt sich darauf aus, wie `CSSContainerRule` und `@container` verwendet werden.

Ein konstruierte Beispiel, bestehend aus drei Bedingungen, wird unten gezeigt.
Dieses wird mit einem Container namens `main-content` übereinstimmen, wenn die Breite zwischen `600px` und `800px` liegt, mit jedem Container, der eine Höhe größer als `800px` hat, oder mit jedem Container namens `other-content`.

```css
@container main-content (width > 600px) and (width < 800px), (height > 800px), other-content {
  /* Apply styles */
}
```

In unterstützenden Browsern repräsentiert die `CSSContainerRule.conditions`-Eigenschaft eine `@container` als ein Array von Objekten, von denen jedes eine einzelne Container-Bedingung definiert.
Die Objekte haben die Eigenschaften `name` und `query`, die der leere String (`""`) sein können.
Die `conditions`-Eigenschaft für das obige `@container`-Beispiel würde so aussehen:

```js
[
  { name: "main-content", query: "(width > 600px) and (width < 800px)" },
  { name: "", query: "(height > 800px)" },
  { name: "other-content", query: "" },
];
```

Die `containerName`- und `containerQuery`-Eigenschaften stammen aus der Zeit vor der Unterstützung von Container-Regeln mit mehreren Container-Bedingungen.
Für eine Container-Regel mit einer _einzelnen Container-Bedingung_ enthalten sie den Namen und die Abfrage dieser Bedingung (entsprechend den `name`- und `query`-Eigenschaften des Objekts im `conditions`-Array).
Für eine Container-Regel mit mehreren Bedingungen sind sie beide auf den leeren String gesetzt.

Beachten Sie, dass Browser, die die `conditions`-Eigenschaft nicht unterstützen, nur Container-Regeln mit einer einzelnen Container-Bedingung erlauben.
Ein `@container` mit mehreren Container-Bedingungen wird nicht geparst, und es wird keine entsprechende `CSSContainerRule` erstellt.

Sie können den Text für die gesamte Bedingung auch mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abrufen.

## Beispiele

### Feature-Testing

Feature-Testing kann kompliziert sein, da Sie möglicherweise Fälle behandeln müssen, in denen `CSSContainerRule` oder `CSSContainerRule.conditions` nicht unterstützt werden, sowie den speziellen Fall, in dem `conditions` nicht unterstützt wird, aber mehrere Container-Bedingungen in der CSS angegeben wurden.

Dieser Code zeigt, wie Sie dies tun können, vorausgesetzt, Sie haben bereits `containerRule` erhalten, eine `CSSContainerRule`-Instanz, die einer {{cssxref("@container")}}-Regel entspricht, die in der Seiten-CSS definiert ist (das nächste Beispiel zeigt, wie Sie `containerRule` erhalten könnten).

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

Beachten Sie, dass wir, wenn es definiert ist, die Informationen in `CSSContainerRule.conditions` gegenüber `containerName` und `containerQuery` bevorzugen.

### Unbenannte Container-Bedingung

Das untenstehende Beispiel definiert eine {{cssxref("@container")}}-Regel, die eine einzelne Container-Bedingung ohne Namen hat, und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Die CSS ist dieselbe wie im `@container`-Beispiel [Stile basierend auf der Größe eines Containers festlegen](/de/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

Beachten Sie, dass unser Code, um die Ergebnisse zu protokollieren, nicht besonders relevant ist, daher wurde er ausgeblendet.

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

Zuerst definieren wir das HTML für eine `card`, die in einem `post` enthalten ist.
Diese werden durch zwei verschachtelte {{htmlelement("div")}}-Elemente dargestellt.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Die CSS für das Beispiel wird unten gezeigt.
Die CSS gibt zunächst den {{cssxref("container-type")}} für das Container-Element (`post`) an.
Die `@container`-Regel wendet dann eine neue `width`, `background-color` und `font-size` auf die Karte an, wenn die Breite kleiner als `650px` ist.

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
> Die Stile in diesen Beispielen sind in einem inline HTML-{{htmlelement("style")}}-Element mit einer `id` definiert, um es dem Code zu erleichtern, das richtige Stylesheet zu finden.
> Sie könnten auch das richtige Stylesheet für jedes Beispiel finden, indem Sie gegen die Anzahl der in dem Dokument enthaltenen Stylesheets indizieren, das heißt, die `length` der `styleSheets`-Eigenschaft (zum Beispiel `document.styleSheets[document.styleSheets.length-1]`), aber das macht das Ausarbeiten des korrekten Blattes für jedes Beispiel komplizierter.

#### JavaScript

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel über seine `id` verknüpft ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Blatt hinzugefügt wurden.
Da wir die `@container` als zweite Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, mit dem Index "1" in den `cssRules`, zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
```

Als nächstes verwenden wir unseren Feature-Testing-Code aus dem vorherigen Beispiel, um die Informationen zu finden und zu protokollieren, die wir anzeigen möchten.

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

Das Beispiel-Ergebnis wird unten gezeigt.
Dies listet die Bedingung entweder unter Verwendung der `conditions`-Eigenschaft auf, wenn sie unterstützt wird, oder `containerName`/`containerQuery`, wenn nicht.

{{EmbedLiveSample("Unnamed container condition","100%","300px")}}

Beachten Sie, dass sich die `background-color` der Karte ändern sollte, wenn die Containerbreite kleiner oder größer als `650px` wird.

### Benannte Container-Bedingung

Das untenstehende Beispiel definiert eine {{cssxref("@container")}}-Regel, die einen Namen und eine Abfrage beinhaltet, und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.

Die CSS ist sehr ähnlich zu der im `@container`-Beispiel [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).
Beachten Sie, dass wir den HTML-, Protokollierungs- und Feature-Check-Code ausgeblendet haben, da sie im vorherigen Beispiel identisch sind.

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

In diesem Beispiel spezifiziert die {{cssxref("@container")}} einen Container-Namen, `sidebar`, sowie den Container-Typ.
Die Karte hat eine Standard-Schriftgröße, die überschrieben wird, wenn sie sich in einem `sidebar`-`@container` mit einer Breite größer oder gleich `700px` befindet.

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

Das Beispiel-Ergebnis wird unten gezeigt.
Dies listet die Bedingung entweder unter Verwendung der `conditions`-Eigenschaft auf, wenn sie unterstützt wird, oder `containerName`/`containerQuery`, wenn nicht.
Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Zeichenfolgen.

{{EmbedLiveSample("Named container condition","100%","300px")}}

Der Text im Karten-`<div>` sollte sich verdoppeln, wenn die Seitenbreite `700px` erreicht, und halbieren, wenn sie wieder unter `700px` fällt.

### Mehrere Container-Bedingungen

Das untenstehende Beispiel definiert eine {{cssxref("@container")}}-Regel, die mehrere Container-Bedingungen umfasst, und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.

Beachten Sie, dass wir den HTML-, Protokollierungs- und Feature-Check-Code ausgeblendet haben, da sie im vorherigen Beispiel identisch sind.

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

Die `@container`-Deklaration hier definiert zwei Container-Bedingungen; sie wird einen Container matchen, wenn eine der Bedingungen zutrifft.

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

Das Beispiel-Ergebnis wird unten gezeigt.
Browser, die die `conditions`-Eigenschaft unterstützen, zeigen beide Bedingungen an.
Diejenigen, die es nicht tun, werden eine Notiz protokollieren, die darauf hinweist, dass mehrere Bedingungen nicht geparst werden können.

{{EmbedLiveSample("Multiple container conditions","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, und {{cssxref("container")}} Kurzschreibweise
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergröße und Abfragestilen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
