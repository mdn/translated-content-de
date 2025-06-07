---
title: HTML `autocapitalize` Globalattribut
short-title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocapitalize`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und in welcher Weise dies erfolgt. Dies ist relevant für:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element, bei dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) aktiviert ist.

`autocapitalize` beeinflusst das Verhalten beim Tippen auf einer physischen Tastatur nicht. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingabe. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem z. B. der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Kein Text wird automatisch großgeschrieben.
- `sentences` oder `on`
  - : Der erste Buchstabe jedes Satzes wird automatisch großgeschrieben.
- `words`
  - : Der erste Buchstabe jedes Wortes wird automatisch großgeschrieben.
- `characters`
  - : Jedes Zeichen wird automatisch großgeschrieben.

## Verwendungshinweise

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elementen _sowie_ auf den enthaltenen {{htmlelement("form")}}-Elementen gesetzt werden. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, bestimmt es das Autokapitalisierungsverhalten für alle enthaltenen `<input>`- und `<textarea>`-Elemente und überschreibt alle auf enthaltenen Elementen gesetzten `autocapitalize`-Werte.
- `autocapitalize` hat keine Wirkung auf die `<input>`-Typen `url`, `email` oder `password`, bei denen eine Großschreibung niemals aktiviert ist.
- Wo `autocapitalize` nicht spezifiziert ist, variiert das angenommene Standardverhalten zwischen den Browsern. Zum Beispiel:
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

Testen Sie die Wirkung auf jede Eingabe mit einer virtuellen Tastatur oder Spracheingabe (Tastatureingabe wird nicht funktionieren).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
