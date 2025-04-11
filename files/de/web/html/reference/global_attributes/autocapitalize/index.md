---
title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocapitalize`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Dies ist relevant für:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit der Einstellung [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

`autocapitalize` hat keinen Effekt auf das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen, wie virtuelle Tastaturen auf mobilen Geräten und Spracheingabe. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu gestalten, indem z. B. der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Keinen Text automatisch großschreiben.
- `sentences` oder `on`
  - : Automatisch das erste Zeichen jedes Satzes großschreiben.
- `words`
  - : Automatisch das erste Zeichen jedes Wortes großschreiben.
- `characters`
  - : Automatisch jedes Zeichen großschreiben.

## Anwendungshinweise

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elemente gesetzt werden, _sowie_ auf die sie umgebenden {{htmlelement("form")}}-Elemente. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, wird das Autokapitalisierungsverhalten für alle enthaltenen `<input>`s und `<textarea>`s festgelegt und übersteuert alle `autocapitalize`-Werte, die auf enthaltenen Elementen gesetzt sind.
- `autocapitalize` hat keinen Effekt auf die Typen `url`, `email` oder `password` von `<input>`-Elementen, bei denen die Autokapitalisierung nie aktiviert ist.
- Wenn `autocapitalize` nicht angegeben ist, variiert das übernommene Standardverhalten zwischen den Browsern. Zum Beispiel:
  - Chrome und Safari standardmäßig auf `on`/`sentences`
  - Firefox standardmäßig auf `off`/`none`.

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
