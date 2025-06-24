---
title: will-change
slug: Web/CSS/will-change
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`will-change`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird. Browser können Optimierungen vorbereiten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwändige Arbeiten im Voraus erledigt werden, bevor sie tatsächlich benötigt werden.

> [!WARNING] > `will-change` sollte als letztes Mittel verwendet werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht benutzt werden, um Leistungsprobleme vorherzusehen.

Der ordnungsgemäße Einsatz dieser Eigenschaft kann etwas knifflig sein:

- _Wenden Sie will-change nicht auf zu viele Elemente an._ Der Browser versucht bereits, alles so gut wie möglich zu optimieren. Einige der stärkeren Optimierungen, die wahrscheinlich mit `will-change` verbunden sind, verbrauchen viele Ressourcen eines Geräts und können bei übermäßigem Gebrauch dazu führen, dass die Seite langsamer wird oder viele Ressourcen verbraucht.
- _Sparsam verwenden._ Das normale Verhalten für Optimierungen, die der Browser durchführt, besteht darin, die Optimierungen so schnell wie möglich zu entfernen und zum Normalzustand zurückzukehren. Wenn `will-change` jedoch direkt in einem Stylesheet hinzugefügt wird, impliziert dies, dass die Ziel-Elemente jederzeit kurz vor einer Änderung stehen, und der Browser wird die Optimierungen viel länger aufrechterhalten, als er es sonst getan hätte. Daher ist es eine gute Praxis, `will-change` vor und nach der Änderung mittels Script-Code ein- und auszuschalten.
- _Verwenden Sie will-change nicht, um vorzeitige Optimierungen durchzuführen._ Wenn Ihre Seite gut funktioniert, fügen Sie die Eigenschaft `will-change` nicht nur hinzu, um ein wenig mehr Geschwindigkeit herauszuholen. `will-change` ist dazu gedacht, als letztes Mittel eingesetzt zu werden, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht benutzt werden, um Leistungsprobleme vorherzusehen. Übermäßiger Gebrauch von `will-change` führt zu übermäßigem Speicherverbrauch und komplexeren Rendering-Prozessen, da der Browser versucht, sich auf die mögliche Änderung vorzubereiten. Dies führt zu schlechterer Leistung.
- _Geben Sie genügend Zeit, um zu arbeiten._ Diese Eigenschaft ist dazu gedacht, dem User-Agent mitzuteilen, welche Eigenschaften voraussichtlich im Voraus geändert werden. Dann kann der Browser vorzeitig erforderliche Optimierungen für die bevorstehende Änderung der Eigenschaft anwenden, bevor die Änderung tatsächlich stattfindet. Daher ist es wichtig, dem Browser etwas Zeit zu geben, um die Optimierungen tatsächlich durchzuführen. Finden Sie eine Möglichkeit, wenigstens etwas vorherzusagen, dass sich etwas ändern wird, und setzen Sie dann `will-change`.
- _Seien Sie sich bewusst, dass will-change tatsächlich das visuelle Erscheinungsbild von Elementen beeinflussen kann_, wenn es mit Eigenschaftswerten verwendet wird, die einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erzeugen (z.B. will-change: opacity), da der Stacking-Kontext im Voraus erzeugt wird.

## Syntax

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Example of <custom-ident> */
will-change: opacity; /* Example of <custom-ident> */
will-change: left, top; /* Example of two <animatable-feature> */

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Werte

- `auto`
  - : Dieses Schlüsselwort drückt keine bestimmte Absicht aus; der User-Agent sollte die Heuristiken und Optimierungen anwenden, die er normalerweise tut.

Das `<animatable-feature>` kann einer der folgenden Werte sein:

- `scroll-position`
  - : Zeigt an, dass der Autor erwartet, dass die Bildlaufposition des Elements in naher Zukunft animiert oder geändert wird.
- `contents`
  - : Zeigt an, dass der Autor erwartet, dass in naher Zukunft etwas am Inhalt des Elements animiert oder geändert wird.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Zeigt an, dass der Autor erwartet, dass die Eigenschaft mit dem angegebenen Namen am Element in naher Zukunft animiert oder geändert wird. Wenn die angegebene Eigenschaft eine Kurzform ist, zeigt dies die Erwartung für alle Langformen, in die die Kurzform expandiert, an. Es kann nicht einer der folgenden Werte sein: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` oder `contents`. Die Spezifikation definiert das Verhalten eines bestimmten Wertes nicht, aber es ist üblich, dass `transform` als Hinweis auf eine Kompositionsebene dient. [Chrome führt derzeit zwei Aktionen aus](https://github.com/operasoftware/devopera/pull/330), gegeben bestimmte CSS-Eigenschafts-Identifikatoren: eine neue Kompositionsebene oder einen neuen {{Glossary("stacking_context", "Stacking-Kontext")}} zu etablieren.

### Über Stylesheet

Es kann angemessen sein, `will-change` in Ihr Stylesheet für eine Anwendung aufzunehmen, die Seitenwechsel bei Tastendruck wie ein Album oder eine Präsentation im Folienformat durchführt, bei denen die Seiten groß und komplex sind. Dies wird dem Browser ermöglichen, die Übergänge im Voraus vorzubereiten und für flüssige Übergänge zwischen den Seiten zu sorgen, sobald die Taste gedrückt wird. Seien Sie jedoch vorsichtig mit der direkten Verwendung der Eigenschaft `will-change` in Stylesheets. Sie kann dazu führen, dass der Browser die Optimierung viel länger im Speicher behält, als sie benötigt wird.

```css
.slide {
  will-change: transform;
}
```

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Über Skript

Dies ist ein Beispiel, das zeigt, wie die Eigenschaft `will-change` durch Skripting angewendet wird, was wahrscheinlich das ist, was Sie in den meisten Fällen tun sollten.

```js
const el = document.getElementById("element");

// Set will-change when the element is hovered
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine individuelle `skew`-Eigenschaft.
