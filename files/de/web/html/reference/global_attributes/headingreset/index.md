---
title: "`headingreset` HTML Globales Attribut"
short-title: headingreset
slug: Web/HTML/Reference/Global_attributes/headingreset
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

{{SeeCompatTable}}

Das **`headingreset`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) verhindert, dass die [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset)-Werte von übergeordneten Elementen auf die [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements angewendet werden, auf dem es gesetzt ist.

## Werte

Dies ist ein {{Glossary("Boolean/HTML", "Boolean-Attribut")}}; es tritt in Kraft, wenn es vorhanden ist. Ein Wert dafür wird ignoriert, sodass `headingreset`, `headingreset=""` und `headingreset="false"` denselben Effekt haben.

## Beschreibung

Wenn ein Browser die [Überschriftenebene](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset#description) eines Überschriftenelements berechnet, geht er die Kette der Vorfahrenelemente entlang und summiert die gefundenen [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset)-Werte. Das `headingreset`-Attribut stoppt diesen Prozess: Offsets, die direkt auf dem Element gesetzt sind, werden immer noch berücksichtigt, aber kein Vorfahre darüber trägt mehr einen Offset bei.

Verwenden Sie dieses Attribut für Inhalte, die nicht Teil der Struktur des umgebenden Dokuments sind, wie ein {{htmlelement("dialog")}}, ein Popover oder Markup, das aus einer anderen Quelle eingefügt wurde. Deren Überschriften nehmen dann die Ebene des Elementnamens an.

Wenn das Element sowohl `headingoffset` als auch `headingreset` trägt, wird nur der eigene Offset angewendet und alles darüber wird ignoriert.

## Beispiele

### Zurücksetzen von Überschriftenebenen in einem Dialog

In diesem Beispiel versetzt das `<section>` seine Überschriften um `2`, sodass die direkt darin befindliche Überschrift auf Ebene 3 ist. Das `<dialog>`-Element hat `headingreset`, daher erreicht der Offset der Sektion nie die Überschrift im Dialog, die auf Ebene 1 bleibt:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
    <p>The offset of the section does not apply here.</p>
  </dialog>
</section>
```

### Verwenden von `headingreset` und `headingoffset` auf demselben Element

In diesem Beispiel erreicht der äußere Offset von `3` nie die Überschrift. Nur der Offset auf dem Element mit `headingreset` wird angewendet, sodass die Überschrift auf Ebene 2 ist:

```html
<div headingoffset="3">
  <div headingreset headingoffset="1">
    <h1>Level 2</h1>
  </div>
</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) globales Attribut
- [`<h1>`–`<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elemente
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut
