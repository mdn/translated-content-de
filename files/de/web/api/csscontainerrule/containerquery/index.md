---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle gibt einen String zurück, der die Container-Bedingungen darstellt, die ausgewertet werden, wenn sich die Containergröße ändert, um festzustellen, ob die Styles im zugehörigen {{cssxref("@container")}} angewendet werden.

Zum Beispiel ist der Wert von `containerQuery` für den untenstehenden {{cssxref("@container")}} `(width >= 700px)`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der die Container-Anfrage enthält.

Beachten Sie, dass der Wert möglicherweise nicht mit dem ursprünglichen String identisch ist, da Normalisierungen wie das Entfernen von Leerzeichen stattfinden können.

## Beispiele

Das Beispiel unten definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule).
Das CSS ist dasselbe wie im `@container`-Beispiel [Anwenden von Styles basierend auf der Größe eines Containers](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

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

Zunächst definieren wir das HTML für eine `card` (`<div>`), die in einem `post` enthalten ist.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Das CSS für das Containerelement gibt den Typ des Containers an.
Der {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf das enthaltene "card"-Element an, wenn die Breite weniger als 650px beträgt.

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

Der folgende Code ermittelt das mit dem Beispiel verknüpfte [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) mithilfe seiner ID und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die im Sheet hinzugefügten `cssRules`.
Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` über den zweiten Eintrag (mit Index "1") in den `cssRules` zugreifen.
Zuletzt protokollieren wir den Container-Namen und die Abfrageeigenschaften.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

Das Beispieloutput ist unten gezeigt.
Der Protokollabschnitt listet den Anfragestring auf.
Die "card" sollte ihren Hintergrund ändern, während die Seitenbreite durch 650px wechselt.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
