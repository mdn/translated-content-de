---
title: "CSSContainerRule: Bedingungen-Eigenschaft"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditions`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle repräsentiert eine zugehörige CSS {{cssxref("@container")}}-at-Regel als ein Array von Objekten, wobei jedes Objekt eine einzelne Containerbedingung darstellt.

## Wert

Ein Array von Objekten, bei dem jedes Objekt die folgende Form hat:

```js
({ name: "<container-name>", query: "<container-query>" });
```

Entweder `name` oder `query` kann der leere String sein, aber nicht beide.

## Beschreibung

Die **`conditions`**-Eigenschaft repräsentiert eine zugehörige CSS {{cssxref("@container")}}-at-Regel als ein Array von Objekten.

Jedes Objekt repräsentiert eine Containerbedingung als eine `name`-String-Eigenschaft und eine `query`-String-Eigenschaft, die jeweils der leere String sein kann, wenn nicht definiert. Der `name` repräsentiert den Namen eines Containers, und der `query`-String repräsentiert die Menge der Feature-Tests, die wahr sein müssen, damit die spezifische Containerbedingung übereinstimmt.

Zum Beispiel, gegeben die folgende {{cssxref("@container")}}:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

Die `conditions` wären ein Array wie dieses:

```js
[
  { name: "sidebar", query: "(width >= 700px)" },
  { name: "", query: "(height >= 400px)" },
];
```

## Beispiele

Siehe auch [Beispiele](/de/docs/Web/API/CSSContainerRule#examples) in `CSSContainerRule`.

### Grundlegende Verwendung

Das Beispiel zeigt, wie mehrere Containerbedingungen in der `conditions`-Eigenschaft dargestellt werden.

Beachten Sie, dass wir den Logging-Code ausgeblendet haben, da dieser nicht relevant ist.

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

Zuerst definieren wir das HTML für eine `card`, die innerhalb eines `post` enthalten ist. Diese werden durch zwei verschachtelte {{htmlelement("div")}}-Elemente dargestellt.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Das CSS für das Containerelement spezifiziert den Typ des Containers und kann auch einen Namen angeben. Die Karte hat eine Standard-Schriftgröße, die überschrieben wird, wenn sie sich innerhalb eines `sidebar`-`@container` befindet, dessen Breite größer oder gleich `700px` ist, oder wenn sie sich in einem Container mit dem Namen `other-name` befindet. Beachten Sie, dass diese Bedingung konstruiert ist, um zu demonstrieren, wie mehrere Bedingungen dargestellt werden (`other-name` tut eigentlich nichts).

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

  @container sidebar (width >= 700px), other-name {
    .card {
      font-size: 2em;
    }
  }
</style>
```

#### JavaScript

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel durch seine `id` assoziiert ist, und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` bekommen wir die Menge der `cssRules`, die dem Blatt hinzugefügt wurden. Da wir die `@container` als dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den dritten Eintrag (Index "2") in den `cssRules` verwenden.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Wir verwenden dann die `containerRule`, um den Wert der `conditions`-Eigenschaft zu protokollieren.

```js
if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
} else {
  log("CSSContainerRule.conditions is not supported.");
}
```

> [!NOTE]
> In Browsern, die `conditions` nicht unterstützen, können Sie möglicherweise [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) und [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) verwenden, sofern die `@container` nur eine Containerbedingung angibt. Für weitere Informationen siehe das Beispiel [Feature Testing](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule`.

#### Ergebnisse

Die Beispieldarstellung wird unten gezeigt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Shorthand-Eigenschaft
- [CSS Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
