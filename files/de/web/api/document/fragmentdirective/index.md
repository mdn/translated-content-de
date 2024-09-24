---
title: "Dokument: fragmentDirective-Eigenschaft"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: f7e5cd5c99785abe0408d9db6c427212c37b02e7
---

{{APIRef("URL Fragment Text Directives")}}

Die schreibgeschützte Eigenschaft **`fragmentDirective`** der {{domxref("Document")}}-Schnittstelle gibt die {{domxref("FragmentDirective")}} für das aktuelle Dokument zurück.

## Wert

Ein {{domxref("FragmentDirective")}}-Objekt.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der folgende Code prüft und gibt aus, ob Textfragmente in Ihrem Browser unterstützt werden, indem er das Vorhandensein des Objekts überprüft.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich für die Merkmalserkennung vorgesehen ist.
In Zukunft könnte es weitere Informationen enthalten.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

```js
if (document.fragmentDirective) {
  log("Ihr Browser unterstützt Textfragmente.");
} else {
  log("Textfragmente werden in Ihrem Browser nicht unterstützt.");
}
```

{{EmbedLiveSample("Überprüfen, ob Textfragmente unterstützt werden","100%","30px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
