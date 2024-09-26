---
title: "ARIA: Überschrift-Rolle"
slug: Web/Accessibility/ARIA/Roles/heading_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `heading`-Rolle definiert dieses Element als Überschrift einer Seite oder eines Abschnitts, wobei das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut für mehr Struktur sorgt.

## Beschreibung

Die Überschrift-Rolle zeigt unterstützenden Technologien an, dass dieses Element wie eine Überschrift behandelt werden soll. Screenreader würden den Text vorlesen und anzeigen, dass er wie eine Überschrift formatiert ist. Zusätzlich gibt das Level an, welchen Teil der Seitenstruktur diese Überschrift darstellt. Eine Überschrift der Ebene 1, angezeigt durch `aria-level="1"`, weist normalerweise auf die Hauptüberschrift einer Seite hin, eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, die erste Unterabschnittsüberschrift, eine Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als Hauptüberschrift der Seite, angezeigt durch die Ebene 1 über das `aria-level`-Attribut. Verwenden Sie stattdessen das {{HTMLElement("Heading_Elements", "h1")}}-Element (bis {{HTMLElement("Heading_Elements", "h6")}}).

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : Das `aria-level`-Attribut gibt die Überschriftenebene in der Dokumentstruktur an. Wenn keine Ebene vorhanden ist, ist der Standardwert 2.

### Tastaturinteraktionen

Diese Rolle erfordert keine speziellen Tastaturnavigationen. Wie bei jeder Überschrift stellt eine ID sicher, dass sie über Ankerlinks referenziert werden kann, was ihre Zugänglichkeit über die Tastatur gewährleistet.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignis-Handler
  - : Keine.
- Ändern von Attributwerten
  - : Üblicherweise nicht erforderlich, es sei denn, es wird dynamisch Inhalt eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte konsistent mit der restlichen Dokumentstruktur sind.

> [!NOTE]
> Anstatt ein `<div>` oder `<span>` mit einer `heading`-Rolle und `aria-level` zu verwenden, sollten Sie in Erwägung ziehen, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}-Elemente zu nutzen, um anzugeben, dass dieser Text eine Überschrift ist und welchen Teil der Struktur er darstellt.

## Beispiele

Das Folgende zeigt eine typische Seitenstruktur.

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

Stattdessen sollten Sie so vorgehen:

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
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verbergen, indem das Label statt der Überschrift gelesen wird.

Wenn Sie die `heading`-Rolle und das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut verwenden müssen, sollten Sie nicht über Ebene 6 hinausgehen, um konsistent mit HTML zu bleiben. Obwohl es theoretisch möglich ist, höher zu gehen, und einige Screenreader dies unterstützen, können die Ergebnisse mit anderen Browser- und Screenreader-Kombinationen unvorhersehbar sein.

## Best Practices

Der beste Weg, diese Rolle zu verwenden, ist, **sie gar nicht zu verwenden**, und stattdessen die nativen Überschriftstags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} wie im obigen Beispiel gezeigt zu verwenden. Die `heading`-Rolle und das `aria-level`-Attribut sollten nur genutzt werden, um Barrierefreiheit in älteren Code einzubauen, den Sie nicht wesentlich ändern können.

Anstatt die ARIA `heading`-Rolle zu verwenden, nutzen Sie das semantische HTML-Element:

| HTML-Element                              | `heading`-Rolle                        |
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

## Reihenfolge der Vorrangigkeit

Die Überschrift-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das `aria-level`-Attribut legt zusätzlich fest, welche Ebene der Überschrift angezeigt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnittsüberschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements)