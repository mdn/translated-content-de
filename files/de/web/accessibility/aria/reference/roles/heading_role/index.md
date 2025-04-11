---
title: "ARIA: heading-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `heading`-Rolle definiert dieses Element als eine Überschrift einer Seite oder eines Abschnitts, wobei das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut für mehr Struktur sorgt.

## Beschreibung

Die heading-Rolle zeigt unterstützenden Technologien an, dass dieses Element wie eine Überschrift behandelt werden soll. Bildschirmlesegeräte würden den Text lesen und verdeutlichen, dass er wie eine Überschrift formatiert ist. Zusätzlich zeigt die Ebene den unterstützenden Technologien, welchen Teil der Seitenstruktur diese Überschrift repräsentiert. Eine Überschrift der Ebene 1, angezeigt durch `aria-level="1"`, zeigt gewöhnlich die Hauptüberschrift einer Seite, eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, den ersten Unterabschnitt an, und eine Überschrift der Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als Hauptüberschrift der Seite, angezeigt durch die Ebene 1 über das `aria-level`-Attribut. Verwenden Sie stattdessen das {{HTMLElement("Heading_Elements", "h1")}}-Element (bis {{HTMLElement("Heading_Elements", "h6")}}).

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Das `aria-level`-Attribut gibt die Überschriftenebene in der Dokumentstruktur an. Wenn keine Ebene vorhanden ist, ist der Standardwert 2.

### Tastaturinteraktionen

Diese Rolle erfordert keine speziellen Tastaturnavigationen. Wie bei jeder Überschrift sorgt eine ID dafür, dass sie über Ankerlinks referenziert werden kann, was ihre Zugänglichkeit über die Tastatur gewährleistet.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Keine.
- Änderung von Attributwerten
  - : In der Regel nicht erforderlich, es sei denn, Inhalte werden dynamisch eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte mit der restlichen Dokumentstruktur konsistent sind.

> [!NOTE]
> Anstatt ein `<div>` oder `<span>` mit einer `heading`-Rolle und `aria-level` zu verwenden, ziehen Sie in Betracht, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Elemente zu nutzen, um anzuzeigen, dass dieser Text eine Überschrift ist und welchen Teil der Struktur er repräsentiert.

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

Stattdessen sollten Sie jedoch Folgendes tun:

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
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verbergen und stattdessen das Label lesen.

Wenn Sie die `heading`-Rolle und das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut verwenden müssen, überschreiten Sie nicht Ebene 6, um mit HTML konsistent zu bleiben. Obwohl theoretisch höhere Ebenen möglich sind und einige Bildschirmlesegeräte sie unterstützen können, können die Ergebnisse mit anderen Browser- und Bildschirmleser-Kombinationen unvorhersehbar sein.

## Beste Praktiken

Die beste Nutzung dieser Rolle besteht darin **sie gar nicht zu verwenden**, und stattdessen die nativen Überschriftstags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} wie im obigen Beispiel zu verwenden. Die `heading`-Rolle und das `aria-level`-Attribut sollten nur verwendet werden, um die Barrierefreiheit in Legacy-Code, den Sie nicht grundlegend ändern können, nachzurüsten.

Anstatt die ARIA `heading`-Rolle zu verwenden, nutzen Sie das semantische HTML-Element:

| HTML-Element                              | `heading`-Rolle                       |
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

Die `heading`-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das `aria-level`-Attribut bestimmt außerdem, welche Überschriftenebene dargestellt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnittsüberschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
