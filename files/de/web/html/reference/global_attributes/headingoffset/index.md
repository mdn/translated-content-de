---
title: "`headingoffset` HTML global attribute"
short-title: headingoffset
slug: Web/HTML/Reference/Global_attributes/headingoffset
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

{{SeeCompatTable}}

Das **`headingoffset`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) erhöht die berechnete Überschriftsebene der [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, auf dem es gesetzt ist, ohne die verwendeten Elemente zu ändern, um sie zu schreiben.

## Werte

Ein gültiger nicht-negativer Ganzzahlwert zwischen `0` und `8`, inklusive. Ein Wert, der nicht als nicht-negative Ganzzahl geparst werden kann, wird als Versatz von `0` behandelt.

## Beschreibung

Jedes Überschriftselement hat eine **berechnete Überschriftsebene**, welche die Ebene ist, die unterstützende Technologien den Nutzern präsentieren. Ohne `headingoffset` entspricht diese Ebene der Zahl im Elementnamen: `1` für [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), `2` für `<h2>`, usw.

Das `headingoffset`-Attribut addiert zu dieser Zahl. Um den Versatz für eine Überschrift zu ermitteln, beginnt der Browser am Überschriftselement selbst, durchläuft dessen Vorfahren – überwindet dabei Schatten-Grenzen in den Schatten-Host – und summiert jeden gefundenen `headingoffset`-Wert. Die Versätze summieren sich: ein `<h1>` innerhalb eines Elements mit `headingoffset="1"`, das sich selbst in einem Element mit `headingoffset="2"` befindet, hat eine berechnete Überschriftsebene von 4.

Da der Durchlauf am Überschriftselement beginnt, zählt auch ein Versatz auf der Überschrift selbst: `<h1 headingoffset="2">` hat eine berechnete Überschriftsebene von 3.

Der Durchlauf stoppt am ersten Element, das das [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset)-Attribut besitzt, nachdem der `headingoffset` dieses Elements hinzugefügt wurde.

Die berechnete Überschriftsebene übersteigt nie `9`, selbst in Fällen, in denen sich die Versätze zu mehr summieren. Da HTML kein Überschriftselement über `<h6>` hat, können Überschriftenebenen von 7, 8 und 9 nur durch das `headingoffset`-Attribut oder durch das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut erzeugt werden.

Dieses Attribut beeinflusst nur die berechnete Überschriftsebene. Es ändert nicht Folgendes:

- Den Namen des Elements, daher passen CSS-Selektoren wie `h1` weiterhin, und die Standardgestaltung der Überschrift bleibt unverändert.
- Die [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) des Elements, die `heading` bleibt.
- Ein explizites `aria-level`-Attribut auf der Überschrift, welches Vorrang vor der berechneten Überschriftsebene hat.

Da der Versatz von der Überschrift und ihren Vorfahren kommt, kann eine wiederverwendbare Komponente immer dieselbe Überschriftsauszeichnung verwenden, wie etwa ein `<h1>` für ihren Titel. Sie können dann dieselbe Auszeichnung in jeder Tiefe einer Seite verwenden, ohne ihre Überschriften bearbeiten zu müssen. Dies vermeidet auch das Barrierefreiheitsproblem, das durch die Auswahl eines Überschriftselements aufgrund seiner Schriftgröße verursacht wird.

## Barrierefreiheit

Bildschirmleser-Nutzer navigieren anhand von Überschriften und verlassen sich auf Überschriftsebenen, um zu verstehen, wie eine Seite strukturiert ist. Verwenden Sie `headingoffset`, um diese Ebenen mit der visuellen Struktur der Seite übereinstimmen zu lassen, und überprüfen Sie das Ergebnis mit einem Bildschirmleser oder dem Barrierefreiheitsinspektor des Browsers.

In Browsern, die dieses Attribut nicht unterstützen, behalten Überschriften die Ebene ihres Elementnamens, daher muss das Markup auch ohne den Versatz Sinn ergeben.

## Beispiele

### Offsetting von Überschriften in einer Komponente

In diesem Beispiel wird die gleiche Komponentenstruktur zweimal verwendet – ein `<article>` mit einem `<h1>` Titel. Der zweite ist in einem `<section>` verschachtelt, das seine Überschriften um eine Ebene versetzt.

```html
<h1>Insect guide</h1>

<article>
  <h1>Beetles</h1>
  <p>A beetle has a hardened forewing.</p>
</article>

<section headingoffset="1">
  <h1>Appendix</h1>
  <article>
    <h1>Beetles, revisited</h1>
    <p>The same component, one level deeper.</p>
  </article>
</section>
```

Die berechneten Überschriftsebenen sind:

- `Insect guide`: Ebene 1
- `Beetles`: Ebene 1
- `Appendix`: Ebene 2
- `Beetles, revisited`: Ebene 2

### Akkumulierung von Versätzen

Die Versätze von verschachtelten Elementen werden zusammenaddiert, sodass dieses `<h2>` eine berechnete Überschriftsebene von 5 hat:

```html
<article headingoffset="1">
  <section headingoffset="2">
    <h2>Level 5</h2>
  </section>
</article>
```

### Anhalten des Versatzes

Ein Element mit dem [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) Attribut verhindert, dass die Versätze seiner Vorfahren auf seine Nachkommen angewendet werden. Dies ist nützlich für Inhalte, die nicht Teil der umgebenden Dokumentstruktur sind, wie ein Dialog:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
  </dialog>
</section>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) globales Attribut
- [`<h1>`–`<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elemente
- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut
- [ARIA: heading role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
