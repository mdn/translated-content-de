---
title: "CSSContainerRule: containerName Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`** Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) Schnittstelle repräsentiert den Containernamen der zugehörigen CSS {{cssxref("@container")}} At-Regel.

Zum Beispiel ist der Wert von `containerName` für die untenstehende {{cssxref("@container")}} Regel `sidebar`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/Reference/Properties/container-name) der mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) verknüpften {{cssxref("@container")}} enthält. Wenn das `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das untenstehende Beispiel definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an. Das CSS ist dem im `@container` Beispiel [Erstellen von benannten Container-Kontexten](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts) sehr ähnlich.

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Store reference to log list
const logList = document.querySelector("#log ul");
// Function to log data from underlying source
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

Zuerst definieren wir das HTML für eine `card` (`<div>`) innerhalb eines `post`.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Container-Element spezifiziert den Typ des Containers und kann auch einen Namen angeben. Die Card hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Breite größer als 700px ist.

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

Der folgende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel mittels seiner `id` verknüpft ist, und verwendet dann seine `sheet` Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum StyleSheet hinzugefügt wurden. Da wir das `@container` als die dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den dritten Eintrag (Index "2") in den `cssRules` verwenden. Zum Schluss protokollieren wir den Container-Namen und die Abfrageeigenschaften (der Code, der das Protokollieren übernimmt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das Beispiel-Ausgabe wird unten gezeigt. Der Protokollabschnitt listet den Containernamen-String auf. Der Titel im Card-Bereich sollte sich verdoppeln, wenn die Breite der Seite über 700px beträgt.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise
- [CSS-Kapselungsmodul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Abfragen nach Größe und Stil](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
