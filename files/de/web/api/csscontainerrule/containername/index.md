---
title: "CSSContainerRule: Eigenschaft containerName"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`containerName`** des Interfaces [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) gibt den Namen der Container-Bedingung einer Container-Regel an, die nur eine Container-Bedingung definiert. Wenn mehrere Container-Bedingungen vorliegen, ist der Wert die leere Zeichenfolge.

## Wert

Eine Zeichenfolge mit dem Namen der in einer Container-Regel definierten Container-Bedingung, sofern die Regel genau eine Container-Bedingung definiert.

Wenn kein Name definiert ist oder die Regel mehrere Container-Bedingungen definiert, ist der Wert die leere Zeichenfolge (`""`).

## Beschreibung

Diese Eigenschaft gibt den Namen der Container-Bedingung einer entsprechenden {{cssxref("@container")}}-At-Regel mit genau einer Container-Bedingung wieder.

Für die folgende {{cssxref("@container")}}-At-Regel ist der Wert von `containerName` beispielsweise `sidebar`:

```css
@container sidebar (width >= 700px) {
  /* Styles */
}
```

> [!NOTE]
> `containerName` wurde durch [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) abgelöst. Verwenden Sie `conditions` in Browsern, die diese Eigenschaft unterstützen.
> Browser, die `conditions` nicht unterstützen, können `@container`-Definitionen mit mehreren Container-Bedingungen nicht parsen.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einer einzigen Container-Bedingung und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an. Das CSS ähnelt stark dem `@container`-Beispiel [Benannte Container-Kontexte erstellen](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).

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

Das CSS für das Container-Element legt den Typ und den Namen des Containers fest. Die Karte hat eine Standardschriftgröße, die für den `@container` mit dem Namen `sidebar` überschrieben wird, wenn dessen `width` mindestens `700px` beträgt.

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

Der folgende Code ermittelt über die `id` das zum Beispiel gehörende [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) und greift anschließend über dessen Eigenschaft `sheet` auf das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zu. Aus dem `CSSStyleSheet` erhalten wir die Menge der `cssRules`, die dem Stylesheet hinzugefügt wurden. Da wir `@container` oben als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index „2“) in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Anschließend verwenden wir `containerRule`, um den Namen der ersten Container-Bedingung zu protokollieren. Wenn der Browser `CSSContainerRule.conditions` unterstützt, zeigen wir auch den darüber verfügbaren Namen und die Abfrage an.

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

Die Ausgabe des Beispiels ist unten zu sehen. Im Protokollbereich wird der Name der einzigen Container-Bedingung mithilfe von `containerName` aufgeführt. Sofern unterstützt, werden auch der Name und die Abfrage über die Eigenschaft `conditions` angezeigt.

{{EmbedLiveSample("Basic usage","100%","300px")}}

Beachten Sie, dass sich die Schriftgröße des Textes im `<div>` der Karte verdoppeln sollte, sobald die `width` des Containers `700px` erreicht. Sinkt die `width` wieder unter `700px`, halbiert sich die Schriftgröße erneut.

### Mehrere Container-Bedingungen

Das folgende Beispiel ist nahezu identisch mit dem vorherigen, allerdings gibt das CSS mehrere Container-Bedingungen an.

Das HTML ist ausgeblendet, da es mit dem des vorherigen Beispiels übereinstimmt.

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

Die Karte hat eine Standardschriftgröße, die für den `@container` mit dem Namen `sidebar` überschrieben wird, wenn dessen `width` größer als `700px` ist oder wenn der Container den Namen `other-name` hat. Diese Bedingung dient nur dazu, die Wirkung mehrerer Bedingungen zu veranschaulichen; sie beeinflusst das Verhalten des Beispiels nicht.

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

Der folgende Code ermittelt über die `id` das zum Beispiel gehörende [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) und greift anschließend über dessen Eigenschaft `sheet` auf das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zu. Aus dem `CSSStyleSheet` erhalten wir die Menge der `cssRules`, die dem Stylesheet hinzugefügt wurden. Da wir `@container` oben als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index „2“) in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Der Code unterscheidet sich geringfügig vom vorherigen Beispiel: Wenn der Browser mehrere Container-Bedingungen nicht unterstützt, ist `containerRule` `undefined`. Daher protokollieren wir den Wert von `containerName` nur, wenn der Browser mehrere Container-Bedingungen unterstützt. Der Wert ist dann die leere Zeichenfolge.

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

Weitere Informationen und Beispiele finden Sie unter [Feature-Erkennung](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule`.

#### Ergebnisse

Die Ausgabe des Beispiels ist unten zu sehen. Beachten Sie, dass die Regel überhaupt nicht vorhanden ist, wenn der Browser mehrere Container-Bedingungen nicht unterstützt. Andernfalls ist der Wert von `containerName` die leere Zeichenfolge.

{{EmbedLiveSample("Multiple container conditions","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Kurzschreibweise {{cssxref("container")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Containergrößen- und Stilabfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
