---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft des [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Interfaces repräsentiert den Containernamen der zugehörigen CSS-{{cssxref("@container")}}-At-Regel.

Zum Beispiel ist der Wert von `containerName` für die folgende {{cssxref("@container")}}-Regel `sidebar`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/container-name) der mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) verbundenen {{cssxref("@container")}} enthält.
Wenn das `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das untenstehende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule).
Das CSS ähnelt stark dem Beispiel für `@container` in [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts).

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

Das CSS für das Containerelement spezifiziert den Typ des Containers und kann auch einen Namen angeben.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

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

  @container sidebar (min-width: 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel durch seine `id` verbunden ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Vom `StyleSheet` bekommen wir die Menge der dem Sheet hinzugefügten `cssRules`.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` zugreifen, indem wir den dritten Eintrag (Index "2") in den `cssRules` verwenden.
Zuletzt loggen wir den Containernamen und die Abfrageeigenschaften (der Code, der das Logging durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das Beispielergebnis wird unten gezeigt.
Der Log-Abschnitt listet den Containernamen-String auf.
Der Titel im Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite 700px überschreitet.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzeigenschaft
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
