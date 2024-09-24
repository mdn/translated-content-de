---
title: "CSSContainerRule: containerQuery-Eigenschaft"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerQuery`**-Eigenschaft der {{domxref("CSSContainerRule")}}-Schnittstelle gibt einen String zurück, der die Containerbedingungen repräsentiert, welche ausgewertet werden, wenn sich die Größe des Containers ändert, um festzustellen, ob die Stile im zugehörigen {{cssxref("@container")}} angewendet werden.

Zum Beispiel ist der Wert von `containerQuery` für den unten stehenden {{cssxref("@container")}} `(min-width: 700px)`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der die Container-Abfrage enthält.

Beachten Sie, dass der Wert möglicherweise nicht mit dem ursprünglichen String identisch ist, da Normalisierungen wie das Entfernen von Leerzeichen stattfinden können.

## Beispiele

Das untenstehende Beispiel definiert eine unbenannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen {{domxref("CSSContainerRule")}}.
Das CSS ist dasselbe wie im `@container`-Beispiel [Festlegen von Stilen basierend auf der Größe eines Containers](/de/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Reference zur Log-Liste speichern
const logList = document.querySelector("#log ul");
// Funktion zum Protokollieren von Daten aus der zugrunde liegenden Quelle
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
    <h2>Kartentitel</h2>
    <p>Karteninhalt</p>
  </div>
</div>
```

Das CSS für das Containerelement gibt den Typ des Containers an.
Der {{cssxref("@container")}} wendet dann eine neue Breite, Schriftgröße und Hintergrundfarbe auf das enthaltende Element "card" an, wenn die Breite kleiner als 650px ist.

```html
<style id="examplestyles">
  /* Ein Container-Kontext basierend auf der Inline-Größe */
  .post {
    container-type: inline-size;
  }

  /* Stile anwenden, wenn der Container schmaler als 650px ist */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

Der folgende Code erhält das {{domxref("HTMLStyleElement")}}, das mit dem Beispiel über seine ID verknüpft ist, und verwendet dann dessen `sheet`-Eigenschaft, um das {{domxref("StyleSheet")}} zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Stylesheet hinzugefügt wurden.
Da wir das `@container` als zweite Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` über den zweiten Eintrag (mit Index "1") in den `cssRules` abrufen.
Zuletzt protokollieren wir die Containername- und Abfrage-Eigenschaften.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // eine CSSContainerRule, die die Containerregel darstellt.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

Das Beispiel zeigt die folgende Ausgabe.
Der Protokollabschnitt listet den Abfrage-String auf.
Die Karte sollte ihren Hintergrund ändern, wenn die Breite der Seite die 650px-Grenze überschreitet.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Eindämmungsmodul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
