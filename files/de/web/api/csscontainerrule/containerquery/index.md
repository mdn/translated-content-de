---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft der Schnittstelle [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) gibt einen String zurück, der die Container-Bedingungen repräsentiert, die ausgewertet werden, wenn sich die Containergröße ändert, um zu bestimmen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

Zum Beispiel lautet der Wert von `containerQuery` für das untenstehende {{cssxref("@container")}} `(width >= 700px)`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der die Containerabfrage enthält.

Beachten Sie, dass der Wert nicht identisch mit dem ursprünglichen String sein muss, da Normalisierungen wie das Entfernen von Leerzeichen auftreten können.

## Beispiele

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist dasselbe wie im `@container`-Beispiel [Stile basierend auf der Größe eines Containers setzen](/de/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

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

Zuerst definieren wir das HTML für eine `card` (`<div>`), die in einem `post` enthalten ist.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Containerelement legt den Typ des Containers fest.
Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf das enthaltene Element "card" an, wenn die Breite kleiner als 650px ist.

```html
<style id="example-styles">
  /* A container context based on inline size */
  .post {
    container-type: inline-size;
  }

  /* Apply styles if the container is narrower than 650px */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

Der folgende Code ruft das mit dem Beispiel verknüpfte [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) über seine ID ab und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Sheet hinzugefügt wurden.
Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir auf das zugehörige `CSSContainerRule` über den zweiten Eintrag (mit Index "1") in den `cssRules` zugreifen.
Schließlich protokollieren wir die Container-Name- und Abfrageeigenschaften.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

Das Beispielausgabe ist unten gezeigt.
Der Protokollabschnitt listet den Abfrage-String auf.
Die Karte sollte den Hintergrund ändern, während die Breite der Seite die 650px-Grenze überschreitet.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/Guides/Containment)
- [Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
