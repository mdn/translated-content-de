---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
l10n:
  sourceCommit: 26ea1a065b861bb59ae1dd14dea053e62ad39969
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocapitalize`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, in welcher Weise. Dies ist relevant für:

- {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit aktiviertem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

`autocapitalize` beeinflusst nicht das Verhalten beim Tippen auf einer physischen Tastatur. Es beeinflusst das Verhalten anderer Eingabemechanismen wie virtuelle Tastaturen auf mobilen Geräten und Spracheingabe. Dies kann Benutzern helfen, die Dateneingabe schneller und einfacher zu machen, zum Beispiel durch automatische Großschreibung des ersten Buchstabens jedes Satzes.

## Wert

Mögliche Werte sind:

- `none` oder `off`
  - : Keine automatische Großschreibung des Textes.
- `sentences` oder `on`
  - : Automatische Großschreibung des ersten Zeichens jedes Satzes.
- `words`
  - : Automatische Großschreibung des ersten Zeichens jedes Wortes.
- `characters`
  - : Automatische Großschreibung jedes Zeichens.

## Gebrauchshinweise

- `autocapitalize` kann auf `<input>`- und `<textarea>`-Elementen gesetzt werden, _und_ auf ihren enthaltenen {{htmlelement("form")}}-Elementen. Wenn `autocapitalize` auf einem `<form>`-Element gesetzt ist, legt es das Verhalten der Großschreibung für alle enthaltenen `<input>`- und `<textarea>`-Elemente fest und überschreibt alle auf enthaltenen Elementen gesetzten `autocapitalize`-Werte.
- `autocapitalize` hat keine Auswirkungen auf die `url`, `email` oder `password` `<input>`-Typen, für die eine Großschreibung nie aktiviert wird.
- Wo `autocapitalize` nicht spezifiziert ist, variiert das angenommene Standardverhalten zwischen den Browsern. Zum Beispiel:
  - Chrome und Safari haben `on`/`sentences` als Standard
  - Firefox hat `off`/`none` als Standard.

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

Testen Sie die Auswirkung auf jede Eingabe mit einer virtuellen Tastatur oder Spracheingabe (Tastatureingabe wird nicht funktionieren).

{{ EmbedLiveSample("Examples", "100%", "500") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
