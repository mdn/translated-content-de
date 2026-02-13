---
title: "HTMLGeolocationElement: invalidReason-Eigenschaft"
short-title: invalidReason
slug: Web/API/HTMLGeolocationElement/invalidReason
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`invalidReason`** des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt einen enumerierten Wert zurück, der den Grund darstellt, warum das zugehörige {{htmlelement("geolocation")}}-Element ungültig (blockiert) ist, falls dies der Fall ist.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf einem `<geolocation>`-Element aktiv ist, ist es ungültig: Das bedeutet, dass es daran gehindert wird zu funktionieren, entweder vorübergehend oder dauerhaft, abhängig vom Grund.

Sie können die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen, um zu überprüfen, ob das `<geolocation>`-Element gültig ist oder nicht.

## Wert

Der leere String (`""`), wenn das Element keinen aktiven Blocker hat, oder einer der folgenden Werte (in Prioritätsreihenfolge):

- `illegal_subframe`
  - : Das `<geolocation>`-Element ist innerhalb eines {{htmlelement("fencedframe")}}-Elements verschachtelt.

    Dauerhafter Blocker.

- `unsuccessful_registration`
  - : Mehr als drei `<geolocation>`-Elemente wurden in dasselbe Dokument eingefügt.

    Vorübergehender Blocker.

- `recently_attached`
  - : Das `<geolocation>`-Element wurde erst kürzlich dem DOM hinzugefügt.

    Ablaufender Blocker.

- `intersection_changed`
  - : Das `<geolocation>`-Element wird bewegt.

    Ablaufender Blocker.

- `intersection_out_of_viewport_or_clipped`
  - : Das `<geolocation>`-Element wird außerhalb oder teilweise innerhalb des Viewports gerendert.

    Vorübergehender Blocker.

- `intersection_occluded_or_distorted`
  - : Das `<geolocation>`-Element wird vollständig innerhalb des Viewports gerendert, ist aber in irgendeiner Weise verdeckt, zum Beispiel hinter anderem Inhalt.

    Vorübergehender Blocker.

- `style_invalid`
  - : Das `<geolocation>`-Element hat einige eingeschränkte Stile angewendet (siehe [style restrictions](/de/docs/Web/HTML/Reference/Elements/geolocation#styling_restrictions)).

    Vorübergehender Blocker.

Diese ungültigen Gründe sind in Prioritätsreihenfolge aufgelistet, von höchster zu niedrigster. Wenn mehrere Blocker aktiv sind, wird der `invalidReason`-Wert zurückgegeben, der den aktivsten Blocker mit der höchsten Priorität darstellt.

Beachten Sie auch, dass die obigen Beschreibungen einen "Blockertyp" für jeden ungültigen Grund enthalten, welcher einer der folgenden ist:

- Dauerhaft
  - : Das `<geolocation>`-Element ist dauerhaft ungültig, bis der Entwickler den Code aktualisiert, um zu verhindern, dass der Blocker auftritt.
- Vorübergehend
  - : Das `<geolocation>`-Element ist ungültig, bis die blockierende Bedingung nicht mehr auftritt. Danach wird der vorübergehende Blocker zu einem ablaufenden Blocker.
- Ablaufend
  - : Das `<geolocation>`-Element ist für einen kurzen Zeitraum ungültig, danach wird es wieder gültig.

## Beispiele

### Grundlegende Nutzung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.invalidReason);
// "", provided the `<geolocation>` element is not blocked in some way
```

### Untersuchung ungültiger Gründe

In diesem Beispiel stellen wir ein Formularelement bereit, um verschiedene Stile auf ein `<geolocation>`-Element anzuwenden, die es ungültig machen. Wenn jeder Satz von Stilen angewendet wird, melden wir den vom Browser bereitgestellten `invalidReason`.

#### HTML

Wir beginnen damit, ein `<geolocation>`-Element und ein {{htmlelement("div")}}-Element einzuschließen, das wir später erlauben über dem `<geolocation>`-Element gerendert zu werden.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<div id="cover">Cover element</div>
```

Als nächstes stellen wir ein {{htmlelement("p")}}-Element bereit, mit dem wir den `invalidReason` ausdrucken, der von jedem Satz von Stilen erzeugt wird.

```html
<p id="reason"></p>
```

Schließlich stellen wir ein {{htmlelement("select")}}-Element bereit, das es dem Benutzer ermöglicht, verschiedene stilistische Effekte auszuwählen, die das `<geolocation>`-Element ungültig machen.

```html
<form>
  <label for="invalidate"
    >Choose a way to invalidate the
    <code>&lt;geolocation&gt;</code> element:</label
  >
  <select id="invalidate">
    <option value="">None</option>
    <option value="move-behind">Move behind element</option>
    <option value="move-out">Move outside viewport</option>
    <option value="bad-contrast">Bad contrast</option>
  </select>
</form>
```

#### CSS

In unseren Stilen beginnen wir damit, dem `<geolocation>`-Element einen {{cssxref("position")}}-Wert von `relative` zu geben, damit es positioniert werden kann, und einen {{cssxref("z-index")}}-Wert von `1`.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin-left: 50px;
}

geolocation {
  font-size: small;
}

#cover {
  width: 200px;
  height: 50px;
  color: white;
  background-color: darkblue;
  padding: 10px;
}
```

```css
geolocation {
  position: relative;
  z-index: 1;
}
```

Als nächstes stylen wir unser `#cover` `<div>` mit `position: absolute` und verwenden {{Glossary("inset_properties", "Inset-Eigenschaften")}}, um es rechts vom `<geolocation>`-Element zu platzieren. Wir geben ihm auch einen `z-index`-Wert von `2`, so dass, wenn unser `<div>` im selben Bereich wie das `<geolocation>`-Element platziert wird, das `<div>` darüber platziert wird.

