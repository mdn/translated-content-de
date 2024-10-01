---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
l10n:
  sourceCommit: 26ea1a065b861bb59ae1dd14dea053e62ad39969
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocapitalize`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "Aufzählbares")}} Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Dies ist relevant für:

- {{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente.
- Jedes Element mit aktiviertem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es wirkt sich auf andere Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingaben aus. Dies kann Benutzer unterstützen, indem die Dateneingabe schneller und einfacher wird, beispielsweise indem automatisch der erste Buchstabe jedes Satzes großgeschrieben wird.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Keinen Text automatisch großschreiben.
- `sentences` oder `on`
  - : Den ersten Buchstaben jedes Satzes automatisch großschreiben.
- `words`
  - : Den ersten Buchstaben jedes Wortes automatisch großschreiben.
- `characters`
  - : Jeden Buchstaben automatisch großschreiben.

## Hinweise zur Nutzung

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elementen _und_ auf den enthaltenen {{htmlelement("form")}}-Elementen gesetzt werden. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt wird, definiert es das Verhalten für alle enthaltenen `<input>`s und `<textarea>`s und überschreibt jegliche `autocapitalize`-Werte, die auf enthaltenen Elementen gesetzt sind.
- `autocapitalize` hat keine Wirkung auf die `url`, `email` oder `password` `<input>`-Typen, bei denen die automatische Großschreibung nie aktiviert ist.
- Wo `autocapitalize` nicht spezifiziert ist, variiert das übernommene Standardverhalten zwischen den Browsern. Zum Beispiel:
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

Testen Sie die Wirkung auf jede Eingabe mithilfe einer virtuellen Tastatur oder Spracheingabe (Tastatureingabe funktioniert nicht).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
