---
title: "ARIA: Rolle `heading`"
short-title: heading
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `heading` definiert dieses Element als eine Überschrift für eine Seite oder einen Abschnitt, wobei das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) für mehr Struktur sorgt.

## Beschreibung

Die Rolle `heading` signalisiert unterstützenden Technologien, dass dieses Element wie eine Überschrift behandelt werden sollte. Bildschirmleser würden den Text lesen und angeben, dass er wie eine Überschrift formatiert ist. Darüber hinaus weist die Ebene unterstützenden Technologien darauf hin, welchen Teil der Seitenstruktur diese Überschrift repräsentiert. Eine Überschrift der Ebene 1, die mit `aria-level="1"` gekennzeichnet ist, deutet normalerweise auf die Hauptüberschrift einer Seite hin, eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, auf den ersten Unterabschnitt, eine Ebene-3-Überschrift ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als Hauptüberschrift der Seite, angezeigt durch die Ebene 1 über das `aria-level` Attribut. Verwenden Sie stattdessen das {{HTMLElement("Heading_Elements", "h1")}} (bis {{HTMLElement("Heading_Elements", "h6")}}) Element.

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Das Attribut `aria-level` gibt die Überschriftenebene in der Dokumentenstruktur an. Wenn keine Ebene vorhanden ist, ist der Standardwert 2.

### Tastaturinteraktionen

Diese Rolle erfordert keine speziellen Tastaturnavigationen. Wie bei jeder Überschrift stellt das Vergeben einer ID sicher, dass sie von Ankerlinks referenziert werden kann und somit über die Tastatur zugänglich ist.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Keine.
- Änderungen von Attributwerten
  - : In der Regel nicht erforderlich, es sei denn, Inhalte werden dynamisch eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level` Attribute, deren Werte mit der restlichen Dokumentstruktur übereinstimmen.

> [!NOTE]
> Anstatt ein `<div>` oder `<span>` mit einer `heading` Rolle und `aria-level` zu verwenden, ziehen Sie in Betracht, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Elemente zu verwenden, um anzuzeigen, dass dieser Text eine Überschrift ist und welchen Teil der Struktur er repräsentiert.

## Beispiele

Das folgende zeigt eine typische Seitenstruktur.

```html
<div id="container">
  <div role="heading" aria-level="1">The main page heading</div>
  <p>This article is about showing a page structure.</p>
  <div role="heading" aria-level="2">Introduction</div>
  <p>An introductory text.</p>
  <div role="heading" aria-level="2">Chapter 1</div>
  <p>Text</p>
  <div role="heading" aria-level="3">Chapter 1.1</div>
  <p>More text in a sub section.</p>
</div>
```

Stattdessen sollten Sie jedoch folgendes tun:

```html
<div id="container">
  <h1>The main page heading</h1>
  <p>This article is about showing a page structure.</p>
  <h2>Introduction</h2>
  <p>An introductory text.</p>
  <h2>Chapter 1</h2>
  <p>Text</p>
  <h3>Chapter 1.1</h3>
  <p>More text in a sub section.</p>
</div>
```

## Barrierefreiheitsbedenken

> [!WARNING]
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verbergen, die stattdessen das Label lesen werden.

Wenn Sie die Rolle `heading` und das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) verwenden müssen, überschreiten Sie nicht die Ebene 6, um konsistent mit HTML zu bleiben. Obwohl Sie theoretisch höher gehen können und einige Bildschirmleser dies unterstützen, können die Ergebnisse mit anderen Browser- und Bildschirmleser-Kombinationen unvorhersehbar sein.

## Beste Praktiken

Der beste Weg, diese Rolle zu nutzen, besteht darin, sie **überhaupt nicht zu verwenden**, sondern stattdessen die nativen Überschriften-Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} zu verwenden, wie im obigen Beispiel gezeigt. Die Rolle `heading` und das Attribut `aria-level` sollten nur verwendet werden, um Barrierefreiheit auf alten Code nachzurüsten, den Sie nicht grundlegend ändern können.

Anstatt die ARIA `heading` Rolle zu nutzen, verwenden Sie das semantische HTML-Element:

| HTML-Element                              | Rolle `heading`                       |
| ----------------------------------------- | ------------------------------------- |
| {{HTMLElement("Heading_Elements", "h1")}} | `<div role="heading" aria-level="1">` |
| {{HTMLElement("Heading_Elements", "h2")}} | `<div role="heading" aria-level="2">` |
| {{HTMLElement("Heading_Elements", "h3")}} | `<div role="heading" aria-level="3">` |
| {{HTMLElement("Heading_Elements", "h4")}} | `<div role="heading" aria-level="4">` |
| {{HTMLElement("Heading_Elements", "h5")}} | `<div role="heading" aria-level="5">` |
| {{HTMLElement("Heading_Elements", "h6")}} | `<div role="heading" aria-level="6">` |

### Zusätzliche Vorteile

Keine.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Die Rolle `heading` überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das Attribut `aria-level` bestimmt zusätzlich, welche Überschriftenebene offengelegt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
