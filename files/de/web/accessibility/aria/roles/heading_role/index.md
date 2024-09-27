---
title: "ARIA: heading Rolle"
slug: Web/Accessibility/ARIA/Roles/heading_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `heading` Rolle definiert dieses Element als Überschrift einer Seite oder eines Abschnitts, wobei das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) für mehr Struktur sorgt.

## Beschreibung

Die heading-Rolle zeigt unterstützenden Technologien an, dass dieses Element wie eine Überschrift behandelt werden soll. Screenreader würden den Text vorlesen und darauf hinweisen, dass er wie eine Überschrift formatiert ist. Zusätzlich gibt die Ebene assistiven Technologien an, welchen Teil der Seitenstruktur diese Überschrift repräsentiert. Eine Ebene-1-Überschrift, angezeigt mit `aria-level="1"`, weist in der Regel auf die Hauptüberschrift einer Seite hin, eine Ebene-2-Überschrift, definiert mit `aria-level="2"`, auf den ersten Unterabschnitt, eine Ebene-3 auf einen Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als die Hauptüberschrift der Seite, angezeigt durch die Ebene 1 über das `aria-level` Attribut. Es wird empfohlen, das Element {{HTMLElement("Heading_Elements", "h1")}} (bis {{HTMLElement("Heading_Elements", "h6")}}) stattdessen zu verwenden.

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : Das `aria-level` Attribut gibt die Überschriftenebene in der Dokumentstruktur an. Wenn keine Ebene vorhanden ist, ist der Standardwert 2.

### Tastaturinteraktionen

Diese Rolle erfordert keine speziellen Tastaturnavigationen. Wie bei jeder Überschrift sorgt das Hinzufügen einer ID dafür, dass sie über Ankerlinks referenziert werden kann, was sie über die Tastatur zugänglich macht.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignis-Handler
  - : Keine.
- Änderung von Attributwerten
  - : In der Regel nicht erforderlich, es sei denn, Inhalt wird dynamisch eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level` Attribute, deren Werte mit der restlichen Dokumentstruktur konsistent sind.

> [!NOTE]
> Statt ein `<div>` oder `<span>` mit einer `heading` Rolle und `aria-level` zu verwenden, ziehen Sie in Betracht, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} Elemente zu verwenden, um anzugeben, dass dieser Text eine Überschrift ist und welchen Teil der Struktur er darstellt.

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
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verbergen und stattdessen das Label lesen.

Wenn Sie die `heading` Rolle und das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) verwenden müssen, überschreiten Sie nicht Ebene 6, damit Sie konsistent mit HTML bleiben. Obwohl theoretisch höhere Ebenen möglich sind und einige Screenreader dieses unterstützen können, können die Ergebnisse mit anderen Browser- und Screenreader-Kombinationen unvorhersehbar sein.

## Beste Praktiken

Der beste Weg, diese Rolle zu verwenden, ist sie **überhaupt nicht zu verwenden** und stattdessen die nativen Überschriftstags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} wie im obigen Beispiel gezeigt. Die `heading` Rolle und das `aria-level` Attribut sollten nur verwendet werden, um Barrierefreiheit im Nachhinein für alten Code anzupassen, den Sie nicht wesentlich ändern können.

Anstatt die ARIA `heading` Rolle zu verwenden, verwenden Sie das semantische HTML-Element:

| HTML-Element                              | `heading` Rolle                       |
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

## Prioritätenordnung

Die heading-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das `aria-level` Attribut bestimmt zusätzlich, welche Ebene der Überschrift exponiert wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML Abschnitts-Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements)
