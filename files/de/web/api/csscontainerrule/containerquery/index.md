---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft des [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Interfaces gibt einen String zurück, der die Containerbedingungen darstellt, die ausgewertet werden, wenn der Container seine Größe ändert, um zu bestimmen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

Zum Beispiel ist der Wert von `containerQuery` für das untenstehende {{cssxref("@container")}} `(min-width: 700px)`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der die Container-Abfrage enthält.

Beachten Sie, dass der Wert möglicherweise nicht identisch mit dem ursprünglichen String ist, da Normalisierungen wie das Entfernen von Leerzeichen auftreten können.

## Beispiele

Das Beispiel unten definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule).
Das CSS ist dasselbe wie im `@container` Beispiel [Stile basierend auf der Größe eines Containers festlegen](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

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

Das CSS für das Containerelement gibt den Typ des Containers an.
Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf das enthaltene Element "card" an, wenn die Breite weniger als 650px beträgt.

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

Der untenstehende Code ruft das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab, das mit dem Beispiel über seine ID verknüpft ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` bekommen wir die Menge der `cssRules`, die zum Stylesheet hinzugefügt wurden.
Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` über den zweiten Eintrag (mit Index "1") in den `cssRules` zugreifen.
Zuletzt loggen wir den Namen des Containers und die Abfrageeigenschaften.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

Das Beispielergebnis wird unten gezeigt.
Der Protokollbereich listet den Abfrage-String auf.
Die Karte sollte den Hintergrund ändern, während die Breite der Seite durch 650px übergeht.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
