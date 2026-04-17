---
title: "`autocapitalize` HTML-Globalattribut"
short-title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`autocapitalize`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Dies ist relevant für:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element, auf dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt ist.

`autocapitalize` beeinflusst nicht das Eingabeverhalten bei der Nutzung einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingaben. Dies kann Nutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem z. B. der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Kein Text wird automatisch großgeschrieben.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes wird automatisch großgeschrieben.
- `words`
  - : Der erste Buchstabe jedes Wortes wird automatisch großgeschrieben.
- `characters`
  - : Jeder Buchstabe wird automatisch großgeschrieben.

## Anwendungshinweise

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elementen sowie auf ihren umschließenden {{htmlelement("form")}}-Elementen gesetzt werden. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, wird das Autokapitalisierungsverhalten für alle darin enthaltenen `<input>`s und `<textarea>`s festgelegt, wobei alle `autocapitalize`-Werte überschrieben werden, die auf enthaltenen Elementen gesetzt sind.
- `autocapitalize` hat keine Auswirkung auf die `url`-, `email`- oder `password`-`<input>`-Typen, bei denen Autokapitalisierung nie aktiviert ist.
- Wenn `autocapitalize` nicht angegeben ist, variiert das übernommene Standardverhalten zwischen den Browsern. Zum Beispiel:
  - Chrome und Safari standardmäßig `on`/`sentences`
  - Firefox standardmäßig `off`/`none`.

## Beispiele

### HTML

```html
<p>Form to test different autocapitalize settings:</p>

<form>
  <div>
    <label for="default">Default: no autocapitalize set</label>
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocapitalize="off"</label>
    <input type="text" id="off" name="off" autocapitalize="off" />
  </div>
  <div>
    <label for="none">autocapitalize="none"</label>
    <input type="text" id="none" name="none" autocapitalize="none" />
  </div>
  <div>
    <label for="on">autocapitalize="on"</label>
    <input type="text" id="on" name="on" autocapitalize="on" />
  </div>
  <div>
    <label for="sentences">autocapitalize="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocapitalize="sentences" />
  </div>
  <div>
    <label for="words">autocapitalize="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="characters">autocapitalize="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocapitalize="characters" />
  </div>
  <div>
    <label for="characters-ta">autocapitalize="characters" on textarea</label>
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocapitalize="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  This content is editable and has autocapitalize="characters" set on it
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

## Ergebnis

Testen Sie die Wirkung auf jede Eingabe mit einer virtuellen Tastatur oder Spracheingabe (Eingabe über die Tastatur funktioniert nicht).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
