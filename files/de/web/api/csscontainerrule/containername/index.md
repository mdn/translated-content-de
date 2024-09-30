---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-Schnittstelle repräsentiert den Containernamen der zugehörigen CSS {{cssxref("@container")}}-Regel.

Zum Beispiel ist der Wert von `containerName` für das untenstehende {{cssxref("@container")}} `sidebar`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/container-name) des mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) verknüpften {{cssxref("@container")}} enthält.
Wenn das `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist sehr ähnlich dem in dem `@container`-Beispiel [Benannte Container-Kontexte erstellen](/de/docs/Web/CSS/@container#creating_named_container_contexts).

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

Das CSS für das Containerelement spezifiziert den Typ des Containers und kann auch einen Namen angeben.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

```html
<style id="examplestyles">
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

Der untenstehende Code erhält das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement), das mit dem Beispiel über seine `id` assoziiert ist, und verwendet dann seine `sheet`-Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Blatt hinzugefügt wurden.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir die zugehörige `CSSContainerRule` über den dritten Eintrag (Index "2") in den `cssRules` zugreifen.
Schließlich protokollieren wir den Containernamen und die Abfrageeigenschaften (der Code, der das Logging durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das Beispielergebnis wird unten gezeigt.
Der Protokollabschnitt listet den Containernamen-String auf.
Der Titel im Kartenabschnitt sollte doppelt so groß werden, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzform-Eigenschaft
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
