---
title: "ARIA: heading-Rolle"
short-title: heading
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: 4550055f1afc5fb084d33f6e5a7910b7066e20c7
---

Die `heading`-Rolle definiert dieses Element als Überschrift einer Seite oder eines Abschnitts, wobei das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) für mehr Struktur sorgt.

## Beschreibung

Die heading-Rolle zeigt assistiven Technologien an, dass dieses Element wie eine Überschrift behandelt werden soll. Screenreader würden den Text lesen und angeben, dass er als Überschrift formatiert ist. Darüber hinaus gibt das Level den assistiven Technologien an, welchen Teil der Seitenstruktur diese Überschrift darstellt. Eine Überschrift der Stufe 1, gekennzeichnet durch `aria-level="1"`, weist normalerweise auf die Hauptüberschrift einer Seite hin. Eine Überschrift der Stufe 2, definiert mit `aria-level="2"`, zeigt den ersten Unterabschnitt an, ein Level 3 ist ein Unterabschnitt davon, und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als die Hauptüberschrift der Seite, gekennzeichnet durch Level 1 über das `aria-level`-Attribut. Vermeiden Sie dies zu Gunsten des Elements {{HTMLElement("Heading_Elements", "h1")}} (bis {{HTMLElement("Heading_Elements", "h6")}}).

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Das `aria-level`-Attribut gibt die Überschriftenebene in der Dokumentstruktur an. Dieses Attribut ist erforderlich: Autoren müssen die richtige Veschachtelungsebene angeben, um sicherzustellen, dass Elemente mit einer `heading`-Rolle in einer logischen Gliederung organisiert sind. Wenn das Attribut fälschlicherweise nicht angegeben ist, verwenden Browser einen [Standardwert von 2 als Fallback](https://w3c.github.io/aria/#authorErrorDefaultValuesTable).

### Tastaturinteraktionen

Diese Rolle erfordert keine speziellen Tastaturnavigationsoptionen. Wie bei jeder Überschrift stellt das Vergeben einer ID sicher, dass sie über Ankerlinks referenziert werden kann und über die Tastatur zugänglich ist.

### Erforderliche JavaScript-Features

- Erforderliche Event-Handler
  - : Keine.
- Ändern von Attributwerten
  - : Normalerweise nicht erforderlich, es sei denn, es wird dynamisch Inhalt eingefügt. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte mit der restlichen Dokumentstruktur übereinstimmen.

> [!NOTE]
> Anstatt einen `<div>` oder `<span>` mit einer `heading`-Rolle und `aria-level` zu verwenden, ziehen Sie in Betracht, die nativen Elemente {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} zu verwenden, um anzuzeigen, dass es sich bei diesem Text um eine Überschrift handelt und welchen Teil der Struktur sie darstellt.

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

Sie sollten jedoch stattdessen Folgendes tun:

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
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor assistiven Technologien verbergen, die stattdessen das Label lesen.

Wenn Sie die `heading`-Rolle und das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) verwenden müssen, überschreiten Sie nicht Level 6, um mit HTML konsistent zu bleiben. Obwohl Sie theoretisch höhere Level verwenden können und einige Screenreader diese vielleicht unterstützen, können die Ergebnisse bei anderen Browser- und Screenreader-Kombinationen unvorhersehbar sein.

## Best Practices

Der beste Weg, diese Rolle zu verwenden, besteht darin, **sie gar nicht zu verwenden**, sondern stattdessen die nativen Überschriften-Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} zu verwenden, wie im obigen Beispiel gezeigt. Die Verwendung der `heading`-Rolle und des `aria-level`-Attributs sollte nur dazu dienen, Barrierefreiheit in alten Code nachträglich einzufügen, an dem Sie keine größeren Änderungen vornehmen können.

Anstelle der ARIA `heading`-Rolle verwenden Sie das semantische HTML-Element:

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

Die heading-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Zusätzlich bestimmt das Attribut `aria-level`, welches Überschriftenlevel angezeigt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnitts-Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
