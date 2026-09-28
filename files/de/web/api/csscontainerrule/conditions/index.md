---
title: "CSSContainerRule: conditions-Eigenschaft"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditions`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle stellt eine zugehörige CSS-{{cssxref("@container")}}-At-Regel als Array von Objekten dar, wobei jedes Objekt eine einzelne Container-Bedingung repräsentiert.

## Wert

Ein Array von Objekten, wobei jedes Objekt folgende Form hat:

```js
({ name: "<container-name>", query: "<container-query>" });
```

Entweder `name` oder `query` darf eine leere Zeichenfolge sein, aber nicht beide.

## Beschreibung

Die **`conditions`**-Eigenschaft stellt eine zugehörige CSS-{{cssxref("@container")}}-At-Regel als Array von Objekten dar.

Jedes Objekt stellt eine Container-Bedingung mit den Zeichenfolgen-Eigenschaften `name` und `query` dar. Beide können eine leere Zeichenfolge sein, wenn sie nicht definiert sind. `name` bezeichnet den Namen eines Containers, und die Zeichenfolge `query` bezeichnet die Feature-Tests, die erfüllt sein müssen, damit die jeweilige Container-Bedingung zutrifft.

Betrachten Sie beispielsweise die folgende {{cssxref("@container")}}-At-Regel:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

`conditions` wäre dann ein Array wie dieses:

```js
[
  { name: "sidebar", query: "(width >= 700px)" },
  { name: "", query: "(height >= 400px)" },
];
```

## Beispiele

Siehe auch die [Beispiele](/de/docs/Web/API/CSSContainerRule#examples) zu `CSSContainerRule`.

### Grundlegende Verwendung

Das Beispiel zeigt, wie mehrere Container-Bedingungen in der `conditions`-Eigenschaft dargestellt werden.

Der Code für die Protokollausgabe ist ausgeblendet, da er hier nicht relevant ist.

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

Zunächst definieren wir das HTML für eine `card` innerhalb eines `post`. Diese werden durch zwei ineinander verschachtelte {{htmlelement("div")}}-Elemente dargestellt.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Das CSS für das Container-Element legt den Typ des Containers fest und kann auch einen Namen angeben. Die Karte hat eine Standardschriftgröße, die überschrieben wird, wenn sie sich in einem `sidebar`-`@container` mit einer Breite von mindestens `700px` oder in einem Container namens `other-name` befindet. Diese Bedingung dient lediglich dazu, die Darstellung mehrerer Bedingungen zu veranschaulichen (`other-name` bewirkt hier tatsächlich nichts).

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

Der folgende Code ruft das dem Beispiel zugeordnete [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) anhand seiner `id` ab und verwendet dann dessen `sheet`-Eigenschaft, um das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) abzurufen. Aus dem `CSSStyleSheet` rufen wir die darin enthaltenen `cssRules` ab. Da wir die `@container`-At-Regel oben als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index „2“) in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Anschließend verwenden wir `containerRule`, um den Wert der `conditions`-Eigenschaft zu protokollieren.

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
> In Browsern, die `conditions` nicht unterstützen, können Sie möglicherweise [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName) und [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery) verwenden, sofern die `@container`-At-Regel nur eine Container-Bedingung angibt.
> Weitere Informationen finden Sie im Beispiel zum [Testen der Unterstützung](/de/docs/Web/API/CSSContainerRule#feature_testing) unter `CSSContainerRule`.

#### Ergebnis

Die Ausgabe des Beispiels ist unten zu sehen.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Shorthand-Eigenschaft {{cssxref("container")}}
- [CSS-Modul für Containment](/de/docs/Web/CSS/Guides/Containment)
- [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Container-Größen- und Style-Queries verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
