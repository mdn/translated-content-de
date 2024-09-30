---
title: "ARIA: contentinfo Rolle"
slug: Web/Accessibility/ARIA/Roles/contentinfo_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `contentinfo`-Rolle definiert einen Footer, der identifizierende Informationen wie Urheberrechtshinweise, Navigationslinks und Datenschutzbestimmungen enthält und in jedem Dokument einer Website zu finden ist. Dieser Abschnitt wird häufig als Footer bezeichnet.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist ein Website-Footer. Es wird empfohlen, stattdessen das {{HTMLElement('footer')}}-Element zu verwenden:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die `contentinfo`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die dazu verwendet wird, einen Seitenfuß zu identifizieren. Landmarken können von unterstützender Technologie verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten pro Seite nur eine `contentinfo`-Landmarke auf oberster Ebene enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch Verwendung des {{HTMLElement('footer')}}-Elements oder durch Deklaration von `role="contentinfo"` erstellt wird. `contentinfo`-Landmarken, die in Inhalten vorhanden sind, die über {{HTMLElement('iframe')}} eingebettet sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten immer das korrekte semantische HTML-Element bevorzugt verwenden, anstatt ARIA zu nutzen, und sicherstellen, dass sie mit {{HTMLElement('footer#accessibility', 'bekannten Problemen')}} in VoiceOver testen.

## Beispiele

```html
<body>
  <!-- other page content -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">Web Technologies</a></li>
      <li><a href="#">Learn Web Development</a></li>
      <li><a href="#">About MDN</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
    <p>
      © 2005-2012 Mozilla and individual contributors. Content is available
      under <a href="#">these licenses</a>.
    </p>
  </div>
</body>
```

## Barrierefreiheitsbedenken

### Sparsamer Einsatz

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, größere gesamte Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann im Screenreader "Rauschen" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als direkter Nachkomme des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Footer

Verwenden Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken im Fußbereich des Dokuments. Verwenden Sie stattdessen andere [Inhaltsselektionselemente](/de/docs/Web/HTML/Element#content_sectioning).

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es mehr als eine `contentinfo`-Landmarke oder ein {{HTMLElement('footer')}}-Element in einem Dokument gibt, versehen Sie jede Landmarke mit einem Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut. Dieses Label ermöglicht es Nutzern unterstützender Technologien, schnell den Zweck jeder Landmarke zu verstehen.

```html
<body>
  …

  <article>
    <h2>Everyday Pad Thai</h2>
    <!-- article content -->
    <footer aria-label="Everyday Pad Thai metadata">
      <p>
        Posted on <time datetime="2021-09-23 12:17">September 23</time> by
        <a href="#">Lisa</a>.
      </p>
    </footer>
  </article>

  …

  <footer aria-label="Footer">
    <!-- footer content -->
  </footer>
</body>
```

#### Redundante Beschreibungen

Screenreader kündigen die Art der Rolle, die die Landmarke hat, an. Deshalb müssen Sie nicht beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel kann eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als "contentinfo footer" angekündigt werden.

## Beste Praktiken

### HTML bevorzugen

Wenn es sich um einen direkten Nachkommen des {{HTMLElement('body')}} handelt, wird die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommunizieren, dass ein Abschnitt die Rolle `contentinfo` hat (außer bei einem {{HTMLElement('footer#accessibility', 'bekannten Problem')}} in VoiceOver). Wenn möglich, bevorzugen Sie die Verwendung von `<footer>`. Beachten Sie, dass ein `footer`-Element, das in einem `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist, nicht als `contentinfo` betrachtet wird.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browsererweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren und es auch Nicht-Screenreader-Nutzern ermöglichen, schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Using HTML sections and outlines](/de/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
