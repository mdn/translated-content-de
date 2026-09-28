---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`containerQuery`** der Schnittstelle [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) gibt den Abfrageteil der Container-Bedingung einer Container-Regel an, die genau eine Container-Bedingung definiert. Sind mehrere Container-Bedingungen vorhanden, ist der Wert die leere Zeichenfolge.

## Wert

Eine Zeichenfolge mit dem Abfrageteil der Container-Bedingung einer Container-Regel, sofern diese genau eine Container-Bedingung definiert. Der Wert muss nicht mit der ursprünglichen Zeichenfolge übereinstimmen, da er normalisiert werden kann, beispielsweise durch das Entfernen von Leerzeichen.

Wenn keine Abfrage definiert ist oder die Regel mehrere Container-Bedingungen definiert, ist der Wert die leere Zeichenfolge (`""`).

## Beschreibung

Diese Eigenschaft gibt den Abfrageteil der Container-Bedingung einer entsprechenden {{cssxref("@container")}}-At-Regel wieder, die genau eine Container-Bedingung enthält.

Beispielsweise lautet der Wert von `containerQuery` für die folgende {{cssxref("@container")}}-Regel `(width >= 700px)`:

```css
@container sidebar (width >= 700px) {
  /* Styles */
}
```

> [!NOTE]
> `containerQuery` wurde durch [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) abgelöst. Verwenden Sie diese Eigenschaft in Browsern, die sie unterstützen.
> Browser, die `conditions` nicht unterstützen, können `@container`-Definitionen mit mehreren Container-Bedingungen nicht parsen.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einer einzigen Container-Bedingung und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an. Das CSS ähnelt stark dem im `@container`-Beispiel [Benannte Container-Kontexte erstellen](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).

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

Das CSS für das Container-Element legt den Typ und den Namen des Containers fest. Die Karte hat eine Standardschriftgröße. Für den `@container` mit dem Namen `sidebar` wird sie überschrieben, wenn dessen Breite mindestens `700px` beträgt.

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

Der folgende Code ermittelt anhand seiner `id` das zum Beispiel gehörende [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) und verwendet anschließend dessen Eigenschaft `sheet`, um das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) abzurufen. Aus dem `CSSStyleSheet` rufen wir die Menge der dem Stylesheet hinzugefügten `cssRules` ab. Da wir die `@container`-Regel oben als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index „2“) in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Anschließend verwenden wir `containerRule`, um die Abfrage der Container-Bedingung zu protokollieren. Wenn der Browser `CSSContainerRule.conditions` unterstützt, zeigen wir auch den darüber verfügbaren Namen und die Abfrage an.

```js
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
}
```

#### Ergebnisse

Die Ausgabe des Beispiels ist unten zu sehen. Der Protokollbereich zeigt mithilfe von `containerQuery` die Abfrage der einzigen Container-Bedingung an. Falls unterstützt, zeigt er außerdem den Namen und die Abfrage mithilfe der Eigenschaft `conditions` an.

{{EmbedLiveSample("Basic usage","100%","320px")}}

Der Text im `<div>` der Karte sollte doppelt so groß werden, sobald die Seitenbreite `700px` erreicht, und wieder auf die Hälfte schrumpfen, wenn sie unter `700px` fällt.

### Mehrere Container-Bedingungen

Das folgende Beispiel entspricht fast vollständig dem vorherigen, mit dem Unterschied, dass das CSS mehrere Container-Bedingungen angibt.

Das HTML ist ausgeblendet, da es mit dem des vorherigen Beispiels identisch ist.

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

Die Karte hat eine Standardschriftgröße. Für den `@container` mit dem Namen `sidebar` wird sie überschrieben, wenn dessen Breite mindestens `700px` beträgt oder der Container den Namen `other-name` hat. Diese Bedingung wurde nur gewählt, um die Auswirkungen mehrerer Bedingungen zu demonstrieren; sie beeinflusst das Verhalten des Beispiels nicht.

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

Der folgende Code ermittelt anhand seiner `id` das zum Beispiel gehörende [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) und verwendet anschließend dessen Eigenschaft `sheet`, um das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) abzurufen. Aus dem `CSSStyleSheet` rufen wir die Menge der dem Stylesheet hinzugefügten `cssRules` ab. Da wir die `@container`-Regel oben als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index „2“) in `cssRules` auf die zugehörige `CSSContainerRule` zugreifen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Der Code unterscheidet sich geringfügig vom vorherigen Fall: Wenn der Browser mehrere Container-Bedingungen nicht unterstützt, ist `containerRule` `undefined`. Deshalb protokollieren wir den Wert von `containerQuery` nur, wenn der Browser mehrere Container-Bedingungen unterstützt. Der Wert ist dann die leere Zeichenfolge.

```js
if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else {
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
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

Die Ausgabe des Beispiels ist unten zu sehen. Wenn der Browser mehrere Container-Bedingungen nicht unterstützt, existiert die Regel überhaupt nicht. Andernfalls ist der Wert von `containerQuery` die leere Zeichenfolge.

{{EmbedLiveSample("Multiple container conditions","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-Kurzschreibweise {{cssxref("container")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Container-Größen- und Stilabfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
