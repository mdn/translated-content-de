---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: d3272ba3d0db5ddb0958757b49169d4662e588f8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle stellt den Namen der Containerbedingung für eine Containerregel dar, die nur eine Containerbedingung definiert. Wenn es mehrere Containerbedingungen gibt, wird der Wert auf den leeren String gesetzt.

## Wert

Ein String, der den Namen der Containerbedingung enthält, die in einer Containerregel definiert ist, jedoch nur, wenn nur eine Containerbedingung definiert ist.

Wenn kein Name definiert ist oder die Regel mehrere Containerbedingungen definiert, ist dies der leere String (`""`).

## Beschreibung

Diese Eigenschaft spiegelt den Wert des Namens in der entsprechenden {{cssxref("@container")}}-Regel wider, die nur eine Containerbedingung hat.

Zum Beispiel ist der Wert von `containerName` für das nachstehende {{cssxref("@container")}} `sidebar`:

```css
@container sidebar (width >= 700px) {
  /* Styles */
}
```

> [!NOTE]
> Der Wert `containerName` wurde durch [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) ersetzt, der in unterstützenden Browsern verwendet werden sollte.
> Browser, die `conditions` nicht unterstützen, können `@container`-Definitionen mit mehreren Containerbedingungen nicht verarbeiten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einer einzelnen Containerbedingung und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist dem im `@container`-Beispiel [Erstellen benannter Containerkontexte](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts) sehr ähnlich.

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
Diese werden durch zwei geschachtelte {{htmlelement("div")}}-Elemente dargestellt.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

Das CSS für das Containerelement gibt den Typ des Containers zusammen mit einem Namen an.
Die Karte hat eine Standard-Schriftgröße, die für den `@container` mit dem Namen `sidebar` überschrieben wird, wenn seine `width` größer oder gleich `700px` ist.

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

#### JavaScript

Der folgende Code holt das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel mithilfe seiner `id` verknüpft ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der dem Stylesheet hinzugefügten `cssRules`.
Da wir den `@container` als dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den dritten Eintrag (Index "2") in den `cssRules` verwenden.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Wir verwenden dann `containerRule`, um den Namen der ersten Containerbedingung zu protokollieren.
Wenn der Browser `CSSContainerRule.conditions` unterstützt, zeigen wir auch den Namen und die Abfrage von dort an.

```js
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
}
```

#### Ergebnisse

Das Beispielergebnis wird unten angezeigt.
Der Protokollbereich listet den Namen der einzigen Containerbedingung mithilfe von `containerName` auf.
Es zeigt auch den Namen und die Abfrage mit der Eigenschaft `conditions` an, falls unterstützt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

Beachten Sie, dass sich die Textgröße im `<div>` der Karte verdoppeln sollte, wenn die Container-`width` `700px` erreicht, und sich wieder halbiert, wenn die `width` wieder unter `700px` fällt.

### Mehrere Containerbedingungen

Das folgende Beispiel ist fast genau das gleiche wie das vorherige Beispiel, außer dass das CSS mehrere Containerbedingungen angibt.

Beachten Sie, dass wir das HTML ausgeblendet haben, da es dem im vorherigen Beispiel entspricht.

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

Die Karte hat eine Standard-Schriftgröße, die überschrieben wird für den `@container` mit dem Namen `sidebar`, wenn seine `width` größer als `700px` ist oder wenn der Container den Namen `other-name` hat.
Beachten Sie, dass diese Bedingung konstruiert wurde, um die Wirkung mehrerer Bedingungen zu demonstrieren (sie beeinflusst das Verhalten des Beispiels nicht).

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

Der folgende Code holt das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel mithilfe seiner `id` verknüpft ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der dem Stylesheet hinzugefügten `cssRules`.
Da wir den `@container` als dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den dritten Eintrag (Index "2") in den `cssRules` verwenden.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Der Code unterscheidet sich leicht vom vorherigen Fall, da wenn mehrere Containerbedingungen vom Browser nicht unterstützt werden, `containerRule` `undefined` sein wird.
Wir protokollieren daher den Wert von `containerName` nur, wenn der Browser mehrere Containerbedingungen unterstützt — es wird der leere String sein.

```js
if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else {
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
}

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
}
```

Siehe [Funktionstest](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule` für weitere Informationen/Beispiele.

#### Ergebnisse

Das Beispielergebnis wird unten angezeigt.
Beachten Sie, dass die Regel überhaupt nicht existiert, wenn der Browser keine Unterstützung für mehrere Containerbedingungen bietet.
Wenn dies der Fall ist, ist der Wert von `containerName` der leere String.

{{EmbedLiveSample("Multiple container conditions","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise-Eigenschaft
- [CSS-Einschluss-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
