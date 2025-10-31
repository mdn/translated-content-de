---
title: "CSSContainerRule: containerName Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`** Eigenschaft der [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) Schnittstelle repräsentiert den Namen des Containers der zugehörigen CSS {{cssxref("@container")}} Regel.

Zum Beispiel ist der Wert von `containerName` für die nachfolgende {{cssxref("@container")}} Regel `sidebar`:

```css
@container sidebar (width >= 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/Reference/Properties/container-name) des mit dieser [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) verknüpften {{cssxref("@container")}} enthält.
Wenn das `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das Beispiel unten definiert eine benannte {{cssxref("@container")}} Regel und zeigt die Eigenschaften der zugehörigen [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) an.
Das CSS ist dem im `@container` Beispiel [Erstellen benannter Container-Kontexte](/de/docs/Web/CSS/@container#creating_named_container_contexts) sehr ähnlich.

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

Das CSS für das Containerelement legt den Typ des Containers fest und kann auch einen Namen angeben.
Die Karte hat eine Standard-Schriftgröße, die für das `@container` mit dem Namen `sidebar` überschrieben wird, wenn die Breite größer als 700px ist.

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

Der untenstehende Code ruft das [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) ab, das mit dem Beispiel über seine `id` verknüpft ist, und verwendet dann seine `sheet` Eigenschaft, um das [`StyleSheet`](/de/docs/Web/API/StyleSheet) zu erhalten.
Aus dem `StyleSheet` erhalten wir die Menge der `cssRules`, die zum Blatt hinzugefügt wurden.
Da wir das `@container` als dritte Regel oben hinzugefügt haben, können wir auf die zugehörige `CSSContainerRule` über den dritten Eintrag (Index "2") in den `cssRules` zugreifen.
Zuletzt protokollieren wir den Containernamen und die Abfrageeigenschaften (der Code, der das Protokollieren durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das Beispielergebnis wird unten gezeigt.
Der Protokollabschnitt listet den Containernamen-String auf.
Der Titel im Kartenabschnitt sollte sich verdoppeln, sobald die Breite der Seite über 700px geht.

{{EmbedLiveSample("Examples","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzschreibweise
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
