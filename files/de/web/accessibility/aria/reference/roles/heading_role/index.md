---
title: "ARIA: heading-Rolle"
short-title: heading
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `heading` kennzeichnet dieses Element als Überschrift einer Seite oder eines Abschnitts. Das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) gibt seine Ebene innerhalb der Struktur an.

## Beschreibung

Die Rolle `heading` signalisiert assistiven Technologien, dass dieses Element wie eine Überschrift behandelt werden soll. Screenreader lesen den Text vor und weisen darauf hin, dass er als Überschrift formatiert ist. Die Ebene zeigt assistiven Technologien außerdem, welchen Teil der Seitenstruktur die Überschrift repräsentiert. Eine Überschrift der Ebene 1, gekennzeichnet durch `aria-level="1"`, ist gewöhnlich die Hauptüberschrift einer Seite. Eine Überschrift der Ebene 2 mit `aria-level="2"` kennzeichnet den ersten Unterabschnitt, eine Überschrift der Ebene 3 einen Unterabschnitt davon und so weiter.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

Damit wird der Text im `<div>` als Hauptüberschrift der Seite festgelegt, da das Attribut `aria-level` die Ebene 1 angibt. Verwenden Sie stattdessen vorzugsweise ein Element von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}}.

```html
<h1>This is a main page heading</h1>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Das Attribut `aria-level` gibt die Ebene der Überschrift innerhalb der Dokumentstruktur an. Dieses Attribut ist erforderlich: Autoren müssen die richtige Verschachtelungsebene angeben, damit Elemente mit der `role` `heading` eine logische Gliederung bilden. Fehlt das Attribut irrtümlich, verwenden Browser einen [Ersatzwert von 2](https://w3c.github.io/aria/#authorErrorDefaultValuesTable).

### Tastaturinteraktionen

Diese Rolle erfordert keine besondere Tastaturnavigation. Wie bei jeder Überschrift sorgt eine ID dafür, dass Ankerlinks auf sie verweisen können und sie so über die Tastatur erreichbar ist.

### Erforderliche JavaScript-Funktionen

- Erforderliche Event-Handler
  - : Keine.
- Ändern von Attributwerten
  - : Normalerweise nicht erforderlich, außer wenn Inhalte dynamisch eingefügt werden. In diesem Fall benötigen die neu hinzugefügten Überschriften `aria-level`-Attribute, deren Werte zur übrigen Dokumentstruktur passen.

> [!NOTE]
> Statt ein `<div>` oder `<span>` mit der Rolle `heading` und `aria-level` zu verwenden, sollten Sie Elemente von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} verwenden. Diese kennzeichnen den Text als Überschrift und geben seine Position innerhalb der Struktur an.

## Vorrang

Die Rolle `heading` überschreibt die native semantische Bedeutung des Elements, auf das sie angewendet wird. Das Attribut `aria-level` bestimmt zusätzlich, welche Überschriftenebene bereitgestellt wird.

## Aspekte der Barrierefreiheit

> [!WARNING]
> Wenn Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, wird der Inhalt Ihrer Überschrift vor assistiven Technologien verborgen: Statt der Überschrift wird das Label vorgelesen.

Wenn Sie die Rolle `heading` und das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) verwenden müssen, sollten Sie keine Ebene über 6 wählen, um mit HTML konsistent zu bleiben. Theoretisch sind zwar höhere Ebenen möglich und manche Screenreader unterstützen sie möglicherweise, doch die Ergebnisse können bei anderen Kombinationen aus Browsern und Screenreadern unvorhersehbar sein.

## Bewährte Vorgehensweisen

Die beste Vorgehensweise besteht darin, diese Rolle **gar nicht zu verwenden** und stattdessen die nativen Überschriftenelemente von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} zu nutzen, wie im folgenden Beispiel gezeigt. Die Rolle `heading` und das Attribut `aria-level` sollten nur verwendet werden, um die Barrierefreiheit von bestehendem Code zu verbessern, an dem Sie keine größeren Änderungen vornehmen können.

Verwenden Sie statt der ARIA-Rolle `heading` das entsprechende semantische HTML-Element:

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

Stattdessen sollten Sie jedoch Folgendes verwenden:

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<h1>` bis `<h6>`: Die HTML-Elemente für Abschnittsüberschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
