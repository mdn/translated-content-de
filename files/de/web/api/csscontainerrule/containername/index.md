---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft des [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Interfaces repräsentiert den Containernamen der zugehörigen CSS-{{cssxref("@container")}}-Regel.

Zum Beispiel ist der Wert von `containerName` für die unten stehende {{cssxref("@container")}}-Regel `sidebar`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den {{cssxref("container-name")}} der mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) assoziierten {{cssxref("@container")}}-Regel enthält.
Falls das `@container` [nicht benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist sehr ähnlich zu dem im `@container`-Beispiel [Erstellen von benannten Containerkontexten](/de/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).

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
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, falls die Breite größer als 700px ist.

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

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel über seine `id` assoziiert ist, und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu bekommen.
Vom `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Stilblatt hinzugefügt wurden.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem dritten Eintrag (Index "2") in den `cssRules` abfragen.
Zuletzt loggen wir den Containernamen und die Abfrageeigenschaften (der Code, der das Logging durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das Beispielergebnis wird unten gezeigt.
Der Protokollabschnitt listet den Container-Namen-String auf.
Der Titel im Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise
- [CSS Containment Modul](/de/docs/Web/CSS/Guides/Containment)
- [Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
