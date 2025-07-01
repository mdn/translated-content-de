---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle repräsentiert den Containernamen der zugehörigen CSS {{cssxref("@container")}}-At-Regel.

Zum Beispiel ist der Wert von `containerName` für die folgende {{cssxref("@container")}}-Regel `sidebar`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/container-name) des mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) verbundenen {{cssxref("@container")}} enthält. Wenn der `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an. Das CSS ist dem im `@container`-Beispiel [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

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

Zuerst definieren wir das HTML für eine `card` (`<div>`), die sich innerhalb eines `post` befindet.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Containerelement spezifiziert den Typ des Containers und kann auch einen Namen festlegen. Die Karte hat eine Standard-Schriftgröße, die für den `@container` namens `sidebar` überschrieben wird, wenn die Breite größer als 700px ist.

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

Der folgende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel über seine `id` verknüpft ist, und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge an `cssRules`, die dem Stylesheet hinzugefügt wurden. Da wir den `@container` als dritte Regel hinzugefügt haben, können wir über den dritten Eintrag (Index "2") in den `cssRules` auf die zugehörige `CSSContainerRule` zugreifen. Schließlich protokollieren wir den Containernamen und die Query-Eigenschaften (der Code, der das Protokollieren durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das folgende Beispiel zeigt die Ausgabe. Der Protokollabschnitt listet den Containernamen als String auf. Der Titel in der Karten-Sektion sollte sich verdoppeln, wenn die Seitenbreite über 700px beträgt.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise
- [CSS Kosistenzmodul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwenden von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
