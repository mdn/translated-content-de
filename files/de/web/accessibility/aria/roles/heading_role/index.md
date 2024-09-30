---
title: "ARIA: heading-Rolle"
slug: Web/Accessibility/ARIA/Roles/heading_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `heading`-Rolle definiert dieses Element als eine Überschrift für eine Seite oder einen Abschnitt, wobei das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut für mehr Struktur sorgt.

## Beschreibung

Die heading-Rolle zeigt unterstützenden Technologien an, dass dieses Element wie eine Überschrift behandelt werden soll. Screenreader würden den Text lesen und anzeigen, dass er wie eine Überschrift formatiert ist. Zusätzlich gibt das Level den unterstützenden Technologien an, welchen Teil der Seitenstruktur diese Überschrift repräsentiert. Eine Überschrift der Ebene 1, angezeigt mit `aria-level="1"`, weist üblicherweise auf die Hauptüberschrift einer Seite hin, eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, auf den ersten Unterabschnitt, eine Überschrift der Ebene 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als Hauptüberschrift der Seite, angezeigt als Ebene 1 durch das `aria-level`-Attribut. Es wird empfohlen, stattdessen das {{HTMLElement("Heading_Elements", "h1")}} (bis {{HTMLElement("Heading_Elements", "h6")}}) Element zu verwenden.

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : Das `aria-level`-Attribut gibt die Überschriftsebene in der Dokumentstruktur an. Wenn kein Level vorhanden ist, ist der Standardwert 2.

### Tastaturinteraktionen

Diese Rolle erfordert keine besonderen Tastaturnavigationen. Wie bei jeder Überschrift stellt das Zuweisen einer ID sicher, dass sie von Ankerlinks referenziert werden kann, was sie über die Tastatur zugänglich macht.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Keine.
- Ändern von Attributwerten
  - : In der Regel nicht erforderlich, es sei denn, es wird dynamisch Inhalt eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte mit dem Rest der Dokumentstruktur konsistent sind.

> [!NOTE]
> Anstelle eines `<div>` oder `<span>` mit einer `heading`-Rolle und `aria-level` sollten Sie in Erwägung ziehen, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Elemente zu verwenden, um anzuzeigen, dass es sich bei diesem Text um eine Überschrift handelt und welchen Teil der Struktur sie repräsentieren.

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

## Barrierefreiheitshinweise

> [!WARNING]
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verstecken, da stattdessen das Label gelesen wird.

Wenn Sie die `heading`-Rolle und das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attribut verwenden müssen, sollten Sie nicht über Ebene 6 hinausgehen, um mit HTML konsistent zu bleiben. Obwohl Sie theoretisch höher gehen können und einige Screenreader dies unterstützen könnten, können die Ergebnisse bei anderen Browser- und Screenreader-Kombinationen unvorhersehbar sein.

## Beste Praktiken

Der beste Weg, diese Rolle zu verwenden, ist, sie überhaupt nicht zu verwenden und stattdessen die nativen Überschriften-Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} wie im obigen Beispiel gezeigt zu nutzen. Die `heading`-Rolle und das `aria-level`-Attribut sollten nur verwendet werden, um Zugänglichkeit im Nachhinein in veralteten Code einzubauen, den Sie nicht erheblich ändern können.

Statt die ARIA `heading`-Rolle zu verwenden, verwenden Sie das semantische HTML-Element:

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

## Prioritätenreihenfolge

Die heading-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das `aria-level`-Attribut bestimmt zusätzlich, welches Überschriftsniveau angezeigt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML Abschnitts-Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements)