```css
#cover {
  position: absolute;
  top: 72px;
  left: 250px;
  z-index: 2;
}
```

Jetzt definieren wir drei Klassenstile, die auf das `<geolocation>`-Element angewendet werden, wenn die verschiedenen `<select>`-Optionen vom Benutzer ausgewählt werden. `.move-behind` bewegt es hinter das `#cover` `<div>`, `.move-out` bewegt es aus dem Sichtbereich, und `.bad-contrast` gibt ihm einen schlechten [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast). Alle drei dieser Stile machen das `<geolocation>`-Element ungültig.

```css
.move-behind {
  left: 150px;
}

.move-out {
  right: 250px;
}

.bad-contrast {
  background-color: red;
  color: orange;
}
```

#### JavaScript

In unserem Skript beginnen wir damit, Referenzen auf die `<geolocation>`, `<div>`, `<p>`, und `<select>`-Elemente zu erfassen.

```js
const geo = document.querySelector("geolocation");
const coverElem = document.querySelector("#cover");
const reasonElem = document.querySelector("#reason");
const selectElem = document.querySelector("select");
```

Als nächstes fügen wir einen `input`-Ereignislistener zu dem `<select>`-Element hinzu. Wenn ein neuer Auswahltwert gewählt wird, setzen wir ein `class`-Attribut auf dem `<geolocation>`-Element entsprechend dem gewählten Auswahltwert, was einen der ungültig machenden Klassenstile anwendet. Nach einem 4-Sekunden-Timeout setzen wir die `class` zurück auf `""`, um das `<geolocation>`-Element in seinen gültigen Zustand zurückzuversetzen.

```js
selectElem.addEventListener("input", () => {
  geo.className = selectElem.value;
  setTimeout(() => {
    geo.className = "";
  }, 4000);
});
```

Schließlich inkludieren wir Code, um die Validierungsstatusänderungen zu melden, die auftreten, wenn verschiedene Auswahltwerte gewählt werden. Wir beginnen damit, den Textinhalt des `<p>`-Elements so zu setzen, dass er den aktiven `invalidReason` enthält, wenn die Seite zuerst geladen wird. Dann fügen wir einen [`validationstatuschange`](/de/docs/Web/API/HTMLGeolocationElement/validationstatuschange_event)-Ereignislistener zum `<geolocation>`-Element hinzu. Immer wenn sich der Validierungsstatus ändert, überprüfen wir, ob das `<geolocation>`-Element gültig ist, indem wir [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) verwenden, und falls ja, drucken wir eine Nachricht, die dies bestätigt, in den Textinhalt des `<p>`-Elements. Wenn das `<geolocation>`-Element ungültig ist, drucken wir den `invalidReason` in den Textinhalt des `<p>`-Elements.

```js
reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;

geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

#### Ergebnis

Sehen Sie sich diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) an (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)). Versuchen Sie, die verschiedenen Invalidation-Optionen auszuwählen, um zu sehen, welche Invalidation-Gründe in jedem Fall gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
