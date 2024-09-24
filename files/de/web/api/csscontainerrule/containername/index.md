---
title: "CSSContainerRule: containerName-Eigenschaft"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`containerName`**-Eigenschaft der {{domxref("CSSContainerRule")}}-Schnittstelle repräsentiert den Container-Namen der zugehörigen CSS-{{cssxref("@container")}}-Regel.

Zum Beispiel, der Wert von `containerName` für die folgende {{cssxref("@container")}}-Regel ist `sidebar`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Wert

Ein String, der den [`container-name`](/de/docs/Web/CSS/container-name) der mit dieser {{domxref("CSSContainerRule")}} assoziierten {{cssxref("@container")}} enthält.
Falls der `@container` nicht [benannt](/de/docs/Web/API/CSSContainerRule#unnamed_container_rule) ist, gibt die Funktion den leeren String (`""`) zurück.

## Beispiele

Das folgende Beispiel definiert eine benannte {{cssxref("@container")}}-Regel und zeigt die Eigenschaften der zugehörigen {{domxref("CSSContainerRule")}} an.
Das CSS ist sehr ähnlich zu dem im `@container` Beispiel [Creating named container contexts](/de/docs/Web/CSS/@container#creating_named_container_contexts).

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Referenz zur Log-Liste speichern
const logList = document.querySelector("#log ul");
// Funktion, um Daten aus der zugrunde liegenden Quelle zu protokollieren
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
    <h2>Kartentitel</h2>
    <p>Karteninhalt</p>
  </div>
</div>
```

Das CSS für das Containerelement gibt den Typ des Containers an und kann auch einen Namen festlegen.
Die Karte hat eine Standard-Schriftgröße, die für den `@container` namens `sidebar` überschrieben wird, wenn die Mindestbreite größer als 700px ist.

```html
<style id="examplestyles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Standard-Überschriftstile für den Kartentitel */
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

Der folgende Code holt den {{domxref("HTMLStyleElement")}} der dem Beispiel über seine `id` zugeordnet ist und verwendet dann seine `sheet`-Eigenschaft, um die {{domxref("StyleSheet")}} zu erhalten.
Vom `StyleSheet` erhalten wir die Menge der `cssRules`, die dem Sheet hinzugefügt wurden.
Da wir den `@container` oben als dritte Regel hinzugefügt haben, können wir die zugehörige `CSSContainerRule` mit dem dritten Eintrag (Index "2") in den `cssRules` abrufen.
Zuletzt loggen wir den Container-Namen und die Abfrageeigenschaften (der Code, der das Loggen durchführt, wird nicht gezeigt).

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // eine CSSContainerRule, die die Containerregel darstellt.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

Das folgende Beispiel zeigt die Ausgabe.
Der Log-Abschnitt listet den Container-Namen String auf.
Der Titel im Kartenabschnitt sollte sich verdoppeln, wenn die Breite der Seite über 700px geht.

{{EmbedLiveSample("Beispiele","100%","250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("container")}} Kurzform-Eigenschaft
- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwenden von Container- und Stilanfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
