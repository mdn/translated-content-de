---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle gibt einen String zurück, der die Containerbedingungen darstellt, die bewertet werden, wenn sich die Größe des Containers ändert, um zu bestimmen, ob die Stile im zugeordneten {{cssxref("@container")}} angewendet werden.

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

Beachten Sie, dass der Wert möglicherweise nicht identisch mit dem ursprünglichen String ist, da Normalisierungen wie das Entfernen von Leerzeichen stattfinden können.

## Beispiele

Das folgende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an. Das CSS ist dasselbe wie im `@container`-Beispiel [Festlegen von Stilen basierend auf der Größe eines Containers](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

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

Das CSS für das Containerelement gibt den Typ des Containers an. Das {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf das enthaltene Element "card" an, wenn die Breite weniger als 650px beträgt.

```html
<style id="examplestyles">
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

Der untenstehende Code ruft das zugehörige [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) des Beispiels mit seiner id ab und verwendet dann dessen `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten. Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Sheet hinzugefügt wurden. Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mithilfe des zweiten Eintrags (mit dem Index "1") in den `cssRules` abrufen. Zuletzt protokollieren wir den Containernamen und die Abfrageeigenschaften.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

Das Beispielausgabe wird unten gezeigt. Der Protokollabschnitt listet den Abfragestring auf. Die Karte sollte den Hintergrund ändern, während die Seitenbreite die 650px-Marke überschreitet.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
