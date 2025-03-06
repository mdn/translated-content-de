---
title: "ARIA: heading Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `heading`-Rolle definiert dieses Element als Überschrift für eine Seite oder einen Abschnitt, wobei das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut für mehr Struktur sorgt.

## Beschreibung

Die heading-Rolle weist unterstützenden Technologien darauf hin, dass dieses Element wie eine Überschrift behandelt werden sollte. Bildschirmlesegeräte würden den Text lesen und anzeigen, dass er wie eine Überschrift formatiert ist. Außerdem zeigt die Stufe den unterstützenden Technologien an, welchen Teil der Seitenstruktur diese Überschrift repräsentiert. Eine Überschrift der Ebene 1, angezeigt durch `aria-level="1"`, kennzeichnet in der Regel die Hauptüberschrift einer Seite, eine Überschrift der Ebene 2, definiert mit `aria-level="2"`, den ersten Unterabschnitt, eine Überschrift der Ebene 3 ist ein Unterabschnitt davon, usw.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Dies definiert den Text im `<div>` als Hauptüberschrift der Seite, gekennzeichnet durch Ebene 1 über das `aria-level`-Attribut. Verwenden Sie stattdessen das {{HTMLElement("Heading_Elements", "h1")}}-Element (bis {{HTMLElement("Heading_Elements", "h6")}}).

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Das `aria-level`-Attribut gibt die Überschriftenebene in der Dokumentstruktur an. Wenn keine Ebene vorhanden ist, ist der Standardwert 2.

### Tastatur-Interaktionen

Diese Rolle erfordert keine spezielle Tastaturnavigation. Wie bei jeder Überschrift stellt eine ID sicher, dass sie von Ankerlinks referenziert werden kann und somit per Tastatur erreichbar ist.

### Erforderliche JavaScript-Funktionen

- Erforderliche Ereignishandler
  - : Keine.
- Änderung von Attributwerten
  - : Normalerweise nicht erforderlich, es sei denn, Sie fügen Inhalte dynamisch ein. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte mit der restlichen Dokumentstruktur übereinstimmen.

> [!NOTE]
> Statt ein `<div>` oder `<span>` mit einer `heading`-Rolle und `aria-level` zu verwenden, ziehen Sie in Betracht, native {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}-Elemente zu verwenden, um anzugeben, dass dieser Text eine Überschrift ist und welchen Teil der Struktur er darstellt.

## Beispiele

Folgendes zeigt eine typische Seitenstruktur.

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

Stattdessen sollten Sie jedoch Folgendes machen:

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
> Die Verwendung von [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wird den Inhalt Ihrer Überschrift vor unterstützenden Technologien verbergen, wobei stattdessen die Beschriftung gelesen wird.

Wenn Sie die `heading`-Rolle und das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut verwenden müssen, gehen Sie nicht über Ebene 6 hinaus, damit Sie mit HTML konsistent sind. Obwohl Sie theoretisch höher gehen können und einige Bildschirmlesegeräte dies unterstützen mögen, können die Ergebnisse mit anderen Browser- und Bildschirmlesegeräte-Kombinationen unvorhersehbar sein.

## Beste Praktiken

Die beste Art, diese Rolle zu verwenden, ist **sie gar nicht zu verwenden** und stattdessen die nativen Überschrift-Tags {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} wie im obigen Beispiel gezeigt zu nutzen. Die `heading`-Rolle und das `aria-level`-Attribut sollten nur verwendet werden, um Barrierefreiheit bei Legacy-Code nachzurüsten, den Sie nicht wesentlich ändern können.

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

## Prioritätsordnung

Die heading-Rolle überschreibt die native semantische Bedeutung des Elements, für das sie verwendet wird. Das `aria-level`-Attribut bestimmt zusätzlich, welche Ebene der Überschrift angezeigt wird.

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Abschnittsüberschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements)
