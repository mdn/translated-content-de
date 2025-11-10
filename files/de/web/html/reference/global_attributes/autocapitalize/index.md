---
title: HTML `autocapitalize` globales Attribut
short-title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`autocapitalize`**-Attribut [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumerated")}} Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, in welcher Weise. Dies ist relevant für:

- {{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente.
- Jedes Element mit aktivierter [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Eigenschaft.

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtueller Tastaturen auf mobilen Geräten und Spracheingaben. Dies kann Benutzern dabei helfen, die Dateneingabe schneller und einfacher zu gestalten, zum Beispiel indem der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

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

## Hinweise zur Verwendung

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elemente gesetzt werden _und_ auf die enthaltenen {{htmlelement("form")}}-Elemente. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, legt es das Verhalten des Autocapitalize für alle enthaltenen `<input>`s und `<textarea>`s fest und überschreibt alle `autocapitalize`-Werte, die auf den enthaltenen Elementen gesetzt sind.
- `autocapitalize` hat keine Wirkung auf die `url`-, `email`- oder `password`-`<input>`-Typen, bei denen die automatische Großschreibung niemals aktiviert ist.
- Wo `autocapitalize` nicht angegeben ist, variiert das angenommene Standardverhalten zwischen den Browsern. Zum Beispiel:
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

Testen Sie die Wirkung auf jede Eingabe mit einer virtuellen Tastatur oder Spracheingabe (Tastatureingabe auf einer physischen Tastatur wird nicht funktionieren).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
