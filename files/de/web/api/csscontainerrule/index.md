---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: d3272ba3d0db5ddb0958757b49169d4662e588f8
---

{{ APIRef("CSSOM") }}

Das **`CSSContainerRule`**-Interface repräsentiert eine einzelne CSS-{{cssxref("@container")}}-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) {{ReadOnlyInline}}
  - : Gibt ein Array von Objekten zurück, von denen jedes eine Container-Bedingung in einer {{cssxref("@container")}}-Regel angibt.
    Die Objekte haben die String-Eigenschaft `name` und die String-Eigenschaft `query`, von denen jede der leere String sein kann, wenn sie nicht definiert ist.
    Der `name` stellt den Namen eines Containers dar, und die `query` repräsentiert die Menge an Feature-Tests, die wahr sein müssen, damit die jeweilige Bedingung zutrifft.
- [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der Container-Bedingung eines {{cssxref("@container")}} darstellt, wenn es nur eine Bedingung gibt.
    Wenn es mehrere Container-Bedingungen gibt oder wenn nur eine Bedingung vorhanden ist, die keinen Namen angibt, ist dies der leere String.
- [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Container-Abfrage für die Container-Bedingung eines {{cssxref("@container")}} darstellt, wenn es nur eine Bedingung gibt.
    Dies repräsentiert eine Reihe von Feature-Tests, die alle wahr sein müssen, damit die Bedingung zutrifft.
    Wenn es mehrere Container-Bedingungen gibt oder wenn nur eine Bedingung vorhanden ist, die keine Abfrage angibt, ist dies der leere String.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beschreibung

Ein `CSSContainerRule`-Objekt repräsentiert eine {{cssxref("@container")}}-Regel.

Eine `@container`-Regel definiert eine oder mehrere durch Komma getrennte _Container-Bedingungen_.
Jede Container-Bedingung besteht aus einem "name" und/oder einem "query", wobei der "name" den Namen des Containers angibt, auf den sich die Bedingung bezieht, und der "query" eine oder mehrere logisch kombinierte Feature-Checks für die Eigenschaften eines Containers spezifiziert.
Wenn eine der Container-Bedingungen auf einen Container zutrifft, werden die angegebenen Stile angewendet.

> [!NOTE]
> Die Unterstützung für mehrere Container-Bedingungen wird durch den `conditions`-Schlüssel in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle angezeigt (frühere Versionen der Spezifikation erlaubten nur eine einzelne Container-Bedingung).
> Dies wirkt sich darauf aus, wie `CSSContainerRule` und `@container` verwendet werden.

Ein anschauliches Beispiel, das aus drei Bedingungen besteht, ist unten gezeigt.
Dies passt zu einem Container namens `main-content`, wenn seine Breite zwischen `600px` und `800px` liegt, zu jedem Container, der eine Höhe größer als `800px` hat, oder zu jedem Container namens `other-content`.

```css
@container main-content (width > 600px) and (width < 800px), (height > 800px), other-content {
  /* Apply styles */
}
```

In unterstützenden Browsern stellt die `CSSContainerRule.conditions`-Eigenschaft eine `@container` als ein Array von Objekten dar, von denen jedes eine einzelne Container-Bedingung definiert.
Die Objekte haben die Eigenschaften `name` und `query`, die der leere String (`""`) sein können.
Die `conditions`-Eigenschaft für das obige `@container`-Beispiel würde so aussehen:

```js
[
  { name: "main-content", query: "(width > 600px) and (width < 800px)" },
  { name: "", query: "(height > 800px)" },
  { name: "other-content", query: "" },
];
```

Die Eigenschaften `containerName` und `containerQuery` stammen aus der Zeit vor der Unterstützung von Container-Regeln mit mehreren Container-Bedingungen.
Für eine Container-Regel mit einer _einzelnen Container-Bedingung_ enthalten sie den Namen und die Abfrage dieser Bedingung (spiegeln die `name`- und `query`-Eigenschaften des Objekts im `conditions`-Array wider).
Für eine Container-Regel mit mehreren Bedingungen sind beide auf den leeren String gesetzt.

Es ist zu beachten, dass Browser, die die `conditions`-Eigenschaft nicht unterstützen, nur Container-Regeln mit einer einzigen Container-Bedingung zulassen.
Ein `@container` mit mehreren Container-Bedingungen wird nicht geparst und es wird keine entsprechende `CSSContainerRule` erstellt.

Sie können auch den Text für die gesamte Bedingung mit [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) abrufen.

## Beispiele

### Feature-Testing

Feature-Testing kann kompliziert sein, da Sie Fälle behandeln müssen, in denen `CSSContainerRule` oder `CSSContainerRule.conditions` nicht unterstützt werden, und auch den spezifischen Fall, in dem `conditions` nicht unterstützt wird, aber mehrere Container-Bedingungen im CSS angegeben wurden.

Dieser Code zeigt, wie Sie dies tun können, vorausgesetzt, dass Sie bereits `containerRule`, eine `CSSContainerRule`-Instanz, die einer auf der Seite im CSS definierten {{cssxref("@container")}}-Regel entspricht, erhalten haben (das nächste Beispiel zeigt, wie Sie `containerRule` möglicherweise erhalten).

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

Beachten Sie, dass wir, wenn es definiert ist, es vorziehen, die Informationen in `CSSContainerRule.conditions` anstelle von `containerName` und `containerQuery` zu verwenden.

### Ungenannte Container-Bedingung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel, die eine einzelne Container-Bedingung ohne Namen hat und zeigt die Eigenschaften der zugehörigen `CSSContainerRule`.
Das CSS ist das gleiche wie im `@container`-Beispiel [Festlegen von Stilen basierend auf der Größe eines Containers](/de/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

Es ist zu beachten, dass unser Code zum Protokollieren der Ergebnisse nicht besonders relevant ist, daher wurde er ausgeblendet.

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

Das CSS für das Beispiel ist unten gezeigt.
Das CSS spezifiziert zuerst den {{cssxref("container-type")}} für das Containerelement (`post`).
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
> Die Stile in diesen Beispielen sind in einem Inline-HTML-{{htmlelement("style")}}-Element mit einer `id` definiert, um es dem Code zu erleichtern, das richtige Stylesheet zu finden.
> Sie könnten auch das richtige Stylesheet für jedes Beispiel ermitteln, indem Sie gegen die Anzahl der in dem Dokument enthaltenen Stylesheets indizieren, das heißt gegen die `length`-Eigenschaft des `styleSheets`-Eigenschaft (zum Beispiel `document.styleSheets[document.styleSheets.length-1]`), aber das macht das Herausfinden des richtigen Sheets für jedes Beispiel komplizierter.

#### JavaScript

Der folgende Code erhält das mit dem Beispiel verknüpfte [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) mit Hilfe seiner `id` und nutzt dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) abzurufen.
Von dem `StyleSheet` erhalten wir die Menge an `cssRules`, die dem Sheet hinzugefügt wurden.
Da wir das `@container` als zweite Regel hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` mit dem zweiten Eintrag, mit dem Index "1" in den `cssRules` zugreifen.

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

Das Beispielergebnis ist unten gezeigt.
Dies listet die Bedingung entweder mithilfe der `conditions`-Eigenschaft auf, wenn diese unterstützt wird, oder `containerName`/`containerQuery`, wenn nicht.

{{EmbedLiveSample("Unnamed container condition","100%","300px")}}

Es ist zu beachten, dass sich die `background-color` der Karte ändern sollte, wenn sich die Containerbreite kleiner oder größer als `650px` ändert.

### Benannte Container-Bedingung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel, die einen Namen und eine Abfrage enthält und die Eigenschaften der zugehörigen `CSSContainerRule` anzeigt.

Das CSS ist dem im `@container`-Beispiel [Erstellen von benannten Container-Kontexten](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts) sehr ähnlich.
Es ist zu beachten, dass wir das HTML, den Protokollierungscode und den Feature-Überprüfungscode ausgeblendet haben, da sie im vorherigen Beispiel gleich sind.

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

In diesem Beispiel gibt die {{cssxref("@container")}} sowohl einen Container-Namen, `sidebar`, als auch den Container-Typ an.
Die Karte hat eine Standard-Schriftgröße, die überschrieben wird, wenn sie sich in einem `sidebar` `@container` befindet, wenn dessen Breite größer oder gleich `700px` ist.

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

Das Beispielergebnis ist unten gezeigt.
Dies listet die Bedingung entweder mithilfe der `conditions`-Eigenschaft auf, wenn diese unterstützt wird, oder `containerName`/`containerQuery`, wenn nicht.
Der `conditionText` wird ebenfalls protokolliert und zeigt die Kombination dieser beiden Strings an.

{{EmbedLiveSample("Named container condition","100%","300px")}}

Der Text im `div` der Karte sollte sich verdoppeln, wenn die Seitenbreite `700px` erreicht, und sich halbieren, wenn sie wieder unter `700px` fällt.

### Mehrere Container-Bedingungen

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel, die mehrere Container-Bedingungen umfasst, und zeigt die Eigenschaften der zugehörigen `CSSContainerRule` an.

Es ist zu beachten, dass wir das HTML, den Protokollierungscode und den Feature-Überprüfungscode ausgeblendet haben, da sie im vorherigen Beispiel gleich sind.

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

Die `@container`-Deklaration hier definiert zwei Container-Bedingungen; sie wird mit einem Container übereinstimmen, wenn eine der Bedingungen wahr ist.

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

Das Beispielergebnis ist unten gezeigt.
Browser, die die `conditions`-Eigenschaft unterstützen, zeigen beide Bedingungen an.
Diejenigen, die dies nicht tun, protokollieren eine Notiz, dass mehrere Bedingungen nicht geparst werden können.

{{EmbedLiveSample("Multiple container conditions","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}} und {{cssxref("container")}} Kurzschreibweise Eigenschaften
- [CSS Containment Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
