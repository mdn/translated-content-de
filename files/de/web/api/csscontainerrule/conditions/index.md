---
title: "CSSContainerRule: conditions-Eigenschaft"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditions`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle stellt eine zugehörige CSS-{{cssxref("@container")}}-At-Regel als ein Array von Objekten dar, wobei jedes Objekt eine einzelne Container-Bedingung repräsentiert.

## Wert

Ein Array von Objekten, bei dem jedes Objekt die folgende Form hat:

```js
({ name: "<container-name>", query: "<container-query>" });
```

Entweder `name` oder `query` kann ein leerer String sein, jedoch nicht beide.

## Beschreibung

Die **`conditions`**-Eigenschaft stellt eine zugehörige CSS-{{cssxref("@container")}}-At-Regel als ein Array von Objekten dar.

Jedes Objekt repräsentiert eine Container-Bedingung als eine `name`-String-Eigenschaft und eine `query`-String-Eigenschaft, von denen eine, falls nicht definiert, der leere String sein kann.
Der `name` repräsentiert den Namen eines Containers, und der `query`-String repräsentiert die Menge an Feature-Tests, die wahr sein müssen, damit die bestimmte Container-Bedingung übereinstimmt.

Zum Beispiel, gegeben den folgenden {{cssxref("@container")}}:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

Die `conditions` wäre ein Array wie dieses:

```js
[
  { name: "sidebar", query: "(width >= 700px)" },
  { name: "", query: "(height >= 400px)" },
];
```

## Beispiele

Siehe auch [Beispiele](/de/docs/Web/API/CSSContainerRule#examples) in `CSSContainerRule`.

### Grundlegende Verwendung

Das Beispiel zeigt, wie mehrere Container-Bedingungen in der `conditions`-Eigenschaft dargestellt werden.

Beachten Sie, dass wir den Logging-Code ausgeblendet haben, da er nicht relevant ist.

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

Das CSS für das Containerelement gibt den Typ des Containers an und kann auch einen Namen festlegen.
Die Karte hat eine standardmäßige Schriftgröße, die überschrieben wird, wenn sie sich in einem `sidebar` `@container` befindet, dessen Breite größer oder gleich `700px` ist, oder wenn sie sich in einem Container mit dem Namen `other-name` befindet.
Beachten Sie, dass diese Bedingung konstruiert wurde, um zu zeigen, wie mehrere Bedingungen dargestellt werden (`other-name` macht tatsächlich nichts).

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

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das dem Beispiel über seine `id` zugeordnet ist, und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Von dem `StyleSheet` erhalten wir die Menge der dem Blatt hinzugefügten `cssRules`.
Da wir das `@container` als die dritte Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem dritten Eintrag (Index "2") in den `cssRules` erreichen.

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
> In Browsern, die `conditions` nicht unterstützen, können Sie möglicherweise [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) und [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) verwenden, vorausgesetzt, dass der `@container` nur eine Container-Bedingung spezifiziert.
> Weitere Informationen finden Sie im Beispiel [Feature testing](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule`.

#### Ergebnisse

Das Beispielergebnis wird unten gezeigt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("container")}}-Kurzschreibweise
- [CSS-Einschlussmodul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
