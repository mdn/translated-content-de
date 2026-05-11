---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: d3272ba3d0db5ddb0958757b49169d4662e588f8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle repräsentiert den Abfrage-Teil der Container-Bedingung für eine Container-Regel, die nur eine Container-Bedingung definiert.
Wenn es mehrere Container-Bedingungen gibt, wird der Wert auf den leeren String gesetzt.

## Wert

Ein String, der den Abfrage-Teil der Container-Bedingung enthält, die in einer Container-Regel definiert ist, jedoch nur, wenn nur eine Container-Bedingung definiert ist.
Beachten Sie, dass der Wert möglicherweise nicht identisch mit dem ursprünglichen String ist, da Normalisierungen wie das Entfernen von Leerzeichen erfolgen können.

Wenn keine Abfrage definiert ist oder die Regel mehrere Container-Bedingungen definiert, ist dies der leere String (`""`).

## Beschreibung

Diese Eigenschaft spiegelt den Wert des Abfrage-Teils der Container-Bedingung in einer entsprechenden {{cssxref("@container")}}-Regel wider, die nur eine Container-Bedingung hat.

Zum Beispiel ist der Wert von `containerQuery` für die untenstehende {{cssxref("@container")}} `(width >= 700px)`:

```css
@container sidebar (width >= 700px) {
  /* Styles */
}
```

> [!NOTE]
> Der Wert von `containerQuery` wurde durch [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) ersetzt, der in unterstützenden Browsern verwendet werden sollte.
> Browser, die `conditions` nicht unterstützen, können `@container`-Definitionen mit mehreren Container-Bedingungen nicht parsen.

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel definiert eine {{cssxref("@container")}}-Regel mit einer einzigen Container-Bedingung und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist dem in der `@container`-Anleitung [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts) sehr ähnlich.

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

Das CSS für das Containerelement gibt den Typ des Containers zusammen mit einem Namen an.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn seine Breite größer oder gleich `700px` ist.

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

Der folgende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel unter Verwendung seiner `id` verknüpft ist, und verwendet dann seine Eigenschaft `sheet`, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu bekommen.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Stylesheet hinzugefügt wurden.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem dritten Eintrag (Index "2") in den `cssRules` aufrufen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Danach verwenden wir `containerRule`, um die Abfrage der Container-Bedingung zu protokollieren.
Wenn `CSSContainerRule.conditions` im Browser unterstützt wird, zeigen wir auch den Namen und die Abfrage davon an.

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

Das Beispielergebnis wird unten gezeigt.
Der Protokollabschnitt listet die Abfrage der einzigen Container-Bedingung mit `containerQuery` auf.
Er zeigt auch den Namen und die Abfrage mit der `conditions`-Eigenschaft, falls unterstützt, an.

{{EmbedLiveSample("Basic usage","100%","320px")}}

Der Text im `<div>` der Karte sollte doppelt so groß werden, wenn die Seitenbreite `700px` erreicht und halb so groß werden, wenn sie wieder unter `700px` fällt.

### Mehrere Container-Bedingungen

Das Beispiel unten ist fast identisch mit dem vorherigen Beispiel, außer dass das CSS mehrere Container-Bedingungen angibt.

Beachten Sie, dass wir das HTML ausgeblendet haben, da es mit dem im vorherigen Beispiel identisch ist.

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

Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn seine Breite größer oder gleich `700px` ist oder wenn der Container den Namen `other-name` hat.
Beachten Sie, dass diese Bedingung konstruiert ist, um die Auswirkung mehrerer Bedingungen zu demonstrieren (sie hat keinen Einfluss auf das Verhalten des Beispiels).

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

Der folgende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel unter Verwendung seiner `id` verknüpft ist, und verwendet dann seine Eigenschaft `sheet`, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu bekommen.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Stylesheet hinzugefügt wurden.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem dritten Eintrag (Index "2") in den `cssRules` aufrufen.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

Der Code unterscheidet sich leicht von dem vorherigen Fall, weil, wenn mehrere Container-Bedingungen nicht vom Browser unterstützt werden, die `containerRule` `undefined` ist.
Wir protokollieren daher nur den Wert von `containerQuery`, wenn der Browser mehrere Container-Bedingungen unterstützt — es wird der leere String sein.

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

Siehe [Feature-Testing](/de/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule` für weitere Informationen/Beispiele.

#### Ergebnisse

Das Beispielergebnis wird unten gezeigt.
Beachten Sie, dass die Regel überhaupt nicht existiert, wenn der Browser keine mehreren Container-Bedingungen unterstützt.
Wenn doch, dann ist der Wert von `containerQuery` der leere String.

{{EmbedLiveSample("Multiple container conditions","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise-Eigenschaft
- [CSS-Konzeptionsmodul](/de/docs/Web/CSS/Guides/Containment)
- [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
