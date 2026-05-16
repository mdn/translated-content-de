---
title: "CSSContainerRule: conditions-Eigenschaft"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **`conditions`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle repräsentiert eine zugehörige CSS-{{cssxref("@container")}}-Regel als ein Array von Objekten, wobei jedes Objekt eine einzelne Containerbedingung darstellt.

## Wert

Ein Array von Objekten, wobei jedes Objekt die folgende Form hat:

```js
({ name: "<container-name>", query: "<container-query>" });
```

Entweder `name` oder `query` kann ein leerer String sein, aber nicht beides.

## Beschreibung

Die **`conditions`**-Eigenschaft repräsentiert eine zugehörige CSS-{{cssxref("@container")}}-Regel als ein Array von Objekten.

Jedes Objekt repräsentiert eine Containerbedingung als eine Zeichenfolgen-Eigenschaft `name` und eine Zeichenfolgen-Eigenschaft `query`, wobei eine von beiden ein leerer String sein kann, wenn sie nicht definiert ist. `Name` repräsentiert den Namen eines Containers und der `query`-String repräsentiert die Menge an Funktionstests, die wahr sein müssen, damit die jeweilige Containerbedingung zutrifft.

Zum Beispiel, gegeben die folgende {{cssxref("@container")}}:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

Die `conditions` wären ein Array wie folgt:

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

Zunächst definieren wir das HTML für eine `card`, die in einem `post` enthalten ist. Diese werden durch zwei verschachtelte {{htmlelement("div")}}-Elemente dargestellt.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Das CSS für das Containerelement gibt den Typ des Containers an und kann auch einen Namen angeben. Die Karte hat eine Standard-Schriftgröße, die überschrieben wird, wenn sie sich in einem `sidebar`-`@container` befindet, dessen Breite größer oder gleich `700px` ist, oder wenn sie sich in einem Container namens `other-name` befindet. Beachten Sie, dass diese Bedingung konstruiert ist, um zu demonstrieren, wie mehrere Bedingungen dargestellt werden (`other-name` hat eigentlich keine Funktion).

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

Der untenstehende Code ruft das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab, das mit dem Beispiel über seine `id` verknüpft ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` entnehmen wir die Reihe der der Datei hinzugefügten `cssRules`. Da wir das `@container` als dritte Regel hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` über den dritten Eintrag (Index „2“) in den `cssRules` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Anschließend verwenden wir die `containerRule`, um den Wert der `conditions`-Eigenschaft zu protokollieren.

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
> In Browsern, die `conditions` nicht unterstützen, können Sie möglicherweise [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) und [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) verwenden, vorausgesetzt, dass das `@container` nur eine Containerbedingung angibt. Für weitere Informationen siehe das [Feature testing](/de/docs/Web/API/CSSContainerRule#feature_testing) Beispiel in `CSSContainerRule`.

#### Ergebnisse

Das Beispielergebnis wird unten gezeigt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("container")}}-Kurzschreibweise
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
