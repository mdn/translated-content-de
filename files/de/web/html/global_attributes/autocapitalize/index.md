---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
l10n:
  sourceCommit: 26ea1a065b861bb59ae1dd14dea053e62ad39969
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocapitalize`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Dies ist relevant für:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element, bei dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt ist.

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingabe. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu machen, indem z.B. der erste Buchstabe jedes Satzes automatisch großgeschrieben wird.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Keine automatische Großschreibung von Text.
- `sentences` oder `on`
  - : Automatische Großschreibung des ersten Zeichens jedes Satzes.
- `words`
  - : Automatische Großschreibung des ersten Zeichens jedes Wortes.
- `characters`
  - : Automatische Großschreibung jedes Zeichens.

## Nutzungshinweise

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elementen _und_ auf ihren enthaltenen {{htmlelement("form")}}-Elementen gesetzt werden. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, wird das Autokapitalisierungsverhalten für alle enthaltenen `<input>`- und `<textarea>`-Elemente festgelegt, wobei alle auf enthaltenen Elementen gesetzten `autocapitalize`-Werte überschrieben werden.
- `autocapitalize` hat keinen Einfluss auf die `url`-, `email`- oder `password`-`<input>`-Typen, bei denen die automatische Großschreibung nie aktiviert ist.
- Wo `autocapitalize` nicht angegeben ist, variiert das angenommene Standardverhalten zwischen den Browsern. Zum Beispiel:
  - Chrome und Safari standardmäßig `on`/`sentences`
  - Firefox standardmäßig `off`/`none`.

## Beispiele

### HTML

```html
<p>Formular zum Testen verschiedener Autokapitalisierungseinstellungen:</p>

<form>
  <div>
    <label for="default">Standard: Keine Autokapitalisierung gesetzt</label>
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
    <label for="characters-ta">autocapitalize="characters" in textarea</label>
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
  Dieser Inhalt ist bearbeitbar und hat autocapitalize="characters" darauf gesetzt
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

## Ergebnis

Testen Sie den Effekt in jedem Eingabefeld mit einer virtuellen Tastatur oder Spracheingabe (Tastatureingabe wird nicht funktionieren).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
