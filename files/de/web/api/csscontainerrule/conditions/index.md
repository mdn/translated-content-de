---
title: "CSSContainerRule: conditions-Eigenschaft"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
l10n:
  sourceCommit: d3272ba3d0db5ddb0958757b49169d4662e588f8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditions`**-Eigenschaft des [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) Interfaces stellt eine zugehörige CSS {{cssxref("@container")}}-At-Regel als ein Array von Objekten dar, wobei jedes Objekt eine einzelne Containerbedingung repräsentiert.

## Wert

Ein Array von Objekten, wobei jedes Objekt die Form hat:

```js
{ name: "<container-name>", query: "<container-query>" };
```

Entweder `name` oder `query` kann der leere String sein, aber nicht beide.

## Beschreibung

Die **`conditions`**-Eigenschaft stellt eine zugehörige CSS {{cssxref("@container")}}-At-Regel als ein Array von Objekten dar.

Jedes Objekt stellt eine Containerbedingung als eine `name`-String-Eigenschaft und eine `query`-String-Eigenschaft dar, von denen eine leer sein kann, wenn sie nicht definiert ist.
Der `name` repräsentiert den Namen eines Containers, und der `query`-String repräsentiert die Menge an Funktionstests, die wahr sein müssen, damit die spezielle Containerbedingung übereinstimmt.

Zum Beispiel, gegeben den folgenden {{cssxref("@container")}}:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

Die `conditions` würden ein Array wie dieses sein:

```js
[
  { name: "sidebar", query: "(width >= 700px)" },
  { name: "", query: "(height >= 400px)" },
];
```

## Beispiele

Siehe auch [Beispiele](/de/docs/Web/API/CSSContainerRule#examples) in `CSSContainerRule`.

### Grundlegende Nutzung

Das Beispiel zeigt, wie mehrere Containerbedingungen in der `conditions`-Eigenschaft dargestellt werden.

Beachten Sie, dass wir den Protokollierungscode versteckt haben, da er nicht relevant ist.

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

Das CSS für das Container-Element gibt den Typ des Containers an und kann auch einen Namen spezifizieren.
Die Karte hat eine standardmäßige Schriftgröße, die überschrieben wird, wenn sie innerhalb eines `sidebar`-`@container` ist und dessen Breite größer oder gleich `700px` ist, oder wenn sie sich in einem Container mit dem Namen `other-name` befindet.
Beachten Sie, dass diese Bedingung erfunden ist, um zu demonstrieren, wie mehrere Bedingungen dargestellt werden (`other-name` tut eigentlich nichts).

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

Der unten stehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel verbunden ist, unter Verwendung seiner `id`, und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Von dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Stylesheet hinzugefügt wurden.
Da wir das `@container` als dritte Regel hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` durch den dritten Eintrag (Index "2") in den `cssRules` zugreifen.

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
> In Browsern, die `conditions` nicht unterstützen, können Sie möglicherweise [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) und [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) verwenden, vorausgesetzt, dass das `@container` nur eine Containerbedingung spezifiziert.
> Für weitere Informationen siehe das Beispiel [Feature Testing](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule`.

#### Ergebnisse

Das Beispiel-Ergebnis wird unten angezeigt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzform-Eigenschaft
- [CSS Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
