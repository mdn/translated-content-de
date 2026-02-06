---
title: "HTMLGeolocationElement: invalidReason-Eigenschaft"
short-title: invalidReason
slug: Web/API/HTMLGeolocationElement/invalidReason
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`invalidReason`** schreibgeschützte Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt einen enumerierten Wert zurück, der den Grund darstellt, warum das zugehörige {{htmlelement("geolocation")}}-Element ungültig (blockiert) ist, falls dies der Fall ist.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf ein `<geolocation>`-Element aktiv ist, ist es ungültig. Das bedeutet, dass es entweder vorübergehend oder dauerhaft daran gehindert wird, zu funktionieren, abhängig vom Grund.

Sie können die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen, um zu prüfen, ob das `<geolocation>`-Element gültig ist oder nicht.

## Wert

Der leere String (`""`), wenn das Element keinen aktiven Blocker hat, oder einer der folgenden Werte (in Prioritätsreihenfolge):

- `illegal_subframe`
  - : Das `<geolocation>`-Element ist in ein {{htmlelement("fencedframe")}}-Element eingebettet.

    Permanenter Blocker.

- `unsuccesful_registration`
  - : Mehr als drei `<geolocation>`-Elemente wurden in dasselbe Dokument eingefügt.

    Temporärer Blocker.

- `recently_attached`
  - : Das `<geolocation>`-Element wurde erst kürzlich an den DOM angehängt.

    Auslaufender Blocker.

- `intersection_changed`
  - : Das `<geolocation>`-Element wird bewegt.

    Auslaufender Blocker.

- `intersection_out_of_viewport_or_clipped`
  - : Das `<geolocation>`-Element wird außerhalb oder teilweise innerhalb des Viewports gerendert.

    Temporärer Blocker.

- `intersection_occluded_or_distorted`
  - : Das `<geolocation>`-Element wird vollständig im Viewport gerendert, ist aber in irgendeiner Weise verdeckt, beispielsweise hinter anderem Inhalt.

    Temporärer Blocker.

- `style_invalid`
  - : Das `<geolocation>`-Element hat einige eingeschränkte Stile angewendet (siehe [Stileinschränkungen](/de/docs/Web/HTML/Reference/Elements/geolocation#styling_restrictions)).

    Temporärer Blocker.

Diese ungültigen Gründe sind in der Prioritätsreihenfolge aufgeführt, von der höchsten zur niedrigsten.
Wenn mehrere Blocker aktiv sind, wird der Wert `invalidReason` zurückgegeben, der den höchsten aktiven Blocker repräsentiert.

Beachten Sie auch, dass die obigen Beschreibungen einen "Blocker-Typ" für jeden ungültigen Grund enthalten, der einer der folgenden ist:

- Permanent
  - : Das `<geolocation>`-Element ist dauerhaft ungültig, bis der Entwickler den Code aktualisiert, um den Blocker zu verhindern.
- Temporär
  - : Das `<geolocation>`-Element ist ungültig, bis die blockierende Bedingung nicht mehr auftritt. Danach wird der temporäre Blocker zu einem auslaufenden Blocker.
- Auslaufend
  - : Das `<geolocation>`-Element ist für eine kurze Zeit ungültig, danach wird es wieder gültig.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.invalidReason);
// "", provided the `<geolocation>` element is not blocked in some way
```

### Untersuchung von ungültigen Gründen

In diesem Beispiel stellen wir eine Form-Kontrolle bereit, um verschiedene Stile auf ein `<geolocation>`-Element anzuwenden, die es ungültig machen. Wenn jeder Satz von Stilen angewendet wird, berichten wir den `invalidReason`, der vom Browser bereitgestellt wird.

#### HTML

Wir beginnen mit der Einbindung eines `<geolocation>`-Elements und eines {{htmlelement("div")}}-Elements, das wir später über das `<geolocation>`-Element rendern lassen.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<div id="cover">Cover element</div>
```

Als Nächstes bieten wir ein {{htmlelement("p")}}-Element an, in dem wir den `invalidReason` ausgeben, der von jedem Satz von Stilen generiert wird.

```html
<p id="reason"></p>
```

Schließlich bieten wir ein {{htmlelement("select")}}-Element an, um dem Benutzer zu ermöglichen, verschiedene Stil-Effekte auszuwählen, die das `<geolocation>`-Element ungültig machen.

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

Als Nächstes gestalten wir unser `#cover` `<div>` mit `position: absolute` und verwenden {{Glossary("inset_properties", "inset properties")}}, um es rechts vom `<geolocation>`-Element zu platzieren. Wir geben ihm auch einen `z-index`-Wert von `2`, sodass, wenn unser `<div>` im selben Bereich wie das `<geolocation>`-Element platziert wird, das `<div>` oben platziert wird.

```css
#cover {
  position: absolute;
  top: 72px;
  left: 250px;
  z-index: 2;
}
```

Nun definieren wir drei Klassenstile, die auf das `<geolocation>`-Element angewendet werden, wenn die verschiedenen `<select>`-Wahlmöglichkeiten vom Benutzer ausgewählt werden. `.move-behind` bewegt es hinter das `#cover` `<div>`, `.move-out` bewegt es aus dem Bildschirm, und `.bad-contrast` gibt ihm einen schlechten [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast). Alle drei dieser Stile führen dazu, dass das `<geolocation>`-Element ungültig wird.

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

In unserem Skript beginnen wir mit dem Erfassen von Referenzen auf die `<geolocation>`, `<div>`, `<p>` und `<select>`-Elemente.

```js
const geo = document.querySelector("geolocation");
const coverElem = document.querySelector("#cover");
const reasonElem = document.querySelector("#reason");
const selectElem = document.querySelector("select");
```

Dann fügen wir einen `input`-Ereignislistener zum `<select>`-Element hinzu. Wenn ein neuer Auswahlwert ausgewählt wird, setzen wir ein `class`-Attribut auf dem `<geolocation>`-Element gleich dem ausgewählten Auswahlwert, wodurch einer der ungültigen Klassenstile angewendet wird. Nach einem 4-Sekunden-Timeout setzen wir die `class` zurück auf `""`, um das `<geolocation>`-Element wieder in seinen gültigen Zustand zu versetzen.

```js
selectElem.addEventListener("input", () => {
  geo.className = selectElem.value;
  setTimeout(() => {
    geo.className = "";
  }, 4000);
});
```

Schließlich fügen wir Code hinzu, um die Validierungsstatusänderungen zu melden, die auftreten, wenn verschiedene Auswahlwerte gewählt werden. Wir beginnen, indem wir den `<p>`-Textinhalt so einstellen, dass er den `invalidReason` enthält, der aktiv ist, wenn die Seite zum ersten Mal geladen wird. Dann fügen wir einen [`validationstatuschange`](/de/docs/Web/API/HTMLGeolocationElement/validationstatuschange_event)-Ereignislistener zum `<geolocation>`-Element hinzu. Wann immer sich der Validierungsstatus ändert, prüfen wir, ob das `<geolocation>`-Element mit [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) gültig ist. Wenn ja, drucken wir eine Bestätigungsmeldung in den `<p>`-Element-Textinhalt. Wenn das `<geolocation>`-Element ungültig ist, drucken wir den `invalidReason` in den `<p>`-Element-Textinhalt.

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

Dieser Code [wird live ausgeführt](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)). Versuchen Sie, die verschiedenen Ungültigkeitsoptionen auszuwählen, um zu sehen, welche Ungültigkeitsgründe in jedem Fall gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
